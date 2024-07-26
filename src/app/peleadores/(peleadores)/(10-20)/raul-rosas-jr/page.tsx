import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import raul from '@/assets/peleadores__images/20-30/raul-rosas-jr/raul-rosas-jr.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Raúl Rosas Jr.',
    description: 'Raúl Rosas Jr es un peleador mexicano que compite en la división de peso gallo de la UFC, que destaca especialmente por ser conocido como el peleador más joven en firmar la compañía, con sólo 17 años.',
    openGraph: {
        title: 'Raúl Rosas Jr.',
        description: 'Raúl Rosas Jr es un peleador mexicano que compite en la división de peso gallo de la UFC, que destaca especialmente por ser conocido como el peleador más joven en firmar la compañía, con sólo 17 años.',
        url: 'https://fullmma.org/peleadores/raul-rosas-jr'
    }
}

export default function RaulRosasJR () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={raul} w={9} l={1} d={0} nombre='Raúl Rosas Jr.' categoria='Peso Gallo' apodo='EL NIÑO PROBLEMA' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Raul Rosas Jr. UFC</h2>
                    <p className={styles.peleador__article__text}>Raúl Rosas Jr es un peleador mexicano que compite en la división de peso gallo de la <Link href='/articulos/ufc'>UFC</Link>, que destaca especialmente por ser conocido como el peleador más joven en firmar la compañía, con sólo 17 años.</p>
                    <h2 className={styles.peleador__article__title}>Raul Rosas Jr. Récord</h2>
                    <p className={styles.peleador__article__text}>Raúl Rosas Jr. posee un récord de 9-1 en su carrera de MMA. Siendo 2 de sus victorias por la vía del nocaut, 6 por la vía de la sumisión y sólo 1 por decisión. Mientras que su única derrota fue por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Raul Rosas Jr. Biografía</h2>
                    <p className={styles.peleador__article__text}>Raúl Rosas Jr. nació el 8 de octubre de 2004 en los Estados Unidos, en la ciudad de Clovis, ubicada en el Estado de Nuevo México. Es hijo de padres mexicanos que emigraron al país del norte de américa, por lo que Raúl cuenta con ambas nacionalidades, la de sus padres y la de USA.</p>
                    <p className={styles.peleador__article__text}>A los 13 años, cuando se mudó junto a su familia a California, comenzó a luchar en la secundaria en un deporte llamado <b>Pankration</b>, que es bastante similar a las MMA. Sus padres lo apoyaron en su carrera deportiva, por lo que un año después pudo participar del campeonato mundial de IMMAF en Roma, donde ganó el oro. </p>
                    <p className={styles.peleador__article__text}>Tiempo más tarde se instalaría en la ciudad de Tijuana, en México, donde comenzaría su carrera profesional en el deporte, haciendo su debut originalmente en peso pluma en la promotora mexicana <b>UWC</b> el 26 de noviembre de 2021, ante su compatriota <b>Eduardo Velázques</b> a quien sometería en el primer asalto del combate.</p>
                    <p className={styles.peleador__article__text}>En un periodo de 8 meses, pelearía 5 combates en esta promotora mexicana, ganando absolutamente todos. Consiguiendo: una victoria por sumisión en el segundo asalto ante <b>Francisco Villanueva</b>; una victoria por sumisión en el segundo asalto ante <b>Jose Guadalupe Peñaloza</b>, en lo que sería su debut en peso gallo; y una victoria por TKO ante <b>Andres Portocarrero</b> en el primer asalto. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/7hqM-35Qr14?si=pb7ZvGiPXR6keP0B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Este increíble inicio de carrera, ya con un 5-0 conseguido en 8 meses, con sólo 17 años, lo llevó a ser invitado a participar del programa <b>Dana White&apos;s Contender Series</b>, donde el 20 de septiembre de 2022 se enfrentaría al estadounidense <b>Mando Gutierrez</b>, derrotándolo por decisión unánime. Esta pelea le valió un contrato con la UFC, y se convirtió en el peleador más joven en firmar para la compañía, con apenas 17 años.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/sWAmULmbS-I?si=GdOLHDs5IE_onOm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su debut en la UFC lo tendría menos de 2 meses después de su última pelea, enfrentando al luchador <b>Jay Perrin</b>, a quien vencería por sumisión en el primer asalto. Ganándose el bono a la actuación de la noche. Su primer derrota llegaría en su siguiente combate, cuando enfrentando a <b>Christian Rodriguez</b> caería derrotado por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Sin embargo, Raúl sería capaz de reponerse de esta derrota, venciendo por nocaut en el primer asalto a <b>Terrence Mithcell</b> en su siguiente combate. Ganando otro bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/k1U3vN-Q1f0?si=ZtMKFfRvCeiYP0YZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su siguiente combate lo tendría el 8 de junio de 2024 en el <Link href='/noticias/fight-night-cannonier-imanov'>UFC Fight Night: Cannonier vs Imavov</Link>, ante <b>Ricky Turcios</b>, a quien vencería por sumisión en el segundo asalto. Ganando otro bono más por la actuación de la noche.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
} 