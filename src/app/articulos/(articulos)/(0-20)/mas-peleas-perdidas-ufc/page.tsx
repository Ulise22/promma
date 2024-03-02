import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/most-loss_hero.jpg'
import bjPenn from '@/assets/articulos/insideArticle/mas-derrotas-consecutivas/bj-penn_nate-diaz.jpg'
import Image from 'next/image'

export default function MasPeleasPerdidasUFC () {
    return(
        <main>
            <ArticleHero title='Las Mejores Peleadoras de UFC de la Historia' subtitle='En este artículo repasaremos la lista de algunas de las mujeres que consideramos como las mejores de la historia de la UFC.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Probablemente el récord que nadie quiera tener, ser el peleador con la mayor cantidad de derrotas en la UFC. Sin embargo, aunque parezca contraituitivo, es algo muy dificil de conseguir, dado que no son muchos los peleadores que cosechan un par de derrotas consecutivas y de alguna manera consigue mantenerse en la compañía. En el caso de la mayoría de los peleadores, con hilar 3 derrotas seguidas estás fuera de la UFC.</p>
                    <p>Actualmente el récord de la mayor cantidad de derrotas consecutivas en la UFC es de 7, y lo comparten 2 peleadores que tranquilamente pueden ser consideradas leyendas del deporte, pese a este récord negativo, y ellos son <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> y <b>B.J. Penn</b>, ambos completos fueras de serie en las MMA, pero que por circunstancias de la vida, por no saber retirarse a tiempo, o por un conjunto de errores propios terminan compartiendo un no tan honroso récord.</p>
                    <h3>El caso de B.J. Penn</h3>
                    <p>B.J. Penn es un luchador que hizo practicamente toda su carrera en la UFC, siendo su debut profesional en las MMA en esta misma compañía, el 4 de mayo de 2001 contra el estadounidense <b>Joey Gilbert</b>, en UFC 31, donde vencería por TKO en el primer asalto. En esta compañía además se convertiría en doble campeón, ostentando los cinturones de Peso Ligero y Peso Wélter.</p>
                    <p>Tendría la oportunidad de pelear por el título de peso ligero en 2 ocasiones, primero contra <b>Jens Pulver</b>, quien lo vencería por decisión, y después con <b>Caol Uno</b>, cuyo enfrentamiento terminaría en empate, privándolo nuevamente de consagrarse campeón. Luego de esto debutaría en Peso Wélter, donde ganaría el título contra el americano <b>Matt Hughes</b>, a quien sometería con un mataleón en el primer asalto. Sin embargo, luego de esto firmaría con otra promotora llamada K-1, por lo que sería despojado de su título. </p>
                    <Image className={styles.article__image} src={bjPenn} alt='' />
                    <p>Luego de unos cuantos combates en la otra promotora, volvería a la UFC para competir por el título de peso wélter nuevamente contra <b>Matt Hughes</b>, aunque en esta ocasión caería derrotado por nocaut en el tercer asalto. Debido a esto retorna a Peso Ligero, donde se vuelve campeón luego de someter en el segundo asalto a <b>Joe Stevenson</b>.</p>
                    <p>Esta victoria lo convertiría en el segundo doble campeón de la historia de la UFC. Además sería capaz de defender este cinturón de forma exitosa en 3 oportunidades, hasta que lo perdería contra <b>Frankie Edgar</b>, en un combate que se terminaría decidiendo por los jueces, tanto en su primera pelea, como en su revancha. Luego de perder su cinturón, retorna a peso wélter para enfrentar una tercera vez a Matt Hughes, a quien vence por KO en el primer asalto. Su siguiente pelea sería contra Jon Fitch, y terminaría en un empate mayoritario, y es aquí cuando comienza la racha de derrotas.</p>
                    <p>La primera de sus derrotas, sería en una eliminatoria por el título contra <b>Nick Diaz</b>, donde perdería por decisición unánime, pero se llevaría el bono de pelea de la noche. La segunda de sus derrotas sería contra le canadiense <b>Rory MacDonald</b>, por decisión unánime nuevamente. La tercera, sería también la tercera pelea contra <b>Frankie Edgard</b>, en su debut en Peso Pluma, esta vez perdería por TKO en el tercer asalto.</p>
                    <p>Luego de esta última derrota contra Frankie en 2014, BJ Penn llevaba una racha de 4 peleas sin conseguir la victoria, por lo que se toma unos 3 años de descanso antes de volver a pelear nuevamente. En 2017 volvería al octagono para enfrentar al mexicano <b>Yair Rodríguez</b>, que lo vencería por TKO en el segundo asalto. Su quinta derrota sería contra el ruso <b>Dennis Siver</b>, por decisión mayoritaria. Su sexta drrota sería contra <b>Ryan Hall</b> en su vuelta a peso ligero,esta vez por sumisión en el primer asalto. Por último, su 7° derrota sería contra Clay Guida por decisión unánime, luego de esta derrota finalmente se retiraría.</p>
                    <h3>El caso de Tony Ferguson</h3>
                    <p>El otro peleador que comparte este récord, y donde quizás su caso sea un poco más triste, dado que sigue en activo y ha descartado completamente el retiro, por lo que puede alargar esta racha negativa, es Tony Ferguson, quien de ser el peleador con la racha de victorias activa más larga, con 12 victorias consecutivas, paso a ser el peleador con la racha de derrotas activa más larga.</p>
                    <p>Siendo uno de los peleadores que practicamente había arrasado con toda su división, nunca llegó a ser campeón, debido a la mala suerte con su pelea maldita con <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, que se programó hasta 5 veces, pero que nunca se llegó a realizar. Sin embargo supo ser campeón interino cuando sometió en el tercer asalto a <b>Kevin Lee</b> en UFC 216, que le terminó siendo despojado debido a una lesión que sufrió.</p>
                    <p>Su última victoria sería contra el histórico <b>Donald Cerrone</b> por TKO, producto de una parada médica, el 8 de junio de 2019, desde entonces, no ha sido capaz de ganar un sólo combate. Su primera derrota llegaría al enfrentarse a <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, por el Campeonato Interino de Peso Ligero de UFC, el 9 de mayo de 2020 en UFC 249, donde caería por TKO en el quinto asalto, cerca de finalizar la pelea.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/dGWDT3iyrdw?si=1LqE7qrieggM-ith" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>La segunda derrota llegaría al enfrentar al brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, donde perdería por decisión unánime. La tercera derrota fue contra el iraní <b>Beneil Dariush</b>, que por decisión unánime se llevó la victoria. La cuarta derrota llegó al enfrentar a <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, que lo venció por KO en el segundo asalto de la pelea, con una impresionante patada en la cabeza. La quinta derrota fue contra <b>Nate Diaz</b>, en una pelea que tomó en corto aviso, en la división de peso wélter, en esta ocasión caería por sumisión en el cuarto asalto de la pelea. La sexta pelea que terminaría perdiendo fue contra el estadounidense <b>Bobby Green</b>, que lo sometió en el tercer asalto. Y la hasta ahora última derrota, fue contra el inglés <b>Paddy Pimblett</b>, por decisión unánime, contra un peleador que ni siquiera está en los rankings. </p>
                    <p>A fecha de hoy, Tony Ferguson mantiene un récor de 25-10. Lo cuál es triste de pensar si se tiene en cuenta que hasta 2020, mantenía un récord de 25-3. Llevándo ya media década sin poder ganar un combate.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}