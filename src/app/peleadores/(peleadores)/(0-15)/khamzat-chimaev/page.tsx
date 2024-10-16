import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import khamzat from '@/assets/peleadores__images/10-20/khamzat-chimaev/khamzat.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Khamzat Chimaev',
    description: 'Khamzat Chimaev es un peleador nacido en Rusia que actualmente compite en la división de peso medio de la UFC, en donde está desde julio de 2020, cuando hiciera su debut ante el galés John Philips.',
    openGraph: {
        title: 'Khamzat Chimaev',
        description: 'Khamzat Chimaev es un peleador nacido en Rusia que actualmente compite en la división de peso medio de la UFC, en donde está desde julio de 2020, cuando hiciera su debut ante el galés John Philips.',
        url: 'https://fullmma.org/peleadores/khamzat-chimaev'
    }
}

export default function Khamzat () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={khamzat} w={13} l={0} d={0} nombre='Khamzat Chimaev' apodo='BORZ' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Chimaev</h2>
                    <p className={styles.peleador__article__text}>Khamzat Chimaev es un peleador nacido en Rusia que actualmente compite en la división de peso medio de la <Link href='/articulos/ufc'>UFC</Link>, en donde está desde julio de 2020, cuando hiciera su debut ante el galés <b>John Philips</b>.</p>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Récord</h2>
                    <p className={styles.peleador__article__text}>Khamzat Chimaev sostiene un récord perfecto de 13-0. Siendo 6 de estas victorias por la vía del nocaut, 5 por la vía de la sumisión y 2 por decisión. Además, un poco más de la mitad de sus victorias se dieron en la UFC, donde consiguió ganar en 7 ocasiones.</p>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Khabib</h2>
                    <p className={styles.peleador__article__text}>La historia entre Khamzat Chimaev y <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedoz</Link>, sucedió durante el evento de UFC 280, que vería como el peleador entrenado por Khabib, <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, le arreabataría el título de Peso Ligero al brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. Después de este combate, hubo un enfrentamiento fuera del octagono entre el primo de Khabib, <b>Abukar Nurmagomedov</b>, quien había peleado en ese evento en uno de los combates preliminares del evento. La pelea casi escala al punto de tener involucrados tanto a Khamzat como a Khabib, por lo que seguridad se tuvo que involucrar para evitar que el conflicto escale a mayores.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Qah195MOT7w?si=Stbz1ATyNleS7eyo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Al día siguiente del incidente, publicaron un vídeo donde comentaban haberse pedido disculpas mutuamente. Por su parte, Khabib Numagomédov declaró: <b>&quot;Lo que pasó ayer no nos deja bien. Ni a mí, ni a Khamzat ni a Abubakar. Para serles sincero estoy cansado de este sin sentido. Por eso estamos acá reunidos como hermanos. Hablamos entre nosotros y nos pedimos disculpas. Espero que en el futuro, sólo nos reunamos para pelear por buenas razones&quot;.</b></p>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Historia</h2>
                    <p className={styles.peleador__article__text}>Khamzat Khizarovich Chimaev nació el día 1 de mayo de 1994 en la República de Chechenia, en Rusia. La infancia de nuestro protagonista estuvo marcada por la lucha, al punto que se puede decir que nació practicamente para pelear, teniendo sólo 1 año la primera vez que estuvo en contacto con una estera de lucha, y entrenando wrestling desde los 5 años. </p>
                    <p className={styles.peleador__article__text}>Siendo un joven adolescente de sólo 17 años emigró de su país para ir a vivir a Suecia, donde una vez instalado, participó en competiciones nacionales de lucha, logrando en 2018 ganar 2 medallas doradas en la división de peso medio y de peso wélter. Además competiría en varios torneos de judo y de Sambo. Pero lo que nos interesa a nosotros, es que ese mismo 2018 es cuando haría su debut profesional en las artes marciales mixtas. </p>
                    <p className={styles.peleador__article__text}>Khamzat ya venía entrenando MMA desde 2017, de la mano del exluchador sueco de UFC <b>Alexander Gustafsson</b>, quien ante un reportero de su país afirmó que Chimaev era uno de los mejores luchadores con los que había entrenado.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/hgBTZz0RsMg?si=2cB2oZuzoaW9QmA3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Haría su debut profesional el 26 de mayo de 2018 ante el noruego <b>Gard Olve Sagen</b> en peso peso pactado (176lbs), consiguiendo una victoria por TKO en el segundo asalto. Sólo 3 meses después volvería a pelear con el también noruego <b>Ole Magnor</b>, esta vez en peso medio, necesitando sólo de 1 asalto para someter a su rival con un mataleón. </p>
                    <p className={styles.peleador__article__text}>Con tan sólo 2 victorias en su haber, Khamzat firmaría con la promotora de Oriente Medio <b>Brave FC</b>, en donde haría su debut el 16 de noviembre de 2018 ante el austríaco <b>Marko Kisic</b>, en lo que también era su debut en peso wélter, aquella noche finalmente lograría acabar con su rival por la vía del nocaut en el primer asalto. Su segundo combate lo tendría en diciembre de ese mismo año, enfrentando al estadounidense <b>Sidney Wheeler</b> en su vuelta al peso mediano, consiguiendo someter a golpes a su rival en tan sólo 35 segundos del combate.</p>
                    <p className={styles.peleador__article__text}>El 4 de octubre de 2019 tendría la que sería una de las peleas más curiosas de su carrera, puesto que enfrentaría a su compatriota <b>Ikram Aliskerov</b>, quien en el futuro, al igual que nuestro protagonista, se converitría en luchador de UFC. Cuestión que la pelea entre ambos rusos terminaría a los 2 minutos del primer asalto, cuando Chimaev lograría dejar KO a su rival de un puñetazo, propinándole lo que hasta ese momento era la única derrota de Aliskerov. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/s38u3r9WRQo?si=5efCD3wyUW7R_Ug5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Khamzat tendría un último combate en la promotora Brave FC, en el que enfrentaría al sudafricano <b>Mzwandile Hlongwa</b>, con quien se vería las caras el día 4 de octubre de 2019, logrando derrotarlo por sumisión en el segundo asalto de la pelea. Luego de aquella noche, Chimaev dejaría de pertenecer a aquella promotora, al conseguir un contrato con la compañía de MMA más grande del mundo, la UFC, en la que menos de un año después comenzaría a competir, haciendo su debut el día 16 de julio de 2020 ante el galés <b>John Philips</b>, a quien sometió en el segundo asalto, ganando ya en su primera pelea, su primer bono por su desempeño a la Actuación de la Noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/P4CmjQaI420?si=QGn_e6SEMY6EB5oH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su segunda pelea ya haría una locura que le valdría un récord en la historia de la compañía, puesto que sólo 10 días después volvería a pelear en el octágono, para enfrentar a <b>Rhys McKee</b>, en lo que era su regreso a peso wélter, consiguiendo una impresionante victoria por TKO en el primer asalto. Logrando romper el récord de menor cantidad de días entre 2 victorias en la UFC, con 10, además de volver a ganar el bono a la Actuación de la Noche, por su notable desempeño.</p>
                    <p className={styles.peleador__article__text}>En su siguiente combate, el 19 de septiembre de 2020, se enfrentaría al estadounidense <b>Gerald Meerschaert</b> en peso mediano, consiguiendo una impresionante victoria por KO a los 17 segundos del encuentro, ganando otra vez el bono a la Actuación de la Noche.</p> 
                    <p className={styles.peleador__article__text}>A partir de este punto, comenzaríamos a ver algo que se volvería recurrente en la carrera de Chimaev, y es que sus problemas de salud fueron y son un gran problema para ver todo lo que este peleador puede ofrecernos en el octágono. Dado que se programaría una pelea entre él y quien luego sería campeón de la división <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, pero la pelea jamás se daría luego de que Khamzat confirmara haber contraído esa enfermedad que era muy común en 2020. </p>
                    <p className={styles.peleador__article__text}>Sorpresivamente para todos, tiempo después, el 1 de marzo de 2021, el nacido en Chechenia anunciaría su retiro de las artes marciales mixtas, con sólo 26 años, luego de que aquella enfermedad que había contraído empeorara, produciéndole dificultades en la respiración y le hiciera toser sangre. Finalmente, luego de varias semanas de incertibumbre, el día 29 de marzo nuestro protagonista confirmo que finalmente no se retiraría, y que la razón de tan llamativo anuncio hacía unas semanas, se debió a que creía tener cáncer, lo que lo llevó a querer abandonar el deporte. </p>
                    <p className={styles.peleador__article__text}>Ya para la siguiente pelea que le ofrecieron, tendría la oportunidad de pelear ante un rival ranqueado en la división de peso wélter, enfrentando al chino <b>Li Jingliang</b> el día 30 de octubre de 2021 en el UFC 267, consiguiendo una importantísima victoria por sumisión en el primer asalto ante el entonces #11 de la división. Con esta victoria ganaría una vez más el bono a la Actuación de la Noche, por cuarta ocasión consecutiva en sus primeros 4 combates. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/OyTZSuINv-s?si=Qjvy617va1Hzf0Wp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Inmediatamente Khamzat tendría la oportunidad de enfrentarse a uno de los peleadores más importantes de la división, cuando el 9 de abril de 2022 en el UFC 273, se viera las caras con el brasileño <b>Gilbert Burns</b>, quien en ese momento estaba ranqueado #2 en la división y venía de una victoria ante <b>Stephen Thompson</b>. Aquella noche ambos peleadores nos brindaron un show alucinante en el octágono, al ofrecernos la que luego sería elegida la pelea de la noche. El encuentro terminaría luego de los 3 asaltos, y al momento de llegar a las tarjetas de los jueces, estos dieron como ganador por decisión unánime a Khamzat Chimaev.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/xfsJG-ra4cg?si=Zj0TT6ReWDfMuHPA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Para ese mismo año se le programó una pelea ante uno de los peleadores más mediáticos, importantes y querido por los fans de la UFC, <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link>, a quien debía enfrentar el 10 de septiembre de 2022 en el UFC 279, en lo que sería el primer evento numerado que encabezaría nuestro protagonista. Sin embargo, para el día del pesaje, el nacido en Rusia que debía estar pesando como máximo 171 libras, al subirse a la balanza dió 178,5lbs, 7 libras y medio más del límite de peso wélter. Esto llevó a que la UFC tuviera que hacer malabares para salvar el evento que no podía contar su pelea estelar, reemplazando a Chimaev con <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> para encabezar el evento enfrentando a Nate Diaz, y llevando a Chiamev al evento coestelar para enfrentar al estadounidense <b>Kevin Holland</b>, quien ya tenía una pelea programada para esa misma noche, en un combate en peso pactado en 180lbs. Khamzat finalmente terminaría ganando su pelea aquella noche por sumisión en el primer asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/AmPI5E7wcgA?si=jZECZL-0Z5ZKSFUh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Se supone que su siguiente pelea sería el 21 de octubre de 2023 en el UFC 294 ante el brasileño <b>Paulo Costa</b>, en lo que sería su regreso a la división de peso mediano, luego de los problemas que tuvo para dar el peso en la división de peso wélter. Pero su contrincante tuvo que hacerse una cirugía que lo obligaría a bajarse de la pelea una semana antes de que esta ocurriera. Fue entonces que en su reemplazo llegó el excampeón de peso wélter <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, contra quien tuvo un interesante combate, en el que dominó sobre todo en el primer asalto, y donde fue decayendo a medida que pasaba la pelea, de igual forma, una vez terminados los 3 asaltos, se llevó la pelea por decisión mayoritaria, manteniendo su invicto. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/4wfriSQAmaA?si=jKmcah9Ssn0BHrfi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Se lo programaría para enfrentar al excampeón de peso mediano <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> para el 22 de junio de 2024, encabezando un fight night en Abu Dhabi, pero lamentablemente los problemas de salud de Khamzat se volvieron a poner en medio, bajándose de la pelea y siendo reemplazado por un viejo rival con <b>Aliskerov</b>, en el <Link href='/covertura-ufc/fight-night-whittaker-aliskerov'>UFC on ABC: Whittaker vs Aliskerov</Link>.</p>
                    <p className={styles.peleador__article__text}>De igual forma, quien debía ser su rival fue capaz de noquear en el primer asalto, y la pelea entre Whittaker y Chimaev fue reprogramada para el 26 de octubre de 2024 en el <b>UFC 308</b>, donde estos 2 peleadores protagonizarían el evento coestelar, que además tenía como evento principal la pelea por el título de peso pluma entre <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> y <Link href='/peleadores/max-holloway'>Max Holloway</Link>.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}