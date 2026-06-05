import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/ilia_topuria-origen.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Ilia Topuria Origen',
    description: 'Descubre el origen de Ilia Topuria: nacido en Alemania, raíces georgianas y criado en Alicante (España). La historia completa de sus padres, infancia y ascenso como doble campeón invicto de la UFC. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Filia_topuria-origen.95f08b2b.webp&w=828&q=65',
        title: 'Ilia Topuria Origen',
        description: 'Descubre el origen de Ilia Topuria: nacido en Alemania, raíces georgianas y criado en Alicante (España). La historia completa de sus padres, infancia y ascenso como doble campeón invicto de la UFC. ',
        url: 'https://fullmma.org/articulos/ilia-topuria-origen'
    }
}

export default function IliaTopuriaOrigen () {
    return(
        <main>
            <ArticleHero title='Los Origenes de Ilia Topuria' subtitle='Cómo un niño nacido en Alemania, de padres georgianos se mudó a España para entrenar MMA y convertirse en doble campeón de la UFC' image={hero} date='2026-06-05' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> nació el 21 de enero de 1997 en Halle (Westfalia), Alemania. Aunque es de origen georgiano, debido a sus padres, quienes emigraron temporalmente en busca de mejores oportunidades durantes los turbulentos años 90 para su país de origen. Pese a que la familia Topuria volvería a Georgia pocos años después, se verían obligados a huir de nuevo cuando se desató la Guerra ruso-georgiana, emigrando a Alicante, España, donde Ilia se formó y comenzó a entrenar MMA, forjando una carrera hasta convertirse en el primer campeón español y georgiano en la historia de la UFC. </p>
                    <p>Pese a nacer en Alemania, Ilia nunca recibió la ciudadanía ni se siente aleman. Por el contrario, se siente más representado con sus raíces georgianas, sus valores y cultura, y con su identidad española, que fue forjando a lo largo de los años viviendo en Alicante. </p>
                    <h2>¿Donde Nació Ilia Topuria?</h2>
                    <p>Ilia Topuria Bendeliani nació el 21 de enero de 1997 en Halle (Westfalia), Alemania. No es aleman, ni por origen ni por ciudadanía, sino que es georgiano por sus padres, y español por ciudadanía, que recibió en 2024, ya siendo campeón de la UFC, luego de noquear al histórico australiano <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>. </p>
                    <h2>Los Padres de Ilia Topuria y sus Raíces Georgianas</h2>
                    <p>Su padre Zaza Topuria y su madre Inga, son originarios de Georiga, específicamente de la región de Abjasia. Ambos se vieron obligados a huir de su tierra debido a conflictos armados, políticos y sociales propios de la época post-soviética en los años 90. Se fueron a vivir a Alemania, donde nacerían sus hijos Aleksandre e Ilia Topuria. </p>
                    <p>Cuando Ilia tenía apenas unos 6-7 años, toda la familia regresó a Georgia, donde los pequeños hermanos tendrían un acercamiento más serio con los deportes de combate, entrenando lucha grecorromana en la escuela. Pero la inestabilidad política provocada por la guerra contra Rusia, no les permitió estar mucho tiempo en su tierra, teniendo que emigrar nuevamente, esta vez a España. </p>
                    <h2>La llegada de Ilia Topuria a España</h2>
                    <p>En 2012, a los 15 años, El Matador se estableció en Alicante, España. Él junto a su hermano, entraron al <b>Climent Club</b>, el cual fue un momento clave en sus vidas, un punto de inflexión, dado que ambos, bajo la tutela de los hermanos argentinos <b>Jorge y Agustín Climent</b> se formaron en las artes marciales mixtas, pasando de la lucha grecorromana al BJJ y a las MMA. </p>
                    <YouTubeEmbed videoid='UQkvJmvHWZY' />
                    <p>Fue durante este tiempo que los hermanos Topurias conseguirían un hito histórico para su país de origen, Georgia, convirtiéndose en los primeros georgianos en alcanzar el cinturón negro en jiu-jitsu brasileño, otorgado por los hermanos Climent. </p>
                    <p>Allí en España, antes de lograr convertirse en un peleador profesional, Ilia Topuria tuvo que trabajar como vigilante de seguridad, como cajero en un supermercado, y colocando hamacas en las playas de Alicante para ayudar a su familia economicamente. </p>
                    <p>España le dió las oportunidades que no pudo conseguir en otro lado, le dió la estabilidad que necesitaba para desarrollarse, y se convirtió en un segundo hogar para él y su hermano. Es por eso que elige representarla en la UFC, llevando siempre su bandera junto a la de Georgia, repitiendo en numerosas entrevistas que &quot;mi sangre es georgiana, pero yo he madurado en España&quot;.</p>
                    <p>Ilia Topuria es de esos inmigrantes que se adaptan a su nuevo país como si siempre hubieran formado parte de él, hablando un perfecto español, georgiano e inglés, adoptando el apodo &quot;El Matador&quot; para acompañarlo en su carrera, y siendo un gran aficionado del Real Madrid. </p>
                    <h2>Vida Personal de Ilia Topuria</h2>
                    <ul>
                        <li>Tiene 2 hijos: Hugo (2019) y Giorgina (2024). </li>
                        <li>Su Hermano Aleksandre Topuria también es peleador de la UFC y formma parte fundamental de su equipo. </li>
                        <li>Sus padres siguen siendo su mayor apoyo; con su padre trabajando incansablemente para sacar adelante a su familia. </li>
                    </ul>
                    <h2>¿Ilia Topuria es Georgiano o Español?</h2>
                    <p>Ilia Topuria se define como hispano-georgiano. Representa ambos países y se niega a elegir entre uno de los 2, de hecho, ha declarado que &quot;Es como tener 2 hijos, no puedes elegir&quot;. </p>
                    <YouTubeEmbed videoid='j8mS8_y7cM0' />
                    <p>Es un héroe en Georgia, siendo el primer luchador en conseguir un cinturón negro en bjj y siendo el primer campeón nacional de UFC, y es un orgullo para España, donde lo tratan como propio, donde tiene la mayor parte de sus fanaticos, y donde incluso fue recibido por el presidente del país, recibiendo la nacionalidad y pasaporte español por vía rápida. Además de ser embajador de ambos países. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}