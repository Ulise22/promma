import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/40-50/zabit.jpg'

export const metadata: Metadata = {
    title: 'Zabit Magomedsharipov',
    description: 'Zabit Akhmedovich Magomedsharipov es uno de los mayores casos de "¿hasta dónde hubiera llegado?" de no retirarse tan joven, dado que en el tiempo que estuvo activo nos deslumbró con actuaciones impresionantes en sus peleas, teniendo un estilo muy partícular, vistoso y poco usaul en los peleadores de Daguestán.',
    openGraph: {
        title: 'Zabit Magomedsharipov',
        description: '',
        url: 'https://fullmma.org/articulos/que-paso-con-zabit-magomedsharipov'
    }
}

export default function ZabitMagomedsharipov () {
    return(
        <main>
            <ArticleHero title='Zabit Magomedsharipov: ¿Qué Pasó con la Bestia Daguestaní que se Retiró Demasiado Joven?' subtitle='La historia de Zabit Magomedsharipov, ¿Quién es? ¿Por qué se retiró con tan sólo 28 años? y ¿Qué es de su vida actualmente?' image={hero} date='2024-08-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><b>Zabit Akhmedovich Magomedsharipov</b> es uno de los mayores casos de &quot;¿hasta dónde hubiera llegado?&quot; de no retirarse tan joven, dado que en el tiempo que estuvo activo nos deslumbró con actuaciones impresionantes en sus peleas, teniendo un estilo muy partícular, vistoso y poco usaul en los peleadores de Daguestán.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/jsdAhwf3J44?si=A3iGMT9wopIrQcrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Magomedsharipov nació el 1 de marzo de 1991 en la República de Daguestán, en Rusia. Desde pequeño comenzó a entrenar artes marciales, con especial inclinación por el Kung Fu. </p>
                    <p>Con sólo 21 años comenzaría su carrera profesional en las MMA, debutando ante el luchador de Kazajistán <b>Zhumageldy Zhetpisbayev</b> en mayo de 2012, obteniendo una victoria por TKO en el tercer asalto. Ese año tendría otros 3 combates que terminaría ganando. </p>
                    <p>Su primera y única derrota de su carrera, llegaría en su quinta pelea como profesional en el año 2013, cayendo sometido en el tercer asalto de la pelea. En este combate se vió la que quizás era la mayor debilidad de Zabit, que sería que en sus peleas iba de más a menos, sufriendo bastante el tercer asalto si no consigue finalizar antes.</p>
                    <p>Su carrera tendría un rápido ascenso, logrando convertirse en campeón de la compañía <b>ACB</b> en la división de peso pluma en el año 2016, al derrotar al ruso <b>Sheikh-Magomed Arapkhanov</b> por KO en el primer asalto. Luego de una defensa exitosa ante el brasileño <b>Valdines Silva</b> por TKO en el primer asalto, lograría entrar a la UFC, donde debutaría el 2 de septiembre de 2017 ante el estadounidense <b>Mike Santiago</b>, a quien lograría vencer por sumisión en el segundo asalto, ganando además el primer bono de su carrera, a la actuación de la noche.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/9utSVmKY854?si=kL4iO5e1AmIhQXO1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su ascenso y la expectativa por ver pelear a este luchador fue meteórico, consiguiendo 3 victorias más en la UFC, llevándose los bonos a la actuación de la noche en su pelea con <b>Sheymon Moraes</b>, y a la pelea de la noche contra <b>Kyle Bochniak</b>. Además en su cuarta victoria en la UFC, ante el estadounidense <b>Brandon Davis</b>, conseguiría someter a su rival en el segundo asalto de una forma muy inusual en las MMA.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/Vebigwp4cRc?si=pS57U2OcNvAgNI8v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Zabit tendría 2 peleas contra peleadores ranqueados en el top15, como lo sería su pelea ante <b>Jeremy Stephens</b> a quien vencería por decisión unánime, y como lo sería su pelea ante <b>Calvin Kattar</b>, con quien encabezaría la cartelera de UFC en Moscú, consiguiendo otra victoria por decisión unánime y el bono a la pelea de la noche.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/IwgdpPUbr94?si=mhg0T62NklqLC5mx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Tras esta victoria, su chance de dispuarle el título a <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> estaba cada vez más cerca. Por esto se lo programó para pelear ante el mexicano <b>Yair Rodríguez</b> para el año 2020, sin embargo una lesión de Yair llevó a suspender este combate.</p>
                    <p>Es en este tiempo que a Zabit le comienza a costar encontrar combates, pese a haber llegado a estar ranqueado #2 en la división de peso pluma, sólo por detrás de <Link href='/peleadores/max-holloway'>Max Holloway</Link>. Sumado a esto se comenzó a saber que Magomedsharipov estaba sufriendo algunos problemas de salud.</p>
                    {/* <h2>Zabit Magomedsharipov vs Islam Makhachev</h2>
                    <p></p> */}
                    <h2>¿Por qué renunció Zabit Magomedsharipov?</h2>
                    <p>La falta de rivales para luchar en la UFC desmotivaron a Zabit, que sin un objetivo por delante se le dificultaba concentrarse para entrenar. Esto sumado a que los problemas de salud que sufría, relacionados a sus sistema inmunológico comenzaban a agravarse. Estas cosas fueron aumentando los rumores de un posible retiro para un peleador que tuvo su última pelea con tan sólo 28 años.</p>
                    <p>Además, en la decisión de Zabit había un trasfondo religioso en su decisión, dado que tampoco le estaba gustando la dirección en la que estaba yendo el negocio de las MMA. Por lo que, sus problemas con la UFC, la dificultad para encontrar rivales, sus problemas de salud, y la falta de motivación para entrenar en la que todo esto terminaba, llevaron a Zabit a retirarse de las MMA.</p>
                    <p>La UFC sin embargo hizo un intento de convencerlo de volver en 2023, que no prosperó, al respecto, <b>Rizvan Magomedov</b>, su manager, comentó: <b>&quot;Zabit simplemente no tiene ganas de volver, aunque no hay nada escrito. A veces quieres algo y otras no, ahora no tiene ganas. Tuvo problemas de salud cuando luchaba activamente. Ahora estos problemas han desaparecido, se siente bien, paro ya no tiene motivación&quot;.</b></p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/awPKOHd0itU?si=lA_f3r8RVvpEvRq_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>¿Qué fue de la vida de Zabit Magomedsharipov?</h2>
                    <p>En parte otra de las razones por la que Zabit renunció, es porque no tiene ninguna necesidad económica de seguir peleando, dado que actualmente tiene una marca de ropa; una tienda de nutrición deportiva; colabora con la empresa <b>BUKA Boxing</b>, especializada en ropa y calzado; además de invertir en bienes raíces.</p>
                    <p>Actualmente tiene una vida tranquila, se embarcó en una carrera de medicina, entrena de vez en cuando para mantenerse en forma, se dedica a sus negocios, y vuelve a pelear especialmente para ayudar a su hermano <b>Khasan Magomedsharipov</b>, quien también es un peleador de MMA y de quien es uno de sus entrenadores principales, actualmente pelea en Bellator y tiene un récord de 10-0.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}