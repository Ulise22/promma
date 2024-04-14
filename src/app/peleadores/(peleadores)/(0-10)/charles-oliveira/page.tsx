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
                    <p className={styles.peleador__article__text}>Charles Oliveira es actualmente el número #1 de la división de Peso Ligero de la <Link href='/promotoras/ufc'>UFC</Link> y ha sido campeón en una ocación luego de que venciera por TKO al estadounidense <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> en el segundo asalto, por el título vacante de Peso Ligero en UFC 262 luego del retiro de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomédov</Link>. A dicho título lo defendió de forma exitosa 2 veces, contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> y contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>.</p>
                    <Image className={styles.peleador__article__image} src={scream} alt='El peleador brasileño de MMA Charles Oliveira gritando a la cámara de forma eufórica luego de una victoria en un combate de UFC' /> 
                    <p className={styles.peleador__article__text}>Charles Oliveira es un histórico de la UFC, habiendo peleado 32 de sus 44 peleas en la UFC desde hace más de 10 años. Siendo la primera de estas, el 1 de agosto de 2010 contra el Darren Elkins, a quien venció por sumisión a los 41 segundos del primer asalto, desde entonces, Oliveira ha tenido una excelente carrera como profesional en la UFC. </p>
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
                    <p className={styles.peleador__article__text}>Charles Oliveira da Silva, nació el 17 de octubre de 1989 en la ciudad brasileña de Guarujá, ubicada en el estado de São Paulo. Allí, a la edad de 12 años, comenzaría a entrenar jiu-jitsu brasileño, deporte en el que destacaría ganando su primer título como cinturón blanco en 2003. A su vez, esta arte marcial, temrinaría por abrirle las puertas hacia las MMA.</p>
                    <p className={styles.peleador__article__text}>Comenzó a pelear en MMA de manera profesional en 2008, cuando compitió en promotoras regionales de Brasil, hasta que en agosto de 2010 hizó su debut en UFC, ganando por sumisión en el primer asalto contra el estadounidense Darren Elkins. Desde entonces compite en dicha compañía hasta el día de hoy, llegando incluso a ser campeón en mayo de 2019. </p>
                    <Image className={styles.peleador__article__image} src={interview} alt='Charles Oliveria dando una entrevista con una periodista de UFC' />
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Récord</h2>
                    <p className={styles.peleador__article__text}>Charles Oliveira ostenta un récord de 34-10 con una pelea sin resultado. De sus 34 victorias, 10 fueron por nocaut, 21 por sumisión (que con 20 siendo en la UFC, lo convierte en el peleador con más sumisiones en la historia de toda la compañía), y 3 fueron por decisión. Mientras que de sus 10 derrotas, 4 fueron por nocaut, 4 por sumisión y 2 por decisión. Además tiene una pelea por UFC con NIk Lentz, que originalmente había ganado Charles Oliveira por sumisión, pero dicha victoria fue anulada por un rodillazo ilegal del brasileño, lo que dejó el combate sin un resultado oficial.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}