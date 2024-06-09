import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/noticias/previews/0-10/ufc300_early-prelims.jpg'

export default function UFC300EarlyPrelims () {
    return(
        <main>
            <ArticleHero title='UFC 300: !Deivenson Figueiredo Somete a Cody en la Primer Pelea de la Noche¡' subtitle='Arranca el UFC 300 con unas increíbles peleas en los primeros preliminares.' image={hero} date='2024-04-13' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Deivenson Figueiredo vs Cody Garbrandt</h2>
                    <p>¡Deveison Figueiredo somete en el segundo asaldo a Cody! En una pelea donde habíamos visto a un muy buen Cody Gardbrandt mientras la pelea estuvo de pie, el brasileño ex-campeón de la división de peso mosca sólo necesito de un derribo exitoso para llevar la pelea a un terreno en el que se encontró más cómodo, siendo capaz de en el segundo asalto, someter a su rival.</p>
                    <h2>Bobby Green vs Jim Miller</h2>
                    <p>¡Bobby Green derrota a Jim Miller por decisión unánime! En una increíble pelea, vimos a un Bobby Green bastante dominante, que pese a que en el primer asalto recibió el susto que provocó la mano izquierda de Miller, fue capaz de dominar el combate, estando cerca del nocaut al final del combate, sin ser capaz de lograrlo sólo por los meritos de Jim Miller, que demostró ser un guerrero al resistir tal embestida.</p>
                    <h2>Jéssica Andrade vs Marina Rodriguez</h2>
                    <p>¡Jessica Andrade gana por decisión dividida! En un reñido combate donde ambas luchadoras se hicieron mucho daño, quien se terminó por llevar la victoria es la brasileña Jessica Andrade, que de esta forma agranda su récord de ser la peleadora femenina con más victorias en la UFC.</p>
                    <h2>Jalin Turner vs Renato Moicano</h2>
                    <p>¡Renato Moicano gana por nocaut en el segundo asalto! En una locura de combate, Jalin Turner tuvo en su mano la victoria en el primer asalto, luego de que consiguió un knockdown cerca de terminar el asalto, sin embargo este no fue a buscar asegurar el nocaut y el brasileño se lo penalizó en el segundo asalto. Cuando luego de un derribo que llevó la pelea al ground and pound, Renato Moicano fue capaz de ganar por nocaut al #10 rankeado en su división.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}