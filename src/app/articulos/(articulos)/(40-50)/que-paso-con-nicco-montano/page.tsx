import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/40-50/nicco_montano-hero.jpg'

export const metadata: Metadata = {
    title: 'Nicco Montaño',
    description: '',
    openGraph: {
        title: 'Nicco Montaño',
        description: '',
        url: 'https://fullmma.org/articulos/que-paso-con-nicco-montano'
    }
}

export default function ZabitMagomedsharipov () {
    return(
        <main>
            <ArticleHero title='¿Qué Pasó con Nico Montaño? La Primer Campeona de Peso Mosca de UFC que Fue Despojada de su Título' subtitle='La historia de la primer campeona de peso mosca en la UFC, y como esta fue maltratada por la compañía, siendo despojada de su título.' image={hero} date='2024-09-03' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La historia de la estadounidense Nicco Montaño es bastante curiosa, dado que supo ser campeona en su primer pelea en UFC, en ese entonces con un récord de 3-2, y fue despojada de su título sólo 10 meses después, sin llegar nunca a defender. Además de que luego de haber perdido su título, sólo tendría 1 pelea más 2 años después, hasta que finalmente fue expulsada de la compañía, pero ¿por qué sucedió todo esto?</p>
                    <p>Nicco Montaño nació el 16 de diciembre de 1988 en los Estados Unidos. Comenzó a entrenar boxeo desde temprana edad, y comenzaría a entrenar Jiu-Jitsu brasileño poco tiempo antes de comenzar su carrera en las MMA, donde debutaría el 20 de noviembre de 2015, ante <b>Stacey Sigala</b> en la división de peso gallo femenino y en la promotora <b>KOTC</b>, consiguiendo una victoria por TKO en el primer asalto. </p>
                    <p>En octubre de 2016 se convertiría en la campeona de la promotora, al derrotar por TKO a <b>Jamie Milanowski</b>, alcanzando un récord de 3-1. Luego de esta pelea, se iría a competir el cinturón de peso gallo en la promotora <b>HD MMA</b>, ante <b>Julia Avila</b>, contra quien lamentablemente caería derrotada por decisión unánime. </p>
                    <p>Después de perder aquella pelea contra Julia, Nicco participaría del reality televisivo de UFC <b>The Ultimate Fighter</b>, donde los finalistas de dicho programa terminarían por competir por el cinturón inaugural de peso mosca femenino. Pese a que Nicco no era ni de cerca la favorita, logró llegar a la final del torneo, coronándose como la primera campeona de la división el 1 de diciembre de 2017, luego de vencer por decisión unánime a su compatriota <b>Roxanne Modafferi</b>, ganando además el bono a la pelea de la noche.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/FnaOqDiUymQ?si=gtDVMtqIEQC0lspJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Lo inédito llegaría al poco tiempo de ganar su título, ya que una <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link> que venía destacando al obtener 2 meritorias victorias ante <Link href='/mujeres/julianna-pena'>Julianna Peña</Link> y ante <Link href='/mujeres/holly-holm'>Holly Holm</Link>, habiendo perdido en UFC sólo contra <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, estaba perfilada como la contendiente #1 al título, sería programada como primer rival ante quien defender el título en el <b>UFC 228</b>, como evento coestelar. Desafortunadamente, aunque llegaron a hacer el careo previo, esta pelea no podría darse, dado que Nicco Montaño vería a su salud ser afectada por el corte de peso, teniendo que ser trasladada al hospital, todo esto antes de que se hiciera el pesaje incluso. Luego de esto, mientras la peleadora estaba en el hospital, fue despojada de su título.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/-KAjJ07aoto?si=WH89qDlmPVEVjm8b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Aparantemente la UFC había estado tratando de poner a pelear a Nicco Montaño para mantener la división activa y que esta no se estancara. Nicco por su parte había estado sufriendo problemas de salud que no la dejaban estar al 100% para entrar al octágono. En este contexto, la UFC no tuvo mucha paciencia con la primer campeona de la división.</p>
                    <p>Shevchenko por su parte, en una entrevista con ESPN, afirmó que creía que su rival tenía planeado todo esto desde el principio, que estaba evitando tener esta pelea por todos los medios, y habló de que le parecía raro que se bajara por problemas de salud, dado que se la vió muy bien en la conferencia de prensa que se hizo días antes del pesaje. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/IE6jEoQ4r5I?si=Gmo42aD_elWwS0ng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Ver como se darrolló todo este caso en el 2024 se siente bastante extraño. Porque es fácil de entender que la compañía quiera que las divisiones estén activas y que no se pase mucho tiempo sin que el campeón defienda su título, dado que es lo mismo que queremos los fanáticos. Pero también es fácil notar que se tiene un nivel de paciencia diferente dependiendo del peleador, porque existen muchísimos casos (actuales incluso), en donde el campeón de cierta división no defiende el título, y aún cuando pasa más de un año, su cinturón no se le es arrebatado.</p>
                    <p>Como ejemplos están el caso de <Link href='/peleadores/jon-jones'>Jon Jones</Link> en los pesos pesados, quien desde que ganó el cinturón ante <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> en marzo de 2023 que no defiende su título, llevando más de 600 días sin defender. Este caso en partícular dejó tan estancada a la división, que incluso el campeón interino <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> terminó por defender su cinturón antes que Jones. Yendo a las divisiones femeninas, la china <Link href='/mujeres/zhang-weili'>Zhang Weili</Link> es una campeona muy inactiva, habiendo defendido su cinturón sólo 1 vez en 2023, y sólo 1 vez en 2024, sin ninguna novedad ni noticias que nos hagan pensar que volvera pelear en este último tramo del año. O, irónicamente, quien hoy en día es campeona de la división de peso mosca femenino, <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link>, no defiende su cinturón desde septiembre del año pasado, es decir hace 12 meses.</p>
                    <p>El caso es que luego de esto, la carrera de Nicco Montaño fue en picada, teniendo que subir de categoría para sufrir menos durante los cortes de peso, a la categoría de peso gallo. Allí, sólo consiguió un combate ante <b>Julianna Peña</b>, contra quien cayó derrotada por decisión unánime. Esta sería su última pelea profesional, dado que luego se la programarían varias peleas en varias ocasiones con diferentes rivales, pero siempre, por alguna razón u otra (principalmente por sufrir a la hora de bajar de peso) terminarían por cancelarse. Debido a esto, la UFC daría de baja su contrato en agosto de 2021, y Nicco no volvería a subirse a un octágono desde entonces, quedando con un récord de 4-3 en su carrera, pero siendo recordada en los libros de historia de las MMA, como la primer campeona de peso mosca de la UFC.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}