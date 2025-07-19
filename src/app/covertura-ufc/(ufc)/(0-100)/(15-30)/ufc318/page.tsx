import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc318_portada.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC 318: ¡Dustin Poirier vs Max Holloway!',
    description: "Pelea por el cinturón BMF en el UFC 318 entre Max Holloway y Dustin Poirier en su pelea de retirada.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc318.a2b54185.webp&w=640&q=75',
        title: 'UFC 318: ¡Dustin Poirier vs Max Holloway!',
        description: "Pelea por el cinturón BMF en el UFC 318 entre Max Holloway y Dustin Poirier en su pelea de retirada.",
        url: 'https://fullmma.org/covertura-ufc/ufc318'
    }
}

export default function UFC318 () {
    return(
        <main>
            <ArticleHero title="UFC 318: ¡Dustin Poirier vs Max Holloway 3!" subtitle='¡Paulo Costa vs Roman Kopylov! ¡Daniel Zellhuber vs Michael Johnson! ¡Francisco Prado vs Nikolay Veretennikov!' image={hero} date='2024-07-19' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Esta noche tenemos un evento histórico en el UFC, que será encabezado por la leyenda <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> quien esta noche se subirá al octágono por última vez en su carrera, retirándose oficialmente después de pelear contra <Link href='/peleadores/max-holloway'>Max Holloway</Link> por el cinturón BMF, en lo que promete ser una de las mejores peleas que tendremos en el año. </p>
                    <p>Además tendremos un gran combate en la pelea coestelar, con el brasileño <b>Paulo Costa</b> enfrentándose al ruso <b>Roman Kopylov</b> en la división de peso medio de la UFC. Contaremos también con presencia latina en el octágono el día de hoy, peleando primero en las preliminares el argentino <b>Francisco Prado</b>, ante el luchador de Kazajistán <b>Nikolay Veretennikov</b>, y tendremos abriendo la cartelera estelar al mexicano <b>Daniel Zellhuber</b>, que enfrentará al estadounidense Michael Johnson. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Carli Judice Noquea a Nicolle Caliari en el tercer asalto</h2>
                    <p>La peleadores estadounidense consigue una impresionante victoria por TKO en el tercer asalto de la pelea, luego de dominar completamente el combate con su striking a su rival brasileña. Producto de la acumulación de golpes conseguida en el primer y segundo asalto, en el tercero sólo le hice falta un rodillazo al hígado para derribar a su rival y finalmente rematar en el suelo, culminando esta primer pelea de la cartelera de la mejor manera, con un nocaut que le permite sumar su segunda victoria consecutiva a la peleadora estadounidense. </p>
                    <h2>Bruno Ferreira Somete a Jackson Mcvey en el Primer Asalto</h2>
                    <p>El brasileño &quot;The Hulk&quot; consigue una excelente victoria por la vía de la sumisión en el primer asalto, luego de conectar un armbar que obligaría a su rival a tapear. De esta manera Bruno Ferreira le quita el invicto de 6-0 a su rival, el estadounidense Jackson Mcvey, quien estaba haciendo su debut en la UFC y que había llegado a la compañía sin perder ni una sola pelea. Tremendo inicio del UFC 318 que hasta ahora nos deja con 2/2 finalizaciones. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2></h2>
                    <p></p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}