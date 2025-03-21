import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/luchadores_daguestan.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Luchadores de Daguestán UFC',
    description: 'Los peleadores más destacados de Daguestán en UFC, y la lista de todos los peleadores daguestanís actuales de la UFC.',
    openGraph: {
        title: 'Luchadores de Daguestán UFC',
        description: 'Los peleadores más destacados de Daguestán en UFC, y la lista de todos los peleadores daguestanís actuales de la UFC.',
        url: 'https://fullmma.org/articulos/luchadores-de-daguestan-ufc'
    }
}

export default function LuchadoresDaguestanUFC () {
    return(
        <main>
            <ArticleHero title='Los Luchadores Más Destacados de Daguestán en la UFC' subtitle='Todos los luchadores de Daguestán que compiten actualmente en la UFC' image={hero} date='2025-01-31' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Que los luchadores de Daguestán en la UFC vienen dominando es un hecho. Desde hace tiempo, concretamente desde el ascenso de <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, que los peleadores provenientes de esta zona de Rusia, vienen destacando de sobremanera en las MMA, con actuaciones sobresalientes y dominantes sobre sus rivales, que poco pueden hacer ante su nivel de lucha.</p>
                    <p>Es por eso que hoy discutiremos sobre algunos de los peleadores más destacados que nos ha traído esta región a la UFC, además de enlistar a todos los peleadores que actualmente están en la compañía de artes marciales mixtas más grande del mundo.</p>
                    <h2>Los 3 Peleadores Más Destacados de Daguestán en la UFC</h2>
                    <p>Aunque como mencioné anteriormente, son muchos los peleadores de Daguestán que vienen dominando en la UFC, quiero destacar a 3 que por méritos propios se diferencian de los demás, mostrando una superioridad pocas veces vista en luchadores de este calibre. </p>
                    <h3>1. Khabib Nurmagomedov </h3>
                    <p>Comenzando con la figura más distinguida de esta región, <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link>, supo poner su nombre entre los más destacados de la historia de la UFC. Habiéndose retirado invicto con un récord profesional de 29-0, luego de lo que fue su victoria por sumisión ante <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> en el segundo asalto, el 24 de octubre de 2020.</p>
                    <p>Tuvo un total de 12 peleas en la UFC, logrando ganar todas ellas, con 5 de estas viniendo por la vía de la sumisión y 2 por la vía del nocaut. Desde que supo ser campeón al derrotar a Al Iaquinta el 7 de abril de 2018, comenzó lo que sería uno de los reinados más largos en la historia de peso ligero.</p>
                    <p>Alcanzando el estrellato especialmente luego de su primer defensa del título ante <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, con quien tendría el combate más visto de la historia de la UFC, obteniendo una contundente victoria por sumisión, en el cuarto asalto de la pelea. </p>
                    <p>Además, defendería el cinturón ante los campeones interinos, <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, a quien sometería en el tercer asalto, y ante <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>, a quien sería capaz de someter en el segundo. Luego de aquella última pelea, tomaría la decisión de retirarse, debido a que había sufrido la reciente perdida de su padre, quien fue el maestro y entrenador que lo llevó a alcanzar lo más alto. </p>
                    <h3>2. Islam Makhachev </h3>
                    <p>El retiro de Khabib nos dejaría a su compañero y hermano del alma como heredero de su legado, <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien al poco tiempo sería capaz de convertirse en campeón de la división de peso ligero de la UFC. </p>
                    <p>El legado que está dejando el actual campeón de la división, es igual o más grande que el de Khabib. Debido a que es capaz de obtener victorias con casi la misma contundencia, a la vez que ya se está manteniendo activo durante más tiempo que su predecesor. </p>
                    <p>Mientras que Khabib se retiró con 3 defensas exitosas del título, Islam fue capaz de superar dicho récord. Dado que, desde su victoria ante <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, que lo coronó como campeón, fue capaz de defender el cinturón ante <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> en 2 ocasiones, ante <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>, y más recientemente ante <Link href='/peleadores/renato-moicano'>Renato Moicano</Link> en el <Link href='/covertura-ufc/ufc311'>UFC 311</Link>. </p>
                    <p>Makhachev sigue siendo el campeón de la división, y en estos momentos maneja un aura de invencibilidad, que hace muy difícil imaginar a algún peleador de peso ligero derrotándolo. </p>
                    <h3>3. Zabit Magomedsharipov </h3>
                    <p>Uno de las peleadores más míticos que tuvo la compañía, es <Link href='/articulos/que-paso-con-zabit-magomedsharipov'>Zabit Magomedsharipov</Link>. Quien durante su corta estancia en la UFC demostró ser un luchador completo, que al igual que sus compatriotas mencionados anteriormente, manejaba un aura de invencibilidad increíble. </p>
                    <p>El luchador de peso pluma tuvo un total de 6 combates en la UFC, consiguiendo ganar todos estos con 3 de sus victorias viniendo por la vía de la sumisión y con 3 siendo por decisión. Además, debido a lo atrevido de su estilo de pelea, su dominación y habilidad para generar combates entretenidos, lo hicieron ganar 4 bonos por desempeño en esos 6 combates, además del premio a la sumisión del año por lo hecho en su pelea contra Brandon Davis. </p>
                    <p>Lamentablemente para todos los que somos fans de las MMA, Zabit, al igual que Khabib (aunque incluso más), se retiró demasiado temprano de este deporte, antes de siquiera tener una pelea por el título. Con apenas 28 años se retiró para siempre, por un cúmulo de razones, entre las que se encontraban sus problemas de salud, la dificultad para encontrar rivales, y la falta de motivación para seguir peleando. De esta forma, dejó detrás un récord de 18-1, con 6 de sus victorias siendo por la vía del nocaut, 7 siendo por la vía de la sumisión, y sólo 5 siendo por decisión. </p>
                    <h2>Todos los Peleadores de Daguestán en la UFC Actualmente </h2>
                    <p>Para finalizar, enlistaremos a todos los peleadores de Daguestán que compiten en la UFC actualmente. Aclarando además en que división compiten, además de mostrar la posición en la que están ranqueados a la fecha de escribir este artículo. </p>
                    <p>Hay un total de 12 peleadores de esta región que compiten actualmente en la compañía de MMA más grande del mundo, y son 6 los que están ranqueados a fecha de hoy. Una completa locura, tener a la mitad de los peleadores de una región de apenas 3 millones de habitantes, ranqueados en el top de sus divisiones.  </p>
                    <ul>
                        <li>1. <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> (Peso Ligero (C))</li>
                        <li>2. <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link> (Peso Gallo #3)</li>
                        <li>3. <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> (Peso Semipesado #1)</li>
                        <li>4. Nassourdine Imavov (Peso Medio #5)</li>
                        <li>5. Tagir Ulanbekov (Peso Mosca #11)</li>
                        <li>6. <Link href='/peleadores/shara-magomedov'>Shara Magomedov</Link> (Peso Medio #14)</li>
                        <li>7. Askar Askarov (Peso Mosca)</li>
                        <li>8. Said Nurmagomedov (Peso Gallo)</li>
                        <li>9. Abus Magomedov (Peso Medio)</li>
                        <li>10. Ikram Aliskerov (Peso Medio)</li>
                        <li>11. Abubakar Nurmagomedov (Peso Wélter)</li>
                        <li>12. Muslim Salikhov (Peso Wélter)</li>
                    </ul>
                    <p></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}