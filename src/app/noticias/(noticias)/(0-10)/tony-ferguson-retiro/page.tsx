import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/noticias/0-10/ferguson_retiro.jpg'

export const metadata: Metadata = {
    title: 'Tony Ferguson Retiro',
    description: '',
    openGraph: {
        title: 'Tony Ferguson Retiro',
        description: '',
        url: 'https://fullmma.org/noticias/tony-ferguson-retiro'
    }
}

export default function FergusonRetiro () {
    return(
        <main>
            <ArticleHero title='¿Tony Ferguson Se Retira Luego de su Pelea con Michael Chiesa?' subtitle='El Cucuy se enfrentará al estadounidense Michael Chiesa en agosto, pero ¿será esta su última pelea?' image={hero} date='2024-07-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Tony Ferguson vs Michael Chiesa</h2>
                    <p>El próximo 3 de agosto, <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> y su compatriota <b>Michael Chiesa</b> se enfrentarán en el fightnight de la <Link href='/articulos/ufc'>UFC</Link> organizado en Abu Dhabi, en una pelea que llevará a Ferguson a subir de división hasta las 170lbs, en peso wélter, y por diferentes motivos creemos que esta sí puede ser la pelea del retiro del Cucuy. </p>
                    <p>La primera de las razones es porque se enfrentará a un rival que tiene muchas posibilidades de ganarle, ya que es un peleador unos cuantos años más joven, que a pesar de venir de 3 derrotas consecutivas, es alguien que jamás fue noqueado, y que a pesar de que también peleaba originalmente en la división de peso ligero, ya lleva bastante más experiencia y peleas luchando contra pesos wélter.</p>
                    <p>La segunda de las razones es porque así lo afirmó el mismo Dana White, presidente y dueño de la UFC en el anuncio de la pelea, dejando caer la idea de que esta puede ser su última pelea.</p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">The main card for <a href="https://twitter.com/hashtag/UFCAbuDhabi?src=hash&amp;ref_src=twsrc%5Etfw">#UFCAbuDhabi</a> is set!!!<a href="https://twitter.com/VisitAbuDhabi?ref_src=twsrc%5Etfw">@VisitAbuDhabi</a> | <a href="https://twitter.com/InAbuDhabi?ref_src=twsrc%5Etfw">@InAbuDhabi</a> | <a href="https://twitter.com/hashtag/InAbuDhabi?src=hash&amp;ref_src=twsrc%5Etfw">#InAbuDhabi</a> <a href="https://t.co/yUK7VdaOAc">pic.twitter.com/yUK7VdaOAc</a></p>&mdash; danawhite (@danawhite) <a href="https://twitter.com/danawhite/status/1795829069826969707?ref_src=twsrc%5Etfw">May 29, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>Tony Ferguson Retiro</h2>
                    <p>Actualmente Ferguson tiene 40 años de edad y lleva acumulada una racha de 7 derrotas consecutivas, compartiendo en el récord de la mayor cantidad de derrotas seguidas en la UFC junto a <b>BJ Penn</b>. Lo cual es particularmente llamativo si tenemos en cuenta que antes de su primer derrota de estas 7, era el peleador con la racha de victorias activa más larga en la historia de la división, con 12. </p>
                    <p>Sin embargo, lo que preocupa en el caso de Tony no es el hecho de que lleva muchas derrotas consecutivas, sino que pasó de ser un peleador imbatible al que practicamente era imposible de finalizar, a ser alguien que fue noqueado por <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> y <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>; además de ser sometido por peleadores como <Link href='/articulos/nate-diaz-historia'>Nate Diaz</Link> que luego de su combate se despidió de la compañía, y por <b>Bobby Green</b>, que es el #15 de la división. La última de estas derrotas fue contra un peleador que ni siquiera estaba ranqueado como lo es <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, quien luego de 3 asaltos lo venció por decisión unánime.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/ZuLZm6TF8OA?si=J2fqt1A2f2rmaLdX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Creemos que independientemente de cómo termine esta pelea contra Chiesa, Ferguson debería retirarse luego de este combate (en realidad creemos que se debería haber retirado mucho antes), porque alguien con la carrera de Ferguson ya no tiene nada que demostrar en este deporte, habiendo sido campeón interino de la división de peso ligero, llegando a acumular una racha de 12 victorias consecutivas, enfrentando y venciendo a todo lo que se le puso por delante, es sin dudas uno de los mejores peleadores de la historia de la UFC en la división de peso ligero. El que nunca haya sido campeón indiscutido, se debe más a cuestiones azarosas que a la habilidad del Cucuy.</p>
                    <p>En caso de perder su siguiente combate, Ferguson se converitiría en soledad, en el peleador con la mayor cantidad de derrotas consecutivas en la historia de la UFC. No tiene sentido para un peleador como él que siga manchando su legado con más peleas, y más cuando es un peleador que practicamente no tiene para ganar. A esta altura cada pelea lo expone a seguir sufriendo daño innecesario que más temprano que tarde va a afectar su salud.</p>
                    <p>Suponiendo que perdiera su siguiente pelea, ¿qué sentido tiene para un hombre de 40 años, que ya acumularía 8 derrotas seguidas seguir peleando a este nivel? Más cuando claramente se nota que su mejor nivel lo perdió hace tiempo, como es natural que le pase a todos los peleadores llegados a una cierta edad, especialmente en divisiones de peso tan livianas, como lo es la división de peso ligero.</p>
                    <p>Independientemente de que luego de su última pelea con Paddy, Tony haya dejado ver que no planeaba retirarse, no sé que tanto sentido tenga para él y su equipo seguir compitiendo a esta altura del partido. Hasta el mismo Michael Chiesa reconoce que esta pelea es entre 2 peleadores que se encuentran en el ocaso de su carrera (siendo Chiesa 4 años más joven que Ferguson).</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/wrI0Y6WVuzY?si=yg7ghGhjUORrrIn9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>A menos que se trate de una pelea mega mediática, que va a llenarle los bolsillos tanto a él como a su familia, como lo sería una hipotética pelea contra <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>, Tony Ferguson no debería aceptar volver a pelear.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}