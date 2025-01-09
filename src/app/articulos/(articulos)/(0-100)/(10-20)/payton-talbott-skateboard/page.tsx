import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/0-100/10-20/payton_talbott_skateboard.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Payton Talbott Skateboard',
    description: 'Descubre cómo el skateboarding mejora el rendimiento del peleador de UFC Payton Talbott y qué podemos aprender de su enfoque único en los deportes.',
    openGraph: {
        title: 'Payton Talbott Skateboard',
        description: 'Descubre cómo el skateboarding mejora el rendimiento del peleador de UFC Payton Talbott y qué podemos aprender de su enfoque único en los deportes.',
        url: 'https://fullmma.org/articulos/payton-talbott-skateboard'
    }
}

export default function PaytonTalbottTattoo () {
    return(
        <main>
            <ArticleHero title='Payton Talbott: Cómo el Skateboard Influye en su Carrera en la UFC' subtitle='La influencia que puede tener el skate, junto con otros hobbies, en un peleador de UFC como Payton Talbott. Además te contamos la historia de cómo Payton Talbott conoció a la leyenda del skateboard, Tony Hawk.' image={hero} date='26/12/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El joven peleador de 26 años, Payton Talbott, tendrá su próximo combate en enero de 2025, peleando en el <b>UFC 311</b>, a esta altura ya lleva un récord profesional en MMA de 9-0 con 3 de sus victorias siendo en la UFC, siendo 8 de esas victorias por finalización, con 7 victorias por la vía del nocuat y 1 siendo por sumisión. Por todo esto es que el luchador estadounidense de peso gallo se ha convertido en uno de los prospectos y futuras estrellas más destacadas de la compañía, dándonos cada vez más de que hablar. En este caso, siendo una persona con muchos hobbies y muchas pasiones, decidimos hablar de uno de sus intereses más conocidos, como lo es el skateboarding, dado que siendo una persona que se dedica profesionalmente a recibir dar y recibir golpes todo el tiempo, nos preguntamos ¿Por qué Payton afirma que el Skateboard lastima más el cuerpo que pelear?</p>
                    <h2>La Pasión de Payton Talbott por el Skateboarding </h2>
                    <p>No es secreto para nadie que, al igual que otros peleadores de UFC como <b>Luke Rockhold</b>, <b>Kron Gracie</b>, <b>Andre Fili</b> y <b>Jalin Turner</b>, Payton Talbott es un gran entusiasta del skateboard, siendo uno de sus tantos pasatiempos. En una entrevista que tuvo con <b>Ariel Helwani</b>, al ser consultado respecto a la opinión de ciertas personas que creen que se pone en una posición peligrosa al practicar skateboard semanas antes de sus combates, declaró: <b>&quot;No me importa, es mi vida y voy a vivirla como quiero. Estuve haciendo durante toda mi carrera de MMA cosas como esta y nunca me bajé de una pelea por una lesión, aunque estuve un poco cerca.&quot;</b></p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/EAsik4dcK9w?si=UsAEpW7nhsLf3WpB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Respecto a los beneficios que Payton ve en esta disciplina, expresó: <b>&quot;Creo que me ayuda con mi juego, es útil para diversificar mi mente, me ayuda a mantenerme joven y a disfrutar del entrenamiento porque estoy haciendo todo tipo de diferentes cosas. No lo sé, si puedo hacer todas estas actividades y no salir lastimado, va a ser mucho más fácil cuando esté en una jaula y alguien intente lastimarme.&quot;</b></p>
                    <p>Además en una entrevista bastante vieja había mencionado una de las lecciones que te deja este deporte, que puede ser extrapolada a las MMA y la vida en general: <b>Hay un par de lecciones que se aprenden como skater. Cuando te caes y te lastimas contra el suelo, es importante ponerse de pie rápido</b>.</p>
                    <h2>Los Peligros y beneficios del Skateboarding en las MMA </h2>
                    <p>Es interesante el planteo de Payton, dado que aunque a uno le puede parecer a priori que es riesgoso estar practicando este tipo de deportes a semanas de un enfrentamiento, debido al peligro latente de lastimarte y sufrir una lesión que te obligue a cancelar una pelea, lo cierto es que esto jamás le ha pasado este peleador, que por el contrario, este enfoque de realizar distintas actividades al mismo tiempo pareciera haberle beneficiado a lo largo de su carrera hasta ahora, manteniéndose invicto con un récord de 9-0, finalizando practicamente en todas sus peleas y jamás teniendo que bajarse de una pelea por una lesión.</p>
                    <p>Sin embargo también fue capaz de reconocer los riesgos y lo peligroso que puede llegar a ser este deporte, declarando en la conferencia de prensa posterior a su pelea en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link> que conocía el caso de muchos peleadores que arruinaron su carrera por practicar Skateboarding y que es mucho el daño que se puede recibir. Sus palabras fueron: <b>&quot;El Skateborading lastima más al cuerpo, seguro. Nadie te golpea tan fuerte como el concreto. El Skateboarding ha descarrilado la carrera de muchos peleadores&quot;</b>.</p>
                    <h2>Payton Talbott y Tony Hawk</h2>
                    <p>Esta pasión por el Skate y su explosión en la UFC, posicionándose como una posible futura estrella, lo llevó a conocer a quien es uno de sus ídolos, especialmente en esta disciplina, como lo es la leyenda de la patineta <b>Tony Hawk</b>, a quien conoció pocas semanas antes de su pelea en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>. Según Payton comentó: <b>&quot;De hecho fue él quien inició todo, quería hacer algo para los medios durante un periodo de 3 semanas, pero iba a estar super ocupado, así que voló hasta mi depósito para que puedieramos patinar. En un momento lo suficientemente alejado de mi pelea para que no nos tuvieramos que preocupar demasiado&quot;</b>.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/xE46tZld2AM?si=ydwcE47uwh2uMGOc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}