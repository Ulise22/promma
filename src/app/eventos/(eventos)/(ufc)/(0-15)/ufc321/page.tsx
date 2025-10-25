import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc321.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 321: ¡Tom Aspinall vs Ciryl Gane!',
    description: "",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc321.74476cd3.webp&w=828&q=65',
        title: 'UFC 321: ¡Tom Aspinall vs Ciryl Gane!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc321'
    }
}

export default function UFC321 () {
    return(
        <main>
            <ArticleHero title="UFC 321: ¡La pelea entre Tom Aspinall y Ciryl Gane Termina Sin Resultado por un Piquete De Ojo y Aspinall Sigue Siendo Campeón! ¡Mackenzie Dern Derrota a Virna Jandiroba y es Nueva Campeona!" subtitle='¡Umar Nurmagomedov Derrota Mario Bautista por Decisión Unánime en una Victoria Dominante! ¡Alexander Volkov Derrota a Jailton Almeida por Decisión Dividida!' image={hero} date='2025-10-25' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Tremendo el evento de MMA que tenemos esta noche, donde en el <b>UFC 321</b> tendremos como evento estelar la pelea por el título de Peso Pesado de la UFC, en la que el actual campeón <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> estará defendiendo por primera vez su cinturón indiscutido ante el #1 de la división, el francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>. Por si fuera poco, en el evento coestelar se estará disputando el título vacante de peso paja femenino, donde la #1 de la división <b>Virna Jandiroba</b> se enfrentará a la #5 de la división <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link></p>
                    <p>Además, volverá a pelear el daguestaní, primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, enfrentando al #8 de la división de peso gallo <b>Mario Bautista</b>. El otro combate de peso pesado al que hay que prestarle atención, es el del #2, el ruso <b>Alexander Volkov</b>, y el brasileño #5 <b>Jailton Almeida</b>, en busqueda de una oportunidad de pelear por el título de la división con el ganador del combate estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Mizuki Derrota a Jaqueline Amorim en un Peleón</h2>
                    <p>Espectacular pelea para abrir la cartelera la que acabamos de presenciar, con la japonesa <b>Mizuki</b>, siendo quien finalmente se lleva la victoria. Luego de un primer asalto bastante cerrado, en el que la vencedora fue de menos a más, en el segundo y tercer round de la pelea fue Mizuki quien se impuso claramente ante su rival brasileña <b>Jaqueline Amorim</b>, mostrando una superioridad en el striking notable, y castigando en el ground and pound para finalmente llevarse la victoria por decisión unánime. </p>
                    <h2>Mitch Raposo Derrota a Azat Maksum por Decisión Unánime</h2>
                    <p>Gran victoria por parte de Mitch Raposo que fue capaz de llevarse la victoria por decisión unánime, en un combate que fue bastante equilibrado por parte de ambos luchadores, con Maksum conectando varios derribos en los que Raposo era capaz de ponerse de pie rapidamente. Finalmente un elemento importante para la victoria del estadounidense, fue la deducción de un punto a su rival kazajo <b>Azat Maksum</b>, quien para ponerse de pie se sujeto de la reja, lo cual esta prohibido. </p>
                    <h2>Hamdy Abdelwahab Derrota a Chris Barnett Por Decisión Unánime</h2>
                    <p>Gran victoria para el luchador egipcio <b>Hamdy Abdelwahab</b>, quien destruyó completamente a su rival español <b>Chris Barnett</b>, golpeando desde todos lados, con un diferencial de golpes que debe superar los 100, y todo esto a pesar de que se le descontó un punto en el primer asalto, por darle un codazo ilegal atrás de la cabeza su rival. </p>
                    <h2>Nathaniel Wood Derrota a Jose Miguel Delgado por Decisión Unánime</h2>
                    <p>Victoria para el luchador inglés <b>Nathaniel Wood</b>, quien finalmente luego de 3 asaltos se impuso por sobre su rival mexicano <b>José Miguel Delgado</b>, por decisión unánime, pese a partir como el menos favorito en las apuestas, logrando hacer la diferencia especialmente en los últimos 2 asaltos. </p>
                    <h2>Valter Walker Somete a Louie Sutherland en el Primer Asalto</h2>
                    <p>Espectacular lo conseguido por el brasileño <b>Valter Walker</b>, quien consigue la primer finalización de la noche, al conectar su ya tan característico knee hook, que llegó luego de conectar de manera excelente un derribo, para proceder a someterlo, consiguiendo su cuarta sumisión por esta vía en la UFC. </p>
                    <h2>Ludovit Klein Derrota a Mateusz Rebecki por Decisión Mayoritaria</h2>
                    <p>Maravillosa pelea la que acabamos de presenciar en este instante, tal y como nos tiene acostumbrados el luchador polaco <b>Mateusz Rebecki</b>, quien se acostumbró a ir a la guerra en cada uno de sus combates. En esta ocasión el luchador de Eslovequia <b>Ludovit Klein</b> fue capaz de mantener la distancia para no recibir tanto castigo, ganando claramente los primeros 2 asaltos, pero fue en el último round cuando las cosas se igualaron, con el polaco yendo más al frente en busca de una finalización, estando cerca de noquear y conectando golpes por todas partes. Finalmente, aunque el uno de los jueces vió al último asalto como un 10-8, debido a la superioridad mostrada por Rebecki, por lo que la pelea podría tranquilamente haber acabado en empate, quien se llevó la victoria por decisión mayoritaria fue Ludovit Klein. </p>
                    <h2>Ikram Aliskerov Derrota a Junyong Park Por Decisión Unánime</h2>
                    <p>Brutal victoria para el luchador daguestaní <b>Ikram Aliskerov</b>, quien fue ampliamente superior a su rival surcoreano <b>Junyong Park</b>, ganándole los 3 asaltos de la pelea, en un combate bastante completo por parte del luchador ruso, quien conectó muchos más y mejores golpes que su rival, combinando estos golpes con varios derribos que fue capaz de concretar, mostrando mejor también en la lucha. De esta forma Aliskerov vuelve a la victoria por decisión unánime. </p>
                    <h2>Quillan Salkilld Noquea a Nasrat Haqparast en el Primer Asalto</h2>
                    <p>Escalofríante KO el que consiguió el luchador australiano <b>Quillan Salikilld</b>, quien con una patada derecha en la cabeza de su rival lo tumbó y lo mandó a dormir inmediatamente, cayendo en seco y quedando compeltamente KO. Sin dudas el australiano terminará ganando un bono por desempeño gracias a esta patada, y ha sumado un highlight a su carrera que quedará en la memoria de todos durante mucho tiempo.</p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2></h2>
                    <p></p> */}
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Azamat Murzakanov Noquea a Aleksandar Rakic en el Primer Asalto</h2>
                    <p>Espectacular victoria del ruso <b>Azamat Murzakanov</b>, quien en el primer asalto fue capaz de noquear al #7 de la división <b>Aleksandar Rakic</b>, tan sólo con un jab, que una vez impactó en la cabeza de su oponente, le hizo caer al suelo inmediatamente, necesitando sólo de un golpes más para que el árbitro los separara y diera como ganadro a Murzakanov por TKO en el primer asalto. De esta manera, el luchador ruso mantiene y extiende su récord invicto a 16-0, escalando además, al top 10 de la división de peso semipesado. </p>
                    <h2>Alexander Volkov Derrota a Jailton Almeida por Decisión Dividida</h2>
                    <p>En una controvertida decisión, quien termina llevándose la pelea es el ruso <b>Alexander Volkov</b>, quien claramente había ganado el primer asalto del combate, pero que debatiblemente había perdido los siguientes 2 asaltos, luego de ser derribado y controlado en el suelo por su rival brasileño <b>Jailton Almeida</b>. Más allá de los que piense yo, el ganador a los ojos de 2 de los 3 jueces, es Alexander Volkov por decisión dividida. </p>
                    <h2>Umar Nurmagomedov Derrota a Mario Bautista Por Decisión Unánime</h2>
                    <p>Espectacular victoria para <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, quien desmostró que si ocupa un lugar tan alto en los rankings de peso gallo es por algo, habiendo dominado completamente a su rival durante los 3 asaltos, ganando todos ellos, luego de saber combinar su muy buen striking con derribos y algo de lucha para dejar a Mario Bautista sin saber que esperar exactamente. Luego de lo hecho hoy, existe la posibilidad de que el ruso se haya ganada la oportunidad de una revancha contra el actual campeón <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, en caso de no ser así, seguramente sólo esté a una victoria más de volver a pelear por el título. </p>
                    <h2>Mackenzie Dern Derrota a Virna Jandiroba por Decisión Unánime y es Nueva Campeona de UFC</h2>
                    <p>La brasileña, y hasta hace unos momentos #5 de la división de peso paja femenino, <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link>, luego de una actuación brillante por su parte, se convierte en la nueva campeona de la división femenina de la UFC. Teniendo un desempeño sumamente destacado, especialmente en lo que refiere al striking, manejando mejor la distancia que su rival, y siendo capaz de conectar golpes durísimos incluso cuando era derribada y terminaba con la espalda en el suelo, ganando desde mi punto de vista, 4 de los 5 asaltos (aunque pueden ser 3 también). </p>
                    <h2>La pelea entre Tom Aspinall y Ciryl Gane Termina Sin Resultado por un Piquete De Ojo</h2>
                    <p>Amarga manera de terminar la noche con el evento estelar terminando de forma anticlimática, luego de que <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> accidentalmente le metiera los dedos en los 2 ojos al campeón inglés <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>, dejando a Tom con la imposibilidad de ver correctamente, incapaz de continuar peleando. Por lo que el combate terminó sin resultado, apenas antes de que pudiera terminar el primer asalto. De esta manera, el campeón inglés retiene su título, y seguramente la pelea de hoy deba reprogramarse para otra ocasión. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}