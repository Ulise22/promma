import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/boxeador_vs_mma-hero.jpg'

export const metadata: Metadata = {
    title: 'Todas Las Peleas de Luchadores de MMA en Boxeo',
    description: 'El listado con 5 de los combates donde un luchador de UFC intentó boxear con un boxeador profesional',
    openGraph: {
        title: 'Todas Las Peleas de Luchadores de MMA en Boxeo',
        description: 'El listado con 5 de los combates donde un luchador de UFC intentó boxear con un boxeador profesional',
        images: '@/assets/articulos/heros/30-40/boxeador_vs_mma-hero.jpg',
        url: 'https://fullmma.org/articulos/boxeador-vs-mma'
    }
}

export default function BoxeoVsMMA () {
    return(
        <main>
            <ArticleHero title='Boxeador vs MMA: Las Peleas Entre Boxeo y MMA' subtitle='Los enfrentamientos entre luchadores de MMA y boxeadores que se han dado en boxeo.' image={hero} date='2024-06-20' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Los Peleadores de MMA en Boxeo</h2>
                    <p>Por alguna razón suele haber una discusión y debate entre qué es mejor entre las MMA y el boxeo. Lo cierto es que si la pelea se hace en el terreno del boxeador, este tiene todas las de ganar, por eso he decidido hacer un listado de las veces en que los peleadoresd de MMA (y de UFC) aceptaron subirse al ring a pelear en boxeo. Aunque suele dar la sensación de que en estas peleas en luchador de MMA no tiene nada que hacer y sólo se hacen estas peleas por dinero, lo cierto es que ha habido algunas sorpresas.</p>
                    <h2>Conor McGregor vs Floy Myweather</h2>
                    <p>La más mediática y sin dudas la que la mayoría de personas recuerda es la que tuvo lugar entre el entonces doble campeón de la <Link href='/articulos/ufc'>UFC</Link>, <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>, que había conseguido dicho hito luego de vencer al campeón <Link href='/leyendas/jose-aldo'>José Aldo</Link> en la división de peso pluma, y a <b>Eddie Alvarez</b> en la división de peso ligero, básicamente estaba en el pico de su carrera deportiva. </p>
                    <p>Por su parte, Mayweather sostenía un récord en boxeo de 49-0, llevando casi 2 años sin pelear. Sin embargo, el 26 de agosto de 2017, cuando se realizó el combate, la pelea terminó en una victoria por TKO a favor del boxeador. Con un Conor que pese a perder hizo un digno papel, teniendo en cuenta que era su debut profesional en este deporte, y que estaba peleando ante uno de los mejores boxeadores de la historia.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/WfiN1UdMgp8?si=U2CwHjrewZEt-elR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Evander Holyfield vs Vitor Belfort</h2>
                    <p>La única victoria por parte de un luchador de MMA que hay en esta lista, es la que consiguió <b>Vitor Belfort</b> sobre la leyenda <b>Evander Holyfield</b>, que entre otros, cuenta en su récord con 2 victorias sobre <b>Mike Tyson</b>, siendo una por nocaut y la otra por aquella famosa descalificación en la que Tyson le mordió la oreja.</p>
                    <p>Por su parte, Vitor Belfort es un luchador histórico de la UFC, que supo ser campeón de la compañía al derrotar a <Link href='/leyendas/randy-couture'>Randy Couture</Link> en peso semipesado, además de haber enfrentado a otras bestias como <b>Alistair Overeem</b>, <Link href='/peleadores/jon-jones'>Jon Jones</Link>, <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, y <Link href='/articulos/michael-bisping-ojo'>Michael Bisping</Link>, a quien venció por TKO.</p>
                    <p>Sin embargo, para esta pelea lo que más peso por sobre todo es la edad, dado que se organizó como una pelea de exhibición el 11 de septiembre de 2021, cuando <b>Hollyfield</b> tenía 58 años, mientras que su rival tenía 44 años, diferencia de edad que con estas edades especialmente, tiene mucho peso. Por lo tanto, que Vitor Belfort fuera capaz de ganar por nocaut en el primer asalto, tampoco fue una gran sorpresa.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/rgBd8JThjmQ?si=Gb1HxHx9vwlbA5Qz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Anderson Silva vs Jake Paul</h2>
                    <p>Si en la pelea anterior decíamos que la edad había jugado un factor importante, en esta también se puede decir lo mismo. Dado que aunque <b>Jake Paul</b> no es un boxeador de élite como los demás en esta lista, tiene experiencia en este deporte y para cuando se organizó su pelea contra <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, tenía sólo 25 años, siendo que se enfrentaba a un luchador de casi el doble de su edad, con 47 años.</p>
                    <p>La pelea fue pactada a 8 asaltos y terminó con la victoria del youtuber estadounidense por decisión unánime.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/0DbiljqKFNU?si=7LydMi1O9I8__K4t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Francis Ngannou vs Tyson Fury</h2>
                    <p>Esta debe ser la pelea que más soprendió en cuanto al desempeñó mostrado por ambos peleadores, para bien y para mal. Por su lado, <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link> había finalizado su contrato con la UFC, en donde había sido campeón, y con la libertad de pelear con quien quisiera, optó por cumplir su sueño de ser boxeador, siendo entrenado por nada menos que Mike Tyson, para enfrentar a un campeón de peso pesado como lo era <b>Tyson Fury</b>, quien hasta ese momento estaba invito y sostenía un récord de 33-0-1.</p>
                    <p>La pelea se organizó en Arabia Saudita el 28 de octubre de 2023, y aunque todos pensamos que iba a ser una pelea casi que de exhibición donde Fury iba a ganar muy cómodo, estuvimos muy lejos de tener razón. Ngannou se tomó muy en serio su pelea, y logró propinarle un knockdown al campeón de pesos pesados, dominando gran parte del combate. Finalmente la pelea quedó en la decisión de los jueces, que discutiblemente dieron la victoria a Tyson Fury.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/Fl0Oa8LyYAw?si=ZSwBK4s5u2uF_xDh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Francis Ngannou vs Anthony Joshua</h2>
                    <p>Si con la actuación de Ngannou ante Fury, creíamos que quizás podía hacerse de una carrera exitosa también en boxeo, la pelea que este tuvo contra <b>Anthony Joshua</b> fue como un baño de agua fría. </p>
                    <p>Organizada este año el 8 de marzo de 2024, también en Arabia Saudita, el peleador de MMA no tuvo nada que hacer ante un Joshua que fue muy superior, logrando dejar KO en el segundo asalto al excampeón de UFC.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/6ugN3fZQjyU?si=RLEPpQqKmyra9oGq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}