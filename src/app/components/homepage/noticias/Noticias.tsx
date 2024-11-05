import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import argUFC2024 from '@/assets/noticias/20-30/argentinos2024.jpg'
import kevinVallejosUFC from '@/assts/noticias/20-30/kevin_vallejos.jpg'
import khalil from '@/assets/noticias/10-20/khalil.webp'
import michaelMorales from '@/assets/noticias/previews/10-20/michael_morales-preview.jpg'
import drakeApuesta from '@/assets/noticias/previews/10-20/drake_apuesta-preview.jpg'
import danHookerTattoos from '@/assets/noticias/10-20/dan_hooker_tattoos.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <h2 className={styles.noticias__title}>Últimas Noticias</h2>
            <article className={styles.noticias__container}>
                <HomeArticle img={argUFC2024} author='FULLMMA' date='26/09/2024' link='/noticias/peleadores-de-ufc-argentinos-2024' title='Los 5 Peleadores de UFC Argentinos Que Compiten en 2024' description='Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va.'/>
                <HomeArticle img={khalil} author='FULLMMA' date='16/09/2024' link='/noticias/khalil-rountree' title='¿Quién es Khalil Rountree? El Próximo Rival de Alex Pereira en el UFC 307' description='La historia de Khalil Rountree Jr. y de cómo paso de de pesar 300lbs a ser el peleador de UFC que va a pelear por el título de los semipesados.'/>
                <HomeArticle img={michaelMorales} author='FULLMMA' date='27/08/2024' link='/noticias/quien-es-michael-morales' title='¿Quién es Michael Morales? El Luchador Ecuatoriano de 25 Años que Está Invicto en la UFC' description='La historia del ecuatoriano Michael Morales que recientemente acaba de entrar en el Ranking de peso wélter en la UFC.'/>
                <HomeArticle img={drakeApuesta} author='FULLMMA' date='19/08/2024' link='/noticias/drake-apuesta-ufc' title='¡Drake es Mufa! Todas Las Apuestas Perdidas de Drake en UFC' description='"La maldición de Drake" y todos los peleadores que sufrieron de esta con las apuestas del cantante estadounidense'/>
                <HomeArticle img={danHookerTattoos} author='FULLMMA' date='17/08/2024' link='/noticias/dan-hooker-tattoos' title='Los tatuajes de Dan Hooker y su significado' description='Cómo la estrella de la UFC Dan Hooker pasó de no tener ningún tatuaje a llenarse el cuerpo de tinta y el significado detrás de sus tatuajes.'/>
            </article>
        </section>
    )
}