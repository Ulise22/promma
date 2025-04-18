import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import tsarukyan from '@/assets/peleadores__images/0-100/20-30/arman-tsarukyan/arman-tsarukyan.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Arman Tsarukyan',
    description: 'Arman Tsarukyan en peleador de nacionalidad armenia y rusa, que compite en la división de peso ligero de la UFC, desde que hiciera su debut contra el ruso Islam Makhachev el 20 de abril de 2019, quien luego de 3 asaltos lo derrotaría por decisión unánime.',
    openGraph: {
        title: 'Arman Tsarukyan',
        description: 'Arman Tsarukyan en peleador de nacionalidad armenia y rusa, que compite en la división de peso ligero de la UFC, desde que hiciera su debut contra el ruso Islam Makhachev el 20 de abril de 2019, quien luego de 3 asaltos lo derrotaría por decisión unánime.',
        url: 'https://fullmma.org/peleadores/arman-tsarukyan'
    }
}

export default function Tsarukyan () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={tsarukyan} w={22} l={3} d={0} nombre='Arman Tsarukyan' apodo='AHALKALAKETS' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan UFC</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan en peleador de nacionalidad armenia y rusa, que compite en la división de peso ligero de la UFC, desde que hiciera su debut contra el ruso <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> el 20 de abril de 2019, quien luego de 3 asaltos lo derrotaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Actualmente es de los peleadores más importantes en la división de peso ligero en la UFC, teniendo en su haber victorias tan meritorias como la obtenida ante el excampeón de la división <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, o contra <b>Beneil Dariush</b>, que lo posicionan como uno de los mejores luchadores de las 155lbs en estos momentos. </p>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan Récord</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan posee un récord de 22-3. Siendo 9 de sus 21 victorias por la vía del nocaut, 5 por la vía de la sumisión y 8 por decisión de los jueces. Mientras que de sus 3 derrotas, 2 han sido por decisión y sólo 1 por nocaut al inicio de su carrera en 2015.</p>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan Historia</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan nació el 11 de octubre de 1996 en Ajalkalaki, un pequeño pueblo de Georgia cercano a la frontera con Armenia. Es el hermano del medio de 3, teniendo un hermano mayor llamado Artur y una hermana menor llamada Isabella, y es el hijo de un empresario inmobiliario llamado Nairi Tsarukyan, con quienes a la edad de 3 años se mudó a Rusia en busca de mejorar su calidad de vida.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/OuVDFYjRslA?si=WDeaWyQVFSjHYtqV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Arman desde muy joven estuvo interesado en los deportes, llegando a interesarse en el hockey sobre hielo, deporte que practicó durante 10 años, y en el freestyle wrestling donde llegó a destacar. Aunque una vez entrando a la adultez, se vió obligado a abandonar estos deportes para colaborar con su padre en trabajos de construcción. </p>
                    <p className={styles.peleador__article__text}>Haría su debut como profesional en las MMA el 25 de septiembre de 2015, con tan sólo 20 años, en una promotora local de Rusia llamada <b>MFP</b>, en la que competiría gran parte de sus primeros años como peleador. Aquel debut fue contra el ruso <b>Shamil Olokhanov</b>, a quien sería capaz de noquear en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Su segundo combate como profesional se dió tan sólo un par de meses después, en la misma promotora, contra el ruso <b>Alexander Belikh</b>, quien en tan sólo 30 segundos fue capaz de noquear a nuestro protagonista. Este sería, al menos hasta ahora, el único KO que recibiría en toda su carrera, dado que rápidamente fue capaz de reponerse de esta derrota al vencer por KO al ruso <b>Ali Khaibulaev</b>. </p>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan pelearía de forma muy activa en promotoras rusas y asiáticas en el lapso de 3 años, donde tendría combates, entre los que destacarían, su revancha contra <b>Alexander Belikh</b>, a quien en esta ocasión derrotaría con una sumisión lograda en el primer asalto de la pelea. Además, lograría convertirse en campeón de la ya mencionada <b>MFP</b>, luego de derrotar al japonés <b>Takenori Sato</b> por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dmTKu3R7mXU?si=AukA9OEmF4w5vLAJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Finalmente, llegaría a la <Link href='/articulos/ufc'>UFC</Link> en 2019, habiendo acumulado un récord de 13-1, debutando el 20 de abril contra el ahora campeón de la división <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien lo derrotaría por decisión unánime luego de los 3 asaltos, en lo que fue un combate muy complicado para ambos.</p>
                    <p className={styles.peleador__article__text}>Pese a debutar con una derrota, sería capaz de reponerse de esta rápidamente, ganando su siguiente combate en julio de ese año ante el canadiense <b>Olivier Aubin-Mercier</b>, a quien derrotaría por decisión unánime en el UFC 240. Su siguiente pelea, que tendría lugar un año después, terminaría de la misma manera al vencer por decisión al brasileño <b>Davi Ramos</b>. </p>
                    <p className={styles.peleador__article__text}>En enero de 2021 enfrentaría al estadounidense <b>Matt Frevola</b>, teniendo problemas para dar el peso por lo que se pactó en 157 libras, a quien sería capaz de derrotar nuevamente por decisión. En septiembre de ese mismo año alargaría su racha de victorias cuando enfrentando al estadounidense <b>Christos Giagos</b>, conseguiría su primer finalización en la compañía, derrotando a su rival por TKO en el primer asalto, ganando además el primer bono de su carrera a la Actuación de la Noche. Finalmente sería capaz de extender su racha de victorias a 5, cuando enfrentando al español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, lo noquearía en el segundo asalto de la pelea, ganando nuevamente el bono a la Actuación de la Noche por su desempeño. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/v6c_KMa49KM?si=kEbcmXERoG_m9cid" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Lamentablemente esta racha de victorias se vería interrumpida luego de que en un evento de UFC encabezado por él, caería derrotado ante el polaco <b>Mateusz Gamrot</b>, en una pelea que se extendería hasta los 5 asaltos y que se llevaría su rival por decisión unánime. Pese a perder, tendría el consuelo de haberse ganado el bono a la Pelea de la Noche.</p>
                    <p className={styles.peleador__article__text}>Nuestro protagonista sabría reponerse muy bien de la victoria nuevamente, consiguiendo volver al sendero de la victoria cuando derrotaría al ruso <b>Damir Ismagulov</b> por decisión unánime en el diciembre de 2022. En junio del 2023 tendría una pelea ante el brasileño <b>Joaquim Silva</b>, contra quien llegando al tercer asalto, sería capaz de noquear a base de golpes. </p>
                    <p className={styles.peleador__article__text}>Se programaría a Tsarukyan para encabezar un evento de UFC Fight Night ante el estadounidense <b>Beneil Dariush</b>, a quien enfrentaría el 2 diciembre de ese mismo año. Aquella noche, Arman conseguiría destacar con una victoria impresionante, en la que dejaría KO a su rival en el primer asalto de la pelea, ganando una vez más el bono a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>Es entonces que llegaría la que quizás sea la pelea más importante de su carrera hasta ese momento, cuando sería participe de la cartelera estelar del <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link> para enfrentar al excampeón de la división <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, en lo que la UFC anunció como una eliminatoria titular, por lo que de ganar podría enfrentar en una revancha al ahora campeón <Link href='/peleadores/islam-makachev'>Islam Makhachev</Link>. Aquella noche del 13 de abril de 2024, Arman sería capaz de derrotar al brasileño en lo que fue una pelea bastante cerrada, logrando llevarse la pelea por decisión dividida. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/EBbKU3F7SoA?si=CHtAGC8nhFBbo6e3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}