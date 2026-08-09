import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/90-100/ian_garry-esposa.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Ian Garry Esposa Polémica',
    description: 'Descubre toda la verdad sobre la polémica de Ian Garry y su esposa Layla: diferencia de edad, el libro How to Be a WAG, rumores del ex nutricionista vegano, ataques de Sean Strickland y más.',
    openGraph: {
        images: '',
        title: 'Ian Garry Esposa Polémica',
        description: 'Descubre toda la verdad sobre la polémica de Ian Garry y su esposa Layla: diferencia de edad, el libro How to Be a WAG, rumores del ex nutricionista vegano, ataques de Sean Strickland y más.',
        url: 'https://fullmma.org/articulos/ian-garry-esposa-polemica',
    }
}

export default function IanGarryEsposa () {
    return(
        <main>
        <ArticleHero title='Ian Garry y la Polémica Relación con su Esposa' subtitle='Conoce toda la polémica que rodea a la esposa de Ian Garry: la diferencia de edad, su libro &quot;How to Be a WAG&quot;, su exesposo y nutriocionista de Garry y las críticas de Sean Strickland' image={hero} date='2026-08-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La relación de <Link href='/peleadores/ian-garry'>Ian Garry</Link> con su esposa Layla Anna-Lee es siempre motivo de polémica. Esto se debe a muchas razones, como la diferencia de edad de alrededor de 15 años entre ambos (siendo ella la mayor), o el polémico libro que escribió la mujer cuando Ian tenía apenas 15 años, llamado &quot;How to Be a WAG&quot; (que más o menos se traduce &quot;como ser la esposa de un atléta de élite&quot;), o el hecho de que el exesposo de Layla, con quien tuvo un hijo, sea el nutricionista principal de Garry, con rumores que hablan de que él estaría viviendo en la misma casa que la pareja y que habría convencido al irlandés de adoptar una dieta vegana. Todos estos temas, al volverse públicos, generan controversia y debate en la comunidad del MMA, incluso entre los mismos peleadores de la UFC, con <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> siendo el que más duro habló sobre el tema. </p>
                    <p><Link href='/peleadores/ian-garry'>Ian Garry</Link> es uno de los mejores peleadores que tiene la división de peso wélter, llegando a la UFC como luchador invicto y escalanado tanto hasta pelear por el título de la división ante <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en el <b>UFC 330</b>. Desgraciadamente para él, muchas veces se habla poco de su carrera deportiva y se termina hablando más de su vida personal, principalmente por las polémicas que involucran a su esposa, debido a esto, hoy vamos a abordar todas las controversias que involucran a este matrimonio, desde la buena fe e intentando relatar y explicar porque este tema a menudo trae críticas por parte de fans y otros peleadores hacia el joven irlandés. </p>
                    <h2>La Diferencia de Edad de 15 años entre Ian Garry y Layla</h2>
                    <p>Uno de los principales motivos de polémica, que alimenta la narrativa de que Layla es una suerte de cazafortunas, es la diferencia de edad entre ambos de alrededor de 15 años. Ambos se casaron en febrero de 2022, cuando Ian Garry tenía 24 años y Layla 38 (a un mes de cumplir 39). </p>
                    <p>Luego de su matrimonio, Ian Garry decidió adoptar el apellido &quot;Machado&quot; (el cual es el apellido materno de Layla), esto con la intención de que cuando tuvieran un hijo, compartiera el apellido del hijo de Layla de su matrimonio anterior, ya que no quería ver a los 2 niños crecer con apellidos diferentes, dado que pensaba que podría generar una desconexión entre ellos. </p>
                    <h2>El Libro &quot;How to Be a WAG&quot; de Layla</h2>
                    <YouTubeEmbed videoid='NKBBdl5T8h0' />
                    <p>Una de las mayores polémicas que acarrea la esposa de Ian Garry es el libro &quot;How to Be a WAG&quot;, escrito por ella en donde aparentemente da consejos e instrucciones para atrapar a un futbolista o a un atléta famoso (de ahí viene el término &quot;WAG&quot;, que es una expresión británica para hablar de las esposas y novias de futbolistas y deportistas de élite), especialmente cuando son jovenes y solteros. </p>
                    <p>El libro se publicó alrededor del 2010, en el contexto del mundial de fútbol de Sudáfrica cuando Layla trabajaba con revistas de farándula británicas y había pasado desapercibido en su momento. Pero en 2023 comenzó a circular en redes sociales, viralizándose, por lo que Layla salió a defenderse y explicar el contenido del libro, afirmando que lo escribió de forma satírica, con el contenido de este siendo sarcástico sobre la cultura de las WAGs que está muy presente en Reino Unido. Según explicó ella, el libro se hizo en un tono de humor irónico que es muy común en la cultura inglesa, pero que en Estados Unidos no suele entenderse tan bien, afirmando que quienes lo ven como una guía literal para &quot;cazar&quot; jovenes atlétas, perdieron el punto. </p>
                    <p>Aún así, por mucho que la explicación puede ser plausible, no es difícil ver la relación entre el título del libro y lo que ha hecho la misma Layla. Al leer el título, uno espera una serie de consejos para &quot;atrapar&quot; a un joven atléta millonario, y es esto mismo lo que ha hecho Layla con Ian, sumándole a esto la diferencia de edad, la imagen de que Layla es una mujer mayor que se aprovechó de un joven Ian Garry es muy fácil de vender y comprar. Debido a esto, por mucho que ella haya tratado de defenderse, no son pocas las críticas y burlas que ha tenido que sufrir esta pareja. </p>
                    <h2>El Exesposo de Layla: el nutricionista de Ian Garry y la dieta vegana</h2>
                    <p>Otra de las principales razones que genera polémica en la vida personal de Ian Garry, es la decisión que tomó de contratar al ex esposo de Layla, <b>Richard Cullen</b>, como su nutricionista personal. </p>
                    <p>Ian defendió esta decisión, argumentando que Cullen es excelente en lo que hace, comentando que le ayudó a mejorar en los cortes de peso. Además, justificó que no quería ser un obstaculo en una relación de padre e hijo, por lo que tenerlo como parte de su equipo también ayuda a Richard a estar cerca de su hijo, el que tuvo con la actual esposa de Garry. </p>
                    <p>Otra cosa que ha alimentado comentarios, y opiniones de todo tipo, es la decisión por parte del luchador irlandés de adoptar una dieta vegana desde el 2021, que sostiene hasta el día de hoy. Ha atribuido a esta dieta grandes mejoras en su recuperación, manejo de peso y rendimiento deportivo, llegando al punto de promover este estilo de vida en un video de <b>PETA</b>. </p>
                    <YouTubeEmbed videoid='TOUIdmcj34c' />
                    <p>Por si fuera poco, a esto se le sumaron rumores que afirman que el nutricionista, el ex esposo de Layla, estaría viviendo con en la misma casa que el matrimonio del que hoy estamos hablando. Esto fue motivo de burlas por parte de otros luchadores de UFC y memes en redes sociales, pero fue desmentido tanto por Ian como por Layla, afirmando que Cullen nunca vivió con ellos. </p>
                    <h2>Las Críticas de Sean Strickland, la respuesta de Layla y la amenaza de demanda de Ian Garry</h2>
                    <p>Siendo uno de los peleadores más importantes de la UFC desde hace tiempo, llevó a que estas polémicas tan sonadas, sean tema de conversación hasta de los mismos peleadores. Y como no podía ser de otra manera, si hay un peleador que no se iba a quedar callado en este caso, ese es <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, actual campeón de peso medio, quien trató a Layla de &quot;depredador sexual&quot; y de &quot;succubus&quot;. </p>
                    <p>También habló de todos los temas que ya tocamos antes, del libro, de la convivencia con el ex, etc. Promoviendo y alimentando esta narrativa de que Ian Garry es un joven atleta que fue cazado por una mujer mayor que quería fama y dinero a costa de un marido talentoso, además de ser un &quot;cuck&quot; por la manera en que manejo la situación con el ex marido de su esposa. </p>
                    <p>Ian reaccionó contactando con el luchador estadounidense por mensajes directos, acusándolo de acoso y difamación, amenzanado con demandarlo por esto. Strickland respondió calificándolo de cobardo por amenazar con una demanda en lugar de &quot;resolverlo como un hombre&quot;. </p>
                    <p>Layla por su parte respondió de forma directa a las críticas de Sean en un video que subió a Instagram, desmintiendo principalmente 3 de las cosas que había afirmado el campeón de peso medio: primero, que Ian haya adoptado el apellido de su ex marido (ya que antes se decía que el apellido &quot;Machado&quot; era el apellido de su ex marido, en lugar del de su madre); que el ex viva con ellos en la misma casa; y finalmente que Garry sea un cuck, o que tuvieran una relación &quot;poco convencional&quot;. </p>
                    <YouTubeEmbed videoid='SU9ZwNdX3IQ' />
                    <p>Ya de por si, que se hablen todo este tipo de cosas sobre la vida personal de uno es complicado, pero cuando peleador tan mediático como Sean Strickland se involucra, especialmente con las formas que tiene de expresarse, hace que la situación se exagere aún más y hace mucho más daño a tu imagen. </p>
                    <h2>Cuando Layla llamó &quot;Cobarde&quot; a Ian Garry por no pelear con Khamzat Chimaev</h2>
                    <p>Una anecdota que sirve para ilustrar la personalidad y caracter de este matrimonio, es la que involucra a nadie menos que el excampeón de peso medio checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, con quien el irlandés ya tenía algunas asperezas. </p>
                    <p>Según relató el mismo Ian Garry, este estaba junto a su esposa Layla en un ascensor, previo a un evento de UFC, cuando justo entró Chimaev junto a su esposa. Él pensó en iniciar una pelea ahí mismo, pero finalmente se contuvo porque un compañero de equipo estaba por pelear en esa misma cartelera con Khamzat, por lo que no quiso generarle problemas. </p>
                    <p>Aún así, aparantemente Layla estaba deseosa de que esta pelea se diera allí mismo, en el ascensor, incluso incitándolo por lo bajo a Ian para que lo hiciera. Finalmente cuando salieron de ahí, y el combate no se dió, llamó a Ian &quot;cobarde&quot; por no pelear (&quot;You are a pussy&quot;, le dijo en inglés). </p>
                    <YouTubeEmbed videoid='IRCds6eHhAg' />
                    <h2>Conclusión y Opinion: ¿Por qué tanta polémica? ¿Es Merecida?</h2>
                    <p>Tengo que decir que, al menos a mí, un poco me incomoda hablar de la vida personal de los peleadores, pero entiendo que siendo tan mediáticos ambos (ella es periodista y es algo conocida en Reino Unido), es inevitable que casos como este tengan tanta luz. </p>
                    <p>Aunque se dijeron algunas que no eran ciertas respecto a esta pareja y como viven, como que Ian había adoptado el apellido del ex marido de Layla, o que tenía a este hombre viviendo en la misma casa que ellos. Lo cierto es que aún así es normal entender que esta relación que decidió tener va a ser blanco de burlas y trash talk por parte de otros peleadores que van a buscar provocarlo con esto. </p>
                    <p>También es comprensible que habiendo escrito aquel libro, sea en tono de humor o no, mucha gente entienda que ella se está aprovechando de él, más viendo la diferencia de edad y la dinámica de poder que puede darse en ese caso. Especialmente con un hombre como Ian Garry, que en una de sus declaraciones más recientes afirmó que &quot;el mundo sería mejor si fuera gobernado por mujeres&quot;, que son palabras que lo hacen ver como un blanco fácil para la manipulación femenina. </p>
                    <p>Lo que sí me atrevó a afirmar con más contundencia es que ella no lo cuida a él como debería  hacer la esposa de un deportista de élite como Garry. Todas estas polémicas que siempre la involucran a ella terminan generando que se hable de todo menos de las peleas del irlandés, y pueden provocar que el mismo Ian se desconcentre y comience a pensar en cualquier cosa menos en pelear. </p>
                    <p>También lo expone mucho en este sentido, con un ejemplo siendo la anecdota con <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, o siendo poco inteligente para defenderse ella misma, o al menos para bajar un poco el perfil, teniendo que ser él quien salga en defensa de ella en muchas ocasiones por polémicas que son 100% culpa de suya. </p>
                    <p>En conclusión, creo que mucho de lo que se dice de esta pareja es infundado por malentendidos y malicia (entendible en peleadores que podrían haber peleado contra él, para generar beef y vender la pelea, como era el caso de <Link href='/peleadores/colby-covington'>Colby Covington</Link> y <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> en su momento). Pero ella también contribuyó a construir la imagen que se tiene de ella, y él contribuye y alimenta en cierto sentido la narrativa que se cimentó sobre ellos. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}