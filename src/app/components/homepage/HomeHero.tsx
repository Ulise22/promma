import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc333 from '@/assets/eventos/ufc/0-150/0-15/ufc333.webp'
import jeanSilvaMadre from '@/assets/articulos/0-100/90-100/jean_silva-madre.webp'
import dvalishviliNariz from '@/assets/articulos/0-100/90-100/merab_dvalishvili-nariz.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc333'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc333} alt='' />
                <h2 className={styles.home__title}>UFC 333: ¡Alexander Volkanovski Noquea a Movsar Evloev en el Segundo Asalto y Sigue Siendo Campeón de la UFC! ¡Petr Yan Derrota a Merab Dvalishvili en La Pelea de la Noche y Sigue Siendo Campeón!</h2>
                <span>¡Alexander Volkov Derrota a Rizvan Kuniev por Decisión Unánime! ¡Lone&apos;er Kavanagh Noquea a Ramazan Temirov en el Primer Asalto!</span>
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