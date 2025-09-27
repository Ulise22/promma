import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/ulberg-vs-reyes.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Perth: ¡Carlos Ulberg vs Dominick Reyes!',
    description: 'Noche de UFC en Perth, Australia, donde estarán enfrentándose Carlos Ulberg contra Dominick Reyes en peso semipesado. ',
    openGraph: {
        images: '',
        title: 'UFC Perth: ¡Carlos Ulberg vs Dominick Reyes!',
        description: 'Noche de UFC en Perth, Australia, donde estarán enfrentándose Carlos Ulberg contra Dominick Reyes en peso semipesado.  ',
        url: 'https://fullmma.org/eventos/fight-night-ulberg-reyes'
    }
}

export default function UlbergReyes () {
    return(
        <main>
            <ArticleHero title='UFC Perth: ¡Carlos Ulberg vs Dominick Reyes!' subtitle='¡Jimmy Crute vs Ivan Erslan!' image={hero} date='2025-09-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Espectacular evento de UFC esta noche en Perth, Australia que nos trae como evento estelar la pelea entre el #3 de peso semipesado, el neozelandés <b>Carlos Ulberg</b>, quien viene de una racha imparable de 8 victorias consecutivas en la UFC, y el histórico peleador estadounidense <b>Dominick Reyes</b>, quien luego de hacer un parate a su carrera de 2 años, volvió mejor que nunca, acumulando una racha de 3 victorias consectuivas, ocupando el puesto #7 en los rankings de la división. </p>
                    <p>Además, tendremos en la pelea coestelar el enfrentamiento entre el local <b>Jimmy Crute</b>, y el croata <b>Ivan Erslan</b>, también en peso semipesado. También tendremos presencia latina en la noche de hoy, cuando en la cartelera preliminar estará peleando el peruano <b>Rolando Bedoya</b> ante el australiano <b>Jamie Mullarkey</b>, en peso ligero, además de un montón de peleadores australianos que buscarán brillar frente a su gente. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Alexia Thainara Derrota a Loma Lookboonmee por Decisión Unánime</h2>
                    <p>Tremenda esta primer pelea de la noche, donde la brasileña <b>Alexia Thainara</b> destacó con una actuación completamente dominante, conectando muchos más golpes que su rival tailandesa, siendo además capaz de conectar varios derribos para castigar con ground and pound durante todo el combate, manteniendo el control de su rival contra la reja y castigando aún en el clinch, ganando de estar forma todos los asaltos de manera clarísima. De esta forma, Alexia se mete en los rankings del peso paja femenino. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}