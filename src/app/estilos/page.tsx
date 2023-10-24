import Image from 'next/image'
import styles from './Estilos.module.css'
import boxeo from '../../assets/estilos/boxeo__section.jpg'
import bjj from '../../assets/estilos/jiu-jitsu.jpg'

export default function Estilos () {
    return(
        <main>
            <section className={styles.estilos__hero}>
                <h1 className={styles.estilos__hero__title}>Tipos de artes marciales</h1>
            </section>
            <section className={styles.estilos__container}>
                <article>
                    <h2 className={styles.estilos__title}>Boxeo</h2>
                    <p>El boxeo es un deporte de combate...</p>
                    <p>Además </p>
                    <Image src={boxeo} alt='boxeo' />
                </article>
                <article>
                    <h2 className={styles.estilos__title}>Jiu Jitsu</h2>
                    <p>El Jiu Jitsu Brasilero es un arte marcia...</p>
                    <p>Además </p>
                    <Image src={bjj} alt='boxeo' />
                </article>
            </section>
        </main>
    )
}