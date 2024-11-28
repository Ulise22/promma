import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-10/peleadores_espanoles_ufc.jpg'

export const metadata: Metadata = {
    title: 'Luchadores Españoles en UFC 2025',
    description: "Las MMA es un deporte en ascenso en España, especialmente desde la irrupción de Ilia Topuria, que llevó la popularidad del deporte a otro nivel en el país europeo, por eso hoy vamos a hablar de los 5 luchadores de UFC que compiten actualmente en la compañía.",
    openGraph: {
        title: 'Luchadores Españoles en UFC 2025',
        description: "Las MMA es un deporte en ascenso en España, especialmente desde la irrupción de Ilia Topuria, que llevó la popularidad del deporte a otro nivel en el país europeo, por eso hoy vamos a hablar de los 5 luchadores de UFC que compiten actualmente en la compañía.",
        url: 'https://fullmma.org/noticias/luchadores-espanoles-en-ufc'
    }
}

export default function PeleadoresEspanolesUFC () {
    return(
        <main>
            <ArticleHero title='Los 5 Peleadores Españoles Actuales de UFC en 2024' subtitle="Los luchadores españoles de UFC que compiten actualmente en la compañía más grande de MMA del mundo." image={hero} date='2024-11-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>¿Quiénes son los luchadores españoles de UFC actualmente y cómo les va?</h2>
                    <p>Las MMA es un deporte en ascenso en España, especialmente desde la irrupción de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, que llevó la popularidad del deporte a otro nivel en el país europeo, por eso hoy vamos a hablar de los 5 luchadores de <Link href='/articulos/ufc'>UFC</Link> que compiten actualmente en la compañía. </p>
                    <p>Pese a la popularidad que ha alcanzado el deporte, siguen sin ser demasiados los luchadores que compiten en la compañía liderada por Dana White. Sin embargo, con la clara intención de llevar la UFC a España en el 2025, y el cada vez mayor talento que estos atletas demuestran, no dudamos que de acá a 12 meses incluso, la lista de peleadores crecerá aún más. </p>
                    <h2>1. Ilia Topuria</h2>
                    <p>El más popular y por el momento el más exitoso de todos los españoles, es el actual campeón de peso pluma de la UFC, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>. Quien a pesar de haber nacido en Alemania y de ser hijo de padres georgianos, desde los 15 años que vive en España, habiendo recibido la nacionalidad del país, y se ha adaptado de tal manera que ya es un español más, hablando perfectamente el idioma y eligiendo representarlo a donde va. </p>
                    <p>Logró un hito en el deporte al convertirse en el quinto campeón de toda la historia el día 17 de febrero de 2024 en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, al noquear al histórico y entonces campeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> en el segundo asalto de la pelea, siendo este un peleado que jamás había perdido en la categoría de 145lbs de la UFC. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/EQL0U5F6JKA?si=cRMzOJVy4k8uCRRg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Desde entonces es el campeón y ha logrado otro hito más recientemente cuando el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, celebrado el 26 de octubre en Abu Dhabi, se convirtió en el primer luchador en noquear al excampeón <Link href='/peleadores/max-holloway'>Max Holloway</Link>, consiguiendo esto en el tercer asalto de la pelea. </p>
                    <h2>2. Aleksandre Topuria</h2>
                    <p>Otro que más recientemente se unió a la compañía es el hermano de Ilia, Aleksandre Topuria, quien al igual que este nació en Alemania, pero se nacionalizó español y es representante de este país. </p>
                    <p>Pese a que se ha hecho oficial su contratación para la empresa más grande artes marciales mixtas del mundo, todavía falta fecha oficial para su debut en la compañía, que no debería extenderse más lejos del 2025.</p>
                    <p>A diferencia de su hermano menor, Aleksandre compite una división por debajo, siendo un luchador de peso gallo con menos peleas que Ilia, poseyendo actualmente un récord profesional de MMA de 5-1, habiendo finalizado en todas sus peleas, siendo 3 de estas victorias por la vía del nocaut, y 2 por la vía de la sumisión. </p>
                    <h2>3. Joel Álvarez</h2>
                    <p>Otro peleador que ya lleva tiempo en la compañía es <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, que, que compite en la UFC desde febrero de 2019, cuando haría su debut ante <b>Damir Ismagulov</b>, contra quien caería derrotado por decisión unánime. </p>
                    <p>Sin embargo, han sido más las victorias que las derrotas sufridas por este peleador que compite en la división de peso ligero. Habiendo ganado 6 combates en total en la compañía, consiguiendo finalizar en todos y cada uno de ellos, con 3 nocauts y 3 sumisiones para el nacido en la ciudad de Gijón, Asturias.</p>
                    <p>Actualmente se encuentra con una racha de victorias consecutivas, luego de sufrir una derrota ante <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, un récord de 21-3 (con todas sus victorias siendo por finalización), y estando a un paso de ser un luchador ranqueado de una de las divisiones más duras de la UFC actualmente. </p>
                    <h2>4. Daniel Barez</h2>
                    <p><b>Daniel Bárez Martínez</b> es uno de los luchadores de España que más recientemente se unió al roster de la UFC, contando con tan sólo 2 peleas en la compañía, siendo la primera de estas una derrota por sumisión ante el brasileño <b>Jafel Filho</b>, en julio de 2023, y la más reciente una merecida victoria ante el mexicano <b>Víctor Altamirano</b>, a quien derrotó por decisión unánime el 28 de septiembre de 2024 en el <Link href='/covertura-ufc/fight-night-moicano-saintdenis'>UFC Fight Night: Moicano vs. Saint Denis</Link>.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/RaArEscPyDY?si=3xBtRq6DUaSLTsm2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Daniel es un luchador de peso mosca de 36 años, que nació en el municipio de Burjasot, Valencia, y es luchador profesional desde noviembre de 2012, cuando debutaría ante su compatriota Andoni Sorando, sometiendo a este en el primer asalto. Actualmente posee un récord profesional en MMA de 17-6, con 7 de sus victorias siendo por la vía del nocaut, 6 por la vía de la sumisión, y sólo 4 de sus victorias siendo por decisión. </p>
                    <h2>5. Chris Barnett</h2>
                    <p>Por último, debemos hablar del luchador de peso pesado <b>Chris Barnett</b>, quien nació en Zaragoza, España, pero es hijo de un padre estadounidense, quien fue capitán de la Fuerza Aérea de los Estados Unidos, y que en la época en que Barnett nació estaba destinado en la Base Aérea de Zaragoza.</p>
                    <p>Barnett viviría en esta zona hasta los 6 años, cuando se mudaría a los Estados Unidos, donde viviría desde entonces. </p>
                    <p>Posee un récord profesional de 23-9, siendo 18 de sus victorias por la vía del nocaut y 5 por la vía de la decisión. Hizo su debut en la UFC en mayo de 2021, cayendo derrotado por sumisión ante <b>Ben Rothwell</b>. Desde entonces pelearía 5 combates en la compañía, perdiendo 3 y ganando 2, siendo la más reciente de sus peleas la que tuvo en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link> en octubre de este año, enfrentando al nigeriano <b>Kennedy Nzechukwu</b>, contra quien caería derrotado por TKO en el primer asalto. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/7U5-KsT6_EA?si=mEIBs2EflqxYOita" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}