import PeleadoresHero from '../../components/PeleadoresHero'
import holloway from '@/assets/peleadores__images/max-holloway/holloway.png'
import win from '@/assets/peleadores__images/max-holloway/holloway_win.jpg'
import styles from '../../components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Holloway () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={holloway} w={25} l={7} d={0} nombre='Max Holloway' apodo='BLESSED' categoria='Peso Pluma' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Max Holloway UFC</h2>
                    <p>Max Holloway es un peleador estadounidense que actualmente está rankeado #1 en Peso Pluma, y es el peleador #12 libra por libra. Llegó a ser campeón interino de Peso Pluma luego derrotar por TKO en el tercer asalto a Anthony Pettis en UFC 206, y luego reafirmó su título al vencer por TKO en el tercer asalto también, contra el histórico <b>José Aldo</b>, luego de eso, Holloway defendió de forma exitosa 3 veces su título hasta que lo perdió contra <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>.</p>
                    <p>Hizo su debut en la compañía el 4 de febrero de 2012, contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en UFC 143, pelea que fue la única que Max Holloway perdió por finalización, con una sumisión a los 3 minutos del primer asaltos.</p>
                    <p>Desde su llegada a la UFC hace 11 años, Holloway ha roto todo tipo de records, desde cantidad de golpes conectados en toda la UFC, hasta cantidad de bonos ganados por pelea de la noche o por actuación de la noche.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Max Holloway Récord</h2>
                    <p>Max Holloway tiene un récord de 25-7. Siendo 11 de sus 25 victorias por nocaut, 2 por sumisión y 12 por decisión. Mientras que de sus 7 derrotas, 1 ha sido por sumisión y 6 por decisión. En 13 años de carrera y en 32 combates, no ha perdido ninguna pelea por nocaut.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Max Holloway Récord Strikes</h2>
                    <p>Max Holloway cuenta actualmente con el récord de mayor cantidad de strikes conectados en la historia de la UFC, con un total de 3,217 golpes conectados en total, contabilizados luego de su pelea con <b>Arnold Allen</b>, es decir, sin contar su última pelea contra The Korean Zombie. Todos estos golpes logró conectarlos en un total de 27 peleas.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Max Holloway Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Holloway vs Volkanovski</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Max Holloway Última Pelea</h2>
                    <p>La última pelea de Max Holloway, se organizó el 26 de agosto de 2023 en la ciudad de Kallang en Singapur. Dicha pelea fue contra el coreano <b>Chang-sung Jung</b>, mejor conocido como <b>The Korean Zombie</b>. En aquella pelea, Max Holloway ganó por KO a los 23 segundos del tercer asalto, lo que le hizo ganar su sexto premio a la Pelea de la Noche. Además, luego de aquel combate, The Korean Zombie anunció su retirada de las artes marciales mixtas, realizando un gesto simbólico al dejar sus guantes en el octágono.</p>
                    <Image className={styles.peleador__article__image} src={win} alt='Max Holloway y The Korean Zombie, levantándose mutuamente los brazos luego de la victoria de Holloway en UFC' />
                </article>
            </section>
        </main>
    )
}