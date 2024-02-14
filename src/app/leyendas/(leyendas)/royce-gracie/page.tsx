import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import GracieHero from './GracieHero'


export default function RoyceGracie () {
    return(
        <main>
            <GracieHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Royce Gracie UFC</h2>
                    <p className={styles.leyenda__article__text}>Royce Gracie es un ex peleador de artes marciales mixtas, fue campeón de <Link href='/promotoras/ufc'>UFC</Link> en 3 ocasiones, donde fue agregado al Salón de la Fama, y su trayectoria se considera de suma importancia para lo que son las MMA hoy en día. </p>
                    <p>Su participación en los primeros eventos de UFC, y su existencia, fueron importantes para cambiar el paradigma de las artes marciales, dado que pese a su menor estatura y meno peso, era capaz de vencer a expertos en otras artes marciales a pesar de que estos rivales fueran más grandes, haciendo uso de las palancas y estrangulaciones sin ir al intercambio de golpes. Estos resultados fueron lo que abrieron las puertas a los sistemas de combate de <b>grappling</b>, y posteriormente a las Artes Marciales Mixtas.</p>
                    <h2 className={styles.leyenda__article__title}>Royce Gracie Récord</h2>
                    <p>Royce Gracie tiene un récord de 15-2-3. De sus 15 victorias, 1 fue por nocaut, 12 por sumisión y 2 por decisión. Mientras que de sus 2 derrotas, 1 fue por nocaut y la otra fue por decisión. Además, tiene un total de 3 empates en su carrera, 2 de esos empates fueron contra los japoneses <b>Hidehiko Yoshida</b> y <b>Hideo Tokoro</b>, debido a la falta de jueces, mientras que su otro empate fue en UFC ontra el estadounidense <b>Ken Shamrock</b>, en un combate que duró 36 minutos y terminó en empate por falta de jueces.</p>
                    <h2 className={styles.leyenda__article__title}>Royce Gracie Historia</h2>
                    <p>Royce Gracie nació la ciudad brasileña de Río de Janeiro el 12 de diciembre de 1966. Es hijo del legendario <b>Hélio Gracie</b>, considerado uno de los padres del Jiu-Jitsu Brasileño moderno, quien le enseñó este arte marcial junto a sus hermanos mayores Rorion, Relson y Rickson Gracie, durante toda su infancia. Comenzó a competir en este arte marcial con tan sólo 8 años, y se ganó el cinturón azul cuando tenía 16.</p>
                    <p>Con 17 años fue invitado por su hermano mayor Rorion, a enseñar junto a él jiu-jitsu en su garaje, en Estados Unidos. Royce aceptó la oferta y se trasladó a California, a pesar de su desconocimiento del idioma inglés. Allí siguió compitiendo en numerosos torneos, logrando un récord de 51-3.</p>
                    <p>La destacada presencia de Royce Gracie en las historia de las Artes Marciales Mixtas, se debe principalmente a su participación en la historia de origen y principio de la <Link href='/promotoras/ufc'>UFC</Link>, que originalmente fue ideada por su hermano <b>Rorion Gracie</b> y por <b>Art Davie</b>, como un torneo de eliminación que iniciaban 16 competidores, con apenas reglas, y con un premio para el ganador de 50.000$USD.</p>
                    <p>Aunque habían pensado en hacer competir a su hermano mayor, <b>Rickson Gracie</b>, finalmente se terminaron decantando por llevar a Royce, esto porque al Gracie ser un hombre de 80kg, y de 1.80 cm, podría demostrar con más claridad que el Jiu-Jitsu es un arte marcial que puede ser empleado para derrotar a rivales más fuertes. </p>
                    <p>Y de hecho esto fue lo que sucedió, derrotando en el primer combate, por los cuartos de final de UFC 1, al boxeador Art Jimmerson, a quien fue capaz de someterlo un par de minutos después de iniciado el combate. Seguidamente, en las semifinales, se enfrentaría a un <b>Ken Shamrock</b> de más de 100 kilos, a quien también sería capaz de vencer, esta vez con un mataleón que somtería a su rival. Por último, en la final se enfrentaría al campeón del mundo de Savate, <b>Gerard Gordeau</b>, que lo sobrepasaba por 15 kilos, a quien volvería a someter con un mataleón antes de que se cumplan los 2 minutos de combate. </p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/-y2SEefVNtE?si=wIgAEF5H7cSHdLmm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Con esta victoria, junto con los posteriores eventos de UFC que se organizaron, hubo un gran impacto en la imagen pública de las artes marciales en favor de las artes de agarre como lo son el Wrestling, el Sambo, el Judo y el Jiu Jitsu Brasileño, que en muchos casos parecían imponerse sobre las artes de golpeo como el Karate o el Boxeo.</p>
                    <p>Royce continuó compitiendo en UFC, ganando los torneos de UFC 2 y de UFC 4, donde enfrentaría a <b>Dan Severn</b>, luchador de más de 100 kilos que fue capaz de extender la pelea hasta los 16 minutos, antes de que Royce fuera capaz de hacerle un triangulo de piernas que lo ahoracarían y obligarían a rendirse. </p>
                    <p>Sin embargo, el combate que destacaría y que sería su última pelea en UFC, el 7 de abril de 1995 en UFC 5, al menos hasta el momento, fue su revancha contra <b>Ken Shamrock</b>, a quien había enfrentado en las semifinales de UFC 1. Este combate se convertiría en la pelea más larga de la historia de la UFC, con un total de 36 minutos, que se terminó parando debido a la duración que había adquirido la pelea, y terminó en empate por la falta de jueces en dicha pelea, esto convertiría a Ken Shamrock en el primer luchador en sobrevivir a Royce y en lograr rescatar un empate. Es importante recordar que en aquel momento no había ningún limite de tiempo, dado que recién se introdujeron en 1995, razón por la que el combate se extendió tanto, ni había asaltos que dividiesen la pelea, ni existían jueces que puntuaran a cada peleador durante el combate.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/cXDT44zT8JY?si=tbVowLGoiOy-eMgQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Debido a los cambios de reglas que fueron implementando con los que Rorion no estaba de acuerdo, vendió su parte de la empresa y Royce no volvió a competir en UFC. Años después de esto, se marchó a la que entonces era la empresa más grande de MMA en el mundo, la extinta <b>PRIDE</b>.</p>
                    <p>En la compañía japonesa tuvo 3 combates en los años 2000 y 2003, en los que ganó 1, perdió 1 y empató 1. Venció a <b>Nobuhiko Takada</b> por decisión unánime de los jueces luego de un sólo asalto de 15 minutos. Irónicamente, empató su pelea contra <b>Hidehiko Yoshida</b>, luego de 2 asaltos de 10 minutos, por falta de jueces que juzguen la pelea. </p>
                    <p>Su primera derrota como profesional llegaría el 1 de mayo del año 2000 en Pride, cuando se enfrentó a <b>Kazushi Sakuraba</b> en un enfrentamiento con reglas modificadas, por rondas sin límite de tiempo ni paros. Debido a esto, esta se convertiría en la pelea más larga de la historia de las Artes Marciales Mixtas, con una duración de 90 minutos. Finalmente, luego de tanto tiempo de lucha, la pelea terminó en una victoria para el japonés por una parada del equipo de Gracie, que decidieron tirar la toalla.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/sG6FMTBJPJY?si=EedThiIRHR3XEzQm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Luego de un paso por la compañía <b>K-1 PREMIUM</b>, donde ganó una pelea y empató la otra, otra vez por falta de jueces, finalmente se dió su ansiada vuelta a la compañía que lo vió nacer como luchador de MMA, la UFC. Su vuelta se dió el 27 de mayo de 2006, para enfrentar al estadounidense <b>Matt Hughes</b> en el UFC 60. Dicho combate, lamentablemente no salió como muchos esperaban, y terminó con una derrota para el brasileño por TKO cerca de terminar el primer asalto.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/S7edm6aZyFI?si=6ICDdAcudP-cCzRX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Luego de su vuelta a la UFC, Royce tendría un combate contra el japonés <b>Kazushi Sakuraba</b> en la promotora <b>Dynamite!!</b>, donde ganaría por decisión unánime luego de 3 asaltos. Luego de aquella pelea daría positivo por anabolizantes, y se tomaría un largo tiempo de descanso hasta volver a pelear.</p>
                    <p>El 19 de febrero de 2016, casi 10 años después de su última pelea, y ya con 50 años, Royce Gracie vuelve para un último combate, esta vez en la compañía <Link href='/promotoras/bellator'>BELLATOR</Link>, para finalizar con una trilogía su vieja rivalidad con el estadounidense <b>Ken Shamrock</b>. Dicho combate lo terminaría ganando el brasileño por TKO en el primer asalto, siendo esta la única pelea que ganó por nocaut. Luego de la pelea se retiraría definitivamente de las MMA.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}