import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import harrison from '@/assets/peleadores__images/mujeres/kayla-harrison/kayla_harrison.png'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Harrison () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={harrison} w={17} l={1} d={0} nombre='Kayla Harrinson' apodo={null} categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kayla Harrinson UFC</h2>
                    <p className={styles.peleador__article__text}>Kayla Harrison es una peleadora estadounidense de UFC que hizo su debut el 13 de abril de 2024 en el <Link href='/articulos/ufc300-main-event'>UFC 300</Link>. Tan sólo con una pelea, debido a su éxitosa trayectoria previa en <Link href='/promotoras/pfl'>PFL</Link> y a la cálidad del rival al que enfrentó en su primer combate, le bastó para posicionarse como la número #4 en la división de peso gallo femenino de UFC desde el 16 de abril.</p>
                    <h2 className={styles.peleador__article__title}>Kayla Harrison Récord</h2>
                    <p className={styles.peleador__article__text}>Kayla Harrison posee un récord de 17-1. Siendo 6 de sus 17 victorias por la vía del nocaut, 7 por sumisión y 4 por decisión. Mientras que sólo perdió una pelea en toda su carrera por decisión, al enfrentar a la brasileña <b>Larissa Pacheco</b> en la final del Torneo de Peso Ligero Femenino de PFL de 2022. </p>
                    <h2 className={styles.peleador__article__title}>Kayla Harrison Historia</h2>
                    <p className={styles.peleador__article__text}>Kayla Harrison nació el 2 de julio de 1990 en la ciudad de Middletown, ubicada en el estado americano de Ohio. Con tan sólo 6 años comenzó a practicar judo, siendo introducida por su madre, quien era cinturón negro. Con 15 años ganó dos campeonatos nacionales y se mudó a Boston, para entrenar con un tal Jimmy Pedro y su padre.</p>
                    <p className={styles.peleador__article__text}>En cuanto a Judo respecta, Kayla supo hacerse de un amplio palmarés, habiendo competido en los Juegos Olímpicos de Verano en los años 2012 y 2016, donde obtendría 2 medallas doradas. Además de competir en los Juegos Panamericanos en de los años 2011 y 2015, organizados en México y Canadá, respectivamente, donde también obtendría 2 medallas de oro. Compitió en el Campeonato Mundial de Judo entre los años 2010 y 2014, donde ganaría 3 medallas, la de oro en Japón 2010, y las de bronce en Francia 2011 y en Rusia 2014. Por último, compitiendo por el Campeonato Panamericano de Judo, ganaría 5 medallas, siendo la de bronce en las ediciones de 2010 y 2013; la de plata en la edición de Canadá en 2015; y la de oro en el año 2011 en México, y en el año 2016 en Cuba.</p>
                    <p className={styles.peleador__article__text}>El éxito de Kayla Harrison no se quedó sólo en el Judo, dado que contando con esta experienciencia, siguiendo un camino parecido al que en su momento siguió <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>, se mudó al mundo de las MMA, debutando en PFL el 21 de junio de 2018 contra su compatriota <b>Brittney Elkin</b>, a quien sometió con un armbar en el primer asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Ese mismo año tendría otros 2 combates, el primero contra <b>Jozette Cotton</b>, a quien vencería por TKO en el tercer asalto de la pelea, y el segundo contra <b>Moriel Charneski</b>, a quien noquearía en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>El 2019 sería un año particularmente activo para Kayla, dado que tendría 4 combates por delante, siendo el primero contra la brasileña <b>Larissa Pacheco</b>, a quien vencería por decisión unánime luego de 3 asaltos; el segundo contra <b>Morgan Frier</b>, a quien sometería en el primer asalto; el tercero sería contra la canadiense <b>Bobbi Jo Dalziel</b>, en la Semifinal del Torneo de Peso Ligero Femenino de PFL de 2019, venciendo por sumisión en el primer asalto; el cuarto combate del año, y el septimo de su carrera, sería una revancha contra la brasileña <b>Larissa Pachecho</b> por el Campeonato de Peso Ligero Femenino de PFL, donde nuevamente ganaría Harrison por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/aOZUPPHZ4cw?si=77gtGU4gdKG3Q6Fh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En 2020 sólo tendría una pelea, siendo la única hasta entonces por fuera de PFL, en <b>Invicta FC</b>, donde enfrentaría a su compatriota <b>Courtney King</b> en su debut en el peso pluma, aquel combate lo terminaría ganando por TKO en el segundo asalto.</p>
                    <p className={styles.peleador__article__text}>El 2021 sería bastante parecido al 2019, dado que volvería a pelear un total de 4 veces, primero contra la brasileña <b>Mariana Morais</b>, a quien vencería por TKO en el primer asalto; el segundo contra la belga, <b>Cindy Dandois</b>, a quien derrotaría en el primer asalto con una sumisión; el tercero por las semifinales del torneo de peso ligero de PFL contra la australiana <b>Genah Fabian</b>, a quien derrotaría por TKO en el primer asalto; y su cuarto y último combate del año sería contra su compatriota <b>Taylor Guardado</b>, a quien sometería en el segundo asalto, convirtiéndose nuevamente en campeona de PFL por segunda vez en su carrera.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/jVwZtEiZqUw?si=QNUDsNWX4-dqybjA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En 2022 volvería a competir hasta llegar a la final del campeonato de PFL. Enfrentando primero a la rusa <b>Marina Mokhnatkina</b>, a quien vencería por decisión unánime en el tercer asalto; la segunda pelea del año sería contra la estadounidense <b>Katlin Young</b>, a quien vencería por TKO en el primer asalto; ya por las semifinales del torneo de PFL, se enfrentaría a la checa <b>Martina Jindrová</b>, a quien vencería por sumisión en el primer asalto; su última pelea, sería en la final del torneo de PFL, enfrentando por tercera vez a la brasileña <b>Larissa Pacheco</b>, quien esta vez lograría vengarse de nuestra protagonista, venciéndola por decisión unánime, otorgandole a Kayla, su primera y hasta ahora única derrota en su carrera.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/QXSlrvSKghY?si=MIGBTF4krcgcN_5m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En 2023 sólo tendría una pelea, contra la estadounidense <b>Aspen Ladd</b>, a quien vencería por decisión unánime luego de 3 asaltos. Esta sería su última pelea en PFL, puesto que acabaría firmando un contrato con UFC.</p>
                    <p className={styles.peleador__article__text}>En 2024 haría su debut en la compañía liderada por Dana White el 13 de abril, en lo que sería un día histórico para la compañía, puesto que se celebraría el <Link href='/articulos/ufc300-main-event'>UFC 300</Link>, en donde pondrían a pelear a Kayla contra la histórica <b>Holly Holm</b>, quien en su momento supo sacarle el invicto a la legendería Ronda Rousey. Aquella pelea sería además el debut de Kayla en la división de Peso Gallo, y acabaría ganando por sumisión, al aplicar un mataleón en el segundo asalto de la pelea. Aun queda esperar una confirmación oficial sobre cuál será la próxima rival de Kayla, pero todo apunta a que lo que viene para ella es una pelea por el título contra <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}