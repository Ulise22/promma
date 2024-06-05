import Link from 'next/link'
import styles from './ArticlesFooter.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc300 from '@/assets/noticias/previews/0-10/ufc300.jpg'
import ufc298 from '@/assets/noticias/heros/0-10/ufc298_hero.jpg'
import ufc297 from '@/assets/noticias/heros/0-10/ufc297_hero.jpg'
import mostPPV from '@/assets/articulos/previews/0-10/mostppv.jpg'
import top5 from '@/assets/articulos/previews/0-10/ufc-goats.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'
import dwt2 from '@/assets/noticias/heros/0-10/dogfight2.jpg'
import bestStyle from '@/assets/articulos/previews/0-10/mejores-estilos_preview.jpg'

export default function ArticlesFooter () {
    return(
        <section className={styles.articlesFooter}>
            <h2 className={styles.articlesFooter__title}>Artículos Recomendados</h2>
            <article className={styles.articlesPreview__container}>
                <Link className={styles.articlePreview} href='/noticias/ufc300'>
                    <Image className={styles.articlePreview__image} src={ufc300} alt='UFC 300' />
                    <h4 className={styles.articlePreview__title}>UFC 300: Todo los combates confirmados hasta ahora</h4>
                </Link>
                <Link className={styles.articlePreview} href='/noticias/ufc298'>
                    <Image className={styles.articlePreview__image} src={ufc298} alt='' />
                    <h4 className={styles.articlePreview__title}>UFC 298: Ilia Topuria Noquea a Volkanovski y es Nuevo Campeón de UFC</h4>
                </Link>
                <Link className={styles.articlePreview} href='/noticias/ufc297'>
                    <Image className={styles.articlePreview__image} src={ufc297} alt='' />
                    <h4 className={styles.articlePreview__title}>UFC 297: Dricus Du Plessis y Raquel Pennington Nuevos campeones de UFC</h4>
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
                <Link className={styles.articlePreview} href='/noticias/dogfight-wild-tournament-2'>
                    <Image className={styles.articlePreview__image} src={dwt2} alt='Dogfight Wild Tournament' />
                    <h4 className={styles.articlePreview__title}>Lo Mejor de Dogfight Wild Tournament, el Evento de Combate Más Loco Organizado por Jordi Wild</h4>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/mejores-estilos-mma'>
                    <Image className={styles.articlePreview__image} src={bestStyle} alt='Jiu Jitsu' />
                    <h4 className={styles.articlePreview__title}>Las Artes Marciales Más Efectivas para las MMA</h4>
                </Link>
            </article>
        </section>
    )
}