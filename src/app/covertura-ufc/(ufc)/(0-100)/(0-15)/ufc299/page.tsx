import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/0-15/ufc299.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export default function UFC299 () {
    return(
        <main>
            <ArticleHero title='UFC 299: ¡Sean O&apos;malley Vence Chito Vera Por Decisión y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!' subtitle='Además, Michael Venom Page logra una victoria en su debut en la UFC y Jack Della Maddalena logra una victoria por nocaut ante Gilbert Burns que lo hace escalar en los rankings. ' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos un tremendo evento en este UFC organizado en Miami, Florida, donde como evento estelar contaremos con la primer defensa del cinturón del reciente campeón <Link href='/peleadores/sean-omalley'>O&apos;malley</Link>, quien deberá enfrentarse en una revancha al único peleador que fue capaz de ganarle hasta el momento, y no es otro que el ecuatoriano <Link href='/peleadores/marlon-vera'>Chito Vera</Link>, quien viene de una meritoria victoria ante el brasileño <b>Pedro Munhoz</b>. </p>
                    <p>Además, tendremos en el evento coestelar una pelea a 5 asaltos entre el histórico peleador de peso ligero, excampeón interino <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, quien busca volver a la victoria luego de una última derrota dolorosa ante <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, quien fue capaz de noquearlo en el segundo asalto de su pelea por el BMF. Pero para eso deberá enfrentarse a un joven prospecto francés, <b>Benoit Saint Denis</b>, quien viene de 5 victorias seguidas en la UFC. </p>
                    <h2>Sean Omalley vence a Chito en su primera defensa del título</h2>
                    <p>En un combate que tuvo un claro ganador por lo dominante de su participación a lo largo de la pelea, seguimos teniendo a <Link href='/peleadores/sean-omalley'>O&apos;malley</Link> como campeón de la división de Peso Gallo, que luego de 5 asaltos se llevó la pelea por decisión unánime, ganandole todos los asaltos a <Link href='/peleadores/marlon-vera'>Chito Vera</Link> en la opinión de los jueces.</p>
                    <p>Al terminar la pelea, Sean pidió enfrentarse al español <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, en busca de convertirse en doble campeón, en lo que suponemos sería un combate en España, como lo pidió el mismo Ilia Topuria.</p>
                    <p>Es para destacar también lo duro de la mandibula de Chito Vera, capaz de hacer frente a un gran volumen de golpes, que a pesar de enfrentarse a uno de los rivales con mayor poder de nocaut en la división, sigue sin haber perdido ninguna de sus peleas por esta vía. </p>
                    <h2>¡Dustin Poirier noquea a Saint Denis y alcanza las 30 victorias en su carrera!</h2>
                    <p><Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> demuestra que sigue con un nivel altísimo en las MMA, siendo capaz de noquear en el segundo asalto a un joven Saint Denis, que venía acumulando 5 victorias consecutivas, pero que nada pudo hacer al enfrentarse a un histórico en la división como lo es el ranqueado #3, Dustin Poirier. Con un primer asalto, y parte del segundo, en el que el francés estaba siendo capaz de llevar la pelea al suelo, luego de que Poirier fuera capaz de conectar una buena combinación de golpes, el destino de esta cambió por completo a favor del estadounidense. </p>
                    <h2>Michael Page derrota a Kevin Holland en su debut en la UFC</h2>
                    <p>El peleador que proviene de <b>Bellator</b>, Michael Page, en su debut dió un show y fue capaz de llevarse la pelea por decisión, luego de los 3 asaltos del combate, derrotando a quien hasta esta noche estaba ranqueado #13 en la división.</p>
                    <h2>¡Jack Della Maddalena noquea a Gilbert Burns!</h2>
                    <p>En una muy entretenida pelea, Jack Della Maddalena, que hasta esta noche estaba ranqueado #11, fue capaz de, en el tercer asalto, llevarse el combate por nocaut contra el histórico brasileño <b>Gilbert Burns</b>. Todo esto, luego de escapar del piso, donde lo tenía el brasileño y conectar rápidamente un rodillazo en la cabeza de su rival, que en el ground and pound terminó con el nocaut.</p>
                    <h2>¡Petr Yan se lleva la primera pelea estelar de la noche!</h2>
                    <p>Empieza fuerte la cartelera estelar con un tremendo combate entre el ruso Petr Yan y el chino Song Yadong, en el que ambos nos dieron un espectáculo al no especular tanto durante el combate e ir a buscarse. Parecía que el peleador oriental podía ser quien se llevara la pelea, dado que comenzó de buena manera en el primer asalto, dominando a su rival, sin embargo, Petr Yan, que venía de 3 derrotas consecutivas, supo reponerse rápido, ganando los 2 siguientes asaltos y por consiguiente llevándose el combate.</p>
                    <h2>Curtis Blaydes Noquea a Jailton Almeida</h2>
                    <p>En la última pelea de la cartelera preliminar, el estadounidense <b>Curis Blaydes</b> logra reponerse de su última pelea que acabo por derrota al enfrentar a <b>Sergei Pavlovich</b>, quien lo noqueó en el primer asalto. En esta ocasión, sería el luchador americano el que lograría noquear primero en el segundo asalto ante el brasileño <b>Jailton Almeida</b>, quien venía de 15 victorias consecutivas, y quien en este combate sufre su primer derrota en la UFC. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}