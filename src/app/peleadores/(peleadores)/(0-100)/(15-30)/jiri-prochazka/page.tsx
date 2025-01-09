import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import prochazka from '@/assets/peleadores__images/0-100/20-30/jiri-prochazka/jiri-prochazka.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Jiri Prochazka',
    description: 'Jiří Procházka es un peleador checo que compite en UFC en la división de peso semipesado desde el año 2020. En su carrera en la compañía, necesitó de sólo 3 peleas para convertirse en campeón, luego de que en su tercer combate se enfrentara al veterano campeón Glover Texeira y fuera capaz de finalizarlo con un sumisión en el último asalto en el año 2022.',
    openGraph: {
        title: 'Jiri Prochazka',
        description: 'Jiří Procházka es un peleador checo que compite en UFC en la división de peso semipesado desde el año 2020. En su carrera en la compañía, necesitó de sólo 3 peleas para convertirse en campeón, luego de que en su tercer combate se enfrentara al veterano campeón Glover Texeira y fuera capaz de finalizarlo con un sumisión en el último asalto en el año 2022.',
        url: 'https://fullmma.org/peleadores/jiri-prochazka'
    }
}

export default function Prochazka () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={prochazka} w={30} l={5} d={1} nombre='Jiri Prochazka' apodo={null} categoria='Peso Semipesado' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jiri Prochazka UFC</h2>
                    <p className={styles.peleador__article__text}>Jiří Procházka es un peleador checo que compite en la división de peso semipesado de la <Link href='/articulos/ufc'>UFC</Link> desde el año 2020, cuando hiciera su debut el 12 de julio en el <b>UFC 251</b> ante el suizo <b>Volkan Oezdemir</b>. </p>
                    <p className={styles.peleador__article__text}>Es uno de los peleadores en cuanto a estilo de pelea más entretenidos de ver, con la absoluta mayoría de sus victorias viniendo por la vía del nocaut, debido al buen striking y al poder que tiene. Es raro verlo entrenando como un peleador normal, dado que en muchos casos se lo ve en redes sociales dándole un enfoque a su entrenamiento mucho más espiritual que físico. Lo que va en sintonía con su personalidad, dado que en muchos casos lo vimos comportarse de forma peculiar, haciendo rituales o comparándose con un samurai, y cosas por el estilo, que le terminan dando un carisma único. </p>
                    <p className={styles.peleador__article__text}>En su carrera en la compañía, necesitó de sólo 3 peleas para convertirse en campeón, luego de que en su tercer combate se enfrentara al veterano campeón <Link href='/articulos/campeon-viejo-ufc'>Glover Texeira</Link> y fuera capaz de finalizarlo con un sumisión en el último asalto en el año 2022.</p>
                    <h2 className={styles.peleador__article__title}>Jiri Prochazka Récord</h2>
                    <p className={styles.peleador__article__text}>Jiri Prochazka mantiene un récord profesional de 30-5-1. Siendo 26 de sus 30 victorias por la vía del nocaut, 3 por la vía de la sumisión y sólo 1 llegó a la decisión de los jueces. Mientras que de sus 5 derrotas, 4 fueron por nocaut, y sólo 1 por sumisión. Además, tiene un combate realizado el 20 de diciembre de 2014 contra el ruso <b>Mikhail Mokhnatkin</b> que terminó en empate por decisión mayoritaria.</p>
                    <h2 className={styles.peleador__article__title}>Jiri Prochazka Biografía</h2>
                    <p className={styles.peleador__article__text}>Jiří Procházka nació el 14 de octubre de 1992 en la ciudad de República Checa, Znojmo. Su infancia no fue sencilla, dado que con sólo 6 años tuvo que lidiar con la pérdida de su padre, quien falleció siendo Jiri muy pequeño. Desde su juventud comenzó a entrenar deporte, siendo el fútbol amateur el primero que practicaría.</p>
                    <p className={styles.peleador__article__text}>Jiri comenzaría a meterse en problemas y terminaría en medio de varias peleas callejeras, llegando a verse en vuelto en más de 100. Este comportamiento, eventualmente lo llevó a unirse al club de hooligans del equipo de fútbol local.</p>
                    <p className={styles.peleador__article__text}>Su primer encuentro con el mundo de las artes marciales fue cuando amigo le mostró peleas del kickboxer <b>Ramon Dekekrs</b> y del legendario luchador de MMA <Link href='/leyendas/fedor-emilianenko'>Fedor Emelianenko</Link>. Pero como ocurre comunmente con los jovenes, su interés por el mundo de la pelea llegó por ver películas de acción, concretamente la película <b>Never Back Down</b> (traducida como <b>Rendirse Jamás</b> en latinoamérica), que lo inspiró a entrenar artes marciales, concretamente <b>Muay Thai</b>.</p>
                    <p className={styles.peleador__article__text}>Su debut como profesional de las MMA lo en los pesos semipesados el 7 de abril de 2012 contra su compatriota <b>Stanislav Futera</b>, en una promotora llamada <b>GCF</b>, ganando por KO en el primer asalto de la pelea, en menos de un minuto.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/H2MR_iMMrYY?si=XeG57wHGfkztT6OE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Ganaría sus 4 primeros combates como profesional, finalizando cada uno de ellos en el primer asalto. Hasta que en diciembre de 2012 llegaría su primer derrota al enfrentar al de Serbia <b>Bojan Veličković</b>, quien lo venció por TKO.</p>
                    <p className={styles.peleador__article__text}>El checho acumularía un récord de 7-2, hasta enfrentarse a <b>Martin Šolc</b> por el campeonato inaugural de peso semipesado de GCF, ganándolo por KO con un rodillazo en la cabeza de su oponente en el tercer asalto. Siendo esta además, la primera de sus peleas que pasaba el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Jiri continuaría peleando en promotoras locales, especialmente en GFC, hasta que arribaría a la promotora japonesa, <b>Rizin</b>, que fue creada por el expresidente de <b>PRIDE FC</b>, con la idea de continuar el legado de esta compañía. Allí sería capaz de seguir acumulando victorias por KO y TKO en el primer asalto, llegando a un récord de 23-3-1 hasta que el 21 de abril de 2019 podría enfrentarse en una pelea por el título de la compañía en peso semipesado. </p>
                    <p className={styles.peleador__article__text}>Aquel día se enfrentaría al excampeón de <b>Strickeforce</b>, el estadounidense <b>Muhammed Lawal</b>, a quien en el tercer asalto del combate vencería por TKO, convirtiéndose en nuevo campeón de la compañía.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/pdMTJgdieAk?si=pzrK1Sj1pSMiMT-q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de defender exitosamente su título contra el americano <b>C.B. Dollaway</b>, a quien derrotó por KO en el primer asalto, Jiri llevaba a sus espaldas una carrera sobresaliente, siendo aún bastante joven. Por esto la UFC no tardó en aparecer para ofrecerle un contrato al luchador Checo, que aceptaría haciendo su debut el 12 de julio de 2020 en <b>UFC 251</b>, para enfrentar al suizo <b>Volkan Oezdemir</b>, a quien en el segundo asalto vencería por KO, ganándose el bono a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Su segunda pelea en la compañía, sería enfrentando al estadounidense <b>Dominick Reyes</b>, en un Fight Night que encabezarían ellos 2 el 1 de mayo de 2021. El combate terminaría en el segundo asalto, cuando Prochazka fue capaz de conectar un codazo giratorio que dejó KO a su rival. Ganando el premio a la actuación de la noche, y el bono a la pelea de la noche.</p>
                    <p className={styles.peleador__article__text}>Su actuación destacada, con tan sólo 2 combates encima de la UFC, lo llevaron a ganarse una oportunidad para discutirle el título al veterano campeón <b>Glover Teixeira</b>, quien venía de hacer historia al vencer por sumisión al polaco <b>Jan Błachowicz</b>, convirtiéndose en el peleador más añejo en convertirse en campeón por primera vez en la UFC.</p>
                    <p className={styles.peleador__article__text}>La pelea tendría lugar el 11 de junio de 2022 en el UFC 275 en Singapur. Esta sería sin duda una de las peleas más complicadas a las que tendría que hacer frente el checo, dado que se convirtió en la primera, y hasta ahora única, pelea de Jiri Prochazca que llegó al quinto asalto. Al retador le tocó sufrir contra un brasileño campeón que tenía mucha experiencia y habilidad en el piso, al punto que daba la sensación para el cuarto asalto, que de ir a la decisión de los jueces, Glover Teixeira terminaría por retener el título.</p>
                    <p className={styles.peleador__article__text}>Sin embargo nuestro protagonista supo sufrir, y logró en el último asalto de la pelea, faltando menos de 30 segundos para que esta termine, conectar un mataleón para someter a su rival, siendo esta una de sus únicas 3 victorias por sumisión en las 30 victorias que tiene su récord. De esta manera Jiri se convertiría en el nuevo campeón de los semipesados de la UFC, y tiempo después esta pelea sería elegida como la pelea del año 2022.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dHKRVKnChFI?si=c5_Pn8p8LQz5DAb3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Lamentablemente Jiri sufriría una lesión que lo dejaría más de 1 año inactivo, por lo que la UFC le quitaría su título para dejarlo vacante. </p>
                    <p className={styles.peleador__article__text}>Tendría la fortuna de igual manera, de ser él mismo quien tuviera la oportunidad de recuperar el cinturón, al enfrentarse al excampeón de Peso Medio <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, quien luego de perder su cinturón contra <Link href='/peleadores/israel-adesanya'>Israel Adensanya</Link>, había decidido subir de división en busca de convertirse en doble campeón. Para desgracia de nuestro protagonista, Alex Pereira, que además venía de ser entrenado por antiguo rival, <Link href='/articulos/campeon-viejo-ufc'>Glover Teixeira</Link>, demostró tener puños hechos de acero, al lograr vencer por nocaut en el segundo asalto al último campeón.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/PeBV7IhzxIA?si=m9DnpHdF2SHJRg9f" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>6 meses después volvería a pelear, para participar del <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, en donde enfrentaría al austríaco <b>Aleksandar Rakic</b>, a quien vencería por TKO en el segundo asalto, ganando además el bono de actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Luego de aquella victoria, Jiri aceptaría tomar una pelea en corto aviso para protagonizar la cartelera estelar del <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, luego de que la pelea estelar entre <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> y <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> fuera dada de baja. Para ello, se enfrentaría en una revancha al brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> por el cinturón de peso semipesado. Esta revancha tenía un aliciente extra, dado que a los ojos de muchos fanáticos, e incluso del mismo Jiri Prochazka, la pelea anterior había sido parada antes de tiempo, dado que no se pudo apreciar que efectivamente haya estado KO el luchador checo. Finalmente se enfrentarían el día 29 de junio de ese mismo 2024, donde lamentablemente nuestro protagonista caería derrotado por nocaut luego de recibir una patada en la cabeza en el segundo asalto que lo derrumbaría al suelo. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/xhKMwGozbic?si=YjZqDe_gkxfe_OnQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}