import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/james_toney-hero.jpg'

export default function BoxeadorEnMMA () {
    return(
        <main>
            <ArticleHero title='Boxeo Vs MMA: ¿Qué pasa cuando un boxeador pelea en MMA?' subtitle='En este artículo relatamos la ocasión en que un excampeón de boxeo se metió a competir en la UFC, y cómo terminó su enfrentamiento en el octagono.' image={hero} date='2024-06-14' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Pareciera ser que cada cierto tiempo reflota la discusión y el debate sobre qué es lo que sucedería si un boxeador profesional y un luchador de MMA se enfrentaran en un combate. Por ejemplo, hace no mucho, el boxeador de peso pesado <b>Tyson Fury</b>, había declarado que en un combate sería capaz de derrotar a <Link href='/peleadores/jon-jones'>Jon Jones</Link>, desafiandoló a pelear incluso.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/R2PP_9VeZmY?si=zZ4-hGfMN0atdCVD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Y aunque es verdad que en varias ocasiones peleadores de MMA se metieron a luchar en boxeo contra un boxeador profesional, siendo la mayoría de estos combates en favor del boxeador, lo que sí es inusual es ver a un boxeador profesional enfrentarse en un luchador de MMA, en un combate de MMA.</p>
                    <p>Sin embargo, hace más de una decada vimos uno de estos casos raros, cuando el boxeador <b>James Nathaniel Toney</b>, campeón del mundo de los pesos medios, supermedios, crucero y pesados, que había sabido enfrentarse a leyendas del deporte como <b>Roy Jones Jr.</b> o como <b>Evander Holyfield</b>, a quien venció por nocaut, decidió emprender una aventura en las MMA, cuando todavía era un peleador activo en el año 2010. Su aventura consistiría de una pelea en la <Link href='/articulos/ufc'>UFC</Link>, donde enfrentaría al excampeón de la compañía en pesos pesados <Link href='/leyendas/randy-couture'>Randy Couture</Link>.</p>
                    <p>Para dimensionar en qué condiciones llegaban cada uno, en aquel momento el luchador de UFC tenía 47 años, y estaba a menos de un año de retirarse del deporte, mientras que James Toney contaba con 5 años menos, teniendo 42 al momento de realizarse el combate. Además, aún siendo un peso pesado, Randy Couture era un luchador bastante liviano para la división, habiéndo competido gran parte de su carrera en los semipesados, por lo que el día de la pelea, el boxeador llegó con la ventaja de estar pesando casi 20 libras más que su contrincante.</p>
                    <p>Finalmente el 28 de agosto de 2010, en el UFC 118, se enfrentaría a la leyenda de la UFC, en Boston, Massachusetts. Y para cuando empezó el combate, en sólo 15 segundos Couture fue capaz de derribar al boxeador, que una vez en el suelo no tenía nada que hacer.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/HiK1nVVxA4Q?si=3y6YCs2wM7tyNRXG&amp;start=115" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Desde el piso, Couture se dedicó a golpear a su rival, hasta que decidió finalizar la pelea con un triángulo de brazo para vencer por sometimiento en sólo un asalto. Honestamente este es el resultado esperado para cualquier persona que quiera enfrentarse a un luchador de MMA sin tener siquera una mínima defensa de derribo, pero tiene mérito y es para respetar a James Toney, que a pesar de que las posibilidades estaban en su contra, decidió entrar al octagono y pelear igualmente.</p>
                    <p>Más allá de este enfrentamiento, creo que no hay otro caso de un campeón real de boxeo que haya decidido meterse a pelear con un peleador profesional de artes marciales mixtas, que es en parte lo que hace este combate y este caso tan enigmático.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}