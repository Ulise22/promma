import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/articulos/previews/ufc300.jpg'
import Link from 'next/link'

export default function UFC300 () {
    return(
        <main>
            <ArticleHero title='UFC 300: Todas las Peleas Confirmadas Hasta Ahora' subtitle='Dana White ha prometido que este será el mayor evento de MMA en la historia, estos son los combates que confirmados hasta ahora!' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Dana White ha prometido mucho para este evento que apunta a ser histórico. Más allá de los rumores que hay para el día 13 de abril de 2024 que es para cuando está apuntado el UFC 300, que van desde el regreso de viejas glorias como <Link href='/leyendas/brock-lesnar'>Brock Lesnar</Link> o la vuelta de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, estos son los combates confirmados hasta ahora: </p>
                    <h2>Justin Gaethje vs Max Holloway por el BMF</h2>
                    <p>Hasta ahora la mayor sorpresa y la pelea que más promete es esta, donde pondrán en juego el título del BMF (Baddest MotherFucker), luego de que <Link href='/peleadores/justin-gaethje'>Gaethje</Link> lo ganara en su pelea contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> con una patada que dejó KO a Poirier. </p>
                    <p>A este combate llega Gaethje, por su parte, como ya mencionamos, luego de vencer por nocaut a Poirier. Mientras que Max Holloway llega luego de vencer por nocaut a <b>The Korean Zombie</b>, en una división que, sacando a Volkanovski, Holloway lleva dominando desde hace rato.</p>
                    <h2>Weili Zhang vs Yan Xiaonan</h2>
                    <p>Otro de los combates interesantes que ya están confirmados, es la pelea por el tíulo del Peso Paja Femenino de UFC entre la vigente campeona, <Link href='/campeones/weili-zhang'>Weili Zhang</Link>, que viene de ganar su última pelea defendiendo el título contra la brasileña <b>Amanda Lemos</b> por decisión unánime, y viene con una racha de 3 victorias consecutivas, contra la también peleadora china <b>Yan Xiaonan</b>, que actualmente está posicionada #2 en la división y que en su último combate venció por KO a la brasileña <b>Jéssica Andrade</b> en el primer asalto, ganandose el premio a la actuación de la noche.</p>
                    <h2>Jiří Procházka vs Aleksandar Rakić</h2>
                    <p>El combate el número #2 de la división de Semipesados, Jiří Procházka, que viene de una derrota por nocat en su pelea por el título contra <Link href='/campeones/alex-pereira'>Alex Pereira</Link>, y el número #5 de la división, <b>Aleksandar Rakic</b> que viene de una derrota por TKO en el tercer asalto contra el polaco <b>Jan Błachowicz</b> hace casi 2 años.</p>
                    <h2>Calvin Kattar vs Aljamain Sterling</h2>
                    <p>Se confirmó la pelea entre el ex-campeón de Peso Gallo <b>Aljamain Sterling</b>, que viene de perder su título por nocaut en el segundo asalto contra el estadounidense <Link href='/campeones/sean-omalley'>Sean O&apos;Malley</Link>, contra el número #7 de la división de Peso Pluma <b>Calvin Kattar</b>, que decidió bajar de categoría para enfrentarse a Sterling luego de su derrota en octubre de 2022 contra el inglés <b>Arnold Allen</b> por TKO en el segundo asalto de la pelea.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}