import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/evloev_postfight.jpeg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Movsar Evloev Sobre Ganarle a Ilia Topuria',
    description: "Movsar Evloev en la conferencia de prensa después de su pelea con Alajamain Sterling en el UFC 310, dejó en claro que cree merecer pelear por el título, y que cree que tiene lo necesario para derrotar a Ilia Topuria. ",
    openGraph: {
        title: 'Movsar Evloev Sobre Ganarle a Ilia Topuria',
        description: "Movsar Evloev en la conferencia de prensa después de su pelea con Alajamain Sterling en el UFC 310, dejó en claro que cree merecer pelear por el título, y que cree que tiene lo necesario para derrotar a Ilia Topuria. ",
        url: 'https://fullmma.org/noticias/evloev-sobre-pelea-con-ilia-topuria'
    }
}

export default function MovsarEvloevSobrePeleaConTopuria () {
    return(
        <main>
            <ArticleHero title='Movsar Evloev Cree Poder Ganarle a Ilia Topuria y Pide Pelear por el Cinturón' subtitle="El luchador ruso Movsar Evloev, dijo tener lo necesario para derrotar al campeón español Ilia Topuria, luego de vencer al estadounidense Aljamain Sterling en el UFC 310" image={hero} date='2024-12-08' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El luchador ruso, Movsar Evoloev, que acaba de hacer tener una estupenda actuación ante el excampeón de peso gallo Aljamain Sterling en la noche de <Link href='/covertura-ufc/ufc310'>UFC 310</Link>, consiguiendo una victoria por decisión unánime en la que extendería su récord invicto a 19-0, siendo el único invicto ranqueado junto con el actual campeón <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>. Además demostró ser un luchador muy completo, mostrándose fuerte tanto en el striking como en la lucha. Dejó unas declaraciones interesantes en la conferencia de prensa post-pelea, en la que, entre otras cosas, habló de la posibilidad de pelear con el actual campeón de la división, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, y de cómo cree que él tiene la respuesta y las herramientas para vencerlo. </p>
                    <YouTubeEmbed videoid='PdmP3MgwAZ8' />
                    <p>Primero dejó en claro que cree merecer una oportunidad por el título, pero que no le importa que no se la den y que tenga que seguir peleando, concretamente dijo: &quot;Sí, creo que me merezco una oportunidad por el título, pero sino denme otra pelea. No voy a esperar otro año para pelear otra vez, asi que en 2 meses tal vez y ya estoy listo para volver a pelear&quot;. Recordemos que hasta hace poco, desde el 2022 Evloev venía peleando al ritmo de una pelea por año, teniendo tan sólo 3 combates entre 2022 y 2024, sin contar el de anoche. </p>
                    <p>Luego, al ser consultado sobre si cree que lo que hizo anoche fue suficiente para que Dana White le de una pelea por el título, dijo: &quot;No me importa honestamente, si no cree que merezco una oportunidad por el título que me de otra pelea, voy a seguir peleando incluso hasta llegar al 100-0, y quizás ahí me den una pelea titular&quot;.</p>
                    <p>Hablando concretamente de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, no tuvo nada más que buenas palabras, hablando desde el respeto, aunque declarando creer tener lo necesario para ganarle: &quot;Creo que es un gran peleador, y me parece que todos piensan lo mismo, acaba de derrotar a 2 leyendas (<Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> y <Link href='/peleadores/max-holloway'>Max Holloway</Link>). Es fuerte, su wrestling es bueno, su striking es excelente. Pero como dije, ahora mismo sólo estoy ganando en la división de peso pluma, por lo que tengo el suficiente poder y voluntad para parar a este tipo, pero no tengo nada más que respeto por este hombre, lo único que necesito de él es su título&quot;.</p>
                    <p>Recordemos que el mismo <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> se había referido a una posible pelea con Movsar Evloev en febrero, cuando acababa de convertirse en campeón al noquear a Alexander Volkanovski, argumentando que era momento de darle la oportunidad a los peleadores jovenes y al nuevo talento de la división, pero que aún así, creía que Movsar debía finalizar a alguien para ganarse la oportunidad. Concretamente había dicho: &quot;Mira, Movsar es una buena pelea para mí, me encantaría enfrentarlo, pero el tipo tiene 8 peleas en la UFC y 8 decisiones, ninguna sumisión, ningún nocaut... Vamos hombre, tiene que finalizar a alguien. Quizás podamos encontrarle a alguien en su ciudad natal o no sé, quizás pueda pelear con su papá y finalizarlo, pero tiene que finalizar a alguien. Porque con el récord que tiene ahora se ve bien, está invicto, pero el tío no acabo con nadie, así que tiene que hacer algo con eso&quot;. </p>
                    <YouTubeEmbed videoid='W8t9B_j2Qc8' />
                    <h2>Evloev sobre Ilia Topuria peleando contra Islam Makhachev</h2>
                    <p>Fue consultado por uno de los periodistas, sobre cómo vería una pelea entre el español y su compatriota campeón actual de la división de peso ligero, Islam Makhachev, concretamente sobre las declaraciones de Ilia en las que dijo que podría someterlo, a lo que Movsar declaró: &quot;No creo que respecto a Islam su wrestling sea lo suficientemente bueno, pero puede vencer a muchos peleadores de peso ligero, porque no es un peso pluma pequeño, y es lo suficientemente fuerte. Por ejemplo, cuando yo subí de la división de peso gallo a la división de peso pluma, muchos creían que no sería lo suficientemente fuerte, y ahora muchos creen que soy el más fuerte de esta división. A veces cuando subís tenés el suficiente poder, y sabemos que él carga mucho peso, por lo que puede pelear en peso ligero. Pero antes de que suba, que pelee conmigo&quot;. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}