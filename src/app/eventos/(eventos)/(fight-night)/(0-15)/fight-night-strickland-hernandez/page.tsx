import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/strickland_hernandez.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Houston: ¡Sean Strickland vs Anthony Hernandez!',
    description: 'Evento de UFC en Houston, Texas, con Sean Strickland enfrentando al luchador de origen mexicano Anthony Hernandez en la busqueda de una oportunidad por el título de peso mediano.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstrickland_hernandez.0bbcf031.webp&w=828&q=65',
        title: 'UFC Houston: ¡Sean Strickland vs Anthony Hernandez!',
        description: 'Evento de UFC en Houston, Texas, con Sean Strickland enfrentando al luchador de origen mexicano Anthony Hernandez en la busqueda de una oportunidad por el título de peso mediano.',
        url: 'https://fullmma.org/eventos/fight-night-strickland-hernandez'
    }
}

export default function StricklandHernandez () {
    return(
        <main>
            <ArticleHero title='UFC Houston: ¡Sean Strickland vs Anthony Hernandez!' subtitle='¡Geoff Neal vs Uros Medic! ¡Dan Ige vs Melquizael Costa!' image={hero} date='2026-02-21' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de UFC tenemos en Houston, Texas, encabezado por el luchador más estadounidense que hay <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien está ranqueado #3 en la división de peso medio, y luego de su derrota en la pelea por el título ante <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> busca volver a la victoria enfrentando al luchador estadounidense de origen mexicano <b>Anthony Hernandez</b>, quien está #4 en la división y viene de una racha brutal de 8 victorias consecutivas. </p>
                    <p>Además, en la pelea coestelar tendremos el regreso del #12 de peso wélter, <b>Geoff Neal</b>, quien se enfrentará al serbio <b>Uros Medic</b>, quien está en busca de un lugar en los rankings. También estará el histórico <b>Dan Ige</b>, defendiendo su posición en los rankings de peso pluma ante el brasileño <b>Melquizael Costa</b>. Finalmente, una pelea destacada de la cartelera estelar será la que tengan los #7 y #9 de pesos pesados, <b>Serghei Spivac</b> y <b>Ante Delija</b>, en un combate que promete terminar en KO. </p>
                    <p>Por último contaremos con presencia latina en la cartelera preliminar, con el cubano invicto <b>Yadier del Valle</b> haciendo presencia para enfrentar al estadounidense <b>Jordan Leavitt</b> en peso pluma. Y con la panameña <b>Joselyne Edwards</b> enfrentándose a la #12 de la división peso gallo femenino <b>Nora Cornolle</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Carli Judice Derrota a Juliana Miller por Decisión Unánime</h2>
                    <p>Gran victoria por parte de la estadounidense <b>Carli Judice</b>, quien tuvo unos muy buenos primer y segundo asalto para terminar llevándose la victoria por decisión unánime con un puntaje de 29-28 ante su compatriota <b>Juliana Miller</b>. </p>
                    <h2>Jordan Leavitt Derrota a Yadier del Valle por Decisión Unánime</h2>
                    <p>Victoria para el luchador estadounidense <b>Jordan Leavitt</b>, que le quita el invicto al cubano <b>Yadier Del Valle</b>, luego de mantenerlo contra la reja y ganar control en el suelo a lo largo del combate. El punto fuerte de Del Valle claramente era el striking, y su rival sabiendo ver esto, evito a toda costa entrar en el intercambio con su rival, resultando finalmente en una victoria para el americano por decisión unánime 29-28. </p>
                    <h2>Jean-Paul Lebosnoyani Derrota a Phil Rowe por Decisión Dividida</h2>
                    <p>En la que hasta ahora es la mejor pelea de la noche <b>Jean-Paul Lebosnoyani</b> logra hacerse con la victoria en un combate que dominó claramente, donde sorprendentemente uno de los jueces no lo vió como ganador, pero que finalmente con toda justicia temrinó ganando, luego de conectar más y mejores golpes y de ser superior incluso cuando la pelea se dió en el piso. </p>
                    <h2>Punahele Soriano Derrota a Ramiz Brahimaj por Decisión Unánime</h2>
                    <p>En una pelea cerradísima, que fue bastante sucia, donde ambos luchadores se hicieron bastante daño, conectando varios golpes contundentes a cada uno, y derribándose mutuamente en varias ocasiones, quien salió victorioso fue <b>Punahele Soriano</b>, que por decisión unánime se llevó la victoria por sobre su rival y compatriota <b>Ramiz Brahimaj</b>. </p>
                    <h2>¡Joselyne Edwards Somete a Nora Cornolle en el Segundo Asalto!</h2>
                    <p>Espectacular pelea de la panameña <b>Joselyne Edwards</b>, quien consigue vengarse en su revancha ante la francesa <b>Nora Cornolle</b>, primero golpeándola hasta casi noquearla, y luego conectando un mataleón para finalizar por sumisión en el segundo asalto de la pelea. De esta manera la luchadora latinoamericana logra la primer finalización de la noche, y se asegura el bono de los $25k. </p>
                    <h2>Alden Coria Derrota a Luis Gurule por Decisión Unánime</h2>
                    <p>Gran pelea de <b>Alden Coria</b>, que fue muy superior a su rival <b>Luis Gurule</b>, conectando su jab constantemente, sabiendo en que momentos golpear y esquivando la mayoría de los golpes que lanzaba su rival, pese a sufrir un par de derribos bastante potentes en el segundo asalto, él mismo fue capaz de conectar unos cuantos en el último asalto. De esta forma, el compañero de entrenamiento del campeón <Link href='/peleadores/joshua-van'>Joshua Van</Link>, se lleva la victoria por decisión unánime 30-27. </p>
                    <h2>Alibi Idiris Derrota a Ode Osbourne por Decisión Unánime</h2>
                    <p>El luchador kazajo <b>Alibi Idiris</b> obtiene una merecida victoria por decisión unánime luego de lo que fue una actuación dominante ante su rival de Jamaica <b>Ode Osbourne</b>, con quien hizo lo que quiso, mostrando especialmente un nivel superlativo en el ground & pound, con el que pudo hacerle mucho daño a su rival, castigándolo hasta llevarlo a la decisión luego de los 3 asaltos, donde salió victorioso. </p>
                    <h2>Carlos Leal Derrota a Chidi Njokuani por Decisión Unánime</h2>
                    <p>En la mejor pelea de toda la cartelera preliminar, el luchador brasileño <b>Carlos Leal</b> logra hacerse con la victoria por encima de <b>Chidi Njokuani</b>, luego de dar una masterclass de striking, conectando con un volumen que pocos peleadores tienen, con una presición y fuerza que llevan a uno a sorprenderse de que la pelea no terminara en nocaut. Sólo el primer asalto es de lo mejor que hemos visto en toda la noche, con el brasileño conectando casi que 70 golpes, que por poco no noquearon a su rival. De esta manera, cerramos la cartelera preliminar de la mejor manera con una pelea para el recuerdo. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Michel Pereira Derrota a Zach Reese Por Decisión Dividida</h2>
                    <p>Tremenda manera de iniciar esta cartelera estelar, con una pelea espectacular que nos regalaron <b>Michel Pereira</b> y <b>Zach Reese</b>, quien estuvieron dispuestos a intercambiar golpes desde el primer momento del combate, otorgándonos la que es uno de los mejores combates de toda la cartelera. Finalmente, por decisión dividida, quien terminó llevándose la victoria fue el brasileño <b>Michel Pereira</b>, quien pese a que también recibió bastante, fue quien conectó los mejores golpes del combate, llegando a derribar a su rival con un golpe en el primer asalto. </p>
                    <h2>Jacobe Smith Noquea a Josiah Harrell en el Primer Asalto</h2>
                    <p>Tremenda victoria del estadounidense <b>Jacobe Smith</b>, quien consigue el primer nocaut de la noche ante el debutante <b>Josiah Harrell</b>. Ambos luchadores llegaban invictos a este combate con un récord de 11-0, sin embargo el único que será capaz de conservar su 0 será Smith, quien luego de un derribo que lo dejó por encima, fue capaz de castigar con golpes a su rival desde arriba que lo dejarían KO, consiguiendo la victoria y el hasta ahora único nocaut de la noche. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}