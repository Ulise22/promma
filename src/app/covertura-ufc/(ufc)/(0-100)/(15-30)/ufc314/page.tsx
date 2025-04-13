import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc314.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC 314: ¡Alexander Volkanovski vs Diego Lopes!',
    description: "Tremenda noche de MMA en Miami esta noche con el UFC 314, encabezada por Alexander Volkanovski y Diego Lopes por el cinturón de peso pluma. ",
    openGraph: {
        title: 'UFC 314: ¡Alexander Volkanovski vs Diego Lopes!',
        description: "Tremenda noche de MMA en Miami esta noche con el UFC 314, encabezada por Alexander Volkanovski y Diego Lopes por el cinturón de peso pluma. ",
        url: 'https://fullmma.org/covertura-ufc/ufc314'
    }
}

export default function UFC312 () {
    return(
        <main>
            <ArticleHero title="UFC 314: ¡Alexander Volkanovski vs Diego Lopes!" subtitle='¡Paddy Pimblett Enfrenta a Michael Chandler! ¡Jean Silva vs Bryce Mitchell!' image={hero} date='2025-04-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC que tenemos esta noche en Miami, con la pelea por el título de peso pluma estelarizando la cartelera entre el excampeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> y el brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>. </p>
                    <p>Además tendremos tremendas peleas acompañando el evento principal, con la coestelar siendo encabezada por el luchador inglés de peso ligero <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, y el veterano estadounidense <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>. Además, tendremos una tremenda pelea cargada de historia detrás y de beef entre el brasileño perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <b>Jean Silva</b>, y el estadounidense ranqueado #13 en la división de peso pluma <b>Bryce Mitchell</b>. Finalmente contamos con otro enfrentamiento interesante de peso pluma, entre el luchador mexicano <b>Yair Rodríguez</b>, quien le dará la bienvenida al debutante en UFC e histórico campeón de Bellator, <b>Patricio Pitbull</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Nora Cornolle Somete a Hailey Cowan en el Segundo Asalto</h2>
                    <p>La luchadora francesa ranqueada #13 en la división de peso gallo femenino, consigue una tremenda victoria por la vía de la sumisión en el segundo asalto, luego de ganarle la espalda a su rival y ser capaz de conectar un mataleón que le daría la victoria, iniciando esta cartelera de la mejor manera, al ya iniciar con una finalización este tremendo evento. </p>
                    <h2>Marco Tulio Noquea a Tresean Gore en el segundo asalto de la pelea</h2>
                    <p>El luchador brasileño Marco Tulio, luego de que fue una pelea espectacular, se lleva la victoria por la vía del nocaut en el segundo asalto, luego de haber dominado casi que por completo todo el combate. La pelea estuvo llena de emociones y nos dejaba espectantes, dado que pese a que el brasileño era el claro dominador de la pelea, con todo tipo de golpes que era capaz de conectar a su rival, Gore era capaz de conectar algún que otro golpe que claramente lastimaba al luchador de brasil. Sin embargo, todo acabaría en el segundo asalto, luego de que Tulio conectara una patada a la cabeza, seguida de una combinación de golpes que le terminaría por dar la victoria por TKO. </p>
                    <h2>Sumudaerji Derrota a Mitch Raposo Por Decisión Dividida</h2>
                    <p>En buen combate, bastante cerrado que podría haber ido para cualquier lado, quien finalmente se hizo con la victoria por la vía de la decisión dividida, es el peleador chino <b>Sumudaerji</b>, quien partía ligeramente como favorito para este combate, y que con esta victoria es capaz de ponerle un freno a su racha negativa de 3 derrotas consecutivas. </p>
                    <h2>Michal Oleksiejczuk Noquea a Sedriques Dumas en el Primer Asalto</h2>
                    <p>El polaco consigue una tremenda victoria por la vía del nocaut en el primer asalto, logrando cortar con una racha de 3 derrotas consecutivas, siendo la última ante el daguestaní <Link href='/peleadores/shara-magomedov'>Shara &quot;Bullet&quot; Magomedov</Link>, al conectar una gran cantidad de golpes hacia su rival desde arriba que llevó al árbitro a separarlos para darle la victoira a Michal Oleksiejczuk por TKO. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Julian Erosa Noquea a Darren Elkins en el Primer Asalto</h2>
                    <p>El luchador Julian Erosa logra una tremenda victoria por la vía del nocaut en el primer asalto, luego de dominar por completo el combate al conectar un montón de golpes que lastimaron y mucho a su rival, consiguió en el minuto minuto del asalto la victoria, luego de que el árbitro los separara, otorgándole la victoria por TKO. </p>
                    <h2>Chase Hooper Derrota a Jim Miller por Decisión Unánime</h2>
                    <p>El joven luchador estadounidense de 25 años, Chase Hooper, consigue una muy buena victoria ante un luchador veterano como <Link href='/articulos/jim-miller-historia'>Jim Miller</Link>, a quien supo dominar totalmente, especialmente en los últimos 2 asaltos, donde hizo alarde de su alto nivel de grappling y jiu-jitsu, que pusieron en aprietos a su rival en todo momento, amenzando con todo tipo de sumisiones a lo largo de la pelea. </p>
                    <h2>Virna Jandiroba Derrota a Yan Xiaonan</h2>
                    <p>La brasileña Virna Jandiroba consigue una importantísima victoria por decisión unánime ante la luchadora china <Link href='/mujeres/yan-xiaonan'>Yan Xiaonan</Link>, luego de dominar completamente los 3 asaltos de la pelea, haciendo uso de su lucha para imponerse por sobre su rival. De esta manera, habiendo vencido a la #1 de la división, la brasileña hace meritos para ganarse una oportunidad de pelear por el título de la división. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}