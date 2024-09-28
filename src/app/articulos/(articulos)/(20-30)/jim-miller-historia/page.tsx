import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/20-30/jim-miller-hero.jpg'

export const metadata: Metadata = {
    title: 'Jim Miller Historia',
    description: '',
    openGraph: {
        title: 'Jim Miller Historia',
        description: '',
        url: 'https://fullmma.org/articulos/jim-miller-historia'
    }
}


export default function JimMiller () {
    return(
        <main>
            <ArticleHero title='Jim Miller, el Peleador con Más Victorias en la Historia de la UFC y que Participó del UFC100, UFC200 y UCF300' subtitle='La historia de uno de los peleadores más importantes en la historia de la compañía más grande de MMA, que cuenta con más de 40 peleas en UFC.' image={hero} date='02/05/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Jim Miller</h2>
                    <p>James Andrew Miller nació el 30 de agosto de 1983 en los Estados Unidos, en la ciudad de Sparta Township, New Jersey. A pesar de no ser tan conocido como otros peleadores de la <Link href='/articulos/ufc'>UFC</Link>, desde su arribo a la compañía en 2008 se convirtió en uno de los más destacados que hay, siendo el único en participar de los eventos UFC100, UFC200 y <Link href='/articulos/ufc300-early-prelims'>UFC 300</Link>, además de ser el peleador con más victorias en la historia de la compañía, con un total de 26. También es el peleador con más peleas en la compañía, con un total de 44, y encontrandose aún activo con sus casi 41 años de edad.</p>
                    <p>Miller es el menor de 3 hermanos y comenzó a entrenar wrestling desde los 4 años, compitiendo en su escuela secundaria y un tiempo durante la universidad. Jim se dedicó a trabajar en la construcción durante su juventud junto a uno de sus hermanos y su padre, hasta que a la edad de 22 años decidiría competir de forma profesional en las MMA, haciendo su debut el 19 de noviembre de 2005 en <b>Reality Fighting</b> contra un peleador llamado <b>Eddie Fyvie</b>, a quien vencería por decisión unánime en un combate de 2 asaltos.</p>
                    <p>Jim tendría otros 3 combates en la misma compañía, que acabaría por ganar finalizando a sus rivales vía sumisión, siendo el último de estos combates contra un peleador llamado <b>Muhsin Corbbrey</b>, a quien vencería y por consiguiente conseguiría el cinturón de Peso Ligero de la compañía. En esta promotora es donde enfrentaría a <b>Frankie Edgard</b>, que años después se convertiría en campeón de la división en la UFC, aquel combate terminaría con una victoria para Frankie por decisión unánime, quien el propinaría la primer derrota de su carrera a nuestro protagonista.</p>
                    <p>Al inicio de su carrera competiría en otra compañías donde lograría ser campeón, primero consiguiendo el <b>Campeonato de Peso Ligero de Cage Fury FC</b>, luego el <b>Campeonato de Peso Weltér de USKBA</b>, y luego el <b>Campeonato Vacante de Peso Ligero de ROC</b>.</p>
                    <p>Acumulando ya un récord de 11-1 en un lapso de 3 años, acabaría por arribar a la UFC,en donde debutaría el 18 de octubre de 2008 para enfrentar al francés <b>David Baron</b>, a quien vencería por sumisión en el tercer asalto, ganando el ya extinto premio a la sumisión de la noche.</p>
                    <p>Desde su llegada a la UFC, ha sido protagonista de una incontable cantidad de peleas y logros, entre ellas su victoria en 2010 a quien años después sería el campeón de la división de peso ligero <Link href='/peleadores/charles/oliveira'>Charles Oliveira</Link>. O su participación en el UFC 100, donde enfrentaría a <b>Mac Danzing</b> en lo que sería apenas su cuarto combate en la compañía, y donde sería capaz de llevarse la pelea por decisión unánime.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/OjP16BOyu34?si=tdTF3_b3oikQq_ZF&amp;start=3013" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Aunque nunca llegó a tener una pelea por el título, estuvo cerca en el momento en que se enfrentó a <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link>, dado que aquella pelea era una eliminatoria para terminar enfrentando a <b>Benson Henderson</b>, quien era el campeón en aquel entonces. Lamentablemente para él, terminó perdiendo la pelea luego de que Nate fuera capaz de someterlo con una guillotina en el segundo asalto. </p>
                    <p>Luego de resultados irregulares en su carrera, volvería a participar de un evento histórico de la UFC, como lo sería el UFC 200, celebrado el 9 de julio de 2016, en donde enfrentaría al japonés <b>Takanori Gorni</b>, a quien sería capaz de derrotar por TKO en el primer asalto del combate.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/_gPW33Y8Kdo?si=hbT2HgbVHLHQW_9c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Unos años después de aquello, Miller haría historia en su enfrentamiento contra su compatriota <b>Erick Gonzáles</b>, a quien vencería por KO en el segundo asalto, ganándose el premio a la actuación de la noche, pero logrando además, convertirse en el peleador con más peleas en la historia de la compañía.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/364lFjKWcOE?si=O3VJW7gj9PWlpH2M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Otro de los momentos históricos que vivió nuestro protagonista fue cuando enfrentó al también histórico peleador <b>Donald Cerrone</b>, a quien tuvo el honor de enfrentar en su último combate en una pelea realizada en peso wélter un 2 de julio de 2022. &quot;Cowboy&quot;, es otro de los que ha tenido una larga trayectoria en la UFC, y que si no se hubiese retirado quizás estaría disputando el récord de peleas en la compañía con Jim Miller.</p>
                    <p>Ambos peleadores ya se habían enfrentado en el pasado, hace poco menos de 10 años en el 2014. En aquella ocasión, Jim Miller había caído KO con una patada en la cabeza que logró conectar Cerrone. Sin embargo, en su revancha Miller tendría la oportunidad de vengarse, y nada menos que en la última pelea de Cowboy, sometiendo en el segundo a su rival.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/79mAMV2UhD4?si=jiJCjqPYmyStvOib" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Jim Miller aún se encuentra activo, y recientemente participó de otra noche histórica en el UFC 300, al que llegaba luego de 2 victorias por finalización, una por KO y otra por sumisión, en las que también había ganado el premio a la actuación de la noche. Su rival para aquella noche fue <b>Bobby Green</b>, quien luego de sufrir el primer asalto, terminó por recomponerse en los siguientes 2 para ganarle a nuestro protagonista por decisión unánime. </p>
                    <p>Al día de la fecha, Jim Miller es el peleador con más peleas en la historia de la UFC; el peleador con más victorias en la UFC; es el peleador, junto a <b>Joe Lauzon</b>, con más bonos post-pelea en la historia de la UFC; es el segundo peleador con más finalizaciones y sumisiones en la historia de la UFC, en ambos récords por detrás de <Link href='/peleadores/charles/oliveira'>Charles Oliveira</Link>; ha recibido el premio a la pelea de la noche en 7 ocasiones, y en una ocasiones la suya fue elegida la pelea del año, en su victoria contra <b>Joe Lauzon</b>; ha sido premiado como la actuación de la noche en 3 oportunidades; y ha ganado en 3 oportunidades el premio ya extinto a la sumisión de la noche.</p>
                    <p>Sin duda, la suya es una carrera exitosa y que debe formar parte de los libros de historia de la UFC, y de las MMA.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}