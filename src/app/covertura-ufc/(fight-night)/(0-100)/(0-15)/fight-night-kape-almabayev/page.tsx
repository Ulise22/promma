import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufcvegas103.jpeg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC Vegas 103: ¡Manel Kape vs Asu Almabayev!',
    description: 'Noche de UFC con la pelea entre Manel Kape y Asu Almabayev como evento estelar, además de la vuelta del argentino Esteban Ribovics, quien se enfrentará al marroquí Nasrat Haqparast. ',
    openGraph: {
        title: 'UFC Vegas 103: ¡Manel Kape vs Asu Almabayev!',
        description: 'Noche de UFC con la pelea entre Manel Kape y Asu Almabayev como evento estelar, además de la vuelta del argentino Esteban Ribovics, quien se enfrentará al marroquí Nasrat Haqparast. ',
        url: 'https://fullmma.org/covertura-ufc/fight-night-kape-almabayev'
    }
}

export default function KapeAlmabayev () {
    return(
        <main>
            <ArticleHero title='UFC Vegas 103: ¡Manel Kape vs Asu Almabayev!' subtitle='¡Esteban Ribovics Cae Derrotado ante Nashrat Haqparast Por Decisión Dividida! ' image={hero} date='2025-03-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de MMA en el UFC APEX en Las Vegas, que será encabezado por el luchador portugués, ranqueado #6 en la división de peso mosca, <b>Manel Kape</b>, quien se enfrentará al luchador de Kazajistán <b>Asu Almabayev</b>, quien aceptó pelear en corto aviso luego de que el rival original de Kape, <b>Brandon Royval</b> se diera de baja pocos días antes del evento. </p>
                    <p>Además tendremos como evento coestelar la pelea en peso medio entre <b>Cody Brundage</b> vs <b>Julian Marquez</b>. También tendremos en la cartelera estelar la pelea en peso ligero entre el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, quien viene de una espectacular victoria ante el mexicano <b>Daniel Zellhuber</b> en el <Link href='/covertura-ufc/ufc306'>UFC Noche</Link>, que le valió el bono a Pelea de la Noche, y el luchador marroquí <b>Nasrat Haqparast</b>, quien viene de una racha de 4 victorias consecutivas. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>¡Sam Patterson Noquea a Danny Barlow en el Primer Asalto!</h2>
                    <p>El inglés Sam Patterson abre esta cartelera estelar con una tremenda victoria por la vía del nocaut en el primer asalto, luego de conectar un gancho que hizo retroceder a su rival, para rematarlo con una mano derecha que lo tumba al suelo, castigándolo en el suelo para asegurar la victoria hasta que el árbitro los separó para darle la victoria a Patterson por TKO. </p>
                    <h2>¡Hyder Amil Derrota a Williams Gomis por Decisión Dividida en la Pelea de la Noche!</h2>
                    <p>Tremenda pelea la que nos dieron estos 2 guerreros, quienes protagonizaron la que sin dudas es una de las mejores peleas de la noche, con ambos luchadores dando una exhibición, en un combate que podría haberse ido para cualquiera de los dos.</p>
                    <p>Finalmente el combate llegó a mano de los jueces que dieron como ganador a Hydir Amil por decisión dividida, quien mantiene el invicto y extiende su récord profesional a 11-0. </p>
                    <h2>¡Nasrat Haqparast Derrota a Esteban Ribovics por Decisión Dividida en una auténtica Guerra!</h2>
                    <p>Si la pelea anterior había parecido una guerra, esto es algo más. En lo que fue un absoluto espectáculo, como lo es toda pelea en la que está el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, vimos un combate bastante cerrado entre ambos, que finalmente se terminó decidiendo en las tarjetas de los jueces, quienes por decisión dividida dieron por ganador al luchador marroquí Nasrat Haqparast. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}