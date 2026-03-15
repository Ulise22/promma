import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/emmet_vallejos.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Kevin Vallejos vs Josh Emmet!',
    description: 'Noche de UFC en Las Vegas con el argentino Kevin Vallejos enfrentando al veterano estadounidense Josh Emmett. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femmet_vallejos.14fae18c.webp&w=828&q=65',
        title: 'UFC Fight Night: ¡Kevin Vallejos vs Josh Emmet!',
        description: 'Noche de UFC en Las Vegas con el argentino Kevin Vallejos enfrentando al veterano estadounidense Josh Emmett. ',
        url: 'https://fullmma.org/eventos/fight-night-moreno-kavanagh'
    }
}

export default function EmmetVallejos () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Kevin Vallejos vs Josh Emmett!' subtitle='¡Gillian Robertson Derrota a Amanda Lemos Por Decisión Unánime! ¡El español Hecher Sosa Debuta con Victoria!' image={hero} date='2026-03-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Histórica noche de UFC para los fans de Argentina que hoy tendremos a nuestro representante de peso pluma <Link href='/peleadores/kevin-vallejos'>Kevin Vallejos</Link>, encabezando el evento de la noche, siendo el segundo argentino en ser la pelea principal, luego de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, para ello deberá enfrentar al veterano estadounidense <b>Josh Emmett</b>, que está #11 en la división. </p>
                    <p>Por si fuera poco para el público hispano, tendremos el debut del español excampeón de WOW <Link href='/articulos/hecher-sosa-padre'>Hecher Sosa</Link>, enfrentando a <b>Luan Lacerda</b>. La cartelera la abrirá la venezolana <b>Piera Rodriguez</b>, enfrentando a <b>Sam Hughes</b>. Y estarán los mexicanos <b>Montse Rendon</b> en la cartelera preliminar, y <b>José Miguel Delgado</b> en la cartelera estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>La Venezolana Piera Rodriguez Derrota a Sam Hughes por Decisión Unánime</h2>
                    <h2>Hecher Sosa Debuta Derrotando a Luan Lacerda por Decisión Unánime</h2>
                    <h2>Bia Mesquita Somete a Montse Rendon en el Primer Asalto</h2>
                    <p>Espectacular victoria de la brasileña, que conectando un mataleón a su rival mexicana <b>Montse Rendon</b> es capaz de llevarse la victoria por sumisión en el primer asalto, manteniendo su invicto profesional. </p>
                    <h2>Eryk Anders Derrota a Brad Tavares por Decisión UNánime</h2>
                    <p>Tremenda victoria del estadounidense <b>Eryk Anders</b>, quien mantuvo contra la reja a su rival durante gran parte del combate, sumando puntos por el tiempo de control, aunque también estuvo cerca de noquear al final del primer asalto, cuando fue capaz de derribar a golpes a su rival. Finalmente, luego de ganar el primer y tercer asalto del combate, Eryk Anders se lleva la victoria por decisión unánime. </p>
                    <h2>Manoel Sousa Noquea a Bolaki Oki en el Tercer Asalto</h2>
                    <p>Brutal victoria por KO del brasileño <b>Manoel Sousa</b>, quien fue capaz de dar vuelta lo que parecía una pelea cuesta arriba en el primer asalto, recibiendo un knockdown por parte del belga <b>Bolaji Oki</b>, del que sería capaz de recuperarse, juntando confianza y dominando poco a poco el combate, hasta llegar al punto cúlmine en el tercer asalto, cuando su rival ya había sido muy lastimado, conectando una mano derecha mortal que terminaría por sentenciar la pelea. De esta forma el brasileño se lleva la victoria por KO en el tercer asalto, y seguramente un bono por desempeño cuando acabe la cartelera. </p>
                    <h2>Elijah Smith Somete a Suyoung You en el Segundo Asalto</h2>
                    <p>Impresionante sumisión del estadounidense <b>Elijah Smith</b>, quien luego de derribar a su rival coreano <b>Suyoung You</b> a golpes en el segundo asalto, tuvo la rapidez suficiente para tomar por la espalda a su contrincante, para buscar un mataleón que finalmente obligaría al coreano a tapear, obteniendo la victoria por sumisión en el segundo asalto del combate. </p>
                    <h2>Vitor Petrino Derrota a Steven Asplund por Decisión Unánime</h2>
                    <p>Gran victoria y gran pelea por parte del brasileño <b>Vitor Petrino</b>, quien fue capaz de dominar por completo a su rival, tanto en la lucha, que uso bastante al comienzo de la pelea, como en el striking, que comenzó a usar más a medida que pasaba la pelea, notando que era mejor que su rival estadounidense en este aspecto. De esta forma, Vitor Petrino se lleva la victoria por decisión unánime. </p>
                    <h2>Myktybek Orolbai Derrota a Chris Curtis por Decisión Unánime</h2>
                    <p>Buena victoria del luchador de Kirguistán <b>Myktybek Orolbai</b>, quien derribó y controló en el suelo durante todo el combate al estadounidense <b>Chris Curtis</b>, quien contaba con <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> en su esquina, pero que no encontró solución a la lucha de su rival, quien siempre era capaz de tomarle la espalda, y aunque no hubo una sumisión, el tiempo de control de Orolbai fue lo que finalmente le dió la victoria por decisión unánime.</p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Charles Johnson Derrota a Bruno Silva por Decisión Dividida</h2>
                    <p>En un combate cerrado, donde hubo bastantes golpes ilegales que entorpecían la pelea, quien terminó saliendo victorioso es el estadounidense <b>Charles Johnson</b>, quien al final del combate fue quien conectó más golpes totales y más golpes significantes, lo que lo pusó por delante a los ojos de 2/3 jueces, quienes le dieron la victoria por decisión dividida. </p>
                    <h2>Ion Cutelaba Somete a Oumar Sy en el Primer Asalto</h2>
                    <p>Muy buena victoria por parte del luchador de Moldavia, quien luego de tener en el suelo a su rival francés <b>Oumar Sy</b>, golpeándolo desde arriba, fue capaz de conectar una guillotina que lo obligaría a tapear, otorgándole la victoria por sumisión en el primer asalto de la pelea. </p>
                    <h2>Marwan Rahiki Derrota a Harry Hardwick por TKO en el Segundo Asalto</h2>
                    <p>Gran victoria del marroquí <b>Marwan Rahiki</b>, quien golpeó por todos lados al inglés <b>Harry Hardwick</b>, quien aguantó los golpes como un campeón, siendo imposible de noquear. Finalmente luego de haber recibido mucho daño, al finalizar el segundo asalto la esquina y los médicos de Harry notaron que al inglés se le rompió la mandibula, lo que impediría seguir peleando. Debido a esto, la pelea se dió por terminada y el ganador por TKO fue el marroquí <b>Marwan Rahiki</b>. </p>
                    <h2>Jose Miguel Delgado Derrota a Andre Fili por Decisión Dividida</h2>
                    <p>Excelente victoria para el mexicano <b>José Miguel Delgado</b>, quien especialmente durante los últimos 2 asaltos fue bastante superior a su rival, mostrándose más agresivo, conectando golpes potentísimos que hicieron mucho daño al estadounidense <b>Andre Fili</b>, y finalmente garantizándose la victoria luego de que 2/3 jueces lo vieran como ganador por 29-28. De esta forma el mexicano <b>José Miguel Delgado</b> se lleva la victoria por decisión dividida.</p>
                    <h2>Gillian Robertson Derrota a Amanda Lemos Por Decisión Unánime</h2>
                    <p>Victoria canadiense en la pelea coestelar de la noche, luego de que <b>Gillian Robertson</b> fuera capaz de dar vuelta la pelea después de ese mal primer asalto, siendo capaz de conectar más golpes y logrando 3 derribos, manteniendo el control en el suelo, ganándose poco a poco el combate, para que finalmente luego de los 3 asaltos los jueces la dieran como ganadora 29-28 por decisión unánime. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}