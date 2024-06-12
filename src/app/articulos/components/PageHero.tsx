import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import alexanderEmelianenko from '@/assets/articulos/previews/20-30/alexander-emelianenko-preview.jpg'
import masvidalVsAskren from '@/assets/articulos/previews/0-10/masvidal-vs-askren_preview.jpeg'
import nateDiaz from '@/assets/articulos/previews/20-30/nate-diaz-preview.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ko-mas-rapido-ufc'>
                <Image className={styles.pagehero__bigArticle__img} src={masvidalVsAskren} alt='' />
                <h2 className={styles.page__title}>El KO Más Rápido en la Historia de la UFC</h2>
                <p>La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/articulos/alexander-emelianenko'>
                <Image className={styles.pagehero__article__img} src={alexanderEmelianenko} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>Alexander Emelianenko: El Hermano de Fedor Emelianenko y su Relación con la Mafia Rusa</h2>
                    <p>Los tatuajes de Alexander Emelianenko y el significado que tienen, ¿De verdad formó parte de la mafia rusa?</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/05/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/articulos/nate-diaz-historia'>
                <Image className={styles.pagehero__article__img} src={nateDiaz} alt='' />
                <article className={styles.pagehero__article__container}>
                <h2 className={styles.pagehero__title}>Nate Diaz, el Peleador Más Querido de la UFC</h2>
                    <p>La historia de uno de los peleadores más carismáticos de la UFC, que supo ganarse el cariño de la gente con peleas memorables y con su forma de ser.</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>01/05/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}