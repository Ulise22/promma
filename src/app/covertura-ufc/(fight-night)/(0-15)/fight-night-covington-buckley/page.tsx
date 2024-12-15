import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-15/covington-vs-buckley.jpg'

export const metadata: Metadata = {
    title: 'Colby Covington vs Joaquin Buckley',
    description: '',
    openGraph: {
        title: 'Colby Covington vs Joaquin Buckley',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-colvington-buckley'
    }
}

export default function MoicanoSaintDenis () {
    return(
        <main>
            <ArticleHero title='UFC TAMPA: ¡Colby Covington vs Joquin Buckley!' subtitle='Noche de UFC en la ciudad de Tampa, Florida, que nos trae el regreso de Colby Covinton al octágono junto a Joquin Buckley' image={hero} date='2024-12-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos el último evento de UFC en el año, que nos trae como protagonistas al excampeón interino de peso wélter <Link href='/peleadores/colby-covington'>Colby Covington</Link> ante el estadounidense <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link>, que viene de 3 victorias este año, siendo la última ante <b>Wonderboy Thompson</b> en el <Link href='/covertura-ufc/ufc307'>UFC 307</Link>. </p>
                    <p>Además tendremos las presencias hispanas de la venezolana <b>Piera Rodríguez</b>, del mexicano <b>Fernando Padilla</b>, del español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link> y del peruano <b>Daniel Marcos</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Felipe Lima Derrota a Miles Johns</h2>
                    <p>El peleador brasileño de peso pluma de 26 años logra una gran victoria por decisión unánime, luego de dominar la totalidad del enfrentamiento, ante un Miles Johns que nada pudo hacer ante la cálidad de Lima, quien aprovechando su altura y su alcance, logro conectar más golpes que su rival, casi sin recibir golpes por parte de su rival. </p>
                    <h2>Sean Woodson Noquea a Fernando Padilla en el Primer Asalto</h2>
                    <p>El estadounidense logra una increíble victoria por nocaut en el primer asalto, a 2 segundos de que termine, ante el mexicano <b>Fernando Padilla</b>, siendo este el primer nocaut de la noche. </p>
                    <p>En un enfrentamiento donde se veía a los 2 rivales golpeándose de lo lindo, siendo ambos capaces de conectarse mutuamente, fue finalmente Woodson quien consiguió quedarse con la victoria, al ser capaz de golpear más limpio en la cabeza de su rival, que poco hizo por esquivar o por bloquear los golpes del luchador americano. </p>
                    {/* <h2>Joel Álvarez vs Drakkar Klose</h2>
                    <p></p> */}
                    {/* <h2>Michael Johnson vs Ottman Azaitar</h2>
                    <p></p> */}
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Navajo Stirling vs Tuco Tokkos</h2>
                    <p></p> */}
                    {/* <h2>Adrian Yanez vs Daniel Marcos</h2>
                    <p></p> */}
                    {/* <h2>Vitor Petrino vs Dustin Jacoby</h2>
                    <p></p> */}
                    {/* <h2>Manel Kape vs Bruno Silva</h2>
                    <p></p> */}
                    {/* <h2>Cub Swanson vs Billy Quarantillo</h2>
                    <p></p> */}
                    {/* <h2>Colby Covington vs Joaquin Buckley</h2>
                    <p></p> */}
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}