import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/ufc302-hero.jpg'

export default function UFC302 () {
    return(
        <main>
            <ArticleHero title='UFC 302: ¡Dustin Poirier vs Islam Makhachev!' subtitle='' image={hero} date='01/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En una noche que nos trae al campeón indiscutido <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> defender su título contra el número #4 de la división de Peso Ligero, <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> quien supo ser campeón interino de la división, y que cayó derrotado en las 2 ocasiones que tuvo de disputar el título. Poirier se encuentra en la que seguramente sea su última oportunidad de campeonar en un combate que promete mucho. Además, en un combate de 5 asaltos tenemos como pelea coestelar la del excampeón y contendiente número #1 de la división de peso mediano, <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien luego de perder su título con <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> en el <Link href='/articulos/ufc297'>UFC 297</Link> enfrentará al brasileño <b>Paulo Costa</b>, que viene de una derrota por decisión contra <b>Robert Whittaker</b>. </p>
                    <h2>Randy Brown vs Elizeu Zaleski Dos Santos</h2>
                    <p>Tremenda pelea fue la que abrió la cartelera estelar de este UFC 302, con un Randy Brown que luego de 3 asaltos salió victorioso por decisión unánime, aprovechando claramente la altura y alcance qie le sacaba a su rival, fue capaz de conectar más y mejores golpes a lo largo de los 3 asaltos. Aunque el brasileño Dos Santos estuvo cerca de finalizar la pelea en el segundo asalto con un mataleón, Brown fue capaz de sobrevivir en el piso para terminar llevándose la pelea.</p>
                    <h2>Niko Price vs Alex Morono</h2>
                    <p>Pendiente...</p>
                    <h2>Kevin Holland vs Michal Oleksiejczuk</h2>
                    <p>Pendiente...</p>
                    <h2>Sean Strickland vs Paulo Costa</h2>
                    <p>Pendiente...</p>
                    <h2>Islam Makhachev vs Dustin Poirier</h2>
                    <p>Pendiente...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}