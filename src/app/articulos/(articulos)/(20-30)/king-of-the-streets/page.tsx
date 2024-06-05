import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/20-30/kots-hero.jpg'

export default function KingOfTheStreets () {
    return(
        <main>
            <ArticleHero title='King Of The Streets' subtitle='La organización de peleas clandestinas más grande del mundo y popular en Youtube' image={hero} date='04/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>KOTS MMA</h2>
                    <p>King Of The Streets es una organización clandestina que prepara peleas callejeras sin reglas donde vale todo, apenas un vendaje cubre las manos de los peleadores, y ambos se golpean sin parar hasta que uno se rinde. Según el mismo organizador, de estas peleas sólo el ganador se lleva recompensa económica.</p>
                    <p>Es una organización europea y se la conoce como &quot;El club de la lucha&quot;, y suele enfrentar a ultras de todo el continente en zonas abandonadas, casi siempre en suelo de pavimento. Quienes participan de estas peleas pueden ser neonazis, antifascistas, anarquistas, apolíticos, y según había comentado quien también participo de una pelea de estas, <Link href='/peleadores/franco-tenaglia'>Franco Tenaglia</Link>, los que organizan estos combates suelen tener un morbo con enfrentar a, por ejemplo, alguien de extrema derecha contra alguien de extrema izquierda.</p>
                    <h2>Kotsfights</h2>
                    <p>La mención de Franco Tenaglia no fue en vano, puesto que hay ocasiones en las que de estos eventos también participan peleadores de boxeo o MMA profesionales.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/vRIiHYKgZQY?si=m1OaAuwq-nxnaxGx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Como se mencionó anteriormente, practicamente no hay reglas en los combates, por lo que más alla de los puñetazos, patadas, rodillazos y codazos que estamos acostumbrados a ver en peleas más &quot;mainstream&quot; de MMA, también se permiten todo tipo de artimañas, como los cabezazos, los piquetes de ojo, los mordiscos, los rodillazos a la cara...</p>
                    <p>A pesar de que como se dijo, los combates se organizan alrededor de Europa, practicamente nadie sabe la ubicación exacta en la que se pactan estas peleas. Sólo a los que pagan por ver de estos eventos en vivo se le s informa del día, hora y ubicación del lugar con unas pocas horas de antelación. Como puede verse en los videos que suben a internet, el público que asiste varía de evento a evento, y puede ir desde los cientos, hasta una poca docena de personas presenciando del espectáculo. Sin embargo, la mayor parte de las ganancias que sacan los organizadores de estos eventos está en la posterior difusión en internet, más que por las entradas que puedan vender el día del evento.</p>
                    <p>Según cuentan peleadores que participaron de algún evento organizado por ellos, cualquiera puede pedir la inscripción para pelear, aunque no a todos se la aceptan. Una vez pedida esta inscripción, quienes organizan se contactan por telegram preguntando un montón de preguntas, desde la edad, peso, altura, experiencia en peleas, e incluso llegan a preguntar si quien pide la inscripción tiene alguna vinculación con un grupo de ultras. En el caso de ser aceptado, te suelen dar una ubicación para concretar, te ponen una venda en los ojos y te llevan hasta el lugar del combate, hasta que no llegas no te sacan la venda. Aunque intentan hacer los combates parejos en cuanto altura, peso, y experiencia en combate, si llega el caso en que la pelea se organiza entre 2 ultras que quieran saldar cuentas pendientes mediante una pelea, ninguno de estos factores se tienen en cuenta y simplemente se procede a pactar la pelea.</p>
                    <p>Los combates suelen estar poblados de gente con la cabeza tapada, de forma que no se pueda ver el rostro de los organizadores. El ambiente que se vive es tan tenso, al estar compuesto, tanto los peleadores, como los espectadores, de ultras y mafias europeas, que el arbitro y los organizadores suelen portar armas de fuego por si las cosas se salen de control.</p>
                    <p>En sintesis, no por nada se ganaron el apodo del &quot;El club de la lucha&quot;, combates violentos, donde abunda la sangre, sin reglas, sin protección alguna para los peleadores, y todo hecho de manera clandestina rememoran a aquella película de David Fincher. Sus combates pueden encontrarse en <a href='https://www.youtube.com/@KINGOFTHESTREETS' target='_Blank'>su canal de Youtube</a>, que actualmente cuenta con más de 1 millón de subscriptores.

</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}