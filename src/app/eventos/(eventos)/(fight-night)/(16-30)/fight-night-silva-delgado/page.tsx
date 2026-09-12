import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/ufc_noche.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Noche: ¡Jean Silva vs Jose Miguel Delgado!',
    description: 'UFC Noche: Jean Silva se enfrenta a Jose Miguel Delgado en la cartelera estelar. Brandon Moreno pelea contra Joseph Morales y Alexa Grasso se enfrenta a Maonon Fiorot en la cartelera estelar.',
    openGraph: {
        images: '',
        title: 'UFC Noche: ¡Jean Silva vs Jose Miguel Delgado!',
        description: 'UFC Noche: Jean Silva se enfrenta a Jose Miguel Delgado en la cartelera estelar. Brandon Moreno pelea contra Joseph Morales y Alexa Grasso se enfrenta a Maonon Fiorot en la cartelera estelar.',
        url: 'https://fullmma.org/eventos/fight-night-silva-delgado'
    }
}

export default function SilvaDelgado () {
    return(
        <main>
            <ArticleHero title='UFC Noche: ¡Jean Silva vs Jose Miguel Delgado!' subtitle='¡Brandon Moreno vs Joseph Morales! ¡Alexa Grasso vs Maonon Fiorot!' image={hero} date='2025-09-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC tenemos en honor a la independencia de México como todos los años, con el peleador brasileño de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <Link href='/peleadores/jean-silva'>Jean Silva</Link> como protagonista enfrentando al mexicano <b>Jose Miguel Delgado</b> en la cartelera estelar. Además, en la pelea coestelar estará peleando la estrella mexicana y excampeón <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, enfrentando al estadounidense <b>Joseph Morales</b>. </p>
                    <p>Por si fuera poco, además de la enorme cantidad de mexicanos que pelearán esta noche, en la cartelera estelar también tendremos el combate femenino entre la excampeona mexicana <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> y la francesa <b>Maonon Fiorot</b>. También tendremos una grandísima pelea en peso pesado, con el dominicano <Link href='/peleadores/waldo-cortes-acosta'>Waldo Cortes Acosta</Link> enfrentando al estadounidense <b>Curtis Blaydes</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Regina Tarin Derrota a JJ Aldrich por Decisión Unánime</h2>
                    <p>Gran manera de iniciar la cartelera en México, con una excelente victoria para la mexicana <b>Regina Tarin</b>, quien luego de dominar durante gran parte del combate, especialmente en los últimos 2 asaltos, consigue una victoria por decisión unánime que la mete de lleno en los rankings de la división femenina. </p>
                    <h2>Sean King III Deja KO a Jessie Rosas en el Primer Asalto</h2>
                    <p>BRUTAL nocaut del estadounidense de 22 años <b>Sean King III</b>, quien levantó en el aire a su rival mexicano <b>Jessie Rosas</b> (hermano de <Link href='/peleadores/raul-rosas-jr'>Raul Rosas Jr.</Link>) y lo lanzó al suelo, estrellando la cabeza contra el piso y quedando KO inmediatamente. De esta manera, el debutante y luchador menos experimentado de la cartelera, se lleva la victoria por KO en su debut en la compañía y muy probablemente se haga con el bono a la actuación de la noche. </p>
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