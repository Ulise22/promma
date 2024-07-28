import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/20-30/ufc304-hero.jpg'

export const metadata: Metadata = {
    title: 'UFC 304',
    description: '',
    openGraph: {
        title: 'UFC 304',
        description: '',
        url: 'https://fullmma.org/noticias/ufc304'
    }
}

export default function UFC303 () {
    return(
        <main>
            <ArticleHero title='UFC 304: ¡Leon Edwards vs Belal Muhammad! ¡Tom Aspinall vs Curtis Blaydes!' subtitle='Noche de UFC con 2 cinturones en disputa, siendo la pelea de Leon Edwards vs Belal Muhammad la estelar, con la pelea por el cinturon interino de peso pesado como coestelar.' image={hero} date='2024-07-27' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este 27 de agosto tenemos noche de UFC en Manchester, Reino Unido, con una cartelera repleta de luchadores ingleses y británicos, siendo el campeón de peso wélter <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, el encargado de encabezar esta cartelera, realizando su segunda defensa del título ante el retador <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, quien necesitó de acumular una racha de 8 victorias consecutivas para ganarse esta oportunidad por el cinturón de la división.</p>
                    <p>La pelea coestelar de esta carrera estará protagonizada por el actual campeón interino de la división de peso pesado, <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>, quien defenderá el cinturón ante el estadounidense <b>Curtis Blaydes</b>, en una pelea que al igual que la estelar, será una revancha entre 2 peleadores que ya se habían enfrentado antes.</p>
                    <h2>Arnold Allen se lleva la pelea contra Giga Chikadze</h2>
                    <p>El inglés hizo pesar su localía remontando una pelea que parecía empezar perdiendo, mostrándose cada vez más cómodo dentro del octagono a medida pasaban los minutos, siendo el tercer y último asalto en el que mostró su mejor cara, conectando varios golpes que se hicieron sentir en su rival. </p>
                    <p>Con esta pelea, Allen consigue la victoria número 20 de su carrera, cortando con una racha de 2 derrotas consecutivas, ante el ruso <b>Movsar Evloev</b>, y la sufrida ante <Link href='/peleadores/max-holloway'>Max Holloway</Link></p>
                    <h2>Christian Duncan vs Gregory Rodriguez</h2>
                    <p>En proceso...</p>
                    <h2>Bobby Green vs Paddy Pimblett</h2>
                    <p>En proceso...</p>
                    <h2>Tom Aspinall vs Curtis Blaydes</h2>
                    <p>En proceso...</p>
                    <h2>Leon Edwards vs Belal Muhammad</h2>
                    <p>En proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}