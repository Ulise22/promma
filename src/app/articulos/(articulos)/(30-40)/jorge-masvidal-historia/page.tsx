import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/jorge_masvidal-hero.jpg'

export const metadata: Metadata = {
    title: 'Jorge Masvidal Biografía',
    description: 'La historia de uno de los peleadores favoritos de los fans, que llegóa pelear 2 veces por el título y es recordado como el primer BMF de la UFC.',
    openGraph: {
        title: 'Jorge Masvidal Biografía',
        description: 'La historia de uno de los peleadores favoritos de los fans, que llegóa pelear 2 veces por el título y es recordado como el primer BMF de la UFC.',
        url: 'https://fullmma.org/articulos/jorge-masvidal-historia'
    }
}

export default function JorgeMasvidalHistoria () {
    return(
        <main>
            <ArticleHero title='La Biografía de Jorge Masvidal' subtitle='La historia de uno de los peleadores favoritos de los fans, que llegó a pelear 2 veces por el título y es recordado como el primer BMF de la UFC.' image={hero} date='2024-07-04' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Jorge Masvidal UFC</h2>
                    <p>Jorge Luis Masvidal nació el 12 de noviembre de 1984 en Miami, Florida, siendo hijo de un padre cubano y de una madre peruana. Desde pequeño mostró su interés en las artes marciales, soñando con ser boxeador y viéndose envuelto en problemas en varias ocasiones, al participar de numerosas peleas callejeras. En la secundaria comenzaría a entrenar lucha libre, aunque sin conseguir la calificación necesaria para ser elegido en el équipo que él deseaba. Sin embargo esto último fue lo que lo inspiró a convertirse en un luchador profesional de MMA.</p>
                    <p>Jorge haría su debut profesional el 24 de mayo de 2003 ante el estadounidense <b>Brandon Bledsoe</b> en la promotora <b>AFC</b>, venciendo a este por KO en el primer asalto. Durante el año pelearía 3 veces más, ganando 2 de sus peleas por decisión y 1 por nocaut técnico. Continuaría compitiendo en esta promotora hasta lograr convertirse en campeón de esta el 24 de junio de 2006, al derrotar por decisión unánime a <b>Nuri Shakir</b>.</p>
                    <p>Masvidal seguiría compitiendo en diferentes promotoras como <b>Bellator</b> o <b>Strikeforce</b>, hasta que el 20 de abril de 2013 haría su debut en la <Link href='/articulos/ufc'>UFC</Link>, a la que llegaría con un récord de 24-7. Aquel debut lo cerraría con una victoria por decisión unánime ante <b>Tim Means</b>, desde entonces pelearía en la compañía, donde luego de años ganaría el bono a la pelea de la noche en 2 ocasiones, el bono a la actuación de la noche 4 veces, ganaría el título del <b>BMF</b> y pelearía por el título de Peso Wélter en 2 ocasiones.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/NxhfFWgDDEg?si=jpAuP4pjcCZaZljE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Jorge Masvidal Récord</h2>
                    <p>En las MMA, Jorge Masvidal posee un récord de 35-17. Siendo 16 de sus victorias por la vía del nocaut, 2 por la vía de la sumisión y 17 por decisión. Mientras que de sus 17 derrotas, 2 fueron por nocaut, 2 por sumisión y 13 por decisión.</p>
                    <h2>Jorge Masvidal KO a Ben Askren</h2>
                    <p>El momento que sin dudas elevaría a Masvidal a otro estatus mediático, impulsando su carrera, sería cuando se enfrentaría a un recién llegado <b>Ben Askren</b>, quien luego de haber sido campeón durante muchos años en Bellator, había arribado a la UFC en un intercambio por <Link href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link>.</p>
                    <p>La previa de la pelea se había calentado mucho con un Askren que como es característico en él, habló mierda para vender la pelea, cosa que no le calló bien a Masvidal. El 6 de julio de 2019 se enfrentaría en el UFC 239, con la pelea acabando de forma inmediata, puesto que ni bien comenzó el combate, Jorge iría corriendo a la posición de su rival y le lanzaría un rodillazo en la cabeza que lo dejaría KO, convirtiéndose este en el <Link href='/articulos/ko-mas-rapido-ufc'>KO más rápido de la historia de UFC</Link>.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/cUXVXvRUllQ?si=Tg2d2fj5i8TdOSVI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Jorge Masvidal BMF</h2>
                    <p>Luego de aquel KO que quedaría para la historia, se progamaría una pelea entre Masvidal y el también muy querido <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link>, para disputarse un título nuevo, el <b>BMF (Baddest Motherfucker)</b>, entre quienes eran y son 2 de los peleadores más queridos por los fans y 2 de los más divertidos de ver. La pelea se extendería hasta los 3 asaltos, acabando en una victoria para el peleador de origen cubano producto de una parada médica.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/pvRdS4pDvms?si=_JQqjQ1ZwoDxa_yC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Jorge Masvidal vs Kamaru Usman</h2>
                    <p>Para el 11 de julio de 2020 se esperaba que el evento de UFC 251 entre el campeón de la división en aquel momento <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> y el brasileño <b>Gilbert Burns</b>, sin embargo, días antes del combate el brasileño dió positivo de COVID-19, viéndose obligado a bajarse del combate. Fue entonces que Masvidal aceptó presentarse a pelear en su lugar con sólo 6 días de anticipación, logrando dar el peso y presentarse a pelear.</p>
                    <p>La pelea se extendería hasta los 5 asaltos, dando por vencedor al nigeriano por decisión unánime, aunque el luchador de origen cubano volvía a dar una buena imagen, dando pelea a pesar del muy poco tiempo del que gozó para prepararse. </p>
                    <p>Usman finalmente enfrentaría a Gilber Burns al año siguiente, venciéndolo por nocaut. Luego de aquella pelea, se progamaría una revancha entre Masvidal y Usman para el 24 de abril de 2021. Esta revancha no acabaría bien para nuestro protagonista, puesto que en esta ocasión Usman lograría dejar KO a su rival en el segundo asalto.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/08arcfS7v_c?si=OQGhWgkh90GmCPaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Jorge Masvidal vs Colby Covington</h2>
                    <p>Luego de perder su segunda oportunidad por el título, nuestro protagonista se enfrentaría a uno de los peleadores más polémicos de la UFC, <Link href='/peleadores/colby-covington'>Colby Covington</Link>. Este combate tendría su trasfondo, dado que ambos luchadores habían sido amigos cercanos en el pasado, compartiendo gimnasio y entrenando juntos, aunque con el paso del tiempo, por circunstancias de la vida se fueron distanciando, al punto de enemistarse en sobremanera.</p>
                    <p>Ambos sacaron los trapos sucios del otro antes del combate. La cosa es que se enfrentaron el 6 de marzo de 2022 en el UFC 272 que encabezarían ellos 2. La pelea se extendería durante todos los 5 asaltos, terminando en una victoria por decisión unánime para Colby Covington, aunque de igual forma, este combate le valdría a ambos el bono a la pelea de la noche.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/QWswc8oJuEA?si=9sf0ubOmllSqvhnx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Pero el asunto entre estos 2 no terminaría en el octagono y trascendería lo deportivo, dado que como había afirmado el mismo Masvidal, este conflicto era personal. Supuestamente, el peleador de origen cubano, el 21 de marzo de 2022, cuando Colby estaba saliendo de un restaurante, iría a golpear a este, dandole 2 golpes que le fracturarían uno de sus dientes, y le causarían una abrasión en la muñeca.</p>
                    <p>Masvidal sería arrestado 2 días después por esto, recibiendo la acusación de agresión agravada. Terminaría saliendo de la cárcel al pagar una fianza de $15.000 y luego de muchas idas y venidas judiciales recibiría una pena equivalente a la ya cumplida y debería hacerse cargo del pago de los costos judiciales.</p>
                    <h2>Jorge Masvidal Retiro</h2>
                    <p>Luego de la pelea ante Colby Covinton, Masvidal sería programado para pelear ante el brasileño <b>Gilbert Burns</b> el 8 de abril de 2023 en el UFC 287, encabezado por <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> y <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. Antes del combate ya se había dejado caer la posibilidad de que esta sea la pelea del retiro, especialmente si terminaba perdiendo. </p>
                    <p>La pelea finalmente se extendió a los 3 asaltos, con una clara victoria por decisión unánime para el brasileño. Al terminar la pelea, Jorge confirmaría que esta era su última pelea luego de 20 años de competir profesionalmente, agradeciendo a todos los fans allí presentes, mostrando su gratitud al afirmar que: &quot;Ahora soy un multimillonario y no tenía nada cuando comencé&quot;.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/4X4A6-HqL9Y?si=n4t_MXSDtYWEcOv5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}