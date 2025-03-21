import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/0-10/campeon_mas_joven.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Campeón Más Joven de la UFC',
    description: 'La historia de cómo Jon Jones, el mejor peleador de MMA de la historia, se convirtió en el campeón más joven en la historia de la UFC.',
    openGraph: {
        title: 'Campeón Más Joven de la UFC',
        description: 'La historia de cómo Jon Jones, el mejor peleador de MMA de la historia, se convirtió en el campeón más joven en la historia de la UFC.',
        url: 'https://fullmma.org/articulos/campeon-mas-joven-de-ufc'
    }
}

export default function PeleadorMasJoven () {
    return(
        <main>
            <ArticleHero title='Jon Jones: El Peleador Más Joven en Ser Campeón de la UFC' subtitle='La historia de cómo quien hoy en día es considerado uno de los mejores de la historia, se convirtió en el campeón más joven que tuvo la UFC con tan sólo 23 años' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El peleador más joven en ser campeón de la UFC en toda la historia es <Link href='/peleadores/jon-jones'>Jon Jones</Link>, que lo consiguió el 19 de marzo de 2011 en el UFC 128, al vencer por TKO en el tercer asalto al brasileño <b>Maurício Rua</b>. Sin embargo el camino para conseguir tremenda hazaña no fue nada sencillo para el joven Jon Jones.</p>
                    <p>Jonathan Dwight Jones nació el 19 de julio de 1987 en Rochester, Nueva York. Siendo el tercero de 4 hermanos, creció muy unido a ellos en el seno de una familia cristiana que inculcó estos valores en los hermanos. Durante su juventud tuvo que sufrir la pérdida de su hermana mayor, que falleció producto de cáncer en el cerebro, este suceso lo marcó tanto a él como a sus hermanos que pasaron a estar más unidos que nunca.</p>
                    <p>Los 3 hermanos eran prodigios genéticos, destacando en los deportes, tanto en el fútbol americano como en la lucha. Mientras que sus hermanos se dedicaron a priorizar el fútbol américano, nuestro protragonista decidió volcarse de llenó a la lucha, donde sería campeón estatal en su instituto y campeón nacional junior.</p>
                    <p>Con 19 años se ve obligado a abandonar sus estudios universitarios, debido a que su novia de aquel momento quedó embarazada, por lo que comienza a trabajar como portero en un bar. En esa misma época, Jones comienza a interesarse por las MMA, por lo que comienza a entrenar. Jon Jones sabía que si era capaz de hacerse un nombre en las promotoras locales, podría llegar a la <Link href='/articulos/ufc'>UFC</Link> donde eventualmente ganaría más dinero, por lo que tan sólo 2 meses después de comenzar a entrenar MMA hace su debut en este deporte como profesional, enfrentando al estadounidense <b>Brad Bernard</b>, a quien vence por nocaut en un minuto y medio de combate.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ONurh1UOQHg?si=f6KtUQB5fYCC8YHn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Peleando en promotoras locales es capaz de hacerse un nombre, consechando un récord de 6-0, que le abriría las puertas a la UFC, para hacer su debut el 9 de agosto de 2008 en UFC 87, donde se enfrentó a <b>André Gusmão</b>, que era un peleador brasileño que también venía invicto, en una pelea en la que a pesar de contar con el handicap de que la había aceptado con sólo 2 semanas de anticipación, fue capaz de ganarla por decisión unánime. </p>
                    <p>En su camino por el título, se encontraría con su primera y hasta ahora única derrota, al enfrentar a <b>Matt Hamill</b>, dado que en un combate que Jones estaba dominando, comenzó a lanzar unos codazos ilegales desde arriba del peleador, lo que hizo al arbitro parar la pelea, y terminar dando como perdedor a Jon Jones por descalificación. </p>
                    <p>A pesar de esto, Jon Jones no dejó de ganar en ningún momento, y acumuló 3 victorias al hilo, donde fue capaz de finalizar en las 3. Venciendo por TKO a <b>Brandon Vera</b> en el primer asalto, por TKO a <b>Vladimir Matyushenko</b> también en el primer asalto, y por sumisión a <b>Ryan Bader</b> en el segundo asalto. Ya con un récord de 11-1, Jones se gana el derecho a pelear por el título con tan sólo 23 años.</p>
                    <p>Finalmente el 19 de marzo de 2011, en el UFC 128, Jon Jones se enfrenta al brasileño Maurício &quot;Shogun&quot; Rua, en Newark, Nueva Jersey. En donde, llegados al tercer asalto, luego de una letal combinación de golpes en el suelo por parte del joven estadounidense, conecta otro zurdaso al cuerpo que tira al suelo a su rival. Logrando hacer historia aquel día, convirtiéndose en el peleador más joven de la historia en convertirse campeón de la UFC. Récord que difilmente podamos ver romperse en el futuro cercano.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/xjseqRSfBTc?si=GyEcLUg8ASThkfLV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}