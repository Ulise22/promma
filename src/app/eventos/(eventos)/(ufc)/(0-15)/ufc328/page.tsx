import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc328.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 328: ¡Khamzat Chimaev vs Sean Strickland!',
    description: "UFC 328 con Khamzat Chimaev defendiendo el título ante Sean Strickland. Además, el japonés Tatsuro Taira busca quitarle el cinturón de peso mosca a Joshua Van. ",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc328.8c6f1437.webp&w=828&q=65',
        title: 'UFC 328: ¡Khamzat Chimaev vs Sean Strickland!',
        description: "UFC 328 con Khamzat Chimaev defendiendo el título ante Sean Strickland. Además, el japonés Tatsuro Taira busca quitarle el cinturón de peso mosca a Joshua Van. ",
        url: 'https://fullmma.org/eventos/ufc328'
    }
}

export default function UFC328 () {
    return(
        <main>
            <ArticleHero title="UFC 328: ¡Khamzat Chimaev vs Sean Strickland! ¡Joshua Van vs Tatsuro Taira!" subtitle='¡Waldo Cortes Acosta vs Alexander Volkov! ¡Yaroslav Amosov Somete a Joel Álvarez en el Segundo Asalto!' image={hero} date='2026-05-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tremenda cartelera tenemos esta noche, una de las mejores del año que nos trae la UFC, en New Jersey, encabezada por el campeón de peso mediano <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, quien viene de ganar el cinturón al sacárselo a <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, quien estará enfrentando al excampeón estadounidense <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien viene de una gran victoria por nocaut ante <b>Anthony Hernandez</b> en el <Link href='/eventos/fight-night-strickland-hernandez'>UFC Fight Night: Strickland vs Hernandez</Link>. ADemás en la pelea coestelar tenemos otra pelea titular, con el campeón birmano <Link href='/peleadores/joshua-van'>Joshua Van</Link> haciendo su primer defensa luego de sacarle el cinturón a <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, ante el japonés <b>Tatsuro Taira</b>. </p>
                    <p>Por si fuera poco, en la mismca cartelera estelar estará peleando el dominicano de peso pesado <Link href='/peleadores/waldo-cortes-acosta'>Waldo Cortes Acosta</Link>, ante el ruso #2 del ranking, <b>Alexander Volkov</b>. Los estadounidense <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> y <b>Sean Brady</b>, también estarán presentes en lo que promete ser un peleón. Y finalmente el español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link> hoy tiene su oportunidad de entrar en los rankings de peso wélter al enfrentar al ucraniano #14 de la división, <b>Yaroslav Amosov</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>José Ochoa Derrota a Clayton Carpenter por Decisión Unánime</h2>
                    <p>En un dominio total por parte del luchador peruano <b>José Ochoa</b>, el latinoamericano finalmente se lleva la victoria luego de mostrar un striking muchos niveles superior al de su rival estadounidense <b>Clayton Carpenter</b>, quien no sólo no pudo ante el striking de su rival, sino que tampoco pudo llevarlo al suelo, donde podría haber tenido alguna ventaja. De esta manera, el luchador de Perú se lleva la victoria habiendo ganado todos los asaltos.</p>
                    <h2>Baisangur Susurkaev Somete a Djorden Santos en el tercer asalto</h2>
                    <p>Espectacular desempeño del checheno <b>Baisangur Susurkaev</b>, que en una pelea competetitva, más cerrada de lo que esperabamos, con buenas combinaciones de ambos luchadores, es capaz de finalizarla en el último asalto, conectando un mataleón espectacular que terminaría desmayando a su rival brasileño <b>Djorden Santos</b>. </p>
                    <h2>Pat Sabatini Derrota a William Gomis por Decisión Unánime</h2>
                    <p>Gran victoria para el estadounidense <b>Pat Sabatini</b>, quien mediante un dominio total de la lucha fue capaz de ganar sumando puntos ante el francés <b>William Gomis</b>, quien aunque resistió bastante sin ser derribado, no fue capaz de hacerle daño alguno a su rival durante gran parte del combate. De esta manera, el estadounidense se lleva la victoria por decisión unánime. </p>
                    <h2>Roman Kopylov Derrota a Marco Tulio por Decisión Unánime</h2>
                    <p>Gran victoria del ruso <b>Roman Kopylov</b>, quien fue capaz de reponerse de una racha de 2 derrotas consecutivas, y de un primer asalto muy complicado donde salió claramente perdiendo, recibiendo un corte en el ojo incluído, que fue muy profundo. Pero en el segundo asalto fue capaz de reponerse, conectando un golpe que tumbaría a su rival, y que estaría a nada de noquearlo. Aunque no fue capaz de finalizarlo en el segundo asalto, en el tercero estaría nuevamente cerca de lograrlo, conectando golpes letales hacia el brasileño Tulio, quien sufrió demasiado los embates del ruso. De esta manera, por decisión unánime el ganador de esta pelea fue Roman Kopylov. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Jim Miller Somete a Jared Gordon en el Primer Asalto</h2>
                    <p>Espectacular victoria del veterano estadounidense <Link href='/articulos/jim-miller-historia'>Jim Miller</Link>, quien combatiendo en casa fue capaz de encontrar una guillotina, que conectó luego de que su rival le atrapara una patada, cayendo al suelo y finalmente sometiendo a su compatriota <b>Jared Gordon</b>, quien se vió obligado a tapear. De esta forma, Jim Miller extiende su récord como el peleador con la mayor cantidad de victorias en la historia de la UFC, con 28. </p>
                    <h2>Grant Dawson Somete a Mateusz Rebecki en el Tercer Asalto</h2>
                    <p>En una entretenida pelea quien termina saliendo victorioso es el estadounidense <b>Grant Dawson</b>, quien ganó claramente el primer asalto, estuvo cerca de perder en el segundo, recibiendo muchos golpes y cayendo al suelo con una mano muy poderosa de <b>Rebecki</b>, que casi lo noquea, pero que en el tercer asalto finalmente pudo mostrar su fuerte, derribando al polaco, tomándole la espalda y logrando conectar un mataleón luego de 4 minutos de intentarlo para llevarse la victoria por sumisión en el tercer asalto. </p>
                    <h2>Yaroslav Amosov Somete a Joel Álvarez en el Segundo Asalto</h2>
                    <p>Gran victoria del ucraniano <b>Yaroslav Amosov</b>, quien luego de dominar durante el primer asalto a ras de lona, y sufrir un poco con golpes contundentes, fue capaz de conectar un derribo y conectar un kata-gatame inmediatamente para someter al luchador español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, quien no encontró respuesta para la lucha y Bjj de su rival. </p>
                    <h2>Ateba Gautier Noquea a Ozzy Diaz en el Segundo Asalto</h2>
                    <p>Brutal manera de terminar la cartelera preliminar, con el camerunés <b>Ateba Gautier</b> haciendo lo que todos esperaban de él, dominando por completo en el striking durante el primer asalto, y logrando conectar una de esas manos poderosas que tiene para noquear a su rival <b>Ozzy Diaz</b>. De esta manera Ateba Gautier mantiene su invicto en la UFC y logra una nueva victoria por nocaut. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>King Green Somete a Jeremy Stephens en el Primer Asalto</h2>
                    <p>Espectacular victoria del estadounidense <b>King Green</b>, en este choque de veteranos, siendo capaz de derribar a su rival luego de una avalancha de golpes, para finalmente conectar una llave en el cuello de su rival que lo obligaría a tapear. De esta manera King Green derrota a <b>Jeremy Stephens</b> por sumisión en el primer asalto de la pelea. </p>
                    <h2>Sean Brady Derrota y Domina Completamente a Joaquin Buckley</h2>
                    <p>En una pelea que tuvo un solo dueño, quien terminó dominando completamente a su rival fue <b>Sean Brady</b>, quien derribó a su rival las veces que quiso y desde el suelo castigó a más no poder a su compatriota <Link href='/peleadores/joaquin-buckley'>Joaquin</Link>, a quien incluso le ganó 2 asaltos por 30-28, mostrando la completa paliza que le pegó. De esta manera, Sean Brady se lleva la victoria por decisión unánime de forma contundente. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}