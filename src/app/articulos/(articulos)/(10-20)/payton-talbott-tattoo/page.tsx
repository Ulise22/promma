import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/10-20/payton_talbott_tattoo.jpg'

export const metadata: Metadata = {
    title: 'Payton Talbott Tattoo',
    description: 'Descubre el significado y el simbolismo detrás de los tatuajes del peleador de UFC Payton Talbott.',
    openGraph: {
        title: 'Payton Talbott Tattoo',
        description: 'Descubre el significado y el simbolismo detrás de los tatuajes del peleador de UFC Payton Talbott.',
        url: 'https://fullmma.org/articulos/payton-talbott-tattoo'
    }
}

export default function PaytonTalbottTattoo () {
    return(
        <main>
            <ArticleHero title='¿Qué significan los tatuajes de Payton Talbott?' subtitle='El significado de los tatuajes del peleador de la UFC Payton Talbott. ' image={hero} date='21/12/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El joven luchador estadounidense de apenas 26 años, <b>Payton Talbott</b>, lleva apenas poco más de un año en la UFC pero cada vez da más de que hablar. Con un récord profesional en las MMA de 9-0, y un récord en la UFC 3-0, con sus 3 victorias siendo por finalización, y habiendo ganado 2 bonos en el camino, siendo el último el obtenido en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, que lo vió enfrentanrse al francés <b>Yanis Ghemmouri</b>, Talbott apunta a convertirse en una de las estrella de la división de peso gallo de la compañía. Pero si hay algo que llamó particularmente la atención de los aficionados, es el tatuaje de Payton Talbott, particularmente el circulo negro que atraviesa su pecho y espalda, asi que es eso lo que voy a cubrir el día de hoy.</p>
                    <h2>¿Por qué Payton Talbott tiene un tatuaje circular?</h2>
                    <p>Comenzando a hablar del tatuaje más llamativo de este peleador, el circulo negro que está en el medio de su torso, tanto en el pecho como en la espalda, como si lo atravesara. Teniendo en cuenta el reconocido fanatismo de Payton con el anime y la cultura japonesa en general, gusto que comparte con Israel Adesanya, por ejemplo, es posible que este tatuaje esté inspirado en el personaje de la serie Bleach, &quot;Grimmjow&quot;, quien posee un tatuaje similar, atravesando de la misma manera al personaje, con este circulo estando presente tanto en la boca del estomago como en la espalda. Así mismo, existen otros personajes con agujeros en el cuerpo, que representan la eliminación del alma y de las emociones</p>
                    <p>En un video del canal de YouTube <b>Nevada Sports Net</b>, donde se dedicó a responder las preguntas frecuentes que le hacían los fans, explicó el significado del tatuaje y la razón por la que se lo hizo, declarando: <b>&quot;Es sólo un agujero que atraviesa mi cuerpo. Representa un vacío interno, la falta de algo, la falta de emoción&quot;</b>. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/kB6zVgOOyZ0?si=uI3Ws190eBc-Xcxf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Unas declaraciones un poco edgy de su parte, pero dan a entrever un poco de la mentalidad de este peleador, que como mencioné antes, nos va a dar cada vez más de qué hablar. Además, en una entrevista con Ariel Halwani se había explayado diciendo: <b>&quot;Creo todos sienten ese vacío un poco, todos siente el llamado del vacío, pero siento que es un poco más intenso conmigo, y simplemente lo siento todo el tiempo&quot;</b>.</p>
                    <h2>Payton Talbott Tattoo Significado</h2>
                    <p>Pero este no es el único tatuaje que posee un cuerpo, dado que en el lateral izquierdo de su torzo posee un tattoo que está muy relacionado con la cultura japonesa. Dado que tiene tatuado una <b>Mascara Hannya</b>, que es una máscara utilizada en el teatro japonés, con un diseño reconocible caracterizado por poseer 2 cuernos afilados como los de un toro, ojos metálicos y una boca lasciva.</p>
                    <p>Esta mascara representa a un demonio celoso, retratando las almas de las mujeres que se han convertido en demonios debido a la obsesión o a los celos. Aunque también, más allá de representar los espíritus de las mujeres celosas en la cultura tradicional japonesa, también son vistos como un símbolo de buena suerte y como un talisman contra la negatividad y los espiritus malignos. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}