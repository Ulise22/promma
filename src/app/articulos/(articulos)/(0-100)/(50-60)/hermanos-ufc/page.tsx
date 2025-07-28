import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/hermanos_ufc.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Hermanos en UFC',
    description: 'La lista de todos los hermanos que compitieron juntos en la UFC, antes que Ilia y Aleksandre Topuria.',
    openGraph: {
        title: 'Hermanos en UFC',
        description: 'La lista de todos los hermanos que compitieron juntos en la UFC, antes que Ilia y Aleksandre Topuria.',
        url: 'https://fullmma.org/articulos/hermanos-ufc'
    }
}

export default function HermanosUFC () {
    return(
        <main>
            <ArticleHero title='Hermanos Que Pelearon en la UFC' subtitle='La lista de las mejores parejas de hermanos que pelearon en la UFC ' image={hero} date='2025-01-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Faltando menos de un mes para que podamos ver el debut de Aleksandre Topuria, hermano del actual campeón español de peso pluma Ilia Topuria, he decidido hacer un repaso sobre los otros hermanos que compartieron protagonismo en el octágono de la <Link href='/articulos/ufc'>UFC</Link>, peleando en simultáneo en la compañía. </p>
                    <h2>Nate y Nick Diaz</h2>
                    <p>Probablemente el grupo de hermanos más reconocido y querido por el público que jamás haya existido en la UFC y en las MMA en general. De hecho, su popularidad es tan grande, que lo más probable es que sea en ellos en quienes piensan la mayoría de personas cuando se habla de “hermanos en la UFC”. </p>
                    <p>Entre ambos luchadores suman 73 peleas, con 48 victorias en total. Pese a que ninguno de los 2 llegó a ser campeón, ambos llegaron a tener peleas titulares, y lograron victorias memorables ante excampeones como <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, <b>B.J. Penn</b> o <b>Robbie Lawler</b>. </p>
                    <YouTubeEmbed videoid='kdWUhP8BCFg' />
                    <p>Es más que conocida la historia de estos 2 hermanos que fueron criados especialmente por su madre, debido a la constante ausencia de su padre, quienes comenzaron a entrenar juntos artes marciales desde pequeños, bajo la tutela de uno de los integrantes de la familia Gracie, Cesar Gracie. Ambos luchadores pelearon desde lo más bajo hasta convertirse en las estrellas e íconos de las MMA que soy en día. </p>
                    <h2>Antonio Rodrigo y Antonio Rogério Nogueira</h2>
                    <p>Otro par de hermanos míticos, es el caso de los brasileños y gemelos Antonio Rodrigo y Antonio Rogério Nogueira, quienes compitieron en el mejor momento de <Link href='/articulos/que-paso-con-pride-fc'>PRIDE FC</Link>, y que se retiraron en la UFC.</p>
                    <p>Ambos decidieron pelear en divisiones diferentes para no tener que enfrentarse entre sí en ningún momento, debido a que coincidieron en la compañía en la que competían durante la mayor parte de sus carreras. De esta forma, Antonio Rodrigo, compitió en peso pesado durante toda su carrera, mientras que Antonio Rogério se mantuvo en la división de peso semipesado a lo largo de carrera.</p>
                    <p>De los 2, el que sin dudas más ha destacado es Antonio Rodrigo “El Minotauro” Nogueira, quien supo ser campeón de: Peso Pesado de WEF, el Campeonato de King of Kings 2000, Campeón de Peso Pesado de PRIDE FC en 2001, Campeón Interino de PRIDE FC en 2003, y Campeón Interino de Peso Pesado de la UFC en 2008. </p>
                    <p>Finalmente, El Minotauro Rodrigo Nogueira fue el primero de los hermanos en retirarse, haciéndolo el 1 de agosto de 2015 en el UFC 190, luego de perder por decisión unánime ante Stefan Struve. Por su lado, su hermano Rogério, se retiró el 26 de julio de 2020, luego de perder su combate por decisión dividida ante el brasileño Maurício Rua. </p>
                    <YouTubeEmbed videoid='8-qj4Pcqxjk' />
                    <h2>Jim y Dan Miller</h2>
                    <p>El caso de los hermanos Miller es uno curioso, principalmente porque la diferencia entre la cantidad de combates y el tiempo que llevaron peleando uno y otro es enorme.</p>
                    <p>Dan Miller es el mayor de los 2 hermanos, y pasó la mayor parte de su carrera peleando en peso medio, con un par de combates en peso wélter. Fue campeón de Cage Fury en peso medio en 2006, defendiendo una vez su cinturón. Poco después consiguió ser campeón de IFL en 2008, y ese mismo año firmaría y pelearía en UFC. Donde tendría un total de 13 combates, entre los que destacan los que tuvo con peleadores de la talla de <b>Chael Sonnen</b>, <b>Demian Maia</b> y <Link href='/articulos/michael-bisping-ojo'>Michael Bisping</Link>, además peleó con <Link href='/articulos/peleador-mas-sucio-ufc'>Rousimar Palhares</Link>, a quien le dedicamos un artículo por su estilo de pelea sucio y antideportivo. Terminaría por retirarse el 12 de julio de 2015, luego de perder por decisión unánime ante Trevor Smith, retirándose de esta manera con un récord de 14-8 (1). </p>
                    <p>Por su lado <Link href='/articulos/jim-miller-historia'>Jim Miller</Link> debe ser el más reconocido de los hermanos, puesto que, a fecha del 2025, 10 años después del retiro de su hermano, sigue activo en la UFC, y ya es el peleador con más combates en la historia de la compañía con 45, habiendo declarado recientemente que busca llegar a las 50. Además, está empatado con <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> en la mayor cantidad de finalizaciones en la historia de la división de peso ligero, ha ganado 14 bonos post pelea, lo que lo deja en el segundo lugar en la historia de la división, y ha ganado el bono a la pelea de la noche en 7 ocasiones, además de que su pelea con Joe Lauzon en 2012, fue elegida como la pelea del año. Por si fuera poco, por fuera de la UFC, logró ser Campeón de Peso Ligero de RF, Campeón de Peso Ligero de CFFC, Campeón de Peso Ligero en ROC, y Campeón de Peso Wélter de USKBA. Un auténtico animal. </p>
                    <h2>Valentina y Antonia Shevchenko </h2>
                    <p>El único par de hermanas femenino en haber competido en la UFC son las hermanas Shevchenko, <Link href='/mujeres/valentina-shevchenko'>Valentina</Link> y Antonia. Este par además hizo historia al haber sido la primera pareja de hermanas en compartir una cartelera en la compañía, al luchar juntas en el UFC 255 el día 21 de noviembre de 2020, donde Valentina defendió el cinturón de peso mosca femenino ante la brasileña Jennifer Maia, mientras que Antonia combatió con la brasileña Ariane Lipski, a quien capaz de derrotar por TKO en el segundo asalto, ganando el bono a La Actuación de la Noche. </p>
                    <p>Ambas luchadoras nacieron en Kirguistán, con Antonia siendo la mayor de las 2 por casi 4 años. Entrenaron juntas la mayor parte de sus carreras, y es conocida la buena relación que hay entre ellas, viéndolas mutuamente en la esquina de la otra cuando les toca pelear. </p>
                    <p>De las 2, la más conocida y la que ha tenido la mejor carrera es sin duda Valentina Shevchenko, por mucho, además, habiendo sido campeona durante muchos años de peso mosca femenino, con 7 defensas exitosas del título, y habiendo logrado recuperar su título luego de perderlo contra <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link>, al derrotarla en su tercera pelea el 14 de septiembre de 2024 en el <Link href='/covertura-ufc/ufc306'>UFC 306</Link>.  </p>
                    <YouTubeEmbed videoid='EHwWO0kWkg0' />
                    <h2>Gilbert y Herbert Burns</h2>
                    <p>Los brasileños Gilbert y Herbert Burns, son ejemplos parecidos al de Valentina y Antonia Shevchenko, o al de Jim y Dan Miller, donde por lejos uno de los 2 destacó e hizo mucho más en su carrera que el otro. </p>
                    <p>Siendo Gilbert Burns el que sin dudas es más conocido y recordado por la gente. Arribando a la UFC en julio de 2014, y consiguiendo desde entonces un récord de 15-7, siendo un histórico de la división de peso wélter de la compañía, llegando incluso a pelear por el título de 170lbs, al enfrentar a <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> el 13 de febrero de 2021, donde lamentablemente caería derrotado por TKO en el tercer asalto. </p>
                    <p>Por su parte, Herbert Burns, pese a haber comenzado su carrera profesional el mismo año que su hermano, tuvo bastantes menos combates, y necesitó de más tiempo para llegar a la UFC. Teniendo una significativa carrera, con 5 victorias en ONE Championship. El brasileño llegó a la compañía de artes marciales mixtas más grande del mundo en 2019, al participar del programa “Dana White’s Contender Series”, en el que enfrentó a Derrick Minner, consiguiendo una victoria por sumisión en el primer asalto, y ganando de esta forma un contrato con la compañía. Pese a que tuvo un buen inicio en la promotora, con sus 2 primeros combates siendo victorias por finalización en el primer asalto, Herbert acabaría con 4 derrotas consecutivas, siendo la última en agosto de 2024 en el <Link href='/covertura-ufc/ufc305'>UFC 305</Link>, cuando decidiría retirarse del deporte. </p>
                    <h2>Fedor y Aleksander Emelianenko</h2>
                    <p>Aunque estoy haciendo trampa, porque ninguno de estos hermanos peleó en la UFC, lo cierto es que su influencia y su importancia en el mundo de las MMA es tan grande, que incluso trasciende a varios de los hermanos mencionados anteriormente. </p>
                    <p>Ambos luchadores de nacionalidad rusa, cuentan con una enorme cantidad de peleas en sus espaldas. Con <Link href='/articulos/alexander-emelianenko'>Alexander</Link> teniendo un total de 35 combates profesionales y un récord de 28-7, mientras que <Link href='/leyendas/fedor-emilianenko'>Fedor</Link> cuenta con 48 peleas profesionales y un récord de 40-7 (1). Es decir, entre los 2 suman un total de 83 peleas totales y un récord combinado de 68-14. </p>
                    <p>No es sólo ese el motivo por el que los menciono de igual manera. A Fedor Emelianenko se lo puede considerar como uno de los mejores peleadores de MMA de la historia por extensa y exitosa trayectoria, siendo quizás el mejor peso pesado que vio este deporte. Pese a no haber peleado en la UFC, es leyenda viva de las artes marciales mixtas, especialmente por lo hecho en PRIDE FC, cuando esta compañía aún era la más importante del mundo, llegando a ser campeón allí, luego de vencer a uno de los hermanos que mencionamos anteriormente, Antonio Rodrigo Nogueira. </p>
                    <YouTubeEmbed videoid='PdtVI8J7nms' />
                    <p>Su hermano Alexander, por su parte, también peleó en esta compañía cuando estaba en su prime, obteniendo varias victorias meritorias en el que, en su momento, era el nivel más alto de MMA que existía. Además, supo ser campeón de pesos pesados en la promotora ProFC. Tremendo mérito por parte de ambos hermanos, que dentro del octágono supieron ser unas bestias totales. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}