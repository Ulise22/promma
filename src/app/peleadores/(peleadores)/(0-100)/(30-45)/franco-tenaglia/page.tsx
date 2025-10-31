import styles from '@/app/peleadores/components/peleador.module.css'
import tenaglia from '@/assets/peleadores__images/argentinos/franco-tenaglia/franco_tenaglia.png'
import fight from '@/assets/peleadores__images/argentinos/franco-tenaglia/fight.jpg'
import franco from '@/assets/peleadores__images/argentinos/franco-tenaglia/franco-tenaglia.jpg'
import FTenaglia from '@/assets/peleadores__images/argentinos/franco-tenaglia/franco_tenaglia.jpg'
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import Image from 'next/image'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Franco Tenaglia',
    description: 'Franco Tenaglia, conocido como "El Rey de la Calle" nació el 30 de septiembre de 1996 en Buenos Aires, Argentina. Comenzó a entrenar Boxeo y kickboxing con tan solo 11 años, edad en la que ya comenzó a ver MMA en la tele, que llevó a Franco a desde entonces saber que se quería dedicar a esto de forma profesional...',
    openGraph: {
        title: 'Franco Tenaglia',
        description: 'Franco Tenaglia, conocido como "El Rey de la Calle" nació el 30 de septiembre de 1996 en Buenos Aires, Argentina. Comenzó a entrenar Boxeo y kickboxing con tan solo 11 años, edad en la que ya comenzó a ver MMA en la tele, que llevó a Franco a desde entonces saber que se quería dedicar a esto de forma profesional...',
        url: 'https://fullmma.org/peleadores/franco-tenaglia'
    }
}

export default function Tenaglia () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={tenaglia} w={5} l={2} d={0} nombre='Franco Tenaglia' apodo='EL REY DE LA CALLE' categoria='Peso Pluma' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Franco Tenaglia MMA</h2>
                    <p className={styles.peleador__article__text}>Franco Tenaglia, conocido como &quot;El Rey de la Calle&quot; nació el 30 de septiembre de 1996 en Buenos Aires, Argentina. Comenzó a entrenar Boxeo y kickboxing con tan solo 11 años, edad en la que ya comenzó a ver MMA en la tele, que llevó a Franco a desde entonces saber que se quería dedicar a esto de forma profesional. Entrenó desde entonces para lograr su objetivo, y como él mismo cuenta, a los 17 años decidió abandonar la escuela secundaria, porque entre el entrenamiento y los estudios estaba perdiendo tiempo de sueño: &quot;En el colegio me la pasaba durmiendo. Entrenaba boxeo de 18 a 19, y kickboxing de 21 a 23. Me volvía en colectivo y caía tarde a mi casa. Al otro día me iba temprano al colegio. La pasaba mal y me iba peor, porque siempre estaba dormido&quot;. Aunque él sabía que cumplir su sueño en Argentina era bastante difícil, porque en su país los deportes de combate (especialmente las MMA), no son tan populares como en Europa o Estados Unidos, así que es más dificil conseguir sponsors y vías para forjar una carrera desde abajo.</p>
                    <Image className={styles.peleador__article__image} src={fight} alt='Franco Tenaglia peleando en King Of The Streets' />
                    <p className={styles.peleador__article__text}>Fueron por estos motivos que Franco estuvo un año trabajando en actividades ilegales para juntar el dinero necesario e irse del país, apuntando primero a Nueva Zelanda, por su buen nivel de kickboxing y su cercanía con la meca del Muay Thai, Tailandia, donde no lo dejaron entrar debido a la falta de visa y de papeles. Por esto, hubo un cambió de planes y viajó a España con tan sólo 350 euros encima, esto con la idea de terminar de tramitar su ciudadanía italiana y de ahí moverse a otro país como Holanda o Inglaterra.</p>
                    <p className={styles.peleador__article__text}>Al estar en un país extranjero sin los papeles correspondientes, Franco Tenaglia tuvo que rebuscarselas para sobrevivir. En Madrid, conoció a unos galeses en hostel que una noche fueron increpados por un colombiano, el argentino decidió defenderlos y terminó noqueando al atacante. Esto llevó a qe los británicos se amigaran mucho con él y le ofrecieran trabajo como guardaespaldas mientras viajaban por España. Dió la casualidad que justo el padre de uno de ellos era patrocinador de boxeadores, que lo animó a viajar a Gales a practicar <b>Boxeo sin guantes</b>, aunque no de manera profesional ya que no contaba con los papeles necesarios para hacerlo.</p>
                    <Image className={styles.peleador__article__image} src={franco} alt='Franco Tenaglia' />
                    <p className={styles.peleador__article__text}>En este deporte Franco destacó rápidamente, ganando sus 3 primeras peleas por nocaut, todas hechas de manera muy seguida. Aunque esto penaliza mucho el cuerpo, primero por poco tiempo de recuperación que tenía entre peleas, y segundo que al las peleas ser sin guantes lastiman mucho más el cuerpo. Esto lo llevó a practicar MMA, que es un deporte menos destructivo para el cuerpo y porque además le dijeron que ahí tenía una proyección más profesional.</p>
                    <p className={styles.peleador__article__text}>Después de una larga Odisea en la que tuvo que trabajar para mafias, donde tuvo que buscar formas poco legales de ganarse la vida y donde tuvo un largo registro de peleas amateur o ilegales, empezó a hacerse un nombre en los combates profesionales, que comienzan a llevarlo por el buen camino y a alejarlo de lo anterior. Donde ya comenzó a pelear para <b>BKFC</b> que es una promotora legal de peleas sin guantes, donde ganó los 2 enfrentamientos que tuvo, también en la promotora española <b>King Fight League</b>, en la también española <b>WOW</b>, y tiene programada una pelea para la promotora inglesa <b>Cage Warriors</b>.</p>
                    <Image className={styles.peleador__article__image} src={FTenaglia} alt='El peleador argentino de MMA Franco Tenaglia' />
                    <h2 className={styles.peleador__article__title}>Franco Tenaglia Récord</h2>
                    <p className={styles.peleador__article__text}>En cuanto a las MMA, Franco Tenaglia posee un récord profesional de 5-2. Siendo 2 de sus 5 victorias por la vía del nocaut, 3 por la vía de la sumisión y 1 por decisión. Mientras que de sus 2 derrotas, 1 fue por la vía del nocaut y 1 por la vía de la sumisión. </p>
                    <h2 className={styles.peleador__article__title}>Franco Tenaglia Jordi Wild</h2>
                    <p className={styles.peleador__article__text}>Franco Tenaglia tuvo una participación en el evento de MMA español organizado por el reconocido youtuber Jordi Wild. Este combate, como el argentino está acostumbrado fue sin guantes, fue un combate &quot;Bare Knuckle&quot;, que terminó con la victoria de su rival Edye Ruiz por decisión dividida.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/XUbENj1d2s8?si=NUD6JpQLS9naGoL8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Franco Tenaglia King of the Streets</h2>
                    <p className={styles.peleador__article__text}>Franco Tenaglia peleó en el polémico evento de <b>King Of The Streets</b>, quienes en su canal de Youtube tienen más de un millón de seguidores, y que en el video de su pelea acumula también más de un millón de reproducciones. &quot;Son eventos cerrados, de poco público. Va gente de mucho dinero que se emborracha, toma merca y empieza a apostar. Se pelean como perros de batalla. Hice un par de peleas y los chechenos se enamoraron de mí&quot;, contó.</p>
                    <p className={styles.peleador__article__text}>Aquellos combates suelen hacerse en la marginalidad, a los peleadores se los suele llevar al lugar del combate con los ojos vendados y entre otros países se suelen organizar en Polonia, Suecia y Hungría. Franco contó: &quot;Uno de los lugares al que fui era un garaje en el medio de las montañas y había hasta nieve. Los tipos están armados con AK-47, no es ninguna joda. Están todos con máscaras y no es por show. Si se pelean hooligans o barrabravas de la mafia de Polonia contra los de Serbia, si se arma un quilombo en el evento se pueden disparar y apuñalar. Son todos tipos re locos. Entonces, tenés que tener gente que organiza que sea potente. Hay gente que terminaba muy mal. Yo peleé en piso de concreto. Las rejas del octágono son de metal. Podés morder al tipo, meterle los dedos en los ojos: es lo más violento de lo más violento&quot;</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/vRIiHYKgZQY?si=4DrQq-D0TlnnJpYW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}