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
            <ArticleHero title='UFC Paris: ¡Nassourdine Imavov vs Caio Borralho!' subtitle='¡Benoit Saint Denis vs Mauricio Ruffy!' image={hero} date='2025-09-06' author={null} updatedDate={null} />
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
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
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