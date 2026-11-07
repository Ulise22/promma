import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/cortes_acosta-vs-walker.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Waldo Cortes Acosta vs Johnny Walker!',
    description: 'Noche de UFC en el UFC META APEX, con el dominicano Waldo Cortes Acosta enfrentando la brasileño Johnny Walker en la pelea estelar, en un choque de pesos pesados espectacular. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcortes_acosta-vs-walker.2373dc1e.webp&w=828&q=65',
        title: 'UFC Fight Night: ¡Waldo Cortes Acosta vs Johnny Walker!',
        description: 'Noche de UFC en el UFC META APEX, con el dominicano Waldo Cortes Acosta enfrentando la brasileño Johnny Walker en la pelea estelar, en un choque de pesos pesados espectacular. ',
        url: 'https://fullmma.org/eventos/ufc-fight-night-cortes-acosta-vs-walker',
    }
}

export default function CortesAcostaVsWalker () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Waldo Cortes Acosta vs Johnny Walker!' subtitle='¡Tatiana Suarez vs Virna Jandiroba!' image={hero} date='2026-11-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Gran evento de UFC tenemos esta noche, con un evento espectacular de último momento, luego de que se suspendiera la pelea programada entre <b>Sean Brady</b> y <b>Gabriel Bonfim</b>, siendo reemplazada por el grandioso combate entre <Link href='/peleadores/waldo-cortes-acosta'>Waldo Cortes Acosta</Link> y <Link href='/peleadores/johnny-walker'>Johnny Walker</Link>, en un choque literal de pesos pesados. </p>
                    <p>Por si fuera poco, tendremos un muy buen combate femenino en la pelea coestelar, con la #2 de peso mosca, la estadounidense <b>Tatiana Suarez</b>, enfrentando a la #3 de la división, la brasileña <b>Virna Jandiroba</b>. Además tendremos presencia latina en la cartelera preliminar, con el salvadoreño <b>Carlos Calderon</b>, enfrentando en peso pluma al estadounidense <b>Austin Bashi</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Jose Souza Noquea a Johnny Parsons en el Primer Asalto</h2>
                    <p>Espectacular manera de iniciar la cartelera de esta noche, con una finalización en el primer asalto, cortesía del brasileño <b>José Souza</b>, quien ya partía como favorito en el combate, haciendo valer esto ante el estadounidense <b>Johnny Parsons</b>. </p>
                    <h2>Seokhyeon Ko Derrota a Wellington Turman Por Decisión Unánime</h2>
                    <p>Gran victoria del luchador surcoreano <b>Seokhyeon Ko</b>, quien dominó de principio a fin al brasileño <b>Wellington Turman</b>, consiguiendo una meritoria victoria por decisión unánime 30-27. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
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