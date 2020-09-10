const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "learnwithhector@gmail.com",
    subject: "Welcome to the app",
    text: `Welcome to the app ${name}. Let me know how you get on.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "learnwithhector@gmail.com",
    subject: "Goodbye",
    text: "I am sad that you are leaving.",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
