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
    const name = data.get('name');
    const email = data.get('email');
    const privacyConsent = data.get('privacy_consent');

    // Validar campos requeridos
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return new Response(JSON.stringify({
        message: "El nombre es requerido"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

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

    if (!privacyConsent) {
      return new Response(JSON.stringify({
        message: "Debes aceptar el aviso legal y la política de privacidad"
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
        subject: `Nuevo contacto desde la web - ${name}`,
        text: `Nuevo contacto recibido de: ${name} (${email})`,
        html: `
          <h1>Nuevo contacto desde la web</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Acepta términos:</strong> Sí</p>
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

    // Log del contacto recibido
    console.log('Nuevo contacto:', { name: name.trim(), email });

    // Simulamos un pequeño delay para dar feedback al usuario
    await new Promise(resolve => setTimeout(resolve, 1000));
   
    return new Response(JSON.stringify({
      message: `¡Mensaje enviado correctamente! Gracias ${name.trim()}, me pondré en contacto contigo pronto.`
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
