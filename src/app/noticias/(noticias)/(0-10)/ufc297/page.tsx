import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/noticias/heros/0-10/ufc297_hero.jpg'
import raquelVsilva from '@/assets/peleadores__images/mujeres/mayra-bueno-silva/mayra_careo.jpg'
import Image from 'next/image'

export default function UFC297 () {
    return(
        <main>
            <ArticleHero title='UFC 297: ¡Dricus Du Plessis Nuevo Campeón de Peso Medio Por decisión dividida!¡Raquel Pennington Nueva Campeona de Peso Gallo Femenino!' subtitle='En un combate igualado, el sudafricano Dricus Du Plesis se convierte en el nuevo campeón de la división de Peso Mediano de la UFC por decisión dividida. Raquel Pennington ganó el campeonato vacante de Peso Gallo femenino' image={hero} date={null} author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Dricus Du Plessis es el Nuevo Campeón de Peso Medio de UFC</h2>
                    <p>En un combate que se vió muy igualado entre <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> y <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, quien luego de pelearse los 5 asaltos se terminó llevando la victoria por decisión dividida fue el sudafricano. </p>
                    <p>Fue sin duda un combate emocionante y muy entretenido de ver, en la previa tanto Strickland como Du Plessis había hablado de &quot;ir a una guerra&quot; en la pelea, y sin duda fue eso lo que vió, donde el transcurso de esa &quot;guerra&quot; fue mayoritariamente de pie, donde ambos se pegaron de lo lindo, aunque con unos cuantos derribos por parte del nuevo campeón hacia Strickland, que ayudaron a puntuar en la tarjeta de los jueces para terminar ganando.</p>
                    <p>Sin embargo, puede haber algo de polémica sobre la decisión que tomaron los jueces, ya que al ser un combate tan cerrado e igualado, da mucho lugar a que algunos piensen que en realidad Sean mereció retener el título, especialmente por lo dominante que fue en el primer y quinto asalto, donde con su jab supo mantener la distancia y golpear sin ser golpeado. El segundo asalto quizá sea el de la discordia, al ser más igualado de todos, en caso de que los jueces hubieran interpretado que Strickland lo ganó, como desde este humilde espacio lo hacemos, se podría haber llevado la pelea tranquilamente.</p>
                    <p>Por su parte el nuevo campeón, al ser consultado sobre lo que venía después de haberse hecho con el cinturón, reconoció que le gustaría defenderlo contra el histórico de la división <b>Israel Adensanya</b>, con quien ya había tenido beef en la previa de su combate que finalmente no se dió.</p>
                    <h2>¡Raquel Pennington Nueva Campeona de Peso Gallo Femenino por Decisión!</h2>
                    <p>En un combate que se vió bastante igualado por el cinturón de Peso Gallo de la <Link href='/promotoras/ufc'>UFC</Link>, <Link href='/mujeres/raquel-pennington'>Raquel</Link> se terminó imponiendo por decisión unánime de los jueces.</p>
                    <p>Pese a que en el primer asalto se había impuesto claramente la peleadora brasileña, a partir del segundo, siguiedo las instrucciones de su esquina, es que Raquel pudó comenzar a dar vuelta la historia, ganando tanto por abajo, donde estuvo por someter a <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link> en el último asalto, como especialmente por arriba, donde con unos buenos golpes fue capaz de imponerse para convertirse en la nueva campeona de la división, luego de que el retiro de <b>Amanda Nunes</b> dejara el cinturón vacante.</p>
                    <Image className={styles.article__image} src={raquelVsilva} alt='Careo entre la Campeona de UFC Raquel Pennington y Mayra Bueno Silva' />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}