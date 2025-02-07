import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/ser_peleador_mma.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Como Ser Un Peleador Profesional de MMA',
    description: 'Como pelear en MMA hasta llegar a ser un peleador profesional que se dedique a este deporte. ',
    openGraph: {
        title: 'Como Ser Un Peleador Profesional de MMA',
        description: 'Como pelear en MMA hasta llegar a ser un peleador profesional que se dedique a este deporte. ',
        url: 'https://fullmma.org/articulos/como-ser-un-peleador-de-mma-profesional'
    }
}

export default function ComoSerPeleadorProfesionalMMA () {
    return(
        <main>
            <ArticleHero title='Como Ser un Peleador Profesional de MMA' subtitle='Ayuda y consejos para las personas que quieran convertirse en peleadores profesionales y que quieran saber cómo pelear en MMA.' image={hero} date='2025-02-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En caso de que te estes preguntando como pelear en MMA, o cómo ser un peleador profesional de MMA, hoy vamos a ayudarte a cubrir tus dudas. Dado que, con la preparación y la guía adecuada, puedes seguir los pasos de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link> o <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link> y convertirte en un peleador reconocido y de renombre, que incluso destaque en la UFC. </p>
                    <h2>Entrar a un gimnasio de MMA o Artes Marciales</h2>
                    <p>El primer paso, aunque suene obvio, es comenzar a practicar artes marciales mixtas en un gimnasio especializado, o en uno más específico en caso de que no haya gimnasios de MMA en tu zona. Afortunadamente este es un deporte que ha crecido y viene creciendo en popularidad, por lo que, si vives en una ciudad grande y habitada, o cerca de una, no tendrás problemas en encontrar un gimnasio que se adapte a tus necesidades. </p>
                    <p>Debido a lo amplio de este deporte, y a la gran cantidad de disciplinas que se integran dentro de las MMA, vas a tener que aprender varias artes marciales, incluidas algunas que involucren striking, como el boxeo, el kickboxing o el muay thai; algún arte marcial que involucre lucha, como la lucha olímpica o el judo; y seguramente debas aprender, aunque sea lo básico del jiu-jitsu brasileño. </p>
                    <h2>Conseguir un Buen Entrenador y Un Buen Equipo</h2>
                    <p>Atado al punto anterior, es de vital importancia que encuentres un entrenador con el que tengas confianza y que busque lo mejor para ti. La diferencia entre un buen entrenador y uno mediocre, puede llegar a ser abismal para tu carrera, por lo que no dudes en cambiar si no te sientes cómodo. </p>
                    <p>Si algo hemos podido comprobar a lo largo de los años, es como el tener una buena sinergia con tu coach puede llevarte a lo más alto del deporte. Y como el tener uno que no sea muy bueno en su trabajo, puede perjudicar tu carrera, por muy bueno que seas, como sucedió con <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link> en sus últimas peleas, por ejemplo. </p>
                    <h2>¿Qué se necesita para ser peleador de MMA?</h2>
                    <p>Basándome en lo que <b><a target='_Blank' href='https://www.youtube.com/@MMACoach79'>MMA Coach</a></b> dice en su video de YouTube sobre los 11 factores necesarios para ser un peleador de MMA, es necesario contar con las siguientes características para triunfar como peleador: </p>
                    <ul>
                        <li><b>Coraje (o estar loco): </b>El coraje no es la ausencia de miedo, sino actuar a pesar de este. Es por eso que para subirse a un octágono donde vas a recibir golpes y patadas, es necesario estar cargado de coraje, o de estar algo loco. </li>
                        <br />
                        <li><b>Habilidad: </b>Este es un deporte muy basado en la habilidad, en las skills. Es por eso que, a diferencia de otros deportes de combate, que requieren que aprendas menos cosas, en las MMA necesitas saber muchas reglas, y aunque decidas especializarte en un estilo particular, debes conocer todos los otros estilos para ser un peleador completo. </li>
                        <br />
                        <li><b>. Disciplina y Sacrificio: </b>Tener una carrera de MMA no es tanto como una carrera de velocidad, sino como correr un maratón. Esto quiere decir que lo importante no es llegar primero, sino llegar. Por esto es importante cuidar muy bien cosas como tu alimentación, tus hábitos de sueño, y tu condición física, dado que, aunque hay peleadores que pueden salirse con la suya saliendo de la fiesta e ingiriendo sustancias indebidas, estás mejor sin nada de eso. Esto requiero de disciplina y sacrificio. En caso de que necesitas ayuda con este punto, escribí un artículo sobre <Link href='/articulos/khabib-disciplina'>Las Claves de la Disciplina de Khabib</Link>.</li>
                        <br />
                        <li><b>. Autorreflexión y honestidad: </b>Las MMA son una disciplina bastante exigente que sacan a relucir tus puntos débiles y vulnerabilidades de manera inmediata. Una sola sesión de sparring basta para que notes todos los puntos débiles de tu juego. Por eso es necesario que tengas la humildad necesaria para ver en lo que estás fallando, y que estés dispuesto a mejorar constantemente, y esto no solo aplica al aspecto físico, sino también al mental. Peleadores como <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> han sabido reconocer sus flaquezas y trabajar con ellas, reconociendo cosas como el propio miedo que sentía antes de cada pelea, utilizándolo como una forma de dar lo máximo, afirmando que: “Sentir miedo es una señal de inteligencia. En mi caso me ayuda a rendir mejor”.</li>
                        <br />
                        <li><b>. Fortaleza Mental y Piel Gruesa: </b>Entrenar duro, las lesiones, las derrotas, los cortes de peso, pelear 2 o 3 veces por año… Todas estas cosas requieren de una mentalidad fuerte para atravesarlas de la mejor manera, y aunque algunas personas nacen con esta fortaleza, lo cierto es que todos podemos desarrollar la fortaleza mental para atravesar los desafíos que nos pone la vida. Relacionado con este punto también esta la piel gruesa, dado que no importa lo bueno que seas, siempre habrá críticos y haters, y con las derrotas se harán sentir aún más, es por eso que necesitas ser capaz de ignorar ciertas críticas, y de discernir las críticas constructivas para tomarlas, de las tóxicas que no aportan nada. </li>
                    </ul>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/DJSND_Ynn0M?si=QtPsitQVmirIdE35" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Pelear de Manera Amateur y Competir</h2>
                    <p>Es necesario adquirir una buena cantidad de experiencia antes de aventurarse a competir como profesional, por eso es que incluyo 2 tipos de experiencia que pueden ser de mucha utilidad para tu camino como pro. </p>
                    <p>La primera es la competencia, que no necesariamente implica pelear en MMA. Puedes tomar una de las artes marciales que estás practicando, como el jiu-jitsu o el kickboxing, y anotarte a competiciones de esta arte marcial. El ya estar midiéndote a un nivel competitivo, aunque no sea exactamente en las artes marciales mixtas, te ayudará a mejorar en el aspecto específico en el que compitas, y te permitirá ir aprendiendo a manejar los nervios que puedes sentir a la hora de competir, por el miedo al rival o por el ambiente que puede generase con el público en dichos torneos. Además de que te ayudará a saber donde estás parado, en que nivel te encuentras actualmente, y que es lo que necesitas mejorar para rendir mejor en los próximos desafíos. </p>
                    <p>La segunda forma de ganar experiencia es simplemente compitiendo a nivel amateur en MMA. Es posible que existan varios torneos regionales por tu zona, por lo que no dudes en anotarte y participar en todas las peleas que puedas. El ir ganando minutos dentro del octágono, e ir sumando un récord positivo, aunque sea de forma amateur, te ayudará en tu camino a ser profesional, y también servirá de guía para conocer tu nivel como peleador, así también como para entender en que aspectos debes mejorar y poner más tu atención. </p>
                    <h2>Pelear de Forma Profesional</h2>
                    <p>Cumpliendo con todos los puntos anteriores ya estás listo para tener tu primera pelea profesional y para desarrollar tu carrera de la mejor forma que puedas. Recuerda rodearte de un buen equipo con un ambiente sano, que sepan guiarte y llevarte por el camino adecuado para que puedas sacar lo mejor de ti. </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}