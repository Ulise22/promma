import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/10-20/most_pro_fights.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Travis Fulton',
    description: 'Travis Fulton es quien cuenta con el récord de la mayor cantidad de peleas profesionales en la historia de las MMA, superando por mucho a los demás, con un total de 322 peleas profesionales en su haber, supera por más del doble al siguiente en la lista de más combates, que es el estadounidense Shannon Ritch, que peleó en 151 ocasiones.',
    openGraph: {
        title: 'Travis Fulton',
        description: 'Travis Fulton es quien cuenta con el récord de la mayor cantidad de peleas profesionales en la historia de las MMA, superando por mucho a los demás, con un total de 322 peleas profesionales en su haber, supera por más del doble al siguiente en la lista de más combates, que es el estadounidense Shannon Ritch, que peleó en 151 ocasiones.',
        url: 'https://fullmma.org/articulos/peleador-de-mma-con-mas-peleas'
    }
}

export default function MasPeleasProfesionales () {
    return(
        <main>
            <ArticleHero title='¿Qué luchador de MMA ha tenido más peleas? La historia detrás de Travis Fulton, el luchador con más peleas en MMA y su oscuro final.' subtitle='El caso del luchador estadounidense Travis Fulton, que con más de 300 peleas profesionales, posee el récord de más combates en un octágono de MMA.' image={hero} date='18/03/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Travis Fulton es quien cuenta con el récord de la mayor cantidad de peleas profesionales en la historia de las MMA, superando por mucho a los demás, con un total de 322 peleas profesionales en su haber, supera por más del doble al siguiente en la lista de más combates, que es el estadounidense <b>Shannon Ritch</b>, que peleó en 151 ocasiones.</p>
                    <p>En sus 320 peleas contadas por The Athletic, posee un récord de 255-54-10 (1). Siendo 143 de sus 255 victorias, por la vía del nocaut, 104 por sumisión y sólo 8 combates llegaron a la decisión. Mientras que de sus 54 derrotas, 13 fueron por nocaut, 26 por sumisión y 14 por decisión. Además posee 10 empates y una pelea que terminó sin resultado, producto de una parada prematura, cuando debía enfrentar a <b>Greg Wikan</b>. </p>
                    <YouTubeEmbed videoid='h2NkACrr_ws' />
                    <p>Lo más impresionante de todo el recorrido que tuvo en el mundo de las artes marciales mixtas, es que mientras practicaba este deporte de forma profesional, intercalaba sus peleas con su carrera de boxeo, donde también compitió profesionalmente, y donde tuvo un total de 75 combates, donde tiene un récord de 25-48-2. Además peleó en una ocasión en boxeo en la modalidad de Bare-knuckle, enfrentando al estadounidense <b>MIchael P. Gruis</b>. Todo esto en un lapso menor a 30 años, sólo peleó entre los años 1996 y 2019, cuando se retiró oficialmente de todos los deportes de contacto.</p>
                    <p>El récord Travis Fulton es una completa locura, porque teniendo en cuenta que estuvo peleando en activo durante 17 años, quiere decir que tuvo que pelear alrededor de 19 veces por año para conseguir esta cifra. Si además sumamos sus peleas de boxeo, significa que en promedio peleó más de 23 veces por año, casi al ritmo de una pelea cada 2 semanas. Es particularmente impresioanante la cifra si tenemos en cuenta que hoy en día es bastante difícil encontrar peleadores de MMA que sean tan activos como para pelear 3 veces por año.</p>
                    <p>Travis Jon Fulton nació el 29 de mayo de 1977 en la ciudad de Waterloo, en Iowa, Estados Unidos. De niño tuvo una infancia muy dura, luego de que su padre, quien trabajaba en la corporación <b>John Deere</b>, fuera despedido, hundiendo a su familia en la absoluta pobreza. Además de esto, durante el tiempo en que Fulton asistió al colegio, fue víctima de bullyng, al punto tal que, como narran en The Athletic, había diseñado un plan para atentar con la vida de sus compañeros y luego acabar con su propia vida. Sin embargo, gracias a Dios, esto nunca sucedió, y su habilidad y éxito en diferentes deportes lo hicieron volverse un chico popular entre sus pares mientras estudiaba en la escuela. Comenzó a practicar Wrestling, donde destacó, siguiendo los pasos de su hermano mayor. También se convirtió en un habilidoso jugador de Baseball. Además practicó boxeo en los <b>Golden Gloves Of America</b>, que es una organización que promueve peleas entre boxeadores amateur. Además es cinturón negro 2°Dan en Karate Kempo.</p>
                    <YouTubeEmbed videoid='wf0RyN9pvz4' />
                    <p>Travis se enamoró de las MMA, como muchos peleadores, luego de ver los primeros eventos de <Link href='/articulos/ufc'>UFC</Link> cuando tenía 18 años, por lo que se decidió a competir en este deporte, haciendo su debut como profesional el 26 de julio de 1996 (con 19 años), en un evento llamado <b>Gladiator 1</b> en Iowa, enfrentando a <b>Dave Strasser</b>, quien luego se convertiría en un luchador de UFC. Aquel primer enfrentamiento lo perdería por sumisión en el primer asalto. Sin embargo no se desanimaría y menos de 2 meses después volvería a pelear, contra <b>Wesley Jamieson</b>, esta vez ganando por sumisión en el primer asalto.</p>
                    <p>Entre las muchas peleas que tuvo, destacaría sus 2 participaciones en UFC, primero en UFC 20, donde perdería por sumisión contra su compatriota <b>Pete Williams</b>. Y luego, en UFC 21, donde enfrentaría a <b>David Dodd</b>, a quien sería capaz de vencer por decisión unánime. Había sido invitado para participar en el UFC 23, donde enfrentaría a <b>Scott Adams</b>, sin embargo no pudo competir ya que se rompió la mano 6 días antes de la pelea.</p>
                    <p>En 2008 fue invitado a participar del reality organizado por la UFC <b>The Ultimate Fighter</b>, pero no fue capaz de dar el peso necesario para el programa durante la filmación.</p>
                    <p>A lo largo de su carrera, además de ser el peleador con más combates, y por tanto ser el peleador con más victorias en la historia de las MMA, obtuvo diferentes premios y reconocimientos. Fue campeón mundial de la organización <b>M-1 Global</b>; fue campeón de la <b>International Sport Combat Federation</b>, en el campeonato de peso pesado de Estados Unidos; fue campeón de la <b>International Fighting Championship</b>, en los eventos <b>IFC 8 Tournament</b>, <b>IFC Extreme Combat Tournament</b> y en <b>IFC 6 Tournament Runner Up</b>; Además fue campeón en el torneo <b>World Vale Tudo Championship 6</b>.</p>
                    <p>Su última pelea en MMA fue contra <b>Shannon Ritch</b>, por el Campeonato de M-1 Global, a quien venció por sumisión en el segundo asalto. Luego de aquello se retiraría de las MMA, para tener un último combate en boxeo, donde perdería contra el estadounidense <b>Ryan Watson</b> por decisión unánime. Y tendría una pelea en Bare-knuckle en boxeo contra su compatriota <b>Michael P. Gruis</b>, donde también perdería, en esta ocasión por TKO en el tercer asalto. Luego de estas peleas, no volvería a involucrarse en los deportes de combate.</p>
                    <YouTubeEmbed videoid='G-5UotiLwc8' />
                    <p>Su historia daría un giro bastante turbio luego de haberse retirado, dado que en febrero de 2021, Travis Fulton fue encarcelado, luego de ser acusado y condenado por poseer material inapropiado de menores de 18 años, además de otros delitos. Todo esto cuando aún tenía pendiente un juicio por violencia doméstica.</p>
                    <p>Fulton, fue encontrado sin vida a sus 44 años en su celda un día después de declararse culpable de los cargos en su contra. La prisión en donde estaba encerrado, habría detallado lo siguiente en un comunicado: <b>&quot;Mientras realizaba una revisión de celda de rutina, el personal del Centro Correccional del Condado de Linn encontró a un recluso en su celda que no respondía. Se cree que el recluso, un hombre blanco de mediana edad, se habría ahorcado&quot;. &quot;El personal del Correccional del Condado de Linn inmediatamente comenzó a tomar medidas urgentes para salvar vidas, incluido el RCP. La ambulancia llegó en minutos y le brindó atención médica avanzada antes de trasladarlo al Mercy Medical Center, donde fue declarado fallecido a las 5 de la mañana. Por razones de seguridad, no se dará a conocer el método exacto del presunto ahorcamiento. Esta es una investigación en curso y el médico forense estatal realizará una autopsia&quot;</b>.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}