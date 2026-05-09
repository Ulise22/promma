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
    description: "UFC 328 con Khamzat Chimaev defendiendo el título ante Sean Strickland. Además, el japonés Tatsuro Taira busca quitarle el cinturón de peso mosca a Joshua Van. ",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc328.8c6f1437.webp&w=828&q=65',
        title: 'UFC 328: ¡Khamzat Chimaev vs Sean Strickland!',
        description: "UFC 328 con Khamzat Chimaev defendiendo el título ante Sean Strickland. Además, el japonés Tatsuro Taira busca quitarle el cinturón de peso mosca a Joshua Van. ",
        url: 'https://fullmma.org/eventos/ufc328'
    }
}

export default function UFC328 () {
    return(
        <main>
            <ArticleHero title="UFC 328: ¡Khamzat Chimaev vs Sean Strickland! ¡Joshua Van vs Tatsuro Taira!" subtitle='¡Waldo Cortes Acosta vs Alexander Volkov! ¡Joel Álvarez vs Yaroslav Amosov!' image={hero} date='2026-05-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremenda cartelera tenemos esta noche, una de las mejores del año que nos trae la UFC, en New Jersey, encabezada por el campeón de peso mediano <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, quien viene de ganar el cinturón al sacárselo a <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, quien estará enfrentando al excampeón estadounidense <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien viene de una gran victoria por nocaut ante <b>Anthony Hernandez</b> en el <Link href='/eventos/fight-night-strickland-hernandez'>UFC Fight Night: Strickland vs Hernandez</Link>. ADemás en la pelea coestelar tenemos otra pelea titular, con el campeón birmano <Link href='/peleadores/joshua-van'>Joshua Van</Link> haciendo su primer defensa luego de sacarle el cinturón a <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, ante el japonés <b>Tatsuro Taira</b>. </p>
                    <p>Por si fuera poco, en la mismca cartelera estelar estará peleando el dominicano de peso pesado <Link href='/peleadores/waldo-cortes-acosta'>Waldo Cortes Acosta</Link>, ante el ruso #2 del ranking, <b>Alexander Volkov</b>. Los estadounidense <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> y <b>Sean Brady</b>, también estarán presentes en lo que promete ser un peleón. Y finalmente el español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link> hoy tiene su oportunidad de entrar en los rankings de peso wélter al enfrentar al ucraniano #14 de la división, <b>Yaroslav Amosov</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>José Ochoa Derrota a Clayton Carpenter por Decisión Unánime</h2>
                    <p>En un dominio total por parte del luchador peruano <b>José Ochoa</b>, el latinoamericano finalmente se lleva la victoria luego de mostrar un striking muchos niveles superior al de su rival estadounidense <b>Clayton Carpenter</b>, quien no sólo no pudo ante el striking de su rival, sino que tampoco pudo llevarlo al suelo, donde podría haber tenido alguna ventaja. De esta manera, el luchador de Perú se lleva la victoria habiendo ganado todos los asaltos.</p>
                    <h2>Baisangur Susurkaev Somete a Djorden Santos en el tercer asalto</h2>
                    <p>Espectacular desempeño del checheno <b>Baisangur Susurkaev</b>, que en una pelea competetitva, más cerrada de lo que esperabamos, con buenas combinaciones de ambos luchadores, es capaz de finalizarla en el último asalto, conectando un mataleón espectacular que terminaría desmayando a su rival brasileño <b>Djorden Santos</b>. </p>
                    <h2>Pat Sabatini Derrota a William Gomis por Decisión Unánime</h2>
                    <p>Gran victoria para el estadounidense <b>Pat Sabatini</b>, quien mediante un dominio total de la lucha fue capaz de ganar sumando puntos ante el francés <b>William Gomis</b>, quien aunque resistió bastante sin ser derribado, no fue capaz de hacerle daño alguno a su rival durante gran parte del combate. De esta manera, el estadounidense se lleva la victoria por decisión unánime. </p>
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