import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
/* Images */
import hero from '@/assets/articulos/20-30/alexander_emelianenko.jpg'
import tatoos from '@/assets/articulos/insideArticle/alexander-tatuajes.jpg'

export const metadata: Metadata = {
    title: 'Alexander Emelianenko',
    description: 'Los tatuajes de Alexander Emelianenko y el significado que tienen, ¿De verdad formó parte de la mafia rusa?',
    openGraph: {
        title: 'Alexander Emelianenko',
        description: 'Los tatuajes de Alexander Emelianenko y el significado que tienen, ¿De verdad formó parte de la mafia rusa?',
        url: 'https://fullmma.org/articulos/alexander-emelianenko'
    }
}


export default function AlexanderEmelianenko () {
    return(
        <main>
            <ArticleHero title='Alexander Emelianenko: El Hermano de Fedor Emelianenko y su Relación con la Mafia Rusa' subtitle='Los tatuajes de Alexander Emelianenko y el significado que tienen, ¿De verdad formó parte de la mafia rusa?' image={hero} date='27/05/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Alexander Emelianenko</h2>
                    <p>Alexander Emelianenko un luchador de MMA ruso, hermano menor del legendario <Link href='/leyendas/fedor-emilianenko'>Fedor Emelianenko</Link>. Nació el 2 de agosto de 1981 en la antigua Unión Soviética y comenzó a entrenar artes marciales desde pequeño influenciado por su hermano mayor Fedor, a quien solía acompañar para verlo entrenar, hasta que finalmente decidió comenzar a practicar Sambo, disciplina en la que destacaría al convertirse en 3 veces campeón nacional y 3 veces campeón del mundo en la división absoluta.</p>
                    <p>A nivel deportivo en las artes marciales mixtas tuvo una carrera muy destacada de hecho, haciendo su debut en nada más y nada menos que <b>PRIDE FC</b>, donde enfrentaría al brasileño <b>Assuerio Silva</b> el 5 de octubre de 2003, donde vencería por decisión dividida.</p>
                    <p>En dicha compañía compitió hasta el año 2006, cuando se terminaría su contrato, por lo que pasó a competir en diversas compañías. En toda su carrera es destacable el periodo inmediato a su salida de PRIDE, dado que aunque perdió su primera pelea por fuera de esta promotora, contra un brasileño llamado <b>Fabricio Werdum</b> quien lo sometió en el primer asalto del combate, acumlaría una racha de 8 victorias consecutivas, siendo todas estas victorias por finalización en el primer asalto. Además que en este mismo periodo fue capaz de convertirse en campeón de los pesos pesados de <b>ProFC</b>, al dejar KO al sueco <b>Eddy Bengtsson</b> a los 40 segundos del combate.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/sujUH3qgcvk?si=oOMG_X-fdc8sCHYg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Alexander Emelianenko Récord</h2>
                    <p>Manteniendo una muy destacada y meritoria carrera, Alexander se retiró de las artes marciales mixtas con un récord de 28-9-1. Siendo 20 de sus 28 victorias por la vía del nocaut, 5 por sumisión y 3 por decisión. Mientras que de sus 9 derrotas, 5 fueron por nocaut y 4 por sumisión. Además tiene un empate mayoritario en su pelea contra el estadounidense <b>Anthony Johnson Jr.</b> el 18 de agosto de 2018 en el <b>World Fighting Championship Akhmat 50</b>.</p>
                    <h2>Alexander Emelianenko Tatuajes</h2>
                    <p>Los rumores que involucran a Alexander Emelianenko con la mafia rusa, se deben principalmente a los tatuajes que tenía anteriormente, que eran 2 estrellas en el cuerpo, las cuales indicaban que alguien forma o formaba parte de la mafia rusa clásica.</p>
                    <Image className={styles.article__image} src={tatoos} alt='' />
                    <p>El hecho de llevar estos tatuajes en los hombros, indican que se es alguien disciplinado, seguidor de las tradiciones y de honor que ostenta un alto rango en la familia mafiosa, que quizás se ha ganado acabando con la vida de algún rival. Sin embargo, han sido varias las ocasiones en las que Alexander ha negado haber pertenecido a algún grupo criminal y haber sido un alto mando en la mafia rusa, no dejan de ser varios los que sostienen que algún vinculo debía tener.</p>
                    <p>Como se puede apreciar en fotos más recientes de Alexander, este se ha tapado las estrellas que tenía tatuadas, y sobre el por qué existen diversas teorías. Hay quienes sostienen que lo hizo porque en realidad nunca se las había ganado, por lo que fue convencido de tapárselos, otros dicen que lo hizo porque ya no forma parte de estas organizaciones, y otros creen que simplemente se tapó los tatuajes para que la gente deje de hablar de este tema, y se dejen de escribir artículos como este. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}