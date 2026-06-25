import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/new_rakings.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Cómo Funciona el Nuevo Ranking de UFC',
    description: "Descubre cómo funciona el nuevo ranking de UFC con Meta: un sistema basado en Elo, datos objetivos y machine learning que elimina sesgos humanos. Diferencias, ventajas y críticas del Meta UFC Rankings. ",
    openGraph: {
        images: '',
        title: 'Cómo Funciona el Nuevo Ranking de UFC',
        description: "Descubre cómo funciona el nuevo ranking de UFC con Meta: un sistema basado en Elo, datos objetivos y machine learning que elimina sesgos humanos. Diferencias, ventajas y críticas del Meta UFC Rankings. ",
        url: 'https://fullmma.org/noticias/como-funciona-el-nuevo-ranking-de-ufc',
    }
}

export default function UFCNewRanking () {
    return(
        <main>
            <ArticleHero title='¿Cómo Funciona el Nuevo Ranking de UFC?' subtitle="El nuevo sistema de rankings de UFC en asociación con Meta que reemplaza a los periodistas y promete ser más justo." image={hero} date='2026-06-25' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><b>El nuevo sistema de rankings de la UFC, llamado &quot;Meta UFC Rankings&quot;</b>, se lanzó este pasado 22 de junio en asociación con la empresa META. Buscará ir reemplazando progresivamente el sistema de rankings anterior, ofreciendo un enfoque más objetivo, basado en datos, utilizando un sistema matemático similar al ELO (utilizado en ajedrez para medir el nivel de los jugadores), donde cada peleador recibirá un número de puntos basado en el desempeño que hayan tenido en sus últimos combates, ocupando de esta forma un lugar en los rankings dependiendo del número de puntos que tengan. </p>
                    <p>Aunque en un comienzo coexistirán ambos sistemas, la idea es que el nuevo sistema diseñado por la empresa de <b>Mark Zuckerberg</b> META, vaya reemplazando al antiguo panel de medios que podía caer en criterios subjetivos y más personales. El nuevo sistema de META promete dar un enfoque más objetivo, basado en datos, y automático que analizará el rendimiento real de cada peleador en el octágono. Por eso en este articulo explicaremos exactamente como funciona el nuevo sistema, que cambios tiene respecto al anterior, que ventajas y desventajas ofrece y qué significará para los peleadores a partir de ahora. </p>
                    <h2>¿Cómo funciona el META UFC Rankings?</h2>
                    <p>El <b>Meta UFC Rankings</b> no es una IA que ve las peleas y decide la posición de cada peleador, sino que es un modelo matemático basado en el sistema de Elo, afinado con machine learning para darle una puntuación numérica a cada peleador que se actualiza automáticamente según el rendimiento de los peleadores. Para ello utiliza diferentes métricas, dándole un orden de importancia a cada una de ellas, dichas métricas son: </p>
                    <ul>
                        <li><b>Calidad del Oponente: </b> A quién venciste es lo más importante, vencer a alguien que estaba por encima en los rankings pesa mucho más que cualquier otra cosa. </li>
                        <li><b>Tipo de Victoria: </b>Las finalizaciones (KO, TKO, Sumisiones) dan más puntos que las victorias por decisión, independientemente de lo dominante que haya sido la victoria por decisión. </li>
                        <li><b>Trayectoria y momento actual del peleador: </b> Las victorias recientes pesan más que las antiguas, que irán perdiendo valor con el tiempo. </li>
                        <li><b>Sensibilidad por División: </b> Hay ajustes específicos a los criterios dependiendo de la división de peso. </li>
                        <li><b>Actividad: </b> Si un peleador lleva alrededor de 18 meses sin pelear, su rating caerá. </li>
                    </ul>
                    <p>Este nuevo ranking, al calcularse automáticamente, se actualizará cada lunes después de un evento oficial de UFC, un día antes de los martes a los que estamos acostumbrados. </p>
                    <YouTubeEmbed videoid='7ZpOduYOgkI' />
                    <h2>Diferencias Entre Ambos Sistemas de Ranking en la UFC</h2>
                    <p>En comparación con el ranking anterior, este se actualiza de manera automática un día antes, todos los lunes luego de un evento oficial de UFC. Además en el nuevo rankings desaparece por completo la lista de los Pound-for-Pound (P4P), debido a que es demasiado subjetiva al estar comparando peleadores de divisiones diferentes. </p>
                    <p>El nuevo ranking en teoría es más transparente, dado que se basa en un sistema matemático que ya se aplica a otros deportes o competencias como en el ajedrez, que usa el Elo para medir el nivel de los jugadores. Mientras que en el sistema anterior, sabíamos los rankings eran hechos por un panel de 22 medios que entregaban sus rankings a la UFC, pero los votos eran anónimos, no sabíamos quiénes los emitían, ni que criterios utilizaban. </p>
                    <p>Probablemente la mayor diferencia que vamos a notar, es el valor que le da el nuevo sistema a la actividad de los peleadores, castigando demasiados a los luchadores que llevan mucho tiempo sin pelear, y que tienen mucho tiempo desde su última pelea, con el ejemplo más de esto, siendo víctima del nuevo sistema, el mexicano <b>Yair Rodriguez</b>, quien pasó de estar #5 en la división que tiene de campeón a <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, a desaparecer completamente de los rankings. </p>
                    <h2>Ventajas del Meta UFC Rankings</h2>
                    <ul>
                        <li><b>Mayor Objetividad: </b> Reduce las narrativas de que ciertos peleadores están en el lugar que están por marketing.</li>
                        <li><b>Transparencia: </b> Usa reglas matemáticas y predecibles. </li>
                        <li><b>Reconpensa el Rendimiento Real: </b>A quién venciste, cómo y cuando es lo que importa. </li>
                        <li><b>Actualizaciones más rápidas: </b> Ahora los rankings estarán disponibles un día antes.</li>
                    </ul>
                    <h2>Desventajas del Meta UFC Rankings</h2>
                    <ul>
                        <li><b>Perdida del Análisis Humano: </b> Al solamente utilizarse ecuaciones matemáticas, se pierde el análisis del cotexto, las lesiones, los estilos que se enfrentaban, los cortes de peso y todo lo que puede terminar influyendo en el resultado de una pelea. </li>
                        <li><b>Cambios Bruscos Iniciales: </b> Algunos peleadores subieron de manera repentina en los rankings, como el peruano <b>Kevin Borjas</b>, y otros que llevaban años ranqueados desaparecieron, como <b>Rafael Fiziev</b>, <b>Yair Rodriguez</b>, <b>Derrick Lewis</b> y <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>. </li>
                        <li><b>Limitado a Datos Medibles: </b> No es una IA que analiza las peleas, por lo que no puede distinguir entre peleas cerradas, con decisiones polémicas o injustas, una victoria por decisión vale lo mismo en cualquier circunstancia. </li>
                    </ul>
                    <h2>Conclusión</h2>
                    <p>El nuevo ranking parece ofrecer criterios más objetivos y transparentes, siendo más dependiente de datos y formulas matématicas que de opiniones de periodistas. Algunos de los cambios que representa parecen ser muy positivos, como el dar mayor valor a las finalizaciones, o como el recompensar a los peleadores más activos, obligando a los luchadores a pelear seguido si quieren mantener su lugar en los rankings. </p>
                    <YouTubeEmbed videoid='R39-ua31ug8' />
                    <p>Pero su falta de entendimiento de los contextos puede llevar a rankings que quizás no refleje del todo la realidad de los deportistas. </p>
                    <p>¿Tu qué opinas sobre el nuevo sistema de ranking de la UFC? ¿Te gusta más o prefieres el sistema tradicional con el panel de medios? No dudes en seguirnos en nuestras redes sociales y comentárnoslo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}