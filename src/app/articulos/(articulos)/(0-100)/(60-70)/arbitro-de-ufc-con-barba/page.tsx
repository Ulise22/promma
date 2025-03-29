import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/mike_beltran.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Árbitro de UFC con Barba',
    description: 'Conoce la historia de vida de Mike Beltrán, el árbitro con la barba más icónica de la UFC. ',
    openGraph: {
        title: 'Árbitro de UFC con Barba',
        description: 'Conoce la historia de vida de Mike Beltrán, el árbitro con la barba más icónica de la UFC. ',
        url: 'https://fullmma.org/articulos/arbitro-de-ufc-con-barba'
    }
}

export default function ArbitroUFCBarba () {
    return(
        <main>
            <ArticleHero title='Mike Beltrán: El Árbitro de UFC con Barba' subtitle='La historia de Mike Beltrán, el árbitro de UFC con trenzas en la barba y uno de los más reconocidos en su profesión.' image={hero} date='2025-02-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Historia de Mike Beltrán</h2>
                    <p>Mike Beltrán, el reconocido árbitro con trenzas en la barba de la <Link href='/articulos/ufc'>UFC</Link>, es de las figuras más reconocibles en el arbitraje de este deporte. Por eso, y porque en su área es una leyenda de las MMA, es que vamos a hablar de la vida e historia detrás de este mítico árbitro de la UFC. </p>
                    <p>Mike Beltrán nació el 31 de agosto de 1973, en el Este de Los Angeles, en Estados Unidos. A más de uno sorprenderá que Mike es de ascendencia mexicana, cosa que le permitió tener un excelente manejo del español, siendo este su primer idioma, con el inglés siendo el segundo. Esta ascendencia mexicana es lo que le transmitió una cultura de los deportes esencial para su carrera, siendo fanático del fútbol y siendo bastante fan del boxeo desde niño, comenzando a practicar desde los 10 años, inspirado por su fanatismo por el legendario boxeador mexicano, Julio Cesar Chaves, en una época en la que las artes marciales mixtas todavía no estaban presentes. </p>
                    <p>Comenzó además a entrenar jiu-jitsu brasileño en el año 2002, y siguió entrenando boxeo luego de unirse al ejército, perteneciendo a la infantería de los marines.</p>
                    <p>Mike Beltrán cuenta con una vida bastante activa e interesante, dado que luego de unirse al ejército, comenzaría a trabajar como detective en la policía, puesto en el que lleva alrededor de 30 años en Los Ángeles. Compaginando este trabajo con el que todos le conocemos como árbitro de MMA. Además, también se dedica a la actuación, participando en la serie de televisión de FX, Mayans, y en las películas “The Other Side: Live or Die” y “Barrio MMA Kid”.</p>
                    <p>Ha confesado que su estrategia para calmarse y para buscar que todo salga de la mejor forma en las peleas que le tocan arbitrar, es intentar mantener la calma y rezar antes de cada pelea, dado que preservar la seguridad de los peleadores es lo que más le preocupa a la hora de realizar su trabajo. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/SPFx5HscmH8?si=PF4d-BG-dJglCKVh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Como mencioné anteriormente, lleva más de 20 años entrenando jiu-jitsu, alcanzando el cinturón marrón en esta arte marcial. Ha comentado que como referí es importante no sólo estar al tanto de la evolución de las reglas del deporte, sino también de la técnica de este, es decir que es necesario para hacer su trabajo correctamente, que él también sepa pelear y esté al tanto de las técnicas que a menudo utilizarán los peleadores que le toque arbitrar, para saber y entender que es lo que está sucediendo, y de esta manera notar rápidamente cuando uno de los luchadores está haciendo algún movimiento ilegal. </p>
                    <h2>Legado de Mike Beltrán</h2>
                    <p>En resumen, detrás del árbitro de la UFC con barba que vemos prácticamente todos los fines de semana, que lleva casi 700 peleas arbitradas a su espalda, hay una persona con una historia muy interesante, que varía en sus intereses, dado que mientras hacía este artículo dejé de lado y no hablé de otras de sus pasiones como la lucha o el hockey sobre hielo. Que es policía en Los Angeles la mayor parte del tiempo, que se dedica a la actuación, y que, en su faceta más reconocida, es la persona encargada de arbitrar las peleas de UFC que tanto disfrutamos. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}