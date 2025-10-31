import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/30-40/joel-alvarez/joel_alvarez.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Joel Álvarez',
    description: "Joel Álvarez es un peleador español que compite en la división de peso ligero en la UFC desde febrero de 2019, cuando hiciera su debut ante el ruso Damir Ismagulov.",
    openGraph: {
        title: 'Joel Álvarez',
        description: "Joel Álvarez es un peleador español que compite en la división de peso ligero en la UFC desde febrero de 2019, cuando hiciera su debut ante el ruso Damir Ismagulov.",
        url: 'https://fullmma.org/peleadores/joel-alvarez'
    }
}

export default function JoelAlvarez () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={23} l={3} d={0} nombre='Joel Álvarez' apodo='EL FENÓMENO' categoria='Peso Ligero' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Joel Álvarez UFC</h2>
                    <p className={styles.peleador__article__text}>Joel Álvarez es un peleador español que compite en la división de peso ligero en la <Link href='/articulos/ufc'>UFC</Link> desde febrero de 2019, cuando hiciera su debut ante el ruso <b>Damir Ismagulov</b>.</p>
                    <p className={styles.peleador__article__text}>Es uno de los representantes de España en la UFC (al igual que el campeón <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> por ejemplo), y es un luchador muy completo, que hasta al momento no conoce lo que es ganar una pelea por la vía de la decisión, dado que ha finalizado el 100% de sus combates (con la mayoría de estas finalizaciones viniendo por sumisión).</p>
                    <h2 className={styles.peleador__article__title}>Joel Álvarez Récord</h2>
                    <p className={styles.peleador__article__text}>Joel Álvarez mantiene un récord profesional de 23-3. Siendo 6 de sus victorias por la vía del nocaut, 16 por la vía de la sumisión y sólo 1 por decisión. Mientras que de sus 3 derrotas, 2 fueron por la vía del nocaut y sólo 1 fue por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Joel Álvarez Biografía</h2>
                    <p className={styles.peleador__article__text}>Joel Álvarez Gonzáles nació el 2 de marzo de 1993 en la ciudad de Gijón, Asturias. En su juventud comenzó practicando fútbol como deporte mientras estudiaba, hasta que cumplió la edad de 18 años, cuando decidió comenzar a praticar MMA en un gimnasio de su ciudad. </p>
                    <p className={styles.peleador__article__text}>Mientras entrenaba, trabajó como personal de seguridad en una discoteca antes de iniciar su carrera profesional. Su debut en las Artes marciales mixtas lo haría el 28 de diciembre de 2013 ante su compatriota <b>Aratz Garmendia</b>, logrando una victoria por sumisión en el primer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Ganaría sus primeras 5 peleas como profesional antes de que llegara su primera derrota, en un combate que tuvo lugar en Moscú ante el ruso <b>Ali Abdulkhalikov</b>, quien logró noquear a nuestro protagonista en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Joel pelearía en diversas compañías de MMA, destacando su participación en <b>AFL</b>, donde tendría un total de 6 combates antes de llegar a la UFC. Ganando todas sus peleas sometiendo a cada uno de sus rivales. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dcieqXjinFM?si=U0yDpdoY9bAuNUTV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En esta promotora es donde lograría consagrarse como campeón de Peso Ligero, al lograr someter en el primer asalto al italiano <b>Radu Maxim</b>. Esta sería su última pelea en la compañía, dado que con su destacada trayectoria y siendo bastante joven, con un récord en ese entonces de 15-1, lograría firmar un contrato con la UFC para luchar allí.</p>
                    <p className={styles.peleador__article__text}>Haría su debut oficial el día 23 de febrero de 2019, enfrentando al ruso <b>Damir Ismagulov</b>, ante quien caería derrotado por decisión unánime, siendo esta su segunda derrota y la única pelea en su carrera (de 24 en total) en llevarse a la decisión de los jueces. De igual forma, Joel tendría un nuevo combate 4 meses después ante el italiano <b>Danilo Belluardo</b>, a quien lograría vencer por TKO en el segundo asalto. Su tercer pelea en la compañía sería ante el irlandés <b>Joe Duffy</b>, a quien sometió en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Joel Álvarez tendría un nuevo combate el 24 de octubre de 2020 en el UFC 254 (evento encabezado por <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> y <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>), donde enfrentaría al ruso <b>Alexander Yakovlev</b>, logrando una victoria por sumisión en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Un año más tarde, pelearía en el <b>UFC Fight Night: <Link href='/peleadores/max-holloway'>Holloway</Link> vs Rodríguez</b>, enfrentando al brasileño <b>Thiago Moisés</b>, a quien lograría derrotar por la vía del nocaut en el primer asalto.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/X4TEAtjrGU4?si=rfCmWd6-Xb2b4anq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Joel Álvarez tendría la oportunidad de meterse en el top #15 de la división de peso ligero al enfrentar al armenio <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, quien en aquel momento era el #13 de la división. Su combate tendría lugar el 26 de febrero de 2022 en el <b>UFC Fight Night: <Link href='/peleadores/islam-makhachev'>Makhachev</Link> vs Green</b>. Lamentablemente para Joel, en esta ocasión no lograría llevarse la victoria y caería derrotado por TKO en el segundo asalto del combate.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/v6c_KMa49KM?si=r2v1_J2UkkQStRE-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Más de un año después, volvería a pelear para enfrentarse al congoleño <b>Marc Diakiese</b> en el <b>UFC Fight Night: <Link href='/peleadores/tom-aspinall'>Aspinall</Link> vs Tybura</b>. El español ganaría esta pelea por sumisión en el segundo asalto.</p>
                    <p className={styles.peleador__article__text}>Volvería a pelear el 3 de agosto de 2024 ante el brasileño <b>Elves Brener</b> en el <Link href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>UFC Fight Night: Sandhagen vs Nurmagomedov</Link>, a quien vencería por TKO en el tercer asalto, logrando su primer bono en la compañía a la actuación de la noche, y cumpliendo con una finalización al igual que todas las victorias de su carrera.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}