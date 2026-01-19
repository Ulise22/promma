import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/pimblett-fuera-de-campamento.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Paddy Pimblett Fuera de Campamento',
    description: '¿Por qué Paddy Pimblet fuera del campamento se pone tan gordo? Hoy veremos como el corte peso y su estilo de vida explican la diferencia de peso entre antes y después de una pelea.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpimblett-fuera-de-campamento.456ec3b7.webp&w=828&q=65',
        title: 'Paddy Pimblett Fuera de Campamento',
        description: '¿Por qué Paddy Pimblet fuera del campamento se pone tan gordo? Hoy veremos como el corte peso y su estilo de vida explican la diferencia de peso entre antes y después de una pelea.',
        url: 'https://fullmma.org/articulos/paddy-pimblett-fuera-de-campamento'
    }
}

export default function PimblettOffCamp () {
    return(
        <main>
            <ArticleHero title='Paddy Pimblett Fuera de Campamento: ¿Por Qué Se Ve Tan Gordo?' subtitle='Porque Paddy Pimblett engorda tanto cuando no está peleando. El antes y después de Paddy The Baddy en una pelea.' image={hero} date='2026-01-19' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>No hay otra manera de decirlo, cuando <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> está fuera de campamento se pone gordo, sube mucho de peso cuando no está peleando y se nota en varias fotos que se hicieron virales en la comunidad de las MMA, pero ¿por qué pasa esto? Para responderlo tendremos que hablar del impacto que tiene <Link href='/articulos/que-es-el-corte-de-peso-en-ufc'>corte de peso</Link> en los peleadores y el estilo de vida que lleva Paddy &quot;The Baddy&quot;.</p>
                    <h2>Paddy Pimblett Weight-in vs Off Season</h2>
                    <p>El día del pesaje se lo ve muy definido, con los abdominales marcados, la cara más delgada, con un aspecto atlético y un físico envidiable. Para poder competir en peso ligero necesita dar entre 155lbs-156lbs (70.3-70.8 kg), lo cual hay que decir a su favor que siempre fue capaz de darlos, sin haber cancelado nunca una pelea por problemas con el corte peso (ver <Link href='/articulos/que-pasa-si-no-das-el-peso-en-ufc'>¿Qué pasa si no das el peso en UFC?</Link>). </p>
                    <p>Ahora cuando no se está preparando para ninguna pelea y no hay ningún rival programado en el calendario la cosa cambia completamente. Se han viralizado varias fotos en la que se lo ve mucho más gordo, con la cara redonda, una panza notable y sin definición muscular visible. Según lo que se ha comentado, <b>cuando Paddy está fuera de campamento pesa entre 190-205 lbs (entre 86 y 93 kilos). </b></p>
                    <YouTubeEmbed videoid='cAnq4X4fkow' />
                    <h2>¿Por qué Paddy Pimblett se ve así Fuera de Campamneto?</h2>
                    <p>La razón principal es por el corte radical de peso que decide hacer, teniendo que cortar alrededor de unas 50lbs en los casos más entremos. Quizás si en lugar de competir en peso ligero, peleara en peso wélter, no cortaría tanto peso y no llamaría tanto la atención como se ve cuando no está compitiendo. </p>
                    <p>Pero también hay que decir que a diferencia de otros peleadores, Paddy lleva un estilo de vida un tanto diferente al de la mayoría de luchadores de la UFC, que seguramente roce lo insano: durante el campamento se somete a una dieta estricta, con bajas calorías controlada por un nutricionista, haciendo mucho cardio y horas de entrenamiento intenso, haciendo una deshidratación final para llegar al peso justo el día del pesaje. Mientras que cuando está fuera de campamento, abandona completamente la dieta, consumiendo comida chatarra, milkshakes, todo en exceso, llegando según él mismo dijo, a consumir 8000 calorías por día en algunos periodos. Para tomar en perspectiva lo excesivo que es esto que come, el humano promedio come entre 1600 y 3000 calorías por día, la OMS sugiere comer entre 2000 y 2500 por día, pero Pimblett estaría cuadriplicando la cantidad recomendada.</p>
                    <p>En estas semanas posteriores a las peleas, el volver a su estilo de vida normal, gana peso rápido porque su cuerpo está &quot;rebotando&quot; después de las semanas de restricción, recuperando grasa, agua y glucógeno. </p>
                    <p>Aunque muchos puedan ver este estilo de vida como insalubre o puedan criticarle que demuestra poca disciplina con esta forma de hacer las cosas, hay que decir a su favor que nunca ha fallado un corte de peso y que nunca dejó pagando a la UFC en ningún evento, a diferencia de otros peleadores que pueden verse más definidos fuera de campamneto pero que sufren horrores dar el peso en una pelea. </p>
                    <h2>La Filosofía de Paddy Pimblett</h2>
                    <p>Lo cierto es que <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> ama la comida y no lo oculta, algo que suele repetir a menudo es que <b>&quot;prefiero ser gordo y feliz que musculoso y miserable&quot;</b>, y en base a esa filosfía vive. </p>
                    <p>Pese a esto, ha reconocido que es probable que tenga un problema con la comida y que haya desarrollado un desorden alimenticio por las MMA, al tener que hacer cortes de peso y pasar de dietas estrictas a comer todo lo que quiera de forma abrupta tan seguido. Sin ir más lejos, luego de su última pelea con <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, contó como subió 42 lbs en menos de 2 semanas, habiendo consumido 5 milkshakes inmediatamente después de la pelea. </p>
                    <YouTubeEmbed videoid='yf-h7BjD-WI' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}