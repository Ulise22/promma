import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc322.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 322: ¡Jack Della Maddalena vs Islam Makhachev! ¡Valentina Shevchenko vs Zhang Weili!',
    description: "",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc322.c08dc6e5.webp&w=828&q=65',
        title: 'UFC 322: ¡Jack Della Maddalena vs Islam Makhachev! ¡Valentina Shevchenko vs Zhang Weili!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc322'
    }
}

export default function UFC322 () {
    return(
        <main>
            <ArticleHero title="UFC 322: ¡Islam Makhachev Derrota a Jack Della Maddalena Por Decisión Unánime y es Doble Campeón! ¡Valentina Shevchenko Derrota a Zhang Weili Por Decisión Unánime!" subtitle='¡Michael Morales Noquea a Sean Brady en el Primer Asalto! ¡Carlos Prates Noquea a Leon Edwards en el Segundo Asalto! ¡Benoit Saint Denis Noquea a Beneil Dariush en el Primer Asalto!' image={hero} date='2025-11-15' author={null} updatedDate='2025-11-16' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Esta noche tendremos la que a mi opinión personal es la mejor cartelera de la UFC en el año, con el <b>UFC 322</b> que estará siendo encabezado por el actual campeón de peso wélter <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>, quien estará defendiendo su cinturón ante el excampeón de peso ligero <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien dejó vacante su cinturón para buscar ser doble campeón de la compañía. Por si fuera poco, la pelea coestelar es igual de emocionante, ya que la actual campeona de peso mosca femenino <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link> estará defendiendo su cinturón ante la última campeona de peso paja <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>, quien al igual que Makhachev, dejó vacante su título para buscar ganar otro esta noche. </p>
                    <p>Y por si con eso no alcanzaba para ver la cartelera completa, además va a estar peleando el ecuatoriano <b>Michael Morales</b>, enfretando al #2 de la división de peso wélter <b>Sean Brady</b>. El excampeón de peso wélter <Link href='/peleadores/leon-edwards'>Leon Edwards</Link> también estará presente, enfrentando al luchador brasileño pertenciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>. Finalmente la cartelera estelar abrirá con una pelea espectacular, cuando el veterano luchador estadounidense de peso ligero <b>Beneil Dariush</b>, se enfrentará al francés <b>Benoit Saint Denis</b>, donde el francés tendrá la oportunidad de entrar al top 10 de la división en caso de llevarse una victoria. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Matheus Camilo Derrota a Viacheslav Borshchev por Decisión Unánime</h2>
                    <p>En un sólido desempeño por parte del brasileño <b>Matheus Camilo</b>, logra hacerse con la victoria luego de conectar buenos golpes a lo largo del combate, pero especialmente luego de ser capaz de derribar en reiteradas ocasiones a su rival que practicamente no tenía defensa ante el de Brasil. De esta manera Camilo se lleva la victoria en esta primera pelea de la cartelera. </p>
                    <h2>Baisangur Susurkaev Noquea a Eric McConico en el Tercer Asalto</h2>
                    <p>Espectacular victoria para el luchador de Chechenia <b>Baisangur Susurkaev</b>, quien desde hace tiempo viene dejando las espectativas altas y que hoy no decepcionó, aunque el inicio del combate fue más parejo de lo que la mayoría esperaba, la cálidad del peleador ruso finalmente salió a relucir en el último asalto de la pelea, cuando con una mano derecha letal terminaría dejando KO a su rival, llevándose la victoria y consiguiendo la primer finalización de la noche. </p>
                    <h2>Fatima Kline Derrota a Angela Hill Por Decisión Unánime</h2>
                    <p>Gran victoria para la luchadora estadounidense <b>Fatima Kline</b>, quien luego de dominar completamente a su veterana e histórica rival <b>Angela Hill</b>, consigue volver a vaca con un nuevo triunfo que le garantiza entrar en el ranking de su división. </p>
                    <h2>Pat Sabatini Derrota a Chepe Mariscal Por Decisión Unánime</h2>
                    <p>Muy buena pelea para el estadounidense <b>Pat Sabatini</b>, quien supo dominar completamente a su rival, a través de los derribos y del control a ras de lona, con constantes intentos de sumisión que le fueron quitando minutos al reloj y que iban mostrando que Sabatini era el mejor peleador de los 2. AAunque Mariscar fue capaz de conectar unos golpes muy potentes a su rival, lo cierto es que en el momento en que era derribado no tenía nada que hacer, por lo que no le alcanzó para defender su invicto en la UFC, obteniendo su primer derrota en la compañía. </p>
                    <h2>Kyle Daukaus Somete a Gerald Meershchaert en el Primer Asalto</h2>
                    <p>Finalización express por parte de <b>Kyle Daukaus</b>, quien con una combinación de golpes derribó a su rival al suelo. Posterior a esto, en lugar de buscar la finalización por TKO, buscó ahorcar a su rival con un Darce Choke que finalmente obligaría a Meershchaert a tapear. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Ethyn Ewing Derrota a Malcolm Weellmaker Y Da La Sorpresa</h2>
                    <p>El luchador estadounidense <b>Ethyn Ewing</b> logra una espectacular victoria luego de dominar completamente a su rival <b>Malcolm Weellmaker</b>, quien era uno de los mayores prospectos de la división, estando invicto con 3-0 hasta el día de hoy. Todo esto se da con Ewing habiendo tomado la pelea en corto aviso, luego de haber peleado hace poco más de una semana. </p>
                    <h2>Erin Blanchfield Somete a Tracy Cortez en el Segundo Asalto</h2>
                    <p>Tremendo desempeño de la #4 de la división de peso mosca femenino <b>Erin Blanchfield</b>, quien pese a haber sufrido en el bastante en el primer asalto, recibiendo golpes contundentes por parte de <b>Tracy Cortez</b>, que le hizo perder el primer asalto, fue capaz de recuperarse en el segundo, al conectar un mataleón hermoso en el siguiente asalto, que obligó a su rival a tapear, obteniendo la victoria por la vía de la sumisión. </p>
                    <h2>Gregory Rodrigues Derrota a Roman Kopylov Por Decisión Unánime</h2>
                    <p>Espectacular pelea la que acabamos de presenciar, con el brasileño <b>Gregory Robocop Rodrigues</b> siendo el claro ganandor del combate, dominando al ruso <b>Roman Kopylov</b>, conectando un montón de golpes de mejor cálidad que las de su rival. </p>
                    <h2>Bo Nickal Noquea a Rodolfo Vieira en el Tercer Asalto</h2>
                    <p>Espectacular KO el que consiguió el estadounidense <b>Bo Nickal</b> en el tercer asalto de la pelea, que provino de una patada con la pierna izquierda a la cabeza de su rival que lo tumbó en el suelo, dejándolo inconsciente en el acto. Todo esto viene después de una actuación que venía siendo sobresaliente por parte de Nickal, quien mostró haber mejorado un montón su striking, conectando golpes contundentes todo el tiempo al brasileño. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Benoit Saint Denis Noquea a Beneil Dariush en el Primer Asalto</h2>
                    <p>Tremendo KO el que acabamos de presenciar, con el peleador francés <b>Benoit Saint Denis</b> sacándose un gancho de izquierda que mandaría a la lona a su rival, sin ni siquiera la necesidad de ir a rematarlo. De esta forma, el ex militar obtiene una victoria que lo posiciona en el top 10 de la división de peso ligero que actualmente tiene a <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> como campeón. </p>
                    <h2>Carlos Prates Noquea a Leon Edwards en el Segundo Asalto</h2>
                    <p>Impresionante lo que acaba de hacer el brasileño <Link href='/peleadores/carlos-prates'>Carlos Prates</Link> que cada vez hace más gala del poder de KO que tiene en sus manos, esta vez ante nada más ni nada menos que el excampeón de la división <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, a quien tumbó con sus poderosas manos, en una victoria que lo hará escalar hasta el top 5 de la división, pertenciendo a la élite de los wélter. </p>
                    <h2>Michael Morales Noquea a Sean Brady en el Primer Asalto</h2>
                    <p>Espectacular lo que acaba de hacer el luchador ecuatoriano <b>Michael Morales</b>, que sorprendió a más de uno, y que nos dió al público de latinoamérica una alegría tremenda, luego de noquear de manera brillante al luchador estadounidense <b>Sean Brady</b>, quien se vió durante el combate claramente afectado por el poder de golpeo que tenía Morales, hasta que finalmente uno de esos golpes que venía conectando lo tumbaron al piso, siendo finalmente finalizado con un par de golpes más, que acabarían por darle la victoria por TKO en el primer asalto del combate. </p>
                    <h2>Valentina Shevchenko Derrota a Zhang Weili Por Decisión Unánime</h2>
                    <p>Brillante desempeño de la campeona <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>, quien ante quien seguramente es la rival más difícil de su carrera, dominó completamente el combate de comienzo a fin, llevándose la victoria por ser mejor que su rival <Link href='/mujeres/zhang-weili'>Zhang Weili</Link> los 5 asaltos. Derribando como mínimo una vez por asalto, con la luchadora china siendo incapaz de defender estos derribos. De esta forma Valentina extiende su legado, consigue una defensa ante la rival más díficil que le podían poner en frente, y retiene exitosamente su cinturón. </p>
                    <h2>Islam Makhachev Derrota a Jack Della Maddalena Por Decisión Unánime y es Doble Campeón</h2>
                    <p>Histórico lo que acaba de conseguir <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien dominó de principio a fin al hasta ahora campeón <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>, derribándolo en practicamente todos los asaltos del combate, castigándolo a golpes, intentando sumisiones todo el tiempo, siendo muy activo en el suelo, y Jack no pudo hacer nada ante tal dominio, su única esperanza era esperar que termine el asalto para comenzar el otro de pie. De esta manera Islam Makhachev se convierte en doble campeón de la UFC, al haber sido campeón de peso ligero y ahora campeón de peso wélter. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}