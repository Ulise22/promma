import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/ufc_hollywood.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Peleadores en Hollywood',
    description: 'No son demasiados los que han trascendido las Artes Marciales Mixtas como para trasladar su estátus de estrella a la pantalla grande de Hollywood, como lo hizo más recientemente Conor McGregor en la película Road House (El Duro) estrenada en Amazon Prime en marzo de este año.',
    openGraph: {
        title: 'Peleadores en Hollywood',
        description: 'No son demasiados los que han trascendido las Artes Marciales Mixtas como para trasladar su estátus de estrella a la pantalla grande de Hollywood, como lo hizo más recientemente Conor McGregor en la película Road House (El Duro) estrenada en Amazon Prime en marzo de este año.',
        url: 'https://fullmma.org/articulos/peleadores-de-ufc-en-peliculas'
    }
}

export default function KimboSlice () {
    return(
        <main>
            <ArticleHero title='Top 5 Peleadores de UFC que Aparecieron en Películas de Hollywood' subtitle='La Lista de 5 Campeones de UFC que aparecieron en el cine y televisión, teniendo una actuacion destacada.' image={hero} date='2024-09-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>No son demasiados los que han trascendido las Artes Marciales Mixtas como para trasladar su estátus de estrella a la pantalla grande de Hollywood, como lo hizo más recientemente <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> en la película <b>Road House (El Duro)</b> estrenada en Amazon Prime en marzo de este año. Por eso, aunque nos vamos a dejar fuera algunos nombres importantes que tuvieron una participación destacada en el cine, como es el caso <Link href='/articulos/michael-bisping-ojo'>Michael Bisping</Link> o <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, por nombrar algunos, hoy vamos a hacer una lista de los 5 peleadores de UFC que tuvieron participaciones destacadas en películas de Hollywood.</p>
                    <h2>5. Randy Couture</h2>
                    <p>Una de las primeras estrellas de la <Link href='/articulos/ufc'>UFC</Link> en hacer apariciones destacadas en la pantalla grande es el primer doble campeón, el excampeón de los pesos pesados y semipesados <Link href='/leyendas/randy-couture'>Randy Couture</Link>, quien hizo su aparición más destacada en la serie de películas <b>The Expendables (Los Indestructibles en latinoamérica)</b>, donde compartió pantalla con actores de la talla de <b>Sylvester Stallone</b>, <b>Jason Statham</b>, <b>Chuck Norris</b> y <b>Arnold Schwarzenegger</b>. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/8KtYRALe-xo?si=ttYC0V6o69UrspJI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Aunque su primer papel fue un poco más curioso, dado que en el año 2003 apareció en la película <b>Cradle To The Grave</b> protagonizada por Jet Li, donde también aparecen los excampeones de UFC, <b>Tito Ortiz</b> y <Link href='/leyendas/chuck-lidell'>Chuck Lidell</Link>.</p>
                    <h2>4. Ronda Rousey</h2>
                    <p>La primer campeona femenina de UFC, <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link> también tuvo un interesante recorrido en el mundo del cine, al aparecer junto al ya mencionado <b>Randy Couture</b>, en la tercera entrega de The Expendables. Además tuvo una aparición en una de las sagas de películas más exitosas de los últimos tiempos, teniendo un papel en <b>Rápidos y Furiosos 7</b>, en el año 2015. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/jocbx0h1LqA?si=0HhHO7ibjuq2SmEh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su papel más reciente en el mundo del cine lo tuvo en la cinta protagonizada por <b>Mark Wahlberg</b>, <b>Mile 22</b>, en el año 2018. Y sólo el tiempo dirá si volveremos a ver a la campeona en la pantalla grande otra vez.</p>
                    <h2>3. Francis Ngannou</h2>
                    <p>El excampeón de peso pesado de la UFC, <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link>, al igual que su colega Ronda Rousey, tuvo un destacado papel en la novena entrega de <b>Rápidos y Furiosos</b>, convirtiéndose en el segundo peleador en aparecer en esta saga de películas. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/h1h9USVbA-o?si=YNf9MjHC_LfCq6-b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>2. George St-Pierre</h2>
                    <p>Quien tuvo una de las participaciones en el cine más recordadas es la leyenda del peso wélter, <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link>, quien fue contactado por Disney y Marvel para aparecer en la segunda película de <b>Capitan América</b>. En este film, aprovechando su origen canadiense, GSP interpretaría a un villano francés de los comics llamado <b>Beltroc</b>, donde tendría una pelea con el Capitán América muy bien coreografiada.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/quNcV0j2M0w?si=Ae1OOJzO4TnAe3e9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>George volvería a interpretar a este mismo personaje en la serie de <b>Disney+</b>, <b>Falcón y el Soldado del Invierno</b>, y todo parece indicar que lo volveremos a ver en la nueva cinta de Capitán América que tiene fecha de estreno para el 2025. </p>
                    <h2>1. Conor McGregor</h2>
                    <p>El caso más reciente de lo que estamos hablando hoy, y quizás el que tuvo un papel más relevante, es el de <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, quien incluso aparece en la portada de la película <b>Road House (El Duro)</b>.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Y0ZsLudtfjI?si=09699CT0F0SJ4dVW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En esta película estrenada en marzo de 2024 en Amazon Prime, Conor interpreta al villano principal de la cinta, haciendo un sorprendente muy buen papel, en lo que era su debut actoral en el cine. Aunque teniendo en cuenta que está interpretando a un irlandés medio loco, algo muy parecido a lo que es él, no es de extrañar que este haya sido el caso.</p>
                    <p>Todavía es pronto para saber si este es el inicio de una carrera actoral para la principal estrella de la UFC, pero en caso de serlo, he de decir que Conor empezó con el pie derecho. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}