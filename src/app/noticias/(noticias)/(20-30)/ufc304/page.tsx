import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/20-30/ufc304-hero.jpg'

export const metadata: Metadata = {
    title: 'UFC 304',
    description: '¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.',
    openGraph: {
        title: 'UFC 304',
        description: '¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.',
        url: 'https://fullmma.org/noticias/ufc304'
    }
}

export default function UFC304 () {
    return(
        <main>
            <ArticleHero title='UFC 304: ¡Belal Muhammad Vence Por Decisión Unánime a Leon Edwards y es Nuevo Campeón! ¡Tom Aspinall Noquea a Curtis Blaydes en el Primer Asalto!' subtitle='¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.' image={hero} date='2024-07-27' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este 27 de agosto tenemos noche de UFC en Manchester, Reino Unido, con una cartelera repleta de luchadores ingleses y británicos, siendo el campeón de peso wélter <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, el encargado de encabezar esta cartelera, realizando su tercera defensa del título ante el retador <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, quien necesitó de acumular una racha de 8 victorias consecutivas para ganarse esta oportunidad por el cinturón de la división.</p>
                    <p>La pelea coestelar de esta carrera estará protagonizada por el actual campeón interino de la división de peso pesado, <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>, quien defenderá el cinturón ante el estadounidense <b>Curtis Blaydes</b>, en una pelea que al igual que la estelar, será una revancha entre 2 peleadores que ya se habían enfrentado antes.</p>
                    <h2>Arnold Allen se lleva la pelea contra Giga Chikadze</h2>
                    <p>El inglés hizo pesar su localía remontando una pelea que parecía empezar perdiendo, mostrándose cada vez más cómodo dentro del octagono a medida pasaban los minutos, siendo el tercer y último asalto en el que mostró su mejor cara, conectando varios golpes que se hicieron sentir en su rival. </p>
                    <p>Con esta pelea, Allen consigue la victoria número 20 de su carrera, cortando con una racha de 2 derrotas consecutivas, ante el ruso <b>Movsar Evloev</b>, y la sufrida ante <Link href='/peleadores/max-holloway'>Max Holloway</Link></p>
                    <h2>El brasileño Rodriguez consigue ganar en Territorio Inglés</h2>
                    <p>Gregory Rodriguez consigue una importantísima victoria en territorio extranjero, dominante por completo el combate de principio a fin ante un Duncan que no pudo hacer nada ni en el piso ni de pie ante Rodriguez, que con esta victoria lleva 3 consecutivas.</p>
                    <p>Durante el combate se notó como Duncan tenía bastante respeto del poder que tenía el brasileño, que logró conectar golpes en varias ocasiones que hicieron pelear a Duncan de forma más cautelosa.</p>
                    <h2>Paddy Pimblett Somete a Bobby Green en el Primer Asalto</h2>
                    <p>El joven talento inglés logra una espectacular victoria por sumisió en el primer asalto, logrando conectar una llave con las piernas que dejó desmayado a Green. La pelea había comenzado sin mucha acción, con ambos peleadores midiéndose de pie, pero todo cambió cuando Bobby Green conectó un derribo hacia el inglés que lo terminó perjudicando, ya que terminó con el cuello y el brazo atrapados entre las piernas de Pimblett que logró finalizar a su rival.</p>
                    <p>Con esta victoria, <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> logra meterse en los rankings de la división de peso ligero de la <Link href='/articulos/ufc'>UFC</Link>, dado que esta es su primer pelea ante un luchador ranqueado, ocupando Green hasta esta noche la posición #15.</p>
                    <h2>Tom Aspinall Noquea a Curtis Blaydes En el Primer Asalto</h2>
                    <p>En menos de un minuto, <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> logra retener el cinturón vía nocaut. Con un jab que tira a su rival al suelo, y ya en el piso, con ground & pound finalizó la pelea para retener el cinturón en su casa, logrando además vengar su única derrota en la UFC, que había sido ante el mismo Curtis Blaydes.</p>
                    <p>Luego de terminar el combate, Tom Aspinall no dudó en desafiar a <Link href='/peleadores/jon-jones'>Jon Jones</Link>, quien actualmente posee el cinturón indiscutido de la división de peso pesado, afirmando que habló con el jefe (Dana White), y que él también quiere ver a estos 2 pelear.</p>
                    <h2>Belal es nuevo campeón de Peso Wélter</h2>
                    <p>Tenemos nuevo campeón en la división de peso wélter, con un <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link> que a pesar de pelear &quot;de visitante&quot;, logró imponerse por sobre <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, cortando la racha de 13 victorias consecutivas que este llevaban encima.</p>
                    <p>La pelea llegó a los 5 asaltos y finalmente, por decisión unánime de los jueces, Belal es nuevo campeón de UFC, logrando la increíble cantidad de 9 derribos en una misma pelea, que rompe su récord personal de 7 derribos conseguidos en un mismo combate. Es una merecida victoria para un Belal que salvo por el tercer asalto, fue absolutamente dominante en todo el combate.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}