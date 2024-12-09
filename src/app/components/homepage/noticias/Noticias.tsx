import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import evloevPeleaTopuria from '@/assets/noticias/20-30/evloev_postfight.jpeg'
import espUFC2025 from '@/assets/noticias/0-10/peleadores_espanoles_ufc.jpg'
import campeonesViejosUFC from '@/assets/noticias/0-10/campeones_viejos_ufc.jpg'
import sharaBulletFeb2025 from '@/assets/noticias/0-10/shara_bullet_feb_2025.jpg'
import proxRivalDuPlessis from '@/assets/noticias/0-10/chimaev_or_strickland.jpg'
import argUFC2024 from '@/assets/noticias/20-30/argentinos2024.jpg'
import khalil from '@/assets/noticias/10-20/khalil.webp'
import michaelMorales from '@/assets/noticias/previews/10-20/michael_morales-preview.jpg'
import drakeApuesta from '@/assets/noticias/previews/10-20/drake_apuesta-preview.jpg'
import danHookerTattoos from '@/assets/noticias/10-20/dan_hooker_tattoos.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Últimas Noticias</h2>
            <article className={styles.noticias__container}>
                <HomeArticle img={evloevPeleaTopuria} author='FULLMMA' date='08/12/2024' link='/noticias/evloev-sobre-pelea-con-ilia-topuria' title='Movsar Evloev Cree Poder Ganarle a Ilia Topuria y Pide Pelear por el Cinturón' description='El luchador ruso Movsar Evloev, dijo tener lo necesario para derrotar al campeón español Ilia Topuria, luego de vencer al estadounidense Aljamain Sterling en el UFC 310'/>
                <HomeArticle img={espUFC2025} author='FULLMMA' date='28/11/2024' link='/noticias/luchadores-espanoles-en-ufc' title='Los 5 Peleadores Españoles Actuales de UFC en 2024' description='Los luchadores españoles de UFC que compiten actualmente en la compañía más grande de MMA del mundo.'/>
                <HomeArticle img={campeonesViejosUFC} author='FULLMMA' date='11/11/2024' link='/noticias/5-campeones-mas-viejos-ufc' title='Los 5 Campeones Más Viejos de la UFC: La Lista a la que se Puede Sumar Stipe Miocic' description='El próximo sábado, el luchador estadounidense de 42 años, peleará por el cinturón de peso pesado ante Jon Jones, donde podría convertirse en uno de los campeones más añejos de la historia.'/>
                <HomeArticle img={sharaBulletFeb2025} author='FULLMMA' date='04/11/2024' link='/noticias/shara-bullet-pelea-febrero-2025' title='¿Shara Magomedov vs Paulo Costa Para Febrero de 2025?' description='¿Cuál será el próximo rival de Shara Bullet en febrero del 2025? ¿Israel Adesanya? ¿Paulo Costa? ¿Michael Venom Page?'/>
                <HomeArticle img={proxRivalDuPlessis} author='FULLMMA' date='30/10/2024' link='/noticias/du-plessis-proxima-pelea-2025' title='Dricus Du Plessis Próxima Pelea 2025: ¿Strickland o Chimaev?' description='¿Quién de los 2 merece más ir a pelear por el título de peso medio, Sean Strickland o Khamzat Chimaev?'/>
                <HomeArticle img={argUFC2024} author='FULLMMA' date='26/09/2024' link='/noticias/peleadores-de-ufc-argentinos-2024' title='Los 5 Peleadores de UFC Argentinos Que Compiten en 2024' description='Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va.'/>
                <HomeArticle img={khalil} author='FULLMMA' date='16/09/2024' link='/noticias/khalil-rountree' title='¿Quién es Khalil Rountree? El Próximo Rival de Alex Pereira en el UFC 307' description='La historia de Khalil Rountree Jr. y de cómo paso de de pesar 300lbs a ser el peleador de UFC que va a pelear por el título de los semipesados.'/>
                <HomeArticle img={michaelMorales} author='FULLMMA' date='27/08/2024' link='/noticias/quien-es-michael-morales' title='¿Quién es Michael Morales? El Luchador Ecuatoriano de 25 Años que Está Invicto en la UFC' description='La historia del ecuatoriano Michael Morales que recientemente acaba de entrar en el Ranking de peso wélter en la UFC.'/>
                <HomeArticle img={drakeApuesta} author='FULLMMA' date='19/08/2024' link='/noticias/drake-apuesta-ufc' title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' description='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense'/>
                <HomeArticle img={danHookerTattoos} author='FULLMMA' date='17/08/2024' link='/noticias/dan-hooker-tattoos' title='Los tatuajes de Dan Hooker y su significado' description='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.'/>
            </article>
        </section>
    )
}