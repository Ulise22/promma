import styles from './noticiasPage.module.css'
import Noticias from "../components/homepage/Noticias";
import ArticlePreview from '../articulos/components/ArticlePreview';
/* IMAGES */
import ufc300 from '@/assets/noticias/previews/0-10/ufc300.jpg'
import ufc300Prelims from '@/assets/noticias/previews/0-10/ufc300_prelims.jpg'
import ufc297 from '@/assets/noticias/previews/0-10/ufc297.jpg'
import dwt2 from '@/assets/noticias/previews/0-10/dogfight.jpg'
import ufc298 from '@/assets/noticias/previews/0-10/ufc298_preview.jpg'
import comebackMcGregor from '@/assets/noticias/previews/0-10/conor-mcgregor_volverapelear.jpg'
import ufc300EarlyPrelims from '@/assets/noticias/previews/0-10/ufc300_early-prelims.jpg'
import poirierVsMakhachev from '@/assets/noticias/previews/0-10/poirier-vs-makhachev.jpg'
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'
import ufc299 from '@/assets/noticias/previews/0-10/ufc299_preview.jpg'
import ufc300MainEvent from '@/assets/noticias/previews/0-10/ufc300.jpeg'

export default function NoticiasPage () {
    return(
        <section className={styles.noticiaspage__container}>
            <Noticias />
            <p className={styles.noticiasPage__subtitle}>Todas Las Noticias</p>
            <article className={styles.noticias}>
                <ArticlePreview img={ailin} url='/noticias/ailin-vs-joselyne' title='La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302' author={null} text='En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.' date='01/06/2024' />
                <ArticlePreview img={ufc300MainEvent} url='/noticias/ufc300-main-event' title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! ¡Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea!' author={null} text='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.' date='14/04/2024' />
                <ArticlePreview img={ufc299} url='/noticias/ufc299' title='UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!' author={null} text='En una noche que nos regalos peleas espectaculares, Sean O&apos;malley defendió su título luego de dominar la pelea durante 5 asaltos y Dustin Poirier fue capaz de noquear a Saint Denis en el segundo asalto.' date='10/03/2024' />
                <ArticlePreview img={poirierVsMakhachev} url='/noticias/pelea-poirier-vs-makhachev' title='¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?' author={null} text='Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?' date='27/03/2024' />
                <ArticlePreview img={ufc300EarlyPrelims} url='/noticias/ufc300-early-prelims' title='Primeros Preliminares UFC 300:¡Deivenson Figueiredo Somete a Cody en la Primer Pelea de la Noche!' author={null} text='Arranca el UFC 300 con unas increíbles peleas en los primeros preliminares. Donde Figueiredo, Bobby Green, Jessica Andrade y Renato Moicano consiguieron la victoria.' date='13/04/2024' />
                <ArticlePreview img={comebackMcGregor} url='/noticias/volvera-a-pelear-mcgregor' title='¿Cuándo Vuelve a Pelear Conor McGregor?' author={null} text='Recientemente, en una entrevista promosionando su nueva película, Road House, ha declarado sus intenciones de volver a pelear este año, pero ¿lo hará realmente?' date='26/03/2024' />
                <ArticlePreview img={ufc300} url='/noticias/ufc300' title='UFC 300: Todo lo que sabemos hasta ahora' author={null} date={null} text='Todas las peleas confirmadas hasta el momento para el UFC 300, que Dana White promete ser uno de los mayores eventos de la historia del deporte.' />
                <ArticlePreview img={ufc300Prelims} url='/noticias/ufc300-prelims' title='Preliminares UFC 300: ¡Kayla Harrinson Somete a Holly Holm en el Segundo Asalto en su Debut en la UFC!' author={null} date='13/04/2024' text='Por el UFC 300 Kayla somete a Holly Holm en el segundo asalto en lo que es su debut en la compañía y Diego Lopes Noquea su rival en el primer asalto.' />
                <ArticlePreview img={ufc297} url='/noticias/ufc297' title='UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!' author={null} date='21/01/2024' text='En una pelea que se terminó con polémica por la decisión de los jueces, Du Plessis se consagra como nuevo campeón de peso mediano en UFC.' />
                <ArticlePreview img={dwt2} url='/noticias/dogfight-wild-tournament-2' title='Lo Mejor de Dogfight Wild Tournament 2' author={null} text='Repasa lo mejor que nos dejó el evento de Jordi Wild, el 3vs1, el 5vs1, bareknuckle femenino, Franco Tenaglia...' date='09/02/2024' />
                <ArticlePreview img={ufc298} url='/noticias/ufc298' title='UFC 298: ¡Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de UFC!' author={null} text='En una noche histórica fuimos testigos de como el peleador español Ilia Topuria, noquea y acaba con el dominio de Volkanovski en la división de Peso Pluma de la UFC.' date='18/02/2024' />
            </article>
        </section>
    )
}