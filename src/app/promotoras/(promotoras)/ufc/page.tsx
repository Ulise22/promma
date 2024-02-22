import Link from 'next/link'
import PromotorasHero from '../../PromotorasHero'
import dana from '@/assets/promotoras/ufc/dana_white.jpg'
import pelea from '@/assets/promotoras/ufc/fight.jpg'
import cage from '@/assets/promotoras/ufc/arena.jpg'
import styles from '../../promo.module.css'
import Image from 'next/image'

export default function UFC () {
    return(
        <main>
            <PromotorasHero title='UFC' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>UFC Historia</h2>
                    <p className={styles.promotoras__article__text}>Actualmente UFC es la mayor compañía de <b>Artes Marciales Mixtas</b> que existe. En su organización pelean muchos de los mejores luchadores del planeta, ganando reconcimiento con figuras de talla mundial como <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>, <Link href='/peleadores/jon-jones'>Jon Jones</Link>, <b>Ronda Rousey</b>, <b>Anderson Silva</b>, <b>Georges St-Pierre</b> o <b>Khabib Nurmagomédov</b>. Y hoy en día, presididos por <b>Dana White</b>, organizan eventos de este deporte al rededor de todo el mundo.</p>
                    <p className={styles.promotoras__article__text}>Ultimate Fighting Championship fue fundanda originalmente en Estados Unidos en 1993, por Rorion Gracie, Art Davie, John Milius y Robert Meyrowitz, con la idea de averiguar qué estilo o sistema de lucha era más efectivo en una pelea sin reglas.</p>
                    <Image className={styles.promotoras__article__image} src={cage} alt='El octagono en donde se albergara una pelea organizada por UFC' />
                    <p className={styles.promotoras__article__text}>Ese mimsmo 1993 se organizó el primer evento de UFC en la ciudad de Denver, Colorado. Evento en el que se invitaron a luchadores de diferentes disciplinas, como <Link href='/estilos/boxeo'>boxeo</Link>, <b>karate</b>, <b>taekwondo</b> o <Link href='/estilos/jiujitsu'>jiu-jitsu</Link> a competir en un combate sin reglas. Dicho primer evento constó de 8 peleadores que pelearon dentro de un octagono. La primera pelea en realizarse en dicho evento fue entre el luchador holandés de savate Gerard Gordeau y Teila Tuli, un luchador de sumo de Hawái. La pelea terminó rápido cuando el holandés terminó fracturandole la mandibula de una patada al peleador de sumo. En general, este evento fue visto como un exito, debido a su innovación y a que sentó las bases para lo que serían las MMA en el futuro.</p>
                    <p className={styles.promotoras__article__text}>En sus inicios, los eventos de UFC eran muy diferentes a lo que conocemos hoy en día, dado que el principal atractivo del deporte por aquel entonces estaba centrado en la sangre y la excesiva violencia, la compañía se encontró con una gran resistencia por parte de los medios de comunicación y por parte de las autoridades deportivas, esto hacía que en un deporte que de por sí es difícil de vender a los espectadores casuales, complicara aún más la tarea. Todo esto también terminaba por ahuyentar a los patrocinadores que ante un evento aún poco profesionalizado y un deporte con tan mala prensa, optaban por no poner su dinero en esta compañía.</p>
                    <Image className={styles.promotoras__article__image} src={pelea} alt='Una pelea de MMA en un vento de UFC' />
                    <p className={styles.promotoras__article__text}>Debido a esto, en el año 2000 UFC es vendida a Zuffa LLC, un grupo fundado por Lorenzo y Frank Fertitta, quienes contrataron como director ejecutivo al hombre que cambiaría la historia de la compañía, Dana White. </p>
                    <p className={styles.promotoras__article__text}>La llegada de Dana White al mando de la compañía signfico un cambio muy importante para la UFC y para las Artes Marciales Mixtas en general. Dana buscó convertir las MMA dentro de la UFC en un deporte seguro y más aceptable para el público general, por eso presentó una reglamentación en las que se dejaban bien en claro las reglas de la competición, prohibiendo ciertos golpes y técnicas muy peligrosas para los peleadores, y centrando el espectáculo más en la competencia deportiva, que en la sangre o la violencia.</p>
                    <p className={styles.promotoras__article__text}>Estos cambios permitieron a la UFC ganar más aceptación y por ende crecer en cuanto a espectadores, público y dinero. Lo a que 30 de su creación, la llevó a ser la mayor empresa de competencia de MMA en el mundo, habiendo organizado casi 300 eventos al rededor de todo el mundo, y habiendo alcanzando fama y reconomiento mundial.</p>
                    <Image className={styles.promotoras__article__image} src={dana} alt='El director Ejecutivo de UFC, Dana White hablando en un conferencia de prensa' />
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>Mayores PPV de la historia de UFC</h2>
                    <p className={styles.promotoras__article__text}>Habiendo ganado tanta popularidad, los eventos organizados por esta compañía reciben un cada vez mayor público, por eso no es de extrañar que los PPV lleguen a los millones en determinadas ocaciones. Lo que tampoco es de extrañar, es que las 5 peleas que más vendieron en la historia de la UFC, sean todas de su mayor estrella, <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>:</p>
                    <ul>
                        <li className={styles.promotoras__article__text}><b>1.</b> Khabib Nurmagomédov vs Conor Mcgregor por UFC 229 (2.400.000)</li>
                        <li className={styles.promotoras__article__text}><b>2.</b> Dustin Poirier vs Conor Mcgregor 3 por UFC 264 (1.800.000)</li>
                        <li className={styles.promotoras__article__text}><b>3.</b> Nate Diaz vs Conor Mcgregor 2 por UFC 202 (1.650.000)</li>
                        <li className={styles.promotoras__article__text}><b>4.</b> Dustin Poirier vs Conor Mcgregor 2 por UFC 229 (1.650.000)</li>
                        <li className={styles.promotoras__article__text}><b>5.</b> Cowboy Cerrone vs Conor Mcgregor por UFC 229 (1.350.000)</li>
                    </ul>
                </article>
                {/* <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>Argentinos en UFC</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>EA UFC</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>UFC 4</h2>
                    <h3>UFC 4 requisitos pc</h3>
                    <h3>UFC 4 requisitos precio</h3>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>UFC Mujeres</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>The Ultimate Fighter</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>Dana White</h2>
                </article> */}
            </section>
        </main>
    )
}