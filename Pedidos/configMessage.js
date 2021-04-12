const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jrsmarathon@gmail.com', // Cambialo por tu email
            pass: 'manchestercampeon' // Cambialo por tu password
        }
    });
    console.log("Datos formulario", formulario)
    const mailOptions = {
        from: `"${formulario.Nombre}" <${formulario.Email}>`,
        to: `${formulario.Email}`, // Cambia esta parte por el destinatario
        subject: `Confirmación de pedido`,

        html: `
        
        <img src="logo.png"  width="300" height="300">
    <strong>E-mail:</strong> Hemos recibido su Pedido  <br/>
    <strong>Nombre:</strong> ${formulario.Nombre} <br/>
    `
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}