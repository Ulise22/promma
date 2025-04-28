import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/michael_bisping_ojo.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Michael Bisping Ojo',
    description: '',
    openGraph: {
        title: 'Michael Bisping Ojo',
        description: '',
        url: 'https://fullmma.org/articulos/michael-bisping-ojo'
    }
}

export default function MichaelBispingOjo () {
    return(
        <main>
            <ArticleHero title='Michael Bisping: El Luchador Inglés de UFC Que Perdió un Ojo Peleando' subtitle='La historia de cómo el peleador de Reino Unido perdió su ojo durante una pelea de UFC, y cómo a pesar de eso logró ser campeón' image={hero} date='2024-06-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Michael Bisping</h2>
                    <p>El ex luchador nacido en Chipre y nacionalizado inglés, es una de las figuras más importantes en la historia de la <Link href='/articulos/ufc'>UFC</Link> y en la historia de las MMA de su país, siendo agregado al <b>UFC Hall Of Fame</b> (salón de la fama de la UFC) en el 2019, debido a su largo recorrido en el mundo de las peleas, y cómo a pesar de las dificultades fue capaz de convertirse en campeón en 2016.</p>
                    <p>Aparantemente está prohibido pelear profesionalmente si se es ciego de un ojo, por lo que Michael Bisping tuvo que mentir y hacer trampa bastante seguido con los médicos para que lo dejaran pelear. Lo que sorprende en su caso, es que de las 39 peleas profesionales que tuvo en su carrera, 11 las hizo luego de haber perdido la visión en uno de sus ojos, incluída la victoria que le daría el título de la división de Peso Mediano de la UFC.</p>
                    <h2>Michael Bisping Récord</h2>
                    <p>Michael Bisping ha peleado un total de 39 combates a lo largo de su carrera, acumulando un récord de 30-9. Siendo 18 de sus victorias por la vía del nocaut, 2 por sumisión y 10 por decisión. Mientras que de sus 9 derrotas, 3 fueron por nocaut, 2 por sumisión y 4 por decisión.</p>
                    <h2>Cómo Perdió Michael Bisping Su Ojo</h2>
                    <p>La verdad es que Bisping no perdió su ojo de manera inmediata, no es que se lo sacaron de un golpe y desde entonces no lo tiene. Lo que ocurrió fue que, en su combate contra el brasileño <b>Vitor Belfort</b>, que tuvo lugar el 19 de enero de 2013, el inglés recibiría una patada que le haría perder la pelea por TKO.</p>
                    <YouTubeEmbed videoid='K2U3Ib2nKPA' />
                    <p>No sólo eso, sino que desde aquel durísimo golpe Michael comenzaría a perder gradualmente la visión de su ojo derecho, al punto en que finalmente lo reemplazaría por uno de vidrio en el año 2018, 5 años después del golpe que lo jodería.</p>
                    <p>Sin embargo, Michael Bisping tiene alma y corazón de campeón, por lo que esto no lo detendría para cumplir su sueño de ser campeón de la UFC, así que comenzaría un proceso de mentir y engañar a los médicos para que no notaran la clara desventaja y peligro que implica pelear con un ojo menos. Por lo que haría trampa en sus examenes médicos y buscaría formas de salirse con la suya, todo esto sólo para poder seguir peleando y así escalar hasta eventualmente convertirse en campeón, como él mismo lo narra en su entrevista con <b>Joe Rogan</b>.</p>
                    <YouTubeEmbed videoid='OsPdhUQ0snE' />
                    <p>Al final de aquel fragmento, Bisping cuenta que en 2017 tomó la decisión de retirarse debido a la advertencia que le habían dado los médicos, de que si seguía peleando corría el riesgo de perder la visión en el otro ojo y podría quedar completamente ciego. Que para un Michael Bisping que ya había logrado lo que quería, y que ya tenía la vida resulta, era un riesgo bastante estúpido a tomar.</p>
                    <h2>Michael Bisping vs Anderson Silva</h2>
                    <p>Como el mismo peleador relata, pelear en estas circunstancias, es sumamente difícil, y uno de los handicaps que esto tiene se pudo ver en su pelea con el histórico brasileño <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, que sería la antesala a su pelea por el título, y contra quien sufriría un curioso episodio, que da nota de los problemas que le trae la falta de visión en su ojo derecho.</p>
                    <p>En un combate donde el inglés estaba dando lo mejor de sí, cerca de finalizar el tercer asalto de la pelea, a Michael Bisping se le cae el protector bucal, por el cual reclama al árbitro que detenga la pelea para ponerse y seguir peleando. Sin embargo existe una confusión, en mi opinión porque el árbitro no detuvo la pelea para recoger el protector, y mientras Michael seguía protestando apuntando a la dirección donde había caído, no pudo ver como Anderson Silva continuó como si nada, arrojándole un rodillazo que podría haberlo dejado KO.</p>
                    <p>El brasileño creyó que había ganado la pelea, cuando en realidad simplemente había terminado el asalto. El punto de esto es que, de estar al 100% de salud, Bisping habría visto como Anderson Silva estaba yendo a arrojar un rodillazo, y podría haberse defendido de este.</p>
                    <YouTubeEmbed videoid='swcgEARqmmU' />
                    <h2>Michael Bisping Campeón de UFC</h2>
                    <p>Lo que más llama la atención de la historia del luchador inglés, es como esta tremenda adversidad no lo desmotivó ni le sirvió de excusa para no conseguir lo que quería. Dado que sólo 3 meses después de recibir el golpe que le haría perder la visión en su ojo derecho, volvería a pelear contra el estadounidense <b>Alan Belcher</b>, a quien vencería por decisión unánime. </p>
                    <p>Luego de aquella victoria comenzaría su carrera hacia el título, donde es verdad que perdería 2 combates en 2014, contra <b>Tim Kennedy</b> por decisión, y contra <b>Luke Rockhold</b> por sumisión, lo cierto es que también lograría vencer al americano <b>Cung Le</b> por TKO en el cuarto asalto de la pelea. Además, entre 2015 y 2016 hilaría 3 victorias consecutivas, siendo la última contra el mencionado histórico de la división, <b>Anderson Silva</b>, que lo habilitaría a pelear por el campeonato, enfrentado a un viejo conocido, <b>Luke Rockhold</b>.</p>
                    <p>En esta ocasión se enfrentaría el 4 de junio de 2016 por el <b>UFC 199</b> en el Estado de California. La pelea terminaría de excelente forma para Bisping, que lograría conectar dejar KO a base de golpes a Luke, vengando su anterior derrota contra este, obteniendo el bono a la actuación de la noche, y consiguiendo la gloria, al convertirse en el campeón de Peso Medio de UFC.</p>
                    <YouTubeEmbed videoid='BajbXMrA9-s' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}