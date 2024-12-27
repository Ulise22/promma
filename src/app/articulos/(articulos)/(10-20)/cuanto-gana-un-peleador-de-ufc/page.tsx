import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/10-20/salarios_ufc.jpg'

export const metadata: Metadata = {
    title: 'Cuanto Gana Un Peleador de UFC',
    description: '¿Nunca te has preguntado cuanto ganan los peleadores de UFC? En este artículo repasaremos cuánto ganan los peleadores de UFC, desde los novatos, las estrellas emergentes y los campeones.',
    openGraph: {
        title: 'Cuanto Gana Un Peleador de UFC',
        description: '¿Nunca te has preguntado cuanto ganan los peleadores de UFC? En este artículo repasaremos cuánto ganan los peleadores de UFC, desde los novatos, las estrellas emergentes y los campeones.',
        url: 'https://fullmma.org/articulos/cuanto-gana-un-peleador-de-ufc'
    }
}

export default function CuantoPagaUFC () {
    return(
        <main>
            <ArticleHero title='¿Cuánto le pagan a un peleador de UFC? Los salarios de los peleadores más importantes de MMA' subtitle='Cuánto ganan los peleadores de UFC, desde los novatos, un peleador promedio, un campeón, y cómo sus resultados influyen en el sueldo. ' image={hero} date='27/12/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>¿Nunca te has preguntado cuanto ganan los peleadores de UFC? Aunque la respuesta no es tan compleja, requiera de cierta explicación, dado que, en una misma cartelera, la diferencia entre lo que puede cobrar un peleador que está en las peleas preliminares, con lo que puede cobrar un luchador que está en la cartelera estelar, es abismal, y existe una explicación para ello. </p>
                    <p>Para comenzar, hay que tener en claro que, a diferencia de la mayoría de las personas, los peleadores de MMA y de UFC específicamente, no tienen un sueldo fijo, el dinero que cobren depende de que se suban al octágono y peleen, dado que firman un contrato en donde cobran por pelea. Pero detallemos como funcionan los contratos con la compañía.</p>
                    <h2> ¿Cómo es un contrato con la UFC? </h2>
                    <p>Esto seguramente aplique para la mayoría de las promotoras de MMA, pero nos vamos a dedicar a hablar específicamente de la UFC. Existen 2 tipos de acuerdos que se firman entre el peleador y el promotor: </p>
                    <ul>
                        <li><b>El Acuerdo Promocional: </b> Este es el contrato que se firma entre el peleador y la UFC, donde se acuerda exclusividad con la compañía, con el peleador quedando privado de pelear en otra empresa, durante una cierta cantidad de tiempo y una cierta cantidad de peleas, que en el caso de los peleadores novatos o recién ingresados, suele ser de 3 combates.</li>
                        <li><b>El Acuerdo por Pelea: </b> Cada pelea que tiene el peleador se negocia de manera particular, es decir que, si el peleador había acordado un contrato de 3 peleas con la UFC, luego deberá firmar otros 3 contratos diferentes por cada una de las peleas que tenga con la compañía. En dicho contrato se especifica la fecha de la pelea, el lugar, el peso pactado, el oponente a enfrentar y la cantidad que se le va a pagar al peleador. </li>
                    </ul>
                    <h2>Cuanto Gana un Peleador Novato de UFC </h2>
                    <p>Los contratos por pelea tienen 3 escalas de pagos para los peleadores, dependiendo del nivel de luchador, la cantidad de tiempo que lleve en la compañía, y la popularidad del mismo. En el caso de los peleadores novatos que están teniendo sus primeras peleas en la UFC el salario varía de $10.000 a $30.000, con un bono adicional equivalente al pago base en caso de ganar la pelea. Es decir, si el peleador firmó un contrato por $10.000, en caso de ganar su pelea se llevaría otros $10.000 adicionales, por lo que acabaría cobrando $20.000 al finalizar la noche. También cabe aclarar, que dicha suma aún en el contrato base más bajo, suele ir subiendo a medida que se ganan peleas. </p>
                    <p>Además, en caso de tener una actuación destacada o de haber dado espectáculo durante la pelea, se puede cobrar un bono adicional de $50.000, ya sea cobrando el bono a la Actuación de la Noche (que reemplazó a los antiguos bonos al KO de la Noche y a la Sumisión de la Noche), o cobrando el bono a La Pelea de la Noche, donde ambos luchadores involucrados en la pelea cobran $50.000 cada uno. </p>
                    <p>Sumado a esto, según informa <a href='https://expertomma.com/blog/cuanto-gana-un-luchador-ufc/' target='_Blank' >ExpertoMMA</a>, también cobran un extra por patrocinios de la compañía, con el luchador de nivel raso recibiendo una suma aproximada de $3.500 por pelea. </p>
                    <p>En síntesis, un peleador novato en el peor de los casos se lleva a casa $13.500 por pelea antes de impuestos, mientras que, en el mejor de los casos, cobrando lo máximo, ganando su pelea y ganando un bono por desempeño, puede llevarse hasta $113.500 en una noche antes de impuestos.</p>
                    <h2>Cuanto Gana un Peleador Promedio de UFC </h2>
                    <p>La mayoría de los peleadores de UFC suele cobrar los entre $10.000 y $30.000 base por pelea mencionados anteriormente. Pero el contrato de nivel medio de la UFC se ubica entre los $80.000 y $300.000 base por pelea. Aplicando las mismas reglas que para el luchador novato, teniendo la posibilidad de cobrar un bono por desempeño de $50.000 en caso de tener una actuación destacada, y duplicando su bolsa en caso de llevarse la victoria, además de cobrar un extra por los acuerdos de la compañía con los patrocinadores. </p>
                    <h2>Cuanto Gana un Campeón de UFC </h2>
                    <p>Finalmente, los campeones de UFC cobran el nivel más alto de salarios de la compañía, con el pago base siendo entre $500.000 y $3.000.000 por pelea, con la posibilidad de agrandar el pago en caso de llevarse la victoria, y también con la chance de ganar un bono de $50.000 extra.</p>
                    <p>Se puede cobrar estas sumas aún sin ser campeón, con el monto exacto dependiendo de la fama y popularidad del peleador. Figuras como <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, <Link href='/peleadores/max-holloway'>Max Holloway</Link> o <Link href='/peleadores/sean-omalley'>Sean O’malley</Link> cobran estas cantidades, aún si ser campeones actualmente. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/GrOmEPoLk0w?si=rR2-XIlBNQIRAcZN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>La diferencia con los campeones, es que quienes poseen el cinturón de la compañía además del sueldo base más bonos, cobran un porcentaje de los PPV (Pago Por Visualización), donde el porcentaje que se quedan depende del peleador, y la cantidad que estos representen depende de qué tanto venda la pelea en la que participen. </p>
                    <p>Sumado a estas cantidades, los campeones de UFC suelen cobrar 10 más por los patrocinios que los peleadores novatos, llevándose un aproximado de $35.000 por patrocinadores. </p>
                    <h2>¿Cuanto Gana un Peleador de UFC Si Pierde?</h2>
                    <p>En caso de perder, los peleadores de UFC cobrarán sólo el pago base acordado con la compañía, en lugar de duplicar la cantidad como sí terminará haciendo su rival que ganó la pelea. Es decir que, cuando un peleador se sube al octágono, prácticamente está peleando por la mitad de su salario. Dado que en caso de que ambos peleadores sean novatos y hayan firmado un contrato de $10.000 por pelear, el luchador que gane se quedará finalmente con $20.000, mientras que el que pierda sólo se quedará con los diez mil. </p>
                    <h2>Cosas a tener en cuenta y conclusión</h2>
                    <p>Es importante tener en cuenta que todas las cifras que di son brutas, es decir, no desconté los impuestos que luego los peleadores tienen que pagar, que varían dependiendo de la ubicación en la que se hagan los combates, ni los diferentes gastos extras que pueden tener, como lo son el gimnasio, el manager, u otros. </p>
                    <p>Tampoco tuve en cuenta los gastos que la UFC sí que cubre, como lo son los cortes de peso, o el seguro médico donde te cubren gran parte del tratamiento en caso de haber sufrido una lesión costosa. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}