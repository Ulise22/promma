import Link from 'next/link'
import styles from './ArticlesFooter.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc300 from '@/assets/articulos/previews/ufc300.jpg'
import mostPPV from '@/assets/articulos/previews/mostppv.jpg'
import top5 from '@/assets/articulos/previews/ufc-goats.webp'
import khabibVferguson from '@/assets/articulos/previews/khabibVferguson.jpg'

export default function ArticlesFooter () {
    return(
        <section className={styles.articlesFooter}>
            <h2 className={styles.articlesFooter__title}>Artículos Recomendados</h2>
            <article className={styles.articlesPreview__container}>
                <Link className={styles.articlePreview} href='/articulos/ufc300'>
                    <Image className={styles.articlePreview__image} src={ufc300} alt='UFC 300' />
                    <h4 className={styles.articlePreview__title}>UFC 300: Todo los combates confirmados hasta ahora</h4>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/most-ppv'>
                    <Image className={styles.articlePreview__image} src={mostPPV} alt='Dustin Poirier vs Conor McGregor' />
                    <h4 className={styles.articlePreview__title}>Las 5 Peleas más Vistas en la Historia de la UFC</h4>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/top5-mejores-peleadores'>
                    <Image className={styles.articlePreview__image} src={top5} alt='Jon Jones, George St-Pierre, Anderson Silva' />
                    <h4 className={styles.articlePreview__title}>TOP5: Mejores Peleadores de la Historia de la UFC</h4>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/khabib-ferguson'>
                    <Image className={styles.articlePreview__image} src={khabibVferguson} alt='Khabib vs ferguson' />
                    <h4 className={styles.articlePreview__title}>Khabib vs Ferguson: La pelea maldita que nunca se pudo hacer</h4>
                </Link>
            </article>
        </section>
    )
}