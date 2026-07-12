import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/mcgregor_que_le_paso.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: '¿Qué Le Pasó a Conor McGregor?',
    description: "Descubre que le pasó en la pierna a Conor McGregor en su pelea contra Max Holloway en el UFC329",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmcgregor_que_le_paso.2d5e23b4.webp&w=828&q=65',
        title: '¿Qué Le Pasó a Conor McGregor?',
        description: "Descubre que le pasó en la pierna a Conor McGregor en su pelea contra Max Holloway en el UFC329",
        url: 'https://fullmma.org/noticias/que-le-paso-a-conor-mcgregor',
    }
}

export default function McGregorQuePaso () {
    return(
        <main>
            <ArticleHero title='¿Qué Le Pasó a Conor McGregor?' subtitle="Descubre que le pasó en la pierna a Conor McGregor en su pelea contra Max Holloway en el UFC329" image={hero} date='2026-07-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> sufrió una lesión en la pierna derecha durante su pelea contra <Link href='/peleadores/max-holloway'>Max Holloway</Link> en el UFC329, en lo que era su regreso luego de 5 años, en su pelea ante <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> que también había acabado por una lesión en la pierna, en aquel caso una fractura. </p>
                    <p>En una cartelera que estaba siendo maravillosa, con muchas finalizaciones y entretenimiento para los fanáticos, el evento principal, la razón por la que estabamos todos viendo el <Link href='/eventos/ufc329'>UFC 329</Link> terminó de la peor manera, cuando el <b>El Rey Midas de las MMA</b> entró al octágono e inició la pelea con la intención de ser muy agresivo, lanzando una patada voladora con la pierna izquierda a la cabeza de Max Holloway, cayendo de forma algo aparatosa sobre su pierna derecha, lo que podría ser lo que finalmente acabó por lesionarlo. </p>
                    <p>A Conor le costó ponerse de pie tras la caída, por lo que su rival aprovechó para golpearlo un poco, pero se notó que ni bien intentaba ponerse de pie hacía muecas mostrando que algo no andaba bien con esa pierna. El propio Max notó esto y se lo marcó al árbitro para ver si intervenía, hasta que finalmente lo dejó ponerse de pie y quedó a la vista de todos que Conor McGregor estaba sufriendo una lesión en la pierna derecha. </p>
                    <p>De esta forma lo que debía ser una noche especial e histórica acabó de la forma más decepcionante, sin apenas haber pelea, con el árbitro dando por finalizado el combate al minuto 1:09. El ganandor fue el hawaiano <Link href='/peleadores/max-holloway'>Max Holloway</Link> por TKO en el primer asalto. </p>
                    <YouTubeEmbed videoid='BhldJSntuo4' />
                    <p>Todavía no sabemos exactamente que lesión sufrió la estrella irlandesa, ni si tiene que ver con aquella lesión que sufrió en 2021 en su combate ante Dustin Poirier. Tampoco tenemos claro que la lesión se haya producido en el combate luego de aquella patada voladora, o si ya cargaba con ella antes de iniciar al combate, de ser esta última opción, resulta inexplicable la patada que intentó dar cuando inició la pelea. </p>
                    <h2>El Antecedente y La Lesión de Conor McGregor en 2021 ante Dustin Poirier</h2>
                    <p>Recordemos que la razón por la que Conor se tomó tanto tiempo fuera del octágono, pasando media década sin luchar, fue que tuvo que lidiar con una gravísima fractura de tibia/peroné, que le cayó al dar un paso en falso en su combate ante el estadounidense <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}