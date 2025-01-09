import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import AmandaHero from './AmandaHero'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Amanda Nunes',
    description: "Amanda Nunes es una ex peleadora brasileña de MMA, y es una de las más sobresalientes que ha tenido el deporte. Destacando especialmente por su carrera en la UFC, donde fue campeona de las divisiones de Peso Pluma y Peso Gallo Femenino, siendo la primer peleadora femenina en conseguir ser doble campeona de forma simultánea.",
    openGraph: {
        title: 'Amanda Nunes',
        description: "Amanda Nunes es una ex peleadora brasileña de MMA, y es una de las más sobresalientes que ha tenido el deporte. Destacando especialmente por su carrera en la UFC, donde fue campeona de las divisiones de Peso Pluma y Peso Gallo Femenino, siendo la primer peleadora femenina en conseguir ser doble campeona de forma simultánea.",
        url: 'https://fullmma.org/leyendas/amanda-nunes'
    }
}


export default function AmandaNunes () {
    return(
        <main>
            <AmandaHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Amanda Nunes UFC</h2>
                    <p className={styles.leyenda__article__text}>Amanda Nunes es una ex peleadora brasileña de MMA, y es una de las más sobresalientes que ha tenido el deporte. Destacando especialmente por su carrera en la <Link href='/articulos/ufc'>UFC</Link>, donde fue campeona de las divisiones de Peso Pluma y Peso Gallo Femenino, siendo la primer peleadora femenina en conseguir ser doble campeona de forma simultánea. </p>
                    <p className={styles.leyenda__article__text}>Desde que se convirtió en campeona en julio de 2016, sólo perdió un combate de los 12 que tuvo, contra <Link href='/mujeres/julianna-pena'>Julianna Peña</Link> por el Campeonato de Peso Gallo de Mujeres de la UFC, quien la sometería en el segundo asalto. Sin embargo, en la revancha inmediata que obtendría unos meses después, sería capaz de derrotarla por decisión unánime.</p>
                    <h2 className={styles.leyenda__article__title}>Amanda Nunes Récord</h2>
                    <p className={styles.leyenda__article__text}>Amanda Nunes cuenta con un récord de 23-5. 23 victorias de las cuales 13 han sido por nocaut, 4 por sumisión y 6 por decisión. Mientras que de sus 5 derrotas, 2 fueron por nocaut, 2 por sumisión y 1 por decisión.</p>
                    <h2 className={styles.leyenda__article__title}>Amanda Nunes Historia</h2>
                    <p className={styles.leyenda__article__text}>Amanda Lourenço Nunes nació el 30 de mayo de 1988 en un pequeño pueblo a las afueras de la ciudad de Salvador de Bahía, en Brasil. A diferencia de otros peleadores de Brasil, que tienen una infancia marcada por la carencia y la pobreza, Amanda nació en el seno de una familia trabajadora, con padres que trabajaban arduamente para que no le faltara nada.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/CEA7fasR4pg?si=h4eXSTwrprsh2H3F" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Desde pequeña, su madre la vió muy hiperactiva, por lo que cuando cumplió los 6 años, la inscribió en clases de karate para que pudiera liberar un poco de toda la energía que tenía. No sólo se dedicó a practicar Karate, sino que mientras aún era niña practicó todo tipo de deportes, especialmente fútbol, como buena brasileña que es. </p>
                    <p className={styles.leyenda__article__text}>Sienda hija de una ex boxeadora, y sobrina de un luchador profesional de vale-tudo, llevaba la pelea en la sangre. De esta manera, siguiendo el ejemplo de su madre comenzó a boxear con 16 años, y a entrenar junto a su hermana Jiu-Jitsu brasileño en un gimnasio, donde destacó y se ganó el apodo de &quot;Leona&quot;, que se ganó por su forma de luchar y por nunca negarse a pelear con nadie. En el mismo gimnasio comienza su entrenamiento de MMA, donde también destaca. </p>
                    <p className={styles.leyenda__article__text}>Luego de haber cosechado cierta experiencia entrenando Artes Marciales Mixtas, hace su debut profesional en una promotora brasileña llamada <b>Prime</b>, el 8 de marzo de 2008, contra la luchadora <b>Ana Maria</b>, con quien, a pesar de tener una gran trayectoria y experiencia en jiu-jitsu, no puede evitar caer derrota por sumisión, producto de un armbar a poco más de 30 segundos de iniciado el combate.Sin embargo, pese a su derrota inicial como profesional, vuelve a pelear un par de meses después, contra su compatriota <b>Paty Barbosa</b>, a quien derrota por KO a los 11 segundos de iniciado el combate. </p>
                    <p className={styles.leyenda__article__text}>Un año después, vuelve a Prime a enfrentarse a <b>Nadja Nadja</b>, a quien derrota por TKO en menos de un minuto. 3 meses después tiene otra pelea en Brasil, que vuelve a ganar por TKO al primer minuto del combate a brasileña <b>Deise Lee Rocha</b>.</p>
                    <p className={styles.leyenda__article__text}>Por su destacada participación en las diferentes promotoras de su país, ya comienza a destacar como una de las figuras brasileñas en las MMA, por lo que comienza a pelear en promotoras de Estados Unidso como <b>Strikeforce</b> o <b>Invicta</b>, que se especializa en las MMA femeninas, hasta que le llega la oportunidad de pelear en la UFC, a la que llega con un récord de 7-3. Allí hace su debut contra la alemana <b>Sheila Gaff</b>, el 3 de agosto de 2013 en UFC 163, a quien derrota por nocat a los 2 minutos del primer asalto. </p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/b_UQ2qgu3tw?si=XZ5lzOCvfoM3bSsC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Continúa peleando teniendo actuaciones destacadas, hasta que le toca enfrentarse a una peleadora también histórica en la UFC como es <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>, en lo que sería un combate para definir quien pelearía contra la campeona de la división, <b>Miesha Tate</b>. En aquella ocasión, luego de 3 asaltos, ganaría la peleadora brasileña por decisión unánime.</p>
                    <p className={styles.leyenda__article__text}>4 meses después de enfrentar a Valentina, Amanda Nunes se enfrenta a la estadounidense <b>Misha Tate</b> en nada más ni nada menos que en el UFC 200, organizado el 9 de julio de 2016, por el Campeonato de Peso Gallo de Mujeres de UFC. Amanda Nunes hizo parecer fácil ganarle a Miesha Tate, dado que la dominó por completo hasta que a los 3 minutos del primer asalto, la lleva al suelo para someterla con un mataleón. </p>
                    <p className={styles.leyenda__article__text}>Rápidamente se pondría a defender el título, contra la quien muchos consideraban como la mejor peleadora del mundo de las MMA, <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>, a quien vence por nocaut técnico a los 48 segundos del combate. </p>
                    <p className={styles.leyenda__article__text}>Su siguiente defensa sería una revancha contra Valentina Shevchenko, encabezando el evento estelar de UFC 215 el 9 de septiembre de 2017. En aquella ocasión, se volvería a imponer la brasileña luego de los 5 asaltos, esta vez por decisión dividida.</p>
                    <p className={styles.leyenda__article__text}>Luego de una defensa más contra <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>, a quien venció por TKO en el quinto asalto, parecía haberse quedado sin rivales en la división, por lo que se mueve a buscar suerte en la división de Peso Pluma de mujeres, donde disputa el título contra la experimentada <b>Cris Cyborg</b>, que era la campeona de ese momento. En aquel combate, pese a que Cris Cyborg había ido a presionar a nuestra protagonista, luego de una buena mano encajada en la cara de la campeona, termina por noquearla antes de que se cumpla un minuto del primer asalto. Esta victoria convertiría a Amanda Nunes en la primer mujer campeona de 2 divisiones distintas de forma simultánea. Sería la sexta peleadora en general en conseguir 2 campeonatos, pero sería la tercera en conseguirlo de forma simultánea, junto a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> y a <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/u6rj1JdIvX8?si=aG1X57OgXM_7xV2h" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Luego de tremenda hazaña, Amanda comienza a defender ambos cinturones de forma simultánea con bastante éxito. Defendiendo el cinturón de peso gallo contra la estadounidense <b>Holly Holm</b>, a quien derrota por nocaut técnico en el primer asalto, y contra la neerlandesa <b>Germaine de Randamie</b>, a quien derrota por decisión unánime. Además, defiende su cinturón de peso pluma contra la canadiense <b>Felicia Spencer</b>, a quien derrota por decisión unánime, y contra la australiana <b>Megan Anderson</b>, a quien derrota en el primer asalto con una sumisión, lograda a través de una llave de brazo. </p>
                    <p className={styles.leyenda__article__text}>Recién volvería a ver la derrota cuando enfrentara a la estadounidense <Link href='/mujeres/julianna-pena'>Julianna Peña</Link>, con quien perdió en el segundo asalto, luego de ser sometida con un mataleón. Sin embargo, luego de 7 meses obtendría su revancha, en la que con una estrategia más inteligente, llevaría el resultado a mano de los jueces que la darían como vencedora por decisión unánime.</p>
                    <p className={styles.leyenda__article__text}>Pese a que se rumoreaba y se hablaba con fuerza de una tercera pelea entre Nunes y Peña, finalmente se programó una pelea entre Amanda Nunes y la mexicana <b>Irene Aldana</b>, a quien se le dió una oportunidad por el título. Dicho combate lo ganó Amanda Nunes por decisión unánime luego de haber dominado durante los 5 asaltos. Después de la pelea, Amanda se retiraría de las MMA, dejando atrás un legado impresionante y una carrera digna de admirar. </p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/nIuUo32Bq7w?si=v40jucI_RLWLZe-3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}