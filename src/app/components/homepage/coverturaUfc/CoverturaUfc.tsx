import Link from 'next/link'
import styles from './covertura.module.css'
import Image from 'next/image'
import HomeArticle from '../noticias/HomeArticle'
/* IMAGES */
import ufc308 from '@/assets/covertura_ufc/ufc/0-15/ufc308.jpg'
import ufc307 from '@/assets/covertura_ufc/ufc/0-15/ufc307.jpg'
import ufc306 from '@/assets/covertura_ufc/ufc/0-15/ufc306.jpg'
import ufc305 from '@/assets/covertura_ufc/ufc/0-15/ufc305.jpg'
import ufc304 from '@/assets/covertura_ufc/ufc/0-15/ufc304.jpg'
import ufc303 from '@/assets/covertura_ufc/ufc/0-15/ufc303-preview.jpg'

export default function CoverturaUFC () {
    return(
        <section className={styles.covertura}>
            <h2 className={styles.covertura__title}>Covertura de UFC</h2>
            <article className={styles.covertura__container}>
                <HomeArticle img={ufc308} author='FULLMMA' date='26/10/2024' link='/covertura-ufc/ufc308' title='UFC 308: ¡Ilia Topuria Noquea a Max Holloway en el Tercer Asalto! ¡Khamzat Chimaev Somete a Robert Whittaker en el Primer Asalto!' description='Tenemos un tremendo evento que además cuenta con el regreso al octágono de Shara Magomedov, con la pelea de Dan Ige y Lerone Murphy, y la pelea entre Ankalaev y Rakic acompañando la cartelera estelar.'/>
                <HomeArticle img={ufc307} author='FULLMMA' date='05/10/2024' link='/covertura-ufc/ufc307' title='UFC 307: ¡Alex Pereira Noquea a Khalil Rountree En El Cuarto Asalto y Sigue Siendo Campeón! ¡Julianna Peña es Nueva Campeona de UFC al Derrotar a Raquel Pennington!' description='Kayla Harrison gana luego de una actuación dominante en su pelea por decisión unánime. Roman Dolidze gana por parada médica luego de una lesión de Kevin Holland. Mario Bautista gana su pelea contra José Aldo por decisión dividida.'/>
                <HomeArticle img={ufc306} author='FULLMMA' date='15/09/2024' link='/covertura-ufc/ufc306' title='UFC 306: ¡Merab Dvalisvhili Nuevo Campeón de Peso Gallo! ¡Valentina Shevchenko Vuelve a Ser Campeona al Derrotar Por Decisión a Alexa Grasso!  ¡Esteban Ribovics Gana en un Peleón al Mexicano Daniel Zellhuber!' description='¡Ronaldo Rodríguez Gana por Decisión ante Ode Osbourne! ¡Diego Lopes Derrota a Brian Ortega por Decisión Unánime! ¡Raúl Rosas Jr. Logra La Primer Victoria de la Noche en La Esfera!'/>
                <HomeArticle img={ufc305} author='FULLMMA' date='18/08/2024' link='/covertura-ufc/ufc305' title='UFC 305: ¡Dricus Du Plessis Derrota Por Sumisión a Israel Adesanya!¡Kai Kara-France Noquea a Steve Erceg en el Primer Asalto!' description='¡Carlos Prates deja KO a Li Jingliang en el segundo asalto! ¡Dan Hooker consigue una victoria ante Mateusz Gamrot!'/>
                <HomeArticle img={ufc304} author='FULLMMA' date='27/07/2024' link='/covertura-ufc/ufc304' title='UFC 304: ¡Belal Muhammad Vence Por Decisión Unánime a Leon Edwards y es Nuevo Campeón! ¡Tom Aspinall Noquea a Curtis Blaydes en el Primer Asalto!' description='¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.'/>
                <HomeArticle img={ufc303} author='FULLMMA' date='29/06/2024' link='/covertura-ufc/ufc303' title='UFC 303: ¡Alex Pereira Noquea a Jiri Prochazka en el Segundo Asalto!¡Diego Lopes Vence a Dan Ige Que Tomó la Pelea con 4 Horas de Antelación!' description='En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada, y con la pelea inédita de Diego Lopes y de Dan Ige, que aceptó combatir unas pocas horas antes de la pelea.'/>
            </article>
        </section>
    )
}