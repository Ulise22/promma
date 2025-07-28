import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/ufc_busca_millonada.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC Busca Mil Millones',
    description: "Este año 2025 expira el contrato actual de la UFC con ESPN, por lo que la empresa de MMA más grande del planeta estaría buscando aumentar su contrato actual a uno de 10 cifras. ",
    openGraph: {
        title: 'UFC Busca Mil Millones',
        description: "Este año 2025 expira el contrato actual de la UFC con ESPN, por lo que la empresa de MMA más grande del planeta estaría buscando aumentar su contrato actual a uno de 10 cifras. ",
        url: 'https://fullmma.org/noticias/la-ufc-busca-contrato-billonario'
    }
}

export default function MejoresEventosUFC2024 () {
    return(
        <main>
            <ArticleHero title='La UFC Busca un Contrato Multimillonario de Mil Millones, Según Bloomberg, Por Sus Derechos Televisivos' subtitle="Este año 2025 expira el contrato actual de la UFC con ESPN, por lo que la empresa de MMA más grande del planeta estaría buscando aumentar su contrato actual a uno de 10 cifras. " image={hero} date='2025-01-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este 2025 expira el actual contrato entre la UFC y ESPN por los derechos televisivos de sus peleas y eventos, por lo que la compañía liderada por Dana White, estaría en busca de una mejora sustancial del contrato que actualmente poseen, llegando a cifras, según mencionó <a target='_Blank' href='https://www.bloomberg.com/news/articles/2025-01-10/ufc-to-seek-more-than-1-billion-a-year-in-next-tv-rights-deal?sref=W6GJF3MS&leadSource=uverify%20wall&embedded-checkout=true'>Bloomberg</a> recientemente, de 1 billón de dólares (Mil millones) por año. Teniendo a más de una compañía, entre 3 y 5 según diversas fuentes, además de ESPN, interesados en hacerse con los derechos televisivos de la UFC.</p>
                    <p>En 2018 tanto la UFC como ESPN habían llegado a un acuerdo para transmitir los eventos de la compañía, firmando un contrato de $1.5 billones durante 5 años, comenzando a contar a partir de 2019. Poco después extenderían por 2 años el contrato, por lo que este mismo 2025 sería el último año de contrato entre ambas compañías. </p>
                    <p>Tomando como buenas la información que proporcionan tanto <a target='_Blank' href='https://www.bloomberg.com/news/articles/2025-01-10/ufc-to-seek-more-than-1-billion-a-year-in-next-tv-rights-deal?sref=W6GJF3MS&leadSource=uverify%20wall&embedded-checkout=true'>Bloomberg</a>, como <a target='_Blank' href='https://www.forbes.com/sites/trentreinsmith/2025/01/12/report-ufc-looks-for-1-billion-a-year-for-new-broadcast-rights-deal/'>Forbes</a>, el contrato actual de la UFC por sus derechos televisivos estaría rondando los $300 millones por año, por lo que actualmente, estarían buscando más que triplicar ese monto al ir por los mil millones. </p>
                    <YouTubeEmbed videoid='Dtc_GdMIT-c' />
                    <p>Sin embargo, esta cifra queda corta o sorprende a la baja, cuando comparamos los contratos que han sido capaces de firmar otros deportes en los Estados Unidos. En 2021, la NFL firmó un contrato por 11 años, con varias empresas y servicios de streaming para transmitir sus eventos por la astronómica cantidad de $111 billones. De igual forma, la NBA aseguró un contrato por 11 años valuado en $76 billones. Mientras que la MBL es capaz de generar $12,6 billones anuales gracias a su contrato con ESPN, TNT y Apple. </p>
                    <p>Tomando esta perspectiva, los $300 millones anuales que cobra la UFC palidecen ante tremendas cifras. Y teniendo en cuenta la popularidad que han alcanzado las MMA desde que la UFC firmó su último contrato en 2018, especialmente durante el 2020, cuando prácticamente el único deporte que se siguió transmitiendo en televisión fueron las MMA por medio de la UFC, tiene todo el sentido del mundo que la compañía esté en busca de un contrato con cifras bastante más grandes de las que manejan hoy en día. </p>
                    <h2>Dana White Sobre el Nuevo Contrato de la UFC </h2>
                    <p>El CEO de la UFC, Dana White, ya ha dado algunas declaraciones respecto al nuevo contrato que podría firmar su compañía, dejando varias pistas de lo que podría deparar el futuro. “Sí, todos están comenzando a investigar por encima. Y durante la cantidad de años que sea que llevemos juntos, he tenido unos encontronazos con ESPN, pero siento que estamos en un muy buen lugar ahora mismo y estoy muy contento por la relación que tenemos con ellos, y la forma en la que todo esto está funcionando. Veremos como termina saliendo”, dijo. </p>
                    <p>También, durante el 2024, mencionó la posibilidad de hacer algo parecido a lo que hacen la NFL o la NBA, donde tiene repartidos sus derechos de transmisión entre varias compañías de streaming diferentes: “Nuestro acuerdo por los derechos va a ser algo grande a partir de ahora. ¿Quién sabe? Podríamos terminar como la NBA y la NFL, terminando en varios canales en lugar de en uno solo… todo esta avanzando y cambiando muy rápido”. </p>
                    <p>Especulando un poco sobre estas declaraciones, puede ser que tengan en mente como una posibilidad, ceder los derechos de los UFC numerados (PPV, <Link href='/covertura-ufc/ufc309'>UFC 309</Link>, <Link href='/covertura-ufc/ufc310'>UFC 310</Link>, etc.) a algún canal o compañía de streaming, mientras que venderían o cederían los Fight Nights a algún otro canal, teniendo la programación y la transmisión de sus peleas y eventos divididas en más de un solo canal. Contrario a como funciona actualmente, con ESPN siendo dueño de la totalidad de los eventos que se transmiten.</p>
                    <YouTubeEmbed videoid='z-XDgMav76k' />
                    <h2>Un Posible Nuevo Contrato de la UFC con ESPN </h2>
                    <p>Tanto la UFC como ESPN están interesados en continuar lo que hasta ahora ha sido una relación mutuamente beneficiosa. El mismo presidente de la empresa dueña de la UFC (TKO), Mark Shapiro, dijo en marzo del año pasado que: “nuestra preferencia es quedarnos en Disney (la empresa dueña de ESPN) por su historia. Aunque hay 3 empresas interesadas en negociar con nosotros, y podríamos sentarnos a discutir movernos a otra plataforma, cosa que haremos si no conseguimos un contrato justo”. </p>
                    <p>Las negociaciones entre ambos estarán próximas a empezar, y pase lo que pase está claro que quien tiene la prioridad para firmar lo que sea con la UFC, en estos momentos, es ESPN. </p>
                    <h2>Un Posible Acuerdo Entre Netflix y la UFC</h2>
                    <p>Por raro que suene, dado que Netflix no transmite eventos deportivos de forma habitual en su plataforma. La empresa de streaming estadounidense ha estado tanteando las aguas en el terreno deportivo, poniendo su atención en los deportes de manera paulatina. Eventos como el que realizaron en noviembre del año pasado, con la pelea entre Jake Paul y Mike Tyson, no son en vano ni cosas aisladas. </p>
                    <p>El paso más importante que dio Netflix en el último tiempo hacia esta dirección, es la firma de un contrato por 10 años y $5 billones con la WWE, compañía hermana de la UFC, dado que ambas pertenecen a TKO. Ya teniendo a un pie en una de las compañías de TKO, el siguiente paso lógico podría ser firmar con la UFC. </p>
                    <p>Además, teniendo en cuenta los problemas actuales con los que cuenta Netflix, comenzar a transmitir los eventos de la UFC podría ser de ayuda para solucionar muchos de estos problemas. Dado que por cada éxito estratosférico como “El Juego del Calamar”, existe un cráter de miles de horas de series de televisión y películas que son incapaces de alcanzar el millón de reproducciones a nivel global. Una transmisión casi semanal de eventos de MMA organizados por la UFC, podrían ser una fuente constante de usuarios entrando a la plataforma para consumir este contenido de manera regular, dando además una razón a cientos de miles (sino millones) de usuarios para pagar una suscripción mensual. </p>
                    <YouTubeEmbed videoid='2rY26BxpylE' />
                    <h2>Conclusión</h2>
                    <p>Se viene una guerra de ofertas para hacerse con los derechos de la UFC, con varios servicios de Streaming y compañías que no llegué a mencionar por lo largo que llegaría a volverse este artículo. Pero puedo decir en resumen que Amazon parece estar interesado, habiendo estado cerca de hacerse con los derechos televisivos ya en 2018, antes de que la compañía firme con ESPN. YouTube, quien quiere apuntar a ser el futuro de la televisión, también podría convertirse en un actor interesado, recordemos que los eventos de una de los mayores competidores de la UFC, ONE Championship, transmite sus eventos en vivo mediante YouTube. Apple, que ya transmite eventos deportivos en su plataforma podría ser otro de los interesados. Y finalmente Warner Bros. Discovery es otro de los actores que podría estar intentado hacerse con los derechos televisivos de la compañía de artes marciales más grande del mundo. </p>
                    <p>De igual forma, todavía queda bastante tiempo para conocer el desenlace de esta historia, y para saber en donde podremos ver este deporte que tanto amamos, tanto las personas residentes de Estados Unidos como en parte gran importante del mundo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}