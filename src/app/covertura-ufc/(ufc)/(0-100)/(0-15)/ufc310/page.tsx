import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-100/0-15/ufc310.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC 310',
    description: "Evento de UFC con la pelea entre Alexandre Pantoja y Kai Asakura por el cinturón de peso mosca como evento titular. Además tenemos a invicto contra invicto de pelea coestelar, con Shavkat Rakhmonov vs Ian Garry poniendo en juego su 0...",
    openGraph: {
        title: 'UFC 310',
        description: "Evento de UFC con la pelea entre Alexandre Pantoja y Kai Asakura por el cinturón de peso mosca como evento titular. Además tenemos a invicto contra invicto de pelea coestelar, con Shavkat Rakhmonov vs Ian Garry poniendo en juego su 0...",
        url: 'https://fullmma.org/covertura-ufc/ufc310'
    }
}

export default function UFC310 () {
    return(
        <main>
            <ArticleHero title="UFC 310: ¡Alexandre Pantoja Somete a Kai Asakura en el Segundo Asalto! ¡Rakhmonov Derrota a Ian Garry Por Decisión! ¡Ciryl Gane Derrota a Volkov por Decisión!" subtitle='Movsar Evloev Gana su Pelea por Decisión. Vicente Luque Logra una Victoria por Sumisión en el Primer Asalto. Además Dominick Reyes Derrota a Anthony Smith por TKO en el Segundo Asalto' image={hero} date='2024-12-07' author={null} updatedDate='2024-12-08' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Último evento de PPV del año con el UFC 310, que nos trae como evento principal la pelea por el cinturón de peso mosca de la UFC entre el actual campeón <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, y el debutante japonés de 31 años que peleará por primera vez en la compañía <Link href='/noticias/quien-es-kai-asakura'>Kai Asakura</Link>. Además como evento coestelar tendremos la pelea eliminatoria del título de peso wélter entre los 2 invictos de la división, el luchador de Kazajistán <Link href='/peleadores/shavkat-rakhmonov'>Shakvat Rakhmonov</Link> y el irlandés <Link href='/peleadores/ian-garry'>Ian Garry</Link>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Kennedy Nzechukwu Noquea a Lukasz Brzeski en la Primera Pelea de la Noche</h2>
                    <p>Increíble manera de comenzar la cartelera, con el nigeriano Nzechukwu consigue una gran victoria por la vía del nocaut al conectar un gancho con la mano derecha que tumbó a su rival, consiguiendo la segunda victoria de su carrera en la UFC, dado que viene de una victoria por TKO ante el español <b>Chris Bernett</b> en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>. </p>
                    <p>Por su parte, el luchador polaco Lukasz Brzeski parece estar despidiendo de la compañía, dado que con esta nueva derrota, suma 5 peleas perdiendo de 6. </p>
                    <h2>Chase Hooper Somete a Clay Guida en el Primer Asalto</h2>
                    <p>El joven luchador estadounidense de apenas 25 años, es capaz de conseguir su cuarta victoria consecutiva en la compañía al someter con una palanca de brazo en el primer asalto a su rival. Esta además es la tercer victoria consecutiva de Hooper por la vía de la sumisión. </p>
                    <p>Por su parte, el veterano luchador de 42 años Clay Guida, obtiene su tercer derrota consecutiva en sus más de 36 peleas en la UFC. </p>
                    <h2>Michael Chiesa Somete a Max Griffin en el Tercer Asalto</h2>
                    <p>El luchador estadounidense consigue una gran victoria por la vía de la sumisión ante <b>Max Griffin</b>, en un combate que dominó completamente de principio a fin. Pese a dominar en el suelo, no había intentado realizar una sumisión hasta el último asalto de la pelea, cuando finalmente consiguió conectar una sumisión por mataleón ante su rival.</p>
                    <p>De esta manera, el luchador veterano de 37 años consigue su segunda victoria consecutiva, dado que venía someter a nadie menos que <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> en el <Link href='/covertura-ufc/fight-night-sandhagen-nurmagomedov'>UFC Fight Night: Sandhagen vs Nurmagomedov</Link></p>
                    <h2>Joshua Van Derrota a Cody Durden y se Mete al TOP #15</h2>
                    <p>Espectacular pelea por parte de estos 2 luchadores de peso mosca, donde el joven luchador de 23 años, Joshua Van, consiguió una increíble victoria por la vía de la decisión que lo coloca en el ranking de la división. </p>
                    <p>El primer asalto nos había traído a un Cody Durden que fue capaz de controlar a su joven rival contra la reja. Sin embargo, todo el esfuerzo necesario para mantener a raya a su contrincante, terminó por cansarlo durante los siguientes asaltos, que llevó a Van a defender de mejor manera todos los intentos de derribo, y a conectar los mejores golpes que iban con una potencia increíble a la cabeza de su rival, que ya cansado, se le hacía difícil mantener la guardia en alto. </p>
                    <p>Es un milagro que la pelea no haya terminado por nocaut, dado que a tal punto llegó el dominió de Joshua, que terminó por conectar más de 160 golpes significativos al final de la pelea. De esta forma, en su segunda victoria consecutiva luego de haber ganado su combate en el <Link href='/covertura-ufc/ufc306'>UFC 306</Link>, el joven luchador americano se mete en los rankings de la división. </p>
                    <h2>Eryk Anders Derrota por TKO a Chris Weidman en el Segundo Asalto</h2>
                    <p>En un combate donde el veterano excampeón de peso mediano <b>Chris Weidman</b> parecía haber ganado el primer asalto, terminó por perder la pelea al ser noqueado en el segundo. </p>
                    <p>Anders estuvo practicamente la totalidad del segundo round por encima de su rival, castigándolo con el ground & pound a un Chris que pareció ido durante casi todo el asalto. Finalmente el árbitro terminó por parar la pelea a 10 segundos de que terminé el asalto al no ver respuesta por parte del excampeón. </p>
                    <h2>¡Bryan Battle Derrota a Randy Brown Por Decisión Dividida!</h2>
                    <p>El estadounidense <b>Bryan Battle</b> logra llevarse la victoria por la mínima ante el jamaiquino <b>Randy Brown</b> en un combate bastante cerrado, en el que Bryan logró sacar la diferencia en el intercambio de golpes en el clinch, conectando varios rodillazos contra la reja. </p>
                    <p>Vimos la mejor versión de Randy Brown cuando la pelea se mantuvo a la distancia, aprovechando el alcance que este tiene para conectar a su rival, que sin duda sintió el poder que llevaban sus manos. Sin embargo, Bryan Battle se dió cuenta de esto, y llevó la pelea al clinch siempre que pudo. </p>
                    <h2>¡Movsar Evloev Le Gana Aljamain Sterling y Sigue Invicto!</h2>
                    <p>El peleador ruso supo enfrentar a un complicadísimo rival como el excampeón de peso gallo <b>Aljamain Sterling</b>, a quien luego de 3 asaltos fue capaz de derrotar por decisión unánime, teniendo un segundo y tercer asalto muy buenos, que seguramente fueron los que le dieron la victoria a los ojos de los jueces.</p>
                    <p>Evloev supo tener un muy buen striking durante la pelea, conectando un par de golpes que su rival sintió, y también fue bueno en la lucha, donde supo salir de los enrredos en los que lo metía su rival, además de ser capaz de completar exitosamente sus intentos de derribos. De esta manera supo defender su invicto, y pareciera que una posible pelea por el título está cada vez más cerca. </p>
                    <h2>¡Vicente Luque Somete a Themba Gorimbo En el Primer Asalto!</h2>
                    <p>El brasileño Vicente Luque consigue una impresionante victoria ante todo pronóstico, logrando conectar una anaconda que dejó inconsciente a su rival en menos de un minuto, logrando una nueva victoria que muy seguramente le hará ganar el bono a la Actuación de la Noche. </p>
                    <h2>¡Dominck Reyes Derrota a Anthony Smith por TKO en el Segundo Asalto!</h2>
                    <p>Dominick Reyes consigue su segunda victoria consecutiva en el año ante el veterano de 36 años <b>Anthony Smith</b>, a quien dominó completamente castigando desde el piso a su rival, conectando en sólo 2 asaltos más de 125 golpes significantes, rompiendo su marca anterior. </p>
                    <p>De esta manera el luchador de 34 años sigue en racha de victoria luego de su tiempo de inactividad que se tomó desde 2022. Por su lado, Anthony Smith se retiró el día de hoy, siendo esta su última pelea como profesional, dejando detrás un legado enorme con 59 peleas profesionales, y un récord de 38-21. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Dooho Choi Gana por TKO a Nate Landwehr en la Primer Pelea Estelar de la Noche</h2>
                    <p>El surcoreano logra una excelente victoria ante el estadounidense <b>Nate Landwehr</b>, a quien fue capaz de dominar completamente durante la totalidad del combate, castigándolo mucho en el striking, y logrando finalizar cuando dejó a su rival en un crucifijo, del cual no podía defenderse y sólo le tocaba recibir daño. Finalmente, con un muy buen criterio, el árbitro vió innecesario que el estadounidense reciba más castigo, parando la pelea para que Dooho Choi se quede con la victoria. </p>
                    <h2>Bryce Mitchel Noquea a Kron Gracie en el Tercer Asalto</h2>
                    <p>El estadounidense <b>Bryce Mitchel</b> logra derrotar al brasileño <b>Kron Gracie</b> por la vía del nocaut, luego de que este último jalara guardia, y de que el Bryce aprovechara la posición en la que quedó para dar codazos desde arriba a su rival, que le terminó dando la victoria por finalización. </p>
                    <p>De esta forma, Bryce Mitchel logra reponerse de su última pelea que acabó en derrota por nocaut ante <b>Josh Emmett</b>, además de la derrota que había sufrido hacía 2 combates ante el ahora campeón de la división, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>. </p>
                    <h2>Ciryl Gane Derrota a Alexander Volkov Por Decisión Dividida</h2>
                    <p>En una pelea sin mucha acción, quien finalmente se quedó con la victoria fue el luchador francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> en lo que fue una decisión dividida bastante controversial, dado que al menos yo en lo personal ví ganar al peleador ruso <b>Alexander Volkov</b>. Aunque de igual forma el combate fue bastante cerrado, con ambos peleadores sorprendiendo al llevar este al terreno de la lucha y el jiu-jitsu, donde ninguno fue capaz de finalizar, pero donde se vió a Volkov dominar gran parte de la pelea cuando se estuvo en este terreno. </p>
                    <p>Luego de la pelea, Ciryl Gane estuvo a punto de irse sin dar la entrevista post pelea, confesando después que esto fue a que se lesionó en el primer asalto en el pie, y a que, pese a la victoria, no estuvo contento con la pelea. </p>
                    <h2>Shavkat Rakhmonov Derrota a Ian Machado Garry Por Decisión</h2>
                    <p>En una muy buena pelea, el luchador de Kazajistán, <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link> se lleva la pelea por decisión, siendo esta la primera de sus peleas en terminar todos los asaltos. Supo dominar gran parte del combate, ganando a mi juicio 3 de los 5 asaltos, que le fueron suficiente para llevarse la victoria, manteniendo su invicto, y extendiéndolo a 19-0. </p>
                    <p>Por su parte, hay que destacar la actuación de <Link href='/peleadores/ian-garry'>Ian Gary</Link>, que pese a perder el combate, demostró ser muchísimo mejor peleador de lo que muchos creían, estando bastante cerca de la victoria incluso en el último asalto, cuando estuvo a nada de conectar un mataleón que podría haber sometido a Rakhmonov. El irlandés hoy perdió su invicto, pero ha demostrado ser un excelente peleador que no está muy lejos de obtener una pelea titular. </p>
                    <h2>Alexandre Pantoja Somete a Kai Asakura en el Segundo Asalto</h2>
                    <p>El brasileño <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link> completa su tercera defensa exitosa del cinturón a someter con un mataleón al japonés <Link href='/noticias/quien-es-kai-asakura'>Kai Asakura</Link>. En lo que fue una pelea bastante intensa, con un debutante que fue explosivo y conectó durísimos golpes, se terminó por resolver en el momento en que el campeón hizo valer su cinturón negro de jiu-jitsu, concretando un derribo y controlando la espalda de su rival, para someterlo y así seguir siendo el campeón reinante. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}