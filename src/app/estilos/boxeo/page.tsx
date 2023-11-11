import styles from '../Estilos.module.css'
import Image from 'next/image'
import boxeo from '../../../assets/estilos/boxeo__section.jpg'

export default function Boxeo () {
    return(
        <main>
            <section className={styles.estilosBoxeo__hero}>
                <h1 className={styles.estilos__title}>Boxeo</h1>
            </section>
            <section className={styles.estilos__container}>
            <article>
                    <h2 className={styles.estilos__subtitle}>¿Qué es el boxeo?</h2>
                    <p className={styles.estilos__text}>El boxeo es un deporte de combate y un arte marcial en la que 2 peleadores se enfrentan usando solamente sus puños con guantes para golpear al adversario por encima de la cintura.</p>
                    <p className={styles.estilos__text}>La popularidad de este deporte ha llevado al nacimiento de diversas estrellas alrededor del mundo, como lo son <b>Muhammad Ali</b>, <b>Mike Tyson</b>, <b>Julio César Chávez</b>, o figuras más actuales, como <b>Floyd Mayweather, jr.</b>, <b>Manny Pacquiao</b>, o <b>Tyson Fury</b>  </p>
                    <h2 className={styles.estilos__subtitle}>Categorías de peso en Boxeo</h2>
                    <p className={styles.estilos__text}>Los torneos de boxeo se dividen en diferentes pesos, de manera que las competiciones sean más igualadas, las mismas se organizan y dividen de la siguiente manera: </p>
                    <ul>
                        <li><b>Peso Pesado</b>: +90.7kg;</li>
                        <li><b>Peso Bridger</b>: desde los 90,7kg hasta los 101,6kg;</li>
                        <li><b>Peso Crucero</b>: de los 79,3kg hasta los 90,7kg;</li>
                        <li><b>Peso Semipesado</b>: de los 76,2 hasta los 79,3kg;</li>
                        <li><b>Peso Supermeddio</b>: de los 72,5kg hasta los 76,2kg;</li>
                        <li><b>Peso Medio</b>: de los 69,8kg hasta los 72,5kg;</li>
                        <li><b>Peso Superwelter</b>: de los 66,6kg hasta los 69,8kg;</li>
                        <li><b>Peso Welter</b>: de los 63,5kg hasta los 66,6kg;</li>
                        <li><b>Peso Superligero</b>: de los 61,2kg hasta los 63,5kg;</li>
                        <li><b>Peso Ligero</b>: de los 58,9kg hasta los 61,2kg;</li>
                        <li><b>Peso Superpluma</b>: de los 57,1kg hasta los 58,9kg;</li>
                        <li><b>Peso Pluma</b>: de los 55,34kg hasta los 57,1kg;</li>
                        <li><b>Peso Supergallo</b>: de los 53,5kg hasta los 55,34kg;</li>
                        <li><b>Peso Gallo</b>: de los 51,7kg hasta los 53,5kg;</li>
                        <li><b>Peso Supermosca</b>: de los 50,3kg hasta los 51,7kg;</li>
                        <li><b>Peso Mosca</b>: de los 48,9kg hasta los 50,3kg;</li>
                        <li><b>Peso Minimosca</b>: de los 47,6kg hasta los 48,9kg;</li>
                        <li><b>Peso Mínimo</b>: Máximo de 47,6kg;</li>
                    </ul>
                    <h2 className={styles.estilos__subtitle}>Reglas del Boxeo</h2>
                    <p className={styles.estilos__text}>El boxeo se disputa en un ring, que es un espacio cuadrado y rodeado con cuerdas entre las 4 esquinas. Los 2 boxeadores se enfrentan durante varios rounds que suelen durar 3 minutos. Durante la pelea y dentro del ring hay un arbitro que puede detener el combate si considera que uno de los 2 peleadores no puede continuar. También puede suspender de manera temporal el combate para que los boxeadores se atiendan los cortes o se ajusten la equipación.</p>
                    <Image className={styles.estilos__image} src={boxeo} alt='Un luchador de boxeo golpeando en la cara a otro boxeador en un ring mientras el público observa el show' />
                    <p className={styles.estilos__text}>Si un boxeador acaba en la lona, el arbitro o el referee, comienza a contar hasta 10. Si después de que se cuente hasta 10, el boxeador sigue en la lona, se considera que fue noqueado y que su contrincante ha ganado la pelea.</p>
                    <p className={styles.estilos__text}>Los jueces van puntuando cada round, con 10 puntos para el boxeador que ellos consideren que haya sido menjor a lo largo del round, y con 9 al que consideren que haya perdido el round. Aunque el perdedor puede recibir 8 puntos en lugar de 9, si los jueces consideran que el ganador fue muy dominante o que ha conseguido un nocaut. Al final del combate, si no se decidió por KO, las tarjetas de puntuación deciden al ganador.</p>
                </article>
            </section>
        </main>
    )
}