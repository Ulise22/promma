import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/40-50/bestfight.jpeg'

export const metadata: Metadata = {
    title: 'Mejor Pelea de la Historia',
    description: 'El 23 de junio de 2002 en Saitama, Japón, se dió lugar a un suceso histórico, a una absoluta guerra entre 2 luchadores que dieron un espectáculo que ni en las mejores películas de acción se ven. Y es que la pelea entre el estadounidense Don Frye y Yoshihiro Takayama es probablemente la mejor de la historia, y su influencia y legado en el mundo de las MMA es innegable.',
    openGraph: {
        title: 'Mejor Pelea de la Historia',
        description: 'El 23 de junio de 2002 en Saitama, Japón, se dió lugar a un suceso histórico, a una absoluta guerra entre 2 luchadores que dieron un espectáculo que ni en las mejores películas de acción se ven. Y es que la pelea entre el estadounidense Don Frye y Yoshihiro Takayama es probablemente la mejor de la historia, y su influencia y legado en el mundo de las MMA es innegable.',
        url: 'https://fullmma.org/articulos/mejor-pelea-mma-de-la-historia'
    }
}

export default function MejorPeleaMMA () {
    return(
        <main>
            <ArticleHero title='Don Frye vs Takayama: La Mejor Pelea de MMA en la Historia' subtitle='La pelea más loca de todos los tiempos entre Don Frye y Yoshihiro Takayama que hizo historia en las MMA, y qué fue de la vida de los peleadores.' image={hero} date='2024-08-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El 23 de junio de 2002 en Saitama, Japón, se dió lugar a un suceso histórico, a una absoluta guerra entre 2 luchadores que dieron un espectáculo que ni en las mejores películas de acción se ven. Y es que la pelea entre el estadounidense <b>Don Frye</b> y <b>Yoshihiro Takayama</b> es probablemente la mejor de la historia, y su influencia y legado en el mundo de las MMA es innegable.</p>
                    <h2>La Historia Detrás de la pelea entre Don Frye vs Yoshihiro Takayama</h2>
                    <p>Don Frye es uno de los primeros campeones que tuvo la <Link href='/articulos/ufc'>UFC</Link>, cuando esta aún tenía un formato de torneo de eliminatorias que es hacía todo en una noche. Allí, en su primer pelea como profesional, logró una victoria por KO a los 8 segundos del combate, convirtiéndose este en el KO más rápido en la historia de la compañía, récord que no sería superado hasta muchos años después, cuando <Link href='/articulos/jorge-masvidal-historia'>Jorge Masvidal</Link> conseguiría <Link href='/articulos/ko-mas-rapido-ufc'>Noquear a Ben Askren en 5 segundos</Link>.</p>
                    <p>Con el paso del tiempo, Don Frye iría ganando prestigio y notariedad, que lo llevarían a firmar por la compañía japonesa de MMA, <Link href='/articulos/que-paso-con-pride-fc'>PRIDE FC</Link>, que en aquel momento era la más grande del mundo. Fue en esta promotora donde se programó una pelea para el <b>PRIDE 21</b>, que tendría a Don Frye vs Mark Coleman como evento principal. Aquella cartelera estaba destinada a ser una de las mejores de la historia, dado que también contaba con la presencia de <Link href='/leyendas/fedor-emilianenko'>Fedor Emelianenko</Link>, y con la presencia de <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>.</p>
                    <p>Sin embargo, 3 semanas antes del combate, su rival Mark Coleman se da de baja debido a una lesión. PRIDE en una busqueda rápida para reemplazarlo en el evento principal, recurre a un luchador japonés llamado <b>Yoshihiro Takayama</b>, que para ese momento tenía un récord de 0-3, habiendo perdido todos sus combates en la compañía, quedándole sólo uno en su contrato con PRIDE. Don Frye por su lado había tenido 2 combates en la compañía, ganando uno por descalificación y uno por decision dividida, por lo que, siendo esta la última pelea de su contrato, tenía que hacer algo épico para ganarse uno nuevo.</p>
                    <p>La pelea ya comenzó con ambos peleadores logrando golpearse al mismo tiempo. Luego, entrando en el clinch, teniendo uno de los intercambios más locos de todos los tiempos, donde se dejó de lado la técnica completamente, golpeando y recibiendo sin ningún control. A tal punto llegó el intercambio de golpes que incluso Frye terminó por perder su protector bucal luego de recibir tantos golpes.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/W3vbBQWs7yc?si=65eDxFUR8HclRPbm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Finalmente, Don Frye lograría una victoria por TKO, una vez que logró ganarle la posición a su rival y golpearlo desde arriba, ante un Takayama que ya no pudo defenderse de los ataques del estadounidense. Obviamente esta terminaría por ser elegida la pelea del año (2002).</p>
                    <h2>¿Qué fue de la vida de Don Frye?</h2>
                    <p>Luego de aquella pelea, Don Frye se ganaría un nuevo contrato bastante lucrativo. Y su pelea con Takayama se convertiría un clásico para la cultura japonesa, llegando incluso a ser replicada en una película de aquel país. </p>
                    <p>Sin embargo, luego de aquella pelea es como si algo hubiera cambiado dentro de Frye, dado que hasta entonces tenía un destacable récord profesional de 15-1. Sin embargo perdería sus 3 siguientes combates, sus siguientes 5 peleas serían sin victoria, sería finalizado en 6 ocasiones, siendo noqueado en 4 ocasiones. Su récord de 15 victorias y 1 una derrota, se convertiría en uno de 20 victorias, 9 derrotas, 1 empate y una pelea sin resultado.</p>
                    <p>Comenzaría a padecer las consecuencias de dedicarse al mundo de las peleas y con un estilo tan alocado en su salud. Teniendo que ser operado con una fusión espinal en 2013, 2 años después de su retirada. En 2016 sufriría una hemorragia cerebral luego de pasar por su séptima operación en la espalda, estando un mes entero en coma, pero logrando sobrevivir.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/OnPyL0DQEGg?si=r2Y7ZhCBHsFlX5ij" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Don Frye actualmente vive una vida simple en una propiedad de poco menos de una hectárea en Arizona. Durante todos los problemas de salud que sufrió terminó por separarse de su esposa, con quien tuvo 2 hijas a las que ama. En su vida sigue contando con grandes amistades que lo acompañan, y tiene 2 caballos a los que cuida en su residencia.</p>
                    <h2>¿Qué fue de la vida de Takayama?</h2>
                    <p>Yohishiro Takayama abandonaría PRIDE luego de aquella pelea, dedicándose exclusivamente a su carrera en Wrestling profesional, donde le iba bastante mejor. Incluso lograría en el año 2013 su primer victoria profesional en las MMA, al vencer al japonés <b>Hikaru Sato</b> por KO en el primer asalto.</p>
                    <p>Aunque durante una pelea en una compañía de lucha libre llamada <b>DDT</b> en 2017, mientras intentaba hacer un movimiento sufriría una gravísima lesión, que le haría caer de cabeza y lo dejaría paralizado del cuello para abajo. Don Frye al enterarse de esto viajaría en avión hasta Japón para reecontrarse con su antiguo rival. Ambos luchadores conversarían, intercambiando historias de vida.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/7vIMXu1CwPo?si=Ta2gr9sVhizop7-2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Finalmente debido a su parálisis, Takayama se retiraría del mundo del Wrestling en 2018. Don Frye le dedicó unas hermosas palabras al enterarse: <b>&quot;Takayama-san. Dios me dió el mejor oponente que nadie podría pedir, vos. Vos hiciste la mejor pelea que el mundo ha visto nunca. (...) Sos el guerrero que todos buscamos ser.&quot;</b></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}