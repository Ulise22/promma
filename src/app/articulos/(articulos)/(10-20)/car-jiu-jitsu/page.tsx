import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/car_jiujitsu-hero.jpeg'

export const metadata: Metadata = {
    title: 'Car Jiu Jitsu',
    description: '',
    openGraph: {
        title: 'Car Jiu Jitsu',
        description: '',
        url: 'https://fullmma.org/articulos/car-jiu-jitsu'
    }
}

export default function CarJiuJitsu () {
    return(
        <main>
            <ArticleHero title='Car Jitsu: ¿Es real el Jiu Jitsu en coche?' subtitle='La curiosa forma de practicar Jiu Jitsu en Rusia que va ganando cada vez más popularidad' image={hero} date='2024-09-17' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Sí, es real el Jiu Jitsu en coche, y como su nombre lo dice, no es otra cosa que el Jiu Jitsu, pero practicado dentro de un automóvil. Esta nueva forma de practicar este arte marcial, se originó en Rusia en el año 2020, y ganó una rápida notoriedad por lo novedoso de la idea. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/fkduFleZfZ8?si=a2o_KfyJVB67K4vm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Las reglas en un enfrentamiento de Car Jiu Jitsu son bastante claras. Siendo 2 los luchadores que participan de cada encuentro, comenzando ambos en los asientos delanteros del auto, con los cinturones de seguridad colocados. El objetivo es el mismo que en un combate normal de Jiu Jitsu, cada luchador deberá intentar someter a su rival, o acomodarse en una posición ventajosa para sumar puntos que al final del combate determinarán al ganador de dicho enfrentamiento. </p>
                    <p>Cada uno de estos duelos consta de 2 rondas de 3 minutos cada una. Y en caso de haber empate luego de estos 2 asaltos, los competidores participarán de un asalto extra en el asiento trasero del vehículo, en una ronda decisiva que dura 4 minutos, a diferencia de los 3 que duraron los asaltos anteriores.</p>
                    <p>El mayor desafío y el atractivo de esta modalidad, está en saber desenvolverse en un entorno tan cerrado, aprovechando el ambiente en el que se está. Dado que está permitido usar los objetos que hay dentro del automóvil, como los cinturones de seguridad, para intentar someter y dañar al rival. </p>
                    <p>Su creador, <b>Vikentiy Mikheev</b>, quien quien tiene experiencia en boxeo, Judo, Sambo, MMA, y es cinturón negro de BJJ, cuenta que <b>&quot;En 2020 se me ocurrió la idea de hacer competiciones de Grappling en vehículos. Desde octubre de ese año, mis amigos y yo organizamos pequeños torneos de Car Jiu Jitsu para estudiar los aspectos del bjj y su aplicación en espacios tan reducidos.&quot;</b></p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/8cYtsIjPe5w?si=s_cxlxZexAf6w5Bj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Vik Mikheev ha ganado más de 10k seguidores en su canal de Youtube donde sube los enfrentamientos organizados por él, sumando más de 7 millones de visitas entre todos sus videos. Y aunque hace alrededor de 2 años que no sube ningún video, su trabajo ha inspirado a gente de otras partes del mundo a organizar sus propias competiciones, como ya se hizo en los Estados Unidos, donde hay una competiciones oficial de CarJitsu. </p>
                    <h2>Dónde puedo ver Car Jitsu</h2>
                    <p>Las primeras competiciones organizadas en Rusia por <b>Vikentiy Mikheev</b> están disponibles en su <a target='_Blank' href='https://www.youtube.com/@VikMikheev/videos'>canal de Youtube</a>, donde hay subidas cerca de 70 enfrentamientos de CarJitsu. </p>
                    <p>Aunque hace alrededor de 2 años que su creador no actualiza su canal de Youtube con nuevos combates, la popularidad de este nuevo deporte ha alcanzado el punto en el que es replicado en otras partes del mundo. Por eso, el canal de Youtube <a target='_Blank' href='https://www.youtube.com/@carjitsuchampionship6540'>CarJitsu Championship</a>, se encarga de organizar campeonatos de CarJitsu y de subirlos a su canal para que todo el mundo pueda verlos, sumando casi 20 mil subscritores, y más de 1 millón de reproducciones entre todos sus videos. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/cbhOLwhNIak?si=8CMZ6bioJR6B3z7p" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}