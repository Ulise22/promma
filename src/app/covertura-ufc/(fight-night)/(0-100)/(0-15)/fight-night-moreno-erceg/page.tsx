import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufc_mexico.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Mexico: ¡Brandon Moreno vs Steve Erceg!',
    description: 'Trmeneda cartelera tenemos acá en latinoamérica, en el la Arena CDMX, en México, encabezada por el excampeón de la UFC Brandon Moreno que se enfrentará al australiano Steve Erceg',
    openGraph: {
        title: 'UFC Mexico: ¡Brandon Moreno vs Steve Erceg!',
        description: 'Trmeneda cartelera tenemos acá en latinoamérica, en el la Arena CDMX, en México, encabezada por el excampeón de la UFC Brandon Moreno que se enfrentará al australiano Steve Erceg',
        url: 'https://fullmma.org/covertura-ufc/fight-night-moreno-erceg'
    }
}

export default function MorenoErceg () {
    return(
        <main>
            <ArticleHero title='UFC México: ¡Brandon Moreno Derrota a Steve Erceg por Decisión Unánime!' subtitle='¡Kevin Borjas Derrota a Ronaldo Rodriguez en una Excelente Pelea del Peruano! ¡Raúl Rosas Jr. Gana su Pelea por Decisión Unánime ante Vince Morales!' image={hero} date='2025-03-29' author={null} updatedDate={null} />
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
                    <h2>Victoria para el Brasileño Melquizael Costa ante Christian Rodriguez</h2>
                    <p>El brasileño Melquizael Costa se lleva una controvertida victoria por decisión unánime ante el mexicano <b>Christian Rodriguez</b>, luego de que los 3 jueces puntuaran la pelea 29-28 a favor del de Brasil, logrando su segunda victoria en 35 días en lo que fue un combate muy cerrado y que tranquilamente podría haberse ido a favor del mexicano, quien tristemente cayó derrotado por decisión de los jueces. </p>
                    <h2>Ateba Gautier Noquea a José Daniel Medina en el Primer Asalto</h2>
                    <p>Excelente victoria del africano Ateba Gautier, quien de un rodillazo en la cabeza, logra noquear al luchador boliviano en el primer asalto, logrando una tremenda victoria en su debut en la UFC, propinándole además su primer derrota por nocaut a Medina, quien jamás había perdido por esta vía hasta hoy. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Kevin Borjas Derrota a &quot;Lazy Boy&quot; Ronaldo Rodriguez</h2>
                    <p>El peruano Kevin Borjas consigue una espectacular victoria ante el mexicano Ronaldo Rodriguez, demostrando tener un gran poder en las manos, sentando varias veces a su rival con esa mano derecha que fue capaz de conectar cuando quiso. </p>
                    <p>Siendo el claro dominador de la pelea, Kevin Borjas ganó la pelea por decisión unánime, ganando los 3 asaltos que duró la pelea, atravesando varias adversidades, como el público en contra, un excelente rival que tenía en frente, y el handicap de pelear con un luchador que no dió el peso y que por ende llegaba con mayor ventaja a este enfrentamiento. Sin embargo, Kevin fue capaz de lidiar con todo llevándose su primer victoria en la UFC, merecídisima. </p>
                    <h2>David Martinez Debuta Noqueando a Saimon Oliveira en el Primer Asalto</h2>
                    <p>Tremenda victoria del mexicano David Martínez, quien consigue ganar en su debut en la UFC por la vía del nocaut en el primer asalto, luego de conectar un rodillazo a la cabeza de su rival, y de rematarlo a golpes para que el árbitro los separe y sellar de esta forma su victoria por TKO. </p>
                    <h2>Raúl Rosas Jr. se Lleva la Victoria por Decisión ante Vince Morales</h2>
                    <p>En un combate donde el joven mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link> logró dominar los primeros 2 asaltos del combate, concretando sus derribos de forma exitosa y logrando dominar claramente el combate cuando este se dió en el suelo, solamente sufrió el último asalto, donde sufrió un derribo de su rival, que lo puso en aprietos en un par de ocasiones, cuando estuvo cerca de someterlo. Sin embargo, el luchador de México demostró tener corazón, pasando estos momentos en los que se complicó la pelea para finalmente llevarse la victoria por decisión unánime. </p>
                    <h2>Edgar Chaires Somete a Cj Vergara en el Primer Asalto</h2>
                    <p>El mexicano Edgar Chaires consigue una excelente victoria ante el estadounidense Cj Vergara, luego de conectar unos golpes durísimos que derribaron a su rival, aprovechando esto para buscar el cuello de su rival, consiguiendo la victoria por la vía de la sumisión con un mataleón. </p>
                    <h2>Manuel Torres Noquea a Drew Dober en el Primer Asalto</h2>
                    <p>Espectacular victoria del mexicano <b>Manuel Torres</b>, quien fue capaz de noquear a un rival durísimo del peso ligero como <b>Drew Dober</b> en el primer asalto de la pelea. Consiguiendo ganar en su casa y reponerse de lo que fue su última pelea en el <Link href='/covertura-ufc/ufc306'>UFC 306</Link>, que acabó en derrota ante el chileno <b>Bahamondes</b>. </p>
                    <h2>Brandon Moreno Derrota a Steve Erceg por Decisión Unánime</h2>
                    <p>Termina el evento con esta pelea estelar que nos trae al excampeón mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link> llevándose la victoria por decisión unánime, luego de ganar y dominar los primeros 2 asaltos de la pelea, y de ganar de forma más apretada los últimos 2 asaltos. De esta manera, el bicampeón de peso mosca queda en una posición muy favorable para cumplir su objetivo de ser el 3 veces campeón de su división, haciendo méritos suficientes para disputarle el campeonato al actual campeón brasileño <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}