import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/gaethje-retiro.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC 324: ¿El Retiro de Justin Gaethje?',
    description: "",
    openGraph: {
        images: '',
        title: 'UFC 324: ¿El Retiro de Justin Gaethje?',
        description: "",
        url: 'https://fullmma.org/noticias/justin-gaethje-retiro'
    }
}

export default function JustinGaethjeRetiro () {
    return(
        <main>
            <ArticleHero title='UFC 324: ¿El Retiro de Justin Gaethje?' subtitle="El entrenador de Gaethje ha dejado claro que en caso de perder se nos retira una leyenda..." image={hero} date='2026-01-20' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Justin Gaethje Retiro</h2>
                    <p>Este sábado 24 de enero se hará el UFC 324 que será encabezado por <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> y <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> en una pelea por el cinturón interino de peso ligero, donde el entrenador de Gaethje, Trevor Wittman, ha sido claro, si Justin no gana esta pelea, se retira de las MMA. </p>
                    <p>Teniendo cada vez más cerca el primer evento del año de la UFC, y el primero de la era Paramount, una de las noticias más importantes por la que hay que prestar especial atención a este <b>UFC 324</b>, es porque en caso de perder su combate, se nos retiraría una leyenda absoluta del deporte como lo es Justin Gaethje. </p>
                    <p>Concretamente, su entrenador <b>Trevor Wittman</b> dijo: <b>&quot;No tengo miedo de decirlo claramente. Esta es nuestra última oportunidad. Si no ganamos esta pelea, no vamos a seguir con esto. No vamos a continuar para ser un Gatekeeper o para buscar peleas por dinero&quot;</b>. </p>
                    <YouTubeEmbed videoid='cN3SAMJlSs8' />
                    <p>Además ha dejado claro que tanto él como el peleador están priorizando a la familia de Gaethje y su salud, lo que explicaría porqué en caso de perder sus oportunidades de ser campeón de la UFC no quiera seguir luchando. </p>
                    <p>Por su parte, el mismo Gaethje en una entrevista con <b>TNT Sports</b> reconoció directamente que: <b>&quot;El final está cerca. Tengo 37 años, sería un tonto si creyera que esto recién comienza&quot;</b>.</p>
                    <p>Además de todo esto, su manager, <b>Ali Abdelaziz</b>, había presionado a la UFC durante el año pasado, diciendo que en caso de que su peleador no reciba una oportunidad titular se retiraría. Y aunque esto pareció siendo más una estrategia del manager para darle la pelea que quiere, que una idea del mismo Gaethje, está claro que la idea le viene atravesando la mente hace un tiempo.</p>
                    <p>Teniendo en cuenta que tiene 37 años, una edad avanzada para un peleador de MMA, especialmente en su división, donde no ha habido campeones tan mayores, y que sus oportunidades de pelear por el oro en caso de perder se verían ya muy lejanas, tiene sentido que decida colgar los guantes ante este escenario. </p>
                    <p>Para alguien como él que ha tenido una carrera sobresaliente, encabezando un montón de eventos y ganando un montón de bonos por desempeño en la UFC, no pareciera que el dinero sea un problema a esta altura, por lo que la motivación para pelear dejó de ser la plata y pasó a ser el legado o la grandeza. Si sus oportunidades de ser campeón de la UFC, que es practicamente el único logro que le falta, se desvanecen, lo más lógico es el retiro, para no sufrir más daño innecesario. </p>
                    <h2>¿Y Si Justin Gaethje Gana su Pelea Contra Paddy Pimblett?</h2>
                    <p>No hay que olvidar que todo esto del retiro es en el hipotético caso de que el veterano estadoundiense pierda ante el joven inglés, cosa que no tiene porque darse. Si ganara su pelea ante <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, Gaethje se convertiría en el campeón interino y lo que seguiría para el sería una pelea para unificar los cinturones ante el campeón actual <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, y a partir de acá habría que ver que sucede. </p>
                    <p>Aunque pareciera estar claro que la idea de la UFC es esperar que sea Pimblett quien gane su combate para tener una super pelea entre la estrella inglesa y la española, lo cierto es que en caso de que el estadounidense gane, no sería la primera vez que le arruina los planes a la UFC.</p>
                    <p><Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> ya fue campeón interino de la división en mayo de 2020, cuando tuvo que entrar en reemplazo del daguestaní <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, quien era el vigente campeón pero que por problemas típicos del 2020 no pudo pelear, por lo que se puso un cinturón interino en juego entre Gaethje y <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link>, quien para aquel entonces llevaba una racha de 12 victorias consecutivas. En aquel momento, lo que la compañía esperaba era una victoria de Tony para hacer la tan anhelada super pelea contra Khabib (ver <Link href='/articulos/khabib-vs-ferguson'>La Pelea Maldita que Nunca se Dió</Link>), pero aquella noche Justin lograría un nocaut en el quinto asalto que le arruinaría los planes a la UFC. </p>
                    <YouTubeEmbed videoid='dGWDT3iyrdw' />
                    <p>Por esto es que hay que ver que es lo que finalmente sucede este sábado, nada está escrito y todo puede pasar, pero desde mi humilde opinión, tiene todo el sentido del mundo que Gaethje se retire si pierde ante Paddy. Por mucho que a los fans nos duela ver a las leyendas retirarse, es mejor que lo hagan a tiempo y no extiendan su carrera de más para terminar sufriendo daño innecesario que finalmente van a sufrir ellos y sus familias. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}