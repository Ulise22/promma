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
            <ArticleHero title='UFC 305: ¡Dricus Du Plessis vs Israel Adesanya Por el Título de Peso Medio!' subtitle='lorem ipsum' image={hero} date='2024-08-18' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy tenemos un nuevo evento numerado de <Link href='/articulos/ufc'>UFC</Link> celebrado en el RAC Arena en Australia, donde tendremos como pelea estelar el ansiado regreso de <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, quien enfrentará al actual campeón de la división de peso medio de la UFC, el sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> en lo que será su primer defensa del título desde que lo ganara en el <Link href='/noticias/ufc297'>UFC 297</Link> al derrotar a <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>.</p>
                    <p>Además como pelea coestelar tendremos el enfrentamiento entre el #4 de la división de peso mosca <b>Kai Kara-France</b>, quien busca una victoria luego de perder sus últimos 2 combates, y entre el australinao <b>Steve Erceg</b> quien viene de perder una pelea por el título en el <Link href='/noticias/ufc301'>UFC 301</Link> al caer derrotado ante <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>.</p>
                    <h2>Carlos Prates Deja KO a Li Jingliang</h2>
                    <p>En la primer pelea de la cartelera estelar tuvimos un increíble KO por parte del brasileño <b>Prates</b> hacia el chino <b>Li</b> en el segundo asalto.</p>
                    <p>En lo que parecía haber arrancado como una pelea igualada, el brasileño hizo valer su ventaja en cuanto a la altura y en cuanto al poder, al conectar los mejores golpes al final del primer asalto. Ya en el segundo el luchador chino empezó a sufrir los golpes de su rival, llegando al punto en que uno de esos golpes con la mano izquierda lo dejó tirado en el suelo, otorgándole la victoria al brasileño por KO en el segundo asalto.</p>
                    <p>Sin dudas con esta increíble actuación, Carlos Prates se ganará un bono de $50000, quien además con esta victoria, estira su racha de 10 victorias consecutivas y un récord de 20-8.</p>
                    <h2>Tai Tuivasa vs Jairzinho Rozenstruik</h2>
                    <p></p>
                    <h2>Mateusz Gamrot vs Dan Hooker</h2>
                    <p></p>
                    <h2>Kai Kara-France vs Steve Erceg</h2>
                    <p></p>
                    <h2>Dricus Du Plessis vs Israel Adesanya</h2>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}