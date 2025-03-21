import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/shara_bullet_feb_2025.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Shara Magomedov Pelea Febrero 2025',
    description: 'Con la impresionante actuación de Shara “Bullet” Magomedov el 26 de octubre de este año en el UFC 308, al conseguir una impactante victoria por nocaut en el segundo asalto, luego hacer tremendo highlight al conectar un doble spinning backfist, que debe ser personalmente de los mejores nocauts que vi en mi vida, el luchador daguestaní fue agregado a los rankings de la división de peso medio, ocupando el puesto #14 de las 185lbs. De esta forma, los fanáticos esperamos que los rivales a los que enfrente de ahora en más vayan creciendo respecto a la calidad como peleadores. Por esto nos preguntamos cuál será el próximo rival de Shara Magomedov, repasando algunos de los nombres que han sonado para enfrentarlo, y la posible fecha en la que se pueda dar esta futura pelea.',
    openGraph: {
        title: 'Shara Magomedov Pelea Febrero 2025',
        description: 'Con la impresionante actuación de Shara “Bullet” Magomedov el 26 de octubre de este año en el UFC 308, al conseguir una impactante victoria por nocaut en el segundo asalto, luego hacer tremendo highlight al conectar un doble spinning backfist, que debe ser personalmente de los mejores nocauts que vi en mi vida, el luchador daguestaní fue agregado a los rankings de la división de peso medio, ocupando el puesto #14 de las 185lbs. De esta forma, los fanáticos esperamos que los rivales a los que enfrente de ahora en más vayan creciendo respecto a la calidad como peleadores. Por esto nos preguntamos cuál será el próximo rival de Shara Magomedov, repasando algunos de los nombres que han sonado para enfrentarlo, y la posible fecha en la que se pueda dar esta futura pelea.',
        url: 'https://fullmma.org/noticias/shara-bullet-pelea-febrero-2025'
    }
}

export default function SharaBulletPeleaFebrero2025 () {
    return(
        <main>
            <ArticleHero title='¿Shara Magomedov vs Paulo Costa Para Febrero de 2025?' subtitle='¿Cuál será el próximo rival de Shara Bullet en febrero del 2025? ¿Israel Adesanya? ¿Paulo Costa? ¿Michael Venom Page?' image={hero} date='2024-11-04' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Con la impresionante actuación de <Link href='/peleadores/shara-magomedov'>Shara “Bullet” Magomedov</Link> el 26 de octubre de este año en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, al conseguir una impactante victoria por nocaut en el segundo asalto, luego hacer tremendo highlight al conectar un doble spinning backfist, que debe ser personalmente de los mejores nocauts que vi en mi vida, el luchador daguestaní fue agregado a los rankings de la división de peso medio, ocupando el puesto #14 de las 185lbs. De esta forma, los fanáticos esperamos que los rivales a los que enfrente de ahora en más vayan creciendo respecto a la calidad como peleadores. Por esto nos preguntamos cuál será el próximo rival de Shara Magomedov, repasando algunos de los nombres que han sonado para enfrentarlo, y la posible fecha en la que se pueda dar esta futura pelea. </p>
                    <p>Para comenzar, hay que tener en cuenta que Shara es un peleador que ha confesado querer ser de los más activos de la compañía, y que, por el momento, por cuestiones de fuerza mayor, sólo puede participar en eventos de <Link href='/articulos/ufc'>UFC</Link> organizados en Medio Oriente, lo que es un factor importante a la hora de buscarle un rival. Dado que su entrenador ya confirmó que se están preparando para pelear el próximo 1 de febrero de 2025, en el evento de la compañía que tendrá como sede a Riad, Arabia Saudita, por lo que, sea cuál sea su rival, tendría que estar disponible para esta fecha. </p>
                    <p>Textualmente, su entrenador declaró: <b>“Ya comenzamos la preparación para el 1 de febrero. No sabemos cuál oponente será, pero la fecha está fijada. Va a ser el primero de febrero en Riad, Arabia Saudita… Puede ser Israel Adesanya. No hay alguien mucho más “WOW” por ahí.”</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">🚨 Shara Bullet&#39;s coach says that his next fight will be in Saudi Arabia on February 1st 👀<br /><br />&quot;We already began preparation for February 1st. We don&#39;t know who the opponent will be, but the date is set. It&#39;s going to be February 1st in Riyadh, Saudi Arabia...<br /><br />It may be Israel… <a href="https://t.co/hU8MDhJeiE">pic.twitter.com/hU8MDhJeiE</a></p>&mdash; Championship Rounds (@ChampRDS) <a href="https://twitter.com/ChampRDS/status/1851389747824066882?ref_src=twsrc%5Etfw">October 29, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <h2>1. Israel Adesanya</h2>
                    <p> El primer nombre que suena, y quizás el menos probable de todos, es del excampeón de la división <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, que actualmente ocupa el puesto #2 en los rankings, y quien además viene de una derrota por el título de la división ante <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, luego de ser sometido en lo que fue la pelea estelar del <Link href='/covertura-ufc/ufc305'>UFC 305</Link>.</p>
                    <p>Al finalizar su última pelea ante Armen Petrosyan, en la entrevista post pelea, Shara llamó y pidió por una pelea ante el luchador nigeriano, argumentando ser el mejor striker de la división. Además de haber sido mencionado por su propio entrenador como una posibilidad. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/hvM3CFup_l0?si=tLY3BI2VVwOmLU43" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>2. Paulo Costa</h2>
                    <p>Otra de las posibilidades que sonó bastante en la última semana, es la de que pueda enfrentar al brasileño <b>Paulo Costa</b>, que actualmente está en el puesto #11 de la división, y que viene de una derrota por decisión dividida ante el excampeón <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>. Esta pelea suena especialmente a una petición de muchos fans, pero que llegó incluso a que el mismo Paulo Costa a través de sus redes sociales se haga eco de esto, dando la sensación de que no está negado a la posibilidad de enfrentar al pirata ruso. En sus redes sociales, junto a una foto que lo tenía a él y a Shara como protagonistas, escribió: <b>“¿De verdad quieren ver esto?”</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Are u guys really wanting to see this ? <a href="https://t.co/C7XVIyIkSC">pic.twitter.com/C7XVIyIkSC</a></p>&mdash; Paulo Costa ( Borrachinha ) (@BorrachinhaMMA) <a href="https://twitter.com/BorrachinhaMMA/status/1851545797977858415?ref_src=twsrc%5Etfw">October 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>La última vez que el brasileño se subió a un octágono, fue el 1 de junio de 2024 en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>, para, como mencionamos, enfrentar a Sean Strickland. Por lo que ya ha pasado tiempo suficiente. Costa debería contar con tiempo de sobra para preparar la pelea en febrero si es que finamente esto es lo que se termina haciendo. Además, ni en su pelea con Strickland, ni en la que tuvo con <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> en febrero de este año, pareció sufrir demasiado daño, lo que es positivo, puesto que llegaría en optimas condiciones a pelear en febrero del año que viene.  </p>
                    <p>Personalmente es una de las opciones que más agradan para pelear a Shara Magomedov, dado que se seguiría enfrentando a un striker, pero que está un nivel por encima de sus anteriores rivales. Paulo Costa pareciera ser la progresión adecuada para ir viendo que tan bueno es realmente el luchador daguestaní. Dado que además, me da la sensación de que es muy temprano para verlo pelear ante alguien como Israel Adesanya, o contra cualquier peleador del top5 de la división. </p>
                    <h2>3. Michael Venom Page</h2>
                    <p>Uno que desafió a Shara Bullet, fue el estadounidense Michael “Venom” Page, quien actualmente está ranqueado #13 en la división de peso wélter de la compañía, pero que sin embargo busca subir de división para competir con los pesos medianos. Por esta misma razón, el estadounidense no dudó en pedir la pelea ante Shara. Declarando lo siguiente: <b>“Estoy en peso medio ahora mismo, por lo que ni siquiera tienes que esperar tanto. Esa pelea allí, la tomaré sólo por diversión… Estoy en forma ahora, listo para ir. Esa es una buena pelea para mí, una buena pelea para todos… Deja a mi chico Izzy en paz, él está tratando de volver al trono. Yo tomaré su lugar.”</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Michael &#39;Venom&#39; Page is interested in a fight against Shara Bullet 👀<br /><br />&quot;I&#39;m at [middleweight] right now, you don&#39;t even have to wait too long. That [fight] there, I&#39;ll just take straight away just for the fun of it...<br /><br />I&#39;m in shape now, ready to go. That&#39;s a good fight for me, a… <a href="https://t.co/SnDyF7xTfg">pic.twitter.com/SnDyF7xTfg</a></p>&mdash; Championship Rounds (@ChampRDS) <a href="https://twitter.com/ChampRDS/status/1851647066344128751?ref_src=twsrc%5Etfw">October 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>Además, por lo que entiendo de sus declaraciones, Michael Page es un peleador dispuesto a enfrentar a Shara en la fecha y lugar que está buscando, por lo que, de querer realizarse este combate, no debería haber ningún problema en cuanto a logística. </p>
                    <p>En lo personal, esta es otra de las peleas que me gustaría ver, dado que MVP de igual forma es un striker muy vistoso que ha hecho de igual forma una gran cantidad de highlights en su carrera. Si Michael es capaz de subir de categoría, creo que seria un lindo emparejamiento para Shara Bullet que tendría delante a un excelente peleador que lo pondría a prueba. Además de que es casi una garantía que ambos luchadores darían una pelea de pie, lo que nos garantiza un espectáculo a los espectadores. </p>
                    <h3>Conclusión</h3>
                    <p>En resumen, creo que van a hacer pelear a Shara en febrero. Dudo que sea para enfrentar a Israel Adesanya, aunque quien sabe. Y me parece que los rivales más probables son Paulo Costa o Michael Venom Page, quienes cuentan con una trayectoria mayor a la Magomedov, pero que vienen de una derrota, por lo que necesitan pelear con un prospecto como Shara para recuperar el estatus que poseían. </p>
                    <p>Seguramente también haya nombres que se me estén pasando, pero creo que estos son los más relevantes. Además de que dudo que a esta altura emparejen al daguestaní con algún peleador por fuera de los rankings. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}