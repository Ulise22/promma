import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc329.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 329: ¡Conor McGregor vs Max Holloway!',
    description: "Histórico regreso de Conor McGregor tras 5 años para enfrentar a Max Holloway en una revancha épica en el UFC 329. ",
    openGraph: {
        images: '',
        title: 'UFC 329: ¡Conor McGregor vs Max Holloway!',
        description: "Histórico regreso de Conor McGregor tras 5 años para enfrentar a Max Holloway en una revancha épica en el UFC 329. ",
        url: 'https://fullmma.org/eventos/ufc329'
    }
}

export default function UFC329 () {
    return(
        <main>
            <ArticleHero title="UFC 329: ¡Conor McGregor vs Max Holloway! ¡Paddy Pimblett vs Benoit Saint Denis!" subtitle='¡Cory Sandhagen vs Mario Bautista! ¡Brandon Royval vs Loneer Kavanagh!' image={hero} date='2026-07-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Histórica cartelera tenemos el día de hoy protagonizada por la mayor estrella de nuestro deporte que pone fin a su descanso de 5 años, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, quien con su regreso se roba toda la atención y el show, haciéndolo en una revancha ante un viejo conocido como lo es <Link href='/peleadores/max-holloway'>Max Holloway</Link>, con quien se volverá a enfrentar 13 años después, recordando que en aquella ocasión ganó el irlandés por decisión unánime en una actuación dominante. Por si esto fuera poco, gran parte del futuro de la división de peso ligero se define hoy, cuando 2 de los peleadores jovenes más importantes de las 155lbs se enfrenten en la coestelar, con el francés #5 <Link href='/peleadores/benoit-saint-denis'>Benoit Saint Denis</Link> enfrentando al inglés #6 <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, en lo que promete ser una grandísima pelea. </p>
                    <p>Además, en la división de peso gallo se enfrentarán el #4 <b>Cory Sandhagen</b> ante su compatriota estadounidense <b>Mario Bautista</b>, que está en la posición #7 de los rankings. Otro luchador joven inglés tendrá la oportunidad de lucirse hoy con <b>Leoneer Kavanagh</b> enfrentando a <b>Brandon Royval</b>, con la chance de entrar en el top 5 de la división de peso mosca, y de candidatearse al título de la división. Finalmente, esta cartelera está tan cargada, que el excampeón de peso mediano <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> tendrá que competir en las preliminares, subiendo de división a peso semipesado, y siendo bienvenido por el #12, el ruso <b>Nikita Krylov</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Alessandro Costa Somete a Cody Durden en el Primer Asalto</h2>
                    <p>Espectacular manera de comenzar esta gran cartelera. Pese a que Cody había comenzado haciendo un buen trabajo, constrolando la distancia para golpear y evitar ser golpeado, se notaba que el brasileño <b>Alessandro Costa</b> necesitaba de menos para dañar a su rival, logrando derribarlo en el segundo asalto luego de un mal pateo de Cody que lo hizo tropezar, que el brasileño aprovechó para tomarle la espalda y finalmente conectar un mataleón para acabar con la pelea por sumisión en el segundo asalto. </p>
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