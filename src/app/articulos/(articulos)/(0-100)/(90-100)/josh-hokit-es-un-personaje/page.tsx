import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/90-100/johs_hokit-personaje.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: '¿Josh Hokit es un personaje?',
    description: '¿Josh Hokit es un personaje o realmente actúa así? Analizamos sus promos al estilo WWE, momentos donde rompe el personaje y por qué su estilo está revolucionando los pesos pesados en la UFC.',
    openGraph: {
        images: '',
        title: '¿Josh Hokit es un personaje?',
        description: '¿Josh Hokit es un personaje o realmente actúa así? Analizamos sus promos al estilo WWE, momentos donde rompe el personaje y por qué su estilo está revolucionando los pesos pesados en la UFC.',
        url: 'https://fullmma.org/articulos/josh-hokit-es-un-personaje',
    }
}

export default function JoshHokitPersonaje () {
    return(
        <main>
        <ArticleHero title='¿Josh Hokit es un personaje?' subtitle='Como Josh Hokit usa personajes exagerados para ganar hype y dar atención a los pesos pesados.' image={hero} date='2026-06-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><b>Josh Hokit es un personaje.</b> Y es algo que se vuelve evidente a medida que uno ve al luchador invicto en diferentes entrevistas desde que irrumpió en la UFC. Josh Hokit posee un trash talk caótico, un poco teatral, digno de una promo de WWE, pero eso es algo que le ha dado notoriedad y que ha sabido respaldar en el octágono, demostrando que más allá de del teatro en un atleta serio, con un gran pasado en la lucha y el fútbol americano.</p>
                    <h2>El Origen de &quot;The Incredible Hok&quot; y sus alter egos</h2>
                    <p><b>Josh Hokit</b> es un ex All-American wrestler y un ex jugador de fútbol americano de los San Francisco 49ers. Llegó a la UFC gracias al <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link> en noviembre de 2025, debutando en la compañía en el primer evento de este 2026, en el <Link href='/eventos/ufc324'>UFC 324</Link> con una victoria por nocaut en el primer asalto (lo que le valió el bono a la Actuación de la Noche). </p>
                    <p>Llegó a una división que parecía estancada, por lo que en apenas 2 combates ya comenzó a hacer estragos en la UFC, consiguiendo una nueva victoria por ante el top 5 <b>Curtis Blaydes</b> en el <b>UFC 327</b>, robándose todo el show al protagonizar la Pelea de la Noche, venciendo a su rival luego de todo el show previo que hizo antes de la pelea. </p>
                    <p>Antes de esa pelea ante Blaydes, aprovecho que estaba en la cartelera estelar, lo que significaba que tendría más foco, más cámara y que estaría presente en la rueda de prensa para hacer show, cambiando el tono de voz, haciéndola rage-baiting a sus rival, recitando poemas random y básicamente comportándose por fuera de lo que estamos acostumbrados a ver en la UFC. </p>
                    <p>También se comportó como un chico tímido al ser entrevistado por la periodista especializada <b>Laura Sanko</b>, intentando ligarla con una frase preparada: &quot;Laura, no sé jugar ajedrés, pero reconozco a una reina cuando veo a una&quot;, en un tono de voz bastante incómodo, pero que muestra que está hablando dentro de un personaje</p>
                    <YouTubeEmbed videoid='8o-CohltIqw' />
                    <p>Pudimos ver más de su estilo loco, agresivo y teatrero, cuando en la conferencia de prensa previa al <Link href='/noticias/ufc-casa-blanca'>UFC en la Casa Blanca</Link>, donde estará enfrentando al histórico <b>Derrick Lewis</b>, aprovechó que estaba coincidiendo en la cartelera con <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, uno de los peleadores no sólo más famosos de la actualidad, sino que más queridos por todo el mundo, para meterse con él. </p>
                    <p>En aquella ocasión se burló del brasileño, hizo mofa de su característica frase/palabra <Link href='/articulos/que-significa-chama-alex-pereira'>&quot;CHAMA&quot;</Link>. Aquello terminó en un incidente donde intercedió <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> para defender a su amigo Alex, y terminó con Josh Hokit metiéndose con la mujer de Ilia, finalmente siendo retirado del establecimiento y dando por finalizada la rueda de prensa promocional. </p>
                    <YouTubeEmbed videoid='nyhJqbqQf8E' />
                    <h2>¿Josh Hokit es un personaje?</h2>
                    <p>Definitivamente lo es, se lo ha visto en entrevistas comportarse de forma más normal, dejando de lado su parte más teatrera. Claramente su forma de comportarse tiene la intención de llamar la atención, vender las peleas, ganar seguidores, crear su marca personal y hacerse más reconocido. </p>
                    <p>Incluso se lo ha visto frente a las cámaras romper el personaje, luego de estar hablando fingiendo la voz, pidiendo disculpas a los presentes por la incomodidad que puede llegar a generar en ocasiones. </p>
                    <p>A algunas personas les gusta este estilo de actuación para promocionar peleas, a otros les da cringe, otros lo apoyan siempre y cuando siga dando peleas espectaculares, como hasta el momento viene cumpliendo. ¿Tú que opinas? No dudes en seguirnos en nuestras redes sociales y comentárnoslo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}