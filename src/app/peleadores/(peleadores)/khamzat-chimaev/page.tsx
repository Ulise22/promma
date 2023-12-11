import PeleadoresHero from '../../components/PeleadoresHero'
import khamzat from '@/assets/peleadores__images/khamzat-chimaev/khamzat.png'
import pelea from '@/assets/peleadores__images/khamzat-chimaev/khamzat_pelea.jpg'
import pelea2 from '@/assets/peleadores__images/khamzat-chimaev/khamzat_pelea2.jpg'
import post from '@/assets/peleadores__images/khamzat-chimaev/khamzat_post.jpg'
import post2 from '@/assets/peleadores__images/khamzat-chimaev/khamzat_post2.jpg'
import styles from '../../components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Khamzat () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={khamzat} w={13} l={0} d={0} nombre='Khamzat Chimaev' apodo='BORZ' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Chimaev</h2>
                    <p className={styles.peleador__article__text}>Khamzat Chimaev es un peleador ruso de MMA que actualmente se encuentra ranqueado #8 en la división de Peso medio de la UFC, donde pelea desde 2020.</p>
                    <Image className={styles.peleador__article__image} src={pelea2} alt='El peleador de mma ruso Khamzat Chimaev golpeando a su rival en el suelo en un combate de UFC' />
                    <p className={styles.peleador__article__text}>Chimaev hizó su debut en UFC el 16 de julio de 2020, ganando por sumisión en el segundo asalto al galés John Philips, lo que le valió el premio a la actuación de la noche. Tan sólo 10 días después tendría su segundo combate, esta vez en Peso Welter contra Rhys McKee, a quien noquearía a los 3 minutos del primer asalto, logrando ya en su segunda pelea, su segundo premio a la actuación de la noche, y rompiendo el récord de menos días entre 2 victorias en la UFC.</p>
                    <p className={styles.peleador__article__text}>Actualmente lleva 7 victorias en UFC, sin ninguna derrota todavía, intercaladas entre el Peso Welter y el Peso Medio, y es uno de los grandes prosprectos de la UFC, que se espera pueda en algún momento convertirse en campeón de la compañía.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Récord</h2>
                    <p className={styles.peleador__article__text}>Khamzat Chimaev sostiene un récord perfecto de 13-0. Siendo 6 de estas victorias por nocaut, 5 por sumisión y 2 por decisión. Además, 7 de sus victorias fueron en <Link href='/promotoras/ufc'>UFC</Link>, 4 en Brave CF, que es una promotora de Medio Oriente, y sus otras 2 peleas se organizaron en Suecia por promotoras menos conocidas.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El peleador de UFC Khamzat Chimaev conectando un golpe contra el rostro de su rival en un combate' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Khabib</h2>
                    <p className={styles.peleador__article__text}>La historia entre Khamzat Chimaev y <b>Khabib Nurmagomedoz</b>, sucedió durante el evento de UFC 280, que vería como el peleador entrenado por Khabib, <Link href='/campeones/islam-makhachev'>Islam Makhachev</Link>, le arreabataría el título de Peso Ligero al brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. Después de este combate, hubo un enfrentamiento fuera del octagono entre el primo de Khabib, <b>Abukar Nurmagomedov</b>, quien había peleado en ese evento en una de los combates preliminares del evento. La pelea casi escala al punto de tener involucrados tanto a Khamzat como a Khabib, por lo que seguridad se tuvo que involucrar para evitar que el conflicto escale a mayores.</p>
                    <p className={styles.peleador__article__text}>Al día siguiente del incidente, publicaron un vídeo donde comentaban haberse pedido disculpas mutuamente. Por su parte, Khabib Numagomédov declaró: &quot;Lo que pasó ayer no nos deja bien. Ni a mí, ni a Khamzat ni a Abubakar. Para serles sincero estoy cansado de este sin sentido. Por eso estamos acá reunidos como hermanos. Hablamos entre nosotros y nos pedimos disculpas. Espero que en el futuro, sólo nos reunamos para pelear por buenas razones&quot;.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Qah195MOT7w?si=mJvbEFAYOn0BYZgu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Ranking</h2>
                    <p className={styles.peleador__article__text}>Khamzat Chimaev actualmente ocupa la octava posición del ranking de Peso Medio de UFC. Aunque en su momento, cuando aún peleaba en Peso Welter, llegó a ocupar la #4 posición en el ranking de Peso Welter en la compañía.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Estatura</h2>
                    <p className={styles.peleador__article__text}>Khamzat Chimaev mide 1,88m o 6′ 2″.</p>
                    <Image className={styles.peleador__article__image} src={post} alt='Khamzat Chimaev siendo elegido el ganador de la pelea de UFC contra el peleador brasileño de MMA Gilbert Burns' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Última Pelea</h2>
                    <p className={styles.peleador__article__text}>La última pelea de Khamzat Chimaev fue contra el histórico peleador nigeriano <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> por UFC 294. Originalmente, estaba planeado que Chimaev se enfrente al brasileño <b>Paulo Costa</b>, pero debido a una cirugía a la que se sometió el brasileño, llamaron en corto aviso al ex-campeón de Peso Welter Kamaru Usman, quien aceptó aceptó subir de división y pelear en Peso Medio.</p>
                    <p className={styles.peleador__article__text}>Finalmente la pelea terminó luego de 3 asaltos con una victoria para el peleador ruso por decisión dividida. En este combate destacó Chimaev al mostrar su buen Jiu Jitsu, puesto que fue capaz de derribar más de una vez a alguien como Usman, que tenía una de las mejores defensas contra derribo de toda la UFC.</p>
                    <Image className={styles.peleador__article__image} src={post2} alt='Khamzat Chimaev sentado en la pared del octagono luego de ganar su combate de UFC' />
                </article>
            </section>
        </main>
    )
}