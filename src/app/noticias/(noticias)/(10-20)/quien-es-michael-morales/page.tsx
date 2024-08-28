import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/10-20/michael_morales-hero.jpg'

export const metadata: Metadata = {
    title: 'Quien es Michael Morales',
    description: 'Recientemente Michael Morales Hurtado logró una asombrosa victoria por nocaut en el primer asalto ante el estadounidense Neil Magny, que le valió su primer bono en la UFC y lo colocó en el ranking de peso wélter de la compañía.',
    openGraph: {
        title: 'Quien es Michael Morales',
        description: 'Recientemente Michael Morales Hurtado logró una asombrosa victoria por nocaut en el primer asalto ante el estadounidense Neil Magny, que le valió su primer bono en la UFC y lo colocó en el ranking de peso wélter de la compañía.',
        url: 'https://fullmma.org/noticias/quien-es-michael-morales'
    }
}

export default function ProximaPeleaVolkanovski () {
    return(
        <main>
            <ArticleHero title='¿Quién es Michael Morales? El Luchador Ecuatoriano de 25 Años que Está Invicto en la UFC' subtitle='La historia del ecuatoriano Michael Morales que recientemente acaba de entrar en el Ranking de peso wélter en la UFC.' image={hero} date='2024-07-08' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente el nacido en la Provincia de El Oro, en Ecuador, <b>Michael Morales Hurtado</b> logró una asombrosa victoria por nocaut en el primer asalto ante el estadounidense <b>Neil Magny</b>, que le valió su primer bono en la <Link href='/articulos/ufc'>UFC</Link> y lo colocó en el ranking de peso wélter de la compañía, en la posición #12 concretamente. Con esta victoria además, extendió su impresionante récord a 17-0, sumándose a la lista de los <Link href='/peleadores/ian-garry'>Ian Garry</Link> y <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link>, quienes también están invictos en su división, y quienes son peleadores jovenes que apuntan a mover la división y a pelear por el cinturón de las 170lbs en el futuro cercano.</p>
                    <p>En la entrevista postpelea hablo sobre como la presencia y escuchar a los miembros de su equipo fue clave para conseguir la victoria. Además mencionó que el pasar tiempo entrenando con el actual campeón de la división <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link> ayudó bastante, teniendo nada más que palabras de aprecio para el campeón.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/itdbacIkspk?si=a9_6B8V8ScE2seAn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Michael Morales Historia</h2>
                    <p>Michael Morales es hijo de judocas, siendo su madre su primera entrenadora y quien lo instruyó en esta disciplina que entrena desde los 5 años. A los 10 comenzó a entrenar lucha, donde conseguiría ganar varios torneos. Y finalmente, luego de que su padre lo llevara a la academia Víctor Vallejo en Machala, a los 14 años, fue cuando comenzó a entrenar artes marciales mixtas. </p>
                    <p>Su debut profesional en las MMA lo haría el 19 de agosto de 2017, a los 18 años, enfrentando a su compatriota <b>Álvaro Vacacela Guerrero</b>, a quien conseguiría vencer por nocaut en el segundo asalto.</p>
                    <p>Luego de varias victorias consecutivas en promotoras de MMA en latinoamérica, tendría la oportunidad de participar en el <b>Dana White&apos;s Contender Series 40</b>, al que llegaría con un récord de 11-0 el día 21 de septiembre de 2021, donde enfrentaría al luchador de Kazajistán <b>Nikolay Veretennikov</b>, a quien luego de 3 asaltos vencería por decisión unánime, ganándose un contrato con la UFC. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/vKp_zz2t8eU?si=pOke_B-Pva9OuMND" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Desde entonces pelea para la compañía más grande del mundo de las artes marciales mixtas. Llevando ya 5 peleas y 5 victorias consecutivas, destacando especialmente sus 2 primeras victorias, ante <b>Trevis Giles</b> y <b>Adam Fugitt</b>, a quien lograría vencer por TKO en el primer y en el tercer asalto, respectivamente.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/fb1kqS6RuXk?si=btLV8wQAvNs0uwjo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Con su más reciente victoria ante el estadounidense <b>Neil Magny</b>, a quien logró desplazar del puesto #12 de los rankings, el futuro luce prometedor para el ecuatoriano, a quien todavía no le conocemos su techo. Luego de su última victoria, se ganó incluso el reconocimiento de su compatriota y luchador de la división de peso gallo de la UFC, <Link href='/peleadores/marlon-vera'>Marlon Vera</Link>, quien en su cuenta de X lo felicitó por la victoria conseguida.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="es" dir="ltr">Bien Micheal buena pelea ! Sigue así</p>&mdash; C H🖕🏽T O🇪🇨V E R A (@chitoveraUFC) <a href="https://twitter.com/chitoveraUFC/status/1827540340242616385?ref_src=twsrc%5Etfw">August 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}