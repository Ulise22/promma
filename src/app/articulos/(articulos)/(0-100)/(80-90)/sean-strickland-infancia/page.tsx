import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/sean_strickland-infancia.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Sean Strickland Infancia',
    description: 'El trauma de Sean Strickland en su infancia generado por su padre violento, alcoholico y abusivo que lo marcó para siempre. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsean_strickland-infancia.4b8bb97a.webp&w=828&q=65',
        title: 'Sean Strickland Infancia',
        description: 'El trauma de Sean Strickland en su infancia generado por su padre violento, alcoholico y abusivo que lo marcó para siempre. ',
        url: 'https://fullmma.org/articulos/sean-strickland-infancia'
    }
}

export default function SeanStricklandInfancia () {
    return(
        <main>
            <ArticleHero title='La Traumática Infancia de Sean Strickland' subtitle='Como fue la durísima infancia del excampeón de UFC Sean Strickland, marcada por la violencia, el odio y el miedo hacia un padre abusivo.' image={hero} date='2026-02-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/sean-strickland'>Sean Strickland</Link> creció en un hogar disfuncional, por lo que su infancia estuvo marcada por el trauma, la violencia intrafamiliar, el alcohol, las drogas, el miedo, gritos, golpes, insultos constantes, racismo, y un padre física y mentalmente abusivo que lo dañó junto a su madre y su hermano. </p>
                    <p>De más es conocida la personalidad controvertida de Sean Strickland, un peleador al que no le importa decir lo que piensa, incluso si incomoda o molesta a algunas personas, esto también le hace tener un característico humor negro que hace entretenidas de oir sus conferencias de prensa antes de cada pelea, pero que también lo hace ser bastante directo a la hora de hablar, y es por este motivo que podemos saber tanto de la infancia traumatica que le tocó vivir. </p>
                    <h2>Sean Strickland Infancia</h2>
                    <p>Fue críado como él mismo define como una &quot;Basura Blanca&quot; (white trash), insulto americano que hace referencia a las personas blancas de Estados Unidos que viven bajo la pobreza, en lugares rurales o barrios marginales, asociados a estereotipos negativos como que son ignorantes, incivilizados, promiscuos, violentos, racistas, vagos, alcoholicos, drogadictos o que carecen de la suficiente higiene. Cosas que como veremos, describen a la perfección mucho de lo que le tocó vivir a Strickland de niño.</p>
                    <p>Sean Thomas Strickland nació el 27 de febrero de 1991 en Corona, California. Creció en un hogar disfuncional donde abundaba la violencia doméstica, principalmente ejercida por su padre, quien lidiaba con un consumo excesivo de alcohol, drogas y quien era mental y físicamente abusivo con su esposa e hijos, a punto tal, que Sean recuerda vivir desde los 8 años en adelante con el miedo de que su padre puediera matar a su madre.</p>
                    <p>Muchas de las cosas terribles que le tocó vivir las contó en el podcast de <b>Theo Von</b>, donde pudo abrirse y narrar como en varias ocasiones se encondía debajo de la cama de su madre para protegerla, ya que escuchaba amenzas graves, cosas que le repetía su padre a su mamá como &quot;te voy a matar&quot;, &quot;te voy a quemar la cara con ácido&quot; o &quot;te voy a cortar en pedazos y te voy a meter un un bidón con ácido&quot;. </p>
                    <YouTubeEmbed videoid='P7ii2cUhjAk' />
                    <p>Una anecdota particularmente tráumatica que cuenta, es cuando se escondió debajo de la cama de sus padres mientras estos 2 peleaban violentamente. Su padre se percató de su presencia, lo echó de allí, pero Sean se arrastró de vuelta para estar cerca de la situación. Eventualmente la pelea entre sus padres comenzó a escalar a un punto peligroso, por lo que Sean atacó a su padre con una guitarra para defender a su madre, huyó de la casa y llamó a la policía, quienes llegaron al lugar rápidamente y arrestaron a su padre. Lo loco es que al día siguiente su madre fue hasta la comisaría, pagó la fianza y sacó a su padre de allí. </p>
                    <p>Por si todo esto fuera poco, Sean encontró en su abuelo una figura masculina a la que admirar y respetar, quien era alguien alto, grande, físicamente imponente y que encajaba a la perfección con el esterotipo de &quot;White Trash&quot; o &quot;Red Neck&quot;, ya que era extremdamente racista, intolerante, machista, etc. Basicamente era un hombre lleno de odio que le llenó de mierda la cabeza un niño impresionable, quien carecía de figuras masculinas en su vida que no fueran su padre abusivo. </p>
                    <p>Aunque de niño Sean Strickland idolatraba a su abuelo, siendo de las pocas figuras masculinas en su vida que no abusaba físicamente de él como su padre, hoy en día viendo las cosas en retrospectiva, confiesa tenerle odio por las ideas que le metió en la cabeza. Y no es para menos, ya que viviendo en un entorno familiar donde abundaba el miedo y la violencia, más las ideas extremistas que le inculcaba su abuelo, Strickland se convirtió en un niño lleno de odio, con una desconfianza enorme hacia el mundo, y que terminó siendo alguien problemático para los demás, teniendo problemas de conducta en la escuela que terminaron con su expulsión del colegio a los 14 años, por la forma que tenía de tratar a los demás, y por el supremacismo que emanaba con su forma de referirse a sí mismo y a los demás. </p>
                    <YouTubeEmbed videoid='86Buj92hER8' />
                    <h2>Como las MMA le salvaron la vida a Sean Strickland</h2>
                    <p>Luego de ser expulsado de la escuela por una frase racista que le dijo a un compañero, la madre de Sean notó los problemas que estaban pasando por la cabeza de su hijo, por lo que para evitar que esta actitud escalara y terminará metiéndose en problemas mayores, lo anotó en un gimnasio de MMA, con la idea de que pudiera canalizar toda esa ira contenida que tenía. </p>
                    <p>Al poco tiempo de comenzar a entrenar, sentía que el deporte le estaba ayudando a no odiar a nadie. Además, el gimnasio era un lugar donde gente de diferentes razas, de diferentes culturas, provenientes de todos lados lo ayudaban a ser mejor, por lo que este ambiente fue rompiendo sus prejuicios, eventualmente sacándolo de esa mentalidad supremacista. </p>
                    <p>Las Artes Marciales Mixtas le proporcionaron la estructura y disciplina que no tenía en casa y literalmente le salvaron la vida. Según dice el mismo Strickland desde que llegó a la UFC: <b>&quot;Si no fuera por las peleas, estaría muerto o en prisión ahora mismo&quot;</b>. </p>
                    <p>Por lo que la historia de Sean Strickland es un ejemplo extremo de lo que puede llegar a vivir un niño que crece sin cariño, en un entorno familiar tóxico, violento y abusivo. Pero también es un ejemplo positivo de lo que pueden llegar a hacer las artes marciales para las personas, ayudándolo a escapar del entorno tóxico en el que estaba, rompiendo con el ciclo de odio, racismo y autodestrucción por el que estaba atravesando nuestro protagonista. Es por esto que en lo personal tengo cierta preferencia por este peleador, y por lo que hay pocas peleas del campeonato que me hayan emocionado más que la que tuvo <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> con <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, donde el estadounidense se consagró campeón de peso medio de la UFC.</p>
                    <YouTubeEmbed videoid='ClkCv-N9Jr8' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}