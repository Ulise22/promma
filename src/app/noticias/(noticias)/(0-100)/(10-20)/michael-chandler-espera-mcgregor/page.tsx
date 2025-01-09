import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/peleadores__images/0-100/10-20/michael-chandler/michael_chandler.jpg'

export const metadata: Metadata = {
    title: 'Michael Chandler Espera a McGregor',
    description: 'Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?',
    openGraph: {
        title: 'Michael Chandler Espera a McGregor',
        description: 'Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?',
        url: 'https://fullmma.org/noticias/michael-chandler-espera-mcgregor'
    }
}

export default function ChandlerEsperaMcgregor () {
    return(
        <main>
            <ArticleHero title='¿Tiene Sentido Para Michael Chandler Esperar a McGregor?' subtitle='Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?' image={hero} date='2024-06-25' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/michael-chandler'>Michael Chandler</Link> sin dudas es uno de los peleadores más entretenidos de ver en la <Link href='/articulos/ufc'>UFC</Link>, sin embargo hace casi 2 años que no compite, desde su derrota por sumisión ante <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, a la espera de tener una pelea con <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>, que hasta el momento no ha vuelto a pisar un octagono. Lo que nos hace preguntarnos, ¿por qué lo espera tanto? y, ¿vale la pena la espera?</p>
                    <p>Recientemente se anunció que se cancelaba el que se suponía debía ser el combate principal para el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, entre Chandler y Mcgregor, en su lugar la pelea estelar será por el título de semipesados entre <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. La pelea fue cancelada por Mcgregor, quien afirmó tener una lesión en el dedo pequeño del pie, que no le permitiría competir en la <b>International Fight Week</b>, según afirmó él mismo en sus redes sociales. <b>&quot;Nunca voy a volver a pelear herido otra vez, y nunca voy a perder otra pelea&quot;</b>, escribió &quot;The Notorious&quot; en su cuenta de X.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">I will never enter a fight hurt again and I will never lose another fight.</p>&mdash; Conor McGregor (@TheNotoriousMMA) <a href="https://twitter.com/TheNotoriousMMA/status/1804487893034963272?ref_src=twsrc%5Etfw">June 22, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>Michael Chandler y Conor Mcgregor protagonizaron la temporada 31 de <b>The Ultimate Fighter</b>, donde los entrenadores de cada equipo acostumbran a terminar enfrentándose entre sí. Por esto tiene sentido que Chandler crea que la siguiente pelea para él deba ser esta, el problema es que depende de un Conor que lleva mucho tiempo de inactividad, y del cual no tenemos certezas de cómo planea seguir manejando su carrera profesional. Recordemos que Conor no pelea en UFC desde julio de 2024, en su pelea contra <b>Dustin Poirier</b> contra quien cayó derrotado, recibiendo una durísima lesión en la pierna que le impidió seguir peleando, ya van a ser 3 años desde aquello.</p>
                    <p>El peleador estadounidense ya cumplió 38 años, por lo que es de esperar que no le queden muchas peleas en el camino, habiendo tenido 5 combates en la UFC, entre ellos una pelea por el título vacante ante <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, y habiendo perdido 3 de esas 5 peleas, ya habiendo enfrentado a varios de los mayores peleadores de la división, pareciera que Michael Chandler no ve muy probable pelear por el título nuevamente, por lo que estaría apostando al regreso de Mcgregor, como una forma de tener una pelea mediática, que economicamente le sirva para tener tranquilidad respecto a su futuro. </p>
                    <p>Aún así, son varios los que creen que en este tiempo de espera, que van para 2 años, podría haber tenido 3 o 4 peleas que le significarían otro cheque para llevarse a los bolsillos. Peleadores como <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> le recomendaron que buscara seguir peleando en lugar de esperar a Conor, afirmando que de todas formas esa pelea con el irlandés &quot;siempre estará ahí&quot;. El mismo Conor Mcgregor tiene su opinión al respecto, como la hizo saber en X: &quot;<b>Chandler va a ser pagado con 10 veces más de lo que su contrato estipula para otras peleas. Lo que significa que necesitaría pelear 10 veces para hacer lo que va hacer con esta. </b>&quot;</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Chandler is getting paid 10x of what his contract states for other fights. Meaning he would need to fight 10 fights to make what he would make in this one. I’m The One.</p>&mdash; Conor McGregor (@TheNotoriousMMA) <a href="https://twitter.com/TheNotoriousMMA/status/1804197703456329860?ref_src=twsrc%5Etfw">June 21, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>Luego en otro post, escribió que: &quot;<b>Para aquellos que dicen que ya podría haber peleado 2 o 3 veces, etc. Necesitaría 10 para emparejar con este cheque</b>&quot;.</p>
                    <p>Es difícil saber cuáles son los verdaderos números detrás de este combate. Lo cierto es que Conor sigue siendo una super estrella en este mundo, que la gente todavía quiere verlo pelear, y que Chandler, de enfrentarse a él, recibiría un pago multimillonario. Pero esta todo supeditado a que Mcgregor vuelva al octágono, por eso decimos que Chandler está haciendo una apuesta, porque en caso de que la pelea finalmente se dé, va a terminar consiguiendo lo que quería, pero si no, habrá tirado 2 años o más de su carrera a la basura.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}