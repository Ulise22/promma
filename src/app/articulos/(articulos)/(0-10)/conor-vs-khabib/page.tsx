import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/peleadores__images/peleadores__hero.jpg'

export const metadata: Metadata = {
    title: 'Qué Pasó Entre Conor y Khabib',
    description: '',
    openGraph: {
        title: 'Qué Pasó Entre Conor y Khabib',
        description: '',
        url: 'https://fullmma.org/articulos/conor-vs-khabib'
    }
}

export default function KhabibVsConor () {
    return(
        <main>
            <ArticleHero title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó Realmente Antes y Después de la Pelea?' subtitle='Vamos a hablar de la razón de tanta rivalidad entre estos 2 peleadores, por qué Khabib luego del combate fue a pelear con alguien de la esquina de Conor, el incidente del bus...' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Dillon Danis y Khabib</h2>
                    <p>Aparentemente el &quot;beef&quot; que había entre McGregor y Khabib, comenzaría por culpa de Dillon Danis, quien es un amigo cercano y compañero de entrenamiento de Conor, que es además especialista en Jiu-Jitsu. Este se habría ofendido y le habría molestado ver la imagen de Khabib en la que llevaba puesta una remera que decía &quot;Si el Sambo fuera fácil se llamaría Jiu-Jitsu&quot;, luego de esto Danis afirmaría que él podría vencerlo facilmente en un duelo de grappling, además de afirmar cosas como que Conor podría enfrentarse en suelo al ruso, y además sería capaz de someterlo. Sin embargo, en un principio Khabib no le hizo mucho caso.</p>
                    <h2>El incidente del Bus de McGregor</h2>
                    <p>Este conflicto al parecer se daría luego de que <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> y <b>Artem Lobov</b> tuvieran un pequeño altercado, donde el ruso y su equipo acorralarían a Lobov, intimidandolo. Este, le contaría lo sucedido a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, que es un amigo cercano de él, y en respuesta decidirían, junto a otras 20 personas con credenciales de su equipo, ingresar al Braclays Center el 5 de abril durante la audiencia promocional para UFC 223, con el objetivo de increpar a Khabib, que estaba abandonando la arena junto a otros peleadores que también iban a participar del evento. Mientras el autobus se iba retirando lentamente, McGregor lanzó una carretilla de carga en forma de L a este, rompiendo las ventanillas del autobús, dejando en el camino a los peleadores Ray Borg y Michael Chiesa heridos en el camino por los cristales, luego de ir al hospital se decidió que por su salud no participarían del UFC 223 como estaba planeado en un principio.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Xc56YrGbwu0?si=5pM7c1wQS83cJ9ki" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Como resultado de estas acciones Conor recibió una orden de arresto, fue acusado de con 3 cargos de agresión y un cargo de delito criminal. Sin embargo, pese a que aquella noche se entregó se declaro no culpable, siendo finalmente declarado culpable de cargo de conducta desordenada y se le ordenó realizar cinco días de servicio comunitario y asistir a clases de manejo de la ira.</p>
                    <p>Luego de todo este incidente, se terminaría anunciando una pelea entre el irlandés y el ruso para el 6 de octubre de 2018, en Paradise, Nevada por UFC 229.</p>
                    <h2>El incidente después de la pelea</h2>
                    <p>Al combate ya se había llegado con un combate bastante caldeado, más allá del incidente del autobus y de las palabras de Dillon Danis. En la previa Conor se había dedicado a hablar mierda de todo lo que estuviera relacionado a Khabib buscando así meterse en su cabeza y sacar alguna ventaja deportiva, además de vender la pelea. En el proceso se metió con el mismo Khabib, con su familia, con su esposa, con su religión y hasta con el presidente de su país.</p>
                    <p>Una vez terminada la pelea, que ganó Khabib luego de someter al irlandés, en medio de la euforia se salió del cuadrilatero para ir a fajarse con <b>Dillon Danis</b>, que aparentemente estaba gritando y diciendole cosas, Khabib explicó su punto de vista: &quot;No escuché a Danis durante la pelea. Salté sobre él porque el resto de la esquina de Conor son muy viejos. Por eso salté sobre él, él tiene casi mi edad. No hubiera saltado sobre Kavanagh porque es muy mayor para pelear conmigo. La verdad no escuché nada de lo que gritaba Danis durante la pelea porque había mucho ruido. No me agrada nadie de su equipo, pero todos los demás eran demasiado viejos para pelear conmigo. Por eso brinqué sobre él específicamente&quot;.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/5766umgl_6Q?si=S1A9mMl8l5A_fCyW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Por su parte el mismo Dillon dijo: &quot;Todo comenzó creo que en el segundo o tercer round. Yo estaba detrás de la jaula y él comenzó a acercarse a señalar y a decirme cosas. En mi mente pensé que el tipo estaba loco. Yo solo intentaba enfocarme en mi amigo Conor, y Khabib seguía diciendo cosas y maldiciendo. Pensé que estaba totalmente loco. Incluso entre rounds se quedaba mirando y diciendo cosas. Empezó durante la pelea así que me pude dar cuenta que él estaba en otro estado mental&quot;.</p>
                    <p>Además agregó: &quot;Después de que terminó la pelea yo obviamente estaba en shock. Conor es uno de mis amigos más cercanos, mi compañero de entrenamiento y lo aprecio mucho. Yo simplemente estaba ahí sentado tras ver perder a mi amigo. Entonces sentí alguien golpeándome en la espalda y pensé que era la comisión tratando de entrar a la jaula. Al voltear vi que era él (Rizvan Magomedov), y entonces lo confronté. Al voltear vi a Khabib lanzar el protector bucal y me salpicó de saliva. Entonces le dije, ‘venga, ven acá.’ Él terminó saltando la malla y pasó lo que pasó. Fue una locura, simplemente pasó&quot;.</p>
                    <p>Además de este enfrentamiento entre Khabib y Dillon Danis, Conor también se peleó con gente de la esquina del ruso, concretamente con su primo <b>Abubakar Nurmagomedov</b>, dandole un golpe que le sería devuelto.</p>
                    <p>Producto de esto, el pago de la pelea a Khabib le fue retenido por la Comisión de Atlética del Estado de Nevada, que presentaría una queja formal contra ambos peleadores, recibiendo prohibiciones indefinidas hasta la audiencia oficial que tuvo lugar en diciembre de 2018. Finalmente la NSAC votaría la moción para aprobar la mitad del pago a Nurmagomedov por la pelea, equivalente a 2 millones de dolares, además suspenderían durante 6 meses a McGregor y le darían un multa de $50.000.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}