import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/0-15/ufc300.jpeg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export default function UFC300MainEvent () {
    return(
        <main>
            <ArticleHero title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! !Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea¡' subtitle='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.' image={hero} date='2024-04-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Deivenson Figueiredo vs Cody Garbrandt</h2>
                    <p>¡Deveison Figueiredo somete en el segundo asaldo a Cody! En una pelea donde habíamos visto a un muy buen Cody Gardbrandt mientras la pelea estuvo de pie, el brasileño ex-campeón de la división de peso mosca sólo necesito de un derribo exitoso para llevar la pelea a un terreno en el que se encontró más cómodo, siendo capaz de en el segundo asalto, someter a su rival.</p>
                    <h2>Bobby Green vs Jim Miller</h2>
                    <p>¡Bobby Green derrota a Jim Miller por decisión unánime! En una increíble pelea, vimos a un Bobby Green bastante dominante, que pese a que en el primer asalto recibió el susto que provocó la mano izquierda de Miller, fue capaz de dominar el combate, estando cerca del nocaut al final del combate, sin ser capaz de lograrlo sólo por los meritos de Jim Miller, que demostró ser un guerrero al resistir tal embestida.</p>
                    <h2>Jéssica Andrade vs Marina Rodriguez</h2>
                    <p>¡Jessica Andrade gana por decisión dividida! En un reñido combate donde ambas luchadoras se hicieron mucho daño, quien se terminó por llevar la victoria es la brasileña Jessica Andrade, que de esta forma agranda su récord de ser la peleadora femenina con más victorias en la UFC.</p>
                    <h2>Jalin Turner vs Renato Moicano</h2>
                    <p>¡Renato Moicano gana por nocaut en el segundo asalto! En una locura de combate, Jalin Turner tuvo en su mano la victoria en el primer asalto, luego de que consiguió un knockdown cerca de terminar el asalto, sin embargo este no fue a buscar asegurar el nocaut y el brasileño se lo penalizó en el segundo asalto. Cuando luego de un derribo que llevó la pelea al ground and pound, Renato Moicano fue capaz de ganar por nocaut al #10 rankeado en su división.</p>
                    <h2>Sadiq Yusuff vs Diego Lopes</h2>
                    <p>¡<Link href='/peleadores/diego-lopes'>Diego Lopes</Link> noquea en el primer asalto a Yusuff! El brasileño-mexicano logra su 3 finalización consecutiva, además logrando finalizar su decimoquinta pelea en el primer asalto, venciendo al número #12 de la división de peso pluma</p>
                    <h2>Holly Holm vs Kayla Harrinson</h2>
                    <p>¡<Link href='/mujeres/kayla-harrison'>Kayla Harrinson</Link> somete a <Link href='/mujeres/holly-holm'>Holly Holm</Link> en el segundo asalto en su debut! En una muestra de la increíble habilidad con la que cuenta la nueva peleadora de la UFC, Kayla fue capaz de someter a la histórica <b>Holly Holm</b>, luego de dominar durante todo el primer asalto y el segundo. De esta manera ganando en su debut en la compañía y perfilándose como contendiente al título de peso gallo femenino.</p>
                    <h2>Kalvin Kattar vs Aljamain Sterling</h2>
                    <p>Aljamain Sterling gana la pelea por decisión unánime en lo que fue hasta el momento el combate menos interesante de toda la cartelera. Un Sterling dominante en el suelo y la lucha, fue capaz llevarse la pelea por decisión de los jueces.</p>
                    <h2>Bo Nickal vs Cody Brundage</h2>
                    <p>¡Bo Nickal somete a Cody Brundage en el segundo asalto! En la pelea que abrió la cartelera estelar del UFC 300, vimos como el claro favorito de la pelea dió a conocer sus habilidades al ser capaz de someter con un mataleón en el segundo asalto de la pelea.Manteniendo su invicto y elevando su récord a 6-0 con este resultado.</p>
                    <h2>Charles Oliveira vs Arman Tsarukyan</h2>
                    <p>¡<Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> gana por decisión dividida a <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>! En lo que fue una de las mejores peleas de la noche, y de las más esperadas por los fans, vimos la razón por la cual ambos peleadores son claros contendientes al título, brindandonos un aunténtico espectaculo, donde ambos peleadores estuvieron cerca de finalizarse mutuamente. Finalmente, la pelea se dejó en la mano de los jueces, que terminaron decantando la pelea a favor de Arman Tsarukyan, en una excelente victoria para el armenio que lo deja como claro candidato al título de peso ligero, en una revancha contra <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>.</p>
                    <h2>Justin Gaethje vs Max Holloway</h2>
                    <p>¡Faltando tan sólo 2 segundo para terminar la pelea, Holloway es capaz de noquear a Justin Gaethje y se convierte en el nuevo BMF! En lo que fue una locura total, con un <Link href='/peleadores/max-holloway'>Holloway</Link> que sorprendió a muchos al dominar completamente a un <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> que era el número #2 de la división de Peso Ligero. Pese a que Holloway tenía la pelea practicamente ganada, este invitó a Gaethje a intercambiar golpes durantes los últimos 10 segundos de la pelea, y es en estos momentos cuando es capaz de noquear al ahora ex campeón del BMF.</p>
                    <h2>Zhang Weili vs Yan Xiaonan</h2>
                    <p>¡<Link href='/mujeres/zhang-weili'>Zhang Weili</Link> gana por decisión unánime y retiene el cinturón de peso paja femenino! En una pelea que llegó a los 5 asaltos, la actual campeona de la división de peso paja femenino retuvo su título luego de llevarse la pelea por decisión unánime, en un combate que pudo acabar en cualquier momento, con la retadora <Link href='/mujeres/yan-xiaonan'>Yan Xiaonan</Link> consiguiendo knockdowns en un par de ocasiones, y con una campeona que en el primer asalto estuvo cerca de finalizar a su compatriota con un mataleón.</p>
                    <h2>Alex Pereira vs Jamahal Hill</h2>
                    <p>¡Alex Pereira noquea en el primer asalto a Jamahal Hill en su primer defensa del título! En lo que sería la primer defensa del título de peso semipesado de <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, haría una vez más, una desmotración de lo potente que es su mano izquierda, consiguiendo otra victoria por nocaut luego de conseguir conectar un gancho con la zurda. De esta manera terminamos la noche especial del UFC 300 con un nocaut en el primer asalto, con un Pereira que que con tan sólo 12 peleas ya comienza a hacerse un nombre importante en la historia de las MMA, acumulando un récord de 10-2.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}