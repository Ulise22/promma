import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/0-10/masvidal-vs-askren_hero.jpeg'
import Image from 'next/image'

export default function KOMasRapido () {
    return(
        <main>
            <ArticleHero title='El KO Más Rápido en la Historia de la UFC' subtitle='Cuál es la historia y el trasfondo detrás de la pelea entre Jorge Masvidal y Ben Askren, que terminó en el KO más rápido en la historia de la UFC.' image={hero} date={null} author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El 6 de julio de 2019 en la ciudad estadounidense de Paradise, ubicada en el Estado de Nevada, fuimos testigos de lo que hasta a día de hoy, continúa siendo el KO más rápido en la historia de la UFC, cuando en el combate entre Ben Askren y Jorge Masvidal, vimos como este último le dió un rodillazo en la cabeza que puso a dormir a su rival, a tan sólo 5 segundos de comenzada la pelea. </p>
                    <p>¿Pero cuál es la historia detrás de este KO? Ben Askren, hasta su pelea con Jorge Masvidal, tenía un récord invicto de 19-0, con sólo una pelea sin resultado. No sólo eso, sino que a lo largo de su carrera supo ser campeón de los títulos de Peso Wélter en <b>Bellator</b> y <Link href='/articulos/one-championship'>ONE</Link>, defendiendo sus títulos en varias oportunidades.</p>
                    <p>Ben Askren había llegado a la UFC en noviembre de 2018, por una disputa que tuvo la compañía con uno de sus mejores peleadores, <Link href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link>, por una disputa salarial. Esto llevo a que ocurriera algo inédito en el mundo de las MMA, y es que se realizó un intercambio de peleadores entre compañías, siendo Demetrious el peleador de la UFC que pasó a competir en ONE, y Ben Askren el peleador que pasó de competir en ONE a pelear en la UFC.</p>
                    <p>Ben Askren es el tipo de peleadores que le gustan a Dana White, que con su trash-talk, terminan calentando las peleas y por ende terminan vendiendo muchos PPV. Además de que ya había demostrado en el pasado no ser ningún paquete cuando se metía en el octagono. En la mente de Dana White, había hecho el negocio perfecto.</p>
                    <p>Askren hizo su debut en la UFC el 2 de marzo de 2019 en UFC 235, enfrentandose a <b>Robbie Lawler</b>, que para aquel momento estaba ranqueado #6 en la división de peso wélter. Dicho combate fue algo extraño, dado que Robbie no había empezado mal, sin embargo el combate terminó en una victoria por sumisión a favor de Askren. Aunque fue algo confusa la forma en que terminó la pelea, dado que mientras Askren estaba aplicando su téctica de sumisión, el árbitro creyó que su rival había perdido la consciencia y detuvo el combate, aunque Robbie se encontraba en perfectas condiciones para seguir peleando. De igual forma, en su debut en la UFC, Askren obtuvo la victoria y con el microfono en la mano dijo &quot;¿Ese es el mejor peleador que tienes, Dana?&quot;</p>
                    <p>De esta manera, a su pelea contra Jorge Masvidal llegaría invicto, con un récord de 19-0, y, como nos tenía acostumbrados a hacer, hablo mierda hasta por los codos para vender la pelea. A punto tal de que para su rival, Masvidal, el combate se había vuelto algo personal. Entre las muchas cosas que dijo, declaró que: &quot;Sus musculos no son muy grandes y su barba es bastante fea, pero más allá de eso, creo que el combate va a ser dominación total&quot;.</p>
                    <p>Cuando llegó la hora de la verdad el 6 de julio de 2019, fuimos testigos de lo que ahora conocemos como el KO más rápido en la historia de la UFC. Con un Jorge Masvidal que comenzando la pelea con las manos en la espalda, salió corriendo y fue capaz de conectar un rodillazo en la cabeza de su rival, para finalizar la pelea en tan sólo 5 segundos. Convirtiéndose esta, no sólo en el KO más rápido en la historia de la UFC, sino en la primera derrota oficial de Ben Askren, que al menos hasta aquel momento, era considerado el mejor peso wélter fuera de la UFC.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/cUXVXvRUllQ?si=IpbyJUCGYeGCjSdv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}