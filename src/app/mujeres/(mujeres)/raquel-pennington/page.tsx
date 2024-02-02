import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import raquel from '@/assets/peleadores__images/mujeres/raquel-pennington/raquel.png'
import fight from '@/assets/peleadores__images/mujeres/raquel-pennington/raquel_fight.jpg'
import pennington from '@/assets/peleadores__images/mujeres/raquel-pennington/raquel_penington.jpg'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Raquel () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={raquel} w={16} l={9} d={0} nombre='Raquel Pennington' apodo='ROCKY' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Raquel Pennington UFC</h2>  
                    <p className={styles.peleador__article__text}>Raquel Pennington es una luchadora de UFC que compite en la categoría de Peso Gallo femenino desde que hiciera su debut oficial en la compañía el 15 de marzo contra la brasileña <b>Jessica Andrade</b> con quien caería derrotada por decisión dividida, actualmente es la campeona indiscutida de su divsión, y se encuentra ranqueada #7 del libra por libra femenino. </p>
                    <Image className={styles.peleador__article__image} src={fight} alt='La luchadora de MMA Raquel Pennington golpeando a su rival de UFC en medio de una pelea' />
                    <p className={styles.peleador__article__text}>A lo largo de su carrera en la compañía supo destacar de sobremanera, dado que a pesar de no ganarlo, fue capaz de pelear por el título contra la legendaria <b>Amanda Nunes</b> por nocaut técnico. Aunque después de acumular una racha de 5 victorias consecutivas, Raquel se ha ganado nuevamente la chance de pelear por el título que quedó vacante luego de la retirada de Amanda Nunes, en esta ocasión lo hará el 20 de enero de 2024 contra la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link>, protagonizando la pelea coestelar del UFC 297.</p>
                    <h2 className={styles.peleador__article__title}>Raquel Pennington Récord</h2>  
                    <p className={styles.peleador__article__text}>Raquel Pennington cuenta con un récord de 15-9, 15 victorias de las cuales 1 es por nocaut que consiguió en su debut como profesional en las MMA, 4 por sumisión y 10 por decisión. Además sus 9 derrotas están compuestas por apenas 1 nocaut, 1 por sumisión y 7 por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Raquel Pennington Historia</h2>  
                    <p className={styles.peleador__article__text}>Raquel Pennington nació el 5 de septiembre de 1988 en la ciudad de Colorado Springs, perteneciente al Estado de Colorado de los Estados Unidos. Es de ascendencia mexicana y desde pequeña practicó muchos deportes, como el basquet, el softball, el voley y el cross-country, que es una modalidad del atletismo que consta de recorrer distancias a través del campo. Ya desde muy temprano Raquel estuvo interesada en el mundo del combate, originalmente queriendo ser boxeadora. Se graduó en 2007 del Harrison High School como secretaria del National Honors Society, con varias becas academicas y atléticas.</p>
                    <p className={styles.peleador__article__text}>Comenzó a entrenar artes marciales a la edad de 19 años, y aunque inicialmente sus padres no la dejarían pelear, terminó compitiendo de forma amateur entre 2009 a 2011, periodo en el que ganaría 7 combates (5 por sumisión) y perdería una sola pelea. Su arduó trabajo y entrenamiento la llevaron a ser actualmente cinturón violeta de Jiu-Jitsu brasileño.</p>
                    <p className={styles.peleador__article__text}>Finalmente haría su debut oficial como profesional en 2012 contra Kim Couture a quien vencería por nocaut en el segundo asalto. Luego de un total de 6 combates, Raquel fue anunciada como miembro del elenco de <b> The Ultimate Fighter: Team Rousey vs. Team Tate Finale</b>, donde compitió avanzando de ronda hasta llegar a enfrentarse en la semifinal a la excampeona de boxeo <b>Jessica Rakoczy</b>, a quien enfrentó a pesar de estar con una lesión en la mano, perdiendo el combate por decisión.</p>
                    <p className={styles.peleador__article__text}>Terminaría por hacer su debut promocional contra quie fue su compañera de equipo de TUF 18, <b>Roxanne Modafferi</b> a quien vencería por decisión unánime el 30 de noviembre de 2013. Y haría su debut en una cartelera en UFC 171, entraría en reemplazo de <Link href='/mujeres/julianna-pena'>Julianna Peña</Link> para enfrentarse a <b>Jéssica Andrade</b>, con quien perdería por decisión dividida. En un futuro obtendría revancha, ya que se volvería a enfrentar a Andrade en el UFC 191, esta vez ganando su combate con una sumisión en el segundo asalto, haciendola merecedora del premio a la actuación de la noche.</p>
                    <p className={styles.peleador__article__text}>Desde entonces ha peleado en la compañía haciendo combates meritorios, compitiendo en una ocasión por el título, que perdería por nocaut técnico, y ganandose la oportunidad de volver a pelear por el campeonato en enero de 2024 contra la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link>.</p>
                    <Image className={styles.peleador__article__image} src={pennington} alt='Raquel Pennington en el gimasio con su entrenador' />
                    <p className={styles.peleador__article__text}>En cuanto a su vida personal, es lesbiana y se casó con la también peleadora de <Link href='/promotoras/ufc'>UFC</Link> <b>Tecia Torres</b>, con quie llevaba comprometiada desde 2017.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}