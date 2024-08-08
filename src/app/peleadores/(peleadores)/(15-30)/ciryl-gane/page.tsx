import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/30-40/ciryl-gane/ciryl_gane.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ciryl Gane',
    description: "Ciryl Gane es un peleador francés de MMA que compite en la división de peso pesado de la UFC desde 2019. Destacando en la compañía cuando al ser campeón interino en el año 2021, luego de noquear en el tercer asalto a su rival Derrick Lewis.",
    openGraph: {
        title: 'Ciryl Gane',
        description: "Ciryl Gane es un peleador francés de MMA que compite en la división de peso pesado de la UFC desde 2019. Destacando en la compañía cuando al ser campeón interino en el año 2021, luego de noquear en el tercer asalto a su rival Derrick Lewis.",
        url: 'https://fullmma.org/peleadores/ciryl-gane'
    }
}

export default function CirylGane () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={12} l={2} d={0} nombre='Ciryl Gane' apodo='BON GAMIN' categoria='Peso Pesado' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ciryl Gane UFC</h2>
                    <p className={styles.peleador__article__text}>Ciryl Gane es un peleador francés de MMA que compite en la división de peso pesado de la <Link href='/articulos/ufc'>UFC</Link> desde 2019. Destacando en la compañía cuando al ser campeón interino en el año 2021, luego de noquear en el tercer asalto a su rival <b>Derrick Lewis</b>.</p>
                    <h2 className={styles.peleador__article__title}>Ciryl Gane Récord</h2>
                    <p className={styles.peleador__article__text}>Ciryl Gane posee un récord de 12-2 en su carrera de MMA. Siendo 6 de sus victorias por la vía del nocaut, 3 por la vía de la sumisión y 3 por decisión. Mientras que de sus 2 derrotas, sólo 1 fue por sumisión y 1 fue por decisión.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Id8G_VaN88o?si=qUsJwZrr0cBfnAKR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Ciryl Gane Biografía</h2>
                    <p className={styles.peleador__article__text}>Ciryl Jacky Gane nació el 12 de abril de 1990 en Francia,. Comenzó a practicar deportes de pequeño, especialmente centrado en el fútbol y en el basquet. </p>
                    <p className={styles.peleador__article__text}>A pesar de que a temprana edad ya había mostrado un talento natural para los deportes, decidió trabajar como vendedor en una tienda de muebles, uniéndose a un programa de estudio y trabajo en París. Fue durante este tiempo que un compañero de él lo introdujo en el Muay Thai.</p>
                    <p className={styles.peleador__article__text}>Fue entonces que Ciryl comenzó una carrera profesional en este arte marcial entre noviembre de 2014 y junio de 2018. El francés sería capaz de ganar todos sus combates en esta disciplina, retirándose con un récord de 13-0 (siendo 9 de sus victorias por la vía del nocaut), y habiendo sido campeón francés de Muay Thai en 2 ocasiones.</p>
                    <p className={styles.peleador__article__text}>Ciryl decidió retirarse del Muay Thai para transicionar a las MMA, en donde debido a su trayectoria previa como campeón, tuvo como pelea de debut, un combate por el título de peso pesado de la promotora <b>TKO</b>, enfrentando al canadiense <b>Bobby Sullivan</b> el 2 de agosto de 2018, logrando ganar por sumisión en el primer asalto, y coronándose como campeón en su primer pelea profesional.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Eu5JkCnHqcY?si=koVb_JKBYFf9tHRE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En esta compañía tendría 2 combates más defendiendo su título, con una victoria por nocaut en el segundo asalto ante el también canadiense <b>Adam Dyczka</b>, y una victoria por nocaut en el primer asalto ante el brasileño <b>Roggers Souza</b>.</p>
                    <p className={styles.peleador__article__text}>De esta forma, con sólo 3 peleas, y 2 defensas exitosas de su título, lograría firmar un contrato con la UFC, donde debutaría en el <b>UFC Fight Night: <Link href='/mujeres/valentina-shevchenko'>Shevchenko</Link> vs Carmouche 2</b> organizado en Montevideo, Uruguay. Aquella noche se enfrentaría al brasileño <b>Raphael Pessoa</b>, a quien lograría someter en el primer asalto del combate.</p>
                    <p className={styles.peleador__article__text}>En la compañía de Dana White iniciaría su trayectoria acumulando una racha de 6 victorias consecutivas, siendo 3 de esas victorias por finalización (1 nocaut y 2 sumisiones). Esta racha de victorias le ganaría la oportunidad de disputar el Campeonato interino de peso pesado el día 7 de agosto de 2021 en el UFC 265, ante el histórico <b>Derrick Lewis</b>, quien venía de ganar sus últimos 4 combates. Aquella pelea ante el estadounidense, la terminaría ganando por la vía del nocaut en el tercer asalto, convirtiéndose en el campeón y ganando el bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/SEKBbBGfuGQ?si=sPuh2MUldGhbslX8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El cinturón interino lo pondría en primer fila para enfrentarse al camerunés <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link> por el campeonato indiscutido de la división. Se enfrentarían el 22 de enero de 2022 en el UFC 270, aunque lamentablemente para nuestro protagonista, luego de 5 asaltos la pelea se inclinaría para el camerunés.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/yreLKev3gcs?si=IyA0BrC49jvsZ4Kp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Unos meses después, el 3 de septiembre de 2022 tendría la oportunidad de recuperarse de su derrota en un evento encabezado por él en su país natal, Francia, al enfrentarse al entonces ranquedao #3 en la división, <b>Tai Tuivasa</b>. Ciryl Gane terminaría por ganar la pelea en el tercer asalto consiguiendo un KO, que le haría ganador del bono a la pelea de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/cKYFDgnYwvI?si=W0cGSLI4bLhYDNog" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El entonces campeón Francis Ngannou, terminó por abandonar la compañía, siendo despojado del título y por tanto dejándolo vacante. Esto llevó a que se organice una pelea entre nuestro protagonista, y el excampeón de peso semipesado <Link href='/peleadores/jon-jones'>Jon Jones</Link> por el campeonato vacante de la división. Se enfrentarían el 4 de marzo de 2023 en el UFC 285, y la pelea terminaría en una victoria para Jones, quien sometería a nuestro protagonista a los 2 minutos del primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/uVgZU2ZDbGg?si=Qkl6ePW8DbaVLj3w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En septiembre de 2023, Ciryl volvería a pelear en su país, encabezando un evento ante el oriundo de Moldavia <b>Sergey Spivak</b>. El francés haría valer la localía consiguiendo vencere por TKO en el segundo asalto, y volviendo a ganar un bono a la actuación de la noche.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}