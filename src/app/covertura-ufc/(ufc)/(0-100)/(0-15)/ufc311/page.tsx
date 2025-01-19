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
            <ArticleHero title="UFC 311: ¡Islam Makhachev vs Renato Moicano Por el Campeonato de Peso Ligero! ¡Merab Dvalishvili Derrota a Umar Nurmagomedov y Retiene Cinturón de Peso Gallo!" subtitle='Ailín Pérez logra una victoria por decisión unánime ante Karol Rosa y se Mete en el top 10. Jailton Almeida gana por nocaut a Spivac. Jiri Prochazka Noquea a Jamahal Hill.' image={hero} date='2025-01-18' author={null} updatedDate='2025-01-19' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Primer evento numerado del año 2025 en el UFC 311, organizado en California en el Intuit Dome, con la pelea estelar por el cinturón de peso ligero entre el actual campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> y el retador brasileño <Link href='/peleadores/renato-moicano'>Renato Moicano</Link>, quien aceptó pelear con el campeón con un día de anticipación, luego de que <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> se bajara del combate por una lesión en la espalda, cancelando de esta forma su combate con <b>Beneil Dariush</b>. Además, tenemos otra pelea títular como evento coestelar en el enfrentamiento entre el actual campeón de peso gallo <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, y el retador del título, <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, quien estará en su esquina ayudándolo. </p>
                    <p>Por si fuera poco, tendremos en el único combate femenino de la noche, la pelea de la Argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link> y la #9 del ranking <b>Karol Rosa</b>, en un combate que de ganar, pondrá a la Argentina en el top 10 de su división. Además, tendremos de vuelta una pelea con <b>Payton Talbott</b> como protagonista, quien es el gran favorito de la noche ante Raoni Barcelos. También estarán presentes en la cartelera estelar los 2 excampeones de peso semipesado, <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> y <b>Jamahal Hill</b>, ambos vienen de una derrota por nocaut ante <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y buscarán una victoria que los vuelva a colocar como contendientes al cinturón. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Tagir Ulanbekov Derrota a Clayton Carpenter en la Primer Pelea de la Noche</h2>
                    <p>La primer pelea del evento termina con una victoria para el #11 de la división de peso mosca, Tagir Ulabekov, quien contó con el apoyo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> en su esquina, logrando una cómoda victoria por decisión unánime, luego de ganar los 3 asaltos de la pelea, a ojos de los jueces. </p>
                    <h2>Ricky Turcios Cae Derrotado ante Barnardo Sopaj</h2>
                    <p>El luchador de Albania consigue su primer victoria en la UFC por decisión unánime ante el luchador con ascendencia de El Salvador, <b>Ricky Turcios</b>, quien además venía de una derrota ante el mexicano <Link href='/peleadores/raul-rosas-jr'>Raul Rosas Jr.</Link>. </p>
                    <p>En lo que fue una pelea que Sopaj dominó constantemente, estando cerca en más de una ocasión de la finalización vía KO/TKO, fue incapaz de acabar con su rival quien resistió como un campeón todo lo que le tiró. De igual forma, cuando la pelea fue a las tarjetas, Bernardo Sopaj se llevó la victoria en lo que fue una increíble pelea. </p>
                    <h2>Rinya Nakamura Pierde el Invicto Ante Muin Gafurov</h2>
                    <p>El luchador de Tayikistán, logró una increíble victoria ante el japonés <b>Rinya Nakamura</b>, quien partía como favorito al inicio de la pelea, siendo capaz de quitarle el invicto a su rival en lo que fue una tremenda pelea.</p>
                    <p>Dominando en todas las aritstas de la pelea a su rival, y estando cerca de noquear en más de una ocasión, con golpes que conectaron de lleno y tiraron al suelo al japonés, Muin Gafurov logró hacerse con la victoria por decisión unánime, luego de vencer en todos los asaltos al japonés. </p>
                    <h2>Ailín Pérez Derrota a Karol Rosa y se Mete en el top10</h2>
                    <p>La argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link> logra una importantísima victoria por decisión unánime, luego de dominar especialmente los primeros 2 asaltos de la pelea ante la brasileña, siendo capaz de concretar un derribo en ambos asaltos, y de mantener en el suelo a Karol Rosa que fue incapaz de ponerse de pie cuando la argentina la derribó. </p>
                    <p>El tercer asalto se jugó principalmente de pie en striking, donde se vió la mejor cara de la brasileña, que sin embargo ya había perdido los primeros 2 asaltos, y que de igual manera se encontró con una Ailín Pérez que mejoró muchísimo en este aspecto, siendo capaz de resistir los golpes de Rosa, y de conectar ella misma algunos buenos golpes.</p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Grant Dawson Derrota a Diego Ferreira</h2>
                    <p>El estadounidense logra una victoria dominante ante el brasileño <b>Diego Ferreira</b>, luego de ser capaz de derribarlo en repetidas ocasiones, castigándolo a ras de lona durante todos los 3 asaltos, consiguiendo una merecida victoria por decisión unánime, que lo acerca bastante al top 15 de la división de peso ligero. </p>
                    <h2>Bogdan Guskov Somete a Billy Elekana en el Segundo Asalto</h2>
                    <p>En un confuso episodio, luego de que Elekana dominara, estando cerca de finalizar, durante el primer asalto. El luchador nanqueado #13 en la división de peso semipesado <b>Bogdan Guskov</b>, fue capaz de darle vuelta a la tortilla, golpeando hasta el cansancio a su rival en el segundo asalto, y siendo finalmente capaz de someterlo con una guillotina en el segundo asalto, consiguiendo la primera finalización de la noche. </p>
                    <h2>Azamat Bekoev Noquea a Zachary Reese en el Primer Asalto</h2>
                    <p>El luchador ruso que estaba haciendo su debut en corto aviso en la UFC, consiguió lo que fue una gran victoria por la vía del nocaut en el primer asalto, luego de ser capaz de derribar a su rival y castigarlo a golpes, hasta que finalmente una de esas manos que estaban penetrando la cabeza de su rival lo mandaron a dormir, llevando al árbitro a parar la pelea para coronar a Bekoev como ganador, y como el autor del primer nocaut de la noche. </p>
                    <h2>Payton Talbott Pierde el Invicto ante Raoni Barcelos</h2>
                    <p>El luchador estadounidense <b>Payton Talbott</b> cae derrotado sorprendentemente ante el brasileño <b>Raoni Barcelos</b>, quien fue capaz de quitarle el invicto a Payton, en lo que era la pelea más dispareja según las casas de apuestas, que daban al estadounidense como claro favorito. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Reinier de Ridder Somete a Kevin Holland en el Primer Asalto</h2>
                    <p>Abrimos la cartelera estelar con una impresionante victoria por parte neerlandés <b>Reinier de Ridder</b>, quien fue capaz de someter al luchador americano <b>Kevin Holland</b> en el primer asalto, luego de conectar un mataleón que obligaría al de Estados Unidos a tapear. De esta forma, el de Países Bajos logra la victoria en su segunda pelea en la UFC.</p>
                    <h2>Jailton Almeida Noquea a Serghei Spivac en el Primer Asalto</h2>
                    <p>El brasileño logra una victoria por la vía del nocuat en el primer asalto de la pelea, luego de ser derribado y de sufrir un poco de castigo por parte de su rival, Serghei Spivac, fue capaz de dar la vuelta al combate, acabando por encima y golpeando la cabeza de su rival hasta que el árbitro los separó y le otorgó la victoria a Jailton Almedia por nocaut. </p>
                    <h2>Jiri Prochazka Noquea a Jamahal Hill en el Tercer Asalto</h2>
                    <p>El peleador de República Checa logra una espectacular victoria por nocaut en el tercer asalto luego de lo que fue una auténtica exhibición de striking por parte de <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. Que aunque no dominó por completo a Jamahal Hill, que recordemos es un excampeón muy bueno en striking, sí fue superior, trasladando esa superioridad al resultado, esquivando un golpe de su rival, para después conectar 2 golpes de izquierda y derecha que tumbarían en el suelo al estadounidense. </p>
                    <h2>Merab Dvalishvili Derrota a Umar Nurmagomedov</h2>
                    <p>El georgiano <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> retiene el cinturón de peso gallo, luego de derrotar a <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link> en lo que fue un peleón.</p>
                    <p>A simple vista Umar ganó los 2 primeros asaltos, pero el cardio de Merab es de otro planeta, sosteniendo un nivel de pelea y de actividad muy alto que cansó a su rival para el tercer asalto, mientras que el de Georgia se mantenía como si recién hubiera comenzado el combate. De esta forma, Merab fue capaz de conectar un montón de golpes y de derribar en varias ocasiones a su rival, consiguiendo la victoria por decisión y completando la primer defensa exitosa de su cinturón. </p>
                    {/* <h2>Islam Makhachev vs Renato Moicano</h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}