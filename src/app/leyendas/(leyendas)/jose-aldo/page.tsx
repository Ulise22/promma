import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/leyendas/components/AsideChamps'
import AldoHero from './AldoHero'


export default function Aldo () {
    return(
        <main>
            <AldoHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Jose Aldo UFC</h2>
                    <p className={styles.leyenda__article__text}>José Aldo es un expeleador de MMA brasileño que destacó por ser el primer campeón de peso pluma de la <Link href='/promotoras/ufc'>UFC</Link>, donde es considerado por muchos como el mejor campeón que tuvo la división en la compañía. Contando con un total de 7 defensas exitosas, siendo de los peleadores más dominantes que tuvo la división.</p>
                    <h2 className={styles.leyenda__article__title}>Jose Aldo Récord</h2>
                    <p>José Aldo cuenta con un récord en las MMA de 31-8. Siendo 16 de esas 31 victorias por nocaut, 2 por sumisión, y 14 por decisión. Mientras que de sus 8 derrotas, 4 fueron por nocaut, 1 por sumisión y 3 por decisión. </p>
                    <h2 className={styles.leyenda__article__title}>Jose Aldo Historia</h2>
                    <p>Chunguita José Aldo da Silva Oliveira, Jr. nació un 9 de septiembre de 1986 en la ciudad de Manaos, que es la capital del Estado de Amazonas, perteneciente al norte de Brasil.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}