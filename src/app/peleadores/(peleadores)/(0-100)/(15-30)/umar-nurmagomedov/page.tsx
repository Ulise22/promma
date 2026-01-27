import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/30-40/umar-nurmagomedov/umar_nurmagomedov.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Umar Nurmagomedov',
    description: "Umar Nurmagomedov es un peleador ruso de origen Daguestaní que compite en la división de peso gallo de la UFC desde enero de 2021, cuando debutaría ante su compatriota Sergey Morozov. Desde agosto de 2024 que se encuentra ranqueado #2 en la división de peso gallo.",
    openGraph: {
        title: 'Umar Nurmagomedov',
        description: "Umar Nurmagomedov es un peleador ruso de origen Daguestaní que compite en la división de peso gallo de la UFC desde enero de 2021, cuando debutaría ante su compatriota Sergey Morozov. Desde agosto de 2024 que se encuentra ranqueado #2 en la división de peso gallo.",
        url: 'https://fullmma.org/peleadores/umar-nurmagomedov'
    }
}

export default function UmarNurmagomedov () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={20} l={1} d={0} nombre='Umar Nurmagomedov' apodo={null} categoria='Peso Gallo' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Umar Nurmagomedov UFC</h2>
                    <p className={styles.peleador__article__text}>Umar Nurmagomedov es un peleador ruso de origen Daguestaní que compite en la división de peso gallo de la <Link href='/articulos/ufc'>UFC</Link> desde enero de 2021, cuando debutaría ante su compatriota <b>Sergey Morozov</b>. Desde agosto de 2024 que se encuentra ranqueado #2 en la división de peso gallo.</p>
                    <h2 className={styles.peleador__article__title}>¿Es Umar Nurmagomedov el hermano de Khabib?</h2>
                    <p className={styles.peleador__article__text}>Contrario a lo que se puede pensar por compartir apellido, Umar Nurmagomedov no es hermano de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, sino que es primo de este. Khabib tiene un hermano llamado Muhammad que no compite en las MMA. Por su lado Umar, tiene un hermano llamado <b>Usman Nurmagomedov</b> que compite en la promotora <b>Bellator</b> donde fue campeón.</p>
                    <h2 className={styles.peleador__article__title}>Umar Nurmagomedov Récord</h2>
                    <p className={styles.peleador__article__text}>Umar Nurmagomedov tiene un récord profesional en las MMA de 20-1. Siendo 2 de sus vcitorias por la vía del nocaut, 7 por la vía de la sumisión y 11 por decisión. Además de poseer una única derrota que provino por la vía de la decisión.</p>
                    <h2 className={styles.peleador__article__title}>Umar Nurmagomedov Biografía</h2>
                    <p className={styles.peleador__article__text}>Umar Magomednabiyevich Nurmagomedov nació el 3 de enero de 1996 en Rusia. Según explica él mismo, en Daguestán todos los niños pelean, por lo que es lo que hizo junto a su hermano <b>Usman Nurmagomedov</b> desde muy temprano, comenzando a practicar <b>freestyle wrestling</b>, luego Muay Thai, hasta que entrenaría bajo la tutela del padre de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, <b>Abdulmanap Nurmagomedov</b>, con quien aprendería Sambo y MMA.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/NcrcSIDlSWk?si=IWkp5I5IHTDPUZMP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Para cuando Umar cumplió 19 años, ya había conseguido convertirse en campeón mundial de Sambo. Un año después haría su debut profesional en las MMA, enfrentando el 16 de diciembre de 2016, a su compatriota <b>Rishat Kharisov</b> en la promotora <b>Fight Nights Global</b>, consiguiendo una victoria por sumisión en el segundo asalto.</p>
                    <p className={styles.peleador__article__text}>En esta promotora rusa, pelearía en 6 oportunidades, ganando todas sus peleas, finalizando en cada una de ellas. Esta racha llevó a que su primer pelea por fuera de esta compañía fuera por el <b>Campeonato Inaugural de Peso Gallo de FMMAS</b>, donde enfrentando al luchador de Tayikistán <b>Fatkhidin Sobirov</b>, conseguiría una victoria por decisión unánime que le otorgaría el título. </p>
                    <p className={styles.peleador__article__text}>Defendería su título en 3 ocasiones, destacando sus defensas ante el ucraniano <b>Taras Gryckiv</b> y ante el argentino <b>Brian González</b>, a quienes logró someter en el primer asalto de la pelea. La pelea con el argentino sería la última que tendría hasta que llegó a firmar un contrato con la UFC, donde haría su debut oficial el día 20 de enero de 2021, luego de que se cancelaran y se pospusieran varias peleas programadas en el 2020, enfrentando a su compatriota <b>Sergey Morozov</b>, obteniendo una victoria por sumisión en el segundo asalto de la pelea, ganando el bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Iqacxz4Rgs8?si=40_ydu40_iCg1jk0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente combate, subiría a peso pluma para enfrentar al estadounidense <b>Brian Kelleher</b>, a quien lograría someter en el primer asalto. En junio de 2022 pelearía ante <b>Nate Maness</b>, obteniendo una victoria por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>El 14 de enero de 2023 pelearía en el <b>UFC Fight Night: <Link href='/peleadores/sean-strickland'>Strickland</Link> vs. Imavov</b>, enfrentando al brasileño <b>Raoni Barcelos</b>, obteniendo una victoria por KO en el primer asalto y ganando su segundo bono a la actuación de la noche en la UFC.</p>
                    <p className={styles.peleador__article__text}>Debido a la falta de contendientes disponibles, Umar aceptó una pelea ante el debutante de Kazajistán, <b>Bekzat Almakhan</b>, a quien luego de 3 asaltos vencería por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Por suerte para nuestro protagonista, en su siguiente combate pasaría de enfrentar a un debutante, a encabezar su primer evento en el <Link href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>UFC on ABC: Sandhagen vs. Nurmagomedov</Link> el día 3 de agosto de 2024, enfrentando al #2 de la división <b>Cory Sandhagen</b> en lo que sería una eliminatoria títular, teniendo al ganador de este combate enfrentándose en un futuro ante quien resulte ganador de la pelea entre <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link> y <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>.</p>
                    <p className={styles.peleador__article__text}>Aquel combate se extendería hasta los 5 asaltos, teniendo a un Umar al que se lo vió sufrir por primera vez, pero que sin embargo no tuvo problemas para dominar el combate, logrando llevarse una merecida victoria por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/PPGst_a2UfU?si=YzMf2I8izYLNr6LP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}