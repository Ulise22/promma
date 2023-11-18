import PeleadoresHero from '../../components/PeleadoresHero'
import chandler from '@/assets/peleadores__images/michael-chandler/chandler.png'
import trump from '@/assets/peleadores__images/michael-chandler/chandler_trump.jpg'
import conor from '@/assets/peleadores__images/michael-chandler/chandler-vs-mcgregor.jpg'
import michael from '@/assets/peleadores__images/michael-chandler/michael_chandler.jpg'
import styles from '../../components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Chandler () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={chandler} w={23} l={8} d={0} nombre='Michael Chandler' apodo='IRON' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Chandler UFC</h2>
                    <p>Michael Chandler es actualmente el número #5 de la división de Peso Ligero de <Link href='/promotoras/ufc'>UFC</Link>, debido a la extensa carrera que llevaba Chandler en <b>Bellator</b>, siendo campeón de su división, al momento de entrar en la UFC, apareció muy alto en los rankings.</p>
                    <Image className={styles.peleador__article__image} src={michael} alt='El peleador de MMA Michael Chandler en el reality de televisión de UFC, The Ultimate Fighter' />
                    <p>Dado al prestigio que cosecho en su carrera antes de llegar a UFC, la primera pelea que tuvo fue contra un top10 como lo es <b>Dan Hooker</b>, a quien derrotó por nocaut a los 2 minutos del primer asalto. Victoria, que en su segundo combate apenas, lo llevó a pelear por el Campeonato de Peso Ligero que había quedado vacante luego de la retirada de <b>Khabib</b>, contra el brasileño <b>Charles Oliveira</b>. Finalmente la pelea terminó con una victoria para el brasileño en el segundo asalto por TKO.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Récord</h2>
                    <p>Actualmente Michael Chandler tiene un record de 23-8. De sus 23 victorias, 11 fueron por nocaut, 7 por sumisión y 5 por decisión. Mientras que de sus 8 derrotas, 4 fueron por nocaut, 3 por decisión y 1 una por sumisión.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Historia</h2>
                    <p>Michael Chandler Jr. nació el 24 de abril de 1986 en Nashville, Estados Unidos. Es el segundo de 4 hermanos e hijo de Michael Chandler Sr. y de Betty Chandler. Durante su adolescencia peleó como luchador y terminó segundo en el Campeonato de escuelas secundarias del Estado de Misuri.</p>
                    <Image className={styles.peleador__article__image} src={trump} alt='El peleador de UFC Michael Chandler junto a su esposa y junto a el presidente de los Estados Unidos Donald Trump' />
                    <p>Luego de graduarse en 2004, Chandler entró a la Universidad de Misuri, donde se unió al equipo de wrestling. Chandler clasificó cuatro veces a la NCAA, consiguió 100 victorias en su carrera.</p>
                    <p>Una vez terminada su carrera de wrestling, Michael Chandler comenzó a entrenar MMA donde comenzaría a competir de forma profesional en agosto de 2009, donde debutaría con una victoria por TKO en el primer asalto.</p>
                    <p>En septiembre de 2010 debutaría en Bellator con un nocaut en el primer asalto. En esta compañía es donde pasó la mayor parte de su carrera, compitiendo en Peso Ligero y siendo campeón de esa división 3 veces, teniendo varias defensas por el título exitosas entre medio.</p>
                    <p>Actualmente se encuentra peleando en UFC por la división de Peso Ligero. Donde se encuentra rankeado #5 y en donde ya ha tenido la oportunidad de pelear por el título de la división.</p>
                    <Image className={styles.peleador__article__image} src={conor} alt='Michael Chandler y Conor Mcgregor viendose cara a cara' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Última Pelea</h2>
                    <p>Su última pelea fue contra el también estadounidense <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> el 12 noviembre de 2022 en UFC 281 en Nueva York. Para dicho combate, Michael Chandler venía de dejar KO con una patada a los 17 segundos del segundo asalto contra el histórico <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>. Mientras que Dustin Poirier venía de perder por sumisión en el tercer asalto en una pelea por el título contra <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>.</p>
                    <p>El combate terminó con una victoria para Dustin Poirier, quien sometió a Michael Chandler a los 2 minutos del tercer asalto. Lo que le hizo merecedor del premio a la Pelea de Noche.</p>
                </article>
            </section>
        </main>
    )
}