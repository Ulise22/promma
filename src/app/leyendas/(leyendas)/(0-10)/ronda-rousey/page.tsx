import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import RouseyHero from './RouseyHero'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Ronda Rousey',
    description: "Ronda Rousey es una luchadora profesional y expeleadora de artes marciales mixtas, siendo la última campeona de la compañia desaperecida Strikeforce, con una destacada carrera en la UFC, donde fue la primera campeona de la compañía, y donde fue la primer mujer en formar parte del salón de la fama de UFC.",
    openGraph: {
        title: 'Ronda Rousey',
        description: "Ronda Rousey es una luchadora profesional y expeleadora de artes marciales mixtas, siendo la última campeona de la compañia desaperecida Strikeforce, con una destacada carrera en la UFC, donde fue la primera campeona de la compañía, y donde fue la primer mujer en formar parte del salón de la fama de UFC.",
        url: 'https://fullmma.org/leyendas/ronda-rousey'
    }
}


export default function RondaRousey () {
    return(
        <main>
            <RouseyHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Ronda Rousey UFC</h2>
                    <p className={styles.leyenda__article__text}>Ronda Rousey es una luchadora profesional y expeleadora de artes marciales mixtas, siendo la última campeona de la compañia desaperecida <b>Strikeforce</b>, con una destacada carrera en la <Link href='/articulos/ufc'>UFC</Link>, donde fue la primera campeona de la compañía, y donde fue la primer mujer en formar parte del <b>salón de la fama de UFC</b>.</p>
                    <p className={styles.leyenda__article__text}>Su aportación al mundo de las artes marciales mixtas y a la UFC, especialmente, fue ser la quien introdujera el combate y las divisiones femeninas. Además, siendo de las primeras en hacer uso del &quot;Trash Talk&quot; en la categoría femenina para vender sus peleas, lo que la converitría en una de las peleadoras más mediáticas que nos trajó este deporte, no sólo entre las peleadoras femeninas.</p>
                    <h2 className={styles.leyenda__article__title}>Ronda Rousey Récord</h2>
                    <p className={styles.leyenda__article__text}>Ronda Rousey cuenta con un récord de 12-2. Siendo todas sus 12 victorias por finalización, 9 de ellas por sumisión y 3 por nocaut. Mientras que sus 2 derrotas, fueron ambas por nocaut. Como curiosidad, casi todas las sumisiones que consiguió fueron por armbar, siendo este el caso en las 8 de sus 9 sumisiones.</p>
                    <h2 className={styles.leyenda__article__title}>Biografía Ronda Rousey</h2>
                    <p className={styles.leyenda__article__text}>Ronda Jean Rousey nació el 1 de febrero de 1987 en la ciudad de California, Riverside, en los Estados Unidos. Es hija de Ann Maria Rousey DeMars, una mujer que también tuvo una carrera condecorada en el Judo, siendo las primera estadounidense en ganar un campeonato del mundo en el año 1994. Su vida estaría marcada desde su infancia por un hecho que ella describe como el momento más duro de su vida, que sería el suicidio de su padre cuando Ronda tenía apenas 8 años.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/2QbOLVH_5E8?si=RH1ZCL7BNOSGS6k1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Siguiendo los pasos de su madre, Ronda comenzó su carrera de Judo entrenando con los compañeros de esta misma. En este deporte tuvo una carrera bastante exitosa, ganando 2 medallas doradas en el Campeonato Panamericano de 2004 y 2005, una medalla de plata en este mismo torneo en 2006, y una de bronce en 2007. Además ganó la medalla de Oro en los Juegos Panamericanos organizados en Brasil en 2007. También fue medalla plateada en el Campeonato Mundial de Judo y fue medalla de bronce en los Juegos Olímpicos de Pekín en 2008.</p>
                    <p className={styles.leyenda__article__text}>La primera vez que se interesó en las MMA, fue cuando su compañero armenio <b>Manvel Gamburyan</b> se enfrentó a <b>Nate Diaz</b> en The Ultimate Fighter. Relatando que nunca se había emocionado de esa manera con un combate de Judo que como lo había hecho en ese combate de MMA, es por eso que decide cambiarse de deporte y comienza a entrenar en el equipo del luchador armenio, el equipo <b>Hayastan</b>.</p>
                    <p className={styles.leyenda__article__text}>Haría su debut profesional el 27 de marzo de 2011 contra la brasileña <b>Ediene Gomes</b>, a quien sometería apenas iniciado el primer asalto con un armbar, cosa que se convertiría en algo usual durante su carrera, dado que este el resultado que tuvieron sus primeras 7 peleas.</p>
                    <p className={styles.leyenda__article__text}>El 3 de marzo de 2012 se convertiría en campeona de peso gallo femenino en la compañía <b>Strickforce</b>, al someter con un armbar a la estadounidense <b>Miesha Tate</b> en el primer asalto. Esta se convertiría en la pelea más larga hasta ese momento para Ronda, durando poco más de 4 minutos.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/k-RRFvFi3OE?si=cMqhAeGHmOrCPrH5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Luego de una defensa más por el título en la que vence a la canadiense <b>Sarah Kaufman</b> sometiéndola con una armbar en el primer asalto, la empresa para la que competía es comprada por por UFC. Ronda sería la protagonista del primer combate femenino de la compañía liderada por <b>Dana White</b> contra la estadounidense <b>Liz Carmouche</b>, a quien derrotaría en el primer asalto con una sumisión producto de un armbar.</p>
                    <p className={styles.leyenda__article__text}>Ronda Rousey, defendería exitosamente el título de campeona un total de 6 veces, destacando entre ellas, su revancha contra <b>Miesha Tate</b> por UFC 168. Este sería el único combate en extenderse hasta el tercer asalto en toda su carrera. Pese a que fue la pelea que más se le había complicado hasta el momento, el resultado termino siendo el mismo de siempre, finalizando el combate con un armbar que sometería a su rival.</p>
                    <p className={styles.leyenda__article__text}>Ronda llegó a acumular un récord de 12-0, manteniéndose invicta y mostrándose como una campeona dominante, dado que la mayoría de sus victorias provenían de finalizaciones en el primer asalto. Sin embargo, su carrera comenzó a torcerse cuando le tocó enfrentarse a su compatriota <b>Holly Holm</b>, quien venía de un récord de 9-0. Aquel combate terminó con una victoria para Holly, que fue capaz de noquear a la campeona en el segundo asalto. Este sería la primer derrota de Ronda, y como contaría en varias entrevistas, sería un momento muy duro para ella, dado que la derrota la afectó muchísimo a nivel mental.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/d8DWEU6IhlQ?si=bDpoblEfmTYkQmpL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.leyenda__article__title}>Ronda Rousey Última Pelea</h2>
                    <p className={styles.leyenda__article__text}>Su última derrota contra Holly Holm, le caería fatal a Ronda Rousey, es por eso que necesitó de un año entero para volver a sentirse en condiciones de seguir compitiendo. Su vuelta al octagono lo haría para enfrentarse a la brasileña Amanda Nunes, que en ese entonces tenía un récord de 17-4 y era la vigente campeona del peso gallo femenino. Desafortunadamente, esta pelea no terminó bien para nuestra protagonista, que fue noqueada a los 48 segundos del primer asalto.</p>
                    <p className={styles.leyenda__article__text}>Luego de esta derrota, con un récord de 12-2, y habiendo defendido el título exitosamente un total de 6 veces, Ronda decidió retirarse del deporte, dejando atrás un glorioso legado. </p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/qwPBPiUzgag?si=ENZplBopanPsriia" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}