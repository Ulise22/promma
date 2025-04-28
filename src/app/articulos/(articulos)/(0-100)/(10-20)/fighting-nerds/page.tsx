import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/10-20/fighting_nerds.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Fighting Nerds',
    description: 'La historia del equipo Fighting Nerds, quiénes son, su filosofía, y cómo llegaron hasta lo más alto de las MMA, dominando por completo la UFC.',
    openGraph: {
        title: 'Fighting Nerds',
        description: 'La historia del equipo Fighting Nerds, quiénes son, su filosofía, y cómo llegaron hasta lo más alto de las MMA, dominando por completo la UFC.',
        url: 'https://fullmma.org/articulos/fighting-nerds'
    }
}

export default function FightingNerds () {
    return(
        <main>
            <ArticleHero title='¿Quiénes son los Fighting Nerds? El Mejor Equipo de MMA que Arrasa en la UFC' subtitle='La historia del equipo Fighting Nerds, quiénes son, su filosofía, y cómo llegaron hasta lo más alto de las MMA, dominando por completo la UFC.' image={hero} date='09/12/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Cuando hablamos de nuestros peleadores de MMA favoritos, muchas veces se nos pasa por alto mencionar a quienes más influyen en su desempeño en el octágono, y esos sus entrenadores y su equipo de entrenamiento. Por eso hoy, vamos a hablar de uno de los equipos más peculiares que hay en la UFC en estos momentos, Fighting Nerds. </p>
                    <p>Actualmente cuentan con 5 peleadores en la UFC, sumando entre todos ellos un récord en la compañía de 18-2, con 2 de ellos estando ranqueados en sus respectivas divisiones, con 4 de ellos estando invictos en la compañía, y con todos ellos dando un rendimiento sobresaliente, destacando por sus actuaciones superiores por sobre sus rivales, a quienes dejan destrozados al final de cada enfrentamiento. Es por ello que hoy en día, para cada seguidor habitual de la UFC, conoce perfectamente los nombres de luchadores como <Link href='/peleadores/caio-borralho'>Caio Borralho</Link> o <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>. Debido a esto, queremos explicar el porqué son tan buenos estos luchadores, y qué mensaje quieren dejar.</p>
                    <YouTubeEmbed videoid='XvMfpmU1mIs' />
                    <h2>Historia de los Fighting Nerds</h2>
                    <p>A la hora de hablar de este equipo, tenemos que hacer una mención a la mente detrás de todo, que es Pablo Sucupira, quien es un exboxeador y peleador de Muay Thai, que inició este camino casi sin saberlo, al abrir un gimnasio local en São Paulo llamado “Combat Club”.</p>
                    <p>Las pretenciones y la proyección del club cambiaron radicalmente al momento en que un joven <Link href='/peleadores/caio-borralho'>Caio Borralho</Link> se unió al gimnasio en 2014. Pablo quedó sorprendido por la habilidad de su compatriota luego de hacer sparring con él. De esta forma, Borralho comenzó su carrera profesional de MMA bajó el mando de Sucupira.</p>
                    <p>Pablo sabía que necesitaba de ayuda si quería formar un equipo que entrenara a un luchador de MMA, por lo que él ya teniendo conocimientos y experiencia en el striking, decidió buscar ayuda en Wagner Mota, quien se unió al equipo aportando sus conocimientos en grappling, y en Flavio Alvaro, quien con sus 60 peleas profesionales en MMA podía aportar mucha experiencia como entrenador. Formando de esta manera, el quipo que sería llamado Fighting Nerds. </p>
                    <p>Sin embargo, los inicios de este club no fueron para nada sencillo, los 3 entrenadores en un principio y durante varios años no cobraron ni un dólar por entrenar a sus pupilos. Al comienzo fue una apuesta, que poco a poco les comenzó a dar resultados. Sin ir más lejos, siendo <Link href='/peleadores/caio-borralho'>Caio Borralho</Link> el mejor de sus peleadores, este necesito de 7 años, de 10 peleas encima, de un cinturón en Future FC, para ganarse su primer oportunidad de luchar por un lugar en la UFC, dado que no comenzó a competir directamente en la compañía, sino que primero tuvo que pelear en el Dana White’s Contender Series para que pusieran el ojo en él, y aún así, pese a que en su pelea en el reality de televisión, consiguió una victoria por decisión ante el canadiense Aaron Jeffery, esto no fue suficiente para impresionar a Dana, que terminó por no darle un contrato en la compañía más grande artes marciales mixtas en el mundo.</p>
                    <p>Tuvieron que negociar una nueva pelea el DWCS, para menos de un mes después de aquel combate, para que esta vez sí, luego de que Caio consiguiera noquear en el primer asalto a Jesse Murray, le dieran un contrato en la compañía.</p>
                    <p>Desde entonces consiguieron que tanto <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, Jean Silva, Mauricio Ruffy, Kaynan Kruschewsky y Bruna Brasil, firmaran con la compañía. Además de lograr que peleadores que ya estaban en la UFC, comenzaran a entrenar con ellos, como es el caso de Thiago Moisés.  </p>
                    <h2>La Filosofía de los Fighting Nerds</h2>
                    <p>No es casual ni el nombre ni las gafas características que portan estos peleadores luego de cada pelea. Dado que la mayoría de los peleadores que integran este club, no caen en el cliché de peleadores matones que tuvieron una vida contaminada por las calles. Por el contrario, son personas bastante inteligentes que en destacaban en sus estudios previo a dedicarse al mundo de las MMA, cayendo en el clásico estereotipo de los nerds, cosa que sus gafas con una cinta en el medio simbolizan.</p>
                    <p>En palabras de Pablo Sucupira: “Las gafas muestran al mundo que los luchadores son inteligentes, porque piensan cuando nadie puede pensar. Cuando estás dentro de una pelea, de una jaula, con otro luchador tratando de matarte. Es difícil pensar ahí adentro, la adrenalina es demasiado fuerte. Pero si eres capaz de pensar en esa situación, eres uno de los tipos más inteligentes del mundo. Esto es lo que representan las gafas, que pensamos cuando nadie puede pensar, cuando se disparan balas”.</p>
                    <p>Pero quizás la frase expresada por este señor que mejor resume la mentalidad que rodea a este equipo y que lo está llevando a obtener grandes éxitos es: “Estamos demostrando que no es necesario ser un matón para ganar peleas. No es necesario estar enojado para vencer a alguien. No es necesario vibrar de mala manera. Noqueamos a la gente, hacemos actuaciones para ganar el bonus. Pero lo hacemos con un ambiente de amor, lo hacemos respetándonos unos a los otros”.</p>
                    <YouTubeEmbed videoid='DNcY7ZSu0JI' />
                    <p>Para terminar, nos gustaría destacar a 4 de los peleadores más destacados que tiene este equipo.</p>
                    <h3>1. Caio Borralho</h3>
                    <p>El más aventajado de los alumnos de Fighting Nerds, fue el primero en unirse a la UFC, abriéndole el camino al resto de sus compañeros. Ha sido el que más ha destacado, contando con más combates en la compañía que los demás, teniendo un récord invicto de 7-0 en esta, y siendo el que ha tenido que pasar por las peleas más duras, alcanzando este año entrar a los rankings al noquear a Paul Craig en el UFC 301 en el segundo asalto. Y luego escalando aún más, al protagonizar el primer evento encabezado por un peleador de Fighting Nerds, el día 24 de agosto de 2024, derrotando por decisión al número #5 de los pesos medianos, ganando además el bono a la Pelea de la Noche, siendo 3 los bonos ganados desde su llegada a la compañía. </p>
                    <h3>2. Carlos Prates</h3>
                    <p>Otro de los peleadores que más sorprende es <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, que en poquísimo tiempo ha conseguido de todo. Logró entrar a la UFC, firmando un contrato, luego de que el 18 de noviembre de 2023 noqueara en el primer asalto a Mitch Ramirez en el DWCS. Desde entonces, Prates no ha perdido el tiempo, teniendo un total de 4 combates en el 2024, ganando todos ellos, consiguiendo ya en su primer año en la compañía entrar a los rankings, luego de que, en su más reciente combate en noviembre de este año, consiguiera derrotar por nocaut en el primer asalto a Neil Magny.</p>
                    <p>Además, todas sus 4 victorias este año fueron la vía del nocaut, ganando 4 bonos a la Actuación de la noche en un lapso de 9 meses. </p>
                    <h3>3. Jean Silva</h3>
                    <p>Este peleador es otro de los que no deja de asombrar. Siendo un luchador de peso pluma, firmó con la UFC luego de que consiguiera una victoria por decisión unánime ante el argentino Kevin Vallejos en el DWCS. Desde entonces, ha peleado en 3 ocasiones a lo largo de este 2024, con todas sus victorias proviniendo de un nocaut.</p>
                    <p>Lo más sorprendente fue lo conseguido en sus 2 últimas peleas, dado que Jean Silva compitió en el UFC 303, enfrentando al canadiense Charles Jourdain, a quien consiguió vencer por KO en el segundo asalto de la pelea. No contento con eso, Silva aceptó una pelea en corto aviso, 2 semanas después de su último combate, enfrentando a un luchador de una categoría superior como lo es Drew Dober, consiguiendo derrotarlo, contra todo pronóstico, por la vía del TKO, luego de que el médico parara la pelea. Este último combate le hizo merecedor del bono a la Pelea de la Noche. </p>
                    <h3>4. Mauricio Ruffy</h3>
                    <p>Este luchador de peso ligero, consiguió entrar a la UFC, al igual que el resto de sus compañeros mencionados anteriormente, al noquear a su rival, Raimond Magomedaliev, en el tercer asalto en el DWCS en octubre de 2023. Desde entonces ha tenido 2 combates en la compañía a lo largo del 2024, siendo el primero de estos en el UFC 301 en mayo, obteniendo una victoria por la vía del nocaut en el primer asalto ante Jamie Mullarkey. Su segunda pelea fue en el UFC 309 ante James Llontop, a quien consiguió dominar completamente, obteniendo una victoria por decisión unánime, manteniendo un invicto en la UFC de 2-0. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}