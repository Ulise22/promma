import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/90-100/merab_dvalishvili-nariz.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Merab Dvalishvili Nariz',
    description: 'Merab Dvalishvili y su nariz: ¿qué le pasó? Sus 3 fracturas (debut, sparring y RAF 9) y por qué rechazó la cirugía que lo frenaría un año.',
    openGraph: {
        images: '',
        title: 'Merab Dvalishvili Nariz',
        description: 'Merab Dvalishvili y su nariz: ¿qué le pasó? Sus 3 fracturas (debut, sparring y RAF 9) y por qué rechazó la cirugía que lo frenaría un año.',
        url: 'https://fullmma.org/articulos/merab-dvalishvili-nariz',
    }
}

export default function MerabDvalishviliNariz () {
    return(
        <main>
        <ArticleHero title='¿Qué le pasó a Merab Dvalishvili en la Nariz?' subtitle='Un repaso completo a las tres fracturas de nariz de Merab Dvalishvili: cómo ocurrieron, qué le dijo el cirujano y por qué prefiere pelear con la nariz torcida antes que parar un año.' image={hero} date='2026-10-20' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> se rompió la nariz en 3 ocasiones diferentes: la primera durante su debut profesional en MMA en enero de 2014; la segunda más recientemente durante un sparring en abril de 2026; y la tercera y última hasta ahora fue el 30 de mayo de este mismo 2026, cuando por un cabezazo accidental durante su lucha ante <b>Frenkie Edgar</b> en el <b>RAF 9</b> se la volvió a romper. Un cirujano le advirtió que repararla requeriría de un tratamiento complejo que lo dejaría 1 año sin competir, por lo que el excampeón decidió no operarse. </p>
                    <h2>Merab Dvalishvili y sus 3 Fracturas de Nariz</h2>
                    <p>Merab se ha roto la nariz en 3 momentos distintos de su carrera, lo que le provocó que se le vea desvíada y que se le deforme algo la cara. Los 3 momentos fueron: </p>
                    <ul>
                        <li>1. En su debut profesional, el 24 de enero de 2014, teniendo la nariz toricda desde entonces. </li>
                        <li>2. Durante un sparring en abril de 2026, al recibir un rodillazo por parte de un compañero de entrenamiento, lo que le provocó rotura en 2 lugares y dificultades para respirar. </li>
                        <li>3. Durante su pelea ante <b>Frankie Edgar</b> en el RAF 9, el día 30 de mayo de 2026, sufriendo un cabezazo accidental que hizo que la nariz volviera a desplazarse. </li>
                    </ul>
                    <h2>La Primera Fractura en su debut profesional</h2>
                    <p>La primer rotura de nariz de <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> la padeció durante su debut profesional en MMA, el día 24 de enero de 2014, cuando enfrentó al estadounidense <b>Darren Mima</b>, desde entonces tiene la nariz torcida, lo que lo condicionaría de cara al futuro.</p>
                    <h2>La Segunda Fractura por el rodillazo de un compañero en un sparring</h2>
                    <p>De la segunda, nos enteraríamos el miércoles 1 de abril de 2026, cuando Merab publicaría un video en instagram donde mostraría su recientemente rota nariz. Allí comentaría que 12 años después, la nariz estaba más rota y peor que antes, en la misma dirección que la primera vez. </p>
                    <p>Aparentemente sucedería unos 4 meses después de perder su cinturón ante <Link href='/peleadores/petr-yan'>Petr Yan</Link> en el <Link href='/eventos/ufc323'>UFC 323</Link> durante un sparring en Las Vegas, cuando un compañero usual de Merab le conectaría un rodillazo en la cara que le rompería completamente la nariz. El propio peleador comenzaría a sufrir dificultades para respirar de un lado, y sentiría los huesos rotos por dentro, cosa que se confirmaría en la radiografía que se haría posteriormente. </p>
                    <h2>La Tercera Fractura en el RAF 9 ante Frankie Edgar</h2>
                    <p>Ante la espera del excampeón georgiano de su siguiente combate en UFC, con la expectativa de obtener una tan ansiada revancha ante <Link href='/peleadores/petr-yan'>Petr Yan</Link>, Merab comenzó a competir en wrestling profesional en <b>Real American Freestyle (RAF)</b>, debido a que es un peleador súper activo que no va a quedarse sin hacer nada mucho tiempo. </p>
                    <p>El debut en el deporte se daría el 30 de mayo de 2026, en el <b>RAF 9</b>, donde se enfrentaría al también excampeón de UFC <b>Frankie Edgard</b>, en una lucha de peso ligero. En dicho combate recibiría una golpe accidental en la nariz, cuando en medio de la disputa por la posición chocaría cabezas con el estadounidense, luego del golpe el georgiano se llevaría las manos inmediatamente a la cara, con el combate frenándose unos instantes debido a la sangre que derramaba Dvalishvili. </p>
                    <p>Luego de una pausa el combate continuaría y finalmente Merab lograría derrotar a Edgar por 12-1, siendo distinguido como el combate de la noche. El propio peleador confesó luego ante la prensa que su nariz estaba bien antes de iniciar el combate, pero que el cabezazo sufrido se la volvería a romper, aunque le restó importancia, afirmando que ya se le había roto muchas veces y que forma parte del oficio. </p>
                    <YouTubeEmbed videoid='8QnO_VxFlRE' />
                    <h2>Por qué Merab Dvalishvili no se Opera la Nariz</h2>
                    <p>La principal razón por la que Merab Dvalishvili decide no operarse la nariz es el tiempo. Dado que cuando se hizo la última radiografía, visitó a un cirujano que le explicó que repararla requeriría romper otros huesos, que haría que necesite de un año entero de recuperación, lo que le impediría competir en ese tiempo. </p>
                    <p>La operación que necesita no es sólo un retoque, enderezar la nariz implica volver a romper otros huesos, con el tiempo de recuperación que eso supone. </p>
                    <p>Teniendo en cuenta que la carrera de un peleador es corta y que Merab ya tiene 35 años, estar 1 año fuera tiene implicancias mucho mayores que para cualquier otra persona, especialmente a su edad y especialmente si tenemos en cuenta la actividad a la que nos viene acostumbrando el peleador georgiano, que en su primer año como campeón hizo 4 defensas del título en 2025, ante <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, ante <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link>, ante <b>Cory Sandhagen</b>, y la última ante <Link href='/peleadores/petr-yan'>Petr Yan</Link>. </p>
                    <p>De igual forma, el propio Merab tanto en el video que subió en abril de este año a instagram, como en la entrevista que dió posterior a su pelea ante <b>Frankie Edgar</b>, parece tratar las lesiones, por muy graves y dolorosas que sean, como gajes del oficio. Por lo que todo parece indicar que terminará escuchando a su cirujano, quien le sugirió esperar recién a retirarse para operarse. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}