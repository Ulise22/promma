import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/allen-vs-duncan.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Brandon Allen vs Christian Leroy Duncan!',
    description: '',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fallen-vs-duncan.27f1826b.webp&w=828&q=65',
        title: 'UFC Fight Night: ¡Brandon Allen vs Christian Leroy Duncan!',
        description: '',
        url: 'https://fullmma.org/eventos/ufc-fight-night-allen-vs-duncan',
    }
}

export default function AllenDuncan () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Brandon Allen vs Christian Leroy Duncan!' subtitle='¡Loopy Godinez Derrota a Ketlen Souza por Decisión Unánime! ¡Francisco Prado Noquea a Ismael Bonfim en el Primer Asalto!' image={hero} date='2026-10-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos noche de UFC en el META APEX con un espectacular evento estelar, cuando el #4 de la división de peso medio <Link href='/peleadores/brendan-allen'>Brendan Allen</Link>, se enfrente al #10 del ranking, el inglés <b>Christian Leroy Duncan</b>, en un comabte donde ambos vienen de buenas rachas ganadoras y que hoy buscan acercarse a una pelea por el título de la división. Por otro lado, en la pelea coestelar tendremos el enfrentamiento en peso ligero entre el brasileño <b>Matheus Camilo</b> y el inglés <b>Jai Herbert</b>. </p>
                    <p>Además, habrá presencia latina por partida doble el día de hoy, primero en las preliminares, cuando el argentino <b>Francisco Prado</b> se enfrente al brasileño <b>Ismael Bonfim</b>, en un combate que promete y mucho. Y luego en la cartelera estelar, cuando la #8 de peso paja femenino, la mexicana <b>Loopy Godinez</b>, se enfrente a la brasileña <b>Ketlen Souza</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Ernesta Karackaité y Melissa Gatto Empatan por Decisión Mayoritoria</h2>
                    <p>Empate en esta primer pelea de la noche, luego de que a la lituana <b>Ernesta Karackaité</b> se le descontará un punto por agarrarse de la reja en el primer asalto, dejando este como empate a pesar de que en realidad lo había ganado. El segundo asalto fue un dominió total de Ernesta, que en el striking mostró un nivel sobresaliente, además de defender de excelente manera los derribos. Y el último fue para la brasileña <b>Melissa Gatto</b>, quien consiguió un derribo temprano y controló en el suelo a su rival durante todo el asalto. De esta forma el primer combate de la noche acaba en empate mayoritario 28-28. </p>
                    <h2>Alice Pereira le gana a Daria Zhelezniakova por TKO en el primer asalto</h2>
                    <p>Brutal victoria por parte de la joven brasileña de 20 años <b>Alice Pereira</b>, quien dominó de principio a fin a su contrincante rusa, castigándola con codos en la cara que cortaron a Daria, sangrando tanto que una vez terminado el asalto fue revisado por un médico que determinó que no podía continuar. De esta forma, Alice Pereira gana su combate por TKO en el primer asalto. </p>
                    <h2>Allen Frye Jr. Noquea a Rj Harris en el Primer Asalto</h2>
                    <p>Espectacular la victoria que acaba de conseguir <b>Allen Frye Jr.</b>, quien estaba perdiendo por completo el combate y daba la sensación de que iba a caer KO en el cualquier momento, sin embargo, de la nada fue capaz de sacar una combinación de izquierda y derecha, seguido de varios golpes de derecha, para noquear a su rival y terminar ganando él en el primer asalto por la vía del nocaut. </p>
                    <h2>Brendson Ribeiro Somete a Felipe Franco en el Primer Asalto</h2>
                    <p>Locura de sumisión la que consiguió <b>Brendson Ribeiro</b> sobre su compatriota <b>Felipe Franco</b>, luego de que Felipe intentara derribarlo, el veterano Brendson conectó una guillotina que fue capaz de sostener una vez cayó al suelo, obligando al joven prospecto a tapear. De esta forma Brenson Ribeiro gana su combate por sumisión en el primer asalto. </p>
                    <h2>Niko Price Noquea a Leon Shahbazyan en el Primer Asalto y Se Retira</h2>
                    <p>Espectacular nocaut por parte del veterano estadounidense <b>Niko Price</b>, que hizo suya la pelea del retiro, dominando completamente a su rival armenio <b>Leon Shahbazyan</b>, hasta noquearlo a golpes en el suelo en el primer asalto. De esta forma, luego de más de una década subido al octágono de la UFC, Niko Price se retira con una victoria por nocaut en el primer asalto en su récord. </p>
                    <h2>Francisco Prado Noquea a Ismael Bonfim en el Primer Asalto</h2>
                    <p>Gran victoria del luchador argentino <b>Francisco Prado</b> en su regreso a la división de peso ligero, donde se desmotró que es donde mejor rinde, dominando de manera aplastante al brasileño <b>Ismael Bonfim</b>, a quien ya había hecho daño con su striking de pie, pero que luego de ser capaz de conectar un derribo, terminó de lastimar al brasileño en base a ground & pound, golpeándolo hasta que el árbitro terminó la pelea, otorgándole la victoria por TKO al joven argentino de 24 años en el primer asalto. </p>
                    <h2>Julius Walker Noquea a Gerald Meerschaert en el Segundo Asalto</h2>
                    <p>Gran victoria del estadounidense <b>Julius Walker</b>, quien dominó completamente a su rival, tanto en el primer asalto como en el segundo, donde el guión del combate fue el mismo, con Walker derribando a Gerald y castigándolo a golpes desde allí, amenzando con encontrar una sumisión en todo momento. Finalmente fue en el segundo asalto, cuando conectando codazos y golpes a la guardia de su riva, el árbitro notó que Gerald ya no se estaba defendiendo, frenó la pelea dando como ganador a Julius Walker por TKO en el segundo asalto. Además, luego de la derrota, <b>Gerald Meerschaert</b> se retira de las MMA luego de alcanzar su pelea número 60 profesional. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Otari Tanzilovi Noquea a Malcom Wellmaker en el Segundo Asalto</h2>
                    <p>Brutal nocaut conseguido por el georgiano <b>Otari Tanzilovi</b>, quien en un combate igualado, donde cerca estuvo de caer noqueado en el primer asalto, que sobrevivió aferrándose a la pierna de su rival y manteniéndolo contra la reja para evitar ser golpeado, fue capaz de desempatar y sentenciar el combate con una patada voladora a la cabeza de su rival que lo dejaría KO en el segundo asalto. De esta forma, el georgiano <b>Otari Tanzilovi</b> gana su primer combate en la UFC por KO en el segundo asalto, con el apoyo de <Link href='/peleadores/merab-dvalishvili'>Merab Dvlashvili</Link>, quien estaba entre el público apoyando a su compatriota. </p>
                    <h2>Andre Fili Noquea a Kai Kamaka III en el Segundo Asalto</h2>
                    <p>Locura total lo que acbaamos de presenciar, con un nocaut exactamente igual al que acabamos de presenciar hace unos minutos. Siendo que <b>Andre Fili</b> estaba sufriendo un combate bastante igualado durante el primer asalto, pero que fue capaz de sentenciar en el segundo, cuando conectó una patada a la cabeza de su rival que lo tumbaría inmediatamente. Ganando de esta forma la pelea por KO en el segundo asalto, y muy probablemente le bono a la actuación de la noche. </p>
                    <h2>Loopy Godinez Derrota a Ketlen Souza por Decisión Unánime</h2>
                    <p>Excelente victoria por parte de la luchadora mexicana <b>Loopy Godinez</b>, quien hizo un gran combate durante los 3 asaltos, especialmente en el último, cuando fue capaz de conseguir un derribo para mantener a su rival a ras de lona, donde la castigó a golpes desde una posición cómoda, para evitar ser golpeada, a diferencia de los primeros 2 asaltos, donde pese a ser superior a su rival brasileña, sufrió bastantes golpes que podrían haber puesto en peligro la victoria. De esta forma, la mexicana <b>Loopy Godinez</b> gana su combate por decisión unánime y se recupera de la última derrota sufrida en el <b>UFC 327</b>. </p>
                    <h2>Jai Herbert Derrota a Matheus Camilo Por Decisión Unánime</h2>
                    <p>Gran victoria para el luchador inglés <b>Jai Herbert</b>, quien sufrió para ganar pero consiguió su objetivo en un sólido combate, siendo en el tercer asalto cuando mostró su mejor cara, dominando claramente a su rival brasileño, convenciendo a los jueces de que merecía la victoria, ganando finalmente por decisión unánime. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}