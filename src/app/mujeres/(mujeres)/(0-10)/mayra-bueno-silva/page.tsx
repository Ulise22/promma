import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import mayra from '@/assets/peleadores__images/mujeres/0-10/mayra-bueno-silva/mayra_silva.png'
import careo from '@/assets/peleadores__images/mujeres/0-10/mayra-bueno-silva/mayra_careo.jpg'
import AsideFighter from '@/app/components/asides/AsideFighter'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Mayra Bueno Silva',
    description: "Mayra Bueno Silva es una luchadora brasileña que compite en la división de peso gallo de la UFC desde que hizo su debut en septiembre de 2018, cuando se enfrentaría a la canadiense Gillian Robertson en un evento de UFC organizado en Brasil. ",
    openGraph: {
        title: 'Mayra Bueno Silva',
        description: "Mayra Bueno Silva es una luchadora brasileña que compite en la división de peso gallo de la UFC desde que hizo su debut en septiembre de 2018, cuando se enfrentaría a la canadiense Gillian Robertson en un evento de UFC organizado en Brasil.",
        url: 'https://fullmma.org/mujeres/mayra-bueno-silva'
    }
}

export default function Mayra () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={mayra} w={10} l={4} d={1} nombre='Mayra Bueno Silva' apodo='SHEETARA' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Mayra Bueno Silva UFC</h2>
                    <p className={styles.peleador__article__text}>Mayra Bueno Silva es una luchadora brasileña que compite en la división de peso gallo de la <Link href='/articulos/ufc'>UFC</Link> desde que hizo su debut en septiembre de 2018, cuando se enfrentaría a la canadiense <b>Gillian Robertson</b> en un evento de UFC organizado en Brasil. </p>
                    <h2 className={styles.peleador__article__title}>Mayra Bueno Silva Récord</h2>
                    <p className={styles.peleador__article__text}>Actualmente Mayra cuenta con un récord de 10-4-1-(1), siendo 1 de sus victorias por la vía del nocaut, 7 por sumisión y 2 por decisión. Mientras que 1 de sus derrotas fue por la vía del nocaut y 3 fueron por decisión. Su único empate fue contra la estadounidense <b>Montana De La Rosa</b>, combate en el que a Mayra se le descontó un punto en el primer asalto por agarrarse a la valla.</p>
                    <h3>Mayra Bueno Silva da positivo en doping</h3>
                    <p className={styles.peleador__article__text}>Finalmente, su combate contra la americana <Link href='/mujeres/holly-holm'>Holly Holm</Link> en julio de 2023, había terminado originalmente en una victoria por sumisión en el segundo asalto para Mayra Bueno Silva, pero el resultado se vió anulado luego de que La Comisión Atlética de Nevada (NAC) decidiera sancionar a la peleadora por dar positivo de ácido ritalínico en las pruebas presentadas antes de la pelea.</p>
                    <p className={styles.peleador__article__text}>Sin embargo Mayra explica que esta sustancia se encuentra presente en los medicamentos para tratar el trastorno por déficit de atención e hiperactividad (TDAH), medicamentos que Mayra venía tomando desde hace 3 años, según ella explica: &quot;Dejé de tomar el medicamento el lunes de la semana de la pelea. He hecho esto muchas veces y esta vez no sé qué ha pasado. Paré el lunes. Esta medicación no es dopaje, pero puedo tomarla fuera de competición y siempre la dejo el lunes. No sé qué ha pasado&quot;.</p>
                    <p className={styles.peleador__article__text}>Por esto, además de anular el resultado de su combate, se la suspendió hasta noviembre de 2023, y se le obligó a pagar una multa equivalente al 15% de lo generado por la pelea, además, para su siguiente pelea se debería someter a pruebas de drogas 30, 15 y 3 días antes del combate.</p>
                    <h2 className={styles.peleador__article__title}>Mayra Bueno Silva Historia</h2>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/hM3535zgeIs?si=zfrV1BbaUwfZ-xN7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Mayra Bueno Silva nació el 22 de agosto de 1991, en Uberlandia, perteneciente al Estado brasileño de Minas Geirais. Vive y entrena gimnasios ubicados en Campinas y Sao Paulo donde está radicada desde enero de 2015, posee el cinturón púrpura en Jiu-Jitsu brasileño que hace notar con la gran cantidad de victorias que obtuvo por sumisión. Comenzó a competir de forma profesional en marzo de 2015 en campeonatos brasileños, donde hizo su debut en peso gallo contra <b>Shun Lee</b> a quien venció por sumisión en el primer asalto, antes del primer minuto de pelea.</p>
                    <p className={styles.peleador__article__text}>Tendría 2 combates en el año 2016 ante sus compatriotas <b>Marilia Santos</b>, a quien enfrentaría en un combate en peso mosca donde lograría vencer por TKO en el primer asalto, y ante <b>Taynna Taygma</b>, a quien lograría derrotar por sumisión en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Estas 3 victorias obtenidas al inicio de su carrera, se dispondría a pelear por el Campeonato de Peso Gallo de BMMA el día 11 de marzo de 2017 ante <b>Daiane Firmino</b>, logrando campeonar y ganar este campeonato al vencer por decisión dividida a su rival. Esta victoria, que le sumaba un récord profesional de 4-0, la llevaría a ganarse la oportunidad de competir en el <b>Dana White&apos;s Conteneder Series</b>, donde de ganar podría firmar un contrato con la UFC. Para ello se enfrentó a su compatriota <b>MAyana Souza</b>, el 10 de agosto de 2018, consiguiendo derrotarla con una sumisión en el primer asalto en el primer minuto de la pelea. </p>
                    <p className={styles.peleador__article__text}>El 22 de septiembre de ese mismo 2018 haría su debut en la compañía más grande de MMA en el mundo, en su regreso a la división de peso mosca, enfrentando para ello a la canadiense <b>Gillian Robertson</b>, a quien conseguiría derrotar por sumisión en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Luego de esta victoria, y con récord de 6-0, nuestra protagonista entraría en una racha irregular en cuanto a los resultados de sus peleas. Perdiendo su primer pelea profesional al enfrentar a la ucraniana <b>Maryna Moroz</b>, luego que de pasados los 3 asaltos, su rival se llevara la victoria por decisión unánime. Luego conseguiría una victoria ante la peleadora italiana <b>Mara Romero Borella</b>, a quien sometería en el primer asalto en septiembre de 2020. Pelearía en febrero de 2021 ante la estadounidense <b>Montana De La Rosa</b>, en una pelea que terminaría en empate, luego de que a Silva se le descontara un punto por agarrarse de la valla. Y finalmente, en octubre de ese mismo 2021 volvería a caer derrotada por decisión, al enfrentar a la luchadora francesa <b>Manon Fiorot</b>. </p>
                    <p className={styles.peleador__article__text}>Probablemente fue esta racha irregular por la que atravesó, lo que llevó a la brasileña a moverse de categoría, para volver a luchar en la categoría de peso gallo. Donde esta vez, lograría acumular una racha de victorias positiva, venciendo primero a peleadora china <b>Wu Yanan</b>, a quien derrotaría por decisión unánime, ganando el primer bono de su carrera a La Pelea de la Noche. Luego conseguiría derrotar a la suiza <b>Stephanie Egger</b>, al somterla en el primer asalto de la pelea. Y finalmente al enfrentarse a la peleadora sueca <b>Lina Lansberg</b>, conseguiría derrotarla por sumisión en el segundo asalto de la pelea, ganando el bono a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/N_0-ld1QjBg?si=xkfwFaYcyO07CQz6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Con 3 victorias acumuladas en la división, el 15 de julio de 2023 la peleadora brasileña se enfrentaría a la histórica excampeona de peso gallo <Link href='/mujeres/holly-holm'>Holly Holm</Link>, a quien conseguiría derrotar por sumisión en el segundo asaltos. Aunque esta pelea tiempo después quedaría sin resultado oficial, debido a que Mayra Bueno Silva daría positivo por sustancias prohibidas, lo que no sólo supondría la anulación del resultado de la pelea, sino que además supondría una suspensión y una multa para la brasileña como sanción.</p>
                    <p className={styles.peleador__article__text}>De igual manera esto no impediría que el rendimiento de Silva sea bien valorado por la UFC, dado que en su siguiente combate, con fecha para el 20 de enero de 2024 en el <Link href='/covertura-ufc/ufc297'>UFC 297</Link>, se pondría a pelear por el título vacante de la división, que había quedado sin dueño luego del retiro de <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>. Para esto, se enfrentaría a la luchadora estadounidense <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>, contra quien lamentablemente caería derrotada luego de finalizados los 5 asaltos por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/CYiyIWA4gJs?si=7JS7rHqlW2lKArZV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>La brasileña volvería a pelear el 29 de junio de ese mismo año en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, para enfrentar a la luchadora americana <b>Macy Chiasson</b>, contra quien lamentablemente volvería a caer derrotada por TKO, luego de que un corte en la ceja llevara a los médicos a parar la pelea en el segundo asalto del combate. </p>
                    <EndArticle />
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}