import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'

export default function AilinVsJoselyne () {
    return(
        <main>
            <ArticleHero title='La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302' subtitle='En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.' image={hero} date='01/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En un combate que tuvo una clara ganadora, la argentina Ailín Pérez terminó llevandose la pelea por decisión unánime, luego de concretar 6 derribos de 11 intentados, contra los 0 intentados por su rival. Además de superar en golpes significativos a la panameño con 42 a 27, uno de ellos llegando incluso a tirar al piso a Joselyne Edwards que recibió por sopresa la mano de Ailín.</p>
                    <p>De esta manera, en sus 4 peleas dentro de la <Link href='/articulos/ufc'>UFC</Link> <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, completa un total de 3 victorias consecutivas, luego de aquel debut con derrota que sufrió contra la suiza <b>Stephanie Egger</b>, quien la sometió en el segundo asalto.</p>
                    <p>Además de ganar este combate, Ailín consiguió dar por terminada la rencilla personal que tenía con Joselyne fuera del cuadrilatero, primero venciendo a su rival, y luego reconciliándose una vez finalizada la pelea.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/LJIF-aWERqo?si=I-bOVwo7284T45bd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}