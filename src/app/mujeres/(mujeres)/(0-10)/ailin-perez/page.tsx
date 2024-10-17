import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.png'
import nurmagomedov from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-nurmagomedov.jpg'
import ponzinibbio from '@/assets/peleadores__images/argentinos/ailin-perez/ailin_ponzinibbio.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ailín Pérez',
    description: 'Ailín "Fiona" Pérez es una peleadora argentina de MMA con una carreara relativamente nueva en la UFC, en donde lleva apenas 3 peleas y en donde hizó su debut con una derrota contra la suiza Stephanie Egger por sumisión en el segundo asalto. Sin embargo, se recompuso rápido con 2 victorias al hilo, ambas por decisión unánime contra la peleadora estadounidense Ashlee Evans-Smith y contra la luchadora checa Lucie Pudilova a quien venció el 18 de noviembre de 2023.',
    openGraph: {
        title: 'Ailín Pérez',
        description: 'Ailín "Fiona" Pérez es una peleadora argentina de MMA con una carreara relativamente nueva en la UFC, en donde lleva apenas 3 peleas y en donde hizó su debut con una derrota contra la suiza Stephanie Egger por sumisión en el segundo asalto. Sin embargo, se recompuso rápido con 2 victorias al hilo, ambas por decisión unánime contra la peleadora estadounidense Ashlee Evans-Smith y contra la luchadora checa Lucie Pudilova a quien venció el 18 de noviembre de 2023.',
        url: 'https://fullmma.org/mujeres/ailin-perez'
    }
}

export default function AilinPerez () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ailin} w={11} l={2} d={0} nombre='Ailín Pérez' apodo='FIONA' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez UFC</h2>
                    <p className={styles.peleador__article__text}>Ailín &quot;Fiona&quot; Pérez es una peleadora argentina de MMA que compite en la <Link href='/articulos/ufc'>UFC</Link> desde el 3 de septiembre de 2022, cuando hizo su debut en la división de peso pluma enfrentando a la suiza <b>Stephanie Egger</b>. </p>
                    <p className={styles.peleador__article__text}>Es una de las pocas peleadoras argentinas que compite en UFC, junto con <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, entre otros de los que hablos en <Link href='/noticias/peleadores-de-ufc-argentinos-2024'>Los 5 Argentinos que Pelean en UFC 2024</Link>.</p>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez Record</h2>
                    <p className={styles.peleador__article__text}>Ailín Pérez tiene un record de 11-2. Siendo 4 de sus victorias por la vía del nocaut, 2 por sumisión y 5 por decisión. Mientras que de sus 2 derrotas, 1 fue por sumisión contra la peleadora suiza <b>Stephanie Egger</b>, y la otra por descalificasión en una pelea por el campeonato <b>Samurai Fight House</b> contra la brasileña Tamires Vidal</p>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez Historia</h2>
                    <p className={styles.peleador__article__text}>Ailín Luciana &quot;Fiona&quot; Pérez nació el 5 de octubre de 1994 en la ciudad de Hurlingham, ubicada en la provincia de Buenos Aires en Argentina. Cuando Ailín tenía tan sólo 12 años cuando, influenciada por sus hermanos quienes jugaban Rugby, la llevaron a querer entrenar deportes de contacto como ellos, particularmente empezó a entrenar Kung Fu y Sanda. Su carrera en las artes marciales la terminarían convirtiendo en una de las representantes de Argentina que tenemos en la UFC. Sin embargo su camino hasta llegar a la mayor compañía de Artes Marciales Mixtas no fue fácil, como ella mismo lo relata: <b>&quot;Estaba por hacer mi debut profesional en las artes marciales mixtas y decidimos tener un hijo con mi pareja, formar una familia y enfocarnos de lleno en el deporte. Así nació Ades&quot;</b>.</p>
                    <p className={styles.peleador__article__text}>Durante su embarazo terminó separandose de su pareja y tuvo que cuidar ella sola de su hijo mientras trabajaba y entrenaba para comenzar su carrera en las MMA. Ailín cuenta como su madre fue de gran ayuda para que nunca se sienta sola, ayudandola en los cuidados de Ades y acompañando en cada paso.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/C1u5Qq-jiGQ?si=QCSRLdcLrX3KOLve" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Además relató en <a target='_Blank' href='https://www.infobae.com/america/deportes/2022/09/03/la-historia-de-una-madre-guerrera-quien-es-ailin-perez-la-luchadora-argentina-que-hara-su-debut-en-ufc/'>una nota con Infobae</a> como estas situaciones que tuvo que pasar la ayudaron a ser una guerrera, como ella misma se describe, a hacerse fuerte y convertirse en la peleadora que es hoy en día. Su mentalidad hoy en día llega al punto de no esconder su deseo de pelear por el título y ganarlo: <b>&quot;Mi meta es pelear por el título. Sé que hace más de un año y medio que Amanda no lo defiende. Me siento preparada para pelear con ella. Si no acepta la pelea ella tendría que entregar el título porque hace un año y medio que no lo defiende y creo que por reglamento tendría que existir eso. Ganando esta pelea creo que me podrían dar la oportunidad, ella tiene que defender el título o entregarlo&quot;</b>, dijo en la previa de su debut en la UFC.</p>
                    <p className={styles.peleador__article__text}>Su apodo &quot;Fiona&quot; viene producto del personaje de la película de Sherk, según ella misma explica: <b>&quot;Sí, Fiona, como la princesa de Shrek. Porque en el pesaje soy una y en la pelea me convierto en otra, en una ogra. Soy una princesa, cualquier persona que me vea por la calle ni se imagina que hago artes marciales. De hecho soy una chica muy simpática y muy alegre, pero adentro de la jaula soy lo más sangriento que puede haber, no tengo piedad con los rivales&quot;</b></p>
                    <p className={styles.peleador__article__text}>Su debut profesional en las MMA lo haría originalmente en la categoría de peso mosca, el día 24 de noviembre de 2018 ante la uruguaya <b>Noemi Galarza</b>, donde lograría luego de finalizados los 3 asaltos llevarse la victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Tan sólo unas semanas después tendría su segundo combate, peleando nuevamente ante la uruguaya <b>Laura Ribeiro</b> el 7 de diciembre de ese mismo año, esta vez en peso gallo, en un combate que nuestra protagonista conseguiría llevarse al someter en el segundo asalto a su rival. En junio de 2019 tendría su tercer combate profesional donde enfrentaría a su compatriota <b>Fiorella Cardozo</b>, a quien derrotaría por TKO en el primer minuto del combate. </p>
                    <p className={styles.peleador__article__text}>Ailín volvería a pelear el 4 de junio de 2021 ante la brasileña <b>Geyse Yasmin</b>, a quien luego de 3 asaltos vencería por decisión unánime. Ya con un récord perfecto de 4-0, Pérez comenzaría a pelear en la compañía <b>Samurai Fight House</b>, donde en su primer pelea disputaría el título vacante de peso gallo femenino ante la brasileña <b>Alessandra Tainara</b>, a quien lograría dejar KO con una patada en la cabeza en el primer asalto, ganando de esta forma el primer campeonato de su carrera. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/jNn5wQpsbBo?si=Zgpwgnp2Epn0UyZP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Se dispondría a defender su título por primera vez ante la brasileña <b>Tamires Vidal</b>, el 6 de noviembre de ese mismo año. Aunque en esta ocasión, sufriría la primera derrota de su carrera, de forma curiosa, puesto que en realidad la pelea se extendería hasta los 3 asaltos, y en ese tercer asalto Ailín quedaría descalificada debido a que le propinaría a su rival unos rodillazos ilegales. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/tjRwk9jUujc?si=uJ8o_OSRcj3gculC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Aún en la misma compañía, la peleadora argentina tendría 2 peleas más en la promotora durante el año 2022, enfrentando primero a su compatriota <b>Romina Aguirre</b>, a quien conseguiría derrotar por TKO en el primer asalto de la pelea. Y luego, volvería a disputar el cinturón de la compañía, enfrentando para eso a la peruana <b>Stephanie Bragayrac</b>, donde nuevamente lograría consagrarse campeona de la compañía, al derrotar por TKO en el segundo asalto (por parada de la esquina de su rival) a su contrincante.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/sbf_cGweqMo?si=qZOGk03RNVYmWMs4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Con un récord de 7-1, la peleadora argentina conseguiría entrar a la compañía más grande de artes marciales mixtas del mundo, haciendo su debut en la UFC el día 3 de septiembre de 2022 en el evento organizado en Paris, haciendo su debut originalmente en la división de peso pluma, se enfrentaría a la suiza <b>Stephanie Egger</b>, contra quien lamentablemente caería derrotada por sumisión en el segundo asalto, perdiendo en su debut en la compañía.</p>
                    <p className={styles.peleador__article__text}>Ailín tomaría la decisión de volver a pelear en peso gallo, teniendo su siguiente combate el día 15 de julio de 2023, ante la estadounidense <b>Ashlee Evans-Smith</b>, contra quien conseguiría su primer victoria en la compañía, al luego de 3 asaltos llevarse la victoria por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/vLH0VkeoPfc?si=CRA44si3eAbMU-Y5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Ese mismo año enfrentaría a la luchadora de República Checa <b>Lucie Pudilová</b>, contra quien tendría una actuación muy dominante, en una pelea en la que se vería el corazón de la argentina, quien ya tenía el primer y segundo asalto de la pelea en sus bolsillos, y sólo necesitaba sobrevivir el último para ganar la pelea, sería capaz de sobrevivir al intento de sumisión de su rival en los últimos minutos del combate, llevando la pelea a la decisión de los jueces que dieron a Ailín como ganadora por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>El 1 de junio de 2024, la veríamos volver al octágono para pelear en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link> ante la panameña <b>Joselyne Edwards</b>, a quien en una actuación dominante consiguió derrotar por decisión unánime y contra quien tenía una pica especial. Pues resulta que unos días antes de la pelea, Ailín apareció con unas puntadas debajo del ojo izquierdo, y hasta después de la pelea no dió a conocer nada respecto al tema, cuando declaró: <b>&quot;Esto es una agresión que tuve en el PI (UFC Performance Intitute) el día martes. Fue una persona equis, que después voy a dar nombres. Fue a agredirme para que la pelea no sucediera. Y lo siento, mi amiga, la pelea sucedió. Batí muy bien el peso como una profesional, y gané mi pelea a puro ojo, corazón y ovarios.&quot;</b></p>
                    <p className={styles.peleador__article__text}>Aunque Josely Edwards tiene su propia versión de lo que había sucedido previo a su pelea, que dista bastante de lo que contaba la argentina, declarando para <a target='_Blank' href='https://www.mmamania.com/'>MMMAMania</a>: <b>&quot;Mientras estábamos peleando, su coach me atacó por la espalda. Él me estaba estrangulando para que Ailin pudiera pegarme. Su coach me atacó. Prácticamente tuve que pelear con ambos. Él no protegió a nadie, él empezó la pelea. Él fue quien calentó las cosas para que la pelea sucediera. Y luego él me atacó y me estaba estrangulando. Después, cuando ya me habían separado de Ailin, él me seguía estrangulando y no me soltaba. Él no separó la pelea, él me atacó mientras ella me atacaba.&quot;</b></p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/VUvS_7585WA?si=QTGV1SkZIqe_oijW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella pelea, y antes de que pudiera tener su siguiente combate en la UFC, Ailín sería agregada a los rankings de su división en la UFC, siendo posicionada en el puesto #15, convirtiéndose en la primera peleadora argentina en estar ranqueada en la UFC, y siendo la segunda argentina en general después de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>. Por lo que, ya siendo una luchadora ranqueada, se enfrentaría a la rusa <b>Daria Zhelezniakova</b> el 28 de septiembre de 2024, nuevamente en el <Link href='/covertura-ufc/fight-night-moicano-saintdenis'>UFC Francia</Link>, donde conseguiría su primer finalización en la UFC, al someter en el primer asalto a su rival. Esta actuación posteriormente la haría subir un puesto en los rankings de la compañía, estando posicionada #14.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/8dJPsMMe7Dg?si=--62U0OM47LwWeoJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}