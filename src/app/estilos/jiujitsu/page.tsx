import styles from '../Estilos.module.css'
import Image from 'next/image'
import bjj from '../../../assets/estilos/jiu-jitsu.jpg'

export default function Jiujitsu () {
    return(
        <main>
            <section className={styles.estilosJiuJitsu__hero}>
                <h1 className={styles.estilos__title}>Jiu Jitsu</h1>
            </section>
            <section className={styles.estilos__container}>
            <article>
                    <h2 className={styles.estilos__subtitle}>Jiu Jitsu brasileño</h2>
                    <p className={styles.estilos__text}>El Jiu Jitsu brasileño (<b>BBJ</b>) es un arte marcial sin armas y un deporte de combate desarrollado en Brasil que deriba del judo y del jiu jitsu japones. El principal objetivo de este deporte es someter al rival, mediante la estrangulación o la dislocación del adversario. Todo esto en un contexto de buscar derribar al contrincante y llevarlo a una lucha cuerpo a cuerpo en el suelo.</p>
                    <p className={styles.estilos__text}>Este arte marcial se basa en la idea de que una persona pequeña puede vencer a alguien más grande y fuerte, gracias a la utilización eficaz de la técnica, aplicando los derribos, las inmovilizaciones, dislocaciones y estrangulaciones.</p>
                    <p className={styles.estilos__text}>Algunos de los luchadores y especialistas más importantes de este arte marcial son <b>Rickson Gracie</b>, <b>Gordon Ryan</b>, <b>Roger Gracie</b>, <b>Royce Gracie</b> y <b>Marcelo Garcia</b></p>
                    <Image className={styles.estilos__image} src={bjj} alt='Un luchador de BJJ extrangulando a otro luchador, a punto de someterlo, durante una competencia de Jiu Jitsu brasileño' />
                    <h2 className={styles.estilos__subtitle}>Jiu Jitsu origen</h2>
                    <p className={styles.estilos__text}>Los origines históricos de este arte marcial provienen de Japón durante el periodo feudal. Durante este tiempo, los guerreros samuráis desarrollaron una serie de técnicas de combate cuerpo a cuerpo para defenserse en el campo de batalla y en situaciones cotidianas.</p>
                    <p className={styles.estilos__text}>Durante el siglo XX los <b>hermanos Gracia</b>, comenzaron a adaptar técnicas del Jiu Jitsu japonés para que se acomodaran a las condiciones y necesidades de las peleas callejeras y coompetencias de lucha libre en Brasil. Lo cual con el paso de los años fue dando lugar a lo que hoy conocemos como Brazilian Jiu Jitsu (BJJ). </p>
                </article>
            </section>
        </main>
    )
}