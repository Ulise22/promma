import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/topuria_and_pereira.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Ilia Topuria y Alex Pereira',
    description: "Ilia Topuria y Alex Pereira: La amistad menos pensada. Como inició la amistad entre el campeón español y el campeón brasileño luego del incidente con Josh Hokit en la rueda de prensa del UFC Casa Blanca.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftopuria_and_pereira.57e6e6c4.webp&w=828&q=65',
        title: 'Ilia Topuria y Alex Pereira',
        description: "Ilia Topuria y Alex Pereira: La amistad menos pensada. Como inició la amistad entre el campeón español y el campeón brasileño luego del incidente con Josh Hokit en la rueda de prensa del UFC Casa Blanca.",
        url: 'https://fullmma.org/noticias/ilia-topuria-y-alex-pereira',
    }
}

export default function IliaTopuriaYAlexPereira () {
    return(
        <main>
            <ArticleHero title='Ilia Topuria y Alex Pereira: La Amistad Menos Pensada' subtitle="Como Ilia Topuria se volvió amigo de Alex Pereira luego de la defensa ante Josh Hokit" image={hero} date='2026-05-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La amistad entre <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> y <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> ha sorprendido a muchos dentro del mundo de las MMA, siendo una de las noticias más notables de este 2026, previo a que ambos compartan cartelera en el <Link href='/noticias/ufc-casa-blanca'>UFC en la Casa Blanca</Link>, pero ¿cómo surgió esta amistad?</p>
                    <h2>¿Cómo empezó la amistad entre Ilia Topuria y Alex Pereira?</h2>
                    <p>Aunque había fotos que muestran que Ilia Topuria y Alex Pereira se conocían desde hacía algún tiempo atrás, lo cierto es que el coincidir en la misma cartelera en el <Link href='/noticias/ufc-casa-blanca'>UFC Freedom 250</Link>, como protagonistas de la pelea estelar y coestelar, respectivamente, los acercó más, coincidiendo en los eventos promocionales previos al gran evento, e incluso compartiendo el avión privado de Ilia rumbo a la Casa Blanca, en una reunión con el presidente <b>Donald Trump</b> en promoción al evento.</p>
                    <YouTubeEmbed videoid='Y9Y4lfImrbg' />
                    <p>Ambos luchadores compartieron tiempo juntos, incluyendo el vuelo a Washington, e incluso entrenaron juntos cuando Topuria fue al gimnasion de Plinio Cruz, el entrenador de Alex, pasando bastante tiempo con el quipo del Poatan. </p>
                    <p>En diversas entrevistas el español ha hablado sobre lo bien que le cae su colega brasileño, mostrando una profunda admiración por su forma de pelear y por lo que ha conseguido en la UFC. Reconociendo que este último es un personaje peculiar que responde a las cosas que Ilia le dice con su característico <b>&quot;CHAMA&quot;</b>. </p>
                    <h2>El Incidente en la Rueda de Prensa con Josh Hokit</h2>
                    <p>La amistad que se había comenzado a formar tras vestidores, se hizo notoria para el público en la primera rueda de prensa previa al <Link href='/noticias/ufc-casa-blanca'>UFC Freedom 250</Link>. Cuando el estadounidense <b>Josh Hokit</b>, que ganó notoriedad con su excentrico personaje de cara al público, comenzó a atacar verbalmente a Alex Pereira, burlándose de su inglés limitado, de su frase <b>&quot;CHAMA&quot;</b>, e incluso habló de forma irrespetuosa sobre la madre del brasileño. </p>
                    <p>Ilia Topuria, que estaba sentado al lado de Alex, no toleró seguir escuchando como le faltaban el respeto a Pereira, por lo que se levantó, defendió enérgicamente a su compañero, intercambió palabras con Hokit y le tiró una botella. La seguridad de la UFC tuvo que intervenir, expulsando a Hokit del escenario. </p>
                    <YouTubeEmbed videoid='xTrBrsmH6Xc' />
                    <p>En una entrevista con su compatriota <b>Álvaro Colmenero</b>, Ilia explicaría mejor la situación y el porqué de su reacción: </p>
                    <p><b>&quot;Yo no me lo creía: he estado en muchas ruedas de prensa, he visto de todo, pero nunca he visto a nadie ponerse de pie y hablar de la madre de alguien de forma tan mala. Fue una gran falta de respeto. No me creo que le esté diciendo esto sin necesidad, porque ni siquiera iba a pelear con él. Tu puedes meterte con el otro, no pasa nada, estamos acostumbrados a ello, sabemos a lo que vamos, pero hablar de la madre del otro de esa manera simplemente me hirvió la sangre. &quot;</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Ilia Topuria on that Josh Hokit incident 😅<br /><br />via <a href="https://twitter.com/KOlmeneroMMA?ref_src=twsrc%5Etfw">@KOlmeneroMMA</a> <a href="https://t.co/mBfDKuUgDw">pic.twitter.com/mBfDKuUgDw</a></p>&mdash; Nofanboymma (@nofanboymma) <a href="https://twitter.com/nofanboymma/status/2056078475606294621?ref_src=twsrc%5Etfw">May 17, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>El propio Alex Pereira se mostró agradecido con la defensa que le hizo Topuria, hablando sobre como él no entendía inglés, y cómo seguramente Ilia vió eso y se sintió con la necesidad de intervenir &quot;como un hermano&quot;, arrojándole una botella en la cabeza y defendiéndolo con un mejor inglés que el que él tiene. </p>
                    <h2>Reacciones a la Amistad entre Ilia Topuria y Alex Pereira</h2>
                    <p>La mayoría de la comunidad de las MMA vió con buenos ojos como Ilia defendió al excampeón brasileño, se entendió como un acto de respeto entre campeones de diferentes divisiones. </p>
                    <p>Parte de la reacción de los fans puede explicarse en que Alex es uno de los peleadores más queridos que hay, por lo que pocas veces se va a ver con buenos ojos a cualquiera que se meta con él, más teniendo en cuenta que no habla el suficiente inglés como para defenderse por sí mismo en los micrófonos. Además, en la comunidad de las MMA no estamos acostumbrados a personalidades como la de <b>Josh Hokit</b>, quien parece más un personaje de WWE que un peleador profesional de la UFC. </p>
                    <p>En resumen, parece que la amistad o el buen rollo entre Ilia Topuria y Alex Pereira, probablemente los 2 peleadores activos más mediáticos de la UFC en estos momentos, es genuina y nace de un respeto y admiración mutua. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}