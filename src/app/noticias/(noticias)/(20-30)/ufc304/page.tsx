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
    description: '',
    openGraph: {
        title: 'UFC 304',
        description: '',
        url: 'https://fullmma.org/noticias/ufc304'
    }
}

export default function UFC303 () {
    return(
        <main>
            <ArticleHero title='UFC 304: ¡Leon Edwards vs Belal Muhammad! ¡Tom Aspinall vs Curtis Blaydes!' subtitle='Noche de UFC con 2 cinturones en disputa, siendo la pelea de Leon Edwards vs Belal Muhammad la estelar, con la pelea por el cinturon interino de peso pesado como coestelar.' image={hero} date='2024-07-27' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este 27 de agosto tenemos noche de UFC en Manchester, Reino Unido, con una cartelera repleta de luchadores ingleses y británicos, siendo el campeón de peso wélter <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, el encargado de encabezar esta cartelera, realizando su segunda defensa del título ante el retador <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, quien necesitó de acumular una racha de 8 victorias consecutivas para ganarse esta oportunidad por el cinturón de la división.</p>
                    <p>La pelea coestelar de esta carrera estará protagonizada por el actual campeón interino de la división de peso pesado, <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>, quien defenderá el cinturón ante el estadounidense <b>Curtis Blaydes</b>, en una pelea que al igual que la estelar, será una revancha entre 2 peleadores que ya se habían enfrentado antes.</p>
                    <h2>Arnold Allen se lleva la pelea contra Giga Chikadze</h2>
                    <p>El inglés hizo pesar su localía remontando una pelea que parecía empezar perdiendo, mostrándose cada vez más cómodo dentro del octagono a medida pasaban los minutos, siendo el tercer y último asalto en el que mostró su mejor cara, conectando varios golpes que se hicieron sentir en su rival. </p>
                    <p>Con esta pelea, Allen consigue la victoria número 20 de su carrera, cortando con una racha de 2 derrotas consecutivas, ante el ruso <b>Movsar Evloev</b>, y la sufrida ante <Link href='/peleadores/max-holloway'>Max Holloway</Link></p>
                    <h2>El brasileño Rodriguez consigue ganar en Territorio Inglés</h2>
                    <p>Gregory Rodriguez consigue una importantísima victoria en territorio extranjero, dominante por completo el combate de principio a fin ante un Duncan que no pudo hacer nada ni en el piso ni de pie ante Rodriguez, que con esta victoria lleva 3 consecutivas.</p>
                    <p>Durante el combate se notó como Duncan tenía bastante respeto del poder que tenía el brasileño, que logró conectar golpes en varias ocasiones que hicieron pelear a Duncan de forma más cautelosa.</p>
                    <h2>Paddy Pimblett Somete a Bobby Green en el Primer Asalto</h2>
                    <p>El joven talento inglés logra una espectacular victoria por sumisió en el primer asalto, logrando conectar una llave con las piernas que dejó desmayado a Green. La pelea había comenzado sin mucha acción, con ambos peleadores midiéndose de pie, pero todo cambió cuando Bobby Green conectó un derribo hacia el inglés que lo terminó perjudicando, ya que terminó con el cuello y el brazo atrapados entre las piernas de Pimblett que logró finalizar a su rival.</p>
                    <p>Con esta victoria, <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link> logra meterse en los rankings de la división de peso ligero de la <Link href='/articulo/ufc'>UFC</Link>, dado que esta es su primer pelea ante un luchador ranqueado, ocupando Green hasta esta noche la posición #15.</p>
                    <h2>Tom Aspinall vs Curtis Blaydes</h2>
                    <p>En proceso...</p>
                    <h2>Leon Edwards vs Belal Muhammad</h2>
                    <p>En proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}