import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/sambo.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Qué Es El Sambo',
    description: '',
    openGraph: {
        images: '',
        title: 'Qué Es El Sambo',
        description: '',
        url: 'https://fullmma.org/articulos/que-es-el-sambo'
    }
}

export default function QueEsElSambo () {
    return(
        <main>
            <ArticleHero title='¿Qué es el Sambo? El Arte Marcial Que Hizo Campeón a Khabib y a Islam Makhachev' subtitle='Historia y descripción del arte marcial rusa que usan Khabib, Makhachev y Fedor Emelianenko.' image={hero} date='2025-09-02' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El sambo es un arte marcial rusa desarrollada por la Unión Soviética en el siglo XX, que combina técnicas del judo, la lucha grecorromana, el jiu-jitsu y el boxeo, entre otras, enfocándose en los agarres, derribos y sumisiones. Es un deporte de combate que ha adquirido popularidad entre los fanáticos de las MMA, con figuras como <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> e <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> consiguiendo éxitos deportivos en la UFC aplicando técnicas del Sambo. </p>
                    <p>El término <b>Sambo</b> es un acrónimo proveniente de una frase rusa, que se traduce al español como &quot;autodefensa sin armas&quot;. </p>
                    <h2>Origen del Sambo</h2>
                    <p>Antiguamente el ejército ruso carecía de un sistema unificado de combate cuerpo a cuerpo, debido a esto, en la primera mitad del siglo XX, el líder comunista Vladimir Lenin ordenó a un grupo especializado que desarrollaran un sistema de combate para que fuera implementado por el ejército rojo. De esta forma, haciendo uso del aparato del Estado, este equipo recrrió el mundo recopilando las técnicas más eficaces de cada arte marcial popular de aquel momento, artes marciales entres las que estaban incluídas: el Judo, Jiu-Jitsu, Kárate, Kung Fu, Boxeo, Lucha Grecorromana, Lucha Libre, Korch armeni,o Kurash Uzbeko, Khridli georgiano, Trinta Moldavo y el Khapsagay mongol. </p>
                    <p>Con el paso del tiempo, este arte marcial iría evolucionando y agregaría técnicas del Muay Thai y Savate. </p>
                    <p>Finalmente el grupo encargado de crear este sistema de combate lograría su cometido, creando el Sambo, que en el año 1938 sería declarado deporte oficial del país. </p>
                    <h2>Estilo de Sambo</h2>
                    <p>Hoy en día son reconocidos 3 estilos diferentes de Sambo, siendo estos el <b>Sambo defensa personal</b>, <b>Combat Sambo</b> y <b>Lucha Sambo</b>: </p>
                    <ul>
                        <li><b>Sambo Defensa Personal: </b> Esta basada en la aplicación de este arte marcial en técnicas prácticas para la defensa propia, tanto para ataques armados como desarmados. </li>
                        <li><b>Combat Sambo: </b> Probablemente la variante más popular, es utlizada en competiciones y es similar a las formas más antiguas del Judo. Además de incluir técnicas de lucha, están permitidos los golpeos, lo que lo asemeja bastante a las MMA. En algunos casos están permitidos los cabezazos e incluye la práctica cno armas punzantes y de fuego, incluyendo técnicas de desarme. </li>
                        <li><b>Lucha Sambo: </b> Se centra principalmente en las técnicas de grappling y de sumisiones, siendo más abarcativa en las luxaciones que otras artes marciales como el judo. </li>
                    </ul>
                    <YouTubeEmbed videoid='p7XY8ODQWzc' />
                    <h2>Legado del Sambo</h2>
                    <p>Ganó mucha popularidad en la UFC, con figuras como <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> e <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> logrando ser campeones de la división de peso ligero utilizando sus técnicas que les permitieron ganar un gran dominio sobre sus rivales, siendo capaces de convertirse en los mejores peleadores de la historia de la división a los ojos de muchos. </p>
                    <p>Aunque también ha sido utilizado por varias figuras reconocidas más, incluyendo políticos como <b>León Trotski</b> y <b>Vladimir Putin</b>. Teniendo además a un peleador de MMA de la talla de <Link href='/leyendas/fedor-emilianenko'>Fedor Emelianenko</Link>, quien aunque nunca peleó en la UFC, es sin dudas una leyenda del deporte que también se especializó en el Sambo para lograr todos los éxitos deportivos alcanzados en su carrera. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}