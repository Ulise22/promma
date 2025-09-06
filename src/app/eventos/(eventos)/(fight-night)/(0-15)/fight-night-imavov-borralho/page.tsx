import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/imavov_vs_borralho.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Paris: ¡Nassourdine Imavov vs Caio Borralho!',
    description: 'Noche de UFC en París, con Nassourdine Imavov enfrentando a Caio Borralho en peso medio en busca de una oportunidad por el título. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimavov_vs_borralho.46ce75c3.webp&w=828&q=65',
        title: 'UFC Paris: ¡Nassourdine Imavov vs Caio Borralho!',
        description: 'Noche de UFC en París, con Nassourdine Imavov enfrentando a Caio Borralho en peso medio en busca de una oportunidad por el título. ',
        url: 'https://fullmma.org/eventos/fight-night-imavov-borralho'
    }
}

export default function ImavovBorralho () {
    return(
        <main>
            <ArticleHero title='UFC Paris: ¡Nassourdine Imavov vs Caio Borralho!' subtitle='¡Benoit Saint Denis vs Mauricio Ruffy! ¡Ante Delija Debuta con Nocaut ante Marcin Tybura!' image={hero} date='2025-09-06' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Tremenda evento de UFC tendremos el día de hoy en París, Francia, que nos recibirá con una pelea estelar candidata a la pelea de la noche como lo es el Nasssourdine Imavov vs <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, que se verán cara a cara en la busqueda de ganarses una oportunidad por el título que tiene <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>.</p>
                    <p>El evento coestelar es igual de emocionante, ya que nos trae a los peleadores de peso ligero <b>Benoit Saint Denis</b>, que volverá a pelear en su país para enfrentar al brasileño, que al igual que Borralho pertenece a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <b>Mauricio Ruffy</b>, que luego de 3 victorias consecutivas en la UFC buscará entrar al top 15 de la división. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Sam Hughes Somete en el Segundo Asalto a Shauna Bannon</h2>
                    <p>La luchadora estadounidense <b>Sam Hughes</b> logra hacerse con la victoria en la primera pelea de esta cartelera, luego de dominar completamente en el primer asalto a su contrincante irlandesa, al conseguir un derribo y luego castigarla a golpes y codazos en el suelo, y en el segundo asalto consiguiendo hacer más de lo mismo, don la diferencia de que consiguió tomarle la espalda a <b>Shauna Bannon</b>, para conectar un mataleón que obligaría a su oponente a tapear. De esta forma la luchadora americana logra la primer victoria y la primer finalización de la noche. </p>
                    <h2>Rinat Fakhretdinov Noquea a Andreas Gustafsson en el Primer Asalto</h2>
                    <p>El peleador ruso <b>Rinat Fakhretdinov</b> logra una impresionante victoria por la vía del nocaut de forma express, necesitando menos de un minuto de combate, en lo que fue una ráfaga de golpes, para llevarse la victoria por TKO, luego de que su rival sueco <b>Andreas Gustafsson</b>, quedara abrumado por la cantidad y la potencia del golpeo de su rival. De esta forma Rinat consigue el primer nocaut de la noche. </p>
                    <h2>Robert Bryczek Noquea a Brad Tavares en el tercer asalto</h2>
                    <p>El luchador polaco <b>Robert Bryczek</b> logra una espectacular victoria por TKO en el tercer asalto de la pelea, luego de estar muy cerca de conseguir lo mismo en el primer asalto, y aunque el estadounidense <b>Brad Tavares</b> fue capaz de sobrevivir los primeros minutos de su rival, finalmente para el último round de la pelea no pudo hacer nada contra Robert, quien consigue la victoria y el segundo nocaut de este UFC Paris. </p>
                    <h2>Sam Peterson Noquea a Trey Waters en el Primer Asalto</h2>
                    <p>Tremenda victoria para el luchador inglés <b>Sam Patterson</b>, que aprovechando la guardia baja de su rival <b>Trey Waters</b>, lo conectó y golpeó en la cabeza hasta casi desmayarlo, teniendo el árbitro que intervenir para a los 3 minutos del primer asalto, darle la victoria por TKO. </p>
                    <h2>Kaue Fernandes Derrota a Harry Hardwik por TKO en el primer asalto</h2>
                    <p>Una locura lo que acabamos de ver en esta pelea, con el brasileño <b>Kaue Fernandes</b> llevándose la victoria ante el inglés <b>Harry Hardwick</b> luego de patearlo hasta que no pudiera caminar, dejándole literalmente sin poder ponerse de pie, luego de dejarle lastimadas las 2 piernas que sufrieron las patadas del brasileño. La pelea terminó con una victoria por TKO para Fernandes ante un Hardwick que debió ser retirado en silla de ruedas luego de todo el daño recibido con esas patadas. </p>
                    <h2>Ante Delija Noquea a Marcin Tybura en el Primer Asalto</h2>
                    <p>El luchador croata <b>Ante Delija</b>, que estaba debutando en la UFC, enfrentando al #7 de la división de peso pesado <b>Marcin Tybura</b>, logra una impresionante victoria por TKO luego de conectar una mano izquierda que tumbaría a su rival, necesitando sólo de un par de golpes para que el árbitro los separara y lo diera por ganador en su primer pelea en la compañía, ganándose ya un lugar en el top 10 de los pesos pesados de la UFC. </p>
                    <h2>Oumar Sy Noquea a Brendson Ribeiro en el Primer Asalto</h2>
                    <p>Primer victoria para los franceses, luego de que <b>Oumar Sy</b> llevara en 2 ocasiones al suelo a su rival, conectando exitosamente sus 2 intentos de derribo, y lo castigara con golpes desde el suelo, dejando al brasileño <b>Brendson Ribeiro</b> indefenso ante los ataques de su rival. De esta forma terminamos la cartelera preliminar con un total de 7 finalizaciones en 7 peleas, espectacular. Además, los franceses consiguen su primer victoria de la noche en una cartelera a la que todavía le quedan por pelear a un montón de peleadores de este país. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>William Gomis Derrota a Robert Ruchala por Decisión Unánime</h2>
                    <p>Primera pelea que se va a la decisión en esta cartelera, en lo que es la primer pelea estelar de la noche. En este caso quien terminó saliendo triunfador es el peleador local, el francés <b>William Gomis</b>, quien fue mejor a su rival en la mayor parte de la pelea, sabiendo cerrar de gran manera su combate en el tercer asalto, que a mi criterio fue el mejor de Gomis. </p>
                    <h2>Axel Sola Debuta Noqueando a Rhys McKee en el Tercer Asalto</h2>
                    <p>En lo que estaba siendo una pelea muy pareja, el peleador francés que llegaba a este cobate invicto <b>Axel Sola</b>, logra hacerse con la victoria en el tercer asalto del combate, luego de conectar un golpe en la boca del estomago que derribaría a su rival al suelo, siguiendo este golpe con una combinación de manos en el suelo que llevarían al árbitro a terminar la pelea, al ver que <b>Rhys McKee</b> ya ni se estaba defendiendo. De esta manera, los franceses mantienen el invicto en lo que va de este evento, completando un 3/3 en cuanto a victorias. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}