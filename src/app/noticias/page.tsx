import styles from './noticiasPage.module.css'
import Noticias from "../components/homepage/noticias/Noticias";
import Link from 'next/link';
import Image from 'next/image';
import ArticlePreview from '../articulos/components/ArticlePreview';
/* HERO IMAGES */
import sandhagenVSnurmagomedov from '@/assets/noticias/previews/20-30/sandhagen-vs-nurmagomedov-preview.jpg'
import whittakerVSaliskerov from '@/assets/noticias/previews/10-20/whittaker-vs-aliskerov.jpg'
import cucuyRetiro from '@/assets/noticias/previews/20-30/ferguson_retiro_preview.jpg'
import drakeApuesta from '@/assets/noticias/previews/30-40/drake_apuesta-preview.jpg'
import danHookerTattoos from '@/assets/noticias/previews/20-30/dan_hooker_tattoos-preview.jpg'
import volkNextFight from '@/assets/noticias/previews/20-30/volk_next_fight_preview.jpg'
import belalOdiado from '@/assets/noticias/previews/20-30/belal_odiado-preview.jpg'
/* 0 - 10 */
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import ufc300 from '@/assets/noticias/previews/0-10/ufc300.jpg'
import ufc300Prelims from '@/assets/noticias/previews/0-10/ufc300_prelims.jpg'
import ufc297 from '@/assets/noticias/previews/0-10/ufc297.jpg'
import dwt2 from '@/assets/noticias/previews/0-10/dogfight.jpg'
import ufc298 from '@/assets/noticias/previews/0-10/ufc298_preview.jpg'
import comebackMcGregor from '@/assets/noticias/previews/0-10/conor-mcgregor_volverapelear.jpg'
import ufc300EarlyPrelims from '@/assets/noticias/previews/0-10/ufc300_early-prelims.jpg'
import poirierVsMakhachev from '@/assets/noticias/previews/0-10/poirier-vs-makhachev.jpg'
import ufc299 from '@/assets/noticias/previews/0-10/ufc299_preview.jpg'
import ufc300MainEvent from '@/assets/noticias/previews/0-10/ufc300.jpeg'
/* 10 - 20 */
import lewisVsNascimento from '@/assets/noticias/previews/10-20/lewis-vs-nascimento-preview.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import cannonierVSimano from '@/assets/noticias/previews/10-20/fightnight-cannonier-imanov-preview.jpg'
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'
import ufc301 from '@/assets/noticias/previews/10-20/ufc301-preview.jpg'
import chimaevCancel from '@/assets/noticias/previews/10-20/chimaev_whittaker-preview.jpg'
import ortegaLopes from '@/assets/noticias/previews/10-20/ortega-vs-lopes-preview.jpg'
/* 20 - 30 */
import jonesEvitaAspinall from '@/assets/noticias/previews/20-30/jones_evita_aspinall-preview.jpg'
import ufc303 from '@/assets/noticias/previews/20-30/ufc303-preview.jpg'
import ufc304 from '@/assets/noticias/previews/20-30/ufc304-preview.jpg'
import amandaVuelve from '@/assets/noticias/previews/20-30/amanda_nunes_vuelve-preview.jpg'

export default function NoticiasPage () {
    return(
        <section className={styles.noticiaspage__container}>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/noticias/fight-night-sandhagen-nurmagomedov'>
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
                <ArticlePreview img={whittakerVSaliskerov} url='/noticias/fight-night-whittaker-aliskerov' title='UFC Fight Night: ¡Whittaker Noquea en el Primer Asalto a Aliskerov! ¡Shara Bullet Noquea a su Rival en el Tercer Asalto!' author={null} text='Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.' date='22/06/2024' />
                <ArticlePreview img={volkNextFight} url='/noticias/proxima-pelea-volkanovski' title='¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski' author={null} text='¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?' date='08/07/2024' />
                </article>
            <h2 className={styles.noticiasPage__subtitle}>Todas Las Noticias</h2>
            <article className={styles.noticias}>
                <ArticlePreview img={jonesEvitaAspinall} url='/noticias/jones-esquiva-aspinall' title='¿Jon Jones Está Evitando a Tom Aspinall?' author={null} text='El actual campeón de peso pesado de UFC Jon Jones, ha rechazado pelear con el campeón interino Tom Aspinall a la espera de combatir en su lugar a Stipe Miocic.' date='16/07/2024' />
                <ArticlePreview img={ufc304} url='/noticias/ufc304' title='UFC 304: ¡Belal Muhammad Vence Por Decisión Unánime a Leon Edwards y es Nuevo Campeón! ¡Tom Aspinall Noquea a Curtis Blaydes en el Primer Asalto!' author={null} text='¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.' date='27/07/2024' />
                <ArticlePreview img={amandaVuelve} url='/noticias/vuelve-amanda-nunes' title='¿Amanda Nunes Vuelve a Pelear?' author={null} text='La mejor peleadora de la historia de las MMA está retirada, pero ¿Volverá Amanda Nunes al Octagono?' date='25/06/2024' />
                <ArticlePreview img={ortegaLopes} url='/noticias/ortega-vs-lopes-previa' title='Diego Lopes vs Brian Ortega: Una Pelea Que Puede Revolucionar la División' author={null} text='El próximo sábado 29 de junio se enfrentarán en la pelea coestelar el brasileño Diego Lopes y el estadounidense Brian Ortega en el UFC 303 es una que puede llegar a verse incluso como una eliminatoria por el título.' date='24/06/2024' />
                <ArticlePreview img={ufc303} url='/noticias/ufc303' title='UFC 303: ¡Alex Pereira Noquea a Jiri Prochazka en el Segundo Asalto!¡Diego Lopes Vence a Dan Ige Que Tomó la Pelea con 4 Horas de Antelación!' author={null} text='En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada, y con la pelea inédita de Diego Lopes y de Dan Ige, que aceptó combatir unas pocas horas antes de la pelea.' date='29/06/2024' />
                <ArticlePreview img={ufc302} url='/noticias/ufc302' title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' author={null} text='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.' date='02/06/2024' />
                <ArticlePreview img={chimaevCancel} url='/noticias/khamzat-whittaker-cancelada' title='Whittaker vs Chimaev ¿Cancelada?' author={null} text='A un par de semanas para el enfrentamiento en Arabia Sáudita entre 2 de los mayores contendientes al título de Peso Medio de UFC, pareciera que se cae la pelea.' date='13/06/2024' />
                <ArticlePreview img={cannonierVSimano} url='/noticias/fight-night-cannonier-imanov' title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' author={null} text='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.' date='09/06/2024' />
                <ArticlePreview img={conor} url='/noticias/mcgregor-cancela-pelea' title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' author={null} text='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' date='07/06/2024' />
                <ArticlePreview img={rivalsIlia} url='/noticias/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' author={null} text='Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?' date='23/02/2024' />
                <ArticlePreview img={lewisVsNascimento} url='/noticias/fight-night-lewis-nascimento' title='UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!' author={null} text='En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.' date='12/05/2024' />
                <ArticlePreview img={ailin} url='/noticias/ailin-vs-joselyne' title='La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302' author={null} text='En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.' date='01/06/2024' />
                <ArticlePreview img={ufc301} url='/noticias/ufc301' title='UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' author={null} text='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.' date='05/05/2024' />
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