import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import jones from '@/assets/peleadores__images/10-20/jon-jones/jon_jones.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Jon Jones',
    description: 'El 9 de agosto de 2008 hizo su debut en la UFC 87 contra André Gusmão. Dos semanas antes, Tomasz Drwal se lesionó, esto generó que Jones se volviese su reemplazo. Jon Jones venía de ganar seis combates consecutivos y consiguió vencer contra Gusmão en una actuación impresionante, donde se llevó la victoria por decisión unánime.',
    openGraph: {
        title: 'Jon Jones',
        description: 'El 9 de agosto de 2008 hizo su debut en la UFC 87 contra André Gusmão. Dos semanas antes, Tomasz Drwal se lesionó, esto generó que Jones se volviese su reemplazo. Jon Jones venía de ganar seis combates consecutivos y consiguió vencer contra Gusmão en una actuación impresionante, donde se llevó la victoria por decisión unánime.',
        url: 'https://fullmma.org/peleadores/jon-jones'
    }
}

export default function JonJones () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={jones} w={27} l={1} d={0} nombre='Jon Jones' apodo='BONES' categoria='PESO PESADO' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jon Jones UFC</h2>
                    <p className={styles.peleador__article__text}>El 9 de agosto de 2008 hizo su debut en la UFC 87 contra André Gusmão. Dos semanas antes, Tomasz Drwal se lesionó, esto generó que Jones se volviese su reemplazo. Jon Jones venía de ganar seis combates consecutivos y consiguió vencer contra Gusmão en una actuación impresionante, donde se llevó la victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Desde UFC 128: Shogun vs. Jones, el peleador no ha perdido su título del campeonato mundial de peso semipesado de <Link href='/articulos/ufc'>UFC</Link>, teniendo un total de 11 defensas exitosas. Hace más de 10 años es invicto, sin perder su título como el mejor peleador en su categoría (anteriormente peso semipesado, actualmente peso pesado/completo)</p>
                    <p className={styles.peleador__article__text}>En el año 2011, Jones venció al campeón Mauricio Rua por nocaut técnico en el tercer round, volviéndose el campeón mundial de peso semipesado de UFC. Desde entonces ha peleado con luchadores como: Quinton Jackson, Lyoto Machida, Rashad Evans, Vitor Belfort, Chael Sonnen, Alexander Gustafsson, <Link href='/articulos/campeon-viejo-ufc'>Glover Teixeira</Link>, <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, Ovince Saint Preux, Antonhy Smith, Thiago Santos, Dominick Reyes y <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>, para defender su título de campeón. En todas las ocasiones fue victorioso, logrando así el reinado más largo de la historia de UFC como campeón de peso semipesado. Más de 1500 días sin que nadie le quite el invicto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/kouWvsaBvGw?si=FJ2QguKsMyXtbK2e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Semanas antes de UFC 187 (2015), Jones fue despojado de su título a causa de una suspensión, puesto que Jones habría generado un accidente de tránsito que desembocó una persona herida. En 2016 ganó el campeonato interino de peso semipesado en UFC 197 regresando a ser campeón. Pero en julio del mismo año, volvió a sufrir una suspensión a causa de dar positivo por dopaje. </p>
                    <p className={styles.peleador__article__text}>2017 Jones gana el campeonato de peso semipesado de UFC contra <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, recuperando su título una vez más. Pero en agosto del mismo año, volvió a dar positivo en la prueba de drogas, lo que resultaría en una nueva suspensión. 2018 gana el campeonato de peso semipesado de UFC contra Alexander Gustafsson, recuperando una vez más su título. </p>
                    <p className={styles.peleador__article__text}>En 2023, marzo, hizo su debut en peso pesado contra <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> por el campeonato vacante de peso pesado de UFC (UFC 285) el cual ganó. Se confirma que Jones firmó un contrato de 8 peleas.</p>
                    <h2 className={styles.peleador__article__title}>Jon Jones Artes Marciales</h2>
                    <p className={styles.peleador__article__text}>Actual peleador de las artes marciales mixtas, anteriormente entrenaba lucha libre y en su adolescencia se inclinó por la MMA. Muchos lo consideran el mejor peleador de la UFC de la historia, incluso el mismísimo Dana White habló al respecto luego de que le pregunten su ranking de los 5 mayores peleadores de la UFC: “Es tan difícil de hacer porque cuando miras los 23 años que he estado en esto, ha habido tantos grandes peleadores. Pero tienes que empezar con Jon Jones.”</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ebeQBYvWKsw?si=u9IrNSqT2xVsUhzr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Henry Cejudo comentó: “Jon Jones hizo lo que tenía que hacer. Ejecutó el plan de juego. Lo hizo muy, muy bien. Sus patadas en la pierna, la forma en que entregó sus derribos. La forma en que fue capaz de tener esa tenacidad para controlar a un tipo como <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>, y cómo lo hizo.” Pero posteriormente continuó elogiando al campeón de peso pesado y peso semipesado, comentando lo siguiente: “Jon Jones acaba de consolidarse como el mejor de todos los tiempos. No más excusas. No más St-Pierre, no más nadie. Su nombre es Jon Jones, y es el mejor luchador libra por libra. El mejor artista de artes marciales mixtas de todos los tiempos.”</p>
                    <p className={styles.peleador__article__text}>Con diversas técnicas desde las patadas: front kicks al cuerpo y cabeza, roundhouse kicks a las piernas y pecho, así como la patada oblicua (movimiento que apunta a la rodilla del contrincante). También destaca en el clinch. Ya en el suelo tiene un muy bueno control de posición, consigue encontrar aperturas para conectar golpes y codazos.</p>
                    <h2 className={styles.peleador__article__title}>Jon Jones historia</h2>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/BV3FcAecXL0?si=0fG_yvYcmBiMg8oL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En 2012 (19 de mayo) fue arrestado por conducir ebrio. Luego de unas horas arrestado, su madre fue a buscarlo (24 años). </p>
                    <p className={styles.peleador__article__text}>En 2015, luego de haber salido campeón contra <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, Jones dio positivo en un control antidoping por cocaína. Esto causó que Jones ingresara a una institución de rehabilitación para tratar su adicción a las drogas.</p>
                    <p className={styles.peleador__article__text}>“Era un adicto a las drogas. Una de las cosas de las que la gente no se da cuenta, es que puedes ser un adicto a las drogas incluso si eres un fumador de hierba. No hace falta consumir drogas fuertes para ser un adicto.” Comenta el peleador, actual campeón, luego del tiempo pasado en rehabilitación.</p>
                    <p className={styles.peleador__article__text}>Tres meses más tarde, Jones generó un problema mientras conducía, pasando un semáforo en rojo mientras se daba a la fuga. Horas después pagó su fianza de $2500. Una mujer embarazada que iba dentro de uno de los vehículos, terminó con el brazo fracturado. Esto causó que Dana White lo borrara de la empresa y le quitara el título.</p>
                    <p className={styles.peleador__article__text}>En 2016 volvió a ser descalificado por uso de sustancias prohibidas. Esto generó que el combate contra <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link> se suspendiese y se diese un año más tarde, el 29 de julio de 2017.</p>
                    <h2 className={styles.peleador__article__title}>Jon Jones Record</h2>
                    <p className={styles.peleador__article__text}>29 combates totales: 27 victorias, 7 por sumisión, 10 por nocaut y 10 por decisión unánime. Teniendo 1 derrota por descalificación contra Matt Hamill y una última pelea sin resultado contra <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>. Con 23 combates oficiales en la UFC: 21 victorias, 6 por sumisión, 5 por nocaut y 10 por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/UE1JDCxRy0k?si=bpB_lSrUvq8uvqb1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}