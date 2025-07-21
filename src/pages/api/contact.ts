import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Configuración del transportador de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: import.meta.env.EMAIL_USER,
    pass: import.meta.env.EMAIL_PASS
  }
});

// Función para validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get('email');

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({
        message: "El email es requerido"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({
        message: "El email no es válido"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    // Enviar email
    try {
      await transporter.sendMail({
        from: import.meta.env.EMAIL_USER,
        to: import.meta.env.EMAIL_TO,
        subject: 'Nuevo contacto desde la web',
        text: `Nuevo contacto recibido de: ${email}`,
        html: `
          <h1>Nuevo contacto desde la web</h1>
          <p>Email: ${email}</p>
          <p>Fecha: ${new Date().toLocaleString()}</p>
        `
      });
    } catch (error) {
      console.error('Error al enviar email:', error);
      return new Response(JSON.stringify({
        message: "Error al enviar el mensaje. Por favor, intenta nuevamente."
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    // Aquí puedes agregar la lógica que necesites:
    // - Validar el email
    // - Guardar en base de datos
    // - Enviar notificación
    console.log('Nuevo contacto:', email);

    // Simulamos un pequeño delay para dar feedback al usuario
    await new Promise(resolve => setTimeout(resolve, 1000));
   
    return new Response(JSON.stringify({
      message: "¡Gracias! Me pondré en contacto contigo pronto."
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: "Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente."
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
