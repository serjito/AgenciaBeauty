'use server';
import { createTransport } from 'nodemailer';

const user = process.env.EMAIL_TO;
const password = process.env.BREVO_KEY;

export interface EmailData {
  name: string;
  telephone: number;
  email: string;
  terms: boolean;
}

export async function sendEmail(data: EmailData): Promise<Error | boolean> {
  const transporter = createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
      user: user,
      pass: password,
    },
  });

  const mailOptions = {
    from: `${data.email}`,
    to: 'sergiomatadi2@gmail.com',
    subject: 'Nuevo mensaje de contacto Renovat Instalacions SL',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Nuevo mensaje de contacto</title>
      </head>
      <body>
        <h1>Nuevo mensaje de contacto</h1>
        <p>Nombre y apellidos: ${data.name}${data.telephone}</p>
        <p>Email: ${data.email}</p>      
      </body>
      </html>
    `,
  };

  const rest = await transporter.sendMail(mailOptions);
  if (rest.rejected.length > 0) {
    throw new Error('No se pudo enviar el email');
  } else {
    transporter.close();
    return true;
  }
}
