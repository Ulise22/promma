import Link from 'next/link'
import styles from './ArticlesFooter.module.css'
import Image from 'next/image'
/* IMAGES */
import salariosUFC from '@/assets/articulos/0-100/10-20/salarios_ufc.jpg'
import fightingNerds from '@/assets/articulos/0-100/10-20/fighting_nerds.jpg'
import zabit from '@/assets/articulos/0-100/40-50/zabit.jpg'
import bestFight from '@/assets/articulos/0-100/40-50/bestfight.jpeg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import argUFC2024 from '@/assets/noticias/0-100/20-30/argentinos2024.jpg'
import top5 from '@/assets/articulos/0-100/0-10/ufc-goats.jpg'
import LeeMurray from '@/assets/articulos/0-100/40-50/lee_murray.jpg'
import pridefc from '@/assets/articulos/0-100/30-40/pridefc.jpg'
import mostProFights from '@/assets/articulos/0-100/10-20/most_pro_fights.jpg'
import mariusz from '@/assets/articulos/0-100/10-20/mariusz_pudzianowski.jpg'
import espUFC2025 from '@/assets/noticias/0-100/0-10/peleadores_espanoles_ufc.jpg'

export default function ArticlesFooter () {
    return(
        <section className={styles.articlesFooter}>
            <h2 className={styles.articlesFooter__title}>Artículos Recomendados</h2>
            <article className={styles.articlesPreview__container}>
                <Link className={styles.articlePreview} href='/articulos/cuanto-gana-un-peleador-de-ufc'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={salariosUFC} alt='' />
                    <h3 className={styles.articlePreview__title}>¿Cuánto le pagan a un peleador de UFC?</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/fighting-nerds'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={fightingNerds} alt='' />
                    <h3 className={styles.articlePreview__title}>¿Quiénes son los Fighting Nerds? El Mejor Equipo de MMA que Arrasa en la UFC</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/que-paso-con-zabit-magomedsharipov'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={zabit} alt='' />
                    <h3 className={styles.articlePreview__title}>Zabit Magomedsharipov: ¿Qué Pasó con la Bestia Daguestaní que se Retiró Demasiado Joven?</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/mejor-pelea-mma-de-la-historia'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={bestFight} alt='' />
                    <h3 className={styles.articlePreview__title}>Don Frye vs Takayama: La Mejor Pelea de MMA en la Historia</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/mejores-peleadoras-ufc'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={GoatFemUfc} alt='' />
                    <h3 className={styles.articlePreview__title}>Las Mejores Peleadoras de la Historia de la UFC</h3>
                </Link>
                <Link className={styles.articlePreview} href='/noticias/peleadores-de-ufc-argentinos-2024'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={argUFC2024} alt='' />
                    <h3 className={styles.articlePreview__title}>Los 5 Peleadores de UFC Argentinos Que Compiten en 2024</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/top5-mejores-peleadores'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={top5} alt='Jon Jones, George St-Pierre, Anderson Silva' />
                    <h3 className={styles.articlePreview__title}>TOP5: Mejores Peleadores de la Historia de la UFC</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/lee-murray'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={LeeMurray} alt='Khabib vs ferguson' />
                    <h3 className={styles.articlePreview__title}>Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/que-paso-con-pride-fc'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={pridefc} alt='Pride FC' />
                    <h3 className={styles.articlePreview__title}>¿Qué Pasó con Pride FC?</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/peleador-de-mma-con-mas-peleas'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={mostProFights} alt='' />
                    <h3 className={styles.articlePreview__title}>La historia detrás de Travis Fulton, el luchador con más peleas en MMA y su oscuro final.</h3>
                </Link>
                <Link className={styles.articlePreview} href='/articulos/mariusz-pudzianowski'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={mariusz} alt='' />
                    <h3 className={styles.articlePreview__title}>El Polaco Que Fue 5 Veces el Hombre Más Fuerte del Mundo, y que con 45 Años Noquea a sus Rivales, Mariusz Pudzianowski</h3>
                </Link>
                <Link className={styles.articlePreview} href='/noticias/luchadores-espanoles-en-ufc'>
                    <Image className={styles.articlePreview__image} quality={50} width={300} height={170} loading="lazy" src={espUFC2025} alt='' />
                    <h3 className={styles.articlePreview__title}>Los 5 Peleadores Españoles Actuales de UFC en 2024</h3>
                </Link>
            </article>
        </section>
    )
}