import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc332.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 332: ¡Natalia Silva vs Wang Cong!',
    description: "Noche de UFC por el título de peso mosca femenino entre Natalia Silva vs Wang Cong. Además el argentino Esteban Ribovics enfrenta a King Green.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc332.8efb1b03.webp&w=828&q=65',
        title: 'UFC 332: ¡Natalia Silva vs Wang Cong!',
        description: "Noche de UFC por el título de peso mosca femenino entre Natalia Silva vs Wang Cong. Además el argentino Esteban Ribovics enfrenta a King Green.",
        url: 'https://fullmma.org/eventos/ufc332'
    }
}

export default function UFC332 () {
    return(
        <main>
            <ArticleHero title="UFC 332: ¡Natalia Silva vs Wang Cong! ¡Deiveson Figeuiredo!" subtitle='¡Esteban Ribovics vs King Green! ¡Ateba Gautier vs Roman Kopylov!' image={hero} date='2026-10-03' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en Salt Lake City en este UFC 332, con la brasileña <b>Natalia Silva</b> y la china <b>Wang Cong</b> peleando por el título vacante de peso mosca femenino, luego de que <b>Valentina Shevchenko</b> lo dejará debido a una lesión que le impidió competir hoy. </p>
                    <p>Además en la pelea coestelar tendremos tremendo combate entre el excampeón de UFC <b>Deiveson Figueiredo</b> y el joven estadounidense <b>Payton Talbott</b>, en una pelea que puede definir el futuro de la división de peso gallo. Por si fuera, también tendremos un choque de títanes entre el perro de pelea y veterano de la compañía <b>King Green</b>, y el joven argentino <Link href="/peleadores/esteban-ribovics">Esteban Ribovics</Link> en la que será la candidata a la pelea de la noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Eric Nolan Noquea a Court McGee en el tercer asalto</h2>
                    <p>Brutal manera de comenzar esta cartelera con una pelea especular por parte de ambos luchadores, donde hubo un montón de intercambio de golpes en un combate entre 2 strikers 100%. Finalmente, como se veía venir desde el comienzo, los golpes de Nolan eran los más duros y los que hacían más daño a su rival, terminando por noquear en el tercer asalto y ganando el combate.</p>
                    <h2>Ismail Naurdiev Derrota a Marvin Vettori Por Decisión Unánime</h2>
                    <p>Gran victoria por parte del luchador marroquí <b>Ismail Naurdiev</b>, quien luego de mostrarse superior a lo largo del combate, igualado en intercambio de golpes, pero claramente superior en la lucha, logrando derribar en 3 ocasiones a su rival, se termina llevando una buena victoria por decisión unánime ante el excontendiente del título de peso medio, el italiano <b>Marvin Vettori</b>.</p>
                    <h2>Alexander Hernandez Noquea a Rafael Dos Anjos en el Segundo Asalto</h2>
                    <p>Espectacular victoria del estadounidense <b>Alexander Hernandez</b>, que luego de dominar completamente en el striking a su rival, lo derribó a golpes en el segundo asalto, golpeándolo hasta que el árbitro los separó y lo dió como ganador por TKO. De esta forma, el veterano brasileño y excampeón de peso ligero <b>Rafael Dos Anjos</b> se retira el día de hoy con esta derrota. </p>
                    <h2>Jacobe Smith Noquea a Bruce Whitehead en el Primer Asalto</h2>
                    <p>Espectacular victoria por nocaut por parte del estadounidense <b>Jacobe Smith</b>, quien en un derribo se ve que dejó conmocionado a su rival, necesitando apenas de un par de golpes para dejarlo definitivamente noqueado. Logrando de esta forma una victoria por nocaut ante su compatriota en el primer asalto. </p>
                    <h2>Johnny Walker Noquea a Mick Parkin en el Primer Asalto</h2>
                    <p>Brutal KO por parte del brasileño <b>Johnny Walker</b>, quien estaba debutando en la división de peso pesado, luego de años de competir en los semipesados, haciéndolo de la mejor manera con KO en el primer asalto, que llegó luego de lanzar un rodillazo volador a la cabeza de su rival que lo tumbaría al suelo de manera inmediata. </p>
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