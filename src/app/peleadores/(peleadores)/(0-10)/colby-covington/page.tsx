import PeleadoresHero from '../../../components/PeleadoresHero'
import styles from '../../../components/peleador.module.css'
import Link from 'next/link'
import colby from '@/assets/peleadores__images/0-10/colby-covington/colby_covington.png'
import fight from '@/assets/peleadores__images/0-10/colby-covington/fight.jpg'
import pelea from '@/assets/peleadores__images/0-10/colby-covington/pelea.jpg'
import covington from '@/assets/peleadores__images/0-10/colby-covington/colby.jpg'
import Image from 'next/image'

export default function Covington () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={colby} w={17} l={4} d={0} nombre='Colby Covington' apodo='CHAOS' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington UFC</h2>
                    <p>Colby Covington es un peleador de MMA estadounidense que compite en la División de Peso Wélter de la <Link href='/promotoras/ufc'>UFC</Link>, donde se encuenta ranqueado #2 luego de casi 10 años de competir. Desde que hiciera su debut en el <b>UFC Fight Night: Bisping vs. Le</b> contra el luchador chino <b>Anying Wang</b>, a quien noqueó en el primer asalto, ha luchado un total 16 veces en la compañía, ganando 12 de esos 16 combates.</p>
                    <Image className={styles.peleador__article__image} src={fight} alt='Colby Covington dando una patada al entonces campeón de UFC Kamaru Usman' />
                    <p>Colby tiene una destacable carrera en la UFC, y aunque sólo llego a ser campeón de manera interina, cuando derrotó por decisión al brasileño <b>Rafael dos Anjos</b>, tuvo la oportunidad de retar al campeón en 3 oportunidades, la primera contra <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, con quien cayó derrotado por TKO luego de 4 asaltos, sin embargo se llevó el bono a la pelea de la noche. La segunda sería su revancha contra Usman, a quien enfrentó luego de vencer por TKO a <b>Tyron Woodley</b>, donde volvería a caer nuevamente, esta vez por decisión unánime. Su última oportunidad de pelear por el título, llegaría cuando luego de vencer por decisión al peleador <b>Jorge Masvidal</b>, podría retar al nuevo campeón <Link href='/campeones/leon-edwards'>Leon Edwards</Link>, esta pelea se daría por el UFC 296 organizado en Las Vegas, donde nuevamente, Colby caería derrotado por decisión unánime contra el peleador jamaicano.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington Récord</h2>
                    <p>Actualmente Colby Covington tiene un récord de 17-4. Siendo 4 de esas 17 victorias por la vía del nocaut, 4 por la vía de la sumisión y 9 por decisión. Mientras que de sus 4 derrotas 1 fue por nocaut, 1 por sumisión y 2 por decisión. Como dato curioso, de sus 4 derrotas, 3 llegaron en una pelea por el título, 2 contra el histórico campeón de la divisón <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> y 1 contra el actual campeón de la divisón <Link href='/campeones/leon-edwards'>Leon Edwards</Link>.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington Historia</h2>
                    <p>Colby Ray Covington nació el 22 de febrero de 1988 en la ciudad de Clovis, ubicada en el Estado americano de California, es hijo de Brad y Noelle Covington, tiene una hermana llamada Candace. De pequeño, con apenas 11 años se mudó junto a su familia a la ciudad de Springfield, ubicada en el Estado de Oregon. Allí, Colby luchó en Thurston High School, ganando el campeonato estatal en su último año. En su temprana adultez, Covington asistiría al Iowa Central Community College, en donde ganaría título nacional de 165 libras de Wrestling, de manera curiosa en aquella época fue compañero de cuarto de quien en un futuro también se convertiría en peleador de UFC, <Link href='/campeones/jon-jones'>Jon Jones</Link>.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El peleador de MMA estadounidense Colby Covington golpeando a su rival en medio de un combate de UFC' />
                    <p>Por cuestiones de la vida, Colby se vio obligado a mudarse nuevamente a Oregon, donde se matriculó en la Oregon State University. También sería condecorado como un Baever, convirtiéndose en un All-American, dos veces campeón de Pac-10 y terminando quinto en el torneo de la NCAA de 2011.</p>
                    <p>En la actualidad posee el cinturón negro de Jiu-Jitsu Brasileño, bajo la tutela de Daniel Valverde.</p>
                    <p>Después de un breve periodo peleando de manera amateur en las MMA en Oregón, Colby decidió mudarse a Florida para entrenar junto al equipo de American Top Team (ATT), quienes lo ayudaron a convertirse en profesional en 2012, cuando hizo su debut contra el estadounidense <b>Chris Ensley</b>, a quien vencería por nocaut en el primer asalto.</p>
                    <p>Acumuló un récord total de 5-0 antes de unirse a la UFC debutando de forma oficial en agosto de 2014, contra <b>Anying Wang</b> a quien lograría vencer por nocaut en el primer asalto. Su invicto se alargaría un par de combates más, venciendo al brasileño <b>Wagner Silva</b> por sumisión y al estadounidense <b>Mike Pyle</b> por decisión. Hasta que al enfrentarse al brasileño <b>Warlley Alves</b>, sería cuando vería la derrota por primera vez, siendo sometido en el primer asalto por UFC 194 en diciembre de 2015.</p>
                    <p>Desde entonces pelea en la UFC, y aunque no llegó a ser campeón, tuvo la oportunidad en 3 ocasiones, siendo la última en diciembre de 2023 contra <Link href='/campeones/leon-edwards'>Leon Edwards</Link>.</p>
                    <Image className={styles.peleador__article__image} src={covington} alt='El peleador de UFC Colby Covington con la bandera de Los Estados Unidos' />
                    <p>En cuanto a su vida personal, es conocida su afiliación política, siendo un abierto partidario del Partido Republicano de los Estados Unidos, y en particular su preferencia por el ex presidente <b>Donald Trump</b>, a quien ha elogiado varias veces en público. Incluso, luego de ganor su campeonato interino contra <b>Rafael dos Anjos</b> en 2018, visitó la Casa Blanca para presentarse con el título.</p>
                </article>
            </section>
        </main>
    )
}