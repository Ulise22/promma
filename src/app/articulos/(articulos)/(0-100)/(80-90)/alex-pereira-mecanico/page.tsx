import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/alex_pereira-mecanico.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Alex Pereira Mecánico',
    description: 'Descubre la historia real de Alex Pereira mecánico: de reparar neumáticos y luchar contra el alcohol a los 12 años, a campeón de Glory Kickboxing y doble campeón de UFC. Una inspiradora historia de resiliencia. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falex_pereira-mecanico.8b1dc32f.webp&w=828&q=65',
        title: 'Alex Pereira Mecánico',
        description: 'Descubre la historia real de Alex Pereira mecánico: de reparar neumáticos y luchar contra el alcohol a los 12 años, a campeón de Glory Kickboxing y doble campeón de UFC. Una inspiradora historia de resiliencia. ',
        url: 'https://fullmma.org/articulos/alex-pereira-mecanico'
    }
}

export default function AlexPereiraMecanico () {
    return(
        <main>
            <ArticleHero title='Alex Pereira: De Mecánico Alcoholico en Sao Paulo a ¿Triple Campeón de UFC?' subtitle='La historia de superación de Alex Pereira, quien entrenó para superar su alcoholismo, y abandonó su taller mecánico para ser campeón de Kickboxing y de la UFC. ' image={hero} date='2026-06-06' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/alex-pereira'>Alex Pereira</Link> fue mecánico en un taller de neumáticos desde que era tan sólo un adolescente. Viéndose obligado por las dificultades económicas en Brasil a abandonar sus estudios secundarios y trabajar a temprana edad, apenas a los 12 años, para poder ayudar a su familia economicamente. </p>
                    <p>La historia del brasileño es de las más motivadoras que hay, siendo un ejemplo de superación que logró superar la pobreza y adversidad en la que nació, para convertirse en campeón de kickobxing en 2 divisiones diferentes, y luego para comenzar a pelear en MMA hasta convertirse en <Link href='/articulos/todos-los-dobles-campeones-de-ufc'>doble campeón de la UFC</Link>, y haciendo su camino para volverse leyenda viviente del deporte. </p>
                    <h2>Los Años Difíciles: Infancia de Alex Pereira</h2>
                    <p>Alex Pereira nació el 7 de julio de 1987 en Sao Bernardo do Campo, Brasil. En un entorno humilde marcado por la pobreza. A los 12 años de edad, se vió obligado a abandonar sus estudios para trabajar como ayudante de albañil junto a su padre. </p>
                    <p>Al poco tiempo consiguió empleo en una borracharia (un taller de reparación de neumáticos), donde comenzó a trabajar como mecánico. Allí debía realizar jornadas de hasta 10-12 horas en las que montaba, equilibraba y reparaba llantas. </p>
                    <p>Aunque  enfrentar un trabajo físico como este desde temprana edad lo ayudó a construir resiliencia, tolerancia al trabajo duro, y lo expuso al mundo adulto antes que la mayoría, también lo expuso a malas influencias. </p>
                    <p>Dado que influenciado por sus compañeros mayores cayó en el alcoholismo a temprana edad. Llegando a puntos extremos, donde podía beber un litro de alcohol por día, pidiendo en ocasiones que le pagaran parte de su sueldo en bebidas alcoholicas. El propio Alex ha confesado que durante ente periodo de su vida se sentía perdido y sin futuro, resignándose a una vida entera en el taller. </p>
                    <YouTubeEmbed videoid='DTZJJct54Ik' />
                    <h2>Del taller al Kickboxing: su salvavidas</h2>
                    <p>En busqueda de dejar atrás su alcoholismo y armarse de disciplina, Alex comenzó asistió a un gimnasio de kickboxing en el año 2009, teniendo poco más de 20 años. Esta decisión lo salvaría de los vicios y cambiaría su vida para siempre. </p>
                    <p>Pudo cnaalizar su fuerza física y mental en el entrenamiento, logrando una progresión meteórica. Sumando victorias sin parar, alcanzando el éxito y volviéndose una estrella dentro de <b>Glory Kickboxing</b>: </p>
                    <ul>
                        <li>Ganó el torneo Contender en 2014. </li>
                        <li>Ganó el Campeonato Mundial de Peso Medio de Glory en 2017. </li>
                        <li>Defendió multiples veces su cinturón de campeón. </li>
                        <li>En 2021 se convirtió en el primer peleador en ostentar 2 cinturones simultáneos en Glory. </li>
                        <li>Entre sus múltiples victorias, derrotó en 2 ocasiones a quien sería campeón de la UFC, <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>. </li>
                    </ul>
                    <p>Sus golpes brutales, de precisión y dureza implacables, le hicieron la fama de noqueador nato, obteniendo el apodo <Link href='/articulos/que-significa-poatan'>Poatan</Link> y siendo inducido al Salón de la Fama de Glory. </p>
                    <h2>La llegada a la UFC de Alex Pereira</h2>
                    <p>En el año 2021, con apenas unas pocas peleas en MMA, firma con la UFC para pelear en la organización de artes marciales mixtas más grande del mundo. Allí conseguiría: </p>
                    <ul>
                        <li>Debutar con victoria por KO en su primera pelea. </li>
                        <li>Noquear al futuro campeón <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> en el primer asalto. </li>
                        <li>Convertirse en campeón de la UFC en peso medio al noquear a <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> en el quinto asalto. </li>
                        <li>Tras perder la revancha con Adesanya, se mueve a peso semipesado donde lograría su segundo campeonato al noquear a <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. </li>
                        <li>Múltiples defensas por KO (ante Prochazka, Jamahal Hill y Khalil Rountree). </li>
                        <li>Luego de perder su cinturón, lo recupera con una victoria por nocaut ante <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link>. </li>
                        <li>En junio de 2026 se convertiría en el primer peleador de la historia en pelear por 3 cinturones en diferentes divisiones, al enfrentar al francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> en el histórico <Link href='/noticias/ufc-casa-blanca'>UFC Casa Blanca</Link>. </li>
                    </ul>
                    <h2>Las Lecciones de Vida que deja Alex Pereira y su Pasado como Mecánico</h2>
                    <p>Alex Pereira no recorrió un camino de rosas para llegar a donde llegó, su historia no son solo cinturones y logros, sino que es una historia de superación constante, habiendo nacido en la pobreza en Brasil, teniendo que dejar la escuela para trabajar como albañil, pasando por jornadas extenuantes en el taller, sufriendo dudas, falta de propósito y teniendo que superar su adicción al alcohol. Hoy en día es una estrella global, que sirve de ejemplo sobre como la disciplina y perseverancia pueden cambiar tu destino. </p>
                    <YouTubeEmbed videoid='0679DRUO6qo' />
                    <p>Pese a todo el éxito acumulado, El Poatan sigue manteniendo su humildad, visitando el taller en el que alguna vez trabajó de vez en cuando, manteniendo contacto con sus raíces, conectando con sus <Link href='/articulos/alex-pereira-tribu'>antepasados indigenas</Link>, y siendo un ejemplo para los demás, motivando a la gente a no rendirse. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}