import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import weili from '@/assets/peleadores__images/zhang-weili/weili.png'
import styles from '../../../components/peleador.module.css'

export default function ZhangWeili () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={weili} w={24} l={3} d={0} nombre='Zhang Weili' apodo='MAGNUM' categoria='Peso Paja Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Zhang Weili UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Zhang vs Jedrzejczyk</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Zhang Weili Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Zhang Weili wiki</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Zhang Weili vs Amanda Lemos</h2>
                </article>
            </section>
        </main>
    )
}