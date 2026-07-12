import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc329.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 329: ¡Conor McGregor vs Max Holloway!',
    description: "Histórico regreso de Conor McGregor tras 5 años para enfrentar a Max Holloway en una revancha épica en el UFC 329. ",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc329.a8e02595.webp&w=828&q=65',
        title: 'UFC 329: ¡Conor McGregor vs Max Holloway!',
        description: "Histórico regreso de Conor McGregor tras 5 años para enfrentar a Max Holloway en una revancha épica en el UFC 329. ",
        url: 'https://fullmma.org/eventos/ufc329'
    }
}

export default function UFC329 () {
    return(
        <main>
            <ArticleHero title="UFC 329: ¡Conor McGregor vs Max Holloway! ¡Paddy Pimblett vs Benoit Saint Denis!" subtitle='¡Cory Sandhagen vs Mario Bautista! ¡Brandon Royval vs Loneer Kavanagh!' image={hero} date='2026-07-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Histórica cartelera tenemos el día de hoy protagonizada por la mayor estrella de nuestro deporte que pone fin a su descanso de 5 años, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, quien con su regreso se roba toda la atención y el show, haciéndolo en una revancha ante un viejo conocido como lo es <Link href='/peleadores/max-holloway'>Max Holloway</Link>, con quien se volverá a enfrentar 13 años después, recordando que en aquella ocasión ganó el irlandés por decisión unánime en una actuación dominante. Por si esto fuera poco, gran parte del futuro de la división de peso ligero se define hoy, cuando 2 de los peleadores jovenes más importantes de las 155lbs se enfrenten en la coestelar, con el francés #5 <Link href='/peleadores/benoit-saint-denis'>Benoit Saint Denis</Link> enfrentando al inglés #6 <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, en lo que promete ser una grandísima pelea. </p>
                    <p>Además, en la división de peso gallo se enfrentarán el #4 <b>Cory Sandhagen</b> ante su compatriota estadounidense <b>Mario Bautista</b>, que está en la posición #7 de los rankings. Otro luchador joven inglés tendrá la oportunidad de lucirse hoy con <b>Leoneer Kavanagh</b> enfrentando a <b>Brandon Royval</b>, con la chance de entrar en el top 5 de la división de peso mosca, y de candidatearse al título de la división. Finalmente, esta cartelera está tan cargada, que el excampeón de peso mediano <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> tendrá que competir en las preliminares, subiendo de división a peso semipesado, y siendo bienvenido por el #12, el ruso <b>Nikita Krylov</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Alessandro Costa Somete a Cody Durden en el Primer Asalto</h2>
                    <p>Espectacular manera de comenzar esta gran cartelera. Pese a que Cody había comenzado haciendo un buen trabajo, constrolando la distancia para golpear y evitar ser golpeado, se notaba que el brasileño <b>Alessandro Costa</b> necesitaba de menos para dañar a su rival, logrando derribarlo en el segundo asalto luego de un mal pateo de Cody que lo hizo tropezar, que el brasileño aprovechó para tomarle la espalda y finalmente conectar un mataleón para acabar con la pelea por sumisión en el segundo asalto. </p>
                    <h2>Ryan Gandra Noquea a Zachary Reese en el Primer Asalto</h2>
                    <p>Gran victoria para el brasileño <b>Ryan Gandra</b>, quien consigue el primer nocaut de la noche al conectar un volado con la izquierda que acarició la mandibula de su rival estadounidense para tumbarlo en el suelo. Posterior a esto, el brasileño se avalanzó sobre su rival para rematarlo a golpes y finalmente ganar por TKO en el primer asalto de la pelea. </p>
                    <h2>Farid Basharat Derrota a John Garza por Decisión Unánime</h2>
                    <p>Buenísima pelea la que acabamos de presenciar, la mejor desde el punto de vista técnico en lo que va de cartelera, con un invicto <b>Basharat</b> defendiendo su #15 puesto en los rankings de peso gallo ante un joven <b>John Garza</b> que estaba debutando en la compañía, sin mostrar ningún tipo de respeto al peleador más experimentado. Finalmente el ganador fue <b>Farid Basharat</b>, quien conectó muy buenos golpes, pero que especialmente fue capaz de derribar en varias ocasiones a su rival, controlándolo en el suelo, y cerrando de esta manera la pelea para no correr ningún tipo de riesgos durante el último minuto del combate. De igual forma, es para destacar la actuación de Garza, que aunque combatió ante un rival a priori superior, con más experiencia, invicto, y clasificado en los rankings, dió una pelea mucho más pareja de los esperado. </p>
                    <h2>Damian Pinas Noquea a Cesar Almeida en el Primer Asalto</h2>
                    <p>Brutal nocaut del luchador de Aruba <b>Damian Pinas</b>, que con un brutal derechazo tumbó de inmediato al brasileño <b>Cesar Almeida</b>, dejándolo KO y negándose a dar otro golpe para rematar, hasta que el árbitro paró la pelea con el brasileño ya noqueado para declarar como ganador a Damian Pinas.</p>
                    <h2>Wang Cong Derrota a Tracy Cortez por Decisión Unánime</h2>
                    <p>Muy buena victoria para la luchadora china <b>Wang Cong</b>, quien mediante una gran cantidad de patadas a la pierna delantera de <b>Tracy Cortez</b>, fue capaz de hacer mucho daño, mermando la capacidad de respuesta de la estadounidense a lo largo del combate. Y finalmente, aunque a la asiática se le descontó un punto por dar un rodillazo ilegal, fue capaz de llevarse la victoria cómodamente al ganar los 3 asaltos del combate, con la pelea terminando en favor de Cong 29-27. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Luke Riley Noquea a Kai Kamaka III</h2>
                    <p>Gran nocaut del luchador inglés <b>Luke Riley</b> que con un derechazo tiró a su rival al suelo, y aunque este fue capaz de ponerse de pie, recibió una catarata de golpes por parte del europeo que llevó al árbitro a terminar la pelea antes de que el estadounidense siguir recibiendo más daño, ganando de esta forma la pelea por TKO en el primer asalto, extendiendo su récord a 14-0. </p>
                    <h2>Adrian Yanez Noquea a Cody Garbrandt en el Primer Asalto</h2>
                    <p>El estadounidense <b>Adrian Yanez</b> se suma al club consiguiendo otra finalización por nocaut en el primer asalto, con una victoria importantísima ante el excampeón de la división de peso gallo <b>Cody Garbrandt</b>, a quien fue capaz de tumbar con una combinación súper precisa de 4 golpes que fueron directo a la cabeza, incluso cuando el excampeón estaba cayendo noqueado. El árbitro no permitió que Cody sufriera más daño, por lo que Adrian Yanez se llevó la victoria por TKO en el primer asalto. </p>
                    <h2>Gable Steveson Noquea a Elisha Ellison en el Primer Asalto</h2>
                    <p>Brutal victoria por KO para el debutante de peso pesado en la UFC <b>Gable Steveson</b>, en un combate donde ambos se dieron con todo, finalmente en una abrumadora combinación de golpes por parte del debutante, donde hubo rodillazos, ganchos, rectos y bombazos de todos los ángulos, Gable Stevenson dejó KO a su rival y compatriota <b>Elisha Ellison</b>, logrando la victoria por KO en el primer asalto y extendiendo su récord invicto a 4-0. </p>
                    <h2>Robert Whittaker Noquea a Nikita Krylov en el Tercer Asalto</h2>
                    <p>Grandiosa victoria del excampeón de peso mediano <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, quien subiendo de peso y debutando en peso semipesado hizo un combate sobresaliente, teniendo en cuenta el grandísimo salto de división que hizo. Manteniendo bien la distancia, cubriéndose del poder de golpeo del ruso, y conectando tantos golpes a la cabeza de su rival que parece haberle lesionado la mandibula, obligando a su rival a rendirse y dando la victoria al australiano Robert Whittaker por TKO en el tercer asalto. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}