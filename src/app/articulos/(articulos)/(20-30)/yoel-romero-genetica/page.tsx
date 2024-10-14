import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
/* Images */
import hero from '@/assets/articulos/20-30/yoel_romero_genetica.jpg'
import joelAndJones from '@/assets/articulos/insideArticle/yoel-romero-genetica/romero-and-jones.jpg'

export const metadata: Metadata = {
    title: 'La Génetica de Yoel Romero',
    description: 'Yoel Romero es un superhumano, el admirable prodigio genético que ha demostrado ser el luchador cubano para seguir activo con 47 años y para sorprender a los médicos con lo rápido de su recuperación.',
    openGraph: {
        title: 'La Génetica de Yoel Romero',
        description: 'Yoel Romero es un superhumano, el admirable prodigio genético que ha demostrado ser el luchador cubano para seguir activo con 47 años y para sorprender a los médicos con lo rápido de su recuperación.',
        url: 'https://fullmma.org/articulos/yoel-romero-genetica'
    }
}

export default function YoelRomeroGenetica () {
    return(
        <main>
            <ArticleHero title='La Genética de Yoel Romero' subtitle='Yoel Romero es un superhumano, el admirable prodigio genético que ha demostrado ser el luchador cubano para seguir activo con 47 años y para sorprender a los médicos con lo rápido de su recuperación.' image={hero} date='2024-06-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Yoel Romero Prodigio Genético</h2>
                    <p>A nadie que haya seguido la carrera del cubano <b>Yoel Romero</b>, le cabe duda de que es una especie de prodigio genético. Primero por el físico de culturista que lo acompaña desde inicios de su carrera y que aún mantiene con sus 47 años de edad, que además llama la atención teniendo en cuenta que portar un cuerpo musculoso no aporta una ventaja significativa en lo deportivo, y que uno esperaría que a su edad, los años le hayan pasado una mayor factura.</p>
                    <p>Lo segundo que llama la atención de su caso, es la anecdota que contó el comentarista de <Link href='/articulos/ufc'>UFC</Link> y protagonista del podcast más escuchado en el mundo, <b>Joe Rogan</b>. Que para poner en contexto, estaba hablando de cuando el cubano sufrió una lesión bastante grave en una pelea, que fue una fractura en el hueso orbital, que afecta a uno de los huesos que rodean el ojo, que para cuando fue a tratarse esta lesión en el médio, no sólo se encontraron con que los tendones de sus ojos eran 3 veces más gruesos que los de una persona normal, sino que además su lesión ya había comenzado a sanar a una velocidad que nunca antes había sido vista.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/y8yltl4m9OM?si=uqqsJqh6-tRo4K5m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La anomalía genética de Yoel no queda sólo ahí, ya que además, ha demostrado tener una dureza y una capacidad para absorver golpes a lo largo de su carrera, poca antes vista, habiendo recibido golpes que a cualquier persona normal hubieran dejado en el piso inconsciente, Romero sin embargo, parece no verse afectado por este tipo de golpes. Es algo que se pudo apreciar tanto en su pelea contra <b>Paulo Costa</b>, como en la que tuvo contra <b>Rober Whittaker</b>, que conectaron patadas a la cabeza durísimas, pero que parecieran no haber afectado al cubano, que gracias a esta capacidad de soportar golpes, solamente pude ser noqueado 1 vez en sus más de 15 años de carrera, y en sus 23 peleas como profesional, pese a haberse enfrentado a rivales durísimos, como los antes mencionados.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/mQCvriuwRDo?si=1md0epre1cmFag1V&amp;start=861" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En aquella ocasión con Paulo Costa, se comió patada con la pierna derecha directo a la cabeza, y la recibió como si no fuera nada, demostrando las habilidades innatas privilegiadas que tiene, al menos en este aspecto. La dureza de su cabeza y su habilidad para absorver golpes, seguramente se deban a lo grueso de cuello y a la fortaleza que parece tener en los trapecios, que ayudaron al cubano a lo largo de su carrera a casi no sufrir daño. </p>
                    <h2>¿Qué le Pasó en el Cuello a Yoel Romero?</h2>
                    <p>En la parte trasera del cuello de Yoel Romero puede apreciarse una cicatriz importante, esto se debe a una operación delicada que debió realizarse previo a su ingreso a la <Link href='/articulos/ufc'>UFC</Link>, operación que pese a tenerlo en un estado saludable hoy en día, limitan la movilidad que el cubano tiene el cuello.</p>
                    <p>Resulta ser que en un entrenamiento que Romero estaba teniendo en el Coconut Creek en el año 2011, mientras practicaban lucha se escuchó un &quot;click&quot;, que llevó a su entrenador a pedirle que descansara un momento. Sin embargo Romero no sentía nada raro ni creía que fuera grave lo que tenía, hasta que uno de sus compañeros le remarcó que tenía una joroba en el cuello, que hizo preocupar a sus maestros por lo que llevaron al médico de inmediato. Tiempo más tarde Yoel comenzaría a sentir mareos y tendría dificultad para moverse, según relata el mismo Yoel Romero: </p>
                    <p><b>&quot;Yo digo “¿Qué pasó?” Él me dice: “¡Tu cuello!”. Sentí poco dolor, pero no tenía idea de qué era.”¡Tienes que ir al médico!” Cuando fui a la ducha, sentí que no podía moverme, mis manos se entumecieron, no podía mover mi cabeza. Mi C4 cuarta vértebra cervical estaba rota. Y mis trapecios son muy grandes. Eso fue lo que me salvó.&quot;</b></p>
                    <Image className={styles.article__image} src={joelAndJones} alt='' />
                    <p>Es que exactamente como lo relata Yoel, según el médico que lo atendió, estuvo cerca de la muerte producto de la rotura de su vértebra cervical, sin embargo fue el tamaño de sus trapecios lo que lo salvó. Pese a que varios especialistas veían la carrera de Romero como terminada, el cubano no se quedaría con eso, visitando profesionales que lo ayudaron a ir mejorando en su proceso de rehabilitación, que le permitieron seguir con su carrera, llegar a la UFC, y pelear por el título en 2 ocasiones. Posicionándose, seguramente, como el mejor luchador cubano de MMA de la historia.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}