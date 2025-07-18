import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/ilia_prox_rival.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))


export default function ProximosRivalesTopuria () {
    return(
        <main>
            <ArticleHero title='¿Cuál Será el Próximo Rival de Ilia Topuria Ahora que es Campeón?' subtitle='Luego de que Ilia hiciera historia al vencer por KO a Volkanovski, proclamándose campeón de la UFC, muchos tenemos ganas de volverlo a ver en el octagono, y estos son los posibles rivales que podrían enfrentarlo.' image={hero} date='23/02/2024' author={null} updatedDate='2024-10-15' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Luego de que el pasado 17 de febrero, Ilia Topuria hiciera historia y sorprendiera al mundo al noquear a un campeón histórico de la división de Peso Pluma, como <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, que hace no mucho tiempo era el número 1 libra por libra, somos cada vez más los aficionados que queremos ver pelear al georgiano español volver a pelear en el octagono. Por eso hoy repasaremos los posibles rivales a los que podría y nos gustaría ver enfrentar a Ilia Topuria.</p>
                    <h2>Alexander Volkanovski</h2>
                    <p>Una de las peleas que más sentido tendría hacer, es una revancha contra el ahora excampeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, dado que pese a que su combate terminó en una victoria muy contundente por parte del español, Volkanovski ha demostrado ser uno de los mejores peleadores de la historia en la división, manteniéndose como campeón desde hace varios años, desde que derrotó a <Link href='/peleadores/max-holloway'>Max Holloway</Link> en diciembre de 2019. En honor a la impresionante carrera y trayectoria del australiano, no es una locura pensar que merece algo de respeto y por ende podría volver a enfrentar a Ilia este año.</p>
                    <YouTubeEmbed videoid='CU49xhpo-Vs' />
                    <p>Aunque en su momento Ilia dijo que no estaría interesado en darle una revancha al australiano en caso de ganarle, luego del combate se mostró más abierto a la posibilidad, y esta es una pelea que también pidió Volkanovski ni bien terminó la pelea.</p>
                    <h2>Conor McGregor</h2>
                    <p>Desde hacía tiempo que Ilia Topuria venía llamando a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, y cuando terminó su último combate volvió a llamarlo, diciendo que si todavía tiene pelotas que lo espera en España. Luego, en un tono más tranquilo dijo que si estaba listo para este nivel de competición, que lo esperaba en el peso que él eligiera, pero que la pelea debía darse en España.</p>
                    <p>Pese a que a nivel mediático esta pelea sería muy interesante, desde este humilde lugar no creemos que se vaya a dar esta pelea. Ni siquiera estamos seguros de cuándo volverá a pelear a un Conor, que también lo tiene esperando a <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> desde hace 1 año aproximadamente, prometiendo una pelea que hasta ahora no se estaría dando.</p>
                    <h2>Sean O&apos;malley</h2>
                    <p>Una de las peleas que se ve más fáctible que la de Conor, es la de <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link>, actual campeón de la división de Peso Gallo, que primero deberá defender su título contra el Ecuatoriano <Link href='/peleadores/marlon-vera'>Chito Vera</Link>.</p>
                    <p>En este caso fue Sean el que llamó a pelear a Ilia Topuria. Antes de la pelea del español contra el australiano, Sean había dicho que en en caso de que Ilia ganara Volkanovski, subiría de división para pelear con el georgiano y convertirse en doble campeón. Luego de la victoria de Topuria, Sean O&apos;malley reiteró su deseo de pelear con él luego de vencer a Marlon Vera. </p>
                    <YouTubeEmbed videoid='YkxrGkRQvlo' />
                    <p>Por su parte, Ilia Topuria respondió en su momento a las palabras con un tweet en inglés, donde le decía: &quot;Me ofrecí a pelear contigo, pero UFC me dijo que solo eres bueno para pelear en lugares para adolescentes, porque esa es tu única base de fanáticos. Nuestra pelea nunca sucederá. Después de luchar contra Volk, lucharé contra Conor. y vendrás como un fanático. Después de ver tus números de ppv lo único que te puedo ofrecer es que luches en las preliminares de mi cartelera.&quot;</p>
                    {/* <blockquote className="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">I offered to fight you but the UFC told me that you are only good for fighting in teenagers&#39; places, because that’s your only fan base .Our fight will never happen. After fighting Volk I will fight Conor. and you will come as a fan boy. After seeing your ppv numbers the only… <a href="https://t.co/bb0F5uAIq1">https://t.co/bb0F5uAIq1</a></p>&mdash; Ilia Topuria (@Topuriailia) <a href="https://twitter.com/Topuriailia/status/1742930448664367340?ref_src=twsrc%5Etfw">January 4, 2024</a></blockquote>  */}
                    <p>A pesar de estas palabras, en una reciente rueda de prensa que tuvo lugar en España, luego de consagrarse como campeón de UFC, Ilia no descartó pelear con el estadounidense, y lo nombró como una de las 3 peleas que está considerando para ser su primera defensa del título.</p>
                    <h2>Max Holloway</h2>
                    <p>Esta es una de las peleas que simplemente parece estar destinada a pasar. En la división de Peso Pluma, durante los últimos años estuvo completamente dominada por Alexander Volkanovski, sin embargo, el otro que estuvo reinando y derrotando a todos sus rivales era <Link href='/peleadores/max-holloway'>Max Holloway</Link>, que con excepción del mismo Alexander, dominó completamente a todos los que se le pusieron delante.</p>
                    <p>Para eso primero habrá que ver que sucede con Max Holloway, que tiene una pelea programada para abril en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link> contra el peleador de peso ligero <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, por el título del BMF.</p>
                    <p>Al igual que en otros casos, en un inicio Ilia Topuria había descartado pelear con él, pero en la reciente rueda de prensa que dió en España, dejó la puerta abierta en caso de que Max Holloway venciera a Justin Gaethje y pusieran en medio el título del BMF. Sin embargo, más allá de como termine esta pelea, este es un combate que los fans de las MMA queremos ver, dado que luego de Volkanovski, el otro mostruo a vencer es Holloway, que durante años demostró ser el campeón sin cinturón, que de no existir Volkanovski, sería probablemente el campeón con más defensas exitosas de la división. </p>
                    <h2>Movsar Evloev</h2>
                    <p>Por las declaraciones que dió Ilia Topuria, tanto antes de ganar como después de hacerlo, esta parecería la pelea más lógica. Dado que Ilia habló de darle espacio a los peleadores más jovenes y de limpiar un poco la división al pelear con rivales a los que Volkanovski no haya enfrentado. Evloev es un peleador que cumple con estos requisitos, dado que luego de su reciente victoria contra el inglés <b>Arnold Allen</b>, subió hasta la #5 posición en los rankings, además cuenta con el aliciente de ser junto a Ilia el único invicto de la división. </p>
                    <p>Sin embargo, es difícil decir que tan probable es que se dé esta pelea. Dado que de sus 8 peleas en la UFC, todas sus victorias fueron por decisión, siendo incapaz de finalizar a ninguno de sus rivales. Para colmo en su último combate contra Allen, muchos lo vieron demasiado parejo, habiendo incluso quienes creen que el verdadero ganador de la pelea fue el peleador inglés. Además, tampoco se ve ni a la UFC, ni a Dana White, muy entusiasmados con este peleador, y mucho menos con darle una pelea por el título contra el nuevo campeón.</p>
                    <h2>Yair Rodríguez</h2>
                    <p>La última pelea que vemos como posible primera defensa de Ilia, es contra el mexicano <b>Yair Rodríguez</b>, que en estos momentos se encuentra rankeado #3 en la división, tan sólo por detrás de Max Holloway y Alexander Volkanovski. Hay que decir que de momento, siempre que tuvo la oportunidad, Ilia Topuria ha descartado cualquier tipo de posibilidad de que se dé esta pelea, sin embargo al final los que mandan son los fans y la UFC. </p>
                    <p>Yair Rodríguez e Ilia Topuria han tenido su intercambio de palabras y sus respectivas provocaciones en redes sociales, y llamó la atención la última rueda de prensa de Yair previa a su pelea contra <b>Brian Ortega</b> en México, en la que varias veces fue consultado por Ilia Topuria, y luego de que finalizara, terminó de hablar con un &quot;Ilia Topuria me la pelas&quot;. </p>
                    <YouTubeEmbed videoid='idwjUEdocl4' />
                    <p>Tanto a nivel deportivo tiene sentido una pelea entre estos 2, especialmente si Yair vence a Brian Ortega, como a nivel mediático, dado que al crear una rivalidad entre un español y un mexicano, tendríamos una pelea fácil de vender. Además al ser los 2 de habla hispana, la rueda de prensa previa a la pelea y el &quot;trash talk&quot; que habría entre ambos, sería muy divertido de ver.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}