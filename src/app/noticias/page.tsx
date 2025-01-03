import styles from './noticiasPage.module.css'
import Noticias from "../components/homepage/noticias/Noticias";
import Link from 'next/link';
import Image from 'next/image';
import ArticlePreview from '../articulos/components/ArticlePreview';
/* HERO IMAGES */
import predicciones2025 from '@/assets/noticias/20-30/campeones_ufc2025.jpg'
import iliaTopuriaLigero from '@/assets/noticias/20-30/ilia_topuria_georgia.jpg'
import evloevPeleaTopuria from '@/assets/noticias/20-30/evloev_postfight.jpeg'
import invictosUFC from '@/assets/noticias/20-30/invictos_ufc_2025.jpg'
import campeonesViejosUFC from '@/assets/noticias/0-10/campeones_viejos_ufc.jpg'
import espUFC2025 from '@/assets/noticias/0-10/peleadores_espanoles_ufc.jpg'
import proxRivalDuPlessis from '@/assets/noticias/0-10/chimaev_or_strickland.jpg'
import kaiAsakura from '@/assets/noticias/0-10/kai_asakura.jpg'
/* 0 - 10 */
import sharaBulletFeb2025 from '@/assets/noticias/0-10/shara_bullet_feb_2025.jpg'
import belalOdiado from '@/assets/noticias/10-20/belal_odiado.jpg'
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/mcgregor-card.jpg'
import dwt2 from '@/assets/noticias/0-10/dwt2.jpeg'
import rivalsIlia from '@/assets/noticias/0-10/ilia_prox_rival.jpg'
import cucuyRetiro from '@/assets/noticias/0-10/ferguson_retiro.jpg'
import volkNextFight from '@/assets/peleadores__images/0-10/alexander-volkanovski/volkanovski.jpg'
/* 10 - 20 */
import chandlerEspera from '@/assets/peleadores__images/10-20/michael-chandler/michael_chandler.jpg'
import jonesEvitaAspinall from '@/assets/noticias/10-20/jones_evita_aspinall.jpg'
import amandaVuelve from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import khalil from '@/assets/noticias/10-20/khalil.webp'
import danHookerTattoos from '@/assets/noticias/10-20/dan_hooker_tattoos.jpg'
import drakeApuesta from '@/assets/noticias/10-20/drake_apuesta.jpg'
import iliaPromissKOHolloway from '@/assets/noticias/10-20/ilia_promissko_holloway.jpg'
import michaelMorales from '@/assets/noticias/10-20/michael_morales.jpg'
/* 20 - 30 */
import argUFC2024 from '@/assets/noticias/20-30/argentinos2024.jpg'


export default function NoticiasPage () {
    return(
        <section className={styles.noticiaspage__container}>
            <article className={styles.noticiasHero}>
                <Link className={styles.noticiasHero__bigArticle} href='/noticias/predicciones-ufc-2025'>
                    <Image className={styles.noticiasHero__bigArticle__img} loading="lazy" src={predicciones2025} alt='' />
                    <h2 className={styles.page__title}>Predicción UFC: Todos los campeones del 2025</h2>
                    <p>Una predicción sobre quienes creo que serán los nuevos campeones para el final del año 2025</p>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal1}`} href='/noticias/ilia-topuria-sube-a-peso-ligero'>
                    <Image className={styles.noticiasHero__article__img} loading="lazy" src={iliaTopuriaLigero} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>¡Ilia Topuria Abandona la División de Peso Pluma para Pelear en Peso Ligero! ¿Tiene Sentido que Busque Pelear en Peso Ligero Ahora?</h2>
                        <p>El campeón español Ilia Topuria afirma que quizás vimos su última pelea en peso pluma, y que busca pelear en peso ligero contra Charles Oliveira</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>10/12/2024</p>
                        </div>
                    </article>
                </Link>
                <Link className={`${styles.noticiasHero__article} ${styles.normal2}`} href='/noticias/evloev-sobre-pelea-con-ilia-topuria'>
                    <Image className={styles.noticiasHero__article__img} loading="lazy" src={evloevPeleaTopuria} alt='' />
                    <article className={styles.noticiasHero__article__container}>
                        <h2 className={styles.noticiasHero__title}>Movsar Evloev Cree Poder Ganarle a Ilia Topuria y Pide Pelear por el Cinturón</h2>
                        <p>El luchador ruso Movsar Evloev, dijo tener lo necesario para derrotar al campeón español Ilia Topuria, luego de vencer al estadounidense Aljamain Sterling en el UFC 310</p>
                        <div className={styles.noticiasHero__article__info}>
                            <h4>FULLMMA</h4>
                            <p>08/12/2024</p>
                        </div>
                    </article>
                </Link>
            </article>
            <article className={styles.noticiasHero__container}>
                <ArticlePreview img={invictosUFC} url='/noticias/peleadores-invictos-ufc' title='Los Peleadores Invictos de UFC en 2025' author={null} text='Los luchadores de UFC que terminaron el 2024 invictos y quienes serán capaces de mantenerlo en el 2025.' date='26/12/2024' />
                <ArticlePreview img={espUFC2025} url='/noticias/luchadores-espanoles-en-ufc' title='Los 5 Peleadores Españoles Actuales de UFC en 2024' author={null} text='Los luchadores españoles de UFC que compiten actualmente en la compañía más grande de MMA del mundo.' date='28/11/2024' />
                <ArticlePreview img={kaiAsakura} url='/noticias/quien-es-kai-asakura' title='¿Quién es Kai Asakura? La Estrella Japonesa Que Debutará Peleando Por el Título de UFC en el UFC 310 en Diciembre' author={null} text='El luchador japonés Kai Asakura de 31 años que peleará por el Campeonato de Peso Mosca en su debut en la UFC.' date='26/11/2024' />
                <ArticlePreview img={campeonesViejosUFC} url='/noticias/5-campeones-mas-viejos-ufc' title='Los 5 Campeones Más Viejos de la UFC: La Lista a la que se Puede Sumar Stipe Miocic' author={null} text='El próximo sábado, el luchador estadounidense de 42 años, peleará por el cinturón de peso pesado ante Jon Jones, donde podría convertirse en uno de los campeones más añejos de la historia.' date='11/11/2024' />
            </article>
            <h2 className={styles.noticiasPage__subtitle}>Todas Las Noticias</h2>
            <article className={styles.noticias}>
                <ArticlePreview img={sharaBulletFeb2025} url='/noticias/shara-bullet-pelea-febrero-2025' title='¿Shara Magomedov vs Paulo Costa Para Febrero de 2025?' author={null} text='¿Cuál será el próximo rival de Shara Bullet en febrero del 2025? ¿Israel Adesanya? ¿Paulo Costa? ¿Michael Venom Page?' date='04/11/2024' />
                <ArticlePreview img={proxRivalDuPlessis} url='/noticias/du-plessis-proxima-pelea-2025' title='Dricus Du Plessis Próxima Pelea 2025: ¿Strickland o Chimaev?' author={null} text='¿Quién de los 2 merece más ir a pelear por el título de peso medio, Sean Strickland o Khamzat Chimaev?' date='30/10/2024' />
                <ArticlePreview img={argUFC2024} url='/noticias/peleadores-de-ufc-argentinos-2024' title='Los 5 Peleadores de UFC Argentinos Que Compiten en 2024' author={null} text='Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va.' date='26/09/2024' />
                <ArticlePreview img={khalil} url='/noticias/khalil-rountree' title='¿Quién es Khalil Rountree? El Próximo Rival de Alex Pereira en el UFC 307' author={null} text='La historia de Khalil Rountree Jr. y de cómo paso de de pesar 300lbs a ser el peleador de UFC que va a pelear por el título de los semipesados.' date='16/09/2024' />
                <ArticlePreview img={michaelMorales} url='/noticias/quien-es-michael-morales' title='¿Quién es Michael Morales? El Luchador Ecuatoriano de 25 Años que Está Invicto en la UFC' author={null} text='La historia del ecuatoriano Michael Morales que recientemente acaba de entrar en el Ranking de peso wélter en la UFC.' date='27/08/2024' />
                <ArticlePreview img={iliaPromissKOHolloway} url='/noticias/ilia-promete-ko-a-holloway' title='Ilia Promete KO en el Primer Asalto Contra Holloway' author={null} text='Ilia Topuria habló de su pelea con Max Holloway, en la cual promote noquear en el primer asalto, además habló de la llegada de su hermano a la UFC, futuras peleas, Islam Makhachev, Volkanovski, Sean O&apos;Malley, Diego Lopes, etc.' date='22/08/2024' />
                <ArticlePreview img={drakeApuesta} url='/noticias/drake-apuesta-ufc' title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' author={null} text='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense' date='19/08/2024' />
                <ArticlePreview img={danHookerTattoos} url='/noticias/dan-hooker-tattoos' title='Los tatuajes de Dan Hooker y su significado' author={null} text='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.' date='17/08/2024' />
                <ArticlePreview img={cucuyRetiro} url='/noticias/tony-ferguson-retiro' title='¿Tony Ferguson Se Retira Luego de su Pelea con Michael Chiesa?' author={null} text='El Cucuy se enfrentará al estadounidense Michael Chiesa en agosto, pero ¿será esta su última pelea?' date='27/07/2024' />
                <ArticlePreview img={jonesEvitaAspinall} url='/noticias/jones-esquiva-aspinall' title='¿Jon Jones Está Evitando a Tom Aspinall?' author={null} text='El actual campeón de peso pesado de UFC Jon Jones, ha rechazado pelear con el campeón interino Tom Aspinall a la espera de combatir en su lugar a Stipe Miocic.' date='16/07/2024' />
                <ArticlePreview img={volkNextFight} url='/noticias/proxima-pelea-volkanovski' title='¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski' author={null} text='¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?' date='08/07/2024' />
                <ArticlePreview img={belalOdiado} url='/noticias/porque-belal-es-odiado' title='¿Por qué Belal es Tan Odiado?' author={null} text='El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?' date='06/07/2024' />
                <ArticlePreview img={chandlerEspera} url='/noticias/michael-chandler-espera-mcgregor' title='¿Tiene Sentido Para Michael Chandler Esperar a McGregor?' author={null} text='Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?' date='25/06/2024' />
                <ArticlePreview img={amandaVuelve} url='/noticias/vuelve-amanda-nunes' title='¿Amanda Nunes Vuelve a Pelear?' author={null} text='La mejor peleadora de la historia de las MMA está retirada, pero ¿Volverá Amanda Nunes al Octagono?' date='25/06/2024' />
                <ArticlePreview img={conor} url='/noticias/mcgregor-cancela-pelea' title='Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?' author={null} text='A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?' date='07/06/2024' />
                <ArticlePreview img={rivalsIlia} url='/noticias/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' author={null} text='Luego de haber noqueado en el segundo asalto a Alexander Volkanovski, ¿quién será el primer retador al título del nuevo campeón, Ilia Topuria?' date='23/02/2024' />
                <ArticlePreview img={dwt2} url='/noticias/dogfight-wild-tournament-2' title='Lo Mejor de Dogfight Wild Tournament 2' author={null} text='Repasa lo mejor que nos dejó el evento de Jordi Wild, el 3vs1, el 5vs1, bareknuckle femenino, Franco Tenaglia...' date='09/02/2024' />
            </article>
        </section>
    )
}