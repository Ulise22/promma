import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/30-40/mejores_peleas_mujeres.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Mejores Peleas de Mujeres en UFC',
    description: 'El listado de las 5 mejores peleas femeninas en la historia de la UFC',
    openGraph: {
        title: 'Mejores Peleas de Mujeres en UFC',
        description: 'El listado de las 5 mejores peleas femeninas en la historia de la UFC',
        url: 'https://fullmma.org/articulos/mejores-peleas-mujeres-ufc',
    }
}

export default function MejoresPeleasMujeres () {
    return(
        <main>
            <ArticleHero title='Las Mejores Peleas de UFC de Mujeres de la Historia' subtitle='Los 5 mejores combates de mujeres de la historia de UFC.' image={hero} date='2024-06-29' author={null} updatedDate='2024-09-28' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Las Mejores Peleas de UFC de Mujeres</h2>
                    <p>Desde que se celebrara el primer combate femenino en la historia de la <Link href='/articulos/ufc'>UFC</Link> en febrero de 2013, entre la leyenda <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link> y la estadounidense <b>Liz Carmouche</b>, muchas fueron las peleas que nos trajeron las MMA femeninas, por eso hoy decidimos hacer este listado con las mejores peleas en la historia de la UFC entre mujeres.</p>
                    <h2>5. Cyborg vs Holly Holm</h2>
                    <p>La primer pelea que elegimos es la que se dió entre las 2 leyendas del deporte femenino <b>Cis Cyborg</b> y <Link href='/mujeres/holly-holm'>Holly Holm</Link> por el campeonato de peso pluma femenino. Este combate se dió cuando Cyborg parecía invencimble, llevando acumulada hasta ese momento una racha de 19 victorias consecutivas (siendo una invalidada posteriormente por dar positivo en el test antidoping), mientras que por su parte Holly Holm venía de una racha más irregular, habiendo ganado su último combate por KO en el tercer asalto, pero viniendo de una racha de 3 derrotas consecutivas anteriormente. </p>
                    <p>La pelea se extendió hasta los 5 asaltos, con intercambio de golpes por parte de ambas luchadoras, terminando con una victoria por decisión unánime para la brasileña que extendió su racha de victorias. </p>
                    <YouTubeEmbed videoid='l63eZayazmE' />
                    <h2>4. Miesha Tate vs Holly Holm</h2>
                    <p>Holly Holm vuelve a ser protagonista de este top, siendo en esta ocasión en su primer defensa del título, luego de aquella legendaria victoria por nocaut ante <b>Ronda Rousey</b>. </p>
                    <p>Esta pelea sería en el UFC 196 el día 5 de marzo de 2016, en lo que sería una pelea por el título de Peso Gallo de Mujeres de la UFC. Quienes se verían las caras serían la entonces campeona <b>Holly Holm</b>, y la retadora <b>Miesha Tate</b>. Durante el combate veríamos un buen intercambio de golpes de a ratos, pero sobre todo como Tate estuvo tratando de ganar la pelea en el suelo durante gran parte del enfrentamiento, estando cerca de finalizar por sumisión en el segundo asalto de la pelea. </p>
                    <p>Sin embargo, la pelea se extendería hasta los 5 asaltos, y sería en este último donde terminaría la pelea de la mejor manera, con una increíble finalización por parte de Tate que dejaría a su rival inconsciente, convirtiéndose esta en la primer derrota profesional de Holly Holm.</p>
                    <YouTubeEmbed videoid='SDyS99jwf3k' />
                    <h2>3. Claudia Gadelha vs Joanna Jedrzejczyk 2</h2>
                    <p>El 8 de julio de 2016 se celebró lo que debe ser una de las mejores peleas que se presenciaron en la división de peso paja femenino, en la que la histórica campeona polaca <b>Joanna Jedrzejczyk</b>, que para ese entonces mantenía un invicto de 12-0, defendería su título en lo que sería la final de <b>The Ultimate Fighter</b> ante una brasileña <b>Cláudia Gadelha</b>, quien era la contendiente número #1, que llegaba al día del combate con un récord de 13-1, siendo su única derrota ante la misma Joanna por decisión dividida.</p>
                    <p>Ninguna de las 2 peleadoras había sido noqueada hasta el momento, y durante el combate se notó porqué, dado que intercambiaron golpes como pocas veces se vé en un enfrentamiento femenino, resistiendo ambas las embestidas de la otra. La pelea comenzó pareja, de forma bastante cerrada, pero a medida pasaron los asaltos, se vió como Joanna comenzó a mejorar, culminándo la noche con una merecida victoria por decisión.</p>
                    <YouTubeEmbed videoid='cINJim4gWN4' />
                    <h2>2. Amanda Nunes vs Julianna Peña 2</h2>
                    <p>La revancha que tuvo lugar entre <Link href='/mujeres/julianna-pena'>Julianna Peña</Link> y <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link> el día 30 de julio de 2022 es sin dudas una de las mejores peleas vistas en la UFC femenina. Con una amanda que buscaba vengar su derrota, luego de que Peña le cortara una racha de 12 victorias consecutivas. Mientras que Peña buscaba completar su primera defensa del título, luego de sorpresivamente arrebatárselo a la brasileña con una sumisión en el segundo asalto de su primera pelea.</p>
                    <p>Durante los primeros asaltos ambas luchadoras intercambiaron golpes, consiguiendo Amanda conectarle 3 knockdowns a su rival a lo largo de la pelea, cosa que ninguna peleadora femenina había logrado en la historia de la UFC. Igual de sorprendente es que Julianna, luego de haber recibido esos 3 knockdowns, siguiera peleando y resistiera los 5 asaltos que duró el combate. </p>
                    <p>Siendo Amanda Nunes tan superior en el striking, Julianna buscó llevar la pelea al piso, donde intento varias sumisiones, estándo particularmente cerca cuando conectó un armbar del que sorprendentemente Nunes logró escapar. La pelea llegó a la decisión de los jueces, que vieron a la brasileña ganar la pelea.</p>
                    <YouTubeEmbed videoid='sq2l2Oop1VY' />
                    <h2>1. Zhang Weili vs Joanna Jedrzejczyk</h2>
                    <p>La que únanimemente es elegida la mejor pelea de mujeres de la historia de la UFC, es la que tuvo lugar el 7 de marzo de 2020 en el UFC 248 entre <Link href='/mujeres/zhang-weili'>Zhang Weili</Link> y la antes mencionada <b>Joanna Jedrzejczyk</b>, en lo que sería la primer defensa del título por parte de la luchadora china, luego de haberse coronado al noquear a la brasileña <b>Jéssica Andrade</b>. </p>
                    <p>El intercambio de golpes, lo cerrado de la pelea fue tal, que ni los propios jueces pudieron decidir de forma unánime a la vencedora del combate, terminando dando como ganadora a la asiática Zhang Weili por decisión dividida. La pelea luego sería elegida como la pelea de la noche, tiempo después como la pelea del año 2020, y hoy en día es considerada la mejor pelea femenina de MMA de la historia.</p>
                    <YouTubeEmbed videoid='vSMQ-_Nnk-A' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}