import ArticlePreview from '../articulos/components/ArticlePreview'
import PageHero from './components/PageHero'
import styles from '@/app/articulos/articulos.module.css'
/* IMAGES */
import queEsDWCS from '@/assets/eventos/articulos/0-10/dwcs_que_es.webp'
import whittakerVSderidder from '@/assets/eventos/fight-night/0-150/0-15/whittaker-deridder.webp'
import ufc318 from '@/assets/eventos/ufc/0-150/0-15/ufc318.webp'
import tairaVSpark from '@/assets/eventos/fight-night/0-150/0-15/taira_vs_park.webp'
import dolidzeVShernandez from '@/assets/eventos/fight-night/0-150/0-15/dolidze_hernandez.webp'
import walkerVSmingyang from '@/assets/eventos/fight-night/0-150/0-15/walker_vs_mingyang.webp'
import imavovBorralho from '@/assets/eventos/fight-night/0-150/0-15/imavov_vs_borralho.webp'
import ufc319 from '@/assets/eventos/ufc/0-150/0-15/ufc319.webp'
import lopesSilva from '@/assets/eventos/fight-night/0-150/0-15/lopes-vs-silva.webp'

export default function Eventos () {
    return (
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                <ArticlePreview img={queEsDWCS} url='/eventos/dana-white-contender-series-que-es' title='Que es el Dana White Contender Series' author={null} text='¿Qué es y Cómo Funciona el Dana White Contender Series? El programa de televisión donde los peleadores compiten por un contrato con la UFC' date='19/08/2025' />
                <ArticlePreview img={imavovBorralho} url='/eventos/fight-night-imavov-borralho' title='UFC Paris: ¡Nassourdine Imavov Derrota a Caio Borralho Por Decisión Unánime en La Pelea de la Noche!' author={null} text='¡Benoit Saint Denis Somete a Mauricio Ruffy en el Segundo Asalto! ¡Ante Delija Debuta con Nocaut ante Marcin Tybura!' date='06/09/2025' />
                <ArticlePreview img={walkerVSmingyang} url='/eventos/fight-night-walker-mingyang' title='UFC Shanghai: ¡Johnny Walker Noquea a Zhang Mingyang en el Segundo Asalto en China!' author={null} text='¡Aljamain Sterling Derrota Por Decisión Unánime a Brian Ortega 50-45! ¡Sergei Pavlovich Derrota a Waldo Cortes Acosta Por Decisión Unánime!' date='23/08/2025' />
                <ArticlePreview img={lopesSilva} url='/eventos/fight-night-lopes-silva' title='UFC Noche: ¡Diego Lopes Noquea a Jean Silva en el Segundo Asalto!' author={null} text='¡David Martínez Derrota Rob Font y se Mete Al Top 10 de la División!' date='13/09/2025' />
            </section>
            <h2 className={styles.articulos__title}>Últimos Eventos</h2>
            <section className={styles.articles__container}>
                <ArticlePreview img={ufc319} url='/eventos/ufc319' title='UFC 319: ¡Khamzat Chimaev Derrota a Dricus Du Plessis y es Nuevo Campeón de Peso Medio! ¡Lerone Murphy Deja KO al Debutante de UFC Aaron Pico!' author={null} text='¡Loopy Godínez Derrota a Jéssica Andrade por Decisión Unánime en un Peleón! ¡Carlos Prates Noquea a Geoff Neal en el Primer Asalto con un Codazo Giratorio!' date='17/08/2025' />
                <ArticlePreview img={dolidzeVShernandez} url='/eventos/fight-night-dolidze-hernandez' title='UFC Vegas 109: ¡Anthony Hernandez Somete a Roman Dolidze en el Cuarto Asalto de la Pelea!' author={null} text='¡Steve Erceg Derrota a Ode Osbourne Por Decisión Unánime! ¡Joselyne Edwards Noquea a Priscila Cachoeira en el Primer Asalto!' date='09/08/2025' />
                <ArticlePreview img={tairaVSpark} url='/eventos/fight-night-taira-park' title='UFC Vegas 108: ¡Tatsura Taira Soemte Hyunsung Park en el Segundo Asalto!' author={null} text='¡Los Argentinos Esteban Ribovics y Kevin Vallejos Protagonistas en la UFC Ganando las Mejores Peleas de la Noche!' date='02/08/2025' />
                <ArticlePreview img={whittakerVSderidder} url='/eventos/fight-night-whittaker-deridder' title='UFC Abu Dhabi: ¡Reiner De Ridder Derrota a Robert Whittaker En una Pelea Cerradísima!' author={null} text='¡Petr Yan Derrota de Forma Contundente a Marcus McGhee! ¡Shara Magomedov Vence Mar-André Barriault en la Pelea de la Noche!' date='26/07/2025' />
                <ArticlePreview img={ufc318} url='/eventos/ufc318' title='UFC 318: ¡Max Holloway Derrota a Dustin Poirier en su Retirada y Sigue Siendo el BMF!' author={null} text='¡Paulo Costa Regresa Mejor Que Nunca y Derrota Roman Kopylov! ¡Michael Johnson Derrota a Daniel Zellhuber por Decisión Unánime!' date='19/07/2025' />
            </section>
        </main>
    )
}