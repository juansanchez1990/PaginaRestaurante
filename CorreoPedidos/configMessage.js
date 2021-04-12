const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jrsmarathon@gmail.com', // Cambialo por tu email
            pass: 'manchestercampeon' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `"${formulario.nombre}" <${formulario.correo}>`,
        to: `${formulario.correo}`, // Cambia esta parte por el destinatario
        subject: `Comentario`,
        html: `
    <strong>E-mail:</strong> Hemos recibido su correo  <br/>
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.apellido}  <br/>
    <strong>E-mail:</strong> ${formulario.correo}  <br/>
    <strong>E-mail:</strong> ${formulario.asunto}  <br/>
    <strong>E-mail:</strong> ${formulario.mensaje}  <br/>
    `
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}