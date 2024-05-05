import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc300Prelims from '@/assets/articulos/previews/20-30/ufc300_prelims.jpg'
import poirierVsMakhachev from '@/assets/articulos/previews/20-30/poirier-vs-makhachev.jpg'
import ufc301 from '@/assets/articulos/previews/30-40/ufc301-preview.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc301'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc301} alt='' />
                <h2 className={styles.page__title}>UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!</h2>
                <p>José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/articulos/ufc300-prelims'>
                <Image className={styles.pagehero__article__img} src={ufc300Prelims} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>Preliminares UFC 300: !Kayla Harrinson Somete a Holly Holm en el Segundo Asalto en su Debut en la UFC¡</h2>
                    <p>Por el UFC 300 Kayla somete a Holly Holm en el segundo asalto en lo que es su debut en la compañía y Diego Lopes Noquea su rival en el primer asalto</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>13/04/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/articulos/pelea-poirier-vs-makhachev'>
                <Image className={styles.pagehero__article__img} src={poirierVsMakhachev} alt='' />
                <article className={styles.pagehero__article__container}>
                <h2 className={styles.pagehero__title}>¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?</h2>
                    <p>Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/03/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}