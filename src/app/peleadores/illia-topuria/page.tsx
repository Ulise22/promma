import Image from "next/image";
import topuria from '../../../assets/peleadores__images/topuria.png'
import styles from './Illia.module.css'

export default function Illia () {
    return(
        <main>
            <section className={styles.ilia__hero}>
                <article className={styles.ilia__hero__info}>
                    <p className={styles.ilia__hero__p}>Peso pluma (featherweight)</p>
                    <h1 className={styles.ilia__hero__name}>Ilia Topuria</h1>
                    <h4 className={styles.ilia__hero__nickname}>&quot;EL MATADOR&quot;</h4>
                </article>    
                <article className={styles.ilia__record}>
                    <div className={styles.ilia__record__container}>
                        <p className={styles.ilia__record__number}>14</p>
                        <b>Victorias</b>
                    </div>
                    <div className={styles.ilia__record__container}>
                        <p className={styles.ilia__record__number}>0</p>
                        <b>Derrotas</b>
                    </div>
                    <div className={styles.ilia__record__container3}>
                        <p className={styles.ilia__record__number}>0</p>
                        <b>Empates</b>
                    </div>
                </article>
                <Image className={styles.ilia__image} src={topuria} alt="" />
            </section>
            <section>
                <article>
                    <h2>Ilia Topuria ufc</h2>
                    <p>Ilia Topuria es un luchador de nacionalidad georgiana y española de ufc</p>
                </article>
            </section>
        </main>
    )
}