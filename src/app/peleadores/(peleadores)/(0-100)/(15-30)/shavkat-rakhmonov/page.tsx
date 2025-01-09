import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/30-40/shavkat-rakhmonov/shavkat_rakhmonov.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Shavkat Rakhmonov',
    description: "Shavkat Rakhmonov es un peleador de MMA nacido en la República de Kazajistán, que compite en la división de peso wélter de UFC, donde compite desde octubre de 2020, cuando hizo su debut ante el brasileño Alex Oliveira en el UFC 254.",
    openGraph: {
        title: 'Shavkat Rakhmonov',
        description: "Shavkat Rakhmonov es un peleador de MMA nacido en la República de Kazajistán, que compite en la división de peso wélter de UFC, donde compite desde octubre de 2020, cuando hizo su debut ante el brasileño Alex Oliveira en el UFC 254.",
        url: 'https://fullmma.org/peleadores/shavkat-rakhmonov'
    }
}

export default function Rakhmonov () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={19} l={0} d={0} nombre='Shavkat Rakhmonov' apodo='NOMAD' categoria='Peso Wélter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Shavkat Rakhmonov UFC</h2>
                    <p className={styles.peleador__article__text}>Shavkat Rakhmonov es un peleador de MMA nacido en la República de Kazajistán, que compite en la división de peso wélter de <Link href='/articulos/ufc'>UFC</Link>, donde compite desde octubre de 2020, cuando hizo su debut ante el brasileño <b>Alex Oliveira</b> en el UFC 254.</p>
                    <p className={styles.peleador__article__text}>Es de los peleadores que más entusiasmo genera, dado que pareciera tener el potencial para ser de esos campeones dominantes que marcan época, estando aún invicto, y justificando la totalidad de sus victorias por finalización, es un peleador que es todo menos aburrido. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/vh9I68QLdZY?si=_gl_NvIBekpJHQ8q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Shavkat Rakhmonov Récord</h2>
                    <p className={styles.peleador__article__text}>Shavkat Rakhmonov posee un récord invicto de 19-0. Siendo 8 de estas victorias por la vía del nocaut, 10 por la vía de la sumisión y sólo 1 de sus victorias fue por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Shavkat Rakhmonov Biografía</h2>
                    <p className={styles.peleador__article__text}>Shavkat Bakhtibayuly Rakhmonov nació el 23 de octubre de 1994 en la República de Kazajistán. A los 16 años él y su familia fueron relocados a una ciudad nueva, cosa que hizo que comenzaran a sufrir financieramente, lo que llevó a nuestro protagonista a que a esa edad comenzara a trabajar para ayudar a su familia, fue durante este mismo tiempo que comenzó a asistir a un club deportivo local para entrenar <b>Comat Sambo</b>.</p>
                    <p className={styles.peleador__article__text}>A los 18 años comenzaría su carrera amateur como luchador de MMA, compitiendo en la federación <b>WMMA</b> en el año 2013. Durante su carrera como amateur cosecharía un récord de 11-2. Shavkat sería capaz de compaginar su carrera en el deporte con sus estudios universitarios, dado que a los 19 años sería aceptado en la universidad y comenzaría sus estudios de educación física.</p>
                    <p className={styles.peleador__article__text}>A su debut como profesional lo haría el día 17 de octubre de 2014, enfrentando al ruso <b>Adam Tsurov</b>, a quien vencería con una sumisión en el primer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>Para mayo de 2018, luego de haber acumulado un récord de 8-0 (siendo 3 victorias por nocaut y 5 por sumisión), Shavkat tendría la oportunidad de pelear por el título de peso wélter en la promotora de su país <b>KZMMAF</b> (donde ya había tenido 3 combates), ante el luchador de Tayikistán <b>Faridun Odilov</b>. Aquel combate lo ganaría nuestro protagonista por la vía del nocaut en el tercer asalto, convirtiéndose en campeón de la compañía.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/rl7bSR5dSlQ?si=nh48MLTHo48g7TpU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de defender de forma exitosa su título en una ocasión, al derrotar al luchador de Kirguistán <b>Rinat Sayakbaev</b> por TKO en el primer asalto, Rakhmonov iría a pelear a la promotora <b>M-1 Global</b>, en busca de un nuevo título. Por lo que el 30 de marzo de 2019 se enfrentaría al ruso <b>Danila Prikaza</b>, a quien lograría derrotar por TKO en el segundo asalto del combate, sumando un cinturón más a sus espaldas. </p>
                    <p className={styles.peleador__article__text}>Nuevamente defendería su título ante el brasileño <b>Tiago Varejao Lacerda</b>, logrando una victoria por TKO en el primer asalto. Ya con un récord de 13-0 y 2 campeonatos diferentes obtenidos, lograría firmar un contrato con la UFC, en donde debutaría el día 24 de octubre de 2020 ante el brasileño <b>Alex Oliveira</b>, a quien enfrentó en peso pactado (173lbs) debido a que Oliveira no pudo dar el peso, lo que resultó en una multa del 20% de su bolsa que terminó en los bolsillos de Shavkat. Su debut lo iniciaría de la mejor manera, consiguiendo someter a su rival en el primer asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Rakhmonov pelearía una vez en el 2021, obteniendo una victoria por sumisión en el segundo asalto ante el brasileño <b>Michel Prazeres</b>. El 5 de febrero de 2022 volvería a pelear en el <b>UFC Fight Night: Hermansson vs. <Link href='/peleadores/sean-strickland'>Strickland</Link></b>, ante el luchador de Guyana <b>Carlston Harris</b>, a quien derrotaría por KO en el primer asalto, ganando su primer bono en la compañía a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Su siguiente pelea sería en el <b>UFC on ESPN: <Link href='/peleadores/arman-tsarukyan'>Tsarukyan</Link> vs. Gamrot</b>, donde enfrentaría a <b>Neil Magny</b>, a quien lograría someter en el segundo asalto de la pelea, ganando un nuevo bono a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Rakhmonov volvería a pelear en febrero de 2023 en el <b>UFC 285</b> (encabezado por <Link href='/peleadores/jon-jones'>Jon Jones</Link> y <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>), enfrentado al estadounidense <b>Geoff Neal</b> en una pelea a peso pactado (175lbs) debido a que su rival no pudo dar el peso. Shavkat terminaría por ganar el combate con una sumisión en el tercer asalto de la pelea, ganando otro bono, esta vez a la pelea de la noche.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/4NE-sNPxT9I?si=DeQHvmKrReTmChla" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>La pelea más reciente de Rakhmonov sería en diciembre de 2023 en el UFC 296, evento que tuvo como pelea estelar una disputa del título de peso wélter justamente, entre <Link href='/peleadores/leon-edwards'>Leon Edwards</Link> y <Link href='/peleadores/colby-covington'>Colby Covington</Link>. Rakhmonov se enfrentaría a <b>Stephen Thompson</b>, a quien sometería en el segundo asalto, obteniendo la victoria número 18 de su carrera, donde siempre ganó finalizando a sus oponentes. Con esta victoria se posicionó como uno de los principales contendientes al título de las 170lbs.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}