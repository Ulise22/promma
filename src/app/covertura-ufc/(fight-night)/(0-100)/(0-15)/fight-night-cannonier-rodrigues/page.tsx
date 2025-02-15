import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/cannonier_rodrigues.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC Vegas 102: ¡Cannonier vs Rodrigues!',
    description: 'Noche de UFC en Las Vegas con la pelea de Gregory Rodrigues y Jared Cannonier como evento estelar. ',
    openGraph: {
        title: 'UFC Vegas 102: ¡Cannonier vs Rodrigues!',
        description: 'Noche de UFC en Las Vegas con la pelea de Gregory Rodrigues y Jared Cannonier como evento estelar. ',
        url: 'https://fullmma.org/covertura-ufc/fight-night-cannonier-rodrigues'
    }
}

export default function CannonierRodrigues () {
    return(
        <main>
            <ArticleHero title='UFC VEGAS 102: ¡Jared Cannonier vs Gregory Rodrigues!' subtitle='Noche de UFC en Las Vegas que además nos trae el enfrentamiento entre Calvin Kattar y el marroquí Youssef Zalal' image={hero} date='2025-02-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de MMA en el UFC APEX, donde habrá un total de 13 combates, entre los que destaca especialmente el evento estelar entre el veterano <b>Jared Cannonier</b> y el brasileño <b>Gregory Rodrigues</b>. Ambos vienen de rachas muy distintas, con Cannonier viniendo de 2 derrotas consecutivas, ante <b>Imavov</b> y la última ante el brasileño <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, por lo que buscará revertir la imagen dada hasta el momento ante un complicadísimo rival que viene de una racha bastante distinta, como lo es Gregory Rodrigues que viene de ganar sus últimos 3 enfrentamientos, con 2 de estas victorias siendo por la vía del nocaut. El brasileño no está ranqueado en la división de peso medio, por lo que tendrá su oportunidad de entrar a los rankings, y al top 10 de la división esta noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>¡Jacqueline Cavalcanti Derrota a Julia Avila Por Decisión Unánime!</h2>
                    <p>Cómoda victoria para la nacida en Brasil <b>Jacqueline Cavalcanti</b>, que partía como favorita por mucho en este combate y demostró el porqué, con un claro dominio durante los 3 asaltos, haciendo buen uso de su ventaja en la altura y el alcance, controlando el centro del octágono para conectar muchos más golpes que su rival durante el combate. De esta manera alcanza su cuarta victoria consecutiva en la división de peso gallo femenino, y sube puestos en los rankings. </p>
                    <p>Por su parte su rival, <b>Julia Avila</b>, sólo pudo limitarse a conectar patadas a la pierna de su rival y a concretar un sólo derribo que no pudo capitalizar. Para colmo, al final del segundo asalto recibió un corte en la ceja y en la nariz que la hicieron sangrar. Esto no fue un problema para que la estadounidense siguiera peleando, dado que pudo terminar el combate, pero de igual forma acabaría por perder por decisión unánime y anunciaría su retiro al finalizar el combate, dejando detrás un récord de profesional de 9-4 con sus 34 años. </p>
                    <h2>Valter Walker Somete a Don&apos;tale Mayes En El Primer Asalto</h2>
                    <p>El brasileño Valter Walker, quien contaba con su hermano <b>Johny Walker</b> en su esquina, consigue una espectacular victoria en el primer asalto de la pelea, de manera rápida, luego de conectar un derribo en el primer minuto de combate, para posteriormente buscar la pierna de su rival y conseguir la sumisión que lo pondrá en el ranking de los pesos pesados. </p>
                    <h2>Elijah Smith Derrota a Vince Morales por Decisión Unánime</h2>
                    <p>Tremenda pelea la que le dieron estos 2 luchadores, que terminó con la victoria para el joven debutante de 22 años <b>Elijah Smith</b>, donde se mostró muy dominante especialmente durante el primer y tercer asalto, en los que demostró tener talento en el strking, conectando muy buenos golpes, incluso haciendo daño en la nariz de su rival que estuvo sangrando al final de la pelea. </p>
                    <p>Además demostró tener buena lucha, consiguiendo todos los derribos que intentó, y siendo capaz de defender los intentos de sumisión de su rival, quien es un peleador bastante más experimentado. De esta forma, con las tarjetas dando 29-28, Elijah Smith se queda con la victoria por decisión unánime. </p>
                    <h2>Gabriel Bonfim Somete a Khaos Williams en el Segundo Asalto</h2>
                    <p>Brutal sumisión del brasileño Gabriel Bonfim al estadounidense Khaos Williams. En una pelea que el brasileño dominó completamente el combate de pie y en el suelo, moviéndose constantemente alrededor del octágono para evitar ser conectado por su rival, siendo capaz de acertar varios golpes en la cabeza y patadas en la pierna. Finalmente, el destino de la pelea se decidiría en el segundo asalto, cuando Bonfim derribaría a Williams, y conseguiría la finalización por la vía de la sumisión al conectar un D&apos;arce Choke hermoso que mandaría a dormir al luchador americano. </p>
                    <h2>Rafael Estevam Derrota a Jesus Aguilar por Decisión Unánime</h2>
                    <p>Tremendo el combate el que nos dieron los peleadores sudamericanos, que terminó con la victoria a favor del brasileño <b>Rafael Estevam</b>, quien fue capaz de dominar la mayor parte del combate gracias a su lucha, concretando los derribos que intentó y buscando todo el tiempo la forma de someter a su rival en los primeros 2 asaltos. </p>
                    <p>Lo mejor del mexicano Jesus Aguilar lo vimos en el tercer asalto, cuando todo el esfuerzo realizado empezó a penalizar a Estevam, quien llegó cansado al último asalto y recibió el castigo de los golpes de Aguilar. Sin embargo, pese a que el mexicano lo intentó, no fue capaz de noquear y terminó perdiendo la pelea por decisión unánime. </p>
                    <h2>Angela Hill Derrota a Ketlan Souza Por Decisión Dividida</h2>
                    <p>Espectacular pelea la que nos dieron estas 2 guerreras, que terminó decantándose a favor de la veterana de 40 años Angela Hill, quien había arrancado muy bien el combate, conectando los mejores golpes y estando muy activa durante el primer asalto. </p>
                    <p>Sin embargo a medida que transcurría el combate comenzó a emparejarse y la imagen que dió la brasileña mejoró bastante respecto al primer asalto. De igual manera esto no le alcanzó a la sudamericana, dado que cuando la pelea llegó a las tarjetas, los jueces terminaron dando como ganador a la estadounidense <b>Angela Hill</b>. </p>
                    <h2>Jose Miguel Delgado vs Connor Matthews</h2>
                    <p>Debut con victoria por nocaut en el primer asalto para Jose Migue Delgado en la UFC, que luego de conectar una mano derecho que derribaría al suelo a su rival, sería capaz de finalizar a su rival castigándolo con golpes en el suelo. </p>
                    <p>De esta manera el estadounidense extiende su récord a 9-1, con la particularidad de que todas sus victorias serían por finalización, con 5 siendo por nocaut y 4 por sumisisón. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}