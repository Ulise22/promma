import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/20-30/sandhagen-vs-nurmagomedov-hero.jpg'

export const metadata: Metadata = {
    title: 'Sandhagen vs Nurmavomedov',
    description: '',
    openGraph: {
        title: 'Sandhagen vs Nurmavomedov',
        description: '',
        url: 'https://fullmma.org/noticias/fight-night-sandhagen-nurmagomedov'
    }
}

export default function JonesEsquivaAspinall () {
    return(
        <main>
            <ArticleHero title='UFC FIGHT NIGHT: ¡El Español Joel Álvarez Noquea a Brener en el Tercer Asalto!' subtitle='Joel Álvarez gana por nocaut en el tercer asalto de la pelea.' image={hero} date='2024-08-03' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy tenemos noche de UFC en los Emiratos Árabes con un montón de peleas, siendo la que tendrán <b>Cory Sandhagen</b> y <b>Umar Nurmagomedov</b> la que encabezará el evento. Además, volveremos a ver pelear a <b>Shara Bullet</b> en la pelea coestelarn en lo que sería su tercer pelea en la compañía, enfrentando al polaco <b>Michal Oleksiejczuk</b>.</p>
                    <h2>Joel Álvarez Noquea a Elves Brener en el Tercer Asalto</h2>
                    <p>En una excelenta pelea y desempeño por parte del español, Joel Álvarez logra una increíble victoria por nocaut en el tercer asalto de la pelea, luego de haber dominado durante todo el combate a su rival brasileño. </p>
                    <p>De llevarse la pelea a la decisión de los jueces, seguramente igual Joel se habría hecho con la victoria, sin embargo esto no lo detuvo de buscar la finalización en el último asalto, logrando conectar una larga combinación de golpes, incluídos muchos rodillazos a la cabeza de Brener que no pudo hacer nada ante el poder del español.</p>
                    <h2>Mackenzie Dern Vence por Decisión Unánime a Loopy Godinez</h2>
                    <p>La brasileña <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link> se lleva la segunda pelea de la cartelera estelar en las 115 libras por decisión unánime ante la peleadora mexicana. De esta forma corta con una racha de 2 derrotas consecutivas, siendo la última la que sufrió en el <Link href='/noticias/ufc298'>UFC 298</Link> contra su compatriota <b>Amanda Lemos</b>.</p>
                    <h2>Tony Ferguson vs Michael Chiesa</h2>
                    <p></p>
                    <h2>Marlon Vera vs Deivenson Figueiredo</h2>
                    <p></p>
                    <h2>Shara Magomedov vs Michal Oleksiejczuk</h2>
                    <p></p>
                    <h2>Cory Sandhagen vs Umar Nurmagomedov</h2>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}