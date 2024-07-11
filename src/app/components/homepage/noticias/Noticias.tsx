import Link from 'next/link'
import styles from './noticias.module.css'
import Image from 'next/image'
import HomeArticle from './HomeArticle'
/* IMAGES */
import whittakerVSaliskerov from '@/assets/noticias/previews/10-20/whittaker-vs-aliskerov.jpg'
import volkNextFight from '@/assets/noticias/previews/20-30/volk_next_fight_preview.jpg'
import belalOdiado from '@/assets/noticias/previews/20-30/belal_odiado-preview.jpg'
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import cannonierVSimano from '@/assets/noticias/previews/10-20/fightnight-cannonier-imanov-preview.jpg'

export default function Noticias () {
    return(
        <section className={styles.noticias}>
            <p className={styles.noticias__title}>Últimas Noticias</p>
            <article className={styles.noticias__container}>
                <HomeArticle img={whittakerVSaliskerov} author='FULLMMA' date='22/06/2024' link='/noticias/fight-night-whittaker-aliskerov' title='UFC Fight Night: ¡Whittaker Noquea en el Primer Asalto a Aliskerov! ¡Shara Bullet Noquea a su Rival en el Tercer Asalto!' description='Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.'/>
                <HomeArticle img={volkNextFight} author='FULLMMA' date='08/07/2024' link='/noticias/proxima-pelea-volkanovski' title='¿Volkanovski en Peso Ligero o Revancha Contra Ilia Topuria? Próxima Pelea de Alexander Volkanovski' description='¿Cuál va a ser la próxima pelea de Alexander Volkanovski? ¿Obtendrá una revancha por el título ante Ilia Topuria, o pasará página y se movera a la división de peso ligero para enfrentar a los otros contendientes?'/>
                <HomeArticle img={belalOdiado} author='FULLMMA' date='06/07/2024' link='/noticias/porque-belal-es-odiado' title='¿Por qué Belal es Tan Odiado?' description='El peleador palestino ha demostrado ser uno de los mejores peso wélter de la UFC, entonces ¿por qué genera tanta antipatía entre los fans?'/>
                <HomeArticle img={ufc302} author='FULLMMA' date='02/06/2024' link='/noticias/ufc302' title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' description='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.'/>
                <HomeArticle img={cannonierVSimano} author='FULLMMA' date='09/06/2024' link='/noticias/fight-night-cannonier-imanov' title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' description='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.'/>
                </article>
        </section>
    )
}