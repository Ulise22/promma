import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/20-30/dariush_pelea2025.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: '',
    description: "",
    openGraph: {
        title: '',
        description: "",
        url: 'https://fullmma.org/noticias/beneil-dariush-proxima-pelea-2025'
    }
}

export default function DariushPelea2025 () {
    return(
        <main>
            <ArticleHero title='Próxima Pelea de Beneil Dariush Después del UFC 311' subtitle="Luego de una caótica serie de eventos, con su pelea siendo cancelada, nos preguntamos: ¿Contra quien va a pelear Beneil Dariush Después del UFC 311? " image={hero} date='2025-01-21' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Recientemente se celebró el <Link href='/covertura-ufc/ufc311'>UFC 311</Link> en el Intuit Dome, en California. Evento donde se suponía que veríamos pelear a <b>Beneil Dariush</b> contra <Link href='/peleadores/renato-moicano'>Renato Moicano</Link> en la cartelera estelear. Lamentablemente la UFC tuvo que reorganizar toda la cartelera debido a una baja de último momento, cuando el armenio <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, quien debía enfrentar en una pelea por el título de peso ligero a <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, abandonó la cartelera por una lesión que le impidió competir. En su lugar, para reemplazarlo, entró Renato Moicano a pelear contra Makhachev, dejando a Beneil Dariush sin rival y por tanto cancelando su pelea. </p>
                    <p>Que Dariush no iba a terminar peleando fue anunciado por él mismo en un post de instagram, donde escribió lo siguiente: <b>&quot;Familia y amigos, desafortunadamente no estaré peleando mañana. Debido a los cambios en la cartelera me han dejado afuera. Agradezco a la UFC y Dana White por darme la oportunidad de pelear en mi casa y por cuidar de mí aunque no esté peleando. Creo que Dios tiene algo mejor para mi y voy a esperar con fé como se desarrolla&quot;.</b></p>
                    <p>Según reveló el mismo peleador, la UFC tuvo un buen gesto con él, al pagarle de igual forma como si se hubiera presentado a la pelea, y como si hubiera ganado la misma, motivo por el que se mostró tan agradecido con la compañía y con Dana White. </p>
                    <p>Sin embargo, muchos aún tenemos la esperanza de verlo pelear este año, luego de que se tomara todo el 2024 inactivo, después de sufrir 2 dolorosas derrotas consecutivas en 2023 ante <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> y ante Arman Tsarukyan. Por esta razón son esperanzadoras las palabras de nuestro protagonista, quien afirmó que la UFC le prometió una buena pelea, posiblemente ante un rival ranqueado por encima de él. </p>
                    <p>Si esto es así, y efectivamente Beneil Dariush va a estar peleando en el futuro cercano (en abril, ¿quizás?) ante un rival ranqueado por encima de él, veo 4 posibilidades, ordenadas de menos a más probables: <Link href='/peleadores/max-holloway'>Max Holloway</Link>, <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, <b>Mateusz Gamrot</b>, y <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>. </p>
                    <h2>¿Beneil Dariush vs Max Holloway en 2025?</h2>
                    <p>Esta es de las peleas que veo menos probable, principalmente por las dinámicas en la que vienen ambos peleadores. Porque pese a que Max viene de ser noqueado por <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>, lo cierto que es que su última pelea en peso ligero fue aquella mítica victoria por KO ante <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, además de que antes de eso venía de 2 victorias consecutivas. Mientras que como ya mencionamos, Dariush viene de 2 derrotas consecutivas por nocaut, por lo que me soprendería que este sea el camino que tome la UFC. </p>
                    <h2>¿Dustin Poirier vs Beneil Dariush 2025?</h2>
                    <p>Siendo completamente honesto no tengo idea de que tan probable es esta pelea. Lo que sabemos es que <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> ha hablado en redes sociales en incontables ocasiones que está a 1 pelea de retirarse, que solamente le queda un cartucho por usar, y que por tanto uno cree que se le eligirá una pelea especial al #4 de la división de peso ligero. Ambos luchadores vienen de una derrota por finalización, y no están tan alejados en los rankings, por lo que sin dudas esta pelea es una posibilidad real, pero creo que depende mucho más del deseo de Dustin Poirier que de otra cosa, ya que seguramente sea él quien elija con que pelea retirarse. </p>
                    <h2>¿Beneil Dariush vs Mateusz Gamrot en 2025?</h2>
                    <p>Cuando Beneil Dariush habló de las peleas que le gustaría tener, de los 4 candidatos que yo dí, este es el único que no mencionó, pero de igual forma lo veo bastante probable.</p>
                    <p>Ambos luchadores vienen de una derrota, en el caso de Gamrot ante Dan Hooker en el <Link href='/covertura-ufc/ufc305'>UFC 305</Link>. Además ya se enfrentaron en el pasado, con Dariush llevándose la victoria por decisión unánime en octubre de 2022, por lo que este hipotético combate puede tener todos los condimentos que una revancha puede tener. Además, el mismo Gamrot pidió esta pelea, retando a Benil Darish, al publicar el siguiente Tweet: <b>&quot;Me acabo de bajar del avión en Florida y veo estas noticias... Dariush, dame un par de semanas y volvamos a bailar otra vez. &quot;</b>
                    </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">I just got off the plane in Florida and I see this news... LFG <a href="https://twitter.com/moicanoufc?ref_src=twsrc%5Etfw">@moicanoufc</a> 🔥<a href="https://twitter.com/beneildariush?ref_src=twsrc%5Etfw">@beneildariush</a> give me a few weeks and let&#39;s dance again 🫡</p>&mdash; Mateusz Gamrot (@gamer_mma) <a href="https://twitter.com/gamer_mma/status/1880378837550420088?ref_src=twsrc%5Etfw">January 17, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>¿Michael Chandler vs Beneil Dariush en 2025?</h2>
                    <p>Esta es en mi opinión, la opción más probable para Dariush, un posible enfrentamiento en abril contra <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>. Dado que ambos luchadores vienen de rachas similares, perdiendo sus últimas 2 peleas, pero manteniéndose en el top 10, en busca de una victoria que los vuelva a catapultar como contendientes al título.                     </p>
                    <p>Aunque Chandler lleva años ya esperando a <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, lo cierto es que dudo que el irlandés vuelva a pelear, y creo que Chandler es consciente de esto, por lo que seguramente está abierto a pelear con otro luchador. Además, esta pelea es lo bastante pareja como para generar interés en verla, además de ser una increíble posibilidad para Dariush de conseguir una victoria que vuelva a elevar su estatus, ante un luchador mediático y un excelente peleador como lo es Michael Chandler. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}