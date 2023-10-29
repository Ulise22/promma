import Image from "next/image";
import emiliano from '../../../../assets/peleadores__images/emiliano.png'
import sordi from '../../../../assets/peleadores__images/emiliano-sordi.jpg'
import styles from './Emiliano.module.css'
import PeleadoresHero from "../../components/PeleadoresHero";

export default function Emiliano () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={emiliano} w={23} l={10} d={1} nombre='Emiliano Sordi' categoria='Peso semi-pesado (Light Heavyweight)' apodo='He Man' />
            <section className={styles.emiliano__articles}>
                <article>
                    <h2 className={styles.emiliano__title}>Emiliano Sordi mma</h2>
                    <p className={styles.emiliano__text}>Emiliano Sordi es un peleador de mma argentino, que ha llegado a competir en diversas compañías como Bellator y PFL, que destacó en 2019 al consagrarse campeón mundial de los semicompletos en la compañía PFL (Professional Fighters League).</p>
                    <Image className={styles.emiliano__article__image} src={sordi} alt="Emiliano Sordi saludando a su rival de MMA en un combate para la compañía PFL en 2021" />
                    <p className={styles.emiliano__text}>El cordobés, logró en diciembre de 2019 consagrarse en el Madison Square Garden de Nueva York al vencer por la vía del nocaut al americano Jordan Johnson.</p>
                </article>
                <article>
                    <h2 className={styles.emiliano__title}>Emiliano Sordi ufc</h2>
                    <p className={styles.emiliano__text}>Emiliano en una entrevista reconoció luego de consagrarse campeón de los semicompletos de PFL, recibió varias propuestas para pelear en la UFC. Sin embargo dijo sentirse cómodo en PFL, ya que no busca publicidad y prefiere mantenerse en el anonimato.</p>
                    <p className={styles.emiliano__text}>Además no se detuvo a la hora de dar elogios a su actual compañía, en la que actualmente sigue peleando.</p>
                </article>
                <article className={styles.emiliano__article__container}>
                    <h2 className={styles.emiliano__title}>Última pelea de Emiliano Sordi</h2>
                    <p className={styles.emiliano__text}>En junio del 2022, Emiliano volvió a pelear en lo que es hasta ahora, su último combate en la compañía PFL contra al brasileño Delan Monte, que venía con un record de 8 victorias y 2 derrotas (ganando 5 por knocaouts y 3 por sumisión).</p>
                    <p className={styles.emiliano__text}>Lamentablemente para el argentino, el combate terminó en una derrota por TKO (nocaut técnico) en el primer asalto para Emiliano Sordi y en una victoria para el peleador brasileño.</p>
                    <iframe className={styles.emiliano__video} width="560" height="315" src="https://www.youtube.com/embed/Fgf6eQT6X8k?si=JRzSXaklxbY3IYnt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}