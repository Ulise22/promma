import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import chandler from '@/assets/peleadores__images/10-20/michael-chandler/chandler.png'
import conor from '@/assets/peleadores__images/10-20/michael-chandler/chandler-vs-mcgregor.jpg'
import michael from '@/assets/peleadores__images/10-20/michael-chandler/michael_chandler.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Michael Chandler',
    description: 'Michael Chandler es actualmente el número #7 de la división de Peso Ligero de UFC, debido a la extensa carrera que llevaba Chandler en Bellator, siendo campeón de su división, al momento de entrar en la UFC, apareció muy alto en los rankings.',
    openGraph: {
        title: 'Michael Chandler',
        description: 'Michael Chandler es actualmente el número #7 de la división de Peso Ligero de UFC, debido a la extensa carrera que llevaba Chandler en Bellator, siendo campeón de su división, al momento de entrar en la UFC, apareció muy alto en los rankings.',
        url: 'https://fullmma.org/peleadores/michael-chandler'
    }
}

export default function Chandler () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={chandler} w={23} l={8} d={0} nombre='Michael Chandler' apodo='IRON' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Chandler UFC</h2>
                    <p className={styles.peleador__article__text}>Michael Chandler es actualmente el número #7 de la división de Peso Ligero de <Link href='/articulos/ufc'>UFC</Link>, debido a la extensa carrera que llevaba Chandler en <b>Bellator</b>, siendo campeón de su división, al momento de entrar en la UFC, apareció muy alto en los rankings.</p>
                    <Image className={styles.peleador__article__image} src={michael} alt='El peleador de MMA Michael Chandler en el reality de televisión de UFC, The Ultimate Fighter' />
                    <p className={styles.peleador__article__text}>Dado al prestigio que cosecho en su carrera antes de llegar a UFC, la primera pelea que tuvo fue contra un top10 como lo es <b>Dan Hooker</b>, a quien derrotó por nocaut a los 2 minutos del primer asalto. Victoria, que en su segundo combate apenas, lo llevó a pelear por el Campeonato de Peso Ligero que había quedado vacante luego de la retirada de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, contra el brasileño <Link href='/peleadores/charles-oliveira'><b>Charles Oliveira</b></Link>. Finalmente la pelea terminó con una victoria para el brasileño en el segundo asalto por TKO.</p>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Récord</h2>
                    <p className={styles.peleador__article__text}>Actualmente Michael Chandler tiene un record de 23-8. De sus 23 victorias, 11 fueron por nocaut, 7 por sumisión y 5 por decisión. Mientras que de sus 8 derrotas, 4 fueron por nocaut, 3 por decisión y 1 una por sumisión.</p>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Historia</h2>
                    <p className={styles.peleador__article__text}>Michael Chandler Jr. nació el 24 de abril de 1986 en Nashville, Estados Unidos. Es el segundo de 4 hermanos e hijo de Michael Chandler Sr. y de Betty Chandler. Durante su adolescencia peleó como luchador y terminó segundo en el Campeonato de escuelas secundarias del Estado de Misuri.</p>
                    <Image className={styles.peleador__article__image} src={conor} alt='Michael Chandler y Conor Mcgregor viendose cara a cara' />
                    <p className={styles.peleador__article__text}>Luego de graduarse en 2004, Chandler entró a la Universidad de Misuri, donde se unió al equipo de wrestling. Chandler clasificó cuatro veces a la NCAA, consiguió 100 victorias en su carrera.</p>
                    <p className={styles.peleador__article__text}>Una vez terminada su carrera de wrestling, Michael Chandler comenzó a entrenar MMA donde comenzaría a competir de forma profesional en agosto de 2009, donde debutaría con una victoria por TKO en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>En septiembre de 2010 debutaría en Bellator con un nocaut en el primer asalto. En esta compañía es donde pasó la mayor parte de su carrera, compitiendo en Peso Ligero y siendo campeón de esa división 3 veces, teniendo varias defensas por el título exitosas entre medio.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/7m2adxQ0xWw?si=45i7IO1SF4r2iFOE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Última Pelea</h2>
                    <p className={styles.peleador__article__text}>Su última pelea fue contra el también estadounidense <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> el 12 noviembre de 2022 en UFC 281 en Nueva York. Para dicho combate, Michael Chandler venía de dejar KO con una patada a los 17 segundos del segundo asalto contra el histórico <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>. Mientras que Dustin Poirier venía de perder por sumisión en el tercer asalto en una pelea por el título contra <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>.</p>
                    <p className={styles.peleador__article__text}>El combate terminó con una victoria para Dustin Poirier, quien sometió a Michael Chandler a los 2 minutos del tercer asalto. Lo que le hizo merecedor del premio a la Pelea de Noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/zhC7KhFk49M?si=5KS2kDwsmwlam2QW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}