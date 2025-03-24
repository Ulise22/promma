import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ferguson from '@/assets/peleadores__images/0-100/20-30/tony-ferguson/ferguson.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Tony Ferguson',
    description: 'Anthony Ferguson ha peleado en UFC durante poco más de 10 años. Tiempo en el que consiguió ser campeón de The Ultimate Fighter 13 y UFC 216. Firmó con la UFC en 2011 para competir en The Ultimate Fighter de parte del equipo Lesnar. Actualmente se encuentra en el equipo Snap Down City Academy.',
    openGraph: {
        title: 'Tony Ferguson',
        description: 'Anthony Ferguson ha peleado en UFC durante poco más de 10 años. Tiempo en el que consiguió ser campeón de The Ultimate Fighter 13 y UFC 216. Firmó con la UFC en 2011 para competir en The Ultimate Fighter de parte del equipo Lesnar. Actualmente se encuentra en el equipo Snap Down City Academy.',
        url: 'https://fullmma.org/peleadores/tony-ferguson'
    }
}

export default function Ferguson () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ferguson} w={25} l={11} d={0} nombre='Tony Ferguson' categoria='Peso Ligero' apodo='EL CUCUY' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ferguson UFC</h2>
                    <p className={styles.peleador__article__text}>Tony Ferguson es un peleador estadounidense que compite en la división de peso ligero de la <Link href='/articulos/ufc'>UFC</Link>, desde que hiciera su debut en junio de 2011 en la final de <b>The Ultimaet Fighter</b> ante <b>Ramsey Nijem</b>.</p>
                    <p className={styles.peleador__article__text}> Desde entonces, en estos más de 10 años, ha peleado en la compañía y ha sabido convertirse en uno de los peleadores favoritos de los fans, regalándonos momentos épicos y actuaciones formidables en la división de peso ligero de la UFC. </p>
                    <p className={styles.peleador__article__text}>Le tocó competir en una época un tanto caótica en la división de las 155lbs, por lo que pese a ser de los peleadores que más victorias tiene en la historia de la división, nunca pudo coronar este rendimiento de élite con el cinturón. Sin embargo, es esta ansia de pelear pese a que no hay un campeonato en juego, siendo uno de los peleadores más activos, sumado a que parece un auténtico demente cuando pelea, lo que le hizo ganarse el cariño del público, siendo una suerte de campeón del pueblo.</p>
                    <h2 className={styles.peleador__article__title}>Tony Ferguson Récord</h2>
                    <p className={styles.peleador__article__text}>Tony Ferguson posee un récord profesional de 25-11. Siendo 12 de sus 25 victorias por la vía del nocaut, 8 por la vía de la sumisión y 5 por decisión. Mientras que de sus 10 derrotas, 2 fueron por nocaut, 4 por sumisión y 5 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Tony Ferguson Biografía</h2>
                    <p className={styles.peleador__article__text}>Anthony Armand Ferguson Pardilla nació nació en los Estados Unidos el 12 de febrero de 1984, en la ciudad de Oxnard, ubicada en el Estado de California, aunque se terminó críando en la ciudad de Muskegon, en Míchigan. Comenzó a practicar deportes desde temprana edad por influencia de su padre, quien buscaba que Tony se adapatara al nuevo entorno y lograra hacer amigos. Debido a esto practicó deportes como el fútbol, béisbol y lucha libre, siendo este último deporte el que en el futuro lo metería en las MMA.</p>
                    <p className={styles.peleador__article__text}>Luego de inscribirse a la universidad, durante sus años de adulto joven decidió volver a vivir en California para estar más cerca de su familia, donde comenzó a trabajar en marketing y ventas durante el día y como camarero durante la noche, en donde hablando con su patrón sobre su pasado en la lucha libre, este lo invitó a trabajar con algunos luchadores de MMA, que acercó a Ferguson al deporte y lo hizo enamorarse completamente de este, al punto de decidir perseguir una carrera profesional en las artes marciales mixtas.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/f6WLWpUinNU?si=wFxkIs7fa0xAPmUY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Tony Ferguson haría su debut profesional el 12 de abril de 2008, enfrentando a su compatriota <b>Steve Avalos</b>, a quien vencería por sumisión de golpes en el segundo asalto de la pelea. Encadenaría una racha de 4 victorias consecutivas en su inicio como luchador de MMA, finalizando en cada una de ellas.</p>
                    <p className={styles.peleador__article__text}>Su primera derrota como profesional llegaría el 6 de febrero de 2009, cuando enfrentando al armenio <b>Karen Darabedyan</b>, luego de 3 asaltos, perdería la pelea por decisión unánime. Sin embargo, a esta derrota le seguirían otras 3 victorias consecutivas ese mismo año. Siendo el 2009 un año muy activo en su carrera, donde ganaría 4 de las 6 peleas que tuvo. </p>
                    <p className={styles.peleador__article__text}>Tony acumularía un récord de 10-2 hasta que la UFC se contactaría con él para invitarlo a participar del reality <b>The Ultimate Fighter</b>, en donde formaría parte del equipo de <Link href='/leyendas/brock-lesnar'>Brock Lesnar</Link>, ganando el torneo de peso Wélter, luego de enfrentar en la final al estadounidense <b>Ramsey Nijem</b>, a quien dejaría KO en el primer asalto. Además ganando el premio al KO de la noche.</p>
                    <p className={styles.peleador__article__text}>Posterior a esa victoria, ganaría sus siguientes 2 combates como luchador de UFC, por TKO en el primer asalto al de Estado Unidos <b>Aaron Riley</b>, y por decisión al luchador de Bahamas <b>Tves Edwards</b>, a quien vencería por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Aunque luego de esto llegaría su primera derrota en la compañía, al perder por decisión unánime contra <b>Michael Johnson</b> el 5 de mayo de 2012, lo cierto es que a esta derrota le seguiría un invicto larguísimo con varias victorias. Llegando a acumular hasta 12 victorias consecutivas hasta el 2020, la primera de estas contra <b>Mike Rio</b>, a quien sometió en el primer asalto, ganando el extinto premio a la sumisión de la noche.</p>
                    <p className={styles.peleador__article__text}>Producto de la extensa racha de victorias que había alcanzado con 9, el 7 de octubre de 2017 tuvo la oportunidad de enfrentar al peleador <b>Kevin Lee</b>, por el Campeonato Interino de Peso Ligero de UFC, donde se haría con el campeonato interino al derrotar con una sumisión en el tercer asalto a su oponente. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/hNv1cApoQwg?si=lUy-QXNf_mJlTiSp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Siempre había estado la idea de poner a Ferguson a pelear con <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link> por el título indiscutido de la división, dado con el largo tiempo de inactividad del entonces campeón <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, el campeonato había quedado vacante. Sin embargo, Ferguson sufre de una lesión que le impide pelear por el campeonato, por lo que es despojado de su título interino, y la pelea por el título terminó siendo entre Khabib y Al Iaquinta.</p>
                    <p className={styles.peleador__article__text}>Tony, pese a que estaba disponible para pelear, no tuvo la chance de enfrentar al nuevo campeón Khabib Nurmagomedov, dado que la UFC prefirió darle la chance a Conor McGregor, por lo que el 6 de octubre de 2018 encabezó la pelea coestelear del UFC 229 contra el peleador <b>Anthony Pettis</b>, donde se enfrentarían los 2 últimos campeones de su división. Esa noche se llevaría la pelea por TKO al final del segundo asalto, ganando el premio a la pelea de la noche.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/VmCTYPLsP6c?si=LI_Ce6ii-6oTFeYm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su siguiente pelea sería contra el histórico <b>Cowboy Cerrone</b>, el 8 de junio de 2019, venciendo por TKO en el segundo asalto de la pelea, volviéndo a ganar el premio a la pelea de la noche. Luego de esto, Tony ya llevaba 12 victorias consecutivas, y el único camino lógico para él era pelear por el título contra Khabib, quien ya había defendido 2 veces, contra Conor y contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, por lo que se programó una pelea para abril de 2020. Lamentablemente, como si la pelea entre Ferguson y Khabib estuviera maldita, se canceló por quinta vez, debido a la pandemia que ocurrió ese año, y a que Khabib estaba en Rusia y el gobierno no le permitía salir del país. En su lugar, Ferguson aceptó posponer la pelea un mes más, y luchar por el Campeonato Interino de UFC contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, que sería el reemplazante.</p>
                    <p className={styles.peleador__article__text}>Lamentablemente para nuestro protagonista, esa noche, Gaethje lograría conectar los golpes que le darían la victoria por TKO en el quinto y último asalto de la pelea. Aún así, volvería a ganar el premio a la pelea de la noche, pero sería después de esta pelea que comenzaría su descenso como deportista.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dGWDT3iyrdw?si=CxXM5rgFw33f9co9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Tony Ferguson encadenaría una racha de 7 derrotas consecutivas en la UFC, empatando el poco honroso récord de <b>BJ PENN</b>. Luego de perder con Gaethje, encadenando derrotas contra: <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> por decisión unánime; contra el iraní <b>Beneil Dariush</b> por decisión unánime; contra <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> por KO en el segundo asalto, luego de espectacular patada en la cabeza por parte de su rival; por sumisión contra <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link> en el cuarto asalto, en una pelea en Peso Wélter; por sumisión nuevamente contra <b>Bobby Green</b> cerca de finalizar el tercer asalto; y contra el inglés <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, quien se llevaría la pelea por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>En su más reciente pelea ante su compatriota <b>Michael Chiesa</b> pactada en peso wélter en el <Link href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>UFC on ABC: Sandhagen vs. Nurmagomedov</Link>, volvería a encontrarse con la derrota al ser sometido en el primer asalto de la pelea. Con esta siendo su octava derrota consecutiva, se convertiría en el peleador con más derrotas consecutivas en la historia de la UFC. Luego de aquel combate sin embargo, daría a entender que se estaba retirando, en una escena conmovedora, explicando que no lo quería hacer, dejando sólo 1 guante en el octágono, y dejando en claro que esto significaba que estaba dispuesto y abierto a volver a pelear en el futuro próximo. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/te8PIvPMs0A?si=JYopZycPej6Flizt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
} 