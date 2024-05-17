import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import holloway from '@/assets/peleadores__images/10-20/max-holloway/holloway.png'
import belt from '@/assets/peleadores__images/10-20/max-holloway/holloway_belt.jpg'
import girl from '@/assets/peleadores__images/10-20/max-holloway/holloway_girl.jpg'
import traje from '@/assets/peleadores__images/10-20/max-holloway/holloway_traje.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Holloway () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={holloway} w={26} l={7} d={0} nombre='Max Holloway' apodo='BLESSED' categoria='Peso Pluma' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Max Holloway UFC</h2>
                    <p className={styles.peleador__article__text}>Max Holloway es un peleador estadounidense que actualmente está rankeado #1 en Peso Pluma, y es el peleador #12 libra por libra. Llegó a ser campeón interino de Peso Pluma luego derrotar por TKO en el tercer asalto a Anthony Pettis en UFC 206, y luego reafirmó su título al vencer por TKO en el tercer asalto también, contra el histórico <Link href='/leyendas/jose-aldo'>José Aldo</Link>, luego de eso, Holloway defendió de forma exitosa 3 veces su título hasta que lo perdió contra <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>.</p>
                    <p className={styles.peleador__article__text}>Hizo su debut en la compañía el 4 de febrero de 2012, contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en UFC 143, pelea que fue la única que Max Holloway perdió por finalización, con una sumisión a los 3 minutos del primer asaltos.</p>
                    <p className={styles.peleador__article__text}>Desde su llegada a la UFC hace 11 años, Holloway ha roto todo tipo de records, desde cantidad de golpes conectados en toda la UFC, hasta cantidad de bonos ganados por pelea de la noche o por actuación de la noche.</p>
                    <h2 className={styles.peleador__article__title}>Max Holloway Récord</h2>
                    <p className={styles.peleador__article__text}>Max Holloway tiene un récord de 26-7. Siendo 12 de sus 25 victorias por nocaut, 2 por sumisión y 12 por decisión. Mientras que de sus 7 derrotas, 1 ha sido por sumisión y 6 por decisión. En 13 años de carrera y en 32 combates, no ha perdido ninguna pelea por nocaut.</p>
                    <h2 className={styles.peleador__article__title}>Max Holloway Récord Strikes</h2>
                    <p className={styles.peleador__article__text}>Max Holloway cuenta actualmente con el récord de mayor cantidad de strikes conectados en la historia de la UFC, con un total de 3,217 golpes conectados en total, contabilizados luego de su pelea con <b>Arnold Allen</b>, es decir, sin contar su última pelea contra The Korean Zombie. Todos estos golpes logró conectarlos en un total de 27 peleas.</p>
                    <Image className={styles.peleador__article__image} src={traje} alt='Max Holloway con un traje de Karate' />
                    <h2 className={styles.peleador__article__title}>Max Holloway Historia</h2>
                    <p className={styles.peleador__article__text}>Jerome Max Keli&apos;i Holloway nació el 4 de diciembre de 1991 en Honolu, Hawái. En la adolescencia comenzó a aprender kickboxing en la escuela de la que se terminaría graduando. Deporte que le abriría las puertas a las MMA y a otras artes marciales que también practica como el Jiu Jitsu y el Muay Thai.</p>
                    <p className={styles.peleador__article__text}>Debutaría como profesional en MMA el 11 de septiembre de 2010, con una victoria por decisión unánime contra Duke Saragosa. En su temprana carrera acumularía una racha de 4-0 que lo llevaría a debutar en la UFC el 4 de febrero de 2012 contra Dustin Poirier, quien lo vencería por sumisión en el primer asalto.</p>
                    <Image className={styles.peleador__article__image} src={girl} alt='Max Holloway chocando puños con su esposa' />
                    <p className={styles.peleador__article__text}>Sin embargo, desde aquella derrota contra Poirier, Max Holloway fue capaz de ganar 21 combates en UFC, volviéndose un histórico de la compañía en la que hoy en día sigue compitiendo.</p>
                    <h2 className={styles.peleador__article__title}>Holloway vs Volkanovski</h2>
                    <p className={styles.peleador__article__text}>Max Holloway y <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> se han enfrentado 3 veces en total. La primera siendo por el título de Peso Pluma de UFC, que sostenía Holloway desde hacía tiempo y que venía defendiendo de forma exitosa. En aquella ocasión, Alexander Volkanovski ganaría por decisión unánime en una pelea que sin embargo no fue tan contundente para el australiano.</p>
                    <Image className={styles.peleador__article__image} src={belt} alt='Max Holloway riendose en una conferencia de prensa de UFC 245 con su cinturón de campeón en la mesa' />
                    <p className={styles.peleador__article__text}>Debido a esto, unos meses después el 11 de julio de 2020, ambos se volvieron a enfrentar en UFC 251. Dicho combate fue bastante parejo y se lo volvió a llevar Volkanovski por decisión dividida.</p>
                    <p className={styles.peleador__article__text}>Luego de que Max Holloway venciera al estadounidense calbin Kattar y al mexicano <b>Yair Rodríguez</b> y de que Alexander Volkanovski venciera al estadounidense <b>Brian Ortega</b> y a <b>The Korean Zombie</b>, Volkanovski vs Holloway 3 se daría el 2 julio de 2022 por UFC 276, en Las Vegas. Combate que volería a pelarse durante los 5 asaltos completos, y que volvería a dar como ganador al australiano Alexander Volkanovski, pero esta vez lo haría de forma contundente, demostrando durante los 5 asaltos que duró el combate, su superioridad respecto al hawaiano.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/vE-Vu1EA94A?si=PH-XWYPvDY4YakWd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}