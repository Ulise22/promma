import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
/* Images */
import hero from '@/assets/peleadores__images/0-100/0-10/alexander-volkanovski/volkanovski.jpg'
import oliveira from '@/assets/peleadores__images/0-100/0-10/charles-oliveira/charles_oliveira.jpg'
import poirier from '@/assets/peleadores__images/0-100/0-10/dustin-poirier/poirier.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Proxima Pelea Volkanovski',
    description: '¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?',
    openGraph: {
        title: 'Proxima Pelea Volkanovski',
        description: '¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?',
        url: 'https://fullmma.org/noticias/proxima-pelea-volkanovski'
    }
}

export default function ProximaPeleaVolkanovski () {
    return(
        <main>
            <ArticleHero title='¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski' subtitle='¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?' image={hero} date='2024-07-08' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> recientemente concedió una entrevista en el canal de Youtube de <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> donde habló y dejó un par de pistas sobre lo que le depara el futuro cercano a su carrera deportiva. </p>
                    <p>Vokanovski durante toda su carrera se había demostrado sumamente dominante, dando un aura de luchador invencible, habiendo ganado 23 de sus últimas 24 peleas hasta octubre de 2023. Lamentablemente para él, ahora mismo viene de 2 derrotas consecutivas, siendo la primera de estas cuando enfrentó en corto aviso a <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> por el título de peso ligero, y la segunda y última derrota es la que sufrió este año en su defensa del título de peso pluma, ante el español y actual campeón de la división <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, quien lo venció por nocaut en febrero de 2024 en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>.</p>
                    <p>Desde aquel día no vuelve a pelear. Sin embargo, luego de tomarse un merecido tiempo de descanso, parece haber vuelto con energía y más motivado que nunca, y ya habló de los posibles rivales para su regreso.</p>
                    <YouTubeEmbed videoid='a_h1vXyYb4c' />
                    <h3>Volkanovski vs Topuria 2</h3>
                    <p>La primera opción y la más evidente para el excampeón, es la revancha contra Ilia. Aunque su primer pelea haya acabado por KO, y es raro que se haga una revancha inmediata cuando este es el resultado, tiene sentido si tenemos en cuenta lo dominante que fue Volk durante su reinado como campeón y antes de la obtención del título, contando con 5 defensas exitosas del título, pasando por encima de peleadores históricos como <Link href='/leyendas/jose-aldo'>José Aldo</Link> o <b>The Korean Zombie</b>, sería hasta una falta de respeto no darle una revancha para alguien que además ha demostrado ser un hombre de compañía, peleando seguido y aceptando practicamente cada pelea que le ofrecieron.</p>
                    <p>El único incoveniente que parece haber para esta pelea, es que desde hace meses que parece estar pactada una pelea entre el actual campeón, <b>Ilia Topuria</b> y <Link href='/peleadores/max-holloway'>Max Holloway</Link>, quien luego de años venciendo a cada rival que se le pusó enfrente, y más teniendo en cuenta la destacada actuación que tuvo en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, noqueando a <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> en el último segundo de su pelea, tiene el derecho, al igual que Volkanovski a una pelea por el título. El enfrentamiento entre estos 2 se supone que tendría que darse para esta segunda mitad de año, lo que retrasa el plan de Volk de pelear por el título al menos hasta 2025, pero el australiano afirmó querer pelear este mismo año, y no querer esperar tanto para una pelea.</p>
                    <h3>Volkanovski en Peso Ligero: Volkanovski vs Oliveira / Volkanovski vs Poirier</h3>
                    <p>Como el mismo volkanovski lo mencionó, como la pelea entre Topuria y Holloway puede demorar demasiado su vuelta al octágono, la otra opción mientras espera para volver a luchar por el título, es realizar &quot;peleas emocionantes&quot;, como lo serían una hipotética pelea ante <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> quien viene de una derrota ante el campeón de peso ligero <b>Islam Makhachev</b> en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>, pero que es un peleador histórico, muy entrentenido de ver y que además enfrentó a varios de los peleadores a los que Volkanovski también tuvo que enfrentar. Es difícil saber si esta pelea se puede dar, ya que Poirier luego de su última pelea había dejado caer que quizás ya era el momento de retirarse, pero uno nunca sabe, más teniendo en cuenta que esta sería una tremenda pelea que los fans querrían ver.</p>
                    <Image className={styles.article__image} src={poirier} alt='' loading='lazy' />
                    <p>La otra opción que también sería muy interesante y que además yo veo más probable, es una pelea ente el brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> quien viene de una derrota por decisión ante <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> en el <b>UFC 300</b>. Sería muy interesante ver a estos 2 peleadores enfrentarse, que además son de los más queridos por los fanáticos. Además, salvo que Oliveira esté pensando en subir a la categoría de peso wélter, es difícil encontrarle otra pelea que no sea esta, ya que enfrentó a practicamente toda la división, y teniendo en cuenta que su última derrota lo deja en una posición complicada para volver a pelear por el título, en caso de querer olver a pelear otra vez este año, ¿qué otra opción tendría además de Volkanovski?</p>
                    <Image className={styles.article__image} src={oliveira} alt='' loading='lazy' />
                    <p>En conclusión, aunque para alguien de la jerarquía de Volkanovski la opción con más lógica es la de esperar a una revancha por el título ante Topuria, si de verdad piensa mantenerse activo es de esperar que suba de división para enfrentar a alguien ahí. Honestamente verlo enfrentar a cualquiera del top5 de peso ligero sería bastante interesante.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}