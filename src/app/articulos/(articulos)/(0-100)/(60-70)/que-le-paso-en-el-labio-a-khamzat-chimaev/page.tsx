import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/chimaev_cicatriz.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Qué le Pasó en el Labio a Khamzat Chimaev',
    description: 'La cicatriz que tiene Khamzat Chimaev en el labio superior proviene de un accidente que sufrió cuando era tan solo un niño, contrario a lo que uno podría creer, teniendo la idea de que dicha marca en el rostro se le hizo en combate. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchimaev_cicatriz.41e8705e.webp&w=828&q=65',
        title: 'Qué le Pasó en el Labio a Khamzat Chimaev',
        description: 'La cicatriz que tiene Khamzat Chimaev en el labio superior proviene de un accidente que sufrió cuando era tan solo un niño, contrario a lo que uno podría creer, teniendo la idea de que dicha marca en el rostro se le hizo en combate. ',
        url: 'https://fullmma.org/articulos/que-le-paso-en-el-labio-a-khamzat-chimaev'
    }
}

export default function ChimaevCicatriz () {
    return(
        <main>
            <ArticleHero title='Qué le Pasó en el Labio a Khamzat Chimaev' subtitle='Descubre la historia detrás la característica cicatríz que tiene la estrella de la UFC Khamzat Chimaev.' image={hero} date='2025-08-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La cicatriz que tiene Khamzat Chimaev en el labio superior proviene de un accidente que sufrió cuando era tan solo un niño, contrario a lo que uno podría creer, teniendo la idea de que dicha marca en el rostro se le hizo en combate. </p>
                    <p>Aquella característica cicatriz que tiene Khamzat Chimaev en el labio superior, que ha ayudado a la estética de tipo loco que se construyó, no tiene nada que ver con el mundo de la pelea. Lo cierto es que, dicha marca le fue dada hace tanto tiempo, cuando el checheno era tan niño, que ni siquiera recuerda cómo le sucedió, lo que sabemos es por lo que la madre le pudo contar al lobo de Chechenia. </p>
                    <p>Aparentemente cuando Khamzat tenía 2 años, tenía una gran escalera en su casa, de la que se cayó, dándose el rostro contra el concreto, provocando no sólo la cicatriz que le conocemos ahora, sino que también la pérdida de un par de dientes y la rotura de su nariz. </p>
                    <p>Parece que dicho accidente fue de tal gravedad, que aún a día de hoy Chimaev reconoce tener dificultades para respirar desde el lado derecho de su nariz. Esto sumado a la cicatriz de la que estamos hablando fueron las secuelas que dejó dicho accidente. </p>
                    <YouTubeEmbed videoid='IuLPaHnRH9I' />
                    <p>Diversos medio deportivos como <b>SPORTbible</b>, <b>FirstSportz</b> y <b>Sportskeeda</b>, recogieron declaraciones del peleador hablando sobre esto en un video de YouTube que lamentablemente ya no está disponible, en el que decía lo siguiente: </p>
                    <p><b>&quot;Mi mamá me contó esto, pero yo no lo recuerdo. Tenía 2 años y había una gran escalera en nuestra casa, entonces me caí contra el concreto. Se me rompió el labio; perdí un par de dientes y también me rompí la nariz. Todavía no puedo respirar por la fosa nasal derecha.&quot;</b></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}