import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc299 from '@/assets/articulos/previews/10-20/ufc299_preview.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import dwt2 from '@/assets/promotoras/dogfight.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc299'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc299} alt='' />
                <h2 className={styles.page__title}>UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!</h2>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/proximos-rivales-topuria'>
                <Image className={styles.pagehero__article__img} src={rivalsIlia} alt='' />
                <h2 className={styles.page__title}>Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?</h2>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/dogfight-wild-tournament-2'>
                <Image className={styles.pagehero__article__img} src={dwt2} alt='' />
                <h2 className={styles.page__title}>Lo Mejor de Dogfight Wild Tournament 2</h2>
            </Link>
        </section>
    )
}