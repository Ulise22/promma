import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/fallar_peso_ufc.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: '¿Qué pasa si no das el peso en UFC?',
    description: 'Descube que sucede cuando un peleador de UFC llega pesando más de lo acordado al pesaje, qué sanciones pone la UFC y cómo se resuelven estas situaciones. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffallar_peso_ufc.feb34349.webp&w=828&q=65',
        title: '¿Qué pasa si no das el peso en UFC?',
        description: 'Descube que sucede cuando un peleador de UFC llega pesando más de lo acordado al pesaje, qué sanciones pone la UFC y cómo se resuelven estas situaciones. ',
        url: 'https://fullmma.org/articulos/que-pasa-si-no-das-el-peso-en-ufc'
    }
}

export default function FallarPesoUFC () {
    return(
        <main>
            <ArticleHero title='¿Qué pasa si no das el peso en UFC?' subtitle='Qué penalizaciones sufren los peleadores de la UFC cuando no dan el peso previo a una pelea.' image={hero} date='2025-08-18' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Las penalizaciones que pone la UFC para los peleadores que no den el peso previo a la pelea suelen ser sanciones económicas, que implican que el luchador que está en falta ceda un porcentaje de su bolsa al luchador rival. Aunque también fallar el peso podría implicar perder los bonos por desempeño, privarte de ganar el cinturón (si aplica al caso), y en casos más extremos cancelar la pelea o reprogramarla. </p>
                    <p>Lo más usual cuando algo como esto sucede, es que la UFC le dé al peleador una hora más para intentar recortar el peso que falte, si pasado el tiempo el luchador no fue capaz de cumplir en la báscula, dependiendo por cuánto es que se falló, la compañía suele intentar negociar con el peleador rival para que la pelea se dé en un peso pactado, superior al que debía ser en un primer momento. </p>
                    <p>Aunque en caso de aceptar la pelea, como penalización para el luchador que no fue capaz de dar el peso, se le descontará entre el 20% y 30% de sus ganancias, porcentaje que varía dependiendo de lo alejado al peso pactado que estuvo el luchador. Y en compenzación para le luchador que si cumplió con el peso que había que dar, por haber aceptado la pelea se quedará con ese 20% o 30% que se le descontó a su rival. Además, como castigo extra por no dar el peso oficial, el peleador quedará privado de la posibilidad de ganar alguno de los bonos por desempeño que entrega la UFC. </p>
                    <p>Por el contrario, si el pelador que sí dió el peso no quiere pelear en esas condiciones, se cancela la pelea que se había programado, y puede buscarse un reemplazo de último momento que sí pueda dar el peso la velada, o puede quitarse la pelea de la cartelera directamente, como ocurrió más reciente en el <Link href='/eventos/ufc319'>UFC 319</Link>, con el luchador estadounidense <b>Bryan Battle</b>, fallando en la balanza por 5lbs, pesando 190lbs cuando debía dar 185lbs, en su combate con <b>Nusulton Ruziboev</b>, que aunque en un primer momento se estaba por dar en peso pactado, finalmente se canceló y se retiro el combate de la cartelera. </p>
                    <YouTubeEmbed videoid='ivNVz3c6_1U' />
                    <p>Es importante mencionar que la UFC suele dar un pequeño margen de 1 libra para que los luchadores den el peso. Esto quiere decir que si un luchador va a pelear en la división de peso ligero, es decir, la división de 155lbs, el peleador puede dar 156lbs y aún estar en peso para pelear sin sufrir mayores complicaciones. </p>
                    <p>Finalmente si lo que está en juego en la pelea es el Cinturón de la UFC, de igual forma puede cancelarse directamente la pelea y/o posponerse para otro evento, o puede darse la pelea de igual forma, pero con el luchador que falló el peso siendo privado de la posibilidad de ganar el cinturón. </p>
                    <p>Un ejemplo muy recordado de esto último fue lo que sucedió con <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, quien debía defender su cinturón de campeón de peso ligero en el <b>UFC 274</b>, enfrentando para esto al estadounidense <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>. Sin embargo, el día del pesaje llegó pesando 155,5lbs, perdiendo su cinturón en báscula, y por sólo media libra. </p>
                    <YouTubeEmbed videoid='XYCndaCQ3dg' />
                    <p>A Charles se le despojó de su cinturón, dejándolo vacante. La pelea se hizo de igual manera, solamente que en caso de que Oliveira ganara, el título seguiría sin dueño, y en caso de que de Gaethje ganara, se convertiría en nuevo campeón, dejándonos en una situación inédita en el deporte. Finalmente Charles Oliveira ganó su pelea, por lo que el cinturón de peso ligero quedó vacante durante un tiempo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}