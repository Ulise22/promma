import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/ilia_peleador_2024.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Ilia Topuria Peleador del Año 2024',
    description: 'Luego de lo realizado por el campeón de peso pluma español Ilia Topuria en la noche de UFC 308, al ser el primer luchador en noquear a Max Holloway, en lo que era la primer defensa del título de Ilia, es momento de tirarle las flores que se merece, porque desde este espacio consideramos que es el Peleador del Año 2024 de UFC, por encima de quien creemos que le pelea la posición, Alex Pereira, y voy a explicar el porqué.',
    openGraph: {
        title: 'Ilia Topuria Peleador del Año 2024',
        description: 'Luego de lo realizado por el campeón de peso pluma español Ilia Topuria en la noche de UFC 308, al ser el primer luchador en noquear a Max Holloway, en lo que era la primer defensa del título de Ilia, es momento de tirarle las flores que se merece, porque desde este espacio consideramos que es el Peleador del Año 2024 de UFC, por encima de quien creemos que le pelea la posición, Alex Pereira, y voy a explicar el porqué.',
        url: 'https://fullmma.org/noticias/ilia-topuria-peleador-del-2024'
    }
}

export default function IliaPeleadorDel2024 () {
    return(
        <main>
            <ArticleHero title='Opinión: Ilia Topuria es el Peleador del Año 2024 en UFC' subtitle='Luego de lo realizado en el UFC 308, al Ilia Topuria noquear a Max Holloway, no quedan dudas de que Ilia Topuria es el peleador del año 2024.' image={hero} date='2024-10-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Luego de lo realizado por el campeón de peso pluma español <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> en la noche de <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, al ser el primer luchador en noquear a <Link href='/peleadores/max-holloway'>Max Holloway</Link>, en lo que era la primer defensa del título de Ilia, es momento de tirarle las flores que se merece, porque desde este espacio consideramos que es el Peleador del Año 2024 de UFC, por encima de quien creemos que le pelea la posición, <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, y voy a explicar el porqué. </p>
                    <YouTubeEmbed videoid='DuxLV14EQ4Q' />
                    <p>Lo que ha conseguido este año el peleador de origen georgiano es una auténtica locura, pero para entender la animalada que ha hecho este 2024 es importante poner las cosas en contexto. Dado que, cuando comenzó el año, Ilia poseía un récord invicto de 14-0 y estaba ranqueado en el puesto #5 de los rankings, luego de haber derrotado por decisión unánime a <b>Josh Emmett</b>, en lo que fue una pelea a 5 asaltos y en lo que fue la única pelea que tuvo en el año 2023. </p>
                    <p>Es decir, a los ojos de la mayor parte de fanáticos de UFC (especialmente para los de habla inglesa) era un retador más, que por tener un récord invicto y porque el mismo <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> aceptó pelear con el español, es que se había ganado el derecho a pelear por el título de peso pluma. La pelea por el título se pacta para febrero de este año en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, y Topuria no sólo promete que se va a convertir en el nuevo campeón, sino que también promete que va a ser por la vía del KO, ante quien era en ese momento el mejor striker de la división. La completa locura es que, tal y como lo prometió, lo cumplió al dejar en la lona al histórico campeón australiano en el segundo asalto. </p>
                    <YouTubeEmbed videoid='EQL0U5F6JKA' />
                    <p>Para dimensionar lo absurdo de lo logrado por Ilia en febrero,tenemos que hablar de Volkanovski, que pese a que venía de una derrota por KO ante <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en octubre de 2023, aquel resultado se explica especialmente porque el australiano tomó la pelea en corto aviso para reemplazar a <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, y prueba de eso es que en febrero de ese mismo 2023, ambos luchadores se habían enfrentado (con Alex teniendo tiempo de preparase bien con un campamento completo), y la pelea fue de lo más cerrada que se pudo haber visto, extendiéndose hasta los 5 asaltos, y con un Volk que caería derrotado por decisión pese al espectácular desempeño que demostró en su combate. </p>
                    <p>No solo eso, sino que además ese año consiguió defender su título ante el campeón interino <b>Yair Rodríguez</b> por TKO en el tercer asalto, en lo que fue una de las actuaciones más dominantes vistas en la división. Volkanovski cargaba un aura de invencible en las 145lbs que pocos luchadores tienen, acumulando para el momento en que enfrentó a Ilia, 5 defensas consecutivas de su título, estando invicto en la división de peso pluma de la UFC en 13 combates disputados en esta división. Por lo que el que Ilia Topuria no sólo haya conseguido derrotar al campeón que parecía invencible, sino que lo haya hecho de la forma en que lo hizo, es de un mérito difícil de cuantificar en palabras. </p>
                    <p>Pero lo sorprendente de este luchador no queda sólo ahí, dado que ayer tuvo otra de las actuaciones más sorprendentes y destacadas en la historia de la UFC, enfrentando al otro &quot;Coco&quot; de la división, como lo es <Link href='/peleadores/max-holloway'>Max Holloway</Link>, quien en sus últimas 3 peleas venía dando un desempeño aún mejor que Volkanovski. </p>
                    <p>Para tener en perspectiva quien es Max Holloway, es un luchador que en los últimos 10 años, sólo perdió sus peleas en peso pluma cuando se enfrentó a Volk, habiéndole ganado a todos sus otros rivales en la división de peso pluma, es decir, si no contamos las 3 peleas que tuvo y que perdió ante el campeón australiano, Max llevaba en los últimos 10 años una racha de 18 victorias consecutivas ante el resto de la división. No sólo eso, sino que venía de una racha de 3 victorias seguidas, siendo las 2 últimas por KO, ante <b>The Korean Zombie</b>, y ante <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, en aquella histórica victoria por el <b>BMF</b> en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, en una pelea en peso ligero ante un rival más grande que él.</p>
                    <YouTubeEmbed videoid='BTagozOQ7BU' />
                    <p>Por lo que Holloway venía aún en un mejor momento que Volk. Además, lo más importante, en 32 peleas profesionales, jamás había sido noqueado, a pesar de haber perdido 7 veces en su carrera, con rivales tan complicados y destacables como el mismo Volkanovski, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> o <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, que son rivales con buena pegada. También era el peleador que más golpes había recibido en la UFC, y pese a eso ninguno lo había tumbado. </p>
                    <p>Y aún teniendo en cuenta todo lo mencionado anteriormente, aparece este peleador español y dice que va a conseguir lo que nunca nadie consiguió hacer, va, y lo hace, se convierte en el primer peleador en noquear a Max Holloway. </p>
                    <h3>Comparación con el Año de Alex Pereira e Ilia Topuria</h3>
                    <p>Más allá de lo que pueda pasar en los 2 meses que quedan de este 2024, el debate sobre el peleador del año queda cerrado a estas 2 opciones a los ojos de la mayoría de los fans.</p>
                    <p>El brasileño también supo aprovechar este año al máximo, convirtiéndose en uno de los favoritos de los fans. Concretando 3 defensas de su título, desde que lo supo conseguir el año pasado ante <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, completando defensas ante <b>Jamahal Hill</b> en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, contra el mencionado <b>Jiri Prochazka</b> en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, y contra <Link href='/noticias/khalil-rountree'>Khalil Rountree</Link> en el <Link href='/covertura-ufc/ufc307'>UFC 307</Link>, consiguiendo en todas estas peleas, en las que practicamente no tuvo tiempo de preparse con mucho tiempo de anticipación, victorias por KOs espectaculares. </p>
                    <p>No me parece necesario demeritar lo que hizo Alex Pereira para saber apreciar la locura de Ilia, la actividad que tuvo el campeón brasileño es algo que esta fuera de este mundo, y es algo que terminó por salvarle varias carteleras a la UFC que de otra manera hubieran pasado desapercibidas. Pero lo de Ilia Topuria no tiene ningún sentido. A cualquier fan si el año pasado le afirmabas que este luchador georgiano iba no sólo a vencer, sino que a noquear a los 2 mejores peso plumas de la historia (junto a <Link href='/leyendas/jose-aldo'>Aldo</Link>), uno tras otro, no lo hubieran creído, porque justamente era inpensado, hasta que fue Ilia y lo hizo. </p>
                    <p>Por eso, no sólo por lo conseguido, sino por la forma en que lo consiguió, y ante a quien lo consiguió, nos parece que Ilia Topuria es sin dudas el peleador del año. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}