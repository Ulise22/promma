import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/mauricio-ruffy/mauricio_ruffy.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Mauricio Ruffy',
    description: '',
    openGraph: {
        images: '',
        title: 'Mauricio Ruffy',
        description: '',
        url: 'https://fullmma.org/peleadores/paulo-costa'
    }
}

export default function PauloCosta () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={13} l={2} d={0} categoria='Peso Ligero' nombre='Mauricio Ruffy' apodo={null} time='2026-04-16' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Mauricio Ruffy?</h2>
                    <p className={styles.peleador__article__text}>Mauricio Ruffy es un luchador brasileño de MMA que compite en la división de peso ligero de la UFC, es una de las figuras más destacadas de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, con un estilo de pelea muy vistoso, un striking preciso y muy afinado que hace que cualquiera que lo vea pelear se vuelva un fan inmediatamente. </p>
                    <p className={styles.peleador__article__text}>Siendo aún bastante joven es uno de los mayores prospectos que tienen la división de peso ligero, siendo ya no sólo una promesa a futuro, sino que una realidad en el presente. </p>
                    <h2 className={styles.peleador__article__title}>Mauricio Ruffy Récord</h2>
                    <p className={styles.peleador__article__text}>Mauricio Ruffy posee un récord profesional en MMA de 13-2. Con 12 de sus victorias viniendo por la vía del nocaut y sólo 1 siendo por decisión. Mientras que de sus 2 derrotas 1 fue por la vía del nocaut y la otra por la vía de la sumisión. </p>
                    <h2 className={styles.peleador__article__title}>Mauricio Ruffy Historia</h2>
                    <p className={styles.peleador__article__text}>Maurício de Lima Santos nació el 17 de junio de 1996 en Coruripe, Alagoas, Brasil. Nació en una familia humilde y fue en su entorno donde conoció las artes marciales, principalmente por su tío que era fanático de las peleas, y por su hermano mayor, a quien una vez siendo muy niño lo vió entrenar en un ring improvisado en el patio de su casa, generando una imagen que lo marcaría para siempre, motivándolo a buscar él mismo ser un peleador profesional. </p>
                    <p className={styles.peleador__article__text}>Pasó una adolescencia muy turbulenta, pasando por una etapa rebelde en la que la salía constantemente, peleas callejeras, etc. Para colmo, su hermano mayor, quien era una de sus mayores fuentes de inspiración para él y quien le daría su apodo &quot;Ruffy&quot;, acabó con su propia vida de forma trágica. Ruffy también pasaría por sus propios problemas tiempo después, en los que coqueteó con la idea de hacer lo mismo luego de pasar por una depresión muy fuerte, sin embargo gracias a su Fé en Dios y a la ayuda de su familia pudo salir adelante y abandonar esos pensamientos. </p>
                    <p className={styles.peleador__article__text}>Su inicio formal en las artes marciales sería a los 14 años, cuando tomaría una decisión radical, al dejar a su familia y ciudad natal para mudarse a Sao Paulo, con la intenció de dedicarse a entrenar a tiempo completo con la esperanza de ser profesional. Al principio sus únicos referentes y fuentes de motivación era su propia familia y su hermano mayor especialmente, pero con el paso del tiempo pasó a admirar a luchadores que de hecho son muy actuales, como <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> y <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, quienes le ayudaron a construir su estilo explosivo como striker. </p>
                    <p className={styles.peleador__article__text}>Allí en Sao Paulo conocería a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, quienes se convertirían en su casa en la capital paulista, de hecho el coach actual de la academia, <b>Flavio Álvaro</b>, sería quien le conseguiría trabajo antes de que pudiera ser profesional. Dado que Mauricio antes de llegar a la élite de los deportes de combate, sirvió como guardaespaldas de un empresario multimillonario de China, en donde era bien pagado y debía viajar entre Sao Paulo y Taiwán, haciendo de seguridad mientras entrenaba en diferentes gimnasios, dependiendo donde le tocaba estar. Este trabajo, según menciona el mismo Ruffy, fue algo duro debido a la barrera del idioma, a la cultura y lo impredecible del trabajo. Finamlente abandonó este empleo para dedicarse de lleno a las MMA en Brasil. </p>
                    <YouTubeEmbed videoid='nurzf6ICsJU' />
                    <p className={styles.peleador__article__text}>Haría su debut profesional el día 18 de septiembre de 2016, enfrentando a <b>Marlo Paula de Souza</b>, noqueando en el primer asalto. Un año después, volvería a subirse al octágono para enfrentar a <b>Wendson Santos</b>, a quien nuevamente vencería por nocaut en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>En el 2018 tendría 2 combates más, con el primer siendo el 30 de junio ante <b>Lucas Costa Jesus</b>, a quien noquearía con codazos en el primer asalto. Y el segundo sería ante <b>Rafael Silva</b>, a quien vencería por TKO en el segundo asalto del combate. </p>
                    <p className={styles.peleador__article__text}>El 22 de junio de 2019 se enfrentaría a <b>Derlan Marinho</b>, a quien derrotaría por KO en el primer asalto, ganando esa noche el título de campeón de superligero en <b>MFC</b>. Lamentablemente para él, el 13 de noviembre de ese mismo año recibiría su primer derrota profesional, al caer KO en el segundo asalto ante <b>Manoel Sousa</b>. </p>
                    <p className={styles.peleador__article__text}>Sería capaz de recuperarse rápidamente al aceptar una pelea el 26 de junio de 2022 ante <b>Brenno Luiz Goncalvez</b>, donde lograría noquear en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>El 26 de mayo de 2023 participaría el torneo de peso wélter de <b>Centurion FC</b>, donde tendría 2 combates con formato de eliminatoria el mismo día, con el primero siendo las semifinales ante <b>Cormeliu Rotaru Lascar</b>, a quien noquearía en el primer asalto, y con el segundo siendo la final del torneo ante <b>Ronys Torres</b>, a quien vencería de igual forma por nocaut en el segundo asalto, ganando el segundo campeonato de su carrera. </p>
                    <h3>Mauricio Ruffy en el Dana Whites Contender Series</h3>
                    <p className={styles.peleador__article__text}>Ya habiendo acumulado un récord profesional de 8-1, el brasileño se ganaría una oportunidad de oro en su vida, al participar del programa de televisión <Link href='/eventos/dana-white-contender-series-que-es'>Dana Whites Contender Series</Link>, en donde tendría una pelea que en caso de ganar e impresionar a Dana White, le ganaría un contrato con la UFC. Su participación se daría el día 3 de octubre de 2023 ante el ruso <b>Raimond Magomedaliev</b>, a quien sería capaz de noquear en el tercer asalto, faltando apenas 15 segundos para que terminara el combate. De esta forma se ganó un contrato con la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.peleador__article__title}>Mauricio Ruffy UFC</h2>
                    <p className={styles.peleador__article__text}>El 4 de mayo de 2024 debutaría en la compañía ante el australiano <b>Jamie Mullarkey</b> en el <b>UFC 301</b>, logranod una increíble victoria por nocaut que le haría ganar el bono a la Actuación de la Noche. Poco después, el 16 de noviembre de ese mismo año, se subiría al octágono para enfrentar a <b>James Llontop</b> en peso pactado, debido a que su rival falló a la hora de dar el peso, en el <b>UFC 309</b>, donde volvería a llevarse la victoria, esta vez por decisión unánime, siendo este el primer combate en toda su carrera en llegar a la terjeta de los jueces. </p>
                    <p className={styles.peleador__article__text}>El 8 de marzo de 2025 en el <b>UFC 313</b> volvería a subirse al octágono para enfrentarse al veterano estadounidense <b>King Green</b>, contra quien realizaría uno de los mayores highlights de su carrera, dando una brutal patada giratoria a la cabeza de su rival que lo dejaría KO inmediatamente. Esta actuación no sólo que le daría un nuevo bono a la Actuación de la Noche, sino que sería suficiente para ponerlo en los rankings de la compañía, pese a que todavía no había enfrentando a ningún luchador ranqueado, y que apenas llevaba 3 peleas en la UFC. </p>
                    <YouTubeEmbed videoid='uqH7Z9Me_-c' />
                    <p className={styles.peleador__article__text}>El 6 de septiembre de 2025 lo pondrían a pelear en la coestelar del evento de UFC organizado en París, Francia <Link href='/eventos/fight-night-imavov-borralho'>UFC Francia: Imavov vs Borralho</Link>, donde compartiría cartelera junto a su compañero de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>. Para eso debería enfrentar al peleador local <b>Benoit Saint Denis</b>, quien aquella noche lamentablemente le daría la primer derrota en la UFC a nuestro protagonista, luego de en una actuación dominante someterlo en el segundo asalto con un face crank. </p>
                    <p className={styles.peleador__article__text}>De igual forma, sería capaz de reponerse rápido de esta derrota, dado que el 1 de febrero de 2026 se lo programaría para pelear en el <Link href='/eventos/ufc325'>UFC 325</Link> ante <b>Rafael Fiziev</b>, que es un peleador que lo superaba en los rankings. Aquella noche Mauricio Ruffy volvería a mostrar su nivel de stiking superlativo, noqueando en el segundo asalto a un rival tan peligroso como lo es Fiziev, ganando nuevamente el bono de los $100.000 a la Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='Df3RxNGcyX0' />
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}