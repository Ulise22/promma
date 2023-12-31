import PeleadoresHero from '../../components/PeleadoresHero'
import gaethje from '@/assets/peleadores__images/justin-gaethje/gaethje.png'
import careo from '@/assets/peleadores__images/justin-gaethje/gaethje-careo.jpg'
import sparring from '@/assets/peleadores__images/justin-gaethje/gaethje_sparring.jpg'
import sparring2 from '@/assets/peleadores__images/justin-gaethje/gaethje_sparring2.jpg'
import friend from '@/assets/peleadores__images/justin-gaethje/justin-gaethje.jpg'
import styles from '../../components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Gaethje () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={gaethje} w={25} l={4} d={0} nombre='Justin Gaethje' apodo='THE HIGHLIGHT' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Gaethje UFC</h2>
                    <p className={styles.peleador__article__text}>Justin Gaethje actualmente se encuentra ranqueado número #2 en la división de Peso Ligero de UFC donde pelea desde 2017, habiendo hecho su debut en The Ultimate Fighter contra Michael Johnson el 7 de julio en Las Vegas, ganando por TKO en el segundo asalto, y habiendo hecho su debut en un evento de UFC el 2 de diciembre en UFC 218 contra <b>Eddie Alvarez</b>, quien lo venció por TKO en el tercer asalto.</p>
                    <p className={styles.peleador__article__text}>Justing Gaethje fue Campeón Interino de Peso Ligero de UFC, luego de derrotar por TKO en el quinto asalto a <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, pero que después perdería al luchar contra un invicto <b>Khabib Nurmagomedov</b>, quien lo sometió en el segundo asalto.</p>
                    <Image className={styles.peleador__article__image} src={careo} alt='Justin Gaethje y Khabib Nurmagomedov cara a cara antes de su combate de UFC' />
                    <p className={styles.peleador__article__text}>Gaethje tuvó 2 oportunidades de ganar el título de su división, la primera contra el histórico e invicto <b>Khabib Nurmagomédov</b>, quien lo sometió en el segundo asalto. Y la segunda, luego de que Khabib se retirara y dejara vacante su título, quien lo ganó fue <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, a quien Gaethje enfrentaría en mayo de 2022 para arrebatarselo por UFC 274, en esa ocación, Justin Gaethje volvería a perder por sumisión contra Oliveira en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Pese a esto Justin Gaethje se ha ganado su lugar en la UFC, teniendo actuaciones impresionante y peleas muy divertidas de ver, por eso no sería de extrañar que en un futuro tuviera la oportunidad de volver a pelear por el título contra <Link href='/campeones/islam-makhachev'>Islam Makhachev</Link> o contra quien sea el campeón en el momento.</p>
                    <Image className={styles.peleador__article__image} src={sparring} alt='El peleador estadounidense de UFC haciendo un sparring en su campamento' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Justin Gaethje Récord</h2>
                    <p className={styles.peleador__article__text}>Justin Gaethje tiene un record de 25-4. Siendo 20 de estas 25 victorias por nocaut, 4 por decisión y 1 por sumisión. Mientras que 2 de sus derrotas fueron por nocaut y 2 por sumisión.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Justin Gaethje Biografía</h2>
                    <p className={styles.peleador__article__text}>Justin Ray Gaethje, nació el 14 de noviembre de 1988 en Estados Unidos, en la ciudad de Safford, Arizona. Su madre es de ascendencia mexicana y su padre de ascendencia alemana (de donde sacó su apellido Gaethje que es de origen aleman). Su abuelo boxeaba mientras servía en el ejército de los Estados Unidos. Justin por su parte, se egresó con una licenciatura en Servicios Humanos en la Universidad del Norte de Colorado.</p>
                    <Image className={styles.peleador__article__image} src={friend} alt='Justin Gaethje con un amigo' />
                    <p className={styles.peleador__article__text}>Comenzó a pelear en MMA de manera profesional en agosto de 2011 con casi 23 años. Comenzó su carrera de forma prolifica, puesto que acumulo una increible racha de 19 victorias consecutivas sin ningnua derrota, donde además, la mayoría de sus victorias fueron nocaut, siendo sólo 2 de esas 19, victorias por decisión. Dicha racha se vio cortada cuando fue derrotado por el estadounidense <b>Eddie Alvarez</b>.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Justin Gaethje BMF</h2>
                    <p className={styles.peleador__article__text}>El 29 de julio de 2023, Justin Gaethje se enfrentaría a <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> por el título BMF (Badest Mother Fucker), que según a dicho la UFC <b>Premia a los que tienen las agallas de para producir un momento estelar tras otro</b> cada vez que pelean. Por lo que desde que lo ganara <b>Jorge Masvidal</b> contra <b>Nate Días</b>, Dana White ha decidido poner otra vez en juego este cinturón, enfrentando a 2 de los favoritos de la división.</p>
                    <p className={styles.peleador__article__text}>El título terminó siendo para Justin Gaethje que luego de darle una patada en la cabeza a <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> que lo dejaría KO, ganaría la pelea y su quinto premio a la actuación de la noche en UFC.</p>
                    <Image className={styles.peleador__article__image} src={sparring2} alt='Justin Gaethje entrenando junto a su compañero con equipamiento de boxeo' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Justin Gaethje Última Pelea</h2>
                    <p className={styles.peleador__article__text}>La última pelea de Justin Gaethje fue contra Dustin Poirier en revancha por el BMF por UFC 291. Rival a quien ya ha había enfrentado en abril de 2018, en aquella ocación, Dustin Poirier fue capaz de noquear a Gaethje a los 33 segundos del cuarto asalto, imponiendose ante un Gaethje que apenas afrontaba su segunda pelea en la cartelera de la UFC. Aquel primer enfrentamiento, además, fue elegida la pelea de la noche y del año 2018.</p>
                    <p className={styles.peleador__article__text}>Este enfrentamiento, sin embargo, terminaría de manera completamente diferente, con un Justin Gaethje noqueando de una patada a Poirier en el segundo asalto, siendo esta la actuación de la noche de UFC 291.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/3FIGU4D9DlY?si=GZ2AHFoIkqvG0siI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}