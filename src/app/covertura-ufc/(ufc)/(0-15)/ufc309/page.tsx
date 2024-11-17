import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc309.jpg'

export const metadata: Metadata = {
    title: 'UFC 309',
    description: "",
    openGraph: {
        title: 'UFC 309',
        description: "",
        url: 'https://fullmma.org/covertura-ufc/ufc309'
    }
}

export default function UFC309 () {
    return(
        <main>
            <ArticleHero title="UFC 309: ¡Jon Jones vs Stipe Miocic Por El Campeonato de Peso Pesado!" subtitle='Evento de UFC con la pelea por el título de peso pesado entre Jon Jones y la leyenda de la división Stipe Miocic. Además, pelea a 5 asaltos en peso ligero entre Charles Oliveira y Michael Chandler.' image={hero} date='2024-11-16' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos un tremendo evento de UFC en el Madison Square Garden con la pelea por el campeonato de peso pesado de la compañia, entre el GOAT de la <Link href='/articulos/ufc'>UFC</Link> <Link href='/peleadores/jon-jones'>Jon Jones</Link> y la leyenda de los pesos pesados <b>Stipe Miocic</b>. Además, acompañando la cartelera estarán <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> y <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> como evento coestelar, en una pelea a 5 asaltos que posiblemente definirá al próximo contendiente al título de la división de peso ligero. </p>
                    <h2>Marcin Tybura Derrota a Jhonatan Diniz Por Parada Médica en el Segundo Asalto</h2>
                    <p>El #9 de la división de peso pesado, <b>Marcin Tybura</b> logra una victoria por TKO en el segundo asalto ante el brasileño <b>Jhonatan Diniz</b>, luego de que estando montado por encima de su rival, conectará unos codos a la cabeza que generaron cortes en ambos ojos, que le impidieron estar en condiciones de seguir peleando a los ojos del médico. </p>
                    <p>Durante la pelea, pareció al inicio de esta que el brasileño podría llevarse la victoria por nocaut, dado que mientras la pelea estuvo de pie, consiguió conectar unos golpes que cerca de noquear estuvieron. Sin embargo, Tybura consiguió concretar un derribo tanto en el primer como en el segundo asalto, que le aseguraron una cómoda victoria, dado que Diniz no supo como defender dichos derribos, ni como ponerse de pie una vez derribado.</p>
                    <p>De esta manera el polaco, que había aceptado la pelea en corto aviso, logra volver a la senda de la victoria, dado que venía de una derrota por sumisión ante Spivac.</p>
                    <h2>David Onama Derrota a Roberto Romero Por Decisión</h2>
                    <p>El luchador de Uganda <b>David Onama</b> derrotó por decisión al mexicano <b>Roberto Romero</b>, quien estaba haciendo su debut en la UFC. Con un primer asalto que probablemente fue lo mejor que vimos hasta ahora en este UFC309, en donde el debutante mexicano se vió bastante bien, conectando muchos golpes potentes que cerca estuvieron de noquear a su rival, a medida que fue pasando la pelea, el de Uganda fue de menos a más, terminando por dominar completamente la pelea en el final del tercer asalto, con un Ground & Pound que le garantizaron la victoria. De esta forma Onama extiende su récord profesional a 13-2, acumulando una racha de 3 victorias consecutivas.</p>
                    <p>Por su parte el mexicano hizo un debut bastante digno, dando la que fue de las peleas más entretenidas de la noche, y demostrando que tiene cálidad de sobra para estar en la UFC. </p>
                    {/* <h2>Jim Miller vs Damon Jackson</h2>
                    <p></p> */}
                    {/* <h2>Mauricio Ruffy vs James Llontop</h2>
                    <p></p> */}
                    {/* <h2>Viviane Araújo vs Karine Silva</h2>
                    <p></p> */}
                    {/* <h2>Bo Nickal vs Paul Craig</h2>
                    <p></p> */}
                    {/* <h2>Charles Oliveira vs Michael Chandler</h2>
                    <p></p> */}
                    {/* <h2>Jon Jones vs Stipe Miocic</h2>
                    <p></p> */}
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}