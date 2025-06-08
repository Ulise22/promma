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
            <ArticleHero title="UFC 316: ¡Sean O'Malley vs Merab Dvalishvili! ¡Julianna Peña vs Kayla Harrison!" subtitle='¡Kevin Holland Somete a Vicente Luque en el Segundo Asalto de la Pelea!' image={hero} date='2025-06-07' author={null} updatedDate='2024-06-08' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC que tenemos esta noche en New Jersey, encabezado por el campeón de peso gallo <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, quien defenderá por segunda vez en el año su cinturón ante el excampeón <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, luego de lograr exitosamente retener el cinturón en el <Link href='/covertura-ufc/ufc311'>UFC 311</Link> ante el daguestaní <Link href='/peleadores/umar-nurmagomedov'>Umar Numragomedov</Link>. </p>
                    <p>Además como evento coestelar de la noche tendremos la pelea por el título femenino de peso gallo de la UFC, protagonizado por la actual campeona de la división <Link href='/mujeres/julianna-pena'>Julianna Peña</Link>, quien defenderá el cinturón ante la medallista olímpica <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link>, quien luego de 2 peleas en la UFC (1 sumisión y 1 decisión), busca coronarse campeona en la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Andreas Gustafsson Derrota a Khaos Williams</h2>
                    <p>El luchador sueco logra una gran victoria por decisión unánime ante el estadounidense <b>Khaos Williams</b>, luego de lo que fue un completo monólogo por parte de Gustafsson, quien se impuso ante su rival en todas las facetas del juego, conectando más y mejores golpes que que WIlliams, y logrando controlar a su rival y evitar peligro al entrar al clinch, donde era capaz de imponerse y evitar recibir daño por parte del estadounidense. Luego de 3 asaltos así el resultado esperable fue la victoria del luchador de Suecia. </p>
                    <h2>Waldo Cortes Acosta Derrota a Serghei Spivac</h2>
                    <p>El luchador de República Dominicana, Waldo Cortes Acosta, consigue una increíble victoria que le asegura escalar al top 10 de la división de peso pesado, luego de derrotar por decisión unánime al luchador de Moldavia <b>Serghei Spivac</b>, al haber sufrido un primer asalto bastante parejo que podría haber ido para cualquiera de los 2 peleadores, logró ir de menos a más, ganando el segundo y tercer asalto para de esta forma asegurarse la victoria. </p>
                    <h2>Azamat Murzakanov Noquea a Brenson Ribeiro en el Primer Asalto</h2>
                    <p>El luchador ruso <b>Azamat Murzakanov</b>, actualmente #12 en la división de peso semipesado, logra mantener su invicto al conseguir derrotar al luchador brasileño <b>Brendson Ribeiro</b>, a quien venció por TKO en el primer asalto luego de conectar una buena mano que derribó a su rival, para posteriormente rematarlo con golpes a la cabeza que obligaron al árbitro a separarlos y dar por terminada la pelea. </p>
                    <h2>Joshua Van Noquea a Bruno Silva en el Tercer Asalto</h2>
                    <p><b>Joshua Van</b> consigue una increíble victoria por la vía del nocaut en el tercer asalto de la pelea ante el brasileño <b>Bruno Silva</b>, en lo que fue una amplia muestra de superioridad por parte del luchador de Myanmar, que con un striking de élite, fue capaz de dominar la pelea completamente, finalizando en el último asalto de la pelea. De esta manera, terminamos la cartelera preliminar con una gran pelea y una gran actuación por parte del luchador asiático. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Kevin Holland Somete a Vicente Luque en el Segundo Asalto</h2>
                    <p>El estadounidense Kevin Holland logra una espectacular victoria ante el histórico luchador latinoamericano <b>Vicente Luque</b>, al someterlo con una anaconda choke en el segundo asalto de la pelea, consiguiendo de esta manera la primer sumisión de la noche. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}