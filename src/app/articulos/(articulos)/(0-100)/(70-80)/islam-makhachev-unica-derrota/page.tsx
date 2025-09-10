import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/makhachev-derrota.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Islam Makhachev Unica Derrota',
    description: '',
    openGraph: {
        images: '',
        title: 'Islam Makhachev Unica Derrota',
        description: '',
        url: 'https://fullmma.org/articulos/islam-makhachev-unica-derrota'
    }
}

export default function MakhachevDerrota () {
    return(
        <main>
            <ArticleHero title='La Única Derrota de Islam Makhachev' subtitle='Primer derrota profesional en las MMA del luchador de Daguestán Islam Makhachev. ' image={hero} date='2025-09-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La única derrota que ha sufrido en la UFC <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> fue contra el brasileño <b>Adriano Martins</b> el 3 de octubre de 2015 en el UFC 192, cayendo por nocaut en el primer asalto de la pelea. </p>
                    <p>Hoy en día lo que conocemos de Makhachev es esta faceta de campeón invencible, que destroza a todos sus rivales con victorias aplastantes, llegando a ser campeón de peso ligero de la UFC, luego de someter en el segundo asalto de la pelea a <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. Defendiendo y acumulando victorias hasta convertirse en el campeón con más defensas del título en la historia de las 155lbs. </p>
                    <p>Y aunque luego de que ni <Link href='/peleadores/alexander-volkanovski'>Volkanovski</Link>, ni <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, ni <Link href='/peleadores/renato-moicano'>Renato Moicano</Link>, ni <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> hayan podido derrotarlo, Islam Makhachev parecería ser invencible, lo cierto es que hace muchos años hubo un peleador capaz de derrotarlo y de quitarle su récord perfecto. </p>
                    <p>Para encontrar una derrota de Makhachev, hay que viajar 10 años al pasado, en el 2015. Cuando el ruso ya había debutado en la UFC con una victoria, luego de someter en el segundo asalto al estadounidense <b>Leo Kuntz</b>. Islam llegaba con un récord perfecto de 12-0 a su segundo combate en la compañía de artes marciales mixtas más grande del mundo. </p>
                    <p>El combate se daría contra el brasileño <b>Adriano Martins</b>, que al igual que él, tenía sus bases de pelea en la lucha. Se enfrentarían el 3 de octubre de 2015 en el <b>UFC 192</b>, donde también estaría el entonces campeón de semipesados <Link href='/peleadores/daniel-cormier'>Daniel Cormier</Link>, defendiendo su cinturón contra <b>Alexander Gustafsson</b>. </p>
                    <p>Como suele ser usual, aunque no menos curioso, al ser tanto Martins como Makhachev luchadores natos, sus estilos quedaban anulados, por lo que se dió todo el combate de pie, con Islam mostrándose muy seguro con su striking, siendo el primero en lanzar golpes y el primero en conectar. </p>
                    <p>Aunque la pelea había comenzado siendo bastante tranquila, con ambos luchadores siendo algo contemplativos, y con Makhachev siendo ligeramente le que más llevaba la iniciativa. El momento fatídico para el luchador ruso llegó luego de pasado un minuto y medio de la pelea, cuando intentó lanzar un volado con la izquierda que no llegó a conectar, aprovechando entonces el brasileño para conectar un gancho con la mano derecha que tumbaría inmediatamente al peleador de Daguestán. Adriano Martins apenas llegaría a conectar un golpe más antes de que el árbitro intervenga para darle la victoria por TKO, al ver que ese primer golpe ya había dejado afuera de la pelea a Makhachev. </p>
                    <YouTubeEmbed videoid='2qHVbsI9vYs' />
                    <h2>Que Fue de la Vida del Peleador que le Ganó a Islam Makhachev</h2>
                    <p>10 años después de esa pelea es curioso ver como siguieron las carreras de uno y otro peleador. Dado que a la historia de Makhachev la conocemos todos: desde esa pelea acumuló 15 victorias consecutivas, se convirtió en campeón de peso ligero, y se volvió el mejor peleador en la historia de la división al defender su cinturón más veces que nadie. </p>
                    <p>Por otro lado la vida de Martins no fue tan sencilla, luego de ganarle a Makhachev, acumuló una racha de 6 peleas sin ganar, perdiendo 5 y quedando un combate sin resultado luego de un piquete de ojo accidental. Con la UFC desprendiéndose de sus servicios luego de perder 2 peleas consecutivas. Actualmente tiene 42 años (cumplirá 42 en diciembre) y sigue peleando, con su última pelea siendo en febrero de este mismo 2025, sufriendo una derrota por decisión unánime ante un peleador llamado <b>Alexander Sarnavsky</b> en una promotora llamada <b>AMC</b>, dejando su récord profesional en 29-13. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}