import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES HERO */
import lewisVsNascimento from '@/assets/noticias/previews/10-20/lewis-vs-nascimento-preview.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import ufc300EarlyPrelims from '@/assets/noticias/previews/0-10/ufc300_early-prelims.jpg'
/* IMAGES */
import ufc300MainEvent from '@/assets/noticias/previews/0-10/ufc300.jpeg'
import ufc299 from '@/assets/noticias/previews/0-10/ufc299_preview.jpg'
import ufc298 from '@/assets/noticias/previews/0-10/ufc298_preview.jpg'
import dwt2 from '@/assets/promotoras/dogfight.jpg'
import ufc297 from '@/assets/noticias/previews/0-10/ufc297.jpg'
import comebackMcGregor from '@/assets/noticias/previews/0-10/conor-mcgregor_volverapelear.jpg'
import poirierVsMakhachev from '@/assets/noticias/previews/0-10/poirier-vs-makhachev.jpg'
import ufc301 from '@/assets/noticias/previews/10-20/ufc301-preview.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Noticias</h2>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/noticias/fight-night-lewis-nascimento'>
                    <Image className={styles.noticiasHero__bigArticle__img} src={lewisVsNascimento} alt='' />
                    <h2 className={styles.page__title}>UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!</h2>
                    <p>En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.</p>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/noticias/proximos-rivales-topuria'>
                    <Image className={styles.noticiasHero__article__img} src={rivalsIlia} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                    <h2 className={styles.noticiasHero__title}>Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?</h2>
                        <p>Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>23/02/2024</p>
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
                <ArticlePreview img={ufc301} url='/noticias/ufc301' title='UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' author={null} text='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.' date='05/05/2024' />
                <ArticlePreview img={ufc300MainEvent} url='/noticias/ufc300-main-event' title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! ¡Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea!' author={null} text='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.' date='14/04/2024' />
                <ArticlePreview img={ufc299} url='/noticias/ufc299' title='UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!' author={null} text='En una noche que nos regalos peleas espectaculares, Sean O&apos;malley defendió su título luego de dominar la pelea durante 5 asaltos y Dustin Poirier fue capaz de noquear a Saint Denis en el segundo asalto.' date='10/03/2024' />
                <ArticlePreview img={poirierVsMakhachev} url='/noticias/pelea-poirier-vs-makhachev' title='¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?' author={null} text='Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?' date='27/03/2024' />
                <ArticlePreview img={comebackMcGregor} url='/noticias/volvera-a-pelear-mcgregor' title='¿Cuándo Vuelve a Pelear Conor McGregor?' author={null} text='Recientemente, en una entrevista promosionando su nueva película, Road House, ha declarado sus intenciones de volver a pelear este año, pero ¿lo hará realmente?' date='26/03/2024' />
                <ArticlePreview img={ufc298} url='/noticias/ufc298' title='UFC 298: ¡Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de UFC!' author={null} text='En una noche histórica fuimos testigos de como el peleador español Ilia Topuria, noquea y acaba con el dominio de Volkanovski en la división de Peso Pluma de la UFC.' date='18/02/2024' />
                <ArticlePreview img={dwt2} url='/noticias/dogfight-wild-tournament-2' title='Lo Mejor de Dogfight Wild Tournament 2' author={null} text='Repasa lo mejor que nos dejó el evento de Jordi Wild, el 3vs1, el 5vs1, bareknuckle femenino, Franco Tenaglia...' date='09/02/2024' />
                <ArticlePreview img={ufc297} url='/noticias/ufc297' title='UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!' author={null} date='21/01/2024' text='En una pelea que se terminó con polémica por la decisión de los jueces, Du Plessis se consagra como nuevo campeón de peso mediano en UFC.' />
            </article>
        </section>
    )
}