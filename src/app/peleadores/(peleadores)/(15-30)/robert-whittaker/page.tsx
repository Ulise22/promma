import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/30-40/robert-whittaker/robert_whittaker.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Robert Whittaker',
    description: "",
    openGraph: {
        title: 'Robert Whittaker',
        description: "",
        url: 'https://fullmma.org/peleadores/robert-whittaker'
    }
}

export default function Whittaker () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={26} l={7} d={0} nombre='Robert Whittaker' apodo='THE REAPER' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Robert Whittaker UFC</h2>
                    <p className={styles.peleador__article__text}>Robert Whittaker es un peleador nacido en Nueva Zelanda y nacionalizado australiano que compite en la división de peso medio de la <Link href='/articulos/ufc'>UFC</Link>, que supo ser campeón de la compañía en una ocasión, cuando se enfrentó al cubano <b>Yoel Romero</b> por el campeonato interino de la división, posteriormente, el entonces campeón <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> se retiraría, promoviendo a Whittaker a campeón indiscutido.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/6_2rrDbE_dA?si=x-tiq6EG_eznSKjv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Robert Whittaker Récord</h2>
                    <p className={styles.peleador__article__text}>Robert Whittaker posee un récord de 26-7. Siendo 10 de sus victorias por la vía del nocaut, 5 por sumisión y 11 por decisión. Mientras que de sus 7 derrotas, 3 fueron por nocaut, sólo 1 por sumisión y 3 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Robert Whittaker Biografía</h2>
                    <p className={styles.peleador__article__text}>Robert John Whittaker nació el 20 de diciembre de 1990 en Nueva Zelanda, siendo su madre de este país y su padre un hombre australiano, se mudó de niño a Australia. Una vez allí, cuando tenía 7 años, su padre inscribió a su hijo Robert y a su hermano a una escuela de Karate, para inculcar en sus hijos el valor de la disciplina y la habilidad para defenderse.</p>
                    <p className={styles.peleador__article__text}>Luego de entrenar durante 8 años este arte marcial, y de ganar ambos hermanos el cinturón negro, su padre les ofreció probar otros deportes o abandonar completamente el karate. Mientras que su hermano eligió la segunda opción, Robert se inscribió en un gimnasio de <b>Hapkido</b>, un arte marcial coreana, a la vez que practicaba el que entonces era su deporte favorito, el rugby.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/4AFPwgcfuIg?si=XsJRMMIQO50BqgYe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Poco tiempo después, aquel gimnasio se convertiría en uno de MMA, lo que dejó a Whittaker sin otra opción que aprender el deporte. Rápidamente se enganchó, priorizándolo por encima del rugby, y persiguiendo una carrera poco después. </p>
                    <p className={styles.peleador__article__text}>Robert Whittaker haría su debut oficial en las MMA en una promotora australiana llamada <b>Xtreme Fighting Championships</b> el 14 de marzo de 2009, enfrentando a su compatriota y también debutante en el deporte, <b>Chris Tallowin</b>, a quien vencería por TKO en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Originalmente comenzaría su carrera peleando en peso wélter, lo que haría que luego de varias peleas en Australia, finalmente consiguiera su primer cinturón en este peso el 23 de marzo de 2012, luego de derrotar por TKO a <b>Shaun Spooner</b>, consiguiendo el campeonato de la promotora <b>SFA</b>. Luego de este título, pelearía para hacerse el campeonato de <b>Cage Fighting Championships</b> ante <b>Jesse Juarez</b>, contra quien caería derrotado por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/kRrLckSAtGM?si=mD-Tnx_BLcRvbUJF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Sin embargo, ya con varias peleas a sus espaldas y un récord de 9-2 en su carrera, tendría la oportunidad de participar en el reality de televisión de la UFC <b>The Ultimate Fighter (TUF)</b>. Whittaker ganaría la competición participando en el equipo de Australia, luego de vencer por decisión unánime a <b>Brad Scott</b> el 15 de diciembre de 2012, en la que sería su primer pelea oficial en la UFC.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/bfq6otUCVL0?si=sdqYpJWzPQ3Jf9sb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Posterior a su debut en su victoria del campeonato TUF, Robert tendría 4 combates en peso wélter, donde ganaría 2 (1 por nocaut y 1 por decisión) y perdería 2 (1 por nocaut y 1 por decisión). Quizás sería esta racha irregular en peso wélter la que llevaría a nuestro protagonista a moverse de peso, para comenzar a competir en la división de peso medio.</p>
                    <p className={styles.peleador__article__text}>En esta nueva división de peso, Whittaker conseguiría acumular una racha de 6 victorias consecutivas, siendo 4 de estas victorias por la vía del nocaut. Además, en el proceso ganaría 5 bonos de la UFC, 2 por la pelea de la noche y 3 a la Actuación de la ncohe. Esta racha de victorias le haría merecedor de una pelea ante el cubano <Link href='/articulos/yoel-romero-genetica'>Yoel Romero</Link> (que hasta ese momento llevaba 8 victorias consecutivas) por el <b>Campeonato Interino de Peso Mediano</b>, el 8 de julio de 2017. Aquel combate se extendería hasta los 5 asaltos, terminando con una victoria para nuestro protagonista por decisión unánime, convirtiéndose en campeón interino de peso medio de la UFC, además de ganarse el bono a la pelea de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/SlTTpVoHpkw?si=Avp6LfZcjyQO3J2H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En aquel entonces el campeón indiscutido era la leyenda del deporte y de la UFC <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link>, quien por problemas de salud no había sido capaz de defender su cinturón (por eso se puso en juego un cinturón interino). GSP terminó por retirarse del deporte y dejando vacante su cinturón, lo que llevó a que Robert Whittaker sea promovido a campeón indiscutido. Con esto sobre la mesa, se programó una primera defensa del título para el día 10 de febrero de 2018 contra el también excampeón <b>Luke Rockhold</b>, pero una lesión de Whittaker le impidió presentarse a pelear ese día, por lo que en su lugar <b>Yoel Romero</b> iría a pelear contra Luke, con la idea de que el ganador de dicha pelea se enfrentara por el título a Whittaker.</p>
                    <p className={styles.peleador__article__text}>Yoel Romero ganaría por KO a Luke Rockhold, por lo que se programaría una revancha para el día 9 de junio de 2018. Romero no pudo dar el peso para el cinturón de campeonato, estando a 0.2 libras de dar las 185lbs, por lo que se realizó una pelea sin el cinturón en juego. Robert Whittaker terminaría por ganar por decisión dividida luego de 5 asaltos, en los que además, Robert se terminaría por romper el pulgar en medio de la pelea, teniendo que combatir durante 2 asaltos con el dedo roto. Whittaker ganaría un nuevo bono a la pelea de la noche y además, tiempo después esta sería elegida la pelea del año 2018.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/7CAkyfHMhhA?si=Tp_szNrlX6KRGfqd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 5 de octubre de 2019 se programaría una defensa del título ante el campeón interino <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, quien llegaba para esta pelea con un récord invicto de 17-0. Lamentablemente para nuestro protagonista, pasado la mitad del segundo asalto, recibiría un KO que le terminaría por quitar el cinturón a manos del luchador nigeriano.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ZK5Mjq0UGoE?si=rieRvRWGsWcJGIJS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella derrota, Robert tendría que seguir peleando en la busqueda de volver a tener una oportunidad de recuperar su título. Fue por esto que logró hilar una racha de 3 victorias consecutivas, ante el inglés <b>Darren Till</b> y los estadounidenses <b>Jared Cannonier</b> y <b>Kelvin Gastelum</b>, siendo contra este último que ganaría un bono a la pelea de la noche, nuevamente.</p>
                    <p className={styles.peleador__article__text}>Con esta racha de victorias, el australiano se había ganado la oportunidad de volver a disputarle el cinturón a quien seguía siendo el campeón, <b>Israel Adesanya</b>, por lo que se vería las caras ante este el 12 de febrero de 2022 en el UFC 271. Lamentablemente para nuestro protagonista, volvería a caer derrotado, aunque esta vez por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/jzAer0kvaHA?si=iZ8RgtFXrQS3EKvT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Robert volvería a pelear ese año, esta vez ante el italiano <b>Marvin Vettori</b>, consiguiendo otra victoria por decisión unánime. Un año después, el 8 de julio de 2023, tendría la oportunidad de pelear ante el sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, en lo que sería una pelea eliminatoria titular, donde el ganador tendría la oportunidad de disputar el título, aunque sorprendetemente Whittaker no sería capaz de salir victorioso del combate, cayendo noqueado en el segundo asalto del combate</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Ns8My2V_aiY?si=s0ZaVslMfILgKT5D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>A pesar de todo, el australiano se ha mantenido muy activo durante su carrera, teniendo hasta el momento 2 peleas en lo que va del 2024, ante el brasileño <b>Paulo Costa</b>, a quien enfrentó y venció en febrero de 2024 en el <Link href='/noticias/ufc298'>UFC 298</Link>; y ante el ruso <b>Ikram Aliskerov</b>, a quien enfrentó en un <Link href='/noticias/fight-night-whittaker-aliskerov'>Fight Night</Link> encabezado por él, donde logró lucirse consiguiendo una victoria por KO en el primer asalto, ganando un bono a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Además, tiene una pelea programada para el <b>UFC 308</b>, en octubre de 2024, donde deberá enfrentarse al ruso <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, en busca de posicionarse como el siguiente contendiente al título en la división de peso medio.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}