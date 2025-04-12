import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc314.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC 314: ¡Alexander Volkanovski vs Diego Lopes!',
    description: "",
    openGraph: {
        title: 'UFC 314: ¡Alexander Volkanovski vs Diego Lopes!',
        description: "",
        url: 'https://fullmma.org/covertura-ufc/ufc314'
    }
}

export default function UFC312 () {
    return(
        <main>
            <ArticleHero title="UFC 314: ¡Alexander Volkanovski vs Diego Lopes!" subtitle='¡Paddy Pimblett Enfrenta a Michael Chandler! ¡Jean Silva vs Bryce Mitchell!' image={hero} date='2025-04-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC que tenemos esta noche en Miami, con la pelea por el título de peso pluma estelarizando la cartelera entre el excampeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> y el brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>. </p>
                    <p>Además tendremos tremendas peleas acompañando el evento principal, con la coestelar siendo encabezada por el luchador inglés de peso ligero <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, y el veterano estadounidense <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Nora Cornolle Somete a Hailey Cowan en el Segundo Asalto</h2>
                    <p>La luchadora francesa ranqueada #13 en la división de peso gallo femenino, consigue una tremenda victoria por la vía de la sumisión en el segundo asalto, luego de ganarle la espalda a su rival y ser capaz de conectar un mataleón que le daría la victoria, iniciando esta cartelera de la mejor manera, al ya iniciar con una finalización este tremendo evento. </p>
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
        </main>
    )
}