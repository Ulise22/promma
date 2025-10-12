import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/oliveira-vs-gamrot.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Río: ¡Charles Oliveira vs Mateusz Gamrot!',
    description: 'Noche de UFC en Río de Janeiro, Brasil, donde estará Charles Oliveira peleando contra el polaco Mateusz Gamrot',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foliveira-vs-gamrot.e12050a3.webp&w=828&q=65',
        title: 'UFC Río: ¡Charles Oliveira vs Mateusz Gamrot!',
        description: 'Noche de UFC en Río de Janeiro, Brasil, donde estará Charles Oliveira peleando contra el polaco Mateusz Gamrot',
        url: 'https://fullmma.org/eventos/fight-night-oliveira-gamrot'
    }
}

export default function OliveiraGamrot () {
    return(
        <main>
            <ArticleHero title='UFC Río: ¡Charles Oliveira vs Mateusz Gamrot!' subtitle='¡Deiveson Figueiredo Derrota a Montel Jackson Por Decisión Dividida! ¡Joel Álvarez Domina y Derrota a Vicente Luque por Decisión Unánime!' image={hero} date='2025-10-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Esta noche nos depara un evento de UFC espectacular en el Farmasi Arena, ubicada en Río de Janeiro, Brasil. Que tendrá una pelea estelar inmejorable, encabezada por <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, quien busca levantar cabeza luego de su última derrota por KO ante <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> en una pelea por el título de Peso Ligero, enfrentando al polaco <b>Mateusz Gamrot</b>, quien ocupa el puesto #8 en los rankings y quien tuvo la valentía de tomar la pelea a último momento para reemplazar a <b>Rafael Fiziev</b>, quien originalmente iba a encabezar esta cartelera. </p>
                    <p>Además, tendremos el combate entre el #6 de la división de peso gallo y excampeón de peso mosca <b>Deiveson Figueiredo</b>, quien enfrentará al estadounidense <b>Montel Jackson</b>. Y finalmente quienes serán los candidatos a la pelea de la noche son el brasileño <b>Vicente Luque</b>, que le dará la bienvenida a la división de peso wélter al español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, quien tendrá su primer combate en 170lbs en la UFC. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Luan Lacerda Somete a Saimon Oliveira en el Segundo Asalto</h2>
                    <p>Tremenda manera de comenzar esta noche de UFC, con el brasileño <b>Luan Lacerda</b> logrando una increíble victoria sobre su compatriota, contra quien se encontró en el segundo asalto en desventaja, estando por debajo de su rival en el suelo recibiendo golpes, pero fue acá donde encontró su camino a la victoria, siendo capaz de conectar un armbar desde esa posición para obligar a su rival a tapear, y llevarse la primer victoria de la noche por sumisión en el segundo asalto. </p>
                    <h2>Julia Polastri Noquea a Karolina Kowalkiewicz en el Tercer Asalto</h2>
                    <p>Espectacular pelea la que acabamos de presenciar, de las mejores peleas femeninas que nos trajó la UFC en el último tiempo, con la joven brasileña <b>Julia Polastri</b> haciendo lo que quiso con su veterana rival, golpeando a un volumen altísimo, y con una potencia tremenda, llegando finalmente en el tercer asalto los golpes mortales, conectando primero una patada con la pierna izquierda en la cabeza de su rival, y procediendo a golpearla a puño estando aún de pie, hasta que el árbitro las separó, observando correctamente que la luchadora polaca ya no se estaba pudiendo defender y que inevitablemente el combate terminaría en KO. De esta forma, la luchadora local Julia Polastri obtiene el primer nocaut de la noche en un peleón. </p>
                    <h2>Lucas Rocha Derrota a Stewart Nicoll Por Decisión Unánime</h2>
                    <p>Otro espectáculo de pelea la que nos dieron estos 2 peleadores de peso mosca, que finalmente terminó decantándose a favor del luchador local <b>Lucas Rocha</b>, quien en cuanto a cantidad y cálidad conectó más golpes que su rival, llevándose la victoria por decisión unánime, con todos los jueces puntuando este combate 30-27. Pese a todo fue muy digno el papel de luchador australiano, que teniendo todo en contra y peleando en la adversidad fue capaz de sobrevivir todo la pelea, y de devolver varios de los golpes que recibió. </p>
                    <h2>Bia Mesquita Somete a Irina Alekseeva en el Segundo Asalto</h2>
                    <p>Excelente desempeño por parte la peleadora local brasileña <b>Bia Mesquita</b>, quien dominó de principio a fin a su rival, conectando un montón de golpes vía ground&pound, y quien finalmente en el segundo asalto, después de concretar un derribo y de ganarle la espalda a su rival rusa, fue capaz de conectar un mataleón para someterla y llevarse la victoria, extendiendo su invicto a 6-0. </p>
                    <h2>Vitor Pretrino Noquea a Thomas Petersen en el Tercer Asalto</h2>
                    <p>Tremendo nocaut el que fue capaz de conseguir el brasileño <b>Vitor Petrino</b>, en un combate donde estaba siendo ligeramente superior, demostrando que en sus manos tenía un poder que seguramente pondría en aprietos a su rival estadounidense, pero que finalmente fue capaz de mostrar ni bien comenzó el tercer asalto, conectando un upper con la mano derecha y un gancho con la izquierda que tumbarían y dejarían KO a su rival inmediatamente, sin necesidad de lanzar un golpes extra. </p>
                    <h2>Jafel Filho Somete a Clayton Carpenter en el Primer Asalto</h2>
                    <p>Brillante desempeño del brasileño <b>Jafel Filho</b>, quien había comenzado el combate con el pie izquierdo, recibiendo unos durísimos golpes por parte de su rival, que de haber continuado conectando lo habría noqueado, pero que sin embargo, en el transcurso del primer asalto, fue capaz de darle la vuelta a la pelea, conectando una llave al brazo de su oponente que lo obligaría a tapear cuando faltaban menos de 20 segundos para que termine el primer asalto. </p>
                    <h2>Michael Aswell Jr. Noquea a Lucas Almeida en el Primer Asalto</h2>
                    <p>Tremendo nocaut por parte del estadounidense <b>Michael Aswell Jr.</b>, quien le arruina la fiesta a Brasil, siendo el primer luchador de la cartelera en ganarle a un brasileño, luego de noquear a su rival, a quien con una combinación constante de 1-2 fue capaz de conectarlo hasta tumbarlo al suelo, y rematarlo en el piso, donde el árbitro paro la pelea para consagrarlo como ganador del combate. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Kaan Ofli Somete a Ricardo Ramos en el Primer Asalto</h2>
                    <p>Espectacular forma de comenzar esta cartelera estelar, con el australiano consiguienda una increíble sumisión, luego de, estando de pie, treparse hasta alcanzar la espalda de su rival, para finalmente conectar una mataleón que obligaría al brasileño a tapear. De esta forma, el australiano <b>Kaan Ofli</b> logra hacerse con la victoria ante el luchador local, logrando la primer victoria de esta cartelera estelar. </p>
                    <h2>Mario Pinto Noquea a Jhonata Diniz en el Segundo Asalto</h2>
                    <p>Aplastante victoria por parte del portugués <b>Mario Pinto</b>, quien fue capaz de derribar a su rival tanto en el primer como en el segundo asalto, consiguiendo en este último abrirle un corte a su rival en la cara con un codazo descendente, y finalizando con una avalancha de golpes que le permitirían ganar el combate vía TKO ante el luchador brasileño que se vió indefenso ante la estrategia planteada por el portugués. </p>
                    <h2>Joel Álvarez Derrota a Vicente Luque Por Decisión Unánime</h2>
                    <p>Masterclass total de <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, quien demostró completo dominio por sobre su rival, dando la sensación de que en cualquier momento podía llegar a finalizar, llegando incluso a ganar el segundo asalto de la pelea 10-8. Finalmente, aunque se le cortó la racha de 100% de finalizaciones, su debut en la división de peso wélter fue un total éxito, ganando de forma aplastante a su rival con todos los jueces puntuando este combate 30-26. </p>
                    <h2>Deiveson Figueiredo Derrota a Montel Jackson Por Decisión Dividida</h2>
                    <p>En un tremendo combate en el que ambos luchadores mostraron un corazón impresionante, quien se terminó llevando la pelea fue el brasileño y #6 de la división <b>Deiveson Figueiredo</b>, quien le demostró al joven luchador estadounidense que todavía hay niveles y que lejos está de estar acabado. Aunque los jueces dieron por vencedor a Figueiredo por decisión dividida, para mí estuvo muy claro que el brasileño ganó el primer y segundo asalto de forma contundente y por ende el combate. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}