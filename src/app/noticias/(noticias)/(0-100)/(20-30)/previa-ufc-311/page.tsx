import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/previa_ufc311.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Previa del UFC 311',
    description: "",
    openGraph: {
        title: 'Previa del UFC 311',
        description: "",
        url: 'https://fullmma.org/noticias/previa-ufc-311'
    }
}

export default function PreviaUFC311 () {
    return(
        <main>
            <ArticleHero title='Previa UFC 311: Arman Tsarukyan Busca el Título de Peso Ligero en su Revancha Ante Islam Makhachev' subtitle="¡El equipo Khabib protagonista! En una noche donde los cinturones de peso gallo y peso ligero estarán en juego en el UFC 311, con Merab Dvalishvi haciendo su primer defensa del título ante Umar Nurmagomedov" image={hero} date='2025-01-10' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este próximo sábado tendremos el primer evento numerado del año de la UFC, cuando en el <b>UFC 311</b> en el <b>Intuit Dome</b>, ubicado en California, Estados Unidos, tengamos como evento estelar la pelea por el cinturón de peso ligero, entre el actual campeón <Link href="/peleadores/islam-makhachev">Islam Makhachev</Link>, y el retador armenio <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>. </p>
                    <p>Ambos luchadores ya se habían enfrentado entre sí en el pasado, en lo que fue justamente el debut en la UFC de Tsarukyan, el día 20 de abril de 2019 en el <b>UFC Fight Night: Overeem vs. Oleinik</b>. Aquel primer combate sería una absoluta guerra que se extendería hasta los 3 asaltos, acabando finalmente en una victoria por decisión unánime para Makhachev, y en un bono a la Pelea de la Noche para ambos peleadores. Ahora, este próximo sábado 18 de enero, casi 6 años después, Tsarukyan tendrá la oportunidad de vengar su derrota y de paso, coronarse como el nuevo campeón de las 155lbs. Makhachev por su parte, deberá enfrentar nuevamente a uno de los rivales más duros con los que chocó en su carrera, además de contar con el condimento especial que, de ganar a Arman, Islam Makhachev se convertiría en el campeón de peso ligero con más defensas del título consecutivas en la historia de la UFC, con 4, ya que actualmente se encuentra empatado con quien también estará en su esquina, <Link href="/leyendas/khabib-nurmagomedov">Khabib Nurmagomedov</Link> y con <b>B.J. Penn</b>, con 3. </p>
                    <p>Pese a que la primer pelea la ganó Islam Makhachev, ya han pasado más de 5 años desde aquel enfrentamiento, y el actual retador, Arman Tsarukyan, ha mejorado muchísimo desde entonces, con una lucha más pulida, cosa que será de vital importancia al enfrentar a alguien como Islam. Además de haber mejorado en el striking, consiguiendo 4 victorias por la vía del nocaut desde su pelea con Islam.</p>
                    <p>Como si fuera poco, tendremos como evento coestelar la pelea por el título de peso gallo entre el recientemente proclamado campeón <Link href="/peleadores/merab-dvalishvili">Merab Dvalishvili</Link>, quien consiguió hacerse con el título luego de vencer por decisión a <Link href="/peleadores/sean-omalley">Sean O&apos;Malley</Link> en el <Link href="/covertura-ufc/ufc306">UFC 306</Link>, y el retador del título <Link href="/peleadores/umar-nurmagomedov">Umar Nurmagomedov</Link>, quien se posicionó como el candidato #1 para esta pelea luego de derrotar de manera dominante a <b>Cory Sandhagen</b>.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/GrYa7vsjhGs?si=7vqISPWpJRKvidpZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>También tenemos a 2 tremendos combates en la cartelera estelar. Siendo el primero el que se dará entre 2 excampeones de peso semipesado, como los <Link href="/peleadores/jiri-prochazka">Jiri Prochazka</Link>, y el estadounidense <b>Jamahal Hill</b>. Ambos vienen de ser noqueados en una pelea por el título ante <Link href="/peleadores/alex-pereira">Alex Pereira</Link>, en el <Link href="/covertura-ufc/ufc307">UFC 307</Link> y en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, respectivamente, por lo que están necesitados de una victoria que eleve su estatus si es que quieren volver a pelear por el cinturón ante el brasileño. La otra pelea más que interesante, es la que tendrán el estadounidense <b>Beneil Dariush</b> y el brasileño <Link href='/peleadores/renato-moicano'>Renato Moicano</Link>, tanto el #10 como el #9 de la división vienen en situaciones muy diferentes, con el estadounidense arrastrando una racha de 2 derrotas consecutivas, ante <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> y el mismo <Link href="/peleadores/arman-tsarukyan">Arman Tsarukyan</Link>, con el que compartirá cartelera, mientras que el brasileño viene de una racha de 4 victorias consecutivas, siendo la última la obtenida ante el francés <b>Benoit Saint Denis</b>, a quien destrozó completamente, venciendolo por TKO en el segundo asalto en el <Link href="/covertura-ufc/fight-night-moicano-saintdenis">UFC Francia: Moicano vs Saint Denis</Link></p>
                    <p>Además, para finalizar, el evento contará con una presencia latina en las primeras preliminares de la cartelera. En el combate de la argentina de 30 años <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>, quien recientemente fue incluida en el top15 de la división de peso gallo femenino, y quien viene de una contundente victoria por sumisión en el primer asalto ante la rusa <b>Daria Zhelezniakova</b>, en la misma cartelera en la que estuvo Renato Moicano. La luchadora argentina viene de una racha de 4 victorias consecutivas, y se enfrentará por primera vez en su carrera a una top10 de la división, como lo es la brasileña <b>Karol Rosa</b>, cuya última pelea terminó en victoria por decisión unánime ante la iraní <b>Pannie Kianzad</b>, en agosto de 2024.</p>
                    <h2>Peleas del UFC 311</h2>
                    <h3>Primeras Preliminares</h3>
                    <ul>
                        <li>Tagir Ulanbekov vs Clayton Carpenter (Peso Mosca)</li>
                        <li>Ricky Turcios vs Bernardo Sopaj (Peso Gallo)</li>
                        <li>Rinya Nakamura vs Muin Gafurov (Peso Gallo)</li>
                        <li>Karol Rosa vs Ailín Pérez (Peso Gallo Femenino)</li>
                        <li>Grant Dawson vs Diego Ferreira (Peso Ligero)</li>
                    </ul>
                    <h3>Preliminares</h3>
                    <ul>
                        <li>Zachary Reese vs Sedriques Dumas (Peso Medio)</li>
                        <li>Jailton Almeida vs Serghei Spivac (Peso Pesado)</li>
                        <li>Payton Palbott vs Raoni Barcelos (Peso Gallo)</li>
                        <li>Johnny Walker vs Bogdan Guskov (Peso Semipesado)</li>
                    </ul>
                    <h3>Cartelera Estelar</h3>
                    <ul>
                        <li>Kevin Holland vs Reinier de Ridder (Peso Medio)</li>
                        <li>Jiri Prochazka vs Jamahal Hill (Peso Semipesado)</li>
                        <li>Beneil Dariush vs Renato Moicano (Peso Ligero)</li>
                        <li>Merab Dvalishvili vs Umar Nurmagomedov (Pelea por el Título de Peso Gallo)</li>
                        <li>Islam Makhachev vs Arman Tsarukyan (Pelea por el Título de Peso Ligero)</li>
                    </ul>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}