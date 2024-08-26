import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-15/fightnight-cannonier-imanov-hero.png'

export default function FightNightLewisNascimento () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' subtitle='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.' image={hero} date='2024-06-09' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En un Fight Night bastante entretenido, que nos dejó con 5 victorias por nocaut en toda la cartelera, y una por sumisión que logró el mexicano <b>Raul Rosas Jr</b>. La noche llegó a su culmen en la pelea estelar, que nos dejó con un Imanov ganando por nocaut, escalando en los rankings de la <Link href='/articulos/ufc'>UFC</Link>, en la división de peso mediano que tiene a un <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> como campeón indiscutido.</p>
                    <h2>¡Zachary Reese noquea a Julian Marquez a los 20 segundos del primer asalto!</h2>
                    <p>En lo que fue la segunda pelea de la cartelera estelar, el estadounidense Reese fue capaz de noquear a su rival rapidísimo, necesitando de sólo 3 golpes para noquear a su rival, conectando una patada en el estomago, y 2 golpes con los puños que conectaron a la cabeza para tirar a su rival al suelo, luego de esto fue al ground-and-pound para finalizar la pelea y terminar llevándose la victoria. Zachary Reese con esta victoria ya suma un récord de 7-1. Además, el ganador de esta pelea se ganó el bono a la actuación de la noche.</p>
                    <h2>¡Brunno Ferreira gana por nocaut en el primer asalto contra Dustin Stoltzfus!</h2>
                    <p>En una pelea espectacular, en lo que debe ser uno de los mejores asaltos de la noche, cerca de terminar el primer de estos, Brunno Ferreira conecta un codazo giratorio que marea a su rival, luego de estos busca seguir conectando golpes hasta que lanza otro codazo giratorio, que termina por noquear a su rival, llevando al árbitro a parar la pelea para dejar como vencedor al Hulk brasileño, quien además se ganó un muy merecido bono a la actuación de la noche.</p>
                    <h2>¡Raul Rosas Jr somote a Ricky Turcios en el segundo asalto!</h2>
                    <p>En una emocionante pelea, el peleador más joven de la división y probablemente de la compañía, <Link href='/peleadores/raul-rosas-jr'>Raul Rosas Jr</Link>, se lleva el combate por finalización, gracias a un mataleón que pudo conectar en el segundo asalto de su pelea contra el salvadoreño. Pese a que en el primer asalto, Ricky Turcios estuvo cerca de finalizar al maxicano, habiéndose puesto en una posición muy favorable para conectar un mateleón, el luchador de 19 años fue capaz de sobrevivir y tomar su venganza en el segundo asalto. El mexicano ganó el bono a la actuación de la noche, siendo este el tercero que gana en la compañía, además de acumular con esta victoria un récord de 9-1.</p>
                    <h2>¡Dominick Reyes noquea a Dustin Jacoby en el primer asalto!</h2>
                    <p>Dominick vuelve a la victoria para romper la racha de 4 derrotas consecutivas que había acumulado en su carrera, siendo 3 de estas por nocaut. El estadounidense se había tomado su tiempo para volver, y lo hizo esta noche de la mejor manera logrando vencer por TKO luego de conectar una muy buena mano izquierda, que vino acompañada de otros golpes más, siendo un rodillazo en la cabeza lo que ya dejaría cerca del KO a su rival. El árbitro los separó, y de esta forma Dominick Reyes consigue la victoria a los 2 minutos del primer asalto, mantiendo su puesto en el ranking de UFC. </p>
                    <h2>¡Jared Cannonier cae por nocaut contra Nassourdine Imanov!</h2>
                    <p>Finalmente la pelea estelar terminó con un Imanov logrando la victoria por nocaut en el cuarto asalto, luego de que en una combinación de golpes el árbitro interpretara que la pelea ya estaba definida, y que no era necesario para Cannonier seguir recibiendo tanto castigo. Por ser la pelea en territorio americano, el francés sintió lo poco amistoso del público, que no estuvo contento con la decisión del árbitro, pero que sin embargo es más que entendible. Durante los 4 asaltos se vió un combate parejo, donde ambos peleadores intercambiaron varios golpes, pero donde parecía que el estadounidense estaba buscando neutralizar al francés, llevándolo contra la reja de pie para evitar recibir tanto daño.</p>
                    <p>Luego de la pelea, que sin dudas mete a Imanov en el TOP5 de la división, el francés no dudo en retar al excampeón de la división y actual contendiente #1, <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> a enfrentarse en Paris.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}