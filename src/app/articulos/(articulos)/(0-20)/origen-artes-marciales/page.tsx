import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/origen-am_hero.jpg'
import Image from 'next/image'

export default function OrigenArtesMarciales () {
    return(
        <main>
            <ArticleHero title='Origen de las Artes Marciales' subtitle='En este artículo repasaremos de forma breve cuál es el Origen de las Artes Marciales, y cuál es considerada la primera en ser inventada.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La palabra &quot;Marcial&quot; o &quot;Marcialidad&quot; viene del Dios Guerrero de los romanos, Marte. Es por esto que la marcialidad hace referencia a todo lo que englobe la disciplina militar. Mientras que la palabra &quot;Arte&quot; hace referencia a las formas en que el hombre pueda expresar una emoción o sentimiento de forma bella. Por tanto, las &quot;Artes Marciales&quot; son los sistemas creados por los humanos para expresar y enseñar las mejores técnicas de defensa persona y de disciplina militar.</p>
                    <p>En sí, las Artes Marciales son un conjunto de técnicas y prácticas con el objetivo de someter, dañar o defenderse del rival, que se diferencian de un simple enfrentamiento físico en que con las artes marciales los golpes y ataques se hacen de forma coherente y buscando los métodos más efectivos. Hoy en día, las artes marciales se practican y son vistas como un deporte, para mantenerse en forma, para mejorar la salud, para saber cómo defenderse o para buscar alguna forma de desarrollo personal con la cual crecer y forjar el caracter y la confianza en uno mismo.</p>
                    <p>Debido a que las prácticas de combate son algo casi tan antiguo como el humano mismo, es díficil determinar cuál ha sido el origen exacto de las artes marciales, y por ende, también es difícil saber cuál es el primer arte marcial en ser inventado. Sin embago, se cree que el origen de las Artes Marciales data de hace más de 4000 años, que según algunos historiadores, se expandieron por todo Oriente gracias a las enseñanzas de los monjes Budistas, quienes idearon un sistema de defensa personal para protejerse de los forajidos y de los animales salvajes durante sus viajes. Con el paso del tiempo cada país oriental fue creando y desarrollando sus propias artes marciales, de acuerdo a sus costumbres culturales y religiosas, entre las que destacan el Karate en Japón, el Kung Fu en China, el kalaripayattu en la India, o el Taekwondo en Corea.</p>
                    <p>Aunque en otras partes del mundo también existen tradiciones de combate que podríamos considerar como artes marciales, como <b>El Pancacrio</b> en la Antigua Grecia, que comenzó a practicarse con la creación de los juego olímpicos celebrados varios siglos antes de Cristo. Durante la época en que se practicaba este arte marcial practicamente todo estaba permitido, las patadas, puñetazos y estrangulaciones eran amadas por el público de aquella época, por el nivel de espectáculo y violencia que presentaban, mientras que las prohibiciones se centraban únicamente en los piquetes de ojos y los mordiscos, permitiendo todo lo demás que a los peleadores se les pueda ocurrir.</p>
                    <p>En resumen podemos decir que es difícil detallar con rigurosidad cuál es el origen concreto de las artes marciales, dado que los sistemas de pelea son casi tan antiguos como el ser humano mismo, y dado que varios sitemas de pelea diferentes se fueron creando simultáneamente en diferentes partes del mundo y con diferentes culturas.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}