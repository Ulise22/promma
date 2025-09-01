import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/the_smashing_machine.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'The Smashing Machine',
    description: "",
    openGraph: {
        title: 'The Smashing Machine',
        description: "",
        url: 'https://fullmma.org/noticias/the-smashing-machine'
    }
}

export default function TheSmashingMachine () {
    return(
        <main>
            <ArticleHero title='The Smashing Machine: Todo lo que Sabemos Sobre la Película de Mark Kerr Protagonizada por La Roca' subtitle="Todo lo que hay que saber sobre la próxima película Dwayne Johnson, The Smashing Machine, basada en la vida del peleador de UFC Mark Kerr" image={hero} date='2025-0-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Cada vez falta menos para que se estrene la película protagonizada por <b>Dwayne La Roca Johnson</b>, basada en la historia de vida del excampeón de peso pesado de la UFC y ex peleador de PRIDE FC <Link href='/articulos/que-le-paso-a-mark-kerr'>Mark Kerr</Link>, del cual ya escribímos un artículo. Por eso, estando a casi un mes del estreno de esta película vamos a repasar todo lo que se sabe hasta ahora sobre esta cinta. </p>
                    <h2>The Smashing Machine Reparto</h2>
                    <p>Para comenzar, esta película estará protagonizada por el ya mencionado <b>Dwayne La Roca Johnson</b>, quien encarnará al mítico peleador de finales de los 90 y principios de los 2000 <b>Mark Kerr</b>, quien fue 2 veces campeón de la UFC, y quien alcanzó el estrellato al pelear en <Link href='/articulos/que-paso-con-pride-fc'>PRIDE FC</Link>, haciéndose la fama de ser un hombre invencible y siendo considerado el mejor peleador del mundo durante un lapso de tiempo. Además, como ocupando también un rol protagónico, estará la actriz británica <b>Emily Blunt</b>, quien interpretará a <b>Dawn Staples</b>, quien fue pareja y esposa del Mark Kerr, siendo además una exmodelo Playboy, teniendo un rol muy importante en lo que fue el desarrollo de la carrera de Kerr. </p>
                    <p>Sacando a los 2 actores principales, hay muchos cameos de peleadores reales interpretando a otro luchadores. Uno de los más destacados es el del excampeón de peso pesado de la UFC <b>Bas Rutten</b>, quien se interpretará a sí mismo pero unos años más joven, dado que fue compañero de entrenamiento Mark Kerr, y fue él quien en su momento le aconsejó que se separará de Dawn Staples. </p>
                    <p>Además, el peleador de MMA, <b>Ryan Bader</b>, quien fue campeón y defendió varias veces su cinturón en Bellator, aparecerá en la película interpretando al legendario <b>Mark Coleman</b>, quien fue múltiples veces campeón de UFC y fue campeón de PRIDE FC, estando presente en esta película al haber sido un gran amigo de Mark Kerr. </p>
                    <p>Finalmente, la última participación que quiero destacar es la del actual campeón de peso pesado de boxeo <b>Oleksandr Usyk</b>, quien estará interpretando a <b>Igor Vovchanchyn</b>, quien fue el primer peleador en ganarle a Mark Kerr en toda su carrera, aunque aquel combate terminaría quedando en un no-contest (sin resultado), al considerar que el golpe que provocaría el nocaut era ilegal. Sin embargo tiempo después tendrían una revancha y la volvería a ganar el peleador interpretado por Usyk. </p>
                    <YouTubeEmbed videoid='aRpnP3LZ99g' />
                    <h2>The Smashing Machine Sinópsis</h2>
                    <p>The Smashing Machine es una biopic protagonizada por <b>Dwayne Johnson</b>, que recorrerá la vida del expeleador de MMA <Link href='/articulos/que-le-paso-a-mark-kerr'>Mark Kerr</Link>, cuya historia está marcada por el ascenso meteórico en las artes marciales mixtas, convirtiéndose en uno de los mejores peleadores del mundo, y en una caída muy pronunciada, marcada por las adicciones de todo tipo, y por una relación tóxica con su ex esposa <b>Dawn Staples</b>, quien en esta película será protagonizada por <b>Emily Blunt</b>. </p>
                    <p>El largometraje contará con una duración de 2:03hs, cuenta con un presupuesto de $40 millones, será producida y distruibuída por <b>A24</b>, y estará siendo dirigida y guionada por el cineasta <b>Benjamin Sadfie</b>. </p>
                    <h2>Donde Ver The Smashing Machine</h2>
                    <p>La película se va a poder ver en cines a partir del 3 de octubre del 2025, y será cuestión de tiempo para que una plataforma de streaming consiga los derechos de la película para tenerla en su catálogo y poder verla desde casa. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}