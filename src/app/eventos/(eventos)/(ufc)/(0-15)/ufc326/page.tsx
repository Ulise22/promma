import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc326.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 326: ¡Max Holloway vs Charles Oliveira 2!',
    description: "",
    openGraph: {
        images: '',
        title: 'UFC 326: ¡Max Holloway vs Charles Oliveira 2!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc326'
    }
}

export default function UFC326 () {
    return(
        <main>
            <ArticleHero title="UFC 326: ¡Max Holloway vs Charles Oliveira 2!" subtitle='¡Caio Borralho vs Reiner De Ridder! ¡Rob Font vs Raul Rosas Jr.!' image={hero} date='2026-03-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de UFC el que tenemos esta noche, cuando el actual <b>BMF</b> <Link href='/peleadores/max-holloway'>Max Holloway</Link> ponga en juego su cinturón ante el excampeón de la división de peso ligero y querido por todos <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, con ambos luchadores viniendo de una meritoria victoria en sus últimas peleas. Además, la pelea coestelar promete ser igual de emocionante, cuando el brasileño perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, se enfrente al neerlandés <b>Reiner De Ridder</b>. </p>
                    <p>Los fanáticos latinos tendremos varias peleas a las que prestar atención esta noche, con la más importante siendo la que tendrá el joven mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link>, quien se enfrentará a la posibilidad de entrar a los rankings de peso gallo al enfrentar al puertoriqueño <b>Rob Font</b> en la cartelera estelar. También tendremos al Ilia Topuria venezolano <b>Alberto Montes</b> haciendo su debut ante <b>Ricky Turcios</b> en peso pluma. Y finalmente el mexicano <b>Jesus Aguilar</b> se enfrentará al chino <b>Sumudaerji</b> en las primeras preliminares de la noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Rodolfo Bellato Noquea a Luke Fernandez en el Primer Asalto</h2>
                    <p>Gran victoria del brasileño <b>Rodolfo Bellato</b>, quien comenzó sufriendo el primer asalto, recibiendo bastante golpes que no podía contraatacar, pero necesitó solo de un par de golpes para derribar a su rival al suelo, castigarlo a golpes desde ahí para finalmente llevarse la primer victoria de la noche por TKO en el primer asalto. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2></h2>
                    <p></p> */}
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