const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'crustandcrumb2021@gmail.com', // Cambialo por tu email
            pass: 'Crust2021' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `"${formulario.fname} 👻" <${formulario.correo}>`,
        to: `'${formulario.correo}'`, // Cambia esta parte por el destinatario
        subject: `Pedido hecho en Crust And Crumb`,
        html: `
    <strong>E-mail:</strong> Hemos recibido su correo  <br/>
    <strong>Nombre:</strong> ${formulario.fname} <br/>
    <strong>E-mail:</strong> ${formulario.correo}  <br/>
    `
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}