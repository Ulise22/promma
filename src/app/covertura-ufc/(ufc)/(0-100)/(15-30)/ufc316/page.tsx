import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc316.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC 316: ¡Sean O´Malley vs Merab Dvalisvhili!',
    description: "Noche de UFC en New Jersey con Sean O'Malley y Merab Dvalishvili como protagonistas al disputar el cinturón de peso gallo de la UFC.",
    openGraph: {
        title: 'UFC 316: ¡Sean O´Malley vs Merab Dvalisvhili!',
        description: "Noche de UFC en New Jersey con Sean O'Malley y Merab Dvalishvili como protagonistas al disputar el cinturón de peso gallo de la UFC.",
        url: 'https://fullmma.org/covertura-ufc/ufc316'
    }
}

export default function UFC312 () {
    return(
        <main>
            <ArticleHero title="UFC 316: ¡Sean O'Malley vs Merab Dvalishvili! ¡Julianna Peña vs Kayla Harrison!" subtitle='¡Vicente Luque vs Kevin Holland! ¡Bruno Silva vs Joshua Van!' image={hero} date='2025-06-07' author={null} updatedDate='2024-06-08' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC que tenemos esta noche en New Jersey, encabezado por el campeón de peso gallo <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, quien defenderá por segunda vez en el año su cinturón ante el excampeón <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, luego de lograr exitosamente retener el cinturón en el <Link href='/covertura-ufc/ufc311'>UFC 311</Link> ante el daguestaní <Link href='/peleadores/umar-nurmagomedov'>Umar Numragomedov</Link>. </p>
                    <p>Además como evento coestelar de la noche tendremos la pelea por el título femenino de peso gallo de la UFC, protagonizado por la actual campeona de la división <Link href='/mujeres/julianna-pena'>Julianna Peña</Link>, quien defenderá el cinturón ante la medallista olímpica <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link>, quien luego de 2 peleas en la UFC (1 sumisión y 1 decisión), busca coronarse campeona en la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Andreas Gustafsson Derrota a Khaos Williams</h2>
                    <p>El luchador sueco logra una gran victoria por decisión unánime ante el estadounidense <b>Khaos Williams</b>, luego de lo que fue un completo monólogo por parte de Gustafsson, quien se impuso ante su rival en todas las facetas del juego, conectando más y mejores golpes que que WIlliams, y logrando controlar a su rival y evitar peligro al entrar al clinch, donde era capaz de imponerse y evitar recibir daño por parte del estadounidense. Luego de 3 asaltos así el resultado esperable fue la victoria del luchador de Suecia. </p>
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