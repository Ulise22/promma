import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/merab_dvalishvili-cardio.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Merab Dvalishvili Cardio',
    description: 'Descubre el secreto de Merab Dvalishvili para tener el cardio de un superhumano.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmerab_dvalishvili-cardio.944e4e5c.webp&w=828&q=65',
        title: 'Merab Dvalishvili Cardio',
        description: 'Descubre el secreto de Merab Dvalishvili para tener el cardio de un superhumano.',
        url: 'https://fullmma.org/articulos/merab-dvalishvili-cardio'
    }
}

export default function MerabCardio () {
    return(
        <main>
            <ArticleHero title='El Cardio de Merab Dvalishvili' subtitle='¿Cómo Conseguir el Cardio de Merab Dvalishvili? El Secreto de Merab Para Tener un Cardio Inhumano.' image={hero} date='2025-09-18' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El cardio de <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> es algo que no deja de sorprender, y que nos dejó con la boca abierta especialmente luego de su pelea y defensa del título ante <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, contra quien, a pesar de perder los 2 primeros asaltos, se veía a Merab con una sonrisa en la cara como si apenas estuviera calentando. Y efectivamente así fue, pese a que Umar había comenzado muy bien el combate, el luchador invicto pertenciente al &quot;clan <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>&quot;, se vió abrumado por el campeón georgiano, a quien no le pudo seguir el ritmo de ninguna manera, sin ser capaz de defender los golpes, derribos, patadas y combinaciones de todo tipo que le lanzaba al mismo tiempo. Pero... ¿Cómo es que Merab Dvalishvili es capaz de pelear a tan alta intensidad durante tanto tiempo?</p>
                    <p>Escuchando entrevistas del georgiano y viendo videos de personas que se preguntan lo mismo, creo que pude encontrar la respuesta a cómo es capaz Merab de tener un nivel de cardio tan inhumanamente bueno. </p>
                    <YouTubeEmbed videoid='VazxJSDXUs4' />
                    <h2>¿Cómo Entrena Merab Dvalishvili Cardio?</h2>
                    <p>Siendo las MMA un deporte tan abarcativo, necesitando del cardio para el striking, la lucha, el grappling, el jiu-jitsu, el clinch, y un sin fin de aspectos que hacen a una pelea de MMA, es imposible aislar el entrenamiento de cardio de forma que se aplique a cada uno de estos aspectos, y ahí es donde radica el secreto de Merab: ya que <b>Merab Dvalishvili rara vez entrena el cardio de manera aislada</b>, por el contrario, entendió que no se puede aislar el entrenamiento de cardio, por lo que en su lugar entrena MMA en conjunto un montón. </p>
                    <p>Merab tiene un montón de sesiones de sparring, en los que practica cada aspecto de una pelea real, con sesiones de lucha, jiu-jitsu y demás. No hay mejor manera de emular la fatiga que vas a acumular en una pelea, que teniendo una pelea. </p>
                    <p><b>&quot;Mi condicionamiento viene del entrenamiento real- sparring, lucha, Jiu-Jitsu, entrenamientos de MMA. No hago entrenamiento separado para la fuerza y el cardio... Durante los últimos 2 años estuve entrenando full-time. Hago cada práctica de Jiu-Jitsu, cada sesión de MMA, cada clase de Lucha. Si no tengo tiempo o sufro una lesión, me pongo a correr. Pero si estoy sano, prefiero hacer sparring y entrenar. &quot;</b></p>
                    <p>Fueron las palabras de Merab explicando como funciona su entrenamiento. Además agregó: </p>
                    <p><b>&quot;Prefiero practicar ahora - Jiu-Jitsu, sparring, MMA. Si estoy lesionado, por ejemplo, si me duelen las manos, voy a correr. Pero la mayoría de mi cardio viene de grappling intenso. Ni siquiera levanto muchas pesas - sólo entreno inteligente... la gente no le gusta hacer sparring conmigo porque voy muy duro. Pero esa es la forma en la que entreno - golpeo, derribo, golpeo, derribo. Así es como mejoro el timing. Si no haces eso en el gimnasio, ¿cómo vas a hacerlo en una pelea?&quot;</b></p>
                    <YouTubeEmbed videoid='WFzJiA71MDk' />
                    <p>Otro secreto que vale la pena destacar, y este viene por parte del entrenador del campeón de UFC, es que antes de cada sesión de sparring, Merab usa una escaladora vertical para entrar en calor y agitarse antes de cada entrenamiento, de esta forma, llega con el corazón acelerado y con un agotamiento previo antes de cada sesión. </p>
                    <p><b>&quot;Es el mejor equipamiento para el cardio, la VersaClimber (escaladora vertical). Él (Merab) estaba en esa cosa todo el tiempo. [...] Compré mi primera VersaClimber hace 30 años. solía llamarla &apos;El Arma Secreta&apos;. Ese es el énfasis que le ponía. No puedes ganarle. Es imbatible. &quot;</b></p>
                    <p>Fueron las palabras de <b>Ray Longo</b>, el entrenador de Merab Dvalshvili sobre la escaladora vertical. </p>
                    <h2>La Fuerza Mental de Merab Dvalishvili</h2>
                    <p>Por último, creo que es importante destacar que para mantener un nivel de entrenamiento tan intenso, que luego se ve reflejado en el octágono, incluso disfrutando de todo el estrés al que está sometiendo a su cuerpo y mente, es necesario contar con una mentalidad que pocas personas poseen. </p>
                    <p>La fuerza mental de Merab Dvalishvili es algo de otro mundo. Puedes verlo en combates donde las cosas se complican y pareciera que no le afectara, si intenta un derribo y falla, simplemente sigue peleando y vuelve a intentarlo otra vez. Es una persona que simplemente no se frustra durante un combate.</p>
                    <p>No es de extrañar que tenga una mentalidad así para una persona como él, habiendo nacido en Georgia, en la época en que fue disuelta la Unión Soviética, donde la totalidad de los países de este régimen cuando cayó vivían en la absoluta pobreza. Nuestro campeón de UFC lo tuvo muy difícil desde el principio, al igual que todos sus compatriotas, pero fue gracias a que no tenía las cosas fáciles que pudo desarrollar una mentalidad imbatible, y una capacidad para trabajar y esforzarse más que nadie. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}