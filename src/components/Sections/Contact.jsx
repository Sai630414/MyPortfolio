const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Method Not Allowed",
      }),
    };
  }

  try {
    const { name, email, subject = "", message } = JSON.parse(event.body);

    const cleanName = name?.trim();
    const cleanEmail = email?.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message?.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "All fields are required.",
        }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Invalid email address.",
        }),
      };
    }

    if (cleanMessage.length > 3000) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Message is too long.",
        }),
      };
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Sai Kondareddy Portfolio",
          email: process.env.FROM_EMAIL,
        },

        to: [
          {
            email: process.env.TO_EMAIL,
            name: "Sai Kondareddy",
          },
        ],

        replyTo: {
          email: cleanEmail,
          name: cleanName,
        },

        subject: cleanSubject || "New Portfolio Contact",

        htmlContent: `
          <h2>📩 New Portfolio Contact</h2>

          <table cellpadding="8">
            <tr>
              <td><strong>Name</strong></td>
              <td>${escapeHtml(cleanName)}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${escapeHtml(cleanEmail)}</td>
            </tr>

            <tr>
              <td><strong>Subject</strong></td>
              <td>${escapeHtml(cleanSubject || "No Subject")}</td>
            </tr>
          </table>

          <hr>

          <h3>Message</h3>

          <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error(await response.text());

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Failed to send email.",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully.",
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Something went wrong.",
      }),
    };
  }
};