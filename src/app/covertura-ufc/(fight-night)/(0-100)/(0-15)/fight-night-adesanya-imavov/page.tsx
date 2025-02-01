import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/adesanya_imavov.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC Saudi Arabia: Israel Adesanya vs Nassourdine Imavov',
    description: 'Noche de UFC en Arabia Sáudita protagonizada por el excampeón de peso medio Israel Adesanya y por Narssoudine Imavov.',
    openGraph: {
        title: 'UFC Saudi Arabia: Israel Adesanya vs Nassourdine Imavov',
        description: 'Noche de UFC en Arabia Sáudita protagonizada por el excampeón de peso medio Israel Adesanya y por Narssoudine Imavov.',
        url: 'https://fullmma.org/covertura-ufc/fight-night-adesanya-imavov'
    }
}

export default function CovingtonBuckley () {
    return(
        <main>
            <ArticleHero title='UFC SAUDI ARABIA: ¡Isreal Adesanya vs Nassourdine Imavov!' subtitle='Noche de UFC en Arabia Saudita, que además nos trae la pelea entre Shara Magomedov y Michael Venom Page, y la pelea de peso pesado entre Pavlovich y Jairzinho' image={hero} date='2025-02-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en Arabia Saudita, con la una tremenda pelea como aperitivo estelear, entre el excampeón de la división de peso medio <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> contra el #5 de la división, <b>Nassourdine Imavov</b>. Además, tendremos el enfrentamiento entre <Link href='/peleadores/shara-magomedov'>Shara &quot;Bullet&quot; Magomedov</Link>, quien está invicto 15-0, y enfrentará al inglés <b>Michael &quot;Venom&quot; Page</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Hamdy Abdelwahab Derrota a Jamal Pogues Por Decisión Dividida</h2>
                    <p>El egipcio Abdelwahab se lleva la victoria por decisión de los jueces, luego de dominar completamente durante el primer asalto, y luego de tener otros 2 asaltos más cerrados, pero que a los ojos de los jueces terminó ganando, recompensando su actitud de ir hacia adelante y buscar a su rival. De esta manera, Hamdy es el primer ganador de la noche, el día de hoy. </p>
                    <h2>Bogdon Grad Noquea a Lucas Alexander En el Segundo Asalto</h2>
                    <p>El debutante Grad, logra una impresionante victoria en su primer pelea en la UFC, al ser capaz de vencer por TKO al brasileño Lucas Alexander en el segundo asalto de la pelea. En lo que estaba siendo un debut complicado para el luchador de Rumania, con un primer asalto en el que fue dominado por el brasileño, fue capaz de darle la vuelta a la pelea, castigando a su rival con ground and pound, para llevarse la victoria por la vía del nocaut en el segundo round. </p>
                    <h2>Jasmine Jasudavicius Derrota a Mayra Bueno Silva</h2>
                    <p>Jasmine se lleva una merecida victoria por decisión unánime, luego de dominar por completo a la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link> en la totalidad de los asaltos. Con los 2 primeros siendo en el terreno del striking, en donde vimos como la canadiense destacó por encima de la brasileña, conectando más y mejores golpes. Y en el último, Jasmine decidió no arriesgar de más, sabiendo que tenía la pelea en el bolsillo, y concretó un derribo para dominar desde arriba a su rival y llevarse una cómoda victoria, ante una Mayra Bueno Silva a la que no le sentó bien moverse de división para pelear en peso mosca. </p>
                    {/* <h2>Terrance McKinney vs Damir Hadzovic</h2>
                    <p></p> */}
                    {/* <h2>Shamil Gaziev vs Thomas Petersen</h2>
                    <p></p> */}
                    {/* <h2>Muhammad Naimov vs Kaan Ofli</h2>
                    <p></p> */}
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Fares Ziam vs Mike Davis</h2>
                    <p></p>
                    <h2>Said Nurmagomedov vs Vinicius Oliveira</h2>
                    <p></p>
                    <h2>Sergei Pavlovich vs Jairzinho Rozenstruik</h2>
                    <p></p>
                    <h2>Shara Magomedov vs Michael Page</h2>
                    <p></p>
                    <h2>Israel Adesanya vs Nassourdine Imavov</h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}