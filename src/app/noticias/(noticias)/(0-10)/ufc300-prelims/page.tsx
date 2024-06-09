import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/noticias/previews/0-10/ufc300_prelims.jpg'

export default function UFC300Prelims () {
    return(
        <main>
            <ArticleHero title='UFC 300: !Kayla Harrinson Somete a Holly Holm en el Segundo Asalto en su Debut en la UFC¡' subtitle='Por el UFC 300 Kayla somete a Holly Holm en el segundo asalto y Diego Lopes Noquea su rival en el primer asalto.' image={hero} date='2024-04-13' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Sadiq Yusuff vs Diego Lopes</h2>
                    <p>¡Diego Lopes noquea en el primer asalto a Yusuff! El brasileño-mexicano logra su 3 finalización consecutiva, además logrando finalizar su decimoquinta pelea en el primer asalto, venciendo al número #12 de la división de peso pluma</p>
                    <h2>Holly Holm vs Kayla Harrinson</h2>
                    <p>¡Kayla Harrinson somete a Holly Holm en el segundo asalto en su debut! En una muestra de la increíble habilidad con la que cuenta la nueva peleadora de la UFC, Kayla fue capaz de someter a la histórica <b>Holly Holm</b>, luego de dominar durante todo el primer asalto y el segundo. De esta manera ganando en su debut en la compañía y perfilándose como contendiente al título de peso gallo femenino.</p>
                    <h2>Kalvin Kattar vs Aljamain Sterling</h2>
                    <p>Aljamain Sterling gana la pelea por decisión unánime en lo que fue hasta el momento el combate menos interesante de toda la cartelera. Un Sterling dominante en el suelo y la lucha, fue capaz llevarse la pelea por decisión de los jueces.</p>
                    {/* <h2>Jiri Prochazka vs Aleksandar Rakic</h2>
                    <p></p> */}
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}