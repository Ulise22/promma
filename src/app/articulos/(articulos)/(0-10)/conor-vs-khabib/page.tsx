import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/peleadores__images/peleadores__hero.jpg'
import Link from 'next/link'

export default function KhabibVsConor () {
    return(
        <main>
            <ArticleHero title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó Realmente Antes y Después de la Pelea?' subtitle='Vamos a hablar de la razón de tanta rivalidad entre estos 2 peleadores, por qué Khabib luego del combate fue a pelear con alguien de la esquina de Conor, el incidente del bus...' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Dillon Danis y Khabib</h2>
                    <p>Aparentemente el &quot;beef&quot; que había entre McGregor y Khabib, comenzaría por culpa de Dillon Danis, quien es un amigo cercano y compañero de entrenamiento de Conor, que es además especialista en Jiu-Jitsu. Este se habría ofendido y le habría molestado ver la imagen de Khabib en la que llevaba puesta una remera que decía &quot;Si el Sambo fuera fácil se llamaría Jiu-Jitsu&quot;, luego de esto Danis afirmaría que él podría vencerlo facilmente en un duelo de grappling, además de afirmar cosas como que Conor podría enfrentarse en suelo al ruso, y además sería capaz de someterlo. Sin embargo, en un principio Khabib no le hizo mucho caso.</p>
                    <h2>El incidente del Bus de McGregor</h2>
                    <p>Este conflicto al parecer se daría luego de que <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> y <b>Artem Lobov</b> tuvieran un pequeño altercado, donde el ruso y su equipo acorralarían a Lobov, intimidandolo. Este, le contaría lo sucedido a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, que es un amigo cercano de él, y en respuesta decidirían, junto a otras 20 personas con credenciales de su equipo, ingresar al Braclays Center el 5 de abril durante la audiencia promocional para UFC 223, con el objetivo de increpar a Khabib, que estaba abandonando la arena junto a otros peleadores que también iban a participar del evento. Mientras el autobus se iba retirando lentamente, McGregor lanzó una carretilla de carga en forma de L a este, rompiendo las ventanillas del autobús, dejando en el camino a los peleadores Ray Borg y Michael Chiesa heridos en el camino por los cristales, luego de ir al hospital se decidió que por su salud no participarían del UFC 223 como estaba planeado en un principio.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/Xc56YrGbwu0?si=5pM7c1wQS83cJ9ki" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Como resultado de estas acciones Conor recibió una orden de arresto, fue acusado de con 3 cargos de agresión y un cargo de delito criminal. Sin embargo, pese a que aquella noche se entregó se declaro no culpable, siendo finalmente declarado culpable de cargo de conducta desordenada y se le ordenó realizar cinco días de servicio comunitario y asistir a clases de manejo de la ira.</p>
                    <p>Luego de todo este incidente, se terminaría anunciando una pelea entre el irlandés y el ruso para el 6 de octubre de 2018, en Paradise, Nevada por UFC 229.</p>
                    <h2>El incidente después de la pelea</h2>
                    <p>Al combate ya se había llegado con un combate bastante caldeado, más allá del incidente del autobus y de las palabras de Dillon Danis. En la previa Conor se había dedicado a hablar mierda de todo lo que estuviera relacionado a Khabib buscando así meterse en su cabeza y sacar alguna ventaja deportiva, además de vender la pelea. En el proceso se metió con el mismo Khabib, con su familia, con su esposa, con su religión y hasta con el presidente de su país.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}