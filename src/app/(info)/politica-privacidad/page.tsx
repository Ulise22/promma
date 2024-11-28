import Link from 'next/link'
import styles from './privacidad.module.css'

export default function PoliticaPrivacidad () {
    return(
        <main className={styles.main}>
            <h1 className={styles.titles}>Política de Privacidad</h1>
            <p>El Titular del sitio web Ulises Montenegro, le informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados durante la navegación a través del Sitio Web: https://fullmma.org/ (en adelante, &quot;el Sitio Web&quot;).</p>
            <p>El responsable garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, en particular: </p>
            <ul>
                <li>Ley 25.326, de Protección de los Datos Personales.</li>
                <li>Disposiciones reglamentarias del Decreto 1558/2001.</li>
                <li>Principios establecidos por la Agencia de Acceso a la Información Pública (AAIP).</li>
            </ul>
            <p>El uso del Sitio Web implica la aceptación de esta Política de Privacidad, así como las condiciones incluidas en el Aviso Legal y la Política de Cookies.</p>

            <h2 className={styles.titles}>Identidad del Responsable</h2>
            <ul>
                <li>Responsable: Ulises Pablo Montenegro</li>
                <li>Correo Electrónico: fullmmarg@gmail.com</li>
                <li>Sitio Web: https://fullmma.org/</li>
            </ul>

            <h2 className={styles.titles}>Prinicipio de Tratamiento de Datos</h2>
            <p>El tratamiento de los datos personales de los usuarios se realizará bajo los siguientes principios:</p>
            <ul>
                <li>Licitud, lealtad y transparencia: Los datos se recopilan con el consentimiento explícito del usuario para fines específicos.</li>
                <li>Minimización de datos: Solo se solicitarán los datos estrictamente necesarios para cumplir con las finalidades.</li>
                <li>Limitación del plazo de conservación: Los datos se conservarán únicamente durante el tiempo necesario para los fines establecidos.</li>
                <li>Integridad y confidencialidad: Se garantiza la protección de los datos personales frente a accesos no autorizados o usos indebidos.</li>
            </ul>

            <h2 className={styles.titles}>Datos Recopilados y Finalidad</h2>
            <h3>Datos recopilados autumáticamente</h3>
            <p>Al navegar por el Sitio Web, se pueden recopilar datos no identificativos, como la dirección IP, tipo de navegador, sistema operativo, duración de la visita y hábitos de navegación, a través de cookies (ver Política de Cookies para más detalles).</p>
            <h3>Datos proporcionados por el usuario</h3>
            <p>Al contactar, registrarse o suscribirse a boletines, el usuario puede proporcionar datos personales como:</p>
            <ul>
                <li>Nombre y apellidos.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Dirección IP y datos de navegación.</li>
            </ul>
            <h3>Finalidades del tratamiento: </h3>
            <ul>
                <li>Responder a consultas realizadas a través del formulario de contacto.</li>
            </ul>

            <h2 className={styles.titles}>Base Legal para el Tratamiento</h2>
            <p>El tratamiento de datos personales se basa en el consentimiento explícito e informado del usuario. Este consentimiento puede ser retirado en cualquier momento.</p>

            <h2 className={styles.titles}>Derechos del Usuario</h2>
            <p>Conforme a la Ley 25.326, el usuario tiene derecho a:</p>
            <ul>
                <li>Acceso: Solicitar información sobre los datos que se están procesando.</li>
                <li>Rectificación: Corregir datos inexactos o incompletos.</li>
                <li>Supresión: Solicitar la eliminación de los datos, siempre que no exista una obligación legal que impida su eliminación.</li>
                <li>Oposición: Negarse al tratamiento de sus datos para ciertos fines.</li>
                <li>Confidencialidad: Exigir el tratamiento confidencial de sus datos personales.</li>
            </ul>
            <p>Para ejercer estos derechos, el usuario debe enviar una solicitud al correo <b>fullmmarg@gmail.com</b> con una copia de un documento de identidad.</p>
            <p>El usuario también puede presentar un reclamo ante la Agencia de Acceso a la Información Pública (AAIP), órgano de control en materia de protección de datos personales en Argentina, si considera que sus derechos han sido vulnerados.</p>

            <h2 className={styles.titles}>Medidas de Seguridad</h2>
            <p>El responsable implementa medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales, evitando accesos no autorizados, pérdida, alteración o divulgación indebida de los mismos.</p>

            <h2 className={styles.titles}>Cesión de Datos a Terceros</h2>
            <p>Los datos personales no se cederán a terceros, salvo en los siguientes casos:</p>
            <ul>
                <li>Cuando exista una obligación legal que lo requiera.</li>
                <li>Cuando sea necesario para la prestación de un servicio contratado por el responsable, como herramientas de análisis o publicidad (por ejemplo, Google Analytics o Google AdSense). En estos casos, los terceros actuarán como encargados del tratamiento y cumplirán con estrictos estándares de seguridad.</li>
            </ul>

            <h2 className={styles.titles}>Cookies</h2>
            <p>El Sitio Web utiliza cookies para analizar la navegación de los usuarios y mejorar su experiencia. Para más información sobre el uso de cookies, consulte nuestra <Link href='/cookies'>Política de Cookies.</Link></p>

            <h2 className={styles.titles}>Transferencias Internacionales de Datos</h2>
            <p>En caso de que los datos sean transferidos fuera de Argentina (por ejemplo, al utilizar servicios de terceros como Google), estas transferencias se realizarán cumpliendo con las disposiciones legales aplicables y asegurando un nivel adecuado de protección de los datos personales.</p>

            <h2 className={styles.titles}>Transferencias Internacionales de Datos</h2>
            <p>El responsable se reserva el derecho de modificar esta Política de Privacidad para adaptarla a cambios legislativos o nuevas prácticas. Cualquier modificación será notificada al usuario a través de esta misma página.</p>
            <p>Última actualización: 28/11/2024</p>

    </main>
    )
}