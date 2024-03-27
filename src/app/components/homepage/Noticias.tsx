import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES */
import ufc299 from '@/assets/articulos/previews/10-20/ufc299_preview.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import ufc298 from '@/assets/articulos/previews/10-20/ufc298_preview.jpg'
import dwt2 from '@/assets/promotoras/dogfight.jpg'
import ufc297 from '@/assets/articulos/previews/0-10/ufc297.jpg'
import ufc300 from '@/assets/articulos/previews/0-10/ufc300.jpg'
import comebackMcGregor from '@/assets/articulos/previews/20-30/conor-mcgregor_volverapelear.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Noticias</h2>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/articulos/ufc299'>
                    <Image className={styles.noticiasHero__bigArticle__img} src={ufc299} alt='' />
                    <h2 className={styles.page__title}>UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!</h2>
                    <p>En una noche que nos regalos peleas espectaculares, Sean O&apos;malley defendió su título luego de dominar la pelea durante 5 asaltos y Dustin Poirier fue capaz de noquear a Saint Denis en el segundo asalto.</p>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/articulos/proximos-rivales-topuria'>
                    <Image className={styles.noticiasHero__article__img} src={rivalsIlia} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                    <h2 className={styles.noticiasHero__title}>Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?</h2>
                        <p>Repasa lo mejor que nos dejó el evento de Jordi Wild, el 3vs1, el 5vs1, bareknuckle femenino, Franco Tenaglia...</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>23/02/2024</p>
                        </div>
                    </article>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal2}`} href='/articulos/dogfight-wild-tournament-2'>
                    <Image className={styles.noticiasHero__article__img} src={ufc298} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>UFC 298: ¡Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de UFC!</h2>
                        <p>En una noche histórica fuimos testigos de como Ilia Topuria noquea y acaba con el dominio de Volkanovski en la división de Peso Pluma de la UFC.</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>09/02/2024</p>
                        </div>
                    </article>
                </Link>
            </article>
            <article className={styles.noticias__container}>
                <ArticlePreview img={comebackMcGregor} url='/articulos/volver-a-pelear-mcgregor' title='¿Cuándo Vuelve a Pelear Conor McGregor?' author={null} text='Recientemente, en una entrevista promosionando su nueva película, Road House, ha declarado sus intenciones de volver a pelear este año, pero ¿lo hará realmente?' date='26/03/2024' />
                <ArticlePreview img={dwt2} url='/articulos/dogfight-wild-tournament-2' title='Lo Mejor de Dogfight Wild Tournament 2' author={null} text='Repasa lo mejor que nos dejó el evento de Jordi Wild, el 3vs1, el 5vs1, bareknuckle femenino, Franco Tenaglia...' date='09/02/2024' />
                <ArticlePreview img={ufc297} url='/articulos/ufc297' title='UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!' author={null} date='21/01/2024' text='En una pelea que se terminó con polémica por la decisión de los jueces, Du Plessis se consagra como nuevo campeón de peso mediano en UFC.' />
                <ArticlePreview img={ufc300} url='/articulos/ufc300' title='UFC 300: Todo lo que sabemos hasta ahora' author={null} date={null} text='Todas las peleas confirmadas hasta el momento para el UFC 300, que Dana White promete ser uno de los mayores eventos de la historia del deporte.' />
            </article>
        </section>
    )
}