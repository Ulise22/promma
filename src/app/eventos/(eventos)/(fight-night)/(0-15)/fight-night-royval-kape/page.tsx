import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/royval-kape.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Vegas 112: ¡Brandon Royval vs Manel Kape! ¡Kevin Vallejos vs Giga Chikadze!',
    description: 'Último evento de UFC en 2025 con Brandon Royval vs Manel Kape como evento estelar',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froyval-kape.c8dc986c.webp&w=828&q=65',
        title: 'UFC Vegas 112: ¡Brandon Royval vs Manel Kape! ¡Kevin Vallejos vs Giga Chikadze!',
        description: 'Último evento de UFC en 2025 con Brandon Royval vs Manel Kape como evento estelar',
        url: 'https://fullmma.org/eventos/fight-night-royval-kape'
    }
}

export default function RoyvalKape () {
    return(
        <main>
            <ArticleHero title='UFC Vegas 112: ¡Manel Kape Noquea a Brandon Royval en el Primer Asalto! ¡Kevin Vallejos Da un Nocaut Espectacular a Giga Chikadze en el Segundo Asalto!' subtitle='¡Cezary Oleksieczuk Derrota a Cesar Almeida por Decisión! ¡King Green Derrota a Lance Gibson Jr. por Decisión Dividida!' image={hero} date='2025-12-13' author={null} updatedDate='2025-12-14' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Último evento de UFC del año, y fin de la era ESPN en la UFC, con la última transmisión a través de esta cadena, previo a su paso a Paramount el próximo 2026. Para eso tenemos como evento estelar en el UFC APEX la pelea de peso mosca entre el #2 <b>Brandon Royval</b>, quien estará enfrentando al portugués <b>Manel Kape</b>, ranqueado #6 en la división. </p>
                    <p>Además tendremos una pelea muy especial para el público latino, dado que el argentino <b>Kevin Vallejos</b>, estará peleando en el combate coestelar ante el #15 de la división de peso pluma <b>Giga Chikadze</b>, en una oportunidad única para él para entrar a los rankings de la UFC, y comenzar el 2026 siendo el tercer argentino en estar ranqueado en la historia de la compañía de MMA más grande del mundo, luego de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link> y <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Guilherme Pat Derrota a Allen Frye Jr. por Decisión Unánime</h2>
                    <p>Espectacular victoria del brasileño <b>Guilherme Pat</b> en este duelo de invictos, para extender su récord en peso pesado a 7-0, luego de ganar los 3 asaltos del combate al conectar siempre más y mejores golpes a lo largo del combate. </p>
                    <h2>Luana Santos Domina y Derrota a Melissa Croden</h2>
                    <p>La brasileña <b>Luana Santos</b> que se encuentra ranqueada #15 en la división de peso gallo femenino, logra una increíble victoria ante la canadiense <b>Melissa Croden</b>, llevándose los 3 asaltos, con un completo dominio especialmente en el tercer, cuando fue capaz de derribar a su rival y ponerla en una posición donde no podía moverse ni escapar, castigándola con golpes durante 3 minutos hasta que finalizó el asalto, llevándose la victoria por decisión unánime. </p>
                    <h2>Steven Asplund Noquea a Sean Sharaf en el Segundo Asalto</h2>
                    <p>Espectacular pelea la que acabamos de presenciar con estos 2 pesos pesados que se dieron golpes por todos lados, siendo finalmente el estadounidense <b>Steven Asplund</b> el que se llevó la victoria en este sangriento combate, luego de haberle provocado un corte en el rostro a su rival y luego de estar castigándolo con golpes en la cara a los que <b>Sean Sharaf</b> ya no podía responder ni defender, por lo que cerca del final del segundo asalto el árbitro paró el combate para darle la victoria por TKO a Steven Aspslund. </p>
                    <h2>Joanderson Brito Derrota a Isaac Thompson por Decisión Unánime</h2>
                    <p>El brasileño <b>Joanderson Brito</b> se lleva una gran victoria por unánime, luego de ser mejor que su rival en practicamente cada aspecto de la lucha, manteniendo un alto nivel de control tanto contra la reja como a ras de lona, puntuando y superando al australiano <b>Isaac Thompson</b> para hacerse con la victoria. </p>
                    <h2>Yaroslav Amosov Somete a Neil Magny en el Primer Asalto</h2>
                    <p>Brutal sumisión del luchador ucraniano <b>Yaroslav Amosov</b> en su debut en la UFC ante el histórico peleador de la división de peso wélter <b>Neil Magny</b>, a quien fue capaz de conectarle un derribo bastante temprano en el primer asalto, para posteriormente avanzar hacia una llave que obligaría al estadounidense a tapear, otorgándole en su debut la victoria por sumisión en el primer asalto. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>King Green Derrota a Lance Gibson Jr. por Decisión Dividida</h2>
                    <p>En un combate que tuvo que extenderse hasta los 3 asaltos, quien terminó saliendo como ganador fue <b>King Green</b>, quien en un combate cerrado fue capaz de concectar los golpes más potentes sobre su rival, evitando recibir tanto él, logrando llevarse la victoria por sobre el canadiense <b>Lance Gibson Jr.</b> por decisión dividida.</p>
                    <h2>Kennedy Nzechukwu Empata con Marcus Buchecha</h2>
                    <p>En un combate donde claramente el mejor peleador fue el nigeriano <b>Kennedy Nzechukwu</b>, ganando tanto el primer como el tercer asalto, la pelea terminó en empate, debido a que el nigeriano dió un golpe bajo a su rival brasileño en el primer asalto, y luego un piquete de ojos minutos después, llevando al árbitro <b>Herb Dean</b> a quitarle un punto. Por lo que, aunque los jueces vieron la pelea 29-28 en favor del nigeriano, luego de la deducción de un punto, el resultado fue 28-28, dando un empate. </p>
                    <h2>Melquizael Costa Noquea a Morgan Charriere en el Primer Asalto</h2>
                    <p>¡Brutal KO de <b>Melquizael Costa</b> al francés <b>Morgan Charriere</b> en el primer asalto! Con una patada espectacularmente lanzada, el brasileño conectó a su rival para dejarlo KO inmediatamente, sin necesitar de un golpe extra para llevarse la victoria por KO en el primer asalto, en lo que es la mejor finalización hasta ahora, y que probablemente le valga para ganar el bono de $50k a la Actuación de la Noche.</p>
                    <h2>Cezary Oleksieczuk Derrota a Cesar Almeida por Decisión</h2>
                    <p>En la pelea con menos acción de la cartelera, quien finalmente se lleva la victoria es el polaco, que fue capaz de derribar siempre que lo intentó al brasileño <b>Cesar Almeida</b>, manteniendo un control en el suelo que le permitió sumar puntos para finalmente llevarse la victoria por decisión unánime. </p>
                    <h2>Kevin Vallejos Da un Nocaut Espectacular a Giga Chikadze en el Segundo Asalto</h2>
                    <p>Especutacular desempeño del argentino <b>Kevin Vallejos</b>, que en la pelea más complicada de su carrera hasta el momento actuó de manera sobresaliente, con un muy buen primer asalto en el que manejó la distancia y defendió muy bien las patadas al cuerpo de su rival para no salir tan lastimado, además siendo capaz de conectar varios golpes a su rival, y finalmente consiguiendo en el segundo ese nocaut espectacular, que vinó proveniente de un golpe giratorio que tumbó inmediatamente al georgiano, llevando al árbitro a parar la pelea para dar como ganador al argentino por TKO, metiéndose de lleno a los rankings de peso pluma de la UFC. </p>
                    <h2>Manel Kape Noquea a Brandon Royval en el Primer Asalto</h2>
                    <p>Vaya manera de terminar la última pelea del 2025 de la UFC, con el portugués <b>Manel Kape</b> conectando un golpe a la cabeza de su rival estadounidense <b>Brandon Royval</b>, que lo tumbaría de inmediato, llevando al árbitro a dar por terminada la pelea dando como ganador a Kape que se posiciona como uno de los principales candidatos a disputar el título de peso mosca de la UFC, que actualmente posee <b>Joshua Van</b>, que obtuvo luego de su victoria ante <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link> en el <Link href='/eventos/ufc323'>UFC 323</Link>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}