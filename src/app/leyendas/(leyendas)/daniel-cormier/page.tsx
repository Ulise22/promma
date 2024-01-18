import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/leyendas/components/AsideChamps'
import CormierHero from './CormierHero'


export default function Cormier () {
    return(
        <main>
            <CormierHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Daniel Cormier UFC</h2>
                    <p className={styles.leyenda__article__text}>Daniel Cormier, también conocido como DC, es un peleador de MMA estadounidense que supo ser campeón de Peso Pesado en 4 compañías, lograndolo tanto en <b>XMMA</b>, <b>KOTC</b>, <b>Strikeforce</b> y en <Link href='/promotoras/ufc'>UFC</Link>, donde además fue campeón en la división de Peso Semipesado, logrando entrar en el selecto grupo de doble campeones simultaneos de la UFC.</p>
                    <p className={styles.leyenda__article__text}>Fue incluido en el Salón de la Fama en 2022, en una ceremonia donde fue muy elogiado por Dana White, dueño de la UFC, quien dijo: &quot;Daniel Cormier es uno de los copetidores más impresionantes de todos los tiempos. DC se enfrentó a los mejores atletas del mundo en cada nivel de Wrestling y MMA. También es el profesional definitivo. Siendo un peleador activo, siempre se le dedicó tiempo a los medios, lo que lo convirtió en uno de los mejores analistas de la televisión en todos los deportes. DC es uno de los mejores embajadores que la UFC ha tenido, y es un honor incluirlo en el Salón de la Fama de la UFC&quot;.</p>
                    <h2 className={styles.leyenda__article__title}>Daniel Cormier Récord</h2>
                    <p className={styles.leyenda__article__text}>Daniel Cormier posee un récord en las MMA de 22-3-(1). Siendo 8 de sus 22 victorias por nocaut, 7 por sumisión y 7 por decisión. Mientras que de sus derrotas, 1 fue por nocaut y 2 por decisión. Además, tiene una pelea sin resultado, que originalmente había perdido por KO contra <Link href='/campeones/jon-jones'>Jon Jones</Link>, pero que luego de Jones diera positivo en un testeo por esteroides, lo que resultó en un cambio en el resultado de la pelea y le permitió a DC conservar su título que había perdido en dicho combate.</p>
                    <h2 className={styles.leyenda__article__title}>Daniel Cormier Historia</h2>
                    <p className={styles.leyenda__article__text}>Daniel Cormier nació un 20 de marzo de 1979 en la ciudad estadounidense de Lafayette, ubicada en el Estado de Luisiana. Antes de comenzar su carrera en las MMA, entrenó Wrestlind durante gran parte de su vida, deporte en el que supo ser medallista de oro en los Campeonatos Panamericanos de 2002 (Maracaibo) y Santo Domingo (2003). Además de representar a los Estados Unidos en los Juegos Olímpicos en 2 ocasiones, tanto en la edición de 2004 como en 2008, aunque en aquella edición no pudo participar debido a una insuficiencia renal que derivaba de su exceso de peso.</p>
                    <p className={styles.leyenda__article__text}>Luego de esta experiencia en Wrestling, DC haría su debut como en las Artes Marciales Mixtas de manera profesional el 25 de septiembre de 2009 en la compañía Strickeforce, en el evento <b>Strikeforce Challengers: Kennedy vs. Cummings</b> que lo vería enfrentado a <b>Gary Frazier</b>, dicha pelea la terminaría ganando por TKO en el segundo asalto luego.</p>
                    <p className={styles.leyenda__article__text}>Cormier seguiría peleando de forma profesional, obteniendo un récord de 11-0 antes de recibir el llamado de la UFC. En dicho periodo previo a su llegada la compañía de Dana White, DC se convertiría en <b>Campeón de Peso Pesado de XMMA</b>, <b>Campeón de Peso Pesado de KOTC</b> y <b>Campeón de Peso Pesado de Strikeforce</b>. A este último título, lo ganaría por decisión unánime, luego de enfrentarse al estadounidense <b>Josh Bennet</b>, quien años más tarde se convertiría en campeón de los Pesos Pesados en la UFC.</p>
                    <p className={styles.leyenda__article__text}>Finalmente, el 20 de abril de 2013 se daría el debut de Daniel Cormier en la empresa número 1 de las MMA, en el <b>UFC on Fox: Henderson vs. Melendez</b>, donde se enfrentaría a <b>Frank Mir</b>, a quien luego de 3 asaltos vencería por decisión unánime. DC tendría una pelea más contra <b>Roy Nelson</b> que ganaría por decisión unánime, antes de decidir bajar de división para pelear con los Semipesados, en donde debutaría contra el estadounidense <b>Patrick Cummins</b> a quien derrotaría por nocaut en el primer asalto.</p>
                    <p className={styles.leyenda__article__text}>Luego de su victoria contra Patrick, Cormier sólo necesitaría una victoria más por sumisión contra <b>Dan Henderson</b>, para ir a pelear por el título de los Semipesados. En aquella ocasión sería contra, el probablemente, mejor peleador de las MMA de la historia, <Link href='/campeones/jon-jones'>Jon Jones</Link>, a quien enfrentaría en el UFC 182 en Las Vegas, perdiendo por decisión unánime, cortando con la racha invicta de 15 victorias que llevaba Cormier, pese a esto, ganó junto a su contricante el premio a la Pelea de la Noche.</p>
                    <p className={styles.leyenda__article__text}>Sin embargo, debido al conocido incidente de Jon Jones, en el que habría estado involucrado en un accidente de transito donde resultó herida una mujer embarazada, siendo acusado de abandonar el lugar del siniestro, se le despojaría del título. Lo que abriría la oportunidad a Cormier a pelear por el título vacante contra <b>Anthony Johnson</b> el 23 de mayo de 2015 en UFC 187, a quien ganaría por sumisión en el tercer asalto.</p>
                    <p className={styles.leyenda__article__text}>Luego de esto, tendría varios combates más, entre los que destacan el que tuvo contra <Link href='/leyendas/anderson-silva'>Anderson Silva</Link> en el UFC 200, aunque fue sin un título en juego. Además de las varias defensas del título que tuvo, donde también destaca la que tuvo contra <Link href='/campeones/jon-jones'>Jon Jones</Link>, quien lo volvería a vencer, esta vez por KO. Sin embargo, Jones daría positivo por esteroides luego del combate, lo que ayudaría a Cormier a retener el título.</p>
                    <p className={styles.leyenda__article__text}>Luego de una defensa más contra <b>Volkan Oezdemir</b>, a quien derrotaría por TKO en el segundo asalto, DC decidiría subir de división en busca de ser doble campeón. Peleando contra <b>Stipe Miocic</b>, a quien vencería por KO en el primer asalto, ganando además el premio a la actuación de la noche. Luego de una defensa exitosa contra <b>Derrick Lewis</b> a quien sometería en el segundo asalto, se volvería a enfrentar a Stipe Miocic. En esta ocasión, Miocic se llevaría el combate por TKO en el cuarto asalto.</p>
                    <p className={styles.leyenda__article__text}>El conflicto por el cinturón de Peso Pesado se resolvería en una trilogía otra vez entre los 2 un año después. Se enfrentarían nuevamente el 15 de agosto de 2020 en UFC 252, terminando el combate nuevamente en una victoria para Stipe Miocic que luego de 5 asaltos se llevaría la pelea por decisión unánime. Luego de aquel combate, Daniel Cormier se retiraría de las artes marciales mixtas, dejando atrás un legado inmenso tanto en la UFC, como en las artes marciales mixtas.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}