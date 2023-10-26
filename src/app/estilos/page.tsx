import Image from 'next/image'
import styles from './Estilos.module.css'
import boxeo from '../../assets/estilos/boxeo__section.jpg'
import bjj from '../../assets/estilos/jiu-jitsu.jpg'

export default function Estilos () {
    return(
        <main>
            <section className={styles.estilos__hero}>
                <h1 className={styles.estilos__hero__title}>Tipos de artes marciales</h1>
            </section>
            <section className={styles.estilos__container}>
                <article>
                    <h2 className={styles.estilos__title}>Boxeo</h2>
                    <h3 className={styles.estilos__subtitle}>¿Qué es el boxeo?</h3>
                    <p className={styles.estilos__text}>El boxeo es un deporte de combate y un arte marcial en la que 2 peleadores se enfrentan usando solamente sus puños con guantes para golpear al adversario por encima de la cintura.</p>
                    <p className={styles.estilos__text}>La popularidad de este deporte ha llevado al nacimiento de diversas estrellas alrededor del mundo, como lo son <b>Muhammad Ali</b>, <b>Mike Tyson</b>, <b>Julio César Chávez</b>, o figuras más actuales, como <b>Floyd Mayweather, jr.</b>, <b>Manny Pacquiao</b>, o <b>Tyson Fury</b>  </p>
                    <h3>Reglas del Boxeo</h3>
                    <p className={styles.estilos__text}>El boxeo se disputa en un ring, que es un espacio cuadrado y rodeado con cuerdas entre las 4 esquinas. Los 2 boxeadores se enfrentan durante varios rounds que suelen durar 3 minutos. Durante la pelea y dentro del ring hay un arbitro que puede detener el combate si considera que uno de los 2 peleadores no puede continuar. También puede suspender de manera temporal el combate para que los boxeadores se atiendan los cortes o se ajusten la equipación.</p>
                    <Image className={styles.estilos__image} src={boxeo} alt='Un luchador de boxeo golpeando en la cara a otro boxeador en un ring mientras el público observa el show' />
                    <p className={styles.estilos__text}>Si un boxeador acaba en la lona, el arbitro o el referee, comienza a contar hasta 10. Si después de que se cuente hasta 10, el boxeador sigue en la lona, se considera que fue noqueado y que su contrincante ha ganado la pelea.</p>
                    <p className={styles.estilos__text}>Los jueces van puntuando cada round, con 10 puntos para el boxeador que ellos consideren que haya sido menjor a lo largo del round, y con 9 al que consideren que haya perdido el round. Aunque el perdedor puede recibir 8 puntos en lugar de 9, si los jueces consideran que el ganador fue muy dominante o que ha conseguiddo un nocaut. Al final del combate, si no se decidió por KO, las tarjetas de puntuación deciden al ganador.</p>
                </article>
                <article>
                    <h2 className={styles.estilos__title}>Jiu Jitsu</h2>
                    <h3 className={styles.estilos__subtitle}>Jiu Jitsu brasileño</h3>
                    <p className={styles.estilos__text}>El Jiu Jitsu brasileño (<b>BBJ</b>) es un arte marcial sin armas y un deporte de combate desarrollado en Brasil que deriba del judo y del jiu jitsu japones. El principal objetivo de este deporte es someter al rival, mediante la estrangulación o la dislocación del adversario. Todo esto en un contexto de buscar derribar al contrincante y llevarlo a una lucha cuerpo a cuerpo en el suelo.</p>
                    <p className={styles.estilos__text}>Este arte marcial se basa en la idea de que una persona pequeña puede vencer a alguien más grande y fuerte, gracias a la utilización eficaz de la técnica, aplicando los derribos, las inmovilizaciones, dislocaciones y estrangulaciones.</p>
                    <p className={styles.estilos__text}>Algunos de los luchadores y especialistas más importantes de este arte marcial son <b>Rickson Gracie</b>, <b>Gordon Ryan</b>, <b>Roger Gracie</b>, <b>Royce Gracie</b> y <b>Marcelo Garcia</b></p>
                    <Image className={styles.estilos__image} src={bjj} alt='Un luchador de BJJ extrangulando a otro luchador, a punto someterlo, durante una competencia de Jiu Jitsu brasileño' />
                    <h3>Jiu Jitsu origen</h3>
                    <p className={styles.estilos__text}>Los origines históricos de este arte marcial provienen de Japón durante el periodo feudal. Durante este tiempo, los guerreros samuráis desarrollaron una serie de técnicas de combate cuerpo a cuerpo para defenserse en el campo de batalla y en situaciones cotidianas.</p>
                    <p className={styles.estilos__text}>Durante el siglo XX los <b>hermanos Gracia</b>, comenzaron a adaptar técnicas del Jiu Jitsu japonés para que se acomodaran a las condiciones y necesidades de las peleas callejeras y coompetencias de lucha libre en Brasil. Lo cual con el paso de los años fue dando lugar a lo que hoy conocemos como Brazilian Jiu Jitsu (BJJ). </p>
                </article>
            </section>
        </main>
    )
}