import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import staropoli from '@/assets/peleadores__images/argentinos/laureano-staropoli/staropoli.png'
import messi from '@/assets/peleadores__images/argentinos/laureano-staropoli/messi-staropoli.webp'
import postfight from '@/assets/peleadores__images/argentinos/laureano-staropoli/staropoli_postpelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Laureano Staropoli',
    description: 'Laureano Staropoli luchó poco más de 3 años en UFC, haciendo su debut con una victoria por decisión unánime contra el mexicano Hector Aldana en nuestro país Argentina, en el evento encabezado por Santiago Ponzinibbio, donde además se convirtiría en la pelea de la noche.',
    openGraph: {
        title: 'Laureano Staropoli',
        description: 'Laureano Staropoli luchó poco más de 3 años en UFC, haciendo su debut con una victoria por decisión unánime contra el mexicano Hector Aldana en nuestro país Argentina, en el evento encabezado por Santiago Ponzinibbio, donde además se convirtiría en la pelea de la noche.',
        url: 'https://fullmma.org/peleadores/laureano-staropoli'
    }
}

export default function Staropoli () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={staropoli} w={13} l={6} d={0} nombre='Laureano staropoli' apodo='PEPI' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli UFC</h2>
                    <p className={styles.peleador__article__text}>Laureano Staropoli luchó poco más de 3 años en <Link href='/articulos/ufc'>UFC</Link>, haciendo su debut con una victoria por decisión unánime contra el mexicano Hector Aldana en nuestro país Argentina, en el evento encabezado por <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, donde además se convirtiría en la pelea de la noche.</p>
                    <Image className={styles.peleador__article__image} src={postfight} alt='publicación de pepi Staropoli en la que lleva una bandera argentina en su espalda y está llorando luego de un combate de ufc' />
                    <p className={styles.peleador__article__text}>Luchó un total de 6 combates en ufc, de donde lamentablemente, pese a ganar sus 2 primeros combates, se tuvo que ir, luego de acumular 4 derrotas consecutivas, todas ellas por decisión unánime.</p>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli Récord</h2>
                    <p className={styles.peleador__article__text}>Laureano Staropoli tiene un récord de 13-6. Siendo 7 de sus 13 victorias por la vía del nocaut, 2 por la vía de la sumisión, y 4 por decisión. Mientras que de sus 6 derrotas, 1 fuer por nocaut, 1 por sumisión y 4 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli ARES</h2>
                    <p className={styles.peleador__article__text}>Luego de su salida de UFC, Laureano Staropoli en febrero de 2022 confirma su llegada a la compañía francesa ARES Fighting Championship, promotora bastante nueva, puesto que fue fundada en 2018. Debutaría 2 meses después contra el inglés Carl Booth, a quien derrotaría por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Actualmente en la página oficial de la promotora sigue apareciendo rankeado #1 en donde logró destacar en abril de 2023 al proclamarse campeón de Peso Welter, luego de vencer al frances Mickael Lebout.</p>
                    <h2 className={styles.peleador__article__title}>Pepi Staropoli Campeón</h2>
                    <p className={styles.peleador__article__text}>El 7 de abril de 2023 Laureano Staropoli se consagró campeón de Peso Welter en ARES Fighting Championship luego de derrotar por TKO al francés Mickael Lebout en el segundo round. El argentino logró esto en apenas 3 combates en su compañía.</p>
                    <p className={styles.peleador__article__text}>El contexto en que Laureano fue campeón, impulsó aún más su reconocimiento, ya que al ser de un país tan futbolero, y al ganarle a un francés 4 meses después de la final del mundial de Argentina contra Francia, llevaron a hacer muchos chistes y bromas al respecto. Además de que luego de su consagración, Laureano Staropoli tuvo el lujo de conocer y sacarse una foto con <b>Lionel Messi</b>, otro especialista en vencer franceses.</p>
                    <Image className={styles.peleador__article__image} src={messi} alt='El peleador argentino de mma Laureano Staropoli y Lionel Messi sacandose una foto con el cinturón de campeón del peleador argentino' />
                    <h2 className={styles.peleador__article__title}>Pepi Staropoli Historia</h2>
                    <p className={styles.peleador__article__text}>Laureano &quot;Pepi&quot; Staropoli nació el 27 de febrero de 1993 en la ciudad de La Plata en Buenos Aires, Argentina. Con tan sólo 8 años comenzó a entrenar Taekwondo, hasta los 17 años, cuando luego de ver pelear a <Link href='/leyendas/randy-couture'>Randy Couture</Link> comenzó a practicar artes marciales mixtas. </p>
                    <p className={styles.peleador__article__text}>Haría su debut profesional el 27 de julio de 2013, enfrentando a su compatriota <b>William Castro</b>, a quien sería capaz de someter con un armbar en el segundo asalto. Su segundo combate sería menos de un mes después, y volvería a triunfar ganando por TKO en menos de un minuto de combate. En su tercera pelea llegaría su primer derrota como profesional, enfrentando al argentino <b>Alejandro Ezequiel Coslovsky</b>, quien ganaría por TKO a nuestro protagonista un mes después de su último combate.</p>
                    <p className={styles.peleador__article__text}>Laureano continuaría compitiendo en promotoras de sudamérica, mientras tenía que compaginar su carrera trabajando de seguridad y de agente de policía durante 5 años. En esta región llegó a acumular un récord de 7-1, siendo su última victoria contra el boliviano <b>Carlos Alberto Bazan Rojas</b>. Luego de esto, arribaría a la UFC, haciendo su debut en hasta ahora el único evento organizado en Argentina, en el <b>UFC Fight Night: Magny vs. Ponzinibbio</b>, donde enfrentando al mexicano <b>Hector Aldana</b>, luego de 3 asaltos se llevaría la pelea por decisión unánime, ganando además el bono a la Pelea de la Noche.</p>
                    <p className={styles.peleador__article__text}>Pese a comenzar de buena forma su estancia en la UFC, ganando su segundo combate contra el brasileño <b>Thiago Alvez</b> por decisión unánime. Su paso por esta compañía no terminaría de la mejor forma, acumulando una racha negativa de 4 derrotas consecutivas (todas por decisión), que llevaría al peleador a rescindir su contrato con la compañía.</p>
                    <p className={styles.peleador__article__text}>Luego de esto, Staropoli firmaría con ARES FC, donde luego de ganar sus 2 primeros combates por decisión unánime, se convertiría en campeón de la compañía el 7 de abril de 2023 al derrotar por KO al francés <b>Michkael Lebout</b> en el segundo de la pelea, ganando además el premio a la pelea de la noche y a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/GG-oigQSac8?si=4nYibE0AWjZupP5B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Lo que seguiría para Laureano sería firmar con la que seguramente este compitiendo por ser la segundo empresa más grande de MMA, PFL. Donde hasta el momento tiene 2 combates, el primero de ellos siendo contra el luchador de Togo <b>Baba Boundjo Nadjombe</b>, a quien vencería por TKO, por una parada de la esquina en el segundo asalto. Mientras que su segundo combate, sería enfrentando al ruso <b>Murad Ramazanov</b>, contra quien cayó derrota por sumisión en el primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/BbcZFRh9Td4?si=2x394ETJozwmppe-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </article>
                <AsideChamps />
            </section>
        </main>
    )
}