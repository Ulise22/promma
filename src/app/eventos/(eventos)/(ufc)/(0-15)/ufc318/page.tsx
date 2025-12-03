import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc318_portada.webp'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 318: ¡Dustin Poirier vs Max Holloway!',
    description: "Pelea por el cinturón BMF en el UFC 318 entre Max Holloway y Dustin Poirier en su pelea de retirada.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc318.a2b54185.webp&w=640&q=75',
        title: 'UFC 318: ¡Dustin Poirier vs Max Holloway!',
        description: "Pelea por el cinturón BMF en el UFC 318 entre Max Holloway y Dustin Poirier en su pelea de retirada.",
        url: 'https://fullmma.org/eventos/ufc318'
    }
}

export default function UFC318 () {
    return(
        <main>
            <ArticleHero title="UFC 318: ¡Max Holloway Derrota a Dustin Poirier en su Retirada y Sigue Siendo el BMF!" subtitle='¡Paulo Costa Regresa Mejor Que Nunca y Derrota Roman Kopylov! ¡Michael Johnson Derrota a Daniel Zellhuber por Decisión Unánime!' image={hero} date='2025-07-19' author={null} updatedDate='2025-07-20' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Esta noche tenemos un evento histórico en el UFC, que será encabezado por la leyenda <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> quien esta noche se subirá al octágono por última vez en su carrera, retirándose oficialmente después de pelear contra <Link href='/peleadores/max-holloway'>Max Holloway</Link> por el cinturón BMF, en lo que promete ser una de las mejores peleas que tendremos en el año. </p>
                    <p>Además tendremos un gran combate en la pelea coestelar, con el brasileño <b>Paulo Costa</b> enfrentándose al ruso <b>Roman Kopylov</b> en la división de peso medio de la UFC. Contaremos también con presencia latina en el octágono el día de hoy, peleando primero en las preliminares el argentino <b>Francisco Prado</b>, ante el luchador de Kazajistán <b>Nikolay Veretennikov</b>, y tendremos abriendo la cartelera estelar al mexicano <b>Daniel Zellhuber</b>, que enfrentará al estadounidense Michael Johnson. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Carli Judice Noquea a Nicolle Caliari en el tercer asalto</h2>
                    <p>La peleadores estadounidense consigue una impresionante victoria por TKO en el tercer asalto de la pelea, luego de dominar completamente el combate con su striking a su rival brasileña. Producto de la acumulación de golpes conseguida en el primer y segundo asalto, en el tercero sólo le hice falta un rodillazo al hígado para derribar a su rival y finalmente rematar en el suelo, culminando esta primer pelea de la cartelera de la mejor manera, con un nocaut que le permite sumar su segunda victoria consecutiva a la peleadora estadounidense. </p>
                    <h2>Bruno Ferreira Somete a Jackson Mcvey en el Primer Asalto</h2>
                    <p>El brasileño &quot;The Hulk&quot; consigue una excelente victoria por la vía de la sumisión en el primer asalto, luego de conectar un armbar que obligaría a su rival a tapear. De esta manera Bruno Ferreira le quita el invicto de 6-0 a su rival, el estadounidense Jackson Mcvey, quien estaba haciendo su debut en la UFC y que había llegado a la compañía sin perder ni una sola pelea. Tremendo inicio del UFC 318 que hasta ahora nos deja con 2/2 finalizaciones. </p>
                    <h2>Ryan Spann Somete con una Guillotina a Lukasz Brzeski en el Primer Asalto</h2>
                    <p>El estadounidense Ryan Spann consigue la tercer finalización de la noche al conectar una guillotina en el primer asalto que obligó a su rival a tapear. Logrando de esta manera la victoria número 23 de su carrera con 33 años, para seguir progresando en la división de peso pesado. Por su parte, el polaco Lukasz Brzeski obtiene su tercer derrota seguida, siendo finalizado en las 3 peleas en el primer asalto, complicando su continuidad en la compañía. </p>
                    <h2>Jimmy Crute Somete a Marcin Prachnio con un Armbar en el Primer Asalto</h2>
                    <p>Cuarta finalización, tercer sumisión y segundo armbar de la noche por parte del australiano Jimmy Crute, que fue capaz de lograr en apenas el primer asalto de la pelea ante el polaco Marcin Prachnio. De esta forma, vamos 4/4 en cuanto a finalizaciones en este histórico UFC318. </p>
                    <h2>Islam Dulatov Debuta con Nocaut ante Adam Fugitt</h2>
                    <p>El alemán Islam Dulatov, el <Link href='/noticias/modelo-de-ufc'>Modelo de la UFC</Link> debuta de la mejor manera en la compañía de artes marciales mixtas más grande del mundo, al luego de mostrarse bastante sobrado en el striking, ser capaz de conectar unos golpes que tumbarían a su rival, para finalmente rematarlo en el suelo llevando <Link href='/articulos/arbitro-de-ufc-con-barba'>Mike Beltrán</Link> a separarlos para darle la victoria por TKO en el primer asalto, y finalizar estas primeras peleas preliminares con un registro de 5 finalizaciones en 5 peleas. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Ateba Gautier Noquea a Robert Valentin en el Primer Asalto</h2>
                    <p>El peleador de Camerún logra una espectacular victoria por TKO en el primer asalto de la pelea, en poco más de 1 minuto. Consiguiendo de esta manera su segundo victoria consecutiva en la compañía por nocaut en el primer asalto, demostrando un poder en las manos que pocos peleadores de peso medio comparten. Seguimos en racha en esta cartelera con 6 finalizaciones en 6 peleas.</p>
                    <h2>Nikolay Veretennikov Gana por Decisión Dividida al Argentino Francisco Prado</h2>
                    <p>El luchador de Kazajistán se lleva la victoria en la primer pelea en llegar a decisión de la noche, luego de hacer un muy buen primer asalto donde fue superior a su rival argentino. Aunque a medida que pasaba la pelea se fue igualando, con un Francisco Prado yendo a más cada vez, dando un mejor desempeño en el segundo y el tercer asalto, finalmente no fue suficiente para convencer a 2 de los 3 jueces que dieron como ganador al kazajo en lo que fue una gran pelea de ambos. </p>
                    <h2>Brendan Allen Derrota a Marvin Vettori por Decisión Unánime</h2>
                    <p>El estadounidense logra una estupenda victoria por decisión unánime en la que hasta el momento es la pelea de la noche. Una absoluta guerra desde el primer momento es lo que vivimos los fanáticos, con el italiano Marvin Vettori recibiendo un golpe que le ocasionó un sangrado en la nariz desde el comienzo de la pelea, cosa que sin dudas afectó el resultado, pero que sin embargo no nos privó de presenciar una absoluta guerra en el octágono. De esta manera el #11 de la división de peso medio consigue llevarse otra victoria en la anteúltima pelea de la cartelera preliminar. </p>
                    <h2>Vinicius Oliveira Derrota a Kyler Phillips y Sigue Invicto en la UFC</h2>
                    <p>El brasileño #15 de la división de peso gallo hoy tuvo su cuarta pelea en la UFC, donde logró demostrar que es una de las grandes promesas de las 135lbs, dando un gran combate que comenzó perdiendo, pero que rápidamente fue capaz de dar vuelta, dominando progresivamente más a su rival. De esta manera, habiendo ganado claramente el segundo y tercer asalto, <Link href='/noticias/vinicius-oliveira-ufc'>Vinicius Oliveira</Link> logra su cuarta victoria en la compañía, y seguramente escalará unos cuantos puestos en el ranking, posicionándose como un próximo top 10 de esta división que tiene como campeón a <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>.</p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Michael Johnson Derrota a Daniel Zellhuber por Decisión Unánime</h2>
                    <p>El estadounidense se impone por sobre el mexicano en esta primer pelea de la cartelera estelar, luego de dominar la mayor parte del combate, al conectar un mayor volumen de golpes que le ayudaron a puntuar para terminar llevándose la pelea ante un Daniel Zellhuber que aunque parecía tener más fuerza en sus golpes, lo cierto es que conectó bastante menos que su rival, y que terminó por lanzar un montón de patadas a la cabeza que siempre eran bien bloqueadas por Johnson. Por lo que este primer combate de la cartelera estelar termina en victoria por decisión unánime para el estadounidense. </p>
                    <h2>Patricio Pitbull derrota a Dan Ige por Decisión Unánime</h2>
                    <p>Excelente victoria para el brasileño <b>Patricio Pitbull</b>, excampeón de peso pluma en Bellator, que consigue su primer victoria en la UFC, luego de lo que fue su debut terminado en derrota ante el mexicano <b>Yair Rodríguez</b>. En este combate se lo vió más sólido, demostrando ser un luchador con experiencia, consiguiendo dominar tanto el primer como el segundo asalto, y aunque se lo vió peor en el tercer y último asalto, pudo sobrevivir para terminar llevándose una merecida victoria por decisión unánime ante un rival complicadísimo como lo es el #11 de la división de peso pluma, <b>Dan Ige</b>. </p>
                    <h2>Daniel Rodriguez Derrota a Kevin Holland Por Decisión Unánime</h2>
                    <p>Daniel Rodriguez logra una gran victoria ante el #13 de peso wélter, derrotándolo por decisión unánime al ganar el primer y segundo asalto de un combate que tuvo de todo, knockdowns por parte de ambos luchadores, intentos de sumisión, y la sensación constante de que la pelea podía acabar por finalización en cualquier momento. Sin embargo, ambos luchadores fueron capaces de sobrevivir a las embestidas del otro, y quien terminó por salir victorioso de este caos que fue la pelea es Daniel Rodiguez, quien además había tomado la pelea en corto aviso, agrandando y dandole más mérito a su victoria ante un favorito del público como Kevin Holland. </p>
                    <h2>Paulo Costa Derrota a Roman Kopylov</h2>
                    <p>El brasileño vuelve a la victoria de la mejor forma posible en este UFC 318, al derrotar y dominar completamente al ruso Roman Kopylov, a pesar de que los 2 venían en dinámicas completamente diferentes, con Paulo Costa viniendo de 4 derrotas en sus últimas 5 peleas, y con Roman Kopylov viniendo de 2 victorias consecutivas. Sin embargo Costa volvió a mostrar su mejor nivel, y al ser superior en el striking (durante los 3 asaltos en mi opinión), se lleva una más que merecida victoria por decisión unánime en esta pelea coestelar.</p>
                    <h2>Max Holloway Derrota a Dustin Poirier en su Retirada y Sigue Siendo el BMF</h2>
                    <p>Finalmente se retiró <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en un combate que fue todo lo que nos imaginamos que iba a ser, con Poirier siendo más selectivo y contundente con sus golpes, con Max propinando un mayor volumen de golpes, y con knockdowns de los 2 lados. La pelea fue estupenda, a la altura de las 2 leyendas que la protagonizaron, y quien finalmente se la termina llevando es el hawaiano <Link href='/peleadores/max-holloway'>Max Holloway</Link>, que retiene el BMF y que le amarga la despedida a Poirier, tal y como lo prometió en la previa del evento, ganando por decisión unánime luego de ganar 4 de los 5 asaltos del combate. Por último, vale la pena destacar que obviamente faltando 10 segundos para que termine el combate, Max Holloway apuntó al centro del octágono y se puso a intercambiar golpes con Poirier que aceptó el intercambio.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}