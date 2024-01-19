import PeleadoresHero from '../../components/PeleadoresHero'
import poirier from '@/assets/peleadores__images/dustin-poirier/poirier.png'
import pelea from '@/assets/peleadores__images/dustin-poirier/poirier__pelea.jpg'
import pelea2 from '@/assets/peleadores__images/dustin-poirier/poirier_pelea2.jpg'
import friends from '@/assets/peleadores__images/dustin-poirier/poirier_friends.jpg'
import dustin from '@/assets/peleadores__images/dustin-poirier/poirier.jpg'
import styles from '../../components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Poirier () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={poirier} w={29} l={8} d={0} nombre='Dustin Poirier' apodo='THE DIAMOND' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier UFC</h2>
                    <p className={styles.peleador__article__text}>Dustin Poirier es un peleador estadounidense de MMA que actualmente se encuentra #3 en los rankings de Peso Ligero de la <Link href='/promotoras/ufc'>UFC</Link>. Ha llegado a ser campeón interino de su división, luego de ganarle por decisión unánime a <Link href='/peleadores/max-holloway'>Max Holloway</Link> en UFC 236. Aunque luego perdería sus 2 oportunidades de ganar el título de Peso ligero, primero con <b>Khabib Nurmagomédov</b>, a quien enfrentó en UFC 242 poco después de vencer a Holloway, la pelea terminaría en una victoria para el ruso en el tercer asalto por una sumisión. Su segunda oportunidad por el título sería cuando este estuviera en manos de <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, quien lo venció también con una sumisión en el tercer asalto.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El peleador estadounidense de MMA Dustin Poirier golopeando en el rostro a su contrincante en un combate de UFC' />
                    <p className={styles.peleador__article__text}>Dustin Poirier pelea en la UFC hace más de 10 años, desde el 1 de enero de 2011, en donde debutaría en UFC 125 con una victoria sobre Josh Grispi por decisión unánime. En estos más de 10 años, Dustin Poirier peleó un total de 29 peleas, con 21 victorias, 7 derrotas y una pelea sin resultado. Ademásde haber ganado el premio a la Actuación de la Noche 4 veces, y de haber protagonizado la pelea de la noche 8 veces, lo que lo deja empatado con peleadores como <b>Nate Diaz</b>, <b>Edson Barboza</b> y <b>Frankie Edgar</b> como los peleadores con más bonos de Pelea de la Noche.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier Récord</h2>
                    <p className={styles.peleador__article__text}>Dustin Poirier en 38 peleas, ostenta un récord de 29-8. Siendo 14 de sus 29 victorias por nocaut, 8 por sumisión y 7 por decisión. Mientras que 3 de sus 8 derrotas son por nocaut, 3 por sumisión y 2 por decisión. Además tiene un combate sin resultado contra <b>Eddie Alvarez</b>, que se paró productos porque Alvarez aplicó 2 rodillazos ilegales.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier vs Conor Mcgregor</h2>
                    <p className={styles.peleador__article__text}>Poirier y <Link href='/peleadores/conor-mcgregor'>Mcgregor</Link> se han enfrentado un total de 3 veces, siendo sus últimos 2 combates algunos de los más vistos en la historia de la UFC.</p>
                    <Image className={styles.peleador__article__image} src={dustin} alt='Dustin Poirier con sangre en el rostro durante una pelea de UFC' />
                    <p className={styles.peleador__article__text}>La primera vez que se enfrentaron, fue bastante temprano en la carrera de Poirier, en septiembre de 2014 en UFC 178, en aquella ocación, el irlandes se ganaría de manera contundente, al vencer por nocaut en el minuto 1:46 del primer asalto, aunque en aquella ocación pelearían en Peso Pluma y no en Peso Ligero, que es donde Poirier pasó la mayor parte de su carrera.</p>
                    <p className={styles.peleador__article__text}>Su segundo enfrentamiento se daría el 23 de enero de 2021, con un Poirier que venía de ganarle a <b>Dan Hooker</b>, y con un Conor, que venía anunciando su vuelta a la UFC, luego de derrotar por TKO a <b>Cowboy Cerrone</b> a los 40 segundos del primer asalto. Esta vez, Dustin Poirier podría tener su revancha, ganando por TKO en el segundo asalto, ganando también el premio a la Actuación de la Noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/6yu2AWK4rxo?si=K35RZMdcZntMXKh3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Poirier vs Mcgregor 3 se anunció con rapidez para julio de 2021, aquel combate tuvo más polémica, ya que Mcgregor con su característico &quot;Trash Talk&quot;, comenzó a calentar la pelea buscando provocar a Poirier, a quien le decía cosas como que &quot;su esposa estaba en sus Dms&quot;, haciendo alusión a que la esposa de Poirier le mandaba mensajes a Conor. La pelea terminó con Dustin Poirier ganando una vez más por TKO, aunque en esta ocasión fue porque la pelea se vio obligada a detenerse, debido a una escaolofriante fractura en la pierna de Mcgregor, que le impidió continuar peleando.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier Historia</h2>
                    <p className={styles.peleador__article__text}>Dustin Glenn Poirier, nació el 19 de enero de 1989, en la ciudad de Luisiana, Lafayette, en Estados Unidos, ciudad donde hoy en día pasa la mayor parte del tiempo junto a su esposa e hija. Es de ascendencia francesa y comenzó a luchar en la secudaria en Northside High School en Lafayette.</p>
                    <Image className={styles.peleador__article__image} src={friends} alt='El peleador de UFC Dustin Poirier con sus amigos luego de un entrenamiento en el gimnasio' />
                    <p className={styles.peleador__article__text}>Comenzó a pelear de como luchador de MMA en mayo de 2009, con apenas 20 años. Llegó a acumular un récord de 8-1 hasta 2011, cuando debutaría en la UFC. Desde entonces pelea en la compañía es una de las figuras destacadas de su división, protagonizando 2 de los 5 combates que más recaudaron en PPV de la historia de la compañía.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier Última Pelea</h2>
                    <p className={styles.peleador__article__text}>La última pelea de Dustin Poirier fue contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, en UFC 291 por el título BMF (Badest Mother Fucker). Ambos peleadores ya se habían enfrentado en el pasado, en abril de 2018, en aquella ocación, Dustin Poirier se llevó la pelea al derrotar por TKO a Gaethje en el cuarto asalto, lo que valió el premio a la Pelea de la noche y la pelea del año.</p>
                    <p className={styles.peleador__article__text}>En esta ocasión, sin embargo, las cosas terminaron diferente, ya que Justin Gaethje fue capaz de imponerse y de acabar con Poirier con una patada en la cabeza al minuto del segundo asalto, que dejó KO a Dustin Poirier.</p>
                    <Image className={styles.peleador__article__image} src={pelea2} alt='El peleador estadounidense de MMA Dustin Poirier golopeando en el rostro a su contrincante en un combate de UFC' />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}