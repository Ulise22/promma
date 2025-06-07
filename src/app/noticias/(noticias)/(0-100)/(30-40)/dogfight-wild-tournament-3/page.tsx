import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/dwt3.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Dogfight Wild Tournament 3',
    description: "El evento de MMA más loco de España, organizado por el youtuber Jordi Wild, donde habrá desde un 2vs2, peleas sin reglas, peleas medievales, y un evento estelar con 10 luchadores peleando todos contra todos",
    openGraph: {
        title: 'Dogfight Wild Tournament 3',
        description: "El evento de MMA más loco de España, organizado por el youtuber Jordi Wild, donde habrá desde un 2vs2, peleas sin reglas, peleas medievales, y un evento estelar con 10 luchadores peleando todos contra todos",
        url: 'https://fullmma.org/noticias/dogfight-wild-tournament-3'
    }
}

export default function DWT3 () {
    return(
        <main>
            <ArticleHero title='Dogfight Wild Torunament 3: ¡Battle Royal 10 Peleadores Todos Contra Todos!' subtitle="Vuelve el evento más loco del mundo, Dogfight Wild Tournament, en su tercera edición organizaodo por Jordi Wild. Con un 2vs2, pelea femenina sin reglas, pelea en un coche y una pelea medieval." image={hero} date='2025-01-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Comienza el Dogfight Wild Tournament 3 (DWT 3), en lo que será una locura de evento de MMA, organizado en España por el youtuber Jordi Wild. Donde tendremos todo tipo de combates, cada uno más sorprendete y bizarro que el anterior. Comenzando con una pelea a la vieja escuela, donde un peleador de Capoeira se enfrentará a uno de Muay Thai.</p>
                    <p>Además tendremos un combate femenino sin reglas, tendremos un combate medieval de MMA con luchadores usando armaduras antiguas, una pelea de 2 contra 2 en peso pesado con reglas especiales, tendremos una pelea de leyendas sin reglas, una pelea dentro de un coche, y el evento estelar, con un battle royal con 10 peleadores, donde se enfrentarán todos contra todos en un mismo combate. </p>
                    <YouTubeEmbed videoid='tOV2Gy9AQPg' />
                    <h2>Old School Fight (Capoeira vs Muay Thai)</h2>
                    <p>&quot;La Bomba&quot; consigue una espectacular victoria en representación del Muay Thai ante su rival de Capoeira, Giani, luego de haber dominado por completo la pelea en base a patadas al cuerpo y especialmente a la pierna izquierda de su oponente, que le hicieron mucho daño, llegando al punto en que el peleador de capoeira ya no podía mantenerse de pie. Finalmente, luego de una patada que derribaría a su rival, el representante de Muay Thai consiguió conenctar un golpe en la cabeza que haría que el árbitro parara la pelea, dándole la victoria por TKO en el segundo asalto.</p>
                    <h2>No Rules Fight (Yess Castro vs Yamila Sánchez)</h2>
                    <p>En una pelea donde la mexicana Yess Castro comenzó dominando claramente el combate, conectando patadas a todos el cuerpo de su rival, usando estas patadas para mantener la distancias y mantener lejos a Yamila, Castro fue capaz de dominar todo el combate en las diferentes facetas que tuvo este. </p>
                    <p>El momento en que la argentina Yamila Sánchez mejor estuvo, fue cuando estuvo cerca de conectar una guillotina que podría haber sometido a su rival. Sin embargo, Yess Castro fue capaz de defender muy bien este intento de sumisión, aprovechando cuando quedó por encima en la lucha en el suelo, para castigar a su rival con ground & pound del que Yamila no pudo escapar. Terminando de esta manera el combate con 8 minutos muy dominantes por parte de la mexicana que fue muy superior a su rival.</p>
                    <p>De esta manera, la pelea que duró un total de 15 minutos, sin descansos, todo a un solo asaltos, llegó a la mano de los jueces que merecidamente le dieron la victoria a la mexicana Yess Castro en lo que fue un tremenedo combate que tuvo de todo. </p>
                    <h2>2v2 Especial Rules</h2>
                    <p>El equipo rojo, que era el favorito de los fanáticos, debido a que ambos participaron de las anteriores ediciones del DWT, fue el que terminó venciendo por encima del equipo azul.</p>
                    <p>Luego de que uno de los Aitor fuera capaz de someter a su rival a los pocos minutos de iniciado el combate, ayudando de esta forma a su compañero a noquear al peleador restante del equipo azul. </p>
                    <h3>Aitor vs Zdravko</h3>
                    <p>Jordi Wild sorprende y se vuelve loco con la regla especial, al anunciar que los ganadores del combate 2 vs 2 se enfrentaría entre sí, dándonos la tercer pelea entre Zdravko y Aitor, luego de lo que fueron sus combates anteriores en el DWT 1 y 2. </p>
                    <p>Zdravko sería el que terminó llevándose esta locura de combate, consiguiendo noquear rápidamente y convirtiéndose en el ganador de la trilogía contra Aitor. </p>
                    <h2>Extreme Fight (Pelea de Leyendas Sin Reglas)</h2>
                    <p>¡Abner Skullman Lloveras somete a Felipe Maia! La leyenda española fue capaz de someter al brasileño Felipe Maia luego de 10 minutos de combate. </p>
                    <p>En lo que fue una pelea bastante técnica, donde no vimos mucho del striking de ambos luchadores, quien fue capaz de sobreponerse por sobre su rival fue el español, a pesar de que en el transcurso del combate la historia fue diferente, con Felipe Maia dominando gran parte del combate en el suelo a su rival. Sin embargo, el veterano español supo darle la vuelta a la pelea, ganándole la espalda y siendo capaz de conectar un mataleón para derrotar a su rival. </p>
                    <h2>Car Fight</h2>
                    <p>En otro de los combates locos que nos regala Jordi Wild, tendremos un torneo de pelea en el coche, donde 2 peleadores deberán enfrentarse en un auto descapotable en una pelea que durará 5 minutos. Habrá 2 enfrentamientos, donde el ganador de cada uno se enfrentará en una final, </p>
                    <h3>Hugo Derrota a Héctor y avanza a la final</h3>
                    <p>En el primer combate de este torneo, Hugo fue capaz de derrotar a su rival Héctor, luego de dominarlo durante los 5 minutos que duró este, al ganarle la espalda y castigarlo desde atrás. </p>
                    <h3>Alberto Derrota a Izan al lanzarlo fuera del coche</h3>
                    <p>Alberto ha ganado el combate, luego de que en unos pocos minutos haya sido capaz de lanzar fuera del coche, consiguiendo la victoria de esta vía, y siendo el primero en ganar su combate de esta manera. </p>
                    <h3>Final: Alberto vs Hugo</h3>
                    <p>De manera inmediata, teniendo los peleadores apenas unos minutos para descansar, comienza el tercer combate y final de esta serie de peleas. </p>
                    <p>El combate termina yendo a la decisión de los jueces, luego de que finalizados los 5 minutos, ninguno fuera capaz de finalizar a su oponente. Quien terminaría por llevarse la victoria sería Alberto, quien fue el más dominante durante el combate, especialmente al inicio de este, cuando fue capaz de conectar un par de rodillazos a la cabeza de Hugo super potentes. De esta menera quien gana la final y por ende el torneo de lucha de coches es Alberto, quien además fue el único en finalizar a su rival en el primer combate. </p>
                    <h2>Battle Royale (10 Peleadores)</h2>
                    <p>En un combate caótico, The Killer, quien ya había participado de una edición anterior del DWT, fue quien finalmente se quedó con la victoria por encima de sus 9 rivales. </p>
                    <p>La pelea fue un tanto caótica, como era de esperar de un enfrentamiento que nos traía a 10 peleadores enfrentándose todos contra todos.</p>
                    <p>Finalmente, hubieron 3 peleadores que se pusieron de acuerdo para hacer equipo entre ellos, en una estrategia que fue exitosa, dado que fueron ellos los últimos 3 luchadores que quedaron de pie. Goliat, quien parecía el favorito debido a la diferencia de tamaño, terminó siendo expulsado del centro de pelea por uno de sus compañeros. Y finalmente The Killer se quedó con la victoria al someter rápidamente a su rival con una sumisión al estilo <Link href='/peleadores/islam-makhachev'>Makhachev</Link>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}