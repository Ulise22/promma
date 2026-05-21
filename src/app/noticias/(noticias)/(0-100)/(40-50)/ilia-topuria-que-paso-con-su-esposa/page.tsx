import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/ilia_topuria-esposa.webp'
import statement from './ilia-topurias-official-statement.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Ilia Topuria Qué Pasó Con su Esposa',
    description: "¿Qué pasó con la esposa de Ilia Topuria? Descubre todos los detalles del divorcio con Giorgina Uzcategui, las acusaciones, el acuerdo de custodia y las palabras del campeón de UFC.",
    openGraph: {
        images: '',
        title: 'Ilia Topuria Qué Pasó Con su Esposa',
        description: "¿Qué pasó con la esposa de Ilia Topuria? Descubre todos los detalles del divorcio con Giorgina Uzcategui, las acusaciones, el acuerdo de custodia y las palabras del campeón de UFC.",
        url: 'https://fullmma.org/noticias/ilia-topuria-que-paso-con-su-esposa',
    }
}

export default function IliaTopuriaEsposa () {
    return(
        <main>
            <ArticleHero title='Ilia Topuria Qué Pasó Con su Esposa' subtitle="Todo sobre Ilia Topuria, sobre la separación, las acusaciones y cómo superó uno de los momentos más duros de su vida" image={hero} date='2026-05-21' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El campeón español de UFC <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> se ha separado definitivamente de su esposa Giorgina Uzcategui. Dicha separación se hizo conocida a finales de 2025 y estuvo rodeada por rumores de todo tipo, acusaciones, conflictos, acompañada de una lucha que el campeón de 155lbs decidió tener en silencio. Hoy con con el caso cerrado, un acuerdo entre ambos y la próxima pelea de Ilia Topuria anunciada para la <b>Casa Blanca</b>, vamos a repasar la cronología, declaraciones y su impacto en la carrera del Matador. </p>
                    <h2>El inicio de la relación con Giorgina Uzcategui</h2>
                    <p>Ilia Topuria conoció a la empresaria venezolana Giorgina en Miami. Mantuvieron una relación discreta al principio, pero que con el paso del tiempo se fue consolidando, incluso viendo a la mujer del campeón subirse al octágono a celebrar con el georgiano luego de ganar su segundo cinturón en la UFC ante <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. Ambos tuvieron una hija juntos en julio de 2024.</p>
                    <p>Pero para finales de 2025, luego de que la venezolana eliminara fotos de ambos en sus redes sociales, los rumores de su separación se acrecentaron hasta que finalmente el mismo Ilia lo confirmó en un posteo de Instagram. </p>
                    <Image className={styles.article__image} src={statement} alt='Ilia Topuria Official Statement about his wife and divorce.' />
                    <h2>La Demanda de Divorcio y Acusaciones</h2>
                    <p>Finalmente fue el mismo Ilia Topuria quien presentó una demanda de divorcio civil en España, buscando un acuerdo bastante razonable según se supo por informes. </p>
                    <p>Pese a que las condiciones que proponía el español parecían razonables, Giorgina Uzcategui amenazó con presentar una denuncia por malos tratos, cosa que hizo saber el propio Topuria a través de un comunicado, informando además que esto se trataba de un intento de extorsión y manipulación, luego de rechazar demandas económicas poco razonables. Por lo que no cedería ante la presión.</p>
                    <p>Al mismo tiempo El Matador decidió manejar la situación con la mayor discreción posible, priorizando el bienestar de sus hijos. </p>
                    <p>Todos estos problemas judiciales y familiares lo llevaron a tener que ponerle una pausa a su carrera en las MMA, debido a eso es que se puso en juego un cinturón interino en la división de peso ligero para estelarizar el <Link href='/eventos/ufc324'>UFC 324</Link>, entre el estadounidense <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> y el inglés <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> en enero de 2026. </p>
                    <h2>Acuerdo Extrajudicial y Cierre del Caso</h2>
                    <p>En febrero de 2026 ambas parte alcanzaron un acuerdo extrajudicial, donde Giorgina retiró la denuncia por malos tratos y resolvieron los temas del divorcio relacionado a la custodia de su hija y los asuntos económicos. Este acuerdo logró evitar un juicio largo y público que expusiera aún más a su familia. </p>
                    <h2>Ilia Topuria Sobre la Separación de Su Esposa</h2>
                    <p>Unos pocos meses después de alcanzar un acuerdo, el campeón español reflexionó sobre su separación, en entrevistas como la que tuvo en <b>El Hormiguero</b>, reconoció el dolor: &quot;Sí, yo diría que fue una decepción. Nacie quiere romper con su familia, especialmente cuando tienes una hija pequeña en casa&quot;. </p>
                    <p>Además, al ser consultado sobre qué es lo que aprendió de esta experiencia, a lo que Ilia dejó una reflexión bastante curiosa: </p>
                    <p><b>&quot;Igual os va a hacer gracia, pero lo que más he aprendido es a hacerle caso a mi madre. Porque las madres tienen una intuición y ven algo que nosotros no vemos. Cuando una madre te dice que por ahí no es, por mucho que tu lo veas clarísimo por ahí no es. Yo recuerdo que mi madre poquísimas veces me ha dicho que por ahí no es... He aprendido a escuchar a mi madre.&quot;</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="es" dir="ltr">Ilia Topuria sobre la mayor lección que le dejó su divorcio:<br /><br />“Puede sonar gracioso, pero la lección más importante que aprendí fue escuchar a mi madre.<br /><br />Las madres tienen una intuición especial. Ven cosas que nosotros no vemos.<br /><br />Cuando tu madre te dice que algo no está bien,… <a href="https://t.co/z8ih64zQT5">pic.twitter.com/z8ih64zQT5</a></p>&mdash; Empújate (@empujate) <a href="https://twitter.com/empujate/status/2043811475643355250?ref_src=twsrc%5Etfw">April 13, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>¿Qué sigue para Ilia Topuria?</h2>
                    <p>El divorcio lo obligó a poner su carrera en pausa, al punto que se tuvo que disputar un cinturón interino de la división en donde él es campeón. Pero ahora que su situación ya se ha resuelto, Ilia puede volver a los entrenamientos, preparándose para defender su cinturón por primera vez ante el actual campeón interino <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> en el <b>UFC Casa Blanca</b>, por los 250 años de independencia de los Estados Unidos. </p>
                    <p>Parece que va a volver más fuerte que nunca, y estamos listos para verlo pelear no sólo con Gaethje, sino en futuros enfrentamientos que a los fans no entusiasmarían, como una posible pelea ante <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, o ante <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, o incluso, la que nos ilusiona a todos, una ante el daguestaní <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> por un tercer cinturón. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}