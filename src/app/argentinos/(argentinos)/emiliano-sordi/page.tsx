import Image from "next/image";
import emiliano from '@/assets/peleadores__images/argentinos/emiliano-sordi/emiliano.png'
import sordi from '@/assets/peleadores__images/argentinos/emiliano-sordi/emiliano-sordi.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import PeleadoresHero from "@/app/peleadores/components/PeleadoresHero";
import AsideChamps from "@/app/components/asides/AsideChamps";
import Link from "next/link";

export default function Emiliano () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={emiliano} w={23} l={12} d={1} nombre='Emiliano Sordi' categoria='Peso semi-pesado (Light Heavyweight)' apodo='He Man' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Emiliano Sordi mma</h2>
                    <p className={styles.peleador__article__text}>Emiliano Sordi es un peleador de mma argentino, que ha llegado a competir en diversas compañías como <Link href='/promotoras/bellator'>Bellator</Link> y <Link href='/promotoras/pfl'>PFL</Link>, que destacó en 2019 al consagrarse campeón mundial de los semicompletos en la compañía PFL (Professional Fighters League).</p>
                    <p className={styles.peleador__article__text}>El cordobés, logró en diciembre de 2019 consagrarse en el Madison Square Garden de Nueva York al vencer por la vía del nocaut al americano Jordan Johnson.</p>
                    <h2 className={styles.peleador__article__title}>Emiliano Sordi Récord</h2>
                    <p>Emiliano Sordi cuenta con un récord de 23-12-1. Siendo 16 de sus 23 victorias por la vía del nocuat, 6 por sumisión y sólo 1 por decisión, finalizando casi la totalidad de sus combates. Mientras que de sus 12 derrotas, 6 fueron por nocaut, 4 por sumisión y 2 por decisión. Mientras que su único empate fue por decisión unánime de los jueces, contra el estadounidense <b>Dan Spohn</b> en la temporada regular de PFL.</p>
                    <h2 className={styles.peleador__article__title}>Emiliano Sordi ufc</h2>
                    <p className={styles.peleador__article__text}>Emiliano en una entrevista reconoció luego de consagrarse campeón de los semicompletos de PFL, recibió varias propuestas para pelear en la UFC. Sin embargo dijo sentirse cómodo en PFL, ya que no busca publicidad y prefiere mantenerse en el anonimato. Además no se detuvo a la hora de dar elogios a su actual compañía, en la que actualmente sigue peleando.</p>
                    <h2 className={styles.peleador__article__title}>Emiliano Sordi PFL</h2>
                    <p className={styles.peleador__article__text}>El 30 de agosto de 2018, Emiliano hizo su debut en PFL con un sorprendente ko a los 16 segundos del primer asalto contra el estadounidense Jason Butcher. Desde entonces luchó un total de 12 veces en la compañía, de las cuales ganó 7, perdió 4 y empató 1. </p>
                    <Image className={styles.peleador__article__image} src={sordi} alt="Emiliano Sordi saludando a su rival de MMA en un combate para la compañía PFL en 2021" />
                    <p className={styles.peleador__article__text}>Cabe destacar, que a diferencia de otras compañías como UFC, PFL tiene un formato diferente, donde no hay que defender el titulo ganado, ni arrebatarselo al vigente campeón. En su lugar, se entrega un titulo por año. En este sistema es donde Emiliano Sordi supo hacerse con el campeonato mundial de los semipesados de PFL en 2019, menos de un año y medio después de su debut.</p>
                    <p>Ese año 2019 fue uno de los más activos de su carrera, dado que para poder competir por el título entregado por la compañía, necesitó pelear en la temporada regular de PFL en 2 ocasiones, primero contra el brasileño <b>Vinny Magalhaes</b>, a quien fue capaz de vencer por TKO en el segundo asalto, en junio de ese año. La segunda pelea por temporada regular fue contra el ruso <b>Bozigit Ataev</b>, a quien venció por TKO en el primer asalto, poco más de un minuto después de inciada la pelea en agosto de 2019. Estas 2 victorias le permitirían competir en los Playoffs de PFL.</p>
                    <p>Una vez compitiendo en los Playoffs, se enfrento al luchador de Nueva Zelanda <b>Sigi Paseleli</b> el 31 de agosto de 2019, aquella pelea la ganaría por TKO en el primer asalto, en apenas un minuto y medio. Ese mismo día se volvería a enfrentar al ruso <b>Bozigit Ataev</b>, a quien ya había enfrentado y derrotado por nocaut. En esta ocasión, lo vencería con un mataleón que sometería a su rival en el primer asalto. Ganándose de esta manera su boleto a la final por el título de PFL.</p>
                    <p>Su pelea por el título se dió el 31 de diciembre de 2019, en Nueva York. Su rival sería el estadounidense <b>Jordan Johnson</b>, que era un peleador un poco más experimentado que el argentino, y que en el pasado había sabido competir en la <Link href='/promotoras/ufc'>UFC</Link>, donde ganó todos sus combates. Aquella pelea la terminó ganando nuestro protagonista por TKO, nuevamente, en el primer asalto, a tan sólo 2 minutos de que comience el combate.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/TBE9b_0LmxI?si=wvfMol_BviieQj16" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Desde aquella final, su rival, Jordan Johnson, no ha vuelto a disputar una pelea profesional de MMA. Por su lado, Emiliano Sordi, devido a la pandemia de 2020, no pudo volver a competir aquel año. Aunque volvió a hacerlo en 2021, ganándo una pelea, empatando una, en la temporada regular de PFL, y perdiendo su combate en los playoffs de la compañía. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}