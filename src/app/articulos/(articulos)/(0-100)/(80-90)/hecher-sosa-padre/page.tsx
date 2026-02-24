import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/hecher_sosa-padre.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Hecher Sosa Padre',
    description: 'Como el peleador español Hecher Sosa sufrió la perdida de su padre 48hs antes de la pelea que le haría entrar a la UFC. ',
    openGraph: {
        images: '',
        title: 'Hecher Sosa Padre',
        description: 'Como el peleador español Hecher Sosa sufrió la perdida de su padre 48hs antes de la pelea que le haría entrar a la UFC. ',
        url: 'https://fullmma.org/articulos/hecher-sosa-padre'
    }
}

export default function HecherSosaPadre () {
    return(
        <main>
            <ArticleHero title='La Triste e Insipiradora Historia de Hecher Sosa y su Padre' subtitle='Conoce la historia del peleador español de UFC Hecher Sosa, que tuvo que lidiar con la perdida de su hermana y su padre días antes de pelear en el DWCS.' image={hero} date='2026-02-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tras perder a su hermana por cancer en 2024, apenas 2 días antes de pelear en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link> <b>Hecher Sosa</b> recibió la debastadora noticia de que su padre había fallecido a causa de la misma enfermedad en 2025. </p>
                    <p>La historia de Hecher Sosa es una de las más brutales, trágicas y al mismo tiempo inspiradoras que nos podemos encontrar entre los peleadores que logran llegar a la UFC. Que en el caso de <b>Hecher Sosa</b>, nos deja ver la mentalidad que hay detrás de un peleador de su talla, siendo capaz de ver las cosas de manera totalmente diferente a como lo veríamos los demás. </p>
                    <YouTubeEmbed videoid='6GUO5nIlpuc' />
                    <p>Luego de meses de tener que lidiar con esa terrible enfermedad, el padre de Hecher fallece. Apenas 48 horas antes de que ambos cumplieran su sueño pelear en el DWCS y firmar con la UFC. Justo en este momento el peleador español estaba por iniciar su corte de peso para competir en peso gallo (135lbs), y lejos de querer cancelar la pelea o posponerla, el canario decide seguir adelante pese al dolor, para honrar la memoria de su padre y alcanzar el sueño familiar. </p>
                    <p>Poco después de dar exitosamente el peso, Sosa deja un mensaje muy sentido en sus redes sociales, contando un poco de lo que vivió y dejando un muy bonito mensaje: </p>
                    <p><b>&quot;Sentí un dolor tan fuerte que no podía explicarlo, mi padre no iba a verme pelear... ya no pude dormir y me puse a pensar y llegué a la conclusión de que mi padre me dijo antes de irme: &apos;hijo no te preocupes, esto lo empezamos juntos y lo acabaremos juntos...&apos; y caí en que nos dejó en vida para que su alma volase hasta aquí hasta Las Vegas, para estar conmigo presente, para ser 2 dentro de la jaula.&quot;</b></p>
                    <p>Luego, además de agradecerle a su equipo y familia que siempre estuvieron para él, y a quienes calificó como su <b>&apos;Gasolina y fuente de inspiración&apos;</b>, dejó un último mensaje igual de inspirador: </p>
                    <p>&quot;Cumplimos con el peso como profesionales, a pesar de sentirme triste, a pesar de no dormir durante 30 horas, sin comer, sin beber, haciendo saunas, entrenos, bañeras... Sin duda ha sido el corte de peso más duro de mi vida. <b>Dios da sus peores batallas a sus mejores guerreros, y aquí estoy yo una vez más a su merced para hacer historia. </b>&quot;</p>
                    <p>Su pelea en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link> se daría el martes 16 de septiembre, enfrentando al brasileño <b>Macksom Lee</b>, a quien derrotaría de manera aplastante, ganando luego de 3 asaltos por decisión unánime en una victoria incontestable. </p>
                    <YouTubeEmbed videoid='fbsv37bcwus' />
                    <p>Esta victoria le ganaría un contrato con la UFC, entrando en el selecto grupo de menos de 10 luchadores españoles en llegar a la compañía, y siendo el quinto peleador activo en tener contrato, junto a <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, <b>Aleksandre Topuria</b>, <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link> y <b>Dani Barez</b>. </p>
                    <p><b>Dana White</b> no sólo le garantizó el contrato con la compañía de artes marciales mixtas más grande del mundo, sino que además, siendo consciente y conociendo la historia de Sosa, lo elogió por su resiliencia ante tanto sufrimiento, reconociendo estar feliz por su victoria, deseándole lo mejor en la UFC y regalándole una nota que el peleador se terminaría tatuando: </p>
                    <p><b>&quot;Sé la maldita razón por la que tu apellido signifique algo algún día&quot;.</b></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}