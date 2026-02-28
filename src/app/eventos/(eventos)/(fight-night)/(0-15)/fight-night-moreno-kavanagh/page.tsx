import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/moreno-vs-kavanagh.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC México: ¡Brandon Moreno vs Loneer Kavanagh!',
    description: 'Noche de UFC en Mexico con Brandon Moreno enfrentanod a Loneer Kavanagh en la cartelera estelar. Y con Marlon Chito Vera vs David Martinez en la coestelar.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmoreno-vs-kavanagh.c91f334f.webp&w=828&q=65',
        title: 'UFC México: ¡Brandon Moreno vs Loneer Kavanagh!',
        description: 'Noche de UFC en Mexico con Brandon Moreno enfrentanod a Loneer Kavanagh en la cartelera estelar. Y con Marlon Chito Vera vs David Martinez en la coestelar.',
        url: 'https://fullmma.org/eventos/fight-night-moreno-kavanagh'
    }
}

export default function StricklandHernandez () {
    return(
        <main>
            <ArticleHero title='UFC México: ¡Brandon Moreno vs Loneer Kavanagh!' subtitle='¡Marlon Vera vs David Martinez! ¡Daniel Zellhuber vs King Green!' image={hero} date='2026-02-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Nueva noche de UFC en latinoamérica, cuando en la capital de México, que será encabezada por el histórico excampeón mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, quien se enfrentará al joven prospecto inglés <b>Lone&apos;er Kavanagh</b>, en un combate que promete mucha acción. Por si fuera poco, la pelea coestelar nos trae otro gran combate, donde el mexicano #10 de peso gallo <b>David Martinez</b>, se enfrentará al histórico ecuatoriano <Link href='/peleadores/marlon-vera'>Marlon &quot;Chito&quot; Vera</Link>, que actualmente está ranqueado #9. </p>
                    <p>Por si fuera poco, esta cartelera estará repleta de luchadores latinoamericanos y mexicanos, con combates que valen la pena ver, de los cuales queremos destacar especialmente el de <b>Daniel Zellhuber</b> ante el histórico <b>King Green</b>, que apunta a ser la pelea de la noche. Además del combate de la argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, quien viene de una racha de 5 victorias consecutivas, ranqueada #7 en la división de peso gallo, que estará enfrentando a la estadounidense <b>Macy Chiasson</b>, que actualmente está ranqueada #8 en la división. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Damian Pinas Noquea a Wes Schultz en el Primer Asalto</h2>
                    <p>Espectacular victoria para el debutante de Aruba <b>Damian Pinas</b>, quien en su primer combate en la UFC logra conectar un golpe para ganar por nocaut en el primer asalto ante el estadounidense <b>Wes Schultz</b>, manteniendo su racha perfecta de 100% de finalizaciones e iniciando con el pie derecho su contrato con la UFC. </p>
                    <h2>Francis Marshall Somete a Erik Silva en el Primer Asalto</h2>
                    <p>Segunda finalización en el primer asalto de la noche, esta vez por sumisión de la mano del estadounidense <b>Francis Marshall</b>, quien partía como favorito en las apuestas e hizo valer dicho favoritismo, conectando un mataleón para someter al venezolano de 39 años <b>Erik Silva</b> en el primer asalto del combate. </p>
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