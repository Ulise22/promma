import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/previews/10-20/whittaker-vs-aliskerov.jpg'

export default function FightNightWhittakerAliskerov () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Whittaker vs Aliskerov!' subtitle='Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.' image={hero} date='2024-06-22' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En un Fight Night donde Aliskerov entró de urgencia como reemplazo de un enfermo <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> para enfrentar en la pelea estelar al histórico de la división <b>Robert Whittaker</b>, que viene de una victoria por decisión ante <b>Paulo Costa</b> en el <Link href='/noticias/ufc298'>UFC 298</Link>. En la cartelera estelar también contamos con un enfrentamiento entre rusos de los pesos pesados como pelea coestelar, entre <b>Sergei Pavlovich</b> y <b>Alexander Volkov</b>, además contamos podremos ver en su segunda pelea a la promesa de Daguestán <b>Shara Magomedov</b>, enfrentando al brasileño <b>Antonio Trocoli</b>. Y contamos con un siempre divertido de ver <b>Johnny Walker</b> enfretarse al suizo <b>Volkan Oezdemir</b>.</p>
                    <h2>Robert Whittaker vs Ikram Aliskerov</h2>
                    <p>En Proceso...</p>
                    <h2>Sergei Pavlovich vs Alexander Volkov</h2>
                    <p>En Proceso...</p>
                    <h2>Kelvin Gastelum vs Daniel Rodriguez</h2>
                    <p>En Proceso...</p>
                    <h2>Shara Magomedov vs Antonio Trocoli</h2>
                    <p>En Proceso...</p>
                    <h2>Johnny Walker Cae KO Ante Volkan Oezdemir</h2>
                    <p>La primera pelea de la cartelera estelar también nos trajó el primer KO de la noche, que en este caso benefició al suizo que le conectó un tremenedo nocaut al brasileño <b>Johny Walker</b>, que con este recibió el segundo consecutivo luego de haber caído derrotado ante <b>Ankalaev</b>, y que luego de recibir un zurdazo no tuvo que hacer. De esta manera Oezdemir seguramente escale en la división, dado que al momento de hacer la pelea estaba ranqueado #9, enfrentándose ante un peleador ranqueado #7.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}