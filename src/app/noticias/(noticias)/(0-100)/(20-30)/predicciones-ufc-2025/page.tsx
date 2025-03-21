import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/campeones_ufc2025.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Predicciones de UFC 2025',
    description: "Ya termina el año 2024, y estando a tan sólo unos pocos días de que comience el 2025, es que decidí hacer mi predicción sobre quienes creo que van a ser los nuevos campeones de la UFC el próximo año.",
    openGraph: {
        title: 'Predicciones de UFC 2025',
        description: "Ya termina el año 2024, y estando a tan sólo unos pocos días de que comience el 2025, es que decidí hacer mi predicción sobre quienes creo que van a ser los nuevos campeones de la UFC el próximo año.",
        url: 'https://fullmma.org/noticias/mejores-eventos-ufc-2024'
    }
}

export default function PrediccionesUFC2025 () {
    return(
        <main>
            <ArticleHero title='Predicción UFC: Todos los campeones del 2025' subtitle="Una predicción sobre quienes creo que serán los nuevos campeones para el final del año 2025" image={hero} date='2024-12-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Ya termina el año 2024, y estando a tan sólo unos pocos días de que comience el 2025, es que decidí hacer mi predicción sobre quienes creo que van a ser los nuevos campeones de la UFC el próximo año, y quienes creo que van a ser capaces de retener sus cinturones. </p>
                    <p>Primero quiero hacer 2 aclaraciones: lo primero es que esta es la primera predicción que hago en mi vida, por lo que espero estar equivocado en cada uno de los peleadores que puse acá. La segunda es que no sé que peleadores van a subir de división, y si hay alguno que va a conseguir un cinturón de una división ajena a la suya, por lo que, aunque intenté tener esto en cuenta, partí de la base de que ni <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> ni <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, ni ningún otro campeón se va a mover de donde está. </p>
                    <h2>Peso Paja: Alexandre Pantoja</h2>
                    <p>Comenzando con la división masculina más liviana de la compañía, creo que el brasileño <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link> será capaz de retener su cinturón un año más. Luego de lo que fue su defensa del título ante el japonés Kai Asakura en el último evento numerado del año, no creo que vuelva a pelear hasta mediados del próximo año, y no veo a nadie en la división en estos momentos siendo capaz de derrotarlo. Aunque no me parece imposible que pierda ante algún rival de la división, estando dispuesto incluso a poner una ficha en que quizás <b>Brandon Moreno</b> pueda ser capaz de ganarle en una hipotética trilogía, creo que Pantoja ha demostrado en varias ocasiones porque es el campeón, y por el momento lo veo superior a todos sus rivales. </p>
                    <h2>Peso Gallo: Merab Dvalishvili</h2>
                    <p>Una división que es difícil de predecir es la de peso gallo. Sin embargo, creo que el actual campeón <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> será capaz de retener su cinturón en el 2025. El camino que ha tenido que atravesar para convertirse en campeón no ha sido nada sencillo para el georgiano, teniendo que derrotar a 4 campeones para alcanzar él el cinturón. </p>
                    <p>Ya tiene confirmada su primera defensa para enero del 2025 en el UFC 311, teniendo que enfrentar al daguestaní <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, quien actualmente está invicto y posee un récord de 18-0. Sin embargo, aunque creo que tiene una pelea muy complicada por delante, pienso que su lucha y su físico le serán suficiente para sacar el combate adelante, siendo capaz de retener el cinturón. Más allá de Umar, me cuesta mucho visualizar a alguno de los contendientes ganando ante Merab.  </p>
                    <h2>Peso Pluma: Ilia Topuria</h2>
                    <p>Quizás esta sea la más fácil de predecir. <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> ya ha ganado a los 2 mejores peleadores que tenía para ofrecer la división de peso pluma. No es sólo que les ganó tanto a <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> como a <Link href='/peleadores/max-holloway'>Max Holloway</Link>, sino que los destruyó, finalizó por KO a ambos de manera aplastante. No creo que ninguno este a la talla del español como para destronarlo, ni <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, ni <b>Movsar Evloev</b>, ni ningún otro.</p>
                    <p>Lo que puede complicar esta predicción es que finalmente Topuria se mueva de división e intente pelear en las 155lbs. Habría que ver si en caso de realizar este movimiento deja su título vacante o no, pero esto ya depende de lo que terminen decidiendo el mismo peleador como la UFC. De igual forma lo pongo como campeón de peso pluma porque no creo que la compañía le ponga las cosas fáciles para moverse de división. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/CuN2kRgh8vs?si=gzkLV7spbPuoNNUq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Peso Ligero: Islam Makhachev</h2>
                    <p>En peso ligero creo que <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> seguirá reinando en peso ligero. Tiene por delante al igual que Merab, una pelea para enero del 2025 en el UFC 311 ante el armenio <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, en la que creo que será su pelea más complicada hasta ahora. </p>
                    <p>Pese a esto, igual creo que Makhachev terminará ganando. Aunque <b>Dana White</b> afirmó que en caso de ganarle a Tsarukyan, le permitiría a Islam pelear por el doble cinturón, no creo que deje este vacante, por lo que igual seguiría siendo campeón de peso ligero, y por declaraciones del propio peleador, veo difícil que intente subir de división mientras <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link> siga siendo campeón ahí. </p>
                    <h2>Peso Welter: Shavkat Rakhmonov</h2>
                    <p>En la primera división donde veo al cinturón cambiar de manos es en peso welter, con <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link> siendo el nuevo campeón. Con un récord invicto de 19-0, con 18 de esas victorias siendo por finalización, me parece que, si hay un peleador capaz de arrebatarle el cinturón a un peleador tan complicado como <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, ese es Rakhmonov. </p>
                    <p>Si bien en su última pelea en el <Link href='/covertura-ufc/ufc310'>UFC 310</Link>, <Link href='/peleadores/ian-garry'>Ian Garry</Link> lo hizo ver vulnerable, siendo esta la única victoria en el que el luchador de Kazajistán no pudo finalizar. Shavkat sigue siendo de los mejores peleadores que hay en 170lbs en este momento, por lo que creo que la habilidad y la calma que demostró tener, van a ser suficientes para acabar el año con el cinturón de la división. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/vh9I68QLdZY?si=u6K5uVYw0ZqWZPHi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Peso Medio: Khamzat Chimaev</h2>
                    <p>Otra división en la que me parece que el cinturón cambiará de manos es en la de 185lbs, con el checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> como nuevo campeón. Su última victoria por sumisión en el primer asalto ante el excampeón <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, dejaron el hype por las nubes, y la dejó la sensación de que este peleador, cuyo récord actualmente es de 14-0, es realmente invencible. </p>
                    <p>Ya esta programada una pelea por el cinturón de esta división entre el actual campeón <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> y el retador estadounidense <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>. Independientemente de como acabe este combate, Chimaev tiene una lucha tan buena que da la sensación de que es capaz de finalizar a ambos, sin importar cual de los 2 termine siendo su rival. </p>
                    <h2>Peso Semipesado: Alex Pereira</h2>
                    <p>En peso semipesado yo no veo ningún cambio, con <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> permaneciendo como el campeón de la división. Aunque no está confirmado, en algún momento deberá enfrentar al contendiente #1 que es <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link>, y aunque da la sensación de que la UFC evita este combate por miedo a perder un campeón tan mediático como Alex, en mi opinión esta posible pelea está 50/50.</p>
                    <p>En mi caso me decantó por Alex, porque si Ankalaev termina cumpliendo con su palabra, y busca derrotar a Pereira en el striking, intercambiando golpes con él, lo cierto es que le veo muy pocas chances de ganar la pelea. Creo, al igual que la mayoría, que donde más posibilidades tiene el daguestaní de vencer al brasileño es en el suelo. </p>
                    <p>Aunque igual Alex parece tener buena defensa de derribo, y creo que, si Ankalaev intenta algo como comenzar peleando de pie, y luego llevar la pelea al suelo, corre el riesgo de hacer esto muy tarde y acabar recibiendo un golpe del brasileño que lo deje noqueado. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Tr5DBT3Frc4?si=_0JPv-EtRxzSCJA2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Peso Pesado: Tom Aspinall</h2>
                    <p>Por último, creo que el nuevo campeón de peso pesado será el actual campeón interino <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>.</p>
                    <p>Tanto Dana White, como el mismo Tom Aspinall, afirmaron que en el 2025 se va a hacer la pelea para unificar el cinturón de peso pesado con <Link href='/peleadores/jon-jones'>Jon Jones</Link>. Por lo que yo veo 2 posibilidades: o Jon Jones se niega a pelear contra Aspinall y se retira dejando vacante el cinturón, que trae como resultado que Tom sea el campeón, o finalmente acepta pelear y termina perdiendo, dando como resultado que Tom sea el campeón.</p>
                    <p>Pese a que considero a Jon Jones como el mejor de toda la historia, me parece que en peso pesado quien tiene las de ganar es el inglés, y esta es una de esas situaciones en las que, si Tom Aspinall no gana, entonces nadie le puede ganar Jones. El peleador inglés cuenta con la ventaja de que es rápido, es más joven, es más grande, y es uno de los luchadores con menos tiempo dentro del octágono, debido a lo rápido que finaliza a sus rivales. Es bueno en striking, es bueno en el piso, es un luchador super completo por cualquier vía puede terminar finalizando a quien seguramente es el GOAT del deporte. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}