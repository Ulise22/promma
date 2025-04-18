import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/peleadores__images/0-100/30-40/umar-nurmagomedov/umar_nurmagomedov-card.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Sandhagen vs Nurmavomedov',
    description: 'Joel Álvarez gana por nocaut en el tercer asalto de la pelea. Tony Ferguson vuelve a perder una vez más, cayendo derrotado en esta ocasión ante Michael Chiesa. Shara Bullet gana por decisión unánime su tercer pelea en la UFC.',
    openGraph: {
        title: 'Sandhagen vs Nurmavomedov',
        description: 'Joel Álvarez gana por nocaut en el tercer asalto de la pelea. Tony Ferguson vuelve a perder una vez más, cayendo derrotado en esta ocasión ante Michael Chiesa. Shara Bullet gana por decisión unánime su tercer pelea en la UFC.',
        url: 'https://fullmma.org/covertura-ufc/fight-night-sandhagen-nurmagomedov'
    }
}

export default function SandhagenNurmagomedov () {
    return(
        <main>
            <ArticleHero title='UFC FIGHT NIGHT: ¡Umar Nurmagomedov Gana Por Decisión Unánime a Cory! ¡El Ecuatoriano Marlon Vera Cae Derrotado por el Brasileño Figueiredo Por Decisión Unánime!' subtitle='Joel Álvarez gana por nocaut en el tercer asalto de la pelea. Tony Ferguson vuelve a perder una vez más, cayendo derrotado en esta ocasión ante Michael Chiesa. Shara Bullet gana por decisión unánime su tercer pelea en la UFC.' image={hero} date='2024-08-03' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Hoy tenemos noche de UFC en los Emiratos Árabes con un montón de peleas, siendo la que tendrán <b>Cory Sandhagen</b> y <b>Umar Nurmagomedov</b> la que encabezará el evento. Además, volveremos a ver pelear a <b>Shara Bullet</b> en la pelea coestelarn en lo que sería su tercer pelea en la compañía, enfrentando al polaco <b>Michal Oleksiejczuk</b>.</p>
                    <h2>Joel Álvarez Noquea a Elves Brener en el Tercer Asalto</h2>
                    <p>En una excelenta pelea y desempeño por parte del español, Joel Álvarez logra una increíble victoria por nocaut en el tercer asalto de la pelea, luego de haber dominado durante todo el combate a su rival brasileño. </p>
                    <p>De llevarse la pelea a la decisión de los jueces, seguramente igual Joel se habría hecho con la victoria, sin embargo esto no lo detuvo de buscar la finalización en el último asalto, logrando conectar una larga combinación de golpes, incluídos muchos rodillazos a la cabeza de Brener que no pudo hacer nada ante el poder del español.</p>
                    <h2>Mackenzie Dern Vence por Decisión Unánime a Loopy Godinez</h2>
                    <p>La brasileña <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link> se lleva la segunda pelea de la cartelera estelar en las 115 libras por decisión unánime ante la peleadora mexicana. De esta forma corta con una racha de 2 derrotas consecutivas, siendo la última la que sufrió en el <Link href='/noticias/ufc298'>UFC 298</Link> contra su compatriota <b>Amanda Lemos</b>.</p>
                    <h2>Michael Chiesa Somete en el Primer Asalto a Tony Ferguson</h2>
                    <p><b>Michael Chiesa</b> logra cortar con una racha de 3 derrotas consecutivas en una pelea que logró finalizar en el primer asalto con un mataleón que obligó a Tony a tapear.</p>
                    <p><Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> se convierte en el peleador con la mayor racha de derrotas consecutivas con esta derrota, con un total de 8. Desde hace 5 años que no consigue una victoria en su carrera, siendo la última derrota sufrida, antes de la de hoy, ante el inglés <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>.</p>
                    <p>Luego de la pelea, Tony dejó caer que ya se retiraba del deporte, dejando sólo uno de los guantes en el octágono, expresando que si Dana White le ofrecía una pelea estaba dispuesto a volver. Sin embargo, esto parece poco probable por lo que podemos decir que finalmente, Tony Ferguson puso fin a una legendaria carrera, como la que él tuvo.</p>
                    <h2>Marlon Vera Cae Ante Deivenson Figueiredo Por Decisión</h2>
                    <p>En una pelea que fue bastante pareja, el brasileño <b>Deivenson Figueiredo</b> se lleva la pelea por decisión unánime, y consigue meterse de lleno en esta pelea en el top5 de la división de peso gallo.</p>
                    <p>Lamentablemente para el ecuatoriano <Link href='/peleadores/marlon-vera'>Chito Vera</Link> no pudo hacer lo suficiente para llevarse la pelea, y de esta forma obtiene su segunda derrota consecutiva, habiendo llegado a este combate luego de perder su oportunidad titular por el título ante <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link> en el <Link href='/noticias/ufc299'>UFC 299</Link>, organizado en marzo de este año.</p>
                    <h2>Shara Magomedov Gana a Michal Oleksiejczuk Por Decisión Unánime</h2>
                    <p><b>Shara Bullet</b> logra su tercer victoria en su tercer combate en la UFC, dando un espctáculo con su striking, dominando completamente la pelea cuando se dió de pie, y consiguiendo conectar varios golpes incluso cuando fue derribado por su rival, quien se vió superado por el volumen y la cálidad de golpes del peleador de Daguestán. Con esta victoria Shara conserva su récord perfecto y su invicto, que ahora se eleva a 14-0.</p>
                    <h2>Umar Nurmagomedov Gana Por Decisión a Cory Sandhagen</h2>
                    <p>Umar Nurmagomedov, el primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, con quien contaba en su esquina, logra una victoria por decisión unánime ante el #2 de la división de peso gallo <b>Cory Sandhagen</b>, a quien logró dominar tanto de pie como en el suelo, obteniendo una merecida victoria.</p>
                    <p>De esta manera, con esta victoria Umar logra mantener su récord invicto, ampliándolo a 18-0, y logrando escalar hasta el top5 de los rankings. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}