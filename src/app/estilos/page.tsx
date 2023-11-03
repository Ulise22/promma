import Image from 'next/image'
import styles from './Estilos.module.css'
//Images import
import boxeo from '../../assets/estilos/boxeo__section.jpg'
import bjj from '../../assets/estilos/jiu-jitsu.jpg'
import historiaMuayThai from '../../assets/estilos/muaythai_history.jpg'
import Link from 'next/link'

export default function Estilos () {
    return(
        <main>
            <section className={styles.estilos__hero}>
                <h1 className={styles.estilos__hero__title}>Tipos de artes marciales</h1>
            </section>
            <section className={styles.card__container}>
                <Link href='/estilos/boxeo' className={styles.card}>
                    <Image className={styles.card__image} src={boxeo} alt='Un luchador de boxeo golpeando en la cara a otro boxeador en un ring mientras el público observa el show' />
                    <h2 className={styles.card__title}>Boxeo</h2>
                    <p className={styles.card__text}>El boxeo es un deporte de combate y un arte marcial en la que 2 peleadores se enfrentan usando solamente sus puños con guantes para golpear al adversario por encima de la cintura.</p>
                </Link>
                <Link href='/estilos/jiujitsu' className={styles.card}>
                    <Image className={styles.card__image} src={bjj} alt='Un luchador de BJJ extrangulando a otro luchador, a punto someterlo, durante una competencia de Jiu Jitsu brasileño' />
                    <h2 className={styles.card__title}>Jiu Jitsu</h2>
                    <p className={styles.card__text}>El Jiu Jitsu brasileño (<b>BBJ</b>) es un arte marcial sin armas y un deporte de combate desarrollado en Brasil que deriba del judo y del jiu jitsu japones.</p>
                </Link>
                <Link href='/estilos/muay-thai' className={styles.card}>
                    <Image className={styles.estilos__image} src={historiaMuayThai} alt="2 peleadores de muay thai luchando en un ring" />
                    <h2 className={styles.card__title}>Muay Thai</h2>
                    <p className={styles.card__text}>El Muay Thai, es un arte marcial y deporte nacional de Tailandia, que se desarrolló hace cientos de años pensando en utilizar todo el cuerpo como un arma para el combate de cuerpo a cuerpo. </p>
                </Link>
            </section>
        </main>
    )
}