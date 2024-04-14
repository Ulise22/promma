import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/20-30/ufc300_prelims.jpg'

export default function UFC300Prelims () {
    return(
        <main>
            <ArticleHero title='UFC 300: !Título Pendiente¡' subtitle='lorem ipsum' image={hero} date='13/04/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Sadiq Yusuff vs Diego Lopes</h2>
                    <p>¡Diego Lopes noquea en el primer asalto a Yusuff! El brasileño-mexicano logra su 3 finalización consecutiva, además logrando finalizar su decimoquinta pelea en el primer asalto, venciendo al número #12 de la división de peso pluma</p>
                    <h2>Holly Holm vs Kayla Harrinson</h2>
                    <p></p>
                    <h2>Kalvin Kattar vs Aljamain Sterling</h2>
                    <p></p>
                    <h2>Jiri Prochazka vs Aleksandar Rakic</h2>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}