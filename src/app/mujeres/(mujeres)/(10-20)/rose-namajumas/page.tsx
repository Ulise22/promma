import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import styles from '@/app/peleadores/components/peleador.module.css'
import rose from '@/assets/peleadores__images/mujeres/10-20/rose-namanjumas/rose_namajumas.png'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Rose Namajumas',
    description: "Rose Namajumas es una peleadora estadounidense que compite en la UFC desde diciembre de 2014, cuando participaría en la final de The Ultimate Fighter en la final contra la luchadora Carla Esparza. Rose supó ser campeona de la compañía en 2 oportunidades, ambas ocasiones en la división de Peso Paja Femenino, primero cuando derrotaría a la polaca Joanna Jędrzejczyk por TKO en el primer asalto en 2017, y la segunda vez cuando luego de perder su cinturón lo recuperaría al enfrentar a la china Weili Zhang, a quien derrotaría por KO en el primer asalto en abril de 2021.",
    openGraph: {
        title: 'Rose Namajumas',
        description: "Rose Namajumas es una peleadora estadounidense que compite en la UFC desde diciembre de 2014, cuando participaría en la final de The Ultimate Fighter en la final contra la luchadora Carla Esparza. Rose supó ser campeona de la compañía en 2 oportunidades, ambas ocasiones en la división de Peso Paja Femenino, primero cuando derrotaría a la polaca Joanna Jędrzejczyk por TKO en el primer asalto en 2017, y la segunda vez cuando luego de perder su cinturón lo recuperaría al enfrentar a la china Weili Zhang, a quien derrotaría por KO en el primer asalto en abril de 2021.",
        url: 'https://fullmma.org/mujeres/rose-namajumas'
    }
}

export default function RoseNamajumas () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={rose} w={13} l={6} d={0} nombre='Rose Namajumas' apodo='Thug Rose' categoria='Peso Mosca Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Rose Namajumas UFC</h2>
                    <p className={styles.peleador__article__text}>Rose Namajumas es una peleadora estadounidense que compite en la <Link href='/articulos/ufc'>UFC</Link> desde diciembre de 2014, cuando participaría en la final de <b>The Ultimate Fighter</b> en la final contra la luchadora <b>Carla Esparza</b>. Rose supó ser campeona de la compañía en 2 oportunidades, ambas ocasiones en la división de Peso Paja Femenino, primero cuando derrotaría a la polaca <b>Joanna Jędrzejczyk</b> por TKO en el primer asalto en 2017, y la segunda vez cuando luego de perder su cinturón lo recuperaría al enfrentar a la china <Link href='/mujeres/weili-zhang'>Weili Zhang</Link>, a quien derrotaría por KO en el primer asalto en abril de 2021.</p>
                    <h2 className={styles.peleador__article__title}>Rose Namajumas Récord</h2>
                    <p className={styles.peleador__article__text}>Rose Namajumas posee un récord profesional de 13-6. Siendo 2 de sus victorias por la vía del nocaut, 5 por la vía de la sumisión y 6 por decisión. Mientras que de sus 6 derrotas, 1 fue por nocaut, 1 por sumisión, y 4 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>¿Cuántos Cinturoes Tiene Rose Namajumas?</h2>
                    <p className={styles.peleador__article__text}>En cuanto a cinturones de UFC, fue campeona de peso paja en 2 ocasiones, defendiendo exitosamente el título en 2 ocasiones.</p>
                    <p className={styles.peleador__article__text}>Mientras que en las artes marciales, Rose Namajumas es cinturón negro en Taekwondo, es cinturón negro en Karate y es cinturón café en Jiu-Jitsu Brasileño.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ZlJsPPdpsaY?si=NeLufFEg6a1vjkxm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Rose Namajumas Biografía</h2>
                    <p className={styles.peleador__article__text}>Rose Gertrude Namajunas nació el 29 de junio de 1992 en Estados Unidos, en la ciudad de Milwaukee, ubicada en el estado de Wisconsin. Rose tuvo una infancia complicada, siendo hija de un padre que padecía esquizofrenia y que abandonó a su familia cuando Namajumas aún era joven, falleciendo de neumonía en Alemania en 2008, cuando nuestra protagonista tenía 16 años. </p>
                    <p className={styles.peleador__article__text}>Se crío en un barrio muy duro, donde desde temprana edad fue testigo de la violencia que se vivía en el lugar donde ella estaba. Su madre trabajaba mucho por lo que apenas la veía, y su hermano practicamente no estaba en la casa. El barrio en el que se crió estaba habitado predominantemente por personas afroamericanas, de ahí es que sus amigos la apodaron &quot;Thug Rose&quot;, ya que a pesar de ser la única chica blanca con entre ellos y de ser la más pequeña, actuaba como si fuera la más dura.</p>
                    <p className={styles.peleador__article__text}>Desde los 5 años que comenzó a practicar artes marciales, comenzando con el taekwondo, del que obtuvo el cinturón negro a los 9 años. Luego entrenó karate y BJJ, hasta que de la mano <b>Duke Roufus</b>, empezó a entrenar kickboxing y MMA cuando ya estaba en secundaria. Fue en el mismo gimnasio de Duke, donde conocería a quien conocería a su actual pareja y compañero de entrenamiento, el ex luchador de peso pesado de UFC <b>Pat Barry</b>.</p>
                    <p className={styles.peleador__article__text}>Haría su debut como profesional el 5 de enero de 2013 en la promotora especializada en combate de mujeres <b>Invicta FC</b>, enfrentando a su compatriota <b>Emily Kagan</b>, a quien sometería en el tercer asalto de la pelea, ganando el bono a la sumisión de la noche. Su siguiente combate sería en la misma promotora unos meses después, donde lograría volver a ganar por sumisión, esta vez a los 12 segundos del pimer asalto, ganando el bono a la sumisión de la noche.</p>
                    <p className={styles.peleador__article__text}>Sus primeras derrotas como profesional llegarían inmediatamente después, perdiendo primero contra <b>Tercia Torres</b>, quien luego de 3 asaltos se llevaría la pelea por decisión unánime. Y su segunda derrota llegaría en su arribo a la UFC, donde luego de llegar a la final del reality <b>The Ultimate Fighter 20</b>, se jugaría el título inaugural de Peso Paja de Mujeres de la UFC, en donde enfrentando a la estadounidense <b>Carla Esparza</b>, caería por sumisión en el tercer asalto.</p>
                    <p className={styles.peleador__article__text}>Luego de estas 2 derrotas, ya con contrato en la UFC, conseguiría completar 4 victorias en la comapañía, incluída una en su revancha contra <b>Tercia Torres</b>, a quien esta vez lograría vencer por decisión unánime. Esta racha le abriría las puertas para enfrentar a la entonces campeona invicta <b>Joanna Jędrzejczyk</b>, quien con un récord de 14-0, llevaba 5 defensas completas del título. La previa del combate fue bastante agresiva por parte de la entonces campeona, que recordó el bullyng que había sufrido nuestra protagonista siendo niña, y afirmó que dentro del octagono le haría rememorar esa época, sin embargo Rose fue más fuerte mentalmente, y el 4 de noviembre de 2017 logró su primera victoria por nocaut en el primer asalto, convirtiéndose en la nueva campeona de Peso Paja Femenino de UFC, ganando además el bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/zZfD0DyYuHc?si=ZvvV0s4czfZrZ0HB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Se progamaría una revancha para el 7 de abril de 2018, que terminaría con una Rose Namajumas defendiendo exitosamente el título por decisión unánime. Lamentablemente su segunda defensa no terminaría tan bien, puesto que perdería por KO contra la brasileña <b>Jéssica Andrade</b> en el segundo asalto, en lo que sin embargo le valdría un bono a la pelea de la noche. Aunque luego lograría tomar venganza por esta derrota, venciendo a la brasileña por decisión en junio de 2020, lo cierto es que esta ya había perdido el cinturón contra la peleadora asiática <Link href='/mujeres/weili-zhang'>Weili Zhang</Link>.</p>
                    <p className={styles.peleador__article__text}>Por lo que lo siguiente para Rose, era enfrentar a la nueva campeona, que no sólo había ganado el título, sino que además ya lo había defendido una vez contra la excampeona Joanna. El 20 de abril de 2021, ambas luchadoras se enfrentaron en el UFC 261, en una noche que terminó con Rose Namajumas logrando nuevamente un KO espectácular con una pata a la cabeza, que la convertiría nuevamente en la campeona, ganando además , el bono a la actuación de la noche.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/xwbH4Iqb20k?si=bQcNJ46MJNQQJ3b0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Nuevamente le tocaría una revancha en su defensa del título, enfrentando nuevamente a Weili Zhang, a quien otra vez lograría vencer, esta vez por decisión dividida. Su segunda defensa sería contra una peleadora a la que ya había enfrentado en el pasado y que había derrotado a nuestra protagonista, <b>Carla Esparza</b>, quien nuevamente vencería, por decisión dividida y arrebatándole el cinturón a Rose.</p>
                    <p className={styles.peleador__article__text}>Rose se tomaría un año para regresar, aunque esta vez lo haría para competir en la división de Peso Mosca, donde primeramente enfrentaría el 2 de septiembre de 2023 a la francesa <b>Manon Fiorot</b>, contra quien caería derrotada por decisión unánime. Sin embargo unos meses después volvería para encabezar el evento <b>UFC on ESPN: Ribas vs. Namajunas</b>, el 23 de marzo de 2024, donde enfrentaría a la brasileña <b>Amanda Ribas</b>, a quien luego de 5 asaltos vencería por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/T3wUEnyQ7a4?si=s6LwWhy7CVNHSpDn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Rose ya está programada para encabezar otro <b>UFC Fight Night</b>, contra la estadounidense <b>Maycee Barber</b>, a quien enfrentará el 13 de julio de 2024, buscando escalar hasta la cima para ganarse una oportunidad por el título de peso mosca, que de ganarlo la convertiría en la segunda doble-campeón femenina.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}