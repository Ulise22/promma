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
                    <Link href='/peleadores/alexandre-pantoja' className={`${styles.peleadores__card} ${styles.peleadores__card_pantoja}`}>
                        <h3 className={styles.peleadores__card__name}>Alexandre Pantoja</h3>
                    </Link>
                    <Link href='/peleadores/merab-dvalishvili' className={`${styles.peleadores__card} ${styles.peleadores__card_merab}`}>
                        <h3 className={styles.peleadores__card__name}>Merab Dvalisvili</h3>
                    </Link>
                    <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
                        <h3 className={styles.peleadores__card__name}>Alexander Volkanovski</h3>
                    </Link>
                    <Link href='/peleadores/ilia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
                        <h3 className={styles.peleadores__card__name}>Ilia Topuria</h3>
                    </Link>
                    <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
                        <h3 className={styles.peleadores__card__name}>Islam Makhachev</h3>
                    </Link>
                    <Link href='/peleadores/khamzat-chimaev' className={`${styles.peleadores__card} ${styles.peleadores__card_chimaev}`}>
                        <h3 className={styles.peleadores__card__name}>Khamzat Chimaev</h3>
                    </Link>
                    <Link href='/peleadores/alex-pereira' className={`${styles.peleadores__card} ${styles.peleadores__card_pereira}`}>
                        <h3 className={styles.peleadores__card__name}>Alex Pereira</h3>
                    </Link>
                    <Link href='/peleadores/tom-aspinall' className={`${styles.peleadores__card} ${styles.peleadores__card_aspinall}`}>
                        <h3 className={styles.peleadores__card__name}>Tom Aspinall</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}