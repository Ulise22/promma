import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/que-son-mma_hero.jpg'
import Image from 'next/image'

export default function QueSonLasMMA () {
    return(
        <main>
            <ArticleHero title='¿Qué son las MMA?' subtitle='En este artículo nos dedicaremos a describir y explicar que significan realmente las Artes Marciales Mixtas.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Las Artes Marciales Mixtas (MMA), conocidas comúnmente por sus siglas en inglés, son mucho más que un deporte; representan una fusión impresionante de habilidades y técnicas provenientes de diversas disciplinas marciales y deportes de combate. Esta combinación única se utiliza tanto en competiciones deportivas como en situaciones de defensa personal, ofreciendo un panorama de entrenamiento y competición sin igual en el mundo del deporte de contacto.</p>
                    <p>La esencia de las MMA radica en su naturaleza inclusiva, que abarca tanto las técnicas de lucha en pie, conocidas como &quot;striking&quot;, como las habilidades de combate en el suelo, denominadas &quot;grappling&quot;. En el ámbito del striking, los combatientes emplean una variedad de golpes como puños, patadas, rodillazos, y codazos, provenientes de disciplinas como el boxeo, kickboxing, karate, muay thai, entre otras. Por otro lado, el grappling se centra en las técnicas de derribo, lanzamiento, y las sumisiones como llaves articulares y estrangulaciones, derivadas de disciplinas como el judo, jiu jitsu brasileño, lucha libre, y sambo, entre otras.</p>
                    <p>Las raíces de las Artes Marciales Mixtas modernas se remontan a diversas tradiciones marciales ancestrales, e incluso a los antiguos Juegos Olímpicos griegos, donde existían formas primitivas de combate que guardan similitudes con lo que hoy conocemos como MMA. Sin embargo, su evolución contemporánea se gestó a través de competiciones realizadas en diferentes partes del mundo, desde Europa hasta Brasil, Japón, y Estados Unidos, durante el siglo XX.</p>
                    <p>Los primeros eventos de MMA se caracterizaban por reglas mínimas y la búsqueda de la técnica marcial más efectiva en el combate cuerpo a cuerpo. Con el tiempo, estos eventos evolucionaron, adoptando reglas adicionales destinadas a aumentar la seguridad de los competidores y promover la aceptación de las MMA como un deporte legítimo y respetado.</p>
                    <p>En la actualidad, las Artes Marciales Mixtas han experimentado un crecimiento explosivo, convirtiéndose en uno de los deportes de contacto más populares y emocionantes del mundo. Grandes organizaciones como <Link href='/promotoras/ufc'>Ultimate Fighting Championship</Link> (UFC), <Link href='/promotoras/one-championship'>ONE Championship</Link>, <Link href='/promotoras/bellator'>BELLATOR</Link>, <Link href='/promotoras/pfl'>PFL</Link> o la ya extinta, <b>PRIDE Fighting Championships</b> han desempeñado un papel fundamental en la popularización y comercialización de las MMA a nivel mundial.</p>
                    <p>En resumen, las Artes Marciales Mixtas no solo representan una forma de competición deportiva emocionante, sino también una expresión de la diversidad y la evolución constante de las técnicas de combate. Con su enfoque inclusivo y su combinación de habilidades provenientes de diversas tradiciones marciales, las MMA continúan cautivando a audiencias de todo el mundo y redefiniendo los límites del deporte de combate moderno.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}