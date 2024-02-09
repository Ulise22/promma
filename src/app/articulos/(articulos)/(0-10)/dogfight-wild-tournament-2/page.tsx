import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Image from 'next/image'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/dogfight2.jpg'
import aitorvszdravko from '@/assets/articulos/insideArticle/dwf2/aitor-vs-zdravko.jpeg'
import twovtwo from '@/assets/articulos/insideArticle/dwf2/2v2.jpeg'
import firstSemifinal from '@/assets/articulos/insideArticle/dwf2/sergio-hidalgo.jpeg'
import secondSemifinal from '@/assets/articulos/insideArticle/dwf2/segunda_semifinal.jpeg'
import bareknuckleFem from '@/assets/articulos/insideArticle/dwf2/boxeo-femenino.jpeg'

export default function DWT2 () {
    return(
        <main>
            <ArticleHero title='Lo Mejor de Dogfight Wild Tournament 2' subtitle='Lo mejor que ha ocurrido en el evento de pelea organizado por Jordi Wild y que se puede ver gratis en youtube.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El 9 de feberero de 2024, volvió el evento organizado por Youtuber dueño del podcast más escuchado en lengua hispana, Jordi Wild, que en esta segunda edición del evento de pelea DWT no decepciona y nos trae apasionantes duelos y combates. </p>
                    <h2>1era Pelea: Muerte Súbita, Aitor Gaspar vs Badnews Zdravko</h2>
                    <p>La primera pelea del evento era la revancha entren Aitor y Zdravko, que había terminado en una victoria para Aitor por nocaut. Sin embargo, el resultado de esta revancha terminó en una redención para el hispanobulgaro, que pudo vencer por nocaut técnico en esta ocasión.</p>
                    <Image className={styles.article__image} src={aitorvszdravko} alt='' />
                    <h2>2da Pelea: 2 vs 2, Equipo Rojo contra Equipo Azul</h2>
                    <p>La pelea que enfrentaba al equipo rojo, provenientes de Barcelona, Alberto Rondán y Nicolás Martínez contra el quipo azul, provenientes de Madrid, Chiky Arroyo y Pau Peñalba, terminó con una contundente victoria para el quipo azul en los primeros minutos del encuentro, en especial por el gran aporte que hizo Chiky en la pelea.</p>
                    <p>Chiky Arroyo, que era el más alto de los 4, fue capaz de someter a uno de los 2 mientras su compañero luchaba en el piso con el otro, y también fue capaz de someter al otro luchador que estaba ocuapado luchando con su compañero. De esta manera tanto Chiky como Pau fueron capaces de proclamarse ganadores del encuentro.</p>
                    <Image className={styles.article__image} src={twovtwo} alt='' />
                    <h2>Primera Semifinal Torneo Contacto Sangriento: Sergio Hidalgo vs Emilio Motescarlos</h2>
                    <p>La primera semifinal del Torneo al estilo Contacto Sangriento, terminó con una victoria para Sergio, que con un rodillazo dejó KO a su rival, Emilio Motescarlos. Resultado que lleva a Hidalgo a disputar la final del torneo que se disputará en unas horas.</p>
                    <p>Es para destacar la actitud de Sergio, que pese a ganar de una manera tan impresionante, mostró deportividad y su lado más humano al preocuparse por el estado de salud de su rival.</p>
                    <Image className={styles.article__image} src={firstSemifinal} alt='' />
                    <h2>Segunda Semifinal Torneo Contacto Sangriento: Otman Ben Zahra vs Dorian Segovia</h2>
                    <p>La segunda semifinal entre &quot;El Lobo&quot; Otman Ben Zahra contra &quot;El Malandro&quot; Dorian Segovia, terminó llevándosela El Lobo, luego de que después de alrededor de 5 minutos muy intensos, fuera capaz de sacar del octagono a su rival ecuatoriano. De esta manera ha avanzado a la final que lo verá enfrentarse en un rato a Sergio Hidalgo.</p>
                    <p>Sin embargo, a priori parece que tendrá un combate más difícil en la final, dado que su rival al haber finalizado rápido a su contrincante, ha tenido más tiempo para descansar, cosa que veremos como influye en la pelea.</p>
                    <Image className={styles.article__image} src={secondSemifinal} alt='' />
                    <h2>3era Pelea: Bare Knuckle Femenino, Victoria Albons vs Yamila Sánchez</h2>
                    <p>En lo que es quizás el mejor combate hasta ahora, fuimos testigos de una autentica guerra entre las 2 peleadoras que dieron un espectaculo. El combate terminó en un triunfo para &quot;La Furia&quot; Victoria Albons, que luego de 5 asaltos se llevó la pelea por decisión unánime, logrando incluso un knockdown en el tercer asalto de la pelea.</p>
                    <Image className={styles.article__image} src={bareknuckleFem} alt='' />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}