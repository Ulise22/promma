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
    description: 'Tremendo evento de UFC en Londrés protagonizado por Leon Edwards y Sean Brady, que además tiene como evento coestelar la pelea entre el polaco Jan Blachowicz vs Carlos Ulberg.',
    openGraph: {
        title: 'UFC London: ¡Leon Edwards vs Sean Brady!',
        description: 'Tremendo evento de UFC en Londrés protagonizado por Leon Edwards y Sean Brady, que además tiene como evento coestelar la pelea entre el polaco Jan Blachowicz vs Carlos Ulberg.',
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
                    <p>Además tenemos un tremendo evento coestelar, con el polaco <b>Jan Blachhowicz</b> haciendo su regreso al octágono luego de 2 años de inactividad, desde aquella derrota sufrida ante el brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, teniendo que enfrentar para eso al neozelandés <b>Carlos Ulberg</b>, quien se encuentra ranqueado #6 actualmente, y quien viene de una racha de 7 victorias consecutivas. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Kaue Fernandes Derrota a Guram Kutateladze por Decisión Unánime</h2>
                    <p>Gran victoria para el brasileño Kaue Fernandes, quien afrontó un combate muy complicado con mucha inteligencia, castigándo la pierna izquierda de su rival a base de patadas que terminaron por dejarlo tan lastimado que el georgiano debió cambiar la guardia. Cerca estuvo de finalizar en varias ocasiones en un combate que dominó completamente. </p>
                    <p>Por su parte el georgiano que partía como favorito, y que contaba con una esquina de lujo, con <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, y los hermanos <b>Aleksandre</b> e <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, sufrió mucho el boxeo y las patadas de su rival, que lo terminaron dejando casi que sin poder ponerse de pie de tanto castigo que sufrió en ambas piernas. </p>
                    <h2>Caolán Loughran Derrota a Nathan Fletcher por Decisión Dividida</h2>
                    <p>En un tremendo combate entre estos 2 pesos gallo, quien se terminó por llevar la pelea fue el visitante irlandés <b>Caolán Loughran</b>, quien claramente ganó el primer asalto, y aunque sufrió en los otros 2, hizo méritos suficientes para llevarse la pelea. </p>
                    <p>El combate tuvo como claro dominador del primer asalto al irlandés Loughran, y tuvo como claro dominador del segundo asalto al inglés <b>Nathan Fletcher</b>, por lo que la decisión final del combate dependió del tercer asalto, que fue el más cerrado de los 3, y que podría haber terminado a favor de cualquiera, siendo finalmente a favor del luchador de Irlanda, que consigue su tercer victoria consecutiva en la UFC. </p>
                    <h2>Shauna Bannon Somete a Puja Tomar en el Segundo Asalto</h2>
                    <p>La luchadora irlandesa <b>Shauna Bannon</b> consigue una espectacular victoria en el momento en que peor estaba pasando la pelea. En un combate que Bannon estaba dominando ante la luchadora de la India <b>Puja Tomar</b>, con una patada delantera hacia todo el cuerpo que obligaba a su rival a retroceder constantemente. </p>
                    <p>En el segundo asalto, la luchadora india logró conectar una patada a la cabeza de su rival que a punto estuvo de dejarla KO, sin embargo, cuando esta quiso castigarla desde el suelo, Bannon fue capaz de conectar una llave al brazo de su rival que la terminó por someter. Consiguiendo de esta manera la primera sumisión de su carrera. </p>
                    <h2>Leroy Duncan Derrota a Andrey Pulyaev por Decisión Unánime</h2>
                    <p>En un combate sin muchas emociones, el luchador local <b>Christian Leroy Duncan</b> logra hacerse con la victoria por decisión unánime, luego de ser superior a su rival ruso <b>Andrey Pulyaev</b> durante los 3 asaltos de la pelea, consiguiendo de esta manera recuperarse de su última derrota sufrida ante el brasileño <b>Gregory &quot;Robocop&quot; Rodrigues</b>. </p>
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