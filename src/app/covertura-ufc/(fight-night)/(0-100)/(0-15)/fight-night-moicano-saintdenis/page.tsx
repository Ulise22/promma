import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/moicano_vs_saintdenis.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Moicano vs Saint Denis',
    description: '',
    openGraph: {
        title: 'Moicano vs Saint Denis',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-moicano-saintdenis'
    }
}

export default function MoicanoSaintDenis () {
    return(
        <main>
            <ArticleHero title='UFC FRANCIA: ¡Renato Moicano Derrota a Benoit Saint Denis TKO en el Segundo Asalto! ¡Imavov Derrota a Allen Por Decisión Unánime! ¡Ailín Pérez Somete en el Primer Asalto a Zhelezniakova! ' subtitle='Noche de UFC en Francia donde tuvimos la victoria de la argentina Ailín Pérez en el primer asalto por sumisión y la victoria del español Daniel Barez por decisión unánime.' image={hero} date='2024-09-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy tenemos evento de UFC en Francia, con una larga lista de luchadores franceses que serán protagonistas de esta noche de MMA. El evento estará encabezado por el brasileño <b>Renato Moicano</b>, quien viene de una espectácular victoria en el <Link href='/covertura-ufc/ufc300-early-prelims'>UFC 300</Link>, donde logró someter a su rival en el segundo asalto, y por el francés <b>Benoit Saint Denis</b>, quien viene de una derrota por nocaut ante el histórico de la división de peso ligero <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en el <Link href='/covertura-ufc/ufc299'>UFC 299</Link>.</p>
                    <h2>Daniel Barez Derrota a Victor Altamirano Por Decisión Unánime</h2>
                    <p>En esta tremenda pelea que nos regalaron el español y el mexicano, los jueces finalmente terminaron por decantarse por Dani Barez, quien se llevó la pelea por decisión unánime. </p>
                    <p>Durante el primer asalto el español fue el claro dominador del combate, estando cerca de noquera con una tremenda mano derecha que llevó a su rival al piso. En el segundo asalto la pelea estuvo más cerrado, con un Altamirano que conectó más golpes, pero que sufrió 2 knockdowns por parte del español que lo derribaron al piso. </p>
                    <p>En el tercer asalto el claro dominador fue el peleador mexicano, pero que ya habiendo perdido los 2 asaltos anteriores, terminó por perder la pelea. Sin embargo ambos peleadores nos ofrecieron un lindo espectáculo.</p>
                    <h2>Ailín Pérez Somete a Daria Zhelezniakova en el Primer Asalto</h2>
                    <p>La argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link> se luce en la pelea y consigue una tremenda sumisión con un triángulo de brazo en el primer asalto que le otorga la victoria. </p>
                    <p>Con esta victoria, Ailín consigue su cuarta victoria consecutiva, acumulando un récord de 11-2, y siendo la única peleadora de Argentina ranqueada en el top #15 de su división. </p>
                    <h2>Charriere Noquea a Miranda en el Segundo Asalto</h2>
                    <p>En lo que es la segunda pelea de la cartelera estelar, el francés consiguió un gran KO a inicios del segundo asalto. Durante el combate se notó mucho como el brasileño buscaba concretar un derribo constantemente para llevar la pelea al suelo, que era un terreno que se le hacía más cómodo, pero sin embargo, Charriere fue capaz de notar esto, defendiendo los intentos de derribo durante el primer asalto. Ya entrados en el segundo asalto, el francés necesito menos de un minuto para conectar el golpe que dejaría KO a su rival, y que le otorgaría la victoria en la pelea.</p>
                    <h2>Nassourdine Imavov Vence a Brendan Allen Por Decisión Unánime</h2>
                    <p>El nacido en Daguestán y nacionalizado francés logra llevarse la victoria por decisión de los jueces, de lo que fuera capaz de revertir un primer asalto en el que dominó por completo Brendan Allen. Sin embargo, en los últimos 2, Imavov fue capaz de defender todos los intentos de derribos de su rival, logrando coonectar las mejores combinaciones de golpes, tanto de pie como en el suelo, que le terminaron por otorgar la victoria. </p>
                    <h2>Renato Moicano Gana a Benoit Saint Denis Por Parada Médica</h2>
                    <p>El brasileño logra imponerse de visitante al francés, luego de un primer asalto en el que dominó de principio a fin a su rival, terminó por ocasionarle un corte en el ojo derecho de Saint Denis que le terminó por pasar factura. </p>
                    <p>El francés pudo continuar un asalto más, pero una vez finalizado el segundo asalto, al ser revisado por el médico de la UFC, este decidió que el peleador no se encontraba en condiciones óptimas para seguir luchando, por lo que la pelea se la terminó llevando el brasileño <b>Renato Moicano</b>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}