import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc297.jpg'
import raquelVsilva from '@/assets/peleadores__images/mujeres/0-10/mayra-bueno-silva/mayra_careo.jpg'
import Image from 'next/image'

export default function UFC297 () {
    return(
        <main>
            <ArticleHero title='UFC 297: ¡Dricus Du Plessis Nuevo Campeón de Peso Medio Por decisión dividida!¡Raquel Pennington Nueva Campeona de Peso Gallo Femenino!' subtitle='En un combate igualado, el sudafricano Dricus Du Plesis se convierte en el nuevo campeón de la división de Peso Mediano de la UFC por decisión dividida. Raquel Pennington ganó el campeonato vacante de Peso Gallo femenino' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos un muy buen evento de <Link href='/articulos/ufc'>UFC</Link> en Canadá, que nos trae como peleas estelar y coestelar 2 cinturones de por medio, siendo la pelea entre el campeón de peso medio <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, y el retador sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> el evento principal. Además, el cinturón de peso gallo femenino que había quedado vacante, tendrá nuevo dueño luego de la pelea entre la estadounidense <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link> y la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link></p>
                    <h2>Dricus Du Plessis es el Nuevo Campeón de Peso Medio de UFC</h2>
                    <p>En un combate que se vió muy igualado entre <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> y <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, quien luego de pelearse los 5 asaltos se terminó llevando la victoria por decisión dividida fue el sudafricano. </p>
                    <p>Fue sin duda un combate emocionante y muy entretenido de ver, en la previa tanto Strickland como Du Plessis había hablado de &quot;ir a una guerra&quot; en la pelea, y sin duda fue eso lo que vió, donde el transcurso de esa &quot;guerra&quot; fue mayoritariamente de pie, donde ambos se pegaron de lo lindo, aunque con unos cuantos derribos por parte del nuevo campeón hacia Strickland, que ayudaron a puntuar en la tarjeta de los jueces para terminar ganando.</p>
                    <p>Sin embargo, puede haber algo de polémica sobre la decisión que tomaron los jueces, ya que al ser un combate tan cerrado e igualado, da mucho lugar a que algunos piensen que en realidad Sean mereció retener el título, especialmente por lo dominante que fue en el primer y quinto asalto, donde con su jab supo mantener la distancia y golpear sin ser golpeado. El segundo asalto quizá sea el de la discordia, al ser más igualado de todos, en caso de que los jueces hubieran interpretado que Strickland lo ganó, como desde este humilde espacio lo hacemos, se podría haber llevado la pelea tranquilamente.</p>
                    <p>Por su parte el nuevo campeón, al ser consultado sobre lo que venía después de haberse hecho con el cinturón, reconoció que le gustaría defenderlo contra el histórico de la división <b>Israel Adensanya</b>, con quien ya había tenido beef en la previa de su combate que finalmente no se dió.</p>
                    <h2>¡Raquel Pennington Nueva Campeona de Peso Gallo Femenino por Decisión!</h2>
                    <p>En un combate que se vió bastante igualado por el cinturón de Peso Gallo de la <Link href='/articulos/ufc'>UFC</Link>, <Link href='/mujeres/raquel-pennington'>Raquel</Link> se terminó imponiendo por decisión unánime de los jueces.</p>
                    <p>Pese a que en el primer asalto se había impuesto claramente la peleadora brasileña, a partir del segundo, siguiedo las instrucciones de su esquina, es que Raquel pudó comenzar a dar vuelta la historia, ganando tanto por abajo, donde estuvo por someter a <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link> en el último asalto, como especialmente por arriba, donde con unos buenos golpes fue capaz de imponerse para convertirse en la nueva campeona de la división, luego de que el retiro de <b>Amanda Nunes</b> dejara el cinturón vacante.</p>
                    <h2>¡Neil Magny Noquea a Mike Malott en el Tercer Asalto!</h2>
                    <p>En el último combate previo a las peleas titulares, el estadounidense Neil Magny logra noquear al canadiense <b>Mike Malott</b> en el tercer asalto de la pelea.</p>
                    <p>De manera, el luchador estadounidense logra volver a la senda de la victoria, dado que llegaba a este combate luego de perder contra el joven irlandés <Link href='/peleadores/ian-garry'>Ian Garry</Link> por decisión unánime en su pelea en agosto de 2023 en el <b>UFC 292</b>. </p>
                    <h2>Chris Curtis Logra Llevarse la Pelea por Decisión Dividida ante Barriault</h2>
                    <p>En un combate en el que el estadounidense hacía de visitante, enfrentando al canadiense <b>Marc-André Barriault</b>, lograría llevarse la pelea por decisión dividida, aunque sería algo controversial la visión del juez que lo vió perder, puesto que los otros 2 jueces que lo dieron de ganador, lo vieron ganar y dominar los 3 asaltos que que duró la pelea. De esta manera, con esta victoria el luchador americano logra extender su récord a 31-10 (1), cortando con una racha de 2 peleas sin lograr la victoria. </p>
                    <h2>Evloev Derrota a Arnold Allen</h2>
                    <p>El luchador ruso <b>Movsar Evloev</b> es capaz de mantener el invicto al conseguir que una pelea que se extendió hasta los 3 asaltos, siendo bastante cerrada, se la acabaran dando los jueces por decisión unánime, derrotando al peleador inglés <b>Arnold Allen</b>, logrando extender su récord profesional de esta manera a 18-0. Con esta victoria, ya son 8 las que suma en total en la UFC, siendo la última la conseguida ante el brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}