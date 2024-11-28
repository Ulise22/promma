import styles from './cookies.module.css'

export default function Cookies () {
    return(
        <main className={styles.main}>
            <h1 className={styles.titles}>Política de Cookies</h1>
            <h2 className={styles.titles}>¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se descargan y almacenan en su navegador o dispositivo al visitar nuestro sitio web. Estos archivos contienen información sobre su navegación, como preferencias, idioma, ubicación o hábitos, con el objetivo de optimizar su experiencia como usuario.</p>
            <p>En esta política, el término &quot;cookies&quot; incluye también tecnologías similares que recopilan datos de navegación, como píxeles o balizas web.</p>

            <h2 className={styles.titles}>¿Para qué usamos las cookies?</h2>
            <p>En nuestro sitio web, utilizamos cookies para:</p>
            <ul>
                <li>Garantizar el correcto funcionamiento del sitio y mejorar su rendimiento.</li>
                <li>Personalizar su experiencia de navegación, recordando preferencias como idioma o país.</li>
                <li>Analizar estadísticas de uso para comprender cómo interactúan los usuarios con nuestro sitio y mejorar sus contenidos.</li>
                <li>Mostrar publicidad relevante, basada en sus hábitos de navegación, siempre que contemos con su consentimiento previo.</li>
            </ul>

            <h2 className={styles.titles}>Tipos de Cookies que Utilizamos</h2>
            <h3>Según la entidad que las gestione</h3>
            <ul>
                <li>Cookies propias:
                Instaladas y gestionadas directamente por nuestro sitio web. Se utilizan para garantizar su correcto funcionamiento y personalización.</li>
                <li>Cookies de terceros:
                Instaladas y gestionadas por terceros, como proveedores de servicios externos (por ejemplo, Google Analytics), con finalidades específicas que detallamos más adelante.</li>
            </ul>
            <h3>Según su finalidad</h3>
            <ul>
                <li>Cookies técnicas:
                Esenciales para el funcionamiento del sitio. Incluyen, por ejemplo, aquellas que permiten acceder a áreas seguras, recordar artículos en un carrito de compra o garantizar la seguridad mientras navega.</li>
                <li>Cookies de análisis:
                Recogen información sobre cómo los usuarios utilizan el sitio web, como las páginas más visitadas o errores encontrados, con el objetivo de mejorar la funcionalidad y contenidos del sitio.</li>
                <li>Cookies de personalización:
                Permiten recordar preferencias del usuario, como el idioma, la región o configuraciones específicas del navegador, para ofrecer una experiencia más personalizada.</li>
                <li>Cookies de publicidad comportamental:
                Analizan los hábitos de navegación del usuario para mostrarle publicidad adaptada a sus intereses. Estas cookies pueden ser gestionadas por nosotros o por terceros.</li>
            </ul>
            <h3>Según su duración</h3>
            <ul>
                <li>Cookies de sesión:
                Son temporales y se eliminan automáticamente cuando el usuario cierra el navegador.</li>
                <li>Cookies persistentes:
                Permanecen en su dispositivo por un tiempo definido, incluso después de cerrar el navegador, y se utilizan para recordar preferencias en futuras visitas.</li>
            </ul>

            <h2 className={styles.titles}>Gestión de cookies: ¿Cómo aceptarlas o rechazarlas?</h2>
            <p>Al ingresar a nuestro sitio web, verá un banner que le permite:</p>
            <ul>
                <li>Aceptar todas las cookies.</li>
                <li>Configurar cuáles desea aceptar o rechazar.</li>
                <li>Obtener más información sobre las cookies que utilizamos.</li>
            </ul>
            <p>Si desea modificar sus preferencias después de haber aceptado las cookies, puede hacerlo en cualquier momento desde la configuración de su navegador.</p>
            <h3>Cómo deshabilitar las cookies desde el navegador:</h3>
            <p>Puede gestionar o eliminar las cookies directamente desde su navegador. A continuación, le dejamos instrucciones para los navegadores más comunes:</p>
            <ul>
                <li>Mozilla Firefox: <a target='_Blank' href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias'>Habilitar y deshabilitar cookies en Firefox.</a></li>
                <li>Microsoft Edge: <a target='_Blank' href='https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d'>Eliminar cookies en Edge.</a></li>
                <li>Safari: <a target='_Blank' href='https://support.apple.com/es-es/guide/safari/sfri11471/mac'>Gestionar cookies y datos del sitio en Safari.</a></li>
            </ul>
            <p>Tenga en cuenta que, al deshabilitar ciertas cookies, algunas funcionalidades del sitio web podrían verse afectadas.</p>

            <h2 className={styles.titles}>Cookies de terceros utilizadas por nuestro sitio</h2>
            <p>En nuestro sitio utilizamos cookies de los siguientes proveedores externos:</p>
            <ul>
                <li>Google Ads: <br />
                Permite mostrar publicidad personalizada basada en los intereses del usuario. <br />
                Política: Google Ads.</li>
                <li>YouTube:
                Utilizado para mostrar videos integrados en nuestras páginas.
                Política: <a target='_Blank' href='https://policies.google.com/privacy'>YouTube.</a></li>
            </ul>

            <h2 className={styles.titles}>Cumplimiento con la Ley Argentina de Protección de Datos Personales (Ley 25.326)</h2>
            <p>Respetamos las normativas de protección de datos personales en Argentina. Toda información recopilada a través de cookies será tratada conforme a lo establecido por la Ley 25.326 y sus reglamentaciones. Usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos, según corresponda, contactándonos a través de nuestro formulario de contacto.</p>

            <h2 className={styles.titles}>Actualización de esta Política de Cookies</h2>
            <p>Nos reservamos el derecho de modificar esta política para adaptarla a novedades legislativas o cambios en nuestro sitio web. Le recomendamos revisarla periódicamente.</p>
            <p>Última actualización: 28 de noviembre de 2024.</p>

    </main>
    )
}