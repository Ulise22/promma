import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import weili from '@/assets/peleadores__images/mujeres/0-10/zhang-weili/weili.png'
import postpelea from '@/assets/peleadores__images/mujeres/0-10/zhang-weili/afterfight.jpeg'
import zhang from '@/assets/peleadores__images/mujeres/0-10/zhang-weili/zhang-weili.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zhang Weili',
    description: "Zhang Weili es una peleadora china que compite en la UFC desde agosto de 2018, cuando debutaría ante la estadounidense Danielle Taylor. Supo destacar en la compañía al convertirse en campeona de peso paja femenino en 2 ocasiones diferentes.",
    openGraph: {
        title: 'Zhang Weili',
        description: "Zhang Weili es una peleadora china que compite en la UFC desde agosto de 2018, cuando debutaría ante la estadounidense Danielle Taylor. Supo destacar en la compañía al convertirse en campeona de peso paja femenino en 2 ocasiones diferentes.",
        url: 'https://fullmma.org/mujeres/zhang-weili'
    }
}

export default function ZhangWeili () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={weili} w={25} l={3} d={0} nombre='Zhang Weili' apodo='MAGNUM' categoria='Peso Paja Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Zhang Weili UFC</h2>
                    <p className={styles.peleador__article__text}>Zhang Weili es una peleadora china que compite en la <Link href='/articulos/ufc'>UFC</Link> desde agosto de 2018, cuando debutaría ante la estadounidense <b>Danielle Taylor</b>. Supo destacar en la compañía al convertirse en campeona de peso paja femenino en 2 ocasiones diferentes. </p>
                    <h2 className={styles.peleador__article__title}>Zhang Weili Récord</h2>
                    <p className={styles.peleador__article__text}>Zhang Weili tiene un récord de 25-3, siendo 11 de sus 25 victorias por la vía del nocaut, 8 por sumisión y 6 por decisión. Mientras que de sus derrotas sólo una fue por la vía del nocaut, mientras que las otras 2 fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Zhang Weili wiki</h2>
                    <p className={styles.peleador__article__text}>Zhang Weili nació el 13 de agosto de 1989, en la ciudad de Handan, ubicada en la provincia china de Hebei. Comenzaría su carrera como atleta entrenando Sanda, disciplina que seguiría hasta descubrir las MMA, de las que se enamoraría y que le harían forjarse una carrera profesional. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/I4l7tHKHwbU?si=FYPUvLLSUoF7FGs3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>A diferencia de muchos otros artistas marciales que quedan en la historia del deporte, Weili inició su carrera profesional el 9 de noviembre con una derrota, que llegó al enfrentar a su compatriota <b>Bo Meng</b> en la <b>China MMA League</b>. Pese a este mal inicio, nuestra protagonista demostraría rapidamente que estaba hecha de una madera diferente, que era buena en serio, y que había llegado al deporte para dejar huella, dado que hilaría la absurda cantidad de 21 victorias consecutivas desde ese primer combate, conseguidas en un lapso de 6 años, siendo la primera de esta racha de victorias, la que conseguiría al enfrentar a la china <b>Karina Hallinan</b> el 17 de abril de 2014, consiguiendo una sumisión en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Lo más interesante de su carrera previa a su arribo a la UFC, sería lo que conseguiría al firmar con la promotora asiática <b>Kunlun Fight</b>, donde debutaría ante la luchadora francesa <b>Samantha Jean-Francois</b>, derrotando a estar por TKO en el primer asalto de la pelea. Contando este combate, la china conseguiría acumular un total de 9 victorias consecutivas, siendo todas estas por finalización, con 6 de estas siendo por la vía del nocaut y 3 por sumisión. </p>
                    <p className={styles.peleador__article__text}>De esta manera, con un récord profesional de 11-1, Weili se dispondría a pelear por el título de la compañía, al enfrentar a la brasileña <b>Simone Duarte</b> el 25 de mayo de 2017, consiguiendo vencer a esta por TKO a los 2 minutos y medio del combate, ganando de esta forma <b>el Campeonato de Peso Paja de Mujeres de KLF</b>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/rdI6L2gm2iM?si=bfcXagIxgAahb8A5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En esta promotora tendría 3 combates más, consiguiendo victorias por decisión ante la brasileña <b>Aline Sattelmayer</b>, una victoria por TKO ante <b>Marilia Santos</b> y una victoria por sumisión ante <b>Bianca Sattelmayer</b>. </p>
                    <p className={styles.peleador__article__text}>Además, conseguiría ganar un cinturón más en una promotora diferente antes de su arribo a la UFC, cuando enfrentando a la surcoreana <b>Ye-dam Seo</b>, el día 22 de julio de 2017, lograría derrotarla por TKO con codazos y golpes en el segundo asalto de la pelea. Consiguiendo ganar el <b>Campeonato Vacante de Peso Paja de Mujeres de TOP FC</b>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/DfJQeGHycvs?si=q3rjpCVLIAAXGTcX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Finalmente ya consolidada como una excelente peleadora, poseyendo un récord profesional en las MMA de 16-1, firmaría con la UFC, en donde debutaría el 4 de agosto de 2018 en el UFC 227 para enfrentar a la estadounidense <b>Danielle Taylor</b>, a quien lograría derrotar por decisión unánime una vez finalizados los 3 asaltos de la pelea. </p>
                    <p className={styles.peleador__article__text}>Zhang ganaría sus siguientes 2 combates, primero en el <b>UFC China</b> organizado el 24 de noviembre de 2018, donde debería enfrentar a la mexicana <b>Jessica Aguilar</b>, a quien conseguiría derrotar por sumisión en el primer asalo  de la pelea. Y el segundo al enfrentar a la estadounidense <b>Tecia Torres</b>, en el UFC 235 organizado el 2 de marzo de 2019, logrando una importante victoria por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/axd-_BscIrM?si=qWsoRJ69iNWc2WqF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Con esta última victoria, a la peleador asiática se le abriría la oportunidad de su vida, cuando podría disputar el cinturón de la división, enfrentando a la entonces campeona <b>Jéssica Andrade</b>, en un evento encabezado por ellas 2 y organizado en la ciudad de <b>Shenzhen</b>, en China, donde nos daría un desempeño espectacular, al ser capaz de vencer por nocaut a la campeona en tan sólo 42 segundos del combate. De esta forma, aquella noche se converitiría en campeona de la división de peso paja femenino, y conseguiría ganar el primer bono de su carrera por su desempeño a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/grJbCl6zwjs?si=0xVMzGRlHQY-eRCJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su primer defensa del título, se la programaría para pelea contra la histórica campeona de la división, la polaca <b>Joanna Jędrzejczyk</b>, con quien se vería las caras el 7 de marzo de 2020 en el UFC 248. La pelea se extendería hasta los 5 asaltos y ambas peleadoras darían guerra, en lo que fue un auténtico espectáculo, siendo esta elegida la pelea del año 2020, y considerada por muchos como <Link href='/articulos/mejores-peleas-mujeres-ufc'>la mejor pelea femenina de la historia de las MMA</Link>. El combate quedaría en manos de los jueces, quien por decisión dividida dieron como ganadora a nuestra protagonista. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/vSMQ-_Nnk-A?si=IPHh_Yl9ZfAAU4Be" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su segunda defensa del título, se la programaría para pelear ante la estadounidense <Link href='/mujeres/rose-namajunas'>Rose Namajunas</Link>, quien ya había sido campeona en el pasado y al momento de organizarse la pelea tenía un récord de 9-4. Se enfrentarían el día 24 de abril de 2021 en el UFC 261, día en el que lamentablemente para nuestra protagonista, recibiría el primer KO de su carrera, con una patada que la dejaría en el suelo en el primer asalto, perdiendo de esta manera su cinturón. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/gzgiRGZRpu0?si=RPZ0H4YjgSuFsdHp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Ese mismo año, para el día 6 de noviembre, se enfrentaría nuevamente ante ahora la nueva campeona estadounidense en una revancha por el título, protagonizando la pelea coestelar del UFC 268. En esta ocasión la pelea sería más cerrada y estaría más disputada, extendiéndose hasta los 5 asaltos, donde esta vez por decisió dividida, nuestra protagonista volvería a caer derrotada.</p>
                    <p className={styles.peleador__article__text}>Luego de aquella derrota, se la programaría para volver a enfrentarse a <b>Joanna Jędrzejczyk</b> el día 11 de junio de 2022 en el UFC 275. La peleadora asiática esa noche lograría volver a dar espectáculo, sin dejar que esta pelea llegue al criterio de los jueces, sería capaz de conectar un KO con un spinning backfist en el segundo asalto que tumbaría a su rival, y que le haría ganar el segundo bono de su carrera a La Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/3d70ZzqQPAE?si=YhBO6HNxjimzGQ3e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>De esta manera Zhang Weili volvería a pelear por el cinturón de la división el 12 de noviembre de 2022 en el UFC 281, en esta ocasión ante la estadounidense <b>Carla Esparza</b>, que acababa de ganárselo a Rose Namajunas. Nuevamente daría una muestra de categoría, al derrotar a su rival por sumisión con un mataleón en el segundo asalto de la pelea, volviendo a ganar el bono a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>En su primera defensa del cinturón se enfrentaría a la brasileña <b>Amanda Lemos</b>, que llegaba a la pelea con un récord de 13-2-1, y en aquella noche de agosto de 2023, volvería a dar una clase de MMA, en una actuación super dominante por su parte, extendiendo la pelea hasta los 5 asaltos y rompiendo el récord del mayor diferencial de golpeo total en una pelea de mujeres de la UFC. Reteniendo su cinturón al llevarse la pelea por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/VkNHE5vuaGg?si=vYgFDNwpFyEbYp8W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Zhang Weili participaría en la pelea coestelar del <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, organizado el 13 de abril de 2024, en donde debería enfrentar a su compatriota <Link href='/mujeres/yan-xiaonan'>Yan Xiaonan</Link>, en lo que fue una pelea disputada pero en donde finalmente nuestra protagonista pudo imponerse por sobre su contrincante, llevándose la victoria por decisión unánime. </p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}