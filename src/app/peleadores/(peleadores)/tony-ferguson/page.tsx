import PeleadoresHero from '../../components/PeleadoresHero'
import ferguson from '../../../../assets/peleadores__images/tony-ferguson/ferguson.png'
import pelea from '@/assets/peleadores__images/tony-ferguson/ferguson_pelea.webp'
import cinturon from '@/assets/peleadores__images/tony-ferguson/ferguson_cinturon.webp'
import win from '@/assets/peleadores__images/tony-ferguson/ferguson_ganando.webp'
import styles from '../../components/peleador.module.css'
import Image from 'next/image'

export default function Ferguson () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ferguson} w={26} l={9} d={0} nombre='Tony Ferguson' categoria='Peso Ligero' apodo='EL CUCUY' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ferguson UFC</h2>
                    <p className={styles.peleador__article__text}>Anthony Ferguson ha peleado en UFC durante poco más de 10 años. Tiempo en el que consiguió ser campeón de The Ultimate Fighter 13 y UFC 216. Firmó con la UFC en 2011 para competir en The Ultimate Fighter de parte del equipo Lesnar. Actualmente se encuentra en el equipo Snap Down City Academy.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El peleador de mma Tony Ferguson golpeando en el rostro a otro peleador de mma en un combate de UFC' />
                    <p className={styles.peleador__article__text}>Ferguson, hizo oficial su debut en el UFC en The Ultimate Fighter 13 contra Ramsey Nijem (04/06/2011) para definir al ganador de The Ultimate Fighter 13. Ferguson ganó por KO en la primera ronda, así como también el KO de la noche por su victoria contra Nijem. </p>
                    <p className={styles.peleador__article__text}>(07/11/2017) Ferguson se enfrentó contra Kevin Lee en UFC 216 por el Campeonato Interino de Peso Ligero de UFC donde ganó por sumisión en el tercer asalto. No dudó, luego de su victoria, retar a McGregor (ganador del cinturón absoluto) sin embargo, no hubo más que especulaciones al respecto, puesto que McGregor prefirió enfrentarse a Khabib Nurmagomedov.</p>
                    <p className={styles.peleador__article__text}>Tony Ferguson habló sobre su disgusto en los salarios en UFC: “Creo que estamos siendo mal pagados. Mi valor está aquí y creo que deberían pagarme por eso. También pienso que deberíamos tener un seguro. Pienso muchas cosas… somos malditos atletas, de los mejores del mundo. Cuando leí a Dana decir el otro día que a los boxeadores se les paga en exceso yo dije: ¡Claro que no!” (04/05/2022)</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Tony Ferguson Biografía</h2>
                    <p className={styles.peleador__article__text}>Nacido un 12 de febrero de 1984, midiendo 1,80 y pesando 70kg (154 lb.), peleador estadounidense de artes marciales mixtas. Actualmente compite en la categoría de peso ligero de UFC desde 2011. Ganador de The Ultimate Fighter 13 contra Ramsey Nijem y del título Interino de Peso Ligero de UFC 216 contra Kevin Lee.</p>
                    <Image className={styles.peleador__article__image} src={cinturon} alt='El artista marcial Tony Ferguson sosteniendo su cinturon de Peso Ligero de UFC en una conferencia de prensa' />
                    <p className={styles.peleador__article__text}>Ferguson se crio en Muskegon, Míchigan. Una pequeña ciudad del medio oeste, donde su padre decide inscribirlo en los deportes a una edad temprana para que hiciese amistades y pudiese encajar en su nuevo entorno. Ganador de 12 cartas de equipo universitario, defensor de los campeones estatales de 2002 y 3 veces All-State selection en Wrestling, victorioso de la división de 152 lb. en 2002.  Ganó el All-American honors dos veces, ganando el campeonato nacional en la división de 165 lb.</p>
                    <p className={styles.peleador__article__text}>Trabajó en marketing y ventas, así como también de camarero. Una vez que su jefe del bar invitó a Ferguson a trabajar con jóvenes de MMA, se enamoró del deporte y desde entonces no ha dejado de competir.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Tony Ferguson Récord</h2>
                    <p className={styles.peleador__article__text}>Tiene un récord de 15 victorias, 12 victorias continúas, 5 nocaut, 6 sumisión y 4 por decisión. 7 derrotas, 2 nocaut, 2 sumisión y 3 por decisión. (UFC)</p>
                    <Image className={styles.peleador__article__image} src={win} alt='Tony Ferguson festejando luego de dejar KO a su rival en un combate de ufc' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Tony Ferguson Última Pelea</h2>
                    <p className={styles.peleador__article__text}>Tony Ferguson se enfrentó a Bobby Green y perdió por sumisión. El primer asalto se vio afectado tras un piquete de ojos a Ferguson, obligando a los médicos ingresar al octágono. Momentos después, la pelea continuó.</p>
                    <p className={styles.peleador__article__text}>En el segundo round, Green mantuvo a ralla a Ferguson un par de ocasiones, sin embargo, no fueron suficientes para ganarle, generando un último minuto con buenos intercambios de golpes donde Green parecía mejor parado.</p>
                    <p className={styles.peleador__article__text}>Durante un total de tres rounds, Green consiguió someter a Ferguson tras un descuido, a tan solo seis segundos de terminar la pelea.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/aYZgNn1aaaY?si=nmHsHT2Nk0EKIqlA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
} 