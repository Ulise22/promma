import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/movimientos_prohibidos_ufc.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Movimientos Prohibidos de UFC',
    description: 'La lista de los 28 golpes y movimientos que están prohibidos dentro de la UFC y que por lo tanto jamás verás realizarse, o al menos no deberías ver realizarse. ',
    openGraph: {
        title: 'Movimientos Prohibidos de UFC',
        description: 'La lista de los 28 golpes y movimientos que están prohibidos dentro de la UFC y que por lo tanto jamás verás realizarse, o al menos no deberías ver realizarse. ',
        url: 'https://fullmma.org/articulos/movimientos-prohibidos-de-la-ufc'
    }
}

export default function MovimientosProhibidosUFC () {
    return(
        <main>
            <ArticleHero title='Todos Los Movimientos que Están Prohibidos en la UFC: Lo Que Jamás Verás en un Combate' subtitle='La lista de los 28 movimientos y golpes ilegales de la UFC y que por lo tanto jamás verás realizarse, o al menos no deberías ver realizarse. ' image={hero} date='15/01/2025' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Pese a que durante años las MMA se han hecho la fama de ser un deporte super peligroso y dañino, casi que un deporte para bárbaros, en donde a diferencia de otros deportes de combate, todo está permitido. Lo cierto es que hoy en día este es un deporte que ha evolucionado desde sus primeros eventos en la década del 90, y que lejos de ser así, es quizás, a la larga, un deporte bastante más seguro que otros deportes de contacto.</p>
                    <p>En parte se debe a la cantidad de reglas y normativas aplicadas para prevenir tragedias y para resguardar la salud de los competidores. No es casualidad, por tanto, que no hayamos tenido jamás que hablar de una tragedia dentro del octágono en la UFC donde algún peleador haya perdido la vida. Por el contrario, estas situaciones se dan en deportes que uno a priori pensaría que son más seguros. Por eso es que hoy vamos a estar enumerando las 28 reglas, golpes y movimientos prohibidos en la UFC, con el objetivo de resguardar la salud los competidores. </p>
                    <h2>Lista de 28 Golpes y Movimientos Prohibidos en la UFC:</h2>
                    <ul>
                        <li>1. Cabezazos</li>
                        <li>2. Piquetes de ojos </li>
                        <li>3. Morder al oponente</li>
                        <li>4. Escupir al oponente</li>
                        <li>5. Anzuelo (Fish Hooking): técnica que consiste en meter los dedos en la boca del rival, nariz u otros orificios y tirar hacia a un lado (como si de pescar a un pez se tratase)</li>
                        <li>6. Tirones de pelo</li>
                        <li>7. Golpes en la nuca</li>
                        <li>8. Golpes en la parte trasera de la cabeza</li>
                        <li>9. Golpes en la columna vertebral</li>
                        <li>10.	Golpes en la garganta</li>
                        <li>11.	Golpes bajos</li>
                        <li>12.	Patear o pisotear la cabeza del oponente cuando está en el suelo</li>
                        <li>13.	Atacar articulaciones pequeñas (como dedos de las manos y pies)</li>
                        <li>14.	Lanzar al oponente fuera del octágono</li>
                        <li>15.	Arañazos y pellizcos</li>
                        <li>16.	Agarrar la clavícula o la tráquea</li>
                        <li>17.	Agarrar de los guantes</li>
                        <li>18.	Agarrar la indumentaria del rival</li>
                        <li>19.	Evitar el contacto intencionalmente</li>
                        <li>20.	Fingir lesiones</li>
                        <li>21.	Usar lenguaje abusivo</li>
                        <li>22.	Atacar al oponente durante el descanso</li>
                        <li>23.	Atacar al oponente cuando está siendo atendido por el referí</li>
                        <li>24.	Atacar al oponente luego de que haya sonado la campana anunciando el fin del asalto</li>
                        <li>25.	Está prohibido por parte de los miembros de las esquinas interferir durante la pelea </li>
                        <li>26.	No obedecer intencionalmente las instrucciones del referí</li>
                        <li>27.	Dar rodillazos en la cabeza a un oponente caído</li>
                        <li>28.	Aplicarse alguna sustancia extraña en el cabello o cuerpo para sacar ventaja</li>
                    </ul>
                    <h2>¿Se Puede Hacer Cosquillas en la UFC?</h2>
                    <p>Sí, se pueden hacer cosquillas a un peleador de UFC debido a que no es ilegal hacer cosquillas a tu oponente en un combate de UFC, ya que no existe ninguna parte del reglamento que prohíba específicamente este comportamiento.</p>
                    <p>Sin embargo, de más está decir que se vería muy poco profesional que un luchador se comportara de esta forma, y que por tanto esa es la razón por la que no haya habido ningún caso, en la UFC al menos, en el que un peleador haya recurrido a esta práctica. </p>
                    <p>También hay que mencionar, que debido a lo altamente entrenado que están todos los peleadores de UFC, es muy difícil pensar que sea una técnica realmente útil en un combate, debido a que lo más probable es que ni siquiera sientan nada en caso de que pasara.</p>
                    <YouTubeEmbed videoid='0DFp4_Obvjg' />
                    <p>Otra cosa a tener en cuenta, es que existe la posibilidad de que, aunque no está prohibido, recibas un llamado de atención por parte del árbitro, si este considera que estás teniendo una actitud antideportiva, o si confunde las cosquillas con arañazos y pellizcos. Como ejemplo de casos similares en el pasado, en la pelea estelar por el campeonato de peso gallo de la UFC en el <Link href='/covertura-ufc/ufc306'>UFC Noche</Link>, organizado en septiembre de 2024, en medio de la pelea entre el campeón <Link href='/peleadores/sean-omalley'>Sean O’Malley</Link>, y el retador <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, este último estando por encima de la espalda de su rival, comenzó a darle besos en la espalda. Actitud que no fue bien recibida por su rival, y que llevó al árbitro a llamarle la atención al georgiano y a separarlos de la posición en la que estaban. A pesar, insisto, de que no está prohibido, sucedió porque puede ser visto como antideportivo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}