import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pimblett from '@/assets/peleadores__images/20-30/paddy-pimblett/paddy-pimblett.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Paddy Pimblett',
    description: 'Paddy Pimblett es un peleador inglés que compite en la división de peso ligero de la UFC, donde está desde que hiciera su debut ante el brasileño Luigi Vendramini en septiembre de 2021, a quien vencería por KO en el primer asalto de la pelea.',
    openGraph: {
        title: 'Paddy Pimblett',
        description: 'Paddy Pimblett es un peleador inglés que compite en la división de peso ligero de la UFC, donde está desde que hiciera su debut ante el brasileño Luigi Vendramini en septiembre de 2021, a quien vencería por KO en el primer asalto de la pelea.',
        url: 'https://fullmma.org/peleadores/paddy-pimblett'
    }
}

export default function Pimblett () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pimblett} w={22} l={3} d={0} nombre='Paddy Pimblett' categoria='Peso Ligero' apodo='THE BADDY' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Paddy Pimblett UFC</h2>
                    <p className={styles.peleador__article__text}>Paddy Pimblett es un peleador inglés que compite en la división de peso ligero de la <Link href='/articulos/ufc'>UFC</Link>, donde está desde que hiciera su debut ante el brasileño <b>Luigi Vendramini</b> en septiembre de 2021, a quien vencería por KO en el primer asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Paddy considera que su caraterístico pelo suelto y la falta de tatuajes en su cuerpo, es lo que permite a los niños identificarse con él, dado que es especialmente popular en la audiencia joven de las MMA, a quienes les es más fácil identificarse con un tipo como Paddy antes que con el &quot;tipo grande y duro con muchos tatuajes&quot;.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/VDLmgJPydsQ?si=MYXXL8R50R6NHNsh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Paddy Pimblett Récord</h2>
                    <p className={styles.peleador__article__text}>Paddy Pimblett posee un récord profesional de 22-3. Siendo 6 de sus victorias por la vía del nocaut, 10 por la vía de la sumisión y 6 por decisión. Mientras que de sus 3 derrotas, 1 fue por sumisión y 2 fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Paddy Pimblett Biografía</h2>
                    <p className={styles.peleador__article__text}>Patrick Pimblett nació el 3 de enero de 1995 en Liverpool, Inglaterra. Siendo un adolescente de 14 años, su primer contacto con el mundo de las MMA, fue cuando vió la pelea entre <b>Vitor Belfort</b> y <b>Rich Franklin</b> en el <b>UFC 103</b>, que lo convenció de comenzar a entrenar artes marciales mixtas con 15 años, compitiendo profesionalmente pocos años después.</p>
                    <p className={styles.peleador__article__text}>El 16 de octubre de 2012 haría su debut como profesioanl de las MMA, enfrentando al estadounidense <b>Nathan Thompson</b> en la división de peso gallo, a quienn ganaría por TKO, luego de lograr una sumisión a golpes. Ganaría sus primeros 4 combates como profesioanl, siendo 2 de estas victorias por nocaut, 1 por sumisión y 1 por decisión. Con su primer derrota llegando recien en el quinto combate de su carrera, ante su compatriota <b>Cameron Else</b>, quien lo sometería en menos de un minuto en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Luego de que en sus siguientes 2 peleas tuviera problemas para dar el peso, Pimblett decidió subir a la división de peso pluma, donde conseguiría ser campeón de la promotora <b>Full Contact Conteneder</b>, al vencer por sumisión en el segundo asalto al francés <b>Kevin Petshi</b> en marzo de 2015.</p>
                    <p className={styles.peleador__article__text}>Luego de una exitosa defensa del título por sumisión en el primer asalto ante el frances <b>Miguel Haro</b>, Paddy continuó peleando en la promotora inglesa <b>Cage Warriors</b>, donde se convirtiría en campeón de peso pluma al vencer al también frances <b>Johnny Frachey</b> por TKO en el primer asalto, el 10 de septiembre de 2016.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/YQRSGJRHsx0?si=ZFeSTp6O46-3hwiS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Pimblett conseguiría una defensa exitosa ante el estadounidense <b>Julian Erosa</b> al derrotarlo por decisión unánime. Lamentablemente para nuestro protagonista, perdería su cinturón en el siguiente combate, luego de caer derrotado por decisión unánime ante el ruso <b>Nad Narimani</b>. Esta derrota es la que lo convenció de, nuevamente, subir de división, para competir en la división de peso ligero de Cage Warriors, haciendo su debut en esta compañía ante el griego <b>Alexis Savvidis</b>, a quien sometería en el segundo asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Luego de esta victoria, obtendría la oportunidad de volver a pelear por el cinturón de la compañía, esta vez en peso ligero. Lamentablemente caería derrotado por decisión ante el danés <b>Søren Bak</b>.</p>
                    <p className={styles.peleador__article__text}>Sin embargo, luego de hilar 2 victorias consecutivas en esta promotra, ante el irlandés <b>Decky Dalton</b> por TKO, y ante el italiano <b>Davide Martinez</b> por sumisión, acabaría por firmar con la UFC, donde haría su debut oficial el 4 de septiembre de 2021 ante el brasileño <b>Luigi Vendramini</b>, a quien derrotaría por KO, ganándose el premio a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/X82ClCsaAKs?si=SfipelrqHKzgzqEy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Posterior a este debut excepcional debut, Pimblett lograría una destacada victoria ante el mexicano <b>Kazula Vargas</b>, a quien vencería por sumisión en el primer asalto, victoria que le valdría el bono a la actuación de la noche, y luego obtendría una victoria por sumisión en el segundo ante <b>Jordan Leavitt</b>, que también le valdría un bono a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Su siguiente pelea sería el 10 de diciembre de 2022 ante <b>Jared Gordon</b> en el UFC 282, contra quien tuvo una victoria por decisión bastante cerrada, que generó controversia entre algunos fans, que vieron como ganador a Jared, tal y como puede verse en los comentarios de la entrevista postpelea que subió la UFC a su canal de Youtube.</p>
                    <p className={styles.peleador__article__text}>Un año después, el luchador inglés volvería al octágono para enfrentarse al histórico <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, quien venía de 5 derrotas consecutivas en su carrera, y que luego de enfrentarse a Paddy Pimblett y perder por decisión unánime, se convirtió en el peleador, junto a <b>BJ Penn</b>, con más derrotas consecutivas en la historia de la UFC.</p>
                    <p className={styles.peleador__article__text}>Al año siguiente, tendría la que sería la pelea más importante de su carrera hasta el momento, cuando se le presentaría la oportunidad de enfrentar a un top15 para entrar a los rankings de la división de peso ligero de la UFC. Dicha oportunidad se materializaría el 27 de julio de 2024, cuando en el <Link href='/covertura-ufc/ufc304'>UFC 304</Link> organizado en su país de origen, Inglaterra, en la ciudad de Manchester, se enfrentará al veterano estadounidense <b>King Green</b>, quien estaba ranqueado #15. Aquella noche, Paddy sería capaz de cerrar bocas y de sorprender a muchos al someter en el primer asalto de la pelea a su rival con un triangle choke, ganando por este desempeño un nuevo bono a la Actuación de la Noche. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
} 