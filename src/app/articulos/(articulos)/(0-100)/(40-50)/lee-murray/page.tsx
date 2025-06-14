import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/lee_murray.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Lee Murray',
    description: 'Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.',
    openGraph: {
        title: 'Lee Murray',
        description: 'Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.',
        url: 'https://fullmma.org/articulos/lee-murray'
    }
}

export default function LeeMurray () {
    return(
        <main>
            <ArticleHero title='Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido' subtitle='Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.' image={hero} date='2024-07-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Lee Murray es un artista marcial mixto de origen británico y marroquí que se retiró luego de ser apuñalado varias veces frente a un club nocturno. También es un criminal que actualmente se encuentra apresado en Marruecos por planear y ejecutar el robo a mano armada al depósito de Securitas en Inglaterra, donde se robó más de 50 millones de libras esterlinas en efectivo, lo que constituye el mayor robo de dinero en efectivo en la historia de Reino Unido. Sin embargo esta no fue la primera vez que terminó preso, ya que la historia de vida de esta persona es digna de un personaje de GTA. Cuando el presidente de la <Link href='/articulos/ufc'>UFC</Link>, Dana White, fue cosultado por este peleador, su respuesta fue: <b>&quot;Es un hijo de puta aterrador, y no me refiero a él como peleador&quot;</b></p>
                    <YouTubeEmbed videoid='_VcHqHBICVU' />
                    <h2>Lee Murray Historia</h2>
                    <p>Lee Brahim Murray-Lamrani nació el 12 de noviembre de 1977 en Londres, Inglaterra. Su familia, al igual que muchos después de la Segunda Guerra Mundial, eran de clase trabajadora y se trasladaron desde el interior de Londres devastado por las bombas hacia urbanizaciones más lejanas, viviendo en una zona llamada <b>Shooter&apos;s Hill</b> (La colina del tirador), llamada así posiblemente porque aquella zona era conocida por los robos en las carreteras.</p>
                    <p>Siendo un niño se veía envuelto en peleas callejeras con otros niños, en lo que eran una especie de peleas territoriales entre los pequeños. Fue en esa época, que producto de sus orejas protuberantes y de que tenía una expresión maníaca en su rostro cuando peleaba, que se ganó el apodo de &quot;Alien&quot;, el cual detestaba.</p>
                    <p>Desde pequeño nunca tuvo una buena relación son su padre, quien había estado ausente gran parte de su niñez hasta los 7 años, y quien solía llegar a su casa borracho, siendo descrito como un &quot;hombre violento y aterrador, que se comporta de forma volátil y dominante&quot;. La relación entre ellos, pese a que Murray seguía siendo menor de edad, no era mala, era espantosa, al punto en que constantemente ambos terminaban peleando a los golpes, hasta que un día Lee Murray terminó por noquear a su padre de un golpe. El vecino de la familia de al lado escuchó lo que sucedió y contó: <b>&quot;en realidad fue y golpeó a Lee y Lee se quebró, simplemente se dio la vuelta y noqueó a su papá... una vez que se dio cuenta de que podía derrotar a un hombre grande como ese, creo que eso fue lo que convirtió a Lee en el hombre que es ahora: un matón&quot;</b>.</p>
                    <p>Lo tóxico de la relación llevó a su padre a mudarse de la casa, dado que creía que de seguir allí, algunos de los 2 terminaría muerto.</p>
                    <p>Antes de comenzar su carrera como artista marcial, Murray llegó a terminar preso en 3 ocasiones: La primera vez fue condenado por posesión de cocaína y cannabis; la segunda vez fue detenido en la Institución de Delincuentes jovenes de Feltham sentenciado por delitos menores, como asalto y robo; por último fue detenido una tercera vez, semanas más tarde del nacimiento de su primera hija, por estar envuelto en una guerra territorial con traficantes de drogas rivales, que terminó con la detención de más de una docena de sospechosos, sin embargo, por alguna razón el único en quedar limpio fue el mismo Murray, que fue liberado al poco tiempo, mientras que en contraparte, quien era su socio en aquel momento, terminó 3 años en prisión por lo ocurrido.</p>
                    <h2>Lee Murray MMA</h2>
                    <p>El 5 de mayo de 1999 tendría su primer pelea profesional en las MMA, enfrentando a un luchador llamado <b>Rob Hudson</b>, a quien vencería por KO en el primer asalto.</p>
                    <p>Debido a que en su primer pelea le fue tan bien, decidió tomarse esto más en serio, comenzando a entrenar MMA en un gimnasio de Inglaterra. Entrenamiento que le daría frutos, dado que en su siguiente combate sería capaz de vencer por sumisión a su rival con un kimura en el primer asalto.</p>
                    <p>Luego de acumular 4 victorias al hilo, finalmente Murray arribaría a la UFC, donde pelearía el 31 de enero de 2004 en el UFC 46 ante <b>Jorge Rivera</b>. En una pelea que duraría menos de 2 minutos, con un Murray que se llevaría la pelea por sumisión en el primer asalto.</p>
                    <YouTubeEmbed videoid='9_8VC1BHFwg' />
                    <p>Su siguiente pelea sería en la promotora <b>Cage Rage</b> por el título vacante de peso medio unos meses después, ante la futura estrella y campeón de la UFC, <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, a quien enfrentaría cuando el brasileño estaba en pleno ascenso de su carrera. La pelea se extendería hasta los 3 asaltos y terminaría con una victoria por decisión unánime para el brasileño, quien se había mostrado muy dominante durante todo el combate.</p>
                    <YouTubeEmbed videoid='YpjwqxW02RM' />
                    <p>Aunque en aquel momento no estaba planeado que fuese así, la pelea contra Silva sería la última de su carrera. En aquel momento aún era muy joven, teniendo alrededor de 28 años, fue apuñalado varias veces estando frente a un club nocturno, acabando con un pulmon perforado y una arteria cortada. El médico que le realizó la cirugía que le salvó la vida, afirma que Murray tuvo que ser resucitado 4 veces durante la operación. Este acontecimiento lo llevó a replantearse su carrera deportiva, optando finalmente por retirarse del deporte.</p>
                    <h3>Lee Murray Récord</h3>
                    <p>Lee Murray se retiró con un récord de 8-2-1 (1). Siendo 4 de sus victorias por nocaut y 4 por sumisión. Mientras que de sus derrotas, una fue por sumisión y 1 fue por decisión. Además tiene una pelea contra <b>Danny Rushton</b> que quedó sin resultado y 1 pelea contra <b>Chris Bacon</b> que terminó en empate.</p>
                    <h2>Lee Murray vs Tito Ortiz</h2>
                    <p>Aparentemente, en una de las muchas peleas callejeras en las que se vió envuelto nuestro protagonista, se enfrentó al excampeón de peso semipesado de la UFC <b>Tito Ortiz</b> afuera de un club nocturno de Londres. Murray afirma haber noqueado a Tito en aquella ocasión, afirmación que es respaldada por los expeleadores de UFC <b>Matt Hughes</b> y <b>Pat Mitelich</b>, además de por el presentador de la UFC <b>Bruce Buffer</b>. Tito Ortiz niega haber sido noqueado durante aquella pelea, y el también excampeón de peso semipesado <Link href='/leyendas/chuck-liddell'>Chuck Lidell</Link>, quien estuvo aquella noche presente, niega haberlo visto caer inconsciente.</p>
                    <p>La verdad es que esto caldeó el ambiente para ambos peleadores, que se retaron mutuamente a pelear formalmente en el octágono, cosa que para nuestra desgracia, nunca sucedió.</p>
                    <YouTubeEmbed videoid='9hzxJdr-9tE' />
                    <h2>Lee Murray y el Robo al Depósito de Securitas</h2>
                    <p>La noche del 21 de febrero de 2006, Lee Murray junto a otros 6 delincuentes, perpetraría el famoso <b>Asalto al Depósito de Securitas</b>, que se convertiría en el mayor robo de dinero en efectivo en la historia de Reino Unido, con más de 50 millones de libras.</p>
                    <p>Resulta que el <b>Banco Central de Inglaterra</b>, que es quien imprime los billetes de libra esterlina, externalizaba su distribución de monedo a cinco empresas, una de ellas siendo <b>Securitas</b>. Por lo que luego de vigilar y colocar un infiltrado en uno de los depósitos de Securitas, donde se almacenaba el dinero nuevo, Murray junto a sus secuaces secuestró al director del depósito y a la familia de este. Ataron a punta de pistola a 14 trabajadores. El robo comenzó la noche del 21 de febrero y terminó en la madrugada del 22 con los ladrones dándose a la fuga con el dinero, dejando atrás más de 150 millones que fueron incapaces de transportar.</p>
                    <p>Unos días antes del robo, Murray se fue de fiesta en Londres, y allí estrelló su Ferrari, huyendo rápidamente del lugar, abandonó su coche y 2 teléfonos diferentes. En uno de esos teléfonos, Murray se había grabado accidentalmente hablando con otro de los complices del robo sobre cómo llevarían a cabo el plan. Esto fue clave para terminar atrapando a Murray, que menos de 4 meses después del asalto, fue detenido en Marruecos, donde se encontraba junto a su amigo y complice, Allen.</p>
                    <p>La policía de Reino Unido intentó extraditarlo desde Marruecos, pero al no existir tratado entre estos países, finalmente Murray se quedó en el país de su padre. El caso se llevó a juicio y nuestro protagonista fue condenado a 10 años de prisión ese mismo año. Pero la condena se extendió hasta los 25 años, luego de que Murray intentó escapar de prisión, siendo descubierto por unos compañeros de celda que intentaron robarle sus pertenencias en la celda. Los compañeros de Murray se reprocharon a la policía, que el inglés usó su dinero para contrabandear cosas hacia su celda, incluidas una computadora con acceso a internet, 5 kilos de drogas, y ropa costosa.</p>
                    <p>Murray estando en prisión terminó por divorciarse de su esposa, con quien había tenido su primer hija. Y estando preso fue padre por segunda vez en el año 2010. Actualmente sigue en prisión cumpliendo su condena en Marruecos.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}