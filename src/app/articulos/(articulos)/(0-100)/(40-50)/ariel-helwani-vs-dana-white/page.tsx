import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/ariel_helwani_vs_dana_white.jpeg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Ariel Helwani vs Dana White',
    description: 'Ariel Helwani es probablemente el periodista más reconocido en lo que respecta al mundo de las MMA, sin embargo, pese al éxito que ha tenido y sigue teniendo a lo largo de su carrera, su relación con el presidente de la UFC, Dana White.',
    openGraph: {
        title: 'Ariel Helwani vs Dana White',
        description: 'Ariel Helwani es probablemente el periodista más reconocido en lo que respecta al mundo de las MMA, sin embargo, pese al éxito que ha tenido y sigue teniendo a lo largo de su carrera, su relación con el presidente de la UFC, Dana White.',
        url: 'https://fullmma.org/articulos/ariel-helwani-vs-dana-white'
    }
}

export default function HelwaniVSWhite () {
    return(
        <main>
            <ArticleHero title='El Periodista al que Dana White Detesta: ¿Por qué Dana White odia a Ariel Helwani?' subtitle='La historia del qué pasó entre Ariel Helwani y UFC, y de qué sucedio entre Dana White y Ariel Helwani.' image={hero} date='2024-08-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Ariel Helwani es probablemente el periodista más reconocido en lo que respecta al mundo de las MMA, con 1.4 millones de seguidores en su cuenta oficial de X, más de 100.000 subscriptores en su canal personal de Youtube, habiendo trabajado para grandes medios como <b>Fox Sports</b> y <b>ESPN</b>. Sin embargo, pese al éxito que ha tenido y sigue teniendo a lo largo de su carrera, su relación con el presidente de la <Link href='/articulos/ufc'>UFC</Link>, <b>Dana White</b>, no es sólo que no es la mejor, sino que con el paso del tiempo se ha ido degradando al punto en que Dana llegó a banear al periodista canadiense de la compañía. Pero esto, ¿a qué se debe?</p>
                    <p>Para empezar es importante recordar que no siempre su relación fue tan mala, en un inicio incluso el presidente de la UFC ayudó mucho a que la carrera como periodista de Ariel Helwani se propulsara, aceptando varias entrevistas que fueron ayudándolo a ir construyéndose un nombre. Incluso la primer entrevista de Ariel en superar el millón de reproducciones fue con el mismo Dana White, luego del <b>UFC 112</b> encabezado por <Link href='/leyendas/anderson-silva'>Anderson Silva</Link> en abril de 2010.</p>
                    <YouTubeEmbed videoid='Q2wlP_Vj3W0' />
                    <p>Antes de ser vetado de la UFC ya se había comenzado a dañar la relación entre estos 2, es díficil saber que es lo molestaba a Dana exactamente, pero ya durante algunas conferencias de prensa se veía una actitud cada vez menos amistosa y hóstil entre ambos, al punto en que un fan en Youtube hizo una compilación de 9 minutos con Dana White metiéndose con Ariel Helwani.</p>
                    <YouTubeEmbed videoid='uKV71BojOYk' />
                    <h2>¿Por qué se pelearon Dana White y Ariel Helwani?</h2>
                    <p>Lo que rompió la relación entre los 2, fue cuando la UFC estaba preparando el anuncio de las peleas estelares para el <b>UFC 200</b>, una vez terminada el UFC 199, con la idea de generar hype entre los aficionados. Dado que lo que se estaba por anunciar era el regreso de <Link href='/leyendas/brock-lesnar'>Brock Lesnar</Link> al octágono, luego de casi 5 años de estar retirado. Además tenían planeado anunciar que para el UFC 202 ibamos a tener la revancha entre <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> y <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link>.</p>
                    <p>Sin embargo todos los planes que tenían para hacer los anuncios se vieron truncados cuando Ariel Helwani, que consiguió la información de antemano, publicó en su cuenta de Twitter que estas eran las peleas que se iban a hacer, antes del anuncio oficial de la UFC. Esta acción por parte del periosdista Canadiense hizo enfurecer a Dana, que no le perdonó su accionar y fue drástico en la respuesta.</p>
                    <h2>Ariel Helwani es Baneado de UFC </h2>
                    <p>Como consecuencia de esto, Dana White decidió banear a Ariel Helwani de la UFC, quitándole todas las acreditaciones y prohibiéndole el ingreso a las conferencias de prensa. El canadiense hasta el día hoy sostiene que no cree haber hecho nada malo, y que su trabajo como periodista es informar, y eso fue lo que hizo.</p>
                    <p>El comentarista de la UFC y conductor del podcast más escuchado del mundo, <b>Joe Rogan</b>, dió su opinión sobre este tema, pudiendo ver la situación desde los ojos de la UFC. Dado que aparentemente desde la compañía le habían advertido al periodista que no querían que filtrara la información, ya que querían ser ellos quienes anunciaran el bombazo que era la vuelta de Lesnar. Además le habían informado que revelar dicha información podría dejar sin trabajo al miembro de la UFC que le haya filtrado esto.</p>
                    <YouTubeEmbed videoid='TIQaA-ZsAJE' />
                    <p>Joe Rogan da un buen punto al mencionar que no es que Helwani estaba filtrando una información secreta que nunca se iba a anunciar eventualmente, y que esto no se trataba de un trabajo periodístico donde se revelaban secretos oscuros que Dana White no quería que salgan a la luz. Simplemente era el anuncio de una pelea que la UFC como empresa quería hacer por sí misma, y que Ariel Helwani filtró el anuncio simplemente para ser el primero en hacerlo y en tener la primicia.</p>
                    <EndArticle/>
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}