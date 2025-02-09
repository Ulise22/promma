import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc312.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC 312',
    description: "UFC 312 en Australia con la pelea entre Dricus Du Plessis y Sean Strickland como evento estelar. Además del evento coestelar protagonizado por la campeona de peso paja femenino Zhang Weili y su retadora Tatiana Suarez.",
    openGraph: {
        title: 'UFC 312',
        description: "UFC 312 en Australia con la pelea entre Dricus Du Plessis y Sean Strickland como evento estelar. Además del evento coestelar protagonizado por la campeona de peso paja femenino Zhang Weili y su retadora Tatiana Suarez.",
        url: 'https://fullmma.org/covertura-ufc/ufc312'
    }
}

export default function UFC312 () {
    return(
        <main>
            <ArticleHero title="UFC 312: ¡Dricus Du Plessis vs Sean Strickland!" subtitle='UFC 312 en Australia que además nos trae el ¡Zhang Weili vs Tatiana Suarez por el Título de Peso Paja de la UFC!' image={hero} date='2025-02-08' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos evento de UFC en Australia, con el UFC 312 encabezado por la pelea titular de peso medio entre el actual campeón sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> y el retador, excampeón de la división <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, en lo que será una revancha, luego de lo que fue su primer combate titular en el <Link href='/covertura-ufc/ufc297'>UFC 297</Link> en enero de 2024. </p>
                    <p>También tendremos un tremendo combate en la pelea coestelar, con la actual campeona de peso paja <Link href='/mujeres/zhang-weili'>Zhang Weili</Link> defendiendo su cinturón por cuarta vez consecutiva ante la peleadora estadounidense <b>Tatiana Suarez</b>, quien llega a este combate invicta con un récord de 11-0. </p>
                    <p>Además el público hispano tendremos 2 tremendas peleas a las que prestar atención, con <b>Aleksandre Topuria</b>, el peleador español hermano del campeón <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, haciendo su debut en la UFC ante el australiano Colby Thicknesse. La otra pelea a la que prestar atención será la que tengan el peleador argentino <b>Francisco Prado</b>, que acaba de subir a peso wélter, contra el australiano Jake Matthews, siendo esta la pelea que abrirá la cartelera estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>¡Quillan Salkilld Noquea a Anshul Jubli en Menos de 20 Segundos!</h2>
                    <p>En un combate que no dió tiempo a nada, en menos de 20 segundos del combate, el local australiano <b>Quillan Salkilld</b> noquea al peleador indio <b>Anshul Jubli</b>, con una tremenda mano derecha que conecta en la oreja que tumbó inmediatamente a su rival. </p>
                    <h2>¡Jonathan Micallef Derrota a Kevin Jousset Por Decisión!</h2>
                    <p>En una pelea que nos traía el debut de Micallef en la UFC ante el francés Jousset, tuvimos un primer asalto en el que el australiano fue capaz de dominar completamente, conectando con su pierna izquierda una gran cantidad de patadas al higado de su rival, que fueron preparando el terreno para que su rival baje la guardia un poco y entonces pudiera conectar patadas a la cabeza que por poco noquean a su oponente. </p>
                    <p>Con un segundo asalto que tuvo algo más de lo mismo, con el australiano y sus excelentes patadas siendo las protagonistas,m el desenlace del combate lo veríamos luego de finalizado el último asalto, en donde el francés mejoró bastante su desempeño y la imagen dada, en parte por mérito propio, y en parte porque de tanto dar patadas, Micallef terminó por cansarse debido al alto esfuerzo que esta estrategia requirió. </p>
                    <p>De esta manera, el australiano Micallef consigue un debut excelente al obtener la victoria ante un complicado rival como lo era Jousset. Además, logró extender su récord profesional a 8-1. </p>
                    <h2>Rongzhu Derrota a Kody Steele Por Decisión Unánime</h2>
                    <p>Tremenda pelea la que nos regalaron estos 2 peleadores, con un primer asalto en el que se dieron de lo lindo entre los 2, con golpes viniendo de ambos lados pero con una ligera superioridad por parte del chino, quien fue capaz de conectar las mejores convinaciones y los golpes más peligrosos. </p>
                    <p>Finalmente en el segundo y tercer asalto el peleador chino Rongzhu sería capaz de mostrar su dominio de manera más clara, logrando evitar la mayoría de los golpes de su rival, conectando mucho más y mejor, llevándose la victoria en esta pelea por decisión unánime con los jueces puntuando esta pelea 30-27, dándolo ganador de todos los asaltos y quitándole el invicto al debutante Kody Steele. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Aleksandre Topuria Gana a Colby Thicknesse en su Debut en la UFC</h2>
                    <p>El hispanogeorgiano Aleksandre Topuria obtiene una gran victoria ante el australiano Colby Thicknesse por decisión unánime, luego de dominar completamente la totalidad del combate. Mostrándose superior en todas las facetas del juego, tanto de pie donde mostró tener un buen juego de cabeza para esquivar los golpes de su rival y conectar muchos golpes, como en el suelo, siendo capaz de conectar un hermoso derribo a su rival en el primer asalto, y de dominar a su contrincante en el tercero al estar siempre por encima de este. </p>
                    <p>De esta manera el español consigue una victoria en su primer pelea en la UFC, quitándole el invicto al australiano Colby Thicknesse, que contaba con el excampeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> en su esquina. </p>
                    <h2>Wang Cong Derrota a Bruna Brasil Por Decisión Unánime</h2>
                    <p>La peleadora china Wang Cong logra hacerse con la victoria por decisión unánime ante la brasileña Bruna Brasil, luego de lo que fue una actuación completamente dominante por su parte, ganando todos los asaltos de la pelea, al ser capaz de conectar muchísimos golpes más que su rival, llevándose una cómoda y merecida victoria por decisión. </p>
                    <h2>Tom Nolan Derrota a Viacheslav Borshchev Por Decisión Unánime</h2>
                    <p>El australiano <b>Tom Nolan</b> hace valer la localía, y pese a no ser el favorito en las apuestas, obtiene una victoria por decisión de los jueces ante el ruso <b>Viacheslav Borschev</b>, consiguiendo de esta manera su tercer victoria consecutiva. </p>
                    <h2>¡Gabriel Santos Somete a Jack Jenkins en el Tercer Asalto!</h2>
                    <p>El brasileño consigue una espectacular victoria ante el australiano, en una actuación épica que posiblemente le haga merecedor de un bono. </p>
                    <p>Luego de estar cerca de ser noqueado por su rival a comienzos del primer asalto, al recibir una patada en la cabeza que lo tumbó al suelo, Gabriel fue capaz de sobrevivir lo que duró el primer asalto del combate para poco a poco ir dándole la vuelta a la historia. Con un segundo asalto en el que mostró una mejor cara y donde podría decirse que ganó dicho round, y con un tercero en el que fue capaz de conectar un mataleón para someter a su rival y llevarse de esta manera la victoria en la última pelea preliminar de la noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Jake Matthews Derrota a Francisco Prado Por Decisión Unánime</h2>
                    <p>El australiano se queda con la victoria en la primer pelea estelar de la noche ante el argentino <b>Francisco Prado</b>. En lo que fue un combate con un primer asalto especialmente más parejo, con ambos luchadores conectando casi la misma cantidad de golpes, fue Jake Matthews quien se terminó imponiendo por sobre su rival, al tener un gran manejo de la distancia que le permitió conectar más golpes de los que recibió, y salir siempre bien parado de todos los intercambios en los que entraba con Francisco, que le sirvió para finalmente llevarse la victoria por decisión de los jueces que puntuaron de forma unánime el combate 30-27. </p>
                    <h2>Empate en el Jimmy Crute vs Rodolfo Bellato</h2>
                    <p>En un resultado honestamente confuso, ambos peleadores terminan por empatar su pelea luego de 3 asaltos, en lo que parecía un primer asalto claramente dominado por el australiano Jimmy Crute, quien debería haber sido puntuado como 10-8 por lo hecho en ese round, dominando desde el suelo durante más de 3 minutos, y estando muy cerca de noquear a su rival en el striking. </p>
                    <p>Finalmente en los otros 2 asaltos el brasileño Rodolfo Bellato fue más competitivo y logró que 2 de los 3 jueces dieran la pelea por empatada, mientras que uno vió ganador a Jimmy Crute, dando como resultado un empate por decisión mayoritaria. </p>
                    {/* <h2>Justin Tafa vs Tallison Teixeira</h2>
                    <p></p> */}
                    {/* <h2>Zhang Weili vs Tatia Suarez</h2>
                    <p></p> */}
                    {/* <h2>Dricus Du Plessis vs Sean Strickland</h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}