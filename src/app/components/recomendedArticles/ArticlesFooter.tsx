import Link from 'next/link'
import styles from './ArticlesFooter.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import alexanderEmelianenko from '@/assets/articulos/previews/20-30/alexander-emelianenko-preview.jpg'
import ufc298 from '@/assets/noticias/heros/0-10/ufc298_hero.jpg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import mostPPV from '@/assets/articulos/previews/0-10/mostppv.jpg'
import top5 from '@/assets/articulos/previews/0-10/ufc-goats.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'
import dwt2 from '@/assets/noticias/heros/0-10/dogfight2.jpg'

export default function ArticlesFooter () {
    return(
        <section className={styles.articlesFooter}>
            <p className={styles.articlesFooter__title}>Artículos Recomendados</p>
            <article className={styles.articlesPreview__container}>
                <Link className={styles.articlePreview} href='/noticias/ufc302'>
                    <Image className={styles.articlePreview__image} src={ufc302} alt='' />
                    <p className={styles.articlePreview__title}>UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!</p>
                </Link>
                <Link className={styles.articlePreview} href='/noticias/ufc298'>
                    <Image className={styles.articlePreview__image} src={ufc298} alt='' />
                    <p className={styles.articlePreview__title}>UFC 298: Ilia Topuria Noquea a Volkanovski y es Nuevo Campeón de UFC</p>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/alexander-emelianenko'>
                    <Image className={styles.articlePreview__image} src={alexanderEmelianenko} alt='Alexander Emelianenko' />
                    <p className={styles.articlePreview__title}>Alexander Emelianenko: El Hermano de Fedor Emelianenko y su Relación con la Mafia Rusa</p>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/most-ppv'>
                    <Image className={styles.articlePreview__image} src={mostPPV} alt='Dustin Poirier vs Conor McGregor' />
                    <p className={styles.articlePreview__title}>Las 5 Peleas más Vistas en la Historia de la UFC</p>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/mejores-peleadoras-ufc'>
                    <Image className={styles.articlePreview__image} src={GoatFemUfc} alt='' />
                    <p className={styles.articlePreview__title}>Las Mejores Peleadoras de la Historia de la UFC</p>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/top5-mejores-peleadores'>
                    <Image className={styles.articlePreview__image} src={top5} alt='Jon Jones, George St-Pierre, Anderson Silva' />
                    <p className={styles.articlePreview__title}>TOP5: Mejores Peleadores de la Historia de la UFC</p>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/khabib-ferguson'>
                    <Image className={styles.articlePreview__image} src={khabibVferguson} alt='Khabib vs ferguson' />
                    <p className={styles.articlePreview__title}>Khabib vs Ferguson: La pelea maldita que nunca se pudo hacer</p>
                </Link>
                <Link className={styles.articlePreview} href='/noticias/dogfight-wild-tournament-2'>
                    <Image className={styles.articlePreview__image} src={dwt2} alt='Dogfight Wild Tournament' />
                    <p className={styles.articlePreview__title}>Lo Mejor de Dogfight Wild Tournament, el Evento de Combate Más Loco Organizado por Jordi Wild</p>
                </Link>
            </article>
        </section>
    )
}