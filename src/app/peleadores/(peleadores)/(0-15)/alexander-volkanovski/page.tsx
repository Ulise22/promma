import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import volkanovski from '@/assets/peleadores__images/0-10/alexander-volkanovski/volkanovski.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alexander Volkanovski',
    description: 'Alexander Volkanovski es un peleador de mma australiano, vigente campeón de Peso Ligero de UFC. Desde su ingreso en la compañía en 2016 disputo 15 combates, ganando 13 de estos, venciendo peleadores históricos como José Aldo, o Max Holloway.',
    openGraph: {
        title: 'Alexander Volkanovski',
        description: 'Alexander Volkanovski es un peleador de mma australiano, vigente campeón de Peso Ligero de UFC. Desde su ingreso en la compañía en 2016 disputo 15 combates, ganando 13 de estos, venciendo peleadores históricos como José Aldo, o Max Holloway.',
        url: 'https://fullmma.org/peleadores/alexander-volkanovski'
    }
}

export default function Volkanovski () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={volkanovski} w={26} l={4} d={0} nombre='Alexander Volkanovski' apodo='THE GREAT' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Volkanovski UFC</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski es un peleador de mma australiano, vigente campeón de Peso Ligero de <Link href='/articulos/ufc'>UFC</Link>. Desde su ingreso en la compañía en 2016 disputo 15 combates, ganando 13 de estos, venciendo peleadores históricos como <b><Link href='/leyendas/jose-aldo'>José Aldo</Link></b>, o <Link href='/peleadores/max-holloway'><b>Max Holloway</b></Link>.</p>
                    <p className={styles.peleador__article__text}>Debutó en UFC el 26 de noviembree ed 2016, luego de algunos peleando en promotoras regionales de Australia, venciendo por TKO al japonés Yasuke Kasuya. Sigue peleando desde hace años en ufc y va camino a ser un histórico de su división de Peso Ligero.</p>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Récord</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski tiene un increíble récord de 26-4. Siendo 13 de sus 26 victorias por nocaut, 3 por sumisión y 10 por decisión. Mientras que de sus 4 derrotas, 3 han sido por nocaut y 1 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Historia</h2>
                    <p className={styles.peleador__article__text}>Alexander Volkanovski nació el 29 de septiembre de 1988, en la ciudad de Wollongong, que queda ubicada en el Estado australiano de Nueva Gales del Sur. Sus padres son macedonios y comenzó a entrenar lucha libre desde pequeño, incluso ganando un título cuando tenía 12 años. Sin embargo durante su adolescencia comenzó a centrarse en otros deportes como el rugby, donde llegó a ganar la Premier League con la Warilla Gorillas Rugby League en 2011.</p>
                    <p className={styles.peleador__article__text}>Con la intención de mantenerse en forma para continuar compitiendo en la liga de rugby, Alexander comenzó a entrenar artes marciales mixtas y lucha grecorromana, fue en aquel momento cuando se enamoró del deporte y se dió cuenta que esto era lo suyo. Por ello, al inicio de su carrera luchó en la división de Peso Mediano, dado que por aquellas fechas estaba pesando alrededor de 210 libras, antes de meterse las divisiones de peso ligero y peso pluma. Ganó 4 peleas a nivel amateur antes de meterse a pelear en promotoras locales a nivel profesional, donde hizo su debut el 19 de mayo de 2012, contra su compatriota <b>Gerhard Voigt</b>, a quien luego de 3 asaltos venció por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Llegó a acumular un record de 13-1 antes de arrivar a la UFC, siendo sus últimas 10 victorias obtenidas de forma consecutiva. En la comapañía manejada por Dana White debutaría el 26 de noviembre de 2016, contra el japonés <b>Yasuke Kasuya</b>, a quien venció por TKO en el segundo asalto de la pelea.</p>
                    <p className={styles.peleador__article__text}>Ya en esta compañía se fue labrando un nombre, acumulando una racha de 6 victorias consecutivas desde su debut, lo que le daría la oportunidad de pelear contra el histórico campeón de la división <Link href='/leyendas/jose-aldo'>José Aldo</Link>, que luego de haber perdido su título con <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, buscaba acumular una nueva racha de victorias para recuperar su título. En aquella noche del UFC 237, Alexander Volkanovski derrotaría por decisión unánime al brasileño, ganándose además, el derecho a una pelea por el título contra le campeón <Link href='/peleadores/max-holloway'>Max Holloway</Link>.</p>
                    <p className={styles.peleador__article__text}>En su pelea por el título, que se dió el 14 de diciembre de 2019 en el UFC 245, Volkanovski terminaría llevándose el cinturón luego de vencer a Holloway por decisión unánime. Desde entonces, casi que se volvería invencible en la división, teniendo 5 defensas por el título exitosas, siendo 2 de ellas revanchas contra Max Holloway, que siempre fue el mayor peleador que tuvo la división, sacando al campeón. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/t_5G7bGTPxs?si=XREDws1dEg-lcuoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de haber acumulado una racha de 12 victorias en la UFC, y de haber acabado con practicamente todos los competidores serios de su división, Volkanovski estaba listo para un nuevo reto, por eso subió de división para buscar convertirse en doble campeón, de las categorías de peso pluma y peso ligero, al enfrentar al daguestaní <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> el 12 de febrero de 2023, que recientemente se había convertido en el nuevo campeón de su división al derrotar al brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>. En un combate que duró 5 asaltos, que fue una completa guerra entre ambos peleadores, los jueces terminaron por darle la victoria a Islam Makhachev, sin embargo, nuestro protagonista demostró estar a la altura de los mejores peleadores de toda la compañía, siendo el rankeado #1 en el libra por libra de la UFC, y habiendo incluso quienes creyeron que fue él quien ganó aquel combate.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/SbGbEw0My4U?si=oDwTNcLQ0X7yYa8B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Ese mismo año, vuelve a defender su título de peso pluma contra el mexicano <b>Yair Rodríguez</b>, que venía de ganar el cinturón interino. En aquel combate volvió a demostrar porqué es el mejor, venciendo a Yair por TKO en el tercer asalto, dando una clase completa de pelea.</p>
                    <p className={styles.peleador__article__text}>Para octubre de 2023, en el UFC 294, estaba programada una revancha entre Islam Makhachev y Charles Oliveira, sin embargo este último sufre un corte en la ceja antes del combate que le impide competir, por lo que Volkanovski se ofrece a pelear en su lugar, tomando la pelea con 10 días de anticipación, en la búsqueda de convertirse en doble campeón. Lamentablemente, la falta de un campamento apropiado para la pelea pasó factura, y el día que se dió el combate, Volkanovski sufrió un KO en el primer asalto debido a una patada en la cabeza que logró conectar el ruso. Luego de aquella derrota, el australiano confesó no estar pasando por el mejor momento mentalmente, necesitando mantenerse activo para no sufrir lo que estaba sufriendo psicologicamente.</p>
                    <p className={styles.peleador__article__text}>Poco después acepta una pelea contra un nuevo retador para su título en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, el georgiano español <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, que luego de vencer a <b>Josh Emmett</b>, ranquado #5 en la división, se sentía listo para pelear por el título. La previa del combate estuvo plagada de mucho trash talk, donde entre la muchas cosas que le dijo Ilia Topuria a nuestro protagonista, lo trató de viejo y le dijo que era momento de retirarse. Volkanovski supo tomarse con humor estas declaraciones, subiendo un sketch donde interpreta a un anciano que responde a estas críticas.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/C2nsn2uzWog?si=kn2jaMV_zAnDR8DI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Tristemente para nuestro protagonista, para cuando llegó la pelea, luego de un primer asalto bastante cerrado donde Volk había logrado conectar varios jabs y parecía estar consiguiendo llevar la pelea hacia donde él quería, en una gran combinación de golpes por parte del español, una potente mano derecha conectó con la cabeza de Volkanovski dejándolo KO en el segundo asalto. Perdiendo su cinturón luego de casi 5 años consecutivos de defenderlo de manera exitosa.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}