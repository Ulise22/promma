import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/khamzat_chimaev-guerra.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Khamzat Chimaev Guerra',
    description: 'La historia real de Khamzat Chimaev y la guerra en Chechenia. Nacido en plena zona de conflicto ruso, emigró como refugiado a Suecia. Cómo su infancia dura lo convirtió en una bestia del MMA.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkhamzat_chimaev-guerra.bc1693f5.webp&w=828&q=65',
        title: 'Khamzat Chimaev Guerra',
        description: 'La historia real de Khamzat Chimaev y la guerra en Chechenia. Nacido en plena zona de conflicto ruso, emigró como refugiado a Suecia. Cómo su infancia dura lo convirtió en una bestia del MMA.',
        url: 'https://fullmma.org/articulos/khamzat-chimaev-guerra'
    }
}

export default function KhamzatChimaevGuerra () {
    return(
        <main>
            <ArticleHero title='Khamzat Chimaev y la Guerra: De Refugiado en Suecia a Campeón de UFC' subtitle='La dura infancia marcada por la guerra en Chechenia que forjó al lobo que hoy es campeón de la UFC.' image={hero} date='2026-05-06' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> nació en la guerra, literalmente: el 1 de mayo de 1994, meses después de que estallara la Primera Guerra de Chechenia, que se extendería hasta el año 1996. Aquella República Autónoma de Rusia ha vivido en tensión constante, especialmente durante los primeros años de vida de Chimaev, lo que hizo que la vida diaria fuera durísima para él y su familia, marcada por la pobreza y las consecuencias del conflicto bélico. </p>
                    <p>Para colmo, durante la infancia y adolescencia de Khamzat Chimaev siguió viviendo en zona de guerra, dado que en el año 1999, cuando él tenía 6 años, estallaría la Segunda Guerra de Chechenia, que duraría 10 años y dejaría secuelas graves en la región: </p>
                    <p><b>&quot;Me arrancaron de mi hogar en medio de la guerra… pero aprendí a no dejar que el miedo viviera en mí.&quot;</b> Llegó a decir Khamzat sobre aquella época. </p>
                    <p>Aunque nuestro protagonista tuvo la suerte de vivir en un pueblo lo suficientemente alejado de la principal zona de conflicto para que no tuviera que ver en primera persona los combates más intensos, lo cierto es que recuerda con detalle las consecuencias que todo esto trajo: los edificios destruídos, la presencia de militares constantemente, los controles y la pobreza extrema. </p>
                    <p>Para colmo su padre trabajaba fuera durante largos periodos de tiempo, dejando a su madre frente a la casa en un hogar musulmán, conservador de varios hermanos. </p>
                    <p>A Khamzat Chimaev la guerra lo marcó profundamente junto a su región: nació y creció en un clima marcado por la destrucción, la inestabilidad, las amenazas constantes y una economía devastada, por lo que para muchos chechenos, incluída su familia, la supervivencia era el día a día. En este contexto, el único escape que encontraría nuestro protagonista sería en la lucha, que comenzaría a entrenar desde bastante joven. </p>
                    <YouTubeEmbed videoid='JFOWrXTyy_M' />
                    <h3>Emigración a Suecia como refugiado en busca de una mejor vida</h3>
                    <p>En 2013, siendo un adulto joven emigró junto a su madre en busqueda de mejores oportunidades, escapando de la inestabilidad persistente que implicaba aquella zona de Rusia en la que había nacido. Contaba con ventaja de que su hermano mayor llevaba tiempo viviendo allí, por lo que recibió el estatus de refugiado en Suecia. </p>
                    <p>En Klamar y luego en Estocolmo, la vida tampoco fue fácil, le costó adaptarse a una cultura tan distinta, encima sin hablar el idioma, y viviendo en condiciones precarias. Trabajó en una granja avícola y como guardia de seguridad para ganarse la vida. Aunque nada de esto lo detendría de entrenar duro en busca de cumplir su sueño de ser un peleador profesional. </p>
                    <h3>¿Participó Khamzat Chimaev de la Guerra?</h3>
                    <p>Khamzat Chimaev no participó de ninguna guerra, era demasiado joven (menor de edad) cuando ambos conflictos armados se destaron en Chechenia. Además, emigró siendo un adulto joven para no tener que lidiar con los constantes conflictos que vivía allí en Rusia. Las únicas guerras en las que participó fueron dentro del octágono de la UFC. </p>
                    <p>Lo que sí vale la pena mencionar de igual forma, es que posteriormente a todo el conflicto, ha mantenido una relación bastante cercana con el líder de Chechenia <b>Ramzan Kadyrov</b>, recibiendo apoyo público por parte del lider político, además de algunos regalos, mostrándolo como un representante importante de la región.</p>
                    <p>Esta &quot;amistad&quot;, le ha generado críticas, por tensiones geopolíticas, especialmente por lo controversial que es la figura de Kadyrov, entre los más duros con nuestro protagonista está el excampeón de peso medio <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>: </p>
                    <p><b>&quot;Este hombre abandona su país, viaja a Suecia y vive una buena vida, entonces vuelve a Chechenia, se la chupa a un dictador y deja que su hijo lo golpee&quot;</b>. </p>
                    <YouTubeEmbed videoid='ynV6-ZqoRkI' />
                    <h3>Legado y carrera de Khamzat Chimaev en la UFC</h3>
                    <p>Al fin y al cabo la guerra no detuvo a Khamzat Chimaev, quien pese a crecer en un entorno conflictivo, rodeado de escombros, donde nada de lo que tenía estaba garantizado, fue capaz de sobreponerse a todo lo que le puso la vida, entrenó como un demente para ser el mejor, y finalmente llegó hasta la UFC alcanzando la cima. </p>
                    <p>Supo pelear manteniendo un récord invicto de 14-0, hasta que le tocó pelear por el cinturón de las 185lbs en la UFC, enfrentando al campeón sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, a quien aplastaría en una de las peleas de campeonato más dominantes que se recuerden, demostrando que todo lo que vivió, sólo sirvió para hacerlo más fuerte y convertirlo en el peleador temible que es hoy en día. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}