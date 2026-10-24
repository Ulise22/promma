import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc333.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 333: ¡Alexander Volkanovski vs Movsar Evloev! ¡Petr Yan vs Merab Dvalishvili!',
    description: "",
    openGraph: {
        images: '',
        title: 'UFC 333: ¡Alexander Volkanovski vs Movsar Evloev! ¡Petr Yan vs Merab Dvalishvili!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc333'
    }
}

export default function UFC333 () {
    return(
        <main>
            <ArticleHero title="UFC 333: ¡Alexander Volkanovski vs Movsar Evloev! ¡Petr Yan vs Merab Dvalishvili!" subtitle='¡Alexander Volkov vs Rizvan Kuniev! ¡Loneer Kavanagh vs Ramazan Temirov!' image={hero} date='2026-10-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de UFC el que tenemos el día de hoy, siendo uno de los mejores del año con 2 peleas títulares. Siendo el evento estelar la pelea entre el GOAT de la división de peso pluma, el campeón australiano <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, quien va a estar defendiendo su cinturón ante el ruso <Link href='/peleadores/movsar-evloev'>Movsar Evloev</Link>. Y con la pelea coestelar siendo otro espectáculo, con el recientemente coronado campeón de peso gallo, el ruso <Link href='/peleadores/petr-yan'>Petr Yan</Link>, defendiendo en una revancha y cerrando la trilogía ante el georgiano excampeón <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>.</p>
                    <p>Por si fuera poco, en la misma cartelera estelar tendremos a la joven estrella inglesa <Link href='/peleadores/loneer-kavanagh'>Loneer Kavanagh</Link>, quien se enfrentará al #10 de la división de peso mosca, el luchador de Uzbekistán <b>Ramazan Temirov</b>. Finalmente tendremos un combate que puede definir el futuro de la división de peso pesado, con el veterano ruso <Link href='/peleadores/alexander-volkov'>Alexander Volkov</Link> enfrentando a su compatriota <b>Rizvan Kuniev</b>.</p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Iasmin Lucindo Derrota a Nicolle Caliari Por Decisión Unánime</h2>
                    <p>Gran primer combate para iniciar la cartelera, con la brasileña <b>Iasmin Lucindo</b> siendo quien se quedaría con la victoria, después de hacer un excelente primer asalto en el que golpeó a su rival haciendo mucho daño, y conectando un codazo giratorio que le haría un corte en el ojo a su oponente, lo que terminaría influenciando el resto de la pelea, ya que <b>Nicolle Caliari</b> tendría que pelear con un corte y un chorro de sangre corriendo por su rostro. El combate terminaría con Iasmin Lucindo ganando por decisión unánime de los jueces. </p>
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