import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import julianna from '@/assets/peleadores__images/mujeres/0-10/juliana-pena/julianna.png'
import pelea from '@/assets/peleadores__images/mujeres/0-10/juliana-pena/julianna_pelea.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Julianna Peña',
    description: 'Julianna Peña es una peleadora de Artes Marciales Mixtas venezolana que supo ser campeona de la división de peso gallo femenino en la UFC, al vencer por sumisión a la brasileña Amanda Nunes en el segundo asalto, en diciembre de 2021.',
    openGraph: {
        title: 'Julianna Peña',
        description: 'Julianna Peña es una peleadora de Artes Marciales Mixtas venezolana que supo ser campeona de la división de peso gallo femenino en la UFC, al vencer por sumisión a la brasileña Amanda Nunes en el segundo asalto, en diciembre de 2021.',
        url: 'https://fullmma.org/mujeres/julianna-pena'
    }
}

export default function JuliannaPena () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={julianna} w={12} l={5} d={0} nombre='Julianna Peña' apodo='THE VENEZUELAN VIXEN' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña UFC</h2>
                    <p className={styles.peleador__article__text}>Julianna Peña es una peleadora de Artes Marciales Mixtas venezolana que supo ser campeona de la división de peso gallo femenino en la <Link href='/articulos/ufc'>UFC</Link>, al vencer por sumisión a la brasileña <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link> en el segundo asalto, en diciembre de 2021.</p>
                    <h2 className={styles.peleador__article__title}>Julianna Peña vs Amanda Nunes</h2>
                    <p className={styles.peleador__article__text}><Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link> y Julianna Peña se enfrentaron 2 veces, siendo estas 2 también, las 2 últimas peleas de Julianna. En su primer combate, que se realizó el 11 de diciembre de 2021 en Las Vegas, por UFC 269, Julianna derrotó a una histórica <b>Amanda Nunes</b> que venía de defender su título exitosamente 7 veces, con una sumisión en el segundo asalto.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/tZgH72SQfNA?si=7mnL71QhzQNuvZ1o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Algunos meses después se enfrentarían otra vez por UFC 277, cartelera que encabezarían estas 2 en Dallas, Texas. La pelea terminó dando como ganadora esta vez a Amanda Nunes, que luego de 5 asaltos se llevaría la pelea por decisión de los jueces.</p>
                    <p className={styles.peleador__article__text}>Luego de defender el título una vez más en junio de 2023, Amanda Nunes anunciaría su retiro dejando a la división con el título vacante.</p>
                    <h2 className={styles.peleador__article__title}>Julianna Peña MMA</h2>
                    <p className={styles.peleador__article__text}>Su carrera en MMA es extensa, ya que debutó de manera profesional hace casi 15 años, en mayo de 2009. Su estilo de pelea es el Kickboxing, que es el arte marcial con el que se adentró a las mma, y el Jiu Jitsu Brasileño que aprendió más tarde en su carrera, y arte del cual es cinturón púrpura.</p>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Récord</h2>
                    <p className={styles.peleador__article__text}>Alexa grasso tiene un record de 11-5. Siendo 3 de sus 11 victorias por nocaut, 5 por sumisión y 3 por decisión. Mientras que sus 5 derrotas se componen de 1 por nocaut, 2 por sumisión y 2 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Biografía</h2>
                    <p className={styles.peleador__article__text}>Julianna Nicole Peña nació el 19 de agosto de 1989 en la ciudad de Washington, Spokane, Estados Unidos. Es la menor de 4 hermanos. Se graduó en 2007 en el Mt Spokane High School. Ya en su adultez, con la idea de perder peso y canalizar su agresividad, comenzó a asistir a clases de cardio Kick Boxing, que la llevó a transicionar a las MMA, donde debutaría profesionalmente en mayo de 2009 con una victoria contra la estadounidense Raylene Harvey, después de ya haber ganado 2 combates amateur previamente.</p>
                    <p className={styles.peleador__article__text}>Desde entonces, ganó 4 combates y su primera derrota llegaría en 2012 cuando por un combate acordado en 140 libras (63,5kg) en <b>The Ultimate Fighter</b> contra la canadiense Sarah Moras. Julianna competería en TUF en 2013, donde en las semifinales tendría la oportunidad de enfrentarse nuevamente a Sarah Moras, a quien esta vez vencería por sumisión en el segundo asalto. Finalmente terminaría ganando la final y por consiguiente el campeonato de Peso Gallo Femenino de TUF 18, después de vencer a Jessica Rakoczy por TKO en el primer asalto.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='La luchadora venezolana de artes marciales mixtas Julianna Peña encima de su rival golpeandola en un combate de MMA' />
                    <p className={styles.peleador__article__text}>Posterior a su participación en The Ultimate Fighter, Julianna Peña se uniría a la UFC, donde pelearía 9 combates, ganano 6 de ellos y donde incluso llegaría a convertirse en campeona de Peso Gallo Femenino luego de someter a <b>Amanda Nunes</b> en el segundo asalto de UFC 269.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}