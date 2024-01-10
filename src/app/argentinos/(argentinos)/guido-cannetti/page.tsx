import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import cannetti from '@/assets/peleadores__images/0-10/guido-cannetti/guido_cannetti.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'

export default function Staropoli () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={cannetti} w={10} l={7} d={0} nombre='Guido Cannetti' apodo='NINJA' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Guido Cannetti UFC</h2>
                    <p className={styles.peleador__article__text}>Guido Cannetti es un peleador argentino de MMA que compite en la división de Peso Gallo de la <Link href='/promotoras/ufc'>UFC</Link> desde hace casi 10 años, desde que debutara en UFC 180 contra el mexicano <b>Henry Briones</b> con quien caería derrotado por una sumisión en el segundo asalto, sin embargo aquella sería elegida la pelea de la noche.</p>
                    <p>Entre sus combates en la compañía, destaca su victoria contra el estadounidense <b>Randy Costa</b>, a quien sometió poco tiempo después de comenzar el primer asalto, ganandose de esta forma el premio a la Actuación de la Noche.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Guido Cannetti Récord</h2>
                    <p>Actualmente, Guido Cannetti posee un récord de 10-7, siendo 4 de sus 10 victorias por la vía del nocaut, 4 por sumisión y 2 por decisión. Mientras que de sus 7 derrotas, 1 fue por nocaut, 5 por sumisión y 1 por decisión.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Guido Cannetti Historia</h2>
                    <p>Guido Martín Cannetti Álvarez, nació el 19 de diciembre de 1979 en la ciudad de Mar del Plata, ubicada en la provincia de Buenos Aires, Argentina. Comenzó practicando kickboxing y Muay Thai junto a su hermano Bruno, quien también es un peleador profesional de artes marciales mixtas, y con quien es copropietario de un gimnasio llamado <b>Our Town MMA</b> en la ciudad Argentina de Lanús, en la cual enseñan artes marciales mixtas.</p>
                    <p>Guido hizo su debut como profesional contra el argentino <b>Santiago Terbalca</b> a quien logró someter, ganando de esta forma su primera pelea. Siguiendo este camino, tuvo varios combates en promotoras y contra peleadores de latinoamérica, logrando acumular una racha de 4 victorias consecutivas hasta que decidió probarse en el programa de desarrollo de América Latina de UFC, en el cual fue aceptado.</p>
                    <p>De esta manera, para mayo de 2014, Cannetti comenzó a formar parte del elenco de The Ultimate Fighter: Latin America, compitiendo por Team Werdum. En dicho programa, sería derrotado en la primera ronda del torneo por el peleador <b>Marco Beltrán</b>, quien por decisión se llevaría la pelea. Posteriormente entraría a participar otra vez en reemplazo del ecuatoriano <Link href='/peleadores/marlon-vera'>Marlon Vera</Link>, quien había presentado una infección en el pie que no le permitiría continuar participando del programa, aquel combate lo perdería con <b>Alejandro Pérez</b>, quien consiguió ganar por nocaut en el primer asalto.</p>
                    <p>Guido Cannetti haría su debut oficial en UFC al enfrentarse a su compañero de reparte de The Ultimate Fighter: Latin America, Henry Briones, con quien caería derrotado por sumisión en el segundo asalto. Sin embargo obtendría un bono por protagonizar la pelea de la noche.</p>
                    <p>Desde entonces, contando su debut, Guido ha peleado un total de 10 veces en la compañía, manteniendo un récord de 4-6. Siendo su último combate contra el estadounidense <b>Mario Bautista</b>, en la que sería derrotado por sumisión en el primer asalto. Luego de aquel combate, Guido finalmente se retiraría del deporte.</p>
                    <p>En cuanto a su vida personal, Guido Cannetti está casado con su esposa Carolina, con quien tiene 2 hijos, Francesco y Filippo.</p>
                </article>
            </section>
        </main>
    )
}