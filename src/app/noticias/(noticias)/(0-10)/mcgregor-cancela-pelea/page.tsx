import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/peleadores__images/0-10/conor-mcgregor/mcgregor-card.jpg'

export default function McGregorCancelaPelea () {
    return(
        <main>
            <ArticleHero title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' subtitle='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' image={hero} date='2024-06-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Connor McGregor vs Chandler</h2>
                    <p>Hacía unas semanas se había anunciado el regreso del irlandés a la jaula de <Link href='/articulos/ufc'>UFC</Link>, donde debería enfrentar al peleador estadounidense <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, con quien protagonizó la última temporada del reality organizado por UFC <b>The Ultimate Figher</b>. Con esto, la alegría y la expectativas de los fans de la estrella de la compañía estaban por los cielos, pero en el último tiempo comenzaron a suceder cosas que dejan dudas respecto a lo que vaya a suceder con dicha pelea, desperando los rumores de una posible cancelación de la misma.</p>
                    <h2>McGregor cancela la rueda de prensa en Irlanda</h2>
                    <p>Lo primero que sucedió en este sentido, fue la cancelación de <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> de la rueda de prensa organizada en su país natal Irlanda, el 3 junio, cuando debería estar presente junto a Michael Chandler para promocionar la pelea y responder preguntas de los periodistas. La única información que hubo respecto a esta cancelación, es que fue el mismo Conor quien decidió cancelarla pocas horas antes de que se celebrara. Además del anuncio proveniente de la cuenta oficial de la UFC, Conor McGregor realizó un poste en X, donde expresó: &quot;En consulta con UFC, la conferencia de prensa de hoy fue cancelada debido a una serie de obstáculos fuera de nuestro control. Pido disculpas a mis fans irlandeses y a los fans de todo el mundo por las molestias y aprecio toda vuestra pasión y apoyo. No puedo esperar para ofrecer el mejor espectáculo de todos los tiempos en el octágono.&quot;</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">In consultation with the UFC, todays press conference was cancelled due to a series of obstacles outside of our control. I apologize to my Irish fans, and fans around the world, for the inconvenience and appreciate all your passion and support. I can’t wait to put on the greatest…</p>&mdash; Conor McGregor (@TheNotoriousMMA) <a href="https://twitter.com/TheNotoriousMMA/status/1797715477923348940?ref_src=twsrc%5Etfw">June 3, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>¿McGregor vs Chandler Cancelada?</h2>
                    <p>La cancelación sin un motivo específico de la rueda de prensa promocional, sumada a otras cosas que comenzaron a suceder alimentan los rumores de una posible cancelación de la pelea. Además de lo sucedido, ESPN dejó de vender los PPV para el evento de UFC 303; el canal de Youtube de UFC, puso en privado todos los vídeos con las peleas de McGregor que habían subido para promocionar el evento principal; Michael dejó de promocionar sus publicaciones en redes sociales con el #UFC303; y todavía, pese a que los rumores de que la pelea de McGregor se cancela no paran de crecer, al punto de que existen periodistas que ya se dedican a afirmar esto, ni Dana White, ni Michael Chandler, ni Conor McGregor han salido a desmentir estas informaciones.</p>
                    <p>De confirmarse que finalmente &quot;The Notorius&quot; no podría pelear el próximo 29 de junio, sería una aunténtica tragedia, puesto que las entradas para el estadio donde se va a organizar ya están vendidas, la compra de PPV estaba habilitada hace bastante tiempo, y el resto de la cartelera no cuenta con nombres tan mediáticos como el de Conor como para justificar la cantidad de entradas y de PPV que la UFC pensaba vender.</p>
                    <h2>McGregor Sparring</h2>
                    <p>Sin embargo, el día de hoy Conor ha sorprendido a más de uno subiendo un total de 10 videos a su cuenta de Instagram haciendo sparring, como queriendo apagar los rumores con esto. Lo cierto es que no sabemos de cuándo son estos vídeos, dado que son un total de 10 grabados en diferentes locaciones y en diferentes momentos, pero se entiendo que Conor quiere dar a entender que son recientes, por lo que pese a que en sí no sabemos que va a suceder con la pelea programada para el 29 de junio, esta publicación de Conor realizada en su cuenta de Instagram, dan motivos para ilusionarse con que el combate se terminará dando.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/j6MNPXgJaMY?si=OE7bPvLdCYZLRHAV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}