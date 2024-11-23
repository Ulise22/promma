import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-15/yan-vs-figueiredo.jpg'

export const metadata: Metadata = {
    title: 'Petr Yan vs Deiveson Figueiredo ',
    description: '',
    openGraph: {
        title: 'Petr Yan vs Deiveson Figueiredo ',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-yan-figueiredo'
    }
}

export default function MoicanoSaintDenis () {
    return(
        <main>
            <ArticleHero title='UFC CHINA: ¡Petr Yan vs Deiveson Figueiredo! ¡Yan Xiaonan vs Tabatha Ricci!' subtitle='Noche de UFC en China donde tenemos un montón de peleas espectaculares, que incluyen la pelea entre Oezdemir contra Carlos Ulberg, y la de Song Kenan contra Muslim Salikhov.' image={hero} date='2024-11-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de UFC en la región de Macao en China, con una obvia presencia de luchadores del país asiático. Como evento estelar tenemos a 2 de los mayores contendientes al título de la división de peso gallo como lo son <b>Petr Yan</b> y <b>Deiveson Figueiredo</b>, que se enfrentarán en una pelea a 5 asaltos. Además, como evento coestelar, tendremos el enfrentamiento femenino de peso paja entre la china <Link href='/mujeres/yan-xiaonan'>Yan Xianan</Link> y la brasileña <b>Tabatha Ricci</b>. </p>
                    <h2>Zhang Mingyang Noquea a Ozzy Diaz en el Primer Asalto</h2>
                    <p>En la primera pelea de la cartelera estelar, el peleador chino <b>Zhang Mingyan</b>, quien esta en su segunda pelea en la UFC, luego de lo que fue su debut en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, continua sin decepcionar, consiguiendo una nueva victoria por la vía del nocaut en el primer asalto de la pelea. </p>
                    <p>Se pudo ver a un Mingyang bastante tranquilo al inicio de la pelea, que con paciencia supo esperar el momento adecuado para atacar de la mejor manera, consiguiendo de esta manera su segunda victoria consecutiva por la vía del nocaut en sus 2 primeras peleas en la UFC. </p>
                    <h2>Vokan Oezdemir vs Carlos Ulberg</h2>
                    <p></p>
                    <h2>Wang Cong vs Gabriella Fernandes</h2>
                    <p></p>
                    <h2>Song Kenan vs Muslim Salikhov</h2>
                    <p></p>
                    <h2>Yan Xiaonan vs Tabatha Ricci</h2>
                    <p></p>
                    <h2>Petr Yan vs Deiveson Figueiredo</h2>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}