import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/articulos/heros/20-30/kravmaga_hero.jpg'
import Link from 'next/link'

export default function KravMagaUtility () {
    return(
        <main>
            <ArticleHero title='¿Sirve el Krav Maga en un Combate Real?' subtitle='La razón por la que muchos peleadores profesionales consideran que el Krav Maga y otro tipo de estilos de defensa personal NO sirven para una pelea callejera y para las MMA.' image={hero} date='30/04/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Con el paso del tiempo pude ver como muchos peleadores de artes marciales profesionales han expresado que el Krav Maga, y otros estilos de defensa personal, a la hora de la verdad no son muy útiles en situaciones reales, o que contra un peleador experimentado de MMA, incluso uno amateur, no tienen opciones reales de ganar en caso de enfrentarse.</p>
                    <p>Una de las figuras más importantes que se expresó sobre este tema es el actual campeón de peso ligero de la UFC, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, quien con respeto, dejó en claro que para él, por muchos años que haya practicado x persona un arte como el Krav Maga, no tiene oportunidad contra un luchador de MMA, y que de hecho su poca utilidad en un combate real es la razón por la que no tenemos especialistas en Krav Maga o algún arte parecido compitiendo en la UFC, o en alguna otra compañía de MMA, a pesar de que cada uno es libre de utilizar los estilos y las artes marciales que prefiera.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/8EpVGYoTJuk?si=7kgtwO6_rt1zEz-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Otro peleador que se expresó respecto al tema, es el español <b>Cesar Alonso</b>, quien en su momento se enfrentó a 2 peleadores al mismo tiempo en <Link href='/promotoras/dogfight-wild-tournament'>Dogfight Wild Tournament</Link>, entre ellos uno que afirmaba haber pasado 9 años entrenando y practicando Krav Maga. Sin embargo a la hora de la verdad, Cesar fue capaz de noquear a este peleador, y de someter a su compañero, demostrando que, un peleador lo suficientemente competente y con la suficiente experiencia puede hacer frente a un reto como el que afrontó Cesar, y que el peleador experto en Krav Maga, aún teniendo un compañero peleando de su lado, no es capaz de derrotar a un artista marcial como el español.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/EVYt3OLOrmU?si=BddiFlY3EHbM6Ai6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Sin embargo, la explicación de a qué se debe esto la encontré en un youtuber llamado <b>Alberto Barberá</b>, quien cuenta con experiencia tanto en Krav Maga como en otras artes marciales, y que explicó que en la defensa personal, te preparan y te hacen entrenar para desenvolverte en situaciones muy específicas, que en un combate real, donde es todo más caótico, es complicado llevar a la práctica, dado que si tu rival no te ataca de la forma en que te estabas preparando, no puedes replicar lo aprendido. Mientras que en otras artes marciales, como el boxeo, al hacer sparrings te ves expuesto a situaciones más caóticas, en donde aprendes y desarrollas la habilidad de improvisar, lo que es más parecido a una pelea real, y por lo tanto es más útil a la hora de llevarlo a la práctica.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/rCzT4TElnDg?si=fzce0f7PjXuuXaY8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}