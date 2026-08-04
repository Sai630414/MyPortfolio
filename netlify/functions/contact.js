const {
    SNSClient,
    PublishCommand,
} = require("@aws-sdk/client-sns");

const sns = new SNSClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

exports.handler = async (event) => {
    try {
        const { name, email, phone, message } = JSON.parse(event.body);

        const sms = `
New Portfolio Contact

Name: ${name}

Email: ${email}

Phone: ${phone}

Message:
${message}
`;

        await sns.send(
            new PublishCommand({
                PhoneNumber: process.env.MY_PHONE_NUMBER,
                Message: sms,
            })
        );

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
            }),
        };
    } catch (err) {
        console.error(err);

        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
            }),
        };
    }
};