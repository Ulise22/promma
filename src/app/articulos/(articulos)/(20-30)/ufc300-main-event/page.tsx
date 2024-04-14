import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/20-30/ufc300.jpeg'

export default function UFC300MainEvent () {
    return(
        <main>
            <ArticleHero title='UFC 300: !Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea¡' subtitle='lorem ipsum' image={hero} date='14/04/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Bo Nickal vs Cody Brundage</h2>
                    <p>¡Bo Nickal somete a Cody Brundage en el segundo asalto! En la pelea que abrió la cartelera estelar del UFC 300, vimos como el claro favorito de la pelea dió a conocer sus habilidades al ser capaz de someter con un mataleón en el segundo asalto de la pelea.Manteniendo su invicto y elevando su récord a 6-0 con este resultado.</p>
                    <h2>Charles Oliveira vs Arman Tsarukyan</h2>
                    <p>¡Arman Tsarukyan gana por decisión dividida! En lo que fue una de las mejores peleas de la noche, y de las más esperadas por los fans, vimos la razón por la cual ambos peleadores son claros contendientes al título, brindandonos un aunténtico espectaculo, donde ambos peleadores estuvieron cerca de finalizarse mutuamente. Finalmente, la pelea se dejó en la mano de los jueces, que terminaron decantando la pelea a favor de Arman Tsarukyan, en una excelente victoria para el armenio que lo deja como claro candidato al título de peso ligero, en una revancha contra <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>.</p>
                    <h2>Justin Gaethje vs Max Holloway</h2>
                    <p>¡Faltando tan sólo 2 segundo para terminar la pelea, Holloway es capaz de noquear a Justin Gaethje y se convierte en el nuevo BMF! En lo que fue una locura total, con un Holloway que sorprendió a muchos al dominar completamente a un Justin Gaethje que era el número #2 de la división de Peso Ligero. Pese a que Holloway tenía la pelea practicamente ganada, este invitó a Gaethje a intercambiar golpes durantes los últimos 10 segundos de la pelea, y es en estos momentos cuando es capaz de noquear al ahora ex campeón del BMF.</p>
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