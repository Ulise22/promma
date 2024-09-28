import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/0-10/izzy-vs-pereira_hero.jpg'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Rivalidad Pereira vs Adesanya',
    description: '',
    openGraph: {
        title: 'Rivalidad Pereira vs Adesanya',
        description: '',
        url: 'https://fullmma.org/articulos/rivalidad-adesanya-y-pereira'
    }
}

export default function IzzyVsPereira () {
    return(
        <main>
            <ArticleHero title='La Rivalidad Entre Israel Adesanya y Alex Pereira' subtitle='¿De dónde viene la rivalidad entre Israel Adesanya y Alex Pereira? La historia y trasfondo de una de la mayores rivalidades modernas de las MMA, entre estos peleadores que se han enfrentado hasta en 4 ocasiones.' image={hero} date='2024-09-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> y <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> han peleado hasta en 4 ocasiones diferentes, 2 de esos combates fueron en Kickboxing, 2 fueron en MMA, y no debería de extrañar a nadie que estos peleadores se volvieran a enfrentar otra vez más.</p>
                    <h2>Isreal Adesanya vs Alex Pereira Kickboxing 1</h2>
                    <p>El primero de sus combates fue en kickboxing, que es el deporte que practicaban ambos peleadores, se dió el 2 de abril de 2016 en China. Dicha pelea se extendió hasta los 5 asaltos, y fue una pelea bastante pareja donde ambos fueron capaces de conectarse mutuamente. Los jueces dieron como ganador a Alex Pereira por decisión unánime, aunque Adesanya no estaba muy contento con la decisión, confesando años más tarde que él estaba seguro de que había ganado dicha pelea, puesto que había conectado más y había recibido menos.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/hcuM0kSse_g?si=pAmPEiprkLksEd2v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Isreal Adesanya vs Alex Pereira Kickboxing 2</h2>
                    <p>La segunda de sus peleas se dió un año después, el 4 de marzo de 2017, esta vez en Sao Paulo, Brasil. Aquella noche, Alex Pereira se llevó la pelea gracias a un increíble gancho de izquierda que terminó por noquear a Israel Adensanya. Esta sería la primera vez que Adesanya sería noqueado en toda su carrera, y dicha pelea tuvo tanto impacto, que terminó en el retiro del nigeriano que cambiaría de deporte para comenzar a competir en las MMA.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/rxokyCnRe78?si=qE1k0u2DkJnWRVa2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Israel Adesanya vs Alex Pereira UFC</h2>
                    <p>Israel Adesanya ya tenía un recorrido en las MMA, habiendo cosechado un récord de 9-0, necesitó sólo de 2 victorias más para poder firmar con la UFC y cometir en dicha compañía. El 6 de octubre de 2019, se enfrentaría al entonces campeón <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, a quien venció por KO en el segundo asalto, convirtiéndose en el campeón de Peso Medio de UFC, donde reinaría durante bastante tiempo, llegando a defender exitosamente hasta 5 veces de forma consecutiva. </p>
                    <p>Por su lado, Alex Pereira continuó peleando en kickboxing defendiendo su título como campeón de peso mediano de Glory, acumulando muchos peleas donde terminaría ganando la mayoría de ellas. Sin embargo, según cuenta la leyenda, cuando Israel Adesanya era campeón de UFC, comenzó a viralizarse el video donde Pereira lo noquea, Adesanya, al ser consultado por sus derrotas en una entrevista, dijo: &quot;Cuando yo esté en la cima y sea el mejor de todo el mundo, él va a estar en un bar y siempre dira &apos;yo le gané a este tipo&apos;, porque es lo único que tiene&quot;.</p>
                    <p>Estas palabras habría llegado a oídos de Pereira, y lo motivarían a moverse definitivamente a las MMA, en donde rápidamente se ganaría un contrato con la <Link href='/articulos/ufc'>UFC</Link>. Y, con tan sólo 3 victorias en la compañía, en las que venció al griego <b>Andreas Michailidis</b>, al brasileño <b>Bruno Silva</b> y al estadounidense <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, se programaría a Alex Pereira como contendiente al título que ostentaba Israel Adesanya en ese momento.</p>
                    <h2>Isreal Adesanya vs Alex Pereira 3</h2>
                    <p>Ambos peleadores se volverían a ver las caras el 12 de noviembre de 2022, en UFC 281. En lo que sería su tercer combate, y su primer pelea en MMA. En aquella noche, para sorpresa de muchos, Alex Pereira en el quinto asalto, sería capaz de noquear nuevamente a quien hasta el momento, parecía invencible en su división, convirtiéndose en el nuevo campeón de la división en UFC.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/tajmpQ9_b2I?si=Wa6uQn1RlFGGGHLX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2>Isreal Adesanya vs Alex Pereira 4</h2>
                    <p>Debido a que Israel Adesanya supo ser un campeón dominante en la división durante mucho tiempo, se le concedió una revancha inmediata, programada para 6 meses después, en UFC 287 el 8 de abril de 2023. Durante aquel combate, había podido apreciar a un buen Alex Pereira que fue capaz de conectar varias leg-kicks que en caso de alargarse el combate, hubieran afectado negativamente en Adesanya. Pero finalmente, cuando el nigeriano parecía acorralado, es capaz de lograr una gran combinación de golpes que terminan noqueando al entonces campeón brasileño. Recuperando de esta forma su cinturón, y logrando por fín ser capaz de derrotar a su &quot;coco&quot;, que hasta ese momento lo había derrotado en 3 ocasiones.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/IVXgOlEOF-Q?si=pTowuAXa7IFsvUZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Luego de la pelea, Adesanya aprovecharía para vengarse, imitando primero el clásico movimiento de Alex, que simula estar disparando un arco y flecha, y luego burlándose del movimiento que hizo el hijo de Alex Pereira en su momento (cuando el brasileño había noqueado al nigeriano), simulando caer noqueado al piso.</p>
                    <p>De esta manera su conflicto termina en un 3-1 a favor de Pereira, pero en un 1-1 en cuanto a MMA. Así que no debería de extrañar, y sería interesante ver, de hecho, una tercer pelea en UFC, para dar cierre a su rivalidad y para poder saber con más claridad, quién de los 2 es un mejor peleador.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}