import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/0-10/khabibVferguson.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Khabib vs Ferguson',
    description: 'La historia del porqué no se dió la pelea que todos queríamos ver entre Khabib Nurmagomedov y Tony Ferguson.',
    openGraph: {
        title: 'Khabib vs Ferguson',
        description: 'La historia del porqué no se dió la pelea que todos queríamos ver entre Khabib Nurmagomedov y Tony Ferguson.',
        url: 'https://fullmma.org/articulos/khabib-vs-ferguson'
    }
}

export default function KhabibVsFerguson () {
    return(
        <main>
            <ArticleHero title='Khabib Vs Ferguson: ¿Por Qué se Canceló Tantas Veces? La Pelea Maldita que Nunca se Dió' subtitle='La historia detrás del combate que muchos fanaticos quería ver, pero que sin embargo nunca se dió, a pesar de que se llegó a programar hasta 5 veces el encuentro entre ambos.' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La pelea de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link> contra <Link href='/peleadores/tony-ferguson'>Ferguson</Link> es una que los fans quería ver desde hacía mucho tiempo, ambos con rachas ganadoras bastante extensas y con una carrera prolifica, sin embargo, por razones de fuerza mayor nunca pudimos ver a estos históricos peleadores enfrentarse en un ocatagono. El enfrentamiento fue reprogramado hasta 5 veces, sin embargo, pese a los varios intentos por parte de la <Link href='/articulos/ufc'>UFC</Link> de volverlo realidad, nunca lo pudimos ver realizarse.</p>
                    <h2>11 de diciembre de 2015 en la Final de The Ultimate Fighter</h2>
                    <p>La primera vez que se planeó una pelea entre 2 luchadores, fue para el 11 de diciembre de 2015 en la final de The Ultimate Fighter. Khabib venía de una racha de 6 victorias consecutivas en la UFC desde su debut, y ya tenía acumulado un récord de 22-0, mientras que por su lado Ferguson también llevaba una racha de 6 victorias consecutivas en la compañía. Sin embargo, debido a una lesión en la rodilla de Khabib, se cancela el combate y en su lugar Ferguson pelea contra el brasileño <b>Edson Barboza</b>, a quien somete en el segundo asalto.</p>
                    <p>Por aquella época, las lesionas en la rodilla del ruso era tan fuertes, que incluso llegó a plantearse el retiro de las MMA. Pese a que esto finalmente no ocurrió, mantuvo unos 2 años de inactividad hasta que volvería a pelear.</p>
                    <h2>16 de Abril en el UFC 205</h2>
                    <p>Luego de aquel combate que tuvo Tony contra Barboza, se volvió a pactar una pelea entre estos 2, esta vez como evento principal del UFC 205. Sin embargo, en esta ocasión fue Tony Ferguson el que no estuvo disponible para pelear, debido a que 11 días antes del evento anunció que tenía unas anomalías en los pulmones, y que había recibido la recomendación de su doctor de no pelear en, &quot;El doctor me dijo que no pelee pues cualquier trauma podría ser terminal&quot;, había declarado.</p>
                    <p>En su lugar, en aquella ocasión Khabib se terminó enfrentando al estadounidense <b>Michael Johnson</b>, a quien derrotaría con una sumisión en el tercer asalto.</p>
                    <h2>4 de marzo de 2017 en UFC 209 por el Cinturón Interino</h2>
                    <YouTubeEmbed videoid='0OIoctgYVQY' />
                    <p>Por tercera vez se programó una pelea entre estos 2 luchadores, en esta ocasión, se suponía que debían enfrentarse a pelear por el título interino de la división de peso ligero de la UFC, dado que el entonces campeón, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, se había tomado un descanso de las MMA para celebrar el nacimiento de su hijo, y tiempo después se iría a pelear en boxeo contra <b>Floyd Mayweather</b>. </p>
                    <p>Pero nuevamente se tuvo que cancelar la pelea, debido a que 24 horas antes de la pelea, Khabib fue enviado al hospital por unos serios problemas que tuvo para dar el peso. Finalmente sería dado de alta, pero el doctor le recomendaría no pelear.</p>
                    <h2>7 de abril de 2018 en UFC 223 por el Campeonato de Peso Ligero de UFC</h2>
                    <p>Como Conor McGregor había dejado el título vacante, se organizaría un combate por el cinturón definitivo entre Khabib Nurmagomedov, y entre el campeón interino Tony Ferguson en el UFC 223. Sin embargo, de forma un poco surrealista, 6 días antes del combate, Ferguson asiste a una estación de televisión para promocionar la pelea, y ahí mismo se cae por culpa de un cable, y la caída fue tal que lo lesionó de la rodilla y le dejó una rotura de ligamentos.</p>
                    <p>El evento se organizó de igual modo y luego de mucho buscar, finalmente Khabib se terminaría enfrentando a <b>Al Iaquinta</b> por el título, que ganaría luego de los 5 asaltos por decisión unánime.</p>
                    <h2>18 de abril de 2020 en UFC 249</h2>
                    <YouTubeEmbed videoid='hv4cPmBbh24' />
                    <p>El último intento de organizar este combate llegó en 2020. Khabib ya había defendido su cinturón en 2 ocasiones, contra <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> en UFC 229, evento donde también estuvo Ferguson enfrentadose a <b>Anthony Pettis</b> a quien venció por TKO en el segundo asalto, y contra <b>Dustin Poirier</b>. Mientras que Tony había tenido el mencionado combate contra Pettis, y una pelea contra Donald Cerrone a quien ganó TKO en el segundo asalto.</p>
                    <p>En diciembre de 2019 se anuncia nuevamente una pelea entre Tony Ferguson y Khabib Nurmagomedov por el título de Peso Ligero de UFC para abril de 2020. Para esta altura, ya había mucha burla y desesperación por lo imposible de organizar esta pelea, a tal punto se había llegado que la misma página oficial de la UFC había publicado: &quot;KHABIB VS. FERGUSON: LA QUINTA ES LA VENCIDA&quot;. En dicha noticia también dejaban un mensaje que alimentaba las ganas de ver como se resolvería este combate: &quot;2020 definirá al mejor de los pesos ligeros y marcará uno de los momentos más memorables en la historia de la categoría pues una de las rivalidades más largas verá su desenlace&quot;.</p>
                    <p>Sin embargo, como si el mundo se negara a que este combate se hiciera realidad, en marzo de 2020 nos asota la pandemia del COVID-19, que lleva a muchos países a entrar en cuarentena y a la mayoría de eventos deportivos a suspenderse. Este no había sido el caso con la UFC, puesto que pese a las restricciones que había en muchos países, deciden organizar el evento de igual manera en Abu Dabi, en los Emiratos Árabes Unidos. Khabib viaja a este país, pero le niegan la entrada al país por lo que debe volver a su país natal en Rusia, donde al poco tiempo implementan una política de cierre de fronteras.</p>
                    <p>El evento se supende un mes y pasa a organizarse en mayo de 2020, y Khabib es reemplazado por <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> para pelear con Ferguson, donde ponen en juego el cinturón interino de Peso Ligero de la UFC. Aquella pelea la termina ganando Gaethje por nocaut en el quinto asalto, cortando con la racha de 12 victorias consecutivas de Tony, e iniciando su debacle, dado que desde entonces acumula una racha negativa de 7 derrotas consecutivas en la UFC, compartiendo el podio del peleador con la mayor cantidad de derrotas consecutivas en la comapañía.</p>
                    <p>Por su parte, Khabib después se enfrentaría a Gaethje para unificar el título, derrotandolo por sumisión en el segundo asalto y retirandose en esa misma pelea. Dado que durante el la pandemia, había perdido a su padre y sin él no quería seguir peleando.</p>
                    <YouTubeEmbed videoid='dGWDT3iyrdw' />
                    <p>Es por esto que parece que finalmente nunca veremos pelear al &quot;Cucuy&quot; contra Khabib, tanto por la retirada de las MMA del ruso, como por la racha negativa en la que entró Tony Ferguson, que hace muy difícil verlos enfrentarse en un octagono al mayor nivel de competición.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}