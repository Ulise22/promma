import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/16-30/ufc334.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!',
    description: "UFC 334 en el Madison Square Garden en Nueva York con Ciryl Gane defendiendo su título ante Josh Hokit y Kayla Harrison defendiendo su cinturón ante Amanda Nunes.",
    openGraph: {
        images: '',
        title: 'UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!',
        description: "UFC 334 en el Madison Square Garden en Nueva York con Ciryl Gane defendiendo su título ante Josh Hokit y Kayla Harrison defendiendo su cinturón ante Amanda Nunes.",
        url: 'https://fullmma.org/eventos/ufc334'
    }
}

export default function UFC334 () {
    return(
        <main>
            <ArticleHero title="UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!" subtitle='¡Caio Borralho vs Yousiri Belgaroui! ¡Uros Medic vs Kevin Holland!' image={hero} date='2026-11-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de MMA tenemos esta noche en Nueva York, en el mítico Madison Square Garden, que estará recibiendo el UFC 334. Con una pelea espectacular para el evento estelar, por fin teniendo un combate por el título de pesos pesados, con el recientemente nombrado campeón <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> defendiendo su título ante el luchador invicto <Link href='/peleadores/josh-hokit'>Josh Hokit</Link>. Y con una pelea coestelar igual de espectacular, enfrentando a 2 de las mejores peleadoras de la historia, con la campeona <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link> defendiendo su cinturón de peso gallo ante la GOAT del deporte, <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link></p>
                    <p>Además, vuelve a subirse al octágono el primer integrante de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, para enfrentar al neerlandés <b>Yousri Belgaroui</b>, jugándose su lugar en los rankings. También habrá peleón cuando el serbio, y #11 de los rankings de peso wélter, <b>Uros Medic</b>, busque su quinta victoria consecutiva contra el siempre peligroso y activo <b>Kevin Holland</b>. Finalmente en la pelea estelar de las preliminares, se nos retira un histórico y leyenda como lo es <b>Stephen Thompson</b>, que hoy colgará los guantes luego de enfrentar a su compatriota <b>Charles Radtke</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Evan Elder Derrota a Samuel Sanches Por Decisión Unánime</h2>
                    <p>Espectacular pelea para iniciar esta gran cartelera, con el estadounidense <b>Evan Elder</b> siendo el que sale victorioso ante el brasileño <b>Samuel Sanches</b>, que tuvo un primer asalto con dominio estadounidense total, a punto de noquear a su rival en todo momento, y, aunque perdió un segundo asalto donde se notaba que los golpes de su rival hacían más daño que los suyos, fue capaz de compensar esto con unos derribos que fueron claves en el tercer asalto, aprovechando su ventaja posicional para castigar desde el suelo a golpes a su oponente. De esta manera el estadounidense Evan Elder se lleva la victoria por decisión unánime y alcanza su cuarta victoria consecutiva en peso ligero. </p>
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