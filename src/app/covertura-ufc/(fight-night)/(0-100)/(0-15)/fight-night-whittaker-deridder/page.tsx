import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/whittaker-deridder.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC Abu Dhabi: ¡Robert Whittaker vs Reiner De Ridder!',
    description: 'Pelea entre Robert Whittaker y Reiner de Ridder en el UFC Abu Dhabi de este sábado 26 de julio de 2025.',
    openGraph: {
        title: 'UFC Abu Dhabi: ¡Robert Whittaker vs Reiner De Ridder!',
        description: 'Pelea entre Robert Whittaker y Reiner de Ridder en el UFC Abu Dhabi de este sábado 26 de julio de 2025.',
        url: 'https://fullmma.org/covertura-ufc/fight-night-whittaker-deridder'
    }
}

export default function WhittakerDeRidder () {
    return(
        <main>
            <ArticleHero title='UFC Abu Dhabi: ¡Robert Whittaker vs Reiner De Ridder!' subtitle='¡Petr Yan vs Marcus McGhee! ¡Shgara Magomedov vs Mar-André Barriault!' image={hero} date='2025-07-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Muy buen evento de UFC tenemos el día de hoy, con una aperitivo estelar espectacular, donde el excampeón de peso medio de la UFC, <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> se enfrentará al ex doble campeón de ONE Championship, <b>Reiner De Ridder</b>, en una pelea que promete ser memorable. </p>
                    <p>Además contamos con la presencia de tremendos peleadores que siempre son garantía de acción en el octágono, como lo son el ruso <b>Petr Yan</b>, quien estará enfrentando a <b>Marcus McGhee</b> en la pelea coestelar. Y contaremos con el regreso del Pirata, de <Link href='/peleadores/shara-magomedov'>Shara &quot;Bullet&quot; Magomedov</Link>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Billy Elekana Derrota a Ibo Aslan Por Decisión Unánime</h2>
                    <p>En una pelea bastante decepcionante y con poca acción para ser honestos, quien se terminó por llevar la victoria a su récord fue el estadounidense <b>Billy Elekana</b>, que fue capaz de conectar algunos pocos golpes más que su rival, en un combate donde ambos estuvieron demasiado expectantes de lo que hacía el otro, provocando que apenas se tiraran golpes. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Kevin Borjas Derrota a &quot;Lazy Boy&quot; Ronaldo Rodriguez</h2>
                    <p>El peruano Kevin Borjas consigue una espectacular victoria ante el mexicano Ronaldo Rodriguez, demostrando tener un gran poder en las manos, sentando varias veces a su rival con esa mano derecha que fue capaz de conectar cuando quiso. </p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}