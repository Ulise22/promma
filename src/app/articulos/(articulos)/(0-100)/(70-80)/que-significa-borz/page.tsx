import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/borz_significado.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Qué Significa Borz',
    description: '',
    openGraph: {
        images: '',
        title: 'Qué Significa Borz',
        description: '',
        url: 'https://fullmma.org/articulos/que-significa-borz'
    }
}

export default function SignificadoBorz () {
    return(
        <main>
            <ArticleHero title='¿Qué Significa Borz? El Apodo de Khamzat Chimaev' subtitle='La historia y significado detrás de "BORZ", el apodo de uno de los peleadores más queridos de la UFC actualmente' image={hero} date='2025-08-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><b>&quot;BORZ&quot;</b> significa <b>lobo</b> en el idioma checheno, y es el apodo que adoptó el peleador de UFC <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, quien justamente proviene de la República de Chechenia. Aunque el significado y simbolismo que puede haber detrás es aún más profundo.</p>
                    <p>Como mencione anteriormente, la palabra <b>borz</b> es proveniente del idioma checheno, pero la razón por la que Chimaev usa este apodo lo conecta aún con su madre patria, dado que el lobo es el animal nacional de Chechenia. </p>
                    <p>Además, hay una especie de rebeldía en esta palabra para la gente de chechenia, dado que Borz es el nombre que se les daba a todas las metralletas improvisadas que se produjeron en la región entre 1992 y 1999, cuando estaban en conflico con Rusia, durante la primer y segunda guerra ante las fuerzas rusas. Casualmente fue en este período cuando nació la estrella de UFC. </p>
                    <p>Más allá de esto, no fue Chimaev quien eligió este apodo para sí mismo, puesto que quien se lo pusó fue su exentrenador <b>Andreas Michael</b>, quien al verlo entrenar reconoció que la agresividad y tenacidad que manejaba el checheno lo hacían ver como un lobo. Este animal además, en la cultura chechena es visto como una figura que representa la valentía, la fuerza, y la lealtad. Con lo que podemos concordar que varias de estas características están presentes en el estilo de pelea de Khamzat Chimaev. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}