import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/mentalidad_topuria.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'La Mentalidad de Ilia Topuria',
    description: 'La mentalidad de campeón que llevó al español Ilia Topuria a lo más alto de la UFC.',
    openGraph: {
        title: 'La Mentalidad de Ilia Topuria',
        description: 'La mentalidad de campeón que llevó al español Ilia Topuria a lo más alto de la UFC.',
        url: 'https://fullmma.org/articulos/la-mentalidad-de-ilia-topuria'
    }
}

export default function MentalidadIliaTopuria () {
    return(
        <main>
            <ArticleHero title='La Mentalidad de Ilia Topuria: ¡Los Campeones se Hacen!' subtitle='La mentalidad de Topuria que lo llevó a ser campeón de la división de peso pluma de la UFC y a cumplir todos sus sueños y objetivos. ' image={hero} date='2025-02-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La mentalidad de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> lo es todo para llegar hasta donde ha llegado. No es casualidad que el hispano georgiano haya llegado a convertirse en campeón de peso pluma en la UFC derrotando a uno de los mejores peleadores de la historia de la división, como lo es <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, para luego hacer su primera defensa siendo el primero en noquear a otro histórico como <Link href='/peleadores/max-holloway'>Max Holloway</Link>, manteniendo un récord invicto de 16-0. Por eso, y porque escucharlo hablar nos puede dejar muchas enseñanzas positivas para la vida, hoy vamos a hablar de las claves en la mentalidad de Ilia Topuria, que lo convirtieron en el campeón que es hoy en día. </p>
                    <p>Una de las cosas que destaca en su forma de pensar, es que confía demasiado en sí mismo y en el trabajo que hace para cumplir sus objetivos. Por este trabajo, es que Ilia considera que uno no debe esperar a cumplir lo que se propuso para tenerse a uno mismo en alta estima, sino que el solo hecho de estar trabajando por cumplir tus sueños es motivo suficiente para justificar esa confianza en sí mismo. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/r8kzf-Rs1EI?si=slJoKGJQQbWEAbpP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Relacionado a este punto, y poniendo un ejemplo, para Ilia, no eres inteligente en el momento en que das un examen y sacas 10, sino que fuiste inteligente desde muchísimo antes, desde que estabas estudiando para aquel examen, por lo que no tiene sentido esperar a ver el resultado para comenzar a sentirse bien con uno mismo. Siendo congruente con este mensaje, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> siempre se mostró confiado en su calidad como peleador, por lo que siempre se sintió campeón del mundo, según su lógica, no es que empezó a ser bueno en el momento que noqueó a <Link href='/peleadores/alexander-volkanovski'>Volkanovski</Link>, sino que era bueno desde antes, y fue bueno durante todo el proceso que lo llevó a ser campeón del mundo. Por esta razón, nunca tuvo pelos en la lengua para hablar de sí mismo como si fuera el mejor peleador de la UFC, dado que, en su cabeza, siempre lo fue, y él era capaz de ver esto antes que todos los demás. </p>
                    <h2>La Paciencia de un Campeón</h2>
                    <p>Lo fascinante del campeón español, es que es capaz de combinar esta confianza en sí mismo y en su trabajo, con una paciencia para saber que los resultados tardan en llegar, que el éxito requiere de tiempo y que no hay forma de acelerar estos procesos, “lento es el camino más rápido que hay para alcanzar objetivos en esta vida”, suele repetir el campeón. En esta misma línea, Ilia suele decir que “por más que embaraces a 9 mujeres no vas a tener un hijo en un mes”, para explicar que las cosas llevan un tiempo, y que el tener paciencia y ser consciente de esto te va a ayudar mucho en el camino que estás recorriendo. Gracias a la consciencia que tiene Topuria de este concepto, es que podemos encontrar videos de él de hace mucho tiempo hablando sobre como es que se iba a convertir en campeón de la UFC, dado que, aunque hace años prácticamente nadie lo conocía, ni veían palpable tenerlo como campeón, Ilia siempre fue consciente que conseguir estos objetivos lleva tiempo, y que eventualmente conseguiría todo lo que se propuso a sí mismo.  </p>
                    <h2>Imitar a los Mejores</h2>
                    <p>En una entrevista que tuvo con Jordi Wild en The Wild Project, donde estaba hablando sobre que él cree que los campeones se hacen y no se nacen, y sobre como busca siempre hacerse responsable de todo lo que le sucede en la vida, buscando a toda costa evitar culpar a los demás de las cosas que le pasan, habló de una de las claves de su éxito en la vida en general, más allá del deporte. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/J8SCztmOpqo?si=DAv9IAVb3SuviZ5o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Dado que, hablando de dinero y finanzas personales, mencionó que imita en cierto sentido la forma que tiene el empresario estadounidense Donald Trump de manejar su dinero. Esto es porque Ilia busca constantemente imitar a los mejores en su área, en este caso prefiere seguir los pasos un empresario multimillonario para manejar su dinero, que los de otra persona que a lo mejor no sabe lo que está haciendo. Esta regla la aplica al resto de áreas de su vida, buscando imitar a los mejores peleadores de MMA que hubo en la historia, para emular su éxito, y prefiriendo tomar consejos de un hombre que lleve 50 años felizmente casado que los de un soltero infeliz con su vida. </p>
                    <p>No busca intoxicarse con mensajes de gente que está ocupando lugares en los que él mismo no quiere estar, por el contrario, busca consejo y sabiduría de las personas que ocupan un lugar en el que Ilia sí quiere estar. </p>
                    <h2>¿Es Ilia Topuria Arrogante?</h2>
                    <p>Debido a lo vocal que es Ilia respecto al nivel en el que cree estar, y sobre lo superior que se considera sobre sus rivales, es que a muchos les da la impresión de que el campeón georgiano es un hombre arrogante. </p>
                    <p>Lo cierto es que el mismo Topuria no se ve a sí mismo de esta manera, por el contrario, considera que estos mensajes que algunas personas pueden considerar como signos de arrogancia, son necesarios para él mentalizarse y darse la confianza que necesita al subir al octágono. Además de que lo del luchador español no se queda sólo en palabras, ya que ha sabido respaldar sus dichos con acciones, no puede ser tildado de arrogante una persona que afirma que va a ser el primero en noquear a <Link href='/peleadores/max-holloway'>Max Holloway</Link>, y termina haciendo efectivamente lo que dijo que iba a hacer. </p>
                    <iframe className={styles.article__video} loading='lazy' width="478" height="849" src="https://www.youtube.com/embed/6u5z0AN-aVg" title="No es arrogancia - Ilia Topuria #podcast #iliatopuria #entrevista" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Lo otro que quizás no se tiene en cuenta y que ha mencionado el mismo Ilia, es que hay mucho trabajo detrás de los resultados. No habla por hablar, sino que tuvo que atravesar por un arduo trabajo para estar en la posición en la que está, y eso es algo que la gente no puede ver, y puede terminar malinterpretándose esas declaraciones que reflejan una confianza en el trabajo realizado, como las palabras de un joven arrogante al que le falta una dosis de humildad. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}