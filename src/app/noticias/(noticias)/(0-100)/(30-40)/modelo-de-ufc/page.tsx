import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import { YouTubeEmbed } from '@next/third-parties/google'
import dynamic from 'next/dynamic'
import Link from 'next/link'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/modelo_ufc.webp'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Modelo de UFC',
    description: "Islam Dulatov, y como pasó de ser un exitoso modelo a convertirse en una de los peleadores más prometedores de la UFC.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmodelo_ufc.a9e417a1.webp&w=828&q=65',
        title: 'Modelo de UFC',
        description: "Islam Dulatov, y como pasó de ser un exitoso modelo a convertirse en una de los peleadores más prometedores de la UFC.",
        url: 'https://fullmma.org/noticias/modelo-de-ufc'
    }
}

export default function ModeloDeUFC () {
    return(
        <main>
            <ArticleHero title='Islam Dulatov: El Modelo de UFC Que Debuta en el UFC 318' subtitle="Conoce al alemán Islam Dulatov, que renunció a su exitosa carrera de modelo de Gucci y Hugo Boss para convertirse en peleador de MMA y debutar en la UFC." image={hero} date='2025-07-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Islam Dulatov es el nombre del modelo de UFC que hará su debut en la compañía el próximo 19 de julio de 2025 en el <b>UFC 318</b>. La historia de este hombre de nacionalidad alemana es bastante interesante, dado que renunció a grandes sumas de dinero y una exitosa carrera como modelo profesional, llegando a trabajar para marcas como <b>Gucci</b>, <b>Hugo Boss</b> y aparenciendo en el <b>British Vogue</b> como un top 10 modelos de 2018, para lograr su sueño de convertirse en peleador profesional y llegar a pelear en la UFC como hará este próximo sábado, llegando a este debut con un récord profesional de 11-1, habiendo finalizado en todos sus combates, y con la racha activa de 11 victorias consecutivas. </p>
                    <h3>La infancia de Islam Dulatov</h3>
                    <p>Islam Dulatov nació el 2 de agosto de 1988 en una pequeña ciudad llamada <b>Urús-Martán</b>, perteneciente la República de Chechenia, en Rusia. Lo que lo hace compatriota de <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>. Creció pertenciendo a una gran familia de 6 hermanos, siendo uno de los del medio, en un momento complicado para la zona en la que vivía, debido a los años turbulentos que se vivieron con guerras e insurrecciones en Chechenia. Con este contexto social y político llevando a que Islam y sus hermanos apenas pudieran ir a la escuela, y llevando a su familia a mudarse constantemente en busca de seguridad, siendo finalmente acogidos como refugiados de guerra en Alemania, en diciembre de 2007. </p>
                    <p>Debido al choque de culturas, y las complicaciones para hablar un nuevo idioma, los hermanos Dulatov tuvieron problemas para adaptarse al nuevo entorno, por lo que el entrenar MMA desde pequeños jugó un importantísimo rol en ayudarlos a adaptarse, pudiendo socializar con gente nueva y aprendiendo a defenderse para poder soportar confrontaciones y peleas. </p>
                    <h3>Islam Dulatov y el modelaje</h3>
                    <p>El mayor de los hermanos Dulatov, Djibril, sería el que le abriría el camino a Islam y al resto de sus hermanos en sus carreras como modelos. Debido a que este se estableció con su exitosa carrera en el modelaje para varias marcas prestigiosas, como Lavin, Gucci y Alexander McQueen.</p>
                    <p>Por lo que cuando Islam Dulatov cumplió 18, fue impulsado e introducido al mundo del modelaje por su hermano mayor, Djibril, influenciándolo en su decisión de perseguir una carrera en la moda, donde conseguiría trabajar para las marcas ya mencionadas, <b>Gucci y Hugo Boss</b>. De igual forma firmaría un contrato de exclusividad para para la marca de moda italiana <b>Versace</b>, y posando para revistas como <b>British Vogue</b> y <b>GQ</b>. </p>
                    <h3>Islam Dulatov MMA</h3>
                    <p>Sin embargo la verdadera pasión de Islam Dulatov no era el modelaje, sino que eran las artes marciales mixtas, por lo que en ningún momento dejó de entrenar. Incluso, cuando llegaba el momento de priorizar su carrera como modelo o su carrera como artista marcial mixto, siempre elegía lo segundo, llegando a contar que en una ocasión canceló una sesión de fotos por la que iba a cobrar $5000, que para alguien como él y su familia era mucho dinero, ya que recurrente tenía problemas económicos en su casa, porque la sesión era el mismo día en que tenía programada una pelea por la que apenas iba a cobrar poco más de 200 euros. Lo irónico y triste de esta historia, sería que al final la pelea no se terminaría haciendo porque su oponente se lesionó antes del combate, por lo que se quedó sin pelea y sin sesión de fotos. Aunque Dulatov afirma no sentirse afectado por esto, ya que ser un peleador es lo que ama de verdad. </p>
                    <YouTubeEmbed videoid='LGNnBj6abm8' />
                    <p>Islam comenzaría su carrera en las MMA como amateur, acumulando un récord de 4-1. Para posteriormente dar el salto profesional en 2019, debutando ante el alemán <b>Gjoni Palokaj</b> el 7 de septiembre de ese año en peso pluma, cayendo derrotado por decisión unánime. Lejos de desanimarlo aquel primer combate terminado en derrota, iniciaría una larga racha de victorias que lo terminarían haciendo llegar a la élite de las MMA.</p>
                    <p>Para su siguiente combate subiría de categoría, peleando en peso ligero ante <b>Kolja Predojevic</b>, y lograría una victoria por sumisión a los 34 segundos de la pelea. Eventualmente volvería a subir de categoría hasta llegar a peso wélter, donde pelea actulamente, acumulando una racha de 10 victorias consecutivas, con 6 de ellas siendo por nocaut y 4 por sumisión.</p>
                    <p>De esta forma acumulando un récord de 10-1, se le daría la oportunidad de pelear en el <b>Dana White&apos;s Contender Series</b> ante <b>Vanilton Antunes</b> el 8 de octubre de 2024, con la chance de ganar un contrato con la UFC si su actuación lograba sorprender a Dana White. Aquella noche terminaría cumpliendo de sobremanera al ganar por KO en el primer asalto, luego de conectar un codo que tumbaría a su rival. </p>
                    <p>De esta manera Islam Dulatov se ganaría un contrato con la compañía de artes marciales más grande del mundo, donde debutará en la cartelera preliminar el próximo sábado 19 de julio 2025, enfrentando al estadounidense <b>Adam Fugitt</b> en el <b>UFC 318</b>, cartelera histórica por ser en la que se retirará <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, enfrentando a <Link href='/peleadores/max-holloway'>Max Holloway</Link> por el <b>BMF</b>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}