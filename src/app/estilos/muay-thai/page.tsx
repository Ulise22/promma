import styles from '../Estilos.module.css'
import Image from 'next/image'
import historiaMuayThai from '../../../assets/estilos/muaythai_history.jpg'
import buakaw from '../../../assets/estilos/buakaw.jpg'

export default function MuayThai () {
    return(
        <main>
            <section className={styles.estilosMuayThai__hero}>
                <h1 className={styles.estilos__title}>Muay Thai</h1>
            </section>
            <section className={styles.estilos__container}>
                <article>
                    <h2>El arte marcial del Muay Thai</h2>
                    <p className={styles.estilos__text}>El Muay Thai, es un arte marcial y deporte nacional de Tailandia, que se desarrolló hace cientos de años pensando en utilizar todo el cuerpo como un arma para el combate de cuerpo a cuerpo. También es conocido como el &quot;El arte de las Ocho Extremidades&quot;, dado que se utilizan 8 puntos del cuerpo como armas: los puños, los codos, los pies y las rodillas. Actualmente goza de gran popularidad al ser una de las artes marciales más utilizadas en las MMA.</p>
                    <p className={styles.estilos__text}>Debido a su dureza, este deporte esta prohibido en muchos países del mundo, incluidos algunos estados de los Estados Unidos.</p>
                    <h2>Historia del muay thai</h2>
                    <p className={styles.estilos__text}>Es complicado conocer bien la historia del Muay Thai, ya que se perdió mucho cuando los birmanos en tiempos de guerra, saquearon los templos y archivos dde conocimiento de la historia de Ayutthaya (ciudad de la actual Tailandia).</p>
                    <p className={styles.estilos__text}>Como dato curioso, uno de los pocos libros que quedan de aquella época, cuanto como <b>Nai Khanom Tom</b>, conocido como el padre del Muay Thai, dderrotó a 9 luchadores birmanos durante su encarcelamiento tras el aseddio de Siam. Este hecho dió lugar al Día del Muay Thai, que se celebra cada 17 de marzo.</p>
                    <Image className={styles.estilos__image} src={historiaMuayThai} alt="2 peleadores de muay thai luchando en un ring" />
                    <p className={styles.estilos__text}>Sus técnicas de combate comenzaron a desarrollarse en el antiguo Reino de Siam, lo que hoy es Tailandia, y se cree que fue influenciado por las técnicas de combate de otros países y culturas, como la lucha china y la lucha birmana. Durante el siglo XVI, el rey Naresuan el Grande promovió y practicó el Muay Thai como forma de entrenamiento militar.</p>
                    <h2>Muay Thai reglamento</h2>
                    <p className={styles.estilos__text}>En los torneos organizados por la Federación Internacional de Muay Thai, se pelean 3 rounds de 3 minutos con descansos de 2 minutos entre rounds. Durante el combate es imprescindible la presencia de jueces que se encarguen dde puntuar y calificar el combate, teniendo en cuenta el manejo correcto de técnicas espécificas del Muay Thai por parte de los luchadores, la efectividad de impactos, la postura del peleador dentro del ring, la evasión dde contragolpes mediante el buen manejo de contraataques y la utilización correcta del cuerpo.</p>
                    <p className={styles.estilos__text}>Los movimientos que están prohibidos son los siguientes:</p>
                    <ul className={styles.estilos__text}>
                        <li>Barridas</li>
                        <li>Golpes con taco o talón</li>
                        <li>Tackles</li>
                        <li>Ahorcamiento o estrangulación</li>
                        <li>Golpes en genitales</li>
                        <li>Golpes con la cabeza</li>
                        <li>Utilizar como apoyo para conectar el golpe</li>
                    </ul>
                    <p className={styles.estilos__text}>En tanto está permitido: </p>
                    <ul className={styles.estilos__text}>
                        <li>Sujetar la pierna del contrincante al proyectar una patada</li>
                        <li>Las patadas frontales siempre y cuando superen la línea del cinturón.</li>
                        <li>Todo golpe que pueda ser bloqueado con la tibia</li>
                        <li>Las patadas circulares que impacten en cualquier parte del cuerpo, menos en los genitales</li>
                        <li>Impactos con las rodillas en cualquier parte del cuerpo, menos en los genitales</li>
                        <li>Empujar al contrincante</li>
                        <li>Tomar guardia para conectar golpes</li>
                        <li>Todo impacto con los codos</li>
                        <li>Los golpes en la espalda también están permitidos</li>
                    </ul>
                    <h2>Buakaw Banchamek</h2>
                    <p className={styles.estilos__text}>Uno de los mayores exponentes de este arte marcial (excluyendo a los que participan en torneos de artes marciales mixtas), es sin duda Buakaw Banchamek, de nacionalidad Tailandesa y que además de competir en Muay Thai lo hace en Kickboxing, e incluso, de forma curiosa, se desempeñó como futbolista de la segunda división de su país.</p>
                    <Image className={styles.estilos__image} src={buakaw} alt='Buakaw, King of Muay Thai' />
                    <p className={styles.estilos__text}>Tiene una amplia carrera como peleador de Muay Thai. Según su página de wikipedia, ostenta un impresionante record de 230 victorias, siendo 69 de estas por la vía del (T)KO, 24 derrotas y 12 empates. Siendo su última pelea una derrota por decisión unánime contra el español Jonay Risco, en 2018.</p>
                </article>
            </section>
        </main>
    )
}