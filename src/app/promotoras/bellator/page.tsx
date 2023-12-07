import PromotorasHero from '../PromotorasHero'
import bellator1 from '@/assets/promotoras/bellator/bellator1.jpg'
import bellator2 from '@/assets/promotoras/bellator/bellator2.jpg'
import bellator3 from '@/assets/promotoras/bellator/bellator3.jpg'
import bellator4 from '@/assets/promotoras/bellator/bellator4.jpg'
import styles from '../promo.module.css'
import Image from 'next/image'

export default function Bellator () {
    return(
        <main>
            <PromotorasHero title='BELLATOR' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>Bellator MMA</h2>
                    <p><b>Bellator MMA</b> (anteriormente llamada Bellator Fighting Championships) es una empresa de Artes Marciales Mixtas de Estados Unidos, con sede en Newport Beach, California. Esta compañía fue fundada en 2008 por el empresario estadounidense Bjorn Rebney, con la idea de crear una competencia sólida en el mundo de las MMA. El nombre &quot;Bellator&quot; es una palabra latina que significa &quot;guerrero&quot; o &quot;luchador&quot;.</p>
                    <Image className={styles.promotoras__article__image} src={bellator2} alt='Bellator' />
                    <p>La primera temporada empezó en el año 2009 prensentando un formato de torneo único en el que los luchadores competían en rondas eliminatorias hasta llegar a la final. En las primeras ediciones donde este era el formato, al ganador del torneo se lo premiaba con un cheque por valor de $100.000, el título del campeonato y la posibilidad de defender el título en la próxima temporada.</p>
                    <p>A lo largo de los años fueron evolucionando y adoptando un enfoque más tradicional en las promoción de las peleas, aunque aún a día de hoy sigue organizando torneos ocacionalmente. </p>
                    <p>En 2011, Bjorn Rebney dejó la presidencia de Bellator, y desde entonces la empresa pasó por varios cambios de propiedad, lo que la llevó a transitar varios cambios en cuanto a la dirección de la empresa y estrategia de la compañía. Actualmente la empresa es presidida por el coreano <b>Scott Coker</b> y se encuentra en propiedad del conglomerado multinacional estadounidense de medios de comunicación <b>Paramount Global</b>, conocido simplemente como <b>Paramount</b>, y producto de esto es que hoy en día los eventos son transmitidos por el canal de televisión <b>Showtime</b>.</p>
                    <Image className={styles.promotoras__article__image} src={bellator1} alt='Bellator' />
                    <h2 className={styles.promotoras__article__title}>Torneo Bellator</h2>
                    <p>Los torneos de Bellator suelen tener un formato de eliminatorias hasta llegar a la final y se dividen en 7 categorías de peso, siendo estas:</p>
                    <ul>
                        <li>Peso Gallo (135lbs)</li>
                        <li>Peso Gallo (145lbs)</li>
                        <li>Peso Gallo (155lbs)</li>
                        <li>Peso Gallo (170lbs)</li>
                        <li>Peso Gallo (185lbs)</li>
                        <li>Peso Gallo (205lbs)</li>
                        <li>Peso Gallo (265lbs)</li>
                    </ul>
                    <p>Durante los combates del <b>torneo Bellator</b>, las reglas son algo diferentes a las peleas que se hacen fuera del torneo. Los golpes con los codos son ilegales en cuartos y semifinales porque tienen una alta probabilidad de generar cortes, aunque estos golpes estan permitidos en la final.</p>
                    <Image className={styles.promotoras__article__image} src={bellator3} alt='Bellator' />
                    <p>Las reglas que suelen acompañar los combates de Bellator son las establecidas por la <b>Junta de Control Atlético de Nueva Jersey</b>. Los combates suelen constar de 3 asaltos de 5 minutos cada uno con un minuto de descanso entre asaltos, salvo en las peleas donde se pelea por el título, en cuyo caso se hacen 5 asaltos en lugar de 3.</p>
                    <p>En estos torneos, ateniendose a <b>La Comisión Atlética del Estado de Nevada</b> los siguientes elementos califican como falta y por ende se penalizan con la quita de un punto, con la suspensión del combate, o con la descalificasión dependiendo de la gravedad de la misma:</p>
                    <ul>
                        <li>Morder</li>
                        <li>Presionar directamente los ojos de cualquier forma</li>
                        <li>Introducir los dedos en cualquier orificio del cuerpo del oponente, así como en cortes o heridas</li>
                        <li>Patear o pisar la cabeza o cuello del oponente cuando está en el suelo</li>
                        <li>Manipular articulaciones pequeñas</li>
                        <li>Agarrar el pelo</li>
                        <li>Cabezazos</li>
                        <li>Atacar a la nuca o la columna vertebral</li>
                        <li>Golpear con la punta del codo en sentido descendente</li>
                        <li>Golpear la garganta o agarrar la tráquea</li>
                        <li>Arañar, pellizcar o torcer la piel</li>
                        <li>Agarrar la clavícula</li>
                        <li>Intentar romper el hueso de un oponente intencionadamente</li>
                        <li>Patear la cabeza de un oponente cuando está en el suelo</li>
                        <li>Dar rodillazos en la cabeza de un oponente cuando está en el suelo</li>
                        <li>Pisar a un oponente en el suelo</li>
                        <li>Patear con el talón los riñones</li>
                        <li>Clavar a un oponente en la lona con la cabeza o el cuello</li>
                        <li>Lanzar al oponente fuera de la jaula</li>
                        <li>Agarrar las guantillas, la ropa del oponente</li>
                        <li>Escupir al oponente</li>
                        <li>Cualquier conducta antideportiva que cause daño a un oponente</li>
                        <li>Agarrar las rejas</li>
                        <li>Usar un lenguaje ofensivo</li>
                        <li>Atacar al oponente en el descanso</li>
                        <li>Atacar al oponente mientras está en custodia del árbitro</li>
                        <li>Atacar al oponente después de acabar la ronda</li>
                        <li>Ignorar las instrucciones del árbitro</li>
                        <li>Intimidación, evadir contacto con el oponente, caerse intencionalmente o fingir estar lesionado</li>
                        <li>Interferir con la esquina</li>
                    </ul>
                    <Image className={styles.promotoras__article__image} src={bellator4} alt='Bellator' />
                </article>
            </section>
        </main>
    )
}