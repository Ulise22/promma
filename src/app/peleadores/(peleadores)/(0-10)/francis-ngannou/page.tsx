import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ngannou from '@/assets/peleadores__images/10-20/francis-ngannou/ngannou.png'
import francisNgannou from '@/assets/peleadores__images/10-20/francis-ngannou/francis_ngannou.jpg'
import ngannoutyoson from '@/assets/peleadores__images/10-20/francis-ngannou/ngannou&tyson2.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Ngannou () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ngannou} w={17} l={3} d={0} nombre='Francis Ngannou' categoria='Peso Pesado' apodo='THE PREDATOR' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou UFC</h2>
                    <p className={styles.peleador__article__text}>Francis Ngannou ha peleado en UFC durante poco más de 5 años. Tiempo en el que supo ser campeón de los Pesos Pesados,derrotando por KO a Stipe Miocic.</p>
                    <p className={styles.peleador__article__text}>Francis, hizo su debut en UFC en diciembre de 2019 contra Luis Henrique, a quien derrotó por la vía del nocaut. Durante su estancia en UFC, peleó un total de 14 combates, teniendo un record de 12-2 en la compañía. Siendo una de sus derrotas por el título contra el mismo Stipe Miocic, a quien tiempo después derrotaría para consagrarse campeón de los Pesos Pesados. Supo destacar rápido y mostrar de lo que estaba hecho, al ganar muchos de sus combates por nocaut, concretamente 10 de sus 12 victorias fueron por nocaut.</p>
                    <p className={styles.peleador__article__text}>En diversas ocaciones Francis Ngannou dijo no estar contento con lo que cobraba por pelea en la UFC, tal era su disconformidad que fue difícil convencerlo de que peleara en su último combate defendiendo el título. Una vez vencido su contrato, se sentó a negociar con <b>Dana White</b> para seguir en UFC, aunque lamentablemente no hubo acuerdo. Es por eso que después de su defensa al título Ciryl Gane en enero de 2022, Ngannou abandonó la compañía.</p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou MMA</h2>
                    <p className={styles.peleador__article__text}>En muchas ocaciones Francis Ngannou ha declarado que su sueño desde pequeño era ser boxeador, por lo que no es de extrañar que este sea su estilo principal para pelear en MMA. Pese a esto, Ngannou ha sabido pelear en el piso, ganando incluso 4 de sus peleas por sumisión.</p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou PFL</h2>
                    <p className={styles.peleador__article__text}>Después de marcharse de la UFC, y de una negociación con <b>ONE</b> que no terminó llegando a buen puerto, Francis Ngannou aceptó unirse a <b>PFL</b>. Habría aceptado cobrar un contrato de 7 cifras, además de aceptar convertirse en el presidente de PFL África.</p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou Historia</h2>
                    <p className={styles.peleador__article__text}>Francis Zavir Ngannou, nació en Camerún el 5 de septiembre de 1986. Ngannou vivió en la pobreza durante muchos años,debido a esto, durante su niñez le fue dificil tener acceso a la educación y tuvo que comenzar a trabajar en las minas con tan solo 10 años. Pese a lo desafortunado de su situación, debido a su trabajo comenzó a desarrollar una fuerza envidiable que en el futuro le serviría para noquear rivales.</p>
                    <p className={styles.peleador__article__text}>Desde bastante temprano, Francis sabía que quería ser un peleador, especialmente de boxeo, así es que, debido a su situación precaria, decidió vender su moto para comprar el equipamiento necesario para practicar boxeo y comenzar a entrenar. Una vez adulto, decide abandonar su país con el objetivo de ir a Francia en busca de una oportunidad como boxeador. Ngannou sufrió sus dificultades para llegar a donde quería, pero finalmente llega a Francia donde conoce a Fernan López, quien sería su entrenador y lo convencería de probar MMA.</p>
                    <p className={styles.peleador__article__text}>En 2013 comenzaría a pelear de forma profesional y rondaría por varias compañías hasta 2015, cuando es contratado por UFC.</p>
                    <Image className={styles.peleador__article__image} src={francisNgannou} alt='' />
                    <p className={styles.peleador__article__text}>Francis Ngannou pelearía en la UFC, donde en marzo ded 2021 se consagraría campeon de Peso Pesados en el UFC 260, al vencer por KO al entonces campeón Stipe Miocic en el segundo round. Tendría una única defensa por el título contra Ciryl Gane, a quien ganaría por decisión unánime. Posterior a su defensa abandonaría la UFC, al no llegar a un acuerdo con <b>Dana White</b> para renovar su contrato. Francis Ngannou había manifestado en diversas ocaciones que no se encontraba contento con la paga que recibía en la compañía, y este fue un tema recurrente a la hora de negociar su continuidad en la compañía.</p>
                    <p className={styles.peleador__article__text}>Actualmente se encuentra con contrato en <b>PFL</b>, donde entre otros, pelea el argentino <Link href='/peleadores/emiliano-sordi'>Emiliano Sordi</Link>. Pero todavía no ha peleado de manera oficial.</p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou Boxeo</h2>
                    <p className={styles.peleador__article__text}>No son pocas las veces en que Francis ha declarado que su sueño era ser boxeador. Talento y pegada ha emostrado tener en su carrera como peleador de MMA. Es por eso que no es de extrañar que una de las condiciones que le haya puesto Ngannou a PFL para firmar un contrato, haya sido que lo dejen pelear en este deporte.</p>
                    <p className={styles.peleador__article__text}>El muy afortunado de Francis Ngannou cumplió su sueño, no sólo porque logró organizar un combate de boxeo, sino porque además fue entrenado por el mismisimo <b>Mike Tyson</b>.</p>
                    <Image className={styles.peleador__article__image} src={ngannoutyoson} alt='' />
                    <p className={styles.peleador__article__text}>Ngannou cumplió su sueño de pelear en boxeo contra nada más y nada menos que el campeón lineal de peso pesado Tyson Fury, a quien enfrentó el 28 de octubre en Riad, Arabia Saudita.</p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou y Rápidos y Furiosos 9</h2>
                    <p className={styles.peleador__article__text}>En 2021 Francis Ngannou tuvo una breve incursión en Hollywood en las patallas grandes, al hacer un cameo en la franquicia de Rápidos y Furiosos. En dicho cameo se enfrentaría a uno de los personajes de la saga, para posteriormente ser lanzado con un paracaídas puesto, y moriría en una explosión.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/h1h9USVbA-o?si=OCEOV5nWZxGatzfu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou vs Tyson Fury</h2>
                    <p className={styles.peleador__article__text}>El 28 de octubre, Francis Ngannou se enfrentó como debutante ante el campeón Tyson Fury, en una pelea donde todos daban como favorito al campeón, y donde se esperaba algo más parecido a un combate de exhibición que a una pelea seria. Sin embargo, sorprendió a todos la seriedad con la que el camerunés se tomo la pelea, llegando incluso a llevar a Fury a la lona en un combate que se decidió por puntos, dando de forma dividida la victoria a Tyson Fury. Aunque de la exhibición que dió Ngannou, nadie se va a olvidar.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ZivaNOBf0Io?si=SR-W1vZkaSVQzKT7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou próxima pelea</h2>
                    <p className={styles.peleador__article__text}>De momento no existe nada oficial sobre lo que va a suceder en el futuro con Francis Ngannou. Aunque ya se habla de una posible revancha contra Tyson Fury en diciembre.</p>
                    <p className={styles.peleador__article__text}>Además de que se ha dicho que Ngannou retornaría a las MMA en 2024, para pelear en PFL, compañía a la que recientemente se unió.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}