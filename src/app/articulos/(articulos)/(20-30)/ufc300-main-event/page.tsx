import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/20-30/ufc300.jpeg'

export default function UFC300MainEvent () {
    return(
        <main>
            <ArticleHero title='UFC 300: !Título Pendiente¡' subtitle='lorem ipsum' image={hero} date='14/04/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Bo Nickal vs Cody Brundage</h2>
                    <p>¡Bo Nickal somete a Cody Brundage en el segundo asalto! En la pelea que abrió la cartelera estelar del UFC 300, vimos como el claro favorito de la pelea dió a conocer sus habilidades al ser capaz de someter con un mataleón en el segundo asalto de la pelea.Manteniendo su invicto y elevando su récord a 6-0 con este resultado.</p>
                    <h2>Charles Oliveira vs Arman Tsarukyan</h2>
                    <p></p>
                    <h2>Justin Gaethje vs Max Holloway</h2>
                    <p></p>
                    <h2>Zhang Weili vs Yan Xiaonan</h2>
                    <p></p>
                    <h2>Alex Pereira vs Jamahal Hill</h2>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}