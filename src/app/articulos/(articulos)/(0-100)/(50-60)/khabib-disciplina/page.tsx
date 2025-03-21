import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/khabib_disciplina.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'La Disciplina de Khabib',
    description: 'Descubre cuáles son las 3 claves para adoptar el increíble nivel de disciplina que tiene Khabib Nurmagomedov, que le ha llevado a cosechar tantos exitos en la UFC.',
    openGraph: {
        title: 'La Disciplina de Khabib',
        description: 'Descubre cuáles son las 3 claves para adoptar el increíble nivel de disciplina que tiene Khabib Nurmagomedov, que le ha llevado a cosechar tantos exitos en la UFC.',
        url: 'https://fullmma.org/articulos/khabib-disciplina'
    }
}

export default function KhabibDisciplina () {
    return(
        <main>
            <ArticleHero title='Las 3 Claves de la disciplina de Khabib Nurmagomedov' subtitle='Los secreto detrás del arrollador éxito y disciplina espectacular de Khabib que supo trasladar a todo su equipo.' image={hero} date='2025-01-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Cuando uno ve los éxitos que ha cosechado <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, siendo campeón de peso ligero en <Link href='/articulos/ufc'>UFC</Link>, con su victoria ante <Link href='/peleadores/conor-mcgregor'>Conor</Link>, ante <Link href='/peleadores/dustin-poirier'>Poirier</Link> y ante <Link href='/peleadores/justin-gaethje'>Gaethje</Link>, retirándose invicto con 29-0, y demostrando una superioridad abrumadora hacia sus rivales, a uno sólo le queda preguntar ¿cómo lo hace? Porque lo impresionante del método Khabib, no son solamente los logros que le trajeron a sí mismo, sino que fue capaz de trasladarlos y convertirlos en logros de sus compañeros y equipo. Con personas como <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link> o <b>Usman Nurmagomedov</b> siendo ejemplos de esto. Por eso hoy vamos a repasar las claves y secretos detrás de la arrolladora disciplina que fue capaz de construir Khabib Nurmagomedov. </p>
                    <h2>1. No que te quejes</h2>
                    <p>Una de las corrientes filosóficas que uno puede rápidamente asociar a campeones como Khabib, es el estoicismo, que el excampeón de peso ligero aplica diariamente e inculca en sus compañeros de gimnasio. </p>
                    <p>Es por eso que una de las reglas más importantes es la de no quejarse. Nadie te obliga a entrenar, ni a buscar ser un peleador profesional, o un campeón del mundo, eres libre de entrenar con él si es lo que deseas, o sino también tienes la posibilidad de irte a tu casa. Pero lo que Khabib no quiere es que estes para quejarte, si estás en el gimnasio es para entrenar duro, no para quejarte de que estás cansado, o de cualquier otra cosa. </p>
                    <p>En el canal de YouTube <b>Washed</b>, en el podcast “The Muslim Money Experts”, dijo: <b>“no matamos a nadie, no obligamos a nadie, si no quieres, está bien, vete... incluso ayer, estaba hablando porque era sábado y todos se estaban quejando de que estaban cansados. ¿Qué quieres? Toda la semana estuvimos trabajando duro, si para el final de la semana no estás cansado, ahí debes preocuparte por ti mismo”. </b></p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/JV9P_-3evpc?si=xGgtmMreytB8l0X1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p><b>“Es sábado, estuviste trabajando toda la semana tan duro. Por supuesto que vas a estar cansado. Mañana descansas y el lunes vuelves a entrenar. Si no es lo que quieres, vuelve a Daguestán y quédate con tu mamá. Ella te va a dar todos los días un buen desayuno, no tienes que hacer nada, quédate ahí. Pero si quieres venir aquí, no te quejes. Quieres convertirte en el mejor, quieres ser campeón para luego quejarte de que estás cansado, ¿a quién le importa?”</b></p>
                    <p><b>“Si vas a ver una pelea, sólo te importa la pelea, ves como los peleadores hacen la caminata al octágono, como pelean, y se van. No ves el detrás de escena, no es asunto tuyo, a nadie le importa eso”.</b></p>
                    <p><b>“Ustedes sólo ven como peleamos y después se van. Y para eso tenemos que entrenar muy duro. Y si no quieres, avísanos y vuelve a Daguestán”. </b></p>
                    <h2>2. Entrena Duro y Sacrifica el 100%</h2>
                    <p>Otra cosa que caracteriza la mentalidad del excampeón de peso ligero, es no es una persona que busca equilibrios, o que buscó balancear una vida laboral con su carrera deportiva, o que tenía diferentes intereses además de pelear. Por el contrario, para Khabib, si lo que buscas es ser el mejor en algo, necesitas de depositar el 100% de tu energía y dedicación a ese algo, sin distracciones, no puedes pretender dedicarle el 50% y obtener buenos resultados. Para conseguir el éxito necesitas de sacrificar toda tu vida en esa área en la que buscas sobresalir.</p>
                    <p>Por lo que, para alcanzar la cima, es necesario repetir la misma rutina durante toda tu vida, renunciando a lo demás. En base a esta experiencia es que está constituido su gimnasio y su equipo. Según él mismo explica: <b>“Tenemos un hotel, tenemos comida, tenemos autos y tenemos un gimnasio. Todos los días, te levantas, entrenas, comes, duermes y repites.”</b></p>
                    <p><b>“Estuve haciendo lo mismo toda mi vida. Estabilidad, sino tienes estabilidad, si no te recuperas de los entrenamientos, nunca te vas a volver exitoso, en este caso en las artes marciales mixtas. Tienes que entrenar todos los días y hacer lo mismo, sparring, grappling, wrestling, las comidas… todos los días, durante muchos años, necesitas sacrificar todo lo que tienes.”  </b></p>
                    <h2>3. Descanso y Recuperación</h2>
                    <p>Finalmente, una de las claves del éxito que alcanzo Khabib y que de igual forma replicaron personas como Islam Makhachev y Usman Nurmagomedov, es la importancia que le dieron al descanso. Si vas a entrenar tan duro, de la forma en que lo hacen estos peleadores, es importante que de igual forma tengas un descanso acorde al esfuerzo que hiciste. </p>
                    <p>Este punto está muy relacionado con el anterior, puesto que, para el ruso, no puedes estar trabajando o dedicando tu tiempo a otras actividades luego de entrenar. Es importante que el tiempo que no se usa para entrenar, se use para descansar. En el caso de Khabib, su forma preferida de tener descanso es dormir, durmiendo durante la noche y siestas de 2 horas entre los entrenamientos. </p>
                    <p>Según explica: <b>“Entre los entrenamientos necesitas recuperarte, ¿Dónde esta tu recuperación? La mayoría de la gente recurre a los masajes, a suplementos… Para mí, la forma de recuperarse es dormir, es lo más importante, entre entrenamientos me dedico a dormir. Porque entrenas tan duro durante la mañana, y lo haces a la noche también, necesitas descansar, porque necesitas llegar fresco a los entrenamientos”. </b></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}