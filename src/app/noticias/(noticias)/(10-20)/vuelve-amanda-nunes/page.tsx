import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/heros/10-20/amanda_nunes_vuelve-hero.jpg'

export const metadata: Metadata = {
    title: '¿Vuelve Amanda Nunes a Pelear?',
    description: 'La mejor peleadora de la historia de las MMA está retirada, pero si se mueve la división de peso gallo femenino ¿Volverá al Octagono?',
    openGraph: {
        title: '¿Vuelve Amanda Nunes a Pelear?',
        description: 'La mejor peleadora de la historia de las MMA está retirada, pero si se mueve la división de peso gallo femenino ¿Volverá al Octagono?',
        url: 'https://fullmma.org/noticias/vuelve-amanda-nunes'
    }
}

export default function VuelveAmandaNunes () {
    return(
        <main>
            <ArticleHero title='¿Amanda Nunes Vuelve a Pelear?' subtitle='La mejor peleadora de la historia de las MMA está retirada, pero ¿Volverá Amanda Nunes al Octagono?' image={hero} date='2024-06-25' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>La peleadora brasileña <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, quien seguramente entre a los libros de historia de las MMA como la mejor peleadora de la historia se retiró con un récord de 23-5 luego de defender el título de peso gallo de <Link href='/articulos/ufc'>UFC</Link> ante la mexicana <b>Irene Aldana</b> en junio de 2023, luego de recuperarlo al enfrentar a la venezolana <Link href='/mujeres/julianna-pena'>Julianna Peña</Link>, a quien derrotó por decisión unánime.</p>
                    <p>Sin embargo la posibilidad real de que vuelva a pelear en el octagono se hace cada vez más presente por un par de motivos. Para empezar, a pesar de la larga trayectoria que carga a sus espaldas, Amanda tiene una edad en la que podría seguir compitiendo a un alto nivel con sus 36 años, de hecho ella hizo declaraciones en enero de este año al ser consultada sobre un posible retorno: &quot;No lo sé, nunca lo sabemos. Soy un luchador y este es mi trabajo. Me encanta esto y no lo sé. También disfruto no estar en el gimnasio todos los días y tener una vida normal, quedarme en casa un rato y ser vago. No puedo ser vaga como luchadora, es muy difícil. <b>Pero sigo siendo sana y poderosa, inteligente, pienso como un campeón. Todavía me siento como una campeona, así que ya veremos</b>&quot;.</p>
                    <p>Luego de su retiro dejó ambos de sus cinturones vacantes, siendo el de la división de peso gallo conquistado por la estadounidense <Link href='/mujeres/raquel-pennington'>Raquel Pennington</Link>, luego de que venciera por decisión unánime a la brasileña <Link href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link> en el <Link href='/covertura-ufc/ufc297'>UFC 297</Link>. </p>
                    <p>Ahora, lo que abre la posibilidad a un posible retorno por parte de la excampeona, es el ingreso de <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link>, quien luego de ser campeona en 2 oportunidades en <b>PFL</b> se unió a la compañía de Dana White, haciendo su debut en abril de este año en el <Link href='/covertura-ufc/ufc300-prelims'>UFC 300</Link>, donde arribaría con una contundente victoria por sumisión ante la histórica <Link href='/mujeres/holly-holm'>Holly Holm</Link> que estaba ranqueada #5 al momento de realizarse la pelea. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/NT1SzkBIu0U?si=K5UiqpQAuIWSIHpr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Kayla Harrison aporta mucho a una división de peso gallo femenino que parecía estancada, no sólo por ser más mediática en comparación con el resto de luchadoras de la misma división, si no porque además es muy buena como artista marcial, lo que supondría todo un reto para una Amanda Nunes que está acostumbrada a enfrentarse a las mejores. Amanda sabe esto, por eso, luego del exitoso debut de Kayla subió un particular video a sus redes sociales reaccionando a la entrevista post-pelea de esta.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/G70PFdXHMKA?si=Yb7ssNKVhIig-J-v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Nuestra predicción es que si Kayla Harrison consigue arrebatarle el cinturón a Raquel para este año, Amanda Nunes va a salir del retiro para enfrentar a quien también debe ser considerada una de las peleadoras más importantes en la historia de las MMA. Este sería sin duda un tremendo combate femenino que serviría para que Amanda agrande aún más su legado como luchadora.</p>
                    <p>De hecho, la misma Kayla se refirió a esta posibilidad en una entrevista que dió después de su debut para <b>TMZ</b>, en la que dijo: &quot;<b>Y si Amanda quiere volver después de que yo gane el título, la recibiré con los brazos abiertos. Y no me quejaré ni refunfuñaré si se salta la fila, puede ir directo al frente. Ven aquí, cariño</b>&quot;</p>
                    <p>Además, el mismo Dana White en la conferencia de prensa posterior al <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link> confesó que estaría encantado de organizar esta super pelea femenina. Además creemos, que si finalmente Kayla Harrison termina quedándose con el cinturón de la división, una defensa ante la excampeona sería bastante más emocionante que cualquiera de las otras posibilidades que hay.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}