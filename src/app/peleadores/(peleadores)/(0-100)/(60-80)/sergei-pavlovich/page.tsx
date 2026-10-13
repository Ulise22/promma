
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/60-80/sergei-pavlovich/sergei_pavlovich.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Sergei Pavlovich',
    description: '',
    openGraph: {
        images: '',
        title: 'Sergei Pavlovich',
        description: '',
        url: 'https://fullmma.org/peleadores/sergei-pavlovich'
    }
}

export default function SergeiPavlovich () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={21} l={3} d={0} categoria='Peso Pesado' nombre='Sergei Pavlovich' apodo={null} time='2026-10-13' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Sergei Pavlovich?</h2>
                    <p className={styles.peleador__article__text}>Sergei Pavlovich es un peleador de MMA ruso que compite en la división de peso pesado de la UFC. Siendo uno de los luchadores más letales de la división, con un poder de nocaut aterrador con el que acabó con la mayoría de sus rivales.</p>
                    <p className={styles.peleador__article__text}>Tuvo un inicio espectacular en la UFC, que lo llevó a pelear por el título interino, y aunque perdió e hilo 2 derrotas consecutivas, ha vuelto a la victoria y está siempre al acecho del cinturón de la división. </p>
                    <h2 className={styles.peleador__article__title}>Sergei Pavlovich Récord</h2>
                    <p className={styles.peleador__article__text}>Sergei Pavlovich posee un récord profesional en MMA de 21-3. Con 16 de sus victorias siendo por la vía del nocaut y 5 siendo por decisión de los jueces. Mientras que de sus 3 derrotas, 2 fueron por la vía del nocaut y sólo 1 por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Sergei Pavlovich Historia</h2>
                    <p className={styles.peleador__article__text}>Sergei Vladimirovich Pavlovich nació el 13 de mayo de 1992 en un pueblo ruso llamado Orlovsky, Oblast de Rostov. Era un niño pequeño y delgado aún para su edad, algo por lo que se sentía frustrado. Creció en un hogar bastante sano, con ambos padres presentes, un hermano mayor, ayudando siempre en el huerto de la familia antes de salir a jugar, y una familia que aunque le ponía reglas, no eran muy estrictas, el peor castigo que recibía era no poder salir a la calle. </p>
                    <p className={styles.peleador__article__text}>A los 5 años de edad comenzó a practicar lucha grecorromana, llevado por su hermano mayor que lo sacaba a la hora del recreo y lo llevaba a entrenar. Aunque fue un luchador sólido, a diferencia de otros peleadores que hemos cubierto, no se consolidó como una gran promesa en la lucha olímpica. </p>
                    <p className={styles.peleador__article__text}>Siempre había querido ser fuerte y estar musculoso, por lo que en noveno grado se propuso trabajar en su complexión delgada y su pequeño tamaño: comenzó a dormir más temprano, empezó a comer mucha avena, y se obligó a comer más de lo que necesitaba durante el día, aunque no tuviera hambre. Esto lo hizo crecer mucho en tamaño, sin volverse necesariamente gordo, dado que siempre practicó deporte, además de la lucha jugaba fútbol, baloncesto, hacía atletismo y jugaba handball (el cual era su deporte favorito).</p>
                    <YouTubeEmbed videoid='KGRwj9CZN5U' />
                    <p className={styles.peleador__article__text}>A los 18 años se unió al ejército ruso, ingresando en las tropas aerotransportadas (VDV), donde hizo saltos en paracaídas, se endureció y se volvió más disciplinado. &quot;Entré como un chico y salí como un hombre&quot;, suele decir. </p>
                    <p className={styles.peleador__article__text}>Luego del ejército, se dedicó de lleno a las artes marciales, ya siendo en ese momento un gran fanático de la UFC (aunque era difícil de ver en Rusia en aquel momento), y un gran admirador de <Link href='/leyendas/fedor-emilianenko'>Fedor Emelianenko</Link>. Hizo sambo, kung-fu (donde se convirtió en campeón en Rusia), y finalmente transicionó a las MMA en 2014. </p>
                    <p className={styles.peleador__article__text}>Haría su debut profesionale en las MMA el día 20 de diciembre de 2014, enfretando a su compatriota <b>Bruce Sessman</b>, a quien lograría noquear en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Al año siguiente tendría 5 combates: enfrentando primero a <b>Sergey Buinachev</b> el 21 de marzo de 2015, noqueándolo en tan sólo 20 segundos; el 30 de mayo enfrentaría al eslovaco <b>Ilja Skondric</b>, a quien noquearía en el primer asalto; el 31 de julio se enfrentaría a <b>Vladimir Daineko</b>, con quien acabaría por TKO en 24 segundos; el 25 de septiembre pelearía contra <b>Sultan Murtazaliev</b>, logrando otra victoria por nocaut en el primer asalto; y finalmente cerraría el año en diciembre enfrentando al alemán <b>Ruben Wolf</b>, a quien también lograría noquear en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Con un récord de 6-0, firmaría con la entonces conocida como <b>Fight Nights Global</b>, una de las promotoras más importantes de Rusia, en el año 2016. Ese año pelearía en 4 ocasiones: enfrentando primero a su compatriota <b>Magomedbag Agaev</b> en abril, siendo esta la primer pelea que iría a la decisión en su carrera, ganando de forma unánime; en junio pelearía contra el francés <b>Chaban Ka</b>, a quien lograría noquear en el primer asalto; en septiembre se enfrentaría a <b>Akhmedshaikh Gelegaev</b>, obteniendo otra victoria por nocaut en el primer asalto; y por último, en una semifinal por el título de la división se enfrentaría a su compatriota ruso <b>Alexey Kudin</b>, a quien vencería por decisión unánime, alcanzando un récord profesional de 10-0. </p>
                    <p className={styles.peleador__article__text}>El 2 de junio de 2017 pelearía en la final del campeonato inaugural de la compañía, enfrentando a <b>Mihail Mokhnatkin</b>, a quien de igual forma vencería por decisión unánime, convirtiéndose en el primer campeón de peso pesado en <b>FNG</b>. Meses después, el 19 de noviembre, defendería el cinturón ante <b>Kirill Sidelnikov</b>, a quien lograría noquear en el primer asalto, en la que sería su última pelea en la compañía. </p>
                    <h2 className={styles.peleador__article__title}>Sergei Pavlovich UFC</h2>
                    <p className={styles.peleador__article__text}>Habiendo alcanzado un récord profesional perfecto de 12-0, con un título y una defensa a sus espaldas, Sergei Pavlovich firmaría un contrato con la compañía de artes marciales mixtas más grande del mundo al año siguiente. Haciendo su debut en la UFC el día 24 de noviembre de 2018, cuando le dieron una pelea complicadísima para ser la primera, enfrentando al legendario luchador neerlandés <b>Alistair Oveerem</b>, contra quien lamentablemente sufriría su primer derrota profesional, siendo noqueado en el primer asalto. </p>
                    <YouTubeEmbed videoid='H78S6Jc681s' />
                    <p className={styles.peleador__article__text}>Sin embargo esta pelea no le hizo decaer, dado que era la primera en la UFC y le habían puesto a un killer de entrada. Volvería a la victoria al año siguiente: venciendo primero al brasileño <b>Marcelo Golm</b>, a quien dejaría KO en el primer asalto, ganando además el primer bono a la Actuación de la noche de su carrera, el día 20 de abril de 2019; el 26 de octubre volvería al octágono para enfrentarse al estadounidense <b>Maurice Greene</b>, a quien noquearía en el primer asalto nuevamente. </p>
                    <p className={styles.peleador__article__text}>Se lo programó para enfrentar al francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> en 2020, pero lamentablemente nuestro protagonista sufriría una lesión que lo dejaría fuera todo el año. </p>
                    <p className={styles.peleador__article__text}>Se lo promaría para pelear contra el inglés <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> en 2021, pero otra vez tuvo que bajarse del combate, esta vez por problemas con su visa. Esto explica los 2 años de inactividad que tuvo tanto en 2020 como en 2021. </p>
                    <p className={styles.peleador__article__text}>El 19 de marzo de 2022 volvería a pelear en la UFC, esta vez contra su compatriota <b>Shamil Abdurakhimov</b>, a quien noquearía en el primer asalto, ganando nuevamente el bono a la Actuación de la Noche. Pocos meses después volvería a pelear, el 30 de julio, contra el el histórico luchador estadounidense <b>Derrick Lewis</b>, obteniendo una nueva victoria nocaut en el primer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>El 3 de diciembre de 2022 cerraría el año con su tercer pelea, enfrentando al histórico luchador australiano <b>Tai Tuivasa</b>, a quien lograría noquear en el primer asalto, ganando el tercer bono de su carrera. El 22 de abril del año siguiente, 2023, enfrentaría al estadounidense <b>Curtis Blaydes</b>, obteniendo otra victoria por nocaut en el primer asalto, y ganando su cuarto bono por desempeño. </p>
                    <YouTubeEmbed videoid='zuvq-DUORFI' />
                    <p className={styles.peleador__article__text}>Con esta última victoria, Pavlovich rompería un récord, consiguiendo la racha de victoria por nocaut en el primer asalto más larga de la era moderna de la UFC, con 6. Por lo que, llevando esas 6 victorias consecutivas, siendo todas por nocaut, habiendo ganado ya 4 bonos por desempeño, y ante la inactividad por lesión del entonces campeón <Link href='/peleadores/jon-jones'>Jon Jones</Link>, a nuestro protagonista se le daría la oportunidad de pelear por el cinturón interino de la división ante el luchador inglés <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> en el <b>UFC 295</b>, el 11 de noviembre de 2023, donde lamentablemente caería KO en el primer asalto, sufriendo la segunda derrota de su carrera. </p>
                    <p className={styles.peleador__article__text}>Además, por si fuera poco ya sufrir una derrota en la que era su primer oportunidad titular, al año siguiente tendría una de las peleas más duras emocionalmente, al enfrentar a su amigo y compatriota <b>Alexander Volkov</b>, contra quien volvería a perder al cabo de 3 asaltos por decisión unánime. Siendo esta la tercer derrota de su carrera y la segunda consecutiva. </p>
                    <YouTubeEmbed videoid='63VGVo9l3X0' />
                    <p className={styles.peleador__article__text}>Sin embargo sería capaz de recuperarse de aquellas 2 derrotas y de gran manera, consiguiendo su primer victoria desde entonces el 1 de febrero de 2025 ante el luchador de Surinam <b>Jaizinho Rozenstruik</b>, a quien vencería por decisión unánime. El 23 de agosto de ese mismo año, se enfrentaría al dominicano <Link href='/peleadores/waldo-cortes-acosta'>Waldo Cortes Acosta</Link> en el <Link href='/eventos/fight-night-walker-mingyang'>UFC Fight Night: Walker vs Zhang</Link>, obteniendo una nueva victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>El 30 de mayo de 2026 se enfrentaría al brasileño <b>Tallison Teixeira</b>, contra quien conseguiría volver a brilla, obteniendo una victoria por KO en el segundo 38 de combate, volviendo a noquear en el primer asalto de la pelea. </p>
                    <YouTubeEmbed videoid='wCnjNAfndR8' />
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}