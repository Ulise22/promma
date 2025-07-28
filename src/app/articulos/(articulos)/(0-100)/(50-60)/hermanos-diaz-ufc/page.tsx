import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/hermanos_diaz.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Los Hermanos Diaz UFC',
    description: 'La insparadora historia de los hermanos Nate y Nick Diaz, quienes críados en la adversidad llegaron hasta el estrellato de la UFC, volviéndose íconos del deporte de las MMA. ',
    openGraph: {
        title: 'Los Hermanos Diaz UFC',
        description: 'La insparadora historia de los hermanos Nate y Nick Diaz, quienes críados en la adversidad llegaron hasta el estrellato de la UFC, volviéndose íconos del deporte de las MMA. ',
        url: 'https://fullmma.org/articulos/hermanos-diaz-ufc'
    }
}

export default function HermanosDiazUFC () {
    return(
        <main>
            <ArticleHero title='La Historia de Nick y Nate Diaz, Los Hermanos Más Famosos de la UFC' subtitle='Los hermanos Diaz en la UFC, una historia de resiliencia y lealtad por parte de la pareja de hermanos más reconocida y querida por los fans.' image={hero} date='2025-01-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Pocos luchadores deben ser tan reconocidos y amados por los fanáticos de <Link href='/articulos/ufc'>UFC</Link> como los hermanos Diaz. Tanto Nick y <Link href='/articulos/nate-diaz-historia'>Nate</Link> se ganaron el aprecio de la gente en base a actuaciones memorables dentro del octágono como en base a su autenticidad fuera de este, que siempre fue bien recibida por parte del público. Por eso hoy vamos a explorar la historia detrás de estos 2 grandes peleadores, que está marcada por la adversidad, la violencia y la lealtad que se tienen el uno al otro. </p>
                    <h2>Una Infancia Forjada en la Adversidad</h2>
                    <p>Los hermanos Diaz, Nate y Nick, crecieron en Stockton, California, una ciudad conocida por sus desafíos socioeconómicos, siendo una zona pobre para los estándares de los Estados Unidos, lo que forjó e influenció mucho en el carácter de este par. Desde jóvenes, se enfrentaron a la dura realidad de la violencia urbana, la pobreza y la falta de oportunidades. Siendo criados tanto ellos 2 como su hermana Nina, principalmente por su madre, debido a la constante ausencia por parte de su padre, aprendieron que la vida no sería fácil para ninguno de los 2.</p>
                    <p>Ambos se vieron envueltos en muchas peleas callejeras durante su infancia y adolescencia. En parte es por esto que ninguno de los 2 logró terminar sus estudios secundarios.</p>
                    <p>Siendo Nick el mayor de los hermanos, adoptó una actitud protectora hacia Nate, a pesar de tener que lidiar con sus propios problemas como el bullying que sufrió en la escuela. Esto llevó al hermano mayor a buscar refugio en las artes marciales, entrenando karate y aikido desde muy pequeño, y participando de torneos de lucha en su adolescencia. Además, fue inscrito a una escuela de natación por su madre, de donde Nick explica que consiguió ese cardio inhumano que le conocimos en el octágono. </p>
                    <p>Entrando en la adolescencia Nate comenzó a entrenar artes marciales mixtas influenciado por su hermano mayor. Ambos entraron al gimnasio de un miembro de la familia Gracie, Cesar Gracie, quedando bajo su tutela hasta alcanzar el cinturón negro en jiu-jitsu brasileño. Aquel gimnasio se convirtió en un segundo hogar para los hermanos. </p>
                    <p>La influencia de Nick en su hermano Nate fue clave en muchos sentidos, no sólo porque había adoptado el rol de hermano protector durante gran parte de su infancia, sino porque una vez que comenzaron a entrenar, Nate veía como su hermano se enfrentaba a oponentes más fuertes constantemente con una determinación que buscó imitar. </p>
                    <h2>La Perdida que Marcó Para Siempre a Nick Diaz</h2>
                    <p>Una de las historias más conocidas y más tristes de Nick, es lo que sucedió con su novia en la juventud, Stephanie. Según él había mencionado en varias entrevistas, fue ella una de las personas que lo motivó a entrenar y mejorar como peleador día a día. Lamentablemente, poco tiempo antes de que Nick hiciera su debut profesional, Stephanie se quitó la vida en un accidente. Aparentemente llevaba teniendo problemas desde hacía bastante tiempo, puesto que este fue el tercer intento de acabar con su vida. </p>
                    <p>Esta perdida impactó mucho en Nick, quien a pesar de los problemas de pareja que habían tenido, siempre amo y estuvo enamorado de esta mujer. Luego de esto, se dedicaría a correr hacia la tumba de su novia todos los días para decirle que se convertiría en el peleador que ella siempre quiso que fuera.</p>
                    <p>Usando el entrenamiento como una forma de lidiar con el dolor y vacío que sentía. La mentalidad y la intensidad con la que siempre afrontó cada desafío está muy asociada a este trágico evento. </p>
                    <h2>Nick Diaz: El Pionero del Cardio en UFC</h2>
                    <p>Nick Diaz fue el primero de los hermanos en hacer su debut en MMA, haciendo esto mismo el 31 de agosto de 2001 ante Mike Wick, a quien lograría someter en el primer asalto, para la promotora IFC Warriors Challenge. Sería en esta misma compañía donde ya en su segunda pelea, tendría la oportunidad de pelear por el título de peso wélter, que ganaría luego de vencer a <b>Chris Lytle</b> por decisión unánime. </p>
                    <p>En 2003 firmaría con la UFC, donde rápidamente destacaría con peleas memorables, como la que tuvo con <b>Robbie Lawler</b>, a quien conseguiría vencer por KO en el segundo asalto. </p>
                    <YouTubeEmbed videoid='GSqbHyHQREg' />
                    <p>Lamentablemente, debido a diferencias contractuales, con Nick creyendo estaba cobrando menos de lo que merecía, sumado a una racha irregular que pasó justo en ese momento, con un récord de 2-3 en sus últimas 5 peleas, acabaría por abandonar la compañía. En este periodo pelearías en compañías como <Link href='/articulos/que-paso-con-pride-fc'>PRIDE FC</Link> y EliteXC. Sin embargo, donde más destacaría sería en Strikeforce, donde lograría convertirse en campeón el 30 de enero de 2010, al vencer por TKO en el primer asalto a Marius Žaromskis, defendiendo posteriormente su cinturón en 3 ocasiones. </p>
                    <p>Durante su etapa como campeón en Strikeforce, la UFC compró la compañía, propiciando el retorno de Nick a la compañía de artes marciales mixtas más grande del mundo. Durante esta última etapa tendría los últimos combates de su carrera, peleando ante figuras tan distinguidas como <b>B.J. Penn</b>, <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> y <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>. </p>
                    <h2>Nate Diaz: El Guerrero de Stockton</h2>
                    <p>Nate Diaz debutaría profesionalmente 3 años después que su hermano, el día 21 de octubre de 2004, enfrentando y derrotando por sumisión en el tercer asalto a Alejandro García. De esta forma, pelearía hasta alcanzar un récord de 5-2, y ganarse una oportunidad de participar en “The Ultimate Fighter”, torneo que acabaría ganando, llevándolo a firmar con la UFC en 2007. </p>
                    <p>Desde entonces peleó toda su carrera allí hasta finalizar su contrato. Con peleas más que memorables, la que más quizás es el primer y segundo combate con <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, cuando consiguió propinarle su primera derrota al irlandés luego de someterlo en el segundo asalto. Perdería la revancha por decisión mayoritaria, pero de igual manera para este punto, Nate ya había alcanzado el estatus de estrella en la compañía. </p>
                    <YouTubeEmbed videoid='jf-IdMctXqM' />
                    <p>Tendría peleas igual de destacadas, como su victoria sobre <b>Anthony Pettis</b> en 2019, o su pelea por el cinturón recién creado “BMF”, ante <Link href='/articulos/jorge-masvidal-historia'>Jorge Masvidal</Link>. Finalmente, su última pelea sería contra <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> en el UFC 279, donde lograría vencer por sumisión a este en el cuarto asalto, ganando la pelea y el bono a la Actuación de la Noche para despedirse de la UFC, en lo que ha sido hasta el momento su última pelea en MMA. </p>
                    <h2>Impacto de los Hermanos Diaz en UFC</h2>
                    <p>Los hermanos Diaz no solo han influido en el deporte por sus habilidades en el octágono, sino también por su personalidad y su enfoque directo y auténtico. Ambos han sido defensores del cannabis, lo que ha generado debates sobre la legalización y el uso en el deporte, con polémicas involucrando especialmente a Nick Diaz, quien en más de una ocasión dio positivo en las pruebas antidoping debido al uso de esta sustancia. </p>
                    <p>Su influencia ha trascendido el ring, afectando la cultura de la MMA y creando una base de fanáticos leales que admiran su autenticidad y su estilo de vida. Ambos han incursionado en negocios relacionados con el cannabis y se dedican actualmente a enseñar jiu-jitsu, perpetuando su legado en y fuera del deporte.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}