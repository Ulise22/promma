import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import duPlessis from '@/assets/peleadores__images/0-10/dricus-du-plessis/du-plessis.png'
import AsideFighter from '@/app/components/asides/AsideFighter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dricus Du Plessis',
    description: 'Dricus Du Plessis es un luchador de MMA sudafricano que actualmente es el campeón de la división de Peso Medio de la UFC, donde pelea desde octubre de 2020, cuando debutaría con una victoria por KO en el primer asalto en el UFC Fight Night: Moraes vs. Sandhagen contra el brasileño Markus Pérez.',
    openGraph: {
        title: 'Dricus Du Plessis',
        description: 'Dricus Du Plessis es un luchador de MMA sudafricano que actualmente es el campeón de la división de Peso Medio de la UFC, donde pelea desde octubre de 2020, cuando debutaría con una victoria por KO en el primer asalto en el UFC Fight Night: Moraes vs. Sandhagen contra el brasileño Markus Pérez.',
        url: 'https://fullmma.org/peleadores/du-plessis'
    }
}

export default function DuPlessis () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={duPlessis} w={22} l={2} d={0} nombre='Dricus Du Plessis' apodo='STILLKNOCKS' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Du Plessis</h2>
                    <p className={styles.peleador__article__text}>Dricus Du Plessis es un luchador de MMA sudafricano que actualmente es el campeón de la división de Peso Medio de la <Link href='/articulos/ufc'>UFC</Link>, donde pelea desde octubre de 2020, cuando debutaría con una victoria por KO en el primer asalto en el <b>UFC Fight Night: Moraes vs. Sandhagen</b> contra el brasileño <b>Markus Pérez</b>.</p>
                    <h2 className={styles.peleador__article__title}>Du Plessis Récord</h2>
                    <p className={styles.peleador__article__text}>Dricus Du Plessis, luego de participar en un total de 24 peleas, posee un récord de 22-2, siendo 9 de sus 22 victorias por nocaut, 11 por sumisión y 2 por decisión. Mientras que de sus 2 derrotas, 1 fue por la vía del nocaut y 1 por la vía de la sumisión.</p>
                    <p className={styles.peleador__article__text}>La última derrota la sufrió contra el croata <b>Roberto Soldic</b>, quien lo noqueó en el tercer asalto. Aunque esta no había sido la primera vez que se enfrentaba a este luchador, dado que hacía tan solo unos meses ya se habían visto las caras en una pelea por el campeonato y Du Plessis había sido capaz de noquear en el segundo asalto de esa pelea, arrebatandole de esta forma el campeonato de KSW al croata, sin embargo en la revancha que tuvieron 6 meses depués es cuando llegó la derrota de Du Plessis.</p>
                    <h2 className={styles.peleador__article__title}>Du Plessis Historia</h2>
                    <p className={styles.peleador__article__text}>Dricus Du Plessis nació el 14 de enero de 1994 en la ciudad de Pretoria, ubicada en Sudáfrica. Tan sólo a la edad de 5 años comenzó a entrenar judo, a los 12 comenzaría a entrenar lucha libre, y posteriormente kickboxing con 14 años. Posteriormente, en sus años escolares empezaría a jugar Rugby a la par que entreneba artes marciales, volviendose partidario del equipo nacional de rugby de Sudáfrica, los Spingboks.</p>
                    <p className={styles.peleador__article__text}>Du plessis con 17 años se convertiría en el primer medallista de Sudáfrica en el Campeonato Mundial WAKO al ganar el oro en kickboxing estilo K-1 en el año 2012. Pero al ver que no se podía ganar tanto dinero en el Kickboxing decidiría migrar a las artes marciales mixtas en busca de mejores oportunidades económicas.</p>
                    <p className={styles.peleador__article__text}>Comenzaría a estudiar en la Universidad de Pretoria la carrera de economía agrícola, aunque abandonaría la carrera en su último año para dedicarse de lleno a las MMA. Carrera en la que tendría 3 combates amateur antes de su oportunidad como profesional, ganando cada uno de ellos. </p>
                    <p className={styles.peleador__article__text}>Haría su debut profesional contra el también sudádricano <b>Tshikangu Makuebo</b> a quien derrotaría por nocaut en el primer asalto por <b>EFC Africa 21</b>. Ganaría todos sus primeros 4 combates, hasta que llegaría su primera derrota contra <b>Garreth McLellan</b>, quien en una pelea por el título, luego de 3 asaltos, terminaría por someterlo con una guillotine choke.</p>
                    <p className={styles.peleador__article__text}>Hasta aquel momento, Du Plessis venía peleando en peso mediano, y luego de una pelea más en la que derrotaría a <b>Darren Daniel</b> por sumisión, decidió bajar de división a peso Wélter, donde primero terminaría ganando el título interino de peso welter, contra <b>Martin van Staden</b> a quien sometería con una guillotine choke. Y luego, pelearía contra <b>Brendan Lesar</b> defendiendo y unificando el título luego de someter con la misma técnica a su rival. Esta sería su última pelea por fuera de la UFC, dado que su siguiente combate sería el ya mencionado contra Markus Pérez.</p>
                    <p className={styles.peleador__article__text}>Desde aquel debut hecho el 11 de octubre de 2020, es que Du Plessis compite de forma activa en la división de Peso Medio en UFC.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}