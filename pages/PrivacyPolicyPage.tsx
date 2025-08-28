import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          Política de Privacidad de TapnPlay.online
        </h1>
        <p><strong>Última actualización:</strong> 27 de agosto de 2025</p>

        <p>
          Bienvenido a TapnPlay.online (en adelante, "nosotros", "nuestro"). Tu privacidad es importante para nosotros.
          Esta Política de Privacidad explica qué información recopilamos y por qué, y cómo la utilizamos y protegemos.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>1. Información que Recopilamos</h2>
        <p>
          Creemos en la simplicidad y en minimizar la recopilación de datos. Por eso, nuestro portal está diseñado para que
          puedas jugar sin necesidad de crear una cuenta.
        </p>
        <p><strong>Lo que NO recopilamos directamente:</strong></p>
        <ul>
          <li>Nombres de usuario</li>
          <li>Direcciones de correo electrónico</li>
          <li>Contraseñas</li>
          <li>Fechas de nacimiento</li>
          <li>Información de perfiles de usuario</li>
          <li>Datos de comunicación (chats, foros)</li>
          <li>Información de transacciones o pagos</li>
        </ul>

        <p><strong>Información que recopilamos de forma automática:</strong></p>
        <ul>
          <li><strong>Puntuación del juego:</strong> Guardamos tus puntuaciones para registrar tu progreso y para las tablas de clasificación.</li>
          <li>
            <strong>Información Técnica:</strong> Al igual que la mayoría de los sitios web, recopilamos información técnica
            que tu navegador nos envía automáticamente. Esto incluye tu dirección IP, tipo de navegador, sistema
            operativo y tipo de dispositivo.
          </li>
        </ul>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>2. Cómo Usamos tu Información</h2>
        <p>Utilizamos la información que recopilamos para los siguientes propósitos:</p>
        <ul>
          <li><strong>Para la funcionalidad del juego:</strong> Para guardar tu puntuación y asegurar que los juegos funcionen correctamente.</li>
          <li><strong>Para análisis y mejoras del servicio:</strong> Usamos la información técnica para entender cómo los visitantes usan nuestro sitio, qué juegos son más populares y cómo podemos mejorar la experiencia general.</li>
          <li><strong>Para mostrar publicidad:</strong> Trabajamos con socios publicitarios para mostrar anuncios en nuestro sitio. La información técnica y las cookies (ver sección 3) ayudan a mostrar anuncios que sean más relevantes para ti.</li>
        </ul>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>3. Cookies y Tecnologías Similares</h2>
        <p>
          Sí, utilizamos cookies. Las cookies son pequeños archivos de texto que se almacenan en tu navegador y nos ayudan a
          que el sitio funcione y a entender cómo se utiliza. Usamos los siguientes tipos de cookies:
        </p>
        <ul>
          <li><strong>Cookies de Rendimiento y Análisis:</strong> Nos ayudan a recopilar datos estadísticos sobre el uso del sitio (ej. Google Analytics) para poder mejorarlo.</li>
          <li><strong>Cookies de Publicidad:</strong> Son utilizadas por nuestros socios publicitarios (ej. Google AdSense) para mostrarte anuncios relevantes.</li>
        </ul>
        <p>
          <strong>¿Cómo gestionar las cookies?</strong> La mayoría de los navegadores web te permiten gestionar tus preferencias
          de cookies a través de la configuración del navegador. Puedes configurar tu navegador para que rechace
          las cookies o te avise antes de aceptarlas. Consulta la sección de 'Ayuda' o 'Configuración' de tu navegador
          para obtener más información.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>4. Con Quién Compartimos tu Información</h2>
        <p>
          No vendemos tu información. Sin embargo, compartimos datos técnicos y de uso con los siguientes tipos de socios:
        </p>
        <ul>
          <li><strong>Proveedores de Analítica:</strong> Como Google Analytics, para analizar el tráfico del sitio web.</li>
          <li><strong>Socios Publicitarios:</strong> Como Google AdSense, para mostrar anuncios en nuestro portal.</li>
        </ul>
        <p>
          Estos terceros tienen sus propias políticas de privacidad sobre cómo usan la información.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>5. Seguridad de los Datos</h2>
        <p>
          Nos tomamos la seguridad en serio. Utilizamos encriptación SSL y medidas de seguridad estándar de la industria
          para proteger los datos durante su transmisión.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>6. Tus Derechos</h2>
        <p>
          Dado que no recopilamos información personal que te identifique directamente, como tu correo electrónico,
          las opciones para gestionar tus datos son principalmente a través del control de las cookies en tu navegador.
          Si tienes alguna pregunta o inquietud sobre tu privacidad, no dudes en contactarnos.
        </p>

        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>7. Privacidad de los Niños</h2>
        <p>
          Nuestro portal de juegos puede ser utilizado por niños. <strong>No recopilamos intencionadamente información
          personal identificable de niños menores de 13 años.</strong>
          Toda la información que recopilamos (puntuaciones y datos técnicos) es anónima. Si eres un padre o tutor
          y crees que tu hijo nos ha proporcionado información personal, por favor contáctanos inmediatamente a
          nuestro correo de soporte para que podamos tomar las medidas necesarias.
        </p>
        
        <h2 style={{ fontSize: '1.8em', marginTop: '30px' }}>8. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en:
          <br />
          <strong>contacttapnplay.online</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

