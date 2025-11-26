import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/30-40/ian-garry/ian_garry.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

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
            <PeleadoresHero peleadoresImage={fighter} w={17} l={1} d={0} nombre='Ian Machado Garry' apodo='THE FUTURE' categoria='Peso Wélter' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ian Garry UFC</h2>
                    <p className={styles.peleador__article__text}>Ian Garry es un peleador irlandés que compite en la división de peso wélter <Link href='/articulos/ufc'>UFC</Link> desde noviembre de 2021, cuando hiciera su debut en el UFC 268 (evento encabezado por <Link href='/peleadores/kamaru-usman'>Usman</Link> y <Link href='/peleadores/colby-covington'>Covington</Link>), ante el estadounidense <b>Jordan Williams</b>. </p>
                    <p className={styles.peleador__article__text}>Al igual que el ídolo de su infancia, <b>Conor McGregor</b>, Ian Garry es uno de los peleadores que representa a Irlanda en la compañía, siendo destacado por ya haber acumulado varios highlights en su carrera, obteniendo varias victorias por nocaut. </p>
                    <h2 className={styles.peleador__article__title}>Ian Garry Récord</h2>
                    <p className={styles.peleador__article__text}>Ian Machado Garry tiene un récord profesional en las MMA de 17-1. Siendo 7 de sus victorias por la vía del nocaut, sólo 1 de sus victorias fue por sumisión y siendo 9 de sus victorias por decisión. Mientras la que es por el momento, su única derrota, sería por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Ian Garry Biografía</h2>
                    <p className={styles.peleador__article__text}>Ian Machado Garry nació el 17 de noviembre de 1997 en la ciudad de Dublín, capital de la República de Irlanda. Comenzó a entrenar boxeo a la temprana edad de 10 años, llegando a tener más de 300 peleas en esta disciplina. Insipirado por el ascenso de <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, Ian dirigió su atención a las artes marciales mixtas y la idea de aprender o practicar varias artes marciales al mismo tiempo, por esto decidió añadir el Judo a su arsenal, logrando ya a los 18 años convertirse en cinturón negro. Ian Garry confirma que para este momento sentía que era un peleador natural, por lo que, queriendo seguir los pasos de Conor, abandona la universidad para buscar perseguir una carrera en las MMA, comenzando a entrenar a los 18 años.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/tk9MQhD0uqo?si=YctuuDWnecZC_Ozm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>De esta manera el joven irlandés lograría cumplir su sueño a la edad de 21 años, cuando haría su debut profesional en las MMA el día 16 de febrero de 2019 en la promotora británica <b>Cage Warriors</b>, en la categoría de peso wélter ante el luchador inglés <b>James Sheehan</b>, a quien luego de 3 asaltos lograría derrotar por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En esta compañía tendría otros 5 combates entre 2019 y 2021: siendo el primero de estos el que tuvo ante el italiano <b>Matteo Ceglia</b> en septiembre de 2019, logrando una victoria por TKO en el primer asalto; consiguiendo en noviembre de ese mismo año la que sería su única victoria por sumisión, al enfrentar al polaco <b>Mateusz Figlak</b>; el 25 de septiembre de 2020 volvería a pelear para enfrentar al británico <b>George McManus</b>, a quien noquearía en el segundo asalto; el 12 de diciembre de ese mismo año vencería por TKO en el primer asalto al inglés <b>Lawrence Tracey</b>; y finalmente, el 19 de marzo de 2021, se enfrentaría al sueco <b>Rostem Akman</b>, a quien lograría derrotar por TKO en el segundo asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Esta racha de victorias tan contundentes, es lo que habilitaría a nuestro protagonista a obtener una oportunidad por el título de la división en la compañía, título que disputaría el 26 de junio de 2021, al enfrentar a <b>Jack Grant</b>, obteniendo una victoria por decisión unánime y convirtiéndose en campeón.</p>
                    <p className={styles.peleador__article__text}>Ya con un récord de 7-0 y siendo campeón de peso wélter en <b>Cage Warriors</b>, el irlandés se ganaría un contrato con la UFC, donde debutaría ese mismo 2021, el día 6 de noviembre, debiendo enfrentar al peleador estadounidense <b>Jordan Williams</b>, a quien 10 segundos antes de que finalice el primer asalto, lograría dejar KO, llevándose el combate, en lo que sería un debut exitoso en la compañía.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dimcHO46wBY?si=BLVegcKBS6qCWduf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>De esta manera, ganaría los siguientes 4 combates que tendría en la compañía, siendo la primera de estas victorias la que tendría al enfrentar a <b>Darian Weeks</b> en abril de 2022, consiguiendo una victoria por decisión unánime. La segunda victoria llegaría por la vía de la decisión al enfrentar a <b>Gabe Green</b> en julio de ese mismo año. El 4 de marzo de 2023 se enfrentaría al luchador chino <b>Kenan Song</b>, y lograría una espectacular victoria por TKO en el tercer asalto de la pelea. Finalmente, en el combate que tuvo el 13 de mayo de ese mismo año, se enfrentaría a <b>Daniel Rodríguez</b>, contra quien conseguiría una victora por TKO en el primer asalto de la pelea, en un desempeño que le valdría para ganar el primer bono de su carrera a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/69zk6SHIJQE?si=5h_UjPI0IpAOY4Kd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de su victoria ante Rodriguez, Garry pelearía en el <b>UFC 292: Sterling vs. <Link href='/peleadores/sean-omalley'>O&apos;Malley</Link></b>, para enfrentar a <b>Neil Magny</b>, a quien luego de 3 asaltos vencería por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Pelearía en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, para enfrentar al estadounidense <b>Geoff Neal</b>, con la esperanza de que en el caso de conseguir una victoria, pudiera meterse en el top #10 de la división. En lo que fue una pelea bastante cerrada y con polémica para algunos fanáticos, Ian Garry consiguió llevarse la victoria y mantener su invicto por decisión dividida.</p>
                    <p className={styles.peleador__article__text}>Volveríamos a ver a Garry subirse al octágono en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, cuando el 29 de junio de 2024 se enfrentaría al inglés <b>Michael &quot;Venom&quot; Page</b>, a quien luego de 3 asaltos, en una pelea donde sorprendió por su nivel de jiu-jitsu (que consiguió luego de pasar tiempo entrenando con el excampeón de peso ligero <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>), estando cerca de someter a su rival en el primer asalto, se terminó llevando por decisión unánime. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}