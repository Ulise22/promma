import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import tsarukyan from '@/assets/peleadores__images/20-30/arman-tsarukyan/arman-tsarukyan.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'

export default function Tsarukyan () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={tsarukyan} w={22} l={3} d={0} nombre='Arman Tsarukyan' apodo='AHALKALAKETS' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan UFC</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan en peleador de nacionalidad armenia y rusa, que compite en la división de peso ligero de la UFC, desde que hiciera su debut contra el ruso <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> el 20 de abril de 2019, quien luego de 3 asaltos lo derrotaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Ha peleado un total de 11 veces en la compañía, teniendo en UFC un récord de 9-2, siendo ambas derrotas por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan Récord</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan posee un récord de 22-3. Siendo 9 de sus 21 victorias por la vía del nocaut, 5 por la vía de la sumisión y 8 por decisión de los jueces. Mientras que de sus 3 derrotas, 2 han sido por decisión y sólo 1 por nocaut al inicio de su carrera en 2015.</p>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan Historia</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan nació el 11 de octubre de 1996 en Ajalkalaki, un pequeño pueblo de Georgia cercano a la frontera con Armenia. Es el hermano del medio de 3, teniendo un hermano mayor llamado Artur y una hermana menor llamada Isabella, y es el hijo de un empresario inmobiliario llamado Nairi Tsarukyan, con quienes a la edad de 3 años se mudó a Rusia en busca de mejorar su calidad de vida.</p>
                    <p className={styles.peleador__article__text}>Arman desde muy joven estuvo interesado en los deportes, llegando a interesarse en el hockey sobre hielo, deporte que practicó durante 10 años, y en el freestyle wrestling donde llegó a destacar. Aunque una vez entrando a la adultez, se vió obligado a abandonar estos deportes para colaborar con su padre en trabajos de construcción. </p>
                    <p className={styles.peleador__article__text}>Haría su debut como profesional en las MMA el 25 de septiembre de 2015, con tan sólo 20 años, en una promotora local de Rusia llamada <b>MFP</b>, en la que competiría gran parte de sus primeros años como peleador. Aquel debut fue contra el ruso <b>Shamil Olokhanov</b>, a quien sería capaz de noquear en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>Su segundo combate como profesional se dió tan sólo un par de meses después, en la misma promotora, contra el ruso <b>Alexander Belikh</b>, quien en tan sólo 30 segundos fue capaz de noquear a nuestro protagonista. Este sería, al menos hasta ahora, el único KO que recibiría en toda su carrera, dado que rápidamente fue capaz de reponerse de esta derrota al vencer por KO al ruso <b>Ali Khaibulaev</b>. </p>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan pelearía de forma muy activa en promotoras rusas y asiáticas en el lapso de 3 años, donde tendría combates, entre los que destacarían, su revancha contra <b>Alexander Belikh</b>, a quien en esta ocasión derrotaría con una sumisión lograda en el primer asalto de la pelea. Además, lograría convertirse en campeón de la ya mencionada <b>MFP</b>, luego de derrotar al japonés <b>Takenori Sato</b> por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Finalmente, llegaría a la <Link href='/promotoras/ufc'>UFC</Link> en 2019, habiendo acumulado un récord de 13-1, debutando el 20 de abril contra el ahora campeón de la división <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien lo derrotaría por decisión unánime luego de los 3 asaltos, en lo que fue un combate muy complicado para ambos.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/HgRhJCOdvpI?si=WDak8qXcNxmSn-I-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de su debut con derrota en la compañía, acumularía una racha de 5 victorias consecutivas, donde las primeras 3 de esas victorias serían por decisión, contra los rivales <b>Olivier Aubin-Mercier, Davi Ramos y Matt Frevola</b>, y donde las siguientes 2 victorias serían por nocaut, contra el estadounidense <b>Christos Giagos</b> y contra el español <b>Joel Álvarez</b>, a quienes vencería en el primer y segundo asalto, respectivamente. Aquella racha se vería interrumpida al enfrentarse y caer derrotado por decisión contra un hueso duro de roer en la división como lo es el polaco <b>Mateusz Gamrot</b>, en un evento que encabezarían ellos 2.</p>
                    <p className={styles.peleador__article__text}>Sin embargo, Tsarukyan supo reponerse bien de la derrota acumulando otras 3 victorias consecutivas, siendo la más destacada de ellas, su victoria por KO contra el estadounidense <b>Beneil Dariush</b> en el primer asalto, que lo ubicó en una posición favorable para enfrentar a <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> en el UFC 300, en lo que sería una eliminatoria por el título de peso ligero de la UFC.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}