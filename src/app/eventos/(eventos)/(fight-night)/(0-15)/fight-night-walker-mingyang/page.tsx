import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/walker_vs_mingyang.webp'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Shanghai: ¡Johnny Walker vs Zhang Mingyang!',
    description: 'Noche de UFC en Shaghai, China, con la pelea de Johnny Walker vs Zhang Mingyang como evento estelar. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwalker_vs_mingyang.aa02cf2d.webp&w=828&q=65',
        title: 'UFC Shanghai: ¡Johnny Walker vs Zhang Mingyang!',
        description: 'Noche de UFC en Shaghai, China, con la pelea de Johnny Walker vs Zhang Mingyang como evento estelar. ',
        url: 'https://fullmma.org/eventos/fight-night-walker-mingyang'
    }
}

export default function WalkerMingyang () {
    return(
        <main>
            <ArticleHero title='UFC Shanghai: ¡Johnny Walker Noquea a Zhang Mingyang en el Segundo Asalto en China!' subtitle='¡Aljamain Sterling Derrota Por Decisión Unánime a Brian Ortega 50-45! ¡Sergei Pavlovich Derrota a Waldo Cortes Acosta Por Decisión Unánime!' image={hero} date='2025-08-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento el que tenemos el día de hoy en UFC en este horario particular, debido a que la compañía de MMA más grande del mundo aterrisa en China, y más concretamente en Shanghai. Esta cartelera especial nos trae como evento estelar la pelea del siempre querido brasileño <b>Johnny Walker</b>, que volverá a pisar el octágono y a encabezar una cartelera para enfrentar a <b>Zhang Mingyang</b>, quien luchará en su casa y que viene imparable con 3 victorias por nocaut consecutivas en la UFC. </p>
                    <p>No sólo eso, sino que además como evento coestelar tendremos la pelea entre el #5 y el #7 en peso pluma, <b>Brian Ortega</b> y <b>Aljamain Sterling</b>, que pelearán en peso pactado debido a las complicaciones para dar el peso. Además, tendremos choque de pesados (literalmente), con el ruso <b>Sergei Pavlovich</b> volviendo a pelear para enfrentar al dominicano <b>Waldo Cortes Acosta</b>. Pero la presencia latina de esta cartelera no se detiene ahí, dado que también contaremos con la presencia del peruano <b>Kevin Borjas</b>, compitiendo en la cartelera estelar para enfrentar al luchador chino <b>Sumudaerji</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Uran Satybaldiev Somete a Diyar Nurgozhay en el Primer Asalto</h2>
                    <p>El luchador de Kirguistán <b>Uran Satybaldie</b> nos hace comenzar este evento con todo, luego de en un muy buen comienzo ser capaz de dar vuelta la posición en la que había estado en el suelo, logrando posicionar los brazos para terminar ahorcando a su rival, llevando a que este tapee y que el luchador de Kirguistán se quede con la victoria por sumisión en el primer asalto. </p>
                    <h2>Suyoung You Derrota a Xiao Long en una Pelea Épica</h2>
                    <p>El luchador surcoreano <b>Suyoung You</b> logra hacerse con la victoria en territorio hostil, luego de 3 asaltos tremendos, en los que el luchador coreano fue de más a menos, pero en los que fue capaz de tener una mayor efectividad a la hora de conectar golpes, ganando claramente el primer asalto y el segundo de manera más disputada. Con la pelea terminando con ambos luchadores parados en el centro del octágono dándose de golpes, y con el chino <b>Xiao Long</b>, quien supo lucirse frente a su gente, conectando codazos sin parar en los 20 segundos finales de la pelea. Finalmente el ganador de este encuentro fue el luchador de Corea del Sur Suyoung You. </p>
                    <h2>Yizha Noquea a Westin Wilson en el Primer Asalto</h2>
                    <p>El luchador chino de peso pluma <b>Yizha</b>, logra una espectacular victoria por nocaut antes de completar el primer minuto de la pelea, luego de conectar una combinación de golpes letal para su rival, el estadounidense <b>Westin Wilson</b>, quien cayó KO luego recibir tantas manos juntas del luchador asiático. </p>
                    <h2>Kyle Daukaus Noquea a Michael Pereira en el Primer Asalto</h2>
                    <p>Tremenda sorpresa la que acabamos de presenciar, cuando el estadounidense <b>Kyle Daukaus</b> en su regreso a la UFC es capaz de noquear al brasileño <b>Michel Pereira</b>, a pesar deque las casas de apuestas daban como favorito al de Brasil. El nocaut provino de un gancho de derecha muy bien conectado por el estadounidense, quien finalmente se avalanchó sobre su rival para castigarlo con golpes desde el suelo, para que el árbitro finalmente parara la pelea y le diera la victoria a Daukaus por TKO en el primer asalto. </p>
                    <h2>Rongzhu Derrota a Austin Hubbard por Decisión Unánime</h2>
                    <p>Tremenda pelea la que acabamos de presenciar, que se la termina llevando el luchador local <b>Rongzhu</b> luego de dominar la mayor parte de los 3 asaltos, con un gran dominio del striking en donde logró conectar mucho más que su rival, sabiendo además defender los intentos de derribo que intentó el estadounidense <b>Austin Hubbard</b> en el segundo y tercer asalto. De esta forma, por decisión unánime quien se termina llevando la victoria es el chino Rongzhu. </p>
                    <h2>Charles Johnson Noquea a Kavanagh en el Segundo Asalto</h2>
                    <p>Tremenda sorpresa nos llevamos en esta pelea, cuando parecía que el inglés <b>Lone&apos;er Kavanagh</b> estaba dominando y se llevaría la pelea por decisión sin muchos problemas, o que incluso, sería capaz de encontrar la finalización antes de que el combate termine, nos encontramos con que luego de un intercambio de lucha entre estos 2, el inglés terminó bastante cansado, y el estadounidense <b>Charles Johnson</b> fue capaz de verlo y de capitalizar esto, conectando una mano que tumbaría a su rival. De esta forma el estadounidense mantiene su lugar en el ranking de peso mosca, y le arrebata el invicto al europeo por KO. </p>
                    <h2>Gauge Young Derrota a Maheshate por Decisión Unánime</h2>
                    <p>En una tremenda pelea para cerrar la cartelera preliminar, el estadounidense <b>Gauge Young</b> es quien termina saliendo victorioso de este encuentro en el que ambos luchadores se conectaron un montón de golpes entre sí, terminando la pelea con más de 100 golpes para cada uno, pero donde Young conectó más, y donde el americano además fue capaz de conectar 3 derribos para sumar puntos, además de haber defendido exitosamente todos los intentos de su rival de llevarlo al piso. Por esto, Gauge Young consigue su primer victoria en la UFC por decisión unánime en esta última pelea preliminar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Taiyilake Neuraji Gana por TKO a Kiefer Crosbie en el Primer Asalto</h2>
                    <p>Polémico primer combate de esta cartelera estelar del UFC, en donde el luchador chino <b>Taiyilake Neuraji</b>, le conectó un rodillazo ilegal al irlandés <b>Kiefer Crosbie</b>, que debido a que su rival quiso seguir peleando, en lugar de ser penalizado con una descalificación, el peleador de China recibió una sanción de 2 puntos para el combate. Finalmente, luego de que se reanudara la pelea, debido a lo lastimado que había quedado el peleador de Irlanda, bastaron uno pocos golpes y unos cuantos codazos a la cabeza, para que el árbitro diera por terminada la pelea, dando a Neuraji como ganador por TKO en el primer asalto.</p>
                    <p>De igual manera, el luchador chino estaba siendo muchísimo más superior a su rival antes de este rodillazo ilegal, por lo que aún en caso de no conectarse uno supone que el resultado de la pelea hubiera sido el mismo, aún así es curioso y vale la pena recalcar, que en caso de haberlo querido, Kiefer Crosbie podría haber argumentado que no podía seguir peleando, y hubiera ganado la pelea por descalificación. </p>
                    <h2>Sumudaerji Derrota a Kevin Borjas Por Decisión</h2>
                    <p>El peleador local <b>Sumudaerji</b> se hace con la victoria, luego de ser mejor que su rival peruano <b>Kevin Borjas</b> durante los 3 asaltos, conectando más y mejores golpes que su rival, y siendo capaz de defender todos los intentos derribos que este intento hacer. De esta forma, por decisión unánime Sumudaerji se lleva la victoria 30-27 ante un peruano que no pudo reaccionar como necesitaba para evitar este resultado. </p>
                    <h2>Sergei Pavlovich Derrota a Waldo Cortes Acosta</h2>
                    <p>El luchador ruso <b>Sergei Pavlovich</b> defiende su posición en el puesto #3 en los rankings de peso pesado, derrotando al dominicano <b>Waldo Cortes Acosta</b> en un combate donde ambos peleadores especularon mucho, con algo de temor sobre el poder de nocaut del otro. En este terreno de la pelea, el ruso fue quien mejor supo manejar la distancia, para conectar y ser concetado menos que su rival, quien a pesar de todo demostró tener una gran mandibula, dado que recibió golpes que hubieran dormido a cualquiera, pero que él supo soportar. De esta manera, el ruso vuelva a la victoria y corta con una racha de 5 victorias consecutivas que llevaba acumulando el dominicano. </p>
                    <h2>Aljamain Sterling Derrota a Brian Ortega Por Decisión Unánime</h2>
                    <p>Pese a que de un lado teníamos a un experto en wrestling, y del otro lado un experto BJJ, la verdad es que esta pelea se dió casi que exclusivamente de pie en el striking, especialmente en los primeros asaltos. Fue en este escenario donde los problemas con el corte de peso se hicieron notar, con un <b>Aljamain Sterling</b> que fue ampliamente superior a <b>Brian Ortega</b>, conectando más, en mejores posiciones, esquivando y practicamente evitando todos los golpes de su rival, siendo un guión de pelea que se mantuvo durante los 5 asaltos, por lo que finalmente los jueces por unanimidad terminaron puntuando esta pelea 50-45, con todos los asaltos siendo favorables al luchador de ascendencia jamaiquina Sterling. </p>
                    <h2>Johnny Walker Noquea a Zhang Minyang en el Segundo Asalto</h2>
                    <p>Que locura la pelea que acaba de dar el brasileño <b>Johnny Walker</b>, buscando y logrando nada más empezar la pelea un derribo, contrario a lo que nos tiene acostumbrados, y logrando manejar a lo largo del combate, una vez de pie, la distancia para conectar golpes sin recibir muchos tampoco. El factor decisivo para determinar el destino de esta pelea serían las patadas a la pierna que Walker lograría conectarle a <b>Zhang Mingyang</b>, que le harían un daño tremendo, haciendo que el luchador asiático caiga al suelo al ya no poder mantenerse de pie debido a las patadas recibidas en el segundo asalto, sería acá cuando el brasileño aprovecharía para golpear a su rival en el suelo, hasta que el daño sería tanto que el árbitro los separaría dándole la victoria por TKO a Johhny Walker en el segundo asalto.</p>
                    <p>Sopresa total el resultado, siendo que Mingyang era ampliamente favorito en las apuestas, y que ambos luchadores venían de rachas totalmente distintas, con el chino logrando 3 victorias por nocaut en sus 3 peleas en la UFC, y ganando un bono por desempeño en las 3 peleas. Mientras que Walker venía de 3 peleas sin conocer la victoria, siendo noqueado en sus últimas 2 peleas. La lógica hacía pensar que ante un peleador de este nivel de KO, contra un peleador de una mándibula tan frágil, terminaría con la pelea en favor del peleador local, sin embargo Johnny Walker hoy nos calló la boca a todos con un desempeño que sin dudas ganará un bono de $50k. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}