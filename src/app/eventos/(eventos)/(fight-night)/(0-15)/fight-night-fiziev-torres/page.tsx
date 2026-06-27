import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/fiziev-torres.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Baku: ¡Rafael Fiziev vs Manuel Torres!',
    description: 'Noche de UFC en Baku, Azerbaiyán, con Rafael Fiziev enfrentando a Manuel Torres en la pelea estelar y Shara Magomedov enfrentando a Michel Pereira en la coestelar. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffiziev-torres.e56c09e9.webp&w=828&q=65',
        title: 'UFC Baku: ¡Rafael Fiziev vs Manuel Torres!',
        description: 'Noche de UFC en Baku, Azerbaiyán, con Rafael Fiziev enfrentando a Manuel Torres en la pelea estelar y Shara Magomedov enfrentando a Michel Pereira en la coestelar. ',
        url: 'https://fullmma.org/eventos/fight-night-fiziev-torres'
    }
}

export default function FizievTorres () {
    return(
        <main>
            <ArticleHero title='UFC Baku: ¡Rafael Fiziev vs Manuel Torres!' subtitle='¡Shara Magomegov vs Michel Pereira! ¡Kaan Ofli Somete a Javier Reyes en el Primer Asalto!' image={hero} date='2026-06-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en horario especial en este evento organizado en Baku, Azerbaiyán, que tendrá como protagonista al peleador local <b>Rafael Fiziev</b>, enfrentando al mexicano <b>Manuel Torres</b> en una pelea que puede perfilar el futuro de la división de peso ligero. </p>
                    <p>Por si fuera poco, en la cartelera coestelar estará peleando nuevamente el pirata <Link href='/peleadores/shara-magomedov'>Shara Bullet Magomedov</Link>, enfrentando la brasileño <b>Michel Pereira</b> en la que promete ser la pelea de la noche. Y finalmente, los fans de latinoamerica podremos ver al colombiano <b>Javier Reyes</b> en su segundo combate en la UFC enfrentar al australiano <b>Kaan Ofli</b> en un combate en peso pluma, luego de lo que fue su debut por nocaut. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Tahir Abdullayev Noquea a Jefferson Nascimento en el Primer Asalto</h2>
                    <p>Victoria del luchador local de Azerbaiyán <b>Tahir Abdullayev</b>, quien pese a sufrir los 2 primeros asaltos, siendo derrotado claramente, fue capaz de reponerse en el tercer y último asalto, conectando de manera más efectiva, consiguiendo un derribo para castigar a su rival a golpes, y con la pelea finalmente siendo parada de forma cuestionable por parte del árbitro cuando su rival brasileño <b>Jefferson Nascimento</b> estaba siendo recibiendo golpes. De esta forma el local gana la primer pelea de la noche en su debut por TKO en el tercer asalto. </p>
                    <h2>Jean Matsumoto Derrota a Bekzat Almakhan por Decisión Unánime</h2>
                    <p>Gran victoria para el brasileño <b>Jean Matsumoto</b>, quien a pesar de arrancar el combate de forma complicada, recibiendo bastantes golpes en el primer asalto y perdiéndolo, fue capaz de reponerse en los siguientes asaltos, consiguiendo dominar claramente a su rival con el striking y finalmente llevándose una merecida victoria por decisión unánime. </p>
                    <h2>Daniil Donchenko Noquea a Theodor Berggren en el Segundo Asalto</h2>
                    <p>Espectacular victoria para el ucraniano <b>Daniil Donchenko</b>, quien demostró tener un striking sobresaliente, dominando completamente a su rival de principio a fin, conectando una cantidad de golpes al cuerpo impresionantes y unas patadas a la pierna que dejaron muy débil su rival sueco para el segundo asalto, consiguiendo el nocaut finalmente en el segundo round cuando sería capaz de conectar una patada a la cabeza que sentaría a su rival. De esta manera el ucraniano consigue su tercer victoria consecutiva en la UFC por TKO en el segundo asalto. </p>
                    <h2>Kaan Ofli Somete a Javier Reyes en el Primer Asalto</h2>
                    <p>Tremenda finalización del australiano <b>Kaan Ofli</b>, quien luego de conectar un golpe que tumbaría en el suelo al colombiano <b>Javier Reyes</b>, buscaría de todas las maneras posibles finalizarlo por nocaut, golpeándolo hasta cansarse, hasta que finalmente podría conectar un kata katami para someter al sudamericano, quien se vió obligado a tapear en el primer asalto. </p>
                    <h2>Nursulton Ruziboev Somete a Andrey Pulyaev en el Primer Asalto</h2>
                    <p>Brutal sumisión del uzbeko <b>Nursulton Ruziboev</b> al luchador ruso <b>Andrey Pulyaev</b>, consiguiendo un derribo rápido y metiéndose en su espalda durante todo el combate hasta que finalmente pudo conectarle una sumisión que terminaría desmayando al luchador ruso, debido a que el árbitro no fue capaz de ver bien el rostro del luchador. De esta forma Ruziboev consigue la cuarta finalización y la segunda sumisión de la noche. </p>
                    <h2>Abdul Rakhman Yakhyaev Noquea de un Sólo Golpe a Julius Walker</h2>
                    <p>Increíble lo que acabamos de presenciar, con el turco <b>Abdul Rakhman Yakhyaev</b> consiguiendo tumbar a su rival americano en apenas el primer golpe que conectó ni bien comenzó la pelea, necesitando sólo de unos golpes más en el suelo para que el árbitro dé por finalizada la pelea, dando como ganador a Yakhyaev por TKO en el primer asalto. </p>
                    <h2>Farman Hasanov Derrota a Eric Nolan por Decisión Unánime</h2>
                    <p>Gran victoria para el luchador local <b>Farman Hasanov</b>, quien dominó con su lucha de principio a fin al estadounidense <b>Eric Nolan</b>, derribándolo una y otra vez, maneteniéndolo en el suelo y apenas recibiendo daño cuando la pelea se mantuvo de pie. De esta manera el luchador de Azerbaiyán debuta en la UFC con victoria por decisión unánime, y extiende su récord invicto a 6-0 en esta última pelea preliminar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Abus Magomedov Somete a Michal Oleksiejczuk en el Primer Asalto</h2>
                    <p>Espectacular manera de iniciar esta cartelera estelar, con el alemán <b>Abus Magomedov</b> conectando un codazo brutal en la cabeza de su rival polaco, y finalizando yendo al suelo con Michal para conectar una guillotina letal que acabaría durmiendo a su rival. De esta manera Abus Magomedov se lleva la victoria por sumisión en el primer asalto. </p>
                    <h2>Ikram Aliskerov Derrota a Brunno Ferreira por Decisión Unánime</h2>
                    <p>Muy buena pelea la que acabamos de ver, muy competitiva, con el ruso <b>Ikram Aliskerov</b> siendo el claro ganador del combate, luego de mostrar sólido mientras la pelea se mantuvo de pie, con un buen striking que le permite competir con cualquiera, y siendo capaz de derribar a su rival brasileño <b>Brunno Ferreira</b> en todos los asaltos, manteniéndolo a ras de lona y controlándolo en el suelo la mayor parte del tiempo. De esta forma el ruso Aliskerov se lleva la victoria por decisión unánime luego de ganar todos los asaltos. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}