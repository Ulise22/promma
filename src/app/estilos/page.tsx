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
                    <h3>¿Qué es el boxeo?</h3>
                    <p>El boxeo es un deporte de combate y un arte marcial en la que 2 peleadores se enfrentan usando solamente sus puños con guantes para golpear al adversario por encima de la cintura.</p>
                    <p>La popularidad de este deporte ha llevado al nacimiento de diversas estrellas alrededor del mundo, como lo son <b>Muhammad Ali</b>, <b>Mike Tyson</b>, <b>Julio César Chávez</b>, o figuras más actuales, como <b>Floyd Mayweather, jr.</b>, <b>Manny Pacquiao</b>, o <b>Tyson Fury</b>  </p>
                    <h3>Reglas del Boxeo</h3>
                    <p>El boxeo se disputa en un ring, que es un espacio cuadrado y rodeado con cuerdas entre las 4 esquinas. Los 2 boxeadores se enfrentan durante varios rounds que suelen durar 3 minutos. Durante la pelea y dentro del ring hay un arbitro que puede detener el combate si considera que uno de los 2 peleadores no puede continuar. También puede suspender de manera temporal el combate para que los boxeadores se atiendan los cortes o se ajusten la equipación.</p>
                    <Image src={boxeo} alt='boxeo' />
                    <p>Si un boxeador acaba en la lona, el arbitro o el referee, comienza a contar hasta 10. Si después de que se cuente hasta 10, el boxeador sigue en la lona, se considera que fue noqueado y que su contrincante ha ganado la pelea.</p>
                    <p>Los jueces van puntuando cada round, con 10 puntos para el boxeador que ellos consideren que haya sido menjor a lo largo del round, y con 9 al que consideren que haya perdido el round. Aunque el perdedor puede recibir 8 puntos en lugar de 9, si los jueces consideran que el ganador fue muy dominante o que ha conseguiddo un nocaut. Al final del combate, si no se decidió por KO, las tarjetas de puntuación deciden al ganador.</p>
                </article>
                <article>
                    <h2 className={styles.estilos__title}>Jiu Jitsu</h2>
                    <p>El Jiu Jitsu Brasilero es un arte marcia...</p>
                    <p>Además </p>
                    <Image src={bjj} alt='boxeo' />
                </article>
            </section>
        </main>
    )
}