import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/90-100/mackenzie_dern-divorcio.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Mackenzie Dern Divorcio',
    description: 'Descubre la historia detrás del divorcio de la campeona de UFC Mackenzie Dern, las acusaciones cruzadas de violencia y la manutencion que tiene que pagar Dern.',
    openGraph: {
        images: '',
        title: 'Mackenzie Dern Divorcio',
        description: 'Descubre la historia detrás del divorcio de la campeona de UFC Mackenzie Dern, las acusaciones cruzadas de violencia y la manutencion que tiene que pagar Dern.',
        url: 'https://fullmma.org/articulos/mackenzie-dern-divorcio',
    }
}

export default function MackenzieDernDivorcio () {
    return(
        <main>
        <ArticleHero title='El Turbulento Divorcio de Mackenzie Dern' subtitle='La historia detrás del divorcio de la campeona de UFC Mackenzie Dern, las acusaciones cruzadas de violencia y la manutencion que tiene que pagar Dern.' image={hero} date='2026-08-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La actual campeona de peso paja femenino de la UFC, <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link>, ha tenido que sufrir bastante para estar donde esta hoy, principalmente el divorcio de su expareja, el surfista brasileño <b>Wesley Santos</b>, contra quien tiene acusaciones de violencia y abuso cruzadas, y a quien debe pagarle una pensión mensual de $4,006 según fuentes como <a href='https://www.mmafighting.com/2023/5/24/23736727/mackenzie-dern-estranged-husbands-domestic-violence-allegations-revealed-in-court-docs' target='_blank' rel='noopener noreferrer'>MMA FIGHTING</a>. </p>
                    <p>En una entrevista para <b>The MMA Hour</b>, la campeona estadounidense de origen brasileño comentó un poco lo que le tocó vivir durante la separación con su expareja: </p>
                    <p><b>&quot;Siento que tuve que defenderme todo este tiempo por cosas de las que jamás pensé que me tendría que defender. Estuve en una situación en mi relación donde no podía defenderme, porque estaba siendo amenazada con que si hacía algo, tendría que hablar con la policía y podría perder a mi hija&quot;.</b></p>
                    <p><b>&quot;Así que me mantuve la relación porque creía en la familia, y creía que eso era lo que Dios quería y cosas por el estilo. Pero en algún momento cuando intentas e intentas, y las cosas no cambian todo se vuelve peor y peor. Así que, como estaba diciendo, no era capaz de defenderme... Llamaban a la policía a mi casa. Todo se salió de control, sufriendo todo eso frente a tu hija, no quieres que tu hija presencie eso.&quot;</b></p>
                    <p>Además, entre otras acusaciones, Dern denunció que Santos abuso física y emocionalmente de ella, dando un portazo contra su pierna en una ocasión y arrastrándola hacia la casa durante una pelea. Durante le juicio del divorico, ella ingresó una petición para obtener una orden de alejamiento, proporcionando videos de una ocasión en la que él habría &quot;lanzado su telefono, botellas de agua, almohadas y ropa de mientras me acosaba/intimidaba verbalmente&quot;.</p>
                    <YouTubeEmbed videoid='pT3v9rzaZYg' />
                    <p>Por su parte, Santos respondió a las declaraciones de la campeona americana en un comunicado preparado, donde afirmaba: <b>&quot;Estoy decepcionado de que Mackenzie haya hecho declaraciones públicas sobre nuestro divorcio, especialmente teniendo en cuenta que involucra la custodia de nuestra hermosa hija. Como estamos en medio de un proceso legal, no puedo comentar nada por el momento, excepto que todo lo que Mackenzie declara es falso y difamatorio&quot;. </b></p>
                    <p><b>&quot;Jamás ataqué físicamente a Mackenzie, ella es una peleadora de MMA. Nunca intentaría llevar las cosas al terreno físico con ella. No tengo oportunidad.&quot;</b></p>
                    <p>Pero las acusaciones de la campeona de peso paja no quedaban sólo ahí. También acusó a su ex pareja de abusar de sus 2 perros repetidamente al golpearlos, acusación que Santos niega rotundamente. Además, ella lo acusa de violencia económica al no negarle el acceso al dinero de un sponsor que ella había ganado y guardado en una cuenta bancaria en Brasil (país de su entonces marido), realizando compras con su tarjeta de crécido sin su autorización y falsificando la renovación del contrato de alquiler del apartamento que alguna vez compartieron. </p>
                    <p>Finalmente se solucionó todo en la corte, con un resultado que en general no estamos acostumbrados a ver. Con la corte declarando que pudo haber abuso y violencia por parte de ambas partes, lo que llevó a ordenar una tenencia compartida de su hija. Además de que obligaron a <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link> a pagarle la suma de $10.000 a su Santos por los costos judiciales, además de tener que pagarle una manetunención mensual de $4,006, al considerar que Dern es quien más dinero gana en la pareja. </p>
                    <p>A pesar de tener que pasar por todo esto, la peleadora estadounidense es una guerrera que supo transformar toda esa frustración, enojo e ira que le generó todo esto en sus peleas, usando estas emociones como combustible para competir y pelear mejor, acumulando grandes victorias consecutivas, llegando al punto de convertirse en campeona de la UFC el 25 de octubre de 2025 en la pelea coestelar del <Link href='/eventos/ufc321'>UFC 321</Link>, cuando venció por decisión unánime a la brasilela <b>Virna Jandiroba</b>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}