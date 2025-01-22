import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/mikheil_kajaia.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Mikheil Kajaia',
    description: '',
    openGraph: {
        title: 'Mikheil Kajaia',
        description: '',
        url: 'https://fullmma.org/articulos/mikheil-kajaia'
    }
}

export default function MikheilKajaia () {
    return(
        <main>
            <ArticleHero title='¿Quién es Mikheil Kajaia? El luchador olímpico georgiano de 97 kilos y de aspecto más aterrador que existe' subtitle='La historia detrás del luchador grecorromano nacido en Georgia y nacionalizado serbio. ' image={hero} date='2025-01-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy vamos a hablar de uno de los luchadores olímpicos de aspecto más intimidante con el que uno se encuentra en internet. Sobre el serbio Mihail Kejaia, quien supo competir en los últimos 2 juegos olímpicos, y que supo ganar 5 medallas a lo largo de su carrera. </p>
                    <p>Mikheil Kajaia nació en la ciudad de Tskaltubo, en la antigua Georgia soviética, el día 21 de julio de 1989. </p>
                    <p>Comenzó su carrera como luchador grecorromano representando a su natal Georgia en el <b>2013 Summer Universiade</b>. Un campeonato universitario, organizado en la ciudad de Kazan, en Rusia, donde más de 10400 universidades de 162 países diferentes participaron en diferentes deportes, entre los que estaban incluídos la lucha grecorromana. En aquel campeonato nuestro protagonista ya comenzó a demostrar la habilidad con la que contaba al ganar la medalla de bronce en el evento de 96 kilos. </p>
                    <p>Formó parte del equipo de lucha de Georgia en los Juegos Europeos de 2015, donde lamentablemente perdería ante el italiano Daigoro Timoncini en los octavos de final. </p>
                    <p>En el año 2017 abandonó la representación de su país, para comenzar a representar a Serbia en su lugar. De esta manera formó parte del equipo nacional en el campeonato de lucha europeo en 2017, donde caería derrotado ante el campeón olímpico Artur Aleksanyan en el segundo round. </p>
                    <p>Su primer éxito como deportista llegaría un año después, cuando ganaría su primera medalla europea en 2018, luego de llegar a la final del torneo organizado en Rusia, donde volvería a caer derrotado ante Artur Aleksanyan, pero ganando la medalla de plata de igual forma. Además, ese mismo año se haría de la medalla de bronce en los Juegos Mediterráneos de 2018, organizados en Tarragona, España. </p>
                    <p>Un año después, en el 2019, ganaría su primera medalla de bronce en el Campeonato Mundial, en la edición organizada en Budapest, Hungría, donde se enfrentó por esta medalla con el excampeón mundial húngaro, Balázs Kiss, quien partía como favorito debido a su trayectoria y a contar con el apoyo de sus compatriotas en el público, pero que terminó por caer derrotado ante nuestro protagonista. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/mZS7Uj4N0J8?si=uFGOO0BoeLoZB77K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su última y más reciente medalla la ganaría en el 2023, cuando participó del campeonato europeo organizado en la ciudad de Zagreb, Croacia, logrando su primera medalla de bronce en un campeonato europeo. </p>
                    <h2>Mihail Kajaia en Los Juegos Olímpicos </h2>
                    <p>Aunque es cierto que estamos hablando de un 2 veces atleta olímpico, la verdad es que no le fue muy bien cuando compitió a este nivel. </p>
                    <p>Fue capaz de clasificar para Los Juegos Olímpicos de 2020, que se terminaron realizando en 2021 en Tokio, Japón. Pero no lograría llegar lejos en la competición, cayendo eliminado luego de su primera pelea, cuando le tocó enfrentar al estadounidense <b>Tracy Gangelo Hancock</b>.</p>
                    <p>Participaría de la siguiente edición olímpica de lucha grecorromana, al ser capaz de clasificar para los Juegos de París 2024. Pero esta edición no sería diferente a las demás para Kajaia, dado que en su primera pelea eliminatoria ante el egipcio <b>Mohamed Ali Elsayed Gabr </b>, caería derrotado, teniendo que volver a casa nuevamente luego su primer combate. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}