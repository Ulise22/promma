import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Mejores Peleadoras de UFC',
    description: '',
    openGraph: {
        title: 'Mejores Peleadoras de UFC',
        description: '',
        url: 'https://fullmma.org/articulos/mejores-peleadoras-ufc'
    }
}

export default function MejoresPeleadorasUFC () {
    return(
        <main>
            <ArticleHero title='Las Mejores Peleadoras de UFC de la Historia' subtitle='En este artículo repasaremos la lista de algunas de las mujeres que consideramos como las mejores de la historia de la UFC.' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Desde sus primeros días como un deporte de nicho hasta convertirse en un fenómeno global, las artes marciales mixtas (MMA) han sido testigo de un ascenso meteórico en popularidad. En este crecimiento, las mujeres han desempeñado un papel crucial, desafiando estereotipos y demostrando una destreza atlética excepcional en la jaula. La <Link href='/articulos/ufc'>UFC</Link> (Ultimate Fighting Championship), la organización líder en MMA, ha sido un escenario vibrante donde las mujeres han brillado con ferocidad y habilidad. Desde la inclusión de la división femenina en 2012, estas atletas han cautivado al público con su valentía, técnica y determinación inquebrantable.</p>
                    <p>En este artículo, exploraremos el legado de algunas de las más grandes peleadoras femeninas en la historia de la UFC. Desde pioneras que allanaron el camino hasta campeonas reinantes que han establecido estándares inigualables, cada una de estas mujeres ha dejado una marca indeleble en el deporte y ha inspirado a generaciones venideras.</p>
                    <h2>Ronda Rousey</h2>
                    <p>A la hora de hablar de las mejores peleadoras de la historia, sin duda hay que empezar a nombrarla a <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>, quien fue de las pioneras en este sentido y la responsable de convencer a Dana White para que incluyera las divisiones femeninas a la compañía. </p>
                    <p>Ella fue quien encabezó el primer combate femenino de la UFC el 23 de febrero de 2013, por UFC 157, en donde se enfrentaría a la estadounidense <b>Liz Carmouche</b> por el Campeonato de Peso Gallo de Mujeres de UFC, ganando aquel combate con una sumisión en el primer asalto. </p>
                    <p>Con un récord de 12-2 se retiró de las MMA, siendo aún bastante joven y dejando la sensación que un entrenador adecuado y la estrategia correcta podría haber dado más de lo que ya dió en el deporte. Fue campeona de la división de peso gallo de Strikeforce, defendiendo una vez el título, fue campeona de la división de peso gallo de la UFC, donde defendió 5 veces de manera exitosa su título. Todas sus 12 victorias fueron por finalización, de las cuales 11 fueron en el primer asalto.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/DlYPDyIxPsY?si=-v-m90gcvmnVEn44" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Amanda Nunes</h2>
                    <p><Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, siendo la única doble campeona de esta lista, que además lo fue de forma simultánea, quizás sea la mejor de todas las que nombremos en esta lista, dado que además venció a varias de las peleadoras que la integran. Venciendo a absolutas leyendas como <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>, a quien enfrentó en el UFC 207, derrotándola por TKO en menos de un minuto; o a <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>, a quien derrotó en 2 oportunidades, en ambos casos por decisión; y por último derrotó a <b>Cris Cyborg</b>, que es otra de las mujeres que integran este listado, venciéndola además, por KO en menos de un minuto.</p>
                    <p>Su última pelea fue contra la mexicana <b>Irene Aldana</b>, a quien venció por decisión unánime, luego de aquello se retiraría con un récord de 23-5, habiendo sido campeona de la división de Peso Gallo de Mujeres de UFC y de la División de de Peso Pluma de Mujeres de UFC, habiéndo tenido 12 combates por el campeonato entre ambas divisiones.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/CEA7fasR4pg?si=oTqthQb8MGX5nagg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Valentina Shevchenko</h2>
                    <p><Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link> es la primer peleadora en activo de esta lista, por lo que puede seguir agrandando su legado. Hizo su debut en la compañía ek 19 de diciembre de 2015, contra la canadiense <b>Sarah Kaufman</b> a quien venció por decisión luego de 3 asaltos. Desde entonces ha tenido otros 15 combates, que le alcanzaron para convertirse en campeona de la división de Peso Mosca Femenino de la UFC, título que ha defendido en 7 ocasiones de forma exitosa.</p>
                    <p>Actualmente ya no es la campeona de su división, luego de que perdiera su título contra la mexicana <Link href='/alexa-grasso'>Alexa Grasso</Link>, que fue capaz de someterla en el tercer asalto de la pelea que tuvo lugar el 4 de marzo de 2023 en UFC 285. En su revancha que se dió unos meses después, luego de 5 asaltos terminó en empate por decisión de los jueces, por lo que la campeona continúa siendo Alexa Grasso.</p>
                    <p>Hoy en día continúa en activo, y a fecha de este artículo, mantiene un récord de 23-4-1, a la espera de ver que sucede con su futuro, y de ver como termina una muy probable tercera pelea con la actual campeona de su división Alexa Grasso.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/OQVrq0Tl6Zg?si=3sVNSIwl74rTJ49m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Cris Cyborg</h2>
                    <p>Otra peleadora activa que podría entrar en la discusión de la mejor peleadora de la historia de las MMA, y de la UFC en este caso, es Cris Cyborg, que llegó a ser campeona en hasta 4 compañías diferentes, siendo estas: <b>Strikeforce</b>, <b>Invicta</b>, <b>UFC</b> y <b>BELLATOR</b>.</p>
                    <p>En UFC debutó el 14 de mayo de septiembre de 2016 en UFC 198 contra la estadounidense <b>Leslie Smith</b>, a quie derrotó en el primer asalto por TKO. El 29 de julio de 2017 ganó el Campeonato de Peso Pluma de UFC contra <b>Tonya Evinger</b>, luego de noquear a su rival en el tercer asalto de la pelea. Defendió su título en 2 ocasiones de manera exitosa hasta que lo perdió contra la brasileña <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, quien fue capaz de vencerla por KO en el primer asalto.</p>
                    <p>Luego de pelear con la canadiense <b>Felicia Spencer</b>, a quien venció por decisión unánime, se fue de la compañía liderada por Dana White para competir por el Campeonato de Peso Pluma de Bellator, que le ganaría a <b>Julia Budd</b> por TKO en el cuarto asalto. Este título sería defendido en 4 ocasiones de forma exitosa.</p>
                    <p>Actualmente mantiene un récord de 26-2 (1). Siendo 20 de sus 26 victorias por nocaut, 1 por sumisión y 5 por decisión.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/QkLy3fUaGIE?si=8t-UyydKI__Sdttt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}