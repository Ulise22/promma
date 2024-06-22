import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES HERO */
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'
import ufc300EarlyPrelims from '@/assets/noticias/previews/0-10/ufc300_early-prelims.jpg'
import whittakerVSaliskerov from '@/assets/noticias/previews/10-20/whittaker-vs-aliskerov.jpg'
/* IMAGES */
import cannonierVSimano from '@/assets/noticias/previews/10-20/fightnight-cannonier-imanov-preview.jpg'
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import lewisVsNascimento from '@/assets/noticias/previews/10-20/lewis-vs-nascimento-preview.jpg'
import ufc300MainEvent from '@/assets/noticias/previews/0-10/ufc300.jpeg'
import ufc299 from '@/assets/noticias/previews/0-10/ufc299_preview.jpg'
import poirierVsMakhachev from '@/assets/noticias/previews/0-10/poirier-vs-makhachev.jpg'
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
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/noticias/ailin-vs-joselyne'>
                    <Image className={styles.noticiasHero__article__img} src={ailin} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302</h2>
                        <p>En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>01/06/2024</p>
                        </div>
                    </article>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal2}`} href='/noticias/ufc300-early-prelims'>
                    <Image className={styles.noticiasHero__article__img} src={ufc300EarlyPrelims} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>Primeros Preliminares UFC 300:¡Deivenson Figueiredo Somete a Cody en la Primer Pelea de la Noche!</h2>
                        <p>Arranca el UFC 300 con unas increíbles peleas en los primeros preliminares. Donde Figueiredo, Bobby Green, Jessica Andrade y Renato Moicano consiguieron la victoria.</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>13/04/2024</p>
                        </div>
                    </article>
                </Link>
            </article>
            <article className={styles.noticias__container}>
                <ArticlePreview img={cannonierVSimano} url='/noticias/fight-night-cannonier-imanov' title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' author={null} text='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.' date='09/06/2024' />
                <ArticlePreview img={conor} url='/noticias/mcgregor-cancela-pelea' title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' author={null} text='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' date='07/06/2024' />
                <ArticlePreview img={rivalsIlia} url='/noticias/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' author={null} text='Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?' date='23/02/2024' />
                <ArticlePreview img={lewisVsNascimento} url='/noticias/fight-night-lewis-nascimento' title='UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!' author={null} text='En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.' date='12/05/2024' />
                <ArticlePreview img={ufc301} url='/noticias/ufc301' title='UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' author={null} text='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.' date='05/05/2024' />
                <ArticlePreview img={ufc300MainEvent} url='/noticias/ufc300-main-event' title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! ¡Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea!' author={null} text='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.' date='14/04/2024' />
                <ArticlePreview img={ufc299} url='/noticias/ufc299' title='UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!' author={null} text='En una noche que nos regalos peleas espectaculares, Sean O&apos;malley defendió su título luego de dominar la pelea durante 5 asaltos y Dustin Poirier fue capaz de noquear a Saint Denis en el segundo asalto.' date='10/03/2024' />
                <ArticlePreview img={poirierVsMakhachev} url='/noticias/pelea-poirier-vs-makhachev' title='¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?' author={null} text='Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?' date='27/03/2024' />
            </article>
        </section>
    )
}