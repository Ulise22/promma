import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import xiaonan from '@/assets/peleadores__images/mujeres/0-10/yan-xiaonan/yan_xiaonan.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Yan Xiaonan',
    description: "Yan Xiaonan es una peleadora china que compite en la UFC desde noviembre de 2017, cuando enfrentaría a la estadounidense Kailin Curran en el UFC Fight Night: Bisping vs. Gastelum, donde luego de 3 asaltos sería capaz de llevarse la pelea por decisión unánime.",
    openGraph: {
        title: 'Yan Xiaonan',
        description: "Yan Xiaonan es una peleadora china que compite en la UFC desde noviembre de 2017, cuando enfrentaría a la estadounidense Kailin Curran en el UFC Fight Night: Bisping vs. Gastelum, donde luego de 3 asaltos sería capaz de llevarse la pelea por decisión unánime.",
        url: 'https://fullmma.org/mujeres/yan-xiaonan'
    }
}

export default function YanXiaonan () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={xiaonan} w={17} l={4} d={0} nombre='Yan Xiaonan' apodo={null} categoria='Peso Paja Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Yan Xiaonan UFC</h2>
                    <p className={styles.peleador__article__text}>Yan Xiaonan es una peleadora china que compite en la <Link href='/articulos/ufc'>UFC</Link> desde noviembre de 2017, cuando enfrentaría a la estadounidense <b>Kailin Curran</b> en el <b>UFC Fight Night: Bisping vs. Gastelum</b>, donde luego de 3 asaltos sería capaz de llevarse la pelea por decisión unánime.</p>
                    <h2 className={styles.peleador__article__title}>Yan Xiaonan Récord</h2>
                    <p className={styles.peleador__article__text}>Yan Xiaonan sostiene un récord de 17-4 (1). Siendo 8 de sus 17 victorias por la vía del nocaut y 9 fueron por decisión. Mientras que sus 4 derrotas se dividen en 1 por nocaut, 1 por sumisión y 2 por decisión. Además, uno de sus combates terminó sin resultado por un corte accidental, producto de un choque de cabezas que no permitió a su rival, la japonesa <b>Emi Fujino</b>, continuar con la pelea.</p>
                    <h2 className={styles.peleador__article__title}>Yan Xiaonan Historia</h2>
                    <p className={styles.peleador__article__text}>Yan Xiaonan, nació nació el 16 de junio de 1989 en la ciudad de Sehnyang, capital de la provincia china Lianong. Comenzó a entrenarse en Sanda, que es como un estilo de kickboxing chino, siguiendo con la practica de esta arte marcial durante gran parte de sus años universitarios en la Universidad Deportiva de Xi&apos;an. En aquella universidad conoció a su entrenador Zhao Xuejun, quien la introdujo en un programa de MMA en 2009.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/TZnh7Z7QNDo?si=p6aDxDry5kpL8E-3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su primera pelea profesional que figura en su récord, fue contra una peleadora desconocida el 8 de noviembre de 2008, a la que fue capaz de noquear en el primer asalto de la pelea, en la <b>Xian Sports University</b>. Aquí pelearía nuevamente un año después contra su compatriota <b>Jin Tang</b>, a quien fue capaz de noquear en el primer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Dejaría de pelear en su universidad para pelear en la promotora <b>Martial Combat</b>, donde pelearía 2 combates durante el año 2010, primero en julio contra la filipina <b>Gina Iniong</b>, y luego en septiembre contra la estadounidense <b>Jarina Hallinan</b>, donde obtendría la primera derrota de su carrera, al ser sometida en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Luego de aquella derrota, pelearía en promotoras y contra luchadoras asiáticas, donde acumularía una racha de 6 victorias consecutivas, ganando 5 de estas peleas por nocaut. Luego tendría una pelea que terminaría sin resultado luego de un corte accidental que impidió a su rival japonesa, <b>Emi Fujino</b>, continuar peleando. Sin embargo, sería luego de este combate que nuestra protagonista podría arribar a la UFC.</p>
                    <p className={styles.peleador__article__text}>Su debut en la UFC sería en su país, en la ciudad de Shanghái, el 25 de noviembre de 2017, contra la americana <b>Kailin Curran</b>, combate al que llegaría con un récord de 9-1 y que donde luego sería capaz de vencer luego de 3 asaltos por decisión unánime. Volvería a pelear en la compañía contra la brasileña <b>Viviane Pereira</b>, el 23 de junio de 2018, a quien luego de 3 asaltos vnecería por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/GiEKCioW76A?si=qti3cpQEB9O92l3Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Yan tendría varios combates más donde vencería por decisión unánime, entre los que destacarían su victoria la polaca <b>Karolina Kowalkiewicz</b>, que sería el primer rival ranqueado a la que se enfrentaría. Luego pelearía contra la brasileña <b>Cláudia Gadelha</b>, a quien vencería otra vez por decisión.</p>
                    <p className={styles.peleador__article__text}>Su primera derrota llegaría inmediatamente después, al enfrentar a la estadounidense <b>Carla Esparza</b> el 22 de mayo de 2021, quien sería capaz de propinarle el primer nocaut de su carrera en el segundo asalto. Su siguiente combate sería casi un año después, el 5 de marzo de 2022, contra la brasileña <b>Marina Rodriguez</b>, quien luego de 3 asaltos derrota a nuestra protagonista por decisión dividida, propinandole su segunda derrota consecutiva. </p>
                    <p className={styles.peleador__article__text}>Cortaría esta pequeña racha de derrotas al enfrentar a la estadounidense <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link>, en un evento encabezado por amabas peleadoras, que luego de 5 asaltos terminó en una victoria para la luchadora china por decisión mayoritaria, dado que uno de los jueces vió un empate en el combate, y 2 de los 3 jueces dieron como ganadara a nuestra protagonista.</p>
                    <p className={styles.peleador__article__text}>Durante el año 2023 sólo pelearía en una ocasión, haciendo esto el día 6 de mayo en el UFC 288 ante la brasileña <b>Jéssica Andrade</b>. En este combate lograría una de las actuaciones más destacadas de su carrera, al ser capaz de derrotar por KO en el primer asalto a su rival, siendo esta la primera victoria de nuestro protagonista por esta vía en la UFC, cosa que le haría merecedora del bono a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/P8j2g1ulC1Q?si=69EZzIfnZiPUFsQc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella meritoria victoria, se ganaría la oportunidad de por fin disputar el cinturón de la división, que ostentaba su compatriota <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>. Dicho combate tendría lugar el día 13 de abril de 2024, en lo que sería la pelea coestelar del histórico <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, aunque lamentablemente para nuestra protagonista, luego de 5 asaltos en lo que fue una digna actuación por parte Xiaonan, caería derrotada por decisión unánime. </p>
                    <EndArticle />
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}