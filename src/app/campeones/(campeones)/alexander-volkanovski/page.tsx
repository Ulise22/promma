import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import volkanovski from '@/assets/peleadores__images/alexander-volkanovski/volkanovski.png'
import pelea from '@/assets/peleadores__images/alexander-volkanovski/volkanovski_pelea.jpg'
import volk from '@/assets/peleadores__images/alexander-volkanovski/volk.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Volkanovski () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={volkanovski} w={26} l={3} d={0} nombre='Alexander Volkanovski' apodo='THE GREAT' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Volkanovski UFC</h2>
                    <p>Alexander Volkanovski es un peleador de mma australiano, vigente campeón de Peso Ligero de UFC. Desde su ingreso en la compañía en 2016 disputo 15 combates, ganando 13 de estos, venciendo peleadores históricos como <b>José Aldo</b>, o <Link href='/peleadores/max-holloway'><b>Max Holloway</b></Link>.</p>
                    <p>Debutó en UFC el 26 de noviembree ed 2016, luego de algunos peleando en promotoras regionales de Australia, venciendo por TKO al japonés Yasuke Kasuya. Sigue peleando desde hace años en ufc y va camino a ser un histórico de su división de Peso Ligero.</p>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski record</h2>
                    <p>Volkanovski tiene un recor impresionante en mma. Ha ganado 26 combates y sólo ha perdido 3, siendo 2 de estos contra un luchador más pesado que él, como lo es <Link href='/campeones/islam-makhachev'>Islam Makhachev</Link>, y la otra siendo por un TKO en los inicios de su carrera hace ya más de 10 años.</p>
                    <Image className={styles.peleador__article__image} src={volk} alt='El peleador australiano de mma retirandose contento con su cinturón de campeón de UFC luego de haber ganado un combate' />
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Historia</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski nació el 29 de septiembre de 1988, en la ciudad de Wollongong, que queda ubicada en el Estado australiano de Nueva Gales del Sur. Sus padres son macedonios y comenzó a entrenar lucha libre desde pequeño, incluso ganando un título cuando tenía 12 años. Sin embargo durante su adolescencia comenzó a centrarse en otros deportes como el rugby donde compitió hasta que cumplió sus 22 años, momento en el cuál comenzaría a entrenar MMA y lucha grecoromana.</p>
                    <p className={styles.peleador__article__text}>Debido al extenso periodo en que practió rugby, Volkanovski al inicio de su carrera lucho en la división de Peso Mediano, antes de meterse las divisiones de peso ligero y peso pluma. Ganó 4 peleas a nivel amateur antes de meterse a pelear en promotoras de Oceanía a nivel profesional, promotoras donde llegó a acumular un record de 13-1 antes de arrivar a la UFC, siendo sus últimas 10 victorias seguidas.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El campeón de UFC y luchador de MMA Alexander Volkanovski en el suelo siendo estrangulado por el también peleador de ufc Brian Ortega en su combate de UFC 266' />
                    <p className={styles.peleador__article__text}>En UFC compitió hasta volverse campeón de Peso Ligero, y defendió su cinturon unas 5 veces, ganando cada una de ellas, cada vez de manera más contundente. Actualmente sigue compitiendo, se encuentra casado y tiene 2 hijas.</p>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Ilia Topuria</h2>
                    <p className={styles.peleador__article__text}>La pelea entre Volkanovski e <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> es algo que muchos vienen anticipando y parece inevitable que sucede. El vigente campeón ded Peso Ligero, ha barrido con toda su división y parece haberse quedado sin rival, el único del top que no lo ha enfrentado hasta el momento y que además está invicto, es el hispano-georgiano Ilia Topuria.</p>
                    <p className={styles.peleador__article__text}>La pelea entre estos se ha ido calentando de a poco, ya que la confianza que ha demostrado tener Ilia lo llevaron a declarar en muchas ocaciones, que no sólo se ve capaz de ganarle al campeón australiano, sino que además se ve noqueandolo, algo que para muchos fans de Alexander Volkanovski se vio como una falta de respeto, esto llevo al campeón a declarar recientemente que &quot;Necesita una lección de humildad. Así que estoy feliz de ser la personas que le enseñe esa lección&quot;.</p>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Última Pelea</h2>
                    <p className={styles.peleador__article__text}>La última pelea en la que pudimos ver a Alexander Volkanovski fue en su revancha contra <Link href='/campeones/islam-makhachev'>Islam Makhachev</Link>. Pelea que tomó en corto aviso, tan sólo a 10 días de que se hiciera la pelea. Finalmente la pelea teminó con nocaut del ruso contra el australiano, producto de una patada que dejó en el piso a Volkanovski en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Dicho combate generaba espectativa, porque en su primer pelea que también había terminado con una victoria para Makhachev, pero esta fue por decisión y el transcurso de la pelea fue bastante cerrado, dando lugar a que muchos pensaran que en realidad el ganadador de la primera pelea había sido el campeón australiano. Dicho combate se puede encontrar hoy en día en Youtube.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/OQef0jJ_k9U?si=J-27FfCI6lV4Cuja" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Próxima Pelea</h2>
                    <p className={styles.peleador__article__text}>Recientemente <b>Dana White</b> confirmó que Alexander Volkanovski se enfrentará a Ilia Topuria en febrero de 2024 por UFC 294, todavía sin una ubicación para la pelea confirmada.</p>
                    <p className={styles.peleador__article__text}>Esta pelea se venía promocionando bastante en los últimos meses, y tanto Volkanovski como Topuria venían pidiendo dicho combate, por lo que en febrero veremos si tenemos nuevo campeón o si por el contrario, Volkanovski le quitará el invicto a Ilia Topuria, agrandando aún más la dinastía que ha impusto en la división.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}