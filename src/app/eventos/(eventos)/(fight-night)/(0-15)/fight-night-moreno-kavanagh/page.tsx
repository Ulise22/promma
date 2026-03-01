import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/moreno-vs-kavanagh.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC México: ¡Brandon Moreno vs Loneer Kavanagh!',
    description: 'Noche de UFC en Mexico con Brandon Moreno enfrentanod a Loneer Kavanagh en la cartelera estelar. Y con Marlon Chito Vera vs David Martinez en la coestelar.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmoreno-vs-kavanagh.c91f334f.webp&w=828&q=65',
        title: 'UFC México: ¡Brandon Moreno vs Loneer Kavanagh!',
        description: 'Noche de UFC en Mexico con Brandon Moreno enfrentanod a Loneer Kavanagh en la cartelera estelar. Y con Marlon Chito Vera vs David Martinez en la coestelar.',
        url: 'https://fullmma.org/eventos/fight-night-moreno-kavanagh'
    }
}

export default function MorenoKavanagh () {
    return(
        <main>
            <ArticleHero title='UFC México: ¡Loneer Kavanagh Derrota a Brandon Moreno por Decisión Unánime!' subtitle='¡Ailín Pérez Derrota a Macy Chiasso por Decisión Unánime! ¡David Martínez Derrota a Marlon Chito Vera por Decisión Unánime! ¡King Green Noquea a Daniel Zellhuber en el Segundo Asalto!' image={hero} date='2026-02-28' author={null} updatedDate='2026-03-01' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Nueva noche de UFC en latinoamérica, cuando en la capital de México, que será encabezada por el histórico excampeón mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, quien se enfrentará al joven prospecto inglés <b>Lone&apos;er Kavanagh</b>, en un combate que promete mucha acción. Por si fuera poco, la pelea coestelar nos trae otro gran combate, donde el mexicano #10 de peso gallo <b>David Martinez</b>, se enfrentará al histórico ecuatoriano <Link href='/peleadores/marlon-vera'>Marlon &quot;Chito&quot; Vera</Link>, que actualmente está ranqueado #9. </p>
                    <p>Por si fuera poco, esta cartelera estará repleta de luchadores latinoamericanos y mexicanos, con combates que valen la pena ver, de los cuales queremos destacar especialmente el de <b>Daniel Zellhuber</b> ante el histórico <b>King Green</b>, que apunta a ser la pelea de la noche. Además del combate de la argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, quien viene de una racha de 5 victorias consecutivas, ranqueada #7 en la división de peso gallo, que estará enfrentando a la estadounidense <b>Macy Chiasson</b>, que actualmente está ranqueada #8 en la división. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Damian Pinas Noquea a Wes Schultz en el Primer Asalto</h2>
                    <p>Espectacular victoria para el debutante de Aruba <b>Damian Pinas</b>, quien en su primer combate en la UFC logra conectar un golpe para ganar por nocaut en el primer asalto ante el estadounidense <b>Wes Schultz</b>, manteniendo su racha perfecta de 100% de finalizaciones e iniciando con el pie derecho su contrato con la UFC. </p>
                    <h2>Francis Marshall Somete a Erik Silva en el Primer Asalto</h2>
                    <p>Segunda finalización en el primer asalto de la noche, esta vez por sumisión de la mano del estadounidense <b>Francis Marshall</b>, quien partía como favorito en las apuestas e hizo valer dicho favoritismo, conectando un mataleón para someter al venezolano de 39 años <b>Erik Silva</b> en el primer asalto del combate. </p>
                    <h2>Regina Tarin Derrota a Ernesta Kareckaite Por Decisión Unánime</h2>
                    <p>Brutal debut de la mexicana <b>Regina Tarin</b>, quien aceptó la pelea en corto aviso en reemplazo de la argentina <b>Sofía Montenegro</b>, y demostró que tiene nivel para la UFC, dándonos un peleón, en lo que fue una temprana candidata a pelea de la noche, con ambas luchadoras regalándonos un espectáculo de violencia, conectándose golpes por todos lados en lo que fue un espectáculo de pelea que finalmente ganó la mexicana Regina Tarin 30-27 por decisión unánime. </p>
                    <h2>Javier Reyes Noquea a Douglas Silva de Andrade en el Final del Primer Asalto</h2>
                    <p>Brutal pelea la que acabamos de presenciar, con el brasileño <b>Douglas Silva de Andrade</b> estando a punto de noquear a su rival luego de un volado que hizo mucho daño, pero donde al cabo de un par de minutos cambia totalmente el guión de la pelea, con el debutante colombiano <b>Javier Reyes</b> siendo capaz de darle la vuelta a la pelea, conectando golpes que hicieron mucho daño al de Brasil, derribándolo a golpes y finalmente finalizando mientras lo golpeaba desde la espalda en el piso para que el árbitro dé por terminado el combate, dando a Javier Reyes como ganador por TKO en el último segundo del primer asalto. </p>
                    <h2>Cristian Quiñonez Derrota a Kris Moutinho Por Decisión Unánime</h2>
                    <p>Gran victoria del local mexicano <b>Cristian Quiñonez</b>, quien fue ampliamente superior a su rival, especialmente durante los primeros 2 asaltos, en los que conectó en volumen al estadounidense <b>Moutinho</b>, llegando bastante cansado al tercer asalto, pero siendo capaz de aguantar y mantener el resultado de la pelea para finalmente ganar por decisión unánime ante su gente. </p>
                    <h2>Ailín Pérez Derrota a Macy Chiasso por Decisión Unánime</h2>
                    <p>Espectacular victoria de la argentina <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, quien a pesar de sufrir bastante durante el primer asalto, luego de que conectó un derribo que finalmente la dejó en una posición incomoda durante todo el combate, pasando más tiempo defendiendo los intentos de sumisión de <b>Macy Chiasson</b> que atacando, finalmente fue capaz de sobrevivir y dar unos 2 últimos asaltos mucho mejores, con el estilo de pelea al que ya nos tiene acostumbrados, conectando golpes potentes y siendo capaz de derribar a su rival siempre que lo intentó, dominando en el suelo y llevándose al final una merecida victoria por decisión unánime 29-28, para alcanzar su sexta victoria consecutiva, siendo la racha de victorias más larga de toda la división. </p>
                    <h2>Ryan Gandra Noquea a Jose Daniel Medina en el Primer Asalto</h2>
                    <p>Espectacular debut del brasileño <b>Ryan Gandra</b>, que a los 40 segundos del combate fue capaz de noquear al luchador boliviano <b>Jose Daniel Medina</b>, iniciando con el pie derecho en la UFC y garantizándose el bono de 25k por finalización. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Santiago Luna Derrota a Angel Pacheco por Decisión Unánime</h2>
                    <p>Espectacular victoria del mexicano <b>Santiago Luna</b>, quien fue ampliamente superior a su rival estadounidense <b>Angel Pacheco</b>, que no encontró respuesta ante los golpes del mexicano, recibiendo puños por todos lados, demostrando una mandibula durísima, al no caer noqueado. De esta forma, el mexicano Santiago Luna se lleva la victoria por decisión unánime y extiende su récord invicto a 8-0. </p>
                    <h2>Imanol Rodriguez Noquea a Kevin Borjas en el Segundo Asalto</h2>
                    <p>Espectacular debut del mexicano <b>Imanol Rodriguez</b> en la división de peso mosca de la UFC, que luego de sufrir bastante en el primer asalto, estando a punto de ser noqueado por el peruano <b>Kevin Borjas</b>, fue capaz de recuperarse en medio del asalto, y en el segundo, ya con más calma, fue capaz de conectar una avalancha de golpes muy potentes que terminarían por noquear a su rival, debutando con victoria y extendiendo su récord invicto a 7-0. </p>
                    <h2>Édgar Cháirez Derrota a Felipe Bunes por Decisión Dividida</h2>
                    <p>En una gran pelea y bastante cerrada como demuestra la decisión de los jueces, quien termina llevándose la victoria es el peleador local mexicano <b>Édgar Cháirez</b>, quien luego de sufrir bastante durante el primer asalto, fue capaz de ir dando vuelta el combate, yendo de menos a más, con el último asalto siendo el mejor de todos para él. De esta forma, luego de que 2 de los 3 jueces le dieran la victoria por 29-28, Cháirez se lleva la victoria en casa. </p>
                    <h2>King Green Noquea a Daniel Zellhuber en el Segundo Asalto</h2>
                    <p>Brutal nocaut del estadounidense <b>King Green</b>, quien sorprende a todos con una actuación espectacular en territorio hostil, logrando dominar completamente a <b>Daniel Zellhuber</b> durante el primer asalto, conectando más y mejor, y luego finalizando el trabajo al final del segundo asalto, cuando con uno de sus golpes tumbaría al suelo al mexicano, llevando al árbitro a separar a los peleadores y dar como ganador por TKO a King Green. </p>
                    <h2>David Martínez Derrota a Marlon Chito Vera por Decisión Unánime</h2>
                    <p>Linda pelea la que nos regalaron estos 2 latinoamericanos, con el mexicano <b>David Martínez</b> siendo quien finalmente se lleva la victoria por decisión unánime, comenzando muy bien el combate, ganando los primeros 2 asaltos, pero sufriendo mucho en el tercer asalto, cuando el ecuatoriano <Link href='/peleadores/marlon-vera'>Marlon Vera</Link> sabía que tenía que salir a ganar y sacó lo mejor que tenía, al punto que el mexicano reconoció que Chito es de los peleadores que más fuerte le pegaron. Finalmente fue David Martinez quien se llevó la victoria por decisión unánime 29-28. </p>
                    <h2>Loneer Kavanagh Derrota a Brandon Moreno por Decisión Unánime</h2>
                    <p>En lo que fue una espectacular actuación en territorio hostil, el inglés <b>Loneer Kavanagh</b> logra derrotar al mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, en lo que fue una masterclass de striking, mostrándose muy fuerte mentalmente al ser capaz de dar tremendo desempeño con todo el público en contra. </p>
                    <p>Aunque es verdad que en cuanto a la cantidad de golpes estuvieron bastante parejos, lo cierto es que los golpes de Kavanagh lastimaban muchísimo más a Brandon, provocando varios cortes y perdiendo mucha sangre a lo largo de la pelea, con el mexicano teniendo que recurrir a intentar derribos y usar su lucha para no recibir tanto daño con los golpes del inglés. </p>
                    <p>Finalmente los jueces dieron como ganandor al peleador de Reino Unido <b>Lone&apos;er Kavanagh</b> por decisión unánime, quien a partir del próximo martes entrará en el top 10 de la división de peso mosca, y de a poco se meterá en la discusión por el cinturón de la división. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}