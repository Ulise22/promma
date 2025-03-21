import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/vinicius_oliveira.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Vinicius Oliveira UFC',
    description: "La historia y carrera del peleador de UFC brasileño Vinicius Oliveira. ",
    openGraph: {
        title: 'Vinicius Oliveira UFC',
        description: "La historia y carrera del peleador de UFC brasileño Vinicius Oliveira. ",
        url: 'https://fullmma.org/noticias/vinicius-oliveira-ufc'
    }
}

export default function ViniciusOliveira () {
    return(
        <main>
            <ArticleHero title='¿Quién es Vinicius Oliveira? El brasileño con KOs espectaculares en la UFC' subtitle="La historia y carrera del peleador de UFC brasileño Vinicius Oliveira." image={hero} date='2025-01-29' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este próximo sábado en el UFC Saudi Arabia, tendremos en la cartelera estelar la pelea entre el ruso <b>Said Nurmagomedov</b> (quien nada tiene que ver con <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, en caso de que te lo preguntaras), y el brasileño <b>Vinicius Oliveira</b>, de quien vamos a hablar hoy. </p>
                    <p>A pesar de que en las casas de apuestas, Said Nurmagomedov comienza como el favorito, lo cierto es que no hay que hacer de menos al brasileño. Primero, porque la diferencia no es tan grande, y segundo porque la habilidad que ha demostrado tener Vinicius Oliveira es algo a lo que hay que prestarle atención. Dado que, aunque sólo lleva 2 peleas en la UFC, fueron suficiente para demostrarnos a los fanáticos de lo que está hecho. Siendo uno de los luchadores más divertidos de ver que existen en estos momentos, cuenta con una taza de finalización altísima, con un récord de 21-3, con 18 de esas 21 victorias siendo por finalización. </p>
                    <p>Comenzando a narrar un poco su historia, Vinicius “Lok Dog” Oliveira nació el 30 de noviembre de 1995 en Porto Alegre, Brasil. Según <a target='_Blank' href='https://www.ufcespanol.com/athlete/vinicius-oliveira'>explica él mismo a la UFC</a>, comenzó a entrenar debido a que recibía golpizas y palizas constantemente cuando era un niño, cosa que lo motivó a entrenar artes marciales con el objetivo de poder defenderse, y con la idea de poder ganar dinero en el futuro. </p>
                    <p>Antes de iniciar su carrera profesional en las artes marciales mixtas, Vinicius tuvo que rebuscárselas para ganarse la vida, trabajando en sitios de construcción, de a ratos dedicándose a ser conductor, y vendiendo DVDs en la calle. Además, antes de tener su primera pelea profesional, tuvo alrededor de 30 combates amateur, en donde cosechó 28 victorias y sólo 2 derrotas. </p>
                    <p>Finalmente, su sueño de volverse profesional se materializaría el 19 de diciembre de 2015, cuando haría su debut ante su compatriota Michael Teixeira, a quien sería capaz de derrotar por TKO en el primer asalto. Consiguiendo un inicio de carrera fantástico con 9 victorias consecutivas en diferentes promotoras brasileñas. </p>
                    <p>Su primera derrota profesional llegaría recién en el 2018 debido a una parada médica en su pelea contra el mexicano Cristian Quiñonez. </p>
                    <p>En marzo de 2021 conseguiría ser campeón de la promotora UAE Warriors, luego de conectar una patada en la cabeza y rematar a golpes al entonces campeón canadiense Xavier Alaoui, en el segundo asalto del combate. Sería capaz de defender de manera exitosa su cinturón en octubre de ese mismo año, al someter en el primer asalto a Sylvester Chipfumbu.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/017mV-32V9Q?si=SvN99alPzjXjyA7j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Finalmente, la oportunidad de su vida llegaría en septiembre de 2023, cuando podría participar del “Dana White’s Contender Series”, en donde peleando por un contrato de UFC, lograría noquear con un gancho de izquierda a Victor Madrigal. </p>
                    <p>Es entonces cuando el 2 de marzo de 2024, llegaría el punto más alto de su carrera, al protagonizar lo que es en lo personal, una de las mejores peleas que vi en mi vida. Dado que, enfrentando al luchador de Albania, Bernardo Sopaj, iría a una guerra de 3 asaltos, en la que fue dominado completamente durante el primero de estos y la mitad del segundo. Sin embargo, dando la sensación de que Sopaj se cansó para la segunda mitad del segundo asalto, y de que iba a ser imposible que noqueara a Oliveira, el brasileño sacó fuerzas y remontó de manera contundente lo que estaba siendo una pelea que hasta ese momento iba perdiendo. Finalmente, para el tercer asalto, en el que Vinicius hizo de Bernardo un saco de boxeo, consiguió conectar un rodillazo volador a la cabeza que mandó a la lona a su rival de manera instantánea. </p>
                    <p>No sólo fue épica la pelea, por la forma en que Vinicius Oliveira fue capaz de dar vuelta un combate que estaba perdiendo, sino que también la forma de finalizar dicho combate, con un rodillazo que pocos peleadores de UFC son capaces de conectar, y la forma en que Sopaj cae noqueado instantáneamente, es lo que eleva aquella actuación a otro nivel. Por eso no es de extrañar que la UFC haya recompensado dicha actuación con los 2 bonos, uno por La Pelea de la Noche, y otro por ser la Actuación de la Noche. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/iI5wiSFT1e4?si=lCQx_s1r0XZVL7ab" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En su siguiente pelea, con fecha para junio de ese mismo año, en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, se enfrentaría a Ricky Simón, quien es un luchador que cuenta con la particularidad de ser uno de los pocos que puede decir que venció al actual campeón de la división de peso gallo, <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>. Consiguiendo una victoria dominante ante su rival por decisión unánime. Esta pelea tiene doble mérito, y habla de la calidad de persona que es Vinicius, debido a que tuvo que prepararse y entrenar para este combate, al mismo tiempo que se dedicaba a ayudar las victimas de las inundaciones en Brasil, que sufrían durante aquellas fechas. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}