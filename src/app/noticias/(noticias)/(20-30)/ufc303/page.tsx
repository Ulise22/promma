import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/20-30/ufc303-hero.jpg'

export default function UFC303 () {
    return(
        <main>
            <ArticleHero title='UFC 303: ¡Alex Pereira vs Jiri Prochazka!¡Diego Lopes vs Brian Ortega!' subtitle='En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada.' image={hero} date='2024-06-29' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En esta noche de MMA tenemos tremendas peleas para lo que es el <b>International Fight Week</b>, que culminará con la pelea por el campeonato de peso semipesado entre el actual campeón <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y el retador <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. Pero además tendremos en la pelea coestelar, el enfrentamiento entre el joven <b>Diego Lopes</b> posicionado #14 en los ranking que busca escalar en la división de peso pluma ante un siempre peligroso <b>Brian Ortega</b>, que actualmente se encuentra rankeado #3.</p>
                    <h2>Ian Garry Vence Por Decisión a Michael Page</h2>
                    <p>En una buena primer pelea estelar, <b>Ian Garry</b> nos sorprendió a la mayoría buscando llevar la pelea al suelo, donde en el primer asalto se mostró súper dominante, consiguiendo un derribo luego de una matada lanzada por <b>Michael Venom Page</b>, intentando conectar un mataleón para someter a su rival, y aunque estuvo cerca de lograrlo, MVP fue capaz de sobrevivir el asalto. </p>
                    <p>En el segundo asalto MVP logró mantener la mayor parte de la pelea de pie, siendo capaz de conectar los mejores golpes que siempre iban con potencia. Sin embargo en el tercer asalto, aunque fue más igualado que los 2 anteriores, Ian Garry hizo méritos suficientes a los ojos de los jueces para llevarse la pelea, logrando controlar al inglés en todo momento, buscando siempre finalizar con una sumisión. El irlandés luego confesaría que estuvo entrenando en Brasil su Jiu-Jitsu de la mano del excampeón de peso ligero, <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>.</p>
                    <h2>Mayra Bueno Silva vs Macy Chiasson</h2>
                    <p>En proceso...</p>
                    <h2>Anthony Smith vs Roman Dolidze</h2>
                    <p>En proceso...</p>
                    <h2>Brian Ortega vs Diego Lopes</h2>
                    <p>En proceso...</p>
                    <h2>Alex Pereira vs Jiri Procházka</h2>
                    <p>En proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}