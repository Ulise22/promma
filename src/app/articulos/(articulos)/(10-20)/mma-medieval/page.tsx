import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/mma_medieval-hero.jpeg'

export const metadata: Metadata = {
    title: 'MMA Medieval',
    description: 'Los combates de MMA organizados en un octágono, con armaduras y espadas que emulan las luchas medievales.',
    openGraph: {
        title: 'MMA Medieval',
        description: 'Los combates de MMA organizados en un octágono, con armaduras y espadas que emulan las luchas medievales.',
        url: 'https://fullmma.org/articulos/mma-medieval'
    }
}

export default function MMAMedieval () {
    return(
        <main>
            <ArticleHero title='¿Qué es el MMA Medieval?' subtitle='Los combates de MMA organizados en un octágono, con armaduras y espadas que emulan las luchas medievales.' image={hero} date='2024-09-18' author={null} updatedDate={null}/>
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Las MMA medievales son una modalidad de las artes marciales mixtas, que mezclan las reglas clásicas de este deporte, con la estética y con las armaduras medievales que pueden llegar a pesar varias decenas de kilos. Además está presente la utilización de espadas, mazas y hachas que hacen sentir a quienes participan de estos eventos como si estuvieran en la edad media. </p>
                    <p>Aunque es cierto que las armaduras que utilizan los participantes de estos combates, son especialmente utilizados para proteger a los luchadores de sufrir alguna lesión grave, estas se convirtieron en un ingrediente estético muy importante de los combates, dado que replican el estilo de los antiguos caballeros, que termina llamando la atención a quienes ven por primera vez estas peleas.</p>
                    <p>A sí mismo, las espadas y diferentes armas que utilizan los luchadores, carecen de filo y especial peligro para los peleadores, que sumado a la armadura que portan, hacen que dentro de lo seguro que puede ser una pelea de MMA con equipamiento medieval, las peleas no signifiquen un peligro grande para los participantes. Aún así, en varias ocasiones se puede ver sangrar a los luchadores después de los combates.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/VlCQ2pBob5Q?si=bXmFBJB6Y-M1jZTw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Origen y Popularidad de las MMA Medievales</h3>
                    <p>Varios medios señalan que el origen de estas peleas se dió en la Rusia de los 90s, originalmente organizadas en rings de boxeo, que eventualmente adoptando el octágono de varias promotoras de MMA y de <Link href='/articulos/ufc'>UFC</Link> que es tan característico.</p>
                    <p>En la promotora de artes marciales mixtas <b>M-1 Global</b>, que es la más grande e importante de Rusia, comenzaron organizando alguanas de estas peleas como combates de exhibición a mediados de 2015, pero viendo el éxito que estos representaron y lo mucho que gustó a los aficionados de ese país, y eventualmente del resto del mundo, comenzaron a organizar combates profesionales de forma cada vez más frecuente, profesionalizando bastante la forma en que estas peleas se dan. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/uGlDFrrZFrE?si=dUAu7Kep2CpuYARi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Esta idea eventualmente fue replicada en el resto del mundo, ganando especial popularidad en Europa y en el norte de América. Siendo <b>Armored MMA</b> quien destaca por sobre las demás compañías, ofreciendo la oportunidad de pelear a gente de todas partes de los Estados Unidos. Y en latinoamérica, estando disponible en varios puntos de México y de Argentina.</p>
                    <p>Ha crecido tanto este deporte, que hasta se creó una federación internacional llamada <b>Buhurt Internacional</b>, que nació de la unificación de las entidades <b>Historical Medieval Battle (HMB)</b> y <b>International Medieval Combat Federation (IMCF)</b>.</p>
                    <p>Aunque por ahora el crecimiento de este fenómeno se ha dado principalmente en redes sociales, lo cierto es que no sería de extrañar que su popularidad vaya a más, teniendo eventos televisados y peleadores que se dediquen exclusivamente a esto.</p>
                    <h2>¿Dónde Ver MMA Medieval?</h2>
                    <p>En youtube está lleno de transmiciones y videos subiendo peleas completas que se tuvieron en todas partes del mundo, pero para quienes quieran ver estos combates organizados por la compañía <b>Armored MMA</b>, pueden ver las peleas y eventos subidos completos en su <a target='_Blank' href='https://www.youtube.com/@armoredmma'>Canal de youtube</a>. </p>
                    <p>Además, para aquellos que quieran ver los eventos transmitidos en vivo, pueden hacerlo vía PPV (pay per view) en su página oficial, y se puede consultar por la venta de entradas de igual manera en su <a target='_Blank' href='https://www.armoredmma.com/events-1'>página oficial</a>.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/0RXm_dVtAKc?si=Hzsq190EltCHf6SH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>MMA Medieval en Argentina</h2>
                    <p>La misma <b>Armored Medieval</b> ofrece entrenamiento y peleas en la ciudad de Buenos Aires y en la Provincia de Buenos Aires, que de igual manera puede ser consultado en su página web oficial.</p>
                    <p>Pero además, existe una organización con su propia liga argentina de combate medieval, llamada <b>CAF COMBATE MEDIEVAL</b>, que sube varias peleas y transmite algunos de los eventos a su <a target='_Blank' href='https://www.youtube.com/@cafmedieval'> canal de youtube</a>.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/1hJ0SABgR9g?si=WeojRfNY6add7HpH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}