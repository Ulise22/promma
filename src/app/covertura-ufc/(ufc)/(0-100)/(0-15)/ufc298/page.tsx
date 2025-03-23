import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/0-15/ufc298_hero.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export default function UFC298 () {
    return(
        <main>
            <ArticleHero title='UFC 298: ¡Ilia Topuria noquea a Volkanovski y Tenemos Nuevo Campeón Español!' subtitle='En una noche inolvidable para el pueblo español y georgiano, Ilia Topuria hace historia acabando con el reinado de años que llevaba implatando Alexander Volkanovski' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de Peso Pluma de UFC</h2>
                    <p>Luego de una previa en la que <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> había asegurado que finalizaría al ya ex-campeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, muchos de los espectadores más neutrales o con menos fanatismo por el español, dudaban de la capacidad del peleador para respaldar todas sus palabras con acciones en el octagono, sin embargo, Ilia calló bocas y despejó todas las dudas al momento de poner un pie en el octagono.</p>
                    <p>Habiendo un primer asalto bastante igualado, donde parecía que ambos peleadores se estaban midiendo, con Volkanovski intentando conectar las high-kicks y conectando varios jabs, con un Ilia sorprendiendo con un par de leg-kicks, el resultado de la pelea se terminó definiendo en el segundo asalto, cuando en una excelente combinación de golpes, Ilia conecta esa mano derecha en la cabeza de Volkanovski, poniéndole a dormir instantáneamente.</p>
                    <p>Sólo el tiempo dirá que les espera en el futuro a ambos peleadores. Volkanovski por su parte, ya ha pedido una revancha inmediata para recuperar su cinturón, confensando que incluso está dispuesto a ir a pelear a España con tal de conseguir dicho objetivo. Ilia Topuria, en su lugar, ni bien terminó la pelea llamó a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> para pelear en España en lo que sería su primera defensa del título, sin embargo, en la conferencia de prensa posterior a la pelea, se mostró abierto a aceptar una revancha con Volkanovski en caso de hacerse en España.</p>
                    <p>En conclusión, sin importar cuál sea el próximo rival de Topuria, lo que está claro es que un evento de UFC organizado en España está más que garantizado mientras Ilia continue siendo el campeón.</p>
                    <h2>Robert Whittaker Vence por Decisión Unánime a Paulo Costa</h2>
                    <p>En lo que fue una de las mejores peleas de la noche, vimos como tanto <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> como Paulo Costa se sacaron chispas, dando un verdadero espectáculo al público. En un combate donde parecía que el brasileño buscaba dar los golpes más potentes en la busqueda de una finalización, y con un Robert Whittaker que se mostró más técnico y golpeando con mayor volumen que su contrincante.</p>
                    <p>Aunque se vió a un Paulo Costa bastante rápido y en buena forma física, golpeando con rapidez y absorbiendo bien los golpes, después de casi 2 años de inactividad, luego de los 3 asaltos, el combate finalmente terminó en una victoria por decisión unánime para el peleador australiano Robert Whittaker.</p>
                    <h2>Ian Garry Derrota a Geoff Neal y se Mantiene Invicto</h2>
                    <p>Esta fue quizás una de las peleas más aburridas de la noche, donde, aunque los protagonistas de dicho combate habían prometido sangre, terminamos siendo testigos de una pelea bastante pobre donde especialmente <Link href='/peleadores/ian-garry'>Ian Garry</Link> buscaba mantener la distancia y evitar el intercambio directo de golpes. Finalmente luego de los 3 asaltos, los jueces dieron por ganador al irlandes, que continua siendo invicto.</p>
                    <h2>Merab Dvalishvili Derrota a Henry Cejudo por Decisión</h2>
                    <p>En una pelea entretenida donde se vió a un muy buen Henry Cejudo en el primer asalto, vimos al georgiano <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> ir creciendo a medida que transcurría el combate, al punto de que luego de los 3 asaltos de la pelea, se terminó consagrando como el ganador de la misma.</p>
                    <p>Demostrando luego de esta victoria contra otro ex-campeón de los Peso Gallo, que practicamente no tiene otro rival en la división que le pueda hacer frente.</p>
                    <h2>¡Amanda Lemos Derrota a Mackenzie Dern en la Pelea de la Noche!</h2>
                    <p>En el que era el único combate femenino de la cartelera estelar y preliminar, es donde nos encontraríamos con la que sin dudas es la pelea de la noche, donde la experimentada brasileña <b>Amanda Lemos</b> lograría imponerse por sobre la estadounidense <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link> en lo que fue un combate bastante cerrado, logrando ganarle sólo 2 de los 3 asaltos a la luchadora americana. </p>
                    <p>De esta manera la brasileña volvería a la senda de la victoria, luego de lo que fue su derrota por el campeonato de peso paja femenina ante la luchadora china <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>. Por su parte, la estadounidense con esta pelea acumula 2 derrotas consecutivas, dado que venía de una reciente derrota en noviembre de 2023 ante la también brasileña <b>Jéssica Andrade</b>, quien la noqueó en el segundo asalto. De igual manera, con la actuación que ambas luchadoras dieron esta noche, se convirtieron en grandes merecedoras del bono de $50k. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}