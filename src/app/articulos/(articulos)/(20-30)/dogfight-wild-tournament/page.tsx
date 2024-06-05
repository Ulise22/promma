import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/20-30/dogfight-hero.jpg'

export default function DogfightWildTorunament () {
    return(
        <main>
            <ArticleHero title='King Of The Streets' subtitle='El evento de pelea más loco que se puede ver gratis en youtube y que es organizado en España por Jordi Wild.' image={hero} date='05/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Dogfight</h2>
                    <h3>DWT MMA</h3>
                    <p>Dogfight Wild Tournament es un evento de combates organizado por Jordi Wild en España, con combates de todo tipo que van más alla de lo que los aficionados estamos acostumbrados a ver, según su propia web oficial: &quot;El Dogfight Wild Tournament fue una experiencia única en su género, donde se presentaron una variedad de desafíos exclusivos que mantuvieron a los espectadores al borde de sus asientos. Desde combates 2 vs 1 hasta el despiadado combate sin guantes, pasando por la intensidad de la muerte súbita, este torneo reunió a los luchadores más valientes y talentosos dispuestos a enfrentar cualquier obstáculo&quot;.</p>
                    <p>El evento se organizó por primera vez en 2023 con un total de 6 combates, entre los que destacaba por ejemplo, el 2 vs 1 entre Luis y Tomás contra Cesar Alonso. Además ya está anunciado de vuelta para febrero de 2024, también con 6 combates en la cartelera principal.</p>
                    <h2>Dogfight Wild Tournament 2023</h2>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/bm_IFXYvtpo?si=5Awlv6fkYR1FZ1lB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En su primera edición, el evento fue muy entretenido, teniendo una duración de 4 horas. Además de los combates hubo entre medias un concurso de tortazos, una banda de rock, y un show de comedia protagonizado por David Suarez.</p>
                    <p>El evento comenzó con una pelea de MMA entre Alex y Salah, que precedió a la pelea de boxeo femenina con guantillas entre Mireia y Luvi. El combate más loco de la noche fue sin duda el que vino después, un 2 vs 1 entre Luis + Tomás vs Cesar, que para asombro de muchos terminó en una victoria para Cesar, que logró noquear a uno y someter al otro.</p>
                    <p>Luego de esto, vino una pelea de boxeo en la modalidad Bare Knuckle, sin guantes, entre Edye y el argentino <Link href='/peleadores/franco-tenaglia'>Franco Tenaglia</Link>, que se extendió a los 5 asaltos, terminando en una victoria por decisión para Edye.</p>
                    <p>El siguiente combate estaba titulado David vs Goliat, dado que fue entre el brasileño Rayminson que medía 1,67 y pesaba 61 kilos, contra Roger, un hombre que medía más de 2 metros y pesaba 120 kilos. Este combate terminó ganándolo &quot;David&quot; que con una llave al brazo derecho del adversario fue capaz de someterlo.</p>
                    <p>El último combate fue uno a muerte súbita, es decir, un combate de máximo 25 minutos que sólo da un ganador si uno somete o noquea a su oponente, entre los peleadores Zdravko y Aitor. Este combate terminó con una victoria por nocaut ténico para Aitor, quien se impuso muy rápido logrando la victoria en menos de un minuto y medio, aunque parecía que Zdravko se había lesionado en medio de la pelea, teniendo que ser atendido por los médicos.</p>
                    <h2>Dogfight Wild Tournament 2024</h2>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/XnwHtzBf-c8?si=YsyCGwXOwkIFbNam" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En febrero de 2024 volvió a celebrarse el evento organizaco por Jordi Wild, que en esta ocasión volvió a contar con rock y con el show de comedia de David Suarez. Este evento contó con un total de 7 combates que cubrimos en esta misma web. <Link href='/noticias/dogfight-wild-tournament-2'>VER</Link></p>
                    <p>El evento inició con una revancha que el año pasado había sido la pelea principal, entre Aitor Gaspar contra Badnews Zdravko, en un combate a muerte súbita de 25 minutos como el año pasado.</p>
                    <p>El evento también contó con un combate 2vs2 entre el equipo rojo, conformado por <b>Alberto Rondán y Nicolás Martínez</b> y el equipo azul, conformado <b>Chiky Arroyo y Pau Peñalba</b>.</p>
                    <p>Además se había organizado un pequeño torneo inspirado en la película protagonizada por Jean-Claude Van Damme <b>Contacto Sangriendo</b>. Donde en una arena con caída al medio, peleaban en formato de eliminatorio 4 peleadores, donde el que cayera noqueado o abandonara la arena sería descalificado y avanzaría su rival a la final del torneo. Sin embargo, por lesión de uno de los finalistas, no se pudo realizar el último combate y sólo pudimos disfrutar de las semifinales del torneo.</p>
                    <p>El combate de la noche en la edición de 2024, fue el enfrentamiento de bare knuckle femenino entre la española <b>Victoria Albons</b> y la argentina <b>Yamila Sánchez</b>. QUe en un total de 5 asaltos dieron todo un espectaculo para los espectadores.</p>
                    <p>Además volvimos a ver pelear a <Link href='/peleadores/franco-tenaglia'>Franco Tenaglia</Link>, que participó en un combate sin reglas. De la edición anterior también volvió Cesar Alonso, que se enfrentó a 5 peleadores de forma consecutiva, cada uno de una disciplina distinta. </p>
                    <p>Y lo que finalmente fue el Highlight de la noche, fue la pelea de 3 vs 1 con el experimentado Eduardo Riego como protagonista. Que a base de corazón y Jiu-Jitsu logró una hazaña para regocijo de quienes lo vimos pelear.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}