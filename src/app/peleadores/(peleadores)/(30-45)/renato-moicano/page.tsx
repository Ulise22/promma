import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/40-60/renato-moicano/renato_moicano.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Renato Moicano',
    description: 'Renato Moicano es luchador brasileño de MMA, que compite en la división de peso ligero de la UFC, desde que hiciera su debut el día 20 de diciembre de 2014, enfrentando al finlandés Tom Niinimaki, a quien derrotaría por sumisión en el segundo asalto de la pelea.',
    openGraph: {
        title: 'Renato Moicano',
        description: 'Renato Moicano es luchador brasileño de MMA, que compite en la división de peso ligero de la UFC, desde que hiciera su debut el día 20 de diciembre de 2014, enfrentando al finlandés Tom Niinimaki, a quien derrotaría por sumisión en el segundo asalto de la pelea.',
        url: 'https://fullmma.org/peleadores/renato-moicano'
    }
}

export default function Moicano () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={20} l={5} d={1} categoria='Peso Ligero' nombre='Renato Moicano' apodo={null} />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Renato Moicano MMA</h2>
                    <p className={styles.peleador__article__text}>Renato Moicano es luchador brasileño de MMA, que compite en la división de peso ligero de la UFC, desde que hiciera su debut el día 20 de diciembre de 2014, enfrentando al finlandés <b>Tom Niinimaki</b>, a quien derrotaría por sumisión en el segundo asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Es un peleador que de a poco, obteniendo victorias cada vez más meritorias e impresionantes, y con un carisma único, propio de los brasileños. En sus entrevistas postpelea ha aprovechado para hablar de sus postularas políticas, siendo un defensor del Bitcoin como una forma de protegerse de la inestabilidad financiera, e incentivando a sus seguidores a leer al economista austríaco libertario Ludwing Von Mises.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/bI4f8murhgk?si=iux5yJgqcwdyDVvQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Renato Moicano Récord</h2>
                    <p className={styles.peleador__article__text}>Renato Moicano posee un récord profesional de mma de 20-5-1. Siendo 2 de sus victorias por la vía del nocaut, con 10 de sus victorias siendo por la vía de la sumisión y 8 por decisión. Mientras que de sus 5 derrotas, 3 fueron por la vía del nocaut, sólo 1 por la vía de la sumisión y sólo 1 por la vía de la decisión. Además, uno de sus combates, ante el brasileño <b>Felipe Froes</b>, que acabó en empate por decisión mayoritaria. </p>
                    <h2 className={styles.peleador__article__title}>Renato Moicano Historia</h2>
                    <p className={styles.peleador__article__text}>Renato Alvez Carneiro nació el día 21 de mayo de 1989 en Brasilia, Brasil. Comenzó a entrenar artes marciales desde muy pequeño, iniciando en clases de judo a los 8 años. Iniciando la universidad como un adulto joven con la idea de convertirse en un abogado, pero finalmente abandonó sus estudios con el objetivo en convertirse en un peleador de artes marciales mixtas. </p>
                    <p className={styles.peleador__article__text}>De esta forma hizo su debut profesional en las MMA el día 20 de mayo de 2010 ante su compatriota <b>Alexandre Almeida</b> en la promotora <b>Jungle Fight</b>, obteniendo una victoria por la vía de la sumisión en el tercer asalto. </p>
                    <p className={styles.peleador__article__text}>Ese mismo año tendría otros 2 combates, siendo el primero el 31 de julio ante <b>João Paulo Rodrigues</b>, a quien sería capaz de derrotar por decisión unánime; y el segundo, ante <b>Eduardo Felipe</b>, el 18 de diciembre, consiguiendo una victoria por sumisión en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>De esta manera, en sus primeros combates profesionales hilaría una racha de 5 victorias consectuvias, siendo la siguiente la que obtuvo el 19 de febrero de 2011 ante <b>João Luiz Nogueira</b> y el que obtuvo ante <b>Iliarde Santos</b> el 25 de junio de ese mismo año. Ambas victorias siendo por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En la única pelea que tendría en el año 2012, el 23 de noviembre, terminaría empatando por decisión mayoritaria ante <b>Felipe Froes</b>. Sin embargo, al año siguiente, volvería a la senda de la victorias con 2 triunfos ante <b>Mauro Chaulet</b>, a quien sometería en el segundo asalto, y ante <b>Nilson Pereira</b>, a quien le ganaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Toda esta racha de 7 victorias y sólo 1 empate, sería la que luego lo habilataría para pelear por el cinturón interino de la promotora <b>Junge Fight</b>. Haciendo esto mismo el día 19 de julio de 2014 ante <b>Ismael Bonfim</b>, logrando la victoria por la vía de la sumisión en el primer asalto, y convirtiéndose de esta manera en el Campeón Interino de Peso Pluma de Jungle Fight.</p>
                    <h2 className={styles.peleador__article__title}>Renato Moicano UFC</h2>
                    <p className={styles.peleador__article__text}>Ya habiendo campeonado en la única compañía en la peleó por fuera de la UFC, Renato Moicano sería anunciado como nuevo peleador de la compañía de artes marciales mixtas más grande del mundo el 12 de diciembre de ese mismo 2014, debiendo hacer su debut tan sólo 8 días después, aceptando la pelea en corto aviso ante el luchador de Finlandia <b>Tom Niinimäki</b>, el día 20 de diciembre de 2014 en el <b>UFC Fight Night: Machida vs. Dollaway</b>, haciendo su debut de forma exitosa al conseguir una victoria por sumisión en el segundo asalto del combate. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dsoyyVmBeKw?si=omOVKJ30JfxDlIkW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>A Moicano se le programó una segunda pelea para 2015, pero lamentablemente no pudo estar presente debido a una lesión. Por esa misma razón es que estaría inactivo durante todo el año, pudiendo volver a pelear recién el 14 de mayo de 2016, enfrentando al ruso <b>Zubaira Tukhogov</b>, contra quien partía como el menos favorito para ganar, pero sin embargo terminaría por conseguir una victoria por decisión dividida. Esta sería la única pelea que tendría en el año, debido a que sufriría otra lesión previa a un combate que había programado para septiembre de 2016. </p>
                    <p className={styles.peleador__article__text}>Volvería a subirse al octágono el día 15 de abril de 2017, para enfrentar al estadounidense <b>Jeremy Stephens</b>, contra quien conseguiría otra victoria por decisión dividida. El 29 de julio de ese mismo año, volvería a pelear para enfrentar al histórico peleador <b>Brian Ortega</b>, contra quien lamentablemente sufriría la primer derrota de su carrera, al ser sometido en el tercer asalto de la pelea. Pese a la derrota, en este combate el brasileño conseguiría el primer bono de su carrera a La Pelea de la Noche.</p>
                    <p className={styles.peleador__article__text}>Pese a aquella derrota, lograría ganar las 2 peleas que tendría en el año 2018, siendo la primera la que lo tuvo enfrentado a <b>Calvin Kattar</b> en el UFC 223, consiguiendo una victoria por decisión unánime. El 4 de agosto de ese mismo año, en el UFC 227, sería capaz de vencer a <b>Cub Swanson</b> por la vía de la sumisión en el primer asalto del combate, consiguiendo el segundo bono de su carrera por este desempeño, a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>El 2019 sería un año complicado, dado que enfrentaría a rivales complicadísimos, empezando con la leyenda y excampeón brasileño de la división de peso pluma, <Link href='/leyendas/jose-aldo'>José Aldo</Link>, en un evento organizado en Brasil, que terminaría con nuestro protagonista cayendo derrotado por nocaut en el segundo asalto de la pelea. Para peor, en la segunda pelea del año, que lo tendría enfrentando al <b>Korean Zombie (Chang Sung Jung)</b>, en el primer evento encabezado por el brasileño. Sin embargo, volvería a caer derrotado en dicho enfrentamiento, luego de ser noqueado en el primer minuto de la pelea. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/zVDFYf3e6xE?si=bGK-Pcbyra_5ePqs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de estas 2 derrotas consecutivas, Renato tomaría la decisión de subir de división para pelear en Peso Ligero, enfrentando en su debut en la división al luchador de Bosnia, <b>Damir Hadžović</b>, el día 14 de marzo de 2020, logrando una meritoria victoria por la vía de la decisión en el primer asalto de la pelea. Volvería a subirse al octágono el 12 de diciembre de ese mismo año, para enfrentar al peleador de Kazajistán <b>Rafael Fiziev</b>, donde lamentablemente caería derrotado por la vía del KO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>El 26 de junio de 2021 volvería a pelear para enfrentarse al peleador inglés <b>Jai Herbert</b>, consiguiendo una victoria por sumisión en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>En el 2022 tendría un total de 3 combates, siendo el primero el que tuvo el día 12 de febrero en el UFC 271 ante el estadounidense <b>Alexander Hernández</b>, consiguiendo una victoria por sumisión en el segundo asalto de la pelea. El 5 de marzo tendría una pelea en peso pactado (160lbs) ante el brasileño <b>Rafael dos Anjos</b>, en el evento coestelar del UFC 272, donde caería derrotado por decisión unánime. La última pelea del año la tendría ante el luchador de Nueva Zelanda <b>Brad Riddell</b>, a quien enfrentaría en el UFC 281, consiguiendo ganar por sumisión en el primer asalto. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/TwEsq4qGP5g?si=HXeQbdvD5DiODAXV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Pese a que en el 2023 no pelearía, teniendo que cancelar su pelea programada ante <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> debido a una lesión, volvería a pelear en el 2024 más fuerte que nunca, teniendo un total de 3 combates a lo largo del año. El primero de estos sería ante Drew Dober, contra quien conseguiría una victoria por decisión unánime. La segunda pelea la tendría el día 13 de abril en el histórico <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, ante el estadounidense <b>Jalin Turner</b>, donde tendría uno de los mejores comebacks vistos en la UFC, cuando casi cae noqueado en el primer asalto, sobreviviendo debido a que fue subestimado por su rival, y volviendo en el segundo asalto para ganar vía TKO, en lo que sin dudas fue una de las actuaciones destacadas de la noche. </p>
                    <p className={styles.peleador__article__text}>La última pelea del año la tendría en París, Francia, protagonizando el evento estelar junto con el peleador francés <b>Benoit Saint Denis</b>, en el <Link href='/covertura-ufc/fight-night-moicano-saintdenis'>UFC Fight Night: Moicano vs. Saint Denis</Link>. En esta pelea se vería una de las actuaciones más dominantes por parte de nuestro protagonista, teniendo un primer asalto que claramente se puede puntear como un 10-8, al conseguir rápidamente un derribo que aprovecharía para castigar con golpes en el suelo a su rival, dejando a este muy lastimado. El francés sólo podría pelear un asalto más, hasta que finalmente la pelea tuvo que ser intervenida por los médicos, quienes sentenciaron que Saint Denis no estab apto para seguir compitiendo, debido a los cortes y lo lastimado que quedó tras el primer asalto. De esta forma, Renato Moicano ganaría la pelea vía TKO en el segundo asalto, y acumularía una racha de 4 victorias consecutivas en la división. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}