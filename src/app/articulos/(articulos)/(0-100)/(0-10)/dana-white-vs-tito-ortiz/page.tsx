import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/0-10/dana_vs_ortiz.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Dana White vs Tito Ortiz',
    description: 'Una de las historias más sorprendentes del mundo de las MMA, y en partícular de la UFC, que va a llamar la atención especialmente a los fans más casuales o más recientes, es la vez en la que Dana White, presidente de la UFC, estuvo a punto de pelear en un ring de boxeo contra uno de sus propios peleadores, Tito Ortiz.',
    openGraph: {
        title: 'Dana White vs Tito Ortiz',
        description: 'Una de las historias más sorprendentes del mundo de las MMA, y en partícular de la UFC, que va a llamar la atención especialmente a los fans más casuales o más recientes, es la vez en la que Dana White, presidente de la UFC, estuvo a punto de pelear en un ring de boxeo contra uno de sus propios peleadores, Tito Ortiz.',
        url: 'https://fullmma.org/articulos/dana-white-vs-tito-ortiz'
    }
}

export default function DanaVsOrtiz () {
    return(
        <main>
            <ArticleHero title='La Pelea de Boxeo Entre Dana White y Tito Ortiz que Finalmente no Ocurrió' subtitle='La historia de rivalidad entre Tito Ortiz y Dana White, y la pelea de boxeo entre estos 2 que se llegó a pactar pero que nunca se dió.' image={hero} date='2024-09-14' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Una de las historias más sorprendentes del mundo de las MMA, y en partícular de la <Link href='/articulos/ufc'>UFC</Link>, que va a llamar la atención especialmente a los fans más casuales o más recientes, es la vez en la que <b>Dana White</b>, presidente de la UFC, estuvo a punto de pelear en un ring de boxeo contra uno de sus propios peleadores, <b>Tito Ortiz</b>. </p>
                    <p>Lo más curioso de todo, es que en un primer momento, la relación entre Dana y Tito era más que buena, al punto de compartir una gran amistad, siendo en un primer momento, la relación entre peleador y manager lo que unió a ambas figuras, siendo Dana White el manager de Tito Ortiz desde finales de los 80s. En aquel momento, el hoy magnate estadounidense, también se convirtió en representante de <Link href='/leyendas/chuck-liddell'>Chuck Liddell</Link>, convirtiéndose en una figura positiva para ambos peleadores, dado que con el objetivo de convertirlos en estrellas, los impulsaría en sus carreras y les conseguiría mejores contratos con la UFC, aumentando la paga que estos recibían. Esta era una de las razones por la que la relación entre Tito y Dana era tan buena, con un Tito Ortiz que se sentía bastante cómodo con Dana White como su manager, considerándolo casi que un hermano mayor.</p>
                    <YouTubeEmbed videoid='ynh6Nx__tmI' />
                    <p>Fue durante este tiempo que Ortiz se convirtió en el campeón de peso semipesado de la UFC, al vencer por decisión unánime al brasileño <b>Wanderlei Silva</b>. Sin embargo la relación entre peleador y representante cambiaría drásticamente cuando <b>Dana White</b> se haría con la presidencia de la UFC, luego de que esta sea comprada por los hermanos <b>Ferttita</b>. Debido al claro conflicto de intereses al ser presidente de la UFC, y al ser representante de peleadores de su compañía, Dana se vió obligado a dejar de representarlo tanto a él, como a Chuck Liddell. Dana White cree que, a diferencia de Chuck, Tito comenzó a resentirlo por esto, comenzando a verlo ya no como su representante y amigo, sino como su jefe, demonizándolo hasta cierto punto. </p>
                    <p>El primer de los conflictos entre Tito y Dana llegó luego de que Ortiz completara su quinta defensa consecutiva del título, al derrotar por TKO a <b>Ken Shamrock</b> en el UFC 40. Esta pelea significó un alivio económico para la compañía que en aquel momento estaba sufriendo para mantenerse. Tito creyó ser una parte muy importante del repunte económico de la UFC, por lo que pidió una mayor remuneración económica. Por su parte Dana rechazó el pedido del campeón, alegando que este no sería nadie sin él. En medio de la tensión, la UFC puso en juego un cinturón interino para la división de semipesados, poniendo a competir a <Link href='/leyendas/chuck-liddell'>Chuck Liddell</Link> y al excampeón de peso pesado <Link href='/leyendas/randy-couture'>Randy Couture</Link>, en una pelea donde Couture se terminaría imponiendo por TKO en el tercer asalto.</p>
                    <p>Finalmente se organizaría una pelea por el título de semipesados de la UFC, en la que sería la sexta defensa de Tito, ante el campeón interino Randy Couture, donde el campeón terminaría por perder su título ante el ex peso pesado. </p>
                    <p>Luego de perdido su cinturón, a Tito Ortiz se le ofreció pelear ante su excompañero y amigo <b>Chuck Liddell</b>. Esta es una pelea que Chuck sí aceptaría, pero que Ortiz por otro lado rechazaría, argumentando que tenía un pacto con Liddell, en el que jamás pelearían entre sí, a menos que se tratara de una pelea con una gran cantidad de dinero de por medio. Dana White argumentó que el dinero que le ofrecieron, para lo que se cobraba en aquel momento era bastante.</p>
                    <p>Esto ocasionó otra rotura en las relaciones del peleador y presidente, dado que por un lado Tito se sentía defraudado y traicionado porque no pensó que tendría que pelear a quien entonces consideraba su amigo (chuck liddell), y por otro lado, Dana nunca fue fan de los peleadores que rechazan las peleas, y tampoco se creyó que Ortiz estuviera negándose a pelear por su amistad con Chuck, sino porque creía que este iba a perder. El punto es que finalmente el 2 de abril de 2004, en el UFC 47, Tito Ortiz y Chuck Liddel se enfrentarían en el octágono, en lo que terminaría en una victoria por KO a favor de Chuck Liddell, que mandó a dormir a Tito en el segundo asalto. Dana considera esta pelea y este KO, uno de los momentos más placenteros en la historia de la UFC.</p>
                    <YouTubeEmbed videoid='HyKJaj0VePY' />
                    <p>Los problemas se irían acrecentando porque Tito comenzaba a tener cada vez mayores exigencias economicas, amenazando de bajarse de combates que ya estaban pactados si no se le pegaba más dinero, lo que lo volvía un peleador poco confiable a la hora de organizar peleas. Debido a esto, Tito tendría sólo 2 peleas más (que ganaría por decisión ante <b>Patrick Côté</b> y ante <b>Vitor Belfort</b>), finalizando su contrato con la compañía y siendo invitado a buscar otra promotora para seguir peleando. </p>
                    <p>A pesar de que Dana White no parecía tener intenciones de firmar un nuevo contrato con Tito, en el 2006 terminaría por ceder, otorgándole un contrato a Ortiz bastante mejor del que tenía, e incluyendo una cláusula bastante curiosa, en la que se decía que Dana White y Tito Ortiz debían tener una pelea de boxeo de 3 minutos por asalto durante 3 rounds. </p>
                    <p>Ortiz creía que resolviendo las cosas en un ring la relación entre ambos podría mejorar, dado que fue el caso con varios peleadores a los que enfrentó, con quienes luego de pelear, pudo formar una relación de amistad. Sin embargo, pese a que hay un vídeo de Dana White presentándose al día del pesaje y dando el peso pactado, la pelea no se dió debido a que Tito faltó el día del pesaje y se bajó de la pelea. Respecto a la razón del porqué Tito decidió hacer esto, se dividie en 2 versiones.</p>
                    <YouTubeEmbed videoid='o0bVAmC5ShM' />
                    <p>Por un lado, Tito Ortiz sostiene que en el contrato que firmaron estaba pactada una paga del 50/50 de lo que generara la pelea, pero que sin embargo, al momento de ofrecerle el combate ante Dana, no tenían pensado pagarle nada, lo que significaba una situación de perder o perder para él, dado que estaría peleando por nada.</p>
                    <p>Dana White sin embargo cree que Tito tenía todas las intenciones de pelear con él en un primer momento, pero que al momento de ver que tan en serio se tomó el jefe la pelea, se arrepintió. También remarca algo que es cierto, y es que en caso de que Tito hubiera ganado aquella pelea, es lo que todos esperaban, por lo que la victoria hubiera tenido sabor a poco, y por otro lado, si Tito perdía ante Dana White, sería una situación incluso peor para el peleador, por lo que en sí no tenía mucho sentido esta pelea para Ortiz. Queda en cada uno a quien creerle.</p>
                    <p>Hubiera sido bastante curioso ver cómo terminaba esta pelea, y me apena que finalmente no se haya dado, porque no es común ver a un promotor o presidente de una compañía pelearse en un ring con quien es (al menos en ese momento), una de las mayores estrellas que tenía. </p>
                    <p>Hoy en día la relación entre ambos ha mejorado bastante, y aunque no es la relación de amistad que parecían tener en el pasado, es bastante mejor que la que llegaron a tener en el momento más caldeado entre ambos. Aún así, hay un clip de Dana White tratando de tonto a Tito Ortiz, por ser <b>&quot;el tipo de persona que pasa por encima de un dólar para recoger una moneada de 10 cetavos&quot;</b>, además de lamentar que, según él, Tito haya destruido la relación que pudo haber tenido con la UFC.</p>
                    <YouTubeEmbed videoid='5rE7b1nDaVk' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}