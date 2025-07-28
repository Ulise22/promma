import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/prochazka_training.png'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Cómo Entrena Jiri Prochazka',
    description: "El loco y salvaje régimen de entrenamiento al que se somete el excampeón de peso semipesado, con su famosa preparación mental que incluye pasar 3 días encierrado a oscuras en una habitación con sólo agua. ",
    openGraph: {
        title: 'Cómo Entrena Jiri Prochazka',
        description: "El loco y salvaje régimen de entrenamiento al que se somete el excampeón de peso semipesado, con su famosa preparación mental que incluye pasar 3 días encierrado a oscuras en una habitación con sólo agua. ",
        url: 'https://fullmma.org/noticias/como-entrena-jiri-prochazka'
    }
}

export default function EntrenamientoJiriProchazka () {
    return(
        <main>
            <ArticleHero title='¿Cómo Entrena Jiri Prochazka? El entrenamiento y preparación mental de Jiri Prochazka que incluye golpear 500 veces un árbol y 3 días encerrado sin luz ni comida para confrontar sus demonios. ' subtitle="El loco y salvaje régimen de entrenamiento al que se somete el excampeón de peso semipesado, con su famosa preparación mental que incluye pasar 3 días encierrado a oscuras en una habitación con sólo agua. " image={hero} date='2025-01-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El próximo sábado 18 de enero de este 2025, tendremos el primer evento numerado de UFC, el UFC 311, donde estará peleando el que personalmente es uno de mis luchadores favoritos, <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, enfrentando al excampeón de la división de peso semipesado <b>Jamahal Hill</b>. Ambos luchadores vienen de una derrota por nocaut ante el actual campeón <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, y estarán en busca de una victoria que les de la oportunidad de volver a pelear por el cinturón en el futuro cercano.</p>
                    <p>En este caso, dado que el Checo es uno de los peleadores más curiosos que hay en la compañía, con un estilo de pelea poco ortodoxo, quiero explorar y explicar la mentalidad, el entrenamiento, y el proceso por el que pasa Prochazka para prepararse antes de cada pelea. Ya que más allá de lo extravagante que puedan sonar los secretos que él mismo comparte publicamente, son estas estrategias las que lo llevaron a convertirse en campeón en el pasado, y a ser hoy en día uno de los mejores y más peligrosos peleadores de la división de peso semipesado de la UFC. </p>
                    <h2>Ritual de 3 días de Jiri Prochazka Explicado </h2>
                    <p>Una de las cosas que más ha llamado la atención, desde hace tiempo ya, es cómo el luchador de 32 años se prepara mentalmente para cada enfrentamiento, y ya que es algo recurrente antes de cada pelea, y algo que parece ser, repetirá en la previa a su pelea con Jamahal Hill, vale la pena explicarlo.</p>
                    <YouTubeEmbed videoid='qWenqBOh5kg' />
                    <p>Jiri se encierra en una pequeña habitación durante un lapso de 3 días o 72 horas. Durante ese tiempo, no tiene acceso a ningún tipo de comida, sólo puede beber agua, dado que según él, este proceso es más efectivo de esta manera. Además, está en la habitación completamente solo sin acceso a la luz, haciendo muy fácil perder la noción del tiempo durante su estancia en aquella habitación. Todo este proceso ayuda a que el excampeón pueda enfrentar a sus demonios y a estar preparado para cualquier prueba física que tenga previo a sus combates, además de ayudarlo a mantener la calma durante el calor de la pelea cuando le toca estar arriba del octágono. </p>
                    <p>Según las declaraciones del mismo peleador, en una entrevista con el periodista Ariel Helwani en The MMA Hour, este proceso: <b>&quot;Es de mucha ayuda. Solo estás tu y tu. No hay otras personas. Es mucho más poderoso cuando no hay comida. Todos estos procesos en tu cuerpo son más fuertes. Tu mente trabaja un montón y tienes que morir aquí primero. &quot;</b></p>
                    <p><b>&quot;Y tres días, cuatro días, no es tanto. Pero uso eso sólo para reconocer quien soy realmente, y entonces puedo empezar a entrenar y a empujarme al siguiente siendo realmente yo, más honestamente. Todo eso en la oscuridad durante 3 días, y así puedes trabajar con tus demonios y entrenar lo que quieras. No quiero hablar mucho, porque son cosas personales. Esas es la mayor diversión, porque tenés que llegar al punto en el que el tiempo está terminando, y no puedo hablar sobre eso por es, no intenso, pero para mi son cosas personales y sagradas. &quot;</b></p>
                    <h2>Explicación del Entrenamiento de Jiri Prochazka</h2>
                    <p>Quizás explicar su método de entrenamiento sea aún más difícil que explicar la mentalidad que aplica este peleador, dado que rara vez vemos videos o imagenes de él teniendo un entrenamiento ortodoxo de MMA, boxeo o jiu-jitsu. </p>
                    <YouTubeEmbed videoid='KwMvuI_Q0AE' />
                    <p>Lo que hemos podido saber es que Jiri Prochazka es un gran defensor de golpear árboles como forma de entrenamiento, llegando a dar hasta 500 golpes por día, dado que considera que es una algo muy positivo para tu cuerpo, ya que ayuda a la estabilidad, puesto que se puede aprender a estabilizar el cuerpo al golpear un árbol. </p>
                    <p>No siempre es un árbol lo que golpea, dado que intercala esto con un Makiwara, que es como un palo más pequeño utilizado en karate. También ha recomendado que en caso de golpear un árbol sea a uno pequeño y no a uno muy grande. </p>
                    <h2>Jiri Prochazka Mentalidad </h2>
                    <p>Es reconocida su admiración por la cultura y tradición japonesa, practicando karate como una de sus principales armas a la hora de entrar al octágono de MMA, y viviendo su vida como un seguidor del código japonés Budisho (las reglas y filosofía seguidas por los samuráis). </p>
                    <p>Jiri ha hablado sobre cómo su entrenador le regaló <b>El libro de los 5 anillos</b>. Con el cual aprendió mucho sobre la cultura china y japonesa, sobre las ideas de los samuráis y con el cual inició su camino espiritual. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">7 DAYS TO GO //\\ <a href="https://twitter.com/hashtag/ufc311?src=hash&amp;ref_src=twsrc%5Etfw">#ufc311</a> <a href="https://t.co/FrW5YO3WPS">pic.twitter.com/FrW5YO3WPS</a></p>&mdash; Jiri BJP Prochazka (@jiri_bjp) <a href="https://twitter.com/jiri_bjp/status/1878141791863452095?ref_src=twsrc%5Etfw">January 11, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}