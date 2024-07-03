import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/shara_magomedov_ojo-hero.png'

export const metadata: Metadata = {
    title: 'Shara Bullet Ojo',
    description: 'Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.',
    openGraph: {
        title: 'Shara Bullet Ojo',
        description: 'Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.',
        url: 'https://fullmma.org/articulos/shara-magomedov-ojo'
    }
}

export default function SharaMagomedovOjo () {
    return(
        <main>
            <ArticleHero title='¿Qué le Pasó en el Ojo a Shara Magomedov?' subtitle='Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.' image={hero} date='2024-06-22' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Shara Magomedov</h2>
                    <p>El peleador Shara Magomedov es sin dudas una de las mayores promesas con las que cuenta la <Link href='/articulos/ufc'>UFC</Link>, que con apenas 30 años y sólo una pelea en la compañía posee un récord invicto de 12-0. Lo que sorprende de su récord no es sólo el echo de que todavía se mantenga invcito, sino que de sus 12 victorias, sólo 2 fueron por decisión, las otras 10 fueron por nocaut.</p>
                    <p>Proveniente de la tierra de luchadores que parece haber en Rusia, Shara nació en la República de Daguestán, al igual que otros peleadores de la compañía como <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, o al igual que la leyenda del deporte <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, aunque a diferencia de estos peleadores, Magomedov se destacá más por su striking que por su lucha en el suelo. </p>
                    <p>Entrenando durante varios años boxeo y muay thai supo aprender y adoptar un sólido estilo de striking que aplica hoy en día en sus peleas de MMA. Hizo su debut profesional en diciembre de 2017 en China, enfrentando allí al peleador <b>Yincang Bao</b>, a quien venció por TKO en el primer asalto. Sus primeras 4 peleas serían en este país, donde acabaría ganando todas por nocaut.</p>
                    <h3>Shara Magomedov UFC</h3>
                    <p>Hasta el momento sólo tiene una pelea en la compañía de Dana White, contra el brasileño <b>Bruno Silva</b>, a quien enfrentó en el UFC 294, evento que encabezaron <b>Islam Makhachev</b> y <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>. Aquella noche Magomedov se iría con la victoria por decisión unánime luego de finalizados los 3 asaltos.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/IiFAAWbYMts?si=s0YAM1fD3gh1qBBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Shara Magomedov Ojo</h2>
                    <p>Algo que sin duda llama la atención a los fanáticos la primera vez que ven a este luchador, es que el ojo derecho de Magomedov está como nublado y carece de movilidad. Esto se debe a una lesión que sufrió hace varios años, en el 2016, que le quitó la visión de este ojo, sobre esto Shara contó que: &quot;<b>Las operaciones fueron costosas, en ese momento me encontraba en el cuidado de mis padres. Fue una situación muy difícil para mí, llegué a no entrenar por dos años</b>&quot;.</p>
                    <p>Lo triste es que debido a la falta de atención que se le dedicó a este ojo, su condición empeoro considerablemente, requieriendo atravesar por 8 cirujías en un corto periodo de tiempo.</p>
                    <p>Sin embargo esto no lo detuvo de continuar con su carrera como artista marcial, ya que, aunque el mismo Shara Magomedov reconoció que hay un antes y un después en su carrea luego de esa herida, lo cierto es que su carrera en las MMA comenzó luego de aquella lesión, y no sólo no ha perdido ninguna de sus peleas desde entonces, sino que consiguió que 10 de sus 12 victorias, fueran por la vía del nocaut.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}