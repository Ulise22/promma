import Link from 'next/link'
import PromotorasHero from '../PromotorasHero'
import styles from '../promo.module.css'

export default function Dogfight () {
    return(
        <main>
            <PromotorasHero title='Dogfight Wild Tournament' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>DWT MMA</h2>
                    <p className={styles.promotoras__article__text}>Dogfight Wild Tournament es un evento de combates organizado por Jordi Wild en España, con combates de todo tipo que van más alla de lo que los aficionados estamos acostumbrados a ver, según su propia web oficial: &quot;El Dogfight Wild Tournament fue una experiencia única en su género, donde se presentaron una variedad de desafíos exclusivos que mantuvieron a los espectadores al borde de sus asientos. Desde combates 2 vs 1 hasta el despiadado combate sin guantes, pasando por la intensidad de la muerte súbita, este torneo reunió a los luchadores más valientes y talentosos dispuestos a enfrentar cualquier obstáculo&quot;.</p>
                    <p className={styles.promotoras__article__text}>El evento se organizó por primera vez en 2023 con un total de 6 combates, entre los que destacaba por ejemplo, el 2 vs 1 entre Luis y Tomás contra Cesar Alonso. Además ya está anunciado de vuelta para febrero de 2024, también con 6 combates en la cartelera principal.</p>
                    <h2 className={styles.promotoras__article__title}>Dogfight Wild Tournament 2023</h2>
                    <iframe className={styles.promotoras__article__video} width="560" height="315" src="https://www.youtube.com/embed/bm_IFXYvtpo?si=oL1F0FF2j68xawxh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.promotoras__article__text}>En su primera edición, el evento fue muy entretenido, teniendo una duración de 4 horas. Además de los combates hubo entre medias un concurso de tortazos, una banda de rock, y un show de comedia protagonizado por David Suarez. </p>
                    <p className={styles.promotoras__article__text}>El evento comenzó con una pelea de MMA entre Alex y Salah, que precedió a la pelea de boxeo femenina con guantillas entre Mireia y Luvi. El combate más loco de la noche fue sin duda el que vino después, un 2 vs 1 entre Luis + Tomás vs Cesar, que para asombro de muchos terminó en una victoria para Cesar, que logró noquear a uno y someter al otro.</p>
                    <p className={styles.promotoras__article__text}>Luego de esto, vino una pelea de boxeo en la modalidad <b>Bare Knuckle</b>, sin guantes, entre Edye y el argentino <Link href='/argentinos/franco-tenaglia'>Franco Tenaglia</Link>, que se extendió a los 5 asaltos, terminando en una victoria por decisión para Edye.</p>
                    <p className={styles.promotoras__article__text}>El siguiente combate estaba titulado <b>David vs Goliat</b>, dado que fue entre el brasileño Rayminson que medía 1,67 y pesaba 61 kilos, contra Roger, un hombre que medía más de 2 metros y pesaba 120 kilos. Este combate terminó ganándolo &quot;David&quot; que con una llave al brazo derecho del adversario fue capaz de someterlo. </p>
                    <p className={styles.promotoras__article__text}>El último combate fue uno a muerte súbita, es decir, un combate de máximo 25 minutos que sólo da un ganador si uno somete o noquea a su oponente, entre los peleadores Zdravko y Aitor. Este combate terminó con una victoria por nocaut ténico para Aitor, quien se impuso muy rápido logrando la victoria en menos de un minuto y medio, aunque parecía que Zdravko se había lesionado en medio de la pelea, teniendo que ser atendido por los médicos.</p>
                    <h2 className={styles.promotoras__article__title}>Dogfight Wild Tournament 2024</h2>
                    <p className={styles.promotoras__article__text}>Este evento vuelve este año, anunciado oficialmente para febrero por Jordi Wild. Con gratas sorpresas ya anunciadas, como lo es la vuelta de Cesar Alonso, esta vez para pelear contra 5 peleadores distintos, que tengan estilos de pelea poco usados en MMA, y que como cree Cesar, no son útiles en un combate real, este combate no se va a realizar contra los 5 al mismo tiempo, sino que irán entrando a medida que Cesar vaya ganando. Además de que se anunció una revancha entre Zdravko y Aitor. El que también vuelve del evento anterior es <Link href='/argentinos/franco-tenaglia'>Franco Tenaglia</Link>, para pelear otra vez en la modalidad Bare Knuckle pero esta vez en MMA, en un combate no rules donde el que noquee o someta al rival se llevara la victoria. </p>
                    <p className={styles.promotoras__article__text}>Además de estas cosas, Jordi anunció que como prometió en el evento anterior, en esta ocasión habrá un combate de 3 vs 1. También anunció que entre medio de los combates principales, habría un torneo de peleas con un escenario similar al de la película de Jean-Claude Van Damme, <b>Contacto Sangriento</b>.</p>
                    <iframe className={styles.promotoras__article__video} width="560" height="315" src="https://www.youtube.com/embed/eEg7ymPXCZQ?si=9GYxow_GgTrOk37g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}