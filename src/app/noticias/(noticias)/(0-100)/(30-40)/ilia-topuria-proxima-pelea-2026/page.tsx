import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/ilia-next_fight-2026.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Link from 'next/link'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Próxima Pelea de Ilia Topuria 2026: ¿Arman Tsarukyan o Paddy Pimblett?',
    description: "Finalizado el último evento UFC Qatar el sábado pasado, parecería que la respuesta es clara: Arman Tsarukyan es el próximo rival de Ilia Topuria. ",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Filia-next_fight-2026.9640dfb6.webp&w=828&q=65',
        title: 'Próxima Pelea de Ilia Topuria 2026: ¿Arman Tsarukyan o Paddy Pimblett?',
        description: "Finalizado el último evento UFC Qatar el sábado pasado, parecería que la respuesta es clara: Arman Tsarukyan es el próximo rival de Ilia Topuria. ",
        url: 'https://fullmma.org/noticias/ilia-topuria-proxima-pelea-2026'
    }
}

export default function IliaTopuriaNextFight2026 () {
    return(
        <main>
            <ArticleHero title='Próxima Pelea de Ilia Topuria 2026: ¿Arman Tsarukyan o Paddy Pimblett?' subtitle="Todo parece indicar que ya tenemos nuevo rival para el campeón español de UFC Ilia Topuria..." image={hero} date='2025-11-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Finalizado el último evento <b>UFC Qatar</b> el sábado pasado, parecería que la respuesta es clara: <Link href="/peleadores/arman-tsarukyan">Arman Tsarukyan</Link> es el próximo rival de <Link href="/peleadores/ilia-topuria">Ilia Topuria</Link>. Pero aunque viene de una victoria espectacular, sometiendo en el segundo asalto a <b>Dan Hooker</b>, lo cierto es que las cosas no son tan sencillas, por lo que vamos a repasar a todos los cantidatos a enfrentar a Ilia Topuria próximamente, y veremos cuantas posibilidades tienen realmente de enfrentarse al campeón español. </p>
                    <h2>1. Arman Tsarukyan</h2>
                    <p>En mi opinión, el rival más probable, y quien más lo merece por méritos deportivos en estos momentos, es <Link href="/peleadores/arman-tsarukyan">Arman Tsarukyan</Link>, quien desde hace tiempo merece una oportunidad titular, pero que diferentes circunstancias, incluidos sus propios errores, no pudo enfrentarse al campeón de la división. </p>
                    <p>Cabe recordar que en su momento a Tsarukyan se le dió la oportunidad de pelear por el título contra el entonces campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en enero de este mismo año, pero fue el mismo Arman quien se bajó de la pelea 24hs antes, argumentando una lesión en la espalda. La UFC no se toma bien estas cosas, por lo que antes de volver a presentarle una oportunidad titular, lo obligaron a pelear nuevamente para ganarse otra vez el derecho de pelear por el título, y así lo hizo este pasado sábado en el <b>UFC Qatar</b>, donde logró derrotar a <b>Dan Hooker</b>, luego de someterlo con un triángulo en el segundo asalto, ganándose nuevamente su derecho a pelear por el cinturón. </p>
                    <p>Como dije, para mí el claro candidato a pelear contra <Link href="/peleadores/ilia-topuria">Ilia Topuria</Link> por el título es él. Lo único que veo que puede perjudicarle, es que finalmente Topuria no defienda el cinturón y busque subir de categoría nuevamente, posibilidad de la que ya hablaré más adelante, o que por una cuestión de marketing, de dinero, o de agenda, prioricen a otro peleador en su lugar, como Paddy Pimblett, del que hablaremos a continuación.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">Arman, every time we see each other in person you freeze up like a scared duck with no idea what to do. You know I handle you however I want. I fight whoever the UFC chooses. And remember I slapped you and you just laughed, then you go around acting like a gangster. So keep… <a href="https://t.co/1O9S3PKOU1">pic.twitter.com/1O9S3PKOU1</a></p>&mdash; Ilia Topuria (@Topuriailia) <a href="https://twitter.com/Topuriailia/status/1992589518268973116?ref_src=twsrc%5Etfw">November 23, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>2. Paddy Pimblett</h2>
                    <p>A diferencia de Arman Tsarukyan, <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> no parece haber hecho tantos méritos deportivos como para pelear por el título ante Ilia, habiendo vencido a sólo 2 peleadores ranqueados, como lo son <b>King Green</b>, quien ya no está en los rankings, y a <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, que actualmente está #11 en el ranking de peso ligero. Pero cuenta con algo que los demás peleadores de la UFC no, fama y una historia de rivalidad con Ilia que data de años. </p>
                    <p>Pese a no ser la pelea deportivamente más justa en estos momentos, sin dudas sería la más mediática, dado que tanto Ilia Topuria como Paddy Pimblett son 2 estrellas de la UFC más grandes de la división en estos momentos, siendo ambos los más mediáticos, y compartiendo una historia de rivalidad entre ambos que hace parecer que genuinamente se caen mal mutuamente. </p>
                    <p>Y aún así, ambos están invictos en la UFC, con Paddy viniendo de una racha de 9 victorias consecutivas, y estando actualmente #5 en la división. Por lo que, pese a lo mejor otros peleadores lo merecen más, tampoco es una locura desde el punto de vista deportivo que Paddy sea el próximo retador al título, más si tenemos en cuenta que es la pelea que Ilia Topuria más desea. </p>
                    <h2>3. Islam Makhachev</h2>
                    <p>Quizás esta sea la pelea que me parece menos probable en estos momentos, pero aún así no hay que descartarla, porque podría eventualmente terminar sucediendo (aunque no sea ahora), es el combate contra el actual campeón de peso wélter <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, que implicaría que Ilia suba de peso nuevamente, para perseguir hasta peso wélter a Makhachev, en busca de conseguir algo completamente inédito como lo sería un triple campeonato. Para colmo, ante quien es sin dudas uno de los mejores peleadores de la historia de la UFC. </p>
                    <p>Estoy seguro que si dependiera de Ilia Topuria, Islam sería su próximo rival ahora mismo. También tengo la sensación de que a Makhachev también le interesa este combate por encima de otros. Pero aún así no creo que la UFC lo haga en estos momentos porque ambos campeones todavía tienen trabajo por hacer en sus divisiones, con Topuria teniendo que enfrentar a Paddy primero, y especialmente a Arman Tsarukyan. Mientras que Islam Makhachev tiene un trabajo aún más pesado por delante, con luchadores como <Link href='/peleadores/ian-garry'>Ian Garry</Link>, <Link href='/peleadores/shavkhat-rakhmonov'>Shavkat Rakhmonov</Link>, <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link> y <b>Michael Morales</b> asomándose como posibles contendientes al título. Por lo que, una pelea entre Makhachev y Topuria en estos momentos, implicaría dejar frenadas 2 divisiones enteras (especialmente la de peso wélter). </p>
                    <p>En resumen, creo que esta pelea es inevitable que suceda si ambos luchadores siguen ganando, pero que no pasará hasta luego de que ambos defiendan como mínimos 2 veces más sus cinturones. </p>
                    <YouTubeEmbed videoid='Z3om6R6rDwY' />
                    <h2>4. Justin Gaethje</h2>
                    <p>Finalmente el luchador más veterano de todos los acá mencionados, <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, quien sin dudas es un histórico de la división, que viene de una victoria, ocupando actualmente el #4 de la división. Para mí él también se merece una oportunidad de pelear por el título, pero tristemente lo veo poco probable. Primero porque no viene de un momento deportivo tan bueno como Tsarukyan, quien está arrasando en esta división y ocupa el #1 de los rankings, y segundo, porque tampoco es tan mediático como Paddy Pimblett como para vender una hipotética pelea. Siendo además un peleador de lo más veterano que hay, a mí me da la sensación de que no pondría en ningún apuro a Ilia, con el resultado más probable siendo una victoria por KO para el español, además de tampoco contar con un beef contra el campeón, lo que hace aún más dificil vender esta pelea si se hiciera. </p>
                    <p>Creo que es una posibilidad, que Ilia Topuria termine defendiendo ante Arman Tsarukyan, y que a Gaethje le ofrezcan hacer una pelea contra Pimblett en la misma cartelera para definir al próximo candidato al título. Si se diera esto, y Gaethje terminara venciendo al inglés, creo que sus posibilidades de pelear contra el campeón aumentarían un montón, pero de otra manera veo muy díficil que le ofrezcan una pelea titular. Lo cual es triste si tenemos en cuenta las declaraciones que dió Gaethje en su momento, afirmando que en caso de que no le ofrezcan una pelea por el título, se retiraría de las MMA, cosa que que no fue del agrado de Dana White. </p>
                    <YouTubeEmbed videoid='kiKwWxN_-ZI' />
                    <h2>Conclusión</h2>
                    <p>En conclusión, creo que lo más probable que suceda es que se termine haciendo una pelea entre Arman Tsarukyan e Ilia Topuria. Además, creo que a Justin Gaethje y a Paddy Pimblett les ofrecerán pelear entre ellos, para definir al siguiente retador del título. Como alternativa veo a Paddy Pimblett enfrentando a Topuria, y a Arman Tsarukyan teniendo que esperar al resultado de aquel combate para finalmente enfrentar a Ilia. Por mucho que me encantaría ver la pelea entre Makhachev y Topuria, la veo como la menos probable. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}