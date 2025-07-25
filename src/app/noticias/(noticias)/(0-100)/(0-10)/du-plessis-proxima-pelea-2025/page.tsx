import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/chimaev_or_strickland.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Du Plessis Próxima Pelea',
    description: '',
    openGraph: {
        title: 'Du Plessis Próxima Pelea',
        description: '',
        url: 'https://fullmma.org/noticias/du-plessis-proxima-pelea-2025'
    }
}

export default function ProximaPeleaDuPlessis2025 () {
    return(
        <main>
            <ArticleHero title='Dricus Du Plessis Próxima Pelea 2025: ¿Strickland o Chimaev?' subtitle='¿Quién de los 2 merece más ir a pelear por el título de peso medio, Sean Strickland o Khamzat Chimaev?' image={hero} date='2024-10-30' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente el luchador checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> dio un golpe sobre la mesa en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, cuando en lo que era la pelea coestelar del evento organizado en Abu Dhabi, sería capaz de convertirse en el primer peleador en someter a <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, consiguiendo esto además tan sólo en el primer asalto. Aquella destacada actuación no sólo le serviría para ganar el bono a la Actuación de la Noche, sino que ahora pondría en tela de juicio si merece ya ir a pelear por el cinturón, aún por encima del actual contendiente #1 <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, por eso vamos a discutir quién de los 2 merece más la pelea por el cinturón ante Dricus Du Plessis, y quien creemos que irá a pelear finalmente. </p>
                    <p>Primero que nada, para ser completamente honesto, en lo personal me cae bastante mejor Sean Strickland, y me gustaría que por lo menos peleara una vez más por el título y de ser posible me gustaría que lo ganara. Pero sacando eso de eso lado, al momento de comparar el pasado reciente de Chimaev y Strickland, es imposible negar que la pelea que más ilusión hace a la mayoría de los fanáticos es la de Chimaev con Du Plessis, por varios motivos.</p>
                    <p>Para comenzar, el checheno viene de una actuación que es genuinamente impresionante, y que, pese a que es sabida la calidad con la que cuenta este peleador, pocos esperábamos una actuación así de dominante. Además, sostiene un récord invicto de 14-0, que al día de la fecha, parece difícil ver a alguien sacándoselo, dado que por el momento no se lo vio estar ni cerca de perder alguna pelea, los únicos momentos de vulnerabilidad que mostró en los que puedo pensar en estos momentos, son un par de peleas que llegaron al tercer en lo que se lo vio muy cansado, demostrando una falta de cardio para combates que superan los 2 primeros asaltos, sin embargo, esto nunca fue un impedimento para que ganara sus peleas.</p>
                    <p>Por su parte, Strickland viene de una pelea menos impresionante pero igualmente dominante ante Paulo Costa, a quien logró vencer por decisión dividida en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>. Sin embargo, más allá de esta última pelea, mucho del mérito que hizo para reclamar una pelea por el título viene del <Link href='/covertura-ufc/ufc297'>UFC 297</Link>, al que llegó siendo el campeón, defendiendo ante Dricus Du Plessis, en lo que fue una pelea muy cerrada, en la que terminaría ganando por decisión dividida el sudafricano. En mi opinión el estadounidense había hecho mucho más daño a lo largo de los asaltos y de la pelea, por lo que merecía llevarse la victoria. Más allá de lo que yo crea, la pelea fue lo bastante cerrada, y la decisión lo bastante controversial, como para argumentar a favor de una revancha entre estos 2, como mínimo, por méritos deportivos, Strickland era más merecedor de la pelea por el título de lo que fue <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>. De esta manera lo había entendido el mismo Dana White que, hasta hace unas semanas, hablando de la posibilidad de llevar la UFC a Sudáfrica, mencionaba a Sean Strickland como el contendiente a enfrentar a Du Plessis. </p>
                    <YouTubeEmbed videoid='YIeIkG6fc5s' />
                    <p>El mismo Strickland viéndose venir este debate publico en su cuenta de X: <b>“Entienda una cosa… yo soy el siguiente en la línea... sea ha dicho, se ha escrito… en enero o febrero Dricus y yo vamos a pelear. Volvé a Chechenia y espera un par de meses… espera… lo siento, a Emiratos Arabes Unidos… no te permiten entrar a Chechenia… pero hey! Realiza estafas con cripto mientras esperas”.</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Understand one thing.... I am next in line..... Its been said, its been written... January/February me and <a href="https://twitter.com/dricusduplessis?ref_src=twsrc%5Etfw">@dricusduplessis</a> are scrapping <br /><br />Go back to Chechnya and wait a few months..... wait.. sorry UAE... you&#39;re not allowed in Chechnya...But hey crypto scams while you wait</p>&mdash; Sean Strickland (@SStricklandMMA) <a href="https://twitter.com/SStricklandMMA/status/1850292299433197788?ref_src=twsrc%5Etfw">October 26, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>Por su parte, el campeón sudafricano ha elegido a su favorito entre los 2 a enfrentar, hablando sobre esto en una entrevista RadioRaps. Afirmando que, desde el punto de vista de los fanáticos, y desde su punto de vista como campeón, prefiere enfrentar a Chimaev, dado que es la pelea que más lo emociona, al poder ser quien le quité su invicto. Además, que el hecho de que ya enfrentó a Strickland, ganando su combate, y que cree que le va a volver a ganar, es lo que hace que prefiera al peleador ruso por sobre el estadounidense. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">In an era of DUCKING champions:<br />Jones 🦆 Aspinall<br />Pereira 🦆 Ankalaev<br />Merab 🦆 Umar<br /><br />We have Dricus Du Plessis, who seemingly ONLY goes for the hardest fights: Whittaker, Strickland, Izzy AND NOW Khamzat.<br /><br />The people’s champ | <a href="https://twitter.com/dricusduplessis?ref_src=twsrc%5Etfw">@dricusduplessis</a> 👑🇿🇦 <a href="https://t.co/8shwxAqCvz">pic.twitter.com/8shwxAqCvz</a></p>&mdash; Kenny Okoye🇳🇬 (@TruthfulUfcFan) <a href="https://twitter.com/TruthfulUfcFan/status/1851626151917040115?ref_src=twsrc%5Etfw">October 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>Desde mi punto de vista, estoy de acuerdo con Dricus en que su pelea contra Chimaev es la que la gente quiere ver, incluso a mí me entusiasma más esta pelea que la que pueda tener con Strickland, dado que es la que deja más dudas sobre como puede terminar, además de que da espacio a que aparezca un campeón mediático en las 185lbs. </p>
                    <p>Sin embargo, lo que creo que va a suceder, es que le van a terminar dando la pelea por el título a Sean para enero o para febrero, y que el ganador va a enfrentarse a Chimaev unos meses después. Creo que es lo que van a hacer, primero porque es lo que parecen haberle prometido a Strickland, quien después de haber demostrado ser un hombre de compañía merece un reconocimiento de este estilo, y segundo porque me da la sensación de que a Chimaev tampoco le molesta esperar para pelear, y que, si tiene que hacerlo para disputar el cinturón, lo va a hacer.</p>
                    <p>De hecho, este es un gran factor que no vi a muchos mencionar, y es la gran inactividad que viene teniendo el checheno en el último tiempo, habiendo peleado sólo una vez este año, y solo una vez el pasado 2023. Por lo que no sería de extrañar que Khamzat estaría hasta encantado de esperar hasta octubre del año que viene para pelear, en caso de necesitarlo, además de que parece ser un peleador dispuesto a pelear con cualquiera, por lo que le debe dar igual si va a enfrentar a Strickland o a Du Plessis. </p>
                    <p>Por otro lado, especialmente si quien terminara ganando es Sean, no sería de extrañar que aceptara hacer su primer defensa de inmediato, 3 o 4 meses después de la pelea, como de hecho ya lo hizo luego de ser campeón ante Adesanya, enfrentando menos de 4 meses después al mismo Du Plessis. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}