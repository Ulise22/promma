import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/30-40/ufc305-hero.jpg'

export const metadata: Metadata = {
    title: 'UFC 305',
    description: '',
    openGraph: {
        title: 'UFC 305',
        description: '',
        url: 'https://fullmma.org/noticias/ufc305'
    }
}

export default function UFC305 () {
    return(
        <main>
            <ArticleHero title='UFC 305: ¡Dricus Du Plessis vs Israel Adesanya Por el Título de Peso Medio!' subtitle='¡Carlos Prates deja KO a Li Jingliang en el segundo asalto! ¡Dan Hooker consigue una victoria ante Mateusz Gamrot!' image={hero} date='2024-08-18' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy tenemos un nuevo evento numerado de <Link href='/articulos/ufc'>UFC</Link> celebrado en el RAC Arena en Australia, donde tendremos como pelea estelar el ansiado regreso de <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, quien enfrentará al actual campeón de la división de peso medio de la UFC, el sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> en lo que será su primer defensa del título desde que lo ganara en el <Link href='/noticias/ufc297'>UFC 297</Link> al derrotar a <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>.</p>
                    <p>Además como pelea coestelar tendremos el enfrentamiento entre el #4 de la división de peso mosca <b>Kai Kara-France</b>, quien busca una victoria luego de perder sus últimos 2 combates, y entre el australinao <b>Steve Erceg</b> quien viene de perder una pelea por el título en el <Link href='/noticias/ufc301'>UFC 301</Link> al caer derrotado ante <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>.</p>
                    <h2>Carlos Prates Deja KO a Li Jingliang</h2>
                    <p>En la primer pelea de la cartelera estelar tuvimos un increíble KO por parte del brasileño <b>Prates</b> hacia el chino <b>Li</b> en el segundo asalto.</p>
                    <p>En lo que parecía haber arrancado como una pelea igualada, el brasileño hizo valer su ventaja en cuanto a la altura y en cuanto al poder, al conectar los mejores golpes al final del primer asalto. Ya en el segundo el luchador chino empezó a sufrir los golpes de su rival, llegando al punto en que uno de esos golpes con la mano izquierda lo dejó tirado en el suelo, otorgándole la victoria al brasileño por KO en el segundo asalto.</p>
                    <p>Sin dudas con esta increíble actuación, Carlos Prates se ganará un bono de $50000, quien además con esta victoria, estira su racha de 10 victorias consecutivas y un récord de 20-8.</p>
                    <h2>Jairzinho Rozenstruik Gana Por Decisión Dividida a Tai Tuivasa</h2>
                    <p>Jairzinho logra una merecida victoria por decisión ante el australiano <b>Tai Tuivasa</b>. En un combate que inició con un primer asalto sin mucha acción, donde ambos peleadores estaban especulando y parecían tener respeto del poder del otro, terminó con un Jairzinho cada vez más dominante y seguro de sí mismo, que logró conectar los mejores golpes de la pelea. </p>
                    <p>Quizás lo polémico del combate, fue que a pesar de que claramente Jaizinho había sido el ganador de al menos los 2 últimos asaltos de forma muy clara, uno de los jueces le concedió un 30-27 a Tai Tuivasa, viéndolo como ganador de los 3 asaltos.</p>
                    <h2>Dan Hooker Derrota a Mateusz Gamrot</h2>
                    <p>En la que definitivamente fue una de las peleas de la noche, el australiano <b>Dan Hooker</b> hizo valer su localía imponiéndose por sobre el polaco <b>Mateusz Gamrot</b> por decisión dividida. La pelea fue una completa guerra y estuvo bastante cerrada, pero el australino hizo méritos suficientes para que 2 de los jueces lo vieran como ganador, logrando su segunda victoria consecutiva y metiéndose en el top #10 de la división de peso ligero.</p>
                    <h2>Kai Kara-France vs Steve Erceg</h2>
                    <p>En proceso...</p>
                    <h2>Dricus Du Plessis vs Israel Adesanya</h2>
                    <p>En proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}