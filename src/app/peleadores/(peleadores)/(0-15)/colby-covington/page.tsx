import PeleadoresHero from '../../../components/PeleadoresHero'
import styles from '../../../components/peleador.module.css'
import Link from 'next/link'
import colby from '@/assets/peleadores__images/0-10/colby-covington/colby_covington.png'
import covington from '@/assets/peleadores__images/0-10/colby-covington/colby.jpg'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Colby Covington',
    description: 'Colby Covington es un peleador de MMA estadounidense que compite en la División de Peso Wélter de la UFC, donde compite desde que hiciera su debut en el UFC Fight Night: Bisping vs. Le contra el luchador chino Anying Wang el 24 de agosto de 2014.',
    openGraph: {
        title: 'Colby Covington',
        description: 'Colby Covington es un peleador de MMA estadounidense que compite en la División de Peso Wélter de la UFC, donde compite desde que hiciera su debut en el UFC Fight Night: Bisping vs. Le contra el luchador chino Anying Wang el 24 de agosto de 2014.',
        url: 'https://fullmma.org/peleadores/colby-covington'
    }
}

export default function Covington () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={colby} w={17} l={4} d={0} nombre='Colby Covington' apodo='CHAOS' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington UFC</h2>
                    <p className={styles.peleador__article__text}>Colby Covington es un peleador de MMA estadounidense que compite en la División de Peso Wélter de la <Link href='/articulos/ufc'>UFC</Link>, donde compite desde que hiciera su debut en el <b>UFC Fight Night: Bisping vs. Le</b> contra el luchador chino <b>Anying Wang</b> el 24 de agosto de 2014. </p>
                    <p className={styles.peleador__article__text}>Colby tiene una destacable carrera en la UFC, y aunque sólo llego a ser campeón de manera interina, cuando derrotó por decisión al brasileño <b>Rafael dos Anjos</b>, tuvo la oportunidad de retar al campeón en 3 oportunidades, la primera contra <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, con quien cayó derrotado por TKO luego de 4 asaltos, sin embargo se llevó el bono a la pelea de la noche. La segunda sería su revancha contra Usman, a quien enfrentó luego de vencer por TKO a <b>Tyron Woodley</b>, donde volvería a caer nuevamente, esta vez por decisión unánime. Su última oportunidad de pelear por el título, llegaría cuando luego de vencer por decisión al peleador <b>Jorge Masvidal</b>, podría retar al nuevo campeón <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, esta pelea se daría por el UFC 296 organizado en Las Vegas, donde nuevamente, Colby caería derrotado por decisión unánime contra el peleador jamaicano.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/hQeyiAEI4FY?si=SJ9hpAewOekwIuQb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Colby Covington Récord</h2>
                    <p className={styles.peleador__article__text}>Actualmente Colby Covington tiene un récord de 17-4. Siendo 4 de esas 17 victorias por la vía del nocaut, 4 por la vía de la sumisión y 9 por decisión. Mientras que de sus 4 derrotas 1 fue por nocaut, 1 por sumisión y 2 por decisión. Como dato curioso, de sus 4 derrotas, 3 llegaron en una pelea por el título, 2 contra el histórico campeón de la divisón <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> y 1 contra el actual campeón de la divisón <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>.</p>
                    <h2 className={styles.peleador__article__title}>Colby Covington Historia</h2>
                    <p className={styles.peleador__article__text}>Colby Ray Covington nació el 22 de febrero de 1988 en la ciudad de Clovis, ubicada en el Estado americano de California, es hijo de Brad y Noelle Covington, tiene una hermana llamada Candace. De pequeño, con apenas 11 años se mudó junto a su familia a la ciudad de Springfield, ubicada en el Estado de Oregon. Allí, Colby luchó en Thurston High School, ganando el campeonato estatal en su último año. En su temprana adultez, Covington asistiría al Iowa Central Community College, en donde ganaría título nacional de 165 libras de Wrestling, de manera curiosa en aquella época fue compañero de cuarto de quien en un futuro también se convertiría en peleador de UFC, <Link href='/peleadores/jon-jones'>Jon Jones</Link>.</p>
                    <p className={styles.peleador__article__text}>Por cuestiones de la vida, Colby se vio obligado a mudarse nuevamente a Oregon, donde se matriculó en la Oregon State University. También sería condecorado como un Baever, convirtiéndose en un All-American, dos veces campeón de Pac-10 y terminando quinto en el torneo de la NCAA de 2011.</p>
                    <p className={styles.peleador__article__text}>Después de un breve periodo peleando de manera amateur en las MMA en Oregón, Colby decidió mudarse a Florida para entrenar junto al equipo de American Top Team (ATT), quienes lo ayudaron a convertirse en profesional en 2012, haciendo su debut el 11 de febrero para enfrentar a su compatriota <b>Chris Esley</b>, a quien lograría derrotar por TKO en el primer asalto. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/FC_Q34gMJh4?si=3OXm8D19INODwcmD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Ese mismo 2012 volvería a pelear en 2 oportunidades, siendo la primera el 27 de abril para enfrentar a <b>DAvid Hayes</b>, a quien lograría derrotar por sumisión en el segundo asalto. La segunda pelea la tendría el 22 de junio ante el jamaiquino <b>Jason Jackson</b>, a quien lograría derrotar por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En el 2013 sólo pelearía en una ocasión, para enfrentar el día 12 de octubre a <b>Jose Caceres</b>, a quien luego de 3 asaltos lograría derrotar por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En el año 2014 tendría el que sería hasta el momento, el año más importante de su carrera profesional. Que comenzaría con una pelea ante el estadounidense <b>Jay Ellis</b> el día 16 de mayo, consiguiendo una victoria por finalización al ser capaz de someter a su rival en el primer asalto. Luego de esta pelea, ya con un récord de 5-0, le darían la oportunidad de empezar a competir en la compañía de artes marciales mixtas más grande del mundo haciendo su debut en la UFC el día 23 de agosto en China, consiguiendo vencer por TKO (al someter en base a golpes a su rival) en el primer asalto al luchador de este país <b>Anying Wang</b>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/y4qwPTOEEcU?si=lEz31i0IzoGe38t5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En la última pelea del año, volvería a ser &quot;visitante&quot;, al enfrentarse al luchador brasileño <b>Wagner Silva</b> el día 8 de noviembre, en el UFC organizado en Brasil, donde conseguiría hacerse con la victoria al someter en el tercer asalto de la pelea a su rival. </p>
                    <p className={styles.peleador__article__text}>En el 2015 tendría otras 2 peleas, sien la primera con fecha para el 23 de mayo en el UFC 187, enfrentando al estadounidense <b>Mike Pyle</b>, a quien lograría derrotar por decisión unánime, extendiendo de esta forma su récord a 8-0. Sin embargo en la última pelea del año, cuando se enfrentara al brasileño <b>Warlley Alves</b>, sufriría la primer derrota de su carrera profesional, al ser sometido con una guillotina en el primer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>En el 2016 se mostraría bastante activo, peleando primero el 18 de junio ante el canadiense <b>Jonathan Meunier</b>, en un eventod e UFC organizado en Canadá, consiguiendo una meritoria victoria por sumisión en el tercer asalto. El 20 de agosto en el UFC 202 volvería a subirse al octágono para enfrentar al estadounidense <b>Max Griffin</b>, a quien conseguiría derrotar por TKO en el tercer asalto. La última pelea del año sería el 17 de diciembre ante el luchador americano <b>Bryan Barberena</b>, en una pelea que curiosamente se haría sólo hasta los 2 asaltos, y que ganaría nuestro protagonista por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/1jwpYZ1qMEo?si=LWVbROLZswiUv8wa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Durante el 2017 tendría 2 combates muy importantes para su carrera, siendo el primero de ellos el que tendría el 17 de junio de, enfrentando al surcoreano <b>Dong Hyun Kim</b>, en un Singapur, consiguiendo derrotar al luchador asiático por decisión unánime. La segunda pelea sería ante el #3 de la división de peso wélter, el brasileño <b>Demian Maia</b>, en un evento de UFC organizado en Brasil, donde conseguiría nuevamente una victoria por decisión unánime, siendo esta la quinta victoria consecutiva en su carrera. Durante aquel combate, por razones esperables tuvo al público en su contra, pero Colby aprovecharía la entrevista post pelea para responder al publico brasilero de forma un tanto controvertida, aprovechando además para pedir una pelea con el entonces campeón <b>Tyron Woodley</b>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/479l-lMFDh4?si=sS8m935Xlt-sAxBQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>La pelea con Woodley no se le daría inmediatamente, sin embargo pelearía en el evento coestelar del UFC 225 el día 9 de junio de 2018, enfrentando al brasileño excampeón de peso ligero <b>Rafael Dos Anjos</b>, por el cinturón interino de la división. Aquella noche, en una pelea que se extendería hasta los 5 asaltos, finalmente podría llevarse la victoria por decisión unánime, convirtiéndose en el nuevo campeón interino de la división. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Xj1R2U266vg?si=utITYBssGRebKyFI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 3 agosto de 2019 volvería a pelear, aunque no por el cinturón indiscutido, ni para defender su cinturón interino. Sino que encabezaría un evento de UFC, enfrentando para ello a su compatriota <b>Robbie Lawler</b>, a quien luego de 5 asaltos vencería por decisión unánime. Esta victoria sin embargo, sería la que abriría la oportunidad de por fin ir a pelear por el título de la división, cosa que haría el 14 de diciembre de ese mismo año en el UFC 245, enfrentando al campeón nigeriano <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>. Aquella pelea llegaría al quinto asalto, terminando en una victoria para el africano por nocaut en el último asalto de la pelea, perdiendo nuestro protagonista la oportunidad de campeonar. Sin embargo, por el espectáculo ofrecido por ambos luchadores, Colby ganaría el primer bono de su carrera a la Pelea de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/WaNhcOML4nA?si=pHuffvDIJPAc3uDW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente combate encabezaría una cartelera de UFC en Las Vegas, esta vez sí enfrentando al ahora excampeón de peso wélter, <b>Tyron Woodley</b>, con quien tendría un combate que llegaría hasta el quinto y último asalto, donde Covington terminaría llevándose la victoria por TKO, luego de que una lesión en la costilla de su rival le impidiera seguir peleando. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/d8yuhDofH1I?si=W9_-hbiqF8xcQ4Hw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Aquella victoria ante el excampeón, le ganaría la chance de volver a competir por el cinturón de la compañía, enfrentando en una revancha al <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> el día 6 de noviembre de 2021 en el UFC 268. Aquella noche sin embargo, la historia no sería muy diferente, dado que nuestro protagonista volvería a caer derrotado ante el campeón, aunque esta vez por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/UGq6vcFiKnw?si=6lHZU1eLjPhif4a2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su siguiente pelea sería ante el BMF de la compañía, <Link href='/articulos/jorge-masvidal-historia'>Jorge Masvidal</Link>, a quie enfrentaría el 5 de marzo de 2022, encabezando el UFC 272. Esta pelea en partícular tenía su historia y trasfondo, dado que siendo más jovenes ambos luchadores eran amigos muy cercanos, que por cuestiones personales se terminaron distanciando, convirtiendo en lo que alguna vez fue una linda amistad, en una enemistad de lo más grande en la historia moderna de la UFC, llegando a exceder con incidentes posteriores a la pelea, lo deportivo. Nuestro protagonista lograría llevarse la pelea aquella noche por decisión unánime, ganando nuevamente el bono a la Pelea de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/QWswc8oJuEA?si=C-L4h1PCpUEueoEW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella victoria, por tercera vez en su carrera, Colby se ganaría la oportunidad de disputar el cinturón de la compañía, enfrentando para ello al nuevo campeón <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, con quien se vería cara a cara el 16 de noviembre de 2023, encabezando el UFC 296. Aquel combate terminaría de la misma forma que el que tuvo en su momento con Usman, cayendo derrotado por decisión unánime luego de finalizados los 5 asaltos. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}