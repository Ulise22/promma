import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/0-15/ufc311.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC 311',
    description: "Pelea entre Islam Makhachev y Renato Moicano por el título de peso ligero. Además de la pelea entre Merab Dvalishvili vs Umar Nurmagomedov en la coestelar en una pelea por el cinturón de peso gallo de la UFC. ",
    openGraph: {
        title: 'UFC 311',
        description: "Pelea entre Islam Makhachev y Renato Moicano por el título de peso ligero. Además de la pelea entre Merab Dvalishvili vs Umar Nurmagomedov en la coestelar en una pelea por el cinturón de peso gallo de la UFC. ",
        url: 'https://fullmma.org/covertura-ufc/ufc311'
    }
}

export default function UFC311 () {
    return(
        <main>
            <ArticleHero title="UFC 311: ¡Islam Makhachev vs Renato Moicano Por el Campeonato de Peso Ligero! ¡Merab Dvalishvili vs Umar Nurmagomedov Por el Cinturón de Peso Gallo!" subtitle='Evento numerado de PPV que además nos trae la pelea de Ailín Pérez vs Karol Rosa, la pelea de Payton Talbott, y el combate entre Jiri Prochazka y Jamahal Hill.' image={hero} date='2025-01-18' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Primer evento numerado del año 2025 en el UFC 311, organizado en California en el Intuit Dome, con la pelea estelar por el cinturón de peso ligero entre el actual campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> y el retador brasileño <Link href='/peleadores/renato-moicano'>Renato Moicano</Link>, quien aceptó pelear con el campeón con un día de anticipación, luego de que <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> se bajara del combate por una lesión en la espalda, cancelando de esta forma su combate con <b>Beneil Dariush</b>. Además, tenemos otra pelea títular como evento coestelar en el enfrentamiento entre el actual campeón de peso gallo <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, y el retador del título, <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, quien estará en su esquina ayudándolo. </p>
                    <p>Por si fuera poco, tendremos en el único combate femenino de la noche, la pelea de la Argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link> y la #9 del ranking <b>Karol Rosa</b>, en un combate que de ganar, pondrá a la Argentina en el top 10 de su división. Además, tendremos de vuelta una pelea con <b>Payton Talbott</b> como protagonista, quien es el gran favorito de la noche ante Raoni Barcelos. También estarán presentes en la cartelera estelar los 2 excampeones de peso semipesado, <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> y <b>Jamahal Hill</b>, ambos vienen de una derrota por nocaut ante <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y buscarán una victoria que los vuelva a colocar como contendientes al cinturón. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2> */}
                    {/* <h2>Tagir Ulanbekov vs Clayton Carpenter</h2>
                    <p></p> */}
                    {/* <h2>Ticky Turcios vs Barnardo Sopaj</h2>
                    <p></p> */}
                    {/* <h2>Rinya Nakamura vs Muin Gafurov</h2>
                    <p></p> */}
                    {/* <h2>Ailín Pérez vs Karol Rosa</h2>
                    <p></p> */}
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2> */}
                    {/* <h2>Grant Dawson vs Diego Ferreira</h2>
                    <p></p> */}
                    {/* <h2>Bogdan Guskov vs Billy Elekana</h2>
                    <p></p> */}
                    {/* <h2>Zachary Reese vs Azamat Bekoev</h2>
                    <p></p> */}
                    {/* <h2>Payton Talbott vs Raoni Barcelos</h2>
                    <p></p> */}
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2> */}
                    {/* <h2>Kevin Holland vs Reinier de Ridder</h2>
                    <p></p> */}
                    {/* <h2>Jailton Almeida vs Serghei Spivac</h2>
                    <p></p> */}
                    {/* <h2>Jiri Prochazka vs Jamahal Hill</h2>
                    <p></p> */}
                    {/* <h2>Merab Dvalishvili vs Umar Nurmagomedov</h2>
                    <p></p> */}
                    {/* <h2>Islam Makhachev vs Renato Moicano</h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}