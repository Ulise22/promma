import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/30-40/ian-garry/ian_garry.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ian Garry',
    description: "Ian Garry es un peleador irlandés que compite en la división de peso wélter UFC desde noviembre de 2021, cuando hiciera su debut en el UFC 268 (evento encabezado por Usman y Covington).",
    openGraph: {
        title: 'Ian Garry',
        description: "Ian Garry es un peleador irlandés que compite en la división de peso wélter UFC desde noviembre de 2021, cuando hiciera su debut en el UFC 268 (evento encabezado por Usman y Covington).",
        url: 'https://fullmma.org/peleadores/ian-garry'
    }
}

export default function IanGarry () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={15} l={0} d={0} nombre='Ian Machado Garry' apodo='THE FUTURE' categoria='Peso Wélter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ian Garry UFC</h2>
                    <p className={styles.peleador__article__text}>Ian Garry es un peleador irlandés que compite en la división de peso wélter <Link href='/articulos/ufc'>UFC</Link> desde noviembre de 2021, cuando hiciera su debut en el UFC 268 (evento encabezado por <Link href='/peleadores/kamaru-usman'>Usman</Link> y <Link href='/peleadores/colby-covington'>Covington</Link>).</p>
                    <h2 className={styles.peleador__article__title}>Ian Garry Récord</h2>
                    <p className={styles.peleador__article__text}>Ian Machado Garry tiene un récord profesional en las MMA de 15-0. Siendo 7 de sus victorias por la vía del nocaut, sólo 1 de sus victorias fue por sumisión y 7 de sus victorias fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Ian Garry Biografía</h2>
                    <p className={styles.peleador__article__text}>Ian Machado Garry nació el 17 de noviembre de 1997 en Irlanda. Comenzó a entrenar boxeo a la temprana edad de 10 años, llegando a tener más de 300 peleas en esta disciplina. </p>
                    <p className={styles.peleador__article__text}>Insipirado por el ascenso de <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, Ian dirigió su atención a las artes marciales mixtas y la idea de aprender o practicar varias artes marciales al mismo tiempo, por esto decidió añadir el Judo a su arsenal, logrando ya a los 18 años convertirse en cinturón negro. Ian Garry confirma que para este momento sentía que era un peleador natural, por lo que, queriendo seguir los pasos de Conor, abandona la universidad para buscar perseguir una carrera en las MMA, comenzando a entrenar a los 18 años.</p>
                    <p className={styles.peleador__article__text}>Ian Garry haría su debut profesional en las MMA en la promotora británica <b>Cage Warriors</b>, enfrentando al inglés <b>James Sheehan</b> el 16 de febrero de 2019, obteniendo una victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En esta compañía tendría otros 5 combates entre 2019 y 2021, obteniendo una victoria en cada uno de ellos, todas por finalización (4 nocauts y 1 sumisión). Esta racha de victorias tan contundentes, es lo que habilitaría a nuestro protagonista a obtener una oportunidad por el título de la división en la compañía, título que disputaría el 26 de junio de 2021, al enfrentar a <b>Jack Grant</b>, obteniendo una victoria por decisión unánime y convirtiéndose en campeón.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/dy6beSJ0GIA?si=MTB4CwWxJ516mpLp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Ya con un récord de 7-0 y siendo campeón de peso wélter en <b>Cage Warriors</b>, el irlandés se ganaría un contrato con la UFC, donde pelearía ese mismo 2021, el día 6 de noviembre. Para su debut se lo programó para enfrentar al peleador estadounidense <b>Jordan Williams</b>, a quien 10 segundos antes de que finalice el primer asalto, lograría dejar KO, llevándose el combate.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/dimcHO46wBY?si=BLVegcKBS6qCWduf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Posterior a su debut, seguiría ganando combates, destacando sus victorias ante el chino <b>Kenan Song</b>, a quien vencería por TKO en el tercer asalto, y su victoria ante <b>Daniel Rodriguez</b>, a quien noquearía en el primer asalto, ganando el primer bono de su carrera a la actuación de la noche. </p>
                    <p className={styles.peleador__article__text}>Luego de su victoria ante Rodriguez, Garry pelearía en el <b>UFC 292: Sterling vs. <Link href='/peleadores/sean-omalley'>O&apos;Malley</Link></b>, para enfrentar a <b>Neil Magny</b>, a quien luego de 3 asaltos vencería por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Pelearía en el <Link href='/noticias/ufc298'>UFC 298</Link>, para enfrentar al estadounidense <b>Geoff Neal</b>, con la esperanza de que en el caso de conseguir una victoria, pudiera meterse en el top #10 de la división. En lo que fue una pelea bastante cerrada y con polémica para algunos fanáticos, Ian Garry consiguió llevarse la victoria y mantener su invicto por decisión dividida.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/XK60Nz_lzRU?si=Qb0GQ7pd3eulwHT7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Volveríamos a ver a Garry subirse al octágono en el <Link href='/noticias/ufc303'>UFC 303</Link>, cuando el 29 de junio de 2024 se enfrentaría al inglés <b>Michael &quot;Venom&quot; Page</b>, a quien luego de 3 asaltos, en una pelea donde sorprendió por su nivel de jiu-jitsu (que consiguió luego de pasar tiempo entrenando con el excampeón de peso ligero <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>), estando cerca de someter a su rival en el primer asalto, se terminó llevando por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/tbBVpqo6gX8?si=NFlr084sYIbC68Am" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}