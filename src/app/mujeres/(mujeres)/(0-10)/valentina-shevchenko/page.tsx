import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import valentina from '@/assets/peleadores__images/mujeres/0-10/valentina-shevchenko/shevchenko.png'
import sparring from '@/assets/peleadores__images/mujeres/0-10/valentina-shevchenko/sparring.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Valentina Shevchenko',
    description: "Valentina es una peleadora de MMA que compite en la UFC, donde pelea desde diciembre de 2015, nacionalizada peruana, es la actual campeona de la división de peso mosca femenino",
    openGraph: {
        title: 'Valentina Shevchenko',
        description: "Valentina es una peleadora de MMA que compite en la UFC, donde pelea desde diciembre de 2015, nacionalizada peruana, es la actual campeona de la división de peso mosca femenino",
        url: 'https://fullmma.org/mujeres/valentina-shevchenko'
    }
}

export default function Valentina () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={valentina} w={23} l={4} d={1} nombre='Valentina Shevchenko' apodo='BULLET' categoria='Peso Mosca Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko UFC</h2>
                    <p className={styles.peleador__article__text}>Valentina es una peleadora de MMA que compite en la <Link href='/articulos/ufc'>UFC</Link>, donde pelea desde diciembre de 2015, nacionalizada peruana, es la actual campeona de la división de peso mosca femenino</p>
                    <p className={styles.peleador__article__text}>Hizo su debut en la compañía el 19 de diciembre de 2019, en la categoría de Peso Gallo Femenino, contra la canadiense <b>Sarah Kaufman</b>, encuentro al que llegó con un record de 11-1 en sus anteriores peleas en otras compañías. Este combate, luego de los 3 asaltos terminó con una victoria para Valentina por decisión dividida. Desde entonces, peleó 16 veces por UFC  logrando un récord de 12-3-1 en la compañía. Además, habiendo ganado el título de la división de Peso Mosca Femenino y habiéndolo defendido 7 veces de forma exitosa, convirtiendola en una histórica de la división femenina de la UFC.</p>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko Récord</h2>
                    <p className={styles.peleador__article__text}>Valentina Shevchenko tiene un récord de 23-4-1. Siendo 8 de sus 23 victorias por nocaut, 7 por sumisión, y 8 por decisión. Mientras que de sus 4 derrotas 1 fue por nocaut, 2 por decisión y 1 una por sumisión. Y su único empate, fue en la pelea contra <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> en la revancha por el título el 16 de septiembre de 2023.</p>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko ¿por qué es peruana?</h2>
                    <p className={styles.peleador__article__text}>Originalmente, Valentina Shevchenko nació en Kirguistán o Kirguizistán, cuando todavía conformaba y la hoy disuelta Unión Soviética. Pero en un viaje que hizó como turista junto a su hermana y su cuñado a Perú, en donde dió un seminario sobre Muay Thai, invitada por el peruano <b>Frank Paredes</b> quien es muy conocido en este deporte, quedó enamorada del país.</p>
                    <p className={styles.peleador__article__text}>A tal punto llegó su amor por Perú que decidió quedarse a vivir ahí. Comenzando incluso a realizar los trámites para nacionalizarse peruana. Cuando Shevchenko tuvo que describir cómo había sido su estancia en el país sudamericano, dijo: &quot;la comida es rica, los paisajes son hermosos y la gente es cálida&quot;. A esto hay que agragarle que a Valentina le encanta entrenar en exteriores, por lo que Perú tenía mucho que ofrecerle, dado que tiene lo necesario para subir a las montañas y prepararse en la altura, o bajar al nivel del mar para entrenar en función de a quién se tenga que enfrentar.</p>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko Historia</h2>
                    <p className={styles.peleador__article__text}><b>Valentina Anatolievna Shevchenko</b>, nació el 7 de marzo de 1988 en la ciudad de Biskek, ciudad de Kirguistán, cuando todavía conformaba la Unión Soviética. Desde pequeña parecía tener marcado su destino con los deportes de combate, dado que sus padres le inculcaron tanto a ella como a su hermana Antonina a desarrollarse en el deporte, especialmente su madre quien era experta en Taekwondo y presidente de la federación de este deporte en Kirguistán. </p>
                    <Image className={styles.peleador__article__image} src={sparring} alt='La luchadora de UFC Valentina Shevchenko haciendo un sparring con un compañero' />
                    <p className={styles.peleador__article__text}>Tanto Valentina como su hermana Antonina, se inclinaron por el Muay Thai, deporte del cual se volvió una completa experta, viajando a pelear varias veces a Tailandia en diversos campeonatos, y sosteniendo un récord de 56-2. En su temprana carrera consiguió diversos logros entre los que destacan sus 5 campeonatos mundiales de Muay Thai, sus 2 campeonatos mundiales de Kickboxing y un campeonato mundial de valetodo.</p>
                    <p className={styles.peleador__article__text}>En su adultez viajaría a Perú, país del que quedaría completamente enamorada y donde terminaría viviendo, incluso nacionalizandose para poder representar este país en las competencias donde participa. No es raro verla con la bandera peruana cada vez que tiene un combate o enfrentamiento de UFC. </p>
                    <p className={styles.peleador__article__text}>En diciembre de 2015 hace su debut con una victoria por decisión en UFC, donde pelearía en la categoría de Peso Gallo Femenino. En esta categoría pelearía un total de 5 veces, llegando incluso a tener una posibilidad por el título enfrentando a <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, contra quien perdería por decisión unánime. Luego de esta derrota, Valentina se movería al Peso Mosca Femenino, donde le bastarían sólo 2 combates para convertirse en campeona, dderrotando primero a la brasileña <b>Priscila Cachoeira</b> por sumisión en el segundo asalto, y luego a la polaca <b>Joanna Jedrzejcyk</b> a quien por decisión le terminaría ganando el título vacante de Peso Mosca Femenino de la UFC.</p>
                    <p className={styles.peleador__article__text}>Desde aquella victoria que le dió el título, Valentina defendió su campeonato 7 veces de manera exitosa, convirtiendose en una histórica y claramente una de las mejores peleadoras que tuvo la UFC.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}