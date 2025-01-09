import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/dwt2.jpeg'

export const metadata: Metadata = {
    title: 'Dogfight Wild Tournament 2',
    description: 'El 9 de feberero de 2024, volvió el evento organizado por Youtuber dueño del podcast más escuchado en lengua hispana, Jordi Wild, que en esta segunda edición del evento de pelea DWT no decepciona y nos trae apasionantes duelos y combates.',
    openGraph: {
        title: 'Dogfight Wild Tournament 2',
        description: 'El 9 de feberero de 2024, volvió el evento organizado por Youtuber dueño del podcast más escuchado en lengua hispana, Jordi Wild, que en esta segunda edición del evento de pelea DWT no decepciona y nos trae apasionantes duelos y combates.',
        url: 'https://fullmma.org/noticias/dogfight-wild-torunament'
    }
}

export default function DWT2 () {
    return(
        <main>
            <ArticleHero title='Lo Mejor de Dogfight Wild Tournament 2' subtitle='Lo mejor que ha ocurrido en el evento de pelea organizado por Jordi Wild y que se puede ver gratis en youtube.' image={hero} date='2024-02-09' author={null} updatedDate='2024-10-15' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El 9 de feberero de 2024, volvió el evento organizado por Youtuber dueño del podcast más escuchado en lengua hispana, Jordi Wild, que en esta segunda edición del evento de pelea DWT no decepciona y nos trae apasionantes duelos y combates. </p>
                    <h2>1era Pelea: Muerte Súbita, Aitor Gaspar vs Badnews Zdravko</h2>
                    <p>La primera pelea del evento era la revancha entren Aitor y Zdravko, que había terminado en una victoria para Aitor por nocaut. Sin embargo, el resultado de esta revancha terminó en una redención para el hispanobulgaro, que pudo vencer por nocaut técnico en esta ocasión.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/nsODUCSOaoc?si=QOqY5L6O_6oLD_Ni" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>2da Pelea: 2 vs 2, Equipo Rojo contra Equipo Azul</h2>
                    <p>La pelea que enfrentaba al equipo rojo, provenientes de Barcelona, Alberto Rondán y Nicolás Martínez contra el quipo azul, provenientes de Madrid, Chiky Arroyo y Pau Peñalba, terminó con una contundente victoria para el quipo azul en los primeros minutos del encuentro, en especial por el gran aporte que hizo Chiky en la pelea.</p>
                    <p>Chiky Arroyo, que era el más alto de los 4, fue capaz de someter a uno de los 2 mientras su compañero luchaba en el piso con el otro, para después ser capaz de someter al otro luchador que estaba ocuapado luchando con su compañero. De esta manera tanto Chiky como Pau fueron quienes se proclamaron como ganadores del encuentro.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/rm3hR_trgC4?si=fJPeYmV0AC5-OT8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Primera Semifinal Torneo Contacto Sangriento: Sergio Hidalgo vs Emilio Motescarlos</h2>
                    <p>La primera semifinal del Torneo al estilo Contacto Sangriento, terminó con una victoria para Sergio, que con un rodillazo dejó KO a su rival, Emilio Motescarlos. Resultado que lleva a Hidalgo a disputar la final del torneo que se disputará en unas horas.</p>
                    <p>Es para destacar la actitud de Sergio, que pese a ganar de una manera tan impresionante, mostró deportividad y su lado más humano al preocuparse por el estado de salud de su rival.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dM1lbdLcLTU?si=sTHQLz0qNJ_Le6wv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Segunda Semifinal Torneo Contacto Sangriento: Otman Ben Zahra vs Dorian Segovia</h2>
                    <p>La segunda semifinal entre &quot;El Lobo&quot; Otman Ben Zahra contra &quot;El Malandro&quot; Dorian Segovia, terminó llevándosela El Lobo, luego de que después de alrededor de 5 minutos muy intensos, fuera capaz de sacar del octagono a su rival ecuatoriano. De esta manera ha avanzado a la final que lo verá enfrentarse en un rato a Sergio Hidalgo.</p>
                    <p>Sin embargo, a priori parece que tendrá un combate más difícil en la final, dado que su rival al haber finalizado rápido a su contrincante, ha tenido más tiempo para descansar, cosa que veremos como influye en la pelea.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/bzt-axpd67M?si=t5xRlm0-tDHqnGkN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>3era Pelea: Bare Knuckle Femenino, Victoria Albons vs Yamila Sánchez</h2>
                    <p>En lo que es quizás el mejor combate hasta ahora, fuimos testigos de una autentica guerra entre las 2 peleadoras que dieron un espectaculo. El combate terminó en un triunfo para &quot;La Furia&quot; Victoria Albons, que luego de 5 asaltos se llevó la pelea por decisión unánime, logrando incluso un knockdown en el tercer asalto de la pelea.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ZcOAUBjdEOI?si=fphkpp_iiXAoH-3X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>4ta Pelea: No Rules, Franco Tenaglia vs Hatim Taiebi</h2>
                    <p>El combate que traía a un peleador que ya había participado del evento pasado, como es el caso de <Link href='/peleadores/franco-tenaglia'>Franco Tenaglia</Link>, a enfrentarse a un nuevo luchador en este evento, como era el caso de Hatim Taiebi, nos traía una pelea donde más allá de que estuvieran prohibidos los golpes bajos y los piquetes de ojo, no había reglas establecidas. </p>
                    <p>La pelea terminó con una victoria por nocaut técnico para Franco Tenaglia, que dominó el combate desde el principio ante rival que recibía golpes en el suelo sin presentar resistencia practicamente.</p>
                    <p>La pelea dejó con un sabor de boca amargo para algunos aficionados, que esperaban más de un encuentro en el que se presumía no habría reglas y donde ninguno de los 2 llevaba guantes. En medio del tumulto que se formó en medio del octagono, se le ofreció hacer una revancha ahí mismo a Franco Tenaglia, que luego de derrotar a su rival de una manera tan dominante no le vió sentido a pelear otra vez.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/BkUL0oMZ8z8?si=04wxOJj6ZCZf2kS6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>5ta pelea: 5 vs 1, Cesar Alonso vs Juan Marín, Iker Carrillo, Nacho de la Encima, Rodrigo Penarrubia y Mohamed Benchriff</h2>
                    <p>En uno de los combates más locos que nos ha traído Jordi para esta noche, tuvimos a Cesar Alonso, que luego de haber vencido a 2 peleadores simultánemente en el evento anterior, ahora volvió para lograr otra hazaña, al enfrentarse a 5 peleadores, que venían uno tras otro luego de ser vencidos.</p>
                    <p>Uno tras otro fue derrotando Cesar Alonso a sus rivales, hasta llegar al último a quien derrotó por nocaut técnico. A lo largo de los 5 combates, Cesar demostró una dominación total contra cada uno de sus rivales, demostrando la diferencia que hay entre un un peleador de MMA y un peleador que practica cualquier otra cosa. La conclusión es que Cesar Alonso no decepciona, y que la hora de dar espectalo, ni él, ni los 5 luchadores, ni Jordi Wild nos han dejado con nada por desear.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/J0ev0FNvjmc?si=TmLqVNE5Rq4Fb4EX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>6ta Pelea: 3 vs 1, Eduardo Riego vs Ivan Rullo, Manuel Morales y Tomás Cantó</h2>
                    <p>En el evento estelar que nos trajó a Eduardo Riego contra 3 peleadores, vimos una de las mayores locuras de la historia de las MMA. A puro corazón y Jiu-Jitsu, Eduardo emocionó a todo el público presente y virtual al lograr lo que parecía imposible, vencer a 3 peleadores contra los que peleaba simultaneamente, sometiendo a los 3.</p>
                    <p>La noche y el evento terminan de esta manera por todo lo alto, pese a que era el deseo de muchos que este sea el final, muy pocos hubieran apostado su dinero a que esto acabaría de esta forma, sin embargo, logrando sobrevivir el primer asalto, Eduardo demostró que es un crack y que todo es posible.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/6eD8lXTb0Xs?si=1398kzdc0jIkvwkD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}