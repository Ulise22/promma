import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/90-100/jean_silva-madre.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Jean Silva Historia Madre',
    description: 'Descubre toda la verdad sobre la trágica infancia de Jean Silva: el asesinato de un hermano, el abuso y encarcelamiento de su madre.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjean_silva-madre.bb389f80.webp&w=828&q=65',
        title: 'Jean Silva Historia Madre',
        description: 'Descubre toda la verdad sobre la trágica infancia de Jean Silva: el asesinato de un hermano, el abuso y encarcelamiento de su madre.',
        url: 'https://fullmma.org/articulos/jean-silva-historia-madre',
    }
}

export default function JeanSilvaMadre () {
    return(
        <main>
        <ArticleHero title='La Trágica Historia de la Madre de Jean Silva' subtitle='Como el asesinato de un hermano, el abuso y encarcelamiento de su madre forjaron a Jean &quot;Lord&quot; Silva.' image={hero} date='2026-09-1w' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La infancia de <Link href='/peleadores/jean-silva'>Jean Silva</Link> y la historia con su madre es una de las cosas más impactantes y desgarradoras que uno puedo oir. Aquella pobre madre fue abusada por 3 hombres en su Brasil natal, pero siendo una mujer ruda actuó en defensa propia acabando con la vida de sus 3 agresores, todo en presencia del pequeño Jean quien estuvo observando toda la secuencia. La madre de Silva fue arrestada y encarcelada por este más que justificable accionar. Por si fuera poco, tiempo después ambos tuvieron que lidiar con la muerte de un hermano e hijo, quien fue baleado y falleció luego de recibir 5 disparos. </p>
                    <p>Detrás del luchador brasileño carismático, agresivo y entretenido que es <Link href='/peleadores/jean-silva'>Jean Silva</Link>, hay una historia hiper cruda, una infancia durísima, marcada por la violencia extrema, un entorno hostil, el bullyng de pequeño, el abandono de un padre, la pérdida de un hermano y el trauma de su madre. El futuro contendiente al título de la UFC y una de las principales caras de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> ha compartido en público todo por lo que ha tenido que vivir, por eso hoy vamos a contar en detalle todo el doloroso trayecto por el que tuvo pasar para ser quien es hoy en día. </p>
                    <h2>La Dura Infancia de Jean Silva en Brasil</h2>
                    <p>Jackson Jean da Silva nació el 13 de diciembre de 1996 en Foz do Iguaçu, Paraná, en la frontera de Brasil con Argentina y Paraguay. Como suele caracterizar a los peleadores de Brasil, creció en un entorno de pobreza, violencia e inseguridad, primero allí donde nació, y luego en Florianópolis. </p>
                    <p>Es hijo de una boxeadora, quien abandonó su carrera para poder criarlo a él y a su hermano mayor, y quien estuvo tiempo en la cárcel, teniendo que luchar una vez que salió para recuperar a sus hijos y mantenerlos juntos pese a la adversidad. Según contó el propio Silva, aquella mujer tuvo problemas para criarlos, debido a que su padre biológico no siempre estuvo presente, sufriendo situaciones de extrema necesidad y precariedad, llegando en un momento vivir bajo una lona en medio del bosque, sin comida suficiente para los 3. </p>
                    <h2>La Trágica Historia de la Madre de Jean Silva: Abuso, Venganza y Cárcel.</h2>
                    <p>Probablemente el momento más impactante de la vida de Jean Silva, fue cuando presenció de niño como 3 hombres abusaron de su madre. </p>
                    <p>El crudo momento no quedó en eso solo, dado que la madre de Silva, quien había sido boxeadora en el pasado y era una mujer muy ruda, tomó la justicia por mano propia acabando con la vida de sus 3 agresores, también en presencia del pequeño Jean. Tras esto, fue arrestada y encarcelada por el acto. </p>
                    <p>Según contó el mismo peleador en una entrevista en portugués: </p>
                    <p><b>&quot;La vida le pega a todos duro, ví a mi madre estar en prisión, ví a mi madre ser abusada por 3 hombres, 3 hombres abusaron de mi madre y la vía a ella matar a esos 3 hombres y luego vi a mi madre ir presa&quot;.</b></p>
                    <YouTubeEmbed videoid='Sr7SkUugKks' />
                    <p>Tener que presenciar este hecho atroz claramente le afectó mucho, más teniendo en cuenta que su madre fue quien siempre estuvo presente para él desde la infancia. Debido al cariño que le tiene a ella, es que se lleva un tatuaje en el pecho en su honor: un candado nórdico antiguo con un diamante y el nombre de su madre debajo. </p>
                    <h2>El Asesinato del Hermano de Jean Silva</h2>
                    <p>Sin embargo, la tragedia no acababa ahí para el peleador de peso pluma de la UFC, ya que le tocó vivir de cerca el asesinato de su hermano mayor a causa de 5 disparos. </p>
                    <p>Fue uno de los momentos más desgarradores de su vida, dado que Jean seguía siendo una adolescente cuando sucedió, siendo 4 años menor que su hermano cuando falleció. Toda su vida había sido una gran influencia positiva para él</p>
                    <p><b>&quot;Cuando mi hermano murió, recuerdo que fue cuestión de minutos. Escuché el primer disparo, luego el segundo, luego el tercero, luego el cuarto y por último el quinto. Recuerdó que me quedé a su lado. Él apretó mi mano con toda la fuerza que le quedaba. Fue entonces cuando murió mi hermano.&quot;</b></p>
                    <p>Desde ese momento, según relata el mismo Silva, nació su alter ego &quot;Lord&quot;: una &quot;entidad&quot; o &quot;espíritu&quot; que lo protege. </p>
                    <h2>Los Ladridos de Jean Silva: Un tic nervioso y una historia de Bullying</h2>
                    <p>Los ladridos que tanto caracterizan a Jean Silva dentro y fuera del octágono están estrechamente relacionados y tienen una conexión con su hermano, con un origen bastante emocional que le acarrió problemas en la escuela con sus compañeros. </p>
                    <p>Su hermano le había regalado un perro cuando Jean era pequeño. Desde entonces el pequeño pasó mucho tiempo jugando con aquella mascota, comunicándose con ladridos mientras jugaba, veía televisión o estaba en la escuela. Comenzó a usar aquellos ladridos como forma de expresar sus emociones. </p>
                    <p>Sin embargo, lo que había comenzado como una forma de comunicar sus emociones, siendo el reflejo de la conexión emocional con su perro y su hermano, se convirtió en un tic nervioso. Sus compañeros de escuela comenzaron a hostigarlo por esto, sufriendo mucho bullyng durante la infancia por este comportamiento.</p>
                    <p>Con el tiempo, empezó a sentirse solo en la escuela, con pocos amigos y con su perro volviéndose su principal compañía. Estos ladridos que mutaron a un tic nervioso, hoy en día se transformaron en una forma de sentirse cerca su hermano quien fue el que le regaló a su perro. </p>
                    <h2>Como el Trauma Forjó un Peleador Letal</h2>
                    <p>Toda esta acumulación de traumas: la violencia sexual contra su madre, su encarcelamiento, el asesinato de su hermano frente a sus propios ojos, el bullying y la pobreza, no lo destruyeron como podría haber sucedido con cualquier otro, por el contrario, se endureció y salió más fuerte como resultado de todas sus experiencias de vida. </p>
                    <p>Allí las artes marciales se convirtieron en una vía de escape y redención para Silva. Acercándose primero al Muay Thay con el apoyo incondicional de su esposa Carol, quien se convirtió en un sostén emocional que lo ayuda a controlar sus emociones y agresividad acumulada. </p>
                    <p>Finalmente fue capaz de canalizar todas estas emociones en las MMA primero, y luego en la UFC, convirtiéndose en un peleador agresivo, impredecible, emocional y de una intensidad casi incomparable.</p>
                    <p>Es importante destacar que, no le alcanazaron las artes marciales para sanar todas sus heridas emocionales que la vida le trajó, sino que su religión y su fe fueron un pilar fundamental para salir adelante, agradeciéndole a Jesús todos los días. </p>
                    <p>En ningún momento la vida ha sido fácil para Jean Silva, sufrió momentos de desesperación, creció con sobrepeso y tuvo muy presente desde pequeño el lado oscuro de la vida. Aún así, fue capaz de convertir todo ese dolor en combustible y de hacer lo mejor que pudo con lo que le tocó vivir. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}