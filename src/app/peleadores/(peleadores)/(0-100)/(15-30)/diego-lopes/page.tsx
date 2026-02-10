import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/30-40/diego-lopes/diego_lopes.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Diego Lopes',
    description: "Diego Lopes es un peleador nacido en Brasil y de ascendencia mexicana que compite en la división de peso pluma en la UFC, desde que hiciera su debut en mayo de 2023 ante el ruso Movsar Evloev.",
    openGraph: {
        title: 'Diego Lopes',
        description: "Diego Lopes es un peleador nacido en Brasil y de ascendencia mexicana que compite en la división de peso pluma en la UFC, desde que hiciera su debut en mayo de 2023 ante el ruso Movsar Evloev.",
        url: 'https://fullmma.org/peleadores/diego-lopes'
    }
}

export default function DiegoLopes () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={27} l={8} d={0} nombre='Diego Lopes' apodo={null} categoria='Peso Pluma' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Diego Lopes UFC</h2>
                    <p className={styles.peleador__article__text}>Diego Lopes es un peleador nacido en Brasil y de ascendencia mexicana que compite en la división de peso pluma en la <Link href='/articulos/ufc'>UFC</Link>, desde que hiciera su debut en mayo de 2023 ante el ruso <b>Movsar Evloev</b>.</p>
                    <p className={styles.peleador__article__text}>Es de los mayores prospectos que se pueden encontrar en la división de peso pluma en la UFC en estos momentos, siendo un luchador muy completo que tanto en el striking como en la lucha sobresale por sobre los demás. Es probable que en el futuro terminemos viéndolo luchar por el título de la división, y quedará por ver de lo que es capaz el brasileño. </p>
                    <h2 className={styles.peleador__article__title}>Diego Lopes Récord</h2>
                    <p className={styles.peleador__article__text}>Diego Lopes mantiene un récord profesional de 27-7. Siendo 11 de sus victorias por la vía del nocaut, 12 por la vía de la sumisión y 4 por decisión. Mientras que de sus 8 derrotas, 2 fueron por la vía del nocaut y 6 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Diego Lopes Biografía</h2>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/DYx_l2WdZ6Q?si=T8JRHIWrnuOFsSjG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Diego Lopes da Silva nació el 20 de diciembre de 1994 en el Estado brasileño de Amazonas. Por influencia de su padre y de su hermano, a quien Diego considera sus héroes, comenzó a entrenar Jiu-Jitsu brasileño a la temprana edad de 5 años. </p>
                    <p className={styles.peleador__article__text}>El 8 de septiembre de 2012 a los 17 años haría su debut en las MMA, según él mismo cuenta, sin ningún tipo de experiencia en este deporte, sólo con sus conocimientos en BJJ y con lo que pudo ver mientras entrenaba junto a su hermano que sí era un peleador de MMA. Resulta ser que a su hermano se le había ofrecido una pelea, pero este no la aceptó, dado que tendría que enfrentar a un debutante en el deporte con muy poca experiencia, por esto le ofreció la pelea Diego, quien con sus hasta entonces pocos conocimientos en MMA, aceptó la pelea, logrando una victoria por KO en el segundo asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Diego tendría 9 combates en Brasil, acumulando un récord de 7-2, siendo todas sus victorias por finalizaciones, con 4 de estas por sumisión y 3 por nocaut. Luego de esto, se iría a vivir a México, donde comenzaría a trabajar como instructor de Jiu-Jitsu (trabajo que aún conserva) mientras continuaba con su carrera en las MMA.</p>
                    <p className={styles.peleador__article__text}>Una vez asentado en México, luego de varias destacadas victorias, conseguiría ganar 3 campeonatos diferentes. El primero de sus títulos sería el <b>Campeonato de Peso Pluma de Jasaji Fighting League</b>, que obtendría luego de someter en el primer asalto a <b>Issac Ruelas</b>; el segundo vendría en el año 2018, cuando luego de someter en el primer asalto al mexicano <b>Antonio Hernández</b> ganaría el <b>Campeonato de Peso Pluma del XFL</b>. Por último, el tercero de sus campeonatos sería en la promotora <b>Lux Fight League</b>, que obtendría luego de someter al mexicano <b>Marco Beltrán</b>.</p>
                    <p className={styles.peleador__article__text}>Luego de una defensa exitosa en la que conseguiría volver a someter a su rival, Lopes tendría la oportunidad de participar en el <b>Dana White&apos;s Contender Series</b>, donde se jugaría un posible contrato con al UFC, al enfrentar a su compatriota <b>Joanderson Brito</b>. Lamentablemente para nuestro protagonista, no conseguiría imponerse por sobre su rival, y terminaría por perder el combate. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/sdoWBhZzIHw?si=2TVf7VClfMX5kkgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Para colmo, luego tendría la oportunidad de pelear por el <b>Campeonato de Peso Pluma de Fury Fighting Championship</b> y perdería su segunda pelea consecutiva, aunque en esta ocasión por decisión dividida. </p>
                    <p className={styles.peleador__article__text}>Diego Lopes tendría 2 peleas más en 2022 ante el estadounidense <b>Kanneth Glenn</b> y ante el mexicano <b>Ángel Rodriguez</b>, ganando ambos combates por TKO. Ya con un récord de 21-5, siendo encima la mayoría de sus victorias por finalización, se ganaría un contrato con la UFC, y encima su primer pelea sería ante un luchador ranqueado como lo era <b>Movsar Evloev</b>, ya que tuvo que entrar en reemplazo de <b>Bryce Mithcell</b> con 5 días de anticipación. Su debut terminaría en una derrota por decisión unánime, pero de igual forma le serviría para ganar su primer bono en la compañía al ser esta elegida la pelea de la noche. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/9GAcy_VGxvM?si=qkXWx6aw4NBKmF-f" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Sin embargo, Diego Lopes ya ha demostrado tener una tremenda cálidad dentro del octágono, por lo que no es de extrañar que luego de esta primera derrota, en una pelea tomada con muy pocos días de anticipación y enfrentándose a un top #10 siendo él un debutante, no tardaría nada en recuperarse y empezar a destacar. Tres meses después de su última pelea, tomaría un combate ante el canadiense <b>Gavin Tucker</b>, a quien lograría derrotar por sumisión en el primer asalto, ganándose un bono a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>El 11 de noviembre de 2023, otros 3 meses después, se enfrentaría al estadounidense <b>Pat Sabatini</b> en el UFC 295, logrando en este combate una victoria por la vía del nocaut en apenas un minuto y medio de pelea, ganando nuevamente un bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/5eA7xNFwdMQ?si=APDtS0RGBJPlAdyX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Diego Lopes volvería a pelear en el <Link href='/covertura-ufc/ufc300-prelims'>UFC 300</Link> el 13 de abril de 2024, ante el nigeriano <b>Sodiq Yusuff</b>, contra quien lograría una victoria por TKO, nuevamente en minuto y medio de combate.</p>
                    <p className={styles.peleador__article__text}>Lopes estaba programado para pelear en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, evento encabezado por <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, ante el estadounidense <b>Brian Ortega</b>, sin embargo, su rival a pocas horas de que comience el combate no se encontró en condiciones para pelear. Esto llevo a que con muy pocas horas de anticipación, el peleador ranqueado <b>Dan Ige</b> llegara como reemplazo para pelear en peso pactado (165lbs). La pelea terminaría en una nueva victoria para el brasileño, en esta ocasión por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Luego de aquella victoria, esta vez si se reprogramaría su pelea contra <b>Brian Ortega</b> para el 14 de septiembre de 2024, en lo que sería el histórico <Link href='/covertura-ufc/ufc306'>UFC 306</Link>, organizado en <b>La Esfera</b> en Las Vegas, con motivo de celebración del Día de la Independencia de México. Aquella noche nuestro protagonista sería capaz de dominar completamente el combate, consiguiendo un knockdown en el primer asalto, y siendo capaz de controlar el resto de la pelea para llevarse una cómoda victoria por decisión unánime. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}