import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import LiddellHero from './LiddellHero'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Chuck Lidell',
    description: "Una de las primeras estrellas de la UFC, fue el excampeón de peso semipesado Chuck Lidell, apodado Iceman por la tranquilidad con la que se lo veía antes de sus peleas. El luchador es un amigo cercano del actual promotor de la compañía, Dana White, habiendo incluso siendo representado por este al inciio de su carrera.",
    openGraph: {
        title: 'Chuck Lidell',
        description: "Una de las primeras estrellas de la UFC, fue el excampeón de peso semipesado Chuck Lidell, apodado Iceman por la tranquilidad con la que se lo veía antes de sus peleas. El luchador es un amigo cercano del actual promotor de la compañía, Dana White, habiendo incluso siendo representado por este al inciio de su carrera.",
        url: 'https://fullmma.org/leyendas/chuck-lidell'
    }
}


export default function ChuckLiddell () {
    return(
        <main>
            <LiddellHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Chuck Liddell UFC</h2>
                    <p className={styles.leyenda__article__text}>Una de las primeras estrellas de la <Link href='/articulos/ufc'>UFC</Link>, fue el excampeón de peso semipesado <b>Chuck Lidell</b>, apodado <b>Iceman</b> por la tranquilidad con la que se lo veía antes de sus peleas. El luchador es un amigo cercano del actual promotor de la compañía, <b>Dana White</b>, habiendo incluso siendo representado por este al inciio de su carrera.</p>
                    <p className={styles.leyenda__article__text}>Chuck Lidell fue añadido al salón de la fama de la UFC en el año 2009, luego de haber sido campeón de la división de peso semipesado, habiendo defendido su título en de forma exitosa en 4 ocasiones, siendo una leyenda en su división, al ser el peleador que más KO&apos;s en la división ha conseguido con 10, y el que más victorias consiguió en la división con 16.</p>
                    <h2 className={styles.leyenda__article__title}>Chuck Liddell Récord</h2>
                    <p className={styles.leyenda__article__text}>Chuck Liddell en sus 30 peleas profesionales cosechó un récord de 21-9. Siendo 13 de sus 21 victorias por la vía del nocaut, 1 por sumisión y 7 por decisión. Mientras que de sus 9 derrotas, 7 fueron por nocaut, 1 por sumisión y 1 por decisión.</p>
                    <h2 className={styles.leyenda__article__title}>Chuck Liddell Biografía</h2>
                    <p className={styles.leyenda__article__text}>Charles David Liddell nació el 17 de diciembre de 1969 en la ciudad estadounidense de Santa Barbara, ubicada en el Estado de California. Fue críado por su madre soltera y por su abuelo materno, quien le enseñó a él y a sus hermanos técnicas de boxeo desde muy pequeños. Además, a la edad de 12 años comenzó a entrenar Karate, que sumado a su práctica de Wrestling en sus años de secundaria y de universitario, le dieron un amplio background en el mundo de la pelea.</p>
                    <p className={styles.leyenda__article__text}>Iceman haría su debut como profesional en las MMA en la misma UFC, en el UFC 17 organizado el 15 de mayo de 1998, enfrentado a su compatriota <b>Noe Hernandez</b> a quien derrotó por decisión unánime, en un combate de un sólo asalto de 12 minutos. Su primer derrota llegaría en su tercer combate, también en la UFC, en el UFC 19, enfrentando al estadounidense <b>Jeremy Horn</b>, quien lo sometió con un triangulo de brazos, pelea en la que caería inconsciente sin que el árbitro se diera cuenta, terminando siendo salvado por la campana.</p>
                    <p className={styles.leyenda__article__text}>Sin embargo se recuperaría rápidamente de su derrota y no volvería a caer derrotado hasta mucho tiempo después. Chuck acumularía una racha de 10 victorias consecutivas, entre las que destacaría su combate en <Link href='/articulos/que-paso-con-pride-fc'>PRIDE FC</Link> ante su compatriota <b>Guy Mezger</b>, a quien venció por KO a los 21 segundos del segundo asalto.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ZLwXUkiTowY?si=fNIztPBxsGZwVj96" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Otra de sus victorias destacadas sería ante el histórico brasileño <b>Vitor Belfort</b> en el <b>UFC 37.5</b>, a quien derrotó de forma contundente por decisión unánime. Esta racha de 10 victorias consecutivas le daría la chance de pelear por el campeonato interino de la división de peso semipesado el 6 de junio de 2003, ante un <Link href='/leyendas/randy-couture'>Randy Couture</Link>, quien venía de 2 derrotas consecutivas en peso pesado, y aunque la mayoría creía que esta pelea terminaría en una victoria para nuestro protagonista, lo cierto es que Randy Couture vencería por TKO en el tercer asalto, convirtiéndose con esta victoria en el primer doble campeón en la historia de la UFC.</p>
                    <p className={styles.leyenda__article__text}>Luego de aquella derrota, Chuck participaría del torneo de peso medio organizado por PRIDE, en representación de la UFC, donde enfrentaría en los cuartos de final a un joven <b>Alistair Overeem</b>, a quien derrotaría por KO en el primer asalto.</p>
                    <p className={styles.leyenda__article__text}>Sin embargo su segunda pelea, por las semifinales del PRIDE GP 2003, organizada en noviembre terminaría en una derrota por TKO para nuestro protagonista, debido a una parada médica que sufrió al enfrentar al estadounidense <b>Quinton Jackson</b>.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/yDYPaYhSoq8?si=C6nbwtWveWCj8zc1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>A pesar de estar en una posición favorable para volver a competir por el título de la compañía, Chuck decidió correr un riesgo tomando 2 peleas en el año 2004. La primera contra quien había sido su compañero de entrenamiento durante muchos años, <b>Tito Ortiz</b>, cosa que provocó el nacimiento de una de las rivalidades más importantes en la historia de la UFC, que en su momento ayudó mucho a la compañía a crecer a nivel mediático. Esta pelea la terminaría ganando Iceman por KO en el segundo asalto, en lo que es uno de los nocaut más míticos en la historia de la UFC.</p>
                    <p className={styles.leyenda__article__text}>Su segunda pelea de 2004 sería ante el estadounidense <b>Vernon White</b>, a quien vencería por KO en el primer asalto de manera contundente. </p>
                    <p className={styles.leyenda__article__text}>El 16 de abril de 2005 finalmente se enfrentaría a Randy Couture por el título de la dvisión, a quien lograría esta vez propinarle un KO en el primer asalto que lo coronaría como campeón de la división de peso semipesado. </p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/t3OZxAarFJc?si=2obzLVgJmvB8UUed" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Una vez coronado como campeón, sería capaz de defender su título de forma exitosa en 4 ocasiones, todas por nocaut. La primera de estas defensas la concretaría ante el estadounidese <b>Jeremy Horn</b>, quien le había provocado su primera derrota, logrando vengar esta en el cuarto asalto de la pelea.</p>
                    <p className={styles.leyenda__article__text}>La segunda defensa sería en una tercer pelea ante <b>Randy Couture</b>, a quien nuevamente lograría derrotar por KO en el segundo asalto. La tercera sería ante el brasileño <b>Renato Sobral</b>, a quien vencería por TKO en el primer asalto, ganando su primer y único bono de KO de la noche. </p>
                    <p className={styles.leyenda__article__text}>La cuarta defensa exitosa la lograría en una revancha ante <b>Tito Ortiz</b>, en una pelea que sería histórica para las MMA, mencionada por algunas fuentes como la primer pelea en vender 1 millón de PPVs. La pelea se organizaría el 30 de diciembre de 2006 y terminaría con un victoria por TKO para Chuck Liddell, en lo que además sería elegida como la pelea de la noche.</p>
                    <p className={styles.leyenda__article__text}>El 26 de mayo de 2007 llegaría la primer derrota de nuestro protagonista en mucho tiempo, y lo que sería el comienzo de la caída de nuestro protagonista. Se enfrentaría en el UFC 71 en una revancha ante <b>Quinton Jackson</b>, quien lo había vencido por nocaut en su primer pelea. Lamentablemente no conseguiría vengar su derrota, siendo noqueado en el primer asalto de la pelea, perdiendo su título luego de 2 años.</p>
                    <p className={styles.leyenda__article__text}>Su siguiente pelea sería una derrota por decisión dividida ante <b>Keith Jardine</b> en septiembre de 2007. La única victoria que interrumpiría su racha de derrotas, sería cuando enfrentara al brasileño <b>Wanderlei Silva</b>, a quien luego de 3 asaltos venció por decisión unánime. Como mencionamos en <Link href='/articulos/mejores-peleas-ufc'>otro artículo</Link>, esta sería elegida la pelea del año 2007.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/UhIzP9XDIL8?si=MT-K802J8IUvT3WS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Luego de aquella victoria, perdería por KO ante <b>Rashad Evans</b> en 2008. Un año después, en 2009, se enfrentaría al brasileño <b>Maurício Rua</b> quien lo vencería por nocaut en el primer asalto. En 2010 volvería a perder por KO ante <b>Rich Franklin</b>.</p>
                    <p className={styles.leyenda__article__text}>Con más de 40 años y una amplia trayectoria encima, no tenía sentido para Chuck seguir compitiendo a este nivel, menos con la cantidad de duras derrotas que estaba comenzando a recibir. Seguir peleando sólo significaría poner en riesgo su salud, de hecho, el mismo <b>Dana White</b> quien era promotor de la UFC y amigo de Chuck Liddell, le aconsejó que se retirará, por lo que su pelea ante Franklin sería la última de su carrera, anunciando su retiro luego de aquella derrota.</p>
                    <p className={styles.leyenda__article__text}>Sin embargo, en noviembre de 2018, Chuck Liddell con casi 50 años aceptó pelear nuevamente ante <b>Tito Ortiz</b>, en una trilogía que pocos pedían y que no parecía tener mucho sentido, puesto que Iceman había ganado los 2 combates anteriores por KO. Aún así, se presentaría al combate y caería derrotado por KO, en lo que ahora sí, sería la última pelea de su carrera.</p>
                    <iframe className={styles.leyenda__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/vqdSwkTUtsc?si=_DBCsIo1bY8hlLAO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}