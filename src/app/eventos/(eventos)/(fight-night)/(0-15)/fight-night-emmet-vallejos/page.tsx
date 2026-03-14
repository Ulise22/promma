import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/emmet_vallejos.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Kevin Vallejos vs Josh Emmet!',
    description: 'Noche de UFC en Las Vegas con el argentino Kevin Vallejos enfrentando al veterano estadounidense Josh Emmett. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femmet_vallejos.14fae18c.webp&w=828&q=65',
        title: 'UFC Fight Night: ¡Kevin Vallejos vs Josh Emmet!',
        description: 'Noche de UFC en Las Vegas con el argentino Kevin Vallejos enfrentando al veterano estadounidense Josh Emmett. ',
        url: 'https://fullmma.org/eventos/fight-night-moreno-kavanagh'
    }
}

export default function EmmetVallejos () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Kevin Vallejos vs Josh Emmett!' subtitle='¡Amanada Lemos vs Gillian Robertson! ¡El español Hecher Sosa Debuta con Victoria!' image={hero} date='2026-03-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Histórica noche de UFC para los fans de Argentina que hoy tendremos a nuestro representante de peso pluma <Link href='/peleadores/kevin-vallejos'>Kevin Vallejos</Link>, encabezando el evento de la noche, siendo el segundo argentino en ser la pelea principal, luego de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, para ello deberá enfrentar al veterano estadounidense <b>Josh Emmett</b>, que está #11 en la división. </p>
                    <p>Por si fuera poco para el público hispano, tendremos el debut del español excampeón de WOW <Link href='/articulos/hecher-sosa-padre'>Hecher Sosa</Link>, enfrentando a <b>Luan Lacerda</b>. La cartelera la abrirá la venezolana <b>Piera Rodriguez</b>, enfrentando a <b>Sam Hughes</b>. Y estarán los mexicanos <b>Montse Rendon</b> en la cartelera preliminar, y <b>José Miguel Delgado</b> en la cartelera estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>La Venezolana Piera Rodriguez Derrota a Sam Hughes por Decisión Unánime</h2>
                    <h2>Hecher Sosa Debuta Derrotando a Luan Lacerda por Decisión Unánime</h2>
                    <h2>Bia Mesquita Somete a Montse Rendon en el Primer Asalto</h2>
                    <p>Espectacular victoria de la brasileña, que conectando un mataleón a su rival mexicana <b>Montse Rendon</b> es capaz de llevarse la victoria por sumisión en el primer asalto, manteniendo su invicto profesional. </p>
                    <h2>Eryk Anders Derrota a Brad Tavares por Decisión UNánime</h2>
                    <p>Tremenda victoria del estadounidense <b>Eryk Anders</b>, quien mantuvo contra la reja a su rival durante gran parte del combate, sumando puntos por el tiempo de control, aunque también estuvo cerca de noquear al final del primer asalto, cuando fue capaz de derribar a golpes a su rival. Finalmente, luego de ganar el primer y tercer asalto del combate, Eryk Anders se lleva la victoria por decisión unánime. </p>
                    <h2>Manoel Sousa Noquea a Bolaki Oki en el Tercer Asalto</h2>
                    <p>Brutal victoria por KO del brasileño <b>Manoel Sousa</b>, quien fue capaz de dar vuelta lo que parecía una pelea cuesta arriba en el primer asalto, recibiendo un knockdown por parte del belga <b>Bolaji Oki</b>, del que sería capaz de recuperarse, juntando confianza y dominando poco a poco el combate, hasta llegar al punto cúlmine en el tercer asalto, cuando su rival ya había sido muy lastimado, conectando una mano derecha mortal que terminaría por sentenciar la pelea. De esta forma el brasileño se lleva la victoria por KO en el tercer asalto, y seguramente un bono por desempeño cuando acabe la cartelera. </p>
                    <h2>Elijah Smith Somete a Suyoung You en el Segundo Asalto</h2>
                    <p>Impresionante sumisión del estadounidense <b>Elijah Smith</b>, quien luego de derribar a su rival coreano <b>Suyoung You</b> a golpes en el segundo asalto, tuvo la rapidez suficiente para tomar por la espalda a su contrincante, para buscar un mataleón que finalmente obligaría al coreano a tapear, obteniendo la victoria por sumisión en el segundo asalto del combate. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}