import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/whittaker-deridder.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC Abu Dhabi: ¡Robert Whittaker vs Reiner De Ridder!',
    description: 'Pelea entre Robert Whittaker y Reiner de Ridder en el UFC Abu Dhabi de este sábado 26 de julio de 2025.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhittaker-deridder.abb93657.webp&w=828&q=65',
        title: 'UFC Abu Dhabi: ¡Robert Whittaker vs Reiner De Ridder!',
        description: 'Pelea entre Robert Whittaker y Reiner de Ridder en el UFC Abu Dhabi de este sábado 26 de julio de 2025.',
        url: 'https://fullmma.org/covertura-ufc/fight-night-whittaker-deridder'
    }
}

export default function WhittakerDeRidder () {
    return(
        <main>
            <ArticleHero title='UFC Abu Dhabi: ¡Robert Whittaker vs Reiner De Ridder!' subtitle='¡Petr Yan vs Marcus McGhee! ¡Shgara Magomedov vs Mar-André Barriault!' image={hero} date='2025-07-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Muy buen evento de UFC tenemos el día de hoy, con una aperitivo estelar espectacular, donde el excampeón de peso medio de la UFC, <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> se enfrentará al ex doble campeón de ONE Championship, <b>Reiner De Ridder</b>, en una pelea que promete ser memorable. </p>
                    <p>Además contamos con la presencia de tremendos peleadores que siempre son garantía de acción en el octágono, como lo son el ruso <b>Petr Yan</b>, quien estará enfrentando a <b>Marcus McGhee</b> en la pelea coestelar. Y contaremos con el regreso del Pirata, de <Link href='/peleadores/shara-magomedov'>Shara &quot;Bullet&quot; Magomedov</Link>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Billy Elekana Derrota a Ibo Aslan Por Decisión Unánime</h2>
                    <p>En una pelea bastante decepcionante y con poca acción para ser honestos, quien se terminó por llevar la victoria a su récord fue el estadounidense <b>Billy Elekana</b>, que fue capaz de conectar algunos pocos golpes más que su rival, en un combate donde ambos estuvieron demasiado expectantes de lo que hacía el otro, provocando que apenas se tiraran golpes. </p>
                    <h2>Tabatha Ricci Noquea a Amanda Ribas en el Segundo Asalto</h2>
                    <p>Tremenda victoria de la brasileña <b>Tabatha Ricci</b>, quien en el segundo asalto, mientras tenía en el clinch a su rival, le propinó un golpe con el codo a la cara de <b>Amanda Ribas</b>, que la lastimó un montón, necesitando sólo de un par de golpes extras para terminar finalizando a su rival y llevarse la victoria por TKO, seguramente ganándose hasta un bono por desempeño en el camino. </p>
                    <h2>Davey Grant Derrota a Da&apos;Mon Blackshear por Decisión Unánime en una Pelea Increíble</h2>
                    <p>El luchador inglés se lleva la victoria el día de hoy, luego de una actuación digna de destacar, al saber remontar el combate luego de un fallido primer asalto, en el que fue derribado bastante temprano y donde estuvo casi la totalidad de los 5 minutos que duró el round evitando ser sometido por su rival. Pero que para el segundo asalto fue capaz de hacer correcciones para evitar que eso volviera a suceder y para ir ganando cada vez más control y dominio sobre su rival, brindándonos una de las mejores peleas del día, con un striking arroyador contra el que Blackshear no pudo hacer nada. Finalmente, el inglés <b>Davey Grant</b> se llevó la victoria por decisión unánime. </p>
                    <h2>Muslim Salikhov Noquea a Carlos Leal en el Primer Asalto</h2>
                    <p>El luchador de Daguestán logra llevarse la victoria sin apenas hacerse un rasguño, al conectar una mano derecha en la cabeza de su rival que lo dejaría instantaneamente KO al comienzo del primer asalto. Excelente actuación del ruso digna de un bono por desempeño. </p>
                    <h2>Bryce Mitchell Derrota a Said Nurmagomedov por Decisión Unánime</h2>
                    <p>Espectacular debut del estadounidense <b>Bryce Mitchell</b> en la división de peso gallo de la UFC ante <b>Said Nurmagomedov</b>, quien hizo lo que al 99% de los peleadores les suena a misión imposible, ganarle a un luchador de Daguestán en el suelo, mostrando un nivel de BJJ por encima de la media, y mostrandose muy dominante ante su rival, especialmente en el segundo y tercer asalto, que fueron los que le dieron la victoria a los ojos de los jueces. De esta manera, termina la cartelera preliminar que nos dejó 3 nocauts y muchas peleas dignas de un evento de UFC. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Bogdan Guskov Noquea a Nikita Krylov en el Primer Asalto</h2>
                    <p>Tremenda manera de iniciar la cartelera estelar con esta pelea en peso semipesado que terminó con la victoria de un Bogdan Guskov por la vía del nocaut en el primer asalto, que viene imparable, que venía de 3 victorias consecutivas por finalización (con 2 nocauts y 1 sumisión), y que ahora extiende esa racha a 4, con 3 nocauts en su récord. </p>
                    <h2>Asu Almabayev Derrota a Jose Ochoa Por Decisión Unánime</h2>
                    <p>Tremenda pelea la que nos dieron estos 2 luchadores de peso mosca, con un Almabayev que hizo valer su posición en el top 10 de los rankings, dando una mejor pelea siendo local practicamente, al tener a todo el público en su favor. Pero de igual manera es para destacar el más que digno papel que hizo el peruano José Ochoa, que pese a aceptar la pelea en corto aviso, de venir de pelear hace 5 semanas donde logró ganar por nocaut, y de tan sólo tener 24 años enfrentándose a un top 10 que contaba con el público a favor, luchó como un guerrero a pesar de tener practicamente todo en contra. </p>
                    <h2>Shara Magomedov Derrota a Marc-Andre Barriault por Decisión Unánime</h2>
                    <p>El Daguestaní, <Link href='/peleadores/shara-magomedov'>Shara Magomedov</Link> logra conseguir la victoria por la vía de la decisión en lo que fue una auténtica guerra, un combate de los que vale la pena ver, demostrando que el aprecio que le tiene la gente a Shara, no se debe solamente a su look partícular, sino a que cada vez que se sube al octágono nos regala combates llenos de emoción y de acción que valen la pena ver. Con esta victoria, Shara Bullet extiende su récord a 16-1, luego de lo que fue derrota ante Michael Page en su último combate. </p>
                    <h2>Petr Yan Derrota a Marcus McGhee Por Decisión Unánime</h2>
                    <p>El ruso <b>Petr Yan</b> se lleva la pelea coestelar de la noche en una actuación completamente dominante, desde principio a fin demostró ser el mejor peleador, demostrando porqué ocupa un lugar tan alto en las 135lbs, al tener unas habilidades de pelea de élite, que hoy sacó a relucir ante un estadounidense <b>Marcus McGhee</b> que poco pudo hacer ante las habilidades de su rival. Habiendo alcanzado su tercera victoria consecutiva, es probable que se haya ganado la oportunidad de pelear por el título de peso gallo en el futuruo cercano. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}