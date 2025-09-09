import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/alex_pereira-tribu.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Alex Pereira Tribu',
    description: '',
    openGraph: {
        images: '',
        title: 'Alex Pereira Tribu',
        description: '',
        url: 'https://fullmma.org/articulos/alex-pereira-tribu'
    }
}

export default function AlexPereiraTribu () {
    return(
        <main>
            <ArticleHero title='¿Cuál es la Tribu de Alex Pereira?' subtitle='El origen de Alex Pereira y su relación la tribu indigena brasileña Pataxó, de la que es descendiente' image={hero} date='2025-09-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/alex-pereira'>Alex Pereira</Link> es descendiente de la tribu indigena <b>Pataxó</b>, a la que pertenecían sus abuelos. El doble campeón brasileño abrazó sus raíces y desde que es peleador de la UFC ha tenido varios gestos y guiños para sus origenes, desde su apodo <b>&quot;Poatan&quot;</b>, que significa &quot;manos de piedra&quot; en un idioma aborigen, hasta incorporando atuendos, pinturas faciales y accesorios inspirados en la cultura Pataxó, como manera de rendir homenaje a su cultura. </p>
                    <p>Incluso su ritual cuando está por entrar al octágono, previo a un combate, donde da un par de pasos y simula disparar un arco y flecha, están conectados con su raíz indigena, sirviendo como forma de rendir homenaje a su cultura y su familia. Él mismo ha comentado que <b>&quot;Hice un ritual con un arco y flecha. Luego una secuencia con música indigena y así es como comenzó todo&quot;.</b></p>
                    <YouTubeEmbed videoid='ufcZ270o31A' />
                    <h2>Como Alex Pereira Descubrió su relación con la Tribu Potaxó</h2>
                    <p>Quien lo hizo conocer y adentrarse en sus origenes, fue su primer entrenador de kickboxing, <b>Belocqua Wera</b>, quien también tiene raíces indigenas, por lo que incentivó al campeón brasileño a averiguar más sobre el pasado de su familia. </p>
                    <p><b>&quot;Quiero ganarme un nombre para en el futuro usarlo para ayudar a la gente indígena... con esto (la plataforma y medios que brinda la UFC), tengo el potencial de realmente ayudarlos. &quot;</b> Había comentado El Poatán en una ocasión. </p>
                    <h2>¿Quiénes son la Tribu Potaxó?</h2>
                    <p>Los Potaxó son un pueblo indígena originario del Estado de Bahía y del Sur de Minas Gerais, en Brasil. Se estructuran en aldeas dirigidas por un cacique o líder comunitario, existiendo a día de hoy más de 30 aldeas de esta tribu, con una población estimada de 15000 personas (aunque esta cifra suele variar dependiendo de las fuentes). </p>
                    <p>Con el paso del tiempo se ha ido perdiendo la lengua original de esta tribu, pero aún mantienen practicas culturales como danzas, rituales y cantos característicos de este pueblo. </p>
                    <p>La figura de Alex Pereira ha servido para otorgar visibilidad y respeto a esta tribu que carga con una historia muy dura, que incluye la perdida de territorio, violencia y discriminación en el mundo actual. </p>
                    <p>El mismo <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> tras convertirse en campeón de UFC al noquear a <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, llevó su cinturón a la reserva <b>Pataxó Porto do Boi</b>, en Bahía, donde llevó puesto un atuendo tradicional. Lo que fue muy bien recibido por la población, dado que a esta altura Alex Pereira se ha convertido en una especie de embajador cultural, que aporta resonancia y reconocimiento a una etnia que ha sido historicamente marginada. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}