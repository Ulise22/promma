import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/rousimar_palhares-hero.jpg'

export const metadata: Metadata = {
    title: 'El Peleador Más Sucio de la UFC',
    description: 'La historia de Rousimar Palhares y de cómo por su comportamiento completamente antideportivo, terminó siendo expulsado de la UFC.',
    openGraph: {
        title: 'El Peleador Más Sucio de la UFC',
        description: 'La historia de Rousimar Palhares y de cómo por su comportamiento completamente antideportivo, terminó siendo expulsado de la UFC.',
        url: 'https://fullmma.org/articulos/peleador-mas-sucio-ufc'
    }
}

export default function PeleadorMasSucioUFC () {
    return(
        <main>
            <ArticleHero title='El Peleador Más Sucio de la Historia Expulsado de la UFC' subtitle='Rousimar Palhares, el luchador más sucio de la historia de las MMA que por su comportamiento dentro del octagono fue expulsado de la UFC.' image={hero} date='2024-06-18' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En un deporte de combate, donde está permitido practicamente todo, desde puñetazos, patadas, rodillazos, codazos, estrangulaciones, luxaciones, llaves de todo tipo que dejarían asustados a cualquiera, imagina lo sucio que tenés que ser para ser vetado de un deporte así. Es el caso del luchador brasileño <b>Rousimar Palhares</b>, que luego de ser sancionado 3 veces en la <Link href='/articulos/ufc'>UFC</Link>, terminó por ser expulsado de la compañía por su comportamiento fuera y especialmente dentro del octagono.</p>
                    <h2>Rousimar Palhares</h2>
                    <p>Rousimar Christian Palhares nació el 20 de febrero de 1980 en la ciudad de Dores do Indaiá, en Brasil. Creció en la pobreza extrema en su país, teniendo que trabajar desde los 7 años de edad en el campo para ayudar a su familia, habiendo momentos donde la comida no alcanzaba para todos. Su situación económica llegó a tal extremo, que durante un tiempo tuvo que dejar su choza para vivir debajo de un puente en uno de los barrios pobres de su ciudad.</p>
                    <p>Palhares comenzó a entrenar Jiu-Jitsu en el que destacó rápidamente debido al talento innato que tenía para el deporte, llegando a recibir el cinturón negro de la mano del excampeón de UFC <b>Murilo Bustamante</b> y de <b>Bebeo Duarte</b>. </p>
                    <p>Su debut profesional en las artes marciales mixtas lo haría el 10 de mayo de 2004 contra su compatriota <b>Leandro Silva</b>, contra quien caería derrotado por decisión unánime. Esta derrota haría que se tomara unos 2 años antes de volver a competir, consagrando su vuelta con una victoria por decisión dividida ante <b>Bruno Bastos</b>. </p>
                    <p>Rousimar Palhares conseguiría acumular 5 victorias consecutivas por sumisión, ganando incluso el GP Fury FC de Peso Medio. Este despunte en su carrera llamaría la atención de <b>Dana White</b> que inmediatamente lo contrataría para la UFC, cuando palhares ya llevaba acumulado un récord de 7-2.</p>
                    <h2>Expulsado de UFC</h2>
                    <p>En la UFC arrancaría de excelente manera derrotando con una sumisión en el primer asalto a <b>Ivan Salaverry</b>, ganando el bono a la sumisión de la noche.</p>
                    <p>Sin embargo el primer combate en el que Palhares da una demostración de su extraño comportamiento en la jaula, fue luego de 4 peleas en la compañía, cuando había ganado 3 combates y perdido sólo uno, enfrentando al polaco <b>Tomasz Drwal</b>, a quien logra vencer por sumisión en el primer asalto, sin embargo, a pesar de que el polaco había tapeado, Palhares tarda una peligrosa cantidad de tiempo en soltar la llave que le estaba haciendo.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/kO0BVXxhbbg?si=V-71y-3xoRVX7r6l" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Es hasta terrorífico ver como incluso una vez que lo suelta, Tomasz Drwal continúa gritando de dolor en el piso. Esta acción le valió una sanción de 90 días al brasileño.</p>
                    <p>La segunda acción antideportiva que tendría Palhares, no sería exactamente por algo que hizo dentro del octagono, sino porque luego de su pelea contra el cubano <b>Héctor Lombard</b> en diciembre de 2012, donde recibiría su primer derrota por KO, Rousimar daría positivo por elevados niveles de testosterona. Este comportamiento ahora le significaría una sanción de 9 meses, en los que no pudo pelear.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/wQsHz2yrktc?si=mx-drOnD5-9ahbwz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Quizás, debido a que ya no podía seguir dopándose, Rousimar decidió bajar de categoría de peso, y comenzar a competir en peso wélter, donde en octubre de 2013 volvería a pelear, perpetuando acá su última bochornosa acción que lo dejaría fuera de la UFC.</p>
                    <p>Resulta que enfrentando a <b>Mike Pierce</b>, realizando la misma llave por la que había sido sancionado la primera vez, el brasileño vuelve a ignorar a su contrincante que ya había tapeado para dar por finalizada la pelea. Mike Pierce había llegado a tapear hasta 8 veces hasta que finalmente Palhares lo soltó.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/lyMB5DhJ7Fw?si=xhKOyzMuVJsXXjy1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Esta era la tercera acción antideportiva de la que formaba parte el brasileño, teniendo una forma de pelear que de seguir podría haber acabado con la carrera de varios de compañeros de profesión. Debido a esto, <b>Dana White</b> anunciaría en televisión que lo echaba de la organización.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/tuUgl2gldCE?si=hag_ci57BA5tj39K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Rousimar Palhares es vetado (otra vez)</h2>
                    <p>Luego de la expulsión que sufrió de la UFC, Palhares entraría a la compañía <b>WSOF</b>, donde ya comenzaría con una advertencia por parte del dueño, que le pidió que se comportara de forma deportiva en los combates.</p>
                    <p>En esta compañía su primer pelea sería el 29 de marzo de 2014 por el título de peso Wélter, donde enfrentando a <b>Steve Carl</b> sería capaz de coronarse como campeón al vencerlo con una sumisión en el primer asalto. </p>
                    <p>Luego lo defendería con éxito ante el ex peleador de UFC <b>Jon Fitch</b> a quien sometería en el primer asalto. Sin embargo, sucedería otra vez, en su tercer pelea en la compañía, defendiendo su título, se enfrentaría al también ex luchador de UFC <b>Jake Shields</b>, a quien en el tercer asalto lograría someter con un kimura, pero de nuevo, ignoró el tapeo de su rival y mantuvo la técnica una peligrosa cantidad de tiempo.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/lldoh3f8kFs?si=7PY4RiGoVCaE7iSn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Por esta acción, a Palhares se lo despojaría de su título y recibiría una sanción por tiempo indefinido. Lo que significaba que otra vez, lo habían vetado de una compañía de artes marciales mixtas.</p>
                    <h2>La Caída de Palhares</h2>
                    <p>Desde entonces la carrera de Palhares sólo iría en caída libre. Perdiendo su siguiente combate por el título de otra promotora contra <b>Emil Weber Meek</b>, quien lo dejó KO en 45 segundos.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/viV__KtjJrs?si=dxG2SGR8yNV4lYPC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Para peor, unos meses después tendría otro combate que perdería por KO contra el polaco <b>Michał Materla</b>. Desde su salida de WSOF, sólo ganaría una pelea, conseguiría empatar 1, y perdería 6 combates, siendo todas sus derrotas desde entonces por nocaut.</p>
                    <p>Pese a su muy sucio estilo de pelea, que podría haber acabado con la carrera de varios de sus compañeros de MMA, y que de milagro no ocasionó ninguna lesión de gravedad, lo cierto es que la historia Palhares también ser usada como ejemplo y como inspiración, dado que supo sobreponerse a sus durísimos origenes, siendo capaz de salir de la extrema pobreza en sudamérica para competir en un deporte tan complicado como lo son las MMA.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}