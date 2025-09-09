import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/jack-della-maddalena-nariz.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Jack Della Maddalena Nariz',
    description: 'Cómo Jack Della Maddalena se partió la nariz en su segunda pelea profesional, dejándole el tabique deformado desde entonces. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjack-della-maddalena-nariz.186989ff.webp&w=828&q=65',
        title: 'Jack Della Maddalena Nariz',
        description: 'Cómo Jack Della Maddalena se partió la nariz en su segunda pelea profesional, dejándole el tabique deformado desde entonces. ',
        url: 'https://fullmma.org/articulos/jack-della-maddalena-nariz'
    }
}

export default function DellaMaddalenaNariz () {
    return(
        <main>
            <ArticleHero title='¿Qué Le Pasó a Jack Della Maddalena en la Nariz?' subtitle='¿Qué le pasó en la nariz a Jack Della Maddalena? Como un rodillazo en la cabeza le deformó el tabique al campeón de la UFC.' image={hero} date='2025-09-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El campeón de peso wélter de la UFC <b>Jack Della Maddalena</b> sufrió un rodillazo en la cabeza que le partió la nariz, deformándole el tabique desde entonces. Ocurriendo esto en su segunda pelea profesional en mayo de 2016. </p>
                    <p>El actual campeón de peso wélter de la UFC <b>Jack Della Maddalena</b>, ha tenido un ascenso meteórico en las MMA, acumulando un montón de victorias que finalmente lo llevaron a disputar el título de las 170lbs ante <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, a quien fue capaz de ganarle por decisión unánime, cortándole una racha de 11 victorias consecutivas, convirtiéndose él en el nuevo campeón de la división en la UFC. </p>
                    <p>Actualmente posee un récord de 18-2, y seguramente sorprenda a varios saber que está en una racha de 18 victorias consecutivas, dado que sus únicas 2 derrotas, vinieron en sus primeros 2 combates como profesionales, y fue durante este periodo cuando sufrió un golpe que le deformaría la nariz. </p>
                    <p>Jack Della Maddalena debutaría en las MMA cayendo derrotado por nocaut ante <b>Aldin Bates</b> en el primer asalto en marzo de 2016. Más allá de los golpes, no sufriría mayor daño. Pero en su segunda pelea sería cuando cambiaría todo, entrando al octágono nuevamente 2 meses después para enfrentar a su compatriota <b>Darcy Vendy</b>, cayendo derrotado por sumisión en el primer asalto, y sufriendo en esa pelea un rodillazo que en la nariz que lo deformaría para siempre. </p>
                    <p>En una entrevista con <b>The MMA Hour</b>, contó: <b>&quot;Tengo la nariz bastante mala. Ha sido destrozada. Creo que fue en mi segunda pelea de MMA. Recibí un rodillazo en la nrazi y desde ese día está en la dirección equivocada.&quot;</b></p>
                    <YouTubeEmbed videoid='Wp2G-KoL9AQ' />
                    <p><b>&quot;Perdí mi primer pelea y luego fuí a otra y perdí 2 peleas. Mi coach no estaba en esa segunda pelea pero hablamos por teléfono. Ambos pensabamos que soy mejor peleador 0-2, así que hicimos la promesa de llegar a 10-2.&quot;</b></p>
                    <p>Della Maddalena cumpliría su promesa con creces, alcanzado un récord profesional de 18-2, no sólo llegando a la UFC, sino que también convirtiéndose en campeón de peso wélter en el camino. </p>
                    <p>Posteriormente en la entrevista, Jack explicaría que su nariz tiene arreglo, y que enventualmente puede volver a acomodarla en su lugar, pero que por el momento no le ve mucho sentido a hacerlo, debido a la naturaleza de su trabajo: </p>
                    <p><b>&quot;La voy a terminar arreglando algún día. Pero pensé ¿cuál es el punto de ir arreglarla cuando mi trabajo consiste en recibir golpes en ella? Pero algún día la voy a arreglar. &quot;</b> Sentenció el australiano.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}