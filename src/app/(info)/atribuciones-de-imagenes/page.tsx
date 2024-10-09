import styles from './atribuciones.module.css'

export default function Atribuciones () {
    return(
        <main className={styles.atribuciones}>
            <h1>Atribuciones de Imagenes Utilizadas en el Sitio Web:</h1>
            <ul>
                {/* <li>"Título de la obra" de [Autor], disponible en [Fuente], bajo la licencia [Tipo de Licencia].</li> */}
                <li>&quot;Derrick Lewis after UFC 239.jpg&quot; de <b>MMAnytt</b>, disponible en Wikimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
                <li>&quot;Renato Moicano 2024.png&quot; de <b>Show Me The Money</b>, disponible en Wikimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
                <li>&quot;Benoit Saint Denis 2023.png&quot; de <b>ZACK</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
                <li>&quot;Chito Vera 2017.png&quot; de <b>Steve Mora</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
                <li>&quot;Sean O&apos;Malley 2018.png&quot; de <b>Optic Gaming</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
                <li>&quot;Belal Muhammad UFC.jpg&quot; de <b>Inaquout</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution-Share Alike 4.0</li>
                <li>&quot;Israel Adesanya UFC 271.jpg&quot; de <b>MMAnytt</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
                <li>&quot;Khalil Rountree, Jr.. (cropped).jpg&quot; de <b>Slsinc</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution-Share Alike 4.0</li>
                <li>&quot;Israel Adesanya UFC 271.jpg&quot; de <b>MMAnytt</b>, disponible en Wimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
            </ul>
        </main>
    )
}