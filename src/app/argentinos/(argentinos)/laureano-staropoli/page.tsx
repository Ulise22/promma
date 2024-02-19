import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import staropoli from '@/assets/peleadores__images/argentinos/laureano-staropoli/staropoli.png'
import messi from '@/assets/peleadores__images/argentinos/laureano-staropoli/messi-staropoli.webp'
import postfight from '@/assets/peleadores__images/argentinos/laureano-staropoli/staropoli_postpelea.jpg'
import cage from '@/assets/peleadores__images/argentinos/laureano-staropoli/staropoli__cage.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Staropoli () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={staropoli} w={13} l={5} d={0} nombre='Laureano staropoli' apodo='PEPI' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli UFC</h2>
                    <p className={styles.peleador__article__text}>Laureano Staropoli luchó poco más de 3 años en UFC, haciendo su debut con una victoria por decisión unánime contra el mexicano Hector Aldana en nuestro país Argentina, en el evento encabezado por <Link href='/argentinos/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, donde además se convirtiría en la pelea de la noche.</p>
                    <Image className={styles.peleador__article__image} src={cage} alt='El peleador de mma argentino Laureano Staropoli caminando al rededor de la jaula con una bandera de argentina previo a un combate de ufc' />
                    <p className={styles.peleador__article__text}>Luchó un total de 6 combates en ufc, de donde lamentablemente, pese a ganar sus 2 primeros combates, se tuvo que ir, luego de acumular 4 derrotas consecutivas, todas ellas por decisión unánime.</p>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli ARES</h2>
                    <p className={styles.peleador__article__text}>Luego de su salida de UFC, Laureano Staropoli en febrero de 2022 confirma su llegada a la compañía francesa ARES Fighting Championship, promotora bastante nueva, puesto que fue fundada en 2018. Debutaría 2 meses después contra el inglés Carl Booth, a quien derrotaría por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Actualmente en la página oficial de la promotora sigue apareciendo rankeado #1 en donde logró destacar en abril de 2023 al proclamarse campeón de Peso Welter, luego de vencer al frances Mickael Lebout.</p>
                    <Image className={styles.peleador__article__image} src={postfight} alt='publicación de pepi Staropoli en la que lleva una bandera argentina en su espalda y está llorando luego de un combate de ufc' />
                    <h2 className={styles.peleador__article__title}>Pepi Staropoli Campeón</h2>
                    <p className={styles.peleador__article__text}>El 7 de abril de 2023 Laureano Staropoli se consagró campeón de Peso Welter en ARES Fighting Championship luego de derrotar por TKO al francés Mickael Lebout en el segundo round. El argentino logró esto en apenas 3 combates en su compañía.</p>
                    <p className={styles.peleador__article__text}>El contexto en que Laureano fue campeón, impulsó aún más su reconocimiento, ya que al ser de un país tan futbolero, y al ganarle a un francés 4 meses después de la final del mundial de Argentina contra Francia, llevaron a hacer muchos chistes y bromas al respecto. Además de que luego de su consagración, Laureano Staropoli tuvo el lujo de conocer y sacarse una foto con <b>Lionel Messi</b>, otro especialista en vencer franceses.</p>
                    <Image className={styles.peleador__article__image} src={messi} alt='El peleador argentino de mma Laureano Staropoli y Lionel Messi sacandose una foto con el cinturón de campeón del peleador argentino' />
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli Próxima pelea</h2>
                    <p className={styles.peleador__article__text}>Aún no hay confirmación oficial sobre la próxima pelea de Laureano</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}