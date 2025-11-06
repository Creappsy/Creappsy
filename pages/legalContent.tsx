import React from 'react';

export const privacyPolicyContent = (
    <>
      <p>En Creappsy, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Este aviso de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web (independientemente de dónde lo visites) y te informará sobre tus derechos de privacidad y cómo la ley te protege.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Información importante y quiénes somos</h2>
      <p>Este aviso de privacidad tiene como objetivo darte información sobre cómo Creappsy recopila y procesa tus datos personales a través del uso de este sitio web, incluidos los datos que puedas proporcionar a través de este sitio web cuando te registras en nuestro boletín, compras un producto o servicio o participas en una encuesta.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Los datos que recopilamos sobre ti</h2>
      <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti que hemos agrupado de la siguiente manera:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Datos de Identidad</strong> incluyen nombre, apellido, nombre de usuario o identificador similar.</li>
        <li><strong>Datos de Contacto</strong> incluyen dirección de correo electrónico y números de teléfono.</li>
        <li><strong>Datos Técnicos</strong> incluyen la dirección del protocolo de Internet (IP), tus datos de inicio de sesión, el tipo y la versión del navegador, la configuración de la zona horaria y la ubicación, los tipos y versiones de los complementos del navegador, el sistema operativo y la plataforma, y otra tecnología en los dispositivos que utilizas para acceder a este sitio web.</li>
      </ul>
    </>
);

export const termsOfServiceContent = (
    <>
        <p>Bienvenido a Creappsy. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Creappsy. Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando Creappsy si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Cookies</h2>
        <p>Empleamos el uso de cookies. Al acceder a Creappsy, aceptaste utilizar cookies de acuerdo con la Política de Privacidad de Creappsy. La mayoría de los sitios web interactivos utilizan cookies para permitirnos recuperar los detalles del usuario en cada visita. Las cookies son utilizadas por nuestro sitio web para habilitar la funcionalidad de ciertas áreas para facilitar la visita de las personas a nuestro sitio web.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Licencia</h2>
        <p>A menos que se indique lo contrario, Creappsy y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Creappsy. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a esto desde Creappsy para tu propio uso personal sujeto a las restricciones establecidas en estos términos y condiciones.</p>
    </>
);

export const cookiePolicyContent = (
    <>
        <p>Nuestra Política de Cookies explica qué son las cookies, cómo las usamos, cómo los terceros con los que podemos asociarnos pueden usar cookies en el Servicio, tus opciones con respecto a las cookies y más información sobre las cookies.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños fragmentos de texto enviados por tu navegador web por un sitio web que visitas. Un archivo de cookies se almacena en tu navegador web y permite que el Servicio o un tercero te reconozca y haga que tu próxima visita sea más fácil y el Servicio más útil para ti.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Cómo Creappsy usa las cookies</h2>
        <p>Cuando usas y accedes al Servicio, podemos colocar una serie de archivos de cookies en tu navegador web. Usamos cookies para los siguientes propósitos:</p>
         <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Para habilitar ciertas funciones del Servicio.</li>
            <li>Para proporcionar análisis.</li>
            <li>Para almacenar tus preferencias.</li>
            <li>Para permitir la entrega de anuncios, incluida la publicidad conductual.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Tus opciones con respecto a las cookies</h2>
        <p>Si deseas eliminar las cookies o indicar a tu navegador que elimine o rechace las cookies, visita las páginas de ayuda de tu navegador web. Ten en cuenta, sin embargo, que si eliminas las cookies o te niegas a aceptarlas, es posible que no puedas utilizar todas las funciones que ofrecemos, que no puedas almacenar tus preferencias y que algunas de nuestras páginas no se muestren correctamente.</p>
    </>
);

const contractBaseContent = (serviceName: string, serviceClauses: React.ReactNode) => (
  <>
    <p className="font-bold text-rose-400">NOTA IMPORTANTE: Este es un modelo de contrato y no constituye asesoramiento legal. Se recomienda consultar con un abogado para adaptarlo a tus necesidades específicas.</p>
    
    <h3 className="text-xl font-bold mt-6 mb-4">Información Requerida del Cliente:</h3>
    <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Logo de la Empresa:</strong> En formato vectorial (SVG, AI, EPS) o de alta resolución (PNG).</li>
        <li><strong>Nombre Comercial y Razón Social de la Empresa.</strong></li>
        <li><strong>Nombre Completo del Representante Legal.</strong></li>
        <li><strong>Datos de Contacto:</strong> Email y teléfono del contacto principal.</li>
        <li><strong>Dirección Fiscal Completa.</strong></li>
        <li><strong>Registro Federal de Contribuyentes (RFC).</strong></li>
        <li><strong>Giro Comercial y Área de Especialidad del Negocio.</strong></li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 mb-4">CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES ({serviceName.toUpperCase()})</h2>
    <p>En la Ciudad de México, a [Fecha de Firma], celebran por una parte Creappsy, en lo sucesivo "EL PRESTADOR", y por la otra parte [Nombre de la Empresa del Cliente], representada en este acto por [Nombre del Representante Legal], en lo sucesivo "EL CLIENTE", al tenor de las siguientes declaraciones y cláusulas:</p>
    
    <h3 className="text-xl font-bold mt-6 mb-4">DECLARACIONES</h3>
    <p><strong>I. Declara "EL PRESTADOR":</strong> Ser una entidad legalmente constituida con capacidad para ofrecer servicios de {serviceName}.</p>
    <p><strong>II. Declara "EL CLIENTE":</strong> Ser una entidad legalmente constituida, con domicilio fiscal en [Dirección Fiscal del Cliente] y RFC [RFC del Cliente], y tener la capacidad legal y económica para celebrar el presente contrato.</p>
    
    <h3 className="text-xl font-bold mt-6 mb-4">CLÁUSULAS</h3>
    {serviceClauses}
    <h4 className="text-lg font-bold mt-4 mb-2">TERCERA. - PRECIO Y FORMA DE PAGO.</h4>
    <p>El costo total de los servicios es de [Monto Total] MXN. El pago se realizará de la siguiente manera: 50% como anticipo al inicio del proyecto y 50% a la entrega final.</p>
    
    <h4 className="text-lg font-bold mt-4 mb-2">CUARTA. - VIGENCIA.</h4>
    <p>El presente contrato tendrá una vigencia a partir de la fecha de firma y hasta la entrega satisfactoria de los servicios, estimada para el [Fecha Estimada de Finalización].</p>
    
    <h4 className="text-lg font-bold mt-4 mb-2">QUINTA. - CONFIDENCIALIDAD.</h4>
    <p>Ambas partes se comprometen a mantener la confidencialidad de la información compartida durante la ejecución de este contrato.</p>
    
    <h4 className="text-lg font-bold mt-4 mb-2">SEXTA. - PROPIEDAD INTELECTUAL.</h4>
    <p>Una vez liquidado el pago total de los servicios, "EL PRESTADOR" cede a "EL CLIENTE" todos los derechos de propiedad intelectual sobre los entregables finales definidos en la cláusula primera.</p>

    <h4 className="text-lg font-bold mt-4 mb-2">SÉPTIMA. - JURISDICCIÓN.</h4>
    <p>Para la interpretación y cumplimiento de este contrato, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
  </>
);

export const contratoDesarrolloWebContent = contractBaseContent("Desarrollo Web", 
  <>
    <h4 className="text-lg font-bold mt-4 mb-2">PRIMERA. - OBJETO.</h4>
    <p>"EL PRESTADOR" se obliga a prestar a "EL CLIENTE" los servicios de diseño y desarrollo de un sitio web de acuerdo a las especificaciones acordadas, que incluyen [Describir tipo de sitio: corporativo, e-commerce, etc.] y funcionalidades clave como [Formulario de contacto, integración con pasarela de pago, etc.].</p>
    <h4 className="text-lg font-bold mt-4 mb-2">SEGUNDA. - OBLIGACIONES DE LAS PARTES.</h4>
    <p><strong>"EL PRESTADOR":</strong> Entregar el código fuente completo del sitio web, un manual de usuario básico para la gestión de contenidos y asegurar la compatibilidad con los navegadores modernos.</p>
    <p><strong>"EL CLIENTE":</strong> Proporcionar todo el contenido (textos, imágenes, logos) en los formatos y tiempos acordados, así como realizar los pagos puntualmente y proveer retroalimentación oportuna.</p>
  </>
);

export const contratoMarketingContent = contractBaseContent("Marketing Digital", 
  <>
    <h4 className="text-lg font-bold mt-4 mb-2">PRIMERA. - OBJETO.</h4>
    <p>"EL PRESTADOR" se obliga a prestar a "EL CLIENTE" servicios de marketing digital, que incluyen la gestión de [Especificar canales: Campañas SEO/SEM, redes sociales, email marketing, etc.] con el objetivo de [Aumentar la visibilidad, generar leads, etc.].</p>
    <h4 className="text-lg font-bold mt-4 mb-2">SEGUNDA. - OBLIGACIONES DE LAS PARTES.</h4>
    <p><strong>"EL PRESTADOR":</strong> Realizar una auditoría inicial, desarrollar una estrategia, ejecutar las campañas, optimizarlas y entregar un reporte mensual de resultados con análisis y recomendaciones.</p>
    <p><strong>"EL CLIENTE":</strong> Proporcionar acceso a las cuentas de redes sociales, Google Analytics y otras plataformas relevantes, definir un presupuesto para pauta publicitaria (si aplica) y aprobar los contenidos propuestos.</p>
  </>
);

export const contratoDisenoUIUXContent = contractBaseContent("Diseño UI/UX", 
  <>
    <h4 className="text-lg font-bold mt-4 mb-2">PRIMERA. - OBJETO.</h4>
    <p>"EL PRESTADOR" se obliga a prestar a "EL CLIENTE" los servicios de diseño de experiencia de usuario (UX) e interfaz de usuario (UI) para [Nombre del producto digital: aplicación móvil, plataforma web, etc.], abarcando desde la investigación hasta la entrega de prototipos de alta fidelidad.</p>
    <h4 className="text-lg font-bold mt-4 mb-2">SEGUNDA. - OBLIGACIONES DE LAS PARTES.</h4>
    <p><strong>"EL PRESTADOR":</strong> Entregar wireframes, flujos de usuario, prototipos interactivos y un sistema de diseño (guía de estilos y componentes) en formato [Ej. Figma, Sketch].</p>
    <p><strong>"EL CLIENTE":</strong> Participar en las sesiones de descubrimiento, proporcionar información sobre la marca y el público objetivo, y dar retroalimentación constructiva sobre las propuestas de diseño.</p>
  </>
);