const nodemailer = require("nodemailer");

// send email
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "biljettsystemet@gmail.com",
    pass: "biljett123",
  },
});

async function sendMail(to, subject, order) {
  const totalPrice = order.tickets.reduce(
    (acc, ticket) => acc + ticket.price * ticket.purchased
  , 0);

  console.log(order);
  const html = `<p>Tack för ditt köp hos Biljetta!</p><p>Här är en orderbekräftelse på ditt köp.</p>
  <p>Event: ${order.event.longTitle}</p>
  <p>Ditt ordernummer är ${order.id}</p>
    <div>Biljetter köpta: ${order.tickets.reduce(
      (acc, ticket) =>
        `${acc}<p>${ticket.name} x${ticket.purchased}, pris per biljett: ${ticket.price}kr</p>`
    , "")}</div>
    <p>Total kostnad: ${totalPrice}kr</p>
    `;

  return new Promise((resolve, reject) => {
    var mailOptions = {
      from: "biljettsystemet@gmail.com",
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email: " + error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });
}

exports.sendMail = sendMail;
