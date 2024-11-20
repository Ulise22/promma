import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import AndersonHero from './AndersonHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Anderson Silva',
    description: "Anderson Silva es un peleador de MMA brasileño que supo ser campeón de peso medio de UFC, en donde fue campeón de 2006 a 2013, con un total de 10 defensas del título exitosas, lo que lo convierte en el reinado más largo en la historia de la promoción. Por tamaña hazaña, es que tanto figuras como Dana White, presidente de la UFC, como muchos otros, lo consideran como el artista marcial mixto más grande de la historia. Llegando a ser reconocido con una inclusión en el Salón de la Fama de la UFC en 2023.",
    openGraph: {
        title: 'Anderson Silva',
        description: "Anderson Silva es un peleador de MMA brasileño que supo ser campeón de peso medio de UFC, en donde fue campeón de 2006 a 2013, con un total de 10 defensas del título exitosas, lo que lo convierte en el reinado más largo en la historia de la promoción. Por tamaña hazaña, es que tanto figuras como Dana White, presidente de la UFC, como muchos otros, lo consideran como el artista marcial mixto más grande de la historia. Llegando a ser reconocido con una inclusión en el Salón de la Fama de la UFC en 2023.",
        url: 'https://fullmma.org/leyendas/anderson-silva'
    }
}


export default function Anderson () {
    return(
        <main>
            <AndersonHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Anderson Silva UFC</h2>
                    <p className={styles.leyenda__article__text}>Anderson Silva es un peleador de MMA brasileño que supo ser campeón de peso medio de <Link href='/articulos/ufc'>UFC</Link>, en donde fue campeón de 2006 a 2013, con un total de 10 defensas del título exitosas, lo que lo convierte en el reinado más largo en la historia de la promoción. Por tamaña hazaña, es que tanto figuras como Dana White, presidente de la UFC, como muchos otros, lo consideran como el artista marcial mixto más grande de la historia. Llegando a ser reconocido con una inclusión en el Salón de la Fama de la UFC en 2023.</p>
                    <h2 className={styles.leyenda__article__title}>Anderson Silva Récord</h2>
                    <p className={styles.leyenda__article__text}>Anderson Silva cuenta con un récord en las MMA de 34-11(1). Siendo 20 de sus 34 victorias por la vía del nocaut, 6 por la vía de la sumisión y 8 por decisión. Mientras que de sus 11 derrotas 4 fueron la vía del nocaut, 1 por sumisión, 5 por decisión y 1 por descalificación en su combate contra el japonés <b>Yushin Okami</b> a quien le dió una patada alta ilegal que le impidió al japonés continuar el combate. Además de tener una pelea que acabó sin resultado contra Nick Diaz, luego de que Anderson diera positivo por testosterona, y luego de Diaz diera positivo por marihuana.</p>
                    <h2 className={styles.leyenda__article__title}>Anderson Silva Historia</h2>
                    <p className={styles.leyenda__article__text}>Anderson da Silva nació en São Paulo, Brasil, el 14 de abril de 1975, en el seno de una familia bastante pobre. Según él cuenta, comenzó a entrenar jiu-jitsu brasileño a los 8 años de edad con los niños con quienes jugaba, arte marcial en la que actualmente es cinturón negro, y que consiguió de la mano de su maestro <b>Antonio Rodrigo Nogueira</b>. Además es cinturón negro de Taekwondo, cinturón negro en Judo y posee una cinta amarilla en capoeira. Aunque a lo largo de su carrera se destacó principalmente por su dominió en el Muay Thai, que comenzó a aprender cuando tenía 16 años.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/c96FlEr1V20?si=UE1gCg5T7xiOd0RS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Durante su juventud, Silva trabajaría en un McDonalds hasta hacer su debut como profesional en su ciudad natal un 25 de junio de 1997, en aquella ocasión pelearía 2 veces el mismo día, ganando ambos combates contra los brasileños <b> Raimundo Pinheiro</b> y <b>Fabrício Camões</b>, por sumisión y TKO respectivamente. </p>
                    <p className={styles.leyenda__article__text}>Luego de sus inicios como peleador de MMA, se tomaría un descanso para pelear en boxeo, donde perdería contra <b>Osmar Luiz Teixeira</b>. Sin embargo volvería a pelear en MMA 3 años después de su debut, contra el brasileño <b>Luiz Azeredo</b>, que lo terminaría venciendo por decisión unánime, dejandolo así con un récord profesional de 2-1. Sin embargo Anderson se recuperaría rápido, peleando 3 meses después contra <b>José Barreto</b> a quien derrotaría por TKO luego de un minuto de combate. Acumularía un récord de 8-1 hasta ser contactado para pelear en la promotora japonesa <b>PRIDE</b>, que en aquel momento era la más grande e importante de MMA.</p>
                    <p className={styles.leyenda__article__text}>En PRIDE comenzaría ganando sus 3 primeros combates, 2 de ellos por nocaut y 1 por decisión, hasta que le tocaría enfrentarse al japonés <b>Daiju Takase</b>, quien lo vencería por sumisión. Además, volvería a perder su siguiente combate en la promotora, esta vez contra el también japonés <b>Ryo Chonan</b>, quien también lo sometería con una técnica muy curiosa. Luego de aquella derrota Anderson Silva no volvió a pelear para la compañía, sin embargo esto poco importaba para el brasileño que entre medias había ganado el campeonato de Peso Medio de <b>Cage Rage</b>, título que fue capaz defender en 3 ocasiones, ganando todas ellas por nocaut.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/FiiNCGuVqEs?si=ivsgyfvD_bM57C5T" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Su siguiente derrota volvería a ser contra otro japonés, <b>Yushin Okami</b>, aunque esta vez por descalifición, dado que Silva uso una patada alta ilegal que no permitió seguir peleando a Okami. Años más tarde, se volvería a enfrentar a Yushin Okami, esta vez por UFC y en defensa del título, aunque en esta ocasión lograría ganar el combate por TKO en el segundo asalto.</p>
                    <p className={styles.leyenda__article__text}>Anderson Silva debutaría oficialmente en la UFC el 28 de junio de 2006, contra el estadounidense <b>Chris Leben</b>, a quien dejó KO luego de un rodillazo en el primer asalto, esa noche además ganaría el premio al KO de la noche. Su tan destacado debut, además de la trayectoria que ya tenía, lo hizo digno de pelear por el cinturón de Peso Medio de la UFC el 28 de junio de 2006 contra el entonces campeón, <b>Rich Franklin</b>, a quien vencería por KO en el primer asalto, otra vez por un rodillazo, en un combate donde volvería a mostrar su gran habilidad en el Muay Thai, propinando un total de 26 rodillazos a su contrincante en menos de 3 minutos, ganando nuevamente el premio al KO de la noche, además del cinturón de campeón.</p>
                    <p className={styles.leyenda__article__text}>Desde entonces, Silva impondría un reinado en la división, con 10 defensas exitosas del título casi 7 años como campeón, siendo la mayor cantidad de tiempo que un peleador retuvo su título en la UFC. Entre sus defensas destacan la revancha que tuvo contra <b>Rich Franklin</b>, a quien volvería a ganar por nocaut producto de sus rodillazos; la pelea contra <b>Thales Leites</b>, que ganó por decisión unánime, y destaca justamente por eso, por ser el primer peleador en resistir 5 asaltos contra Silva; su combate contra <b>James Irvin</b> a quien dejó KO en el primer asalto, pese a que este, tiempo después dio positivo por sustancias prohibidas; y por último la pelea contra el estadounidense <b>Chael Sonnen</b>, que sorprendió a todos durante su combate, dado que dominó por completo a Silva, al punto de que si no hubiera sido porque Anderson fue capaz de conseguir un <b>triangle ambar</b> para someterlo en el 5to asalto, seguramente hubiera ganado la pelea por decisión.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/DpLaqnwFQEY?si=2hZjOiMbLbF-LdhT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>El día 6 de julio de 2013, Anderson Silva se enfrentaría a <b>Chris Weidman</b> en UFC 162, contra quien era un claro favorito, pese a que este venía de una racha invicta, no dejaba de ser un joven prospecto. Es en esta pelea cuando comenzaría la caída de Anderson, puesto que por llevar la guardia baja demasiado tiempo, recibió un golpe que lo dejó KO en el segundo asalto, siendo esta su primera derrota por nocaut en toda su carrera. Tiempo después a finales de ese año, se daría una revancha entre ambos peleadores, donde en esta ocasión, Anderson Silva perdería luego de que Chris hiciera un buen bloqueo a una patada del brasileño, que terminaría por lesionarlo y fracturarle la pierna.</p>
                    <p className={styles.leyenda__article__text}>Una vez recuperado, Silva volvería a pelear contra <b>Nick Diaz</b>, a quien originalmente venció por decisión unánime. Sin embargo luego de que ambos peleadores dieran positivo por sustancias prohibidas, la pelea quedó sin resultado. Luego de aquello volvería a pelear contra <b>Michael Bisping</b>, quien lo derrotaría por decisión unánime. Su siguiente pelea sería en el UFC 200, entrando de reemplazo a pelear contra <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link> en la divisón de los Semipesados, pelea que aceptó con 2 días de anticipación, haciendo dentro de todo un papel respetable, perdiendo por decisión. Luego tendría una pelea que ganaría contra <b>Derek Brunson</b>, que podía ilusionar con la recuperación del brasileño, sin embargo, 2 años después se enfrentaría <b>Israel Adensanya</b>, que lo vencería por decisión unánime, aunque en su siguiente pelea, Adensanya iría por el título que acabaría ganando <b>Kelvin Gastelum</b>.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/EYSM44kwlUM?si=f3zrw8Tvjs-XhVVA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Hasta este punto, pese a perder 5 de sus últimas 7 peleas, Anderson venía haciendo un papel digno, puesto que sus derrotas se debían a circuntancias específicas, y habían sido contra rivales sumamente difíciles. Pero lo que terminó de dar por acabada su carrera, fueron sus derrotas contra <b>Jared Cannonier</b> por decisión TKO en 2019, y su derrota contra <b>Uriah Hall</b>, también por TKO en 2020. Desde aquel último combate, Anderson Silva no ha vuelto a combatir en las MMA.</p>
                    <p className={styles.leyenda__article__text}>Luego de su carrera en las Artes Marciales Mixtas, ha tenido un par de combates en boxeo, entre ellos, uno contra el ex campeón Julio César Chávez Jr. a quien venció por decisión dividida.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}