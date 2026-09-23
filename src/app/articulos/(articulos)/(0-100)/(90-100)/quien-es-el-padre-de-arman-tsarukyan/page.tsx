import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/90-100/arman_tsarukyan-padre.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: '¿Quién es el padre de Arman Tsarukyan?',
    description: 'La historia detrás de Nairi Tsarkuyan, el padre de Arman Tsarukyan, el empresario armenio que construyo una fortuna desde cero y permitió a su hijo dedicarse de lleno a las artes marciales mixtas.',
    openGraph: {
        images: '',
        title: '¿Quién es el padre de Arman Tsarukyan?',
        description: 'La historia detrás de Nairi Tsarkuyan, el padre de Arman Tsarukyan, el empresario armenio que construyo una fortuna desde cero y permitió a su hijo dedicarse de lleno a las artes marciales mixtas.',
        url: 'https://fullmma.org/articulos/quien-es-el-padre-de-arman-tsarukyan',
    }
}

export default function ArmanTsarukyanPadre () {
    return(
        <main>
        <ArticleHero title='¿Quién es el padre de Arman Tsarukyan?' subtitle='Nairi Tsarukyan: El empresario armenio y padre de Arman Tsarukyan que construyo una fortuna desde cero.' image={hero} date='2026-09-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El padre del peleador de UFC <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> es el empresario multimillonario armenio hecho a sí mismo <b>Nairi Tsarukyan</b>, dedicado al sector de la construcción y los negocios inmobiliarios en Rusia. </p>
                    <p>Contrario a muchos casos de peleadores que cubrimos en este sitio, que suelen provenir de familias de escasos recursos, el caso de Arman Tsarukyan es todo lo contrario, nacido en una familia acaudalada, gracias al esfuerzo y trabajo de su padre Nairi, que le permitió a Arman dedicarse de lleno a las artes marciales mixtas, hasta alcanzar el éxito en la UFC. Por eso en este articulo te contaremos todo lo que sabe sobre el padre de Arman Tsarukyan, su origen humilde, como construyo un imperio, la influencia que representa para su hijo y de cuánto se estima que llega la fortuna familiar de los Tsarukyan. </p>
                    <h2>Los Origenes Humildes de los Tsarukyan</h2>
                    <p>Contrario a lo que puede parecer hoy en día, <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> nació el 11 de octubre de 1996 en Akhalkalaki, Georgia, en el seno de una familia humilde, justamente en una ciudad que está habitada mayoritariamente por armenios, debido a su cercanía con la frontera del país. </p>
                    <p>Cuando Arman era un niño de 3 años, la familia decidió emigrar a Rusia en busca de mejores oportunidades. Llegaron con casi nada, los primeros días durmieron en el coche y dependían de la generocidad de una familia daguestaní que los ayudó durante un año mientras se acomodaban. </p>
                    <p>Como se puede observar, Nairi, el padre de Arman Tsarukyan, no provenía de una familia rica, por el contrario, se hizo desde abajo y en base a las conexiones empresariales, trabajo duro y una visión de negocio fue capaz de transformar su situación en un imperio empresarial. </p>
                    <h2>El Negocio de Nairi Tsarukyan: Construcción y Bienes Raíces</h2>
                    <p>Nairi Tsarukyan es un empresario exitoso en la industria de la construcción y en el sector inmobiliario en Rusia. Su hijo Arman lo ha destacado por la ética de trabajo que lo llevó a ser exitoso en los negocios, mencionando que trabaja desde las 6 de la mañana hasta altas horas de la noche practicamente todos los días. </p>
                    <p>Sin embargo, la familia Tsarukyan mantiene un pérfil bajo, por lo que podemos saber sobre la empresa y el negocio de Nairi es en base a lo que cuenta su hijo Arman, quien está más expuesto a los micrófonos y la vida pública. Debido a esto, lo que poco que podemos saber es que el negocio de su padre comenzó a crecer desde finales de los años 90, y que ha alcanzado un gran éxito, permitiéndoles tener a la familia un estilo de vida acomodado. </p>
                    <p>Por ejemplo, Arman ha contado como junto a su hermano mayor, Artur, ayudaron en el negocio familiar desde niños, trabajando y cobrando 500 rublos la hora cuando tenía apenas 11 años, esto con el objetivo de comprarse un ciclomotor, y tiempo más tarde cuando era adolescente, ya de manera más seria. El propio peleador señaló como esta experiencia, además de enseñarle a fijarse metas y alcanzarlas mediante el trabajo y esfuerzo, le mostró que prefería dedicarse al deporte, donde no estaría expuesto al mismo tipo de trabajo duro. </p>
                    <h2>¿De cuánto es la fortuna de los Tsarukyan?</h2>
                    <p>Debido a que como mencionamos anteriormente, la familia Tsarukyan mantiene un pérfil bajo, no existe una cifra oficial sobre cuánto dinero posee el padre de Arman, ni el mismo luchador, o en cuánto está valuada la empresa en la que trabajan. Aún así, medios como <a href='https://www.mirror.co.uk/sport/other-sports/mma/ufc-star-doesnt-need-fight-36283775' target='_blank' rel='noopener noreferrer'>Mirror</a> se arriesgan a estimar que la familia Tsarukyan posee una fortuna de $100 millones de libras. </p>
                    <p>En una entrevista con <b>Ariel Helwani</b>, Arman habló sobre su fortuna personal: </p>
                    <p><b>&quot;La gente envidia que tenga dinero. Aunque no tengo tanto dinero, pero puedo vivir, puedo hacer lo que quiera en esta vida. Puedo comprar lo que quiera, pero no un jet privado o un yate. &quot;</b></p>
                    <YouTubeEmbed videoid='oiYxprROsmo' />
                    <p>Más allá de las estimaciones que se puedan dar, o de las cifras exactas que maneja la familia, lo que es evidente es que con el dinero que tienen pueden permitirse un estilo de vida elevado. Se ha visto al peleador de UFC manejar coches de lujo, haciendo viajes, y durmiendo en propiedades que no se pagó con su sueldo de peleador. Además, la fortuna de su padre le permitió a Arman dedicarse de lleno a las MMA sin tener que preocuparse por sus necesidades financieras. </p>
                    <h2>La Influencia de Nairi en la Carrera de Arman Tsarukyan</h2>
                    <p>Más allá de lo económico, Nairi ha sido un pilar clave en la carrera de Arman Tsarukyan, apoyándolo en su decisión de convertirse en un peleador de MMA profesional cuando este tenía 17 años, proporcionando estabilidad financiera para que pudiera dedicarse lleno a entrenar, y sirviendo de ejemplo del trabajo duro y la disciplina que se necesitan para progresar en la vida. </p>
                    <p>Esta mentalidad es clave para un Arman que, a diferencia del peleador promedio de UFC, que tiene que pelear para vivir, se esfuerza y entrena igual que los demás, aunque su vida no dependa de ello. </p>
                    <h2>Conclusión: Un Empresario Hecho a Sí Mismo</h2>
                    <p>Aunque Nairi Tsarukyan no es un personaje mediático, y sea más conocido por ser el padre de Arman, su historia es el típico ejemplo del emprendedor que empezando con poco construye una fortuna. Y es fundamental para entender de donde viene Arman Tsarukyan. </p>
                    <p>Gracias a su éxito empresarial su hijo pudo dedicarse de lleno a las artes marciales mixtas sin preocupaciones financieras, hasta convertirse en uno de los peleadores más letales de la división de peso ligero de la UFC, y probablemente un próximo retador al título. </p>
                    <p>Además de representar un ejemplo a seguir para su propio hijo, el cual lo respeta y comprende que los lujos que puede darse son gracias al trabajo de su padre, como él mismo afirmo al ser consultado sobre si tenía dinero: &quot;Yo no tengo, mi padre sí&quot;.</p>
                    <YouTubeEmbed videoid='jTGYYNkPL8s' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}