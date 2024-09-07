'use client'
import { FC } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import styles from '../peleadores.module.css'

interface FightersBtns {
    hasNextPage: boolean
    hasPrevPage: boolean
}

const FightersBtns: FC<FightersBtns> = (
    {
        hasNextPage,
        hasPrevPage
    }
) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '15'

    return(
        <div className={styles.btns__container}>
            <button className={styles.btns__btn} disabled={!hasPrevPage} onClick={() => router.push(`/peleadores/?page=${Number(page) - 1}&per_page=${per_page}`)} >Atrás</button>
            <p className={styles.btns__page}> {page} / {Math.ceil(33 / Number(per_page))} </p>
            <button className={styles.btns__btn} disabled={!hasNextPage} onClick={() => router.push(`/peleadores/?page=${Number(page) + 1}&per_page=${per_page}`)} >Sig.</button>
        </div>
    )
}

export default FightersBtns