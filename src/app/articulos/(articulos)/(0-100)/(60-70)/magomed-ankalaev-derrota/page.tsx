import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/ankalaev_derrota.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Magomed Ankalaev Derrota',
    description: 'La historia de la única derrota de Magomed Ankalaev en su carrera profesional en la UFC. ',
    openGraph: {
        title: 'Magomed Ankalaev Derrota',
        description: 'La historia de la única derrota de Magomed Ankalaev en su carrera profesional en la UFC. ',
        url: 'https://fullmma.org/articulos/magomed-ankalaev-derrota'
    }
}

export default function MagomedAnkalaevDerrota () {
    return(
        <main>
            <ArticleHero title='La Única Derrota de Magomed Ankalaev' subtitle='¿Contra quien perdió Ankalaev? La historia de la única derrota de Magomed Ankalaev contra Paul Craig.' image={hero} date='2025-02-14' author={null} updatedDate='2025-03-03' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El próximo mes, el actualmente ranqueado #1 en la división de peso semipesado, <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> peleará por el cinturón de la división ante el actual campeón brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. Ankalaev pareciera ser el único peleador de la división con la habilidad de derrotar a un Alex Pereira que en el último año demostró ser de los campeones más dominantes que ha tenido la UFC en un largo tiempo, con 3 defensas exitosas por la vía del nocaut. Y no es para menos que tengamos a Ankalaev en tan alta estima, dado que los números hablan por sí solos, con un récord profesional de 19-1-1 (1), viene de 13 peleas sin perder, con la última de sus victorias siendo ante <b>Aleksandar Rakic</b> en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, a quien derrotó por decisión unánime. Sin embargo, el luchador de Daguestan ha sufrido una sola derrota en su carrera, y hoy vamos a hablar de eso. </p>
                    <h2>Única Derrota de Ankalaev</h2>
                    <p>Magomed Ankalaev había comenzado su carrera profesional de manera brillante, desde que hiciera su debut el 18 de enero de 2014 ante <b>Vasily Babich</b>, obteniendo la victoria por decisión mayoritaria. Escalaría rápidamente hasta llega a la promotora <b>WFCA</b>, donde tendría 5 combates, de los ganaría 4 por nocaut y 1 por decisión, llegando a ser campeón en su tercer pelea al derrotar a <b>Maxim Grishin</b>. </p>
                    <p>Este inicio de carrera, en el que acumularía un récord en MMA de 8-0, le abriría la oportunidad de firmar con la UFC, donde se le programaría una pelea para el 17 de marzo de 2018 ante el histórico luchador escoces <b>Paul Craig</b>, en el <b>UFC Fight Night: Werdum vs. Volkov</b>, organizado en Londres. </p>
                    <p>A este combate, su rival llegaba luego de completar 3 peleas en la UFC, a la que había llegado de igual forma que nuestro protagonista, con un récord invicto de 8-0. Sin embargo en sus últimos 2 combates no había tenido el mejor desempeño, cayendo derrotado dolorosamente de forma consecutiva, al caer primero ante <b>Tyson Pedro</b> por TKO en el primer asalto, y luego al caer ante <Link href='/noticias/khalil-rountree'>Khalil Rountree</Link> por KO en el primer asalto. </p>
                    <p>Debido a todo esto, pese a que el escocés es un rival muy complicado, el daguestaní partía como favorito para ganar el combate, y así lo demostró durante el transcurso de este. Puesto que Ankalaev dominó por completo a su rival, demostrando una gran superioridad a lo largo del combate, de forma que todo apuntaba a que su invicto iba a mantenerse, hasta que al final de la pelea sucedió lo peor para él...</p>
                    <p>Magomed Ankalaev estaba dominando en el striking a su rival, consiguiendo conectar un rodillazo a la cabeza que lo tiró al suelo en el tercer asalto. En esta etapa del combate, faltando poco para que termine, el ruso buscó castigar a su rival desde arriba con el ground & pound, sin embargo, fue ahí cuando el escocés logró atraparlo con un triangulo de piernas, que llevarían a Ankalaev a tapear, perdiendo de esta manera el combate faltando sólo 1 segundo para que termine. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/xRZDPYpXzQo?si=rdrRbDM9EXwM6DJI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Parece hasta de película lo que fue esta pelea, pero por muy difícil de creer que suene, la única derrota que sufrió el luchador de Daguestán en su carrera, fue por sumisión en el tercer asalto de la pelea, en el minuto 4:59. </p>
                    <p>Quien se robó el show aquella noche obviamente fue <b>Paul Craig</b>, que al encima estar en Londres, que guarda una gran cercanía con su país natal, tuvo al público a favor en todo momento, festejando con la gente al final y declarando:<b> &quot;¿Escuchaste a los fans? No fue mi noche en Glasgow (Escocia, donde había tenido su última pelea que terminó en derrota), pero poder conseguir la finalización para los fans de Escocia fue algo especial. Escucha, la gente dice que los fans de Irlanda son los mejores, pero los fans de Escocia son muy ruidosos y nos apoyan mucho&quot;</b>. </p>
                    <h2>Reflexión de Magomed Ankalaev Sobre su Derrota</h2>
                    <p>Mucho tiempo después, Ankalaev confesó que en ese momento aquella derrota le afectó mucho, llegando al punto en el que incluso creyó que no volvería a pelear, pero que sin embargo pudo sobreponerse de esto, poniendo en perspectiva lo que fue aquella derrota, y pudiendo aprender de ella. </p>
                    <p><b>&quot;Solía preocuparme sobre perder y sobre lo que la gente dice sobre mi, eso ya no me pasa. Puedes decir que tuve la peor derrota de la UFC, porque me rendí literalmente en el último momento de la pelea. Esa derrota cambió mi vida, fue difícil al principio, creí que no volvería a pelear. Pero entonces después de un mes me di cuenta que no era por mi, yo hice todo lo que pude, fue la voluntad del Todopoderoso. Fue un alivio, pude entender toda la situación, volví a entrenar, llegué al gimnasio y me puse a trabajar de nuevo&quot;</b>. Declaró el daguestaní en una entrevista en ruso. </p>
                    <iframe className={styles.article__video} loading='lazy' width="478" height="849" src="https://www.youtube.com/embed/c4HzYNcA9-A" title="Magomed Ankalaev on his first loss to Paul Craig #shorts #ufc #mma" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}