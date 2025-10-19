import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/deridder-allen.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Vancouever: ¡Reiner De Ridder vs Brendan Allen!',
    description: 'Noche de UFC en Canadá encabezada por Reiner De Ridder y Brendan Allen. Además de la pelea de Chito Vera contra Aiemann Zahabi',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fderidder-allen.2d15fcdb.webp&w=828&q=65',
        title: 'UFC Vancouever: ¡Reiner De Ridder vs Brendan Allen!',
        description: 'Noche de UFC en Canadá encabezada por Reiner De Ridder y Brendan Allen. Además de la pelea de Chito Vera contra Aiemann Zahabi',
        url: 'https://fullmma.org/eventos/fight-night-deridder-allen'
    }
}

export default function DeridderAllen () {
    return(
        <main>
            <ArticleHero title='UFC Vancouever: ¡Reinier De Ridder vs Brendan Allen!' subtitle='¡Kevin Holland vs Mike Mallot! ¡Aiemann Zahabi Derrota a Marlon Vera por Decisión Dividida en una Pelea Cerradísima!' image={hero} date='2025-10-18' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Tremendo evento de UFC tenemos esta noche en Canadá, donde estarán peleando en la cartelera estelar el #4 de la división de peso medio y excampeón de ONE Championship <b>Reiner De Ridder</b> contra el #9 de la división <b>Brendan Allen</b>. En la pelea coestelar tendremos la cuarta pelea del año de <b>Kevin Holland</b>, quien se enfrentará ante el canadiense <b>Mike Mallot</b> en peso wélter. </p>
                    <p>Además tendremos un peleador latinoaméricano en la cartelera estelar, cuando el ecuatoriano y #7 de la división de peso gallo <Link href='/peleadores/marlon-vera'>Chito Vera</Link> se estará enfrentando a <b>Aiemann Zahabi</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Melissa Croden Noquea a Tainara Lisboa en el Tercer Asalto</h2>
                    <p>Victoria canadiense en la primer primer pelea de esta cartelera, luego de la que luchadora local <b>Melissa Croden</b> logró una gran victoria en el tercer asalto del combate, luego de noquear a su rival, castigándola desde el suelo, hasta que el árbitro las separó para otorgarle la victoria por TKO. </p>
                    <h2>Yousri Belgaroui Noquea a Azamat Bekoev en el Tercer Asalto</h2>
                    <p>Segunda pelea consecutiva que termina con nocaut en el tercer asalto, luego de que fue un peleón por parte del luchador de Países Bajos <b>Yousri Belgaroui</b>, quien fue capaz de dominar completamente al peleador ruso <b>Azamat Bekoev</b>, quien aunque intentó ir al intercambio con su rival, no pudo hacer nada ante la potencia y cálidad de los golpes del neerlandés, quien terminó finalizando a su rival en el tercer asalto, luego de una combinación de golpes que lo dejaron muy lastimado, al punto de que el árbitro dió por terminada la pelea para evitar que Bekoev cayera KO. </p>
                    <h2>Stephanie Luciano Somete a Ravena Oliveira en el Tercer Asalto</h2>
                    <p>Tercer pelea consecutiva que termina con una finalización en el tercer asalto, cuando la brasileña <b>Stephanie Luciano</b> fue capaz de ganarle la espalda a su compatriota, para terminar conectando un mataleón que obligaría a Oliveira a tapear, otorgándole la victoria por sumisión en el último asalto del combate. </p>
                    <h2>Djorden Santos Derrota a Danny Barlow Por Decisión Unánime</h2>
                    <p>El brasileño <b>Djorden Santos</b> consigue una espectacular victoria por decisión unánime en lo que es una candidata a la pelea de la noche, luego de dar vuelta un combate que parecía que iba a terminar con el estadounidense finalizando en el segundo asalto, el de Brasil fue capaz de recuperarse y mostrar una fortaleza a la hora de aguantar golpes y para lanzarlos pese a estar tocado debido al daño sufrido durante le combate. De esta forma el de Brasil se lleva la victoria por decisión unánime. </p>
                    <h2>Bruno Silva Somete a Hyungsung Park en el Tercer Asalto</h2>
                    <p>Espectacular pelea del brasileño <b>Bruno Silva</b>, quien se estaba jugando su lugar en los rankings de peso mosca en este combate, enfrentando al peleador surcoreano que finalmente no terminará ranqueado. En un pelea donde el luchador de Brasil sacó a relucir su supeioridad en el octágono, terminó por demostrarlo en el tercer asalto, cuando luego de ganarle la espalda a su rival, pudo finalizarlo con una mataleón para someter a Park en el tercer asalto. </p>
                    <h2>Aoriqileng Noquea a Cody Gibson a los 10 Segundos del Combate</h2>
                    <p>Tremendo lo que hizo el peleador de china <b>Aoriqileng</b>, quien conectó un volado de derecha que impactó directamente en la cabeza de su rival, tirándolo al suelo, donde el luchador asiático solo necesito de un par de golpes más para que el árbitro detuviera la pelea y lo diera como ganador en poco más de 10 segundos del primer asalto. </p>
                    <h2>Drew Dober Noquea a Kyle Prepolec en el Tercer Asalto</h2>
                    <p>En un combate que sin dudas entra en la contienda para ser la pelea de la noche, es <b>Drew Dober</b> quien se termina llevando la victoria, luego de que se le descontara un punto en el tercer asalto de la pelea, por haber golpeado en las zonas bajas de su rival con una patada que le dolió hasta al público. Sin embargo, luego de 4 minutos que necesitó el canadiense <b>Kyle Prepolec</b>, se reanudó la pelea y el ganador terminó siendo <b>Drew Dober</b>, quien luego de una espectacular combinación de golpes logró llevarse la victoria por TKO en le tercer asalto. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Kyle Nelson Derrota a Matt Frevola por Decisión Unánime</h2>
                    <p>Otra victoria para los canadienses en esta Noche de UFC en Vancouver, con <b>Kyle Nelson</b> abriendo la cartelera estelar de la mejor manera posible con una pelea espectacular, en donde hay que remarcar un error por parte del árbitro, que separó a los peleadores a 3 segundos de que terminara el primer asalto, mientras Kyle Nelson estaba encima de Matt Frevola golpeándolo, por lo que el combate debería haber terminado ahí por TKO, sin embargo la pelea siguió y se extendió hasta los 3 asaltos, con los jueces dando como ganador a Kyle Nelson, quien a lo largo del combate fue un mejor peleador. </p>
                    <h2>Charles Jourdain Somete a Davey Grant en el Primer Asalto</h2>
                    <p>Espectacular victoria del canadiense <b>Charles Jourdain</b>, quien luego de conectar un rodillazo a la cabeza de su rival en el primer asalto, aprovechó el daño que le hizo a su rival, quien ya no estaba con la capacidad para tomar decisiones al 100%, y buscó la guillotina que finalmente es la que le daría la victoria por sumisión, faltando más de un minuto para que termine el primer asalto. </p>
                    <h2>Manon Fiorot Noquea a Jasmine Jasudavicius en el Primer Asalto</h2>
                    <p>Increíble victoria de la luchadora francesa <b>Manon Fiorot</b>, que arruina la fiesta en Canadá, derrotando a la luchadora local <b>Jasmine Jasudavicius</b> de manera contundente por TKO en el primer asalto, luego de conectar una mano que tumbó en el suelo a su rival, y luego de rematarla con golpes en el piso. </p>
                    <h2>Aiemann Zahabi Derrota a Marlon Vera por Decisión Dividida en una Pelea Cerradísima</h2>
                    <p>En un combate bastante cerrado, que podría haber ido para cualquiera de los 2 peleadores, incluso con <Link href='/peleadores/marlon-vera'>Chito Vera</Link> estando cerca de noquear y finalizar a su rival en el segundo asalto, quien se terminó llevando la victoria fue el canadiense <b>Aiemann Zahabi</b>, quien a ojos de 2 de los 3 jueces, ganó el combate. Con la pelea terminando oficialmente en victoria por decisión dividida para Aiemann Zahabi</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}