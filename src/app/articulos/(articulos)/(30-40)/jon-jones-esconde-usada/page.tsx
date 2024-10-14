import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/30-40/jones_se_esconde.jpg'

export const metadata: Metadata = {
    title: 'El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado',
    description: 'La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.',
    openGraph: {
        title: 'El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado',
        description: 'La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.',
        url: 'https://fullmma.org/articulos/jon-jones-esconde-usada'
    }
}

export default function JonJonesSeEscondeDeUsada () {
    return(
        <main>
            <ArticleHero title='El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado' subtitle='La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.' image={hero} date='2024-07-08' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Todos conocemos a <Link href='/peleadores/jon-jones'>Jon Jones</Link> por ser probablemente el mejor artista marcial mixto de la historia, sin embargo su vida y su carrera profesional no dejó de estar plagada de polémicas, una de ellas es respecto al uso de sustancias prohibidas que lo ayudan a mejorar el rendimiento, dado que daría positivo por un metabolito de turinabol luego de su segunda victoria ante <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>. Sin embargo, su consumo de sustancias data de bastante tiempo antes, y esto nos deja una de las anécdotas más curiosas de la historia de <Link href='/articulos/ufc'>UFC</Link>.</p>
                    <p>Fue <b>Chael Sonnen</b> el primero en contar esto, en el podcast de <b>Joe Rogan</b>. Allí explicó que una vez los trabajadores de <b>USADA</b> (la Agencia Antidopaje de Estado Unidos) entraron a su gimansio con la idea de testear a Jones. Alguno de sus entrenadores los ven entrar, por lo que al no saber que hacer, esconden al campeón de UFC debajo del ring donde entrenaban. Sus entrenadores le dicen a los miembros de USADA que no saben donde está Jon Jones, que ese día no había ido a entrenar, pero los miembros de la agencia antidopaje, en lugar de irse como creían que iban a hacer, deciden tomar asiento y esperar para ver si Jon Jones aparecía. Los detalles respecto al tiempo que estuvieron esperando no se saben del todo, pero se dice que estuvieron hasta 8 horas esperando para ver si aparecía el peleador.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/tCWEdkqZpcU?si=Ht9YXktT2KfmHt1S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La cosa llegó a más, cuando luego de unos días los miembros de USADA se enteraron de que Jones había estado escondido allí todo el tiempo, decidieron pedir una orden judicial para revisar lo que había debajo de ese octágono, ya que ellos creían que Jones al haber estado tantas horas allí, podría haber orinado y querían usar esa orina para hacer el testeo.</p>
                    <p>El clip de Chael Sonnen hablando sobre esto, data del año 2016, y durante mucho tiempo Jones no había hecho ningún comentario al respecto. Hasta que respondiendo a un tweet de <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> terminó confesando que esta historia es real (hasta cierto punto al menos). El tweet de Adesanya decía: <b>&quot;Dato curioso! Dormí debajo de un octágono en 2010 porque no quería gastar nafta yendo a mi casa, asi que me quedé en el gimnasio hasta el entrenamiento nocturno. Jonathan se quedó durmiendo debajo de un octagono para esconderse de USADA durante un test antidoping random. Estos son hechos. Todos ustedes deben haberlo olvidado.&quot;</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}data-conversation="none"><p lang="en" dir="ltr">Fun Facts!<br />I napped under the cage in 2010 cuz I didn’t wanna waste gas going home so I stayed at the gym till evening training.<br />jonathan stayed under the cage to hide from USADA during a random drug test. This is facts 📠📠📠<br />Y’all must have forgot.</p>&mdash; Israel Adesanya (@stylebender) <a href="https://twitter.com/stylebender/status/1314429799884943361?ref_src=twsrc%5Etfw">October 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>La respuesta de Jon Jones fue la siguiente: <b>&quot;Hermano explica tu pezon. Yo me estaba escondiendo de la Comisión Atlética de Nevada, no de USADA y eso fue hace años. Sólo me había fumado un porro y tenía miedo de fallar mi test por marihuana, esa es la verdad.&quot;</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Brother explain your titty 🥴 I was hiding from Nevada state Athletic Commission, not USADA and that was years ago.. I had just smoked a blunt and was afraid I would fail my test for weed 🤷🏾‍♂️ that’s the actual truth 😁Now everyone knows everyone</p>&mdash; BONY (@JonnyBones) <a href="https://twitter.com/JonnyBones/status/1314431706108108800?ref_src=twsrc%5Etfw">October 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>Entonces, según la versión de Jon, sí se escondió debajo de un ring para no ser testeado, pero no porque usara anabólicos, sino porque había fumado marihuana y temía que por eso fallara la prueba. Además afirma que quienes lo estaban por testear, no eran miembros de USADA, sino miembros de la Comisión Atlética de Nevada. Sin embargo, esto a personas como el mismo <b>Daniel Cormier</b> les suena raro, dado que de ser así, no hubiera sido tan grave el castigo en caso de dar positivo por marihuana (recordemos que luego de dar positivo en su pelea contra DC, la pelea quedó anulada y Jones fue despojado de su título, pero este ni de cerca hubiera sido el mismo caso), deja la pregunta en caso de ser cierto, ¿en serio valía la pena esconderse durante horas si sólo era ese el motivo por el que no quería ser testeado?</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}