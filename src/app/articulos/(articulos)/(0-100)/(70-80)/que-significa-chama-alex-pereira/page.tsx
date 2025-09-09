import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/chama.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Qué Significa Chama Alex Pereira',
    description: 'El grito de guerra del Poatan Alex Pereira, ¡CHAMA!, ¿qué significa? y origen de la palabra. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchama.93c63eb3.webp&w=828&q=65',
        title: 'Qué Significa Chama Alex Pereira',
        description: 'El grito de guerra del Poatan Alex Pereira, ¡CHAMA!, ¿qué significa? y origen de la palabra. ',
        url: 'https://fullmma.org/articulos/que-significa-chama-alex-pereira'
    }
}

export default function SignificadoChama () {
    return(
        <main>
            <ArticleHero title='¿Qué Significa Chama de Alex Pereira?' subtitle='Significado y origen de la palabra "CHAMA" que tanto utiliza Alex Pereira' image={hero} date='2025-09-08' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El grito de <b>¡CHAMA!</b> utilizado frecuentemente por <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> se traduce literalmente del portugués como <b>&quot;llama&quot;</b> (la flama de fuego), aunque en el contexto en que lo usa tanto él como sus fans, significa algo así como <b>&quot;¡Vamos!&quot;</b>. </p>
                    <p>No quedan dudas de que Alex Pereira ya es una de los rostros visibles de la UFC, estatus que ha ido adquiriendo con su rendimiento dentro del octágono, convirtiéndose en doble campeón de las categorías de peso medio y peso semipesado, obteniendo victorias por KO espectaculares que generaron admiración a lo largo del mundo. Y ha sido capaz de conectar con el público de todas partes, pese a no hablar inglés y a no salirse de su lengua materna, el porgués. </p>
                    <p>Una de las razones por las que ha sucedido esto, es por la imagen que se generó al rededor del doble campeón brasileño. Con su mirada seria y sus pocas palabras. De lo poco que le escuchamos decir es su aclamada frase: &quot;Chama&quot;. </p>
                    <h2>Origen de Chama</h2>
                    <p>Es difícil rastrear el origen de esta palabra, y el primer momento en que fue usada por Alex Pereira. Lo que sabemos es que a inicios de 2024, comenzó a convertirse en un cántico que usaban sus fans para mostrarle cariño. Como ocurrió en una rueda de prensa previo al <b>UFC 297</b> (donde pelearon <Link href='/peleadores/sean-strickland'>Sean Strickalnd</Link> y <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> por el cinturón de peso medio), en Toronto, Canadá, cuando Alex fue recibido por un grupo de fans que comenzarón a cantar &quot;CHAMA&quot; una y otra vez como muestra de cariño para el campeón de peso semipesado. </p>
                    <p>El mismo &quot;Poatan&quot; se refirió a este fenómeno en una entrevista con <a href='https://es.agfight.com/alex-pereira-explica-el-origen-del-eslogan-chama-y-celebra-el-exito-con-los-fans/' target='_Blank'>Ag Fgiht</a>, comentando: <b>&quot;¿Chama?&quot;</b> Ni siquiera sé cómo surgió. Seguí hablando y no pasó nada específico. Seguí diciéndolo, ni siquiera recuerdo por qué. Para mí es muy bueno, porque es algo que no digo que yo haya creado, pero sí que empecé a hablar. Si la gente dice eso cuando me conoce, porque a todo le digo ‘Chama’, entonces veo que me siguen. Se esfuerzan por mostrarlo. Estoy muy feliz.</p>
                    <YouTubeEmbed videoid='9Sm7DQPTy4I' />
                    <h2>Significado de Chama</h2>
                    <p>Pese a lo utilizado del término, es complicado explicar qué es lo que significa, incluso cuando escuchamos hablar al mismo Pereira sobre el significado de la palabra, nos siguen quedando bastantes dudas. Sin ir más lejos, luego de su victoria ante <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> en el <b>UFC 303</b>, fue consultado sobre el significado de &quot;CHAMA&quot; por Joe Rogan, a lo que contestó que podía significar varias cosas, positivas o negativas. </p>
                    <p>La traducción literal del portugués es &quot;flama&quot; (la de fuego), pero en un sentido más informal puede variar su significado, girando alrededor de algo parecido a &quot;¡vamos!&quot;, que es como se suele utilizar en la mayoría de contextos. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}