import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc330.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 330: ¡Islam Makhachev vs Ian Garry!',
    description: "Gran evento de UFC con Islam Makhachev defendiendo el título de peso wélter ante Ian Garry. Y con Mackenzie Dern defendendiendo su cinturón de campeón ante Gillian Robertson.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc330.56eb11c4.webp&w=828&q=65',
        title: 'UFC 330: ¡Islam Makhachev vs Ian Garry!',
        description: "Gran evento de UFC con Islam Makhachev defendiendo el título de peso wélter ante Ian Garry. Y con Mackenzie Dern defendendiendo su cinturón de campeón ante Gillian Robertson.",
        url: 'https://fullmma.org/eventos/ufc330'
    }
}

export default function UFC330 () {
    return(
        <main>
            <ArticleHero title="UFC 330: ¡Islam Makhachev vs Ian Garry! ¡Mackenzie Dern vs Gillian Robertson!" subtitle='¡Esteban Ribovics Noquea en el Segundo Asalto en el Retiro de Edson Barboza! ¡Chidi Njokuani Derrota a Joel Álvarez por Decisión Unánime!' image={hero} date='2026-08-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Gran noche de UFC tenemos el día de hoy en la ciudad de <b>Rocky Balboa</b>, Philadelphia, donde veremos en el evento estelar al campeón de peso wélter <Link href="/peleadores/islam-makhachev">Islam Makhachev</Link> denfender por primera vez su cinturón ante el irlandés <Link href="/peleadores/ian-garry">Ian Garry</Link>, que viene de una gran victoria ante otro luchador como <Link href="/peleadores/belal-muhammad">Belal Muhammad</Link>. Además, en el evento coestelar tendremos otra pelea titular, cuando la recientemente coronada campeona <Link href="/mujeres/mackenzie-dern">Mackenzie Dern</Link> defenderá por primera vez el título ante la #5 de la división, <b>Gillian Robertson</b>. </p>
                    <p>Por si fuera poco, para el público hispano tendremos 2 peleas a las que vamos a prestarle especial atención. Primero, con el español <Link href="/peleadores/joel-alvarez">Joel Álvarez</Link> cerrando las preliminares en una pelea que aceptó en corto aviso ante el estadounidense <b>Chidi Njokuani</b>. Y luego, abriendo la cartelera estelar tendremos al argentino <Link href="/peleadores/esteban-ribovics">Esteban Ribovics</Link> enfrentando al histórico peleador brasileño <b>Edson Barboza</b>, en la que es candidata a ser una de las peleas de la noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>¡Jeremiah Wells Somete a Myktybek Orolbai en el Tercer Asalto!</h2>
                    <p>Sorpresón el que acaba de dar el oriundo de Philadelphia <b>Jemeiah Wells</b>, quien partía claramente desfavorecido en las casas de apuestas por bastante margen, y que aunque inició perdiendo el combate, siendo derribado y sufriendo la tremenda lucha del luchador de Kirguistán, fue capaz de conectar una llave en el cuello de su rival justo cuando este intento derribarlo, para finalmente mandarlo a dormir con una sumisión que le dió la victoria en el tercer asalto, de la única forma que podría haberlo conseguido. Luego de esta gran victoria en su ciudad natal, el luchador americano anunció su retirada por todo lo alto, sometiendo a un rival durísimo y frente a su gente.  </p>
                    <h2>Neil Magny Noquea a Ramiz Brahimaj en el Segundo Asalto!</h2>
                    <p>Gran victoria por parte del veterano estadounidense <b>Neil Magny</b>, quien pese a perder el primer asalto de la pelea, siendo derribado y castigado a golpes desde el suelo, en el segundo fue capaz de reponerse y dar vuelta el combate, poniéndose de pie después de ser derribado nuevamente, tomando la espalda de su rival y desde ahí castigándolo a golpes potentísimos que lastimaron a su compatriota hasta que el árbitro los separó, dándolo como ganador por TKO en el segundo asalto. </p>           
                    <h2>Lucas Fernando Noquea a Rafael Tobias en el Tercer Asalto</h2>         
                    <p>Brutal desempeño del debutante brasileño <b>Lucas Fernando</b>, quien en lo que fue una total dominación a su rival y compatriota, fue capaz de finalizar en el tercer asalto, conectando un rodillazo al abdomen que dejó muy dolido a Tobias, llevando al árbitro a parar el combate cuando apenas Fernando había conectado un par de golpes más. De esta forma, Lucas Fernando debuta con victoria por TKO en el tercer asalto en la UFC.</p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Tresean Gore Derrota a Vicente Luque Por Decisión Unánime</h2>
                    <p>Primera pelea de la noche que va a la decisión, esta vez con victoria para el estadounidense <b>Tresean Gore</b>, quien dominó claramente el combate ante su rival brasileño <b>Vicente Luque</b>, quien había subido de división y estaba debutando en peso medio, haciendo un papel destacable pero insuficiente, dado que aunque aguantó y mostró gran corazón para pelear, aguantando varios intentos de sumisión que podrían haber acabado la pelea en cualquier momento, no fue capaz de lastimar a su rival de ninguna forma significativa, cayendo derrotado por decisión ante el americano. </p>
                    <h2>Donte Johnson Noquea a Eric McConico en el Primer Asalto</h2>
                    <p>Brutal manera de debutar en la UFC por parte del estadounidense invicto <b>Donte Johnson</b>, quien en el primer asalto del combate conectó un bombazo a su rival que lo tumbó al suelo inmediatamente, manteniendo y extendiendo su invicto por KO en el primer asalto. </p>
                    <h2>Charles Johnson Somete a Eduardo Chapolin en el Tercer Asalto</h2>
                    <p>Locura total lo que acaba de hacer <b>Charles Johnson</b>, tal y como nos tiene acostumbrados, en un combate donde daba la sensación de que podía ser finalizado en cualquier momento, recibiendo varios knockdowns durante el combate, y sufriendo un golpe ilegal en el primer asalto (que le valió una quita de punto al brasileño Chapolin) que le hizo bastante daño, aún así en el tercer asalto fue capaz de agarrar de una forma extraña al de Brasil <b>Eduardo Chapolin</b> que obligó a este a tapear. De esta forma, el veterano <b>Charles Johnson</b> se lleva la victoria por sumisión en el tercer asalto.</p>
                    <h2>Chidi Njokuani Derrota a Joel Álvarez por Decisión Unánime</h2>
                    <p>Gran victoria para el estadounidense <b>Chidi Njokuani</b>, quien no inició este combate como el favorito, lejos de ello, y aún así fue capaz de dictar el ritmo del combate, conectando una gran cantidad de patadas a la pierna de <Link href="/peleadores/joel-alvarez">Joel Álvarez</Link> que entre esto y la cantidad de golpes que estaba recibiendo no fue capaz de encontrar una respuesta a los problemas que el estadounidense le planteó. De esta forma, por decisión unánime, <b>Chidi Njokuani</b> se llevó la victoria.</p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>¡Esteban Ribovics Noquea en el Segundo Asalto en el Retiro de Edson Barboza!</h2>
                    <p>Espectacular victoria y desempeño del luchador argentino de peso ligero <Link href="/peleadores/esteban-ribovics">Esteban Ribovics</Link>, quien dió una exhibición impresionante en el combate, dominando a su rival con ese striking sobresaliente que tiene, finalmente logrando la victoria por TKO en el segundo asalto ante un peleador histórico como lo es <b>Edson Barboza</b>, quien es una leyenda y que luego del combate colgó los guantes y se retiró ovacionado por todo el público y por su rival. </p>
                    <h2>Dustin Stoltzfus Somete a Mansur Abdul-Malik en el Segundo Asalto</h2>
                    <p>Otra sorpresa la que nos acaba de dar el estadounidense <b>Dustin Stoltzfus</b>, quien aunque no aparecía como favorito en las casas de apuestas, y no por poco, fue capaz de conseguir una victoria que vale la pena destacar, conectando unos golpes en el segundo asalto que derribarían a su rival, aprovechando la ocasión para tomar la espalda de su compatriota y conectar un mataleón que le daría la victoria por sumisión.</p>
                    <h2>Jailin Turner Noquea a Kaue Fernandes en el Primer Asalto</h2>
                    <p>Gran victoria del estadounidense <b>Jailin Turner</b> en la división de peso ligero ante el brasileño <b>Kaue Fernandes</b>, a quien dominó claramente durante el corto periodo que duró el combate, finalizando con un gancho de izquierda al que le siguió una avalancha de golpes para llevarse la victoria por TKO en el primer asalto. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}