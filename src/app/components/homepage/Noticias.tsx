import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES HERO */
import ortegaLopes from '@/assets/noticias/previews/10-20/ortega-vs-lopes-preview.jpg'
import whittakerVSaliskerov from '@/assets/noticias/previews/10-20/whittaker-vs-aliskerov.jpg'
import amandaVuelve from '@/assets/noticias/previews/20-30/amanda_nunes_vuelve-preview.jpg'
/* IMAGES */
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import chimaevCancel from '@/assets/noticias/previews/10-20/chimaev_whittaker-preview.jpg'
import cannonierVSimano from '@/assets/noticias/previews/10-20/fightnight-cannonier-imanov-preview.jpg'
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import lewisVsNascimento from '@/assets/noticias/previews/10-20/lewis-vs-nascimento-preview.jpg'
import ufc300MainEvent from '@/assets/noticias/previews/0-10/ufc300.jpeg'
import ufc301 from '@/assets/noticias/previews/10-20/ufc301-preview.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Noticias</h2>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/noticias/fight-night-whittaker-aliskerov'>
                    <Image className={styles.noticiasHero__bigArticle__img} src={whittakerVSaliskerov} alt='' />
                    <h2 className={styles.page__title}>UFC Fight Night: ¡Whittaker Noquea en el Primer Asalto a Aliskerov! ¡Shara Bullet Noquea a su Rival en el Tercer Asalto!</h2>
                    <p>Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.</p>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/noticias/vuelve-amanda-nunes'>
                    <Image className={styles.noticiasHero__article__img} src={amandaVuelve} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>¿Amanda Nunes Vuelve a Pelear?</h2>
                        <p>La mejor peleadora de la historia de las MMA está retirada, pero ¿Volverá Amanda Nunes al Octagono?</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>25/06/2024</p>
                        </div>
                    </article>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal2}`} href='/noticias/ortega-vs-lopes-previa'>
                    <Image className={styles.noticiasHero__article__img} src={ortegaLopes} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>Diego Lopes vs Brian Ortega: Una Pelea Que Puede Revolucionar la División</h2>
                        <p>El próximo sábado 29 de junio se enfrentarán en la pelea coestelar el brasileño Diego Lopes y el estadounidense Brian Ortega en el UFC 303 es una que puede llegar a verse incluso como una eliminatoria por el título.</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>24/06/2024</p>
                        </div>
                    </article>
                </Link>
            </article>
            <article className={styles.noticias__container}>
                <ArticlePreview img={ufc302} url='/noticias/ufc302' title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' author={null} text='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.' date='02/06/2024' />
                <ArticlePreview img={chimaevCancel} url='/noticias/khamzat-whittaker-cancelada' title='Whittaker vs Chimaev ¿Cancelada?' author={null} text='A un par de semanas para el enfrentamiento en Arabia Sáudita entre 2 de los mayores contendientes al título de Peso Medio de UFC, pareciera que se cae la pelea.' date='13/06/2024' />
                <ArticlePreview img={cannonierVSimano} url='/noticias/fight-night-cannonier-imanov' title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' author={null} text='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.' date='09/06/2024' />
                <ArticlePreview img={conor} url='/noticias/mcgregor-cancela-pelea' title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' author={null} text='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' date='07/06/2024' />
                <ArticlePreview img={rivalsIlia} url='/noticias/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' author={null} text='Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?' date='23/02/2024' />
                <ArticlePreview img={lewisVsNascimento} url='/noticias/fight-night-lewis-nascimento' title='UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!' author={null} text='En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.' date='12/05/2024' />
                <ArticlePreview img={ufc301} url='/noticias/ufc301' title='UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' author={null} text='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.' date='05/05/2024' />
                <ArticlePreview img={ufc300MainEvent} url='/noticias/ufc300-main-event' title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! ¡Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea!' author={null} text='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.' date='14/04/2024' />
            </article>
        </section>
    )
}