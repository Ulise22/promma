import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import holly from '@/assets/peleadores__images/mujeres/10-20/holly-holm/holly_holm.png'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function HollyHolm () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={holly} w={15} l={7} d={0} nombre='Holly Holm' apodo='The Preacher&apos;s Daughter' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Holly Holm UFC</h2>
                    <p className={styles.peleador__article__text}>Holly Holm es una luchadora estadounidense que pelea en la <Link href='/articulos/ufc'>UFC</Link> desde el año 2015, y que en base a su alto rendimiento dentro del octagono supo convertirse en una de las luchadoras más importantes en la historia de la compañía, llegando a ser campeona en una oportunidad.</p>
                    <h2 className={styles.peleador__article__title}>Holly Holm Récord</h2>
                    <p className={styles.peleador__article__text}>Holly Holm posee un récord de 15-7 (1). Siendo 8 de sus victorias por la vía del nocaut y 7 de estas por decisión. Mientras que de sus 7 derrotas sólo 1 fue por nocaut, 2 por sumisión y 4 por decisión. Además una de sus peleas terminó sin resultado, cuando enfrentaría a la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link>, contra quien originalmente perdería por sumisión, pero que luego de que la peleadora de Brasil diera pósitivo por ácido ritalinico, se anularía el resultado de la pelea.</p>
                    <h2 className={styles.peleador__article__title}>Holly Holm Biografía</h2>
                    <p className={styles.peleador__article__text}>Holly Rane Holm nació el 17 de octubre de 1981 en la ciudad de Albuquerque, en Nuevo México. Es la menor de tres hermanos, e hija de su padre Roger, que es un predicador de la Igleasia de Cristo, de quien luego recibiría su apodo como luchadora, <b>La Hija del Predicador</b>.</p>
                    <p className={styles.peleador__article__text}>Desde pequeña se dedicó a practicar deporte, jugando al fútbol, participando en gimnasia, en natacióm y en buceo. A los 16 años comenzó a entrenar Boxeo y Kickboxing, cuando en sus clases de aeróbics su instructor de cardio vió potencial en ella para ser peleadora, por lo que comenzó a entrenarla. </p>
                    <p className={styles.peleador__article__text}>Holly Holm se adentraría en el mundo del combate primero como peleadora amateur de Kickboxing, en donde destacaría en el año 2001 logrando ganar el campeonato en la división de welter femenino en un torneo organizado por la Federación Internacional de Kickboxing.</p>
                    <p className={styles.peleador__article__text}>El 25 de enero de 2002 comenzaría su carrera profesional de boxeo, enfrentando a la luchadora <b>Martha Deitchman</b>, a quien vencería por TKO en el tercer round. En este deporte se mantendría activa más de 10 años, retirandose en 2013, cuando ya tenía una carrera asentada en las MMA. Como boxeadora sería campeona de la división de peso wélter en 2008, cuando vencería a la entonces campeona <b>Mary Jo Sanders</b> por decisión. En diciembre de 2011, Holm perdería por nocaut contra la luchadora francesa <b>Anne Sophie Mathis</b>, por el título vacanta femenino IBA, y por el título de peso wélter WBAN.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/HXdXweKkjGY?si=NcoqhtukUd0NOGeR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 15 de junio de 2012, Holm obtendría una revancha contra la luchadora francesa, por los títulos <b>IBA female</b>, <b>WBF female</b> y <b>WBAN Welterweiht</b>, logrando en esta ocasión vencer por decisión unánime, consiguiendo vengar su derrota. Su última pelea en boxeo sería el 11 de mayo de 2013 enfrentando a <b>Mary McGee</b>, contra quien defendería 2 de sus títulos, logrando una defensa exitosa al llevarse la pelea por decisión. De esta forma se retiraría con un récord de 33-2-3.</p>
                    <p className={styles.peleador__article__text}>Holly haría su debut en las MMA el 4 de marzo de 2011 enfrentando a su compatriota <b>Christina Domke</b>, a quien vencería en el segundo asalto por TKO. Debido al extenso recorrido que Holm ya tenía en boxeo y kickboxing, fue capaz de ganar sus primeras 5 peleas como profesional por la vía del nocaut. </p>
                    <p className={styles.peleador__article__text}>Para cuando Holm tenía un récord de 7-0, siendo 6 de sus victorias por nocaut, y la última por el Campeonato Inaugural de Peso Gallo de Mujeres de Legacy FC, fue contactada para pelear en la UFC. Compañía en la que haría su debut el 28 de febrero de 2015 para enfrentar a la que años más tarde se convertiría en campeona de la división <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>, contra quien obtendría una victoria por decisión dividida luego de 3 asaltos.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ukcuyw0vHF8?si=iCMxHj_H0do5QBx5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su siguiente combate sería contra la estadounidense <b>Marion Reneau</b> el 15 de julio de 2015, contra quien nuevamente volvería a ganar por decisión unánime. Acumulando para esta altura un récord invicto de 9-0, que la dejaba en una posición muy favorable para enfrentar a la entonces campeona y también invicta, <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>, que había arrasado con todo rival que se le pusiera delante y ya tenía un récord de 12-0.</p>
                    <p className={styles.peleador__article__text}>Holly Holm enfrentaría a Ronda Rousey por el título de UFC el 5 de marzo de 2016 en UFC 193 que tenía a ambas peleadoras encabezando el evento. Esa noche, Holly haría historia noqueando de una patada a la cabeza en el segundo asalto a quien hasta ese entonces parecía invencible, convirtiéndose en la nueva campeona de peso gallo, ganando el bono a la pelea de la noche y el bono a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Este sin dudas sería el momento cúlmine de su carrera y el momento en el que todos pensarán cuando se hable de Holly Holm, porque encima fue una patada espectacular.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/d8DWEU6IhlQ?si=WIpBd2XpBECkNZXd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Lamentablemente, Holly no podría revalidar el título con una defensa, puesto que en su siguiente pelea contra la estadounidense <b>Miesha Tate</b>, caería en el quinto asalto por una sumisión, perdiendo no sólo su título, sino su invicto que había sabido ganarse hasta ese momento. Para colmo su siguiente pelea sería otra derrota contra la histórica <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>, quien luego de 5 asaltos se llevaría la pelea por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Holly Holm tendría la oportunidad de ser campeona nuevamente en 3 ocasiones, siendo la primera inmediatamente después de perder con Shevchenko, en la nueva división de peso pluma de mujeres, en donde caería derrota por decisión unánime contra la luchadora de Países Bajos <b>Germaine de Randamie</b>. La segunda oportunidad sería nuevamente en la división de peso pluma femenino, cuando enfrentaría a la brasileña <b>Cris Cyborg</b>, contra quien también perdería por decisión unánime. Y la tercera oportunidad sería por el campeonato de peso gallo contra la brasileña <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, quien vencería a nuestra protagonista por TKO en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Aunque luego de su dolorosa derrota contra Amanda Nunes, sumaría 2 victorias más a su carrera, la primera en su revancha contra la estadounidense <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>, a quien vencería por decisión unánime. Y la segunda victoria vendría al enfrentar a la mexicana <b>Irene Aldana</b> el 3 de octubre de 2020, a quien luego de 5 asaltos vencería por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ui7km8rLkX8?si=tl_1AsgjTixGPEPN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>A pesar de que durante el año 2021 Holm estuvo inactiva, lo cierto es que siguió peleando con resultados irregulares. Siendo la hasta ahora última pelea, la que tuvo lugar en el <Link href='/noticias/ufc300-prelims'>UFC 300</Link> organizado el 13 de abril de 2024, cuando enfrentaría a la recién llegada <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link>, contra quien caería derrotada por una sumisión el segundo asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/NT1SzkBIu0U?si=XNsNbucAORfBou17" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}