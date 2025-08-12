import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/cortes_de_peso_ufc.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Que es el Corte de Peso en UFC',
    description: 'El corte de peso consiste en reducir temporalmente el peso corporal antes de los pesajes oficiales de la UFC, con el objetivo de pelear en una categoría de peso inferior a la de tu peso natural. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcortes_de_peso_ufc.0f12ec67.webp&w=828&q=65',
        title: 'Que es el Corte de Peso en UFC',
        description: 'El corte de peso consiste en reducir temporalmente el peso corporal antes de los pesajes oficiales de la UFC, con el objetivo de pelear en una categoría de peso inferior a la de tu peso natural. ',
        url: 'https://fullmma.org/articulos/que-es-el-corte-de-peso-en-ufc'
    }
}

export default function CortesDePesoUFC () {
    return(
        <main>
            <ArticleHero title='¿Qué es el Corte de Peso en UFC?' subtitle='Descubre qué es el corte de peso en la UFC y por qué los peleadores lo hacen antes de cada combate.' image={hero} date='2025-08-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El corte de peso en la UFC es una práctica ampliamente utilizada por los peleadores, que consiste en reducir temporalmente el peso corporal para el pesaje oficial antes de cada combate, para terminar recuperando gran parte de ese peso perdido antes del combate oficial. Esto con la idea de competir en categorías de peso inferiores al peso natural de los peleadores, buscando en teoría, una ventaja competitiva. Aunque cabe aclarar, que esta práctica se extiende más allá de la UFC, a otra compañías de MMA y otros deportes de combate. </p>
                    <h2>¿Por qué lo hacen?</h2>
                    <p>Se puede decir que originalmente esta práctica se comenzó a realizar con la idea de buscar una ventaja competitiva, dado que como para el día de la pelea se recupera casi todo el peso que se cortó durante todo el campamento, si pelearas en una categoría de peso inferior a la de tu peso natural, terminarías enfrentándote a peleadores más pequeños, lo que podría darte una ventaja en cuanto a la fuerza y a la resistencia a los golpes. </p>
                    <p>Sin embargo, uno podría argumentar que hoy en día esta practica es tan distendida en los deportes de combate, que más que por buscar una ventaja competitiva, se hace con el objetivo de no pelear en condiciones injustas, ya que es el caso para casi la totalidad de los peleadores, que si pelearán en su peso natural, terminarían enfrentándose a rivales que son hasta 10 o 15 kilos más pesados que ellos. Por lo que hoy en día los cortes de peso se hacen para evitar pelear con rivales más grandes y más pesados, mas que para buscar pelear con rivales más pequeños. </p>
                    <h2>¿Cómo hacen el corte de peso?</h2>
                    <p>Los cortes de peso suelen incluir una combinación de varias prácticas, que incluyen la reducción de ingesta de alimentos, con la idea de crear un déficit calórico; la deshidratación, principalmente utilizada las últimas 24hs del corte de peso, con lo que se pierde más peso, haciendo uso de saunas, diuréticos, trajes de sudoración y manipulación de la ingesta de líquidos; y finalmente con un aumento de la actividad física, con el objetivo de acelerar las 2 prácticas anteriores, aumentando el déficit calórico, y sudando aún más producto del ejercicio. </p>
                    <p>Aunque hay una entrevista del doble campeón español de la UFC <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, en la que hablando con <b>Jordi Wild</b> en su podcast, explica a detalle cuál es el proceso por el que él pasa para cortar peso y dar las 145lb o las 155lbs en la báscula.</p>
                    <YouTubeEmbed videoid='32ozjKm03Aw' />
                    <h2>Riesgos de hacer un corte de peso</h2>
                    <p>Pese a lo normalizado que esté, los cortes de peso no dejan de estar rodeados de controversia y debate debido a los riesgos para la salud que estos implícan, especialmente si se hacen de manera recurrente y de forma extrema. </p>
                    <p>Los riesgos y peligros para salud que esta práctica conlleva van desde la misma deshidratación, desequilibrios electrolítricos, a daño renal y a problemas cardiovasculares.</p>
                    <p>Debido a esto, sobran declaraciones de peleadores profesionales que crítican esta práctica. Por ejemplo, el actual campeón de <b>Bare Knuckle FC</b>, el argentino <b>Franco Tenaglia</b>, le relató de igual forma a Jordi Wild las desdichas por las que se pasa con el corte peso como peleador, afirmando que termina siendo un sinsentido y que <b>&quot;Yo no conocí un peleador que esté de acuerdo con los cortes de peso&quot;</b>.</p>
                    <YouTubeEmbed videoid='__V31QDeazo' />
                    <p>Sin embargo el debate sigue abierto y cabe la pregunta de qué tanto se podría mejorar la salud de los peleadores si se encontrara una forma de eliminar o limitar esta practica, y sobre qué efectos puede tener a largo plazo en la salud de los peleadores. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}