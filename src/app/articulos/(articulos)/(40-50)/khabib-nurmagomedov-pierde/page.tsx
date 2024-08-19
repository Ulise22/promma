import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/40-50/khabib_pierde-hero.jpg'

export const metadata: Metadata = {
    title: 'Khabib Nurmagomedov Derrota',
    description: 'Muchos de nosotros jamás lo vimos caer derrotado, en muchos casos ni siquiera lo vimos sufrir durante una pelea. Sin embargo, existe un video que data de cuando el ruso tenía apenas 17 años y seguía compitiendo en Sambo (arte marcial ruso en la que se inició Khabib), en el que no sólo podemos contemplar su única derrota conocida, sino que podemos verlo sufrir y no ser capaz de imponerse durante el combate.',
    openGraph: {
        title: 'Khabib Nurmagomedov Derrota',
        description: 'Muchos de nosotros jamás lo vimos caer derrotado, en muchos casos ni siquiera lo vimos sufrir durante una pelea. Sin embargo, existe un video que data de cuando el ruso tenía apenas 17 años y seguía compitiendo en Sambo (arte marcial ruso en la que se inició Khabib), en el que no sólo podemos contemplar su única derrota conocida, sino que podemos verlo sufrir y no ser capaz de imponerse durante el combate.',
        url: 'https://fullmma.org/articulos/khabib-nurmagomedov-pierde'
    }
}

export default function KhabibPierde () {
    return(
        <main>
            <ArticleHero title='La Única Derrota de Khabib Nurmagomedov' subtitle='La historia y el vídeo de un joven Khabib de 17 años llorando después de perder una pelea de sambo en un campeonato ruso.' image={hero} date='2024-08-19' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El excampeón de peso ligero en la <Link href='/articulos/ufc'>UFC</Link> y leyenda de las MMA <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> destacó a lo largo de su carrera por su dominante estilo de lucha, que le garantizó victoria tras victoria, permitiéndole retirarse con un récord invicto de 29-0. </p>
                    <p>Debido a esto es que muchos de nosotros jamás lo vimos caer derrotado, en muchos casos ni siquiera lo vimos sufrir durante una pelea. Sin embargo, existe un video que data de cuando el ruso tenía apenas 17 años y seguía compitiendo en Sambo (arte marcial ruso en la que se inició Khabib), en el que no sólo podemos contemplar su única derrota conocida, sino que podemos verlo sufrir y no ser capaz de imponerse durante el combate.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/rLnYE6-TFlQ?si=svcVTfZTTONeSewx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En los casi 3 minutos que dura la pelea, podemos atestiguar cómo el de Daguestán se come unas cuantas patadas a la pierna que lo van condicionando para lo que sigue del combate. Además de que ya en el clinch, se come varios golpes y codazos a la cabeza que no es capaz de devolver de la misma manera.</p>
                    <p>Quizás lo que más llama la atención de la pelea, y especialmente para los que conocemos a Khabib más por su carrera en las MMA que en el sambo, es que durante todo el encuentro no es capaz de concretar un sólo derribo. Pese a que lo intenta en un par de ocasiones, su rival es capaz de defenderlos y seguir peleando.</p>
                    <p>Al finalizar el combate se puede ver como es que se está anunciando el resultado de la pelea, que da como ganador al rival de Khabib. Luego de esto, el ruso cae de rodillas lamentándose y llorando a lagrima viva. De este momento es para destacar como es que su rival practicamente no se toma el tiempo de celebrar la victoria, y va directo a consolar a Khabib, en un gran gesto de deportividad.</p>
                    <h2>¿Quién derrotó a Khabib Nurmagomedov?</h2>
                    <p>Quien fue capaz de vencer a Khabib ese día es Magomed Ibragimov, un luchador ruso que en el futuro se convertiría en un atleta olímpico, siendo capaz de ganar la medalla de bronce en los Juegos Olímpicos de Río de Janeiro en 2016, y ganando la medalla de bronce en los Juegos Asiáticos de 2018.</p>
                    <p>Para cuando se enfrentó a Khabib tenía 20 años, y estaba representando a la República de Chechenia (de donde es <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> por ejemplo), a pesar de ser él mismo un peleador nacido en Daguestán igual que su entonces rival.</p>
                    <p>Magomed obtendría la nacionalidad de Uzbekistán en 2016, y sería en representación de este país que ganaría la medalla olímpica en 2016. Comenzando a competir desde entonces en representación de ese país. Ganando además de las mencionadas medallas de bronce, las medallas de oro de Los campeonatos Asiáticos en 2017 y 2018; la medalla de bronce en los <b>Juegos de Solidaridad Islámica</b>; y el bronce en la <b>Bolat Turlykhanov Cup</b>.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}