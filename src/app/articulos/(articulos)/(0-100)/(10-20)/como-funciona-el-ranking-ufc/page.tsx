import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/10-20/ufc_rankings.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Como Funciona el Ranking de UFC',
    description: 'Te explico cómo funcionan los rankings en la UFC, cuándo se actualizan y cómo se hacen, explicando quienes hacen los rankings y que tienen en cuenta. ',
    openGraph: {
        title: 'Como Funciona el Ranking de UFC',
        description: 'Te explico cómo funcionan los rankings en la UFC, cuándo se actualizan y cómo se hacen, explicando quienes hacen los rankings y que tienen en cuenta. ',
        url: 'https://fullmma.org/articulos/como-funciona-el-ranking-ufc'
    }
}

export default function ComoFuncionanRankingsUFC () {
    return(
        <main>
            <ArticleHero title='Cómo Funciona el Ranking de la UFC: Qué significa ser el #1 de la UFC' subtitle='Te explico cómo funcionan los rankings en la UFC, cuándo se actualizan y cómo se hacen, explicando quienes hacen los rankings y que tienen en cuenta. ' image={hero} date='31/12/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>¿Te has preguntado como se hacen los rankings de la UFC y que se tiene en cuenta para hacerlos? En este artículo te explico quienes son los encargados de ranquear a los peleadores de la compañía de MMA más grande del mundo, y que tienen en cuenta para hacer estos rankings, incluido el ranking p4p (libra por libra).  </p>
                    <p>Para comenzar, poniendo un poco de contexto histórico, durante la mayor parte del tiempo de existencia de la UFC no existieron los rankings. Antes de que estos fueron instaurados, se realizaban combates y enfrentamientos basados en la opinión de los matchmakers y en la popularidad de los luchadores. Fue recién en febrero de 2013 que comenzaron a regir los rankings en la compañía, originalmente solamente ranqueando a los primeros 10 de cada división, hasta que posteriormente se enlistarían a los primeros 15, como funciona hoy en día.</p>
                    <p>Los rankings de la UFC se actualizan todas las semanas después de cada evento, el día martes, y se elaboran mediante la opinión de un grupo de periodistas y miembros de los medios externos a la compañía, en donde teóricamente la UFC no tiene ni voz ni voto. Este grupo de personas votan posterior a cada evento de la compañía como quedan compuestos los rankings, moviendo posiciones de peleadores que hayan participado en dichos eventos, utilizando la tecnología para que posteriormente se saque la media de los votos. </p>
                    <YouTubeEmbed videoid='JyrYuPwyfQ4' />
                    <p>Concretamente, en su página oficial la UFC explica: <b>Las clasificaciones fueron generadas por un panel de votación compuesto por miembros de los medios de comunicación. Se les pidió a los miembros de los medios que votaran por quienes creen que son los mejores luchadores en la UFC por categoría de peso y libra para libra. Un luchador solo es elegible para ser votado si está en estado activo en la UFC.</b></p>
                    <p>Además, los campeones y campeones interinos queda excluidos de esta votación, dado que se entiende que son los #1 de la división. </p>
                    <p>Dichos rankings quedan divididos por las divisiones de la compañía, a su vez están divididas por el peso que dan los peleadores a la hora de pelear, siendo dichas divisiones en el caso de las MMA masculinas las siguientes: </p>
                    <ul>
                        <li>1.	Peso Mosca (125lbs)</li>
                        <li>2.	Peso Gallo (135lbs)</li>
                        <li>3.	Peso Pluma (145lbs)</li>
                        <li>4.	Peso Ligero (155lbs)</li>
                        <li>5.	Peso Wélter (170lbs)</li>
                        <li>6.	Peso Medio (185lbs)</li>
                        <li>7.	Peso Semipesado (205lbs)</li>
                        <li>8.	Peso Pesado (265lbs)</li>
                    </ul>
                    <p>Mientras que para las MMA femeninas quedan de divididas de la siguiente manera: </p>
                    <ul>
                        <li>1.	Peso Paja (115lbs)</li>
                        <li>2.	Peso Mosca (125lbs)</li>
                        <li>3.	Peso Gallo (135lbs)</li>
                    </ul>
                    <p>Es teniendo en cuenta estos rankings que después la UFC organiza los combates entre peleadores, y busca al próximo contendiente del título de cada división, siendo teóricamente el #1 de la división el principal candidato a pelear por el título. Aunque como ya hemos visto este no es el único criterio, dado que la disponibilidad de cada peleador, los últimos resultados de sus peleas, y criterios subjetivos de la misma compañía influyen a la hora de elegir contendientes al cinturón. Como pudimos comprobar este mismo 2024, teniendo como último evento numerado al <Link href='/covertura-ufc/ufc310'>UFC 310</Link>, encabezado por el campeón de peso mosca <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, enfrentando al japonés Kai Asakura, quien al momento de la pelea ni siquiera estaba ranqueado, debido a que era un debutante en la compañía. O como ejemplo también sirve el caso de <Link href='/noticias/khalil-rountree'>Khalil Rountree</Link>, quien estando clasificado #8 en la división de peso semipesado, tuvo la oportunidad de enfrentarse por el cinturón al campeón <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, en el <Link href='/covertura-ufc/ufc307'>UFC 307</Link>, al ser de los pocos peleadores ranqueados disponibles para esa fecha que no vinieran de una derrota. </p>
                    <p>Por último, también existe un ranking que funciona de manera simbólica, como lo es el P4P (libra por libra), que toma en cuenta a todos los peleadores de la compañía, y es votado a criterio subjetivo de los miembros de los medios. Dado que, aunque en este ranking, esté Islam Makhachev como #1, y Alex Pereira como #2, es realmente imposible saber quién es mejor peleador, dado que estamos comparando luchadores de 2 divisiones super lejanas entre sí. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}