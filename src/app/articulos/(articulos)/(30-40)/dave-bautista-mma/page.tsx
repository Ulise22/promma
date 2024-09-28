import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/dave_bautista-hero.jpg'

export const metadata: Metadata = {
    title: 'El Debut en MMA de Dave Bautista',
    description: 'El día que el actor de Hollywood y estrella de la WWE se metió a un octagono a pelear contra Vince Lucero.',
    openGraph: {
        title: 'El Debut en MMA de Dave Bautista',
        description: 'El día que el actor de Hollywood y estrella de la WWE se metió a un octagono a pelear contra Vince Lucero.',
        url: 'https://fullmma.org/articulos/dave-bautista-mma'
    }
}

export default function DaveBautistaMMA () {
    return(
        <main>
            <ArticleHero title='Cuando el Actor de Hollywood Dave Bautista Hizo su Debut en MMA' subtitle='El día en que se dió la pelea en MMA de Dave Bautista ante Vince Lucero.' image={hero} date='2024-06-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El 6 de octubre de 2012, el actor de hollywood y la exluchador de WWE, decidió seguir los pasos del también exluchador de WWE <Link href='/leyendas/brock-lesnar'>Brock Lesnar</Link> al subirse a un octágono para pelear en MMA.</p>
                    <p>Hoy en día, el actor estadounidense es ampliamente conocido por su trayectoria actoral en el mundo de Hollywood, especialmente por su papel como <b>Drax el Destructor</b> en la película de Marvel <b>Guardianes de la Galaxia</b>, o por su participación en otras películas destacadas como <b>Blade Runner</b> o <b>Dune</b>. Sin embargo antes de realizar su carrera actoral, fue un luchador de WWE, al igual que otras figuras y estrellas de las MMA, como el mencionado <b>Brock Lesnar</b>, <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link> y <b>Chael Sonnen</b>. Fue mientras seguía compitiendo en la luche libre de forma profesional que Dave decidió que también podía pelear de verdad.</p>
                    <p>Dave Bautista haría su debut profesional en las MMA el 6 de octubre de 2012, aunque a diferencia de otros luchadores como el mismo Brock Lesnar, no iría directamente a enfrentar rivales muy difíciles, al nivel de los campones de <Link href='/articulos/ufc'>UFC</Link>, sino que comenzaría enfrentando a un peleador de menor nivel, llamado <b>Vince Lucero</b>, quien contaba con un récord de 20-22-1, siendo más las derrotas en su récord que las victorias, aunque eso sí, Vince Lucero el día de la pelea se presentó a pelear pesando al rededor de 35 libras más que su rival. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/HvycP4UT_Z8?si=Z2lWuKONaxaDawIs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La pelea terminó en una victoria por nocaut para Dave Bautista en el primer asalto. Durante los menos de 5 minutos que duró el combate se pudieron apreciar varias cosas, primero que, pese a no estar acostumbrado a recibir golpes, Bautista mostró tener una buena mandibula al absorver muy bien los golpes a la cabeza que le arrojó su rival al comienzo del combate. Lo segundo es que, seguramente porque es como estaba acostumbrado a pelear, Dave hizo bastante uso de la lucha, abrazando a su rival para neutralizarlo y evitar que lo siguiera golpeando, al punto en que en un momento, mientras ambos peleadores estaban abrazados contra la reja sin intercambiar golpes, el árbitro los tuvo que separar.</p>
                    <p>Mientras sucedió ambos peleadores estaban contra la reja, antes de ser separados, se vió como el luchador más experimentado, Vince, comenzó a hacer gestos al público, como burlándose de la estrella de cine por su falta de experiencia en un octagono, algo que hizó enojar bastante a este, reclamándole por esto incluso una vez finalizado el combate.</p>
                    <p>Luego de ser seperados, Dave Bautista logra completar un derribo, que lo pone en una posición favorable, para desde la espalda comenzar a lanzar golpes, hasta que el árbitro decidió parar la pelea dando como ganador a nuestro protagonista por nocaut técnico.</p>
                    <p>No es fácil venir de un deporte como la lucha libre para pelear en un octágono de MMA con un peleador más experimentado, por mucho que tenga un récord medio pelo, por lo que es para respetar el papel desempeñado por Dave. Trasladándolo a la UFC, lo hecho por <b>Brock Lesnar</b> es aún más meritorio e impresionante, logrando no sólo varias victorias en peleas profesionales de MMA, sino que consiguiendo campeonar en la mayor compañía de este deporte, derrotando a leyendas como <Link href='/leyendas/randy-couture'>Randy Couture</Link> en el camino. Lamentablemente esta fue la única pelea que el exluchador de WWE tuvo en este deporte, dejándolo con un récord de 1-0.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}