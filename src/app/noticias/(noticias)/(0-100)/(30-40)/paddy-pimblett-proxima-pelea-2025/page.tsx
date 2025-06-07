import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/pimblett_nextfight2025.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Proxima Pelea Paddy Pimblett: Pimblett vs Chandler',
    description: "",
    openGraph: {
        title: 'Proxima Pelea Paddy Pimblett: Pimblett vs Chandler',
        description: "",
        url: 'https://fullmma.org/noticias/paddy-pimblett-proxima-pelea-2025'
    }
}

export default function PaddyPimblettNextFight2025 () {
    return(
        <main>
            <ArticleHero title='Próxima Pelea de Paddy Pimblett 2025: ¿Paddy Pimblett vs Michael Chandler?' subtitle="Se acrecientan los rumores sobre la próxima pelea de Paddy Pimblett, con 2 rivales y 2 posibles ubicaciones para él, ¿Gamrot o Chandler? ¿UFC 314 o UFC 317 en el International Fight Week?" image={hero} date='2025-02-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Desde aquella espectacular victoria por sumisión en el primer asalto ante King Green en el UFC 304, que le permitiría a Paddy Pimblett entrar a los rankings de la división de peso ligero, que no sabemos nada sobre posibles próximos enfrentamientos del luchador inglés. Es por esa razón que hoy, con los crecientes rumores e insinuaciones de los propios peleadores de las 155lbs, que vamos a hablar sobre la posible próxima pelea de Paddy Pimblett este 2025. </p>
                    <p>Debido a las recientes declaraciones, en las que Paddy afirmó que primero pelearía contra un top8, luego contra un top5, y finalmente contra el campeón de la división por el campeonato, podemos ir armando el rompecabezas con estas pistas. Dado que al menos en mi opinión, el próximo rival está entre el polaco Mateusz Gamrot y el estadounidense Michael Chandler, es decir entre el #8 y el #7 de peso ligero, y yendo más allá, me voy a decantar por Michael Chandler como la opción más probable para Paddy, por las razones que voy a explicar a continuación. </p>
                    <p>En primer lugar, el mismo Michael Chandler ha dejado caer la posibilidad de enfrentarse en el futuro cercano en su cuenta de X, escribiendo primero el siguiente mensaje: <b>&quot;Ustedes son graciosos. Pelear con Patty Pimblett es tenebroso. Sólo bromeo. ¿Se lo imaginan?&quot;</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Y’all are funny. Fighting Patty Pimblett is a scary fight. Just joking. Can you imagine???</p>&mdash; Michael Chandler (@MikeChandlerMMA) <a href="https://twitter.com/MikeChandlerMMA/status/1889454224901083349?ref_src=twsrc%5Etfw">February 11, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>La pelea con Chandler es de las que tiene más sentido realizar, especialmente desde el lado mediático, puesto que su cara es bastante más reconocida que la de Gamrot. Esto sumado al estatus de estrella que podría adquirir Paddy si continua acumulando victorias en la compañía, hace de este enfrentamiento algo más fácil de vender para la UFC.</p>
                    <p>Yo creo que la UFC ve esto y por eso busca allanarle el camino a Pimblett lo más posible, para que como mínimo logre pelear por el cinturón aunque sea una vez. Por esto, aunque pelear contra ningún luchador ranqueado es fácil, Michael Chandler es una buena alternativa para tener una pelea competitiva, dado que primero es ya un luchador veterano, que va a cumplir 39 años en abril; segundo que tuvo un gran periodo de inactividad desde 2022, debido a que estuvo esperando una pelea con Conor McGregor que finalmente nunca llegó; y tercero porque viene de 2 derrotas consecutivas, luego de perder con Dustin Poirier en noviembre de 2022, y posteriormente con Charles Oliveira por decisión en el UFC 309, en noviembre de 2024. Sobre este tema se explayó y explicó mejor el youtuber cubano de MMA <b>Green Fits</b>.</p>
                    <YouTubeEmbed videoid='RCBE9AQ3buo' />
                    <p>Lo que quedaría por ver es la fecha, sobre lo que también hay varios rumores, pero de todo lo que se puede especular hay una opción que luce más probable que el resto, siendo los que sitúan su próximo combate en abril de este año, en el UFC 314 que se va a organizar en Miami. Se debe especialmente a una publicación de Instagram del luchador inglés en la que da a entender esto, afirmando que no puede esperar para dar un show al público pronto. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">🚨| Paddy Pimblett confirms he will return at <a href="https://twitter.com/hashtag/UFC314?src=hash&amp;ref_src=twsrc%5Etfw">#UFC314</a> in Miami on April 12th. 🏝️ <a href="https://t.co/io71Odsq75">pic.twitter.com/io71Odsq75</a></p>&mdash; MMA Orbit (@mma_orbit) <a href="https://twitter.com/mma_orbit/status/1890476630688108857?ref_src=twsrc%5Etfw">February 14, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}