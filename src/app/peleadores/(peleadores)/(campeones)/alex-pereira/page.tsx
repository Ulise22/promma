import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pereira from '@/assets/peleadores__images/0-10/alex-pereira/pereira.png'
import sparring2 from '@/assets/peleadores__images/0-10/alex-pereira/pereira_sparring2.jpg'
import alexPereira from '@/assets/peleadores__images/0-10/alex-pereira/pereira.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alex Pereira',
    description: 'Alexandre Pantoja es un peleador de mma brasileño y el actual campeón de Peso Mosca en la UFC, cosa que logró luego de ganarle al peleador mexicano Brandom Moreno, por decisión dividida en el UFC 290, evento que se organizó en las vegas.',
    openGraph: {
        title: 'Alex Pereira',
        description: 'Alexandre Pantoja es un peleador de mma brasileño y el actual campeón de Peso Mosca en la UFC, cosa que logró luego de ganarle al peleador mexicano Brandom Moreno, por decisión dividida en el UFC 290, evento que se organizó en las vegas.',
        url: 'https://fullmma.org/peleadores/alex-pereira'
    }
}

export default function AlexPereira () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pereira} w={11} l={2} d={0} nombre='Alex Pereira' apodo='POATAN' categoria='Peso Semipesado' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira UFC</h2>
                    <p className={styles.peleador__article__text}>Alex Pereira es un luchador de MMA brasileño, ex peleador de kickboxing, que comite en la <Link href='/articulos/ufc'>UFC</Link> desde el 6 de noviembre de 2021, cuando debutó contra el griego Andreas Michailidis por UFC 268, a quien derrotó por TKO a los 18 segundos del segundo asalto, lo que ya en su primer combate le valió para cobrar el bono a la Actuación de la Noche. Desde entonces fue capaz de ser campeón de Peso Medio, al derrotar a <Link href='/peleadores/israel-adesanya'>Israel Adensanya</Link> por TKO en el 5to asalto y para ser campeón de peso semipesado, luego de que derrotara a <Link href='/peleadores/jiri-prochazka'>JIŘÍ PROCHÁZKA</Link> por TKO en el segundo asalto.</p>
                    <Image className={styles.peleador__article__image} src={sparring2} alt='El peleador brasileño de Kickboxing Alex Pereira haciendo un sparring con un compañero' />
                    <h2 className={styles.peleador__article__title}>Adensanya vs Pereira</h2>
                    <p className={styles.peleador__article__text}>Alex Pereira e <b>Israel Adensanya</b> tienen una larga historia juntos, ambos se enfrentaron un total de 4 veces, 2 en MMA y 2 en Kickboxing. Terminando ambas peleas de Kickboxing en una victoria para el peleador brasileño, la primera por decisión y la segunda por nocaut.</p>
                    <p className={styles.peleador__article__text}>Pero en noviembre de 2022 por UFC 281, ambos peleadores se volverían a encontrar, esta vez en UFC, donde Israel Adensanya venía siendo el claro dominador de la división de Peso Medio, puesto que en toda su carrera como peleador de Artes Marciales Mixtas, sólo tenía una derrota contra el polaco <b>Jan Blachowicz</b>, a quien enfrentó por el cinturon de los Semipesados de la UFC. Mientras que Alex Pereira venía de noquear al actual campeón de UFC de Peso Medio <Link href='/peleadores/sean-strickland'>Sean Strickland</Link> en el primer asalto. La pelea finalmente terminó en una victoria para el brasileño por TKO en el segundo asalto, que volvía a vencer por tercera vez a Israel Adensanya.</p>
                    <p className={styles.peleador__article__text}>La revancha se programó el 8 de Abril de 2023, en Miami, Florida, por UFC 287. Esta vez con una victoria por KO en el segundo asalto a favor de Izzy, quien finalmente era capaz de imponerse contra el brasileño y de vengarse por sus 3 combates anteriores.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/IVXgOlEOF-Q?si=pjNmesGgcrxZOzoc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Sin embargo su rivalidad parece no terminar, ya que luego de que Alex Pereira se convirtiera en el Campeón de los Semipesados de UFC, en su entrevista posterior al combate, invitó a Israel Adensanya a que pelearan una vez más. Esta vez, por el cinturón de los Semipesados.</p>
                    <h2 className={styles.peleador__article__title}>Pereira MMA</h2>
                    <p className={styles.peleador__article__text}>Alex Pereira compite por MMA desde octubre de 2015. Y dado sus inicios y su historial como peleador de Kickboxing, no es de extrañar que este sea su estilo de pelea principal. Sus actuales entrenadores son Vinicius Reviravolta y el ex luchador también de los Semipesados <b>Glover Teixeira</b> que se retiró recientemente en enero de 2023</p>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Récord</h2>
                    <p className={styles.peleador__article__text}>En MMA, Alex Pereira tiene un record de 11-2 que le valió para ser campeón de 2 divisiones diferentes. 9 de sus 11 victotias por fueron la vía del nocaut, y las otras 2 fueron por decisión. Mientras que sus 2 derrotas fueron 1 por nocaut y la otra por sumisión.</p>
                    <p className={styles.peleador__article__text}>Mientras que su record en <b>Kickboxing</b> es de 33-7. Siendo 21 de sus 33 victorias por nocauts y las otras 12 por decisión. Mientras que de sus 7 derrotas, 2 fueron por nocauts y las otras 5 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>UFC 4 Alex Pereira</h2>
                    <p className={styles.peleador__article__text}>Alex Pereira fue agregado al más reciente videojuego de UFC, en noviembre de 2022, y poco después se enfrentó a quien era la portada del videojuego entonces, <b>Israel Adensanya</b>. Su vicotoria contra el campeón de origen nigeriano, significó para Alex ser también la nueva portada de UFC4, como comunicó la misma EASPORTS en su twitter oficial(<a href='https://twitter.com/EASPORTSUFC/status/1591672362092695555?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1591672362092695555%7Ctwgr%5Eb6555564b9e4bb31acec92ece72d8a76bb672ff3%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Frealsport101.com%2Fufc%2Falex-pereira-ufc-4-cover%2F' target='_Blank'>ver</a>).</p>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Historia</h2>
                    <p className={styles.peleador__article__text}>Alexsandro Pereira nació el 7 de julio de 1987 en el municipio Brasileño del estao de São Paulo, São Bernardo do Campo. Creció en una favela y tuvo que dejar la escuela secundaria para empezar a trabajar en una tienda de neumáticos a los 12 años de edad. Influenciado por sus amigos, Alex Pereira comenzó a beber y esto lo llevó a convertirse en un alcohólico. Con el objetivo de dejar atrás su adicción, Alex comenzó a entrenar Kickboxing en 2009 deporte en el que comenzaría a competir en marzo de 2012, y que le abriría las puertas a las MMA en un futuro.</p>
                    <Image className={styles.peleador__article__image} src={alexPereira} alt='El campeón de UFC en Peso Medio Alex Pereira, mostrando su cinturpin junto a sus compañeros' />
                    <p className={styles.peleador__article__text}>En el kickboxing mantuvo una carrera bastante exitosa, consiguiendo ganar el Campeonato de -85kg Brasileño de K-1, ,el título de -85kg de WGP Kickboxing, el Campeonato de -85kg panamericano de WAKO Pro, el Torneo de Contendiente dde Peso Mediano de Glory 2 veces y el Campeonato de Peso Semipesado de Glory. Dejando su carrera como kickboxer con un record dde 33-7.</p>
                    <p className={styles.peleador__article__text}>Entre octubre de 2015 y mayo de 2016, tendría sus 3 primeros combates de MMA en la promotora brasileña Junge Fight, donde perdería en su debut por sumisión, pero donde ganaría sus 2 siguientes combates por nocaut. Alex Pereira tendría un combate más de MMA hasta que finalmente llegaría a la UFC, en donde se convirtió en Campeón de Peso Medio y en donde actualmente es campeón de Peso Semipesado.</p>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}