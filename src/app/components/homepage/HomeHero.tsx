import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import buckleyVSMallot from '@/assets/eventos/fight-night/0-150/16-30/buckley-vs-malott.webp'
import jeanSilvaMadre from '@/assets/articulos/0-100/90-100/jean_silva-madre.webp'
import dvalishviliNariz from '@/assets/articulos/0-100/90-100/merab_dvalishvili-nariz.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc-fight-night-buckley-vs-malott'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={buckleyVSMallot} alt='' />
                <h2 className={styles.home__title}>UFC Fight Night: ¡Mike Malott Noquea a Joaquin Buckley en el Segundo Asalto!</h2>
                <span>¡Jasmine Jasudavicius Derrota a Erin Blanchfield Por Decisión Unánime! ¡Cristian Perez Noquea a Kyle Nelson en el Primer Asalto!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/jean-silva-historia-madre'>
                <Image className={styles.homehero__article__img} quality={50} src={jeanSilvaMadre} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La Trágica Historia de la Madre de Jean Silva</h2>
                    <p>Como el asesinato de un hermano, el abuso y encarcelamiento de su madre forjaron a Jean &quot;Lord&quot; Silva.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/09/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/merab-dvalishvili-nariz'>
                <Image className={styles.homehero__article__img} quality={50} src={dvalishviliNariz} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Qué le pasó a Merab Dvalishvili en la Nariz?</h2>
                    <p>Un repaso completo a las tres fracturas de nariz de Merab Dvalishvili: cómo ocurrieron, qué le dijo el cirujano y por qué prefiere pelear con la nariz torcida antes que parar un año.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>20/10/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}