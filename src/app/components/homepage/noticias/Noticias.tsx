import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import khalil from '@/assets/noticias/previews/10-20/khalil-preview.jpg'
import michaelMorales from '@/assets/noticias/previews/10-20/michael_morales-preview.jpg'
import drakeApuesta from '@/assets/noticias/previews/10-20/drake_apuesta-preview.jpg'
import danHookerTattoos from '@/assets/noticias/previews/10-20/dan_hooker_tattoos-preview.jpg'
import cucuyRetiro from '@/assets/noticias/previews/0-10/ferguson_retiro_preview.jpg'
import jonesEvitaAspinall from '@/assets/noticias/previews/10-20/jones_evita_aspinall-preview.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Últimas Noticias</h2>
            <article className={styles.noticias__container}>
                <HomeArticle img={khalil} author='FULLMMA' date='16/09/2024' link='/noticias/khalil-rountree' title='¿Quién es Khalil Rountree? El Próximo Rival de Alex Pereira en el UFC 307' description='La historia de Khalil Rountree Jr. y de cómo paso de de pesar 300lbs a ser el peleador de UFC que va a pelear por el título de los semipesados.'/>
                <HomeArticle img={michaelMorales} author='FULLMMA' date='27/08/2024' link='/noticias/quien-es-michael-morales' title='¿Quién es Michael Morales? El Luchador Ecuatoriano de 25 Años que Está Invicto en la UFC' description='La historia del ecuatoriano Michael Morales que recientemente acaba de entrar en el Ranking de peso wélter en la UFC.'/>
                <HomeArticle img={drakeApuesta} author='FULLMMA' date='19/08/2024' link='/noticias/drake-apuesta-ufc' title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' description='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense'/>
                <HomeArticle img={danHookerTattoos} author='FULLMMA' date='17/08/2024' link='/noticias/dan-hooker-tattoos' title='Los tatuajes de Dan Hooker y su significado' description='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.'/>
                <HomeArticle img={cucuyRetiro} author='FULLMMA' date='27/07/2024' link='/noticias/tony-ferguson-retiro' title='¿Tony Ferguson Se Retira Luego de su Pelea con Michael Chiesa?' description='El Cucuy se enfrentará al estadounidense Michael Chiesa en agosto, pero ¿será esta su última pelea?'/>
                <HomeArticle img={jonesEvitaAspinall} author='FULLMMA' date='16/07/2024' link='/noticias/jones-esquiva-aspinall' title='¿Jon Jones Está Evitando a Tom Aspinall?' description='El actual campeón de peso pesado de UFC Jon Jones, ha rechazado pelear con el campeón interino Tom Aspinall a la espera de combatir en su lugar a Stipe Miocic.'/>
            </article>
        </section>
    )
}