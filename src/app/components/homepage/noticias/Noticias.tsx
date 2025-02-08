import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import terranceMcKinney from '@/assets/noticias/0-100/30-40/terrance_mckinney.jpg'
import viniciusOliveira from '@/assets/noticias/0-100/30-40/vinicius_oliveira.jpg'
import DWT3 from '@/assets/noticias/0-100/30-40/dwt3.jpg'
import dariushPelea2025 from '@/assets/noticias/0-100/20-30/dariush_pelea2025.jpg'
import ufcBillonario from '@/assets/noticias/0-100/20-30/ufc_busca_millonada.jpg'
import entrenamientoProchazka from '@/assets/noticias/0-100/20-30/prochazka_training.png'
import previaUFC311 from '@/assets/noticias/0-100/20-30/previa_ufc311.jpg'
import predicciones2025 from '@/assets/noticias/0-100/20-30/campeones_ufc2025.jpg'
import invictosUFC from '@/assets/noticias/0-100/20-30/invictos_ufc_2025.jpg'
import iliaTopuriaLigero from '@/assets/noticias/0-100/20-30/ilia_topuria_georgia.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Últimas Noticias</h2>
            <article className={styles.noticias__container}>
                <HomeArticle img={DWT3} author='FULLMMA' date='31/01/2025' link='/noticias/dogfight-wild-tournament-3' title='Dogfight Wild Torunament 3: ¡Battle Royal 10 Peleadores Todos Contra Todos!' description='Vuelve el evento más loco del mundo, Dogfight Wild Tournament, en su tercera edición organizaodo por Jordi Wild. Con un 2vs2, pelea femenina sin reglas, pelea en un coche y una pelea medieval.'/>
                <HomeArticle img={terranceMcKinney} author='FULLMMA' date='30/01/2025' link='/noticias/terrance-mckinney' title='Conoce a Terrance McKinney: El luchador estadounidense que estuvo cerca de morir y que terminó noqueando a un peleador en 7 segundos en su debut en UFC' description='Una de las historias más inspiradoras de las MMA, sobre cómo Terrance McKinney fue capaz de sobrevivir a una experiencia traumática, para convertirse en el peleador de UFC que fue capaz de noquear a su rival en 7 segundos. '/>
                <HomeArticle img={viniciusOliveira} author='FULLMMA' date='29/01/2025' link='/noticias/vinicius-oliveira-ufc' title='¿Quién es Vinicius Oliveira? El brasileño con KOs espectaculares en la UFC' description='La historia y carrera del peleador de UFC brasileño Vinicius Oliveira.'/>
                <HomeArticle img={dariushPelea2025} author='FULLMMA' date='21/01/2025' link='/noticias/beneil-dariush-proxima-pelea-2025' title='Próxima Pelea de Beneil Dariush Después del UFC 311' description='Luego de una caótica serie de eventos, con su pelea siendo cancelada, nos preguntamos: ¿Contra quien va a pelear Beneil Dariush Después del UFC 311?'/>
                <HomeArticle img={ufcBillonario} author='FULLMMA' date='15/01/2025' link='/noticias/la-ufc-busca-contrato-billonario' title='La UFC Busca un Contrato Multimillonario de Mil Millones, Según Bloomberg, Por Sus Derechos Televisivos' description='Este año 2025 expira el contrato actual de la UFC con ESPN, por lo que la empresa de MMA más grande del planeta estaría buscando aumentar su contrato actual a uno de 10 cifras. '/>
                <HomeArticle img={entrenamientoProchazka} author='FULLMMA' date='14/01/2025' link='/noticias/como-entrena-jiri-prochazka' title='¿Cómo Entrena Jiri Prochazka? El entrenamiento y preparación mental de Jiri Prochazka que incluye golpear 500 veces un árbol y 3 días encerrado sin luz ni comida para confrontar sus demonios. ' description='El loco y salvaje régimen de entrenamiento al que se somete el excampeón de peso semipesado, con su famosa preparación mental que incluye pasar 3 días encierrado a oscuras en una habitación con sólo agua. '/>
                <HomeArticle img={previaUFC311} author='FULLMMA' date='10/01/2025' link='/noticias/previa-ufc-311' title='Previa UFC 311: Arman Tsarukyan Busca el Título de Peso Ligero en su Revancha Ante Islam Makhachev' description='¡El equipo Khabib protagonista! En una noche donde los cinturones de peso gallo y peso ligero estarán en juego en el UFC 311, con Merab Dvalishvi haciendo su primer defensa del título ante Umar Nurmagomedov'/>
                <HomeArticle img={predicciones2025} author='FULLMMA' date='31/12/2024' link='/noticias/predicciones-ufc-2025' title='Predicción UFC: Todos los campeones del 2025' description='Una predicción sobre quienes creo que serán los nuevos campeones para el final del año 2025'/>
                <HomeArticle img={invictosUFC} author='FULLMMA' date='26/12/2024' link='/noticias/peleadores-invictos-ufc' title='Los Peleadores Invictos de UFC en 2025' description='Los luchadores de UFC que terminaron el 2024 invictos y quienes serán capaces de mantenerlo en el 2025.'/>
                <HomeArticle img={iliaTopuriaLigero} author='FULLMMA' date='10/12/2024' link='/noticias/ilia-topuria-sube-a-peso-ligero' title='¡Ilia Topuria Abandona la División de Peso Pluma para Pelear en Peso Ligero! ¿Tiene Sentido que Busque Pelear en Peso Ligero Ahora?' description='El campeón español Ilia Topuria afirma que quizás vimos su última pelea en peso pluma, y que busca pelear en peso ligero contra Charles Oliveira'/>
            </article>
        </section>
    )
}