import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/yan-vs-figueiredo.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Petr Yan vs Deiveson Figueiredo ',
    description: '',
    openGraph: {
        title: 'Petr Yan vs Deiveson Figueiredo ',
        description: '',
        url: 'https://fullmma.org/covertura-ufc/fight-night-yan-figueiredo'
    }
}

export default function MoicanoSaintDenis () {
    return(
        <main>
            <ArticleHero title='UFC CHINA: ¡Yan Xiaonan Derrota a Tabatha Ricci! ¡Petr Yan Derrota a Deiveson Figueiredo en la Pelea de la Noche!' subtitle='Carlos Ulberg derrota a Vokan Oezdemir por decisión en una excelente actuación por su parte. Gabriella Fernandes da la sorpresa y Somete a Wang Cong. Muslim Salikhov noquea a Song Kenan en el primer asalto.' image={hero} date='2024-11-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de UFC en la región de Macao en China, con una obvia presencia de luchadores del país asiático. Como evento estelar tenemos a 2 de los mayores contendientes al título de la división de peso gallo como lo son <b>Petr Yan</b> y <b>Deiveson Figueiredo</b>, que se enfrentarán en una pelea a 5 asaltos. Además, como evento coestelar, tendremos el enfrentamiento femenino de peso paja entre la china <Link href='/mujeres/yan-xiaonan'>Yan Xianan</Link> y la brasileña <b>Tabatha Ricci</b>. </p>
                    <h2>Zhang Mingyang Noquea a Ozzy Diaz en el Primer Asalto</h2>
                    <p>En la primera pelea de la cartelera estelar, el peleador chino <b>Zhang Mingyan</b>, quien esta en su segunda pelea en la UFC, luego de lo que fue su debut en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, continua sin decepcionar, consiguiendo una nueva victoria por la vía del nocaut en el primer asalto de la pelea. </p>
                    <p>Se pudo ver a un Mingyang bastante tranquilo al inicio de la pelea, que con paciencia supo esperar el momento adecuado para atacar de la mejor manera, conectando un codo que derribó a su rival, consiguiendo de esta manera su segunda victoria consecutiva por la vía del nocaut en sus 2 primeras peleas en la UFC. </p>
                    <h2>Carlos Ulberg Derrota a Vokan Oezdemir por Decisión</h2>
                    <p>En lo que es hasta el momento una de las mejores peleas de la noche, dando la sensación de que podía acabar en cualquier momento en el instante que uno de los 2 lograra conectar un golpe que llevara a la lona a su rival, quien terminó por llevarse la victoria fue <b>Carlos Ulberg</b>, quien a pesar de haber conectado menos golpes que su rival, fue quien más daño hizo cuando conectó, dando la sensación de que podría haber dejado KO en cualquier momento al suizo.</p>
                    <p>Fue una destacada actuación por parte de Ulberg, quien conectó los mejores golpes a lo largo del encuentro, y que en el tercer asalto fue capaz de defender todos los intentos de derribo de su rival, manteniendo la pelea de pie en todo momento, donde se lo veía más cómodo. </p>
                    <h2>Gabriella Fernandes Somete a Wang Cong en el Segundo Asalto</h2>
                    <p>La brasileña <b>Gabriella Fernandes</b> da la sorpresa de la noche al conectar una mataleón para someter a la china <b>Wang Cong</b> en el segundo asalto de la pelea. </p>
                    <p>En una pelea donde la china Cong, que venía invicta y que estaba dominando durante todo el combate, la pelea terminó por dar un giro inesperado, cuando la brasileña Gabriella fuera capaz primero, de conectar una patada a la cabeza que dejó tocada a su rival, y después un puño que la derribaría, aprovechando el momentum para ir en busca de una mataleón que conectaría de manera profunda, dejando inconsciente a su rival, para terminar llevándose la pelea y muy probablemente el bono de los 50k. </p>
                    <h2>Muslim Salikhov Deja KO a Song Kenan en el Primer Asalto</h2>
                    <p>Tremenda victoria del luchador de Daguestán <b>Muslim Salikhov</b>, que conectó una patada giratoria con su pierna derecha para dejar KO al luchador chino <b>Song Kenan</b> que estaba de local. </p>
                    <p>Esta es la segunda victoria consecutiva del daguestaní, que venía de una victoria por decisión ante el luchador argentino <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link> este mismo año. </p>
                    <h2>Yan Xiaonan Derrota a Tabatha Ricci por Decisión Unánime</h2>
                    <p>La peleadora china <Link href='/mujeres/yan-xiaonan'>Yan Xiaonan</Link> logra una estupenda victoria ante la brasileña <b>Tabatha Ricci</b> por decisión de los jueces, en lo que fue una actuación absolutamente dominante, conectando ampliamente más golpes que su rival, que nada pudo hacer ante una Yan, que supo usar a su favor la altura y la distancia, para conectar muchos golpes sin recibir daño practicamente. </p>
                    <p>De esta manera la peleadora china que estaba peleando en casa, logra una importante victoria ante la #10 de los rankings de la división ante su gente. </p>
                    <h2>¡Petr Yan Derrota a Deiveson Figueiredo en la Pelea de la Noche!</h2>
                    <p>Tremenda exhibición de artes marciales mixtas que tuvimos el día de hoy con la pelea estelar de la cartelera, en un combate que tuvo de todo dada la capacidad creativa de ambos luchadores. Finalmente el ganador de es este combate sería el ruso <b>Petr Yan</b>, quien fue el claro dominador de la pelea, mostrando una creatividad que pocos tienen a la hora del striking, con un upper que entraba constantemente en la mandibula del brasileño, una excelente defensa de derribos y en general un desempeño como artista marcial mixto impecable. </p>
                    <p>El brasileño Deiveson Figueiredo también tuvo sus momentos durante la pelea, llegando a conectar un knockdown en el cuarto asalto que podría haber puesto en muchos problemas a su rival. Sin embargo, el ruso supo reponerse y ambos luchadores terminaron por darnos un espectáculo, al que no queda otra cosa que hacer, más que ponerse de pie y aplaudir por lo dado por estos luchadores. </p>
                    <p>Petr Yan no dudó en desafiar al campeón <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> a una revancha, dado que este había dicho que Figueiredo el contendiente #1, y este acaba de ser vencido por el ruso.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}