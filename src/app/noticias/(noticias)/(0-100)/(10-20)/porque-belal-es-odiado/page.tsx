import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-100/10-20/belal_odiado.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: '¿Por qué Belal es Tan Odiado?',
    description: 'El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?',
    openGraph: {
        title: '¿Por qué Belal es Tan Odiado?',
        description: 'El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?',
        url: 'https://fullmma.org/noticias/porque-belal-es-odiado'
    }
}

export default function PorqueBelalEsOdiado () {
    return(
        <main>
            <ArticleHero title='¿Por qué Belal es Tan Odiado?' subtitle='El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?' image={hero} date='2024-07-06' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Belal Muhammad lleva una racha de 9 victorias consecutivas en la <Link href='/articulos/ufc'>UFC</Link> desde que le ganó a <b>Curtis Millender</b> en abril de 2019, siendo las últimas 5 victorias ante rivales ranqueados en el top10 de la división de peso wélter, sin embargo no es hasta julio de 2024 que consigue una pelea por el título ante <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, con peleadores como <Link href='/peleadores/colby-covington'>Colby Covington</Link> que con un récord más irregular pasándole por delante en la lista de contendientes del título, gran parte de esto se explica por el poco amor que le tienen los fans a este peleador, pero ¿a qué se debe esto?</p>
                    <h2>Belal Muhammad es Aburrido</h2>
                    <p>Una de las principales razones que se suelen mencionar sobre Belal es que es un peleador aburrido, tanto dentro del octágono como fuera. Para poner en perspectiva esto, de las 9 victorias consecutivas que mencioné que lleva, 7 fueron por decisión de los jueces. Pero esto no es sólo algo del último tiempo, en toda su carrera, de las 23 victorias que tiene, 17 fueron por decisión, lo que no habla de un peleador al que le cuesta mucho finalizar sus combates.</p>
                    <p>Tampoco pareciera que le cueste finalizar sus peleas, en muchas ocasiones da la sensación de que ni siquiera está buscando finalizarlas, siendo muy cuidadoso a la hora de lanzar golpes, como si no quisiera arriesgar demasiado, y como si sus golpes los estuviera lanzando simplemente mientras espera la ocasión perfecta para intentar un derribo. Lo a que a los ojos de muchos de los fans, lo convierte en un peleador aburrido.</p>
                    <p>Pero cuando se habla de que Belal es un tipo aburrido, se hace mención también a su actitud fuera del octágono, no porque haga cosas que desagraden al público, simplemente porque parece alguien tranquilo con una personalidad humilde. Sin embargo, es justamente esto lo que en el pasado le cerró oportunidades y lo que hace que hoy en día no sea alguien que despierte pasiones. En contraste con peleadores como el mencionado <Link href='/peleadores/colby-covington'>Colby Covington</Link>, quien también debe ser uno de los más odiados en la división, es al tener una personalidad tan polarizante lo que lo vuelve un luchador mediático, terminando por vender más que Belal. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/FxhUUWZTfWQ?si=xW08ObQqyII4aiVJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Basicamente, como peleador para sobresalir, podés darte el lujo de ser alguien aburrido dentro del octágono, o de no ser excelente como luchador, si al momento de tener un micrófono en frente sos capaz de entrentener al público. Esto es algo que luchadores como <b>Chael Sonnen</b> en su momento entendieron, quien pese a haberse ido de la UFC por tener un desempeño mediocre, pudo volver e incluso ganarse la posibilidad de pelear por el título 2 veces, ante <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>. También te podés dar el lujo de mantener un perfil más calmado a la hora de hablar, o incluso de casi no decir ni una palabra y aún así ser de los más amados por la gente, si a la hora de subirte al octágono das un espectáculo y sorprendes a los fanáticos con sumisiones excelentes o con nocauts, tal y como lo demuestra <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que siendo un campeón que ni siqueira sabe hablar inglés, se convirtió en uno de los favortios. El problema con Belal es que no cumple ninguno de los 2, ni es tan carismático, y verlo pelear no es tan divertido, simplemente es un excelente peleador, que pareciera confiar en que de ir a la decisión, los combates siempre van a terminar a su favor.</p>
                    <p>En nuestra opinión, no es que sean tanto el odio que recibe, si no que no es capaz de generar el cariño suficiente por parte de los fanáticos, como para contrarrestar la actitud negativa que toman algunos hacia él. Personas como <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> o <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> deben ser igual o más odiados que Belal, pero cumplen alguna de las 2 condiciones mencioandas (o las 2), y es que dentro del octágono son entretenidos de ver y cuentan con un carisma que genera el mismo nivel de amor que de odio.</p>
                    <h2>Belal Muhammad Apodo</h2> 
                    <p>Parecerá una tontería, pero una de las razones que por las que Belal recibe tanto odio es el apodo que eligió adoptar, siendo este &quot;Remember The Name&quot;, que en español significa &quot;Recuerda el nombre&quot;. Seguramente sea por la ironía de que a al menos a un gran porcentaje de personas no les genera nada, ni por su personalidad, ni por su estilo de pelea, siendo el suyo un nombre fácil de olvidar.</p>
                    <h2>Belal Muhammad vs Sean Brady</h2>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/8CSI43PVL-E?si=aKCF2zHyNg23qyM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Quizás la única excepción sobre el rendimiento deportivo de Belal, sea su pelea contra <b>Sean Brady</b> en el UFC 280. En aquella ocasión contó en su esquina con la presencia de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, quien seguramente influenció y mucho en la mentalidad que tenía Belal a la hora de pelear, dado que en este combate se lo vió más atrevido, sin miedo de ir para adelante a los golpes con su rival, logrando de esta manera una victoria por TKO en el segundo asalto (además del bono a la actuación de la noche), siendo este uno de los único 2 nocauts que consiguió en la UFC.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}