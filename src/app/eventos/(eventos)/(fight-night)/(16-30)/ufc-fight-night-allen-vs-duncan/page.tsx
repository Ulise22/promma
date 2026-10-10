import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/allen-vs-duncan.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Brandon Allen vs Christian Leroy Duncan!',
    description: '',
    openGraph: {
        images: '',
        title: 'UFC Fight Night: ¡Brandon Allen vs Christian Leroy Duncan!',
        description: '',
        url: 'https://fullmma.org/eventos/ufc-fight-night-allen-vs-duncan',
    }
}

export default function AllenDuncan () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Brandon Allen vs Christian Leroy Duncan!' subtitle='¡Loopy Godinez vs Ketlen Souza! ¡Francisco Prado vs Ismael Bonfim!' image={hero} date='2026-10-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de UFC en el META APEX con un espectacular evento estelar, cuando el #4 de la división de peso medio <Link href='/peleadores/brendan-allen'>Brendan Allen</Link>, se enfrente al #10 del ranking, el inglés <b>Christian Leroy Duncan</b>, en un comabte donde ambos vienen de buenas rachas ganadoras y que hoy buscan acercarse a una pelea por el título de la división. Por otro lado, en la pelea coestelar tendremos el enfrentamiento en peso ligero entre el brasileño <b>Matheus Camilo</b> y el inglés <b>Jai Herbert</b>. </p>
                    <p>Además, habrá presencia latina por partida doble el día de hoy, primero en las preliminares, cuando el argentino <b>Francisco Prado</b> se enfrente al brasileño <b>Ismael Bonfim</b>, en un combate que promete y mucho. Y luego en la cartelera estelar, cuando la #8 de peso paja femenino, la mexicana <b>Loopy Godinez</b>, se enfrente a la brasileña <b>Ketlen Souza</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Ernesta Karackaité y Melissa Gatto Empatan por Decisión Mayoritoria</h2>
                    <p>Empate en esta primer pelea de la noche, luego de que a la lituana <b>Ernesta Karackaité</b> se le descontará un punto por agarrarse de la reja en el primer asalto, dejando este como empate a pesar de que en realidad lo había ganado. El segundo asalto fue un dominió total de Ernesta, que en el striking mostró un nivel sobresaliente, además de defender de excelente manera los derribos. Y el último fue para la brasileña <b>Melissa Gatto</b>, quien consiguió un derribo temprano y controló en el suelo a su rival durante todo el asalto. De esta forma el primer combate de la noche acaba en empate mayoritario 28-28. </p>
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