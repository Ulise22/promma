import PeleadoresHero from '../../components/PeleadoresHero'
import usman from '@/assets/peleadores__images/kamaru-usman/usman.png'
import pelea from '@/assets/peleadores__images/kamaru-usman/usman_pelea.jpg'
import abrazo from '@/assets/peleadores__images/kamaru-usman/usman_abrazo.jpg'
import kamaru from '@/assets/peleadores__images/kamaru-usman/usman.jpg'
import card from '@/assets/peleadores__images/kamaru-usman/usman_card.jpg'
import styles from '../../components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Usman () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={usman} w={20} l={4} d={0} nombre='Kamaru Usman' apodo='NIGERIAN NIGHTMARE' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Usman UFC</h2>
                    <p>Kamaru Usman es un peleador de origen nigeriano que actualmente está rankeado en el puesto #1 de la división de Peso Welter, en donde llegó a ser campeón en marzo de 2019m cuando le arrebataría el título por decisión unánime al estadounidense <b>Tyron Woodley</b>. Tuvo 5 defensas por el título exitosas hasta que el 20 de agosto perdió el título por KO en el 5to asalto contra el jamaicano <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, a quien tuvo la oportunidad de volver a enfrentar poco después sin mucho exito.</p>
                    <Image className={styles.peleador__article__image} src={card} alt='Kamaru Usman entrando al octagono en el que peleara en UFC' />
                    <p>Comenzó a pelear en la compañía en The Ultimate Fighter, donde ganaría el torneo y el premio a la actuación de la noche al vencer al estadounidense Hayder Hassan. Su debut en una cartelera de UFC se daría contra el mismo Leon Edwards el 19 de diciembre de 2015, a quien luego de 3 asaltos vencería por decisión unánime.</p>
                    <p>Desde entonces ha peleado varios años en la UFC, maneteniendo un invicto en la compañía que sólo sería roto en agosto de 2022, luego de un poco menos de 7 años en la compañía.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kamaru Usman Récord</h2>
                    <p>Kamaru Usman tiene un record de 20-4. Siendo 9 de sus 20 victorias por nocaut, 1 por sumisión y 10 por decisión. Mientras que de sus 4 derrotas, 1 fue por sumisión, 1 por nocaut y 2 por decisión. Siendo además, 3 de sus 4 derrotas en sus últimos 3 combates.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='Kamaru Usman golpeando en el rostro a Khamzat Chimaev en su combate de UFC' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kamaru Usman vs Leon Edwards</h2>
                    <p>Kamaru Usman y <Link href='/peleadores/leon-edwards'>Leon Edwards</Link> se enfrentaron un total de 3 veces. La primera de estas siendo en el debut profesional de Usman en la UFC, contra un Leon Edwards que ya tenía un par peleas en la UFC. Dicho combate terminó con una victoria por decisión unánime a favor del nigeriano.</p>
                    <p>Desde entonces, Kamaru Usman acumuló una racha de 13 victorias consecutivas, entre las que destacan su victoria contra <b>Tyron Woodley</b>, que le daría su cinturón como Camepeón del Peso Welter. Mientras que por su lado, Leon Edwards acumularía una racha de 9 victorias consecutivas que lo harían merecedor de una chance por el título contra el ahora campeón, Kamaru Usman. Aquel combate se realizaría el 20 de agosto de 2022 en UFC 278 y se lo terminaría llevando el jamaicano con un increíble KO, producto de una patada en la cabeza en el quinto asalto, que además lo haría ganador del premio a la Actuacióon de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/egNhnzfX6VU?si=x7u6LsAEVtydT6Iu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>La nueva recancha entre estos 2 no se haría esperar mucho, ya que unos meses después, el 18 de marzo de 2023, se celebraría el UFC 286 en Londres que enfrentaría por tercera vez a estos peleadores. En esta ocasión, desafortunadamente para Usman, luego de los 5 asaltos, Leon Edwards se llevaría el combate con una victoria por decisión dividida.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kamaru Usman Historia</h2>
                    <p>Kamaru Usman nació el 11 de mayo de 1987 en la ciudad de Benín, Nigeria. Tanto él como su familia se mudaron a los Estados Unidos, cuando Usman tenía tan sólo 5 años. En su adolescencia, Kamaru comenzó a practicar Wrestling en la escuela secundaria a la que asistía, llegando a acumular un récord de 56-0, tanto en su escuela secundaria como posteriormente en su universidad, Usman obtendría una carrera exitosa en el wrestling. </p>
                    <Image className={styles.peleador__article__image} src={kamaru} alt='Kamaru Usman en frente de una multitud de personas en blanco y negro' />
                    <p>Esto en el futuro le terminaría abriendo las puertas a cometir en MMA, donde debutó de manera profesional el 30 de noviembre de 2012, con 25 años, contra el estadounidense David Glover, a quien derrotaía por TKO en el segundo asalto.Tan sólo 6 peleas necesitó para ser tenido en cuenta por la UFC, a la que llegó con un récord de 5-1, con todas sus victorias siendo por nocaut.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kamaru Usman Última Pelea</h2>
                    <p>La última pelea de Kamaru Usman fue contra el ruso <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, a quien enfrentó en reemplazo del brasileño <b>Paulo Costa</b>, quien era quien se debía enfrentarse al ruso. Usman aceptó la pelea en corto aviso, donde además aceptó pelear en una división superior a la que él está acostumbrado, peleando en Peso Medio.</p>
                    <Image className={styles.peleador__article__image} src={abrazo} alt='Kamaru Usman y Khamzat Chimaev dandose un abrazo luego de su combate de UFC' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kamaru Usman Próxima pelea</h2>
                    <p>Aún no hay confimación oficial sobre cuál va a ser el próximo rival de Kamaru Usman luego de su pelea con Khamzat Chimaev</p>
                </article>
            </section>
        </main>
    )
}