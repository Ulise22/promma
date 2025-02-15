import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/cannonier_rodrigues.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC Vegas 102: ¡Cannonier vs Rodrigues!',
    description: '',
    openGraph: {
        title: 'UFC Vegas 102: ¡Cannonier vs Rodrigues!',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-cannonier-rodrigues'
    }
}

export default function CannonierRodrigues () {
    return(
        <main>
            <ArticleHero title='UFC VEGAS 102: ¡Jared Cannonier vs Gregory Rodrigues!' subtitle='Noche de UFC en Las Vegas que además nos trae el enfrentamiento entre Calvin Kattar y el marroquí Youssef Zalal' image={hero} date='2025-02-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de MMA en el UFC APEX, donde habrá un total de 13 combates, entre los que destaca especialmente el evento estelar entre el veterano <b>Jared Cannonier</b> y el brasileño <b>Gregory Rodrigues</b>. Ambos vienen de rachas muy distintas, con Cannonier viniendo de 2 derrotas consecutivas, ante <b>Imavov</b> y la última ante el brasileño <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, por lo que buscará revertir la imagen dada hasta el momento ante un complicadísimo rival que viene de una racha bastante distinta, como lo es Gregory Rodrigues que viene de ganar sus últimos 3 enfrentamientos, con 2 de estas victorias siendo por la vía del nocaut. El brasileño no está ranqueado en la división de peso medio, por lo que tendrá su oportunidad de entrar a los rankings, y al top 10 de la división esta noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>¡Jacqueline Cavalcanti Derrota a Julia Avila Por Decisión Unánime!</h2>
                    <p>Cómoda victoria para la nacida en Brasil <b>Jacqueline Cavalcanti</b>, que partía como favorita por mucho en este combate y demostró el porqué, con un claro dominio durante los 3 asaltos, haciendo buen uso de su ventaja en la altura y el alcance, controlando el centro del octágono para conectar muchos más golpes que su rival durante el combate. De esta manera alcanza su cuarta victoria consecutiva en la división de peso gallo femenino, y sube puestos en los rankings. </p>
                    <p>Por su parte su rival, <b>Julia Avila</b>, sólo pudo limitarse a conectar patadas a la pierna de su rival y a concretar un sólo derribo que no pudo capitalizar. Para colmo, al final del segundo asalto recibió un corte en la ceja y en la nariz que la hicieron sangrar. Esto no fue un problema para que la estadounidense siguiera peleando, dado que pudo terminar el combate, pero de igual forma acabaría por perder por decisión unánime y anunciaría su retiro al finalizar el combate, dejando detrás un récord de profesional de 9-4 con sus 34 años. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}