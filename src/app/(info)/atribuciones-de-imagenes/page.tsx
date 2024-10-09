import styles from './atribuciones.module.css'

export default function Atribuciones () {
    return(
        <main className={styles.atribuciones}>
            <h1>Atribuciones de Imagenes Utilizadas en el Sitio Web:</h1>
            <ul>
                {/* <li>"Título de la obra" de [Autor], disponible en [Fuente], bajo la licencia [Tipo de Licencia].</li> */}
                <li>&quot;Derrick Lewis after UFC 239.jpg&quot; de MMAnytt, disponible en Wikimedia Commons bajo la licencia Creative Commons Attribution 3.0</li>
            </ul>
        </main>
    )
}