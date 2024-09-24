import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import aspinall from '@/assets/peleadores__images/0-10/tom-aspinall/tom_aspinall.png'
import careo from '@/assets/peleadores__images/0-10/tom-aspinall/aspinall_careo.jpg'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tom Aspinall',
    description: 'Tom Aspinall es un peleador inglés de MMA que compite en la división de Peso Pesado de la UFC, en donde está ranqueado #1 actualmente, además de ser el campeón interino de dicha división. Además, se encuentra ranqueado #12 en el libra por libra de la UFC.',
    openGraph: {
        title: 'Tom Aspinall',
        description: 'Tom Aspinall es un peleador inglés de MMA que compite en la división de Peso Pesado de la UFC, en donde está ranqueado #1 actualmente, además de ser el campeón interino de dicha división. Además, se encuentra ranqueado #12 en el libra por libra de la UFC.',
        url: 'https://fullmma.org/peleadores/tom-aspinall'
    }
}

export default function Aspinall () {
    return(
        <main> 
            <PeleadoresHero peleadoresImage={aspinall} w={15} l={3} d={0} nombre='Tom Aspinall' categoria='Peso Pesado' apodo={null} />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Tom Aspinall UFC</h2>
                    <p className={styles.peleador__article__text}>Tom Aspinall es un peleador inglés de MMA que compite en la división de Peso Pesado de la <Link href='/articulos/ufc'>UFC</Link>, en donde está ranqueado #1 actualmente, además de ser el campeón interino de dicha división. </p>
                    <p className={styles.peleador__article__text}>Tom Aspinall es miembro de la compañía desde que debutara en la misma el 26 de julio de 2020 en el <b>UFC on ESPN: Whittaker vs. Till</b>, contra el estadounidense <b>Jake Collier</b> a quien vencería en el primer minuto del primer asalto de la pelea, ganando ya en su primer combate el premio a la actuación de la noche. Desde entonces ha tenido diversas peleas, siendo la mayoría victorias, con una única derrota contra el estadounidense <b>Curtis Blaydes</b>, que perdió debido a una lesión en la rodilla que obtuvo ni bien comenzó el combate.</p>
                    <iframe
                    className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/pV1ll_x0wcY?si=8EUdlf9bCkGoIPZU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Tom Aspinall Récord</h2>
                    <p className={styles.peleador__article__text}>Tom Aspinall tiene un récord de 15-3. Siendo 12 de sus 15 victorias por la vía del nocaut y 3 por la vía de la sumisión, convirtiendolo en un peleador que hasta el momento ha finalizado en todas sus victorias. Mientras que de sus 3 derrotas, una fue por la vía del nocaut, 1 por sumisión, y una de sus peleas las perdió por descalificación, dado que dió un codazo ilegal hacia abajo en su combate contra el polaco <b>Łukasz Parobiec</b>.</p>
                    <h2 className={styles.peleador__article__title}>Tom Aspinall Historia</h2>
                    <p className={styles.peleador__article__text}>Thomas Aspinall nació el 11 de abril de 1993, en el condado de Gran Mánchester en Inglaterra. Es una persona nacida en el seno de una familia polaco-inglesa, por lo que es capaz de hablar ambos idiomas. A la edad de 7, siguiendo los pasos de su padre comenzó a entrenar artes marciales, comenzando con la lucha libre y el boxeo, terminaría trancisionando al jiu-jitsu brasileño en donde actualmente es cinturón negro.</p>
                    <p className={styles.peleador__article__text}>Tras una carrera amateur exitosa en el mundo amateur de las MMA, finalmente hizo su debut profesional contra el canadiense <b>Michał Piszczek</b> a quien acabó ganand opor nocaut ni bien empezar el combate en el primer asalto. En esta línea acumularía un récord de 5-2 hasta recibir su primer oferta para pelear en <Link href='/articulos/ufc'>UFC</Link>, oferta que rechazó ya que había afirmado no sentirse preparado, en su lugar se fue a pelear a <b>Cage Warriors</b>, donde entre otros, peleó <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>. En esta compañía tednría 2 combates contra los franceses <b>Sofiane Boukichou</b> y <b> Mickael Ben Hamouda</b>, en ambos casos terminaría por derrotarlos por nocaut en el primer asalto de forma muy rápida, lo que llevaría a que finalmente acepte pelear en UFC.</p>
                    <Image className={styles.peleador__article__image} src={careo} alt='El peleador de UFC Tom Aspinall en el careo previo a su pelea' />
                    <p className={styles.peleador__article__text}>Haría su debut el 26 de julio de 2020 en el <b>UFC on ESPN: Whittaker vs. Till</b>, contra el estadounidense <b>Jake Collier</b> a quien vencería en el primer minuto del primer asalto de la pelea. En su estancia en la compañía ganó 7 veces, ganando además 5 veces el premio a la actuación de la noche en esas peleas. En la actualidad es el campeón interino de la división de peso pesado, a la espera de ver que pasará finalmente con <Link href='/peleadores/jon-jones'>Jon Jones</Link> quien es el campeón de la división en estos momentos.</p>
                    <p className={styles.peleador__article__text}>Respecto a su vida personal, es hijo de Andy Aspinall quien también fue un artista marcial, además de ser instructor del equipo Kaobon en donde Tom practicaba jiu-jitsu. Está casado y tiene 3 hijos.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}