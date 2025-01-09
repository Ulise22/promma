import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/invictos_ufc_2025.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Peleadores Invictos de UFC en 2025',
    description: "Descubre quienes son los peleadores que terminaron el 2024 como invictos en la UFC, sus récords, sus logros y los desafíos que les tocará enfrentar en el 2025.",
    openGraph: {
        title: 'Peleadores Invictos de UFC en 2025',
        description: "Descubre quienes son los peleadores que terminaron el 2024 como invictos en la UFC, sus récords, sus logros y los desafíos que les tocará enfrentar en el 2025.",
        url: 'https://fullmma.org/noticias/peleadores-invictos-ufc'
    }
}

export default function PeleadoresInvictosUFC2025 () {
    return(
        <main>
            <ArticleHero title='Los Peleadores Invictos de UFC en 2025' subtitle="Los luchadores de UFC que terminaron el 2024 invictos y quienes serán capaces de mantenerlo en el 2025." image={hero} date='2024-12-26' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Como se termina el año y ya no hay eventos de UFC hasta dentro de unas semanas, decidí repasar a todos los peleadores ranqueados de la UFC que terminaron el 2024 y llegan al 2025 como invictos. Aunque en las MMA no le solemos dar tanta importancia al &quot;0&quot; de los peleadores como en otros deportes de contacto, me pareció interesante destacar a quienes siendo peleadores ranqueados en el top15 de sus divisiones, cuentan con el logro de jamás haber sido derrotados, repasando un poco de la carrera de cada uno de ellos, y debatiendo quienes serán capaces de mantener el próximo 2025 el invicto, y quienes son los peleadores que tienen más probabilidades de perderlo. </p>
                    <h2>La Lista de Peleadores Invictos en UFC 2025</h2>
                    <h3>1. Umar Nurmagomedov</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Ruso</li>
                        <li><b>División:</b> Peso Gallo</li>
                        <li><b>Récord:</b> 18-0</li>
                        <li><b>Comentarios:</b> Comenzando esta lista con uno de los peleadores que tendrá más difícil mantener su récord invicto, <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, el primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, logró su victoria número 18 al derrotar por decisión unánime a <b>Cody Sandhagen</b> en el evento encabezado por ellos 2 <Link href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>UFC Fight Night: Cory Sandhagen vs Umar Nurmagomedov</Link>, posicionándose de esta forma como el candidato #1 a pelear por el título de peso gallo. Por esto, con su pelea por el cinturón ya confirmada para el <b>UFC 311</b> en enero de 2025, Umar tendrá la pelea más difícil de su carrera hasta el momento, teniendo que enfrentar al campeón de la división <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, que viene de 11 victorias consecutivas y que hasta el momento parece imbatible en la compañía. </li>
                    </ul>
                    <h3>2. Ilia Topuria</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Español / Georgiano</li>
                        <li><b>División:</b> Peso Pluma</li>
                        <li><b>Récord:</b> 16-0</li>
                        <li><b>Comentarios:</b> El único campeón de la lista, el actual rey de las 145lbs, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, obtuvo su más reciente victoria en octubre de 2024 en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link> ante el legendario excampeón de la división <Link href='/peleadores/max-holloway'>Max Holloway</Link>. Habiendo campeonado además al noquear a <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, puedo adelantar que este peleador es al que veo más probable que mantenga su invicto durante el 2025, al haber ya vencido a los peleadores más peligrosos de su división, de manera contundente encima, al ser ambas victorias por la vía del nocaut. Por su puesto que se abre una discusión si es que finalmente el español arriva a la división de peso ligero, donde tendrá por delante desafíos aún más difíciles a los que ya enfrentó. </li>
                        <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/EQL0U5F6JKA?si=MEnDAEsQI_AioUJt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </ul>
                    <h3>3. Movsar Evloev</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Ruso</li>
                        <li><b>División:</b> Peso Pluma</li>
                        <li><b>Récord:</b> 19-0</li>
                        <li><b>Comentarios:</b> El luchador ruso <b>Movsar Evloev</b> es otro de los invictos de la división de peso pluma de la UFC. Con un récord de 19-0, su victorias más reciente fue ante el excampeón de peso gallo <b>Aljamain Sterling</b> en el <Link href='/covertura-ufc/ufc310'>UFC 310</Link>. De esta manera está ranqueado en el top5 de la división, pero es difícil decifrar cuando le llegará su oportunidad de pelear por el título, dado que pese a su larga racha de victorias, sin ninguna derrota de por medio, su falta de finalización en sus peleas le dificultan obtener mejores oportunidades. </li>
                    </ul>
                    <h3>4. Lerone Murphy</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Inglés</li>
                        <li><b>División:</b> Peso Pluma</li>
                        <li><b>Récord:</b> 15-0</li>
                        <li><b>Comentarios:</b> El luchador inglés <b>Lerone Murphy</b> se encuentra actualmente invicto con 15 victorias y un empate. Es peleador fue escalando de a poco en los rankings de la división, estando comodamente en el top15 de peso pluma, pero habrá que ver durante el próximo año a que rivales le pondrán de frente y si será capaz de estar a la altura para mantener su &quot;0&quot;. </li>
                    </ul>
                    <h3>5. Shavkat Rakhmonov</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Uzbeko</li>
                        <li><b>División:</b> Peso Wélter</li>
                        <li><b>Récord:</b> 19-0</li>
                        <li><b>Comentarios:</b>Uno de los peleadores que actualmente generan más espectativas entre los fanáticos, es el oriundo de Uzbekistán <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rarkhmonov</Link>, quien en sus 19 victorias, obtuvo un total de 18 finalizaciones. El próximo año será probablemente el más desafiante de su carrera, dado que muy probablemente pelee por el título de las 170lbs, teniendo que enfrentar para eso al actual campeón <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, quien ya ha demostrado ser de los mejores peleadores que hay en la compañía en estos momentos. Aún en caso de ganar el cinturón, tiene por delante un montón de contendientes a los que todavía no ha enfrentado y que se prestan como un gran desafío para Rakhmonov. </li>
                    </ul>
                    <h3>6. Michael Morales</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Ecuatoriano</li>
                        <li><b>División:</b> Peso Wélter</li>
                        <li><b>Récord:</b> 17-0</li>
                        <li><b>Comentarios:</b> El único sudamericano de la lista es el peleador de Ecuador, <b>Michael Morales</b>, quien en sus 5 peleas en UFC consiguió que 3 de ellas fueran por nocaut, ganando un bono por desempeño en su última pelea ante <b>Neil Magny</b>, luego de noquear a este en el primer asalto. Quizás sea a él a quien le espere el año más complicado de toda esta lista, dado que a partir de este momento irán viniendo rivales cada vez más complicados para el ecuatoriano. </li>
                    </ul>
                    <h3>7. Khamzat Chimaev</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Ruso</li>
                        <li><b>División:</b> Peso Medio</li>
                        <li><b>Récord:</b> 14-0</li>
                        <li><b>Comentarios:</b> Uno de los peleadores más mediáticos que hay en estos momentos, y que dejan más espectativas a los fans, es el checheno <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, quien en sus 14 victorias no ha dejado duda alguna de lo que está hecho. Sólo hace falta repasar su última pelea, ante el excampeón de peso medio <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link>, quien hasta ese momento no había sido sometido, Chimaev necesitó sólo de un asalto para hacerlo tapear, en lo que fue la pelea costelear del <Link href='/covertura-ufc/ufc308'>UFC 308</Link>. Con las actuaciones tan dominantes que viene realizando, es muy probable que lo que siga para Chimaev sea una pelea por el cinturón, y por loco que suene, pareciera tener abierta la puerta para pelear por cualquiera de los 3 cinturones de peso wélter, peso medio o peso semipesado, y es tan bueno Khamzat, que creo que tiene chances de ganarle a cualquiera de los 3 campeones de esas divisiones. </li>
                        <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/hgBTZz0RsMg?si=p4a3-sgs0obxoUlI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </ul>
                    <h3>8. Shara Magomedov</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Ruso</li>
                        <li><b>División:</b> Peso medio</li>
                        <li><b>Récord:</b> 15-0</li>
                        <li><b>Comentarios:</b> Un peleador que personalmente, es de mis favoritos en la actualidad, es el daguestaní <Link href='/peleadores/shara-magomedov'>Shara Magomedov</Link>, quien con un récord de 15-0 se encuentra entre los 15 mejores peleadores de peso medio, destacando primero por su partícular apariencia, con la visión perdida practicamente en su totalidad en uno de sus ojos, y además por lo divertido de su estilo de pelea, siendo un luchador que escapa al estereotipo de peleador de Daguestán, zona que hemos asociado a cierto tipo de peleador, más de la escuela <Link href='/leyendas/khabib-nurmadomedov'>Khabib</Link> o <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>. Shara &quot;Bullet&quot; por su parte es un striker puro, con un curriculum lleno de nocauts, tanto en su carrera como artista marcial mixto, como en el pasado siendo kickboxer, y con una manera de pelear que nos engancha a quienes disfrutamos de sus combates. El año que viene sin embargo, será uno bastante desafiante para Shara, dado que deberá enfrentar al rival más difícil de su carrera hasta el momento, como lo es <b>Michael Page</b>, quien es otros striker bastante creativo, y aún superando esa prueba, deberá seguir peleando con luchadores cada vez más complicados, por lo que queda por ver que tan bueno es realmente Shara Magomedov. </li>
                    </ul>
                    <h3>9. Azamat Murzakanov</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Ruso</li>
                        <li><b>División:</b> Peso Semipesado</li>
                        <li><b>Récord:</b> 14-0</li>
                        <li><b>Comentarios:</b> El más veterano de todos los peleadores de esta lista, con 35 años y 14 peleas no ha perdido ni una sola vez, llegando a la UFC el 31 de agosto de 2021, al participar del <b>Dana White&apos;s Contender Series</b>, donde logró noquear al brasileño <b>Matheus Scheffel</b> en el primer asalto, ganando un contrato con la compañía, en la que ya lleva 4 victorias, habiendo ganado el bono por desempeño en 2 oportunidades. </li>
                    </ul>
                    <h3>10. Mick Parkin</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Inglés</li>
                        <li><b>División:</b> Peso Pesado</li>
                        <li><b>Récord:</b> 10-0</li>
                        <li><b>Comentarios:</b> El peleador inglés de 29 años, es el único peleador invicto en los rankings de peso pesado en estos momentos, habiendo llegado a la UFC luego de participar del <b>Dana White&apos;s Contender Series</b>, donde lograría someter a su rival <b>Eduardo Neves</b> en el primer asalto. Desde entonces ha tenido un total de 4 victorias en la compañía, con 3 de esas siendo por decisión, y con la última siendo por nocaut ante <b>Lukasz Brzeski</b> en el <Link href='/covertura-ufc/ufc304'>UFC 304</Link>, organizado en Manchester. </li>
                    </ul>
                    <h3>11. Tatiana Suarez</h3>
                    <ul>
                        <li><b>Nacionalidad:</b> Estadounidense</li>
                        <li><b>División:</b> Peso Paja Femenino</li>
                        <li><b>Récord:</b> 11-0</li>
                        <li><b>Comentarios:</b> La única peleadora femenina de la lista no es otra que <b>Tatiana Suarez</b>, quien en el pasado tuvo victorias super meritorias, como cuando venció a la mexicana <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> por sumisión en el primer asalto, o cuando derrotó a la excampeona <b>Carla Esparza</b> por nocaut. No Pelea desde agosto de 2023, cuando logró derrotar a la brasileña <b>Jéssica Andrade</b> por sumisión en el segundo asalto, y es quizás, la peleadora que tendrá más difícil defender el invicto, dado que ya está confirmada para febrero del 2025 en el <b>UFC 312</b>, su pelea por el cinturón contra la actual campeona de peso paja femenino <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>, en lo que será un durísimo enfrentamiento para Tatiana. </li>
                    </ul>
                    <h2>¿Qué peleadores de UFC mantendrán el invicto durante el 2025?</h2>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/8tzt07dA39I?si=xof2Jlh6w5DXM5_W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Siendo las MMA un deporte tan difícil de predecir, es complicado que pueda dar pronosticos tan certeros sin equivocarme. Aún así, creo que los 2 peleadores que muy probablemente terminen el próximo 2025 invictos son <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> y <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>. </p>
                    <p>En primer lugar Ilia, porque como mencioné anteriormente, los desafíos más difíciles de su división ya los ha superado, de manera contundente además, por lo que es super complicado imaginar a un peleador de las 145lbs hacer siquiera cosquillas a Topuria. La historia podría cambiar un poco si finalmente acabará subiendo a peso ligero a enfrentar a un contendiente primero, y luego a <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>. Aún así, sabiendo que corro el riesgo de no ser del todo objetivo, veo al español muy capaz de ganar a cualqueir peleador de las 155lbs, más si tenemos en cuenta como les fue a otros peleadores de peso pluma cuando subieron a peso ligero, como Max Holloway y Volkanovski.</p>
                    <p>Con Khamzat Chimaev me pasa algo parecido, dado que aunque no es campeón ni lo ha sido en el pasado, las victorias que ha tenido ante rivales de la talla de <Link href='/peleadores/robert-whittaker'>Robert Whittaker</Link> (quien sí fue campeón de su división), han sido tan dominantes que se hace difícil verlo perder en el futuro, ya sea con <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> o <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>. </p>
                    <p>Después existen otros peleadores que quizás puedan mantener el invicto durante el año, pero ya es más díficil saber, ya sea porque todavía no vimos lo suficiente de dichos peleadores para saber donde está su techo, o ya sea porque las peleas más difíciles de su carrera son las que están por venir. </p>
                    <h2>Peso Pluma: La División con Más Invictos de UFC</h2>
                    <p>La división entre todas que más ha destacado, es la de peso pluma, que cuenta con la mayor cantidad de invictos entre sus filas, con 3, incluyendo al campeón de la misma, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}