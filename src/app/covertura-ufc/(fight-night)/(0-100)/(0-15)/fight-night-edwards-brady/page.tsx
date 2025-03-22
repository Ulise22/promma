import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufc_london.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC London: ¡Leon Edwards vs Sean Brady!',
    description: '',
    openGraph: {
        title: 'UFC London: ¡Leon Edwards vs Sean Brady!',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-edwards-brady'
    }
}

export default function EdwardsBrady () {
    return(
        <main>
            <ArticleHero title='UFC London: ¡Leon Edwards vs Sean Brady!' subtitle='¡Jan Blachowicz vs Carlos Ulberg! ¡Gunnar Nelson vs Kevin Holland!' image={hero} date='2025-03-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremendo evento de UFC que tenemos esta noche en Londrés, con un montón de combates y muchos peleadores británicos de por medio. Con el evento estelar siendo encabezado por el excampeón de peso wélter <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, quien enfrentará el #5 de la división, <b>Sean Brady</b>. </p>
                    <p></p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Kaue Fernandes Derrota a Guram Kutateladze por Decisión Unánime</h2>
                    <p>Gran victoria para el brasileño Kaue Fernandes, quien afrontó un combate muy complicado con mucha inteligencia, castigándo la pierna izquierda de su rival a base de patadas que terminaron por dejarlo tan lastimado que el georgiano debió cambiar la guardia. Cerca estuvo de finalizar en varias ocasiones en un combate que dominó completamente. </p>
                    <p>Por su parte el georgiano que partía como favorito, y que contaba con una esquina de lujo, con <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, y los hermanos <b>Aleksandre</b> e <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, sufrió mucho el boxeo y las patadas de su rival, que lo terminaron dejando casi que sin poder ponerse de pie de tanto castigo que sufrió en ambas piernas. </p>
                    <h2>Caolán Loughran Derrota a Nathan Fletcher por Decisión Dividida</h2>
                    <p>En un tremendo combate entre estos 2 pesos gallo, quien se terminó por llevar la pelea fue el visitante irlandés <b>Caolán Loughran</b>, quien claramente ganó el primer asalto, y aunque sufrió en los otros 2, hizo méritos suficientes para llevarse la pelea. </p>
                    <p>El combate tuvo como claro dominador del primer asalto al irlandés Loughran, y tuvo como claro dominador del segundo asalto al inglés <b>Nathan Fletcher</b>, por lo que la decisión final del combate dependió del tercer asalto, que fue el más cerrado de los 3, y que podría haber terminado a favor de cualquiera, siendo finalmente a favor del luchador de Irlanda, que consigue su tercer victoria consecutiva en la UFC. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}