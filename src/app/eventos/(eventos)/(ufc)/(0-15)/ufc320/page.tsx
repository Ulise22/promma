import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc320.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2!',
    description: "UFC 320 donde el campoeón Magomed Ankalaev defiende el cinturón ante Alex El Poatan Pereira. Además estará Merab Dvalishvili defendiendo el cinturón de peso gallo ante Cory Sandhagen.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc320.9fd20ef5.webp&w=828&q=65',
        title: 'UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2!',
        description: "UFC 320 donde el campoeón Magomed Ankalaev defiende el cinturón ante Alex El Poatan Pereira. Además estará Merab Dvalishvili defendiendo el cinturón de peso gallo ante Cory Sandhagen.",
        url: 'https://fullmma.org/eventos/ufc320'
    }
}

export default function UFC320 () {
    return(
        <main>
            <ArticleHero title="UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2! ¡Merab Dvalishvili vs Cory Sandhagen!" subtitle='¡Jiri Prochazka vs Khalil Rountree! ¡Joshs Emmet vs Youssef Zalal!' image={hero} date='2025-10-04' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Increíble la noche de UFC que se nos viene hoy, con el <b>UFC 320</b> siendo sin dudas una de las mejores carteleras del año, encabezada por el nuevo campeón de peso semipesado <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> que buscará su primera defensa del cinturón en una revancha con <b>El Poatan</b> <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, quien buscará recuperar el cinturón que era suyo a principios de año. Aquella no sería la única pelea por el cinturón que habrá, dado que en la pelea coestelar estará <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> defendiendo nuevamente su cinturón en peso gallo, ante el #4 de la división <b>Cory Sandhagen</b>, que viene de una victoria por nocaut en su último combate. </p>
                    <p>Toda la cartelera estelear vale la pena verla completa de principio a fin, dado que también estará presente el &quot;Samurái&quot; <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, enfrentando al excontendiente al título <b>Khalil Rountree</b>, en un combate que dependiendo de como terminé la pelea estelar, puede definir al próximo contendiente al título. Además estará peleando el veterano <b>Josh Emmet</b> en peso pluma, ante el joven peleador de 29 años <b>Youssef Zalal</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Veronica Hardy Derrota a Brogan Walker Por Decisión</h2>
                    <p>Contundente victoria en esta primer pelea de la noche por parte de la venezolana <b>Veronica Hardy</b>, quien dominó de principio a fin el combate, conectando golpes que dejaron mareada a su rival, y estando cerca de finalizar con una sumisión al final del primer asalto. De esta forma, la única peleadora latinoaméricana de esta cartelera se lleva la victoria por decisión unánime, habiendo ganado los 3 asaltos del encuentro.</p>
                    <h2>Ramiz Brahimaj Somete a Austin Vanderford en el Segundo Asalto</h2>
                    <p>Espectacular pelea de <b>Ramiz Brahimaj</b> quien dominó completamente a su compatriota, logrando finalmente terminar temprano la pelea en el segundo asalto, cuando mediante una guillotina, fue capaz de finalizar a su oponente vía sumisión, logrando la primer sumisión y finalización de la noche. </p>
                    <h2>Farid Basharat Derrota a Chris Gutierrez</h2>
                    <p>Gran victoria para <b>Farid Basharat</b>, quien partía como favorito en las apuestas e hizo valer ese favoritismo, logrando varios cambios de ritmo, conectando buenos golpes y concretando sus derribos, para terminar llevándose la victoria por sobre el estadounidense <b>Chris Gutierrez</b>. </p>
                    <h2>Yana Santos Derrota a Macy Chiasson Por Decisión Unánime</h2>
                    <p>Gran victoria para la rusa <b>Yana Santos</b>, quien fue capaz de conectar una gran cantidad de combinaciones de golpes, logrando superar a su rival en cuanto a volumen y cálidad de golpeo. De esta forma, Yana Santos logra una victoria ante la estadounidense <b>Macy Chiasson</b> que seguramente la haga meterse de lleno en el top 5 de la división de peso gallo femenino. </p>
                    <h2>Punahele Soriano Derrota a Nikolay Veretennikov Por Decisión Unánime</h2>
                    <p>Gran victoria para el luchador estadounidense <b>Punahele Soriano</b>, quien fue claramente superior a su rival de Kazajistán, conectando los mejores golpes, siendo capaz de derribarlo en más de una ocasión, y defendiendo de forma excelente los intentos de sumisión por parte de su rival, que constantemente buscaba conectar una guillotina a la que Soriano siempre encontró respuesta y supo castigar. De esta forma terminamos las primeras peleas preliminares con sólo 1 finalización en 5 peleas. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Edmen Shahbazyan Derrota a Andre Muniz Por Nocaut en el Primer Asalto</h2>
                    <p>Primer nocaut de la noche por parte del estadounidense <b>Edmen Shahbazyan</b>, quien al primero conectar un gancho de izquierda, olió sangre al ver que ese golpe impactó gravemente a su rival, por lo que procedió a atacarlo con una ráfaga de golpes hasta que el combate fue finalizado por el árbitro, que vió como el brasileño <b>Andre Muniz</b> ya no respondía, todo esto a unos pocos segundos de que termine el primer asalto. Por lo que el estadounidense abre las preliminares de manera espectacular, consiguiendo el primer nocaut de la noche. </p>
                    <h2>Jakub Wiklacz Derrota a Patchy Mix Por Decisión Dividida</h2>
                    <p>En un combate bastante cerrado, que en gran parte se desarrolló en el suelo, con ambos luchadores intercambiando golpes desde el piso, quien se terminó llevando la victoria fue el luchador polaco <b>Jakub Wiklacz</b>, quien pese a pasar la mayor parte del combate por debajo de su rival, fue capaz de generar más daño desde esa posición, convenciendo a 2 de los 3 jueces de que había ganado el combate. </p>
                    <h2>Daniel Santos Noquea a Joosang Yoo en el Segundo Asalto</h2>
                    <p>Impresionante victoria del brasileño <b>Daniel Santos</b>, quien ya en el primer asalto estuvo cerca de noquear al surcoreano en más de una ocasión, necesitando en el segundo de menos golpes para terminar noqueando a su rival, logrando esto en el primer minuto del segundo asalto del combate. </p>
                    <h2>Ateba Gautier Noquea a Tre&apos;ston Vines en el Primer Asalto</h2>
                    <p>Tercer victoria por nocaut consecutiva para el luchador camerunés <b>Ateba Gautier</b>, quien desde su llegada a la UFC ha demostrado tener un poder de KO insuperable en la división de peso medio de la compañía, logrando esta noche otro más, en el primer asalto, luego de haber primero conectado una rodilla a la cabeza de su rival, para terminar rematándolo a golpes ante los que Vines quedó completamente indefenso. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Joe Pyfer Somete a Abus Magomedov en el Segundo Asalto</h2>
                    <p>Tremenda manera de iniciar esta cartelera estelar, que había comenzado con el luchador alemán <b>Abus Magomedov</b> iniciando con el pie derecho, siendo superior a su rival. Pero el guión del combate cambiaría rotundamente en el segundo asalto, donde el estadounidense <b>Joe Pyfer</b> haría los ajustes necesarios para primero conectar a su rival, y para posteriormente ganarle la espalda para conectarle un mataleón que lo sometería en el segundo asalto de la pelea. </p>
                    <h2>Youssef Zalal Somete a Josh Emmet en el Primer Asalto</h2>
                    <p>Tremenda victoria del luchador marroquí <b>Youssef Zalal</b>, quien gana de forma contundente ante el veterano estadounidense <b>Josh Emmet</b>, derribándolo rápidamente, y siendo capaz de conectar un armbar, que aunque Emmet sería capaz de ponerse de pie, tapearía verbalmente, permitiéndole al luchador de Marruecos quedarse con la victoria por sumisión en el primer asalto. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}