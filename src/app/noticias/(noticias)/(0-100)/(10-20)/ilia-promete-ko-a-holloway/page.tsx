import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/10-20/ilia_promissko_holloway.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Ilia Topuria Promete Noquear a Holloway',
    description: 'Ilia Topuria habló de su pelea con Max Holloway, en la cual promote noquear en el primer asalto, además habló de la llegada de su hermano a la UFC, futuras peleas, Islam Makhachev, Volkanovski, Sean O&apos;Malley, Diego Lopes, etc.',
    openGraph: {
        title: 'Ilia Topuria Promete Noquear a Holloway',
        description: 'Ilia Topuria habló de su pelea con Max Holloway, en la cual promote noquear en el primer asalto, además habló de la llegada de su hermano a la UFC, futuras peleas, Islam Makhachev, Volkanovski, Sean O&apos;Malley, Diego Lopes, etc.',
        url: 'https://fullmma.org/noticias/ilia-promote-ko-a-holloway'
    }
}

export default function IliaPrometeKOHolloway () {
    return(
        <main>
            <ArticleHero title='Ilia Promete KO en el Primer Asalto Contra Holloway' subtitle='Ilia Topuria habló de su pelea con Max Holloway, en la cual promote noquear en el primer asalto, además habló de la llegada de su hermano a la UFC, confirmó que el BMF no está en juego, futuras peleas, Islam Makhachev, Volkanovski, Sean O&apos;Malley, Diego Lopes, etc.' image={hero} date='2024-08-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente el actual campeón de peso pluma de la <Link href='/articulos/ufc'>UFC</Link>, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> dió su primer entrevista en inglés al canal de Youtube <b>MMA Junkie</b> desde que se anunció su pelea ante el estadounidense <Link href='/peleadores/max-holloway'>Max Holloway</Link> en Abu Dhabi, con fecha para el 26 de octubre en el <b>UFC 308</b>. En esta primer entrevista habló de todo y dejó algunos titulares interesantes.</p>
                    <h2>Ilia Topuria Promete ser el Primero en Noquear a Max Holloway</h2>
                    <p>Primero habló de que fue difícil conseguir que se firme la pelea, según él porque costó conseguir que Max firme el contrato. Además confirmó lo que se venía rumoreando, que en un primer momento lo que se tenía pensado era hacerlos pelear en La Esfera en Las Vegas, para el mes de septiembre, pero que finalmente corrieron su pelea para octubre en Abu Dhabi. También confirmó que pese a lo que quería, el título <b>BMF</b> no estará en juego.</p>
                    <p>Al ser consultado por sus previas declaraciones en las que afirmó que iba a ser el primero en noquear a Max Holloway, dijo: <b>&quot;No hay dudas al respecto. Lo que me emociona de esta pelea es que nadie fue capaz de noquearlo. No hay forma de que no lo noquee, voy a ser el primero en noquearlo, porque cada vez que lo veo pelear siento que soy mucho mejor que él&quot;</b>.</p>
                    <p>Ilia está tan confiado de que puede ganarle, que afirma que incluso en una partida de ajedrez le gana a Holloway. Además agregó: <b>&quot;Respeto a Max Holloway, ha sido un gran peleador, nos ha dado grandes peleas, parece ser una buena persona. Lo respeto pero siento que soy mejor que él en todos lados, así de simple. Va a ser una completa obra de arte, lo verás, lo voy a noquear en el primer asalto y va a ser incluso mucho más fácil que con <Link href='/peleadores/alexander-volkanovski'>Volkanovski</Link>&quot;</b>.</p>
                    <YouTubeEmbed videoid='2WkaSIV7F1w' />
                    <h2>Ilia Topuria y la Alianza con WOW</h2>
                    <p>Fue consultado por su alianza con la promora de MMA española <b>WOW</b> y dijo que: <b>&quot;Es la promotora más grande de España, así que por supuerto que no es un secreto que quiero estar involucrado en la expansión de las MMA aquí, y no podría estar en un mejor lugar que en WOW FC. Tengo que estar ahí y ayudar a las nuevas generaciones a alcanzar sus objetivos&quot;.</b></p>
                    <h2>La Llegada de Aleksandre Topuria a la UFC y su Primera Pelea</h2>
                    <p>La llegada de Aleksandre Topuria, el hermano mayor de Ilia, a la UFC ya es un hecho, lo que continua siendo una incógnita es cuando lo veremos pelear. Al respecto Ilia habló de que intentaron colocarlo en la cartelera de París, que tendrá lugar el 28 de septiembre, en un evento encabezado por <b>Reanto Moicano</b> y <b>Benoit Saint Denis</b>, pero desafortunadamente la cartelera ya estaba completa.</p>
                    <p>También intentaron colocarlo en la misma cartelera que Ilia en el UFC 308, pero esto tampoco fue posible, debido a que desde la UFC les hablaron de que tienen malas experiencias poniendo a 2 hermanos a pelear en la misma cartelera. Por lo que el debut de Aleksandre será si o si después de la pelea de Ilia.</p>
                    <p>Ilia habló maravillas de su hermano, afirmando que en él hay un futuro campeón de la UFC, y que posiblemente sea incluso mejor que él.</p>
                    <h2>Sobre una revancha contra Volkanovski</h2>
                    <p>Sobre Volkanovski afirmando que espera ser el peleador de respaldo de la pelea, dijo: <b>&quot;No lo sé, creo que espera ser noqueado 2 veces por año. Quizás alguien deba darle un buen consejo y decirle que necesita un descanso&quot;</b>.</p>
                    <p>También se refirió a la posibilidad de que su siguiente defensa sea una revancha contra el excampeón australiano: <b>&quot;Estoy peleando con cualquiera, cuando me llaman y me dicen que tengo que pelear con Holloway o Volkanovski no me interesa, no es asunto mío, mi trabajo es pelear, no importa quien está enfrente mío, soy el campeón del mundo. Tenía mis preferencias antes, porque quería pelear con gente que estuviera encima de mí en los rankings, para poder pelear por el título lo antes posible, pero ahora que soy campeón del mundo no me importa, dame un nombre y un lugar y voy a darte una clase maestra de Artes Marciales Mixtas&quot;</b>.</p>
                    <YouTubeEmbed videoid='EQL0U5F6JKA' />
                    <h2>La opinión de Ilia Topuria sobre el Diego Lopes vs Brian Ortega</h2>
                    <p>Al ser consultado sobre las peleas que se vienen en su división, Ilia afirmó que cree que en la pelea entre <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> y <b>Brian Ortega</b>, que tendrá lugar en el <b>UFC 306</b> el próximo 14 de septiembre, está el próximo contendiente al título. </p>
                    <p>Afirmó que le gusta la actitud de Diego Lopes, que aprecia que siempre se mostró respetuoso con él, por lo que si gana quizás sea el siguiente en la línea de contendientes al título. De igual forma afirmó que para cualquiera que le toqué enfrentarse le va a venir una noche díficil.</p>
                    <h2>Una Posible Pelea contra Sean O&apos;Malley</h2>
                    <p>Sobre una posible superpelea con el campeón de peso gallo <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link> declaró: <b>&quot;Primero que nada tiene una pelea muy complicada por delante (contra <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>), si gana, ¿por qué no? Me encantaría tener esa pelea&quot;</b>.</p>
                    <h2>Sobre Una Pelea por el Doble Campeonato contra Makhachev</h2>
                    <p>Afirma que podría haber intentado pelear en peso ligero contra <Link href='/peleadores/islam-makhachev'>Makhachev</Link> luego de su pelea con Volkanovski pero que decidió quedarse a defender su título. En caso de noquear a Holloway y recibir un llamado para pelear contra el Daguestaní no tendría problema en aceptar la pelea.</p>
                    <YouTubeEmbed videoid='CuN2kRgh8vs' />
                    <p>Luego declaró: <b>&quot;Respeto a todos, respeto a O&apos;Malley, a Holloway, a Makhachev, entiendo todo lo que se necesita para entrar en ese octágono, todos los sacrificios que hay que hacer. Por lo que los respeto, pero hay niveles, siento que represento la nueva generación de las MMA, traigo un estilo de pelea que nadie tiene y nadie tuvo. Estoy mejorando el juego, soy la nueva cara del juego, y es cuestión de tiempo para que todos se den cuenta&quot;</b>.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}