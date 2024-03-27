import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/20-30/poirier-vs-makhachev.jpg'

export default function PoirierVsMakhachev () {
    return(
        <main>
            <ArticleHero title='¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?' subtitle='Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?' image={hero} date='26/03/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Luego de que en el <Link href='/articulos/ufc299'>UFC 299</Link>, Dustin Poirier demotrara por qué es un uno de los más fuertes de su división al ganarle por nocaut al joven francés <b>Saint Denis</b> en el segundo asalto, se abre una puerta para el ahora mismo #3 de la división. </p>
                    <p>La posibilidad de que sea <Link href='/peleadores/dustin-poirier'>Dustin Porier</Link> quien finalmente le dispute el título al actual campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, crece aún más cuando tenemos en cuenta que los otros posibles contendientes ya están con la agenda ocupada en otros combates. <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> ya tiene una pelea pendiente contra otro posible contendiente, como lo es <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link> en el UFC 300. El otro peleador que podría discutir el título es <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, quien también peleará en el UFC 300 contra <Link href='/peleadores/max-holloway'>Max Holloway</Link> por el <b>BMF</b>. Lo que termina dejando a Poirier como único contendiente disponible para pelear a la brevedad.</p>
                    <p>Además, tanto Poirier como Makhachev han hecho pública su predisposición para enfrentarse mutuamente. Primero, cuando luego de la pelea de Poirier, este escribiera en X &quot;Islam para Junio&quot;, y luego de que el ruso le respondiera con unos emojis.</p>
                    <blockquote className="twitter-tweet" data-theme="light"><p lang="art" dir="ltr">🤝⚔️ <a href="https://t.co/0m5BsvM5Fs">https://t.co/0m5BsvM5Fs</a></p>&mdash; Makhachev Islam (@MAKHACHEVMMA) <a href="https://twitter.com/MAKHACHEVMMA/status/1767022063242428706?ref_src=twsrc%5Etfw">March 11, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <p>Más recientemente surgió un beef entre ambos, cuando primero Islam declarara hablando con el periodista Mike Bohn que &quot;Sé que Dustin no se merece la pelea por el título, pero no tenemos ninguna opción ahora mismo. Todo el mundo está ocupado. Quiero pelear... Ha derrotado a muchos tíos top. Es una leyenda. Una pelea con él será buena para mí&quot;. Por su parte la respuesta de Poirier fue: &quot;Eso es cosa suya. He hecho más en las artes marciales mixtas que él. Puedo derrotar a cualquiera en el mundo, y espero que él sea el siguiente&quot;.</p>
                    <p>La respuesta a estos dichos no se hizo esperar por parte de Makhachev, que en su cuenta de X escribió: &quot;Dustin, si pudiera vencer a cualquiera, tu estarías sosteniendo este cinturón ahora mismo, no yo&quot;.</p>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Dustin if you could beat anybody, you&#39;d be holding this belt right now, not me 🤷🏼‍♂️</p>&mdash; Makhachev Islam (@MAKHACHEVMMA) <a href="https://twitter.com/MAKHACHEVMMA/status/1772253777950572728?ref_src=twsrc%5Etfw">March 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <p>Luego de este tweet, Islam subió la apuesta contestándole a un usuario que había escrito que Dustin está a otro nivel ahora mismo, escribiendo. &quot;Su nivel es: contendiente permanente :) cuando derrotas tiene por el título? 2? 3?&quot;</p>
                    <p>Aunque todavía no hay una confirmación por parte de la UFC, en caso de que se piense hacer esta pelea en junio, sin ninguna cartelera especial confirmada para esa fecha, y sin la posibilidad de que pelee alguno de los otros contendientes al título, podría darse y no sería desagradable una pelea entre estos 2.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}