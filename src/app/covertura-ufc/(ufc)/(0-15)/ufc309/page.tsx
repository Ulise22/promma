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
                    <h2>¡Jim Miller Somete a Damon Jackson en el Primer Asalto!</h2>
                    <p>El estadounidense <Link href='/articulos/jim-miller-historia'>Jim Miller</Link>, que con sus 41 años ya es el luchador con más peleas en la UFC, consigue una nueva victoria al conectar una guillotina que somete a su rival en el primer asalto del combate. Con esta pelea alcanza las 38 victorias en su carrera, siendo el peleador con más victorias en la historia de la UFC con 27, siendo un peleador histórico en la compañía.</p>
                    <p>Esta es su segunda pelea en el año, dado que había competido en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, enfrentando a <b>Bobby Green</b>, donde lamentablemente caería derrotado, pero alcanzaría el hito de haber participado en el UFC 100, UFC 200 y el UFC 300. </p>
                    <h2>Marcus Mcghee Derrota a Jonathan Martinez por Decisión y se Mete al Ranking de Peso Gallo</h2>
                    <p>El estadounidense <b>Marcus Mcghee</b>, luego de dominar completamente durante los 2 primeros asaltos a su compatriota ranqueado #13, <b>Jonathan Martinez</b>, logra llevarse una merecida victoria por decisión de los jueces. </p>
                    <p>Durante el tercer asalto vimos la posibilidad de que cambiara el resultado de la pelea, cuando unas patadas en la pierna por parte de Martinez, dejaron muy lastimado a McGhee, quien apenas si se pudo mantener de pie durante el tercer asalto. Sin embargo,Marcus aguantó como un guerrero, y se llevó la pelea por decisión unánime, con todos los jueces dando un 29-28 a la pelea. </p>
                    <h2>Mauricio Ruffy Derrota a James Llontop Por Decisión</h2>
                    <p>El brasileño <b>Mauricio Ruffy</b> logra una victoria por decisión unánime ante el peruano <b>James Llontop</b>, que había tomado la pelea en corto aviso. </p>
                    <p>La pelea no fue para nada cerrada, puesto que el brasileño conectó los mejores golpes y dominó la pelea durante los 3 asaltos. Manteniendo el combate de pie durante la mayor parte del tiempo, y estando cerca de noquear al peruano, Ruffy es capaz de llevarse una clara victoria que extiende su récord a 11-1. </p>
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