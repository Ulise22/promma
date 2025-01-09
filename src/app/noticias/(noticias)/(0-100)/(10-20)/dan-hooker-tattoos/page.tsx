import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-100/10-20/dan_hooker_tattoos.jpg'
import legsTattoos from '@/assets/noticias/insideArticle/dan_hooker_tattoos/hooker_leg_tattoo.jpeg'

export const metadata: Metadata = {
    title: 'Dan Hooker Tattoos',
    description: 'Quien es una de las estrellas de la UFC, con su increíble estilo de striking, ocupando al día de la fecha el puesto #11 en los rankings de peso ligero, Dan Hooker, en el último tiempo ha sorprendido a varios con el cambio físico que ha presentado, pasando de no tener ningún tatuaje en el cuerpo, a poco a poco estar llenándose de estos en menos de 2 años.',
    openGraph: {
        title: 'Dan Hooker Tattoos',
        description: 'Quien es una de las estrellas de la UFC, con su increíble estilo de striking, ocupando al día de la fecha el puesto #11 en los rankings de peso ligero, Dan Hooker, en el último tiempo ha sorprendido a varios con el cambio físico que ha presentado, pasando de no tener ningún tatuaje en el cuerpo, a poco a poco estar llenándose de estos en menos de 2 años.',
        url: 'https://fullmma.org/noticias/dan-hooker-tattoos'
    }
}

export default function DanHookerTattoos () {
    return(
        <main>
            <ArticleHero title='Los tatuajes de Dan Hooker y su significado' subtitle='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.' image={hero} date='2024-08-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Quien es una de las estrellas de la <Link href='/articulos/ufc'>UFC</Link>, con su increíble estilo de striking, ocupando al día de la fecha el puesto #11 en los rankings de peso ligero, <b>Dan Hooker</b>, en el último tiempo ha sorprendido a varios con el cambio físico que ha presentado, pasando de no tener ningún tatuaje en el cuerpo, a poco a poco estar llenándose de estos en menos de 2 años. </p>
                    <p>La razón a la que se debe tremendo cambio, según explicó él mismo en la rueda de prensa previa al <b>UFC 290 (<Link href='/peleadores/alexander-volkanovski'>Volkanovski</Link> vs Rodríguez)</b> donde enfrentó al estadounidense <b>Jailin Turner</b>, es por simple impulsividad.</p>
                    <p>Explicó que luego de un evento de UFC, tenía planeado volver a su país, Nueva Zelanda, pero que su vuelo se suspendió, terminó por viajar a <b>Gold Coast</b> en Australia, donde tenía un amigo que lo convenció de tatuarse. Fue entonces que se hizo un tatuaje que le ocupó toda la espalda (curioso como primer tatuaje). Para Dan Hooker tener un sólo tatuaje se vería tonto, asi que decidió necesitaba otro tatuaje, en principio uno pequeño, pero ni bien el tatuador comenzó a dibujar resultó que el tatuaje no era tan pequeño, y así es como terminó con la calabera que se le puede apreciar en el pecho.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/GRnJNVc6mrM?si=A2iYP5hEEKgDCPhG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Significado del Tutuaje en la Espalda de Dan Hooker</h2>
                    <p>El primero de los tatuajes que Hooker decidió hacerse en el cuerpo es el del Kabuto (el casco tradicional de la armadura japonesa) de un samurái. Este casco formaba una parte importante en el equipamiento de los samuráis, y dado la cantidad de textos y códigos reflejados en él, fue ganando un papel muy simbólico para quienes lo usaban.</p>
                    <p>Más allá del Kabuto, el tener un tatuaje relacionado a los samuráis simboliza valores como el honor, la justicia, el camino recto, la disciplina, la honestidad y la fuerza interior.</p>
                    <h2>Significado de Los Tatuajes en las Piernas de Dan Hooker</h2>
                    <p>En marzo de 2023, Dan Hooker decidió también que era momento de tatuarse las piernas, en esta ocasión decidió hacerse el tatuaje tradicional de la tribu Maorí <b>Ta Moko</b>, que es una marca permanente que se hacían los pueblos indígenas de Nueva Zelanda (país del que recordemos que es Dan Hooker). Para la tribu Maorí, este tatuaje es un recordatorio a las personas de la responsabilidad que deben llevar en sus hombros a los largo de sus vidas, es por esto que para ellos el recibir este tatuaje, es un gran momento de orgullo y honor.</p>
                    <Image className={styles.article__image} src={legsTattoos} alt='' />
                    <p>A Hooker le parecía que se veía estúpido tener tatuada sólo una de sus piernas, por lo que decidió tatuarse la otra también. Esto es algo parecidio a lo que le sucedió con sus brazos, dado que en un inicio sólo se tatuó uno, pero vió necesario tatuarse el otro también por la misma razón. De esta forma pasó de no tener ningún tatuaje en su cuerpo a ir llenándose de estos en muy poco tiempo.</p>
                    <p>Para quien tenga curiosidad de saber cómo le fue en su carrera deportiva desde que comenzó a tatuar su cuerpo, sólo ha tenido una pelea y fue la que tuvo lugar en el <b>UFC 290</b> ante el estadounidense <b>Jalín Turner</b>, obteniendo una victoria por decisión dividida. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}