import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/gaethje-fue-campeon.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Justin Gaethje fue campeón de UFC',
    description: "Justin Gaethje fue campeón del título interino de la UFC en 2 ocasiones, y fue campeón del BMF en una ocasión, pero ¿fue campeón indiscutido de la UFC?",
    openGraph: {
        images: '',
        title: 'Justin Gaethje fue campeón de UFC',
        description: "Justin Gaethje fue campeón del título interino de la UFC en 2 ocasiones, y fue campeón del BMF en una ocasión, pero ¿fue campeón indiscutido de la UFC?",
        url: 'https://fullmma.org/noticias/justin-gaethje-fue-campeon-de-ufc',
    }
}

export default function JustinGaethjeFueCampeon () {
    return(
        <main>
            <ArticleHero title='¿Justin Gaethje fue campeón de la UFC?' subtitle="La historia de los títulos interino de Justin Gaethje y su intento por ser campeón indiscutido de la UFC ¿La tercera es la vencida?" image={hero} date='2026-05-29' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El peleador estadounidense <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> fue campeón interino de la UFC en 2 ocasiones, primero en 2020 luego de noquear a su compatriota <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, y luego en enero de este 2026 en el <Link href='/eventos/ufc324'>UFC 324</Link>, cuando fue capaz de derrotar de manera contundente al inglés <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> por decisión unánime, sin embargo, jamás pudo obtener el cinturón indiscutido de la compañía, a pesar de pelear por él en 2 ocasiones, y de estar a punto de intentarlo una tercera vez. Además de eso, fue campeón del título simbólico <b>BMF</b> de la UFC. </p>
                    <h2>El primer título interino de Justin Gaethje</h2>
                    <p>La primer gran oportunidad para <b>The Highlight</b> llegó eb medio de la pandemia, el 9 de mayo de 2020, cuando se le programó para pelear por el Campeonato Interino de Peso Ligero de la UFC ante el estadounidense <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, debido a por motivos sanitarios el entonces campeón ruso <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> no podía salir de Rusia, y por lo tanto no podía defender su cinturón.</p>
                    <p>Aquella noche tendría un combate espectacular, en lo que sería una de las mejores peleas del año, dominando gran parte del combate y siendo capaz finalmente de finalizar a Tony Ferguson en el quinto asalto por TKO, ganando el bono a la Actuación de la Noche, ganando el bono a La Pelea de la Noche, cortando con la racha de 11 victorias consecutivas de Ferguson, y más importante, ganando el cinturón interino de UFC de peso ligero. </p>
                    <YouTubeEmbed videoid='dGWDT3iyrdw' />
                    <h2>La Primer Pelea por el Título de Justin Gaethje</h2>
                    <p>Como es la regla, el campeón interino enfrentó al campeón indiscutido <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, en lo que sería su primera oportunidad de ser un campeón &quot;de verdad&quot; de la UFC. La pelea se programaría para el 24 de octubre de 2020</p>
                    <p>Lamentablemente para nuestro protagonista, se tuvo que enfrentar a uno de los mejores peleadores de la historia de la división, en el que además era un momento muy especial y emotivo para él, debido a que esté fue su último combate profesional en las MMA. Es por eso que a pocos sorprendió que Khabib fuera capaz de someter a Justin Gaethje en el segundo asalto de la pelea. </p>
                    <h2>La Segunda Pelea por el Título de Justin Gaethje</h2>
                    <p>El estadounidense volvería a la senda de la victoria rápidamente, consiguiendo una victoria ante el excampeón de <b>BELLATOR</b> <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> por decisión unánime que lo pondría en el camino para enfrentar al nuevo campeón <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. </p>
                    <p>La pelea por el título se programaría el 7 de mayo de 2022 en el <b>UFC 274</b>, y lamentablemente, Gaethje volvería a caer derrotado al ser sometido en el primer asalto de la pelea, perdiendo su segunda oportunidad de ser campeón indiscutido de la UFC. </p>
                    <YouTubeEmbed videoid='5sX_HzPNPoM' />
                    <h2>Justin Gaethje Campeón del BMF</h2>
                    <p>En su siguiente combate ante el luchador de Azerbaiyán <b>Rafael Fiziev</b>, Justin volvería a ganar de forma contundente en un peleón, y aunque esto no sería suficiente para darle una oportunidad por el título de la división nuevamente, si sería suficiente para demostrar que Gaethje no tiene peleas aburridas, y que tenerlo a él en la cartelera es diversión y violencia garantizada, por eso no fue sorpresa cuando se lo programó para pelear por el cinturón simbólico <b>BMF</b> (Baddest Motherfucker).</p>
                    <p>Para eso debería enfrentar a su compatriota, el histórico <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, con fecha para el 29 de julio de 2023 en el <b>UFC 291</b>. Aquella noche, con todo el mérito del mundo, Gaethje conectaría una patada en la cabeza de su rival en el segundo asalto que lo dejaría KO, logrando de esta manera la victoria que lo convertíria en el <b>BMF</b> de la UFC. </p>
                    <h3>Justin Gaethje vs Max Holloway en el UFC 300</h3>
                    <p>Justin se convertiría en el primer peleador en defender el cinturón, al enfrentar al hawaiano <Link href='/peleadores/max-holloway'>Max Holloway</Link> el día 13 de abril de 2024 en el <b>UFC 300</b>.</p>
                    <p>Lamentablemente para nuestro protagonista, en lo que sería una pelea épica y espectacular, caería derrotado luego de ser noqueado en el último segundo de la pelea, en lo que se convertiría en el mejor KO de la historia, uno de los mejores momentos en toda la historia de la UFC, y donde lamentablemente sería él la víctima de ese nocaut. De esta manera perdería su cinturón BMF a manos de Holloway. </p>
                    <YouTubeEmbed videoid='h9KBcib8pHc' />
                    <h2>El Segundo Cinturón Interino de Justin Gaethje</h2>
                    <p>Sin embargo, si algo queda claro, es que Justin Gaethje es un ejemplo de resiliencia, cosa que pelea a pelea lo va demostrando, reponiéndose de todas sus derrotas en la UFC ante rivales complicadísimos. Esta vez no sería la excepción, consiguiendo una nueva victoria en su revancha ante <b>Rafael Fiziev</b>, a quien volvería a derrotar por decisión unánime en lo que sería la pelea de la noche. </p>
                    <p>Al mismo tiempo, el nuevo campeón de la división de peso ligero <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, debido a problemas personales relacionados con <Link href='/noticias/ilia-topuria-que-paso-con-su-esposa'>su esposa</Link> y su divorcio, no se encontraba en posición de defender su cinturón, por lo que se pondría en juego un cinturón interino, en el que participarían el propio <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> y el inglés <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>.</p>
                    <p>La pelea se programaría el 24 de enero de 2026 en la primer cartelera del año y de la <b>Era Paramount</b> en el evento estelar <Link href='/eventos/ufc324'>UFC 324</Link>. Aquella noche, contrario a lo que pensaban muchos, nuestro protagonista dominaría de principio a fin a su rival, en lo que sería un combate memorable, ganador del bono a la Pelea de la Noche, con Gaethje venciendo por decision unánime. De esta forma ganaría por segunda vez en su carrera el cinturón interino de peso ligero de la UFC.</p>
                    <h2>Justin Gaethje vs Ilia Topuria ¿La Tercera es la Vencida?</h2>
                    <p>Ahora que es el campeón interino, el estadounidense se ganó el derecho a pelea por el cinturón una vez más, la tercera oportunidad de su carrera a sus 37 años. </p>
                    <p>Para eso tendrá por delante un desafío que para muchos, yo incluído, parece imposible, con las apuestas ya mostrándose a favor de su rival por un margen muy amplio, dado que deberá enfrentar a un rival que hasta ahora parece practicamente invencible como lo es el español <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, que mantiene su récord invicto con 17-0, que es el décimo <Link href='/articulos/todos-los-dobles-campeones-de-ufc'>Doble Campeón de la UFC</Link>, y viene de la que probablemente sea la mejor racha de 3 victorias consecutivas, noqueando a 3 leyendas del deporte como lo son <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, <Link href='/peleadores/max-holloway'>Max Holloway</Link> y <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. Teniendo en cuenta que Ilia ya noqueó a 2 de los rivales que vencieron a Justin y que el estilo del estadounidense parece venirle como anillo al dedo al español, el panorama no es alentador.</p>
                    <p>Sin embargo, la pelea por el título se hará en <Link href='/noticias/ufc-casa-blanca'>La Casa Blanca</Link> por conmemoración del 250 aniversario de la Independencia de los Estados Unidos, la pelea será presenciada por el mismísimo presidente del país <b>Donald Trump</b>, y habrá una gran cantidad de invitados por el presidente, además de un numeroso grupo de militares que presenciarán el evento. También habrá entre 80.000-100.000 aficionados estadounidenses en El Ellipse, presenciando la pelea, por lo que Gaethje debería contar con la teorica ventaja de ser local y tener al público a su favor. Además de ser el estadounidense que estará representando a su país en el aniversario 250 de su propio país. </p>
                    <p>Esta parece ser su última oportunidad de ser campeón indiscutido de la UFC, contará con el apoyo de su país, al que deberá representar en esta fecha importante, y deberá enfrentar a un rival casi 10 años más joven que parece invencible. Pero si algo nos ha enseñado la historia de Justin Gaethje, es que por mucho que las posibilidades no parezcan estar en su favor, nunca hay que darlo por muerto ni descontarlo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}