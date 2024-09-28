import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/10-20/mariusz-pudzianowski-hero.jpg'

export const metadata: Metadata = {
    title: 'Luchador de MMA 5 Veces El Hombre Más Fuerte del Mundo',
    description: '',
    openGraph: {
        title: 'Luchador de MMA 5 Veces El Hombre Más Fuerte del Mundo',
        description: '',
        url: 'https://fullmma.org/articulos/mariusz-pudzianowski'
    }
}

export default function MariuszPudzianowski () {
    return(
        <main>
            <ArticleHero title='El Polaco Que Fue 5 Veces el Hombre Más Fuerte del Mundo, y que con 45 Años Noquea a sus Rivales, Mariusz Pudzianowski' subtitle='La historia del hombre nacido en Polonia, Mariusz Pudzianowski, que luego de haber desarrollado su carrera como Strongman, siendo elegido el hombre más fuerte del mundo en 5 oportunidades, se mudó a las MMA, donde sorprendió a todos con su impenente físico y su habilidad para noquear rivales con más experiencia que él.' image={hero} date='30/04/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Mariusz Zbigniew Pudzianowski, conocido como Pudzian, nació el 7 de febrero de 1977 en la ciudad de Biala Rawska, en Polonia. Es hijo de un levantador de pesas, que fue de gran influencia para que nuestro protagonista se interesera por el deporte, comenzando a practicar karate con 11 años, y a levantar pesas con 13. Además desde los 15 comenzó a practicar boxeo, aunque abandonó esta practica unos 7 años después. </p>
                    <p>Comenzó su carrera como deportista a los 16 años, formando parte de una competición de levantamiento de pesas. Aunque su debut profesional como weightlifter sería el 1 de mayo de 1999, hace casi 25 años, cuando competiría en un campeonato de Strongman organizado en Polonia. Un año después participaría del World&apos;s Strongest Man, donde tendría un impresionante desempeño para lo joven que era, clasificando como 4° en su primer torneo mundial. </p>
                    <p>Desafortunadamente este esperanzador comienzo para nuestro protagonista, se vería obstruido cuando entre el 2000 y el 2001 Pudzian sería encerrado en prisión, donde pasaría 19 meses de su vida. En una entrevista, el polaco dice ser arrestado por intentar detener a un jefe de la mafia local, quien luego lo acusó de robar su cadena de oro.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/wCe9NH-JMVo?si=xWbMy1XCCJJTpVTF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Este año de inactividad pareciera que lejos de haberle afectado negativamente, le hizo volver más fuerte que nunca (nunca mejor dicho), dado que en 2002 volvería a competir y se converitiría en el hombre más fuerte del mundo, ganando su primer título. Además, un año después, en 2003, volvería a quedar en primer lugar, rompiendo un récord en la competición, al convertirse en la victoria con la mayor diferencia de puntos en la historia (20), que era un diferencia mayor que entre el segundo y el noveno (18), siendo considerada la victoria más dominante en la historia de la competición. Participando en esta competencia, volvería a ser el número 1 en 3 ocasiones más, y quedaría en segundo lugar en 2 ocasiones.</p>
                    <p>El número de logros que este hombre consiguió como Strongman es interminable, de ser elegido el hombre europeo más fuerte en las 7 ocasiones que participó por este premio, hsata haber quedado 16 veces en primer lugar en el <b>Strongman Super Series</b>; fue elegido el hombre más fuerte de Polonia en 7 ocasiones; ganó 2 veces la <b>World Strongman Cup Federation</b>; ganó en 3 ocasiones el <b>World&apos;s Strongest Team</b>, donde eligió de compañero a <b>Jarek Dymek</b> en 2 de sus 3 campeonatos, y a <b>Slawomir Toczek</b> en el último campeonato que ganó. Básicamente entre los años 1999 y 2009 se consagró de manera dominante como el hombre más fuerte del mundo.</p>
                    <p>Sin embargo, Pudzian decidió darle un giro a su vida, para convertirse en peleador de MMA, haciendo su debut en diciembre de 2009 contra <b>Marcin Najman</b>, a quien noquearía en el primer asalto.</p>
                    <p>Mariusz destacaría rápidamente en el mundo de las MMA por su imponente forma física, que pese a no tener un gran trasfondo en las artes marciales, le hacían sacar peleas adelante en base a la fuerza de sus puños. Entre los combates más destacados que tuvo al inicio de su carrera, está el que lo hizo enfrentar a <b>Butterbean</b>, otro con una apariencia partícular a quien fue capaz de noquear en el primer asalto, derribándolo primero, y luego consiguiendo un TKO gracias a su ground and pound.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/fkJhMN_kcGU?si=gGjy_P96FPk8HuAn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>A lo largo de su carrera como peleador, sería capaz de vencer a ex-peleadores de la UFC como lo eran <b>Sean McCorkle</b> o <b>Oli Thompson</b>, a quienes vencería por decisión unánime. Además fue capaz de vencer a un miembro de la familia Gracie, concretamente a <b>Rolles Gracie Jr.</b>, hermano de <Link href='/leyendas/royce-gracie'>Royce Gracie</Link>, a quien sería capaz de noquear a los 27 segundos de la pelea con un sólo golpe, sin nada que hacer para el brasileño, ganando además, el premio al knocaut de la noche.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/eK6TZk_vpuA?si=MupoYLucVTCz2WK6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su última pelea registrada tendría lugar el 28 de mayo de 2022, cuando enfrentaría a su compatriota <b>Michal Materla</b>, a quien vencería por KO en el primer asalto, ganando su segundo premio al Knockout de la noche. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/SgbMlO6dQHY?si=9LziuczcixRIOUv-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Lamentablemente para él, sus última 2 peleas terminaron en derrota, ambas por TKO, contra <b>Mamed Khalidov</b> y la última contra <b>Artur Szpilka</b>, en junio de 2023. Hoy tiene 47 años y no hay información oficial sobre si planea seguir peleando.</p>
                    <p>Mariusz ha demostrado ser una persona activa y polifacética, dado que en este artículo hemos hablado de su etapa como Strongman y como peleador de MMA, pero dejamos de lado que también es un jugador amateur de rugby, que en su país cuenta con el status de celebridad, dado que además de toda su carrera como deportista, formó parte del reality &quot;Bailando con las Estrellas&quot;, donde avanzó hasta la final del programa, quedando en segundo lugar. Además de que tiene una pequeña carrera musical, habiendo formado parte de una banda musical llamada <b>Pudzian Band</b>, fundada por su hermano en la que participa como cantante invitado en ocasiones. </p>
                    <p>En alguna entrevista ha confesado que ve al deporte como un hobby, dado que cobra y cobró relativamente poco como Strongman y como peleador de MMA, asegurando que la mayor parte de sus ingresos vienen de una exitosa compañía que fundó, una escuela para guardias de seguridad, de otra empresa de la que es dueño llamada <b>Pudzianowski Transport</b> y de sus inversiones en bienes raíces.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}