import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufc_mexico.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC Mexico: ¡Brandon Moreno vs Steve Erceg!',
    description: '',
    openGraph: {
        title: 'UFC Mexico: ¡Brandon Moreno vs Steve Erceg!',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-moreno-erceg'
    }
}

export default function MorenoErceg () {
    return(
        <main>
            <ArticleHero title='UFC México: ¡Brandon Moreno vs Steve Erceg!' subtitle='¡Manuel Torres vs Drew Dober! ¡Raúl Rosas Jr. vs Vince Morales!' image={hero} date='2025-03-29' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremenda cartelera tenemos en esta noche de UFC, que vuelve a Latinoamérica organizando un evento en la Ciudad de México en la Arena CDMX. Trayéndonos como evento estelar la pelea en peso mosca entre el excampeón mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, quien enfrentará al excontendiente <b>Steve Erceg</b>, que actualmente se encuentra ranqueado #8 en su división. </p>
                    <p></p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Marquel Mederos Derrota a Austin Hubbard Por Decisión Dividida</h2>
                    <p>El estadounidense se lleva la victoria por la vía de la decisión, en lo que fue un combate muy competido, cosa que llevó a que ni siquiera los jueces se pusieran de acuerdo de forma unánime. De igual manera, a mi parecer, Marquel Maderos ganó el primer y tercer asalto de la pelea, conectando más golpes y logrando puntuar de esta forma, mientras que su rival Austin Hubbard ganó el segundo asalto, dominando la espalda de su rival en la lucha, estando cerca incluso de conectar un mataleón para someter a su rival. De esta forma, Marquel Mederos se convierte en el ganador de la primera pelea de la noche. </p>
                    <h2>Jamall Emmers Noquea a Gabriel Miranda en el Primer Asalto</h2>
                    <p>El estadounidense se impone sobre el brasileño en el primer asalto de la pelea, luego de escapar un intento de sumisión por parte de Miranda, logrando mostrar su supeioridad en la pelea de pie, con un striking muy superior al de su rival, logrando un knockdown que sentó a su rival, y consiguiendo el TKO unos pocos minutos después, cosa que le daría a Jamall Emmers la victoria y la primera finalización de la noche. </p>
                    <h2>Rafa García Derrota a Vinc Pichel Por Decisión Unánime</h2>
                    <p>Hermosa pelea la que nos dieron estos 2 peleadores. En un combate que tenía como protagonistas al primer mexicano de la cartelera, y al hombre más viejo de esta cartelera, quien terminó por llevarse la pelea fue Rafa García, quien por decisión unánime se convirtió en el ganador del encuentro. </p>
                    <p>Con un claro dominio por parte del mexicano, se mostró muy bien en la pelea de pie, donde supo conectar varias combinaciones de golpes muy vistosas ante su rival. Aunque con una ligera bajada de rendimiento en el segundo asalto, finalmente supo guardarse la pelea en el bolsillo, concretando un derribo en el último minuto del combate para castigar desde el suelo a Vinc Pichel. </p>
                    <h2>Loopy Godinez Derrota a Julia Polastri por Decisión Unánime</h2>
                    <p>Espectacular pelea la que nos dierons estas 2 luchadoras, que terminó en la victoria para la mexicana <b>Loopy Godinez</b> por sobre la brasileña, quien por decisión unánime se proclama ganadora y corta con una racha negativa de 2 derrotas consecutivas. </p>
                    <p>Habiendo dominado completamente el primer y segundo asalto, la mexicana sufrió un poco más en el tercer asalto, donde hubo un mayor intercambio de golpes, en el que ambas peleadoras dieron todo, regalándonos uno de los mejores asaltos vistos en una pelea femenina en mucho tiempo. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}