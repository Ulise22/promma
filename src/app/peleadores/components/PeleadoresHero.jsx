import styles from './PeleadoresHero.module.css'
import Image from 'next/image'

export default function PeleadoresHero ({peleadoresImage, w, l, d, nombre, categoria, apodo}) {
    return(
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <article className={styles.hero__info}>
                    <p className={styles.hero__p}> {categoria} </p>
                    <h1 className={styles.hero__name}> {nombre} </h1>
                    { apodo && <h4 className={styles.hero__nickname}>&quot;{apodo}&quot;</h4>}
                </article>    
                <article className={styles.record}>
                    <div className={styles.record__container}>
                        <p className={styles.record__number}> {w} </p>
                        <b>Victorias</b>
                    </div>
                    <div className={styles.record__container}>
                        <p className={styles.record__number}> {l} </p>
                        <b>Derrotas</b>
                    </div>
                    <div className={styles.record__container3}>
                        <p className={styles.record__number}> {d} </p>
                        <b>Empates</b>
                    </div>
                </article>
                <Image className={styles.hero__image} src={peleadoresImage} alt={nombre} />
            </div>
        </section>
    )
}