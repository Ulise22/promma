import styles from './articulos.module.css'
import PageHero from './components/PageHero'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <PageHero />
            <section>
                <h1>Artículos</h1>
            </section>
        </main>
    )
}