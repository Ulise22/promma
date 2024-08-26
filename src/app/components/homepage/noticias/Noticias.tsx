import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import drakeApuesta from '@/assets/noticias/previews/10-20/drake_apuesta-preview.jpg'
import danHookerTattoos from '@/assets/noticias/previews/10-20/dan_hooker_tattoos-preview.jpg'
import cucuyRetiro from '@/assets/noticias/previews/0-10/ferguson_retiro_preview.jpg'
import jonesEvitaAspinall from '@/assets/noticias/previews/10-20/jones_evita_aspinall-preview.jpg'
import volkNextFight from '@/assets/noticias/previews/10-20/volk_next_fight_preview.jpg'
import belalOdiado from '@/assets/noticias/previews/10-20/belal_odiado-preview.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Últimas Noticias</h2>
            <article className={styles.noticias__container}>
                <HomeArticle img={drakeApuesta} author='FULLMMA' date='19/08/2024' link='/noticias/drake-apuesta-ufc' title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' description='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense'/>
                <HomeArticle img={danHookerTattoos} author='FULLMMA' date='17/08/2024' link='/noticias/dan-hooker-tattoos' title='Los tatuajes de Dan Hooker y su significado' description='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.'/>
                <HomeArticle img={cucuyRetiro} author='FULLMMA' date='27/07/2024' link='/noticias/tony-ferguson-retiro' title='¿Tony Ferguson Se Retira Luego de su Pelea con Michael Chiesa?' description='El Cucuy se enfrentará al estadounidense Michael Chiesa en agosto, pero ¿será esta su última pelea?'/>
                <HomeArticle img={jonesEvitaAspinall} author='FULLMMA' date='16/07/2024' link='/noticias/jones-esquiva-aspinall' title='¿Jon Jones Está Evitando a Tom Aspinall?' description='El actual campeón de peso pesado de UFC Jon Jones, ha rechazado pelear con el campeón interino Tom Aspinall a la espera de combatir en su lugar a Stipe Miocic.'/>
                <HomeArticle img={volkNextFight} author='FULLMMA' date='08/07/2024' link='/noticias/proxima-pelea-volkanovski' title='¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski' description='¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?'/>
                <HomeArticle img={belalOdiado} author='FULLMMA' date='06/07/2024' link='/noticias/porque-belal-es-odiado' title='¿Por qué Belal es Tan Odiado?' description='El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?'/>
            </article>
        </section>
    )
}