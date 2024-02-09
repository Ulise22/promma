import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Image from 'next/image'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/dogfight2.jpg'
import aitorvszdravko from '@/assets/articulos/insideArticle/dwf2/aitor-vs-zdravko.jpeg'

export default function DWT2 () {
    return(
        <main>
            <ArticleHero title='Lo Mejor de Dogfight Wild Tournament 2' subtitle='Lo mejor que ha ocurrido en el evento de pelea organizado por Jordi Wild y que se puede ver gratis en youtube.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>1era Pelea: Muerte Súbita, Aitor Gaspar vs Badnews Zdravko</h2>
                    <p>La primera pelea del evento era la revancha entren Aitor y Zdravko, que había terminado en una victoria para Aitor por nocaut. Sin embargo, el resultado de esta revancha terminó en una redención para el hispanobulgaro, que pudo vencer por nocaut técnico en esta ocasión.</p>
                    <Image className={styles.article__image} src={aitorvszdravko} alt='' />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}