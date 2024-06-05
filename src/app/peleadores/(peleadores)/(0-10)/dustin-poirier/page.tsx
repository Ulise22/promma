import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import poirier from '@/assets/peleadores__images/0-10/dustin-poirier/poirier.png'
import pelea from '@/assets/peleadores__images/0-10/dustin-poirier/poirier__pelea.jpg'
import pelea2 from '@/assets/peleadores__images/0-10/dustin-poirier/poirier_pelea2.jpg'
import friends from '@/assets/peleadores__images/0-10/dustin-poirier/poirier_friends.jpg'
import dustin from '@/assets/peleadores__images/0-10/dustin-poirier/poirier.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Poirier () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={poirier} w={30} l={9} d={0} nombre='Dustin Poirier' apodo='THE DIAMOND' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier UFC</h2>
                    <p className={styles.peleador__article__text}>Dustin Poirier es un peleador estadounidense de MMA que actualmente se encuentra #3 en los rankings de Peso Ligero de la <Link href='/articulos/ufc'>UFC</Link>. Ha llegado a ser campeón interino de su división, luego de ganarle por decisión unánime a <Link href='/peleadores/max-holloway'>Max Holloway</Link> en UFC 236. Aunque luego perdería sus 2 oportunidades de ganar el título de Peso ligero, primero con <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomédov</Link>, a quien enfrentó en UFC 242 poco después de vencer a Holloway, la pelea terminaría en una victoria para el ruso en el tercer asalto por una sumisión. Su segunda oportunidad por el título sería cuando este estuviera en manos de <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, quien lo venció también con una sumisión en el tercer asalto.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El peleador estadounidense de MMA Dustin Poirier golopeando en el rostro a su contrincante en un combate de UFC' />
                    <p className={styles.peleador__article__text}>Dustin Poirier pelea en la UFC hace más de 10 años, desde el 1 de enero de 2011, en donde debutaría en UFC 125 con una victoria sobre Josh Grispi por decisión unánime. En estos más de 10 años, Dustin Poirier peleó un total de 29 peleas, con 21 victorias, 7 derrotas y una pelea sin resultado. Ademásde haber ganado el premio a la Actuación de la Noche 4 veces, y de haber protagonizado la pelea de la noche 8 veces, lo que lo deja empatado con peleadores como <b>Nate Diaz</b>, <b>Edson Barboza</b> y <b>Frankie Edgar</b> como los peleadores con más bonos de Pelea de la Noche.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier Récord</h2>
                    <p className={styles.peleador__article__text}>Dustin Poirier en 40 peleas, ostenta un récord de 30-9 (1). Siendo 15 de sus 29 victorias por nocaut, 8 por sumisión y 7 por decisión. Mientras que 3 de sus 9 derrotas son por nocaut, 4 por sumisión y 2 por decisión. Además tiene un combate sin resultado contra <b>Eddie Alvarez</b>, que se paró productos porque Alvarez aplicó 2 rodillazos ilegales.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier vs Conor Mcgregor</h2>
                    <p className={styles.peleador__article__text}>Poirier y <Link href='/peleadores/conor-mcgregor'>Mcgregor</Link> se han enfrentado un total de 3 veces, siendo sus últimos 2 combates algunos de los más vistos en la historia de la UFC.</p>
                    <Image className={styles.peleador__article__image} src={dustin} alt='Dustin Poirier con sangre en el rostro durante una pelea de UFC' />
                    <p className={styles.peleador__article__text}>La primera vez que se enfrentaron, fue bastante temprano en la carrera de Poirier, en septiembre de 2014 en UFC 178, en aquella ocación, el irlandes se ganaría de manera contundente, al vencer por nocaut en el minuto 1:46 del primer asalto, aunque en aquella ocación pelearían en Peso Pluma y no en Peso Ligero, que es donde Poirier pasó la mayor parte de su carrera.</p>
                    <p className={styles.peleador__article__text}>Su segundo enfrentamiento se daría el 23 de enero de 2021, con un Poirier que venía de ganarle a <b>Dan Hooker</b>, y con un Conor, que venía anunciando su vuelta a la UFC, luego de derrotar por TKO a <b>Cowboy Cerrone</b> a los 40 segundos del primer asalto. Esta vez, Dustin Poirier podría tener su revancha, ganando por TKO en el segundo asalto, ganando también el premio a la Actuación de la Noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/6yu2AWK4rxo?si=K35RZMdcZntMXKh3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Poirier vs Mcgregor 3 se anunció con rapidez para julio de 2021, aquel combate tuvo más polémica, ya que Mcgregor con su característico &quot;Trash Talk&quot;, comenzó a calentar la pelea buscando provocar a Poirier, a quien le decía cosas como que &quot;su esposa estaba en sus Dms&quot;, haciendo alusión a que la esposa de Poirier le mandaba mensajes a Conor. La pelea terminó con Dustin Poirier ganando una vez más por TKO, aunque en esta ocasión fue porque la pelea se vio obligada a detenerse, debido a una escaolofriante fractura en la pierna de Mcgregor, que le impidió continuar peleando.</p>
                    <h2 className={styles.peleador__article__title}>Dustin Poirier Historia</h2>
                    <p className={styles.peleador__article__text}>Dustin Glenn Poirier, nació el 19 de enero de 1989, en la ciudad de Lafayette, Luisiana, en Estados Unidos, ciudad donde hoy en día pasa la mayor parte del tiempo junto a su esposa e hija. Es de ascendencia francesa y comenzó a luchar en la secudaria en Northside High School en Lafayette, escuela y estudios que acabó abandonando en noveno grado, debido a que se metía repetidamente en problemas y peleas callejeras.</p>
                    <Image className={styles.peleador__article__image} src={friends} alt='El peleador de UFC Dustin Poirier con sus amigos luego de un entrenamiento en el gimnasio' />
                    <p className={styles.peleador__article__text}>Comenzó a competir como luchador de MMA en mayo de 2009, con apenas 20 años enfrentando a su compatriota <b>Aaron Suárez</b> y dejándolo KO en el primer minuto del primer asalto. Llegó a acumular un récord de 8-1 en 2011, antes de arribar a la UFC.</p>
                    <p>El 1 de enero de 2011 haría su debut enfrentando al estadounidense <b>Josh Grispi</b>, a quien luego de 3 asaltos vencería por decisión unánime. Con el paso del tiempo y en base a dar espectáculo con sus peleas, supo convertirse en una auténtica leyenda de la UFC y en un favorito de los fans, logrando según algunas estimaciones, superar el millón de PPV vendidos en 3 ocasiones, siendo protagonista de 2 de los <Link href='/articulos/most-ppv'>5 Peleas que más PPV vendieron</Link>.</p>
                    <p>Pese a lo grandiosa que ha sido su carrera, y a lo excelente luchador que ha demostrado ser a lo largo de los años, ha tenido la mala fortuna de coincidir con quienes posiblemente sean los mejores peleadores en la historia de la división de peso ligero de la UFC, lo que le impidió hacerse del cinturón de la división.</p>
                    <p>Su primer intento de disputar el título, vino después de que consiguiera ganar el campeonato interino de peso ligero de UFC, al vencer por decisión unánime al ex-campeón de peso pluma de UFC <Link href='/peleadores/max-holloway'>Max Holloway</Link>. Esta victoria le abriría la puerta para enfrentar a <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, contra quien perdería por sumisión en el tercer asalto, aunque estuvo cerca de finalizar una guillotina que casi le otorga la victoria, lamentablemente para nuestro protagonista dicha guillotina no prosperó.</p>
                    <p>Luego de aquella derrota, acumularía una racha de 3 victorias consecutivas, siendo una por decisión unánime contra <b>Dan Hooker</b>, y las 2 victorias contra <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> a quien venció por TKO en las 2 ocasiones. Luego de esta racha de victorias volvería a pelear por el título, contra el nuevo campeón <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, contra quien también perdería por sumisión en el tercer asalto, impidiéndole a nuestro protagonista conseguir el tan ansiado título.</p>
                    <p>La última oportunidad de disputar el campeonato de la división, se dió el 1 de junio de 2024, cuando enfrentaría al campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en <Link href='/noticias/ufc302'>UFC 302</Link>, en un combate donde Dustin dió todo lo que tenía para llevarse el cinturón por fin, terminó por perder la pelea en el quinto asalto por sumisión. Derrota que es especialmente dolorosa, dado que con sus 35 años, ya se ve muy difícil volver a ver al &quot;Diamante&quot; volver a disputar el cinturón. Además, luego del combate, dejó entrever que aquella podía ser la última pelea de su carrera.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/GNiOhJfG1qE?si=10Zm-cBuBNSGcTaf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}