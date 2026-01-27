import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/jean-silva/jean_silva.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Jean Silva',
    description: '',
    openGraph: {
        images: '',
        title: 'Jean Silva',
        description: '',
        url: 'https://fullmma.org/peleadores/jean-silva'
    }
}

export default function JeanSilva () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={17} l={3} d={0} categoria='Peso Pluma' nombre='Jean Silva' apodo={null} time='2026-01-22' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jean Silva MMA</h2>
                    <p className={styles.peleador__article__text}>Jean Silva es un peleador brasileño de UFC que compite en la división de peso pluma, desde que se ganó su contrato con la compañía luego de derrotar al argentino <b>Kevin Vallejos</b> por decisión unánime en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White&apos;s Contender Series</Link>. Se ha convertido en uno de los peleadores más divertidos de ver desde su llegada, obteniendo puras victorias por finalización, que acompañadas de su carisma único y de formar parte del equipo más conocido de toda la UFC, <Link href='/articulos/fighting-nerds'>Los Fighting Nerds</Link>, lo vuelven uno de los peleadores favoritos de los fans. </p>
                    <h2 className={styles.peleador__article__title}>Jean Silva Récord</h2>
                    <p className={styles.peleador__article__text}>Jean Silva posee un récord profesional de 17-3. Con 12 de sus victorias proviniendo por la vía del nocaut, 3 por la vía de la sumisión y sólo 2 llegando a decisión. Mientras que de sus 3 derrotas, sólo 1 fue por la vía del nocaut y las otras 2 fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Jean Silva Historia</h2>
                    <p className={styles.peleador__article__text}>Jackson Jean da Silva nació el 13 de diciembre de 1996 en la ciudad de Foz do Iguacu, en el Estado de Paraná, en Brasil. Su historia está marcada por una infancia extremedamente difícil y traumática, presenciando eventos devastadores que lo marcarían para toda la vida: como cuando 3 hombres se aprovecharon de madre y ella, en respuesta, los mató, lo que la llevó a su arresto y prisión. </p>
                    <p className={styles.peleador__article__text}>Además sufrió la perdida de su hermano en circunstancias trágicas, fue víctima de bullyng, siendo acosado y golpeado por otros niños por ser obeso y estar aislado socialmente. Todo esto lo llevó a desarrollar un tic nervioso que consta de ladrar, algo muy común en él hoy en día antes de cada combate en UFC pero que tiene su raíz en el trauma con el que tiene que lidiar y con un perro que le regaló su hermano, quien sirvió como único consuelo y compañía en aquella época. </p>
                    <p className={styles.peleador__article__text}>En 2009 encontró la salvación en las artes marciales, concretamente en el Muay Thai. Le sirvió porque a Jean le gustaba mucho el combate callejero, y en las artes marciales, luego en las MMA, encontraría la forma de canalizar su rabia en el entrenamiento, encontrando disciplina y propósito. Cabe mencionar que su esposa Carol fue clave en todo este proceso, por lo que Jean Silva hoy en día sigue junto a ella y le está agradecido por ser justamente, la mujer del proceso. </p>
                    <p className={styles.peleador__article__text}>Mientras entrenaba, tuvo un trabajo bastante común como repartidor, hasta que finalmente en 2016 decide dar un salto en su vida para comenzar a pelear profesionalmente en artes marciales mixtas, haciendo su debut el día 19 de noviembre ante su compatriota <b>Lorenzo Rodrigues</b> en una promotora regional llamada <b>Aspera  FC</b>, donde lograría ganar por KO a los 15 segundos del combate. </p>
                    <p className={styles.peleador__article__text}>Tendría otros 2 combates más en aquella promotora, ganando el siguiente por TKO en el segundo asalto, y perdiendo el último por decisión dividida luego de 3 asaltos. Continuó peleando en Brasil para diferentes compañías, ganando una pelea más por parada médica a finales de 2017, y perdiendo una vez más por decisión el 21 de abril de 2018, pero esta sería su última derrota en un largo tiempo, dado que a partir de aquí comenzaría una racha de victorias espectacular. </p>
                    <p className={styles.peleador__article__text}>Debutaría en peso pluma el 10 de noviembre de ese mismo año (antes venía peleando en peso gallo), derrotando por TKO a su compatriota <b>Muniz Martins dos Santos</b>. Al año siguiente tendría sólo una pelea que ganaría por sumisión en el primer asalto, seguido de otro combate en 2020 que ganaría por KO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>En 2021 tendría 2 combates más, ganando el primero por KO en el primer asalto, y el segundo por sumisión en el primero. En 2022 no tendría ningún combate, pero este parón sería el que precedería a uno de los años más importantes de su carrera, dado que en 2023 sería cuando su carrera estallaría.</p>
                    <p className={styles.peleador__article__text}>Firmaría con una promotora más importante de Brasil llamada <b>Spartacus MMA</b>, donde debutaría con KO en el primer asalto ante el brasileño <b>Tiago Souza</b>, para luego enfrentar a su primer rival internacional, ante un iraní llamado <b>Shahin Najafi</b>, a quien derrotaría por TKO en el primer asalto. Sería en este momento cundo el nombre de Jean Silva comenzaría a sonar con más fuerza en el entorno de las MMA, por lo que sería convencido por <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, quien ya era un peleador de la UFC, de unirse a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, donde Silva podría dar un salto de cálidad en su carrera, en sus habilidades, pero más importante, donde encontraría una familia que lo entendería y donde podría explotar todo su potencial. </p>
                    <h3>Jean Silva vs Kevin Vallejos en el Dana White Contender Series</h3>
                    <p className={styles.peleador__article__text}>Con un récord de 10-2, y una racha de 7 victorias consecutivas, además de con un nuevo equipo completamente diferente para apoyarlo, al brasileño se le dió la oportunidad de participar en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White&apos;s Contender Series</Link>, el show de televisión de la UFC donde a los peleadores que impresionan a Dana White, actual CEO de la compañía, se ganan un contrato con la empresa de artes marciales mixtas más grande del mundo. Para esto se lo pondría ante un gran prospecto argentino llamado <b>Kevin Vallejos</b>, quien llegaba a este combate invicto 11-0. La pelea se daría el 5 de septiembre de 2023, y ambos luchadores nos darían una absoluta guerra, con Jean Silva siendo el que saldría victorioso de esta, y por ende, siendo el que se ganaría el contrato con la UFC. </p>
                    <YouTubeEmbed videoid='LqO1kPox8T8' />
                    <h2 className={styles.peleador__article__title}>Jean Silva UFC</h2>
                    <p className={styles.peleador__article__text}>De esta forma haría su debut unos pocos meses después, el 13 de enero de 2024, derrotando por TKO en el primer asalto al estadounidense <b>Westin Wilson</b>. Volvería a pelear pocos meses después, en peso pactado, debido a que nuestro protagonista no pudo dar el peso, enfrentando al canadiense <b>Charles Jourdain</b>, a quien vencería por KO en el segundo asalto. Apenas unas 2 semanas después de su último combate aceptaría una pelea en corto aviso en peso ligero ante <b>Drew Dober</b>, a quien vencería por TKO (parada médica) en la que sería elegida la pelea de la noche. </p>
                    <p className={styles.peleador__article__text}>Luego de cerrar su primer año con un 3-0 en la UFC, en 2025 aceptaría tener otros 3 combates, con el primer siendo ante el armenio <b>Melsik Baghdasaryan</b> el 21 de febrero en Seattle, a quien derrotaría por TKO en el primer asalto, ganando además el bono a la Actuación de la Noche. Se le presentaría una grandísima oportunidad en su siguiente combate, dado que enfrentaría al estadounidense <b>Bryce Mitchell</b>, quien sería el primer rival ranqueado con el que se vería cara a cara, la pelea tendría lugar el 12 de abril, donde el brasileño hizo lo que quiso con Bryce, dominándolo de principio a fin y finalmente finalizándolo en el segundo asalto con una sumisión que le ganaría otro bono a la Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='3GC_g0E143s' />
                    <p className={styles.peleador__article__text}>Finalmente para el 13 de septiembre, se le ofrecería una pelea que de ganarla, lo dejaría a las puertas de pelear por el título, teniendo que enfrentar al excontendiente del cinturón <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> en el <Link href='/eventos/fight-night-lopes-silva'>UFC Noche</Link> de ese año, en un evento que se hacía en celebración del día de la independencia de México. Lamentablemente para nuestro protagonista, en esta ocasión se enfrentaría a un rilva durísimo que le terminaría dando un baño de humildad, al vencer contundentemente a Silva, finalizándolo por TKO en el segundo asalto con un codazo giratorio, en una pelea en la que al menos hizo lo suficiente para ganar el bono a La Pelea de la Noche.</p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}