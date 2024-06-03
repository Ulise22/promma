import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/noticias/previews/0-10/conor-mcgregor_volverapelear.jpg'

export default function ConorMcgregorVueltaAPelear () {
    return(
        <main>
            <ArticleHero title='¿Cuándo Vuelve a Pelear Conor McGregor?' subtitle='Recientemente Conor ha declarado sus intenciones de volver a pelear en la UFC este año, pero ¿hay posibilidades de que vuelva a competir?' image={hero} date='26/03/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El pasado 21 de marzo, se estrenó en Amazon Prime, la película <b>Road House</b>, protagonizada por Jake Gyllenhaal, y que cuenta con el debut en el cine de la estrella de MMA <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, en el que interpreta al villano de la cinta, contando con una participación importante en la misma.Pero entre esto, su empresa de whisky, y otras actividades que parecen alejarlo del mundo de la pelea, nos preguntamos si volveremos a verlo entrar en el octagono.</p>
                    <p>Desde hace tiempo que pareciera estar apalabrada una pelea entre Conor y <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, quienes fueron protagonistas de la última temporada de <b>The Ultima Fighter</b> (TUF), el reality de televisión organizado por la UFC. Sin embargo, desde el lanzamiento de esta temporada, la 31 de la serie, en 2023, no hemos recibido ninguna novedad ni noticia al respecto, y tanto Chandler como Conor se han mantenido inactivos los últimos 2 y 3 años, respectivamente.</p>
                    <p>Según las declaraciones que fueron dando tanto Conor, como Chandler y como Dana White, parecería que lo que va a suceder es una pelea en verano entre estos 2 peleadores. Michael Chandler ya se ha animado a declarar en TMZ Sports: &quot;Tengo la confirmación oficial, pelearemos este verano. Dejaremos que el tribunal de la opinión pública especule sobre cuál es la fecha, pero será definitivamente en verano. Siempre supe que sería Conor, a pesar de lo que los medios, los tweets y la gente diga. Será un paseo interesante&quot;. Por su lado, en The MMA Hour, Conor declaró que <b>&quot;Ya se ha tomado la decisión, estoy listo. Esto significa que este verano el &apos;Mac&apos; regresará&quot;</b>. </p>
                    <p>Mientras tanto, aunque en el pasado Dana White había dicho que era difícil motivar a Conor para que volviera a pelear, dado la gran cantidad de dinero que fue capaz de amazar a lo largo de su carrera, recientemente en el podcast de <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> y <b>Henry Cejudo</b>, ha aclarado cuál es su situación y dió algo de esperanzas: &quot;No hay falta de comunicación entre nosotros, en absoluto. Él ahora -por ayer- está en Nueva Yok para el estreno de la película &apos;Road House&apos;. Tiene obligaciones ahora mismo para promocionar esta película, así que ha estado volando a todo el mundo y asistiendo a los estrenos. Conor ya puede regresar al gimnasio a entrenar a tiempo completo&quot;.</p>
                    <p>Por lo que sí, existe una chance concreta de que volvamos a ver a quien supo ser doble campeón, volver al octagono. Sin embargo es importante tener en cuenta que Conor ha ido centrando su vida en otras cosas diferentes a las MMA, que pareciera no haberse estado cuidando todo lo bien que otros peleadores han hecho, y que recientemente ha dado una entrevista en <b>Sports Illustrated</b> donde se lo veía actuar extraño y con dificultad para hablar, lo que a nosotros nos deja dudas de qué tan listo esta para volver a pelear al más alto nivel.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/g3k7tNH7w8o?si=7pN2XyV8cmbkTZ6D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}