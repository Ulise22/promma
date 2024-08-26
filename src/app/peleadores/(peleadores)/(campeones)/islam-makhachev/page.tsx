import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import makhachev from '@/assets/peleadores__images/10-20/islam-makhachev/makhachev.png'
import khabib from '@/assets/peleadores__images/10-20/islam-makhachev/makhachev_khabib.jpg'
import islam from '@/assets/peleadores__images/10-20/islam-makhachev/islam__makhachev.jpg'
import pelea from '@/assets/peleadores__images/10-20/islam-makhachev/makhachev_pelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideFighter from '@/app/components/asides/AsideFighter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Islam Makhachev',
    description: 'Makhachev es uno de los principales puntuales de la UFC. Uno de los peleadores más completos de la empresa. Desde el 7 de noviembre está en la primera posición del ranking libra por libra de UFC.',
    openGraph: {
        title: 'Islam Makhachev',
        description: 'Makhachev es uno de los principales puntuales de la UFC. Uno de los peleadores más completos de la empresa. Desde el 7 de noviembre está en la primera posición del ranking libra por libra de UFC.',
        url: 'https://fullmma.org/peleadores/islam-makhachev'
    }
}

export default function Makhachev () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={makhachev} w={26} l={1} d={0} nombre='Islam Makhachev' apodo={null} categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Makhachev</h2>
                    <p className={styles.peleador__article__text}>Makhachev es uno de los principales puntuales de la <Link href='/articulos/ufc'>UFC</Link>. Uno de los peleadores más completos de la empresa. Desde el 7 de noviembre está en la primera posición del ranking libra por libra de UFC.</p>
                    <p className={styles.peleador__article__text}>En 2014 firmó su contrato de 4 peleas en la UFC. Tuvo su debut oficial el 23 de mayo de 2015, consiguiendo su primera victoria contra Leo Kuntz, donde ganó por sumisión. Actualmente lleva más de 5 años dentro de la UFC, donde ha conseguido ganar (en el año 2022) su primer campeonato de peso ligero de UFC contra <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> (UFC 280) y ha podido defenderlo en dos ocasiones contra <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> (UFC 284 y UFC 294)</p>
                    <Image className={styles.peleador__article__image} src={islam} alt='Islam Makhachev proclamándose campeón de Peso Ligero de UFC luego de derrotar a su rival Charles Oliveira' />
                    <h2 className={styles.peleador__article__title}>Makhachev MMA</h2>
                    <p className={styles.peleador__article__text}>Hizo su debut en M-1 Global contra Tengiz Kuchua en 2011, saliendo victorioso en el primer round por nocaut. En 2014 hizo su última pelea contra Ivica Truscek, ganando en el tercer round por sumisión. Luego de esto firmó su contrato para UFC.</p>
                    <p className={styles.peleador__article__text}>No ha perdido ninguna pelea en M-1, teniendo un total de 5 enfrentamientos victoriosos.</p>
                    <h2 className={styles.peleador__article__title}>Makhachev Record</h2>
                    <p className={styles.peleador__article__text}>26-1-0: Lleva un recorrido total de 26 peleas: 1 sola derrota por nocaut contra Adriano Martins. 25 victorias, 12 por sumisión, 5 por nocaut y 9 por decisión unánime y decisión dividida. Tiene 15 peleas oficiales de UFC, de las cuales solo ha perdido 1 por nocaut y ha ganado 14: 6 por sumisión, 3 por nocaut y 5 por decisión unánime. </p>
                    <h2 className={styles.peleador__article__title}>Islam Makhachev & Khabib Nurmagomédov</h2>
                    <Image className={styles.peleador__article__image} src={khabib} alt='Islam Makhachev junto a Khabib Numagomédov y el padre de Khabib'/>
                    <p className={styles.peleador__article__text}>Nacido el 27 de octubre de 1991, Majachkala, Duguestán (Rusia). A los 11 años de edad, en la escuela, conoce a Abubakar, sobrino de Abdulmanap Nurmagomedov, exmilitar y exjudoca ruso. Abubakar entrenaba con Khabib, hijo de Abdulmanap, de esta forma comienza la amistad entre Khabib e Islam (menor por dos años)</p>
                    <p className={styles.peleador__article__text}>De esta manera, Makhachev, se volvió parte de la familia Nurmagomedov. En reiteradas ocasiones, ambos han declarado que se sienten como hermanos. Abdumanap se encargó de entrenar a ambos peleadores. Y aunque actualmente Khabib no está en el equipo de Makhachev, su relación sigue siendo igual.</p>
                    <h2 className={styles.peleador__article__title}>Islam Makhachev Historia</h2>
                    <p className={styles.peleador__article__text}>Siendo de etnia Lak, Islam Makhachev nació en la ciudad de Majachkalá, en Daguestán, Rusia. Su padre se dedicaba a cultivar tomates y a trabajar como conductor, mientras que su madre era una ama de casa que dirigía una pequeña cafetería. Comenzó a entrenar desde los 7 años, siendo el Taekwondo el primer arte marcial en el que se adentraría. Durante un tiempo también jugó fútbol luego de que se familia se mudara a otra ciudad. </p>
                    <p className={styles.peleador__article__text}>En febrero de 2014 se convertiría en Campeón Nacional Ruso de Sambo de Combate en su división, logrando clasificar para el campeonato mundial en Japón. Campeonanto en el que lamentablemente no pudo competir por una afección cardíaca.</p>
                    <p className={styles.peleador__article__text}>Haría su debut profesional en las MMA el 1 de agosto de 2010, enfrentando al oriundo de Azerbayán <b>Mogamed Bekbolatov</b>, a quien luego de 2 asaltos vencería por decisión unánime. Pelearía en diversas promotoras, especialmente en Rusia , hasta que le llegaría la oportunidad de firmar con la UFC, a la que llegaría con un récord de 11-0. </p>
                    <p className={styles.peleador__article__text}>Su debut en la compañía de Dana White sería el 25 de mayo de 2015 enfrentando al estadounidense <b>Leo Kuntz</b>, a quien derrotaría con una sumisión en el segundo asalto.</p>
                    <p className={styles.peleador__article__text}>Su segunda pelea en la UFC, sería su primer y hasta el momento única derrota, cuando enfrentaría al brasileño <b>Adriano Martins</b>, quien en el primer asalto dejaría KO al peleador de Daguestán. Sin embargo, nuestro protagonista supo reponerse muy bien de aquella dolorosa derrota, acumulando una racha de 14 victorias consecutivas, siendo la racha de victorias más larga en la historia de la división de peso ligero, y la tercera en la historia de la UFC.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/zHKmuojWg64?si=y_V97rktAUOlFx3W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En esta extensa racha de victorias, fue capaz de campeonar destronando al brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, que se había convertido en el nuevo campeón luego de el amigo personal de Islam y miembro de la esquina, <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> anunciara que se retiraba del deporte, dejando su título vacante, a quien vencería por sumisión en el segundo asalto, cuando se enfrentaran el 22 de octubre de 2022 en UFC 280.</p>
                    <p className={styles.peleador__article__text}>Defendería su titulo contra el histórico campeón de peso pluma <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, a quien vencería por decisión unánime en un combate muy cerrado, que haría a ambos peleadores merecedores del bono a la Pelea de la Noche. Para su segunda defensa, estaba originalmente planeada una revancha con Charles Oliveira en UFC 294, pero el brasileño sufrió un corte pocas semanas antes de la pelea que le impidió competir, en su lugar se buscó como reemplazo a Alexander Volkanovski, que en corto aviso aceptó pelear. En esta segunda pelea, el ruso terminó por llevarse la victoria de manera contundente, logrando un KO en el primer asalto con una patada a la cabeza de su rival.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='Islam Makhachev golpeando en el rostro a su rival ded UFC Alexander Volkanovski' />
                    <p className={styles.peleador__article__text}>El 1 de junio de 2024 volvería a defender su título en <Link href='/covertura-ufc/ufc302'>UFC 302</Link>, siendo el retador un <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, que venía de una victoria por nocaut en <Link href='/covertura-ufc/ufc299'>UFC 299</Link>, y que al estar en sus 35 años, veía este combate como su última oportunidad para ser campeón. En una pelea donde el retador dió todo, nuestro protagonista supo demostrar de lo que está hecho, sometiendo en el quinto asalto a Poirier, ganando el bono a la actuación de la noche y a la pelea de la noche.</p>
                    </article>
                <AsideFighter />
            </section>
        </main>
    )
}