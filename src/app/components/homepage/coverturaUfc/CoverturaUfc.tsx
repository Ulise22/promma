import Link from 'next/link'
import styles from './covertura.module.css'
import Image from 'next/image'
import HomeArticle from '../noticias/HomeArticle'
/* IMAGES */
import ufc304 from '@/assets/covertura_ufc/ufc/0-15/ufc304-preview.jpg'
import ufc303 from '@/assets/covertura_ufc/ufc/0-15/ufc303-preview.jpg'
import ufc302 from '@/assets/covertura_ufc/ufc/0-15/ufc302-preview.jpg'
import ufc301 from '@/assets/covertura_ufc/ufc/0-15/ufc301-preview.jpg'
import ufc300 from '@/assets/covertura_ufc/ufc/0-15/ufc300.jpeg'

export default function CoverturaUFC () {
    return(
        <section className={styles.covertura}>
            <h2 className={styles.covertura__title}>Covertura de UFC</h2>
            <article className={styles.covertura__container}>
                <HomeArticle img={ufc304} author='FULLMMA' date='27/07/2024' link='/covertura-ufc/ufc304' title='UFC 304: ¡Belal Muhammad Vence Por Decisión Unánime a Leon Edwards y es Nuevo Campeón! ¡Tom Aspinall Noquea a Curtis Blaydes en el Primer Asalto!' description='¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.'/>
                <HomeArticle img={ufc303} author='FULLMMA' date='29/06/2024' link='/covertura-ufc/ufc303' title='UFC 303: ¡Alex Pereira Noquea a Jiri Prochazka en el Segundo Asalto!¡Diego Lopes Vence a Dan Ige Que Tomó la Pelea con 4 Horas de Antelación!' description='En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada, y con la pelea inédita de Diego Lopes y de Dan Ige, que aceptó combatir unas pocas horas antes de la pelea.'/>
                <HomeArticle img={ufc302} author='FULLMMA' date='02/06/2024' link='/covertura-ufc/ufc302' title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' description='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.'/>
                <HomeArticle img={ufc301} author='FULLMMA' date='05/05/2024' link='/covertura-ufc/ufc301' title='UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' description='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.'/>
                <HomeArticle img={ufc300} author='FULLMMA' date='14/04/2024' link='/covertura-ufc/ufc300-main-event' title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! ¡Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea!' description='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.'/>
            </article>
        </section>
    )
}