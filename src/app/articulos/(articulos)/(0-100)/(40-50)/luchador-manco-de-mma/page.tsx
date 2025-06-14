import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/nick_newell.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'El manco de las MMA',
    description: 'Una de las mejores historias en el mundo de las MMA, es sin dudas la del luchador estadounidense Nick Newell, quien pese a con una amputación genética que lo dejó sin su mano izquierda, pudo competir en las MMA como cualquier otro peleador, llegando a ser campeón en una ocasión, y llegando a competir en promotars de renombre como Bellator.',
    openGraph: {
        title: 'El manco de las MMA',
        description: 'Una de las mejores historias en el mundo de las MMA, es sin dudas la del luchador estadounidense Nick Newell, quien pese a con una amputación genética que lo dejó sin su mano izquierda, pudo competir en las MMA como cualquier otro peleador, llegando a ser campeón en una ocasión, y llegando a competir en promotars de renombre como Bellator.',
        url: 'https://fullmma.org/articulos/luchador-manco-de-mma'
    }
}

export default function MancoMMA () {
    return(
        <main>
            <ArticleHero title='Nick Newell: El Luchador con una Mano en MMA' subtitle='La historia de Nick Newell, el manco de las MMA que competía a nivel profesional y que llegó a ser campeón.' image={hero} date='2024-08-29' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Una de las mejores historias en el mundo de las MMA, es sin dudas la del luchador estadounidense <b>Nick Newell</b>, quien pese a con una amputación genética que lo dejó sin su mano izquierda, pudo competir en las MMA como cualquier otro peleador, llegando a ser campeón en una ocasión, y llegando a competir en promotars de renombre como <b>Bellator</b>.</p>
                    <p><b>Nicholas George Newell</b> nació el 17 de marzo de 1986 en Estadous Unidos. Nació con una amputación congénita en su brazo izquierdo que termina justo debajo de su codo. Pese a esto, tuvo un pequeño muñón que aprendió a usar como una mano desde su nacimiento.</p>
                    <p>Nick siempre admiró a <b>Jim Abbott</b>, quien era un jugador de baseball sin mano derecha, siendo este deportista la inspiración de Newell para superarse a sí mismo. </p>
                    <YouTubeEmbed videoid='Em-kCLOO2HA' />
                    <p>Desde pequeño comenzó a jugar fútbol, luego paso a jugar baseball, y finalmente cuando entró a la secundaria, al igual que muchos de los hoy peleadores profesionales de MMA, entró al equipo de Wrestling. Al poco tiempo quiso renunciar, dado que este deporte era lo más difícil que había hecho en su vida, pero fue su madre quien le impidió renunciar, instándolo a trabajar duro y esfrozarse de ahí en adelante, logrando entre sus años en la secundaria y en la universidad, más de 300 victorias.</p>
                    <p>En la universidad fue compañero de quien en el futuro se convertiría en luchador de WWE, <b>Curt Hawkins</b>, con quien miraba el reality de <Link href='/articulos/ufc'>UFC</Link>, <b>The Ultimate Fighter</b>. Fue este programa quien lo inspiró a luchar en MMA.</p>
                    <p>Nick cuenta que el inicio de su carrera en las MMA fue bastante complicado, no tanto porque se le dificultara pelear, sino porque era difícil encontrar rivales, dado que muy pocos querían pelear con él, ya que veían la pelea como un perder o perder, porque en caso de ganar, sería una victoria ante un hombre de un sólo brazo, que le restaría mérito, y en caso de perder, estarían perdiendo ante un luchador de un sólo brazo, que no es complicado de entender porqué se vería como algo humillante. Por esto es que fue complicado encontrar oponente de cálidad para Newell. Aún así, logró cosechar un récord amateur de 5-1 antes de comenzar a pelear profesionalmente.</p>
                    <p>Su primer pelea como pro sería el 20 de junio de 2009 ante un luchador llamado <b>Daniel Ford</b>, a quien lograría vencer por TKO en el primer asalto. Newell conseguiría un récord de 5-0 hasta arribar a la promotora <b>XFC</b>, donde sólo le bastarían 3 victorias para conseguir una pelea por el título de la promotora. Finalmente el día 7 de diciembre de 2012 se enfrentaría al estadounidense <b>Eric Reynolds</b> por el cinturón de peso ligero de la compañía, consiguiendo someter a su rival en menos de un minuto y medio, logrando el campeonato de dicha empresa.</p>
                    <YouTubeEmbed videoid='CATa8XVOZXI' />
                    <p>Luego de la obtención del título, Nick optaría por moverse de compañía, firmando un contrato con <b>WSOF</b>, donde debutaría con una victoria por sumisión en el primer asalto ante <b>Keon Caldwell</b>, el día 10 de agosto de 2013.</p>
                    <p>Luego de obtener otra victoria por sumisión en el primer asalto ante <b>Sabah Fadai</b> y ya con un récord profesional perfecto de 11-0, se ganaría el derecho a disputarle el título a quien hoy en día es leyenda de peso ligero en la UFC, y que en aquel momento era campeón en la compañía, <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>.</p>
                    <p>Se enfrentaría a la ahora estrella de la UFC el 5 de julio de 2014, y sería contra este rival que sufriría su primer derrota como profesional, cayendo por TKO en el segundo asalto.</p>
                    <YouTubeEmbed videoid='HzKXjeck5w4' />
                    <p>Luego de aquella derrota, tendría 2 combates más en la compañía, ganando ambos por decisión unánime, y siendo el último ante un peleador llamado <b>Tom Marcellino</b>, contra quien pelearía el 17 de octubre de 2015. Newell anunciaría luego de la pelea que se retiraba de las MMA, dejando atrás un récord de 14-1, y la pregunta de hasta donde hubiera podido llegar de seguir peleando, dado que su única derrota era ante un peleador que ahora que está en la UFC sabemos que es una bestia.</p>
                    <p>Pese a lo anunciado después de la pelea, volvería del retiro 3 años después para enfrentarse a <b>Sonny Luque</b> en una promotora llamada <b>Legacy Fighting Alliance</b>, donde lograría una victoria por sumisión en el primer asalto. Luego de esta pelea, tendría la oportunidad de participar en el <b>Dana White&apos;s Contender Series</b>, en el que se jugaría la oportunidad de firmar un contrato con la UFC. Sin embargo, lamentablemente para nuestro protagonista, luego de 3 asaltos la pelea se decantaría por su rival por decisión. </p>
                    <YouTubeEmbed videoid='FfBdoSotlII' />
                    <p>Sin embargo, luego de una victoria más por sumisión ante un luchador llamado <b>Antonio Castillo Jr.</b> en 2019, se ganaría un contrato con la competencia de la UFC, <b>Bellator</b>, en donde debutaría el día 24 de agosto de 2019 ante <b>Corey Browning</b>, contra quien lograría una victoria por sumisión en el primer asalto.</p>
                    <p>Lamentablemente sus últimas 2 peleas en Bellator terminarían en derrotas por decisión dividida, siendo la última en junio de 2021 ante <b>Bobby King</b>, retirándose del octágono luego del combate. La historia de Nick Newell es un ejemplo inspirador de cómo la determinación y el coraje pueden superar cualquier obstáculo. Su carrera es una prueba viviente de que las limitaciones físicas no son barreras insuperables, sino desafíos que pueden ser vencidos con perseverancia y pasión. Nick Newell ha demostrado que los verdaderos campeones no se miden solo por sus victorias en la jaula, sino por su capacidad de inspirar a otros a nunca rendirse, independientemente de las circunstancias. Su legado en las MMA es, sin duda, una lección de vida y una fuente de inspiración para todos.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}