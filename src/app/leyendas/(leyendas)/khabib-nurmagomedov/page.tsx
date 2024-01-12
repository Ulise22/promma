import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Khabib () {
    return(
        <main>
            <section>
                <h1>Khabib Nurmagomedov</h1>
            </section>
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira UFC</h2>
                    <p className={styles.peleador__article__text}></p>
                </article>
            </section>
        </main>
    )
}