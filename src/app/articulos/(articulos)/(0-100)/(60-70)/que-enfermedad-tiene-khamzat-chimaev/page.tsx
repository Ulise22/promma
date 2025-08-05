import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/khamzat_chimaev_enfermedad.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Que Enfermedad Tiene Khamzat Chimaev',
    description: 'El porque Khamzat Chimaev pelea tan poco y a menudo se baja de las peleas por problemas de salud. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkhamzat_chimaev_enfermedad.3fba5e23.webp&w=828&q=65',
        title: 'Que Enfermedad Tiene Khamzat Chimaev',
        description: 'El porque Khamzat Chimaev pelea tan poco y a menudo se baja de las peleas por problemas de salud. ',
        url: 'https://fullmma.org/articulos/que-enfermedad-tiene-khamzat-chimaev'
    }
}

export default function KhamzatChimaevEnfermedad () {
    return(
        <main>
            <ArticleHero title='¿Qué Enfermedad Tiene Khamzat Chimaev? Los Problemas de Salud de la Estrella de la UFC' subtitle='Todos los problemas de salud que sufrió Khamzat Chimaev que le impidieron pelear seguido y como se sobrepuso a ellos.' image={hero} date='2025-08-04' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> pareciera estar experimentando las consecuencias y secuelas del Covid-19, que padeció en diciembre de 2020, y que pareciera seguir afectando su estado de salud actualmente, con problemas respiratorios severos y un sistema inmunológico debilitado, que da la sensación de que encima se agrava cuando está en un campamento previo a una pelea, y debe hacer el corte de peso. </p>
                    <p>Lejos estamos ya de aquel primer Khamzat Chimaev que vivimos en el 2020, ni bien llegó a la UFC, que había sorprendido gratamente a todos los fanáticos con sus actuaciones destacadas dentro del octágono, con sumisiones y nocauts para llevarse siempre la victoria de manera contundente, pero sobre todo, luchando con una regularidad que no tenía ningún peleador en aquel momento, llegando a pelear hasta con 10 días de diferencia entre un combate y otro. Y la razón principal pareciera ser los problemas de salud que aqueja desde diciembre de ese mismo año, que se agravan cuando tiene que cortar peso para estar presente en el octágono, dejándonos con un Chimaev que ahora mismo está peleando al ritmo de una pelea por año. </p>
                    <YouTubeEmbed videoid='u30quzXHDys' />
                    <h2>Khamzat Chimaev y el Covid-19</h2>
                    <p>Podría decirse que los problemas de salud del checheno, que complicaron su presencia en el octágono de forma recurrente, comenzaron en diciembre de 2020, cuando contrajo el virus covid-19, que lo dejó en un estado bastante grave, con síntomas severos que incluían problemas respiratorios y tos con sangre. </p>
                    <p>Cuando se enfermó fue justo en el tiempo en que se estaba preparando para una pelea con <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, por lo que intentó forzar un poco, siguiendo entrenando, pero esto solo empeoró su situación, llevando a que la pelea se terminé posponiendo, y a que Khamzat agravara su condición pulmonar. </p>
                    <p>Fue hospitalizado varias veces por esto, en Las Vegas y Chechenia, hasta que finanlmente anunció en marzo de 2021 que retiraba, debido a la frustración que todos estos problemas de salud le estaban ocasionando. Aunque al poco tiempo fue convencido por el presidente de la UFC, Dana White, e incluso por el mismísimo presidente de Chechenia, Ramzad Kadyrov, de no retirarse y continuar peleando, con este último facilitándole tratamiento médico en Rusia. </p>
                    <h2>Problemas de Salud Recurrentes</h2>
                    <p>Aunque finalmente se curó del Corona, lo cierto es que desde entonces su salud se vió perjudicada por esta enfermedad, teniendo cada vez menos combates y mostrándo serios problemas para dar el peso que necesitaba para pelear. </p>
                    <p>Sin ir más lejos, el 10 de septiembre de 2022, se suponía que Chimaev iba a tener una pelea con <b>Nate Diaz</b> en el evento estelar del UFC 279, en peso wélter. Sin embargo, el día del pesaje, el checheno llegó pesando 7,5 libras más de lo pactado para pelear. La razón de esto, según explicó su entrenador, Andreas Michael, es que: <b>&quot;Estaba teniendo espasmos musculares, estaba temblando y vomitando... cuando se intentó poner de pie, se estaba desmayando. [...] Desde que tuvo el Corona, su cuerpo se vió mermado a la hora de dar hasta la última gota&quot;.</b> Dando a entender que desde que padeció esa enfermedad su cuerpo no fue el mismo. </p>
                    <YouTubeEmbed videoid='IuLPaHnRH9I' />
                    <p>Entre medio de sus combates el luchador Ruso confirmó que había pasado por varias cirugías, y que había padecido 7-8 fracturas, además de problemas de tiroides, con doctores diciéndole todo el tiempo que no sería capaz de volver a pelear. Además explicó que cuando tu sistema inmune es tan débil puedes contraer algunas infecciones. </p>
                    <p>En 2024 volvería a cancelar una pelea que tenía pactada con <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> en Arabia Saudita por problemas de salud que lo aquejaron nuevamente. Aunque está se volvería a programar para Abu Dhabi en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, en cuya previa Chimaev explicaría: </p>
                    <p><b>&quot;My sistema inmune empeoró... solo yo que me enfermé... Estuve en el hospital un par de días... la misma mierda volvió a pasar. El doctor me dijo &apos;Lo que necesitas es alejarte del gimnasio&apos;...</b>&quot;.</p>
                    <h2>¿Final Feliz Para Khamzat Chimaev?</h2>
                    <p>Pese a todo, pareciera que las cosas a partir de ahora irán a mejor para Chimaev. Dado que no sólo estaba privado de pelear tan constantemente por sus problemas de salud, sino que su visa se había vuelto un problema también, aunque eso ya se resolvió. </p>
                    <p>Los problemas de salud y toda su situación lo habían llevado a sufrir de depresión y de problemas relacionados a la salud mental, que el checheno afirma ya haber superado. En una entrevista con Adam Zubaryev, previo a su combate con Robert Whittaker en el UFC 308, compartió: </p>
                    <p><b>&quot;Puedes decir que mi depresión ha desaparecido. Tuve varios problemas antes, pero ya he resuelto varias cosas. Afortunadamente todo está bien ahora. Yo también soy humano; tengo mis propios problemas que necesitan resolverse.&quot; </b></p>
                    <p><b>&quot;Caí en la depresión y había mucas cosas pasándome. Pero ahora, resolví bastantes cosas gracias a Dios. Cambié a un nuevo equipo, y ahora todo es fantástico. Los doctores, los farmacéuticos, los nutricionistas, todos ellos. Nunca tuve un equipo tan bueno antes.&quot;</b></p>
                    <p><b>&quot;Cuando estás enfermo no puedes pensar como normalmente lo haces. Te vienen cosas raras a la mente. Un montón de mierda, sabes? Pero ahora estoy sano, feliz y con una mentalidad diferente.&quot;</b></p>
                    <p>Las cosas finalmente empiezan a salir de maravilla para Chimaev, quien finalmente se movió a peso medio, para evitar cortar tanto peso, donde terminó por pelear con <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, a quien sometió en el primer asalto, rompiéndole la dentadura incluso. Y ahora, este próximo 16 de agosto de 2025 en el <b>UFC 319</b>, tendrá la oportunidad de pelear por el título de la división ante el actual campeón <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, en donde no parece que vaya a tener un problema extradeportivo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}