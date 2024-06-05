import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import mayra from '@/assets/peleadores__images/mujeres/mayra-bueno-silva/mayra_silva.png'
import careo from '@/assets/peleadores__images/mujeres/mayra-bueno-silva/mayra_careo.jpg'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Mayra () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={mayra} w={10} l={3} d={1} nombre='Mayra Bueno Silva' apodo='SHEETARA' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Mayra Bueno Silva UFC</h2>
                    <p className={styles.peleador__article__text}>Mayra Bueno Silva es una luchadora de la <Link href='/articulos/ufc'>UFC</Link> desde que hizo su debut en 2018 en el Dana White&apos;s Contender Series Brazil 1, donde ganó por sumisión a la brasileña <b>Mayana Souza</b>, ganandose así un contrato con la compañía. Actualmente está ranqueada #2 en la división de peso gallo femenino de UFC. </p>
                    <p className={styles.peleador__article__text}>Desde su debut, tuvo un total de 9 combates en la UFC, ganando 5, perdiendo 2, empatando 1 y dejando una pelea sin resultado luego de que Mayra diera positivo por ácido ritalínico</p>
                    <p className={styles.peleador__article__text}>Los primeros 5 combates que tuvo en la compañía luego de que firmara contrato fueron en peso Mosca, en aquella división fue donde obtuvo sus únicas 2 derrotas, la última siendo contra la francesa <b>Manon Fiorot</b>, esto la llevaría a decidir volver a competir en peso gallo femenino donde vencería primero a la luchadora <b>Wu Yanan</b> por decisión unánime, y donde acumularía una racha de 3 victorias consecutivas desde entonces.</p>
                    <h2 className={styles.peleador__article__title}>Mayra Bueno Silva Récord</h2>
                    <p className={styles.peleador__article__text}>Actualmente Mayra cuenta con un récord de 10-2-1-(1), siendo 1 de sus victorias por nocaut, 7 por sumisión y 2 por decisión. Mientras que ambas de sus derrotas fueron por decisión. Su único empate fue contra la estadounidense <b>Montana De La Rosa</b>, combate en el que a Mayra se le descontó un punto en el primer asalto por agarrarse a la valla.</p>
                    <h3>Mayra Bueno Silva da positivo en doping</h3>
                    <p className={styles.peleador__article__text}>Finalmente, su combate contra la americana <b>Holly Holm</b> en julio de 2023, había terminado originalmente en una victoria por sumisión en el segundo asalto para Mayra Bueno Silva, pero el resultado se vió anulado luego de que La Comisión Atlética de Nevada (NAC) decidiera sancionar a la peleadora por dar positivo de ácido ritalínico en las pruebas presentadas antes de la pelea.</p>
                    <p className={styles.peleador__article__text}>Sin embargo Mayra explica que esta sustancia se encuentra presente en los medicamentos para tratar el trastorno por déficit de atención e hiperactividad (TDAH), medicamentos que Mayra venía tomando desde hace 3 años, según ella explica: &quot;Dejé de tomar el medicamento el lunes de la semana de la pelea. He hecho esto muchas veces y esta vez no sé qué ha pasado. Paré el lunes. Esta medicación no es dopaje, pero puedo tomarla fuera de competición y siempre la dejo el lunes. No sé qué ha pasado&quot;.</p>
                    <p className={styles.peleador__article__text}>Por esto, además de anular el resultado de su combate, se la suspendió hasta noviembre de 2023, y se le obligó a pagar una multa equivalente al 15% de lo generado por la pelea, además, para su siguiente pelea se debería someter a pruebas de drogas 30, 15 y 3 días antes del combate.</p>
                    <h2 className={styles.peleador__article__title}>Mayra Bueno Silva Historia</h2>
                    <p className={styles.peleador__article__text}>Mayra Bueno Silva nació el 22 de agosto de 1991, en Uberlandia, perteneciente al Estado brasileño de Minas Geirais. Vive y entrena gimnasios ubicados en Campinas y Sao Paulo donde está radicada desde enero de 2015, posee el cinturón púrpura en Jiu-Jitsu brasileño que hace notar con la gran cantidad de victorias que obtuvo por sumisión. Comenzó a competir de forma profesional en marzo de 2015 en campeonatos brasileños, donde hizo su debut en peso gallo contra <b>Shun Lee</b> a quien venció por sumisión en el primer asalto, antes del primer minuto de pelea.</p>
                    <p className={styles.peleador__article__text}>Luego de aquel debut, tan sólo necesitó 3 combates más para tener su oportunidad en UFC, luego de ganarle a <b>Marilia Santos</b> por nocaut en el primer asalto, a <b>Taynna Taygma</b> por sumisión también en el primer asalto, y a <b>Daiane Firmino</b> por decisión dividida luego de 5 asaltos, esta última victoria siriviendole para ganar el <b>Campeonato de Peso Gallo de BMMA</b>. Luego de estos combates sería invitada a participar del Dana White&apos;s Contender Series Brazil 1, donde enfrentaría a la también brasileña <b>Mayana Souza</b> a quien lograría vencer por sumisión en el primer asalto, llevando poco más de un minuto de pelea.</p>
                    <Image className={styles.peleador__article__image} src={careo} alt='Mayra Bueno Silva en su careo previo a la pelea por UFC' />
                    <p className={styles.peleador__article__text}>Su exitosa carrera la llevó a ganarse una pelea por el título vacante de Peso Gallo Femenino de UFC contra la estadounidense <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>, a quien enfrentará el 20 de enero de 2024 por UFC 297, protagonizando el combate co-estelar que verá en el combate estelar como se enfrentan <Link href='/campeones/sean-strickland'>Sean Strickland</Link> contra el sudafricano <Link href='/peleadores/dricus-du-plessis'>Dricus Du Plessis</Link> por el título de Peso Mediano de UFC.</p>
                    <p className={styles.peleador__article__text}>Actualmente, se encuentra en pareja con quien también fue peleadora de UFC, la brasileña <b>Gloria de Paula</b>, a quien conoció en 2016, un año antes del debut profesional de Gloria.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}