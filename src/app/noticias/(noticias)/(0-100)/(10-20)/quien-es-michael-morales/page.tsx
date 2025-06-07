import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/10-20/michael_morales.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

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
            <ArticleHero title='¿Quién es Michael Morales? El Luchador Ecuatoriano de 25 Años que Está Invicto en la UFC' subtitle='La historia del ecuatoriano Michael Morales que recientemente acaba de entrar en el Ranking de peso wélter en la UFC.' image={hero} date='2024-08-27' author={null} updatedDate='2024-11-12' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente el nacido en la Provincia de El Oro, en Ecuador, <b>Michael Morales Hurtado</b> logró una asombrosa victoria por nocaut en el primer asalto ante el estadounidense <b>Neil Magny</b>, que le valió su primer bono en la <Link href='/articulos/ufc'>UFC</Link> y lo colocó en el ranking de peso wélter de la compañía, en la posición #12 concretamente. Con esta victoria además, extendió su impresionante récord a 17-0, sumándose a la lista de los <Link href='/peleadores/ian-garry'>Ian Garry</Link> y <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link>, quienes también están invictos en su división, y quienes son peleadores jovenes que apuntan a mover la división y a pelear por el cinturón de las 170lbs en el futuro cercano.</p>
                    <p>En la entrevista postpelea hablo sobre como la presencia y escuchar a los miembros de su equipo fue clave para conseguir la victoria. Además mencionó que el pasar tiempo entrenando con el actual campeón de la división <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link> ayudó bastante, teniendo nada más que palabras de aprecio para el campeón.</p>
                    <YouTubeEmbed videoid='itdbacIkspk' />
                    <h2>Michael Morales Historia</h2>
                    <p>Michael Morales es hijo de judocas, siendo su madre su primera entrenadora y quien lo instruyó en esta disciplina que entrena desde los 5 años. A los 10 comenzó a entrenar lucha, donde conseguiría ganar varios torneos. Y finalmente, luego de que su padre lo llevara a la academia Víctor Vallejo en Machala, a los 14 años, fue cuando comenzó a entrenar artes marciales mixtas. </p>
                    <p>Su debut profesional en las MMA lo haría el 19 de agosto de 2017, a los 18 años, enfrentando a su compatriota <b>Álvaro Vacacela Guerrero</b>, a quien conseguiría vencer por nocaut en el segundo asalto. Aquella pelea la haría en peso wélter, que es la categoría de peso en la compite actualmente, a pesar de que tuvo un par de peleas en peso ligero en el inicio de su carrera, ante el venezolano <b>Álvaro Vavela Guerrero</b>, a quien enfrentaría el 8 de diciembre de 2018, consiguiendo una victoria por decisión unánime; y ante su el ecuatoriano <b>Mathias Salazar</b>, a quien enfrentaría el 6 de septiembre de 2019, logrando noquear a este en el primer asalto de la pelea. </p>
                    <p>Luego de varias victorias consecutivas en promotoras de MMA en latinoamérica, llegando a acumular un récord profesional de 11-0, con unas estadísticas espectaculares, siendo 9 de estas 11 victorias por la vía del nocaut, 1 por sumisión y sólo 1 por decisión, tendría la oportunidad de participar en el <b>Dana White&apos;s Contender Series 40</b> el día 21 de septiembre de 2021, donde enfrentaría al luchador de Kazajistán <b>Nikolay Veretennikov</b>, a quien luego de 3 asaltos vencería por decisión unánime, ganándose un contrato con la UFC. </p>
                    <YouTubeEmbed videoid='vKp_zz2t8eU' />
                    <p>Desde entonces pelea para la compañía más grande del mundo de las artes marciales mixtas. Habiendo hecho su debut el día 22 de enero de 2022 en el UFC 270 (que tuvo a <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link> contra <Link href='/peleador/ciryl-gane'>Ciryl Gane</Link> como evento estelar), enfrentando al estadounidense <b>Trevin Giles</b>, a quien conseguiría noquear en el primer asalto. </p>
                    <p>Impresionantemente, lograría un hito parecido en su siguiente combate el 30 de julio de ese mismo año, cuando en el UFC 277, organizado en Dallas, Texas, se enfrentó al luchador americano <b>Adam Fuggit</b>, a quien logró noquear en el tercer asalto de la pelea. </p>
                    <YouTubeEmbed videoid='fb1kqS6RuXk' />
                    <p>Luego de aquellas peleas el ecuatoriano seguiría ganando, peleando 2 veces a lo largo del 2023, siendo el primer combate el día 1 de julio ante <b>Max Griffin</b>, donde conseguiría llevarse la victoria por decisión unánime. Y siendo la segunda pelea ante el australiano <b>Jake Matthews</b>, a quien enfrentó el día 18 de noviembre, consiguiendo una nueva victora por decisión unánime. </p>
                    <p>Con su más reciente victoria ante el estadounidense <b>Neil Magny</b>, a quien logró desplazar del puesto #12 de los rankings, el futuro luce prometedor para el ecuatoriano, a quien todavía no le conocemos su techo, y quien ahora mismo posee un récord perfecto de 17-0 que todavía nadie pudo romper. Luego de su última victoria, se ganó incluso el reconocimiento de su compatriota y luchador de la división de peso gallo de la UFC, <Link href='/peleadores/marlon-vera'>Marlon Vera</Link>, quien en su cuenta de X lo felicitó por la victoria conseguida.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="es" dir="ltr">Bien Micheal buena pelea ! Sigue así</p>&mdash; C H🖕🏽T O🇪🇨V E R A (@chitoveraUFC) <a href="https://twitter.com/chitoveraUFC/status/1827540340242616385?ref_src=twsrc%5Etfw">August 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}