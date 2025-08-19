import ArticlePreview from '../articulos/components/ArticlePreview'
import PageHero from './components/PageHero'
import styles from '@/app/articulos/articulos.module.css'
/* IMAGES */
import queEsDWCS from '@/assets/eventos/articulos/0-10/dwcs_que_es.webp'
import ufc314 from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc314.webp'
import ufc316 from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc316.webp'
import ufcLondon from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufc_london.webp'
import ufcMexico from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufc_mexico.webp'
import ufcVegas103 from '@/assets/covertura_ufc/fight_night/0-100/0-15/ufcvegas103.jpeg'
import whittakerVSderidder from '@/assets/eventos/fight-night/0-150/0-15/whittaker-deridder.webp'
import ufc318 from '@/assets/eventos/ufc/0-150/0-15/ufc318.webp'


export default function Eventos () {
    return (
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                <ArticlePreview img={queEsDWCS} url='/eventos/dana-white-contender-series-que-es' title='Que es el Dana White Contender Series' author={null} text='¿Qué es y Cómo Funciona el Dana White Contender Series? El programa de televisión donde los peleadores compiten por un contrato con la UFC' date='19/08/2025' />
                <ArticlePreview img={whittakerVSderidder} url='/eventos/fight-night-whittaker-deridder' title='UFC Abu Dhabi: ¡Reiner De Ridder Derrota a Robert Whittaker En una Pelea Cerradísima!' author={null} text='¡Petr Yan Derrota de Forma Contundente a Marcus McGhee! ¡Shara Magomedov Vence Mar-André Barriault en la Pelea de la Noche!' date='26/07/2025' />
                <ArticlePreview img={ufc318} url='/eventos/ufc318' title='UFC 318: ¡Max Holloway Derrota a Dustin Poirier en su Retirada y Sigue Siendo el BMF!' author={null} text='¡Paulo Costa Regresa Mejor Que Nunca y Derrota Roman Kopylov! ¡Michael Johnson Derrota a Daniel Zellhuber por Decisión Unánime!' date='19/07/2025' />
                <ArticlePreview img={ufc316} url='/covertura-ufc/ufc316' title='UFC 316: ¡Merab Dvalishvili Somete a Sean O&apos;Malley en el Primer Asalto! ¡Kayla Harrison Somete a Julianna Peña en el Segundo Asalto!' author={null} text='¡Kevin Holland Somete a Vicente Luque en el Segundo Asalto de la Pelea!' date='07/06/2025' />
            </section>
            <h2 className={styles.articulos__title}>Últimos Eventos</h2>
            <section className={styles.articles__container}>
                <ArticlePreview img={ufc314} url='/covertura-ufc/ufc314' title='UFC 314: ¡Alexander Volkanovski Derrota a Diego Lopes y es el Nuevo Campeón de Peso Pluma de la UFC!' author={null} text='¡Paddy Pimblett Noquea a Michael Chandler en el Tercer Asalto! ¡Jean Silva Somete a Bryce Mitchell en el Segundo Asalto de la pelea!' date='14/04/2025' />
                <ArticlePreview img={ufcMexico} url='/covertura-ufc/fight-night-moreno-erceg' title='UFC México: ¡Brandon Moreno Derrota a Steve Erceg por Decisión Unánime!' author={null} text='¡Kevin Borjas Derrota a Ronaldo Rodriguez en una Excelente Pelea del Peruano! ¡Raúl Rosas Jr. Gana su Pelea por Decisión Unánime ante Vince Morales!' date='29/03/2025' />
                <ArticlePreview img={ufcLondon} url='/covertura-ufc/fight-night-edwards-brady' title='UFC London: ¡Sean Brady Somete a Leon Edwards en el Cuarto Asalto!' author={null} text='¡Carlos Ulberg Derrota a Jan Blachowicz Por Decisión y se Mete en el Top 5 de los Semipesados! ¡Kevin Holland Derrota a Gunnar Nelson por Decisión!' date='22/03/2025' />
                <ArticlePreview img={ufcVegas103} url='/covertura-ufc/fight-night-kape-almabayev' title='UFC Vegas 103: ¡Manel Kape Gana por TKO a Asu Almabayev en el Tercer Asalto!' author={null} text='¡Esteban Ribovics Cae Derrotado ante Nashrat Haqparast Por Decisión Dividida! ¡Cody Brundage Gana por TKO a Julian Marquez en el Primer Asalto!' date='01/03/2025' />
            </section>
        </main>
    )
}