import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufc_seattle.jpg'
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
            <ArticleHero title='UFC Seattle: ¡Henry Cejudo vs Song Yadong!' subtitle='¡Brendan Allen vs Anthony Hernandez! ¡Jean Silva vs Melsik Baghdasaryan!' image={hero} date='2025-02-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de UFC en Seattle, que será encabezada por el ex doble campeón de la compañía, <b>Henry Cejudo</b>, quien ostentó los cinturones de peso mosca y peso gallo simultáneamente, y quien buscará recuperarse de su última derrota ante <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> enfrentando al luchador chino <b>Song Yadong</b>. </p>
                    <p>Además tendremos un montón de peleas interesantes en la cartelera estelar, con la pelea coestelar siendo encabezada por los estadounidenses <b>Brendan Allen</b> y <b>Anthony Hernandez</b>, quienes se encuentran ranqueados #9 y #12 respectivamente en peso medio. Contaremos también con la vuelta al octágono de uno de los mayores prospectos de peso pluma, como lo es <b>Jean Silva</b>, perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, quien estará peleando contra el armenio <b>Melsik Baghdasaryan</b>. Sumado a esto, contaremos con la presencia del veterano de peso gallo, <b>Rob Font</b>, quien se enfrentará al brasileño <b>Jean Matsumoto</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>¡Nursulton Ruziboev Noquea a Eric McConico en el Segundo Asalto!</h2>
                    <p>Luego de un primer asalto que realmente tuvo muy poco acción, tuvimos lo mejor de la pelea en el segundo, cuando el luchador de Uzbekistán, Ruziboev, saldría con todo en busca de la finalización, alcanzando esta al noquear a su rival a los 33 segundos del asalto. El uzbeko logra de esta manera recuperarse de su última derrota sufrida ante <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link>. </p>
                    <h2>¡Austin Vanderford Noquea a Nikolay Veretennikov en el Segundo Asalto!</h2>
                    <p>Debut con nocaut para el estadounidense Vanderford ante el luchador de Kazajistán <b>Nikolay Veretennikov</b>, en un combate que dominó completamente. </p>
                    <p>Consiguiendo dominar en el suelo a su rival en el primer asalto, castigándolo desde arriba e intentando una sumisión que cerca estuvo de concretarse. En el segundo asalto hubo más de lo mismo, solamente que esta vez los golpes a su rival estaban siendo demasiado castigo, llevando al árbitro a parar la pelea para proclamar como ganador al luchador de 34 años <b>Austin Vanderford</b>, quien estaba debutando en la UFC. </p>
                    <h2>¡Tremendo KO de Ricky Simon a Javid Basharat en el Primer Asalto!</h2>
                    <p>Espectacular KO del estadounidense Ricky Simon, que estaba teniendo un buen combate, logrando un derribo ante su rival, y que pese a estar conectando menos golpes, conectó los que importan, dado que fue su mano la que mandó a la lona a Basharat. De esta manera, Ricky Simon logra terminar con una racha negativa de 3 derrotas consecutivas, volviendo a ganar un combate, cosa que no hacía desde 2022. </p>
                    <h2>¡Mansur Abdul-Malik Noquea a Nick Klein!</h2>
                    <p>Tremenda victoria del estadounidense Mansul Abdul-Malik, quien fue capaz de darle la vuelta a un combate que se le había complicado mucho en el primer asalto, con un golpe que lo complicó, dejándolo mareado, cerca de ser finalizado. </p>
                    <p>Sin embargo, pese al complicado inicio, Abdul-Malik fue capaz, casi que a base de fuerza bruta, de dar vuelta la pelea al conectar unos durísimos golpes, llevando al suelo a su rival de un empujon, y castigándolo hasta que el árbitro puso fin a la paliza que estaba sufriendo Nick Klein. De esta forma, Mansur alcanza un récord profesional invicto de 8-0, con 2 victorias en la UFC, y con todas sus victorias siendo por finalización. </p>
                    <h2>¡Melquizael Costa Somete con una Guillotina a Andre Fili!</h2>
                    <p>Tremenda victoria del brasileño Melquizael Costa ante el estadounidense nacido en Seattle Andre Fili. En una pelea que Costa estaba dominando y estaba ganando claramente, conectando varias patadas a su rival, terminaría siendo derribado por el estadounidense, pero sabría aprovechar esta oportunidad para conectar una guillotina ante su rival, que lo haría tapear y le daría la victoria por la vía de la sumisión en el primer asalto, concretando de esta forma la primer sumisión de la noche. </p>
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