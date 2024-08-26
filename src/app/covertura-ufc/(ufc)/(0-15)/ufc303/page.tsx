import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc303-hero.jpg'

export const metadata: Metadata = {
    title: 'UFC 303: Alex Pereira Noquea a Jiri Prochazka',
    description: 'En una noche de puras Artes Marciales Mixtas, Alex Pereira retiene el título con un espectacular nocaut a Jiri Prochazka. Además el evento coestelar lo protagoniza un Dan Ige que tomó la pelea con pocas horas de anticipación.',
    openGraph: {
        title: 'UFC 303: Alex Pereira Noquea a Jiri Prochazka',
        description: 'En una noche de puras Artes Marciales Mixtas, Alex Pereira retiene el título con un espectacular nocaut a Jiri Prochazka. Además el evento coestelar lo protagoniza un Dan Ige que tomó la pelea con pocas horas de anticipación.',
        url: 'https://fullmma.org/noticias/ufc303'
    }
}

export default function UFC303 () {
    return(
        <main>
            <ArticleHero title='UFC 303: ¡Alex Pereira Noquea a Jiri Prochazka en el Segundo Asalto!¡Diego Lopes Vence a Dan Ige Que Tomó la Pelea con 4 Horas de Antelación!' subtitle='En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada, y con la pelea inédita de Diego Lopes y de Dan Ige, que aceptó combatir unas pocas horas antes de la pelea.' image={hero} date='2024-06-29' author='@long.live.midhat' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En esta noche de MMA tenemos tremendas peleas para lo que es el <b>International Fight Week</b>, que culminará con la pelea por el campeonato de peso semipesado entre el actual campeón <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y el retador <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. Pero además tendremos en la pelea coestelar, el enfrentamiento entre el joven <b>Diego Lopes</b> posicionado #14 en los ranking que busca escalar en la división de peso pluma ante un siempre peligroso <b>Brian Ortega</b>, que actualmente se encuentra rankeado #3.</p>
                    <h2>Ian Garry Vence Por Decisión a Michael Page</h2>
                    <p>En una buena primer pelea estelar, <b>Ian Garry</b> nos sorprendió a la mayoría buscando llevar la pelea al suelo, donde en el primer asalto se mostró súper dominante, consiguiendo un derribo luego de una matada lanzada por <b>Michael Venom Page</b>, intentando conectar un mataleón para someter a su rival, y aunque estuvo cerca de lograrlo, MVP fue capaz de sobrevivir el asalto. </p>
                    <p>En el segundo asalto MVP logró mantener la mayor parte de la pelea de pie, siendo capaz de conectar los mejores golpes que siempre iban con potencia. Sin embargo en el tercer asalto, aunque fue más igualado que los 2 anteriores, Ian Garry hizo méritos suficientes a los ojos de los jueces para llevarse la pelea, logrando controlar al inglés en todo momento, buscando siempre finalizar con una sumisión. El irlandés luego confesaría que estuvo entrenando en Brasil su Jiu-Jitsu de la mano del excampeón de peso ligero, <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>.</p>
                    <h2>Macy Chiasson Gana por TKO por Parada Médica ante Mayra Bueno Silva</h2>
                    <p>La brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link>, que había hecho un excelente primer asalto, terminó perdiendo la pelea ante <b>Macy Chiasson</b> por parada médica en el segundo asalto, producto de un codazo que le abrió un corte por encima de la ceja demasiado grande, que aunque en un principió no parecía estorbarle la vista, era tal el tamaño del corte que el médico de la UFC decidió que lo mejor era parar el combate. De esta manera, aunque la brasileña quería seguir peleando, acumula su segunda derrota consecutiva, luego de perder en enero en el <Link href='/noticias/ufc297'>UFC 297</Link> en una pelea por el título ante <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>.</p>
                    <h2>Roman Dolidze Derrota a Anthony Smith Por Decisión</h2>
                    <p>El georgiano <b>Roman Dolidze</b> se lleva la victoria por decisión unánime ante un <b>Anthony Smith</b> que tomó la victoria en corto aviso, y que venía de una victoria por sumisión en el primer asalto en el <Link href='/noticias/ufc301'>UFC 301</Link>. En un combate donde Dolidze fue un dominador claro, logra meterse en el top10 de los pesos semipesados. Al finalizar la pelea, el ganador de esta no dudo en retar a <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link></p>
                    <h2>Diego Lopes Derrota a Dan Ige Por Decisión</h2>
                    <p>De evento coestelar tuvimos una pelea inédita en las MMA, con un Dan Ige que se viste de leyenda, luego de que por una enfermedad <b>Brian Ortega</b> avisara que no podría pelear pocas horas antes de su pelea, Dan Ige aceptó entrar como reemplazo con 4 horas de antelación.</p>
                    <p>Durante la pelea vimos como Diego Lopes supo dominar los 2 primeros asaltos, siendo lógico por su alto nivel como luchador y por estar enfrentando a un rival que literalmente acababa de aceptar la pelea. Sin embargo, un Dan Ige que contaba con el excampeón de peso medio <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> en su esquina, fue capaz de dar un espectáculo con un tercer asalto que claramente ganó él. El mismo Dan confesó que estaba recibiendo un masaje al momento de recibir la llamada para pelear esa misma noche. Honor a ambos luchadores por aceptar combatir con tan poco tiempo de antelación y por darnos un verdadero show.</p>
                    <h2>Alex Pereira Noquea a Jiri Procházka De una Patada</h2>
                    <p>El actual campeón de peso semipesado <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> retiene su título ante <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> con otra actuación sobresaliente en la que estando a punto de noquear al checo en el último segundo del primer asalto, logró finalizar lo que ya había empezado en el inicio del segundo asalto, conectando una patada a la cabeza de su rival que lo dejó en el suelo. </p>
                    <p>Luego de aquella patada Pereira sólo tuvo que lanzarse a tirar golpes a su rival para asegurar la victoria por nocaut técnico. Las posibilidades para Alex ahora son casi infinitas, luego de haber salvado esta cartelera que debía ser protagonizada por <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>, aceptando una pelea en corto aviso donde ponía en riesgo su cinturón, lo que queda para el Poatan deben ser sólo cosas buenas. Sería interesante verlo intentar conseguir la hazaña de ser el primer triple-campeón en la historia de la UFC, que si lo consiguiera derrotando a alguien como <Link href='/peleadores/jon-jones'>Jon Jones</Link> por ejemplo, lo catapultaría como una estrella y como una leyenda absoluta, más de lo que ya lo es.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}