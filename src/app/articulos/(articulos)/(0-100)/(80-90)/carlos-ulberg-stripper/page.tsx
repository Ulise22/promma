import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/carlos_ulberg-stripper.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: '¿Era Carlos Ulberg Stripper?',
    description: '¿Carlos Ulberg fue stripper? El campeón de UFC revela su pasado en ladies nights, modelaje y televisión. La historia completa de su camino al título.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcarlos_ulberg-stripper.a5701302.webp&w=828&q=65',
        title: '¿Era Carlos Ulberg Stripper?',
        description: '¿Carlos Ulberg fue stripper? El campeón de UFC revela su pasado en ladies nights, modelaje y televisión. La historia completa de su camino al título.',
        url: 'https://fullmma.org/articulos/carlos-ulberg-stripper'
    }
}

export default function CarlosUlbergStripper () {
    return(
        <main>
            <ArticleHero title='¿Era Carlos Ulberg Stripper?' subtitle='Carlos Ulberg: De &quot;Ladies Night&quot; a campeón de UFC y el rumor de su pasado como stripper' image={hero} date='2026-04-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>¿Era <Link href='/peleadores/carlos-ulberg'>Carlos Ulberg</Link> Stripper? La respuesta corta es que no. La respuesta larga es que antes de ser un peleador profesional tuvo una larga carrera como Ladies Night, haciendo trabajos que como mínimo se le aproximan bastante, que incluían fiestas nocturnas, billboards, eventos para mujeres y hasta modelaje, pero que, como el mismo Ulberg ha aclarado, nunca trabajó exactamente de stripper en un club tradicional. Su trabajo era más el de un host, que con su presencia debía ser un imán para el público femenino y de esa manera generarle ganancias al club. </p>
                    <p>Toda la historia del actual campeón de peso semipesado antes de ser un peleador profesional es bastante interesante e inusual para un peleador de su talla, ya que no proviene del lugar que uno esperaría de un luchador de MMA. Naciendo el 17 de noviembre de 1990 en Auckland, Nueva Zelanda, pasó su infancia por decenas de familia de acogida, en el sur de Auckland, una zona conocida por sus complicaciones sociales. Es de ascendencia Samoana, Maorí y alemana, hijo de un boxeador olímpico por Samoa. Encontró en el rugby una salida de todos los problemas que enfrentó durante la infancia, siendo bastante bueno en ello, llegando a jugar a nivel semi-profesional representando a Counties-Manukau. En este deporte encontró la disciplina que en el futuro le haría grande, pero también le mostró que le faltaba algo que a todos siempren nos viene bien: dinero extra. </p>
                    <p>Es acá cuando comienza la etapa del <b>&quot;Carlos Ulberg Stripper&quot;</b> que tantos memes ha generado, y que tanto ha dado para hablar. Durante una conferencia de prensa en 2022, él mismo explicó el origen de su primer apodo &quot;Ladies Night&quot;:</p>
                    <p><b>&quot;Viajaba por Australia y Nueva Zelanda haciendo de ladies night y strip, basicamente. Era jugador de rugby y necesitaba dinero extra. Me ponían en billboards, viajaba, festejaba y cobraba bien. Era joven y me divertía, hasta que me dí cuenta que me estaba volviendo bueno para pelear, así que dejé eso bastante rápido&quot;.</b></p>
                    <YouTubeEmbed videoid='2JSTj3RIq1Q' />
                    <p>Luego comparó su trabajo con el show australiano <b>Thunder From Down Under</b>, un espectaculo de entretenimiento masculino. En sí era un mix de baile, carisma y presencia física que atraía a multitud de mujeres. Los promotores lo usaban como gancho para atraer mujeres, que estas a su vez atraían a otros hombres. Esto le permitió ganar bien, vivir de noche y disfrutar de la fiesta. </p>
                    <p>Sin embargo, en una conferencia de prensa previa a su pelea con el polaco <b>Jan Blachowickz</b> en marzo de 2025, Carlos ULberg aclaró el rumor respecto a su trabajo como stripper de manera contundente: </p>
                    <p><b>&quot;Para que quede claro, yo no era stripper. Era más bien host de fiestas, atrayendo mujeres a los clubes. Usaba mi apariencia para beneficiar al lugar. Las mujeres iban y los hombres las seguían&quot;. </b> Por lo que no era un bailarín erótico a tiempo completo en un club fijo, sino que era un promotor y animador que se movía en diferentes eventos de mujeres.</p>
                    <YouTubeEmbed videoid='HVk_5AIrC4s' />
                    <p>Al mismo tiempo que tenía este trabajo, además de mantener su carrera deportiva en rugby, a Carlos le salió una nueva oportunidad que aprovechó, desarrollando una carrera como modelo part-time, llegando a recibir ofertas importantes. Su físico imponentes de 1,93 m era lo que le permitía destacar como una figura publicitaria. Aún así, nunca priorizo esta carrera por encima de las peleas, que era donde estaba su verdadero sueño, en ser un peleador profesional. </p>
                    <p>Finalmente, para terminar la etapa de <b>&quot;Carlos Ulberg Striper&quot;</b>, o de <b>&quot;Ladies Night&quot;</b>, en el 2018 participó en <b>Game of Bros</b>, un show de televisión neozelandés similar a <b>The Bachelor</b>, pero con formato de competencia entre hombre. Su carisma llamó la atención de ejecutivos televisivos, quienes le ofrecieron la oportunidad de ser el protagonista de <b>The Bachelor New Zeland</b>, en hasta 2 ocasiones. Sin embargo, Ulberg entendió donde estaban sus prioridad y qué es lo que de verdad quería lograr, aceptar participar de un programa así hubiera significado dejar el entrenamiento durante meses, y eso no era lo suyo, el sabía que estaba hecho para ser un peleador profesional, por lo que, mientras sus compañeros de reality perseguían la fama fácil, él eligió el octágono.</p>
                    <p>El deporte, y especialmente los combates, siempre habían sido su verdadera pasión. Debutó en MMA en el año 2011 con una victoria por KO en el segundo asalto. Se convirtió en un kickboxer profesional, entrenando junto a <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> en el mismo gimnasio, ganó torneos en <b>King in the Ring</b> alcanzando un récord de 19-2 en kickboxing. Luego de peleas aisladas en MMA, en 2020 finalmente hace el salto definitivo a las artes marciales mixtas, siguiendo los pasos de su compañero nigeriano, al participar del <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, donde se ganaría un contrato con la UFC luego de un KO fulminante. </p>
                    <p>Pese a debutar con una derrota en la compañía, se haría una carrera exitosa al acumular una racha de 10 victorias consecutivas, en las que obtuvo varios bonos y nocauts destacados, siendo la última finalmente por el cinturón de peso semipesado, proclamándose campeón indiscutido al noquear en el primer asalto al excampeón <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> este pasado sábado en el <b>UFC 327</b>, en una noche épica donde fue capaz de sobreponerse a una lesión en la rodilla que sufrió durante el mismo combate. </p>
                    <YouTubeEmbed videoid='M-Z7XyM7muM' />
                    <p>¿Cómo pasa alguien de host en clubs de mujeres y modelo a ser campeón mundial en la UFC? Pues Carlos Ulberg es ejemplo de eso, la infancia problemática que sufrió, teniendo que cambiar de hogar constantemente le enseñó la resiliencia; el rugby le dió la disciplina que necesitaba y el físico imponente para brillar después. Es por esto que teniendo a la mano una vida de fiestas, fama y dinero fácil, Ulberg eligió el camino largo, de golpes, dolor, sacrificio y disciplina que hoy en día dieron frutos, teniéndolo como campeón indiscutido de la UFC. </p>
                    <p>Si quieres la respuesta a sobre sí Carlos Ulberg fue un Stripper o no, aquí está la respuesta: no fue stripper a tiempo completo en un club tradicional, pero sí vivió una etapa salvaje de entretenimiento nocturno que le dió buen dinero y le permitió divertirse en la juventud, pero abandonó todo eso por amor al combate. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}