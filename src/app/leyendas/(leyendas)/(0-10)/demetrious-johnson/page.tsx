import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import DemetriousHero from './DemetriousHero'


export default function Demetrious () {
    return(
        <main>
            <DemetriousHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Demetrious Johnson UFC y MMA</h2>
                    <p className={styles.leyenda__article__text}>Demetrious Johnson es un peleador estadounidense de Artes Marciales Mixtas, que actualmente compite en la división de peso mosca en la compañía <Link href='/articulos/one'>ONE Championship</Link>, donde es el actual campeón. Además tuvo una exitosa carrera en su paso por la que hoy en día es la compañía más grande de MMA en el mundo, la <Link href='/articulos/ufc'>UFC</Link>, donde fue campeón de peso mosca desde 2012 hasta 2018.</p>
                    <p className={styles.leyenda__article__text}>En la UFC defendió su título de forma exitosa un total de 11 veces, que es el récord actual de la compañía, hasta que al enfrentarse con su compatriota <b>Henry Cejudo</b> cayó derrotado por decisión dividida y por tanto perdería su título y su increíble racha ganadora de defensas por el título.</p>
                    <h2 className={styles.leyenda__article__title}>Demetrious Johnson Récord</h2>
                    <p className={styles.leyenda__article__text}>Demetrious Johnson cuenta con un récord de 25-4-1. Siendo 5 de sus victorias por la vía del nocaut, 8 por la vía de la sumisión y 12 por decisión. Mientras que de sus 4 derrotas, sólo 1 fue por nocaut y las otras 3 fueron por decisión. Además empató una de sus peleas contra el estadounidense <b>Ian McCall</b> por decisión mayoritaria, en lo que era una eliminatoria por el título de Peso Mosca de la división.</p>
                    <h2 className={styles.leyenda__article__title}>Demetrious Johnson Historia</h2>
                    <p className={styles.leyenda__article__text}>Demetrious Khrisna Johnson nació el 13 de agosto de 1986 en Estados Unidos, en una ciudad llamada Madisonville, ubicada en el condado de Hopkins en el Estado de Kentucky. Nació producto de un parto prematuro, lo que según él mismo relata, ha sido la causa de que sea tan pequeño de estatura, midiendo actualmente 1,60m. </p>
                    <p className={styles.leyenda__article__text}>Cuando era muy pequeño, su padre los abandonó a él y a su madre. Por esto, a lo largo de su infancia, Demetrious fue críado por varios padrastros, siendo el último de estos, un tanto abusivo según relata el luchador. Sin embargo, esto no lo privó de tener una infancia alegre y tranquila, donde los buenos momentos con su madre y sus hermanos, nunca faltaron. </p>
                    <p className={styles.leyenda__article__text}>Siendo un niño se interesó por los deportes, en especial por las MMA, que era algo que podía compartir con su padrastro, con quien juntos miraban los combates de la ya extinta promotora japonesa, <b>Pride FC</b>.</p>
                    <p className={styles.leyenda__article__text}>Demetrious comienza una carrera amateur en las MMA, donde cosecha un récord de 9-0. Viendo lo bien que le estaba yendo de forma amateur, decide comenzar una carrera profesional, en la que compagina su carrera universitaria; trabajos que hacía para mantenerse, muchos de ellos en el rubro de la construcción; y el gimnasio para prepararse para las peleas. </p>
                    <p className={styles.leyenda__article__text}>De esta manera hace su debut profesional contra su compatriota <b>Frankie Mendez</b>, a quien somete en el primer asalto. Luego de unos 3 combates que acabaron en victoria para Demetrious, 2 por nocaut y 1 por sumisión, entró en la compañía <b>WEC</b>, donde debutó con una derrota por decisión contra el inglés <b>Brad Pickett</b>, de la que se recuperó rápido con 2 victorias consecutivas. </p>
                    <p className={styles.leyenda__article__text}>En esa época, fue cuando el lider de la UFC, Dana White, decidió comprar la empresa <b>WEC</b>, absorbiendo de esta manera a todos sus peleadores, esto obviamente incluía a Demetrious Johnson, que comienza a pelear en esta compañía, donde realiza su debut contra el japonés <b>Norifumi Yamamoto</b> a quien vence por decisión unánime.</p>
                    <p className={styles.leyenda__article__text}>Luego de unos cuantos combates en la compañía tuvo la oportunidad de de pelear contra <b>Ian McCall</b>, en lo que sería una eliminatoria por el título. Sin embargo, luego de 3 asaltos, la pelea termina en un empate por decisión mayoritaria, por lo que se programa una revancha para 3 meses después, en la que esta vez, luego de 3 asaltos, Demetrious terminaría ganando el combate por decisión unánime. De esta forma se encontraría en condiciones de enfrentar a <b>Joseph Benavidez</b> por el Campeonato de Peso Mosca de la UFC, dicho combate, luego de 5 asaltos, terminaría en una victoria por decisión dividida a favor de Demetrious Johnson, logrando de esta forma convertirse en el campeón de Peso Mosca de la UFC.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/vmCH-0T6Xig?si=_QIQ75A8ENzctaHP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Desde entonces, defendería el título de forma exitosa un total de 11 veces, rompiendo el récord de la mayor cantidad de defensas exitosas por el título que pertenecía a <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, que tiene un récord de 10 defensas. La última de estas 11 victorias fue contra su compatriota <b>Ray Borg</b> en el UFC 216, a quien vencería con una sumisión lograda a través de un armbar en el quinto asalto. </p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/NBe22h4FJVc?si=2ZYU4-fXms8WVcV6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Para esta época, la UFC estaba ganando mucha visibilidad de la mano de estrellas como <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, a quien se le dedicaba toda la atención. Sin embargo, daba la sensación de que a la presencia de un campeón tan dominante como Demetrious Johnson no se le estaba dando la importancia que merecía. Por su parte Demetrious, siempre se había mostrado alejado de las negociaciones salariales con Dana White, porque es una persona a la que no le gusta el conflicto, sin embargo ya empezaba a demostrar su malestar con la paga que estaba recibiendo.</p>
                    <p className={styles.leyenda__article__text}>Dana White alegaba que Demetrious Johnson no era un peleador mediático y que por tanto no generaba tanto dinero, y que él se dedicaba a pagar en base al dinero que cada peleador generaba.Esta disputa se terminó de resolver, luego de muchas negociaciones, acordaron que el campeón de la división cobraría un porcentaje de los PPV.</p>
                    <p className={styles.leyenda__article__text}>Dicho combate en el que pasaría a recibir una mejora salarial, sería contra un rival a quien ya había enfrentado en el pasado, como es el caso de Henry Cejudo, a quien había noqueado en el primer asalto en el pasado. Esta pelea, sin embargo, sería la que cortaría con la racha histórica que tenía desde 2012, defendiendo su título de forma exitosa. La pelea luego de los 5 asaltos, se la terminaría llevando Henry Cejudo por decisión dividida.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/n6TpXTO6l2Q?si=WbxsSmGeoaa1hO_r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Dana White aprovecharía la derrota de su campeón,, para realizar un intercambio entre Demetrious Johnson y <b>Ben Askren</b>, que pertencía a la compañía <Link href='/articulos/one'>ONE Championship</Link>, compañía a la que pasaría a competir Demetrious.</p>
                    <p className={styles.leyenda__article__text}>Este intercambio a quien más terminó beneficiando especialmente a nuestro protagonista, que en ONE, encontró un lugar donde es mejor pagado, mejor tratado y donde recibe el respeto que merece alguien de la trayectoria y carrera de él.</p>
                    <p className={styles.leyenda__article__text}>Hoy en día se mantiene como un peleador activo en la compañía ONE, donde fue campeón en el torneo en formato de eliminatoria en Peso Mosca, y donde ganó el Campeonato Peso Mosca de ONE, luego de vencer en su revancha al brasileño <b>Adriano Moraes</b>, a quien noqueó en el cuarto asalto de la pelea.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/TW9e4sy1dbY?si=dis8IiqXtOK2cTC2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}