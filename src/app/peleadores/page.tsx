import Navbar from "../Navbar";
import styles from './peleadores.module.css'

export default function Peleadores () {
    return(
        <main>
            <Navbar />
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Luchadores de MMA</h1>
            </section>
            <section>
                <h2>Luchadores de UFC</h2>
            </section>
            <section>
                <h2>Peleadores argentinos de UFC</h2>
            </section>
        </main>
    )
}