export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, subject = "", message } = req.body || {};

    const cleanName = name?.trim();
    const cleanEmail = email?.trim();
    const cleanSubject = subject?.trim();
    const cleanMessage = message?.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "All required fields (name, email, message) must be provided.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address format.",
      });
    }

    if (cleanMessage.length > 3000) {
      return res.status(400).json({
        success: false,
        message: "Message exceeds maximum length of 3000 characters.",
      });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || "saikondareddypala@gmail.com";
    const toEmail = process.env.TO_EMAIL || "saikondareddypala@gmail.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY environment variable is missing.");
      return res.status(500).json({
        success: false,
        message: "Server configuration error: missing API key.",
      });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact Form",
          email: fromEmail,
        },
        to: [
          {
            email: toEmail,
            name: "Sai Kondareddy",
          },
        ],
        replyTo: {
          email: cleanEmail,
          name: cleanName,
        },
        subject: cleanSubject ? `[Portfolio] ${cleanSubject}` : `New Portfolio Contact Message from ${cleanName}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">📩 New Portfolio Contact</h2>
            <p style="margin-top: 15px;">You received a new message from your portfolio contact form.</p>
            <table cellpadding="8" style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr style="background-color: #f9f9f9;">
                <td style="width: 120px; font-weight: bold;">Name:</td>
                <td>${escapeHtml(cleanName)}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Email:</td>
                <td><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="font-weight: bold;">Subject:</td>
                <td>${escapeHtml(cleanSubject || "No Subject Provided")}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
              <h3 style="color: #111; margin-bottom: 10px;">Message:</h3>
              <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 4px; line-height: 1.6;">${escapeHtml(cleanMessage)}</p>
            </div>
            <footer style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
              Sent via Sai Kondareddy Portfolio Contact API
            </footer>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo API Error:", response.status, errorText);
      return res.status(500).json({
        success: false,
        message: "Failed to send email via provider.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred.",
    });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
