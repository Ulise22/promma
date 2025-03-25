import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import fighter from '@/assets/peleadores__images/argentinos/esteban-ribovics/esteban_ribovics.png'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Esteban Ribovics',
    description: "Esteban Ribovics es un peleador de MMA argentino que compite en la división de peso ligero en la UFC desde que participó en el Dana White's Contender Series 50 en agosto de 2022, donde enfrentando al inglés Thomas Paull consiguiendo una victoria por KO en el primer asalto que le ganó un contrato con la compañía.",
    openGraph: {
        title: 'Esteban Ribovics',
        description: "Esteban Ribovics es un peleador de MMA argentino que compite en la división de peso ligero en la UFC desde que participó en el Dana White's Contender Series 50 en agosto de 2022, donde enfrentando al inglés Thomas Paull consiguiendo una victoria por KO en el primer asalto que le ganó un contrato con la compañía.",
        url: 'https://fullmma.org/peleadores/esteban-ribovics'
    }
}

export default function Ribovics () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={14} l={2} d={0} nombre='Esteban Ribovics' apodo='EL GRINGO' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Esteban Ribovics UFC</h2>
                    <p className={styles.peleador__article__text}>Esteban Ribovics es un peleador de MMA argentino que compite en la división de peso ligero en la <Link href='/articulos/ufc'>UFC</Link> desde que participó en el <b>Dana White&apos;s Contender Series 50</b> en agosto de 2022, donde enfrentando al inglés <b>Thomas Paull</b> consiguiendo una victoria por KO en el primer asalto que le ganó un contrato con la compañía.</p>
                    <h2 className={styles.peleador__article__title}>Esteban Ribovics Récord</h2>
                    <p className={styles.peleador__article__text}>Esteban Ribovics posee un récord profesional de 14-2. Siendo 7 de sus victorias por la vía del nocaut, 5 por la vía de la sumisión y sólo 2 por decisión. Mientras que sus 2 únicas derrotas profesionales fue por decisión de los jueces.</p>
                    <h2 className={styles.peleador__article__title}>Esteban Ribovics Historia</h2>
                    <p className={styles.peleador__article__text}>Esteban Ribovics Marijan nació el 27 de abril de 1996 en Tartagal, una ciudad ubicada en la provincia de Salta, Argentina. Comenzó a entrenar artes marciales a los 12 años, por influencia de un amigo que lo llevó a tener su primera clase.</p>
                    <p className={styles.peleador__article__text}>Al terminar la secundaria a los 17 años, se fue a vivir a Córdoba, donde comenzó a entrenar y perfeccionar otras disciplinas complementarias de las MMA, como el boxeo, el muay thai y el jiu-jitsu brasileño. Tan sólo un año después se converitiría en profesional.</p>
                    <p className={styles.peleador__article__text}>Su primer pelea la tendría en Salta, donde nació, para la promotora <b>HFC</b>, el 12 de diciembre de 2015, enfrentando a su compatriota <b>Lautaro Iturbe</b>, a quien logró vencer por sumisión en el tercer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>En Argentina tendría 7 combates en total, donde lograría ganar todos y cada uno de ellos por finalización, ya sea por la vía del nocaut o por sumisión. Esto lo llevó a firmar con <b>FFC</b>, que es la promotora de MMA más importante de Perú, y una de las más importantes de latinoamérica. En dicha promotora debutaría el 4 de marzo de 2020, ante el peruano <b>Jose Zarauz</b>, logrando una victoria por KO en el tercer asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Lo más impresionante estaba por llegar, cuando en su segundo combate para la compañía, tendría la chance de disputar el campeonato vacante de peso ligero ante el ecuatoriano <b>Javier Basurto</b>, contra quien se enfrentaría el 10 de diciembre de 2010. A Esteban le bastarían tan sólo 7 segundos para conseguir llevarse el título a caso, logrando una impresionante victoria por KO, siendo una mano derecha la que finalmente derribaría a su rival.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/WACHBDrjYkw?si=qhGgsakbsipGrhUG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente combate iría a pelear por el cinturón vacante de peso ligero de la promotora <b>SFH</b> (Samurai Fight House), el 12 de febrero de 2022, teniendo por delante al también argentino <b>Franco Aranda</b>. Esteban lograría una vez más hacerse con otro título, consiguiendo la victoria por KO en los primeros 30 segundos del combate.</p>
                    <p className={styles.peleador__article__text}>Ya con un récord profesional de 10-0, siendo todas sus victorias por la vía de la finalización, tendría la oportunidad de ganarse un contrato con la UFC en el <b>Dana White&apos;s Contender Series</b>, donde le pondrían por delante al inglés <b>Thomas Paull</b> el 16 de agosto de 2022. En esta ocasión, Robovics aprovecharía su oportunidad, imponiéndose por sobre su rival con un KO en el primer minuto y medio del combate, ganándose con todo el derecho, un contrato con la compañía más grande de artes marciales mixtas. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/CExoos0xrnc?si=XjIReI4KlVacLhJx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su debut en la compañía lo haría el día 4 de marzo de 2023, enfrentando al oriundo de Tayikistán, <b>Loik Radzhabov</b>, en el <b>UFC 285 (<Link href='/peleadores/jon-jones'>Jones</Link> vs <Link href='/peleadores/ciryl-gane'>Gane</Link>)</b>. Lamentablemente, luego de finalizados los 3 asaltos de la pelea, Esteban sufriría por primera vez la derrota por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Su primera victoria en la compañía llegaría el 8 de julio de 2023, cuando enfrentando al estadounidense <b>Kamuela Kirk</b> en el <b>UFC 290 (<Link href='/peleadores/alexander-volkanovski'>Volkanovski</Link> vs Rodríguez)</b>, lograría llevarse la pelea por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>El 11 de mayo de 2024, en el <Link href='/covertura-ufc/fight-night-lewis-nascimento'>UFC on ESPN: Lewis vs Nascimento</Link>, Esteban se enfrentaría al estadounidense <b>Terrance McKinney</b>, contra quien lograría una hermosa victoria por KO, luego de conectar una patada en la cabeza que mandaría a dormir a su rival.</p>
                    <p className={styles.peleador__article__text}>Aunque lo más destacado de su carrera llegaría en el <Link href='/covertura-ufc/ufc306'>UFC 306</Link>, en donde protagonizaría la pelea de la noche de una de las carteleras más importantes en la historia de la UFC, siendo él parte de la cartelera estelar por primera vez, organizado en La Esfera en Las Vegas, con motivo de la celebración del día de la independencia de México, se enfrentaría al mexicano <b>Daniel Zellhuber</b>, en lo que fue una auténtica guerra, el argentino se terminaría llevando el combate por decisión dividida, y ganaría el primer bono de su carrera a la pelea de la noche.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}