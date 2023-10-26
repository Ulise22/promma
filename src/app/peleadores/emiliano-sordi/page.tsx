import Image from "next/image";
import emiliano from '../../../assets/peleadores__images/emiliano.png'
import styles from './Emiliano.module.css'

export default function Emiliano () {
    return(
        <main>
            <section className={styles.emiliano__hero}>
                <article className={styles.emiliano__hero__info}>
                    <p className={styles.emiliano__hero__p}>Peso semi-pesado (Light Heavyweight)</p>
                    <h1 className={styles.emiliano__hero__name}>Emiliano Sordi</h1>
                    <h4 className={styles.emiliano__hero__nickname}>&quot;He-Man&quot;</h4>
                </article>    
                <article className={styles.emiliano__record}>
                    <div className={styles.emiliano__record__container}>
                        <p className={styles.emiliano__record__number}>23</p>
                        <b>Victorias</b>
                    </div>
                    <div className={styles.emiliano__record__container}>
                        <p className={styles.emiliano__record__number}>10</p>
                        <b>Derrotas</b>
                    </div>
                    <div className={styles.emiliano__record__container3}>
                        <p className={styles.emiliano__record__number}>1</p>
                        <b>Empates</b>
                    </div>
                </article>
                <Image className={styles.emiliano__image} src={emiliano} alt="" />
            </section>
            <section>
                <article>
                    <h2>Emiliano Sordi mma</h2>
                    <p>Emiliano Sordi es un peleador de mma argentino</p>
                </article>
                <article>
                    <h2>Emiliano Sordi ufc</h2>
                    <p>Emiliano en una entrevista reconoció que recibió una propuesta para pelear en la ufc, </p>
                </article>
                <article>
                    <h2>Última pelea de Emiliano Sordi</h2>
                    <p>En su último enfrentamiento</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Fgf6eQT6X8k?si=JRzSXaklxbY3IYnt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}