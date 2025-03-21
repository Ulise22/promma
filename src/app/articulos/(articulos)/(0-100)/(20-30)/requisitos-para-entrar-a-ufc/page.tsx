import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/requisitos_entrar_ufc.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: '5 Formas de Entrar A La UFC',
    description: '¿Eres un peleador profesional o estás entrenando MMA y quieres pelear en la UFC? En este artículo repasaremos las 5 formas por las que Dana White contrata peleadores de MMA para su compañía. ',
    openGraph: {
        title: '5 Formas de Entrar A La UFC',
        description: '¿Eres un peleador profesional o estás entrenando MMA y quieres pelear en la UFC? En este artículo repasaremos las 5 formas por las que Dana White contrata peleadores de MMA para su compañía. ',
        url: 'https://fullmma.org/articulos/requisitos-para-entrar-a-ufc'
    }
}

export default function RequisitosParaUFC () {
    return(
        <main>
            <ArticleHero title='¿Cómo ser peleador de la UFC? Las 5 formas de entrar a la UFC siendo peleador de MMA.' subtitle='Los requisitos para entrar a la UFC y ser reclutado por la compañía. Las 5 vías por las que Dana White contrata peleadores profesionales.' image={hero} date='12/01/2025' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>¿Eres un peleador profesional o estás entrenando MMA y quieres pelear en la UFC? En este artículo repasaremos las 5 formas por las que Dana White contrata peleadores de MMA para su compañía. </p>
                    <h2>1. Ser un Peleador Consagrado</h2>
                    <p>La manera por la que muchos de los peleadores actualmente más conocidos de la compañía llegaron, es esta, forjando una carrera y una trayectoria de élite que los inevitablemente los hizo terminar en la UFC. </p>
                    <p>Los casos más recientes de ese fenómeno son luchadores como Michael “Venom” Page, o <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link>, que en otras compañías de renombre como Bellator o PFL, lograron grandes cosas (en el caso de Harrison ser campeona), que les hizo construir un nombre que eventualmente los trajo este pasado 2024 a terminar en la compañía de artes marciales mixtas más grande del mundo. </p>
                    <p>Aunque siendo esta la forma más destacada en la que un peleador de MMA termina en la UFC, lo cierto es que es muy complicado llegar de esta forma a competir allí, y se corre el riesgo de llegar a una edad muy avanzada. Sin ir más lejos, los 2 peleadores que puse de ejemplo, que llegaron a la compañía el año pasado, lo hicieron teniendo más de 33 años. </p>
                    <h2>2. Participar en el The Ultimate Fighter</h2>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/45Wz29nTe74?si=mQXwsBUARa7ioAdG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En el pasado esta era quizás la forma más común en la que un peleador terminaba llegando a la UFC, y es compitiendo en el reality de televisión TUF. Desde su primera temporada que tuvo como entrenadores a las leyendas del deporte <Link href='/leyendas/chuck-liddell'>Chuck Liddell</Link> y <Link href='/leyendas/randy-couture'>Randy Couture</Link>, este reality nos ha terminado trayendo peleadores tan icónicos como <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link>, <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> o <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>. </p>
                    <h3>Requisitos para Entrar a The Ultimate Fighter</h3>
                    <ul>
                        <li>Los luchadores que quieran participar deberán tener entre 21 y 34 años de edad.</li>
                        <li>Los hombres que quieran participar deben poseer un récord con al menos 3 victorias, que puedan ser verificadas en sherdog.com y mixedmartialarts.com.</li>
                        <li>En caso de que no seas un ciudadano estadounidense, debes obtener un reporte de antecedentes o actividad criminal por parte de una agencia policial apropiada de su país de residencia, y debe enviar el informe.</li>
                        <li>Debe completar los datos de la hoja del Peleador. </li>
                    </ul>
                    <h2>3. Participar en el Dana White’s Contender Series</h2>
                    <p>La forma en la que más peleadores se están dando a conocer últimamente es mediante el DWCS, que es otro reality de televisión al que la UFC acude cuando tiene dudas sobre contratar o no a un luchador. En este reality se ponen a 2 luchadores a pelear entre sí por un contrato con la compañía de MMA más grande del mundo. En caso de ganar y dejar impresionado al jefe, se ganará un contrato.</p>
                    <p>Peleadores tan reconocidos como <Link href='/peleadores/sean-omalley'>Sean O’Malley</Link>, quien llegó a ser campeón de peso gallo, han llegado a la compañía por este modo. Además de otros ejemplos más recientes y destacados como los brasileños <Link href='/peleadores/caio-borralho'>Caio Borralho</Link> o <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, pertenecientes al club <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>. </p>
                    <h2>4. Aceptar una Pelea de Último Momento</h2>
                    <p>Una táctica usual que utiliza la UFC para contratar peleadores es buscar a luchadores que acepten peleas de último momento. Debido a que muchas cosas pueden pasar entre el anuncio de una pelea y la realización de esta, no es raro que muchos peleadores terminen cancelando eventos a contratiempos o lesiones que les impidan competir.</p>
                    <p>Debido a esto, cuando la UFC se queda sin peleadores en el roaster que estén dispuestos a aceptar peleas con poco tiempo de anticipación, es que le ofrecen contratos a luchadores que por lo general ya tenían vistos a cambio de que acepten pelear con poco tiempo de preparación. </p>
                    <p>Un claro ejemplo de esto es el brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, quien tuvo su oportunidad de firmar en la UFC al participar en el DWCS, en agosto de 2021, pero terminó perdiendo por decisión ante su compatriota Joanderson Brito, privándose de competir en la compañía. Sin embargo, guardaron su contacto y lo tuvieron presente cuando necesitaron un reemplazo de última hora para pelear contra el ruso invicto Movsar Evloev, quien debía enfrentar a Bryce Mitchell, quien se ausentó por una lesión. Debido a esto, <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> estuvo dispuesto a pelear con 5 días de antelación contra el entonces #15 de la división de peso pluma. Y aunque perdió por decisión aquella pelea en mayo de 2023, desde entonces compite en la compañía, habiendo sabido escalar hasta lo más alto en los rankings. </p>
                    <h2>5. Aparecer en el Looking For a Fight con Dana White</h2>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/5W_3wnG3iDo?si=8l4p5qPDNDBX7LNc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La otra forma en la que la que los peleadores consiguen contratos con la UFC, es mediante el programa Lookin’ for a Fight. Donde Dana White, junto al expeleador y excampeón de la compañía Matt Serra, recorren diferentes ciudades y países en busca de peleas, observando diferentes peleadores, que, si logran sorprender al jefe, terminan ganándose un contrato con la compañía. </p>
                    <p>Personalmente no conocía la existencia de este programa hasta el momento de hacer este artículo. Y, aunque parece que ya no se hace con tanta frecuencia como en el pasado, aún suben capítulos al canal oficial de la UFC de vez en cuando.  </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}