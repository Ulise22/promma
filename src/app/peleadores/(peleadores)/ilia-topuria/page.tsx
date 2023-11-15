import Image from "next/image";
import topuria from '../../../../assets/peleadores__images/ilia-topuria/topuria.png'
import ilia from '../../../../assets/peleadores__images/ilia-topuria/ilia-topuria.jpg'
import styles from '../../components/peleador.module.css'
import PeleadoresHero from "../../components/PeleadoresHero";
import Link from "next/link";

export default function Illia () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={topuria} w={14} l={0} d={0} nombre='Ilia Topuria' categoria='Peso pluma (featherweight)' apodo='El Matador' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ilia Topuria ufc</h2>
                    <p className={styles.peleador__article__text}>Ilia Topuria es un luchador de nacionalidad georgiana y española de ufc que compite en la categoría de Peso Pluma. Pelea a nivel profesional como luchador de MMA desde 2015, cuando comenzó a competir en promotoras locales de España.</p>
                    <p className={styles.peleador__article__text}>El 11 de octubre de 2020 hizo su debut en la UFC, peleando como reemplazo de <b>Seung Woo Choi</b> contra <b>Youssef Zalal</b>. Y pese al corto aviso que tuvo para pelear, logró ganar la pelea por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Rápidamente después de su primera pelea, logró destacarse al ganar 2 combates por KO en el primer asalto contra <b>Damon Jackson</b> y <b>Ryan Hall</b>, y al ganar otra vez por KO en el segundo asalto contra <b>Jai Herbert</b>. Estás destacadas actuaciones lo llevaron a pelear en diciembre de 2022 contra <b>Bryce Mitchell</b>, a quien derrotó en el segundo asalto gracias a una esplendida sumisión, acabando así con la racha de 6 victorias consecutivas que había cosechado el peleador americano.</p>
                    <Image className={styles.peleador__article__image} src={ilia} alt="Ilia topuria festejando una victoria de ufc despues de combatir contra Bryce Mitchel" />
                    <p className={styles.peleador__article__text}>En su última pelea en junio de 2023, venció por decisión unánime a Josh Emmet, logrando de esta forma para muchos, ser merecedor de una pelea por el título contra <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link></p>
                </article>
                <article>
                    <h2 className={styles.peleador__article__title}>Ilia Topuria ranking</h2>
                    <p className={styles.peleador__article__text}>Actualmente se encuentra ranqueado 5to en la división de Peso Pluma. Ilia mantiene un record de 14 victorias sin ninguna derrota y ningún empate. De las cuales 4 fueron por la vía del nocaut, 8 por la sumisión y 2 por decisión.</p>
                    <p className={styles.peleador__article__text}>Ilia venía de estar ranqueado en la 9na posición después de someter a Bryce Mitchell, y logró ganarse ese 5to puesto después de ganar por desición unánime contra Josh Emmet.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Última pelea de Topuria</h2>
                    <p className={styles.peleador__article__text}>Su última pelea fue contra Josh Emmet, que en el momento de la pelea estaba ranqueado 5to en la división y que venía de una derrota contra Yair Rodriguez. Por su lado, Ilia venía de vencer a Bryce Mitchell por sumisión en el 2do round.</p>
                    <p className={styles.peleador__article__text}>Había una gran expectativa sobre este combate, ya que Ilia Topuria tendría la oportunidad de mostrarse y ganarse una oportunidad por el título ante un top5 de la división, además de que por primera vez protagonizaría la cartelera estelar de UFC.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/MswUiwOftB4?si=HujlFHYjgG8fR2kq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}