import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/10-20/jones_evita_aspinall.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Jon Jones Evita a Tom Aspinall',
    description: '',
    openGraph: {
        title: 'Jon Jones Evita a Tom Aspinall',
        description: '',
        url: 'https://fullmma.org/noticias/jones-esquiva-aspinall'
    }
}

export default function JonesEsquivaAspinall () {
    return(
        <main>
            <ArticleHero title='¿Jon Jones Está Evitando a Tom Aspinall?' subtitle='El actual campeón de peso pesado de UFC Jon Jones, ha rechazado pelear con el campeón interino Tom Aspinall a la espera de combatir en su lugar a Stipe Miocic.' image={hero} date='2024-07-16' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Jon Jones vs Tom Aspinall</h2>
                    <p>El actual campeón de peso pesado de la <Link href='/articulos/ufc'>UFC</Link>, considerado por la mayoría como el mejor de la historia, <Link href='/peleadores/jon-jones'>Jon Jones</Link> ha rechazado por activa y por pasiva una pelea ante el actual campeón interino <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>, quien luego de vencer al ruso <b>Sergei Pavlovich</b> por nocaut en el primer asalto se quedó con el cinturón interino. </p>
                    <p>Para poner en contexto, se esperaba que Jon Jones encabezara el UFC 295, en lo que sería su primera defensa del título ante <b>Stipe Miocic</b>, sin embargo, menos de un mes antes se canceló la pelea debido a una lesión que sufrió el estadounidense en el pectoral, que lo vió obligado a realizarse una cirugía y por ende a abandonar el combate.Como suele ser usual cuando un campeón no puede defender su título por razones de fuerza mayor, como en este caso una lesión, en su lugar se puso en juego un título interino para la división de peso pesado, entre el inglés <b>Tom Aspinall</b> y el ruso <b>Sergei Pavlovich</b>, dejando fuera de la contienda tanto a Jon Jones por su lesión, como a <b>Stipe Miocic</b>, debido a que era esperable que ambos peleadores se retiren después de su combate.</p>
                    <YouTubeEmbed videoid='dx9z0t4ZOzY' />
                    <p>Lo usual suele ser que, luego de ponerse en juego un título interino, se organice una pelea entre el campeón indiscutido y el cmapeón interino, para unificar los cinturones, o, en caso de que por las razones que sean, el campeón sigue sin poder defender su título, se asciende al que en ese momento sea campeón interino a campeón indiscutido, despojando del título a quien no pueda defenderlo. Sin embargo en esta ocasión las cosas se van a realizar de forma diferente, dado que ya se confirmó que Tom Aspinall va a defender su título interino ante <b>Curtis Blaydes</b> en el <b>UFC 304</b> el próximo 27 de julio de 2024, es decir, que no habrá ninguna unificación. Es más, de hecho el mismo Jon Jones dice que su próxima pelea será ante Stipe, pasando por alto al campeón interino, algo inédito en la UFC.</p>
                    <p>Para comparar con otras situaciones, la última vez que se puso en juego un cinturón interino, fue cuando el campeón de peso pluma en ese entonces, <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> subió a peso ligero para buscar el doble campeonato enfrentando al campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>. Esta pelea se tuvo lugar en el UFC 284, y para no dejar a la división de peso pluma estancada, en ese mismo evento como pelea coestelar, se puso en juego un cinturón interino entre el mexicano <b>Yair Rodríguez</b> y <b>Josh Emmett</b>, que dió como ganandor a Yair.</p>
                    <p>5 meses después Volkanovski volvería a pelear en peso pluma y se enfrentaría al campeón interino Yair Rodríguez. La pelea la gana el campeón Volk y unifica el cinturón. De esta manera es como se supone que se manejan los cinturones interinos, se ponen en juego cuando el campeón no puede defenderlo, con la idea de que la división no quedé estancada, y en el momento en que el campeón está en condiciones para defender su título, se enfrenta al campeón interino.</p>
                    <YouTubeEmbed videoid='FczWLCToWE0' />
                    <p>Esta situación ha hecho de la división de peso pesado un completo caos, con 2 campeones diferentes que parecen ir defendiendo por su lado sin enfrentarse entre sí. Jon Jones ha defendido su postura de no pelear contra Tom, argumentando que desde su punto de vista es un contendiente más, y que una pelea ante Stipe Miocic no sólo le parece más interesante, sino que sería ante un rival más difícil, dado que se estaría enfrentando a quien debatiblemente es el mejor peso pesado de la historia. Sin embargo muchos somos los fans que no podemos dejar de remarcar, que Stipe es un peleador de casi 42 años, que no pelea hace 3 años, y cuyo último combate fue una derrota por KO ante <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link>. Mientras que Aspinall es un peleador mucho más joven con 31 años, que viene de ganar 10 de sus últimas 11 peleas, además que su última derrota fue por una lesión en la rodilla, por lo que no perdió realmente.</p>
                    <p>Hace un par de meses, por ejemplo, Jones escribió un tweet en su cuenta personal donde mencionaba que entre Tom y Curtis no tenían ningún campeonato en sus espaldas, mientras que entre el mismo Jones y Miocic sumaban 20 cinturones de campeonato.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Some Saturday math for everyone <br />Curtis 0 + Tom 0 championship belts = 0 <br />Jon 14 + Stipe 6 championship belts = 20 <br /><br />To be fair to Curtis and Tom, I didn’t count my interim title win either lol. But yeah, sure, you guys are fighting for the real belt. <a href="https://twitter.com/hashtag/Facts?src=hash&amp;ref_src=twsrc%5Etfw">#Facts</a></p>&mdash; BONY (@JonnyBones) <a href="https://twitter.com/JonnyBones/status/1791938634582487366?ref_src=twsrc%5Etfw">May 18, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>Desde este espacio creemos que Jon Jones es el mejor peleador de la historia, independientemente de si pierde su próximo combate ante el rival que sea. Sería raro pensar que un luchador como Jon Jones tenga miedo de enfrentar a quien sea, sin embargo, no es fácil observar que entre enfrentar a un joven Aspinall con una tremenda habilidad y con toda el hambre de gloria encima, y enfrentar a un luchador que está casi retirado, que hace años que no pelea, y que cuyo último combate fue una derrota, Jones está eligiendo enfrentar al segundo.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}