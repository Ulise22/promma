import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/previews/20-30/kevin_vallejos.jpg'

export const metadata: Metadata = {
    title: 'Kevin Vallejos Entra a la UFC',
    description: "El argentino Kevin 'El Chino' Vallejos se luce con un impresionante nocaut en el primer asalto de su pelea, en el Dana White's Contender Series, que practicamente lo deja dentro de la UFC.",
    openGraph: {
        title: 'Kevin Vallejos Entra a la UFC',
        description: "El argentino Kevin 'El Chino' Vallejos se luce con un impresionante nocaut en el primer asalto de su pelea, en el Dana White's Contender Series, que practicamente lo deja dentro de la UFC.",
        url: 'https://fullmma.org/noticias/kevin-vallejos-entra-a-ufc'
    }
}

export default function KevinVallejosUFC () {
    return(
        <main>
            <ArticleHero title='Kevin Vallejos Gana Por Nocaut En El Primer Asalto y se Asegura el Contrato en la UFC' subtitle="EL Chino Vallejos Gana por Nocaut en el Dana White's Contender Series y se asegura un contrato en la UFC." image={hero} date='2024-09-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El argentino <b>Kevin &quot;El Chino&quot; Vallejos</b> se luce con un impresionante nocaut en el primer asalto de su pelea, en el <b>Dana White&apos;s Contender Series</b>, que practicamente lo deja dentro de la <Link href='/articulos/ufc'>UFC</Link>.</p>
                    <p>En una actuación que sólo puede ser definida como espectacular, el joven argentino de 22 años logró una importantísima victoria ante <b>Cam Teague</b>, quien llegaba a esta pelea con un récord invicto de 7-0. Sin embargo, su rival nada puedo hacer ante la potente combinación de golpes del argentino, que luego de su pelea, aseguro sólo sentir dolor en las manos de tanto pegar.</p>
                    <p>De esta forma, el chino que ya suma un récord profesional de 14-1, tiene practicamente asegurado un contrato con la UFC, dando un desempeño impresionante en esta pelea, prometiendo con su rendimiento consas importantes para el futuro.</p>
                    <p>El Chino Vallejos ya había participado del <b>Dana White&apos;s Contender Series</b> el año pasado, cayendo derrotado por decisión unánime ante el brasileño <b>Jean Silva</b>, quien en lo que va del año ha peleado en 3 ocasiones ganando todas sus peleas en la UFC. </p>
                    <p>El argentino necesito de 2 peleas más, donde consiguió una victoria por la vía de la sumisión y 1 por la vía del nocaut, para volver a ganar una chance de pelear por un contrato en la compañía de artes marciales mixtas más grande del mundo, y vaya que la aprovechó con el performance de hoy.</p>
                    <p>Kevin pelea en la categoría de peso pluma, donde el actual campeón de UFC es el español <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, y personalmente no puedo esperar para verlo hacer su debut en la compañía. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}