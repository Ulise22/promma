
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/benoit-saint-denis/benoit_saint_denis.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Benoit Saint Denis',
    description: 'Benoit Saint Denis es un exmilitar francés, que abandonó el ejército para convertirse en peleador de MMA y que actualmente compite en la división de peso ligero de la UFC. ',
    openGraph: {
        images: '',
        title: 'Benoit Saint Denis',
        description: 'Benoit Saint Denis es un exmilitar francés, que abandonó el ejército para convertirse en peleador de MMA y que actualmente compite en la división de peso ligero de la UFC. ',
        url: 'https://fullmma.org/peleadores/benoit-saint-denis'
    }
}

export default function BenoitSaintDenis () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={17} l={3} d={0} categoria='Peso Ligero' nombre='Benoit Saint Denis' apodo='GOD OF WAR' time='2026-04-23' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Benoit Saint Denis?</h2>
                    <p className={styles.peleador__article__text}>Benoit Saint Denis es un exmilitar y actual peleador de MMA francés que compite en la división de peso ligero de la UFC. Es uno de los mejores peleadores que hay en la división de las 155lbs actualmente, siendo además de los luchadores más jovenes que hay. </p>
                    <p className={styles.peleador__article__text}>Su historia antes de llegar a la UFC, su pasado militar, sus victorias contundentes, a menudo cubierto de sangre, sus nocauts, sus sumisiones, el que haya finalizado en todas sus victorias, y su apodo &quot;El Dios de la Guerra&quot;, han colaborado a generar un &quot;aura&quot; a su alrededor que supo respaldar con resultados dentro del octágono. Debido a esto, siendo un bastante joven para un peleador, poco a poco se está ganando un lugar como uno de los peleadores más carismáticos dentro de la compañía. </p>
                    <h2 className={styles.peleador__article__title}>Benoit Saint Denis Récord</h2>
                    <p className={styles.peleador__article__text}>Benoit Saint Denis posee un récord profesional en MMA de 17-3 (1). Con 6 de sus victorias proviniendo por la vía del nocaut y 11 siendo por la vía de la sumisión. Mientras que de sus 3 derrotas, 2 fueron por la vía del nocaut y sólo 1 fue por decisión. Además posee una pelea sin resultado ante el polaco <b>Pawel Kielek</b> en 2019. </p>
                    <h2 className={styles.peleador__article__title}>Benoit Saint Denis Historia</h2>
                    <p className={styles.peleador__article__text}>Benoit Saint Denis nació el 18 de diciembre de 1995 en Nimes, una ciudad del sur de Francia. Es hijo de una madre profesora y de un padre que fue oficial del ejército francés que practicaba Judo a un buen nivel, quien además por obvias razones tendría una gran influencia en nuestro protagonista. </p>
                    <p className={styles.peleador__article__text}>Saint Denis pasaría gran parte de su infancia y juventud entrenando deportes, jugando fútbol y rugby, deportes en los que su país destaca bastante, y practicando Judo al igual que su padre desde los 8 años, entrenando en Francia y Alemania, llegando a conseguir el cinturón negro de dicha disciplina. </p>
                    <p className={styles.peleador__article__text}>Al igual que su padre, se uniría al ejército luego de terminar el bachillerato a los 18 años, formando parte del Comando de Fuerzas Especiales del Ejército Francés, donde serviría durante 5 años más o menos, participando activamente en guerras y luchando contra grupos terroristas, labor por la que recibió la Medalla de Agradecimiento de la Nación y la Cruz del Combatiente en 2017. Etapa de su vida que cubrimos en detalle en: <Link href='/articulos/benoit-saint-denis-militar'>El Pasado Militar de Benoit Saint Denis</Link>. </p>
                    <YouTubeEmbed videoid='IULHW3igi5g' />
                    <p className={styles.peleador__article__text}>Ya desde hacía años Saint Denis venía entrenando MMA, debido a que creía que lo ayudaría a realizar mejor su trabajo mientras servía a su país. Con el tiempo se enamoró del deporte y tomó una decisión arriesgada: abandonar el ejército con el objetivo de convertirse en un peleador profesional. </p>
                    <p className={styles.peleador__article__text}>De esta manera haría su debut profesional en la división de peso mediano el 16 de febrero de 2019, enfrentando al suizo  <b>Marc Domont</b>, a quien sometería en el primer asalto con una guillotina. Apenas un mes después, el 21 de marzo, bajaría a la división de peso wélter para pelear por el <b>Campeonato Vacante de peso wélter de SFC</b>, que ganaría luego de someter en el tercer asalto al polaco <b>Artur Szczepaniak</b>, consiguiendo en apenas su segundo combate ser campeón de MMA. </p>
                    <p className={styles.peleador__article__text}>En ese mismo año tendría 3 combates más, combatiendo el 15 de junio en una promotora francesa ante <b>Antoine Bensimon</b>, sometiéndolo en el primer asalto. Volvería a ganar en su combate el 12 de octubre al someter con un armbar a su compatriota <b>Ibragim Beisarov</b>. Finalmente tendría un combate ante el polaco <b>Pawel Kielek</b>, que acabaría sin resultado luego de un choque de cabezas accidental, todo esto en su debut en la promotora <b>Brave CF</b>. </p>
                    <p className={styles.peleador__article__text}>En 2020 tendría 2 combates más, con el primero siendo el 19 de enero ante el polaco <b>Ivica Truscek</b>, logrando una nueva sumisión en el primer asalto. Luego, pelearía el 8 de agosto, haciendo su debut en peso superligero (165lbs), enfrentando al inglés <b>Mario Saeed</b>, contra quien obtendría su primer victoria por nocaut en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>Finalmente tendría 2 combates más en esta promotora, con el primero siendo el 25 de marzo de 2021 ante el brasileño <b>Luan Santiago</b>, a quien sometería en el segundo asalto. Por último, pelearía el 1 de agosto ante el español <b>Arkaitz Ramos Gudari</b>, a quien volvería a someter en el primer asalto. </p>
                    <h2 className={styles.peleador__article__title}>Benoit Saint Denis UFC</h2>
                    <p className={styles.peleador__article__text}>Luego de acumular un récord invicto de 8-0, con un combate sin resultado, y de haber finalizando a todos sus rivales se ganaría merecidamente un contrato con la UFC, haciendo su debut el 30 de octubre de 2021 ante el brasileño <b>Elizeu Zeleski dos Santos</b> en el <b>UFC 267</b>, donde lamentablemente recibiría su primer derrota profesional, luego de que el combate se extendiera hasta los 3 asaltos donde resultaría derroado por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En 2022 tendría 2 combates en la compañía, con el primero siendo ante el aleman <b>Niklas Stolze</b>, en lo que sería su debut en peso ligero, donde competiría desde entonces, logrando una victoria por sumisión en el segundo asalto. Volvería a subir al octágono el 3 de octubre ante el brasileño <b>Gabriel Miranda</b>, en París, donde haría valer su localía al noquear en el segundo asalto a su rival, ganando el primer bono de su carrera a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>En 2023 sería aún más activo peleando en 3 ocasiones, enfrentando primero al brasileño <b>Ismael Bonfim</b>, a quien sometería en el primer asalto. El 2 de septiembre pelearía ante el brasileño <b>Thiago Moisés</b>, derrotándolo por nocaut en el segundo asalto, haciendo valer nuevamente su localía en París, y ganando un nuevo bono a la Pelea de la Noche. Por último, el 11 de noviembre se enfrentaría al estadounidense <b>Matt Frevola</b>, logrando una victoria espectacular por KO, luego de conectar una patada en la cabeza de su rival en el primer asalto, que le haría ganar un nuevo bono a la Actuación de la Noche, alcanzado su quinta victoria consecutiva. </p>
                    <YouTubeEmbed videoid='QerSpl9y6uE' />
                    <p className={styles.peleador__article__text}>El 2024 lamentablemente las cosas no irían de la mejor manera para él, cayéndose un poco del aura que se venía construyendo en torno a su figura. Sucedería primero el 9 de marzo en el <b>UFC 299</b>, cuando enfrentara a la leyenda de la división y de este deporte <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, cayendo derrotado por KO en el segundo asalto, en lo que eso sí, sería un peleón que le haría ganar el bono a La Pelea de la Noche. Posteriormente, encabezaría el primer evento de su carrera en París Francia, en el <b>UFC Fight Night: Moicano vs Saint Denis</b>, enfrentando al brasileño <Link href='/peleadores/renato-moicano'>Renato Moicano</Link>, contra quien sufriría una pelea aún más dolorosa, dado que estaba en su casa y enfrentando a un peleador teoricamente de mucho menos nivel que Poirier, cayendo derrotado por TKO (parada médica) luego de sufrir una paliza que le desangraría la cara y le impediría terminar el combate. </p>
                    <p className={styles.peleador__article__text}>Sin embargo, Saint Denis es un hombre de una resiliencia y fuerza mental inquebrantable, que decidido a levantarse volvería con todo en el 2025, enfrentando primero a un luchador no ranqueado canadiense llamado <b>Kyle Prepolec</b>, en el <b>UFC 315</b> organizado en Canadá, contra quien conseguiría una gran victoria por sumisión en el segundo asalto. Posterior a eso, volvería a combatir en Francia en el <Link href='/eventos/fight-night-imavov-borralho'>UFC Fight Night: Imavov vs. Borralho</Link>, en donde conseguiría, en retrospectiva, una de las mayores victorias de su carrera hasta el momento, logrando someter al brasileño <Link href='/peleadores/mauricio-ruffy'>Mauricio Ruffy</Link> en el segundo asalto, rompiendo el invicto en la UFC del luchador de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, cosa que le valdría el bono a la Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='fHaWtV8LtLc' />
                    <p className={styles.peleador__article__text}>Apenas un par de meses después, el 15 de noviembre de 2025 volvería a subirse al octágono en el <Link href='/eventos/ufc322'>UFC 322</Link>, organizado en Nueva York, para enfrentar al veterano histórico <b>Beneil Dariush</b>, contra quien obtendría una espectacular victoria por KO a los 15 segundos del combate luego de conectar un golpe que sería mortal para su rival. Esta acción le otorgaría un nuevo bono a la Actuación de la Noche y lo metería de lleno en el top10 de la división de peso ligero. </p>
                    <p className={styles.peleador__article__text}>Siguiendo con la racha positiva y el ascenso de nuestro protagonista, tendría un combate super importante haciendo de visitante nuevamente, al enfrentar al histórico neozelandés <b>Dan Hooker</b> en el <Link href='/eventos/ufc325'>UFC 325</Link>, donde conseguiría brillar nuevamente con una actuación completamente dominante en la que terminaría venciendo por TKO cuando finalizaba el segundo asalto, alcanzando su cuarta victoria consecutiva y entrando al top5 de una de las divisiones más competitivas de la UFC. </p>
                    <YouTubeEmbed videoid='Q0-H076Q6kg' />
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}