import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/0-10/glover_teixeira.jpg'

export const metadata: Metadata = {
    title: 'Campeón Más Viejo de la UFC',
    description: '',
    openGraph: {
        title: 'Campeón Más Viejo de la UFC',
        description: '',
        url: 'https://fullmma.org/articulos/campeon-viejo-ufc'
    }
}

export default function CampeonViejoUFC () {
    return(
        <main>
            <ArticleHero title='El Campeón Más Viejo de la Historia Moderna de UFC' subtitle='La historia de Glover Teixeira, el peleador brasileño que con 42 años sorprendió al mundo al convertirse en campeón de la división de Peso Semipesado de la UFC.' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El 30 de octubre de 2021, 2 días después de su cumpleaños, Glover Teixeira haría historia en el UFC 267, al vencer con una sumisión al polaco <b>Jan Blachowicz</b> en el segundo asalto, arrebatándole el cinturón y consagrándose él como el nuevo campeón de los peso Semipesados de la <Link href='/articulos/ufc'>UFC</Link>. Siendo, junto al histórico <Link href='/leyendas/randy-couture'>Randy Couture</Link>, el único en lograr esto pasando los 40 años.</p>
                    <p>La historia de Glover Teixeira es muy inspiradora, debido a que nunca ha tenido fácil las cosas en la vida. Nació el 28 de octubre de 1979 en la ciudad de Sobrália, ubicada en el Estado brasileño de Minas Gerais. Aquella era una zona muy pobre del país, donde no había electricidad en la mayoría de las casas de la zona, donde no pasaba el tráfico y donde no había ninguna gasolinera cerca, además, apenas contaban con acceso al agua gracias a un pozo que tenían en la casa. Se crió en una familia que se dedicaba a la cría de animales y al campo, a la que desde muy pequeño tuvo que ayudar en el trabajo mientras compaginaba estas tareas con la escuela.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Qo5QOjRl8Z4?si=4FKHNcR7LTOB7O9M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Originalmente, Glover soñaba con ser un fisicoculturista y abrir el primer gimnasio en su ciudad natal, sin embargo este sueño no le privó de interesarse en el mundo de las peleas, de la mano de películas como <b>Rocky</b>, que lo inspiraron a entrenar pesas y pelea en su tiempo libre.</p>
                    <p>De esta manera, Glover Teixeira se las ingeniaba para trabajar, estudiar, y entrenar a lo largo del día. Cuando Teixeira tenía 19 años, uno de sus tíos para el cual trabajaba, vió todo el esfuerzo que nuestro protagonista realizaba y le dijo: &quot;Tú trabajas muy duro Glover, deberías ir a Estados Unidos. Si trabajas tan duro allá, como lo haces aquí, vas a ser millonario&quot;.</p>
                    <p>Glover tuvo que sufrir una larga travesía para llegar a los Estados Unidos, dado que no es fácil para un brasileño conseguir la visa que le permite residir en el país. Por esta razón entró como ilegal, viviendo varios años de esa manera en el país norteaméricano, en un periodo que le sirvió para concocer a quien sería su esposa, <b>Ingrid Peterson Teixeira</b>. Además, ya desde entonces comenzó a pelear en las MMA en diferentes promotoras del país, incluida la promotora <b>WEC</b>, que años después sería comprada y absorvida por la UFC.</p>
                    <p>En aquellos años conoció a Dana White que se interesó en contratarlo para la UFC, sin embargo le pidió que primero resolviera la situación irregular con la que se mantenía en el país. Cuando fue a la oficina de migración le dieron 90 días para volver a Brasil y comenzar a tramitar los papeles desde allí, para poder ser ciudadano americano. Glover Teixeira tuvo que volver a residir en su país natal durante unos cuantos años hasta poder terminar de tramitar los papeles de su ciudadanía, dejando atrás a su propia esposa y varias amistades que fue cultivando en el país. Durante este período siguió peleando en promotoras brasileñas, ganando todos sus combates en Brasil. Finalmente, , quien fue de mucha ayuda para terminar de destrabar su situación, fue su propia esposa, que durante ese tiempo mandó cartas a políticos y funcionarios de todo tipo para que ayudaran a su esposo a convertirse en ciudadano. </p>
                    <p>Para cuando finalmente pudo volver a los Estados Unidos, Glover ya tenía 32 años, que no es para nada viejo, pero como la carrera de los deportistas es corta, lo ponía en una situación complicada como para lograr hacer algo destacable en sus años de actividad.</p>
                    <p>Glover debutaría en la <Link href='/articulos/ufc'>UFC</Link> el 26 de mayo de 2011 en el UFC 146, contra el estadounidense <b>Kyle Kingbury</b>, a quien derrotaría con una sumisión en el primer asalto. Contando aquel combate, acumularía una racha de 5 victorias consecutivas en la compañía, que le darían la chance de enfrentarse a <Link href='/peleadores/jon-jones'>Jon Jones</Link> por el Campeonato de Peso Semipesado de la UFC, combate que luego de 5 asaltos terminaría perdiendo por decisión unánime, perdiendo la oportunidad de proclamarse campeón, y entrando en una edad avanzada. Para colmo, luego de su derrota con Jon Jones, volvería a perder otra vez por decisión, y comenzaría a acumular un récord bastante irregular, de 5 victorias y 4 derrotas desde su combate con Jones.</p>
                    <p>Ya con casi 40 años era díficil verlo lograr algo más en la UFC, sin embargo, luego de su última derrota con <b>Corey Anderson</b>, Glover siguió entrenando y llegó a acumular una sorprendente racha de 5 victorias consecutivas, siendo la última contra el brasileño <b>Thiago Santos</b>, a quien sometió en el tercer asalto. Esto lo colocaba como el único contendiente serio al título, íncluso él comenzó a pedir otra oportunidad de pelear por el campeonato. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ILlgifH9XiA?si=tE9R3S_4x2IwgN7n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Esta oportunidad se le presentaría el día 30 de octubre de 2021, en Abu Dhabi por UFC 267, donde con 42 años se enfrentaría al entonces campeón, <b>Jan Blachowicz</b>, que venía de defender su título contra <Link href='/peleadores/israel-adesanya'>Israel Adensanya</Link>, y de acumular igualmente una racha de 5 victorias. Glover haría historia al someter en el segundo asalto al campeón y proclamarse él con el cinturón de Peso Semipesado de la UFC, convirtiéndose en el peleador más viejo en ganar un título por primera vez. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}