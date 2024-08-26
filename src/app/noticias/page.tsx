import styles from './noticiasPage.module.css'
import Noticias from "../components/homepage/noticias/Noticias";
import Link from 'next/link';
import Image from 'next/image';
import ArticlePreview from '../articulos/components/ArticlePreview';
/* HERO IMAGES */
import sandhagenVSnurmagomedov from '@/assets/covertura_ufc/fight_night/0-15/sandhagen-vs-nurmagomedov-preview.jpg'
import cucuyRetiro from '@/assets/noticias/previews/0-10/ferguson_retiro_preview.jpg'
import drakeApuesta from '@/assets/noticias/previews/10-20/drake_apuesta-preview.jpg'
import danHookerTattoos from '@/assets/noticias/previews/10-20/dan_hooker_tattoos-preview.jpg'
import volkNextFight from '@/assets/noticias/previews/10-20/volk_next_fight_preview.jpg'
import belalOdiado from '@/assets/noticias/previews/10-20/belal_odiado-preview.jpg'
/* 0 - 10 */
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import ufc300 from '@/assets/noticias/previews/0-10/ufc300.jpg'
import dwt2 from '@/assets/noticias/previews/0-10/dogfight.jpg'
import comebackMcGregor from '@/assets/noticias/previews/0-10/conor-mcgregor_volverapelear.jpg'
import poirierVsMakhachev from '@/assets/noticias/previews/0-10/poirier-vs-makhachev.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'
import chimaevCancel from '@/assets/noticias/previews/0-10/chimaev_whittaker-preview.jpg'
import ortegaLopes from '@/assets/noticias/previews/0-10/ortega-vs-lopes-preview.jpg'
/* 10 - 20 */
import chandlerEspera from '@/assets/noticias/previews/10-20/michael_chandler_espera-preview.jpg'
import jonesEvitaAspinall from '@/assets/noticias/previews/10-20/jones_evita_aspinall-preview.jpg'
import amandaVuelve from '@/assets/noticias/previews/10-20/amanda_nunes_vuelve-preview.jpg'

export default function NoticiasPage () {
    return(
        <section className={styles.noticiaspage__container}>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>
                    <Image className={styles.noticiasHero__bigArticle__img} src={sandhagenVSnurmagomedov} alt='' />
                    <h2 className={styles.page__title}>UFC FIGHT NIGHT: ¡Umar Nurmagomedov Gana Por Decisión Unánime a Cory! ¡El Ecuatoriano Marlon Vera Cae Derrotado por el Brasileño Figueiredo Por Decisión Unánime!</h2>
                    <p>Joel Álvarez gana por nocaut en el tercer asalto de la pelea. Tony Ferguson vuelve a perder una vez más, cayendo derrotado en esta ocasión ante Michael Chiesa, y dejando entrever su retiro. Shara Bullet gana por decisión unánime su tercer pelea en la UFC.</p>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/noticias/tony-ferguson-retiro'>
                    <Image className={styles.noticiasHero__article__img} src={cucuyRetiro} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>¿Tony Ferguson Se Retira Luego de su Pelea con Michael Chiesa?</h2>
                        <p>El Cucuy se enfrentará al estadounidense Michael Chiesa en agosto, pero ¿será esta su última pelea?</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>27/07/2024</p>
                        </div>
                    </article>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal2}`} href='/noticias/porque-belal-es-odiado'>
                    <Image className={styles.noticiasHero__article__img} src={belalOdiado} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>¿Por qué Belal es Tan Odiado?</h2>
                        <p>El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>06/07/2024</p>
                        </div>
                    </article>
                </Link>
            </article>
            <article className={styles.noticiasHero__container}>
                <ArticlePreview img={drakeApuesta} url='/noticias/drake-apuesta-ufc' title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' author={null} text='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense' date='19/08/2024' />
                <ArticlePreview img={danHookerTattoos} url='/noticias/dan-hooker-tattoos' title='Los tatuajes de Dan Hooker y su significado' author={null} text='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.' date='17/08/2024' />
                <ArticlePreview img={volkNextFight} url='/noticias/proxima-pelea-volkanovski' title='¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski' author={null} text='¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?' date='08/07/2024' />
                <ArticlePreview img={chandlerEspera} url='/noticias/michael-chandler-espera-mcgregor' title='¿Tiene Sentido Para Michael Chandler Esperar a McGregor?' author={null} text='Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?' date='25/06/2024' />
            </article>
            <h2 className={styles.noticiasPage__subtitle}>Todas Las Noticias</h2>
            <article className={styles.noticias}>
                <ArticlePreview img={jonesEvitaAspinall} url='/noticias/jones-esquiva-aspinall' title='¿Jon Jones Está Evitando a Tom Aspinall?' author={null} text='El actual campeón de peso pesado de UFC Jon Jones, ha rechazado pelear con el campeón interino Tom Aspinall a la espera de combatir en su lugar a Stipe Miocic.' date='16/07/2024' />
                <ArticlePreview img={amandaVuelve} url='/noticias/vuelve-amanda-nunes' title='¿Amanda Nunes Vuelve a Pelear?' author={null} text='La mejor peleadora de la historia de las MMA está retirada, pero ¿Volverá Amanda Nunes al Octagono?' date='25/06/2024' />
                <ArticlePreview img={ortegaLopes} url='/noticias/ortega-vs-lopes-previa' title='Diego Lopes vs Brian Ortega: Una Pelea Que Puede Revolucionar la División' author={null} text='El próximo sábado 29 de junio se enfrentarán en la pelea coestelar el brasileño Diego Lopes y el estadounidense Brian Ortega en el UFC 303 es una que puede llegar a verse incluso como una eliminatoria por el título.' date='24/06/2024' />
                <ArticlePreview img={chimaevCancel} url='/noticias/khamzat-whittaker-cancelada' title='Whittaker vs Chimaev ¿Cancelada?' author={null} text='A un par de semanas para el enfrentamiento en Arabia Sáudita entre 2 de los mayores contendientes al título de Peso Medio de UFC, pareciera que se cae la pelea.' date='13/06/2024' />
                <ArticlePreview img={conor} url='/noticias/mcgregor-cancela-pelea' title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' author={null} text='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' date='07/06/2024' />
                <ArticlePreview img={rivalsIlia} url='/noticias/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' author={null} text='Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?' date='23/02/2024' />
                <ArticlePreview img={ailin} url='/noticias/ailin-vs-joselyne' title='La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302' author={null} text='En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.' date='01/06/2024' />
                <ArticlePreview img={poirierVsMakhachev} url='/noticias/pelea-poirier-vs-makhachev' title='¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?' author={null} text='Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?' date='27/03/2024' />
                <ArticlePreview img={comebackMcGregor} url='/noticias/volvera-a-pelear-mcgregor' title='¿Cuándo Vuelve a Pelear Conor McGregor?' author={null} text='Recientemente, en una entrevista promosionando su nueva película, Road House, ha declarado sus intenciones de volver a pelear este año, pero ¿lo hará realmente?' date='26/03/2024' />
                <ArticlePreview img={ufc300} url='/noticias/ufc300' title='UFC 300: Todo lo que sabemos hasta ahora' author={null} date={null} text='Todas las peleas confirmadas hasta el momento para el UFC 300, que Dana White promete ser uno de los mayores eventos de la historia del deporte.' />
                <ArticlePreview img={dwt2} url='/noticias/dogfight-wild-tournament-2' title='Lo Mejor de Dogfight Wild Tournament 2' author={null} text='Repasa lo mejor que nos dejó el evento de Jordi Wild, el 3vs1, el 5vs1, bareknuckle femenino, Franco Tenaglia...' date='09/02/2024' />
            </article>
        </section>
    )
}