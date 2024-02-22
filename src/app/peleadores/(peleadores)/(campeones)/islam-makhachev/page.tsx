import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import makhachev from '@/assets/peleadores__images/10-20/islam-makhachev/makhachev.png'
import khabib from '@/assets/peleadores__images/10-20/islam-makhachev/makhachev_khabib.jpg'
import islam from '@/assets/peleadores__images/10-20/islam-makhachev/islam__makhachev.jpg'
import pelea from '@/assets/peleadores__images/10-20/islam-makhachev/makhachev_pelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Makhachev () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={makhachev} w={25} l={1} d={0} nombre='Islam Makhachev' apodo={null} categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Makhachev</h2>
                    <p className={styles.peleador__article__text}>Makhachev es uno de los principales puntuales de la UFC. Uno de los peleadores más completos de la empresa. Desde el 7 de noviembre está en la primera posición del ranking libra por libra de UFC.</p>
                    <p className={styles.peleador__article__text}>En 2014 firmó su contrato de 4 peleas en la UFC. Tuvo su debut oficial el 23 de mayo de 2015, consiguiendo su primera victoria contra Leo Kuntz, donde ganó por sumisión. Actualmente lleva más de 5 años dentro de la UFC, donde ha conseguido ganar (en el año 2022) su primer campeonato de peso ligero de UFC contra <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> (UFC 280) y ha podido defenderlo en dos ocasiones contra <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> (UFC 284 y UFC 294)</p>
                    <Image className={styles.peleador__article__image} src={islam} alt='Islam Makhachev proclamándose campeón de Peso Ligero de UFC luego de derrotar a su rival Charles Oliveira' />
                    <h2 className={styles.peleador__article__title}>Makhachev MMA</h2>
                    <p className={styles.peleador__article__text}>Hizo su debut en M-1 Global contra Tengiz Kuchua en 2011, saliendo victorioso en el primer round por nocaut. En 2014 hizo su última pelea contra Ivica Truscek, ganando en el tercer round por sumisión. Luego de esto firmó su contrato para UFC.</p>
                    <p className={styles.peleador__article__text}>No ha perdido ninguna pelea en M-1, teniendo un total de 5 enfrentamientos victoriosos.</p>
                    <h2 className={styles.peleador__article__title}>Makhachev Record</h2>
                    <p className={styles.peleador__article__text}>25-1-0: Lleva un recorrido total de 26 peleas: 1 sola derrota por nocaut contra Adriano Martins. 25 victorias, 11 por sumisión, 5 por nocaut y 9 por decisión unánime y decisión dividida. Tiene 15 peleas oficiales de UFC, de las cuales solo ha perdido 1 por nocaut y ha ganado 14: 6 por sumisión, 3 por nocaut y 5 por decisión unánime. </p>
                    <h2 className={styles.peleador__article__title}>Islam Makhachev & Khabib Nurmagomédov</h2>
                    <Image className={styles.peleador__article__image} src={khabib} alt='Islam Makhachev junto a Khabib Numagomédov y el padre de Khabib'/>
                    <p className={styles.peleador__article__text}>Nacido el 27 de octubre de 1991, Majachkala, Duguestán (Rusia). A los 11 años de edad, en la escuela, conoce a Abubakar, sobrino de Abdulmanap Nurmagomedov, exmilitar y exjudoca ruso. Abubakar entrenaba con Khabib, hijo de Abdulmanap, de esta forma comienza la amistad entre Khabib e Islam (menor por dos años)</p>
                    <p className={styles.peleador__article__text}>De esta manera, Makhachev, se volvió parte de la familia Nurmagomedov. En reiterarás ocasiones, ambos han declarado que se sienten como hermanos. Abdumanap se encargó de entrenar a ambos peleadores. Y aunque actualmente Khabib no está en el equipo de Makhachev, su relación sigue siendo igual.</p>
                    <h2 className={styles.peleador__article__title}>Makhachev Última pelea</h2>
                    <p className={styles.peleador__article__text}>Su última pelea fue una revancha contra <Link href='/peleadores/alexandder-volkanovski'>Alexander Volkanovski</Link> donde consiguió defender su título, ganando por nocaut en el primer round. Se tenía previsto que peleará contra Charles Oliveira, pero Oliveira fue obligado a retirarse del evento por lesión.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='Islam Makhachev golpeando en el rsotro a su rival ded UFC Alexander Volkanovski' />
                    <h2 className={styles.peleador__article__title}>Makhachev Próxima Pelea</h2>
                    <p className={styles.peleador__article__text}>El entrenador Javier Méndez comenta: “Porque vencer a Conor no creará el tipo de legado que el Islam quiere, ¿verdad? Ir tras el título de peso welter sí lo es. Ese es un momento de tipo legado.” Esto genera que Edwards o Covington sean potenciales rivales a enfrentar en peso welter el próximo 16 de diciembre.</p>
                    <p className={styles.peleador__article__text}>Sin embargo, esto parece poco probable. Uno de los nombres más sonados sigue siendo el de Charles Oliveira por la revancha. </p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}