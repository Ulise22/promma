import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/0-15/ufc308.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC 308',
    description: "En este eventazo de UFC en Abu Dhabi tenemos a la que quizás sea la pelea del año como evento principal, con el campeón español de peso pluma Ilia Topuria realizando su primer defensa del título ante el BMF de la UFC Max Holloway.",
    openGraph: {
        title: 'UFC 308',
        description: "En este eventazo de UFC en Abu Dhabi tenemos a la que quizás sea la pelea del año como evento principal, con el campeón español de peso pluma Ilia Topuria realizando su primer defensa del título ante el BMF de la UFC Max Holloway.",
        url: 'https://fullmma.org/covertura-ufc/ufc308'
    }
}

export default function UFC308 () {
    return(
        <main>
            <ArticleHero title="UFC 308: ¡Ilia Topuria Noquea a Max Holloway en el Tercer Asalto! ¡Khamzat Chimaev Somete a Robert Whittaker en el Primer Asalto!" subtitle='Tenemos un tremendo evento que además cuenta con el regreso al octágono de Shara Magomedov, con la pelea de Dan Ige y Lerone Murphy, y la pelea entre Ankalaev y Rakic acompañando la cartelera estelar.' image={hero} date='2024-10-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En este eventazo de UFC en Abu Dhabi tenemos a la que quizás sea la pelea del año como evento principal, con el campeón español de peso pluma <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> realizando su primer defensa del título ante el BMF de la UFC <Link href='/peleadores/max-holloway'>Max Holloway</Link>. </p>
                    <p>Además en la cartelera estelar contamos con tremendos combates que merecen la pena ver, empezando con la pelea coestelar entre el australiano <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> y el checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, que pondrá en juego su invicto al enfrentar al #3 de la división de peso medio. Además, 2 de los principales contendientes en los semipesados, como lo son <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> y <b>Aleksandar Rakic</b> se enfrentaran en busca de una oportunidad de disputar el título que actualmente ostenta <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. </p>
                    <h2>Chirs Barnett Cae Derrotado ante Kennedy Nzechukwu por TKO</h2>
                    <p>El luchador nigeriano se hizo de la victoria en el primer asalto vía TKO. En un combate que ya desde el principio parecía tener en desventaja al luchador español, que parece haberse lastimado la rodilla luego de un salto que dió antes de la pelea, Kennedy haría uso de su principal ventaja, que era la diferencia de altura y alcance que lo beneficiaba, llevándolo a desde el correcto control de la distancia, controlar y dominar la pelea. </p>
                    <p>Sin embargo, Chris Barnett se lesionó la pierna izquierda luego de querer dar una patada giratoria, dejándolo practicamente inmovil durante lo que quedó del primer asalto, manteniéndose en el lugar hasta que finalmente fue noqueado por su rival. </p>
                    <h2>Abus Magomedov Somete a Brunno Ferreira en le Tercer Asalto</h2>
                    <p>El luchador de origen Daguestaní y de nacionalidad alemana, Abus Magomedov se hace con la victoria por la vía de la sumisión en el tercera asalto. </p>
                    <p>En una pelea que fue de menos a más, donde vimos la mejor cara del brasileño en el segundo asalto, cuando fue capaz de conectar los mejores golpes al acortar la distancia, terminó siendo completamente dominado en el suelo durante el tercer asalto, al finalmente ser sometido con un triángulo de brazo para darle la victoria a Magomedov. </p>
                    <h2>¡Rebecki y Orolbai Protagonizan la Pelea de la Noche!</h2>
                    <p>En lo que fue una locura de combate, que se extendió hasta los 3 asaltos, tanto el polaco <b>Mateusz Rebecki</b> como el luchador de Kirguistán <b>Myktbek Orolbai</b> protagonizaron un combate de película, que finalmente se llevó el polaco por decisión dividida. </p>
                    <p>Durante el primer asalto fue Rebecki el que mejor se mostró, dejando el ojo de su rival hinchado al punto de que casi se detiene el combate ahí. Estando lastimado y teniendo que dar todo si quería ganar, Orolbai fue a buscar el combate en el segundo asalto, llegando a provocarle un tremendo corte por debajo de la ceja a su rival. </p>
                    <p>Finalmente durante el tercer asalto, que fue el que determinó el resultado de esta pelea, el luchador polaco sería capaz de conectar un golpe que dejaría en el piso a su rival, buscando luego llevarse el asalto mediante ground and pound. Aún así, fue el luchador de Kirguistán el que mejor terminó el asalto, siendo capaz de conectar unos golpes que dejaron muy lastimado a su rival. El resultado final terminó por ser una victoria para Rebecki, que por decisión dividida fue el ganador de esta pedazo de pelea. </p>
                    <h2>Geoff Neal Vence a Rafael Dos Anjos por TKO en el Primer Asalto</h2>
                    <p>En una pelea que no duró mucho, el luchador estadounidense sería capaz de derrotar al excampeón de peso ligero, al brasileño <b>Rafael Dos Anjos</b> vía TKO, al primero haber logrado conectar un buen golpe que tiraría al suelo a su rival, para luego hacerse con la victoria por nocaut técnico al su rival sufrir una lesión en la pierna que no le permitiría continuar con la pelea.</p>
                    <h2>Shara Magomedov Noquea a Armen Petrosyan en el Segundo Asalto</h2>
                    <p>El daguestaní logra una espectácular victoria por nocaut con un codazo en el segundo asalto en lo que fue una tremenda pelea.</p>
                    <p>En lo que venía siendo una maravilla de combate, como nos tiene acostumbrados <Link href='/peleadores/shara-magomedov'>Shara Bullet</Link>, donde ambos luchadores consiguieron conectarse mutuamente, conectando low-kicks, patadas a la zona media del cuerpo y golpes a la cabeza, finalmente terminaría de la forma más impresionante posible, con un doble spinning-backfist que noquearía a su rival terminando el segundo asalto de la pelea. </p>
                    <h2>Lerone Murphy Derrota a Dan Ige por Decisión Unánime</h2>
                    <p>En lo que fue otra pelea entretenida en la cartelera estelar, con el primer asalto siendo a favor del estadounidense, el segundo para el inglés, y finalmente el tercero para Lerone Murphy, que sigue invicto en su carrera.</p>
                    <p>De esta manera, el luchador inglés extendiende su récord a 15-0-1, siguiendo invicto con una peleada, pero al fin y al cabo merecida, victoria por decisión unánime ante el veterano de la división <b>Dan Ige</b>. </p>
                    <h2>Magomed Ankalaev vs Aleksandar Rakic</h2>
                    <p>En una pelea que fue bastante cerrada, donde lo que predominó fue el striking, quien finalmente se llevó la pelea fue <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link>, quien fue de menos a más a lo largo del combate, mostrando tener cierto poder en sus manos, al conectar golpes que se notó que hicieron mella en su rival.</p>
                    <p>Todos los jueces clasificaron la pelea 29-28, dando como ganador por decisión unánime al luchador daguestaní. Quien luego de su pelea, no dudo en retar al actual campeón de la división de peso semipesado <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. Queda esperar que es lo que hace la UFC, y ver si le da pelea titular al peleador ruso. </p>
                    <h2>Khamzat Chimaev Somete a Robert Whittaker en el Primer Asalto</h2>
                    <p>En una locura de performance, el checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> logra una impresionante victoria por sumisión en el primer asalto, luego de conectar un mataleón que obligaría a <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> a tapear, dándole la vitoria al luchador ruso. </p>
                    <h2>Ilia Topuria Hace Historia y Noquea a Max Holloway</h2>
                    <p>El campeón hispano <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> hace historia al convertirse en el primer luchador en noquear a <Link href='/peleadores/max-holloway'>Max Holloway</Link> en el tercer asalto de la pelea, completando de esta manera su primer defensa exitosa del título. </p>
                    <p>Tal y como lo prometió, consiguió llevarse la victoria por la vía del nocaut, siendo el primero que consigue esto ante el luchador hawaiano. Una completa locura lo conseguido por el georgiano. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}