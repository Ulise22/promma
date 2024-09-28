import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/10-20/drake_apuesta-hero.jpg'

export const metadata: Metadata = {
    title: 'Drake Apuesta UFC',
    description: '',
    openGraph: {
        title: 'Drake Apuesta UFC',
        description: '',
        url: 'https://fullmma.org/noticias/drake-apuesta-ufc'
    }
}

export default function DrakeApuestaUFC () {
    return(
        <main>
            <ArticleHero title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' subtitle='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense' image={hero} date='2024-08-19' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Más allá de la carrera musical de <b>Drake</b>, una de las cosas curiosas que tiene este personaje en lo que respecta al mundo de las MMA, es que constantemente está apostando dinero por diferentes peleadores, y ya se ha vuelto usual ver a fanáticos acusarlo de &quot;mufa&quot;, casi al grado de ser un meme, debido a que lo normal suele ser que pierda sus apuestas. Por eso hoy vamos a repasar algunas de las apuestas que perdió el cantante apostando en peleas de <Link href='/articulos/ufc'>UFC</Link>.</p>
                    <h3>Drake Apuesta por Israel Adesanya ante Dricus Du Plessis</h3>
                    <p>El caso más reciente de Drake apostando por un peleador que acabaría perdiendo, ocurrió hace un par de días, cuando en el <Link href='/covertura-ufc/ufc305'>UFC 305</Link> apostó $450,000 a favor del retador del título de peso medio <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, quien caería derrotado por sumisión en el cuarto asalto de la pelea ante el campeón <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>.</p>
                    <p>Como a esta altura &quot;la maldición de Drake&quot; ya es un meme, el campeón sudafricano Du Plessis no dudó en referirse a Drake en sus redes sociales, agradeciéndole &quot;desde el fondo de su corazón&quot; por apostar en su contra.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">From the bottom of my heart once again<br />THANK YOU <a href="https://twitter.com/Drake?ref_src=twsrc%5Etfw">@Drake</a> 🤣 <a href="https://t.co/bcSiOjGezd">pic.twitter.com/bcSiOjGezd</a></p>&mdash; Dricus Du Plessis (@dricusduplessis) <a href="https://twitter.com/dricusduplessis/status/1825088305073197369?ref_src=twsrc%5Etfw">August 18, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h3>Apuestas por Adesanya contra Alex Pereira y contra Sean Strickland</h3>
                    <p>Lamentablemente para el luchador nigeriano, sufriría la maldición de Drake en 2 ocasiones más. La primera sería cuando apostó a su favor en su primer pelea contra <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> en el UFC 281, poniendo de su bolsillo $1.59 millones. Sin embargo, en esta pelea, Alex Pereira acabaría con el reinado de 7 peleas por el título de Adesanya, logrando una impresionante victoria por TKO en el último asalto de la pelea.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/l8s2fsfIpUA?si=BLJFD_eRla8jUIbk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Pero la historia no quedaría ahí, luego de que Adesanya fuera capaz de recuperar su título, tendría programada una defensa contra un rival a priori asequible, siendo este el #5 ranqueado en aquel momento, <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, debido a esto, Drake decidiría apostar $500,000 en favor del campeón. Para sorpresa de todos, aquella noche Strickland le pasaría por encima al campeón nigeriano, logrando una merecida victoria por decisión unánime.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/m3jNtOxIyDA?si=QBWLxgqMm88EfZJo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Drake Apuesta a Favor de Strickland ante Dricus Du Plessis</h3>
                    <p>Por las ironías de la vida, aquella &quot;maldición&quot; que en su momento benefició a Sean Strickland, lo perjudicaría en su siguiente combate, dado que como primera defensa de su título se le pondría enfrente al sudafricano <b>Dricus Du Plessis</b>, y Drake decidiría apostar $700,000 a favor del estadounidense, resultando en que luego de una pelea muy cerrada, los jueces dieran como ganador por desición dividida a Du Plessis.</p>
                    <h3>Drake Pierde $275,000 al Apostar por Jorge Masvidal en su Pelea ante Colby Covington</h3>
                    <p>En lo que fue el <b>UFC 272</b>, que tuvo como pelea estelar al luchador de origen cubano <Link href='/articulos/jorge-masvidal-historia'>Jorge Masvidal</Link>, enfrentando al estadounidense <Link href='/peleadores/colby-covington'>Colby Covington</Link>, Drake decidió apostar su dinero a favor de Masvidal, lo que terminaría en una victoria para Covington por decisión unánime.</p>
                    <p>En la conferencia de prensa posterior a la pelea, el mismo Colby Covington se refirió a esta apuesta y le dijo a Drake que &quot;vuelva a vender esos albumes de mierda para recuperar el dinero&quot;. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Colby Covington tells Drake to &quot;go back to selling those sh*tty albums&quot; after losing a $275,000 bet on Jorge Masvidal. 😂<a href="https://twitter.com/hashtag/UFC272?src=hash&amp;ref_src=twsrc%5Etfw">#UFC272</a> | Full video: <a href="https://t.co/dlBR3xFBSB">https://t.co/dlBR3xFBSB</a> <a href="https://t.co/duJsOzswHp">pic.twitter.com/duJsOzswHp</a></p>&mdash; MMA Junkie (@MMAJunkie) <a href="https://twitter.com/MMAJunkie/status/1500509991677181955?ref_src=twsrc%5Etfw">March 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <h3>Drake pierde miles al apostar por Kamaru Usman en su pelea ante Leon Edwards en el UFC 278</h3>
                    <p>En la pelea que tuvo lugar el 20 de agosto de 2022, el campeón de peso wélter <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> defendería su título ante <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>. El claro favorito para esta pelea era Usman, quien ya había defendido su cinturón de forma exitosa en 5 ocasiones, y que venía de una racha de 19 victorias consecutivas, por lo que Drake decidió apostar casi medio millón de dolares a su favor.</p>
                    <p>Sin embargo, a la hora de enfrentarse, estando en el quinto y último asalto de la pelea, cuando parecía que el campeón se iba a llevar la victoria por decisión, Leon Edwards logra conectar una patada a la cabeza de su rival que lo deja KO y lo corona como nuevo campeón.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/egNhnzfX6VU?si=46nhQTjqAWwgh5Mq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>La apuesta a favor de Gathje contra Charles Oliveira</h3>
                    <p>El 7 de mayo de 2022, el brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> y el estadounidense <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> se enfrentarían en una pelea por el título de peso ligero de la UFC. Drake apostaría $550,000 a favor de Gaethje para quedarse con el título, sin embargo el brasileño sería capaz de someterlo en el primer asalto, llevándose la pelea, y haciendo perder otra apuesta más al cantante estadounidense.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/5sX_HzPNPoM?si=vkPRt_NnNaV7GpQG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}