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
    title: 'UFC Seattle: ¡Henry Cejudo vs Song Yadong!',
    description: '',
    openGraph: {
        title: 'UFC Seattle: ¡Henry Cejudo vs Song Yadong!',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-cejudo-song'
    }
}

export default function CejudoSong () {
    return(
        <main>
            <ArticleHero title='UFC Seattle: ¡Henry Cejudo vs Song Yadong!' subtitle='' image={hero} date='2025-02-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de UFC en Seattle, que será encabezada por el ex doble campeón de la compañía, <b>Henry Cejudo</b>, quien ostentó los cinturones de peso mosca y peso gallo simultáneamente, y quien buscará recuperarse de su última derrota ante <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> enfrentando al luchador chino <b>Song Yadong</b>. </p>
                    <p>Además tendremos un montón de peleas interesantes en la cartelera estelar, con la pelea coestelar siendo encabezada por los estadounidenses <b>Brendan Allen</b> y <b>Anthony Hernandez</b>, quienes se encuentran ranqueados #9 y #12 respectivamente en peso medio. Contaremos también con la vuelta al octágono de uno de los mayores prospectos de peso pluma, como lo es <b>Jean Silva</b>, perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, quien estará peleando contra el armenio <b>Melsik Baghdasaryan</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>¡Nursulton Ruziboev Noquea a Eric McConico en el Segundo Asalto!</h2>
                    <p>Luego de un primer asalto que realmente tuvo muy poco acción, tuvimos lo mejor de la pelea en el segundo, cuando el luchador de Uzbekistán, Ruziboev, saldría con todo en busca de la finalización, alcanzando esta al noquear a su rival a los 33 segundos del asalto. El uzbeko logra de esta manera recuperarse de su última derrota sufrida ante <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link>. </p>
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