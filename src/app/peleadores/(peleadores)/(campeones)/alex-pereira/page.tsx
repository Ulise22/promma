import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pereira from '@/assets/peleadores__images/0-100/0-10/alex-pereira/pereira.png'
import alexPereira from '@/assets/peleadores__images/0-100/0-10/alex-pereira/pereira.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Alex Pereira',
    description: 'Alex Pereira es un luchador de MMA brasileño, ex peleador de kickboxing, que comite en la UFC desde el 6 de noviembre de 2021, cuando debutó contra el griego Andreas Michailidis por UFC 268, a quien derrotó por TKO a los 18 segundos del segundo asalto, lo que ya en su primer combate le valió para cobrar el bono a la Actuación de la Noche. Desde entonces fue capaz de ser campeón de Peso Medio, al derrotar a Israel Adensanya por TKO en el 5to asalto y para ser campeón de peso semipesado, luego de que derrotara a JIŘÍ PROCHÁZKA por TKO en el segundo asalto.',
    openGraph: {
        title: 'Alex Pereira',
        description: 'Alex Pereira es un luchador de MMA brasileño, ex peleador de kickboxing, que comite en la UFC desde el 6 de noviembre de 2021, cuando debutó contra el griego Andreas Michailidis por UFC 268, a quien derrotó por TKO a los 18 segundos del segundo asalto, lo que ya en su primer combate le valió para cobrar el bono a la Actuación de la Noche. Desde entonces fue capaz de ser campeón de Peso Medio, al derrotar a Israel Adensanya por TKO en el 5to asalto y para ser campeón de peso semipesado, luego de que derrotara a JIŘÍ PROCHÁZKA por TKO en el segundo asalto.',
        url: 'https://fullmma.org/peleadores/alex-pereira'
    }
}

export default function AlexPereira () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pereira} w={12} l={2} d={0} nombre='Alex Pereira' apodo='POATAN' categoria='Peso Semipesado' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira UFC</h2>
                    <p className={styles.peleador__article__text}>Alex Pereira es un luchador de MMA brasileño, ex campeón de kickboxing, que compite en la división de peso semipesado de la <Link href='/articulos/ufc'>UFC</Link> desde el 6 de noviembre de 2021, cuando debutó contra el griego Andreas Michailidis por UFC 268, a quien derrotó por TKO a los 18 segundos del segundo asalto, lo que ya en su primer combate le valió para cobrar el bono a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>Obviamente al haber sido un campeón durante muchos años de Kickboxing, este arte marcial es el que marca especialmente su estilo de pelea. Pese a no saber hablar inglés, y ser un hombre de pocas palabras, goza de cierto carisma y de un aura especial que lo hacen destacar por sobre los demás peleadores, siendo una de las mayores estrellas de la UFC, esto sumado a que tiene un poder de KO pocas veces visto, lo convierte en uno de los peleadores favoritos de los fanáticos. </p>
                    <p className={styles.peleador__article__text}>Desde su arribo a la compañía fue capaz de ser campeón de Peso Medio, al derrotar a <Link href='/peleadores/israel-adesanya'>Israel Adensanya</Link> por TKO en el 5to asalto en noviembre de 2022, y de ser campeón de peso semipesado, luego de que derrotara a <Link href='/peleadores/jiri-prochazka'>Jiří Procházka</Link> por TKO en el segundo asalto en noviembre de 2023.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/9emd9w2KGy8?si=Plhh7A_N6ff7fN_u" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Récord</h2>
                    <p className={styles.peleador__article__text}>En MMA, Alex Pereira tiene un record de 12-2 que le valió para ser campeón de 2 divisiones diferentes. 10 de sus 12 victorias fueron por la vía del nocaut, mientras que las otras 2 fueron por decisión. De sus 2 derrotas, 1 fue por la vía del nocaut y la otra por sumisión.</p>
                    <p className={styles.peleador__article__text}>Mientras que su record en <b>Kickboxing</b> es de 33-7. Siendo 21 de sus 33 victorias por nocaut y las otras 12 por decisión. Mientras que de sus 7 derrotas, 2 fueron por nocaut y las otras 5 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Historia</h2>
                    <p className={styles.peleador__article__text}>Alex Sandro Silva Pereira nació el 7 de julio de 1987 en el municipio Brasileño del Estado de São Paulo, São Bernardo do Campo. Creció en una favela y tuvo que dejar la escuela secundaria para empezar a trabajar en una tienda de neumáticos a los 12 años de edad. Influenciado por sus amigos, Alex Pereira comenzó a beber y esto lo llevó a convertirse en un alcohólico.</p>
                    <p className={styles.peleador__article__text}>Con el objetivo de dejar atrás su adicción, Alex comenzó a entrenar Kickboxing en 2009. Él mismo, en un entrevista con <b>MMA Fighting</b>, relata lo siguiente: <b>&quot;Bebía un montón y quería alejarme de esta adicción que es tan mala para la sociedad. Pensé &apos;quiero comenzar a practicar deportes porque los deportes salvan a la gente&apos;. Pero no sabía como jugar al fútbol, ya que nunca había hecho nada hasta ese momento, pero como solía pelear mucho cuando era un niño, pensé en hacer deportes de combate&quot;</b>.</p>
                    <Image className={styles.peleador__article__image} src={alexPereira} alt='El campeón de UFC en Peso Medio Alex Pereira, mostrando su cinturpin junto a sus compañeros' />
                    <h3>Alex Pereira Kickboxing</h3>
                    <p className={styles.peleador__article__text}>A los 3 años de comenzar a entrenar, Alex Pereira iniciaría su carrera profesional en este deporte, viéndose obligado a dejar definitivamente atrás al alcohol, con el objetivo de perseguir esto como carrera. De esta forma, realizaría su debut profesional en el mundo del kickboxing el día 31  de marzo de 2012, enfrentando a su compatriota <b>Clei Silva</b>, a quien derrotaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Resumiendo su carrera como peleador de kickboxing de forma bastante acotada, se retiraría el 4 de septiembre de 2021, luego de perder por decisión mayoritaria en su revancha ante le ruso <b>Artem Vakhitov</b>, dejando atrás un récord profesional de 33-7. Durante su exitosa carrera, lograría coronarse como campeón de 2 divisiones en <b>Glory</b>, tanto en la división de peso mediano como en la división de peso semipesado. De sus rivales en su etapa como kickboxer, destacarían el brasileño <b>César Almeida</b>, quien hoy en día es un artista marcial mixto que compite en la UFC, y a quien Alex enfrentó en 3 ocasiones, ganando 2 y perdiendo 1. Y quien más destacaría de todos sus rivales, sería el nigeriano <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, leyenda e histórico peleador de los pesos medianos de la UFC, que durante su étapa como kickboxer, al enfrentar a nuestro protagonista, caería derrotado en las 2 peleas que estos tuvieron, siendo la primera vez por decisión unánime y la segunda por KO, luego de que Pereira fuera capaz de conectar un gancho de izquierda que mandaría a dormir al luchador africano. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/rxokyCnRe78?si=0QzYGhb0jeMJC1FF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Alex Pereira MMA</h3>
                    <p className={styles.peleador__article__text}>Sería el mismo Adesanya el que motivaría al luchador brasileño a intentar pelear en MMA, dado que primero, este se había convertido en un ejemplo a seguir para los profesionales del kickboxing que quieran transicionar a las MMA, dado que en su carrera como artista marcial mixto, había conseguido en convertirse en un campeón absolutamente dominante de la UFC. Y por otro lado, a medida que la carrera de Adesanya despegaba, se comenzaba a hablar del nombre de Alex Pereira, quien había sido (y sigue siendo en el 2024) el único capaz de noquear al campeón en un combate bajo cualquier regla. Hablé más sobre esta historia en el artículo <Link href='/articulos/rivalidad-adesanya-y-pereira'>La rivalidad entre Israel Adesanya y Alex Pereira</Link>.</p>
                    <p className={styles.peleador__article__text}>Alex Pereira ya había tenido 3 combates de MMA en el pasado, entre fines de 2015 y principios de 2016, perdiendo uno por sumisión en el tercer asalto, y ganando los otros 2 por nocaut en la promotora brasileña <b>Jungle Fight</b>. Sin embargo, cuando decidió dar el salto definitivamente, fue a fines de 2020, cuando tendría una pelea en la promotora <b>LFA</b>, en donde enfrentaría y derrotaría al estadounidense <b>Thomas Powell</b> por KO en el primer asalto. De esta forma, con un récord de 3-1 le alcanzaría para entrar a la UFC, en donde debutaría el día 6 de noviembre ante el griego <b>Andreas Michailidis</b>, a quien vencería por TKO en el segundo asalto, ganándose el bono a la actuación de la noche. </p>
                    <p className={styles.peleador__article__text}>Luego de aquel exitoso debut, Alex tendría una pelea con su compatriota <b>Bruno Silva</b>, a quien derrotaría por decisión unánime. Con esta victoria y apenas 2 peleas en la UFC, Alex Pereira ya se pondría a combatir contra un peleador ranqueado, como lo era <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien en ese momento estaba ranqueado #4 y a quien enfrentó el 2 de julio de 2022, logrando noquearlo en el primer asalto y ganándose el bono a la actuación de la noche por su desempeño. </p>
                    <p className={styles.peleador__article__text}>Luego de aquella victoria ante el estadounidense, Alex se ganaría la oportunidad de pelear por el título de peso medio de la UFC, ante el campeón de la división que en aquel momento no era nadie menos que <b>Israel Adesanya</b>, un viejo conocido a quien ya había derrotado en 2 ocasiones peleando en kickboxing. La pelea se celebraría el día 12 de noviembre de 2022 en el UFC 281, y llegaría hasta el quinto asalto, cuando el brasileño sería capaz de conectar una impresionante combinación de golpes que le darían la victoria por TKO en último asalto, ganando el bono a la actuación de la noche por su papel en la pelea, y convirtiéndose en el nuevo campeón de la división de peso medio de la UFC, venciendo a su viejo rival. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/l8s2fsfIpUA?si=FJPNtx_nEgFvEqHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Debido al largo recorrido que había tenido como campeón el nigeriano, con 5 defensas del título consecutivas, le otorgaron la revancha inmediata ante nuestro protagonista 6 meses después. Por lo que el <b>UFC 287: Pereira vs. Adesanya 2</b> se realizaría el 8 de abril de 2023, en una pelea que ganaría el africano por KO en el segundo asalto, provocando la primera derrota de Alex Pereira en la UFC y la segunda de su carrera en las MMA, perdiendo su cinturón en la única pelea en la que no pudo derrotar a Adesanya. </p>
                    <h3>Alex Pereira en la División de los Semipesados</h3>
                    <p className={styles.peleador__article__text}>Luego de esta derrota, Alex Pereira decidió que lo mejor para él era subir de división para comenzar a competir en la categoría de peso semipesado, debido a que como él explicaría en el futuro, los cortes de peso se le estaban complicando y le estaban afectando físicamente. En este sentido, perder el cinturón le sirvió al brasileño, dado que ya no cargaba con la presión de tener que seguir compitiendo en la misma categoría de peso para defender el título, y podía moverse libremente a una categoría mayor. </p>
                    <p className={styles.peleador__article__text}>Su primera pelea aquí sería apenas 3 meses después de su combate con Adesanya, enfrentando al excampeón de la categoría <b>Jan Blachowicz</b>, en el UFC 291 el 29 de julio de 2023, obteniendo una victoria por decisión dividida luego de 3 asaltos. Luego de esta primer victoria, tan sólo unos pocos meses después, se ganaría la oportunidad de volver a competir en una pelea títular, para disputar el título vacante de peso semipesado ante el excampeón de la división <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, el día 11 de noviembre de 2023 en el UFC 295, consiguiendo noquear a su rival en el segundo asalto, ganando un nuevo bono a la actuación de la noche, convirtiéndose en el campeón de la división de semipesados, y metiéndose en el selecto grupo de <Link href='/articulos/dobles-campeones-de-ufc'>dobles campeones de la UFC</Link>.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/vwkWxubVSCk?si=vhHTimelkS-77aen" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de alcanzado tal hito, Alex Pereira lograría ir afianzando su estatus de estrella de la compañía, siendo él quien encabezaría el histórico evento <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, donde se enfrentaría al estadounidense y excampeón de la división <b>Jamahal Hill</b> para realizar su primera defensa del título. Pereira lograría cerrar la histórica noche con un desempeño igualmente histórico, siendo capaz de noquear en el primer asalto a su oponente para retener el cinturón de campeón de forma contundente. </p>
                    <p className={styles.peleador__article__text}>Apenas 2 meses después de su último combate, estaba programado el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, en una cartelera que debía ser encabezada por <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link> y <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, sin embargo esta pelea terminó dándose de baja, y Alex Pereira aceptaría encabezar el evento en corto aviso. Siendo más o menos a partir de este momento que el brasileño empezó a ser visto como el luchador que &quot;le salva las papas a la UFC&quot; cada vez que necesitan un evento estelar y no lo consiguen, dado que esta no era la primera vez que nuestro protagonista salía en rescate de la UFC, ya que había sucedido practicamente lo mismo en el UFC 295 que debía ser encabezado por <Link href='/peleadores/jon-jones'>Jon Jones</Link> y <b>Stipe Miocic</b>, y en el UFC 300, donde estuvieron bastante tiempo buscando una estelar atractiva, terminando por inclinarse por la pelea de Alex Pereira y Jiri Prochazka.</p>
                    <p className={styles.peleador__article__text}>El caso es que el 29 de junio de 2024, en el UFC 303, Alex Pereira se enfrentaría en una revancha a Jiri Prochazka, en lo que sería su segunda defensa del título. Aquella pelea terminaría nuevamente con una victoria por TKO a favor del brasileño, quien en el segundo asalto sería capaz de conectar una espectacular patada a la cabeza de su rival que lo tumbaría al suelo. De esta forma Alex retendría su cinturón y se ganaría un nuevo bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/xhKMwGozbic?si=uUJugEw_nfO2qQZ2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Alex Pereira aceptaría defender por tercera vez su cinturón en el año, encabezando el <Link href='/covertura-ufc/ufc307'>UFC 307</Link> en Salt Lake City ante el #8 de la división <b>Khalil Rountree Jr.</b> (de quien hablamos <Link href='/noticias/khalil-rountree'>acá</Link>), el 5 de octubre de 2024. </p>
                    <p className={styles.peleador__article__text}>Aquella noche seríamos testigos de un tremendo espectáculo, dado que el rival de Pereira dió más pelea de la que muchos imaginaban, llegando a poner en serios aprietos a nuestro protagonista, a quien fue capaz de ganarle los 2 primeros asaltos, conectando muy buenos golpes que tranquilamente podrían haberlo noqueado. Sin embargo, el brasileño supo mantener la calma sin desesperarse, y para el cuarto asalto, cuando Rountree ya estaba más cansado, es que Alex supo conectar más y mejores golpes, dejando muy lastimado a su rival, hasta que finalmente los golpes al cuerpo de Pereira fueron los que derribaron a su rival, llevando al árbitro a separarlos y terminar la pelea, dando como ganador a nuestro protagonista que defendió exitosamente su cinturón por tercer ocasión consecutiva, rompiendo un récord, al ser quien menos días necesitó para defender en 3 oportunidades, habiéndolo hecho en un plazo de 175 días. Además, por la pelea que tanto él como su rival realizaron, se ganó el bono a La Pelea de la Noche.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}