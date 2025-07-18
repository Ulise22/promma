import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/nate_diaz.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export default function NateDiaz () {
    return(
        <main>
            <ArticleHero title='La Historia de Nate Diaz, el Peleador Más Querido de la UFC' subtitle='La historia de uno de los peleadores más querido de la UFC, desde sus dificiles inicios en la infancia, hasta su ascenso como estrella de las MMA.' image={hero} date='01/05/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Nate Diaz</h2>
                    <p>Nathan Donald Diaz nació el 16 de abril de 1985 en la ciudad de Stockton, ubicada en el Estado americano de California y junto a su hermano mayor Nick y su hermana menor Nina, vivió una infancia complicada marcada por la pobreza y por la violencia que rodeaba el barrio en el que vivía. Desde pequeño fue abandonado por su padre, por lo que fue educada unicamente por su madre.</p>
                    <p>Aún con lo exitosa de su carrera, es imposible hablar de Nate sin mencionar a su hermano Nick, quien fue el que lo incentivo a entrenar artes marciales. En un inicio, Nate acompañaba a su hermano al gimnasio en el que este entrenaba, porque allí recibía comida gratis por parte de los estudiantes más avanzados, cosa que con su situación ecónomica valoraba mucho. Aunque eventualmente comenzó a tomarse esto más en serio, viéndolo como una potencial forma de salir de la pobreza.</p>
                    <YouTubeEmbed videoid='kdWUhP8BCFg' />
                    <p>Su hermano fue el primero en competir profesionalmente en la MMA en el año 2001. Nuestro protagonista siguió los pasos de este, peleando en un combate amateur sin guantes cuando tenía 17 años, y consiguiendo su primer combate profesional en 2004 en la compañía <b>WEC</b>, donde enfrentaría a un luchador llamado <b>Alex García</b>, a quien sería capaz de vencer por sumisión en el tercer asalto.</p>
                    <p>Nate se dedicó a pelear en varias compañías, consiguiendo un récord de 5-2 hasta que sería invitado a participar del reality <b>The Ultimate Fighter</b>. Aunque con dudas, porque su hermano había tenido problemas contractuales en el pasado con la UFC, Diaz aceptó formar parte y destacó enseguida, ganando sus 3 primeros combates por sumisión, consiguiendo un contrato con la compañía.</p>
                    <p>En <Link href='/articulos/ufc'>UFC</Link> se ganaría el cariño de los fans de forma muy orgánica, producto de su humor involuntario en ruedas de prensa y de el carácter de gangster que transmite. Entre las muchas peleas que tuvo en su carrera, una de las que destacan es la que tuvo con <b>Donald Cerrone</b>, a quien luego de 3 asalto vencería por decisión unánime.</p>
                    <p>Luego de aquella actuación ante <b>Cowboy</b>, tendría una pelea contra el histórico <Link href='/articulos/jim-miller-historia'>Jim Miller</Link> en lo que sería una eliminatoria por el título de Peso Ligero de UFC. Aquella noche sería capaz de someter a su rival en el segundo asalto, ganando el hoy inexistente premio a la Sumisión de la Noche. Por el campeonato se enfrentaría a su compatriota <b>Benson Henderson</b>, contra quien lamentablemente perdería por decisión unánime. Esta sería la única oportunidad que tuvo nuestro protagonista de alzarse con el título.</p>
                    <p>Diaz tendría un par de peleas más en la división de peso ligero, pero la que cambiaría por completo su estatus mediático y cambiaría para mejor su situación económica sería su pelea con <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>. Originalmente Conor tenía pactada una pelea con el brasileño <b>Rafael dos Anjos</b> en peso ligero, quien por una lesión no pudo participar. En su lugar, fue reemplazado por Nate, que aceptó la pelea en corto aviso, y que debido al poco tiempo para cortar peso con el contaba, se realizó en Peso Wélter. La razón por la que esta pelea se terminaría convirtiendo en una de las que más PPV vendió en la historia de la compañía, es porque ambos peleadores era muy queridos por los fans, y ambos compartían un carisma que hacía entretenido verlos en las ruedas de prensa. Aquella noche, Diaz sometería a Conor en el segundo asalto, ganando el premio a la actuación de la noche, y recibiendo el bono por la pelea de la noche.</p>
                    <YouTubeEmbed videoid='jf-IdMctXqM' />
                    <p>Poco después tendría una revancha con Conor, contra quien esta vez perdería por decisión mayoritaria, aunque ganando nuevamente el bono a la pelea de la noche, y posicionando esta pelea aún más alto en cuanto a venta de PPV, superando los 1.600.000 y convirtiéndose en ese momento en la pelea que más vendió de la historia. </p>
                    <p>Diaz optaría por quedarse en la división de peso wélter, aceptando una pelea contra <b>Anthony Pettis</b>, a quien vencería por decisión unánime, y unos meses después aceptaría pelear con <b>Jorge Masvidal</b>, por un cinturón creado específicamente para esa pelea, llamado el BMF (Baddest Motherfucker in The Game), aunque en aquella ocasión perdería por TKO en el tercer asalto contra el luchador de origen cubano.</p>
                    <YouTubeEmbed videoid='Qqk3bugvci0' />
                    <p>Luego de aquella pelea decidiría tomarse poco más de un año antes de regresar, volviendo a pelear contra quien ahora es campeón de la división, <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, el 12 de junio de 2021. En una pelea donde quien dominó fue el británico, aunque Nate tuvo la oportunidad de finalizarlo cerca del final del combate, donde uno de los sopapos que está acostumbrado a dar casi deja KO a Leon, dejandonos una de las imagines más icónicas de las MMA.</p>
                    <p>Finalmente, con tan sólo una pelea pendiente en el contrato de Nate, el 10 de septiembre se lo programó para pelear contra <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, en lo que sería su última pelea en la compañía, sin embargo su rival fue incapaz de dar el peso, por lo que buscando un reemplazo de último minuto, terminarían haciendo que se enfrente a <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, a quien sería capaz de someter en el cuarto asalto. Dando de esta forma por finalizada su relación contractual con la UFC.</p>
                    <p>Nate es hermano menor del también ex-peleador profesional de MMA <b>Nick Diaz</b>, quienes son defensores del cannabis y con quien dirige una escuela de Jiu-Jitsu brasileño llamada <b>Nick Diaz Academy</b>. Además, aunque reconoce que come pescado de vez en cuando, es vegano desde los 18 años. </p>
                    <h2>Nate Diaz Récord</h2>
                    <p>Nate Diaz en las MMA, posee un récord de 21-13. Siendo 5 de sus 21 victorias por nocaut, 12 por sumisión y 4 por decisión. Mientras que de sus 13 derrotas, 2 son por nocuat, sólo 1 por sumisión y 10 por decisión.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}