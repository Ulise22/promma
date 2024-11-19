import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/10-20/best_ma_for_mma.jpg'
import jiujitsu from '@/assets/articulos/insideArticle/martial-arts/jiu-jitsu.jpg'
import sambo from '@/assets/articulos/insideArticle/martial-arts/sambo.jpg'
import kickboxing from '@/assets/articulos/insideArticle/martial-arts/kickboxing.jpg'
import boxeo from '@/assets/articulos/insideArticle/martial-arts/boxing.jpg'
import wrestling from '@/assets/articulos/insideArticle/martial-arts/wrestle.jpg'
import muaythai from '@/assets/articulos/insideArticle/martial-arts/muay_thai.jpg'
import lethwei from '@/assets/articulos/insideArticle/martial-arts/lethwei.jpg'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Mejores Artes Marciales Para MMA',
    description: 'Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.',
    openGraph: {
        title: 'Mejores Artes Marciales Para MMA',
        description: 'Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.',
        url: 'https://fullmma.org/articulos/mejores-artes-marciales-para-mma'
    }
}

export default function BestMAForMMA () {
    return(
        <main>
            <ArticleHero title='Las Mejores Artes Marciales Para MMA Según un Peleador Profesional' subtitle='Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.' image={hero} date='2024-09-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En el canal de Youtube <b>Martial Arts Journey With Rokas</b> estuvo presente el luchador profesional de MMA, <b>Jeff Chan</b>, quien tuvo su más reciente pelea y victoria en la promotora <Link href='/articulos/one-championship'>ONE Championship</Link>. Allí, realizó una tierlist, donde colocó por orden, las que él consideraba como las mejores artes marciales para hacer MMA. Por eso hoy, vamos a hablar de las que colocó más arriba en este ranking.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/cFqV1hbwXpE?si=9TRZkq8YfCV4f-PO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>A Tier</h2>
                    <p>Las artes marciales colocadas en este tier, son las que casi son perfectas, que a pesar de ser bastante buenas, les falta un poquito para llegar a la categoría de excelente, donde se encuentran otras artes marciales diferentes. </p>
                    <h3>Jiu Jitsu Brasileño</h3>
                    <p>La primera en aparecer en esta categoría, no es nada más ni nada menos que el <b>Jiu-Jitsu brasileño</b>, que en lo personal me sorprendió encontrarlo acá, dado que creí que estaría colocado en el Tier S. </p>
                    <p>Esta es una de las primeras artes marciales en las que pensamos a la hora de hablar de su utilidad en un combate de MMA donde practicamente todo se vale. Comenzando a alcanzar popularidad y notoriedad con la participación de <Link href='/leyendas/royce-gracie'>Royce Gracie</Link> en los primeros eventos de <Link href='/articulos/ufc'>UFC</Link>, cuando siendo de los peleadores más pequeños, era capaz de someter con relativa facilidad a peleadores de mayor peso y tamaño, demostrando que con una técnica pulida en esta disciplina, se es capaz de vencer a luchadores que a priori parecen más fuertes.</p>
                    <p>La razón por la que no está más arriba según explica Jeff, es porque todas las peleas de MMA se comienzan de pie, por lo que siempre existe el factor de ser golpeado y caer KO antes de siquiera derribar a tu oponente para intentar una sumisión o para llevar la lucha al suelo.</p>
                    <Image className={styles.article__image} src={jiujitsu} alt='Jiu Jitsu Brasileño' />
                    <h3>Sambo</h3>
                    <p>Este arte marcial ruso ha demostrado hoy en día su utilidad y su eficacia, habiéndonos traído a los que probablemente sean los mejores campeones de la historia de peso ligero en la UFC, como lo son los daguestanís <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> y <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, además de un cada vez un mayor número de luchadores que consiguen destacar en la UFC y en otras compañías.</p>
                    <Image className={styles.article__image} src={sambo} alt='Sambo' />
                    <h3>Kickboxing</h3>
                    <p>Una de las mejores artes marciales que se pueden aprender es el kickboxing, el cual en un combate resultar super efectivo. Los casos más enigmáticos y medianamente recientes de especialistas en este arte marcial que triunfan en las MMA, son el de <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, quien luego de ser campeón mundial de kickboxing, transicionó a las MMA, convirtiéndose en uno de los campeones más dominantes del peso medio en la UFC.</p>
                    <p>Además está el caso de <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que al igual que Izzy, luego de haber sido durante bastante tiempo campeón mundial de kickboxing, logró convertirse en campeón de la UFC en su 4ta pelea en la compañía. </p>
                    <p>La razón por la que se encuentra en el Tier A, y no en el Tier S, al contrario del boxeo, es porque se corre un mayor riesgo al lanzar patadas, dado que en caso de perder el equilibrio se puede caer y terminar en un posición poco ventajosa. Esto lleva además, a que se requiera de una mayor cantidad de tiempo para perfeccionar este arte marcial, siendo algo más difícil de aprender que el boxeo, por ejemplo.</p>
                    <Image className={styles.article__image} src={kickboxing} alt='Kickboxing' />
                    <h2>S Tier</h2>
                    <p>En este listado es donde se colocan las artes marciales que en teoría son las mejores para aprender, si lo que se quiere es ser un peleador de MMA. Recordando siempre, que esto es según la opinión del luchador profesional Jeff Chan.</p>
                    <h3>Boxeo</h3>
                    <p>El boxeo es la primera de las disciplinas que aparecen en esta parte del listado. La razón por la que está tan arriba, es porque, al igual que muchas de las artes marciales occidentales, es básica, simple y practica, por lo que con sólo un año de entrenamiento se puede alcanzar un nivel bastante decente, que supera los resultados que se pueden conseguir entrenando otras artes marciales, que por ser más complejas, requieren de una mayor cantidad de tiempo para conseguir un nivel alto.</p>
                    <p>La única desventaja que tiene, es que si no se saben otras artes marciales complementarias, la guardia del boxeo te deja expuesto a los derribos y patadas a las piernas, que hay que aprender a defender.</p>
                    <Image className={styles.article__image} src={boxeo} alt='Boxeo' />
                    <h3>Wrestling</h3>
                    <p>Otra de las artes marciales que sobresalen por sobre las demás, es el wrestling, que nos ha traído a innumerable cantidad de campeones de UFC, que incluso siendo atletas olímpicos, fueron capaces de hacer una transición a las MMA para llegar a lo más alto del deporte. </p>
                    <p>La ventaja de este arte marcial es que ayuda a sus practicantes a volverse fuertes tanto física como mentalmente. Además de poseer una versatilidad, que te hace capaz de poder lograr un derribo al enfrentar a un striker, para llevarlo a un escenario de pelea que lo incomoda, y te hace capaz de defender estos mismos derribos en caso de que quieras mantener la pelea en el striking. </p>
                    <Image className={styles.article__image} src={wrestling} alt='Wrestling' />
                    <h3>Muay Thai</h3>
                    <p>Este arte marcial tailandés es bastante efectivo y es considerado uno de los más peligrosos, esto es justamente una de sus ventajas, dado que al aprender esta disciplina se obtiene conocimiento de algunos de los golpes más duros que se pueden dar. Enseñándote a usar practicamente todo el cuerpo para luchar, con los rodillazos y codazos que en el clinch se vuelven letales. </p>
                    <Image className={styles.article__image} src={muaythai} alt='Muay Thai' />
                    <h3>Lethwei</h3>
                    <p>Considerado junto al Muay Thai como una de las artes marciales más peligrosas del mundo, estando prohido la mayor parte del mundo, con excepción de algunos pocos países (entre los que NO se encuentra ningún país latinoaméricano), este arte marcial se practica sin guantes, y según cuenta Jeff Chan, quien tuvo la oportunidad de entrenar con luchadores de elite en esta disciplina, quienes saben pelear en esta modalidad son muy peligrosos y no tendrían ningún problema en transicionar a las MMA siendo igual de efectivos. </p>
                    <Image className={styles.article__image} src={lethwei} alt='Lethwei' />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}