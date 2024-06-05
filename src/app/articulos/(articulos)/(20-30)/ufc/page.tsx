import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/20-30/ufc-hero.jpg'

export default function UFC () {
    return(
        <main>
            <ArticleHero title='UFC: Historia e Información de la Compañía de MMA Más Grande del Mundo' subtitle='Todo lo relacionado al origen, crecimiento y actualidad de la compañía UFC.' image={hero} date='05/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Cuando hablamos de las artes marciales mixtas, es imposible no mencionar a las diferentes promotoras de este deporte, y cuando hablamos de dichas promotoras, la que destaca por encima de las demás, sin dudas, es la UFC, que con el paso de los años ha sabido convertirse en el gigante del deporte siendo quien concentra a las mayores estrellas y a los mejores peleadores del mundo. Por eso en este artículo vamos a hablar de su historia, las cosas por las que tuvo que pasar para llegar a ser la N°1 y mucho más.</p>
                    <h2>UFC Historia</h2>
                    <p>Aunque <b>Dana White</b> es el principal responsable de que la UFC goze del estatus que hoy tiene, lo cierto es que nada tuvo que ver en su creación. El nacimiento de la UFC comienza a mediados de 1992, con un ejecutivo llamado <b>Art Davie</b>, que comenzaba a darle vueltas a la idea de crear una competición de pelea, donde se enfrentaran peleadores de diferentes artes marciales para ver quien era el mejor. Sin embargo esta idea no contaba con el apoyo necesario, por lo que no fue hasta años más tarde, cuando conoció al brasileño <b>Rorion Gracie</b>, que pudo llevar a cabo su idea.</p>
                    <p>Entre estas 2 personas, junto con el empresario Bob Meyrowitz y el escritor Campbell McLarballzen comenzaron a idear el concepto de una competición donde se mezclaran diferentes artes marciales. Tomando la idea del octagono como lugar en el que pelearían, de una película de <b>Chuck Norris</b>, que tenía ese nombre. En aquella, por ser mediados de los años 90, era difícil organizar un torneo de artes marciales, dado que la mayoría, con excepción del karate, al ser visto como inofensivo, estaban prohibidas. Por lo que sabiendo esto, Davie decidió organizar el primer evento la ciudad de Denver, ubicada en el Estado de Colorado, que era menos estricta y prohibitiva con este tema.</p>
                    <p>El primer evento y las primeras peleas de la compañía, eran sin reglas y sin límite de tiempo. Esto por idea de Rorion Gracie, que quería evitar que cualquier peleador de algún arte marcial pusiera excusas en caso de perder, por no poder utilizar sus técnicas. Sólo había un arbitro que se encargaba de separar a los peleadores en caso de que haya un KO o una sumisión.</p>
                    <p>UFC 1, el primer evento de la compañía se celebraría el 12 de Noviembre de 1993 y sería un completo éxito. Con una curiosidad que a nivel de marketing sería muy llamativo, puesto que sería <Link href='/leyendas/royce-gracie'>Royce Gracie</Link> quien ganaría el primer campeonato, siendo el peleador más pequeño de todos los participantes. Cosa que además pondría a la familia Gracie, y a su arte marcial en el mapa.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/PO0WoldlGN8?si=apFEcRyIM6sOJF1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}