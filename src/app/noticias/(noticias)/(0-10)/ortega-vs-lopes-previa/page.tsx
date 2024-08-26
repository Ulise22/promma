import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/0-10/ortega-vs-lopes-hero.jpg'

export default function OrtegaVsLopesPrevia () {
    return(
        <main>
            <ArticleHero title='Diego Lopes vs Brian Ortega: Una Pelea Que Puede Revolucionar la División' subtitle='El próximo sábado 29 de junio se enfrentarán en la pelea coestelar el brasileño Diego Lopes y el estadounidense Brian Ortega en el UFC 303 es una que puede llegar a verse incluso como una eliminatoria por el título.' image={hero} date='2024-06-24' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El sábado 29 de junio en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, luego de que se cayera la pelea de <b>Jamahal Hill</b>, en reemplazo para protagonizar la pelea coestelar se agregó el combate entre el brasileño nacionalizado mexicano <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> y el estadounidense <b>Brian Ortega</b>, pelea que podría revolucionar por completo la división de peso pluma.</p>
                    <p>En estos momentos el peleador brasileño se encuentra ranqueado en la posición #14 de la división, pero se encuentra ante la posibilidad de su vida al enfrentar a un Brian Ortega que se encuentra posicionado #3, luego de que en su regreso fuera capaz de derrotar al mexicano <b>Yair Rodríguez</b> en territorio hostil, en un <b>Fight Night</b> organizado en la Ciudad de México, donde a pesar de estar ante un público que en principio le jugaría en contra, fue capaz de someter a su rival en el tercer asalto, ganando además el bono a la actuación de la noche.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/HliBEA6xIcw?si=mOvShRiLEK4Z12In" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La razón por la que esta pelea puede ser de mucha importancia para la división, es porque cualquiera que gane se pone en una posición bastante favorable para pelear por el título. Tengamos en cuenta que lo más probable es que se programe una pelea para los próximos meses entre el actual campeón de peso pluma <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, y el actual campeón del <b>BMF</b>, <Link href='/peleadores/max-holloway'>Max Holloway</Link>. Independientemente quien gane, los nombres tanto de Ortega, como especialmente de Diego Lopes, van a sonar con fuerza como próximos retadores al título.</p>
                    <p>Cabe recordar que por ejemplo, Ilia Topuria, luego de proclamarse campeón ante <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, dijo estar interesado en pelear con luchadores jovenes que todavía no hayan peleado por el título, descripción en la que Diego Lopes encaja perfectamente. Además, el español también coqueteó con la idea de defender ante Brian Ortega en caso de que la pelea con Max no se termine dando, que en caso de ganar hace de esta posibilidad algo más cercano.</p>
                    <p>Quizás lo único que haga desvanecer la posibilidad de que de esta pelea salga un contendiente al título, o que al menos aplace esta posibilidad, es que justamente el mencionado Volkanovski, sea el que terminé enfrentando al ganandor de la pelea entre Topuria y Holloway, dado que al haber sido un campeón tan dominante durante tantos años, además de haberse mantenido como un hombre compañía presentándose a cada pelea que se le ofreció, parece justo que merezca al menos una chance de recuperar su título.</p>
                    <p>Diego Lopes, que recordemos que viene de una contundente victoria en el histórico <Link href='/covertura-ufc/ufc300-prelims'>UFC 300</Link> por TKO en el primer asalto ante un top15, hizo referencia a esta posibilidad en una entrevista con el periodista español <a href='https://www.youtube.com/@KOlmenero' target='_Blank'>KOlmenero</a>, de que luego de la probable pelea entre Topuria y Holloway, en caso de que Volkanovski sea el que sigue, no estaba dispuesto a esperar, dado que quiere ser un peleador activo. Pero resta ver como se desarrollan los acontecimientos en esta división, empezando por esta pelea que, recordemos, tendrá lugar el próximo sábado 29 en el UFC 303 para el <b>International Fight Week</b>.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/BbJA4irnZNU?si=xlzEU96ZBiWsyPzk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}