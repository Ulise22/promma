import Link from 'next/link'
import styles from './ArticlesFooter.module.css'
import Image from 'next/image'
/* IMAGES */
import magomedovOjo from '@/assets/articulos/30-40/shara_magomedov_ojo.png'
import alexanderEmelianenko from '@/assets/articulos/20-30/alexander_emelianenko.jpg'
import yoelgenetica from '@/assets/articulos/20-30/yoel_romero_genetica.jpg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import mostPPV from '@/assets/articulos/0-10/mostppv.jpg'
import top5 from '@/assets/articulos/0-10/ufc-goats.jpg'
import LeeMurray from '@/assets/articulos/heros/40-50/lee_murray-hero.jpg'
import pridefc from '@/assets/articulos/30-40/pridefc.jpg'

export default function ArticlesFooter () {
    return(
        <section className={styles.articlesFooter}>
            <h2 className={styles.articlesFooter__title}>Artículos Recomendados</h2>
            <article className={styles.articlesPreview__container}>
                <Link className={styles.articlePreview} href='/articulos/shara-magomedov-ojo'>
                    <Image className={styles.articlePreview__image} src={magomedovOjo} alt='' />
                    <h3 className={styles.articlePreview__title}>¿Qué le Pasó en el Ojo a Shara Magomedov?</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/yoel-romero-genetica'>
                    <Image className={styles.articlePreview__image} src={yoelgenetica} alt='' />
                    <h3 className={styles.articlePreview__title}>La Genética de Yoel Romero</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/alexander-emelianenko'>
                    <Image className={styles.articlePreview__image} src={alexanderEmelianenko} alt='Alexander Emelianenko' />
                    <h3 className={styles.articlePreview__title}>Alexander Emelianenko: El Hermano de Fedor Emelianenko y su Relación con la Mafia Rusa</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/most-ppv'>
                    <Image className={styles.articlePreview__image} src={mostPPV} alt='Dustin Poirier vs Conor McGregor' />
                    <h3 className={styles.articlePreview__title}>Las 5 Peleas más Vistas en la Historia de la UFC</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/mejores-peleadoras-ufc'>
                    <Image className={styles.articlePreview__image} src={GoatFemUfc} alt='' />
                    <h3 className={styles.articlePreview__title}>Las Mejores Peleadoras de la Historia de la UFC</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/top5-mejores-peleadores'>
                    <Image className={styles.articlePreview__image} src={top5} alt='Jon Jones, George St-Pierre, Anderson Silva' />
                    <h3 className={styles.articlePreview__title}>TOP5: Mejores Peleadores de la Historia de la UFC</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/lee-murray'>
                    <Image className={styles.articlePreview__image} src={LeeMurray} alt='Khabib vs ferguson' />
                    <h3 className={styles.articlePreview__title}>Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/que-paso-con-pride-fc'>
                    <Image className={styles.articlePreview__image} src={pridefc} alt='Pride FC' />
                    <h3 className={styles.articlePreview__title}>¿Qué Pasó con Pride FC?</h3>
                </Link>
            </article>
        </section>
    )
}