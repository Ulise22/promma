import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import omalley from '@/assets/peleadores__images/20-30/sean-omalley/omalley.png'
import careo from '@/assets/peleadores__images/20-30/sean-omalley/omalley_careo.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Sean O'Malley",
    description: "Sean O'Malley es un peleador estadounindense de UFC, que compite en la comapañía en la división de Peso Gallo desde diciembre de 2017, cuando debutaría contra su compatriota Terrion Ware, a quien vencería por decisión unánime. El 19 de agosto de 2023 se consagraría como una de las estrellas de la compañía, al derrotar al entonces campeón de la división Aljamain Sterling, a quien venció por TKO en el segundo asalto, convirtiéndose en el nuevo campeón de la división.",
    openGraph: {
        title: "Sean O'Malley",
        description: "Sean O'Malley es un peleador estadounindense de UFC, que compite en la comapañía en la división de Peso Gallo desde diciembre de 2017, cuando debutaría contra su compatriota Terrion Ware, a quien vencería por decisión unánime. El 19 de agosto de 2023 se consagraría como una de las estrellas de la compañía, al derrotar al entonces campeón de la división Aljamain Sterling, a quien venció por TKO en el segundo asalto, convirtiéndose en el nuevo campeón de la división.",
        url: 'https://fullmma.org/peleadores/sean-omalley'
    }
}

export default function Omalley () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={omalley} w={18} l={1} d={0} nombre={`Sean O'Malley`} apodo='SUGAR' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley UFC</h2>
                    <p className={styles.peleador__article__text}>Sean O&apos;Malley es un peleador estadounindense de UFC, que compite en la comapañía en la división de Peso Gallo desde diciembre de 2017, cuando debutaría contra su compatriota <b>Terrion Ware</b>, a quien vencería por decisión unánime. El 19 de agosto de 2023 se consagraría como una de las estrellas de la compañía, al derrotar al entonces campeón de la división <b>Aljamain Sterling</b>, a quien venció por TKO en el segundo asalto, convirtiéndose en el nuevo campeón de la división.</p>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Record</h2>
                    <p className={styles.peleador__article__text}>Sean O&apos;Malley posee un récord de 18-1 (1). Siendo 12 de sus 18 victorias por nocaut, 1 por sumisión y 5 por decisión. Mientras que su única derrota fue por nocaut. Además una de sus peleas en la UFC terminó en sin resultado luego de que en su enfrentamiento contra el brasileño <b>Pedro Munhoz</b>, Sean accidentalmente le diera un piquete en el ojo a su rival que le impidió seguir compitiendo.</p>
                    <Image className={styles.peleador__article__image} src={careo} alt='' />
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Historia</h2>
                    <p className={styles.peleador__article__text}>Sean Daniel O&apos;Malley nació el 24 de octubre de 1994 en Estados Unidos, en la ciudad de Helena, ubicada en el Estado de Montana. Es peleador profesional desde el 6 de marzo de 2015, cuando con 20 años enfrentaría al estadounidense <b>Josh Reyes</b> en la promotora <b>Intense Fighting Championship</b>, a quien vencería por TKO en un minuto y medio de combate. </p>
                    <p className={styles.peleador__article__text}>En la misma promotora es donde tendría sus primeras 5 peleas como profesional, ganando todas, siendo 3 de estas victorias por nocaut, 1 por decisión y 1 por sumisión. Fuera de esta promotora tendría 2 combates más, contra el ecuatoriano <b>Irvin Veloz</b> a quien vencería por KO en el primer asalto y contra el estadounidense <b>David Nuzzo</b> a quien también derrotaría por KO en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Luego de estos combates, habiendo acumulado un récord de 7-0, tendría la oportunidad de darse a conocer en el reality <b>Dana White&apos;s Contender Series</b> el 18 de julio de 2017, cuando enfrentando a <b>Aldred Khashakyan</b> sería capaz de vencer por KO en el primer asalto, ganándose de esta forma un contrato con la <Link href='/articulos/ufc'>UFC</Link>.</p>
                    <p className={styles.peleador__article__text}>Su debut en la compañía sería el 1 de diciembre de 2017 en la final de <b>The Ultima Fighter</b>, cuando enfrentaría a su compatriota <b>Terrion Ware</b>, al que luego de 3 asaltos vencería por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/woifosV9sIs?si=wQSKFrFtgnI2iEew" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Desde aquel debut, acumularía una racha de 3 victorias consecutivas, teniendo en todas ellas una actuación destacada. La primera de estas 3 victorias sería contra <b>Andre Soukhamthath</b>, a quien vencería por decisión unánime, ganando el bono a la Pelea de la Noche; la segunda sería contra el mexicano <b>José Alberto Quiñónez</b>, a quien vencería por TKO en el primer asalto, ganando el premio a la actuación de la noche; y la tercera sería contra <b>Eddie Wineland</b>, a quien vencería por KO en el primer asalto, ganando nuevamente el premio a la Actuación de la Noche.</p>
                    <p className={styles.peleador__article__text}>Luego de esta extensa racha de victorias, con mucho brillo además, Omalley había acumulado un récord de 12-0, que lamentablemente recibiría su primer 1 al enfrentar al ecuatoriano <Link href='/peleadores/marlon-vera'>Chito Vera</Link>, quien el 15 de agosto de 2020, aprovechando que en medio del combate nuestro protagonista sufrió una lesión en el pie, se llevó la victoria por TKO en el primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/vgCrVNa3MQQ?si=_XEryi7eQdrB5J0L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella primer derrota de su carrera, Sean O&apos;Malley obtendría otras 3 victorias consecutivas, todas por la vía del nocaut, contra los peleadores <b>Thomas ALmeida</b>, <b>Kris Moutinho</b> y <b>Raulian Paiva</b>. Su siguiente combate luego de ese sería contra el brasileño <b>Pedro Munhoz</b>, a quien le terminó dando un piquete en el ojo en el segundo asalto de la pelea que le impidió seguir peleando, por lo que la pelea quedó sin resultado.</p>
                    <p className={styles.peleador__article__text}>Su siguiente pelea sería contra el luchador ruso excampeón de la división, <b>Petr Yan</b>, a quien enfrentó en el UFC 280 el 22 de octubre de 2022. En lo que fue un combate cerrado a 3 asaltos, el estadounidense se terminó llevando la pelea por decisión dividida. Esta victoria sería la que le daría la chance de disputar el título de peso gallo.</p>
                    <p className={styles.peleador__article__text}>Por lo que el 19 de agosto de 2023 en el UFC 292 se enfrentaría al campeón <b>Aljamain Sterling</b>, que ya llevaba 3 defensas del título, por el Campeonato de Peso Gallo de UFC. La pelea la ganaría nuestro protagonista por TKO en el primer minuto del segundo asalto, ganando el bono a la actuación de la noche y conviriténdose en el nuevo campeón de la división de peso gallo de la UFC.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/1oHw6Ghm96A?si=7wA_rRtJmnSQm6Ev" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella meritoria victoria, Sean haría su primera defensa del título contra el #6 ranqueado de la división, y contra el único peleador que hasta entonces había sido capaz de derrotarlo, <Link href='/peleadores/marlon-vera'>Chito Vera</Link>, a quien enfrentaría en el <Link href='/covertura-ufc/ufc299'>UFC 299</Link>. Omalley se llevaría la victoria merecidamente luego de 5 asaltos por decisión unánime, ganando nuevamente el bono a la actuación de la noche.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}