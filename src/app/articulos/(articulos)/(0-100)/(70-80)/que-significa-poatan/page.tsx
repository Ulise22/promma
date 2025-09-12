import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/poatan.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: '¿Qué Significa Poatan?',
    description: '',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpoatan.e82f6f39.webp&w=828&q=65',
        title: '¿Qué Significa Poatan?',
        description: '',
        url: 'https://fullmma.org/articulos/que-significa-poatan'
    }
}

export default function QueSignificaPoatan () {
    return(
        <main>
            <ArticleHero title='¿Qué Significa Poatan?' subtitle='Descubre el significado y la historia detrás del apodo de Alex Pereira' image={hero} date='2025-09-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><b>&quot;Poatan&quot; significa &quot;manos de piedra&quot;</b> en el idioma tupí-guaraní, lengua de varios pueblos indigenas de Brasil. Apodo que encaja completamente en un peleador de MMA como lo es <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, quien ha demostrado tener un poder en las manos que ningún otro comparte en divisiones similares a las de él. </p>
                    <p>Además, aunque no es exactamente en el mismo idioma, el apodo &quot;Poatan&quot; refleja sus raíces indigenas con la <Link href='/articulos/alex-pereira-tribu'>Tribu Pataxó</Link>, al estar en un idioma de estos origenes. </p>
                    <h2>Origen del Apodo &quot;Poatan&quot; en Alex Pereira</h2>
                    <p>El apodo le fue dado por su primer entrenador de kickboxing (recordemos que Alex Pereira comenzó su carrera como deportista en este arte marcial), quien rapidamente fue capaz de ver el talento y la habilidad de poner a dormir gente que tenía el brasileño. El nombre del entrenador es <b>Belocqua Wera</b>, y en una entrevista contó: </p>
                    <p><b>“Le di el apodo porque ‘Po’ es mano, ‘Atan’ es fuerte. Entonces, mano fuerte. Esa es la traducción. Pero mi idea era hacer al guerrero con manos fuertes, que era algo para que él encarnara… ‘Soy un guerrero, el guerrero Poatan’. De ahí en adelante empezamos a usar ese apodo”</b></p>
                    <YouTubeEmbed videoid='Riph0CH_ckU' />
                    <p>Además, el mismo Poatan Pereira habló del origen de su apodo, explicando la relación que tiene con sus raíces indigenas y con el significado que su entrenador quería darle: </p>
                    <p><b>&quot;Cuando le conté (a Belocqua), él estaba super feliz y dijo: ‘Su fuerza, su apariencia, todo indica que tiene algo vinculado a la cultura indigena.’... Trabajamos en eso y él nos dió este apodo: Poatan. ... Algunas personas dicen Manos de Piedra, de hecho me lo tatué en mi mano. &quot;</b></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}