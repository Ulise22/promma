import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/10-20/khalil.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Khalil Rountree',
    description: 'Khalil Rountree es un peleador estadounidense de UFC que está por enfrentar el desafío más grande de su carrera el próximo 5 de octubre, cuando en el UFC 307 se vea cara a cara con el campeón de peso semipesado Alex Pereira. Su historia de vida es un gran ejemplo de vida y de superación, que merece ser contada y por eso hoy la vamos a repasar.',
    openGraph: {
        title: 'Khalil Rountree',
        description: 'Khalil Rountree es un peleador estadounidense de UFC que está por enfrentar el desafío más grande de su carrera el próximo 5 de octubre, cuando en el UFC 307 se vea cara a cara con el campeón de peso semipesado Alex Pereira. Su historia de vida es un gran ejemplo de vida y de superación, que merece ser contada y por eso hoy la vamos a repasar.',
        url: 'https://fullmma.org/noticias/khalil-rountree'
    }
}

export default function KhalilRountree () {
    return(
        <main>
            <ArticleHero title='¿Quién es Khalil Rountree? El Próximo Rival de Alex Pereira en el UFC 307' subtitle='La historia de Khalil Rountree Jr. y de cómo paso de de pesar 300lbs a ser el peleador de UFC que va a pelear por el título de los semipesados.' image={hero} date='2024-09-16' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Khalil Rountree es un peleador estadounidense de <Link href='/articulos/ufc'>UFC</Link> que está por enfrentar el desafío más grande de su carrera el próximo 5 de octubre, cuando en el <b>UFC 307</b> se vea cara a cara con el campeón de peso semipesado <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. Su historia de vida es un gran ejemplo de vida y de superación, que merece ser contada y por eso hoy la vamos a repasar.</p>
                    <p>Khalil Ibn Rountree Jr. nació en Los Ángeles, California, en los Estados Unidos el día 26 de febrero de 1990. De por sí tuvo una infancia muy complicada, siendo críado sólo por su madre, ya que su papá perdió la vida en un intento de robo que terminó a los tiros cuando Khalil tenía tan sólo 2 años. </p>
                    <p>Khalil creció siendo un chico con sobrepeso, que llegó a su peor momento a los 19 años, llegando a pesar 305lbs. Esto se debía al estilo de vida destructivo y poco sano que nuestro protagonista estaba llevando, debido a que en aquel momento también estaba fumando un atado y medio de cigarrillos al día, alimentándose a base de comida chatarra, sin beber ni un litro de agua, sólo bebiendo gaseosas. El punto de inflexión para el estadounidense llegó un día, cuando estando acostado en su cama sin hacer nada, y comenzó a sentir como su corazón latía a toda velocidad. Esta situación lo hizo preocuparse, debido a que no es normal lo que le estaba exigiendo a su cuerpo con sólo 19 años. </p>
                    <p>Por aquella época fue cuando había descubierto las MMA, al ver el reality de televisión de la UFC, <b>The Ultima Fighter</b> con su hermano. Fue entonces que decidió comenzar a entrenar artes marciales con el objetivo de hacer actividad físicia y perder peso, siendo el Muay Thai lo primero que practicó. Poco sabía Khalil que esto se terminaría convirtiendo en una carrera para él. </p>
                    <YouTubeEmbed videoid='E_7-FSDZkOE' />
                    <p>Luego de un mes de entrenar, Khalil ya comenzó a ver los primeros resultados de su esfuerzo. Un día presenció una competición amateur de MMA, y como le estaba gustando la experiencia, preguntó que necesitaba para comenzar a competir, y uno de los entrenadores le comentó que si era capaz de bajar 100lbs (45 kilos), le conseguirían una pelea. Y así lo hizo, consiguiendo bajar esa cantidad de peso en 11 meses. Rountree comenta que su carrera en las MMA sucedió de forma bastante accidental en ese momento, dado que simplemente siguió este camino porque por primera vez en su vida estaba siendo motivado por las personas, debido a que su entorno veía lo bueno que es peleando, había bajado mucho de peso, comenzaba a parecerle atractivo a las mujeres, etc. Basicamente, las artes marciales cambiaron su vida. </p>
                    <p>Necesitó de tan sólo 4 peleas profesionales en el lapso de un año y medio para ser invitado a participar del reality <b>The Ultimate Fighter</b> en el año 2016, donde llegaría hasta la final, lamentablemente perdiendo ante <b>Andrew Sanchez</b> por decisión, pero ganando de igual forma un contrato con la UFC, donde competiría desde entonces. </p>
                    <p>Su historia se haría especialmente conocida luego de una conferencia de prensa posterior a su pelea con <b>Karl Roberson</b>, en la que venció por nocaut y ganó el bono a la actuación de la noche, donde estando hasta emocionado, contaría mucho de lo que tuvo que pasar y de lo que aún debe enfrentar. Afirmando que aún tiene que luchar con ese chico de 300lbs que fue para ponerse a entrenar todos los días. Khalil Rountree afirma que desea que su historia, y que él pueda servir de inspiración y motivación para ayudar a las demás personas a salir de las situaciones complicadas en las que puedan estar y prosperar. Ante una pregunta hecha por un periodista dijo: <b>&quot;Moriría feliz en mi tumba si nunca toco un cinturón de campeón, pero sabiendo que toqué la vida de 2 mil personas, de 1 millón de personas [...] Preferiría haber ayudado a la gente, y ayudarlas a ser mejor que ser campeón&quot;</b>.</p>
                    <YouTubeEmbed videoid='N4-xuQRt9pk' />
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/?si=R0iSmCxQIJ5YXTvd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Actualmente Khalil posee un récord profesional de 13-5 (1), y lleva una racha de 5 victorias consecutivas, siendo su última victoria ante el estadounidense <b>Anthony Smith</b>, a quien logró darle un impresionante KO, que le hizo merecer el bono a la actuación de la noche. Ahora, luego de que se cancelara su pelea ante <b>Jamahall Jill</b> por una suspención, a Khalil se le dió la chance de disputarle el cinturón de campeón al brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, en octubre de este año. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}