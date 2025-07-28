import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/gsp_aliens.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'George St-Pierre Aliens',
    description: 'El luchador canadiense, leyenda de las MMA y uno de los mejores campeones que tuvo la UFC en su historia, George St-Pierre tiene una peculiaridad bastante curiosa según cuenta él mismo y según ha contado su entrenador, y es que, no sólo cree en la existencia de los aliens, sino que además afirma vivir experiencias difíciles de explicar, bajo la sospecha de que lo que hay detrás es vida de otro planeta.',
    openGraph: {
        title: 'George St-Pierre Aliens',
        description: 'El luchador canadiense, leyenda de las MMA y uno de los mejores campeones que tuvo la UFC en su historia, George St-Pierre tiene una peculiaridad bastante curiosa según cuenta él mismo y según ha contado su entrenador, y es que, no sólo cree en la existencia de los aliens, sino que además afirma vivir experiencias difíciles de explicar, bajo la sospecha de que lo que hay detrás es vida de otro planeta.',
        url: 'https://fullmma.org/articulos/george-st-pierre-aliens'
    }
}

export default function GSPAliens () {
    return(
        <main>
            <ArticleHero title='George St-Pierre Tiene Miedo a los Aliens y su Plan Para Evitar ser Abducido' subtitle='La leyenda y excampeón de la UFC y su peculiar miedo a los Aliens y la estrategia que ideó para lidiar con ellos.' image={hero} date='2024-08-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El luchador canadiense, leyenda de las MMA y uno de los mejores campeones que tuvo la <Link href='/articulos/ufc'>UFC</Link> en su historia, <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> tiene una peculiaridad bastante curiosa según cuenta él mismo y según ha contado su entrenador, y es que, no sólo cree en la existencia de los aliens, sino que además afirma vivir experiencias difíciles de explicar, bajo la sospecha de que lo que hay detrás es vida de otro planeta.</p>
                    <p>Para comenzar, en varias ocasiones ha afirmado creer en la existencia de aliens, o de vida fuera de nuestro planeta, argumentado en una charla con <b>Joe Rogan</b> en su podcast que la razón por la que afirmar que uno cree en aliens es visto de forma rara, es por el ego que tenemos los humanos, dado que queremos sentirnos especiales y por eso nos cuesta pensar en vida más allá de este planeta.</p>
                    <YouTubeEmbed videoid='gjltfFHX2dQ' />
                    <p>Luego, su entrenador <b>Firas Zahabi</b> en una charla en el podcast de Joe Rogan contó algo curioso sobre el peleador canadiense. Resulta ser que una vez en la que estaban compartiendo habitación en un hotel, su entrenador notó que había un rodillo de espuma contra la pared, y cuando lo movió para correrlo de lugar escucha a GSP decir: <b>&quot;No bro, dejalo ahí&quot;</b>, al preguntar porqué, la respuesta fue: <b>&quot;En caso de que los aliens nos atrapen&quot;</b>.</p>
                    <p>Esto es debido a que si el rodillo de espuma se movía, entonces George St-Pierre sabría que habían sido abducidos por los aliens. </p>
                    <YouTubeEmbed videoid='l_EIcQw9sQ0' />
                    <p>Por su lado, <b>Joe Rogan</b> quien es el comentarista de la UFC desde casi el inicioEl luchador canadiense, leyenda de las MMA y uno de los mejores campeones que tuvo la UFC en su historia, George St-Pierre tiene una peculiaridad bastante curiosa según cuenta él mismo y según ha contado su entrenador, y es que, no sólo cree en la existencia de los aliens, sino que además afirma vivir experiencias difíciles de explicar, bajo la sospecha de que lo que hay detrás es vida de otro planeta., y que ha tenido estas conversaciones con George y con su entrenador en varios podcast, pese a que se lo ha visto muy abiero a la idea de que exista vida por fuera de la Tierra, cree que lo sucede con GSP es algo más.</p>
                    <p>En una conversación con el expeleador de MMA y excampeón de la UFC <b>Pat Miletich</b>, al ser consultado por su opinión, expresó que cree que el luchador canadiense puede estar sufriendo síntomas de un traumatismo craneoencefálico, ya que observa que la forma que tiene el excampeón de contar su experiencia es bastante similar a la que tienen las personas con esta enfremedad, especialmente con esos &quot;glitches&quot; temporales que afirmó sufrir, donde pueden pasar horas que él ni siquiera recuerda, o eventos como ir a hacer la compra y no tener recuerdo de haber hecho esto.</p>
                    <p>Para Rogan no es una coincidencia que algo así le suceda a una persona que sólo en su carrera en la UFC ha sufrido más de 800 golpes, sin contar con el daño que pudo haber sufrido las promotoras donde peleaba anteriormente, o el daño que pudo sufrir durante los entrenamientos y sparrings.</p>
                    <YouTubeEmbed videoid='M6Bwdp48OQM' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}