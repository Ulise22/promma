import makhachev from '../../../../assets/peleadores__images/islam-makhachev/makhachev.png'
import PeleadoresHero from '../../components/PeleadoresHero'
import styles from '../../components/peleador.module.css'

export default function Makhachev () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={makhachev} w={25} l={1} d={0} nombre='Islam Makhachev' apodo={null} categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Makhachev</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Makhachev MMA</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Makhachev Record</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Islam Makhachev & Khabib Nurmagomédov</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Makhachev Última pelea</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Makhachev Próxima Pelea</h2>
                </article>
            </section>
        </main>
    )
}