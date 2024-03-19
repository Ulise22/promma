import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/0-10/mejores-estilos_hero.jpg'

export default function MejoresEstilosMMA () {
    return(
        <main>
            <ArticleHero title='Los Mejores Estilos para Pelear en MMA' subtitle='Repasaremos sólo algunos de los que son los estilos de pelea más efectivos a la hora de competir en las Artes Marciales Mixtas, usando un criterio completamente subjetivo.' image={hero} date={null} author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En este artículo repasaremos 5 de las artes marciales más eficientes a la hora de competir en las MMA, para ello tendremos en cuenta, en parte, la cantidad de campeones que supo tener cada estilo en la <Link href='/promotoras/ufc'>UFC</Link>, que al menos por ahora, es la empresa de Artes Marciales Mixtas más grande del mundo. Dejando en claro que el mundo de las MMA y de las artes marciales en general es muy amplio y bastante complejo, no es tan fácil como pensar que un boxeador no tiene oportunidad con un especialista en jiu-jitsu, o algo parecido. Además nos dejaremos afuera algunas artes marciales como el Judo, que supo tener represantes legendarios en el deporte como a <Link href='/leyendas/ronda-rousey'>Ronda Rousey</Link>, o al karate que supo tener como máximo representante a <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link>, que con tremendas figuras de exponenetes, deja aún más en claro lo subjetivo que es esto.</p>
                    <h3>Sambo</h3>
                    <p>Esta es la primera arte marcial que mencionamos, en parte porque pese a ser reconocida como deporte nacional por el Comité de Deportes de Toda la URRS en 1938, para el mundo occidental era completamente desconocida hasta hace unos años. </p>
                    <p>Probablemente su representante más importante, sea la leyenda <b>Fedor Emelianenko</b>. Además, tuvo 2 practicantes de este estilo que fueron campeones de la UFC, ambos en la división de Peso Ligero, como lo son <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, y quien hoy en día es su alumno y campeón actual de la división, <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>.</p>
                    <p>Aunque actualmente, no parecieran haber tantos referentes con importancia en el deporte, con su creciente popularidad es cuestión de tiempo para que cada vez más peleadores entren en la escena internacional en las MMA con este estilo.</p>
                    <h3>Boxeo</h3>
                    <p>El que es uno de los deportes de combate más conocidos del mundo y a nivel histórico, es uno de los que más campeones de UFC nos ha traído, con un total de 23 campeones que practican este estilo. No es de extrañar que el obtener conocimientos en este deporte sea de gran ayuda en las MMA, dado que el conocimiento y habilidad en el golpeo que proporciona es algo que pocas artes marciales pueden ofrecer como este esta misma. </p>
                    <p>Quizás uno de sus mayores exponentes sea <b>Stipe Miocic</b>, quien es una auténtica leyenda de la UFC, siendo el campeón de Peso Pesado con más defensas exitosas en la compañía. Además el boxeo convirtió en campeones a otras figuras destacadas como lo son <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link> o <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>.</p>
                    <h3>Muay Thai</h3>
                    <p>La que es conocida como el arte de las 8 extremidades, al usar tanto manos, como pies, como rodillas y codos, es una de las más letales que existen en el mundo. Y destaca no sólo por lo vistoso de ver a un peleador utilzarla, sino también por su efectividad en el combate, que ha convertido en campeones a 13 peleadores de la UFC.</p>
                    <p>Este arte marcial nos ha traído a figuras destacadas de todo tipo, entre las que me gustaría destacar a <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, uno de los mejores peleadores de la historia de la UFC, que usando este estilo y algunos otros, pudo ser campeón de la UFC y defender su título un total de 10 veces, rompiendo el récord de defensas exitosas en su momento.</p>
                    <h3>Kickboxing</h3>
                    <p>Otro de los estilos más efectivos en las MMA, especialmente hablando de los estilos de pie, es el Kickboxing, que ha creado alrededor de 14 campeones de la UFC, dado que proporciona de un notable conocimiento en los golpes y patadas, lo que te vuelve muy peligroso a la hora de luchar.</p>
                    <p>Este estilo nos ha traído a legendarios campeones como por ejemplo a <b>Israel Adensanya</b>, que durante un tiempo pareció invencible, llegando a defender exitosamente su título en la división de peso mediano un total de 5 veces, hasta que lo perdería contra <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, otro histórico campeón especialista en Kickboxing, que además, recientemente supo ser campeón de la división de Peso Semipesado en la UFC.</p>
                    <h3>Jiu Jitsu Brasileño</h3>
                    <p>Quizás este sea el arte marcial más dominante en el deporte, aportando alrededor de 36 campeones. A lo largo de la historia de la UFC, este ha demostrado ser una de las artes marciales más peligrosas y efectivas a la hora de combatir contra otro peleador, como han demostrado muchos campeones brasileños que vienen coronando desde el UFC 1, como es el caso de <Link href='/leyendas/royce-gracie'>Royce Gracie</Link>, u otras figuras más actuales como <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, que supieron ser campeones de la UFC.</p>
                    <p>Además, de aprenderse bien esta arte marcial y combinarla con algún arte marcial de golpeo o de pie, te vuelve practicamente invencible y muy poderoso en todos los ambitos de la pelea.</p>
                    <p>Tal es el caso de lo dominante que se vuelve un especialista en jiu jitsu, que muchos peleadores originalmente especializados en peleas de pie, tienen que aprender a fuerza algo de jiu jitsu para poder defenderse y no quedar tan expuestos y vulnerables ante un rival que sí sepa pelear de esta manera.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}