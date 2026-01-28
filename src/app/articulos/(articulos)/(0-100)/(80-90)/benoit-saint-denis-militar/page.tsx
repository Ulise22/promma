import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/saint_denis-militar.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'El Pasado Militar de Benoit Saint Denis',
    description: 'Benoit Saint Denis pasó de ser un operador de élite en las fuerzas especiales francesas, a ser uno de los peleadores más entretenidos de ver en la UFC. Descubre como y por qué.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsaint_denis-militar.dd1bfb2c.webp&w=828&q=65',
        title: 'El Pasado Militar de Benoit Saint Denis',
        description: 'Benoit Saint Denis pasó de ser un operador de élite en las fuerzas especiales francesas, a ser uno de los peleadores más entretenidos de ver en la UFC. Descubre como y por qué.',
        url: 'https://fullmma.org/articulos/benoit-saint-denis-militar'
    }
}

export default function BenoitSaintDenisMilitar () {
    return(
        <main>
            <ArticleHero title='El Pasado Militar de Benoit Saint Denis' subtitle='Cómo Benoit Saint Denis pasó de ser un militar de las fuerzas especiales francesas a uno de los peleadores más emocionantes de la UFC. ' image={hero} date='2026-01-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Benoit Saint Denis sirvió para el ejército francés durante 5 años (de 2014 a 2019), formando parte de una las unidades más selectivas y prestigiosas del COS francés, enfrentando grupos terroristas y participando de misiones de combate en la guerra del Sahel en la África occidental. Todo esto antes de decidir que quería convertirse en un luchador de MMA, para finalmente terminar peleando en la élite de la UFC. </p>
                    <h2>Benoit Saint Denis y su Familia Militar</h2>
                    <p>La historia de Benoit Saint Denis es sin dudas curiosa. Nació en el seno de una familia con una fuerte tradición militar, siendo su padre un oficial de la <b>Legión Extranjera</b> francesa, y siendo su abuelo una persona que también tuvo vínculos militares, por lo que el joven Benoit creció con los valores de la disciplina, el patriotismo y el combate muy arraigados. </p>
                    <p>Desde los 8 años practicó judo hasta llegar a ser cinturón negro, practicó deportes como el rugby o el fútbol, pero desde niño siempre soñó con ser parte de la élite de guerreros de Francia, por lo que una vez terminó el bachillerato a los 18 años, se enlistó al ejército, renunciando a ir a la universidad o buscar otros caminos más tradicionales. </p>
                    <h2>Benoit Saint Denis el Militar</h2>
                    <p>Se alistó el 4 de marzo de 2014 en el <b>1er Régiment de Parachutistes d&apos;Infanterie de Marine (1er RPIMa)</b>, que es una de las unidades más selectivas y prestigiosas del COS francés, equivalente a las fuerzas especiales del ejército de tierra. Allí se formó desarrollando habilidades de todo tipo hasta ser un operador calificado. </p>
                    <h3>Saint Denis y su Carrera Militar</h3>
                    <p>A partir de 2016, cuando tenía apenas unos 20 años, comenzó a participar de varias misiones de combate bastante serias, teniendo un rol en la Guerra del Sahel, principalmente en Malí, donde enfrentaría a grupos terroristas, a facciones del Estado Islámico en el Gran Sahara y a otros grupos yihadistas. </p>
                    <YouTubeEmbed videoid='IULHW3igi5g' />
                    <p>Haciendo operaciones antiterroristas, contraterrorismo, tomando acciones directas contra insurgentes, y participando de misiones específicas como por ejemplo la recuperación de un aeropuerto en Timbuktu. </p>
                    <p>Pese a su juventud y a lo cortó de su carrera militar, lo cierto es que este periodo de su vida fue bastante intenso, manteniéndose desplegado alrededor de 3 años en África, en entornos de alto riesgo donde ponía en juego su vida.</p>
                    <p>Debido a su labor, fue condecorado con la <b>Cruz del Combatiente</b> en 2017 y con la <b>Médaille de la Reconnaissance de la Nation</b>. </p>
                    <h2>Benoit Saint Denis Crímenes de Guerra</h2>
                    <p>Debido a la cantidad de búsquedas que recibe esto en Google, creo que es necesario aclarar que <b>Benoit Saint Denis no tiene ningún vínculo, no ha sido acusado, y no ha participado de ningún crimen de guerra</b>. Por el contrario fue condecorado por su labor, y solamente se oyen cosas buenas del trabajo que desempeñó el francés. </p>
                    <h2>Salida de Benoit Saint Denis del Ejército</h2>
                    <p>Ya durante sus últimos años como militar Saint Denis había comenzado a entrenar MMA, dado que creyó que lo ayudaría a ser un mejor soldado, al mejorar su condición física y al adoptar técninas efectivas de combate cuerpo a cuerpo. </p>
                    <p>Fue a los 23 años cuando decidiría abandonar completamente el ejército para perseguir su nuevo sueño de ser peleador de MMA, todo esto a pesar de que ya tenía un futuro asegurado en las fuerzas especiales, corriendo un gran riesgo que hoy en día podemos decir que dió sus frutos, pero que en su momento no terminaba de convencer a sus compañeros y a su capitán. </p>
                    <p>Hoy en día, muchos de quienes fueron sus compañeros, e incluso el ejército francés en general, ven con buenos ojos como resultó todo para él, felices por el éxito de su carrera, que con 30 años lo tiene compitiendo en la UFC, formando parte del top 10 de la división de peso ligero, quizás la más difícil de toda la compañía, y con una carrera que por ahora sólo va en ascenso. </p>
                    <h2>La Huella que Ha Dejado El Ejército en su Carrera de MMA</h2>
                    <p>Tener un trabajo tan duro y desde tan joven, le han ayudado a adoptar una mentalidad de nunca rendirse, desarrollando una disciplina extrema, un manejor del estrés sobrehumano, y una agresividad que vemos en cada pelea. </p>
                    <p>De hecho, un poco viene por acá su apodo &quote;God Of War&quote; (Dios de la Guerra), que reflejan la herencia que dejó su profesión y su estilo de pelea ultra agresivo, propio de un operador de combate que va al frente sin miedo. </p>
                    <p>Benoit Saint Denis no fue un soldado más, formó parte de una de las fuerzas especiales más selectivas como un operador de élite, que contó con experiencia en combate real, participando de una de las guerras más importantes de Francia en los últimos años, que con el paso del tiempo decidió dedicarse a un trabajo mucho menos violento y estresante, como lo es ser un peleador profesional. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}