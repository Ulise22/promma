import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/best_ufc_events.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Los Mejores Eventos de UFC 2024',
    description: "Estamos en condiciones de decir que el 2024 fue un gran año en lo que respecta a la UFC, que nos brindó carteleras y eventos fantásticos a lo largo del año. Por eso hoy queremos repasar los mejores eventos y carteleras de la UFC del 2024.",
    openGraph: {
        title: 'Los Mejores Eventos de UFC 2024',
        description: "Estamos en condiciones de decir que el 2024 fue un gran año en lo que respecta a la UFC, que nos brindó carteleras y eventos fantásticos a lo largo del año. Por eso hoy queremos repasar los mejores eventos y carteleras de la UFC del 2024.",
        url: 'https://fullmma.org/noticias/mejores-eventos-ufc-2024'
    }
}

export default function MejoresEventosUFC2024 () {
    return(
        <main>
            <ArticleHero title='Los Mejores Eventos de UFC 2024' subtitle="La lista de los eventos y carteleras de UFC numerados que marcaron este 2024. " image={hero} date='2024-12-10' author={null} updatedDate='2024-12-11' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Estamos en condiciones de decir que el 2024 fue un gran año en lo que respecta a la UFC, que nos brindó carteleras y eventos fantásticos a lo largo del año. Por eso hoy queremos repasar los mejores eventos y carteleras de la UFC del 2024. </p>
                    <p>Cabe aclarar que el criterio de este listado es totalmente subjetivo y es una opinión personal, basándome en la calidad de los peleadores que estuvieron en estas carteleras y en el resultado y espectáculo que terminaron dando las peleas de cada una de ellas. </p>
                    <h2>5. UFC 310</h2>
                    <p>Comenzamos el listado con la última cartelera del año organizada en el T-Mobile Arena en Las Vegas, que nos trajó como aperitivo estelar la pelea por el título de peso mosca de la UFC, entre el campeón actual <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, y el japonés <Link href='/noticias/quien-es-kai-asakura'>Kai Asakura</Link>, quien hizo su debut en la compañía en esta misma cartelera. </p>
                    <p>Además, estuvo el <Link href='/covertura-ufc/ufc310'>UFC 310</Link> estuvo lleno de peleas que involucraban excampeones, luchadores históricos, y peleas que pueden marcar el futuro de las diferentes divisiones de la compañía, como lo fue la pelea coestelar entre <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link> e <Link href='/peleadores/ian-garry'>Ian Garry</Link>, o el enfrentamiento en peso pluma entre el invicto Movsar Evloev (ver <Link href='/noticias/evloev-sobre-pelea-con-ilia-topuria'>Movsar Evloev Cree Poder Ganarle a Ilia Topuria</Link>) y el excampeón de peso gallo, <b>Aljamain Sterling</b>. </p>
                    <YouTubeEmbed videoid='xM2w4d-TgeQ' />
                    <h2>4. UFC 299</h2>
                    <p>Una de las carteleras que podría haber sin duda algún puesto más arriba, es la del <Link href='/covertura-ufc/ufc299'>UFC 299</Link>, que nos trajo como pelea estelar la primera defensa del campeón de peso gallo <Link href='/peleadores/sean-omalley'>Sean O’Malley</Link>, enfrentando en una revancha al luchador ecuatoriano <Link href='/peleadores/marlon-vera'>Marlon “Chito” Vera</Link>. </p>
                    <p>Además, nos traía como evento coestelar la pelea entre <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, ante el joven prospecto francés <b>Benoit Saint Denis</b>, en un combate que tuvo importancia, dado que la victoria por KO de Poirier en el segundo asalto, sería lo que luego justificaría su pelea por el título ante <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>. </p>
                    <p>También tuvimos un montón de grandes peleas en la cartelera, como el enfrentamiento entre <b>Petr Yan</b> y <b>Song Yadong</b>; o el debut en la compañía de <b>Michael “Venom” Page</b> ante <b>Kevin Holland</b>; o la pelea en pesos pesados entre <b>Curtis Blaydes</b> y <b>Jailton Almeida</b>; o la irrupción de <b>Jack Della Maddalena</b>, que aquella noche consiguió una victoria por TKO ante <b>Gilbert Burns</b>. </p>
                    <h2>3. UFC 306</h2>
                    <p>Otra de las carteleras que desde la previa se veía bastante bien, es la organizada en La Esfera de Las Vegas, el <Link href='/covertura-ufc/ufc306'>UFC Noche</Link>, o UFC 306, que nos traía 2 peleas por el título como evento estelar y coestelar. Con la pelea entre <Link href='/peleadores/sean-omalley'>Sean O’Malley</Link> ante <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> siendo la principal, estando acompañada de la disputa por el cinturón de peso mosca femenino entre la entonces campeona mexicana <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> y <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>.</p>
                    <p>La cartelera nos trajó mucho talento por parte de Sudamérica y de México, con peleadores como <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr</Link>, el chileno <b>Ignacio Bahamondes</b>, la brasileña <b>Ketklen Souza</b> y el mexicano <b>Ronaldo Rodríguez</b> destacando. </p>
                    <p>Hay que mencionar que acá fue donde vimos la que, a mi juicio, fue la mejor pelea del año, entre el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link> y el mexicano <b>Daniel Zallhuber</b> en peso ligero, que nos regalaron un combate único. También hay que recordar que este evento contó con la presencia de <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, quien enfrentó y venció a <b>Brian Ortega</b>, en una pelea que lo inmediatamente lo candidateó para en un futuro cercano pelear por el título de peso pluma de la compañía. </p>
                    <YouTubeEmbed videoid='tYBQTPAIsns' />
                    <h2>2. UFC 308</h2>
                    <p>Una de las que sin dudas debía estar en esta lista, es el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, organizado en Abu Dhabi en el Etihad Arena. Que nos trajó como evento estelar la primera defensa del cinturón del recientemente proclamado campeón español <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, quien debió enfrentarse al excampeón de la división de peso pluma, y nuevo BMF de la compañía, <Link href='/peleadores/max-holloway'>Max Holloway</Link>, quien llegaba a este combate sin ser noqueado en más de 30 peleas profesionales. </p>
                    <p>Además, como pelea coestelar nos trajeron una tremenda pelea a 5 asaltos como lo es la eliminatoria por el título de peso mediano entre <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> y <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>. </p>
                    <p>Todo esto acompañado de peleas más que interesantes, como la de que posiblemente sea el próximo retador del título de peso semipesado, <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link>, ante <b>Aleksandar Rakic</b>. Además de la participación del joven prospecto daguestaní <Link href='/peleadores/shara-magomedov'>Shara “Bullet”</Link>; la pelea entre el luchador invicto inglés de peso pluma, <b>Lerone Murphy</b>, ante <b>Dan Ige</b>; o la pelea entre <b>Geoff Neal</b> contra <b>Rafael dos Anjos</b>. </p>
                    <p>Si sumamos el cómo se terminaron dando las peleas, especialmente las 2 estelares, con <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> noqueando en el tercer asalto al peleador que jamás había sido noqueado. Y con <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> sometiendo en el primer asalto al hombre que jamás había sometido, fue simplemente espectacular. </p>
                    <h2>1. UFC 300</h2>
                    <p>El que sin dudas fue el mejor evento del año, en parte porque así pretendía serlo, es sin dudas el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>. Que pese a que Dana White con sus declaraciones, nos había dejado las expectativas por las nubes, al punto de afirmar que este iba a ser el mejor evento de la historia, no creo que haya llegado a tanto, pero no deja de ser un eventazo.</p>
                    <p>Que nos trajo 3 peleas titulares, siendo el enfrentamiento por el cinturón de peso semipesado entre <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y <b>Jamahal Hill</b> el aperitivo estelar; con la pelea por el cinturón de peso paja femenino, entre las 2 luchadoras chinas, <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>, y <Link href='/mujeres/yan-xiaonan'>Yan Xiaonan</Link>, como evento coestelar; y contando con la pelea estelar de los fanáticos, la que nos trajo al KO del año, en la pelea entre <Link href='/peleadores/max-holloway'>Max Holloway</Link> y <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> por el cinturón del BMF. </p>
                    <YouTubeEmbed videoid='BTagozOQ7BU' />
                    <p>Además, tuvimos a la pelea eliminatoria por el cinturón de peso ligero entre el excampeón <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> y <Link href='/peladores/arman-tsarukyan'>Arman Tsarukyan</Link>. A la pelea que precedió la disputa por el título de <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. El debut de <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link> ante la histórica <Link href='/mujeres/holly-holm'>Holly Holm</Link>. El ingreso de <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> a los rankings de peso pluma, al vencer por TKO a <b>Sodiq Yusuff</b>. Un tremendo comeback por parte de <b>Renato Moicano</b>, quien pareció caer nocaut en el primer asalto, pero que logró la victoria por TKO en el segundo. Y un largo etcétera de tremendas peleas que nos acompañaron aquella noche.  </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}