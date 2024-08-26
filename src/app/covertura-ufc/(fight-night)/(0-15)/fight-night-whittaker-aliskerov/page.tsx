import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-15/whittaker-vs-aliskerov.jpg'

export default function FightNightWhittakerAliskerov () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Whittaker Noquea a Aliskerov en el Primer Asalto! ¡Shara Bullet Noquea a su Rival en el Tercer Asalto!' subtitle='Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.' image={hero} date='2024-06-22' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En un Fight Night donde Aliskerov entró de urgencia como reemplazo de un enfermo <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> para enfrentar en la pelea estelar al histórico de la división <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, que viene de una victoria por decisión ante <b>Paulo Costa</b> en el <Link href='/noticias/ufc298'>UFC 298</Link>. En la cartelera estelar también contamos con un enfrentamiento entre rusos de los pesos pesados como pelea coestelar, entre <b>Sergei Pavlovich</b> y <b>Alexander Volkov</b>, además contamos podremos ver en su segunda pelea a la promesa de Daguestán <Link href='/peleadores/shara-magomedov'>Shara Magomedov</Link>, enfrentando al brasileño <b>Antonio Trocoli</b>. Y contamos con un siempre divertido de ver <b>Johnny Walker</b> enfretarse al suizo <b>Volkan Oezdemir</b>.</p>
                    <h2>Robert Whittaker Noquea a Ikram Aliskerov</h2>
                    <p>Terminando el evento de una manera espectacular, con un Rober Whittaker demostrando porqué es uno de los peleadores más importantes de la división, logrando noquear a su rival en muy poco tiempo en el primer asalto.</p>
                    <p>Conectando primero un golpe con la mano derecha que mareó al ruso, luego de acercarse un poco, Whittaker conectó un Uppercut que dejó KO a su rival que hasta esta noche sólo contaba con una derrota ante Khamzat Chimaev.</p>
                    <h2>Alexander Volkov Vence por Decisión Unánime a Sergei Pavlovich</h2>
                    <p>En la pelea coestelar de la noche en Arabia Sáudita, que nos trajó al enfrentamiento entre los rusos de los pesos pesados, que comparten en su historial de peleas el haber caído derrotados por finalización ante el actual campeón interino <Link href='/peleadores/tom-aspinal'>Tom Aspinal</Link>, vimos a un dominante Volkov que supo mantener la distancia en un combate que se dió principalmente de pie.</p>
                    <p>Gracias al gran control del espacio que demostró Volkov, siendo capaz de mantener lejos a su compatriota y siendo capaz de conectar varios golpes que lanzó con poco riesgo, Alexander se gana una merecida decisión unánime ante un rival que estaba ranqueado más arriba que él, escalando en la división al puesto #3.</p>
                    <h2>Kelvin Gastelum Gana por Decisión Unánime a Daniel Rodriguez</h2>
                    <p>En una muy entretenida pelea, el peleador estadounidense <b>Kelvin Gastelum</b> se llevó una muy merecida victoria por decisión unánime luego de dominar en el striking cuando la pelea se jugó de pie, y luego de asegurarse la victoria consiguiendo varios derrivos, dominando en el suelo también ante un Daniel Rodríguez, que a pesar de conectar algunos golpes con mucho poder, se vió superado por Gastelum.</p>
                    <h2>Shara Magomedov Noquea a Antonio Trocoli</h2>
                    <p><Link href='/articulos/shara-magomedov-ojo'>Shara &quot;bullet&quot;</Link> noquea en el tercer asalto al debutante brasileño <b>Antonio Trocoli</b>, consiguiendo de esta manera su segunda victoria en la <Link href='/articulos/ufc'>UFC</Link> y la primera por nocaut en la compañía. Con esta victoria, Shara mantiene su invicto de ahora 13-0, siendo 11 de sus victorias por la vía del nocaut.</p>
                    <p>En una pelea donde tuvieron que buscar un reemplazo para enfrentar al ruso 2 veces, un Trocoli que tomó la pelea en cortísimo aviso, fue capaz de hacer un digno papel en un primer asalto que desde este espacio creemos que ganó, pero que en el tercero ya estando bastante cansado, no pudo hacer nada ante las patadas y la combinación de golpes de la nueva estrella de Daguestán.</p>
                    <h2>Johnny Walker Cae KO Ante Volkan Oezdemir</h2>
                    <p>La primera pelea de la cartelera estelar también nos trajó el primer KO de la noche, que en este caso benefició al suizo que le conectó un tremenedo nocaut al brasileño <b>Johny Walker</b>, que con este recibió el segundo consecutivo luego de haber caído derrotado ante <Link href='/peleadores/magomed-ankalaev'>Ankalaev</Link>, y que luego de recibir un derechazo no tuvo que hacer. De esta manera Oezdemir seguramente escale en la división, dado que al momento de hacer la pelea estaba ranqueado #9, enfrentándose ante un peleador ranqueado #7.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/1dnL3xNbXKU?si=Oz7iVEO-OF9WmCxU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}