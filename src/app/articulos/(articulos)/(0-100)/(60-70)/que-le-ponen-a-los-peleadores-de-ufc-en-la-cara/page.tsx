import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/vaselina_ufc.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Que le Ponen a los Peleadores de UFC en la Cara',
    description: 'Descubre qué es lo que le ponen a los peleadores de UFC en la cara y porqué es vital para la salud de estos y para los combates.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvaselina_ufc.8c166201.webp&w=828&q=65',
        title: 'Que le Ponen a los Peleadores de UFC en la Cara',
        description: 'Descubre qué es lo que le ponen a los peleadores de UFC en la cara y porqué es vital para la salud de estos y para los combates.',
        url: 'https://fullmma.org/articulos/que-le-ponen-a-los-peleadores-de-ufc-en-la-cara'
    }
}

export default function VaselinaUFC () {
    return(
        <main>
            <ArticleHero title='Qué le Ponen a los Peleadores de UFC en la Cara' subtitle='Descubre el porqué le ponen vaselina en el rostro los peleadores de UFC antes de cada combate. ' image={hero} date='2025-08-05' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Aquella crema le ponen a los peleadores en la cara previo a cada pelea de UFC, es vaselina. La razón de esto es estrictamente por la seguridad, salud y bienestar de los peleadores, dado que la vaselina previene heridas faciales, minímiza la hinchazón y forma una barrera protectora en la piel. </p>
                    <p>Muchas veces previo a los combates de UFC, o incluso del boxeo y de otras compañías de artes marciales mixtas, vemos como antes de entrar al octágono, los peleadores son untados con una crema en la cara, especialmente en la zona de las cejas, la nariz y los pómulos. Pero pueden ser muchos los fans, entre los que me incluyo, que hasta ahora no sabían porqué se hacía esto, es esta la razón por la que vamos a detallar todos los motivos y razones detrás de esta importantísima acción. </p>
                    <h2>¿Por qué los peleadores usan vaselina?</h2>
                    <p>Debido a la inmensa cantidad de golpes a los que están expuestos los peleadores, especialmente los de MMA, que pueden llegar a recibir golpes, patadas, codazos y rodillazos en la cara, la piel puede quedar muy expuesta a cortes, lo que en muchos casos se convierte en algo decisivo para el resultado de la pelea, es por esto que se coloca vaselina, para minimizar la cantidad de cortes que los luchadores pueden llegar a recibir. </p>
                    <p>El tener una pequeña capa de vaselina ayuda a reducir la fricción cuando se recibe un golpe, dado que mantiene la piel suave y elástica, en lugar de seca, como estaría si no se aplicara esta sustancia. Esto explica la disminución del riesgo de recibir cortes. </p>
                    <YouTubeEmbed videoid='nLUCTeZaCHE' />
                    <p>Aunque no sólo es aplica antes de los combates, ya que en caso de haber recibido un golpes que haya generado algún corte, entre medio de los asaltos, en el minuto de descanso, se puede volver a aplicar vaselina en la herida abierta, para prevenir que esta empeore si se recibe un golpe en la zona otra vez, permitiendo así a los luchadores seguir peleando y no ver el resultado de una pelea modificado por algo como esto. </p>
                    <p>Sin embargo hay que tener cuidado, dado que el uso excesivo de la vaselina puede ser considerado ilegal, con castigos que pueden llegar hasta la descalificación del luchador, debido a que se considera que proporciona una ventaja injusta. </p>
                    <p>La razón de esto es que mucha vaselina puede volver resbalosa a la piel, haciendo a los peleadores más fácil la tarea de escapar de algún intento de sumisión. Por esta misma razón en la UFC está prohibido untarse de vaselina en el cuerpo. </p>
                    <p>El uso excesivo también puede llegar a afectar la superficie del octágono en el que se está peleando, lo que terminaría provocando ramificaciones que pueden ser muy peligrosas para la salud de los pelaedores, generando riesgos y peligros completamente innecesarios. </p>
                    <p>Es este el motivo por el que, aunque la vaselina puede ser una herramienta fundamental en la protección de los peleadores, también es importante no abusar de ella, por la salud del oponente y de ellos mismos. Queda a criterio y responsabilidad del árbitro de cada combate, juzgar si un peleador está o no abusando de la vaselina, utilizando esta en exceso. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}