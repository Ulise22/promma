import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/argentinos2024.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Peleadores Argentinos de UFC',
    description: "Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va.",
    openGraph: {
        title: 'Peleadores Argentinos de UFC',
        description: "Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va.",
        url: 'https://fullmma.org/noticias/peleadores-de-ufc-argentinos-2024'
    }
}

export default function PeleadoresArgentinosUFC () {
    return(
        <main>
            <ArticleHero title='Los 5 Peleadores de UFC Argentinos Que Compiten en 2024' subtitle="Con la llegada de Kevin Vallejos a la UFC, ya son 5 los argentinos que compiten en la UFC. Quiénes son y cómo les va." image={hero} date='2024-09-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente, &apos;El Chino&apos; Vallejos logró impresionar con un KO espectácular a Dana White, en el programa de televisión <b>Dana White&apos;s Contender Series</b>, lo que valió como recompensa un contrato con la UFC, la compañía de MMA más grande del planeta. </p>
                    <p>Con Kevin Vallejos, ya son 5 los argentinos que compiten en esta compañía, por eso hoy vamos a hablar de ellos y de cómo les está yendo en sus carreras. </p>
                    <h2>1. Santiago Ponzinibbio</h2>
                    <p>El primer peleador del que hay hablar sin dudas es de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, quien es el más veterano de esta lista, leyenda viva de las MMA en Argentina, peleando en la UFC desde hace más de una década. </p>
                    <p>Santiago pelea en la división de Peso Wélter desde el 9 de noviembre de 2013, llevando un total de 18 combates, con un récord de 11-7. Habiendo llegado a acumular en su momento una racha de 7 victorias consecutivas, que de no ser por los problemas de salud que comenzó a sufrir, seguramente habría terminado peleando por el cinturón en algún momento.</p>
                    <p>A lo largo de su carrera ha sabido ganar 6 bonos por su desempeño en los combates, y su última pelea fue el 13 de julio de este año, ante el ruso <b>Muslim Salikhov</b>, contra quien cayó derrotado por decisión dividida. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/t2pdtBmsECE?si=XaiLdc5899jwMdVf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>2.Ailín Pérez</h2>
                    <p>La única mujer y también la única peleadora ranqueada de esta lista es <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, que actualmente se encuentra posicionada #15 en los rankings de la división de peso gallo femenino. </p>
                    <p>Tiene un récord de 10-2, y en sus 4 peleas de UFC, sólo ha perdido una, en lo que fue su debut ante la suiza <b>Stephanie Egger</b>, en un combate que se dió en peso pluma. Lleva acumulada una racha de 3 victorias consecutivas, siendo la última el 1 de junio de 2024 en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>, donde en una pelea que supo dominar de principio a fin, derrotó por decisión unánime a la panameña <b>Joselyne Edwards</b>. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/VUvS_7585WA?si=-BcxnBoJXBmPrD4p" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>A fecha de hoy, tiene programada una pelea para el sábado 28 de septiembre, ante la rusa <b>Dariya Zheleznyakova</b>, quien tiene un récord profesional de 9-1. </p>
                    <h2>3.Esteban Ribovics</h2>
                    <p>Uno de los que más viene destacando, especialmente este año, es el salteño <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, quien compite en la división de peso ligero, poseyendo un récord profesional de 14-1, y que en sus 4 peleas en la UFC, lleva 3 victorias, siendo todas estas de forma consecutiva. </p>
                    <p>Se ganó su contrato en la compañía al vencer por KO en el primer asalto al inglés <b>Thomas Paull</b>, en el <b>Dana White&apos;s Contender Series</b>, el día 16 de agosto de 2022. Su última pelea fue en el <Link href='/covertura-ufc/ufc306'>UFCNoche</Link>, donde formó parte de la cartelera estelar, logrando una increíble victoria por decisión ante el mexicano <b>Daniel Zellhuber</b>, que le valió el bono a la Pelea de la Noche. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/CExoos0xrnc?si=9asYnhDrsMcMsSpS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>4.Francisco Prado</h2>
                    <p>El santafesino <b>Francisco Prado</b> al igual que Sebastian, compite en la división de peso ligero. Actualmente tiene un récord profesional de 12-2, y en los 3 combates que tuvo en la UFC, sólo logró ganar 1, perdiendo los otros 2. Sin embargo, estos 3 combates le valieron para cobrar 2 bonos: siendo 1 a la actuación de la noche, luego de derrotar por TKO al alemán <b>Ottman Azaitar</b>; y el otro bono fue a La Pelea de la Noche, en su último combate ante el mexicano <b>Daniel Zellhuber</b>, contra quien cayó derrotado por decisión unánime. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/vNqq5kXpFJU?si=wH3KmZFFUMJp2uZ-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>5.Kevin Vallejos</h2>
                    <p>El último argentino en incorporarse a la UFC, es el jovensísimo <b>Kevin Vallejos</b>, quien con 22 años compite en la categoría de peso pluma y logró firmar un contrato luego de su victora por nocaut ante <b>Cam Teague</b> en el <b>Dana White&apos;s Contender Series</b>. Posee un récord profesional de 13-1, y está a la espera de hacer su debut en la compañía.</p>
                    <p>Ya había intentado ingresar a la UFC por la misma vía el año pasado, cuando tuvo un combate contra el brasileño <b>Jean Silva</b>, sin embargo allí sufriría la primera y hasta ahora única derrota de su carrera, por decisión unánime. Pese a que perdió este combate, de igual forma llamó la atención de Dana White, quien elogió el desempeño del joven argentino, y que un año más tarde le volvería a dar la chance de pelear por un contrato. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ZIV6ahzuVv8?si=At-4l1uFo6GkUCrQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}