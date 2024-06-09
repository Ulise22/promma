import styles from './noticiasPage.module.css'
import Noticias from "../components/homepage/Noticias";
import ArticlePreview from '../articulos/components/ArticlePreview';
/* IMAGES */
import ufc300 from '@/assets/noticias/previews/0-10/ufc300.jpg'
import ufc300Prelims from '@/assets/noticias/previews/0-10/ufc300_prelims.jpg'
import ufc297 from '@/assets/noticias/previews/0-10/ufc297.jpg'
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'

export default function NoticiasPage () {
    return(
        <section className={styles.noticiaspage__container}>
            <Noticias />
            <h2 className={styles.noticiasPage__subtitle}>Todas Las Noticias</h2>
            <article className={styles.noticias}>
                <ArticlePreview img={ufc300} url='/noticias/ufc300' title='UFC 300: Todo lo que sabemos hasta ahora' author={null} date={null} text='Todas las peleas confirmadas hasta el momento para el UFC 300, que Dana White promete ser uno de los mayores eventos de la historia del deporte.' />
                <ArticlePreview img={ufc300Prelims} url='/noticias/ufc300-prelims' title='Preliminares UFC 300: ¡Kayla Harrinson Somete a Holly Holm en el Segundo Asalto en su Debut en la UFC!' author={null} date='13/04/2024' text='Por el UFC 300 Kayla somete a Holly Holm en el segundo asalto en lo que es su debut en la compañía y Diego Lopes Noquea su rival en el primer asalto.' />
                <ArticlePreview img={ufc297} url='/noticias/ufc297' title='UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!' author={null} date='21/01/2024' text='En una pelea que se terminó con polémica por la decisión de los jueces, Du Plessis se consagra como nuevo campeón de peso mediano en UFC.' />
            </article>
        </section>
    )
}