import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import LesnarHero from './LesnarHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brock Lesnar',
    description: "Brock Lesnar es un ex peleador de MMA que supo ser campeón de la División de Peso Pesado de la UFC, siendo uno de los peleadores más mediáticos que tuvo la compañía, teniendo la particularidad de haber participado en el UFC 100 y en el UFC 200. Además es un exjugador de fútbol americano, fue un luchador profeisonal y fue luchador de lucha libre olímpica amateur estadounidense, trabajando para la compañía de lucha libre WWE, donde tuvo una destacada participación, convirtiendose en su momento en el peleador más joven en ser campeón de esta compañía con tan solo 25 años.",
    openGraph: {
        title: 'Brock Lesnar',
        description: "Brock Lesnar es un ex peleador de MMA que supo ser campeón de la División de Peso Pesado de la UFC, siendo uno de los peleadores más mediáticos que tuvo la compañía, teniendo la particularidad de haber participado en el UFC 100 y en el UFC 200. Además es un exjugador de fútbol americano, fue un luchador profeisonal y fue luchador de lucha libre olímpica amateur estadounidense, trabajando para la compañía de lucha libre WWE, donde tuvo una destacada participación, convirtiendose en su momento en el peleador más joven en ser campeón de esta compañía con tan solo 25 años.",
        url: 'https://fullmma.org/leyendas/brock-lesnar'
    }
}


export default function Cormier () {
    return(
        <main>
            <LesnarHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Brock Lesnar UFC</h2>
                    <p className={styles.leyenda__article__text}>Brock Lesnar es un ex peleador de MMA que supo ser campeón de la División de Peso Pesado de la <Link href='/articulos/ufc'>UFC</Link>, siendo uno de los peleadores más mediáticos que tuvo la compañía, teniendo la particularidad de haber participado en el UFC 100 y en el UFC 200. Además es un exjugador de fútbol americano, fue un luchador profeisonal y fue luchador de lucha libre olímpica amateur estadounidense, trabajando para la compañía de lucha libre <b>WWE</b>, donde tuvo una destacada participación, convirtiendose en su momento en el peleador más joven en ser campeón de esta compañía con tan solo 25 años.</p>
                    <p className={styles.leyenda__article__text}>Además, su carrera en general es muy meritoria e impresionante, dado que es el único luchador en ganar los campeonatos principales de 2 deportes diferentes, como lo son la lucha libre profesional y las MMA. Entre sus logros también se encuentran el haber sido 12 veces campeón mundial de lucha libre profesional, haber sido campeón una vez de los pesos pesados de la IWGP, fue 7 veces campeón de la WWE, 3 veces Campeón Universal de la WWE y una vez campeón de los Pesos Pesados de la UFC, donde además tiene 2 defensas del título exitosas.</p>
                    <h2 className={styles.leyenda__article__title}>Brock Lesnar Récord</h2>
                    <p className={styles.leyenda__article__text}>Brock Lesnar tiene un récor de 5-3(1) en las MMA. Siendo 2 de sus 5 victorias por nocaut, 2 por sumisión y 1 por decisión. Mientras que de sus 3 derrotas, 2 fueron por nocaut y una por sumisión. Además, la última pelea de su carrera contra <b>Mark Hunt</b> en el UFC 200, terminó sin resultado luego de Lesnar diera positivo por clomifero, pese a que originalmente había ganado la pelea por decisión unánime.</p>
                    <h2 className={styles.leyenda__article__title}>Brock Lesnar Historia</h2>
                    <p className={styles.leyenda__article__text}>Brock Edward Lesnar nació el 12 de julio de 1977 en la ciudad estadounidense de Webster, ubicada en el Estado de Dakota del Sur. Siendo hijo de Stephanie y Richard Lesnar, de ascendencia alemana y polaca, creció en una granja lechera junto a sus hermanos mayores Troy y Chad, y junto a su hermana menor Brandi.</p>
                    <p className={styles.leyenda__article__text}>A los 17 años se unió a la Guardia Nacional del Ejército, en donde tenía el deseo de trabajar con explosivos, cosa que lamentablemente no pudo hacer ya que sus superiores creían que su daltonismo rojo-verde podría ser peligroso para trabajar en dicha área. En su lugar lo pusieron a trabajar en la ofina, donde poco tiempo después sería despedido luego de fallar una prueba de mecanografía por computadora. Luego de ser despedido comenzó a trabajar en una empresa de contrucción.</p>
                    <p className={styles.leyenda__article__text}>Brock Lesnar, durante su adolescencia, asistió a la Webster High School en Webster, Dakota del Sur, donde se formó como lcuhador, logrando en su último año un récord de 45-5. Más tarde terminaría acudiendo a la Universidad de Minnesota, donde formaría parte de los Minnesota Golden Gophers, luchando también en el Bismarck State College. Posteriormente ganaría el National Collegiate Athletic Association de lucha de los Pesos Pesados. Todo este recorrido lo llevó a firmar con la World Wrestling Federation en el 2000 en donde haría su debut el 18 de marzo de 2002, atacando a Al Snow, Maven y Spike Dudley.</p>
                    <p className={styles.leyenda__article__text}>Lesnar tendría una extensa carrera en la lucha libre antes de adentrarse en las MMA, entrenando primero en la Escuela de Artes Marciales Mixtas, haciendo su debut como profesional contra el surcoreano <b>Kim Min-soo</b> a quien derrotaría en el primer minuto del primer asalto por una sumisión a golpes.</p>
                    <p className={styles.leyenda__article__text}>Con tan solo un combate como profesional, recibiría la llamada para formar parte de la UFC, donde debutaría unos meses después el 2 de febrero de 2008 en UFC 81 contra <b>Frank Mir</b>. Lesnar perdería su combate por sumisión en el primer asalto. Sin embargo se recuperaría rápido de esta derota, peleando 6 meses después contra <b>Heath Herring</b> a quien luego de dominar durante los 3 asaltos, terminaría por ganarle por decisión unánime. Inmediatamente después de su primer victoria como luchador de la UFC, sería anunciado como contendiente al título para UFC 91 el 15 de noviembre de 2008 contra el entonces campeón <b>Randy Couture</b>. En dicho combate el campeón se mostraría dominante durante la mayor parte del primer asalto, sin embargo Lesnar lograría sobrevivir y en una segunda ronda donde se notó a un Randy más cansado, Brock Lesnar fue capaz de noquear a su rival, consagrandose como campeón de Peso Pesado de la UFC.</p>
                    <iframe className={styles.leyenda__article__video} width="560" height="315" src="https://www.youtube.com/embed/PV28qas35hA?si=Q1ZQT5L6VohVN_Xw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.leyenda__article__text}>Dicho título sería defendido en 3 ocasiones, la primera de ellas siendo en su revancha contra <b>Frank Mir</b> en UFC 100, a quien en esta ocasión Lesnar sería capaz de ganar por KO en el segundo asalto. La segunda defensa la haría contra <b>Shane Carwin</b>, a quien vencería con una sumisión en el segundo asalto, ganaría además el premio a la sumisión de la noche, premio que dejó de entregarse en la UFC. Por último, su tercera defensa fue contra <b>Caín Velásquez</b> en UFC 121, contra quien perdería por TKO en el primer asalto.</p>
                    <p className={styles.leyenda__article__text}>Luego de perder su cinturón, tendría una pelea más contra el neerlandés <b>Alistair Overeem</b> en UFC 141, donde perdería por TKO en el primer asalto. Al finalizar dicho combate, Lesnar anunciaría su retiro de las Artes Marciales Mixtas, debido a una Diverticulitis.</p>
                    <p className={styles.leyenda__article__text}>Sin embargo, pese a haber anunciado su retiro, Brock Lesnar volvería a pelear en UFC 200 contra <b>Mark Hunt</b>, a quien luego de 3 asaltos vencería por decisión unánime. Sin embargo, poco tiempo después, USADA reportó que Lesnar había fallado 2 text antidopaje, por lo que se tomó la decisión de supenderlo durante un año y dejar su último combate sin resultado.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}