import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc_casa_blanca.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Casa Blanca: ¡Ilia Topuria vs Justin Gaethje! ¡Alex Pereira vs Ciryl Gane!',
    description: "UFC en la Casa Blanca, el mayor evento de la historia de la UFC con Ilia Topuria defendiendo su cinturón ante Justin Gaethje en el UFC Freedom 250. Además Alex Pereira buscará ser el primer peleador en ganar 3 cinturones en la UFC enfrentando a Ciryl Gane. ",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc_casa_blanca.d0339f6f.webp&w=828&q=65',
        title: 'UFC Casa Blanca: ¡Ilia Topuria vs Justin Gaethje! ¡Alex Pereira vs Ciryl Gane!',
        description: "UFC en la Casa Blanca, el mayor evento de la historia de la UFC con Ilia Topuria defendiendo su cinturón ante Justin Gaethje en el UFC Freedom 250. Además Alex Pereira buscará ser el primer peleador en ganar 3 cinturones en la UFC enfrentando a Ciryl Gane. ",
        url: 'https://fullmma.org/eventos/ufc-casa-blanca'
    }
}

export default function UFCCasaBlanca () {
    return(
        <main>
            <ArticleHero title="UFC Casa Blanca: ¡La Esquina de Ilia Topuria Abandona el Combate y Justin Gaethje es Nuevo Campeón por TKO! ¡Ciryl Gane Noquea a Alex Pereira en el Segundo Asalto y es Campeón Interino Otra Vez!" subtitle='¡Sean O&apos;Malley Noquea a Aiemann Zahabi en el Segundo Asalto! ¡Josh Hokit Noquea a Derrick Lewis en el Segundo Asalto!' image={hero} date='2026-06-14' author={null} updatedDate='2026-06-15' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>¡Espectacular evento de UFC en el que tenemos esta noche! Histórica velada organizada en la <Link href="/noticias/ufc-casa-blanca">Casa Blanca</Link> con motivo de celebración de los 250 años de la Independencia de los Estados Unidos. Para eso tendremos un combate grandioso como pelea estelar, con el campeón de peso ligero y excampeón de peso pluma, el español <Link href="/peleadores/ilia-topuria">Ilia Topuria</Link> defendiendo su cinturón ante el campeón interino <Link href="/peleadores/justin-gaethje">Justin Gaethje</Link>, quien viene de ganar el interinato al derrotar al inglés <Link href="/peleadores/paddy-pimblett">Paddy Pimblett</Link>. Por si esta pelea fuera poco, el evento coestelar es como mínimo igual de épico, con la estrella brasileña <Link href="/peleadores/alex-pereira">Alex Pereira</Link> buscando hacer historia, luego de convertirse en campeón de peso medio al noquear a <Link href="/peleadores/israel-adesanya">Israel Adesanya</Link>, convertirse en campeón de peso semipesado al noquear a <Link href="/peleadores/jiri-prochazka">Jiri Prochazka</Link>, buscará ser campeón de peso pesado enfrentando al francés excampeón interino <Link href="/peleadores/ciryl-gane">Ciryl Gane</Link>.</p>
                    <p>Por si fuera poco, esta cartelera estará llena de combates impresionantes, con figuras como <Link href="/peleadores/sean-omalley">Sean O&apos;Malley</Link>, <Link href="/peleadores/diego-lopes">Diego Lopes</Link>, <Link href="/peleadores/mauricio-ruffy">Mauricio Ruffy</Link> y <Link href="/peleadores/michael-chandler">Michael Chandler</Link> estando presentes en una noche histórica para nuestro deporte. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Diego Lopes Noquea a Steve García en el Segundo Asalto</h2>
                    <p>Espectacular manera de iniciar esta histórica cartelera, con el brasileño nacionalizado mexicano <Link href="/peleadores/diego-lopes">Diego Lopes</Link> siendo capaz de dar vuelta una pelea que se le estaba complicando, perdiendo claramente el primer asalto ante el estadounidense <b>Steve García</b>, quien había conectado más golpes, pero logrando remontar de forma épica en el segundo, cuando en un intercambio de golpes caótico, salió ganando al obtener el KO que le daría la victoria, demostrando no sólo tener una mandibula de hierro que hace casi imposible noquearlo, sino también un poder en las manos peligrosísimo. De esta manera, Diego Lopes se lleva la primer victoria de la noche por la vía del nocaut. </p>
                    <h2>Bo Nickal Noquea a Kyle Daukaus en el Primer Asalto</h2>
                    <p>Espectacular victoria por la vía del nocuat para un dominante <b>Bo Nickal</b>, que hizo valer su favoritismo conectando golpes como quiso, finalmente consiguiendo el nocaut con una combinación de 2 golpes para llevarse la victoria y obtener la segunda finalización por nocaut de la noche. </p>
                    <h2>Mauricio Ruffy Noquea a Michael Chandler en el Primer Asalto</h2>
                    <p>Brillante victoria del brasileño <Link href="/peleadores/mauricio-ruffy">Mauricio Ruffy</Link>, quien fue capaz de tener paciencia y esperar su momento para conectar sus golpes letales, conectando su característica patada giratoria, para luego rematar a su rival <Link href="/peleadores/michael-chandler">Michael Chandler</Link> a golpes para llevarse la victoria por TKO en el final del primer asalto. </p>
                    <p>Además, uno de los momentos más lindos de la noche que nos deja este histórico evento, fue presenciar como el ganador del combate, Mauricio Ruffy, aprovechó la ocasión y la victoria para proponerle matrimonio a su novia, quien dijo que sí ante los ojos de toda la audiencia estadounidense. </p>
                    <h2>Josh Hokit Noquea a Derrick Lewis en el Segundo Asalto</h2>
                    <p>Brutal combate de los pesos pesados esta noche, con el joven de 28 años <b>Josh Hokit</b> demostrando que más allá de su <Link href='/articulos/josh-hokit-es-un-personaje'>personaje</Link> y de las cosas que habla, es un gran peleador con mucha inteligencia dentro del octágono. Siendo plenamente consciente de la fuerza y el poder de nocaut de su rival <b>Derrick Lewis</b>, evitó constantemente entrar en el intercambio de golpes, manteniendo la distancia, derribándolo y castigando con el ground&pound, hasta finalmente lograr la finalización en el segundo asalto con esos golpes potentes que conectaba alejándose inmediatamente para no recibir ningún contragolpe. De esta forma, <b>Josh Hokit</b> extiende su invicto a un 10-0, y se perfila como un serio contendiente al título de la división. </p>
                    <h2>Sean O&apos;Malley Noquea a Aiemann Zahabi en el Segundo Asalto</h2>
                    <p>Brutal KO del excampeón estadounidense <Link href="/peleadores/sean-omalley">Sean O&apos;Malley</Link>, quien luego de dominar el combate, ganando con contundencia el primer asalto, fue capaz de ponerle la guinda al pastel, conectando 2 manos brutales a su rival canadiense <b>Aiemann Zahabi</b>, que lo dejarían KO de forma inmediata. De esta forma, el luchador americano hace historia y se goza frente a su gente, en su país, frente a su presidente, consiguiendo un KO espectacular ante un peleador extranjero, en una victoria que podría posicionarlo como contendiente al título que tiene el ruso <Link href="/peleadores/petr-yan">Petr Yan</Link>. </p>
                    <h2>Ciryl Gane Noquea a Alex Pereira en el Segundo Asalto y es Nuevo Campeón Interino</h2>
                    <p>Brutal finalización del excampeón interino de la división <Link href="/peleadores/ciryl-gane">Ciryl Gane</Link>, quien en un gran combate le mostró al brasileño doble campeón <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> los peligros de subir de división como lo hizo. Luego de un sólido primer asalto, donde no hubo un claro dominador, Ciryl Gane inició el segundo con todo, conectando una mano potentísima que afectó demasiado al brasileño, cayendo al suelo y aferrándose a las piernas del rival para evitar caer KO. Finalmente, luego de presionar un poco más, conectó unos golpes extras que harían saber al árbitro que Alex Pereira ya estaba noqueado, pese a seguir de pie. </p>
                    <p>De esta forma, el nuevo campeón interino de la división es <Link href="/peleadores/ciryl-gane">Ciryl Gane</Link>, quien deberá ahora enfrentar en una revancha al campeón indiscutido <Link href="/peleadores/tom-aspinall">Tom Aspinall</Link> para unificar cinturones. </p>
                    <h2>La Esquina de Ilia Topuria Abandona el Combate y Justin Gaethje es Nuevo Campeón por TKO</h2>
                    <p>¡Sorpresón total en esta noche! Probablemente la mayor sorpresa en toda la historia de las MMA y de toda la UFC, cuando el doble campeón invicto <Link href="/peleadores/ilia-topuria">Ilia Topuria</Link> pierde por primera vez en su carrera ante el histórico veterano <Link href="/peleadores/justin-gaethje">Justin Gaethje</Link>, quien es un perro de pelea durísimo y que demostró porque hoy está donde está. </p>
                    <p>En un combate que se llevó al terreno que mejor le viene a Gaethje, con boxeo sucio, golpes en la corta distancia, muchas combinaciones en el clinch, fue el estadounidense quien salió ganando, quie además comenzó el combate mostrando poco respeto por el campeón español, buscándolo y golpeando desde muy temprano, sin ningún temor al poder de nocaut que tiene el Topuria. </p>
                    <p>Así pasaron 4 asaltos, con solamente el segundo siendo uno más lógico, donde vimos la mejor cara de Ilia Topuria, quien cerca estuvo de noquear y someter a su rival en varias ocasiones. Pero fuera de ese asalto, todo lo demás fue para Gaethje, que lastimó muchísimo a Topuria, dejándole completamente desfigurada la cara, al punto que se le hincharon los ojos hasta ser incapaz de ver, fue debido a esto que su esquina tiró la toalla antes de que iniciará el quinto asalto. </p>
                    <p>De esta manera Justin Gaethje se convierte en el nuevo campeón indiscutido de la UFC, sorprendiendo a propios y extraños, en la Casa Blanca, frente a su presidente, frente a su gente, y frente a su familia que estuvo ahí presente acompañándolo en lo que debe ser de las mayores sorpresas de la historia de la UFC, y el mejor combate del año. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}