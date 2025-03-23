import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15//fight-night-dern-ribas-2.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

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
            <ArticleHero title='UFC VEGAS 101: ¡Mackenzie Dern Somete a Amanda Ribas al Final del Tercer Asalto! ¡Santiago Ponzinibbio Vence Por TKO a Carlston Harris en el Tercer Asalto!' subtitle='Roman Kapylov noquea a Chris Curtis faltando un segundo para que termine la pelea. ¡Cesar Almeida deja KO a su rival en el primer asalto!' image={hero} date='2025-01-11' author={null} updatedDate={null} />
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
                    <p>El brasileño Felipe Bunes logra una increíble victoria, cuando parecía que estaba sufriendo mucho en el striking, fue capaz de concretar un derribo que fue convirtiendo poco a poco en lo que sería una finalización por sumisión, al conectar un armbar que obligó a su rival <b>Jose Johnson</b> a tapear. De esta manera damos por terminada la cartelera preliminar con 4 finalizaciones en total, siendo esta la primera sumisión del año en la UFC.</p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Punahele Soriano Noquea a Uros Medic en el Primer Asalto</h2>
                    <p>El estadounidense logra una estupenda victoria por la vía del nocuat ante el serbio <b>Uros Medic</b>, luego de que una mano derecha que fue directo al mentón noqueara completamente a su rival. De esta manera, el luchador de peso wélter, consigue la quinta finalización de la noche, dejando un trabajo muy difícil para Dana White, que tendrá que determinar qué peleadores ganaran un bono. Sin dudas Soriano es uno de los principales candidatos luego de lo que fue un nocaut muy estético. </p>
                    <h2>Christian Rodriguez Derrota a Austin Bashi En Un Choque de Estilos</h2>
                    <p><b>Christian Rodriguez</b> se lleva la victoria ante el debutante <b>Austin Bashi</b>, quien pierde el invicto en su debut en la UFC, en una pelea que fue un claro choque de estilos, con Rodriguez siendo un striker que fue capaz de defender practicamente todos los intentos de derribo de Bashi, quien tiene mucha experiencia en la lucha, y que llegaba a este combate como invicto. </p>
                    <p>De esta manera, Christian extiende su récord a 12-2, habiendo ganado 5 de sus últimas 6 victorias. El luchador no dudó en pedir una pelea en México, que está próxima a hacerse, hablando en un perfecto español. </p>
                    <h2>Roman Kopylov Noquea a Chirs Curtis Falta un Segundo Para que Termine la Pelea</h2>
                    <p>Tremenda pelea la que nos regalaron estos 2 luchadores, a los que sólo hace falta verles las caras luego del combate para entender que lo que vivieron fue una absoluta guerra. Finalmente quien se terminó llevando la victoria fue el ruso, quien conectó una patada a pocos segundos de que termine la pelea, para que el árbitro parara la pelea faltando un segundo para que termine el combate, terminando en una victoria por KO para Kopylov. </p>
                    <h2>Cesar Almeida Noquea a Abdul Razak Alhassan En el Primer Asalto</h2>
                    <p>El brasileño logra una victoria que sin dudas le dará el bono de $50k a la actuación de la noche, luego de que fuera capaz de reponerse de una pelea que estaba perdiendo, habiendo recibido un knockdown que lo tiró al piso. Sin embargo, Cesar Almeida fue capaz de ponerse de pie, y, cuando parecía que estaba recibiendo más golpes de los que estaba dando, conectó un gancho de izquierda que mandó a dormir a su rival. Sin dudas, una de las actuaciones de la noche. </p>
                    <h2>Santiago Ponzinibbio Gana por TKO Carlston Harris en el Tercer Asalto</h2>
                    <p>Tremendo combate por parte del argentino <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, que ante un difícil rival que lo puso en aprietos en más de una ocasión, fue capaz de reponerse y lograr una tremenda victoria por la vía del TKO en el tercer asalto, luego de castigar mucho con esa mano derecha a su rival. De esta manera tienen un tremendo inicio las MMA en Argentina y Latinoamérica, que comienzan el año con la victoria de Ponzinibbio por TKO, que llega luego de 2 derrotas consecutivas. </p>
                    <h2>Mackenzie Dern Somete a Amanda Ribas en el Tercer Asalto</h2>
                    <p><Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link> logra una increíble victoria por sumisión en el tercer asalto de la primer pelea estelar del año, al ser capaz de conectar un armbar cuando el asalto estaba por terminar, consigueindo algo inédito, dado que hasta al momento ninguna peleadora había sido capaz de someter a Amanda Ribas.</p>
                    <p>De esta manera, Dern consigue vengar su derrota de 2019 ante la brasileña, y cierra de la mejor manera lo que ha sido una tremenda cartelera para iniciar el año, con 9 finalizaciones en la noche, con 2 de ellas siendo por sumisión y 7 por la vía del nocaut. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}