import Link from "next/link";
import styles from './peleadores.module.css'
import { data } from './components/data'
import './peleadoresImage.css'
import FightersBtns from "./components/FightersBtns";
 
export default function Peleadores ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '15'
  
    const start = (Number(page) -1) * Number(per_page)
    const end = start + Number(per_page)
  
    const fighters = data.slice(start, end)
  
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Luchadores de MMA</h1>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Luchadores de UFC</h2>
                <article className={styles.peleadores__container}>
                    {fighters.map (fighter => (
                    <Link key={fighter.url} href={fighter.url} className={`${styles.peleadores__card} ${fighter.fighterClass}`}>
                        <h3 className={styles.peleadores__card__name}> {fighter.name} </h3>
                    </Link>
                    ))}
                </article>
                <FightersBtns hasNextPage={end < data.length} hasPrevPage={start > 0} />
                <h2 className={styles.peleadores__subtitle}>Campeones de UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/joshua-van' className={`${styles.peleadores__card} ${styles.peleadores__card_joshuavan}`}>
                        <h3 className={styles.peleadores__card__name}>Joshua Van</h3>
                    </Link>
                    <Link href='/peleadores/petr-yan' className={`${styles.peleadores__card} ${styles.peleadores__card_petryan}`}>
                        <h3 className={styles.peleadores__card__name}>Petr Yan</h3>
                    </Link>
                    <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
                        <h3 className={styles.peleadores__card__name}>Alexander Volkanovski</h3>
                    </Link>
                    <Link href='/peleadores/justin-gaethje' className={`${styles.peleadores__card} ${styles.peleadores__card_gaethje}`}>
                        <h3 className={styles.peleadores__card__name}>Justin Gaethje</h3>
                    </Link>
                    <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
                        <h3 className={styles.peleadores__card__name}>Islam Makhachev</h3>
                    </Link>
                    <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
                        <h3 className={styles.peleadores__card__name}>Sean Strickland</h3>
                    </Link>
                    <Link href='/peleadores/carlos-ulberg' className={`${styles.peleadores__card} ${styles.peleadores__card_carlosulberg}`}>
                        <h3 className={styles.peleadores__card__name}>Carlos Ulberg</h3>
                    </Link>
                    <Link href='/peleadores/ciryl-gane' className={`${styles.peleadores__card} ${styles.peleadores__card_cirylGane}`}>
                        <h3 className={styles.peleadores__card__name}>Ciryl Gane</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}