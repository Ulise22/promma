import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/40-50/ufc_casa_blanca.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC Casa Blanca',
    description: "Todos los detalles sobre el evento de UFC organizado en la Casa Blanca por el 250 aniversario del Día de la Independencia en Estados Unidos",
    openGraph: {
        images: '',
        title: 'UFC Casa Blanca',
        description: "Todos los detalles sobre el evento de UFC organizado en la Casa Blanca por el 250 aniversario del Día de la Independencia en Estados Unidos",
        url: 'https://fullmma.org/noticias/ufc-casa-blanca',
    }
}

export default function UFCWhiteHouse () {
    return(
        <main>
            <ArticleHero title='UFC Casa Blanca: Todo lo que Tienes Que Saber Sobre el UFC Freedom 250' subtitle="Todos los detalles sobre el evento de UFC organizado en la Casa Blanca por el 250 aniversario del Día de la Independencia en Estados Unidos" image={hero} date='2026-05-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El próximo Domingo 14 de junio se celebrará el evento de UFC organizado en la Casa Blanca por el 250 aniversario del Día de la Independencia en Estados Unidos. Dicho evento contará con la pelea por el título de peso ligero entre el campeón indiscutido <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> y el retador y campeón interino <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> como pelea estelar, además de contar en su pelea coestelar con un combate por el cinturón interino de peso pesado entre el excampeón de peso medio y peso semipesado, el brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que estará en busca de su tercer cinturón enfrentando al francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>. Finalmente habrá 7 combates en total. </p>
                    <h2>UFC Casa Blanca Cartelera Completa: </h2>
                    <ul>
                        <li>Pelea Estelar por el Título de Peso Ligero: <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> vs. <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link></li>
                        <li>Pelea Coestelar por el Cinturón Interino de Peso Pesado: <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> vs. <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link></li>
                        <li>Pelea en Peso Gallo: <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link> vs. <b>Aiemann Zahabi</b></li>
                        <li>Pelea en Peso Pesado: <b>Josh Hokit</b> vs. <b>Derrick Lewis</b></li>
                        <li>Pelea en Peso Ligero: <Link href='/peleadores/mauricio-ruffy'>Mauricio Ruffy</Link> vs. <Link href='/peleadores/michael-chandler'>Michael Chandler</Link></li>
                        <li>Pelea en Medio: <b>Bo Nickal</b> vs. <b>Kyle Daukaus</b></li>
                        <li>Pelea en Peso Pluma: <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> vs. <b>Steve García</b></li>
                    </ul>
                    <h2>¿Cómo Será el UFC en la Casa Blanca?</h2>
                    <p>Será un evento histórico, siendo el primer evento de artes marciales mixtas en tener lugar en los terrenos presidenciales de los Estados Unidos de América. Se hará en conmemoración de los 250 años de la Declaración de la Independencia de EE.UU. organizándose el 14 de junio en lugar del 4 de julio, por temas logísticos.</p>
                    <p>La fecha del 14 de junio fue elegida además por coincidir con el cumpleaños 80 del presidente de los Estados Unidos Donald Trump, quien estará presente en el evento durante la cartelera, además, de ser una fecha que también coincide con el Día de la Bandera para EE.UU. Esta fecha y evento cuenta además con la curiosidad de que no se hará un día sábado como nos tiene acostumbrados la UFC, sino que será un día domingo. </p>
                    <h3>Organización y Logística: </h3>
                    <ul>
                        <li><b>Lugar Principal: </b> El octágono donde pelearán los luchadores estará ubicado en el South Lawn (el jardín sur de la Casa Blanca), donde se instalará un octágono personalizado para este evento específico.</li>
                        <li><b>Espectadores: </b> Estará limitado a unos 4300-5000 espectadores alrededor del octágono, bastante menos de lo habitual debido a las medidas estrictas de seguridad que implica organizar un evento de esta magnitud. El gobierno federal le otorgó la clasificación SEAR 1, la más alta posible. No habrá venta de entradas al público general, y solamente podrán estar presentes invitados especiales por Donald Trump, Dana White o Ari Emanuel (El CEO de TKO), además de alrededor de 1000 miembros de las fuerzas armadas. </li>
                        <li><b>Área Pública Masiva: </b> En El Ellipse (parque que está literalmente enfrente a la Casa Blanca) se instalarán pantallas gigantes para que la gente pueda ver de forma gratuita el evento estando apenas a unos pocos metros de la acción. Se repartirán aldedor de 80.000-100.000 boletos gratuitos para quienes ver el evento en la zona. </li>
                        <li><b>Fan Fest: </b> El día anterior en El Ellipse se hará el pesaje ceremonial, habrá conciertos, meet & greets, y otras actividades interactivas a las que los fans podrán acudir presentando un ticket gratuito por solicitud. </li>
                        <li><b>Presupuesto: </b> Se estima que la UFC se va a gastar más de 60 millones de dólares, cubriendo ellos mismo la totalidad del evento, sin usar dinero de los contribuyentes. Además la empresa <b>Crypto.com</b> pondrá $1 millón de dólares para los bonos por desempeño. </li>
                    </ul>
                    <p>Como dato adicional, parece que por temas regulatorios, los récords de los peleadores podrían no contar oficialmente, por lo que una victoria o una derrota de cualquier peleador podría no sumar oficialmente para la comisión atlética de DC. </p>
                    <h2>¿Donde Ver el UFC Casa Blanca?</h2>
                    <p>A lo largo de todo el continente de América, se podrá ver a través de la transmisión en vivo de Paramount+. Además algunas peleas preliminares podrán verse de manera gratuita a través de CBS. </p>
                    <h2>Entrada de los Peleadores en el UFC Freedom 250</h2>
                    <p>Los peleadores de la pelea estelar y coestelar ya tuvieron una reunión en el Salón Oval de la Casa Blanca con el presidente Donald Trump para ir promocionando la pelea, allí mostraron un cinturón personalizado de UFC con la bandera de Estados Unidos, que pareciera será entregado aquella noche. </p>
                    <p>Además, el propio Dana White ha mencionado que existe la posibilidad de que en la entrada de los peleadores, inicien la caminata al octágono desde el Despacho Oval, o desde los interiores de la Casa Blanca hacia el jardín donde se hará la pelea. </p>
                    <h2>Conclusión</h2>
                    <p>En resumen, el domingo 14 de junio seremos testigos de un evento histórico, tanto deportiva como políticamente. Será de esos eventos de la UFC que sólo se hacen una vez en la vida, como lo fue en su momento el evento en <b>La Esfera</b>, y debido a la magnitud del evento los ojos del mundo estarán puestos en este deporte que tanto nos gusta. </p>
                    <p>Todo esto sin ni siquiera hablar del aspecto deportivo, que nos traerá una nueva pelea de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, y la busqueda de la hazaña por parte de <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que intentará convertirse en el primer triple campeón en la historia de la UFC, hito que de conseguir lo pondría en la discusión sobre le mejor de la historia.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}