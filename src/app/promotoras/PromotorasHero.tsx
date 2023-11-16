import styles from './Promotoras.module.css'

export default function PromotorasHero ({title} : {title: string}) {
    return(
        <section className={styles.promotoras__hero}>
            <h1 className={styles.promotoras__hero__title}> {title} </h1>
        </section>
    )
}