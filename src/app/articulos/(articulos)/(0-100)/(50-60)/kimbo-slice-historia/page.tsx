import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/kimbo_slice.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Kimbo Slice Historia',
    description: 'Kimbo Slice es uno de esos peleadores, que pese a su corta carrera en las MMA, con sólo 8 peleas profesionales, supo ganarse el cariño de los fans y quedar en la memoria de los fanáticos más intensos de las artes marciales mixtas.',
    openGraph: {
        title: 'Kimbo Slice Historia',
        description: 'Kimbo Slice es uno de esos peleadores, que pese a su corta carrera en las MMA, con sólo 8 peleas profesionales, supo ganarse el cariño de los fans y quedar en la memoria de los fanáticos más intensos de las artes marciales mixtas.',
        url: 'https://fullmma.org/articulos/kimbo-slice-historia'
    }
}

export default function KimboSlice () {
    return(
        <main>
            <ArticleHero title='Kimbo Slice: El rey de los luchadores web' subtitle='La historia de Kevin Ferguson, mejor conocido como Kimbo Slice, y su historia de superación que lo llevó de ser guardia de seguridad de un club nocturno, a ser un luchador profesional.' image={hero} date='2024-09-05' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Kimbo Slice es uno de esos peleadores, que pese a su corta carrera en las MMA, con sólo 8 peleas profesionales, supo ganarse el cariño de los fans y quedar en la memoria de los fanáticos más intensos de las artes marciales mixtas. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/y6CLa0u7i_U?si=1ZOGVF3V9gNHg9ZN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Kevin Ferguson nació el 8 de febrero de 1974 en las Bahamas. Se mudó a los Estados Unidos, en el Estado de Florida, siendo un niño junto a sus 2 hermanos y su madre con quienes creció. Ya a sus 13 años tuvo una pelea callejera (algo que en futuro se volvería recurrente) mientras intentaba defender a uno de sus amigos.</p>
                    <p>Siendo un adulto joven comenzó a trabajar como guardia de seguridad para un club nocturno de baile de mesa. Abandonaría este trabajo cuando un amigo de la secundaria le ofreció trabajar como chofer de limusina y guadaespaldas de la empresa <b>Reality Kings</b>, que se especializa en la producción de contenido para adultos en Miami. Con esta compañía mantuvo estrechos vínculos, siendo conocido en el ambiente con el apodo de <b>Team Kimbo</b>.</p>
                    <p>En el año 2003 comenzó a tener peleas callejeras no autorizadas, según él mismo cuenta, para poner un plato de comida en la mesa. Sus peleas se transmitían en sitios web para adultos y en Youtube. Fue durante esta época que se ganó los 2 apodos con los que sería conocido en el futuro: en la primera pelea grabada que tuvo, dejó un gran corte en el ojo derecho de su rival, que llevó a los fans a que apodaran como <b>Slice</b> (&quot;Raja&quot; o &quot;corte&quot; en español), que combinado con su anterior apodo <b>Kimbo</b>, quedaría como <b>Kimbo Slice</b>. Además, debido al éxito que generaron sus peleas callejeras en internet, la revista <b>Rolling Stone</b> lo bautizarían con el apodo <b>El rey de los peleadores web</b>.</p>
                    <p>En el 2007 optaría por darle un giro menos turbio a su vida, comenzando una carrera profesional en las MMA, eligiendo como su entrenador al excamepón de <Link href='/articulos/ufc'>UFC</Link> y pionero de las artes marciales mixtas, <b>Bas Rutten</b>.</p>
                    <p>Haría su debut profesional el 10 de noviembre en la promotora <b>EliteXC</b> ante el estadounidense <b>Bo Cantrell</b>, logrando una victoria por sumisión a los 19 segundos del combate. Además, en su segunda pelea, que tendría lugar el 16 de febrero de 2008 ante <b>Tank Abbott</b>, conseguiría una victoria por KO a los 43 segundos de iniciado el combate.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/g1jnCzo84G0?si=230pOcszrOi2xX80" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Durante este tiempo también comenzaría a incursionar en el mundo del cine, teniendo su primer papel en la película de la serie de televisión <b>Drake & Josh</b>, en el especial navideño que se estrenó en el año 2008. </p>
                    <p>Además interpretaría a un recluso en una película llamada <b>Blood and Bone</b> (traducida como <b>Puños Mortales</b> en español), película que sería protagonizada por <b>Michael Jai White</b>, y que, irónicamente trataría de un vagabundo que se dedica a competir en las peleas ilegales en Los Ángeles.</p>
                    <p>Kimbo tendría 2 peleas más en EliteXC, ganando el primer de estos por TKO en el tercer asalt ante el británico <b>James Thompson</b>, y perdiendo su siguiente pelea ante el estadounidense <b>Seth Patruzeilli</b> pr KO en el primer asalto. </p>
                    <p>Pese a esta última derrota, lograría cumplir el sueño de muchos peleadores de MMA, participar en el <b>TUF</b>, el reality de televisión de la UFC, en la edición de pesos pesados. En dicha edición perdería su primer pelea ante quien sería el ganador del certamen, <b>Roy Nelson</b>, vía TKO en el segundo asalto, en junio de 2009.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/0UTuXmrrEYA?si=Sqr8N9o42uIt45Uf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Luego de su aparición en <b>TUF</b>, tendría sólo 2 peleas en la UFC. Logrando hacerse con la victoria en la primera por decisión unánime ante <b>Houston Alexander</b> en diciembre de 2009, en lo que es la única pelea de su carrera que se llevó a la decisión de los jueces. Y perdiendo por TKO su segunda pelea ante <b>Matt Mitrione</b>, en el segundo asalto en el UFC 113, organizado en mayo de 2010. Pese a que luego de aquella derrota, el presidente de la UFC, Dana White, afirmó que seguramente aquella fue la última pelea de Kimbo en la compañía, aún así tenía muchas palabras de aprecio para el nacido en las Bahamas: <b>&quot;(Kimbo) Me impresionó como ser humano y como peleador, me cayeron muy bien él y las personas que lo representan. Me alegra haber conocido a Kimbo Slice&quot;</b>.</p>
                    <p>Luego de quedar libre de la UFC, Kimbo prestó atención a todas las oportunidades que se le presentaron, intentando negociar un contrato con la promotora <b>Strikeforce</b>, pero sin lograr firmar nada debido a que no se pusieron de acuerdo con el salario. Debido a esto, Slice anunciaría su retirada de las MMA en agosto de 2010 para tomar las oportunidades en el mundo del boxeo que se le fueron apareciendo. </p>
                    <p>En boxeo pelearía entre los años 2011 y 2013, un total de 7 combates, ganando todos y cada uno de ellos. De sus 7 victorias, 6 fueron por la vía del nocaut y sólo 1 fue por decisión (unánime).</p>
                    <p>Durante gran parte del 2013 y todo el 2014, tanto en el boxeo como en las MMA, Slice se mantuvo inactivo sin tomar ninguna pelea. Siendo un agente libre, <b>BELLATOR</b> intentó contratarlo durante el año 2014, llegando a un acuerdo para varias peleas. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/I1ZYRqIuOXA?si=5dUyfzcV6HYglB96" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Kimbo tendría su primer combate en junio de 2010, más de 5 años después de su retiro de las MMA, ante el estadounidense <b>Ken Shamrock</b>, a quien conseguiría noquear a los 2 minutos del primer asalto. Su siguiente combate lo tendría unos meses después, en febrero de 2016 ante <b>Dhafir Harris</b>, logrando noquear a su rival en el tercer asalto. Sin embargo esta última pelea sería declarada sin resultado tiempo después, luego de que se diera a conocer que Kimbo había consumido sustancias prohibidas anabolizantes.</p>
                    <h2>Fallecimiento de Kimbo Slice</h2>
                    <p>El 5 de junio de 2016 se dió a conocer que Kimbo Slice había sido internado en el hospital debido a una insuficiencia cardíaca, falleciedo al día siguiente, a sus 42 años. Apenas 4 meses después de su última pelea.</p>
                    <p>El CEO de Bellator, <b>Scott Coker</b>, dijo al respecto: <b>&quot;Estamos sorprendidos y tristes por la devastadora perdida de Kimbo Slice, un amado miembro de la familia Bellator&quot;</b>.</p>
                    <h2>Kimbo Slice Hijos</h2>
                    <p>Kimbo era un padre soltero con 6 hijos: sus 3 hijos varones, Kevin Jr. Kevin II y Kevlar; y sus 3 hijas mujeres Kevina, Kierra y Kasandra. Además tenía un nieto, Kevin III.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dud5bWvVkhg?si=i2HAshmsKbNQ3uCZ&amp;start=91" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su hijo mayor, Kevin Ferguson Jr. al igual que su padre era peleador de MMA, que competía en Bellator. Ostentando un récord de 3-3 (1), con 2 victorias por sumisión y 1 por nocaut, y con una derrota por sumisión, 1 por nocaut, y 1 por decisión.</p>
                    <h2>Kimbo Slice récord</h2>
                    <p>Kimbo Slice terminó su carrera con un récord de 5-2 (1). Siendo 3 de sus victorias por nocaut, 1 por sumisión y 1 por decisión. Mientras que sus 2 derrotas fueron por la vía del nocaut. Además, tiene una pelea contra <b>Dhafir Harris</b> que originalmente había ganador por nocaut, pero que fue declarada sin resultado luego de que Kimbo dió positivo por nandrolona, una sustancia anabolizante. </p>
                    <p>Además tuvo una carrera profesional en el mundo del boxeo donde se retiró con un récord de 7-0. Siendo 6 de estas victorias por la vía del nocaut.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}