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
        images: '',
        title: 'UFC Fight Night: ¡Kevin Vallejos vs Josh Emmet!',
        description: 'Noche de UFC en Las Vegas con el argentino Kevin Vallejos enfrentando al veterano estadounidense Josh Emmett. ',
        url: 'https://fullmma.org/eventos/fight-night-moreno-kavanagh'
    }
}

export default function EmmetVallejos () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Kevin Vallejos vs Josh Emmet!' subtitle='¡Amanada Lemos vs Gillian Robertson! ¡Andre Fili vs Jose Miguel Delgado!' image={hero} date='2026-03-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Histórica noche de UFC para los fans de Argentina que hoy tendremos a nuestro representante de peso pluma <Link href='/peleadores/kevin-vallejos'>Kevin Vallejos</Link>, encabezando el evento de la noche, siendo el segundo argentino en ser la pelea principal, luego de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, para ello deberá enfrentar al veterano estadounidense <b>Josh Emmett</b>, que está #11 en la división. </p>
                    <p>Por si fuera poco para el público hispano, tendremos el debut del español excampeón de WOW <Link href='/articulos/hecher-sosa-padre'>Hecher Sosa</Link>, enfrentando a <b>Luan Lacerda</b>. La cartelera la abrirá la venezolana <b>Piera Rodriguez</b>, enfrentando a <b>Sam Hughes</b>. Y estarán los mexicanos <b>Montse Rendon</b> en la cartelera preliminar, y <b>José Miguel Delgado</b> en la cartelera estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>La Venezolana Piera Rodriguez Derrota a Sam Hughes por Decisión Unánime</h2>
                    <h2>Hecher Sosa Debuta Derrotando a Luan Lacerda por Decisión Unánime</h2>
                    <h2>Bia Mesquita Somete a Montse Rendon en el Primer Asalto</h2>
                    <p>Espectacular victoria de la brasileña, que conectando un mataleón a su rival mexicana <b>Montse Rendon</b> es capaz de llevarse la victoria por sumisión en el primer asalto, manteniendo su invicto profesional. </p>
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