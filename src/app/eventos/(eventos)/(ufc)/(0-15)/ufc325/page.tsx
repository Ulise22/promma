import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc325.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!',
    description: "",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc324.e6adceb6.webp&w=828&q=65',
        title: 'UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc325'
    }
}

export default function UFC325 () {
    return(
        <main>
            <ArticleHero title="UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!" subtitle='¡Rafael Fiziev vs Mauricio Ruffy! ¡Quillan Salkilld vs Jamie Mullarkey!' image={hero} date='2026-01-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento tenemos esta noche en el UFC 325 en Sidney, Australia, con el campeón local de peso pluma <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> defendiendo su cinturón en una revancha ante el mexicano-brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, que viene de una gran victoria por nocaut ante su compatriota de Brasil <Link href='/peleadores/jean-silva'>Jean Silva</Link>. </p>
                    <p>Por si este evento estelar fuera poco, además hay 2 peleas a las que hay que prestar mucha atención, porque además de la estelar, son las candidatas a Pelea de la Noche. La primera es el evento coestelar de la noche que tendrá al #6 de Peso Ligero, el neozelandés <b>Dan Hooker</b> enfrentará al exmilitar francés y #8 de la división <b>Benoit Saint Denis</b>, en un combate que puede definir el futuro de la división y que sin dará que hablar. La segundo pelea es la que tendrá el luchador de Azerbayán ubicado #9 en la división de Peso Ligero <b>Rafael Fiziev</b>, quien se enfrentará al brasileño integrante de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <b>Mauricio Ruffy</b>, que actualmente está #14 en la división, en lo que sin duda será uno de los mejores combates de la noche. Además de un montón de peleas que estarán protagonizadas por luchadores australianos como es esperable en una cartelera como esta. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Lawrence Lui Derrota a Sulangragbo Por Decisión Dividida en la Final del Road To UFC</h2>
                    <p>En este primer combate de la noche, que era la final de peso gallo del Road To UFC, quien terminaría por ganar esta primer pelea sería el neozelandés <b>Lawrence Lui</b>, cuya mejor arma era la lucha, mediante la cual consiguió derribar en varias ocasiones a su rival chino, controlándolo y manteniendo a ras de lona y contra la reja durante gran parte del combate, lo que le sirvió para sumar puntos y eventualmente ganar la pelea. Por su parte el chino <b>Sulangragbo</b> se mostró muy fuerte en el striking, donde podía hacerle más daño a su rival del que recibía, pero flaqueó en la lucha, llegando muy cansado al tercer asalto debido a la cantidad de derribos que tuvo que defender. Por lo que pese a que hubo un primer asalto bastante cerrado, finalmente a ojos de 2 de los 3 jueces quien se terminó llevando el combate fue el luchador de Nueva Zelanda <b>Lawrence Lui</b>. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2></h2>
                    <p></p> */}
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}