import PeleadoresHero from '../../components/PeleadoresHero'
import strickland from '../../../../assets/peleadores__images/sean-strickland/strickland.png'
import endfight from '../../../../assets/peleadores__images/sean-strickland/strickland_endfight.jpg'
import styles from './Strickland.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Strickland () {
    return(
        <main> 
            <PeleadoresHero peleadoresImage={strickland} w={28} l={5} d={0} nombre='Sean Strickland' categoria='Peso Medio' apodo={null} />
            <section className={styles.strickland__articles__container}>
                <article>
                    <h2 className={styles.strickland__title}>Sean Strickland UFC</h2>
                    <p>Sean Strickland es un peleador estadounidense de MMA que compite en la compañía UFC, y es el actual capeón de Peso Medio de UFC, luego de que quien en su momento llegó a ocupar el 5to lugar en su división, le arrebatara el título a <b>Israel Adensanya</b>.</p>
                    <Image src={endfight} alt='' />
                    <p>El campeón, hizó su debut en esta compañía el 15 de marzo de 2014 en UFC 171, ganando su combate por sumisión en el primer asalto, manteniendo así el invicto que sostenía hasta ese entonces.</p>
                    <p>Luego de un par de combates, terminaría perdiendo su racha invicta de 15 victorias seguidas contra el argentino <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, que en febrero de 2015 lo derrotó por decisión unánime, en lo que había sido el debut del norteamericano en Peso Welter.</p>
                </article>
                <article>
                    <h2 className={styles.strickland__title}>Sean Strickland record</h2>
                </article>
                <article>
                    <h2 className={styles.strickland__title}>Sean Strickland MMA</h2>
                </article>
                <article>
                    <h2 className={styles.strickland__title}>Sean Strickland Historia</h2>
                </article>
                <article>
                    <h2 className={styles.strickland__title}>Última pelea de Sean Strickland</h2>
                </article>
            </section>
        </main>
    )
}