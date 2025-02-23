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
            <ArticleHero title='UFC Seattle: ¡Henry Cejudo vs Song Yadong!' subtitle='¡Jean Silva Noquea a Melsik Baghdasaryan en el Primer Asalto! !Anthony Hernandez Derrota a Brendan Allen por Decisión Unánime! ' image={hero} date='2025-02-22' author={null} updatedDate='2025-02-23' />
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
                    <h2>¡Ion Cutelaba Somete a Ibo Aslam en el Primer Asalto!</h2>
                    <p>Tremenda pelea la que nos dieron estos 2 peleadores en el último combate de las preliminares, que siendo bastante caótico, con golpes yendo para ambos lados, quien finalmente se hizo con la victoria es el luchador de Moldavia, <b>Ion Cutelaba</b>, quien fue capaz de primer conectar un derribo, para posteriormente capitalizar este, al ser capaz de someter a su rival en el primer asalto. </p>
                    <p>De esta forma, terminamos todas las peleas preliminares con 7 finalizaciones en 7 peleas, con 5 de estas siendo por nocaut, y con 2 siendo por sumisión. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>¡Alonso Menifield Derrota al Debutante Julius Walker!</h2>
                    <p>Tremenda pelea entre el debutante Julius Walker, y el ranqueado #15 de la división de peso semipesado Alonso Menifield, que termina decantándose a favor del luchador más experimentado, que luego de 3 asaltos es capaz de hacerse con la victoria por decisión dividida, quitándole el invicto de 6-0 a su rival. </p>
                    <p>Lo que tuvimos como primer combate de la cartelera estelar fue un primer asalto muy activo por parte de ambos luchadores, pero que no pudieron dar el 100% durante toda la pelea, debido a que para el segundo asalto ambos ya estaban muy cansados. De igual forma, Menifield conectó los mejores golpes y por eso 2 de los jueces lo vieron como el ganador de la pelea. </p>
                    <h2>¡Jean Silva Noquea a Melsik Baghdasaryan en el Primer Asalto!</h2>
                    <p>Tremendo lo conseguid por el brasileño <b>Jean Silva</b>, quien con la inteligencia que caracteriza a su equipo, supo esperar y tener paciencia a lo largo del primer asalto, esquivando más golpes de los que daba, para finalmente presionar en el último minuto del primer asalto, cuando conectaría 2 manos a la cabeza de su rival que lo tumbarían al suelo. De ser por el brasileño la cosa hubiera terminado ahí, pero al árbitro no parar la pelea, necesitó de castigar un poco más a su rival para que finalmente le den la victoria, a este peleador que hasta el momento ha ganado todas sus peleas en la UFC, y quien parece tener un futuro brillante en la división de peso pluma. </p>
                    <h2>Rob Font Derrota a Jean Matsumoto por Decisión Dividida</h2>
                    <p>Espectacular pelea la que nos dieron estos 2 peleadores, siendo de las mejores que nos trajó esta noche. El combate fue bastante cerrado y podría haber ido para cualquier lado, pero finalmente el ganandor fue el veterano Rob Font por decisión dividida, siendo el peleador que claramente ganó el tercer asalto, donde vimos la mejor cara del puertoriqueño, quien con un codazo cerca del final le provocó un corte a su rival que le permitió desplegar todo su striking para asegurar el asalto. Fue el segundo asalto el más cerrado de todos, y el que seguramente haya generado polémica entre los jueces, con 2 de ellos dándoselo a Rob Font para ganar la pelea y conseguir su segunda victoria consecutiva. </p>
                    <p>De igual forma el brasileño Jean Matsumoto hizo un muy buen papel, en un combate que aceptó con 2 semanas de anticipación, logró ganar sin dudas el primer asalto de la pelea, conectando un montón de derribos, y dando espectáculo para los fanaticos que lo vimos esta noche. </p>
                    <h2>¡Anthony Hernandez Derrota a Brendan Allen!</h2>
                    <p>Esta pelea arbitrada por <Link href='/articulos/arbitro-de-ufc-con-barba'>Mike Beltrán</Link> se la termina llevando Anthony Hernandez, luego de un sufrido primer asalto para él, supo darle la vuelta al combate, concretando varios derribos, y rompiendo récords históricos en este aspecto, para lograr ganarle la posición constantemente a Brendan Allen que nada pudo hacer ante la lucha de Hernandez. Con esta victoria, Anthony Hernandez consigue su séptima victoria consecutiva en la UFC</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}