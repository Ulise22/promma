import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import weili from '@/assets/peleadores__images/mujeres/0-10/zhang-weili/weili.png'
import postpelea from '@/assets/peleadores__images/mujeres/0-10/zhang-weili/afterfight.jpeg'
import zhang from '@/assets/peleadores__images/mujeres/0-10/zhang-weili/zhang-weili.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zhang Weili',
    description: "Zhang Weili pelea en la UFC desde agosto de de 2018 y es la vigente campeona de Peso Paja Femenino luego de que recupera su cinturon contra la estadounidense Carla Esparza venciéndola por sumisión en el segundo asalto.",
    openGraph: {
        title: 'Zhang Weili',
        description: "Zhang Weili pelea en la UFC desde agosto de de 2018 y es la vigente campeona de Peso Paja Femenino luego de que recupera su cinturon contra la estadounidense Carla Esparza venciéndola por sumisión en el segundo asalto.",
        url: 'https://fullmma.org/mujeres/zhang-weili'
    }
}

export default function ZhangWeili () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={weili} w={25} l={3} d={0} nombre='Zhang Weili' apodo='MAGNUM' categoria='Peso Paja Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Zhang Weili UFC</h2>
                    <p className={styles.peleador__article__text}>Zhang Weili pelea en la <Link href='/articulos/ufc'>UFC</Link> desde agosto de de 2018 y es la vigente campeona de Peso Paja Femenino luego de que recupera su cinturon contra la estadounidense <b>Carla Esparza</b> venciéndola por sumisión en el segundo asalto.</p>
                    <p className={styles.peleador__article__text}>Como dije anteriormente está en UFC desde 2018 y fue campeona 2 veces en su división. La primera vez cuando noqueo a la brasileña <b>Jéssica Andrade</b> a los 42 segundos del primer asalto, en agosto de 2019, apenas un año después de su debut, en el UFC Fight Night: Andrade vs Zhang que se organizó en China. </p>
                    <p className={styles.peleador__article__text}>Luego de obtener el cinturón, lo defendió una vez de manera exitosa contra Joanna Jedrzejczyk, a quien derrotó por decisión divida. Pero terminaría perdiendo su cinturón contra la estadounidense <b>Rose Namajunas</b>, quien la noqueó de una patada en la cabeza en el primer asalto en abril de 2021 en UFC 261. Se volverían a enfrentar en una revancha, en noviembre del mismo año por UFC 268, combate que la peleadora asiática volvería a perder, pero esta vez por decisión dividida. Estas 2 derrotas contra <b>Rose Namajunas</b> son las únicas que Zhang tiene en UFC.</p>
                    <p className={styles.peleador__article__text}>Después de gamar una revancha contra la peleadora polaca Jedrzejczyk, la luchadora china tendría la oportunidad dde volver a pelear por el título contra la nueva campeona estadounidense <b>Carla Esparza</b> a quien derrotaría por sumisión en el segundo asalto.</p>
                    <h2 className={styles.peleador__article__title}>UFC Zhang vs Jedrzejczyk</h2>
                    <p className={styles.peleador__article__text}>Zhang y Jedrzejczyk se han enfrentado 2 veces por UFC, la primera por el título que sostenía la luchadora china, pelea que terminó en victoria para esta misma y que le permitió conservar su campeonato. Y la segunda en UFC 275 en junio de 2022, Zhang Weili venía de 2 derrotas consecutivas para este encuentro contra la campeona Rose Namajunas, y la peleador polaca no había vuelto a pelear desde su encuentro con Zhang.</p>
                    <p className={styles.peleador__article__text}>El combate terminó en victoria por KO para Zhang Weili, y con unas imagenes bastante impactantes luego de que Jedrzejczyk haya terminado la pelea con la cara completamente desfigurada.</p>
                    <Image className={styles.peleador__article__image} src={postpelea} alt='La luchadora de mma polaca Joanna Jedrzejczyk después de su pelea de ufc contra Zhang Weili con la cara completamente deformada' />
                    <h2 className={styles.peleador__article__title}>Zhang Weili Récord</h2>
                    <p className={styles.peleador__article__text}>Zhang Weili tiene un récord de 25-3, siendo 11 de sus 25 victorias por la vía del nocaut, 8 por sumisión y 6 por decisión. Mientras que de sus derrotas sólo una fue por nocaut, mientras que las otras 2 fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Zhang Weili wiki</h2>
                    <p className={styles.peleador__article__text}>Zhang Weili nació el 13 de agosto de 1989, en la ciudad de Handan, ubicada en la provincia china de Hebei. Hizo su debut profesional en las artes marciales mixtas en 2013, donde perdió ante la peleadora MEng Bo por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Pese a debutar con derrota, Zhang fue capaz de roponerse rápido y de hilar 11 victorias consecutivas que la llevaron a pelear por el Campeonato de Peso Femenino Kunlun Fight en mayo de 2017, el cual terminaría ganando en el segundo asalto por TKO. Posterior a su consagración defendería el título un par de veces más hasta que fue contratada por la UFC.</p>
                    <Image className={styles.peleador__article__image} src={zhang} alt='Zhang Weili flexionando los brazos después de un pesaje previo a una pelea de UFC' />
                    <p className={styles.peleador__article__text}>Actualmente, luego de 10 peleas en la compañía, logró convertirse en campeona en tan solo 4 peleas. Y después de perder su título y recuperarlo, está 3era en el ranking libra por libra femnenino.</p>
                    <h2 className={styles.peleador__article__title}>Zhang Weili vs Amanda Lemos</h2>
                    <p className={styles.peleador__article__text}>Uno de sus últimos combate por UFC, fue contra la brasileña Amanda Lemos, que tenía hasta ese momento un record de 13-2-1 luego de derrotar a la también brasileña <b>Marina Rodriguez</b> por TKO.</p>
                    <p className={styles.peleador__article__text}>Este combate era uno que en la previa se veía bastante parejo para las 2 luchadoras, pero que se lo terminó llevando Zhang Weili por decisión unánime luego de una pelea en la que se mostró dominante, llegando incluso a romper el record de golpes asestados en un combate de ufc femenino con un total de 296, un promedio de más de 10 por minuto. Consiguiendo hacer historia en las mma femeninas.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}