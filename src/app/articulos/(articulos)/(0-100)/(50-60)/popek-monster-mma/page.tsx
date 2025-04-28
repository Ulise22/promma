import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/popek_monster.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Popek Monster',
    description: 'La historia del rapero polaco Popek Monster, el caótico estilo de vida que lleva y su carrera en las artes marciales mixtas.',
    openGraph: {
        title: 'Popek Monster',
        description: 'La historia del rapero polaco Popek Monster, el caótico estilo de vida que lleva y su carrera en las artes marciales mixtas.',
        url: 'https://fullmma.org/articulos/popek-monster-mma'
    }
}

export default function KimboSlice () {
    return(
        <main>
            <ArticleHero title='Popek: El Rapero y Pelador Polaco de MMA Más Loco del Mundo' subtitle='La historia del rapero polaco Popek Monster, el caótico estilo de vida que lleva y su carrera en las artes marciales mixtas.' image={hero} date='2024-09-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Antes de conocer más en profundidad sobre la carrera en las artes marciales mixtas de Popek, es importante ponernos en contexto sobre quien es esta persona. Su verdadero nombre es Paweł Ryszard Mikołajuw y nació el día 2 de diciembre de 1978 en la ciudad polaca de Legnica. Con sólo 14 años abandonó su hogar y la escuela, aunque pese a esto, se las ingenió para saber hablar 3 idiomas, siendo estos el polaco, el inglés y el alemán.</p>
                    <YouTubeEmbed videoid='QCs5KtfWqwE' />
                    <p>Siendo joven tuvo una vida un poco desordenada, metiéndose en problemas con la policía de forma frecuente. Una de las anecdotas que rodean a este personaje, es la vez en la que tuvo que ser llevado a un hospital, para ser internado en coma durante 6 meses, luego de consumir 9 dosis de LSD por la boca, y una dosis en cada ojo, para un total de 11 dosis en una noche. Popek necesitó de 4 semanas para recuperarse y volver a moverse y hablar.</p>
                    <p>El joven rapero se juró a sí mismo no volver a cometer el mismo error, pero apenas unas horas después de salir del hospital volvió a hacer lo mismo, cayendo en coma nuevamente, esta vez durante 8 meses.</p>
                    <p>En el año 2000, Popek junto a otros 5 ladrones fundó un grupo musical llamado <b>Firma</b>, con quienes entre el año 2001 y 2011 sacaron 5 albumes. Segun sus propias palabras, la inspiración para hacer música no se la dan otros raperos, sino que lo hacen el alcohol, la cocaína y las ganas de joder a la policía.</p>
                    <p>Popek pasó varios años en prisión por delitos bastantes graves. Hizo locuras con su propio cuerpo, como hacerse cicatrizes en la cara que jamás van a salir, tatuarse los ojos para cambiar la forma en la que lucen, y para uno de sus videos musicales <b>Pain Be My Guest</b>, hizo que le atravesaran clavos en la espalda para colocarle un arnés que colgaba desde un andamio. </p>
                    <YouTubeEmbed videoid='WMwUrlDFV4M' />
                    <p>Más recientemente en sus redes sociales confesó haber tenido una aventura a espalda de su esposa y madre de sus 2 hijos, informando que su ahora ex amante los estaba acosando tanto a él como a su familia. Al menos en español no encontré novedades respecto a este tema.</p>
                    <h2>Carrera en MMA de Monster Popek</h2>
                    <p>Popek se fue a vivir a Londrés a principios de los 2000, uniéndose en verano de 2006 al equipo <b>Team Titan</b>, con quienes empezó a entrenar MMA, bajo la tutela del entrenador <b>Mickey Papas</b>.</p>
                    <p>Lo curioso de nuestro protagonista, es que tuvo que ir compaginando su carrera como rapero con su ahora nueva carrera como luchador de MMA, teniendo que dejar de beber alcohol en sus conciertos como normalmente hacía, y teniendo que irse a dormir más temprano para no comprometer su preparación para las peleas.</p>
                    <p>Finalmente haría su debut profesional el día 2 de febrero de 2008, enfrentando a <b>Glen Reid</b> en la promotora inglesa <b>Cage Rage</b>. Aquella noche el polaco conseguiría hacerse con la victoria por TKO en el segundo asalto. Ese mismo año pelearía 2 veces más, consiguiendo una victoria por KO ante <b>Kev Sims</b> en mayo, obteniendo su primer derrota por TKO en el primer asalto en diciembre, ante el luchador holandés <b>Sander Duyvis</b>.</p>
                    <YouTubeEmbed videoid='GogQmKwTi8o' />
                    <p>Esta última derrota sería su última pelea en Inglaterra y en las MMA en general en mucho tiempo, dado que durante sus peleas comenzaron a haber muchos altercados y problemas con sus fanáticos que venían desde Polonia a apoyarlo durante sus peleas. Por esta razón es que se le prohibió volver a competir en el país británico. </p>
                    <p>Ocho años después volvería a pelear en su país natal, Polonia. Haría su regreso el 3 de diciembre de 2016, ante su peligroso compatriota y curioso personaje de las MMA, <Link href='/articulos/mariusz-pudzianowski'>Mariusz Pudzianowski</Link>, contra quien caería derrotado por nocaut en el primer asalto. </p>
                    <p>Esta dura derrota no lo detendría de seguir peleando, aceptando 3 combates en el año 2017, de los cuales sólo sería capaz de ganar 1, en lo que sería un combate bastante bizarro para el mundo de las MMA, dado que se enfrentaría al fisicoculturista <b>Robert Burneika</b>, en la que era su primer pelea profesional, consiguiendo una victoria por sumisión de golpes a los 45 segundos del combate. Perdería por TKO en el segundo asalto sus peleas siguientes, ante los luchadores <b>Tomasz Oświeciński</b> y <b>Erko Jun</b>. </p>
                    <p>Luego de su última derrota, Popek se tomaría 3 años para volver al octágono, regresando de la mejor manera el 5 de septiembre de 2020, al lograr una victoria por sumisión en el primer asalto ante <b>Damian Zduńczyk</b> en un evento encabezado por él mismo. </p>
                    <p>Su hasta ahora última pelea la tendría ante el irlandés, ex luchador de la <Link href='/articulos/ufc'>UFC</Link> <b>Norman Parke</b>, el día 26 de marzo de 2022, contra quien lamentablemente sufriría una lesión en la mano al intentar lanzar un golpe, que le impediría continuar con el combate, sumando una derrota más a su récord. </p>
                    <YouTubeEmbed videoid='ODHBw_JBiAA' />
                    <p>De esta forma, con sus hoy en día 45 años, Popek no ha vuelto a sacar un nuevo album desde el 2013, cuando saco un album en solitario, ni ninguna canción indidual desde el 2016. Tampoco ha vuelto a pelear desde aquel combate en 2022, por lo que su curiosa carrera en las MMA, se mantiene con un récord negativo de 4-5.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}