import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc325.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!',
    description: "UFC 325 en Australia donde Alexander Volkanovski defenderá su título de UFC ante Diego Lopes en una pelea espectacular. Además de tener los combate de Benoit Saint Denis VS Dan Hooker en la estelar, y la pelea de Rafael Fiziev vs Mauricio Ruffy.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc325.3722daed.webp&w=828&q=65',
        title: 'UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!',
        description: "UFC 325 en Australia donde Alexander Volkanovski defenderá su título de UFC ante Diego Lopes en una pelea espectacular. Además de tener los combate de Benoit Saint Denis VS Dan Hooker en la estelar, y la pelea de Rafael Fiziev vs Mauricio Ruffy.",
        url: 'https://fullmma.org/eventos/ufc325'
    }
}

export default function UFC325 () {
    return(
        <main>
            <ArticleHero title="UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!" subtitle='¡Rafael Fiziev vs Mauricio Ruffy! ¡Quillan Salkilld Somete a Jamie Mullarkey en el Primer Asalto!' image={hero} date='2026-01-31' author={null} updatedDate='2026-02-01' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento tenemos esta noche en el UFC 325 en Sidney, Australia, con el campeón local de peso pluma <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> defendiendo su cinturón en una revancha ante el mexicano-brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, que viene de una gran victoria por nocaut ante su compatriota de Brasil <Link href='/peleadores/jean-silva'>Jean Silva</Link>. </p>
                    <p>Por si este evento estelar fuera poco, además hay 2 peleas a las que hay que prestar mucha atención, porque además de la estelar, son las candidatas a Pelea de la Noche. La primera es el evento coestelar de la noche que tendrá al #6 de Peso Ligero, el neozelandés <b>Dan Hooker</b> enfrentará al exmilitar francés y #8 de la división <b>Benoit Saint Denis</b>, en un combate que puede definir el futuro de la división y que sin dará que hablar. La segundo pelea es la que tendrá el luchador de Azerbayán ubicado #9 en la división de Peso Ligero <b>Rafael Fiziev</b>, quien se enfrentará al brasileño integrante de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <b>Mauricio Ruffy</b>, que actualmente está #14 en la división, en lo que sin duda será uno de los mejores combates de la noche. Además de un montón de peleas que estarán protagonizadas por luchadores australianos como es esperable en una cartelera como esta. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Lawrence Lui Derrota a Sulangragbo Por Decisión Dividida en la Final del Road To UFC</h2>
                    <p>En este primer combate de la noche, que era la final de peso gallo del Road To UFC, quien terminaría por ganar esta primer pelea sería el neozelandés <b>Lawrence Lui</b>, cuya mejor arma era la lucha, mediante la cual consiguió derribar en varias ocasiones a su rival chino, controlándolo y manteniendo a ras de lona y contra la reja durante gran parte del combate, lo que le sirvió para sumar puntos y eventualmente ganar la pelea. Por su parte el chino <b>Sulangragbo</b> se mostró muy fuerte en el striking, donde podía hacerle más daño a su rival del que recibía, pero flaqueó en la lucha, llegando muy cansado al tercer asalto debido a la cantidad de derribos que tuvo que defender. Por lo que pese a que hubo un primer asalto bastante cerrado, finalmente a ojos de 2 de los 3 jueces quien se terminó llevando el combate fue el luchador de Nueva Zelanda <b>Lawrence Lui</b>. </p>
                    <h2>Keichiro Nakamura Noquea a Sebastian Szalay en el Tercer Asalto</h2>
                    <p>Tremendo el combate que acabamos de presenciar, con el australiano <b>Sebastián Szalay</b> haciendo un combate espectacular, en el que dominó a su rival y se mantuvo en el centro del octágono manejando la distancia de manera sobresaliente, necesitando sólo de aguantar el tercer asalto para llevarse la victoria y ganarse un contrato con la UFC. Sin embargo, en el tercer asalto, donde el japonés <b>Keichiro Nakamura</b> ya no tenía nada que perder, puso el pie en el acelerador y fue bastante más al frente, buscando el intercambio de golpes para finalizar a su oponente, logrando finalmente conectar un rodillazo que tumbaría a su rival, cambiando el guión del combate y el resultado, para terminar venciendo por KO en el último asalto, y ganando el contrato con la UFC en lo que fue una locura de pelea. </p>
                    <h2>Dom Mar Fan Derrota a Sangwook Kim Por Decisión Unánime</h2>
                    <p>En la que hasta ahora es la mejor pelea de la noche, el luchador local <b>Dom Mar Fan</b> se hace con la victoria luego de dominar completamente al luchador de Corea del Sur <b>Sangwook Kim</b>, mostrándose superior en cada faceta del deporte durante el primer asalto, y dominando mediante el striking durante los últimos 2 asaltos. Con lo mejor del combate llegando al final, cuando el coreano necesitaba finalizar para llevarse la victoria, por lo que buscó conectar más golpes y ahí fue donde vimos los mejores intercambios, aún así no fue capaz de conectar el golpe letal que le dé la victoria, por lo que el ganador por decisión unánime fue el australiano <b>Dom Mar Fan</b>. </p>
                    <h2>Kaan Ofli Derrota a Yuzha por Decisión Mayoritaria</h2>
                    <p>Gran pelea la que que nos regalaron estos 2 peleadores, quienes dieron todo en el octágono, estando cerca de finalizar cada uno en varios momentos de la pelea. Comenzando el autraliano <b>Kaa Ofli</b> de mejor manera en el primer asalto, conectando muy buenos golpes, estando cerca de finalizar a su rival que resistió y se recompuso del daño recibido durante el primer asalto. A partir del segundo asalto lo visto todo lo contrario, con el chino <b>Yizha</b> siendo el que dominaría de manera absoluta a su rival, de manera más clara incluso que en el primer asalto, estando cerca de noquear en más de un momento, y tirando al suelo a golpes a su rival en varias ocasiones. El tercer asalto sería más igualado pero de igual manera los jueces verían como ganador de este encuentro al local <b>Kaan Ofli</b> por decisión mayoritaria, debido a que uno de los jueces dió un empate. De manera polémica en mi opinión, dado que creo que aún estando igualado, el último asalto era favorable al asiático, pero la localía de Ofli se impuso en esta ocasión. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Jonathan Micallef Somete a Oban Elliot en el Segundo Asalto</h2>
                    <p>Sorprendente finalización la de hoy, con un <b>Jonathan Micallef</b> que había comenzado sufriendo en el primer asalto ante un rival que comenzó mejor que él, y que lo castigó mucho incluso en el segundo asalto, pero fue capaz de reponerse rápidamente, derribando a su rival, ganándole la espalda, y conectando un mataleón que dejaría viendo las estrellas a su rival que en ningún momento tapeo, cayendo inconsciente por la sumisión. De esta forma, el autraliano Jonathan Micallef consigue la primer sumisión de la noche en el segundo asalto. </p>
                    <h2>Jacob Malkoun Derrota a Torrez Finney Por Decisión Unánime</h2>
                    <p>Gran victoria del local <b>Jacob Malkoun</b>, quien enfrentando a un rival que era bastante más grande que él, supo hacer uso de sus ventajas y no sufrir de las desventajas físicas que este combate presentaba, conectando jabs y rectos muy rápidos que poco a poco fueron diesmando a su rival, haciendo esto de manera sobresaliente, tan dominante fue su desempeño, que incluso el segundo asalto lo terminó ganando por 10-8, estando cerca de finalizar y sin recibir golpes practicamente. De esta forma, el australiano se lleva la victoria por decisión unánime, y le quita el invicto a <b>Torrez Finney</b>. </p>
                    <h2>Cam Rowston Noquea a Cody Brundage en el Segundo Asalto</h2>
                    <p>Buena victoria para el local <b>Cam Rowston</b>, que en su segunda pelea en la UFC consigue una nueva victoria ante el estadounidense <b>Cody Brundage</b>, esta vez por TKO en el segundo asalto, luego de tenerlo en el piso y golpearlo repetidamente hasta que su rival dejó de defenderse, obligando al árbitro a parar el combate y declararlo ganador. </p>
                    <h2>Billy Elekana Somete a Junior Tafa en el Segundo Asalto</h2>
                    <p>El estadounidense <b>Billy Elekana</b> consigue una importante victoria por la vía de la sumisión en el segundo asalto ante el luchador australiano <b>Junior Tafa</b>, luego de conectar un mataleón muy bien colocado que obligaría a su rival a tapear, logrando de esta manera llevarse la victoria por sumisión en el segundo asalto del combate. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Quillan Salkilld Somete a Jamie Mullarkey en el Primer Asalto</h2>
                    <p>Tremenda manera de comenzar esta cartelera estelar, cuando el australiano <b>Quillan Salkilld</b> logró completar un derribo perfectamente ejecutado, que terminaría en un <b>Neck Crank</b> que obligaría a tapear a su rival y compatriota <b>Jamie Mullarkey</b>, para terminar ganando el combate por sumisión en el primer asalto, y alcanzar su cuarta victoria consecutiva en la UFC, a un peleador al que ya va siendo hora de poner a pelear contra un luchador ranqueado. </p>
                    <h2>Tallison Teixeire Derrota a Tai Tuivasa por Decisión Unánime</h2>
                    <p>El brasileño <b>Tallison Teixeira</b> se hace con una importante victoria para seguir escalando en los rankings y para condenar a su rival australiano <b>Tai Tuivasa</b>, que pese a estar de local y tener todo el público de su lado, hoy no fue capaz de conseguir la victoria, cayendo derrotado y alcanzando su sexta derrota al hilo, pese a que de sus últimas 6 peleas, la mitad fueron en su país natal, Australia, lo que complica su situación contractual en la UFC. De esta manera, el brasileño se termina llevando la victoria por decisión unánime, extendiendo su récord a 9-1. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}