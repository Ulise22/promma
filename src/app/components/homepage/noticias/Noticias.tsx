import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import previaUFC311 from '@/assets/noticias/0-100/20-30/previa_ufc311.jpg'
import predicciones2025 from '@/assets/noticias/0-100/20-30/campeones_ufc2025.jpg'
import invictosUFC from '@/assets/noticias/0-100/20-30/invictos_ufc_2025.jpg'
import iliaTopuriaLigero from '@/assets/noticias/0-100/20-30/ilia_topuria_georgia.jpg'
import evloevPeleaTopuria from '@/assets/noticias/0-100/20-30/evloev_postfight.jpeg'
import espUFC2025 from '@/assets/noticias/0-100/0-10/peleadores_espanoles_ufc.jpg'
import kaiAsakura from '@/assets/noticias/0-100/0-10/kai_asakura.jpg'
import campeonesViejosUFC from '@/assets/noticias/0-100/0-10/campeones_viejos_ufc.jpg'
import sharaBulletFeb2025 from '@/assets/noticias/0-100/0-10/shara_bullet_feb_2025.jpg'
import argUFC2024 from '@/assets/noticias/0-100/20-30/argentinos2024.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Últimas Noticias</h2>
            <article className={styles.noticias__container}>
                <HomeArticle img={previaUFC311} author='FULLMMA' date='10/01/2025' link='/noticias/previa-ufc-311' title='Previa UFC 311: Arman Tsarukyan Busca el Título de Peso Ligero en su Revancha Ante Islam Makhachev' description='¡El equipo Khabib protagonista! En una noche donde los cinturones de peso gallo y peso ligero estarán en juego en el UFC 311, con Merab Dvalishvi haciendo su primer defensa del título ante Umar Nurmagomedov'/>
                <HomeArticle img={predicciones2025} author='FULLMMA' date='31/12/2024' link='/noticias/predicciones-ufc-2025' title='Predicción UFC: Todos los campeones del 2025' description='Una predicción sobre quienes creo que serán los nuevos campeones para el final del año 2025'/>
                <HomeArticle img={invictosUFC} author='FULLMMA' date='26/12/2024' link='/noticias/peleadores-invictos-ufc' title='Los Peleadores Invictos de UFC en 2025' description='Los luchadores de UFC que terminaron el 2024 invictos y quienes serán capaces de mantenerlo en el 2025.'/>
                <HomeArticle img={iliaTopuriaLigero} author='FULLMMA' date='10/12/2024' link='/noticias/ilia-topuria-sube-a-peso-ligero' title='¡Ilia Topuria Abandona la División de Peso Pluma para Pelear en Peso Ligero! ¿Tiene Sentido que Busque Pelear en Peso Ligero Ahora?' description='El campeón español Ilia Topuria afirma que quizás vimos su última pelea en peso pluma, y que busca pelear en peso ligero contra Charles Oliveira'/>
                <HomeArticle img={evloevPeleaTopuria} author='FULLMMA' date='08/12/2024' link='/noticias/evloev-sobre-pelea-con-ilia-topuria' title='Movsar Evloev Cree Poder Ganarle a Ilia Topuria y Pide Pelear por el Cinturón' description='El luchador ruso Movsar Evloev, dijo tener lo necesario para derrotar al campeón español Ilia Topuria, luego de vencer al estadounidense Aljamain Sterling en el UFC 310'/>
                <HomeArticle img={espUFC2025} author='FULLMMA' date='28/11/2024' link='/noticias/luchadores-espanoles-en-ufc' title='Los 5 Peleadores Españoles Actuales de UFC en 2024' description='Los luchadores españoles de UFC que compiten actualmente en la compañía más grande de MMA del mundo.'/>
                <HomeArticle img={kaiAsakura} author='FULLMMA' date='11/11/2024' link='/noticias/quien-es-kai-asakura' title='¿Quién es Kai Asakura? La Estrella Japonesa Que Debutará Peleando Por el Título de UFC en el UFC 310 en Diciembre' description='El luchador japonés Kai Asakura de 31 años que peleará por el Campeonato de Peso Mosca en su debut en la UFC.'/>
                <HomeArticle img={campeonesViejosUFC} author='FULLMMA' date='11/11/2024' link='/noticias/5-campeones-mas-viejos-ufc' title='Los 5 Campeones Más Viejos de la UFC: La Lista a la que se Puede Sumar Stipe Miocic' description='El próximo sábado, el luchador estadounidense de 42 años, peleará por el cinturón de peso pesado ante Jon Jones, donde podría convertirse en uno de los campeones más añejos de la historia.'/>
                <HomeArticle img={sharaBulletFeb2025} author='FULLMMA' date='04/11/2024' link='/noticias/shara-bullet-pelea-febrero-2025' title='¿Shara Magomedov vs Paulo Costa Para Febrero de 2025?' description='¿Cuál será el próximo rival de Shara Bullet en febrero del 2025? ¿Israel Adesanya? ¿Paulo Costa? ¿Michael Venom Page?'/>
                <HomeArticle img={argUFC2024} author='FULLMMA' date='26/09/2024' link='/noticias/peleadores-de-ufc-argentinos-2024' title='Los 5 Peleadores de UFC Argentinos Que Compiten en 2024' description='Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va.'/>
            </article>
        </section>
    )
}