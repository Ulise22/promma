import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc310.jpg'

export const metadata: Metadata = {
    title: 'UFC 310',
    description: "",
    openGraph: {
        title: 'UFC 310',
        description: "",
        url: 'https://fullmma.org/covertura-ufc/ufc310'
    }
}

export default function UFC309 () {
    return(
        <main>
            <ArticleHero title="UFC 310: ¡Alexandre Pantoja vs Kai Asakura por el Campeonato de Peso Mosca de UFC! ¡Shavkat Rakhmonov vs Ian Garry!" subtitle='Noche de UFC tremenda que además nos trae la pelea de pesado entre Ciryl Gane y Alexander Volkov. ' image={hero} date='2024-12-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Último evento de PPV del año con el UFC 310, que nos trae como evento principal la pelea por el cinturón de peso mosca de la UFC entre el actual campeón <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, y el debutante japonés de 31 años que peleará por primera vez en la compañía <Link href='/noticias/quien-es-kai-asakura'>Kai Asakura</Link>. Además como evento coestelar tendremos la pelea eliminatoria del título de peso wélter entre los 2 invictos de la división, el luchador de Kazajistán <Link href='/peleadores/shavkat-rakhmonov'>Shakvat Rakhmonov</Link> y el irlandés <Link href='/peleadores/ian-garry'>Ian Garry</Link>. </p>
                    <h2>Kennedy Nzechukwu Noquea a Lukasz Brzeski en la Primera Pelea de la Noche</h2>
                    <p>Increíble manera de comenzar la cartelera, con el nigeriano Nzechukwu consigue una gran victoria por la vía del nocaut al conectar un gancho con la mano derecha que tumbó a su rival, consiguiendo la segunda victoria de su carrera en la UFC, dado que viene de una victoria por TKO ante el español <b>Chris Bernett</b> en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>. </p>
                    <p>Por su parte, el luchador polaco Lukasz Brzeski parece estar despidiendo de la compañía, dado que con esta nueva derrota, suma 5 peleas perdiendo de 6. </p>
                    {/* <h2>Clay Guida vs Chase Hooper</h2>
                    <p></p> */}
                    {/* <h2>Michael Chiesa vs Max Griffin</h2>
                    <p></p> */}
                    {/* <h2>Cody Durden vs Joshua Van</h2>
                    <p></p> */}
                    {/* <h2>Chris Weidman vs Eryk Anders</h2>
                    <p></p> */}
                    {/* <h2>¡Randy Brown vs Bryan Battle!</h2>
                    <p></p> */}
                    {/* <h2>Movsar Evloev vs Aljamain Sterling!</h2>
                    <p></p> */}
                    {/* <h2>Vicente Luque vs Themba Gorimbo</h2>
                    <p></p> */}
                    {/* <h2>¡Dominck Reyes vs Anthony Smith!</h2>
                    <p></p> */}
                    {/* <h2>Nate Landwehr vs Dooho Choi</h2>
                    <p></p> */}
                    {/* <h2>Bryce Mitchel vs Kron Gracie</h2>
                    <p></p> */}
                    {/* <h2>Ciryl Gane vs Alexander Volkov</h2>
                    <p></p> */}
                    {/* <h2>Shavkat Rakhmonov vs Ian Machado Garry</h2>
                    <p></p> */}
                    {/* <h2>Alexandre Pantoja vs Kai Asakura</h2>
                    <p></p> */}
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}