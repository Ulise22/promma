import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/ilia_topuria-AM.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Ilia Topuria Que Artes Marciales Sabe',
    description: '¿Ilia Topuria qué artes marciales sabe? Analizamos en profundidad las disciplinas que domina el campeón de UFC: wrestling grecorromano, jiu-jitsu (cinturón negro), boxeo y más. Historia, entrenamiento y cómo las combina para ser invicto.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Filia_topuria-AM.d669fc93.webp&w=828&q=65',
        title: 'Ilia Topuria Que Artes Marciales Sabe',
        description: '¿Ilia Topuria qué artes marciales sabe? Analizamos en profundidad las disciplinas que domina el campeón de UFC: wrestling grecorromano, jiu-jitsu (cinturón negro), boxeo y más. Historia, entrenamiento y cómo las combina para ser invicto.',
        url: 'https://fullmma.org/articulos/ilia-topuria-que-artes-marciales-sabe'
    }
}

export default function IliaTopuriaAM () {
    return(
        <main>
            <ArticleHero title='¿Qué Artes Marciales Sabe Ilia Topuria?' subtitle='Las artes marciales que domina Ilia Topuria, su grappling y striking, sus inicios en al lucha grecorromana, su cinturón negro en BJJ y su boxeo de élite.' image={hero} date='2026-06-03' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> es un peleador super completo que domina varias artes marciales, incluyendo wrestling grecorromano, jiu-jitsu brasileño, donde es cinturón negro, boxeo y más.</p>
                    <p>A diferencia de otros peleadores, que solamente se especializan en una sola arte marcial y a partir de ahí comienzan a pelear en MMA, Ilia represente un nuevo paradigma, es la evolución de las artes marciales mixtas, dado que tiene un enfoque más moderno que lo convierte en un peleador completo que fusiona sus sólidas bases de grappling con un striking devastador. Por lo que pasaremos a detallar exactamente qué artes marciales practica el campeón de peso ligero para ser el campeón invicto de la UFC que conocemos hoy. </p>
                    <h2>Sus Origenes: Lucha Grecorromana</h2>
                    <p>Desde muy pequeño el hispano georgiano comenzó a entrenar deporte de contacto, iniciando a los 6-7 años junto a su hermano <b>Aleksandre Topuria</b>, ambos practicaron esta disciplina tanto en su infancia en Alemania (donde nació el campeón), como en Georgia, de donde son sus padres y a donde fueron a vivir en 2003. </p>
                    <p>Esta base de lucha le proporcionó:</p>
                    <ul>
                        <li>Excelente control del clinch</li>
                        <li>Buen manejo de derribos, tanto para realizarlos como para defenderlos.</li>
                        <li>Fuerza funcional en el suelo</li>
                        <li>Mentalidad de presión constante y resistencia</li>
                    </ul>
                    <p>Luego en su adolescencia se mudó a España, donde ya no consiguió un club que tuviera lucha grecorromana de alto nivel, pero de igual forma sus bases quedaron ahí y están a la vista para quienes lo hayan visto pelear. </p>
                    <YouTubeEmbed videoid='ALhGwIkcC30' />
                    <h2>Jiu-Jitsu Brasileño y el Cinturón Negro</h2>
                    <p>En 2012, a los 15 años, Ilia y su familia se establecieron en Alicante, España. Allí buscó continuar desarrollándose marcialmente, llegando al <b>Climent Club</b>, un gimnasio de MMA y artes marciales dirigido por los hermanos argentinos <b>Jorge y Agustín Climent</b>. </p>
                    <p>Fue en ese momento que descubrió el Brazilian Jiu-Jitsu (BJJ), el cual comenzó a entrenar intensamente durante años junto a su hermano Alex, siendo ambos de los primeros georgianos en obtener el cinturón negro en esta disciplina en mayo de 2018, logrando no sólo un hito personal muy importante, sino algo histórico para su país. </p>
                    <p>Tan bueno llegó a ser <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> en BJJ, alcanzando un nivel altísimo, que sus primeras 7 peleas profesionales en MMA fueron todas por sumisión, demostrando ser letal en esta disciplina. De hecho, el propio Topuria ha defendido que para afrontar una pelea real en la calle, el arte marcial más efectivo en el combate es el jiu-jitsu brasileño.</p>
                    <YouTubeEmbed videoid='RSZ-PMT4Djk' />
                    <h2>Boxeo y Striking: La Evolución de Ilia Topuria</h2>
                    <p>Alrededor de los 17 años, Topuria comenzó a entrenar boxeo seriamente de la mano de los entrenadores del <b>Climent Club</b>, siendo un punto de inflexión clave como artista marcial, añadiendo progresivamente más de este striking propio de él a su juego, siendo un factor cada vez más predominante en su estilo. </p>
                    <p>Pese a que en teoría no debería ser su fuerte, Topuria se ha convertido en uno de los peleadores que mejor ha adaptado este deporte de contacto a las MMA, con una guardia cerrada, un excelente timing para contragolpear, y una combinación de golpes larga que inevitablemente termina en nocaut. </p>
                    <p>Además, más allá de la técnica, ha demostrado tener un poder de nocaut fenomenal, consiguiendo apagarle las luces a leyendas del deporte como <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> y <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, además de lograr la hazaña de convertirse en el primero en noquear a quien parecía tener una mandibula de hierro, a quien parecía imposible de noquear, <Link href='/peleadores/max-holloway'>Max Holloway</Link>. </p>
                    <h2>Otras Disciplinas y Entrenamiento Integrado en MMA</h2>
                    <p>Aunque sus principales herramientas para pelear son las que mencioné antes: la lucha, el bjj y el boxeo, lo cierto es que Ilia entrena un abanico más amplio como parte de su preparación para luchar en la UFC: </p>
                    <ul>
                        <li><b>Muay Thai y Kickboxking: </b> Para mejorar patadas y  situaciones en el clinch.</li>
                        <li><b>Submission Grappling: </b> Hace sesiones específicas sin striking para mejorar su juego en el suelo.</li>
                        <li><b>Fuerza y condicionamiento físico: </b> Hace entrenamientos funcionales y de fuerza con el objetivo de mejorar su explosividad y resistencia. </li>
                    </ul>
                    <p>Cuando entrenaba en el <b>Climent Club</b> y hoy en día en el <b>Topuria Team</b>, practica de forma hiper especializada. Siguiendo una rutina de sesiones separadas para cada una de las disciplinas que mencionamos anteriormente. Esto siempre al lado de acompañantes de primer nivel, como su propio hermano <b>Aleksandre Topuria</b>, <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> en ocasiones (quien elogio su lucha) y más recientemente <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, con quien entreno en la previa al <Link href='/noticias/ufc-casa-blanca'>UFC en la Casa Blanca</Link>. </p>
                    <h2>¿Cuántas artes marciales sabe Ilia Topuria?</h2>
                    <p>No existe un número fijo u oficial de artes marciales, dado que no va coleccionándolas, sino que entrena con el objetivo de ser el mejor luchador de MMA posible, por lo que mezcla bastante. Sin embargo, basándonos en declaraciones del propio Topuria y en lo que podemos ver en sus combates, domina a un altísimo nivel 3 disciplinas: lucha, jiu-jitsu brasileño y boxeo. Siendo un peleadro completísimo. </p>
                    <YouTubeEmbed videoid='Gaf1lZT_wF4' />
                    <h2>Ilia Topuria es la Evolución de las MMA</h2>
                    <p>Ilia Topuria representa un paradigma bastante reciente para las MMA, siendo un peleador completo que es bueno en todo, y que no se casó con un estilo en particular a costa de ser mediocre en los otros. A diferencia de años anteriores, donde los peleadores de UFC tenían estilos muy marcados y que sufrían cuando se enfrentaban a un luchador que los sacara de su zona de confort, Ilia parece no tener puntos débiles muy marcados.</p>
                    <p>Demuestra también que la clave del exito en este deporte no está en saber muchas artes marciales de manera superficial, sino en dominar las básicas y fundamentales, fusionándolas con inteligencia y aprendiendo cosas útiles de otras disciplinas para aplicarlas a su estilo de pelea. </p>
                    <p>Les muestra a los nuevos peleadores que si quieren alcanzar el éxito que él consiguió, deben comenzar por lo básico, aprendiendo mucho de wrestling y bjj, y luego ir incorporando otras disciplinas como el boxeo, buscando siempre mejorar y nunca dejar de evolucionar. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}