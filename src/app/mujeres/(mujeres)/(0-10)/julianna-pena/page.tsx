import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import julianna from '@/assets/peleadores__images/mujeres/0-10/juliana-pena/julianna.png'
import pelea from '@/assets/peleadores__images/mujeres/0-10/juliana-pena/julianna_pelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Julianna Peña',
    description: 'Julianna Peña es una peleadora estadounidense de Artes Marciales Mixtas, de ascendencia venezolana y mexicana que supo ser campeona de la división de peso gallo femenino en la UFC en el 2021, al vencer por sumisión a la histórica campeona Amanda Nunes en el segundo asalto, logrando ser la única peleadora en vencer a la brasileña en una pelea por el campeonato.',
    openGraph: {
        title: 'Julianna Peña',
        description: 'Julianna Peña es una peleadora estadounidense de Artes Marciales Mixtas, de ascendencia venezolana y mexicana que supo ser campeona de la división de peso gallo femenino en la UFC en el 2021, al vencer por sumisión a la histórica campeona Amanda Nunes en el segundo asalto, logrando ser la única peleadora en vencer a la brasileña en una pelea por el campeonato.',
        url: 'https://fullmma.org/mujeres/julianna-pena'
    }
}

export default function JuliannaPena () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={julianna} w={13} l={5} d={0} nombre='Julianna Peña' apodo='THE VENEZUELAN VIXEN' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña UFC</h2>
                    <p className={styles.peleador__article__text}>Julianna Peña es una peleadora estadounidense de Artes Marciales Mixtas, de ascendencia venezolana y mexicana que supo ser campeona de la división de peso gallo femenino en la <Link href='/articulos/ufc'>UFC</Link> en el 2021, al vencer por sumisión a la histórica campeona <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link> en el segundo asalto, logrando ser la única peleadora en vencer a la brasileña en una pelea por el campeonato. </p>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Récord</h2>
                    <p className={styles.peleador__article__text}>Julianna Peña tiene un record de 12-5. Siendo 3 de sus 12 victorias por la vía del nocaut, 5 por sumisión y 4 por decisión. Mientras que sus 5 derrotas se componen de 1 por nocaut, 2 por sumisión y 2 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Biografía</h2>
                    <p className={styles.peleador__article__text}>Julianna Nicole Peña nació el 19 de agosto de 1989 en la ciudad de Washington, Spokane, Estados Unidos. Es la menor de 4 hermanos. Se graduó en 2007 en el Mt Spokane High School. Ya en su adultez, con la idea de perder peso y canalizar su agresividad, comenzó a asistir a clases de cardio Kick Boxing, que eventualmente la llevó a transicionar a las MMA, de las que haría una carrera profesional, debutando oficialmente el 9 de mayo de 2009 con una victoria contra la estadounidense Raylene Harvey, a quien sometería en el primer asalto, después de ya haber ganado 2 combates amateur previamente.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='La luchadora venezolana de artes marciales mixtas Julianna Peña encima de su rival golpeandola en un combate de MMA' />
                    <p className={styles.peleador__article__text}>De esta forma, Julianna comenzaría su carrera profesional con 4 victorias consecutivas, siendo 2 de estas por la vía del nocaut, y 2 por la vía de la sumisión, con la última siendo ante la canadiense <b>Rachael Swatez</b>, a quien estranguló con una guillotina en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>Su primer derrota llegaría en su pelea después, cuando el 19 de abril de 2012 cayera derrotada ante <b>Sarah Moras</b> por TKO, provocado por una parada médica luego de finalizado el segundo asalto. Su siguiente pelea terminaría nuevamente en una derrota, en una pelea realizada en peso mosca ante la estadounidense <b>DeAnna Bennett</b>, por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Pese a estas 2 derrotas consecutivas, Julianna competiría en el TUF (The Ultimate Fighter) en 2013, donde en las semifinales tendría la oportunidad de enfrentarse nuevamente a Sarah Moras, a quien esta vez vencería por sumisión en el segundo asalto. Finalmente terminaría ganando la final y por consiguiente el campeonato de Peso Gallo Femenino de TUF 18, después de vencer a Jessica Rakoczy por TKO en el primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/wfrJNUXW2qY?si=lM6XuuVNjd8ox797" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>De esta manera la peleadora de raíces venelozanas se uniría oficialmente a la UFC, donde compite desde entonces, haciendo su debut en un evento de la compañía el 4 de abril de 2015, enfrentando a la rusa <b>Milana Dudieva</b>, a quien conseguiría derrotar por TKO en el primer asalto, ganando el primer bono de su carrera a la actuación de la noche. </p>
                    <p className={styles.peleador__article__text}>Julianna ganaría su siguiente combate ante <b>Jessica Eye</b> por decisión unánime unos meses después, en un combate donde su rival sería sancionada con la quita de un punto, luego de lanzar un rodillazo ilegal. Seguido a esta pelea, Peña tendría la oportunidad de pelear en el histórico <b>UFC 200</b>, donde enfrentaría a la estadounindense <b>Cat Zingano</b>, a quien vencería por decisión unánime luego de 3 asaltos.</p>
                    <p className={styles.peleador__article__text}>Su primer derrota en la compañía llegaría en la primer cartelera que encabezaría nuestra protagonista, cuando al enfrentar a la histórica peleadora de Kirguistán <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>, el día 28 de enero de 2017, caería sometida en el segundo asalto de la pelea. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ZoeiKU9528M?si=GEOpWaCuKaEHfil_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>La peleadora de origen venezolano se tomaría su tiempo para regresar, estando más de 2 años sin competir, realizando finalmente su regreso el 13 de julio de 2019 para enfrentar a la estadounidense, excampeona de peso mosca <b>Nicco Montaño</b> (de quien hablamos <Link href='/articulos/que-paso-con-nicco-montano'>aquí</Link>), logrando una importante victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Pelearía nuevamente un año después, cayendo derrotada ante la luchadora de Países Bajos <b>Germaine de Randamie</b>, quien la sometería en el tercer asalto. Sin embargo, unos 3 meses después, la nacida en Estados Unidos volvería a pelear, reponiéndose de su derrota al ser capaz de someter en el tercer asalto a su compatriota <b>Sara McMann</b>, en el mítico <b>UFC 257</b> que habían encabezado <Link href='/peleadores/dustin-poirier'>Dustin Porier</Link> y <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>. </p>
                    <p className={styles.peleador__article__text}>Esta última victoria pondría a nuestra protagonista en posición de disputarle el título de campeona a la histórica campeona brasileña, quien posiblemente sea la mejor peleadora de la historia, <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>. Teniendo lugar el combate el día 11 de diciembre de 2021 en el UFC 269, donde nuestra protagonista conseguiría lograr algo para los libros de historia, al ser capaz de someter a la brasileña en el segundo asalto, cortando con la racha de 12 victorias consecutivas que llevaba Amanda, convirtiéndose en la nueva campeona, y ganando el bono a la actuación de la noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/tZgH72SQfNA?si=7mnL71QhzQNuvZ1o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Debido al histórico recorrido y al largo reinado que había tenido Amanda Nunes, es que se programó una revancha inmediata, con fecha para el 30 de julio de 2022, en el UFC 277, evento encabezado por estas 2 peleadoras. En esta ocasión, la pelea se extendería hasta los 5 asaltos, en lo que fue una completa guerra y una de las peleas más entretenidas que nos otorgaron las MMA femeninas, de hecho la pusimos en nuestro artículo sobre <Link href='/articulos/mejores-peleas-mujeres-ufc'>Las Mejores Peleas de UFC de Mujeres de la Historia</Link>. Finalmente Julianna Peña terminaría por perder el cinturón por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/sq2l2Oop1VY?si=OAZoRn0J0QNXezWu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}