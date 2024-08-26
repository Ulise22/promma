import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/previews/0-10/chimaev_whittaker-preview.jpg'
import internado from '@/assets/noticias/insideArticle/chimaev/chimaev-internado.jpg'

export default function ChimaevWhittakerCancelada () {
    return(
        <main>
            <ArticleHero title='Whittaker vs Chimaev ¿Cancelada?' subtitle='A 9 días para el enfrentamiento en Arabia Sáudita entre 2 de los mayores contendientes al título de Peso Medio de UFC, pareciera que se cae la pelea.' image={hero} date='2024-06-13' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Robert Whittaker vs Khamzat Chimaev</h2>
                    <p>En el evento que se supone debía celebrarse el sábado 22 de junio, entre el ranqueado #3 <b>Robert Whittaker</b>, y el ranqueado #10 <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> en la división de peso medio de la <Link href='/articulos/ufc'>UFC</Link>, desde hace algunas horas que comenzó a esparcirse el rumor de que dicho combate terminaría por no suceder, sin específicar motivos. </p>
                    <p>La pelea prometía bastante, dado que el mismo Dana White la había anunciado como una eliminatoria por el título, viniendo ambos peleadores de una victoria en sus respectivos combates, venciendo Whittaker al brasileño <b>Paulo Costa</b> en el <Link href='/noticias/ufc298'>UFC 298</Link>, y viniendo Chimaev de una victoria contra <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, luego de vencerlo por decisión mayoritaria al finalizar los 3 asaltos en el UFC 294.</p>
                    <p>La suspensión del combate parece confirmarse con la reciente historia que público el peleador <b>mukhammad eskirkhanov</b> en su cuenta de instagram, donde se ve a Khamzat internado en un hospital y donde escribió la frase: &quot;Detrás de cada penurias hay alivio&quot;. Con lo que parece ser casi al 100% que por motivos de salud, Chimaev no podrá decir presente en el evento que estaba llamado a encabezar en Riyadh, Arabia Saudita.</p>
                    <Image className={styles.article__image} src={internado} alt='' />
                    <p>A falta de confirmación oficial por parte de la UFC, parece estar claro que Chimaev no va a poder competir, y queda esperar a ver qué se hará en ese caso, si se suspenderá la pelea estelar o si se buscara un reemplazo de última hora. Algunos medios han apuntado al francés <b>Imanov</b> como posible sustituto, en lo que de ser el caso debería ser una pelea en peso pactado, debido al poco tiempo que tendría el peleador para cortar el peso, ya que hay que recordar que el sábado pasado encabezó la cartelera del <Link href='/noticias/fight-night-cannonier-imanov'>Fight Night: Cannonier vs Imanov</Link>, en donde en una actuación destacada fue capaz de ganar la pelea por TKO en el cuarto asalto. Está claro que en caso de aceptar pelear, y de derrotar a Whittaker, el francés se perfilaría como un claro candidato al título a arrebar al sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>.</p>
                    <p>Este viene siendo un mes bastante complicado para la UFC, que en la previa parecía estar por traernos el mes más entretenido que se recuerde en mucho tiempo, donde ya vimos el <Link href='/noticias/ufc302'>UFC 302</Link>, con un <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> discutiendo el cinturón a <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, donde había 3 FightNights, siendo este entre Chimaev y Whittaker el más interesante, pero con su posible cancelación, y la posible baja de <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> en el <b>UFC 303</b>, quien debía hacer su regreso luego de 2 años de inactividad para enfrentar al estadounidense <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, nos va a quedar la sensación de poco, por lo mucho que prometía Junio para las MMA, y por las decepciones que nos deja, en caso de confirmarse que tanto Chimaev como McGregor no podrán decir presente a sus compromisos.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}