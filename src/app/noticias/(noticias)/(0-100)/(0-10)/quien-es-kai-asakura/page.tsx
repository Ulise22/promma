import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/kai_asakura.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: '¿Quién es Kai Asakura?',
    description: 'Kai Asakura el próximo sábado hará su debut en la UFC, y para ello no hará nada menos que disputar el título de la división de peso mosca ante el brasileño Alexandre Pantoja, de forma inédita, dado que no es común ver luchadores ir a pelear por el título en su primer combate en la compañía. Pero entonces, ¿quién es este luchador y cuál es su historia para llegar hasta donde está ahora?',
    openGraph: {
        title: '¿Quién es Kai Asakura?',
        description: 'Kai Asakura el próximo sábado hará su debut en la UFC, y para ello no hará nada menos que disputar el título de la división de peso mosca ante el brasileño Alexandre Pantoja, de forma inédita, dado que no es común ver luchadores ir a pelear por el título en su primer combate en la compañía. Pero entonces, ¿quién es este luchador y cuál es su historia para llegar hasta donde está ahora?',
        url: 'https://fullmma.org/noticias/quien-es-kai-asakura'
    }
}

export default function ProximosRivalesTopuria () {
    return(
        <main>
            <ArticleHero title='¿Quién es Kai Asakura? La Estrella Japonesa Que Debutará Peleando Por el Título de UFC en el UFC 310 en Diciembre' subtitle='El luchador japonés Kai Asakura de 31 años que peleará por el Campeonato de Peso Mosca en su debut en la UFC.' image={hero} date='26/11/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Kai Asakura el próximo sábado hará su debut en la <Link href='/articulos/ufc'>UFC</Link>, y para ello no hará nada menos que disputar el título de la división de peso mosca ante el brasileño <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, de forma inédita, dado que no es común ver luchadores ir a pelear por el título en su primer combate en la compañía. Pero entonces, ¿quién es este luchador y cuál es su historia para llegar hasta donde está ahora?</p>
                    <p>Para comenzar, hay que destacar que, aunque no es muy conocido en esta parte del mundo, en occidente, sí es que es una figura muy reconocida en su país natal Japón. Para ponerlo en métricas, cuenta con más de 1,3 millones de subscriptores en su canal de YouTube, cuenta con más de medio millón de seguidores en su cuenta de Instagram (el doble que <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, actual campeón de la división), y con más de 400 mil seguidores en su cuenta de X. Cosa que es muy interesante para la UFC, dado que le abre la puerta a un mercado en Asia que hasta el momento parecía no tener, abriendo incluso la puerta a organizar un evento en el país nipón, puesto que Asakura es un peleador capaz de llenar un estadio en su país natal. </p>
                    <p>Posee un estilo de striking muy pulido, y es un peleador muy entretenido para ver pelear, llegando a la UFC con un récord profesional de 21-4, siendo 13 de sus victorias por la vía del nocaut, es sin dudas un peleador que apunta a mover la división de peso mosca de la compañía, con el potencial para dar un golpe sobre la mesa, y para eventualmente convertirse en una estrella con lo que pueda lograr en la UFC. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/fVWhJcoXxf0?si=uT-UAhm92H6frour" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>La Historia y los Inicios de Kai Asakura</h2>
                    <p>Kai Asakura nació el día 31 de octubre de 1993 en la ciudad Yoyohashi, ubicada en la prefectura de Aichi, en Japón. Durante su educación primaria, Kai pasó 3 años jugando al vóley, a la vez que entrenaba Karate y Sumo desde temprana edad. </p>
                    <p>Durante gran parte de su infancia, pasó mucho tiempo viéndose envuelto en peleas callejeras junto a su hermano Miraku, quien en el futuro también se convertiría en un luchador de MMA, a menudo peleando incluso con este, especialmente durante la adolescencia. Kai atribuye gran parte de la dureza que demuestra en las MMA a estas experiencias de joven, que fueron fortaleciéndolo a él y a su carácter. En parte por los problemas que comenzaba a causar estas experiencias en su casa, es que un terapista aconsejó a su madre anotarlo en clases de boxeo, que eventualmente, alentado por su hermano mayor, mutaron a clases de artes marciales mixtas. </p>
                    <h2>Carrera de Kai Asakura en MMA</h2>
                    <p>De esta manera, aunque tendría su debut profesional el día 16 de septiembre de 2012, enfrentando a <b>Tomoya Suzuki</b>, consiguiendo una victoria por sumisión en el primer asalto, el japonés iniciaría su carrera en las MMA de manera amateur, teniendo un total de 10 combates antes de iniciar su carrera profesional. Cosechando un récord de 8-2, con 5 de sus victorias siendo por la vía del nocaut, y ganando en el proceso el <b>Campeonato del Torneo de Peso Gallo de Rings</b>. </p>
                    <p>Sería justamente en Rings donde comenzaría a competir de manera profesional, debutando el día 17 de mayo de 2015 ante <b>Satoru Date</b>, a quien derrotaría por TKO en el segundo asalto de la pelea. </p>
                    <p>Pelearía en esta promotora y en la compañía Road FC, unas 8 veces, cosechando un récord de 8-1, en donde sería capaz de ganar el Campeonato de Rings de 60kg, al ser capaz de noquear a <b>Yoichi Oi</b> en el primer asalto de la pelea, el día 4 de septiembre de 2016. </p>
                    <p>Sería luego de toda esta experiencia que Asakura firmaría por una de las promotoras más grandes del país, como lo es Rizin, heredera de la extinta y mítica PRIDE FC (ver artículo: <Link href='/articulos/que-paso-con-pride-fc'>¿Qué pasó con Pride FC?</Link>). En donde haría la mayor parte de su carrera, y donde obtendría los hasta ahora mayores logros de su carrera, que le darían el estatus de leyenda en Japón, y el potencial de hacer lo mismo en occidente. </p>
                    <p>Debutaría en esta compañía el día 29 de diciembre de 2017, enfrentando a <b>Kizaemon Saiga</b> en una pelea a peso pactado, logrando una impresionante victoria por la vía del nocaut en el segundo asalto de la pelea. </p>
                    <p>Aunque ahora mismo está anunciado para pelear en la división de peso mosca de la UFC, lo cierto es que Asakura hizo prácticamente toda su carrera en Rizin peleando en la división de peso gallo, donde se consagraría campeón en 2 ocasiones, siendo la primera el 10 de agosto de 2020, al derrotar por KO a su compatriota <b>Hirosama Ougikubo</b>. Y la segunda, en su más reciente combate, cuando el 31 de diciembre de 2023 fue capaz de derrotar por TKO al entonces campeón estadounidense <b>Juan Archuleta</b>, en el segundo asalto de la pelea. Tiempo después dejaría vacante su cinturón para unirse al Ultimate Fighting Championship, por lo que, aunque a la UFC no le gusta hacer ni promocionar este tipo de peleas, lo cierto es que el sábado 7 de diciembre de 2024 en el UFC 310, vamos a contemplar una pelea de campeón contra campeón de diferentes compañías.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/r_p85QBkPnc?si=B8s4CweeR4uPH3XT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Kai Asakura Debut en UFC</h2>
                    <p>Como mencionamos anteriormente, el luchador japonés va a ser uno de esos raros casos en los que un luchador va a pelear por el cinturón de la compañía en su debut en la empresa. Esto se hará el día sábado 7 de diciembre de 2024 en el UFC 310, ante el campeón de peso mosca brasileño <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, que viene de defender su cinturón en el <Link href='/covertura-ufc/ufc301'>UFC 301</Link> en Brasil, donde consiguió llevarse la victoria por decisión unánime ante el australiano <b>Steve Erceg</b>, concretando la segunda defensa exitosa de su cinturón. </p>
                    <p>Son muchas las expectativas puestas en este peleador, que cuenta con el potencial para ser una estrella, para ponerle emoción y para mover la división de 125lbs masculina. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}