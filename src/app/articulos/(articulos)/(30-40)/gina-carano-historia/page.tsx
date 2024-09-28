import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/gina_carano-hero.jpg'

export const metadata: Metadata = {
    title: 'Gina Carano: La Primera Estrella Femenina de las MMA',
    description: 'La historia de una de las precursoras de las MMA femeninas y su posterior inserción en el mundo de Hollywood.',
    openGraph: {
        title: 'Gina Carano: La Primera Estrella Femenina de las MMA',
        description: 'La historia de una de las precursoras de las MMA femeninas y su posterior inserción en el mundo de Hollywood.',
        url: 'https://fullmma.org/articulos/gina-carano-historia'
    }
}

export default function GinaCaranoHistoria () {
    return(
        <main>
            <ArticleHero title='Gina Carano: La Primera Estrella Femenina de las MMA' subtitle='La historia de una de las mujeres más importantes en la historia de las MMA, que pasó de ser una de las procursoras de las MMA femeninas a una estrella de cine.' image={hero} date='2024-06-20' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Gina Carano UFC</h2>
                    <p>Por lo general uno tiende a valorar menos de lo merecido lo que hicieron figuras del deporte como Gina Carano, dado que a pesar de no haber peleado tanto como algunas de sus compañeras, ni de haber sido campeona, fue una de las pocas mujeres que se dedicó a promocionar este deporte cuando incluso personas como <b>Dana White</b>, actual presidente de la <Link href='/articulos/ufc'>UFC</Link> afirmaba que en su compañía jamás habría enfrentamientos entre mujeres. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/Pk9EVrHVKko?si=K49_Cg42-QboKD4x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Gina Joy Carano, nació el 16 de abril de 1982 en los Estados Unidos, en la ciudad de Dallas, Texas. Es la segunda hija de 3 hermanas, y es hija del exjugador de fútbol americano <b>Glenn Thomas Carano</b>.</p>
                    <p>Asistió a la Universidad de Nevada, en Las Vegas para estudiar psicología, debido a que su hermana, que vivía allí, no estaba pasando un buen momento y quería estar con ella. Durante esa época, Gina comenzó a salir con un luchador de Muay Thay llamdo <b>Kevin Ross</b>, a quien fue a ver entrenar, allí, el entrenador de este luchador invitó a Gina a entrenar también, remarcandole que estaba algo gorda y que entrenar lo vendría mal. Lejos de sentarle mal el comentario, Carano comenzó a entrenar Muay Thai, consiguiendo bajar 10 kilos en menos de 6 meses.</p>
                    <h2>Gina Carano Carrera MMA</h2>
                    <p>Ya con bastante entrenamiento en sus espaldas, Gina Carano decide comenzar a competir en MMA, haciendo su debut profesional en la promotora <b>World Extreme Fighting</b> el 10 de junio de 2006, contra su compatriota <b>Leticia Pestova</b>, a quien vencería por KO en menos de un minuto en el primer asalto. Esta además contaría con la particularidad de ser la primera pelea profesional entre mujeres organizada en Las Vegas.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/zIasu0gUb28?si=JxFNtxmMc6KuCbLk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Acumularía 2 victorias más por KO y por decisión antes de unirse a la promotora <b>EliteXC</b>, en donde tendría 4 combates, ganando cada uno de ellos, siendo 2 de sus victorias por decisión, 1 por TKO contra la estadounidense <b>Kaitlin Young</b> y 1 por sumisión, que sería la única de su carrera, contra la estadounidense <b>Tonya Evinger</b>.</p>
                    <p>Luego de su cuarta y última victoria en Elite, cuando Gina acumulaba un récord perfecto de 7-0, esta promotora sería comprada y absorvida por una competidora, <b>Strikeforce</b>, en donde veríamos uno de los combates más importantes para las MMA femeninas.</p>
                    <h2>Gina Carano vs Cyborg</h2>
                    <p>Ginas Carano y Cris Cyborg se enfrentaría el 15 de agosto de 2009 por el Campeonato de Peso Pluma de Mujeres de Strikeforce. Esta pelea tendría especial importancia porque sería la primer superpelea entre luchadoras femeninas, y se convertiría en el primer evento de MMA en ser encabezado por mujeres. Aunque Gina no tendría que hacer una Cris Cyborg que fue bastante superior durante el combate y que acabaría venciendo por TKO ceca de finalizar el primer asalto.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/bOAs68YcTzs?si=TRX32Lw3MRWy45Fb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Gina Carano tiempo después reconocería que se sentía preparada para este combate, pero que decidió tomarlo y hacerlo de igual forma, porque lo consideraba un combate necesario para el desarrollo de las MMA femeninas, detalle que la honra. Luego de esa pelea Carano no volvería a pelear.</p>
                    <p>Por su parte, tiempo después <b>Cyborg</b> sería atrapada recibiendo un positivo en una prueba antidopaje, encontrándose <b>Estanozolol</b> en su cuerpo, que presenta propiedades similares a la hormona testosterona, que está prohibida hasta en las carreras de caballos.</p>
                    <h2>Gina Carano vs Ronda Rousey ¿Por qué no pasó?</h2>
                    <p>Durante una época sonaba con mucha fuerza el rumor de la posible vuelta del retiro de Gina para enfrentar a la legendaria <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>. Carano contó la posibilidad de volver para enfrentar a la excampeona de UFC fue una muy real, en una época en la que ella seguía entrenando con <Link href='/leyendas/randy-couture'>Randy Couture</Link>, recibió la oferta de &quot;Una pelea de 1 Millón de dolares&quot; por parte de <b>Dana White</b> y de <b>Lorenzo Fertitta</b>.</p>
                    <p>Gina les había pedido 6 meses para poder encontrar un gimnasio y un equipo con el que entrenar, pero especialmente quería que esto se tratara con discreción. Sin embargo, rápidamente todo el mundo se enteró de que esta posible pelea podía convertirse en una realidad, lo que llevó a Carano a decidir no pelear.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/__t3rU0QjsE?si=Jo0js6Nrjfprcvit" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Gina Carano Películas</h2>
                    <p>Luego de abandonar su carrera como peleadora, Gina Carano triunfaría en el mundo del cine, haciendo su debut el mismo año de su retiradas de las MMA, en 2009 en la película <b>Blood and Bone</b>. Dos años después tendría su primer protagónico en la película <b>Haywire</b>, donde interpretaría al personaje <b>Mallory Mal Kane</b>.</p>
                    <p>Sin embargo la fama y el reconocimiento mediático le llegaría cuando formaría parte de <b>Rápidos y Furiosos 6</b>, que le abriría las puertas para obtener papeles en otras producciones importantes, entre las que destacan: su papel en <b>Deadpool</b>, donde interpreta al personaje de los cómics <b>Angel Dust</b>; <b>Extraction</b>, en donde compartiría pantalla con <b>Bruce Willis</b>; y la secuela de <b>Kickboxer</b>, <b>Kickboxer: Vengeance</b>, de la estrella del cine de acción <b>Jean-Claude Van Damme</b>, en donde además también participaría otro peleador de MMA, la leyenda <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link>.</p>
                    <p>Además donde destacaría especialmente sería en su papel en la serie de televisión de Star Wars, <b>The Mandalorian</b>, donde fue coprotagonista y recibió el mayor reconocimiento de su carrera.</p>
                    <h2>Gina Carano Despedida</h2>
                    <p>Lamentablemente para Gina, en el año 2021, producto de sus declaraciones y expresiones políticas en redes sociales sería despedida de Disney. Más allá de las muchas declaraciones que había tenido en el pasado, la publicación por la que terminó siendo despedida era la siguiente: </p>
                    <p>&quot;<b>Como la historia se altera, la mayoría de la gente no se da cuenta de que para llegar al punto en que los soldados nazis pudieran arrestar fácilmente a miles de judíos, el gobierno provocó antes que sus propios vecinos los odiaran simplemente por ser judíos. ¿En qué se diferencia eso de odiar a alguien por sus opiniones políticas?</b>&quot;</p>
                    <p>Actualmente la actriz, modelo y exluchadora de MMA se encuentra en una demanda contra Disney y Lucasfilm por discriminación y despido improcedente. Dicha demanda recibió el apoyo del empresario <b>Elon Musk</b> que se encargó de financiar esta misma.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}