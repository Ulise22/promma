import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ailin from '@/assets/peleadores__images/ailin-perez/ailin-perez.png'
import nurmagomedov from '@/assets/peleadores__images/ailin-perez/ailin-nurmagomedov.jpg'
import ponzinibbio from '@/assets/peleadores__images/ailin-perez/ailin_ponzinibbio.jpg'
import postpelea from '@/assets/peleadores__images/ailin-perez/post-pelea.jpg'
import postpelea2 from '@/assets/peleadores__images/ailin-perez/post-pelea2.jpg'
import pelea from '@/assets/peleadores__images/ailin-perez/ailin-pelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function AilinPerez () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ailin} w={9} l={2} d={0} nombre='Ailín Pérez' apodo='FIONA' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez UFC</h2>
                    <p className={styles.peleador__article__text}>Ailín &quot;Fiona&quot; Pérez es una peleadora argentina de MMA con una carreara relativamente nueva en la UFC, en donde lleva apenas 3 peleas y en donde hizó su debut con una derrota contra la suiza <b>Stephanie Egger</b> por sumisión en el segundo asalto. Sin embargo, se recompuso rápido con 2 victorias al hilo, ambas por decisión unánime contra la peleadora estadounidense <b>Ashlee Evans-Smith</b> y contra la luchadora checa <b>Lucie Pudilova</b> a quien venció el 18 de noviembre de 2023.</p>
                    <Image className={styles.peleador__article__image} src={ponzinibbio} alt='La peleadora de UFC argentina Alín Pérez junto al también peleador de UFC argentino Santiago Ponzinibbio' />
                    <p className={styles.peleador__article__text}>Es una de las peleadoras argentinas que compité por UFC, junto con <Link href='/argentinos/santiago-ponzinibbio'>Santiago Ponzinibbio</Link> y <b>Guido Cannetti</b>. Y es la única en UFC femenino junto a <b>Silvana Gómez</b>, quien desde junio de 2022 que no pelea.</p>
                    <p className={styles.peleador__article__text}>En su primer combate ganado contra la estadounidense <b>Ashlee Evans-Smith</b>, Ailín se ganó el apodo de &quot;Ailín Nurmagomedov&quot;, luego de que en su combate completara 10 intentos de derribo de 15 intentados, en un combate que fue ganado con mucha contundencia por parte de la argentina.</p>
                    <Image className={styles.peleador__article__image} src={nurmagomedov} alt='La peleadora de MMA argentina Alín Pérez junto a la peleadora de MMA checa Lucie Pudilova luego de su combate por UFC' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez Record</h2>
                    <p>Ailín Pérez tiene un record de 9-2. Siendo 4 de sus victorias por nocaut, 1 por sumisión y 4 por decisión. Mientras que de sus 2 derrotas, 1 fue por sumisión contra la peleadora suiza <b>Stephanie Egger</b>, y la otra por descalificasión en una pelea por el campeonato <b>Samurai Fight House</b> contra la brasileña Tamires Vidal</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez Historia</h2>
                    <p className={styles.peleador__article__text}>Ailín &quot;Fiona Pérez&quot; comenzó a entrenar deportes de contacto con 11 años y es hoy en día una de las representantes de Argentina que tenemos en <Link href='/promotoras/ufc'>UFC</Link> en donde ya lleva 2 victorias seguidas, sin embargo su camino hasta llegar a la mayor compañía de Artes Marciales Mixtas no fue fácil, como ella mismo lo relata: &quot;Estaba por hacer mi debut profesional en las artes marciales mixtas y decidimos tener un hijo con mi pareja, formar una familia y enfocarnos de lleno en el deporte. Así nació Ades&quot;.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='La peleadora de UFC argentina Alín Pérez en su combate por UFC contra la peleadora de UFC checa Lucie Pudilova' />
                    <p className={styles.peleador__article__text}>Durante su embarazo terminó separandose de su pareja y tuvo que cuidar ella sola de su hijo mientras trabajaba y entrenaba para comenzar su carrera en las MMA. Ailín cuenta como su madre y abuela de su hijo fue de gran ayuda para que nunca se sienta sola, ayudandola en los cuidados de Ades y acompañando en cada paso.</p>
                    <p className={styles.peleador__article__text}>Ailín cuenta como estas situaciones que tuvo que pasar la ayudaron a ser una guerrera, como ella misma se describe, a hacerse fuerte y convertirse en la peleadora que es hoy en día. Su mentalidad hoy en día llega al punto de no esconder su deseo de pelear por el título y ganarlo: &quot;Mi meta es pelear por el título. Sé que hace más de un año y medio que Amanda no lo defiende. Me siento preparada para pelear con ella. Si no acepta la pelea ella tendría que entregar el título porque hace un año y medio que no lo defiende y creo que por reglamento tendría que existir eso. Ganando esta pelea creo que me podrían dar la oportunidad, ella tiene que defender el título o entregarlo&quot;, dijo en la previa de su debut en la UFC.</p>
                    <Image className={styles.peleador__article__image} src={postpelea2} alt='La peleadora de MMA argentina Alín Pérez festejando la victoria contra la estadounidense Ashlee Evans-Smith luego de su combate por UFC' />
                    <p className={styles.peleador__article__text}>Su apodo &quot;Fiona&quot; viene producto del personaje de la película de Sherk, según ella misma explica: &quot;Sí, Fiona, como la princesa de Shrek. Porque en el pesaje soy una y en la pelea me convierto en otra, en una ogra. Soy una princesa, cualquier persona que me vea por la calle ni se imagina que hago artes marciales. De hecho soy una chica muy simpática y muy alegre, pero adentro de la jaula soy lo más sangriento que puede haber, no tengo piedad con los rivales&quot;</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez Última Pelea</h2>
                    <Image className={styles.peleador__article__image} src={postpelea} alt='La peleadora de MMA argentina Alín Pérez junto a la peleadora de MMA checa Lucie Pudilova luego de su combate por UFC' />
                    <p className={styles.peleador__article__text}>La última pelea de Ailín, fue contra la checa <b>Lucie Pudilova</b> el 18 de noviembre de 2023. A aquel combate, la argentina venía de ganar de forma muy dominante por decisión unánime a la estadounidense Ashlee Evans-Smith, mientras que la checa venía de perder por decisión dividida contra la panameña <b>Joselyne Edwards</b>.</p>
                    <p className={styles.peleador__article__text}>Este combate terminó con una victoria por decisión unánime en un combate donde la argentina dominó a la peleadora checa durante los 2 primeros asaltos. Y donde sorprendió y mostró toda su fortaleza al sobrevivir al último asalto a un intento de sumisión por parte de Lucie. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/yKwJCyYTDk4?si=l9OxaBXDqDcBmZlu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}