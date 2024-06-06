import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import oliveira from '@/assets/peleadores__images/0-10/charles-oliveira/oliveira.png'
import face from '@/assets/peleadores__images/0-10/charles-oliveira/oliveira-face.jpg'
import interview from '@/assets/peleadores__images/0-10/charles-oliveira/charles-oliveira.jpg'
import scream from '@/assets/peleadores__images/0-10/charles-oliveira/charles_oliveira.jpg'
import back from '@/assets/peleadores__images/0-10/charles-oliveira/charles__oliveira.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Oliveira () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={oliveira} w={34} l={10} d={0} nombre='Charles Oliveira' apodo='DO BRONXS' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira UFC</h2>
                    <p className={styles.peleador__article__text}>Charles Oliveira es actualmente el número #1 de la división de Peso Ligero de la <Link href='/articulos/ufc'>UFC</Link> y ha sido campeón en una ocación luego de que venciera por TKO al estadounidense <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> en el segundo asalto, por el título vacante de Peso Ligero en UFC 262 luego del retiro de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomédov</Link>. A dicho título lo defendió de forma exitosa 2 veces, contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> y contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>.</p>
                    <Image className={styles.peleador__article__image} src={scream} alt='El peleador brasileño de MMA Charles Oliveira gritando a la cámara de forma eufórica luego de una victoria en un combate de UFC' /> 
                    <p className={styles.peleador__article__text}>Charles Oliveira es un histórico de la UFC, habiendo peleado 32 de sus 44 peleas en la UFC desde hace más de 10 años. Siendo la primera de estas, el 1 de agosto de 2010 contra el Darren Elkins, a quien venció por sumisión a los 41 segundos del primer asalto, desde entonces, Oliveira ha tenido una excelente carrera como profesional en la UFC. </p>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Récord</h2>
                    <p className={styles.peleador__article__text}>Charles Oliveira ostenta un récord de 34-10 con una pelea sin resultado. De sus 34 victorias, 10 fueron por nocaut, 21 por sumisión (que con 20 siendo en la UFC, lo convierte en el peleador con más sumisiones en la historia de toda la compañía), y 3 fueron por decisión. Mientras que de sus 10 derrotas, 4 fueron por nocaut, 4 por sumisión y 2 por decisión. Además tiene una pelea por UFC con NIk Lentz, que originalmente había ganado Charles Oliveira por sumisión, pero dicha victoria fue anulada por un rodillazo ilegal del brasileño, lo que dejó el combate sin un resultado oficial.</p>
                    <h2 className={styles.peleador__article__title}>Oliveira Jiu Jitsu</h2>
                    <p className={styles.peleador__article__text}>Charles Oliveira es cinturón negro de tercer grado en Jiu-Jitsu brasileño. Y a lo largo de su carrera ha demostrado con creces lo bueno que es en este arte marcial, dado que de sus 34 victorias, 21 las consiguió por la sumisión, <b>siendo el peleador que más combates ha ganado por sumisión en la historia de la UFC</b>. Aunque como artista marcial no sólo destaca su jiu-jitsu, sino que también es muy buen peleador de Muay Thai.</p>
                    <p className={styles.peleador__article__text}>Además, en su juventud ha ganado diversos premios y logros como peleador de Jiu Jitsu, entre ellos: </p>
                    <ul>
                        <li className={styles.peleador__article__text}>Campeonato sudamericano de CBJJE (2008 cinturón morado)</li>
                        <li className={styles.peleador__article__text}>Campeonato Mundial de CBJJE (2007 cinturón azul)</li>
                        <li className={styles.peleador__article__text}>Campeonato Estatal de São Paulo de FPJJ  (2007 cinturón azul)</li>
                        <li className={styles.peleador__article__text}>Segundo lugar en la Copa Mundial de CBJJE (2008 cinturón morado)</li>
                    </ul>
                    <Image className={styles.peleador__article__image} src={back} alt='Charles Oliveira sentado en una de las paredes del octagono con los brazos extendidos celebrando su victoria luego de un combate de UFC' />
                    <h2 className={styles.peleador__article__title}>Charles Oliveira vs Islam Makhachev</h2>
                    <p className={styles.peleador__article__text}>Charles Oliveira e <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> se enfrentaron, luego de que Oliveira haya obtenido el cinturón de Peso Ligero de UFC al vencer a <Link href='/peleadores/michael-chandler'><b>Michael Chandler</b></Link>, y luego de que tuviera 2 defensas exitosas por el título contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> y contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>.</p>
                    <p className={styles.peleador__article__text}>El combate generaba mucha expectativa, puesto que ambos venían de rachas buenísimas de victorias, siendo que Charles Oliveira venía de 11 victorias consecutivas, mientras que Islam Makhachev venía de una racha de 10 victorias consecutivas, siendo la última por TKO a los 3 minutos del primer asalto contra el estadounidense <b>Bobby Green</b>.</p>
                    <p className={styles.peleador__article__text}>El combate finalmente se terminó decantando con una victoria a favor del ruso Makhachev, quien con una sumisión en el segundo asalto se llevó la pelea, y el premio a la actuación de la noche. Sin embargo, estaba planeada una revancha entre estos 2 para el UFC 294 en Abu Dhabi para el 21 de octubre de 2023, revancha que producto de una lesión de Charles Oliveira no se terminó dando. Aunque Dana White ha comentado en una conferencia de prensa que tiene la intención de que estos luchadores vuelvan a pelear.</p>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Miopía</h2>
                    <p className={styles.peleador__article__text}>En diversas ocaciones se puede ver a Charles Oliveira usar unos lentes gruesos cuando está fuera del octagono. Esto se debe a que, como el mismo luchador ha confesado, sólo puede ver al rededor del 50% sin los lentes, es decir que tiene la visión reducida a la mitad cuando no usa sus lentes. El mismo peleado ha bromeado al respecto sobre que tan mala es su visión, &quot;Veo tres personas al mismo tiempo (cuando pelea), pero sé que si le pego al del medio esta bien, pienso&quot;, bromeó.</p>
                    <p className={styles.peleador__article__text}>Aunque en una entrevista en 2022, dijo que sus ojos estaban &quot;100% perfectos&quot;, luego de haberse sometido a una cirugía refractiva.</p>
                    <Image className={styles.peleador__article__image} src={face} alt='Charles Oliveira de perfil con sus lentes para la miopía' />
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Biografía</h2>
                    <p className={styles.peleador__article__text}>Charles Oliveira da Silva, nació el 17 de octubre de 1989 en la ciudad brasileña de Guarujá, ubicada en el estado de São Paulo. Allí, a la edad de 12 años, comenzaría a entrenar jiu-jitsu brasileño, deporte en el que destacaría ganando su primer título como cinturón blanco en 2003. A su vez, esta arte marcial, terminaría por abrirle las puertas hacia las MMA.</p>
                    <p className={styles.peleador__article__text}>Charles Oliveira hizo su debut como profesional en las MMA el 15 de marzo de 2008, ese día tendría 3 enfrentamientos por <b>el torneo del Grand Prix de Peso Wélter de PFC</b>. Esa noche derrotaría a su primer rival <b>Jackson Pontes</b> por sumisión en el primer asalto, para avanzar a las semifinales del torneo, donde enfrentaría a <b>Viscardi Andrade</b>, a quien derrotaría por TKO en el primer asalto. Finalmente se enfrentaría en la última instancia del torneo a <b>Diego Braga</b>, para terminar ganando el torneo en su primer día como profesional.</p>
                    <p className={styles.peleador__article__text}>Unos 2 años después de aquel debut, firmaría por la UFC, a la que llegaría con un récord invicto de 12-0. Su debut en la compañía lo haría el 1 de agosto de 2010 para enfrentar al estadounidense <b>Darren Elkins</b>, a quien lograría someter a los 41 segundos del combate, ganando el ya extinto bono a la Sumisión de la Noche.</p>
                    <p className={styles.peleador__article__text}>Su invicto lo perdería cuando se viera cara a cara contra <Link href='/articulos/jim-miller-historia'>Jim Miller</Link>, quien sometió a nuestro protagonista en el primer asalto, cortando con la racha de 14 victorias consecutivas. Contando esa derrota, Oliveira pasaría 3 combates sin ver la victoria, perdiendo 2 veces y obteniendo una pelea sin resultado por un rodillazo ilegal. Por lo que entre los años 2012 y 2016 comenzaría a pelear en la división de Peso pluma, donde enfrentaría a históricos de la UFC, como a <b>Anthony Pettis</b>, quien lo derrotaría por sumisión, <b>Frankie Edgard</b>, o el excampeón de la división <Link href='/peleadores/max-holloway'>Max Holloway</Link>, quien vencería a nuestro protagonista por sumisión.</p>
                    <Image className={styles.peleador__article__image} src={interview} alt='Charles Oliveria dando una entrevista con una periodista de UFC' />
                    <p className={styles.peleador__article__text}>Finalmente, luego de tener problemas para cortar peso en esta división, fallando en hacerlo repetidas veces, decide volver a competir en la división de peso ligero. A la que volvería para enfrentar a <b>Clay Guida</b> en junio de 2018, sometiendo a su rival en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>La decisión de volver a peso ligero, sería sin dudas la mejor de su carrera, dado que desde su vuelta, acumularía una racha de 8 victorias consecutivas, que le permitirían enfrentar a <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> para disputar el campeonato vacante de peso ligero de la UFC. Este combate lograría llevarselo por la vía del nocaut en el segundo asalto, ganando además el premio a la actuación de la noche. </p>
                    <p className={styles.peleador__article__text}>Su primera defensa del título la haría el 11 de diciembre de 2021, enfrentando al histórico <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, a quien lograría someter en el tercer asalto, ganando además, el premio a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/79fuJ72grPA?si=PqDrf21k8VIlj1Le" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su segunda defensa estaba programada para ser contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>. En este enfrentamiento, Charles Oliveira no dió el peso, por lo que fue despojado del título, lo que significaba que para ese combate solo Gaethje era elegible para ganarlo. Aún así, Oliveira fue capaz de finalizar la pelea en el primer asalto, sometiendo al estadounidense en el con un mataleón.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/5sX_HzPNPoM?si=wd-_EnhTAXqRGtYO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>A Charles Oliveira se le dió la oportunidad de recuperar el título que había quedado vacante, enfrentando al oriundo de Daguestán, <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>. Sin embargo, para desgracia de nuestro protagonista, el ruso fue capaz de cortar la racha de 11 victorias consecutivas que había alcanzado, finalizando la pelea con una sumisión en el segundo asalto, para alzarse como nuevo campeón.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/34Tk9Z3AOvo?si=pBtaPkUQVwuxC2YZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de aquella derrota, el brasileño volvería a pelear en junio de 2023, para enfrentar al estadounidense <b>Beneil Dariush</b>, a quien lograría vencer por TKO en el primer asalto, ganando el bono a la actuación de la noche, y rompiendo el récord por la mayor cantidad de bonos post-pelea en la historia de la UFC, con 19.</p>
                    <p className={styles.peleador__article__text}>El 13 de abril de 2024, participaría del <Link href='/noticias/ufc300-main-event'>UFC 300</Link> para enfrentar al armenio <b>Arman Tsarukyan</b>, en lo que sería una eliminatoria por el título. Sin embargo, luego de 3 asaltos, la pelea se la llevó su rival por decisión dividida.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}