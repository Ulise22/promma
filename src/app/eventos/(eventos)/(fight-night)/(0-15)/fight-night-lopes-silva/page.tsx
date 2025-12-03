import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/lopes-vs-silva.webp'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Noche: ¡Diego Lopes vs Jean Silva!',
    description: 'UFC Noche con Diego Lopes enfrentando la brasileño Jean Silva, pertenciente a los Fighting Nerds en la pelea estelar. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flopes-vs-silva.5d2f30a3.webp&w=828&q=65',
        title: 'UFC Noche: ¡Diego Lopes vs Jean Silva!',
        description: 'UFC Noche con Diego Lopes enfrentando la brasileño Jean Silva, pertenciente a los Fighting Nerds en la pelea estelar. ',
        url: 'https://fullmma.org/eventos/fight-night-lopes-silva'
    }
}

export default function LopesSilva () {
    return(
        <main>
            <ArticleHero title='UFC Noche: ¡Diego Lopes Noquea a Jean Silva en el Segundo Asalto!' subtitle='¡David Martínez Derrota Rob Font y se Mete Al Top 10 de la División!' image={hero} date='2025-09-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC tenemos el día de hoy en honor a la Independencia de México, donde el luchador de doble nacionalidad brasileña/mexicana <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, quien estará enfrentando a su compatriota de Brasil <b>Jean Silva</b>, quien actualmente es el único luchador invicto en la UFC de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>. </p>
                    <p>Además, en la pelea coestelar estarán peleando el #9 de la división de peso gallo de la compañía <b>Rob Font</b>, quien defenderá su puesto en los rankings ante el prospecto mexicano <b>David Martínez</b>, quien en su segunda pelea en la UFC ya tendrá una prueba de fuego. Sin mencionar la enorme cantidad de peleadores mexicano y latinos que estarán presentes peleando el día de hoy. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Daniil Donchenko Noquea a Rodrigo Sezinando en el Primer Asalto en al Final de The Ultimate Fighter</h2>
                    <p>Tremenda manera de comenzar esta cartelera del Noche UFC, que nos trajó la final del TUF en peso wélter, donde el ucraniano <b>Daniil Donchenko</b> fue capaz de imponerse por sobre su rival <b>Rodrigo Sezinando</b>, conectando un montón de codazos a la cara de su rival que le generaron cortes en el rostro, convirtiendo esto en una pelea sangrienta. Finalmente fue una mano derecha la que consiguió el knockdown, que llegó seguido de una avalancha de golpes que el árbitro los separará y diera como ganador por TKO al luchador ucraniano. </p>
                    <h2>Montse Rendon Derrota a Alice Pereira Por Decisión Dividida</h2>
                    <p>Excelente pelea por parte de la luchadora mexicana <b>Montse Rendon</b>, quien al enfrentarse a una peleadora 17 años menos, que además estaba invicta como <b>Alice Pereira</b>, fue capaz de ir puntuando, de conectar golpes al cuerpo y a la cabeza. En un combate donde fue siempre la peleadora mexicana la que tomó la iniciativa, caminando siempre hacia adelante, mientras su rival brasileña se movía alrededor del octágono, en busqueda de la oportunidad para contragolpear. Finalmente Montse Rendon se llevaría la pelea por decisión dividida, de forma justa, a mi criterio.</p>
                    <h2>Alden Coria Noquea a Alessandro Costa en el Tercer Asalto</h2>
                    <p>Gran victoria para Alden Coria, quien enfrentando a su compatriota, fue capaz de aprovechar una lesión que sufrió Alessandro Costa en el pie en el segundo asalto, que le dificultó mantenerse de pie, conectándole un uppercut seguido de una combinación larga de golpes, para que el árbitro los terminé separando, declarando a <b>Alden Coria</b> como ganador del combate por TKO en el tercer asalto. </p>
                    <h2>Zachary Reese vs Sedriques Dumas Termina en No Contest Por Patada en los Testiculos</h2>
                    <p>El combate de peso medio entre los peleadores estadounidenses <b>Zachary Reese</b> y <b>Sedriques Dumas</b> termina sin resultado, luego de que en menos de un minuto de iniciado el combate, Reese le conectará una patada accidental a Dumas en las zonas prohibidas, dejándolo con tanto dolor ahí abajo que le fue imposible continuar peleando. Terminando el combate lamentablemente en un No Contest, debido a lo accidental y temprano del golpe. </p>
                    <h2>Jesús Aguilar Derrota a Luis Gurule Por Decisión Unánime</h2>
                    <p>Otra victoria para México, cuando el luchador <b>Jesús Aguilar</b> logra imponerse con una destacada actuación sobre su rival <b>Luis Gurule</b>, a quien fue capaz de concetar en cálidad y cantidad, castigando mucho la pierna de su rival con patadas a esa zona, y estando cerca de lograr el nocaut en el tercer asalto, cuando algunos de los golpes que lanzó a punto estuvieron de dejar KO a su rival, quien fue capaz de sobrevivir todo el combate, pero que no le alcanzó para llevarse la victoria. De esta forma Jesús Aguilar se queda con la victoria merecidamente por decisión unánime.</p>
                    <h2>Tatia Suarez Derrota a Amanda Lemos Por Decisión Unánime</h2>
                    <p>La #2 del ranking de peso paja femenino <b>Tatiana Suárez</b>, se hace con la victoria luego de dominar en la lucha y en el suelo durante los 2 primeros asaltos, logrando derribar a su rival y mantenerla a ras de lona. Sobreviviendo además al tercer asalto, cuando su rival comenzó a conectar más golpes que iban con fuerza y podrían haberla finalizado si no se hubiera defendido de la manera en que lo hizo. De esta forma, la estadounidense defiende su lugar en los rankings y vuelve a la senda de la victoria. </p>
                    <h2>Joaquim Silva Derrota a Claudio Puelles Por Decisión Dividida</h2>
                    <p>El brasileño <b>Joaquim Silva</b> se lleva la victoria en una pelea muy cerrada, donde el peruano <b>Claudio Puelles</b> logró derribar en varias ocasiones a su rival, castigándolo desde el suelo, pero donde el brasileño fue capaz de mostrar superioridad cuando la pelea se dió de pie, estando cerca de lograr el nocaut en el tercer asalto del combate, cuando la pelea estaba terminando. Finalmente, aunque el combate fue cerrado, 2 de los jueces dieron como ganador a Joaquim Silva, quien se llevó la victoria por decisión dividida. </p>
                    <h2>Dusko Todorovic Somete a José Daniel Medina en el Primer Asalto</h2>
                    <p>El luchador serbio <b>Dusko Tudorovic</b> se hace con la victoria de manera contundente, al primer generarle un corte en la ceja al boliviano <b>José Daniel Medina</b>, para posteriormente, cuando fue capaz de derribarlo y tirarlo al suelo, le ganó la espalda y le conectó un mataleón que obligaría al luchador sudaméricano a tapear. Consiguiendo de esta manera la victoria por sumisión en el primer asalto de la pelea. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Santiago Luna Noquea a Quang Le en el Primer Asalto</h2>
                    <p>El luchador mexicano de 21 años <b>Santiago Luna</b> abre la cartelera estelar de la mejor manera para México, al lograr un nocaut espectacular, que se vuelve mejor si tenemos en cuenta que ni bien comenzó la pelea, el luchador de Vietnam <b>Quang Le</b> lo había conectado y estuvo cerca de ser él quien finalizara. Sin embargo, el mexicano demostró un corazón y unos huevos impresionantes, al sobrevivir a semejantes golpes, y ser capaz de dar vuelta la pelea, conectando él mismo los golpes letales que terminarían noqueando a su rival, siendo capaz además de mantener su invicto y extender su récord profesional en MMA a un 7-0. </p>
                    <h2>Alexander Hernández Noquea a Diego Ferreira en el Segundo Asalto</h2>
                    <p>El luchador estadounidense de origen mexicano <b>Alexander Hernandez</b> se hace con la victoria ante el brasileño <b>Diego Ferreira</b>, en un combate donde Hernández estuvo muy activo con el juego de piernas, moviéndose alrededor del octágono para evitar ser golpeado, a la espera de una buena oportunidad para contragolpear, logró su cometido, convirtiendo este plan de pelea en la estrategia ganadora, al ser capaz de conectar a su rival en el segundo asalto, tumbándolo al suelo, y rematándolo con unos más que necesarios golpes extras, que necesitó conectar para que el árbitro terminara la pelea y lo diera como ganador. </p>
                    <h2>Kelvin Gatelum Derrota a Dustin Stoltzfus Por Decisión</h2>
                    <p>Otra victoria para un luchador de origen mexicano, cuando <b>Kelvin Gastelum</b> demostró una amplia superioridad en el striking, conectando los mejores golpes y estando cerca de conseguir un nocaut. Le faltó un poco de inteligencia en la pelea a Kelvin, quien estando cerca de noquear a su rival en el segundo asalto, buscó una guillotina que le dejó mal posicionado, en lugar de esperar su oportunidad y seguir golpeando a la cabeza de Dustin. De igual forma, nada podía impedir que Gastelum se hiciera con la victoria esta noche, por lo que al final de los 3 asaltos, los 3 jueces lo dieron como ganador del combate por decisión unánime. </p>
                    <h2>Rafa García Noquea a Jared Gordon en el Tercer Asalto</h2>
                    <p>Nueva victoria para los mexicanos. Esta vez, con <b>Rafa García</b> siendo el protagonista en un peleón. Siendo que en el primer y segundo asalto, quien parecía estar gananado la pelea era el estadounidense <b>Jared Gordon</b>, al estar conectando más golpes, Rafa fue capaz de dar vuelta la pelea, y de mostrarse infinitamente superior a su rival en el tercer asalto. Es díficil saber si es porque el mexicano necesitaba tomar más riesgos e ir en busqueda de la victoria, o porque para ese momento Gordon ya había vaciado el tanque y estaba muy cansado, de igual forma el resultado fue que Rafa García fue capaz de conectar los golpes letales que terminarían por dormir a su rival, llevándose la victoria por TKO en el último asalto del combate. </p>
                    <h2>David Martínez Derrota a Rob Font y se Mete al Top 10</h2>
                    <p>El luchador mexicano una importantísima victoria, y se salta toda la fila, al lograr meterse en el top 10 de la división de peso gallo de la UFC en tan sólo su segunda pelea en la compañía. El mexicano <b>David Martínez</b>, logra llevarse la victoria ante el #9 de la división <b>Rob Font</b>, luego de dominar completamente y ganar el primer y el tercer asalto, en lo que fue una guerra absoluta, completamente emocionante hasta el último momento. </p>
                    <h2>Diego Lopes Noquea a Jean Silva en el Segundo Asalto</h2>
                    <p>El luchador brasileño que en ocasión estaba representando a México <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> logró una espectacular victoria por la vía del nocaut ante su compatriota de Brasil <b>Jean Silva</b>. Luego de conseguir en el primer asalto un derribo, que aprovechó para quedar por encima de Silva y castigarlo a golpes desde el suelo, para facilmente ganar el asalto, y luego de un segundo asalto que fue más igualado, donde en el caos e intercambio de golpes parecía salir mejor parado Jean Silva, quien conectaba golpes que impactaban duramente en la mandibula de Lopes, sin embargo, en un contragolpe de Diego, conectó un codazo giratorio que derribaría a su rival, procediendo a castigarlo a golpes hasta que el árbitro los terminó separando, faltando apenas segundos para que terminé el asalto, dando como ganador de esta forma al brasileño/mexicano Diego Lopes, quien además seguramente termine ganando un bono por el desempeño de esta noche. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}