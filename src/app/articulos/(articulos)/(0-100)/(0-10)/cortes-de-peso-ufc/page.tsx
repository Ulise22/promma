import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
/* Images */
import hero from '@/assets/articulos/0-100/0-10/corte-peso.jpg'

export const metadata: Metadata = {
    title: 'Cortes de Peso UFC',
    description: '¿Cómo hacen los peleadores de UFC para dar el peso la noche del pesaje? Ilia Topuria cuenta a detalle cuál es el proceso por el que pasan los luchadores de MMA.',
    openGraph: {
        title: 'Cortes de Peso UFC',
        description: '¿Cómo hacen los peleadores de UFC para dar el peso la noche del pesaje? Ilia Topuria cuenta a detalle cuál es el proceso por el que pasan los luchadores de MMA.',
        url: 'https://fullmma.org/articulos/cortes-de-peso-ufc'
    }
}

export default function CortesPeso () {
    return(
        <main>
            <ArticleHero title='Ilia Topuria: Los Durísimos Cortes de Peso a los que se Someten los Peleadores de UFC' subtitle='¿Cómo son los cortes de peso en las MMA? Ilia Topuria en una entrevista en The Wild Project cuenta el durísimo proceso por el que tienen que pasar los peleadores para dar el peso antes de cada pelea.' image={hero} date='2024-09-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En la entrevista que concedió en el podcast de Jordi Wild, The Wild Project, el campeón de <Link href='/articulos/ufc'>UFC</Link> en Peso Pluma, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, detalló cómo es el proceso para hacer un corte de peso antes de cada pelea. Primero hablando de como al tener tantos peleadores que naturalmente son más pesados, pero que sin embargo terminan peleando en categorías de peso más livianas, obliga al resto de competidores a hacer lo mismo, ya que para cuando llega el día de la pelea, los peleadores rebotan de peso y terminan luchando con más kilos de los que originalmente dieron el día del pesaje. Esto genera una desventaja para quienes quieran pelear en su peso natural, ya que se estarían enfrentando a peleadores más grandes, más pesados y más fuertes, por eso se ven obligados a cortar tantos kilos antes de las peleas.</p>
                    <p>Para comenzar con el proceso de corte de peso, unos meses antes de la pelea, los peleadores se someten a una dieta super estricta, donde reducen la cantidad de calorías que consumen. Esto combinado con el intenso entrenamiento al que se están sometiendo para prepararse para los combates, lleva a que los luchadores quemen muchas calorías. Este proceso, según Ilia Topuria, inicia 3 meses antes del combate, y es sólo el comienzo del proceso para hacer el corte.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/32ozjKm03Aw?si=vAZGXrcVo6RFvCRY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2>La Deshidratación en el Corte de Peso</h2>
                    <p>La segunda etapa de los cortes peso, inicia una semana antes del combate. Suponiendo que el combate se haga el sábado, a partir del domingo previo comienza a hacerse una especie de carga de agua. Donde el domingo se consumen 4 litros de agua, el lunes 6, el martes 8, el miércoles 10 y a partir del jueves a la mañana se corta con todo consumo de agua, durante un periodo de 24 horas.</p>
                    <p>En estas 24 horas lo que se busca es deshidratarse, aprovechando que se viene de días de tomar mucha agua, se engaña a los riñones para que crea que va a seguir este consumo, y se meten al sauna para sacar toda el agua del cuerpo posible, dado que lo que se saque ya no se repone. En este proceso, se pueden llegar a perder entre 5 y 6 kilos, necesitando para esto un solo día.</p>
                    <p>Ilia describe esta experiencia como <b>&quot;Vivir en el infierno en la vida real&quot;</b>, producto de la dureza que esto implica para el cuerpo. Además explica que es doloroso el tener a la gente cercana sufriendo por uno, haciéndolos participes de su sufrimiento. Sin embargo también reconoce que lo que viene después <b>&quot;son momentos buenos, y no hay gloria sin dolor&quot;</b>.</p>
                    <p>Una vez terminado este proceso y de haber completado con éxito el pesaje, para recuperar fuerzas lo primero que se hace es hidratarse con cosas que te dan los médicos y nutricionistas, hasta que llega el momento en que se vuelve a orinar con normalidad, y es en este momento en el que se vuelve a introducir la alimentación poco a poco. Con este proceso, el viernes a la mañana, Ilia Topuria en este caso, estaría pesando 66 kilos, sin embargo, cuando llegue la hora de pelear el sábado pasaría a pesar 78 kilos. Es decir, de un día a otro se llega a la pelea habiendo rebotado 12 kilos.</p>
                    <p>Pese a lo díficil y sufrido que es el proceso para llegar a pesar lo que indica cada división, Ilia cuenta que el día de la pelea se llega en una forma espectacular, dado que ya le ha dado tiempo a descansar, a hacer su sesión de fisioterapia y a prepararse mentalmente para el enfrentamiento. Según sus propias palabras, cuando llega el día del combate <b>&quot;Me siento muy peligroso.[...] Es como si te tuvieran atado 3 meses y de repente te soltaran la correa&quot;</b>.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}