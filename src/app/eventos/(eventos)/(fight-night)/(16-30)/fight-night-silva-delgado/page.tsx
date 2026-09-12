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
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc_noche.0a7c1f1b.webp&w=828&q=65',
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
                    <h2>Rongzhu Derrota a Rafa García por Decisión Unánime</h2>
                    <p>Espectacular pelea la que acabamos de presenciar, con ambos luchadores siendo muy agresivos con el otro, ofreciéndonos un espectáculo. El luchador local <b>Rafa García</b> fue capaz de dominar claramente el primer asalto, pero el luchador chino <b>Rongzhu</b> fue capaz de recuperarse en los últimos 2 asaltos, arrebatándole la victoria al local por decisión unánime. </p>
                    <h2>Tommy Gantt Somete a Drakkar Klose en el Tercer Asalto</h2>
                    <p>Gran victoria del estadounidense <b>Tommy Gantt</b>, quien luego de ser superior a su rival durante la mayor parte del combate, aunque sufriendo en ocasiones, fue capaz de conectar con sus piernas una llave que dejaría atrapada la cabeza de su rival, castigándolo con codazos desde esa posición que llevaron a Klose a tapear, otorgándole la victoria a Tommy Gantt por sumisión en el tercer asalto. </p>
                    <h2>Yousri Belgaroui Noquea a Djorden Santos en el Primer Asalto</h2>
                    <p>Otra gran finalización, esta vez por nocaut, en esta cartelera, de la mano del holandés <b>Yousri Belgaroui</b>, quien en un primer asalto letal, fue capaz de conectar una larga combinación de golpes hacia el brasileño <b>Djorden Santos</b>, tanto al cuerpo como a la cabeza, que finalmente terminaron por tumbarlo al suelo, con el árbitro frenando la pelea antes de que pudiera hacerle más daño. De esta forma Belgaroui consigue su tercer victoria consecutiva por nocaut en la UFC. </p>
                    <h2>Ignacio Bahamondes Derrota a Muslim Salikhov por Decisión Unánime</h2>
                    <p>Excelente victoria para el chileno <b>Ignacio Bahamondes</b>, quien en su debut en peso wélter dió una actuación sobresaliente, dominando completamente a un peleador veterano de Daguestán como lo es <b>Muslim Salikhov</b>, a quien fue capaz de conectar con mucha precisión y en mayor cantidad durante todo el combate, especialmente con las patadas que lanzaba al cuerpo y cabeza de su rival. De esta forma, luego de ganar los 3 asaltos, el chileno se lleva la victoria por decisión unánime. </p>
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