import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15//fight-night-dern-ribas-2.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Mackenzie Dern vs Amanda Ribas 2',
    description: 'Primer evento de UFC en el UFC APEX, que nos trae la vuelta de Santiago Ponzinibbio, y la pelea estelar entre Mackenzie Dern y Amanda Ribas, que se enfrentarán en una revancha luego de su combate en el 2019.',
    openGraph: {
        title: 'Mackenzie Dern vs Amanda Ribas 2',
        description: 'Primer evento de UFC en el UFC APEX, que nos trae la vuelta de Santiago Ponzinibbio, y la pelea estelar entre Mackenzie Dern y Amanda Ribas, que se enfrentarán en una revancha luego de su combate en el 2019.',
        url: 'https://fullmma.org/covertura-ufc/fight-night-dern-ribas-2'
    }
}

export default function DernRibas2 () {
    return(
        <main>
            <ArticleHero title='UFC VEGAS 101: ¡Mackenzie Dern vs Amanda Ribas! Santiago Ponzinibbio vs Carlston Harris!' subtitle='Primer evento de UFC del año con presencia Argentina en una nueva pelea de Santiago Ponzinibbio, y con Brasil como protagonista en una pelea en peso paja femenino.' image={hero} date='2025-01-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Primer evento del año de UFC en el UFC APEX Arena, con un montón de peleas que nos trae como evento estelar el combate entre las brasileñas <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link> y <b>Amanda Ribas</b>, en su revancha luego de lo que fue su combate en 2019, que terminó con Amanda Ribas siendo la vencedora por decisión unánime. Además, como presencias destacadas tenemos la vuelta del argentino <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, quien en la pelea coestelar enfrentará al luchador de Guyana <b>Carlston Harris</b>. También contamos con la presencia del ex peleador de kickboxing, <b>Cesar Almeida</b>, quien en su carrera supo vencer en una ocasión a <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, y quien buscara reponerse de lo que fue su última derrota ante el ruso <b>Roman Koplov</b>, quien también estará hoy presente enfrentando a <b>Chris Curtis</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Ernest Kareckaité Derrota a Nicolle Caliari Por Decisión Dividida</h2>
                    <p>En un combate bastante entretenido, la peleadora de Lituania, <b>Ernest Kareckaité</b> se llevó la victoria por decisión dividida en una pelea que no era fácil de puntuar. La brasileña Nicolle Caliari intentó en varias ocasiones concretar un derribo contra su rival, y recién en el tercer asalto lo consiguió, pero no sirvió de mucho, puesto que Ernest ya había sumado los puntos necesarios, mediante el striking, para llevarse la victoria cómodamente. </p>
                    <h2>Jacobe Smith Noquea a Preston Parsons En el Primer Asalto</h2>
                    <p>Jacobe Smith se lleva la victoria en su debut con un espectacular KO en el primer asalto, luego de conectar un gancho de izquierda que tumbó a su rival de inmediato. De esta manera el estadounidese se mantiene invicto y extiende su récord invicto a 10-0, dando una impresionante actuación en su presentación como luchador de la UFC. </p>
                    <h2>Thiago Moises Derrota a Trey Ogden Por Decisión</h2>
                    <p>El brasileño Thiago Moises logra una contundente victoria por decisión, en un combate donde fue de menos a más, utilizando el primer asalto especialmente para castigar a su rival con leg-kicks, en una estrategia que le dió frutos en el segundo asalto, puesto que para ese punto la pierna de Trey Ogden estaba destrozada. De esta manera el brasileño logra recomponerse de su última derrota ante <b>Ludovit Klein</b>, y extiende su récord a 19-8. </p>
                    <h2>Marco Tulio Noquea a Ihor Potieria en el Primer Asalto</h2>
                    <p>El prospecto brasileño se lleva la victoria por la vía del nocaut en el primer asalto. Luego de que la pelea estuviera parada alrededor de un minuto, debido a un rodillazo en las zonas bajas accidental por parte del brasileño, logró conectar un golpe espectácular que llevó a su rival al suelo.</p>
                    <p>Luego de tener que luchar para poder seguir conectando golpes, castigando con el ground and pound, el brasileño fue capaz de conectar el golpe que dejaría KO a su rival <b>Ihor Potieria</b>. De esta forma, este se convierte en el tercer KO/TKO de la noche. </p>
                    <h2>Felipe Bunes Somete a Joe Johnson en el Primer Asalto</h2>
                    <p>El brasileño Felipe Bunes logra una increíble victoria, cuando parecía que estaba sufriendo mucho en el striking, fue capaz de concretar un derribo que fue convirtiendo poco a poco en lo que sería una finalización por sumisión, al conectar un armbar que obligó a su rival <b>Jose Johnson</b> a tapear. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Punahele Soriano vs Uros Medic</h2>
                    <p></p> */}
                    {/* <h2>Christian Rodriguez vs Austin Bashi</h2>
                    <p></p> */}
                    {/* <h2>Chirs Curtis vs Roman Kopylov</h2>
                    <p></p> */}
                    {/* <h2>Cesar Almeida vs Abdul Razak Alhassan</h2>
                    <p></p> */}
                    {/* <h2>Santiago Ponzinibbio vs Carlston Harris</h2>
                    <p></p> */}
                    {/* <h2>Mackenzie Dern vs Amanda Ribas</h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}