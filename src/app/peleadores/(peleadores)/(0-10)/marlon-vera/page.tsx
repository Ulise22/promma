import PeleadoresHero from '../../../components/PeleadoresHero'
import styles from '../../../components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import vera from '@/assets/peleadores__images/0-10/chito-vera/chito_vera.png'
import fight from '@/assets/peleadores__images/0-10/chito-vera/vera_fight.jpg'
import chito from '@/assets/peleadores__images/0-10/chito-vera/chito-vera.jpg'
import marlon from '@/assets/peleadores__images/0-10/chito-vera/chito_vera.jpg'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Chito () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={vera} w={28} l={9} d={1} nombre='Marlon Vera' apodo='CHITO' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Chito Vera UFC</h2>
                    <p className={styles.peleador__article__text}>Marlon &quot;Chito&quot; Vera, es un peleador ecuatoriano de MMA que compite en la División de Peso Gallo de la <Link href='/promotoras/ufc'>UFC</Link> en la pelea desde que hiciera su debut en UFC 180 el 15 de noviembre de 2015, cuando se enfrentaría al mexicano <b>Marco Beltrán</b>, con quien caería derrotado por decisión unánime luego de los 3 asaltos. Sin embargo, desde aquel día pasó un tiempo y actualmente se encuentra ranqueado #6 en la división en que compite.</p>
                    <Image className={styles.peleador__article__image} src={fight} alt='El peleador ecuatoriano de MMA Chito Vera en medio de un combate por UFC' />
                    <p className={styles.peleador__article__text}>Hoy en día luego de 22 combates en la compañía, en la cual lleva 15 victorias y 7 derrotas, se ha ganado la oportunidad de pelear por el título de la división contra el recientemente proclamado campeón <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, a quien ya había enfrentado en una ocasión. Aquel combate que tuvieron se dió en el UFC 252 en Las Vegas, donde Chito Vera logró ganar por nocaut en el primer asalto, convirtiéndose, hasta el momento, en el único peleador en ganarle a O&apos;Malley, porque recordemos que Sean actualmente tiene un record de 17-1, y ese 1 es el que consiguió poner Marlon Vera.</p>
                    <p className={styles.peleador__article__text}>Para cuanto tuvo lugar aquel primer enfrentamiento que tuvieron, Sean O&apos;Malley llegaba con un récord de 12-0, luego de ganar por KO contra el estadounidense <b>Eddie Wineland</b>. En medio de la pelea O&apos;Malley se lesionó el pie, y tiempo después Vera aprovechó esto para terminar llevandose el combate al tirarlo al suelo e iniciar el ground and pound, golpeandolo en el suelo que llevó al arbitro a dar por terminado al combate en favor del ecuatoriano.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/vgCrVNa3MQQ?si=bFeuKY1ckgHIwra4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Marlon Vera Récord</h2>
                    <p className={styles.peleador__article__text}>Marlon Vera cuenta con un récord de 21-8-1. Siendo 8 de sus victorias por nocaut, 8 por sumisión y 6 por decisión. Mientras que todas sus derrotas fueron por decisión. También tiene un empate llegó en su enfrentamiento contra el brasileño <b>Fábio Bispo</b> con quien peleó en Lima, Perú.</p>
                    <h2 className={styles.peleador__article__title}>Marlon Vera Historia</h2>
                    <p className={styles.peleador__article__text}>Marlon vera nació ek 2 de diciembre de 1992 en la ciudad ecuatoriana de Chone, ubicada en la provincia de Manabí. Cinebzpi a entrenar artes marciales mixtas a los 16 años de la mano de su maestro <b>Frank Vidal</b> en Guayaquil, con quien aprendió tecnicas de Jiu-Jitsu, Muay Thai y boxeo. Chito acabaría ganandose el cinturón negro de jiu-jitsu brasileño en 2015.</p>
                    <Image className={styles.peleador__article__image} src={chito} alt='El peleador de MMA Chito Vera presenciando una pelea de UFC' />
                    <p className={styles.peleador__article__text}>Vera haría su debut profesional como luchador en junio de 2011, cuando se enfrentaría al luchador colombiano <b>César Moreno</b>, a quien derrotaría por decisión unánime luego de 3 asaltos. Tendría unas peleas más en campeonatos de la región latinoamericana hasta que en 2014, luego de postularse, sería aceptado como participante del reality organizado por la UFC <b>The Ultimate Fighter</b>. En dicha participación pelearía contra el experimentado <b>Henry Bure</b> a quien lograría noquear, ganandose así su paso a la semifinal. Sin embargo, antes de que esta lograra concretarse, Vera sufrió un problema en la piel que lo llevó a retirarse del programa para ser reemplazado por el argentino <Link href='/peleadores/guido-cannetti'>Guido Canneti</Link>, con quien se enfrentaría en el futuro y ganaría por sumisión en el segundo asalto en el <b>UFC Fight Night: Magny vs. Ponzinibbio</b> organizado en Buenos Aires, Argentina.</p>
                    <p className={styles.peleador__article__text}>Luego de la participación de Chito en el programa, se ganaría un contrato con la UFC en donde haría el ya mencionado debut contra <b>Marco Beltrán</b>, quien lo venció por decisión. Sin embargo desde entonces tuvo una destacable participación en su división, ganando el bono de la actuación de la noche 5 veces, el de la pelea de la noche 3 veces y siendo él quien cuenta con el récord de la mayor cantidad de finalizaciones de la historia de Peso Gallo en UFC, con un total de 10.</p>
                    <p className={styles.peleador__article__text}>También se ganó la oportunidad de pelear contra quien ya supo vencer en una ocasión, <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link> por el título de la división, el 9 de marzo de 2024 en el UFC 299. Como dato, ambos peleadores, junto a al estadounidense <b>Rob Font</b>, comparten el récord de mayor cantidad de nocauts en la divisón de peso gallo de la UFC, ¿logrará Chito Vera desempatar este récord?</p>
                    <Image className={styles.peleador__article__image} src={marlon} alt='El peleador ecuatoriano de UFC Marlon Vera' />
                    <p className={styles.peleador__article__text}>En cuanto a su vida personal, Vera está casado con su esposa María, con quien tiene 2 hijas nacidas en 2011 y 2018, y un hijo nacido en 2015. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}