import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pantoja from '@/assets/peleadores__images/alexandre-pantoja/pantoja.png'
import alexandre_pantonja from '@/assets/peleadores__images/alexandre-pantoja/alexandre-pantoja.jpg'
import pelea from '@/assets/peleadores__images/alexandre-pantoja/pantoja_pelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Pantoja () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pantoja} w={27} l={5} d={0} nombre='Alexandre Pantoja' apodo='THE CANNIBAL' categoria='Peso Mosca' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pantoja ufc</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja es un peleador de mma brasileño y el actual campeón de Peso Mosca en la ufc, cosa que logró luego de ganarle al peleador mexicano <b>Brandom Moreno</b>, por decisión dividida en el UFC 290, evento que se organizó en las vegas.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='' />
                    <p className={styles.peleador__article__text}>Pantoja hizo su debut en la UFC el 28 de enero de 2017, donde luchó y derrotó al estadounidense Eric Shelton. Desde entonces, peleó en 13 combates, ganando 10 de estos y perdiendo tan sólo 3. Además supo destacar en julio de 2023 al ganarle al campeón de Peso Mosca hasta ese momento, <b>Brandom Moreno</b>, a quien ya había derrotado en mayo de 2018 por decisión unánime. </p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pantoja mma</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja es un peleador profesional de mma desde 2007, habiendo tenido un largo historial de peleas en su país de origen hasta que en mayo de 2016 la UFC lo anunció como uno de los 16 concursantes del TUF (The Ultimate Fighter: Tournament of Champions), competición en la que participaría como parte del equipo de Henry Cejudo.</p>
                    <p className={styles.peleador__article__text}>Desde sus inicios en las mma, Pantoja mantiene un estilo de pelea típico de los peleadores de Brasil, el <Link href='/estilos/jiujitsu'>Jiu Jitsu Brasileño</Link>.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Brandon Moreno vs Alexandre Pantoja</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja y Brandom Moreno, se han enfrentado un total de 3 veces, una por TUF y 2 por UFC, y quién sabe si no terminarán haciéndolo una cuarta. Los 3 combates terminaron con una victoria por decisión a favor del brasileño, la primera por sumisión, la segunda por decisión unánime y la tercera por decisión dividida, quien en su última victoria además le sirvió para coronarse campeón de Peso Mosca. Actualmente puede encontrarse por Youtube sus 2 primeros combates.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/KNV_A9_9dLg?si=XTU5wXa4PA0qLjoV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexandre Pantoja Historia</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja Passidomo nació en Rio de Janeiro, Brasil, el 16 de abril de 1990. Pantoja ha contado en una entrevista postpelea que durante su niñez, su padre abandonó a su familia y tuvo él junto a sus hermanos que ser criados por su madre.</p>
                    <Image className={styles.peleador__article__image} src={alexandre_pantonja} alt='' />
                    <p className={styles.peleador__article__text}>Desde julio de 2007 que Pantoja pelea de manera profesional en mma, habiendo hecho gran parte de su temprana carrera en promotoras locales de Brasil. En mayo de 2016 compitió en el reality de televisión estadounidense TUF, donde compitió hasta ser derrotado en las semifinales, aunque su participación lo llevaría a ser contratado por UFC en enero de 2017.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexandre Pantoja record</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja tiene un record de 27-5-0, siendo 8 de sus 27 victorias por nocaut, y 10 por sumisión. 10 de sus victorias fueron en UFC, y el resto están repartidas en diferentes promotoras de de Brasil y Estados Unidos.</p>
                </article>
            </section>
        </main>
    )
}