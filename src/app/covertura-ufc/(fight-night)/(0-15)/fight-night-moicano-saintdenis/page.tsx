import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-15/moicano_vs_saintdenis-hero.jpg'

export const metadata: Metadata = {
    title: 'Moicano vs Saint Denis',
    description: '',
    openGraph: {
        title: 'Moicano vs Saint Denis',
        description: '',
        url: 'https://fullmma.org/noticias/fight-night-moicano-saintdenis'
    }
}

export default function MoicanoSaintDenis () {
    return(
        <main>
            <ArticleHero title='UFC FIGHT NIGHT: ¡Renato Moicano vs Benoit Saint Denis! ¡Imavov vs Allen!' subtitle='Noche de UFC en Francia, donde además tenemos a la argentina Ailín Pérez peleando, y al español Daniel Barez enfrentando al mexicano Victor Altamirano' image={hero} date='2024-09-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy tenemos evento de UFC en Francia, con una larga lista de luchadores franceses que serán protagonistas de esta noche de MMA. El evento estará encabezado por el brasileño <b>Renato Moicano</b>, quien viene de una espectácular victoria en el <Link href='/covertura-ufc/ufc300-early-prelims'>UFC 300</Link>, donde logró someter a su rival en el segundo asalto, y por el francés <b>Benoit Saint Denis</b>, quien viene de una derrota por nocaut ante el histórico de la división de peso ligero <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en el <Link href='/covertura-ufc/ufc299'>UFC 299</Link>.</p>
                    <h2>Daniel Barez Derrota a Victor Altamirano Por Decisión Unánime</h2>
                    <p>En esta tremenda pelea que nos regalaron el español y el mexicano, los jueces finalmente terminaron por decantarse por Dani Barez, quien se llevó la pelea por decisión unánime. </p>
                    <p>Durante el primer asalto el español fue el claro dominador del combate, estando cerca de noquera con una tremenda mano derecha que llevó a su rival al piso. En el segundo asalto la pelea estuvo más cerrado, con un Altamirano que conectó más golpes, pero que sufrió 2 knockdowns por parte del español que lo derribaron al piso. </p>
                    <p>En el tercer asalto el claro dominador fue el peleador mexicano, pero que ya habiendo perdido los 2 asaltos anteriores, terminó por perder la pelea. Sin embargo ambos peleadores nos ofrecieron un lindo espectáculo.</p>
                    <h2>Ailín Pérez Somete a Daria Zhelezniakova en el Primer Asalto</h2>
                    <p>La argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link> se luce en la pelea y consigue una tremenda sumisión con un triángulo de brazo en el primer asalto que le otorga la victoria. </p>
                    <p>Con esta victoria, Ailín consigue su cuarta victoria consecutiva, siendo la única peleadora de Argentina ranqueada en el top #15 de su división. </p>
                    <h2>Nassourdine Imavov vs Brendan Allen</h2>
                    <p>En Proceso...</p>
                    <h2>Renato Moicano vs Benoit Saint Denis</h2>
                    <p>En proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}