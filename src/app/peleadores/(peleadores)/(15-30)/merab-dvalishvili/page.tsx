import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/20-30/merab-dvalishvili/merab_dvalishvili.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Merab Dvalishvili',
    description: "Merab Dvalishvili es un peleador Georgiano que actualmente pelea en la división de peso gallo de la UFC, donde compite desde diciembre de 2017. Desde su llegada a la compañía ha tenido un desempeño impresionante, llegando a acumular 10 victorias consecutivas, que le ganaron la oportunidad de pelear por el título de la división ante Sean O'malley el 14 de septiembre de 2024.",
    openGraph: {
        title: 'Merab Dvalishvili',
        description: "Merab Dvalishvili es un peleador Georgiano que actualmente pelea en la división de peso gallo de la UFC, donde compite desde diciembre de 2017. Desde su llegada a la compañía ha tenido un desempeño impresionante, llegando a acumular 10 victorias consecutivas, que le ganaron la oportunidad de pelear por el título de la división ante Sean O'malley el 14 de septiembre de 2024.",
        url: 'https://fullmma.org/peleadores/merab-dvalishvili'
    }
}

export default function Dvalishvili () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={17} l={4} d={0} nombre='Merab Dvalishvili' apodo='THE MACHINE' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Merab Dvalishvili UFC</h2>
                    <p className={styles.peleador__article__text}>Merab Dvalishvili es un peleador Georgiano que actualmente pelea en la división de peso gallo de la <Link href='/articulos/ufc'>UFC</Link>, donde compite desde diciembre de 2017. Desde su llegada a la compañía ha tenido un desempeño impresionante, llegando a acumular 10 victorias consecutivas, que le ganaron la oportunidad de pelear por el título de la división ante <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link> el 14 de septiembre de 2024.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/GOJwZpXEAUs?si=SML2eLx2yrNEHiTM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Merab Dvalishvili Récord</h2>
                    <p className={styles.peleador__article__text}>Merab posee un récord de 17-4. Siendo 3 de sus victorias por la vía del nocaut, 1 por sumisión y 13 por decisión. Mientras que de sus 4 derrotas, sólo 1 fue por sumisión y 3 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Merab Dvalishvili Biografía</h2>
                    <p className={styles.peleador__article__text}>Merab Dvalishvili nació el 10 de enero de 1991 en Georgia, cuando este territorio aún formaba parte de la Unión Soviética. Desde muy joven comenzó a entrenar Sambo y Judo para aprender a defenderse, y según él mismo, porque amaba pelear.</p>
                    <p className={styles.peleador__article__text}>A los 21 años, luego de terminar su carrera universitaria de Educación Física en Georgia, se mudó a los Estados Unidos, donde busco perseguir una carrera como luchador de MMA, mientras trabajaba en la construcción para subsistir. Allí comenzó a entrenar de la mano del exluchador y ex campeón de peso wélter en la UFC, <b>Matt Serra</b>. </p>
                    <p className={styles.peleador__article__text}>Merab haría su debut como profesional de las MMA en una promotora llamada <b>Ring of Combat</b>, el 24 de enero de 2014 en peso gallo, ante el luchador estadounidense <b>Darren Mima</b>, contra quien caería derrotado por decisión mayoritaria luego de 3 asaltos. Aunque unos meses después, en septiembre de ese año, lograría su primer victoria al derrotar por TKO en el tercer asalto al también estadounidense <b>Dennis Dombrow</b>.</p>
                    <p className={styles.peleador__article__text}>Luego de unos cuantos combates, Merab tendría la oportunidad de luchar por el título vacante de la compañía, enfrentando al también contendiente <b>Sukhrob Aydarbekov</b> el 24 de febrero de 2017, a quien derrotaría con una sumisión en el segundo asalto. Además, en junio de ese año, defendería el título al enfrentar a <b>Raufeon Stots</b>, a quien derrotaría con un KO a los 15 segundos del primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Vke86rcSIv0?si=__Cb40_j3fVvh_dE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Estas destacadas actuaciones le ganarían un contrato con la UFC, a la que llegaría con un récord de 7-2 y en donde haría su debut el 9 de diciembre de 2017 ante <b>Frankie Saenz</b>. Pese a la cálidad que ahora sabemos que tiene el georgiano, lo cierto es que en la UFC arrancó con el pie izquierdo, perdiendo su debut por decisión dividida.</p>
                    <p className={styles.peleador__article__text}>Su segundo combate sería el 21 de abril de 2018 ante <b>Ricky Simón</b>, donde volvería a caer derrotado, esta vez de una forma curiosa, puesto que Merab estuvo encerrado en una guillotina durante casi un minuto entero, y aunque no tapeo y parecía estar consciente, finalmente terminó la pelea y su rival se llevó la victoria por sumisión técnica. De igual forma, este combate le haría ganar a nuestro protagonista su primer bono en la UFC, al ser elegida esta como la pelea de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/-XIbgasL2Wg?si=rnO-bfPvZeoIgz3I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Esta última pelea sería un antes y un después en la carrera del georgiano, puesto que desde aquella derrota que no pierde un sólo combate, habiendo acumulado una racha de 10 victorias consecutivas.</p>
                    <p className={styles.peleador__article__text}>Entre estas victorias destacaría la que tuvo ante el brasileño <b>Marlon Moraes</b>, a quien venció por TKO en el segundo asalto, ganando el segundo bono de su carrera a la actuación de la noche. Su siguiente combate sería una merecida y destacada victoria ante la leyenda brasileña y excampeón de peso pluma, <Link href='/leyendas/jose-aldo'>José Aldo</Link>, a quien luego de 3 asaltos vencería por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Su siguiente combate sería ante el excampeón de la división, <b>Petr Yan</b>, en un evento encabezado por estos 2 peleadores. Nuevamente nuestro protagonista se llevaría la victoria luego de 5 asaltos por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/7V0Bb5eDELY?si=Dgyrd95-p7sy57HL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Posteriormente tendría una pelea el 17 de febrero de 2024 en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, evento que encabezaría su compatriota <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, enfrentando por el título al entonces campeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>. Esa noche se pelearía contra el también excampeón de la división <b>Henry Cejudo</b>. Obteniendo una merecida victoria por decisión unánime, que lo pondría en línea como el contendiente #1 de la división para enfrentar al campeón <b>Sean O&apos;malley</b>.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/EV3CyO-2xGU?si=YfsYcQd9JP3oEAZj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Con 10 victorias consecutivas en la compañía, habiendo derrotado a 3 excampeones de la UFC, Merab Dvalishvili se ganó con total justicia una oportunidad de disputarle el título a <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link>, quien sólo ha tenido una defensa del título ante el ecuatoriano <Link href='/peleadores/marlon-vera'>Marlon Vera</Link>.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}