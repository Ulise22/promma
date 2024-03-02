import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/ufc298_hero.webp'
import Image from 'next/image'

export default function UFC298 () {
    return(
        <main>
            <ArticleHero title='UFC 298: ¡Ilia Topuria noquea a Volkanovski y Tenemos Nuevo Campeón Español!' subtitle='En una noche inolvidable para el pueblo español y georgiano, Ilia Topuria hace historia acabando con el reinado de años que llevaba implatando Alexander Volkanovski' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de Peso Pluma de UFC</h2>
                    <p>Luego de una previa en la que <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> había asegurado que finalizaría al ya ex-campeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, muchos de los espectadores más neutrales o con menos fanatismo por el español, dudaban de la capacidad del peleador para respaldar todas sus palabras con acciones en el octagono, sin embargo, Ilia calló bocas y despejó todas las dudas al momento de poner un pie en el octagono.</p>
                    <p>Habiendo un primer asalto bastante igualado, donde parecía que ambos peleadores se estaban midiendo, con Volkanovski intentando conectar las high-kicks y conectando varios jabs, con un Ilia sorprendiendo con un par de leg-kicks, el resultado de la pelea se terminó definiendo en el segundo asalto, cuando en una excelente combinación de golpes, Ilia conecta esa mano derecha en la cabeza de Volkanovski, poniéndole a dormir instantáneamente.</p>
                    <p>Sólo el tiempo dirá que les espera en el futuro a ambos peleadores. Volkanovski por su parte, ya ha pedido una revancha inmediata para recuperar su cinturón, confensando que incluso está dispuesto a ir a pelear a España con tal de conseguir dicho objetivo. Ilia Topuria, en su lugar, ni bien terminó la pelea llamó a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> para pelear en España en lo que sería su primera defensa del título, sin embargo, en la conferencia de prensa posterior a la pelea, se mostró abierto a aceptar una revancha con Volkanovski en caso de hacerse en España.</p>
                    <p>En conclusión, sin importar cuál sea el próximo rival de Topuria, lo que está claro es que un evento de UFC organizado en España está más que garantizado mientras Ilia continue siendo el campeón.</p>
                    <h2>Robert Whittaker Vence por Decisión Unánime a Paulo Costa</h2>
                    <p>En lo que fue una de las mejores peleas de la noche, vimos como tanto Robert Whittaker como Paulo Costa se sacaron chispas, dando un verdadero espectáculo al público. En un combate donde parecía que el brasileño buscaba dar los golpes más potentes en la busqueda de una finalización, y con un Robert Whittaker que se mostró más técnico y golpeando con mayor volumen que su contrincante.</p>
                    <p>Aunque se vió a un Paulo Costa bastante rápido y en buena forma física, golpeando con rapidez y absorbiendo bien los golpes, después de casi 2 años de inactividad, luego de los 3 asaltos, el combate finalmente terminó en una victoria por decisión unánime para el peleador australiano Robert Whittaker.</p>
                    <h2>Ian Garry Derrota a Geoff Neal y se Mantiene Invicto</h2>
                    <p>Esta fue quizás una de las peleas más aburridas de la noche, donde, aunque los protagonistas de dicho combate habían prometido sangre, terminamos siendo testigos de una pelea bastante pobre donde especialmente Ian Garry buscaba mantener la distancia y evitar el intercambio directo de golpes. Finalmente luego de los 3 asaltos, los jueces dieron por ganador al irlandes, que continua siendo invicto.</p>
                    <h2>Merab Dvalishvili Derrota a Henry Cejudo por Decisión</h2>
                    <p>En una pelea entretenida donde se vió a un muy buen Henry Cejudo en el primer asalto, vimos al georgiano <b>Merab Dvalishvili</b> ir creciendo a medida que transcurría el combate, al punto de que luego de los 3 asaltos de la pelea, se terminó consagrando como el ganador de la misma.</p>
                    <p>Demostrando luego de esta victoria contra otro ex-campeón de los Peso Gallo, que practicamente no tiene otro rival en la división que le pueda hacer frente.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}