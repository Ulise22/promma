import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc328.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 328: ¡Khamzat Chimaev vs Sean Strickland!',
    description: "",
    openGraph: {
        images: '',
        title: 'UFC 328: ¡Khamzat Chimaev vs Sean Strickland!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc328'
    }
}

export default function UFC328 () {
    return(
        <main>
            <ArticleHero title="UFC 328: ¡Khamzat Chimaev vs Sean Strickland! ¡Joshua Van vs Tatsuro Taira!" subtitle='¡Waldo Cortes Acosta vs Alexander Volkov! ¡Joel Álvarez vs Yaroslav Amosov!' image={hero} date='2026-05-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p></p>
                    <p></p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>José Ochoa Derrota a Clayton Carpenter por Decisión Unánime</h2>
                    <p>En un dominio total por parte del luchador peruano <b>José Ochoa</b>, el latinoamericano finalmente se lleva la victoria luego de mostrar un striking muchos niveles superior al de su rival estadounidense <b>Clayton Carpenter</b>, quien no sólo no pudo ante el striking de su rival, sino que tampoco pudo llevarlo al suelo, donde podría haber tenido alguna ventaja. De esta manera, el luchador de Perú se lleva la victoria habiendo ganado todos los asaltos.</p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2></h2>
                    <p></p> */}
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