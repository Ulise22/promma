import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/alex_pereira-triple_campeon.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Alex Pereira Triple Campeón',
    description: "¿Puede Alex Pereira convertirse en el primer triple campeón de la UFC? Analizamos el histórico hito que podría alcanzar Alex Pereira de ganarle a Ciryl Gane: Convertirse en el primer triple campeón de la UFC.",
    openGraph: {
        images: '',
        title: 'Alex Pereira Triple Campeón',
        description: "¿Puede Alex Pereira convertirse en el primer triple campeón de la UFC? Analizamos el histórico hito que podría alcanzar Alex Pereira de ganarle a Ciryl Gane: Convertirse en el primer triple campeón de la UFC.",
        url: 'https://fullmma.org/noticias/alex-pereira-triple-campeon',
    }
}

export default function AlexPereiraTripleCampeon () {
    return(
        <main>
            <ArticleHero title='¿Será Alex Pereira el Primer Triple Campeón de la UFC?' subtitle="El histórico hito que podría alcanzar Alex Pereira de ganarle a Ciryl Gane: Convertirse en el primer triple campeón de la UFC." image={hero} date='2026-06-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/alex-pereira'>Alex Pereira</Link> no es triple campeón todavía, pero podría serlo si logra vencer a <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> en su próximo combate en la histórica velada en <Link href='/noticias/ufc-casa-blanca'>La Casa Blanca</Link>, convirtiéndose en el primer triple campeón de la UFC, luego de alcanzar la gloria en Peso Medio, Peso Semipesado y finalmente en Peso Pesado.</p>
                    <h2>¿Que significaría que Alex Pereira sea Triple Campeón?</h2>
                    <p>Que <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> se convierta en el primer triple campeón de la UFC significaría un hito difícil de medir, dado que no es sólo que nadie lo haya logrado en la historia de la organización, sino que no hubo nadie que siquiera estuviera cerca de intentarlo. Más allá de que el mérito y la proeza principal se va a ver si Alex gana su próxima pelea, ya el hecho de presentarse a pelear lo convierte en el primer peleador de la UFC en siquiera intentar ser triple campeón, siendo el único que pelearía por el cinturón en 3 divisiones diferentes. </p>
                    <p>En la UFC han habido un total de 11 dobles campeones, con <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> siendo el último en conseguirlo en el <Link href='/eventos/ufc322'>UFC 322</Link>, al derrotar al entonces campeón <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>. Pero ninguno de esos 11 campeones siquiera se planteó la posibilidad de buscar un tercer campeonato, ninguno menos Alex, que se enfrenta a un desafío sin precedentes.</p>
                    <p>Hay peleadores que han peleado en varias divisiones sin destacar particularmente en ninguna de ellas. Hay algunos que fueron muy exitosos en una división, pero que al momento de buscar triunfar en otra caen derrotados de forma contundente, como le sucedió a peleadores como <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> o <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>. Hay otros peleadores, aún menos, que son capaces de replicar el éxito de una categoría en otra diferente, pero que nunca van más allá, como <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link> o <Link href='/leyendas/randy-couture'>Randy Couture</Link>. Finalmente, hay aún menos que son capaces de triunfar en 2 divisiones, y que ocasionalmente pelean en otra división diferente sin el mismo nivel mostrado anteriormente, como <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, quien fue campeón de UFC en peso pluma y peso ligero, y que ocasionalmente pelea en la división de peso wélter, aunque no al nível de élite que supo mantener en las divisiones anteriores. Pero pelear en 3 divisiones, y triunfar en todas, es algo que jamás hemos visto.</p>
                    <p>Es por eso, que pese a tener menos peleas que muchos peleadores de MMA, si el brasileño consiguiera esta proeza de magnitud incalculables, podría plantear debates que lo definirían como el mejor peleador de la historia, incluso por encima de figuras como <Link href='/peleadores/jon-jones'>Jon Jones</Link>, porque ese triple cinturón significaría un logro sin precedentes, y un argumento de peso para afirmar algo así. </p>
                    <h2>¿Puede Alex Pereira ser Triple Campeón?</h2>
                    <p>Definitivamente si hay alguien que puede lograr el hito de ser triple campeón de la UFC es Alex Pereira. Por el momento las casas de apuestas muestran mucha paridad entre ambos luchadores, bastante cercano al 50/50, que es algo esperable por la calidad de los peleadores que van a enfrentarse. </p>
                    <p>Al caso, quien debería partir como ligero favorito es el francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>, porque va a estar peleando en su peso natural, en una división en la que ya está acostumbrado a luchar, porque ya fue campeón interino en esa categoría y porque el que está asumiendo un riesgo y tomando un reto complicado de lograr es Alex Pereira. </p>
                    <p>Aún así, yo en lo personal creo que Alex tiene todas las herramientas para ganar y hacer historia en <Link href='/noticias/ufc-casa-blanca'>La Casa Blanca</Link>, primero porque ya en las divisiones de peso anteriores ha demostrado tener un poder en las manos sobrenatural, que al subir de peso solamente puede mejorar, porque en las imagenes que subió a sus redes sociales se puede ver que su físico está impecable pese a los kilos de más que tiene, porque el estilo de su rival no lo perjudica, porque ya no tiene que pasar por los infernales cortes de peso, y porque desde que llegó a la UFC no para de sorprendernos. </p>
                    <p>Lo único que lo puede perjudicar de subir de división es que no sabemos que tanta velocidad pierda debido a esto, lo cual es un factor clave teniendo en cuenta que su rival Ciryl Gane es un luchador muy rápido para su peso. Además que los rivales obviamente soy diferentes, no sólo la pegada de los pesos pesados es claramente superior, sino que en caso de ser derribado tiene que sacarse de encima luchadores mucho más pesados. </p>
                    <YouTubeEmbed videoid='h9KBcib8pHc' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}