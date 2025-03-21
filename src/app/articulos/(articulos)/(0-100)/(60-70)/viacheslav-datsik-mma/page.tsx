import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/viacheslav-datsik.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Viacheslav Datsik MMA',
    description: '',
    openGraph: {
        title: 'Viacheslav Datsik MMA',
        description: '',
        url: 'https://fullmma.org/articulos/viacheslav-datsik-mma'
    }
}

export default function ViacheslavDatsik () {
    return(
        <main>
            <ArticleHero title='La Historia de Viacheslav Datsik: El Peleador Ruso Más Turbio del Mundo' subtitle='La historia de uno de los luchadores rusos de MMA más perturbados del mundo, Viacheslav Datsik quien además noqueó a Alexander Emelianenko' image={hero} date='2025-02-22' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Viacheslav Datsik es un peleador de MMA y boxeo ruso de 44 años que cuenta con una de las carreras profesionales más bizarras del mundo, y que, pese a tener victorias por nocaut sobre campeones de la UFC y peleadores mega reconocidos en Rusia, es más reconocido por su actividad criminal y sus controversias fuera del octágono. </p>
                    <p>Sus problemas con la ley, su ideología extremista, sus delirios y sus problemas psicológicos han sido causales de una gran controversia en el mundo de los deportes de combate. Por eso hoy exploraremos la particular historia de este individuo que comparte similitudes con otros casos que también cubrimos como el de <Link href='/articulos/peleador-de-mma-con-mas-peleas'>Travis Fulton</Link> y <Link href='/articulos/lee-murray'>Lee Murray</Link>. </p>
                    <h2>Inicios de Viacheslav Datsik en las MMA</h2>
                    <p>El 9 de abril de 1999, cuando Datsik tenía apenas 19 años, tendría su primer combate profesional en las MMA, haciendo su debut para la promotora rusa M-1 Global. </p>
                    <p>Aquella noche se enfrentaría al también debutante Andrei Arlovski, quien, aunque en ese momento no lo sabíamos, se convertiría en un futuro campeón de la división de peso pesado de la UFC, estando entre los <Link href='/articulos/luchadores-ufc-con-mas-victorias'>10 Peleadores de la Compañía con Más Victorias</Link>. Aquella noche nuestro protagonista sería capaz de conseguir la victoria por la vía del KO, luego de conectar un golpe en la cabeza de su rival al minuto 6 de combate, consiguiendo una prometedora victoria ante un peleador que pocos años después, se convertiría en el campeón de la compañía de artes marciales más importante del mundo. </p>
                    <p>Sin embargo, pese a lo ilusionante que puede ser un debut de esta magnitud, lo cierto es que su carrera profesional como peleador iría en picado rápidamente, descubriendo al poco tiempo que esto de pelear no era lo suyo. Dado que para el año 2003, mientras Arlovski se encontraba triunfando y estando a una pelea de pelear por el título, nuestro protagonista llevaba un récord profesional con más derrotas que victorias de 10-17. </p>
                    <p>Datsik mostró señales muy tempranas de no ser un hombre que está completamente en sus cabales durante su carrera como peleador. Con la pelea que tuvo con Vitali Shkraba siendo un ejemplo de esto en 2001, dado que este combate sería recordado por ser en el que Datsik le haría un piquete en el ojo a su rival, perdiendo por descalificación el combate. </p>
                    <p>Otro claro ejemplo de su actitud sucia y violenta aún dentro del octágono, sería cuando en una pelea de boxeo de beneficencia organizado en Moscú, en la que estaba peleando con un muchacho bastante joven, terminaría por atacar al referí en una situación que se salió de control y escaló muy rápido. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/h8EiIi-jyMo?si=9FMK1E6MBViWQAYx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>La desaparición de Datsik</h2>
                    <p>Debido a que como mencioné anteriormente, a Datsik no le estaba yendo bien en su carrera como artista marcial mixto, busco mejor suerte en el kickboxing, donde le iría mejor, consiguiendo en 9 peleas totales un récord de 7-2. </p>
                    <p>Él venía siendo un peleador muy activo en su carrera, llegando a tener hasta 11 peleas en 2001, y hasta 7 en 2002. Sin embargo, en agosto del año 2006, luego de 2 combates que de hecho ganaría, se perdería todo rastro de él, estando desaparecido, y alimentando rumores de que había muerto en un choque de trenes. </p>
                    <p>Casi un año entero estuvo sin saber dónde se encontraba, hasta que en marzo de 2007 aquellos rumores que hablaban del choque de trenes serían completamente descartados, al ser encontrado vivo, luego de ser detenido por el robo reiterado de teléfonos móviles en la ciudad de San Petersburgo. </p>
                    <h2>Encarcelamiento, Escape y Deportación de Datsik</h2>
                    <p>Luego de ser detenido por el robo reiterado de celulares, los oficiales expertos hicieron un análisis sobre su salud mental, encontrando que Datsik tenía simpatías con organizaciones supremacistas, que guardaba una obsesiva mirada antisemita y anticristiana. El luchador ruso llegó a proclamar que Jesús era un agente del Mossad, mientras que él se veía a sí mismo como el “Tarzán Rojo”, el hijo eslavo de Perun. Los analistas concluyeron que Viacheslav tenía esquizofrenia, por lo que se evitaron cargos criminales, colocándolo en su lugar en una institución mental de alta seguridad. Siendo transferido a una de menos seguridad en julio de 2010. </p>
                    <p>Tan sólo un mes después de ser transferido escaparía. Haciendo un agujero en la cerca de alambre, aparentemente usando sólo sus propias manos. Luego de esto, cruzaría ilegalmente la frontera con Noruega en bote. En aquel país sería acogido por un par de hombre de ideología igual de extremista que él.</p>
                    <p>En septiembre, otro mes después sería detenido por la NPIS (National Police Immigration Service), a la que le pediría asilo político. Sin embargo, el 18 de octubre las autoridades Rusia pedirían la extradición, que en un primer instante no sería tomada en cuenta. </p>
                    <p>Los análisis hechos por el equipo de expertos en salud mental de Noruega, no encontraron ningún problema grave con la psiquis de Datsik. Esto llevó a que los abogados del peleador sostuvieran que las autoridades rusas habían inventado el diagnostico psiquiátrico hecho hacía unos años. El luchador también afirmó haber sido torturado por las autoridades de su país. </p>
                    <p>Allí en Noruega, Datsik pidió ser castigado con la mayor pena posible, dado que se consideraba a sí mismo “demasiado salvaje para la humanidad”.</p>
                    <p>Finalmente sería deportado el 18 de marzo de 2011. En rusia nuevamente comenzarían a correr rumores sobre que hacía sido asesinado en una pelea en prisión. Rumor que, por supuesto no sería verdadero, dado que se encontraba en buen estado de salud, siendo liberado de prisión bajo custodia 2016, luego de haber estado prisionero por 9 años. </p>
                    <h2>La Vida de Datsik Luego de Prisión </h2>
                    <p>Viacheslav Datsik volvería a dedicarse al mundo de las peleas luego de ser liberado. Haciendo una sola pelea de MMA el 15 de abril de 2019 ante Artem Tasarov que perdería por descalificación, siendo esta su última pelea hasta la fecha en artes marciales mixtas. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/uN3LkcOodmI?si=G4zEYpc7Cr7zNZsk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Comenzaría a tener más peleas de boxeo especialmente, donde hasta marzo de 2023 llegaría a tener un récord de 6-4, destacando entre sus combates su victoria ante el ex peleador brasileño de UFC Antonio Silva, a quien sería capaz de vencer por TKO CSKA Arena, en Rusia.</p>
                    <p>Además, tendría una pelea de otro peleador del que hablamos en este espacio, explicando su relación con la mafia rusa, como lo es <Link href='/articulos/alexander-emelianenko'>Alexander Emelianenko</Link>, el hermano del histórico <Link href='/leyendas/fedor-emilianenko'>Fedor Emelianenko</Link>. Con quien tendría un combate el 25 de septiembre de 2022, en el CSKA Arena de Moscú, consiguiendo una victoria por la vía del KO a los 13 segundos del primer asalto. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/51Bxo4oLXuw?si=7CTLY5uOO3rQzUZb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Viacheslav Datsik sería capaz de seguir con su vida de manera relativamente normal luego de los escándalos y polémicas que envuelven su vida, teniendo 2 hijos con su exnovia Xenia Efimova, y compitiendo en diferentes combates de boxeo y en diferentes peleas en general, incluyendo combates locos como el que tuvo enfrentando a 2 peleadores al mismo tiempo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}