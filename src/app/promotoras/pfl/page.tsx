import Link from 'next/link'
import PromotorasHero from '../PromotorasHero'
import ngannou from '@/assets/peleadores__images/10-20/francis-ngannou/francis_ngannou.jpg'
import emiSordi from '@/assets/peleadores__images/argentinos/emiliano-sordi/Emiliano_Sordi.jpg'
import styles from '../promo.module.css'
import Image from 'next/image'

export default function PFL () {
    return(
        <main>
            <PromotorasHero title='PFL' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>PFL MMA</h2>
                    <p>PFL, por sus siglas, Professional Fighters League, es una empresa de artes marciales mixtas americana presidida por el ex peleador de MMA <b>Ray Sefo</b>, con se sede en Las Vegas. Fue creada originalmente en 2012 por el empresario e inversor <b>Donn Davis</b>, con el nombre de <b>World Series of Fighting (WSOF)</b>, después de haber firmado un contrato de emisión con NBC, quien comenzaba a transmitir eventos de MMA por tercera vez, luego de haber transmitido peleas de <b>WEC</b> y de <Link href='/promotoras/ufc'>UFC</Link>.</p>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>PFL Reglas</h2>
                    <p>PFL mantiene y utiliza las Reglas Unificadas de las Artes Marciales Mixtas implementadas por la Comisión Atlética de Nevada, por lo que sus peleas no varían mucho respecto a otras compañías, en donde sí innova PFL es en su formato.</p>
                    <p>Según ellos mismo comentan en su página oficial, son la única organización de MMA en tener un formato de temporadas, donde cada peleador individual compite en una termporada regular, con playoffs en un formato de eliminatoria, en la que el ganador de un combate pasa a la siguiente instancia contra otro peleador que viene de pasar por el mismo proceso, todo esto hasta llega a una final en la que se decide al ganador de la temporada. Una vez terminada la pelea de la final, al año siguiente se vuelve a repetir el proceso, lo que lleva a PFL a tener un campeón distinto año a año.</p>
                    <Image className={styles.promotoras__article__image} src={emiSordi} alt='' />
                    <p>Al campeón de cada año y de cada división, se le otorga 1 millon de dólares como premio por haber ganado el cinturón de PFL. Además, cada peleador para llegar a la instancia final en la que podrá competir por el cinturón, deberá pasar primero por unos &quot;4tos de final&quot;, por unas &quot;semifinales&quot; y recién ahí se enfrentarán en la final en la cual buscaran ganar el premio monetario y el cinturón de su respectiva división.</p>
                    <p>PFL se ha converitido en una de las empresas de MMA que más crece en el mundo, sumando reconocimiento y estrellas a su cartelera, como es el caso de la reciente incorporación estelar de <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link>, o la llegada del argentino campeón de <b>ARES</b> <Link href='/argentinos/laureano-staropoli'>Pepi Staropeoli</Link>. Sin mencionar que ya contaban con presencias como la del Argentino que supo ser campeón en 2018 de esta compañía, como <Link href='/argentinos/emiliano-sordi'>Emiliano Sordi</Link>.</p>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>PFL donde ver</h2>
                    <p>Por lo menos ahora, en 2023, las peleas preliminares pueden verse en ESPN+ en la mayor parte de latinoamérica, mientras con las peleas estelares, habrá que pagar el PPV para verlas. Aunque también, estos combates pueden verse completos en todos aquellos países que cuenten con DAZN, quienes además disponen de contenido original exclusivo (incluyendo reportajes, entrevistas y documentales).</p>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>PFL Francis Ngannou</h2>
                    <p>Recientemente, PFL se hizo de los servicios de <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link>, quien luego de abandonar la UFC, decidió seguir su carrera en PFL, donde se ha confimado que peleara a partir de 2024, luego de que fue su sorprendente combate en boxeo contra <b>Tyson Fury</b>.</p>
                    <Image className={styles.promotoras__article__image} src={ngannou} alt='' />
                </article>
            </section>
        </main>
    )
}