import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc308.jpg'

export const metadata: Metadata = {
    title: 'UFC 308',
    description: "En este eventazo de UFC en Abu Dhabi tenemos a la que quizás sea la pelea del año como evento principal, con el campeón español de peso pluma Ilia Topuria realizando su primer defensa del título ante el BMF de la UFC Max Holloway.",
    openGraph: {
        title: 'UFC 308',
        description: "En este eventazo de UFC en Abu Dhabi tenemos a la que quizás sea la pelea del año como evento principal, con el campeón español de peso pluma Ilia Topuria realizando su primer defensa del título ante el BMF de la UFC Max Holloway.",
        url: 'https://fullmma.org/covertura-ufc/ufc308'
    }
}

export default function UFC308 () {
    return(
        <main>
            <ArticleHero title="UFC 308: ¡Ilia Topuria vs Max Holloway! ¡Robert Whittaker vs Khamzat Chimaev!" subtitle='' image={hero} date='2024-10-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En este eventazo de UFC en Abu Dhabi tenemos a la que quizás sea la pelea del año como evento principal, con el campeón español de peso pluma <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> realizando su primer defensa del título ante el BMF de la UFC <Link href='/peleadores/max-holloway'>Max Holloway</Link>. </p>
                    <p>Además en la cartelera estelar contamos con tremendos combates que merecen la pena ver, empezando con la pelea coestelar entre el australiano <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> y el checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, que pondrá en juego su invicto al enfrentar al #3 de la división de peso medio. Además, 2 de los principales contendientes en los semipesados, como lo son <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> y <b>Aleksandar Rakic</b> se enfrentaran en busca de una oportunidad de disputar el título que actualmente ostenta <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. </p>
                    <h2>Chirs Barnett Cae Derrotado ante Kennedy Nzechukwu por TKO</h2>
                    <p>El luchador nigeriano se hizo de la victoria en el primer asalto vía TKO. En un combate que ya desde el principio parecía tener en desventaja al luchador español, que parece haberse lastimado la rodilla luego de un salto que dió antes de la pelea, Kennedy haría uso de su principal ventaja, que era la diferencia de altura y alcance que lo beneficiaba, llevándolo a desde el correcto control de la distancia, controlar y dominar la pelea. </p>
                    <p>Sin embargo, Chris Barnett se lesionó la pierna izquierda luego de querer dar una patada giratoria, dejándolo practicamente inmovil durante lo que quedó del primer asalto, manteniéndose en el lugar hasta que finalmente fue noqueado por su rival. </p>
                    <h2>Abus Magomedov Somete a Brunno Ferreira en le Tercer Asalto</h2>
                    <p>El luchador de origen Daguestaní y de nacionalidad alemana, Abus Magomedov se hace con la victoria por la vía de la sumisión en el tercera asalto. </p>
                    <p>En una pelea que fue de menos a más, donde vimos la mejor cara del brasileño en el segundo asalto, cuando fue capaz de conectar los mejores golpes al acortar la distancia, terminó siendo completamente dominado en el suelo durante el tercer asalto, al finalmente ser sometido con un triángulo de brazo para darle la victoria a Magomedov. </p>
                    {/* <h2>Geoff Neal vs Rafael Dos Anjos</h2>
                    <p></p>
                    <h2>Shara Magomedov vs Armen Petrosyan</h2>
                    <p></p>
                    <h2>Lerone Murphy vs Dan Ige</h2>
                    <p></p>
                    <h2>Magomed Ankalaev vs Aleksandar Rakic</h2>
                    <p></p>
                    <h2>Robert Whittaker vs Khamzat Chimaev</h2>
                    <p></p>
                    <h2>Ilia Topuria vs Max Holloway</h2>
                    <p></p> */}
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}