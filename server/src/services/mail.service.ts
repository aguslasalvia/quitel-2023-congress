import { createTransport } from "nodemailer";

// Email configuration
const mail = createTransport({
  host: "smtp.gmail.com",
  port: 465, // Default Gmail SMTP  port
  secure: true,
  auth: {
    user: process.env.MAIL_USER, // Sender email
    pass: process.env.MAIL_PASS, // Password created from gmail for apps
  },
});

// Email send method
export const sendMail = (
  receiver: any,
  message: string,
  subject: string,
): void => {
  // Mail individual options
  let mailOptions = {
    from: process.env.MAIL_USER,
    to: receiver["email"], // receiver
    subject: subject,
    text: `${receiver["firstName"]} ${receiver["lastName"]} : \n ${message}`,
  };

  mail.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully to: " + receiver["email"]);
    }
  });
};
