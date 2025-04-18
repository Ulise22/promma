import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/ilia_topuria_georgia.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Ilia Topuria Sube a Peso Ligero',
    description: "Recientemente en una entrevista con El Partidazo de COPE, Ilia Topuria soltó una bomba, afirmando querer abandonar su división, para subir a peso ligero y buscar el doble cinturón",
    openGraph: {
        title: 'Ilia Topuria Sube a Peso Ligero',
        description: "Recientemente en una entrevista con El Partidazo de COPE, Ilia Topuria soltó una bomba, afirmando querer abandonar su división, para subir a peso ligero y buscar el doble cinturón",
        url: 'https://fullmma.org/noticias/ilia-topuria-sube-a-peso-ligero'
    }
}

export default function MovsarEvloevSobrePeleaConTopuria () {
    return(
        <main>
            <ArticleHero title='¡Ilia Topuria Abandona la División de Peso Pluma para Pelear en Peso Ligero! ¿Tiene Sentido que Busque Pelear en Peso Ligero Ahora?' subtitle="El campeón español Ilia Topuria afirma que quizás vimos su última pelea en peso pluma, y que busca pelear en peso ligero contra Charles Oliveira" image={hero} date='2024-12-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente el actual campeón español de peso pluma, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, lanzó un bombazo en El Partidazo de COPE, donde confesó que está muy interesado en abandonar la división en la que compite ahora (uno entiende que dejando vacante su título), para comenzar a pelear en la división de Peso Ligero, enfrentando en abril o mayo al contendiente #1, <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. </p>
                    <p>Después de convertirse en campeón de la división en febrero de este año 2024 en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, al noquear en el segundo asalto al histórico <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, y de tener sólo una defensa en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link> contra el excampeón de la división, <Link href='/peleadores/max-holloway'>Max Holloway</Link>, a quien conseguiría noquear en el tercer asalto de la pelea. El actual campeón, ya analiza moverse de división para buscar un segundo cinturón, que ahora mismo está en manos de <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>. </p>
                    <p>¿Pero tiene sentido esto por parte de Ilia? Es difícil saber qué es lo que pasa por la mente de Topuria a la hora de tomar estas decisiones, pero hay algunas cosas que se pueden saber. Primero que esto no es oficial, y que pese a que sus declaraciones sacuden a la <Link href='/articulos/ufc'>UFC</Link>, sólo lo mencionó como una posibilidad y no es algo que que oficialmente vaya a hacer. Lo segundo, es que como el mismo comentó, una de las razones por las que analiza hacer este movimiento, es porque le están costando los cortes de peso a las 145lbs, por lo que, en caso de moverse a las 155lbs, tendría un trabajo mucho más sencillo para hacer estos cortes de peso.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="es" dir="ltr">WOW!!! WOW!!! Ilia Topuria quiere pelear contra Charles Oliveira para su siguiente combate en peso ligero <a href="https://twitter.com/hashtag/UFC?src=hash&amp;ref_src=twsrc%5Etfw">#UFC</a> <a href="https://t.co/GjbLL4tve8">pic.twitter.com/GjbLL4tve8</a></p>&mdash; Pelunaton (@pelunaton) <a href="https://twitter.com/pelunaton/status/1866257325264097475?ref_src=twsrc%5Etfw">December 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>Pero desde el punto de vista deportivo, me gustaría aportar una postura que se la escuché a Chael Sonnen (hablando de otros peleadores), pero no ví a muchos replicar en español. Y es que en caso de que tu objetivo sea ser campeón de 2 divisiones diferentes, como parece serlo con Ilia, es mucho más sencillo y rápido lograrlo perdiendo tu cinturón o dejándolo vacante, dado que ya no tenés la responsabilidad de cargar con una división entera en tus hombros, ya no estás obligado a pelear y defender con quien quiera que sea el contendiente #1. Por el contrario, casi todos entendemos que si fuiste campeón de una división inferior, estás a una victoria en la siguiente división de pelear por el título. Un claro ejemplo de esto es <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que se convirtió en el campeón de peso medio de la UFC al derrotar a <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, que perdió el cinturón en la revancha, pero una vez que perdió este cinturón, ya no tenía ninguna obligación en la división de peso medio, por eso pudo subir a los pesos semipesados, ganarle a Blachowicz, y ya en su siguiente combate pudo pelear por el cinturón contra <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>.</p>
                    <p>Sin la necesidad de perder, en caso de que Topuria dejara vacante su cinturón, podría seguir el mismo camino que <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, porque pese a que Makhachev mencionó estar cansado de darle la oportunidad a los tipos pequeños, en caso de que el español peleara contra Charles Oliveira, y le ganara de forma contundente, todos entenderíamos que se convirtió en el nuevo contendiente #1, y no habría ninguna excuso por parte de Islam para rechazar la pelea. </p>
                    <p>Puede que Ilia esté viendo esto y por eso opte por este camino. Dado que si tomara el camino más largo, teniendo que limpiar primero su división, venciendo a Volkanovski en una revancha, después teniendo que enfrentar a <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, luego a Movsar Evloev, quizás a alguien como Lerone Murphy, se le van a ir los años, y corre el riesgo de que sigan apareciendo contendientes a los que va a tener que enfrentar, y de que <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> se mueva de división para buscar él ser doble campeón, haciendo que al final esta pelea nunca se dé. </p>
                    <p>Para sumar a esto que acabo de decir, recordemos que en su estrevista con La COPE, también mencionó querer retirarse a los 30 años, por lo que sabemos que sus intenciones no son las de ser un luchador como <Link href='/leyendas/jose-aldo'>José Aldo</Link>, con más de 5 defensas y que luego de casi 10 años de su derrota con <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> sigue peleando. Es más, por el contrario, pareciera querer seguir los pasos de Conor en este sentido, que luego de ganar el cinturón de 145lbs, sin haber defendido, subió a las 170lbs para pelear con Nate Diaz 2 veces, y luego bajó para ganar el cinturón de 155lbs, convirtiéndose en doble campeón. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">🗣️ “I&#39;m 27… I hope to be out by 30.”<br /><br />- Ilia Topuria via <a href="https://twitter.com/partidazocope?ref_src=twsrc%5Etfw">@partidazocope</a> 🇪🇸 <a href="https://t.co/eIpsH2VMfD">pic.twitter.com/eIpsH2VMfD</a></p>&mdash; MMA Orbit (@mma_orbit) <a href="https://twitter.com/mma_orbit/status/1866271232640843840?ref_src=twsrc%5Etfw">December 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>En conclusión, es difícil saber que pensará o que hará la UFC respecto a lo planteado por <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, pero puede que haya algo de lógica detrás de los movimientos que se está planteando el luchador georgiano. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}