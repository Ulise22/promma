import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc330.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 330: ¡Islam Makhachev vs Ian Garry!',
    description: "Gran evento de UFC con Islam Makhachev defendiendo el título de peso wélter ante Ian Garry. Y con Mackenzie Dern defendendiendo su cinturón de campeón ante Gillian Robertson.",
    openGraph: {
        images: '',
        title: 'UFC 330: ¡Islam Makhachev vs Ian Garry!',
        description: "Gran evento de UFC con Islam Makhachev defendiendo el título de peso wélter ante Ian Garry. Y con Mackenzie Dern defendendiendo su cinturón de campeón ante Gillian Robertson.",
        url: 'https://fullmma.org/eventos/ufc330'
    }
}

export default function UFC330 () {
    return(
        <main>
            <ArticleHero title="UFC 330: ¡Islam Makhachev vs Ian Garry! ¡Mackenzie Dern vs Gillian Robertson!" subtitle='¡Esteban Ribovics vs Edson Barboza! ¡Joel Álvarez vs Chidi Njokuani!' image={hero} date='2026-08-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Gran noche de UFC tenemos el día de hoy en la ciudad de <b>Rocky Balboa</b>, Philadelphia, donde veremos en el evento estelar al campeón de peso wélter <Link href="/peleadores/islam-makhachev">Islam Makhachev</Link> denfender por primera vez su cinturón ante el irlandés <Link href="/peleadores/ian-garry">Ian Garry</Link>, que viene de una gran victoria ante otro luchador como <Link href="/peleadores/belal-muhammad">Belal Muhammad</Link>. Además, en el evento coestelar tendremos otra pelea titular, cuando la recientemente coronada campeona <Link href="/mujeres/mackenzie-dern">Mackenzie Dern</Link> defenderá por primera vez el título ante la #5 de la división, <b>Gillian Robertson</b>. </p>
                    <p>Por si fuera poco, para el público hispano tendremos 2 peleas a las que vamos a prestarle especial atención. Primero, con el español <Link href="/peleadores/joel-alvarez">Joel Álvarez</Link> cerrando las preliminares en una pelea que aceptó en corto aviso ante el estadounidense <b>Chidi Njokuani</b>. Y luego, abriendo la cartelera estelar tendremos al argentino <Link href="/peleadores/esteban-ribovics">Esteban Ribovics</Link> enfrentando al histórico peleador brasileño <b>Edson Barboza</b>, en la que es candidata a ser una de las peleas de la noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>¡Jeremiah Wells Somete a Myktybek Orolbai en el Tercer Asalto!</h2>
                    <p>Sorpresón el que acaba de dar el oriundo de Philadelphia <b>Jemeiah Wells</b>, quien partía claramente desfavorecido en las casas de apuestas por bastante margen, y que aunque inició perdiendo el combate, siendo derribado y sufriendo la tremenda lucha del luchador de Kirguistán, fue capaz de conectar una llave en el cuello de su rival justo cuando este intento derribarlo, para finalmente mandarlo a dormir con una sumisión que le dió la victoria en el tercer asalto, de la única forma que podría haberlo conseguido. </p>
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