import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/llegar_a_ufc_5pasos.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Cómo Llegar a la UFC',
    description: ' Descubre los 5 pasos esenciales para llegar a la UFC. Aprende cómo entrenar, construir un récord y captar la atención de los promotores. ¡Comienza tu camino hoy!',
    openGraph: {
        title: 'Cómo Llegar a la UFC',
        description: ' Descubre los 5 pasos esenciales para llegar a la UFC. Aprende cómo entrenar, construir un récord y captar la atención de los promotores. ¡Comienza tu camino hoy!',
        url: 'https://fullmma.org/articulos/llegar-a-la-ufc'
    }
}

export default function LlegarAUFC5Pasos () {
    return(
        <main>
            <ArticleHero title='Descubre Como Llegar a la UFC en 5 pasos' subtitle='Convierte tu sueño en realidad: Sigue estos 5 pasos para llegar a la UFC y ser un peleador profesional' image={hero} date='2025-01-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Cómo llegar a pelear en la UFC</h2>
                    <p>Para llegar a la UFC es necesario seguir el siguiente camino: 1. Comenzar a entrenar artes marciales (cualquiera realmente, aunque hoy en día ya se puede y es necesario entrenar MMA en su conjunto); 2. Comenzar a tener pelear amateur para ir ganando experiencia y comenzar a formar tu carrera como peleador; 3. Dar el salto profesional, competir en algún evento regional pero ya de manera profesionalizada; 4. Saltar a la esfera internacional, compitiendo en compañías más grandes buscando ganar atención para llegar a los ojos de la UFC; 5. Y finalmente captar la atención de la compañía de artes marciales mixtas más grande del mundo mediante el <b>DWCS</b>, el <b>TUF</b> o simplemente firmando un contrato directamente si es que tienes la suficiente suerte.</p>
                    <p>Cabe aclarar que, si bien no existe una fórmula matemática exacta para entrar a la UFC, lo cierto es que desde que comencé este proyecto en FULLMMA, me dediqué a estudiar y a cubrir la carrera e historia de vida de un montón de luchadores. Aprendiendo cómo fue su historia para llegar a la élite de las MMA, siguiendo el recorrido por el que estos luchadores tuvieron que pasar. Y es en base a eso, que pude identificar un patrón en cada uno de estos más de 50 peleadores que me tocó cubrir en este espacio. Por eso hoy, para todos aquellos interesados en iniciar una carrera en las MMA, y que quieren llegar a lo más alto de este deporte, voy a compartirles como entrar a la <Link href='/articulos/ufc'>UFC</Link> en 5 pasos. </p>
                    <h2>1. Aprender y Comenzar a Entrenar Artes Marciales Mixtas</h2>
                    <p>Para comenzar tu camino hacia la UFC, es fundamental buscar un gimnasio especializado en artes marciales mixtas. Asegúrate de que cuente con entrenadores capacitados en disciplinas clave como jiu-jitsu, lucha, muay thai y boxeo, ya que estas son esenciales para convertirte en un peleador completo y aumentar tus posibilidades de pelear en la UFC. Afortunadamente es cada vez más común encontrar este tipo de gimnasios de lo que era hace unos años, por lo que esto no debería ser un problema si vives en una ciudad relativamente grande.</p>
                    <YouTubeEmbed videoid='B0TWsgqlSEk' />
                    <p>Cualquier experiencia en otras disciplinas o artes marciales siempre son útiles, la mayoría de los peleadores de UFC actuales comenzaron su carrera profesional entrenando cualquier otra arte marcial que poco tenía que ver con las MMA en un momento. Es importante, sin embargo, ir complementando tus bases con otras habilidades y disciplinas para poder ser un peleador completo, o que al menos es bastante competente en todas las áreas que involucran una pelea. </p>
                    <p>También es de suma importancia complementar el entrenamiento de artes marciales con entrenamiento físico. Mejorar tanto en tu fuerza, resistencia y flexibilidad, va a ser de mucha ayuda a la hora de competir, por lo que deberías trabajar para tener la menor cantidad de puntos débiles posibles. </p>
                    <h2>2. Construir una Carrera Amateur </h2>
                    <p>Una vez que lleves un tiempo entrenando en el gimnasio, puedes comenzar a construir tu carrera amateur, siempre hablándolo con tu coach y tu equipo, haciéndolo en el momento en que ambos se sientan listos. </p>
                    <p>De esta manera puedes comenzar a competir en eventos regionales y torneos locales, acumulando experiencia y construyendo un historial que te acerque al objetivo final de llegar a la UFC como peleador profesional, experimentando e implementando todo lo aprendido hasta este momento. </p>
                    <p>Esta también puede ser una buena oportunidad para que compruebes que tan bueno eres realmente, ya que, y esto es una opinión personal, el daño físico que se puede sufrir en estos deportes no vale la pena si no crees tener el nivel suficiente para llegar a la UFC, por lo que este puede ser el punto bisagra para muchos, donde deciden si van a continuar intentando volverse profesionales, o por el contrario si lo van a tomar como un hobby más, o simplemente abandonarlo por completo. </p>
                    <h2>3. Competir Profesionalmente</h2>
                    <p>Una vez que lleves la suficiente cantidad de peleas amateur, y ya te sientas cómodo para dar el salto al mundo profesional, es momento de hacerlo. Intenta contactar con compañías de MMA en tu país y da lo mejor que tengas para tener un récord lo más atractivo posible. Tampoco te desanimes si tu inicio profesional no es el más contundente del mundo y no consigues muchas victorias al inicio, recuerda que campeones mundiales de UFC como <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, inició su carrera con un récord de 3-3 en sus primeras 6 peleas, hasta que fue capaz de ganar de manera más regular, acumulando un total de 11 victorias consecutivas. También existen casos como el de <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, quien perdió su primer combate profesional, y que en sus primeras 3 peleas obtuvo un récord negativo de 1-2, sin embargo, hoy en día es campeón mundial de la UFC y va camino a convertirse en uno de los mejores de la historia en su división.</p>
                    <YouTubeEmbed videoid='GOJwZpXEAUs' />
                    <p>También tengo que ser completamente sincero: si estás en Latinoamérica o en España, es más difícil convertirse en profesional, aunque esto pueda ir cambiando con el paso del tiempo y con una creciente popularidad (especialmente desde la irrupción de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> y de diferentes luchadores latinos), lo más probable es que tengas que tomar decisiones difíciles y arriesgadas, como irte a vivir a Brasil o México, que son países donde este deporte está más desarrollado y por lo tanto cuentan con una mayor cantidad de promotoras dispuestas a contratar peleadores, o directamente a Estados Unidos si te es posible. Muchos de los peleadores en la UFC que hoy admiramos, tuvieron que realizar este tipo de movimientos para captar la atención de la UFC. </p>
                    <h2>4. Hacerse Visible y Entrar al Plano Internacional en las MMA</h2>
                    <p>Como dije anteriormente, es posible que debas abandonar tu país natal en busca de mejores oportunidades, firmando con compañías más importantes como PFL, ONE Championship, LFA, Cage Warriors, etc.</p>
                    <p>Tampoco deberías desaprovechar herramientas con las que contamos hoy en día como lo son las redes sociales. Intenta utilizarlas como plataformas para promocionar tus propias peleas, para darte a conocer e intenta llamar la atención lo más posible, crea tu marca personal, véndete al público y aprovecha cualquier oportunidad mediática para darte a conocer. Contar con una base amplia de seguidores, no sólo hará que haya más ojos puestos en ti, haciendo que fichar por la UFC sea aún más posible, sino que además en muchos casos, será sinónimo de una mejor compensación monetaria. </p>
                    <p>Además, contar con un manager y con contactos en el mundo de las artes marciales mixtas, incrementará tus oportunidades de llegar lejos en este mundo. </p>
                    <h2>5. Llamar la Atención de la UFC</h2>
                    <p>Si ya eres un peleador con un respetable récord a sus espaldas, que ha vencido a varios rivales y ha peleado en promotoras y compañías respetables, intenta ser proactivo, busca tus propias oportunidades. Intenta participar del programa <b>“Dana White’s contender Series”</b>, intenta participar del reality de televisión <b>“The Ultimate Fighter”</b>, asiste a las pruebas abiertas que la UFC ocasionalmente realizar, en busca de peleadores que quieran demostrar su talento. En <Link href='/articulos/requisitos-para-entrar-a-ufc'>Este Artículo</Link> te hablamos y detallamos más sobre todas las formas en las que la UFC busca y ficha peleadores, por lo que puedes echarle un ojo para ver como llamar su atención. </p>
                    <p>Por último, me queda por compartirte el consejo que el ex peleador y actual comentarista de la UFC les da a los luchadores que quieren entrar a la compañía: Estate siempre listo, si hay algo que le gusta a la UFC y que siempre será recompensado, es que los peleadores estén listos y preparados para pelear en cualquier momento. El hecho de que estés dispuesto a entrar a un octágono, dar el peso y pelear con quien sea, te va a poner en una buena consideración y ya hemos visto que es una actitud que la compañía siempre recompensa, por mucho que después pierdas el combate, la actitud de estar dispuesto a pelear cuando sea con quien sea es lo que la UFC valora y recompensa.  </p>
                    <YouTubeEmbed videoid='L8FHQp1MaGY' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}