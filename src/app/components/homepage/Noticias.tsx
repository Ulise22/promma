import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES HERO */
import whittakerVSaliskerov from '@/assets/noticias/previews/10-20/whittaker-vs-aliskerov.jpg'
import volkNextFight from '@/assets/noticias/previews/20-30/volk_next_fight_preview.jpg'
import belalOdiado from '@/assets/noticias/previews/20-30/belal_odiado-preview.jpg'
/* IMAGES */
import amandaVuelve from '@/assets/noticias/previews/20-30/amanda_nunes_vuelve-preview.jpg'
import ortegaLopes from '@/assets/noticias/previews/10-20/ortega-vs-lopes-preview.jpg'
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import chimaevCancel from '@/assets/noticias/previews/10-20/chimaev_whittaker-preview.jpg'
import cannonierVSimano from '@/assets/noticias/previews/10-20/fightnight-cannonier-imanov-preview.jpg'
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import lewisVsNascimento from '@/assets/noticias/previews/10-20/lewis-vs-nascimento-preview.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <p className={styles.noticias__title}>Noticias</p>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/noticias/fight-night-whittaker-aliskerov'>
                    <Image className={styles.noticiasHero__bigArticle__img} src={whittakerVSaliskerov} alt='' />
                    <p className={styles.page__title}>UFC Fight Night: ¡Whittaker Noquea en el Primer Asalto a Aliskerov! ¡Shara Bullet Noquea a su Rival en el Tercer Asalto!</p>
                    <span>Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.</span>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/noticias/proxima-pelea-volkanovski'>
                    <Image className={styles.noticiasHero__article__img} src={volkNextFight} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <p className={styles.noticiasHero__title}>¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski</p>
                        <span>¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?</span>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>08/07/2024</p>
                        </div>
                    </article>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal2}`} href='/noticias/porque-belal-es-odiado'>
                    <Image className={styles.noticiasHero__article__img} src={belalOdiado} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <p className={styles.noticiasHero__title}>¿Por qué Belal es Tan Odiado?</p>
                        <span>El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?</span>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>06/07/2024</p>
                        </div>
                    </article>
                </Link>
            </article>
            <article className={styles.noticias__container}>
                <ArticlePreview img={amandaVuelve} url='/noticias/vuelve-amanda-nunes' title='¿Amanda Nunes Vuelve a Pelear?' author={null} text='La mejor peleadora de la historia de las MMA está retirada, pero ¿Volverá Amanda Nunes al Octagono?' date='25/06/2024' />
                <ArticlePreview img={ortegaLopes} url='/noticias/ortega-vs-lopes-previa' title='Diego Lopes vs Brian Ortega: Una Pelea Que Puede Revolucionar la División' author={null} text='El próximo sábado 29 de junio se enfrentarán en la pelea coestelar el brasileño Diego Lopes y el estadounidense Brian Ortega en el UFC 303 es una que puede llegar a verse incluso como una eliminatoria por el título.' date='24/06/2024' />
                <ArticlePreview img={ufc302} url='/noticias/ufc302' title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' author={null} text='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.' date='02/06/2024' />
                <ArticlePreview img={chimaevCancel} url='/noticias/khamzat-whittaker-cancelada' title='Whittaker vs Chimaev ¿Cancelada?' author={null} text='A un par de semanas para el enfrentamiento en Arabia Sáudita entre 2 de los mayores contendientes al título de Peso Medio de UFC, pareciera que se cae la pelea.' date='13/06/2024' />
                <ArticlePreview img={cannonierVSimano} url='/noticias/fight-night-cannonier-imanov' title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' author={null} text='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.' date='09/06/2024' />
                <ArticlePreview img={conor} url='/noticias/mcgregor-cancela-pelea' title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' author={null} text='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' date='07/06/2024' />
                <ArticlePreview img={rivalsIlia} url='/noticias/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' author={null} text='Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?' date='23/02/2024' />
                <ArticlePreview img={lewisVsNascimento} url='/noticias/fight-night-lewis-nascimento' title='UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!' author={null} text='En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.' date='12/05/2024' />
            </article>
        </section>
    )
}