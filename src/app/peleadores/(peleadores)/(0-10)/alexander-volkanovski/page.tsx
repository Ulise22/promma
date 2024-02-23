import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import volkanovski from '@/assets/peleadores__images/0-10/alexander-volkanovski/volkanovski.png'
import pelea from '@/assets/peleadores__images/0-10/alexander-volkanovski/volkanovski_pelea.jpg'
import volk from '@/assets/peleadores__images/0-10/alexander-volkanovski/volk.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Volkanovski () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={volkanovski} w={26} l={4} d={0} nombre='Alexander Volkanovski' apodo='THE GREAT' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Volkanovski UFC</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski es un peleador de mma australiano, vigente campeón de Peso Ligero de UFC. Desde su ingreso en la compañía en 2016 disputo 15 combates, ganando 13 de estos, venciendo peleadores históricos como <b><Link href='/leyendas/jose-aldo'>José Aldo</Link></b>, o <Link href='/peleadores/max-holloway'><b>Max Holloway</b></Link>.</p>
                    <p className={styles.peleador__article__text}>Debutó en UFC el 26 de noviembree ed 2016, luego de algunos peleando en promotoras regionales de Australia, venciendo por TKO al japonés Yasuke Kasuya. Sigue peleando desde hace años en ufc y va camino a ser un histórico de su división de Peso Ligero.</p>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Récord</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski tiene un increíble récord de 26-4. Siendo 13 de sus 26 victorias por nocaut, 3 por sumisión y 10 por decisión. Mientras que de sus 4 derrotas, 3 han sido por nocaut y 1 por decisión.</p>
                    <Image className={styles.peleador__article__image} src={volk} alt='El peleador australiano de mma retirandose contento con su cinturón de campeón de UFC luego de haber ganado un combate' />
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Historia</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski nació el 29 de septiembre de 1988, en la ciudad de Wollongong, que queda ubicada en el Estado australiano de Nueva Gales del Sur. Sus padres son macedonios y comenzó a entrenar lucha libre desde pequeño, incluso ganando un título cuando tenía 12 años. Sin embargo durante su adolescencia comenzó a centrarse en otros deportes como el rugby donde compitió hasta que cumplió sus 22 años, momento en el cuál comenzaría a entrenar MMA y lucha grecoromana.</p>
                    <p className={styles.peleador__article__text}>Debido al extenso periodo en que practió rugby, Volkanovski al inicio de su carrera lucho en la división de Peso Mediano, antes de meterse las divisiones de peso ligero y peso pluma. Ganó 4 peleas a nivel amateur antes de meterse a pelear en promotoras de Oceanía a nivel profesional, promotoras donde llegó a acumular un record de 13-1 antes de arrivar a la UFC, siendo sus últimas 10 victorias seguidas.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El campeón de UFC y luchador de MMA Alexander Volkanovski en el suelo siendo estrangulado por el también peleador de ufc Brian Ortega en su combate de UFC 266' />
                    <p className={styles.peleador__article__text}>En UFC compitió hasta volverse campeón de Peso Ligero, y defendió su cinturon unas 5 veces, ganando cada una de ellas, cada vez de manera más contundente. Actualmente sigue compitiendo, se encuentra casado y tiene 2 hijas.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}