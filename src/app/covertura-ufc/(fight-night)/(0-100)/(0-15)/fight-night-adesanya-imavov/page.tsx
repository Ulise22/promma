import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/adesanya_imavov.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'UFC Saudi Arabia: Israel Adesanya vs Nassourdine Imavov',
    description: 'Noche de UFC en Arabia Sáudita protagonizada por el excampeón de peso medio Israel Adesanya y por Narssoudine Imavov.',
    openGraph: {
        title: 'UFC Saudi Arabia: Israel Adesanya vs Nassourdine Imavov',
        description: 'Noche de UFC en Arabia Sáudita protagonizada por el excampeón de peso medio Israel Adesanya y por Narssoudine Imavov.',
        url: 'https://fullmma.org/covertura-ufc/fight-night-adesanya-imavov'
    }
}

export default function AdesanyaImavov () {
    return(
        <main>
            <ArticleHero title='UFC SAUDI ARABIA: ¡Nassourdine Imavov Noquea a Israel Adesanya en el Segundo Asalto! ¡Michael Venom Page le Quita el Invicto a Shara Bullet!' subtitle='Noche de UFC en Arabia Saudita, que además nos trae la pelea entre Shara Magomedov y Michael Venom Page, y la pelea de peso pesado entre Pavlovich y Jairzinho' image={hero} date='2025-02-01' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en Arabia Saudita, con la una tremenda pelea como aperitivo estelear, entre el excampeón de la división de peso medio <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> contra el #5 de la división, <b>Nassourdine Imavov</b>. Además, tendremos el enfrentamiento entre <Link href='/peleadores/shara-magomedov'>Shara &quot;Bullet&quot; Magomedov</Link>, quien está invicto 15-0, y enfrentará al inglés <b>Michael &quot;Venom&quot; Page</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Hamdy Abdelwahab Derrota a Jamal Pogues Por Decisión Dividida</h2>
                    <p>El egipcio Abdelwahab se lleva la victoria por decisión de los jueces, luego de dominar completamente durante el primer asalto, y luego de tener otros 2 asaltos más cerrados, pero que a los ojos de los jueces terminó ganando, recompensando su actitud de ir hacia adelante y buscar a su rival. De esta manera, Hamdy es el primer ganador de la noche, el día de hoy. </p>
                    <h2>Bogdon Grad Noquea a Lucas Alexander En el Segundo Asalto</h2>
                    <p>El debutante Grad, logra una impresionante victoria en su primer pelea en la UFC, al ser capaz de vencer por TKO al brasileño Lucas Alexander en el segundo asalto de la pelea. En lo que estaba siendo un debut complicado para el luchador de Rumania, con un primer asalto en el que fue dominado por el brasileño, fue capaz de darle la vuelta a la pelea, castigando a su rival con ground and pound, para llevarse la victoria por la vía del nocaut en el segundo round. </p>
                    <h2>Jasmine Jasudavicius Derrota a Mayra Bueno Silva</h2>
                    <p>Jasmine se lleva una merecida victoria por decisión unánime, luego de dominar por completo a la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link> en la totalidad de los asaltos. Con los 2 primeros siendo en el terreno del striking, en donde vimos como la canadiense destacó por encima de la brasileña, conectando más y mejores golpes. Y en el último, Jasmine decidió no arriesgar de más, sabiendo que tenía la pelea en el bolsillo, y concretó un derribo para dominar desde arriba a su rival y llevarse una cómoda victoria, ante una Mayra Bueno Silva a la que no le sentó bien moverse de división para pelear en peso mosca. </p>
                    <h2>Terrance McKinney Noquea a Damir Hadzovic en el Primer Asalto</h2>
                    <p>El estadounidense <Link href='/noticias/terrance-mckinney'>Terrance McKinney</Link> logra una increíble victoria por la vía del nocaut en el primer asalto, luego de arrancar super agresivo la pelea, logrando conectar varios golpes a su rival que le hicieron mucho daño. Una vez encontró una posición comoda, el estadounidense castigó a su rival con golpes desde arriba de los que no se pudo defender, llevando al árbitro a parar la pelea para darle la victoria por TKO en el primer asalto. </p>
                    <p>De esta forma McKinney es capaz de reponerse de una última derrota bastante dolorosa por KO ante el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>. </p>
                    <h2>¡Shamil Gaziev Noquea a Thomas Petersen En El Primer Asalto!</h2>
                    <p>El nacido en Daguestán consigue una espectacular victoria por la vía del nocaut en el primer asalto luego de conectar una potentísima mano derecha que tumbó a su rival. </p>
                    <p>De esta manera, en lo que estaba siendo una pelea sin un claro dominador, pero donde Thomas Petersen venía haciendo un papel digno, conectando varios golpes a su rival, y siendo capaz de concretar un derribo, a pesar de que este no es su fuerte, nada pudo hacer cuando recibió el golpe de mano derecha de Gaziev que lo tumbó inmediatamente. </p>
                    <h2>Muhammad Naimov Derrota a Kaan Ofli</h2>
                    <p>El luchador de Tayikistán, Muhammad Naimov, se lleva la victoria por decisión unánime ante Kaan Ofli, haciendo valer su favortismo en un combate que dominó completamente. Usando el último asalto para asegurar la victoria, al dominar la posición desde su espalda en el suelo, castigando lentamente a su rival con golpes desde la posición. </p>
                    <p>De esta forma Naimov se lleva la victoria en la última pelea de la cartelera preliminar, dando inicio a la cartelera estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Fares Ziam Derrota a Mike Davis</h2>
                    <p>El francés Fares Ziam se queda con la victoria por decisión unánime, luego de que fue una clara actuación dominante por su parte, llegando incluso a provocarle un grave corte a su rival que lo dejó sangrando un montón en el segundo asalto. Consiguiendo de esta manera corta la racha de 4 victorias consecutivas en la que estaba su rival, Mike Davis, y llegando él a su quinta victoria consecutiva en la UFC de esta forma. </p>
                    <h2>¡Vinicius Oliveira Derrota a Said Nurmagomedov!</h2>
                    <p>El brasileño <Link href='/noticias/vinicius-oliveira-ufc'>Vinicius Oliveira</Link> se queda con la victoria en lo que fue un tremendo combate, super emocionante y que tuvo de todo. </p>
                    <p>Habiendo perdido claramente el primer asalto ante Said Nurmagomedov, el brasileño fue capaz de leer junto a su equipo que su rival se había desgastado demasiado, poniendo el pie sobre el acelerador, para conectar los mejores golpes en el striking, y ser capaz de dominar en el suelo tambien, concretando exitosamente sus intentos de derribo y defendiendo los de su rival. De esta manera, con unos excelentes segundo y tercer asalto, el brasileño se queda con la victoria de manera merecida por decisión unánime. </p>
                    <p>Después de la pelea Vinicius habló sobre como llegó a esta pelea con una lesión en la costilla que llevaba arrastrando hacía meses, siendo capaz de pelear aún en estas condiciones. Además, no dudó en desafiar para su próximo combate a <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, quien peleó en el último evento en el <Link href='/covertura-ufc/ufc311'>UFC 311</Link> ante <Link href='/peleadores/merab-dvalishvili'>Merab Dvalisvhili</Link> por el cinturón. </p>
                    <h2>Sergei Pavlovich Se Lleva la Victoria Ante Jairzinho Rozenstruik</h2>
                    <p>El luchador ruso Sergei Pavlovich se lleva la victoria por decisión unánime, luego de dominar por completo a su rival en los 3 asaltos en lo que es la última pelea de peso pesado de la noche.</p>
                    <p>Habiendo tenido 3 asaltos que fueron un calco el uno del otro, con Pavlovich siendo capaz de conectar golpes potentes a Jairzinho que lo llevaron al piso, y con el ruso aprovechando esto para castigar a golpes a su rival desde arriba, el resultado de la pelea por parte de los jueces era más que predecible, otorgándole la victoria por decisión unánime a Sergei Pavlovich. </p>
                    <h2>Michael Page Vence y Domina a Shara Magomedov</h2>
                    <p>¡El peleador inglés se encarga de quitarle el invicto al pirata! Michael Venom Page obtiene una importantísima victoria ante <Link href='/peleadores/shara-magomedov'>Shara Magomedov</Link>, luego de dominarlo en el striking durante los 3 asaltos que duró el combate, al ser capaz de conectar varios golpes, con un manejo de la distancia magistral, que evitó que Shara Bullet pudiera conectarlo. </p>
                    <p>De esta manera termina la pelea coestelar de la noche, con una victoria para el inglés Michael Page, que le quita el invicto de 15-0 a su rival.</p>
                    <h2>¡Nassourdine Imavov Noquea a Israel Adesanya en el Segundo Asalto!</h2>
                    <p>El luchador francés <b>Nassourdine Imavov</b> logra una impresionante victoria por la vía del nocaut ante el excampeón <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, para posicionarse como un claro candidato al título de las 185lbs, al alcanzar con esta, su cuarta victoria consecutiva en la división de peso medio. </p>
                    <p>Por su parte, el excampeón nigeriano alcanza con esta pelea su tercer derrota consecutiva, luego de perder por sumisión ante <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> y por decisión ante <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, en lo que vienen siendo unas últimas peleas bastante dolorosas para el campeón Adesanya. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}