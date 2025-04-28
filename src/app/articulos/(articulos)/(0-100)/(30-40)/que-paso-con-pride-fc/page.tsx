import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/30-40/pridefc.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: '¿Qué Pasó con Pride FC?',
    description: 'La historia de cómo el control de la mafia japonea Yakuza acabó con el reinado de la mayor compañía de MMA de la historia, y su posterior compra por parte de la UFC.',
    openGraph: {
        title: '¿Qué Pasó con Pride FC?',
        description: 'La historia de cómo el control de la mafia japonea Yakuza acabó con el reinado de la mayor compañía de MMA de la historia, y su posterior compra por parte de la UFC.',
        url: 'https://fullmma.org/articulos/que-paso-con-pride-fc'
    }
}

export default function PeleadorMasSucioUFC () {
    return(
        <main>
            <ArticleHero title='¿Qué Pasó con Pride FC?' subtitle='Cómo el control de la mafia japonea Yakuza acabó con el reinado de la mayor compañía de MMA de la historia.' image={hero} date='2024-06-19' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Pride FC</h2>
                    <p>Cuando pensamos en promotoras de MMA, la primera que nos suele venir a la mente es <Link href='/articulos/ufc'>UFC</Link> por la popularidad que ha alcanzado en la última década, pero lo cierto es que a principios de los 2000, esta compañía estaba sufriendo mucho y quien ocupaba el puesto como la mayor promotora de artes marciales mixtas del mundo era <b>PRIDE FC</b>, que con sus eventos organizados en Japón era un espectáculo y una sensación en el mundo oriental, contando con millones de espectadores, especialmente en Japón. Contando con grandísimas estrellas del deporte como <b>Dan Henderson</b>, <Link href='/leyendas/fedor-emelianenko'>Fedor Emelianenko</Link>, <Link href='/leyendas/anderson-silva'>Anderson Silva</Link> o <Link href='/leyendas/royce-gracie'>Royce Gracie</Link>.</p>
                    <YouTubeEmbed videoid='3-TZGaJi_5E' />
                    <p>La compañía había comenzado a crecer mucho de la mano de <b>Naoto Morishita</b>, quien era el organizador de PRIDE y una persona muy importante en el manejo de la empresa. Sin embargo este hombre resultaba un problema para los Yakuza, la mafia japonesa, primero por la cantidad de deudas que había acumulado su empresa con esta organización, sino además porque Morishita resultaba ser un tipo bastante correto.</p>
                    <p>El 9 de enero de 2003 en el lujoso hotel Hilton de Tokyo, Naoto Morishita fue encontrado sin vida, en lo que los policías concluyeron que fue un suicidio. Aunque es sabido que cuando organizaciones como los Yakuza organizan este tipo de crímenes, la policía intenta no investigar demasiado.</p>
                    <h2>Pride FC y los Yakuza</h2>
                    <p>Básicamente PRIDE FC y Los Yakuza mantenían una relación tan cercana, porque desde sus inicios el fundador de la compañía contrajó demasiadas deudas con este grupo, además porque los mafiosos japones también disfrutaban de las peleas y de los espectáculos que se montaban, por lo que no era raro ver a varios de sus miembros presentes en los estadios donde se organizaban estos combates, como si de espectadores VIP se tratara, y con el descanso de Naoto Morishita adquirieron más poder dentro de la organización de MMA. </p>
                    <p>Pese a este cambio de manos en la organización, la cálidad de las peleas y de los eventos no decayó, siguiendo en su senda de creciente popularidad. Lo que si comenzó a cambiar fue el uso que se le daba a la promotora, dado que esta les servía como forma de lavar dinero, debido a su ya mencionada popularidad que se traducía en una alta rentabilidad.</p>
                    <p>Las apuestas en Japón son ilegales, lo que se traduce en que este negocio quedaba exclusivamente en las manos de los Yakuza, que con una organización como PRIDE, vieron la posibilidad de amañar peleas, usando principalmente las presiones a los árbitros de los combates para que fueran favoreciendo a los peleadores que ellos querían que ganaran.</p>
                    <h2>¿Por qué desapareció Pride?</h2>
                    <p>La estrecha relación que tenían la organización criminal de Japón y la promotora de artes marciales se volvía cada vez más evidente, llevando a que se comiencen a realizar investigaciones. Esto generaría que televisoras dieran de baja los contratos que tenían con la promotora, representando una alta pérdida de ingresos para PRIDE FC. Finalmente esto terminó en que su fundador decidiera vender los derechos de la compañía en 2007, siendo comprados por la empresa dueña de <Link href='/articulos/ufc'>UFC</Link>, manejada por los hermanos Fertitta.</p>
                    <p>Lorenzo Fertitta intentó rescatar a la compañía organizando un par de eventos más en Japón, con la idea de que ocasionalmente peeladores de esta promotora se enfrentaran a luchadores de UFC, pero no hubo caso, el escándalo con los Yakuza era tan grande que la imagen de la compañía había quedado bastante manchada a los ojos de los japones. Debido a esto, la empresa terminó siendo absorbida en su totalidad por UFC, y no pudimos ver otro evento organizado por la que quizás sea, la mayor promotora de MMA de la historia. En su honor, comparto la mejor pelea que pude ver de esta compañía, que la que se dió entre <b>Don Frye</b> y <b>Yoshihiro Takayama</b>.</p>
                    <YouTubeEmbed videoid='W3vbBQWs7yc' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}