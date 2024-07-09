import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import belal from '@/assets/peleadores__images/20-30/belal-muhammad/belal-muhammad.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Belal Muhammad',
    description: 'Belal Muhammad es un peleador estadounidense que pelea en la UFC desde julio de 2016 en la división de peso wélter. Supo acumular una amplia racha de victorias de forma consecutiva, que le valieron la oportunidad de pelear por el título ante el luchador británico Leon Edwards.',
    openGraph: {
        title: 'Belal Muhammad',
        description: 'Belal Muhammad es un peleador estadounidense que pelea en la UFC desde julio de 2016 en la división de peso wélter. Supo acumular una amplia racha de victorias de forma consecutiva, que le valieron la oportunidad de pelear por el título ante el luchador británico Leon Edwards.',
        url: 'https://fullmma.org/peleadores/belal-muhammad'
    }
}

export default function BelalMuhammad () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={belal} w={23} l={3} d={0} nombre='Belal Muhammad' apodo='Remember The Name' categoria='Peso Wélter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Muhammad UFC</h2>
                    <p className={styles.peleador__article__text}>Belal Muhammad es un peleador estadounidense que pelea en la <Link href='/articulos/ufc'>UFC</Link> desde julio de 2016 en la división de peso wélter. Supo acumular una amplia racha de victorias de forma consecutiva, que le valieron la oportunidad de pelear por el título ante el luchador británico <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>.</p>
                    <h2 className={styles.peleador__article__title}>Belal Muhammad Récord</h2>
                    <p className={styles.peleador__article__text}>Belal Muhammad posee un récord de 23-3 (1). Siendo 5 de sus victorias por la vía del nocaut, 1 por la vía de la sumisión y 17 por decisión. Mientras que de sus 3 derrotas, 1 fue por nocaut y 2 fueron por decisión. Además tiene una pelea ante <b>Leon Edwards</b> que quedó sin resultado, luego de que esta sea parada en medio del segundo asalto, debido a un golpe accidental en el ojo que le impidió a Belal continuar peleando.</p>
                    <h3>Belal Muhammad UFC Récord</h3>
                    <p className={styles.peleador__article__text}>En la UFC posee un récord de 14-3 (1). Siendo 2 de sus victorias por nocaut, 1 por sumisión y 11 por decisión de los jueces. Habiendo llegado a la compañía invicto, todas sus derrotas pertenecen a su estancia en la UFC, siendo 1 de estas derrotas por KO y 2 por decisión.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/FxhUUWZTfWQ?si=YitsJb3sgVsqOITo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Belal Muhammad Origen</h2>
                    <p className={styles.peleador__article__text}>Belal Muhammad nació el 9 de julio de 1988 en Chicago, Illinois, Estados Unidos, pero sus padres son palestinos por lo que es común verlo entrar al octagono con una bandera de Palestina.</p>
                    <h2 className={styles.peleador__article__title}>Belal Muhammad Historia</h2>
                    <p className={styles.peleador__article__text}>Al igual que muchísimos de los peleadores nacidos en Estados Unidos que terminan compitiendo en la UFC, Belal practicó lucha libre en la escuela, deporte que la daría las bases para cuando comenzara su carrera en las MMA, cosa que haría el 18 de agosto de 2012, enfrentando al estadounidense <b>Justin Brock</b> en lo que sería su debut profesional, ganando aquella pelea por nocaut en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Durante un breve periodo pelearía para <b>Bellator</b>, en donde tendría 2 combates ante los americanos <b>Quinton McCottrell</b> y <b>A.J. Matthews</b>, ganando ambos por nocaut. Posteriormente a su paso por Bellator, firmaría con la promotora <b>Titan FC</b>, en donde luego de obtener otras 2 victorias por decisión, se enfrentaría a su compatriota <b>Steve Carl</b> el 30 de abril de 2016 por el título de peso wélter. Belal acabaría ganando aquella pelea por TKO en el cuarto asalto, convirtiéndose en el campeón de la división, aunque abandonaría la compañía poco tiempo después.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/9rUV-DlTLiI?si=EkcY4p_dHPkSogk2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de convertirse en campeón, Belal se uniría a la UFC, a la que llegaría con un invicto de 9-0. Haría su debut en la compañía el 7 de julio de 2016 ante el estadounidense <b>Alan Jouban</b>, debut en el que lamentablemente para nuestro protagonista perdería su invicto, luego de que la pelea llegara a los 3 asaltos y los jueces dieran como ganador a Jouban, igualmente ambos luchadores terminarían ganando el bono a la pelea de la noche.</p>
                    <p className={styles.peleador__article__text}>A su segunda pelea la terminaría ganando por TKO en el tercer asalto ante el mexicano <b>Augusto Montaño</b>. Aunque volvería a perder poco después, esta vez por KO, ante el brasileño <b>Vicente Luque</b>.</p>
                    <p className={styles.peleador__article__text}>Entre 2017 y 2018 lograría hilar 4 victorias consecutivas, todas por decisión, pero luego terminaría perdiendo ante <b>Geoff Neal</b> por decisión unánime. Sin embargo, esta de esta derrota se recuperaría de la mejor manera, logrando hilar 9 victorias consecutivas en 10 combates. Una de estas peleas que tuvo desde aquella derrota ante Neal, fue contra el que en el futuro se convertiría en campeón de la división de peso wélter, <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, que desafortunadamente terminaría sin resultado por golpe accidental en el ojo, que impidió al luchador de origen palestino continuar peleando.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/lw7d6_FGUmI?si=qlqRwaMmwCmOQjkU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Una de las críticas que recibe Belal por parte cierto público de las MMA, es que no suele finalizar sus peleas, ni por la vía de la sumisión, ni por la vía del nocaut, en parte porque pareciera no buscar ganar de esta forma. Por eso es destacable la victoria que consiguió ante <b>Sean Brady</b> en el UFC 280 (evento encabezado por <Link href='/peleadores/charles-oliveira'>Charles OIiveira</Link> y <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>), donde logró vencer TKO en el segundo asalto, ganando además el bono a la actuación de la noche, en una de las peleas más entretenidas que nos regaló este peleador, tomando claramente la iniciativa de la pelea. En este combate también fue clave el rol que cumplió <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, quien aquella noche estuvo en la esquina de nuestro protagonista, y quien según palabras del mismo Belal, fue bastante importante para conseguir vencer el combate de esta manera.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/8CSI43PVL-E?si=FGom3i-k7gUwZy_y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 6 de mayo de 2023, Belal se enfrentaría al brasileño <b>Gilbert Burns</b> en la pelea coestelar del UFC 288, en un combate organizado a 5 asaltos, que terminó por llegar a la decisión de los jueces que dieron como ganador a Belal por decisión unánime.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}