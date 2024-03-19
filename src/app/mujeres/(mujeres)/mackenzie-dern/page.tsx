import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import mackenzie from '@/assets/peleadores__images/mujeres/mackenzie-dern/mackenzie-dern.png'
import dern from '@/assets/peleadores__images/mujeres/mackenzie-dern/mackenzie_sparring.jpg'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Mackenzie () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={mackenzie} w={13} l={5} d={0} nombre='Mackenzie Dern' apodo={null} categoria='Peso Paja Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Mackenzie Dern UFC</h2>
                    <p className={styles.peleador__article__text}>Mackenzie Dern es una peleadora estadounidense que compite en la división de peso paja femenino de la UFC desde marzo de 2018, cuando debutaría contra Ashley Cooper, a quien vencería por decisión unánime. En la compañía ha peleado un total de 13 combates, en los que ha ganado 8 y perdido 5.</p>
                    <p className={styles.peleador__article__text}>Cuenta con la distinción de ser la mujer con más victorias por sumisión en su división, estando empatada en todas las divisiones con la luchadora canadiense <b>Gillian Robertson</b> con un total de 4.</p>
                    <h2 className={styles.peleador__article__title}>Mackenzie Dern Récord</h2>
                    <p className={styles.peleador__article__text}>Mackenzie Dern posee un récord profesional de 13-5. Siendo 6 de sus 13 victorias por sumisión y 7 por decisión. Mientras que de sus 5 derrotas, sólo 1 fue por nocaut y las otras 4 fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Mackenzie Dern Historia</h2>
                    <p className={styles.peleador__article__text}>Mackenzie Lynne Dern Santo nació eñ 24 de marzo de 1993 en la ciudad de Phoenix, capital del Estado de Arizona en Estados Unidos. Es hija de un competidor de grappling condecorado brasileño, que constantemente la llevaba a su Brasil natal, por lo que es capaz de hablar con fluidez tanto inglés como portugués.</p>
                    <p className={styles.peleador__article__text}>Por la clara influencia de su padre comenzó a entrenar a los 3 años junto a este, y junto a su madrastra que también es brasileña. Comenzó a competir a una temprana edad en divisiones de adultos con tan sólo 14 años, ganando un campeonato mundial en cada nivel de cinturón hasta lograr hacerse con el cinturón negro de jiu-jitsu brasileño que le fue entregado por su padre y maestro <b>Wellington Dias</b>, cuando Mackenzie tenía 19 años. </p>
                    <Image className={styles.peleador__article__image} src={dern} alt='La peleadora de UFC Mackenzie Dern golpeando un saco de boxeo en un entrenamiento' />
                    <p className={styles.peleador__article__text}>Luego de una destacada trayectoria en el jiu jitsu, donde fue capaz de ganar cada uno de los 5 campeonatos principales/de mayor rango de la IBJJF Gi, comenzó a practicar MMA, donde competiría de manera profesional por primera vez el 22 de julio de 2016, enfrentando a su compatriota <b>Kania Rosas</b> en la promotora <b>Legacy FC</b>, a quien derrotaría por decisión unánime luego de 3 asaltos. </p>
                    <p className={styles.peleador__article__text}>Continuaría compitiendo en promotoras estadounidenses hasta que arribar a la <Link href='/promotoras/ufc'>UFC</Link>, a la que llegaría con un récord de 5-0. En la compañía haría su debut el 3 de marzo de 2018, enfrentando a la estadounidense <b>Ashley Yoder</b>, a quien vencería por decisión unánime. Luego de esa pelea, se enfrentaría a <b>Amanda Cooper</b>, a quien sería capaz de someter en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Luego de aquel combate, Mackenzie tomaría la decisión de poner en pausa su carrera profesional como artista marcia, debido a que, junto con su esposo <b>Wesley Santos</b>, quien es un surfista profesional, estaba pasando por el embarazo de su primera y hasta ahora única hija, Moa, que nacería el 9 de junio de 2019.</p>
                    <p className={styles.peleador__article__text}>Posterior a su combate con Cooper, llegaría su primera derrota como profesional al enfrentar a la brasileña <b>Amanda Ribas</b>, quien luego de 3 asaltos se llevaría la pelea por decisión. Sin embargo, inmediatamente después de esta derrota, acumularía una racha de 4 victorias consecutivas, siendo la última contra la americana <b>Nina Nunes</b>, a quien sometería en el primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/rZ5IgMydsT4?si=x7HyhjCd0D5FnNXH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Sin embargo, luego de esta pelea su carrera comenzaría a ser un poco irregular, perdiendo su siguiente combate por decisión unánime contra <b>Marina Rodríguez</b>; ganando la siguiente pelea contra <b>Tecia Torres</b> por decisión dividida; perdiendo el siguiente combate con la luchadora china <b>Yan Xiaonan</b>, por decisión dividida; ganando el siguiente combate contra su compatriota <b>Angela Hill</b> por decisión unánime; y perdiendo sus, hasta el momento, última 2 peleas, primero contra la brasileña <b>Jéssica Andrade</b> que sería capaz de propinarle su primer nocaut a nuestra protagonista en el segundo asalto, y luego contra la también brasileña <b>Amanda Lemos</b> por decisión unánime, donde sin embargo se ganó un bono por la pelea de la noche en el <Link href='/articulos/ufc298'>UFC 298</Link>.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}