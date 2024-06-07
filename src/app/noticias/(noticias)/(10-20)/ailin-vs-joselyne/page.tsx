import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'

export default function AilinVsJoselyne () {
    return(
        <main>
            <ArticleHero title='La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302' subtitle='En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.' image={hero} date='01/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En un combate que tuvo una clara ganadora, la argentina Ailín Pérez terminó llevandose la pelea por decisión unánime contra la panamela <b>Joselyne Edwards</b> en el <Link href='/noticias/ufc302'>UFC 302</Link>, luego de concretar 6 derribos de 11 intentados, contra los 0 intentados por su rival. Además de superar en golpes significativos a la panameño con 42 a 27, uno de ellos llegando incluso a tirar al piso a Joselyne Edwards que recibió por sopresa la mano de Ailín.</p>
                    <p>De esta manera, en sus 4 peleas dentro de la <Link href='/articulos/ufc'>UFC</Link> <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, lleva un total de 3 victorias consecutivas. Luego de aquella primera pelea con derrota que sufrió en su debut en Peso Pluma femenino contra la suiza <b>Stephanie Egger</b>, quien la sometió en el segundo asalto, ganó a la estadounidense <b>Ashlee Evans-Smith</b> por decisión unánime en su regreso a Peso Gallo, contra la checa <b>Lucie Pudilová</b> por decisión unánime, y ahora se suma su victoria contra la panameña Joselyne Edwards, todas estas victorias conseguidas en menos de un año.</p>
                    <p>Esta pelea tenía un elemento especial para ambas peleadoras, dado que había llegado a mantener cierta relación de amistad entre ellas, pero por razones que ambas explican se terminaron peleando. La cuenta de UFC en español subió un video a su canal de Youtube donde cada cuenta su versión de los hechos.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/LJIF-aWERqo?si=I-bOVwo7284T45bd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Además de ganar este combate, Ailín consiguió dar por terminada la rencilla personal que tenía con Joselyne fuera del cuadrilátero, primero venciendo a su rival, y luego reconciliándose una vez finalizada la pelea, terminando abrazada junto a la quien fue su rival durante el combate.</p>
                    <p>Con esta pelea, Ailín acumula un récord de 10-2, en lo que viene siendo una carrera meteórica para una joven luchadora argentina que con 29 años ya comienza a mirar a las peleadoras ranqueadas, pidiendo luego de su victoria, la oportunidad de enfrentar a la estadounidense <Link href='/mujeres/kayla-harrinson'>Kayla Harrinson</Link>, que recientemente hizo su debut en la compañía enfrentando a la histórica <b>Holly Holm</b> en el <Link href='/noticias/ufc300-prelims'>UFC 300</Link>, luego de una extensa carrera en <b>PFL</b>, donde fue campeona en 2 oportunidades y que actualmente es la contendiente #4 de la división.</p>
                    </article>
                <AsideChamps />
            </section>
        </main>
    )
}