import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/cm_punk.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'El peor Luchador de la historia de UFC',
    description: 'El caso de los luchadores de WWE que se mueven de deporte para competir a las MMA es algo que hemos visto en varias ocasiones, con ejemplos como Dave Bautista, o Brock Lesnar siendo el caso más enigmático, sabiendo ser campeón de la división de peso pesado de la UFC. Lo que sí es algo más raro, es ver a un peleador sin ninguna experiencia en el mundo de las MMA, firmando un contrato con la UFC como primera experencia en el deporte, como es el caso de CM Punk, quien supo ser uno de los campeones de WWE con el reinado más largo.',
    openGraph: {
        title: 'El peor Luchador de la historia de UFC',
        description: 'El caso de los luchadores de WWE que se mueven de deporte para competir a las MMA es algo que hemos visto en varias ocasiones, con ejemplos como Dave Bautista, o Brock Lesnar siendo el caso más enigmático, sabiendo ser campeón de la división de peso pesado de la UFC. Lo que sí es algo más raro, es ver a un peleador sin ninguna experiencia en el mundo de las MMA, firmando un contrato con la UFC como primera experencia en el deporte, como es el caso de CM Punk, quien supo ser uno de los campeones de WWE con el reinado más largo.',
        url: 'https://fullmma.org/articulos/cm-punk-ufc'
    }
}

export default function ZabitMagomedsharipov () {
    return(
        <main>
            <ArticleHero title='La Historia de CM Punk, El peor Luchador de la historia de UFC' subtitle='El mítico caso de CM Punk, quien abandonó la WWE para ir a la UFC y fracasó rotundamente, peleando únicamente en 2 ocasiones y perdiendo ambas peleas.' image={hero} date='2024-08-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El caso de los luchadores de WWE que se mueven de deporte para competir a las MMA es algo que hemos visto en varias ocasiones, con ejemplos como <Link href='/articulos/dave-bautista-mma'>Dave Bautista</Link>, o <Link href='/leyendas/brock-lesnar'>Brock Lesnar</Link> siendo el caso más enigmático, sabiendo ser campeón de la división de peso pesado de la <Link href='/articulos/ufc'>UFC</Link>. Lo que sí es algo más raro, es ver a un peleador sin ninguna experiencia en el mundo de las MMA, firmando un contrato con la UFC como primera experencia en el deporte, como es el caso de <b>CM Punk</b>, quien supo ser uno de los campeones de WWE con el reinado más largo. Pero si lo de Brock Lesnar es el mayor caso de éxito de un luchador de WWE que transiciona a las MMA, el de CM Punk es el caso del mayor fracaso. Incluso el mismo <b>Joe Rogan</b>, comentarista de la UFC, en su podcast habló sobre el desempeño del luchador, enfatizando la falta de talento que tiene y tuvo en su paso por la UFC.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/yxleZpWSKQE?si=HtNBHa3U3lk-Bw-h" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p><b>Phillip Jack Brooks</b>, mejor conocido como <b>CM Punk</b>, nació el 26 de octubre de 1978 en Chicago, Illinois. Actualmente sigue peleando en la WWE, que lo considera como el tercer &quot;Campeón de WWE con el más largo reinado de la era moderna atrás de Brock Lesnar&quot;, por haber ostentado el título durante 434 días. Además fue 9 veces campeón mundial  en diferentes compañías. </p>
                    <p>Pese a todos estos logros en su carrera de lucha libre, lo cierto es que no es para nada lo mismo lo que pudo haber hecho durante este periodo a luchar en una pelea profesional de MMA, y menos en una compañía como la UFC, y CM Punk estaba por descubrir que esto es cierto. </p>
                    <p>A los 35 años, luego de una disputa con la WWE, elegiría retirarse de la lucha libre. Lo que sorprendió, es que al poco tiempo, el 6 de diciembre de 2014, en el UFC 181, se anunciaría que había firmado un contrato por varias peleas con la compañía, para pelear como artista marcial mixto. Brooks, comenzó a entrenar jiu-jitsu brasileño y MMA bajo la tutela de <b>Rener Gracie</b>. </p>
                    <p>La idea de Dana White, presidente de la UFC, era darle un rival con pocas peleas profesionales a Punk, por lo que la primer opción para enfrentarlo en su debut como profesional fue <b>Jason David Frank</b>, quien es bastante más conocido por su carrera como actor, siendo el Ranger verde en los <b>Power Rangers</b>, pero también era un luchador de MMA, teniendo en aquel momento un récord profesional de 1-0. Lamentablemente esta pelea jamás se dió, y es una pena porque podría haber sido el combate más bizarro en la historia de la UFC.</p>
                    <p>Finalmente tendría una pelea contra <b>Mickey Gall</b>, quien en ese momento tenía un récord de 2-0, y quien actualmente sigue compitiendo en la UFC, habiendo tenido su última pelea en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>. Pelearían el 10 de septiembre de 2016 en el UFC 203, y la pelea terminaría muy mal para Punk, siendo derribado rápidamente, recibiendo varios golpes en el suelo, y finalmente siendo sometido con un mataleón a los 2 minutos del combate.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/lCLx7WKbkQM?si=CcExF8OKCxO8NWOY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Pese a su pobre desempeño en su primer pelea profesional, CM Punk intentaría volver a pelear una vez más, esta vez tomándose su tiempo para entrenar y prepararse. Volviendo a pelear en junio de 2018 ante el estadounidense <b>Mike Jackson</b>, contra quien caería derrotado de manera bastante contundente, pero donde sin embargo, lograría terminar el combate sin ser finalizado. </p>
                    <p>Luego de aquella noche, el mismo Dana White ya había anunciado que no tenían pensado programar otra pelea para CM nunca más. Además se lo vió molesto por la actitud de su rival, <b>Mike Jackson</b>, quien a los ojos del jefe pareció no querer finalizar la pelea y no estar tomándosela en serio. Por lo que se puede decir que luego de este combate se acabó con la carrera de ambos luchadores.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/lucmpnj7yds?si=TviB9PTyZGJTZ8-b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La pelea finalmente quedaría sin resultado, debido a que su rival dió positivo por marihuana en un testeo. Pero ya estaba claro que CM Punk no daba el nivel para pelear como profesional en las MMA, por lo que la UFC anunciaría que el luchador estaba completamente desvinculado de la empresa en agosto de 2021. Cm Punk poco tiempo después volvería a dedicarse a la lucha libre en la WWE. </p>
                    <p>Para no ser tan duro con este luchador, pese a que se lo puede considerar de los peores luchadores que tuvo la compañía, especialmente entre los más mediáticos, quizás si hubiera intentado dedicarse a este deporte de más joven, y si hubiera tenido experiencia en algunas peleas amateur o de menor nivel que la UFC, podría haber dado un mejor desempeño del que se le vió dar en sus 2 peleas. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}