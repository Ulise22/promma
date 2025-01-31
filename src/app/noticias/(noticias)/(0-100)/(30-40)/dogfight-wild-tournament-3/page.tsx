import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/dwt3.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Dogfight Wild Tournament 3',
    description: "El evento de MMA más loco de España, organizado por el youtuber Jordi Wild, donde habrá desde un 2vs2, peleas sin reglas, peleas medievales, y un evento estelar con 10 luchadores peleando todos contra todos",
    openGraph: {
        title: 'Dogfight Wild Tournament 3',
        description: "El evento de MMA más loco de España, organizado por el youtuber Jordi Wild, donde habrá desde un 2vs2, peleas sin reglas, peleas medievales, y un evento estelar con 10 luchadores peleando todos contra todos",
        url: 'https://fullmma.org/noticias/dogfight-wild-tournament-3'
    }
}

export default function DWT3 () {
    return(
        <main>
            <ArticleHero title='Dogfight Wild Torunament 3: ¡Battle Royal 10 Peleadores Todos Contra Todos!' subtitle="Vuelve el evento más loco del mundo, Dogfight Wild Tournament, en su tercera edición organizaodo por Jordi Wild. Con un 2vs2, pelea femenina sin reglas, pelea en un coche y una pelea medieval." image={hero} date='2025-01-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Comienza el Dogfight Wild Tournament 3 (DWT 3), en lo que será una locura de evento de MMA, organizado en España por el youtuber Jordi Wild. Donde tendremos todo tipo de combates, cada uno más sorprendete y bizarro que el anterior. Comenzando con una pelea a la vieja escuela, donde un peleador de Capoeira se enfrentará a uno de Muay Thai.</p>
                    <p>Además tendremos un combate femenino sin reglas, tendremos un combate medieval de MMA con luchadores usando armaduras antiguas, una pelea de 2 contra 2 en peso pesado con reglas especiales, tendremos una pelea de leyendas sin reglas, una pelea dentro de un coche, y el evento estelar, con un battle royal con 10 peleadores, donde se enfrentarán todos contra todos en un mismo combate. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/tOV2Gy9AQPg?si=qDvtQ-n4CADqdpQL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Old School Fight (Capoeira vs Muay Thai)</h2>
                    <p>&quot;La Bomba&quot; consigue una espectacular victoria en representación del Muay Thai ante su rival de Capoeira, Giani, luego de haber dominado por completo la pelea en base a patadas al cuerpo y especialmente a la pierna izquierda de su oponente, que le hicieron mucho daño, llegando al punto en que el peleador de capoeira ya no podía mantenerse de pie. Finalmente, luego de una patada que derribaría a su rival, el representante de Muay Thai consiguió conenctar un golpe en la cabeza que haría que el árbitro parara la pelea, dándole la victoria por TKO en el segundo asalto.</p>
                    <h2>No Rules Fight</h2>
                    <p></p>
                    <h2>Pelea Medieval</h2>
                    <p></p>
                    <h2>2v2 Especial Rules</h2>
                    <p></p>
                    <h2>Extreme Fight (Pelea de Leyendas Sin Reglas)</h2>
                    <p></p>
                    <h2>Car Fight</h2>
                    <p></p>
                    <h2>Battle Royale (10 Peleadores)</h2>
                    <p></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}