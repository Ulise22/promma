import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import omalley from '@/assets/peleadores__images/20-30/sean-omalley/omalley.png'
import careo from '@/assets/peleadores__images/20-30/sean-omalley/omalley_careo.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Omalley () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={omalley} w={18} l={1} d={0} nombre={`Sean O'Malley`} apodo='SUGAR' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley UFC</h2>
                    <p className={styles.peleador__article__text}>Comenzó su trayecto de pelea en su ciudad natal, montana, luego se mudó a Dakota del norte y posteriormente luchó para Legacy Fighting Alliance, donde obtuvo un nocaut contra David Nuzzo. Tiempo más tarde, tras derribar a Alfred Khashakyan, recibió un contrato de UFC. El 1 de diciembre de 2017 tuvo su debut oficial contra Terrion Ware en The Ultimate Fighter 26 Finale donde ganó por decisión unánime. Llevando una trayectoria de 6 años, campeón de UFC 292 peso gallo (19/08/2023), ganando por KO en el segundo round.</p>
                    <p className={styles.peleador__article__text}>Con un total de 11 peleas oficiales en la UFC (15/08/2020) y 1 derrota contra Marlon Vera (15/08/202).</p>
                    <p className={styles.peleador__article__text}>O&apos;Malley Habló sobre el salario, diciendo: “Es por eso que argumento que me deberían pagar jodidamente más. Porque amigo, quiero decir de manera realista, con quien sea que pelee a continuación, no tengo que vender esa pelea, porque no me pagarán más si son cinco o un millón de personas las que miran la pelea. Debería haber incentivos allí. Lo haces si estás en el evento principal y obtienes puntos de PPV. Pero incluso en mi posición, debería poder obtener puntos de PPV ya que puedo vender la pelea.”</p>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Record</h2>
                    <p className={styles.peleador__article__text}>Total de 19 peleas, 17 victorias, 12 continúas, 12 por nocaut, 1 por sumisión y 5 por decisión. 12 peleas oficiales en la UFC, 10 victorias, 6 por nocaut y 4 por decisión. 1 sin resultado y 1 derrota por nocaut. </p>
                    <Image className={styles.peleador__article__image} src={careo} alt='' />
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Historia</h2>
                    <p className={styles.peleador__article__text}>Nacido un 24 de octubre de 1994, Helena, Montana. Fue criado por su padre, oficial de narcóticos retirado. No se sabe mucho sobre su madre. Actualmente en relación con Danya Gonzalez y una hija, Elena. El luchador tiene un podcast propio llamado “Timbo Sugar Show” donde habla sobre las artes marciales, conversando con especialistas y amigos. </p>
                    <p className={styles.peleador__article__text}>“Uso al cannabis para relajarme por la noche. Es como si mi cuerpo lo supiera bien: nos estamos relajando.” Afirma Sean O&apos;Malley. Suele publicar fotos y vídeos fumando marihuana con variados tipos de pipas, con porros, en su hogar o fuera de este. “Uso el cannabis para relajarme por las noches. A eso le sumo un chapuzón en el jacuzzi, lo hago religiosamente.”</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}