import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/30-40/shara-magomedov/shara_magomedov.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shara Magomedov',
    description: "Shara 'Bullet' es un peleador ruso de la república de Daguestán, al igual que muchos de los peleadores más reconocidos de la UFC, como Khabib, Islam Makhachev o Ankalaev. Lleva peleando en la UFC desde octubre de 2023, cuando enfrentó al ruso Bruno Silva en el UFC 294, ganando su combate por decisión unánime.",
    openGraph: {
        title: 'Shara Magomedov',
        description: "Shara 'Bullet' es un peleador ruso de la república de Daguestán, al igual que muchos de los peleadores más reconocidos de la UFC, como Khabib, Islam Makhachev o Ankalaev. Lleva peleando en la UFC desde octubre de 2023, cuando enfrentó al ruso Bruno Silva en el UFC 294, ganando su combate por decisión unánime.",
        url: 'https://fullmma.org/peleadores/shara-magomedov'
    }
}

export default function SharaMagomedov () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={15} l={0} d={0} nombre='Shara Magomedov' apodo='BULLET' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Shara Bullet</h2>
                    <p className={styles.peleador__article__text}>Shara &quot;Bullet&quot; es un peleador ruso de la república de Daguestán, al igual que muchos de los peleadores más reconocidos de la UFC, como <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> o <Link href='/peleadores/magomed-ankalaev'>Ankalaev</Link>. Lleva peleando en la <Link href='/articulos/ufc'>UFC</Link> desde octubre de 2023, cuando enfrentó al ruso <b>Bruno Silva</b> en el UFC 294, ganando su combate por decisión unánime.</p>
                    <h2 className={styles.peleador__article__title}>Shara Magomedov Récord</h2>
                    <p className={styles.peleador__article__text}>Shara Magomedov tiene un récord profesional invicto de 15-0 en lo que lleva de su carrera en las MMA. Siendo 12 de sus victorias por la vía del nocaut y sólo 3 por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Shara Magomedov Biografía</h2>
                    <p className={styles.peleador__article__text}>Sharabutdin Magomedovich Magomedov nació el 16 de mayo de 1994 en la República de Daguestán en Rusia. Originalmente comenzaría a practicar fútbol desde niño, pero una pelea con alguien de su equipo le causó la expulsión de este. Esto lo llevó a explorar otros deportes, en particular comenzó a entrenar boxeo a los 12 años de edad, según él mismo explicó a la UFC, porque quería ser capaz de defenderse en la calle, dado que en Daguestán, muchas veces se veía obligado a pelear, y en muchos casos era contra personas que iban al gimnasio y estaban entrenados, por lo que necesitaba tener algún tipo de entrenamiento en combate.</p>
                    <p className={styles.peleador__article__text}>Rápidamente destaca en los deportes de combates, especialmente en kickboxing y en el muay thai: ganando un campeonato internacional de boxeo a nivel amateur, un torneo internacional de Muay Thai, una competición All-Russian en muay thai, y una competición All-Russian Kickboxing. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/2-UcOYr2kmc?si=fhFC6glPJm0nVO91" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Siendo sólo un estudiante, Shara logra dedicarse profesionalmente al mundo de las peleas. Consiguiendo ganar un campeonato de Eurasia en <b>Lethwei</b>, mejor conocido como <b>boxeo birmano</b> o <b>bando-kickboxing</b>, en unas peleas que se asemejan bastante a artes marciales como el Muay Thai, y que destaca por practicarse con las manos y los pies desnudos. Además fue campeón en diferentes compañías y de diferentes campeonatos organizados en toda la zona Euroasiática. </p>
                    <p>Una de las primeras cosas que salta a la vista cuando se ve a este peleador, es como tiene el ojo derecho como nublado, como explicamos en <Link href='/articulos/shara-magomedov-ojo'>¿Qué le Pasó en el Ojo a Shara Magomedov?</Link>, Shara no nació de esta forma, perdió gran parte de la visión luego de sufrir una lesión en el año 2016 mientras estaba entrenando. Necesitó de varias operaciones y cirugías, y como él mismo explicó, no perdió completamente la vista del ojo derecho, dado que aún es capaz de percibir cosas con él. </p>
                    <h3>Shara Magomedov MMA</h3>
                    <p className={styles.peleador__article__text}>Shara Bullet comenzaría su carrera en las MMA peleando en China, haciendo su debut el 10 de diciembre de 2017 en peso wélter ante <b>Yincang Bao</b>, a quien vencería por TKO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>En este país se mantendría peleando, teniendo otros 3 combates ante luchadores chinos, ganando todos por la vía del nocaut.</p>
                    <p className={styles.peleador__article__text}>En su regreso a Rusia, comenzaría a pelear en peso medio, obteniendo 3 victorias por la vía del nocaut. Shara haría un viaje a Brasil para pelear en peso semipesado ante el brasileño <b>Rodrigo Carlos</b> el 26 de febrero de 2022. Aquel día se pondría en juego el <b>título vacante de peso semipesado de Arena Global</b>, que conseguiría ganar luego de concretar un nocaut cuando estaba cerca de finalizar el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Shara no defendería su título y tendría 3 combates más, obteniendo 1 victoria por decisión y 2 por nocaut. Siendo la última de sus victorias, ante el luchador de la India <b>Kushal Vyas</b>, a quien en sólo 8 segundos lograría vencer por TKO.</p>
                    <h3>Shara Magomedov UFC</h3>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/IiFAAWbYMts?si=ICIymCNYGsYlHZNm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su destacada carrera a una edad tan temprano, con un récord de 11-0 y sólo 28 años, llevaron a la UFC a querer contratarlo. Por lo que el día 21 de octubre de 2023 haría su debut en la compañía, enfrentando al brasileño <b>Bruno Silva</b>, a quien conseguiría derrotar luego de 3 asaltos por decisión unánime, dejando un muy buen debut que llevó a los fans de la UFC a poner sus ojos en él.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/3s26XQ8rZts?si=6_N_Ux6cQTXsE4lP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su segundo combate, se programó una pelea contra <b>Ihor Potieria</b> en el <Link href='/covertura-ufc/fight-night-whittaker-aliskerov'>UFC FIGHT NIGHT: Whittaker vs Aliskerov</Link>, pero esto no pudo estar presente dado que terminó aceptando una pelea de último minuto ante el brasileño <b>Michel Pereira</b> en el <Link href='/covertura-ufc/ufc301'>UFC 301</Link>. En su lugar se le puso a otro peleador llamado <b>Joilton Lutterbach</b> que tampoco pudo decir presente ya que fue suspendido por dar positivo de sustancias prohibidas. Finalmente se enfrentó al brasileño <b>Antonio Trócoli</b>, a quien logró noquear en el tercer asalto, ganando su primer bono en la compañía a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/jRNxPJcH9BM?si=zldOVJ7GuxcDTRvs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su tercer pelea en la UFC, se enfrentaría al polaco <b>Michał Oleksiejczuk</b> en el <Link href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>UFC FIGHT NIGHT: Sandhagen vs Nurmagomedov</Link>. Esta pelea la ganaría por decisión unánime en lo que fue actuación destacada, ganándose su segundo bono en la compañía, esta vez a la pelea de la noche.</p>
                    </article>
                <AsideChamps />
            </section>
        </main>
    )
}