import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc307-hero.jpg'

export const metadata: Metadata = {
    title: 'UFC 307',
    description: "",
    openGraph: {
        title: 'UFC 307',
        description: "",
        url: 'https://fullmma.org/covertura-ufc/ufc307'
    }
}

export default function UFC307 () {
    return(
        <main>
            <ArticleHero title="UFC 307: ¡Alex Pereira y Khalil Rountree Encabezan el Evento! ¡Raquel Pennington tiene su primera defensa ante Julianna Peña!" subtitle='Además, en la cartelera estelar tendremos a José Aldo enfrentando a Mario Bautista y la posible próxima contendiente del título en la pelea entre Kayla Harrison y Ketlen Vieira' image={hero} date='2024-10-05' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En esta noche de UFC en Salt City tenemos una tremenda cartelera con varias peleas que vale la pena ver, siendo este evento encabezado por la pelea del título entre el campeón de los semipesados <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y el retador <b>Khalil Rountree Jr.</b> en una pelea que promete acción. Además, como cartelera co-estelar, tenemos la disputa por el título de peso gallo femenino entre la campeona <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link> y la retadora <Link href='/mujeres/julianna-pena'>Julianna Peña</Link>. </p>
                    <h2>Stephen Thompson Cae Noqueado Ante Joaquin Buckley en el Tercer Asalto</h2>
                    <p>En lo que era la última pelea de las preliminares, <b>Joequin Buckley</b> logra una importantísima victoria por KO ante el veterano <b>Stephen Thompson</b>, consiguiendo con esta su quinto victoria consecutiva en la división de peso wélter. </p>
                    <p>Para asegurarse de que no queden dudas, en una pelea que estaba siendo cerrada y que parecía que iba a terminar en la decisión de los jueces, el estadounidense decidió tomar acción para que no queden dudas de su victoria, conectando una mano en el aire que mandó a dormir a su rival, consiguiendo de esta manera la victoria por la vía del nocaut en el tercer asalto. </p>
                    <p>Por su parte, &quot;Wonderboy&quot;, con esta consigue su segunda derrota consecutiva, luego de haber perdido en diciembre del año pasado ante <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link>. Para peor, con esta nueva derrota, se puede decir que de sus últimas 5 peleas, sólo fue capaz de ganar 1, ante <b>Kevin Holland</b> que peleara en unos momentos, después perdió ante <b>Gilbert Burns</b>, ante el actual campeón <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, ante el mencionado Rakhmonov, y ahora ante <b>Joaquin Buckley</b>.</p>
                    <h2>Kayla Harrison Vence a Ketlen Vieira</h2>
                    <p>Victoria contundente para la estadounidense <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link>, quien en su segunda pelea en la UFC ante la #2 de la división, logra una victoria por decisión unánime que es más que merecida, por lo contundente de su desempeño a lo largo del combate. </p>
                    <p>De esta forma, Harrison se perfila como clara candidata al título de peso gallo femenino, que se disputará en unas pocas horas entre Raquel Pennington y Julianna Peña. Y así lo entendió la misma Kayla, que se presenta a sí misma como la futura campeona de la división. </p>
                    {/* <h2>Roman Dolidze vs Kevin Holland</h2>
                    <p></p>
                    <h2>José Aldo vs Mario Bautista</h2>
                    <p></p>
                    <h2>Raquel Pennington vs Julianna Peña</h2>
                    <p></p>
                    <h2>Alex Pereira vs Khalil Rountree</h2>
                    <p></p> */}
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}