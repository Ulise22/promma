import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc306-hero.jpg'

export const metadata: Metadata = {
    title: 'UFC 306',
    description: "Tenemos un tremendo evento de UFC esta noche, por motivo del día de la independencia de México en La Esfera de Las Vegas. Con la pelea títular de peso gallo entre Sean O'Malley y Merab Dvalishvili como pelea estelar. Además, la pelea coestelar no se queda atrás, trayendonos el final de la trilogía entre la campeona mexicana Alexa Grasso y la leyenda Valentina Shevchenko.",
    openGraph: {
        title: 'UFC 306',
        description: "Tenemos un tremendo evento de UFC esta noche, por motivo del día de la independencia de México en La Esfera de Las Vegas. Con la pelea títular de peso gallo entre Sean O'Malley y Merab Dvalishvili como pelea estelar. Además, la pelea coestelar no se queda atrás, trayendonos el final de la trilogía entre la campeona mexicana Alexa Grasso y la leyenda Valentina Shevchenko.",
        url: 'https://fullmma.org/covertura-ufc/ufc306'
    }
}

export default function UFC306 () {
    return(
        <main>
            <ArticleHero title="UFC 306: ¡Valentina Shevchenko Vuelve a Ser Campeona al Derrotar Por Decisión a Alexa Grasso! ¡Esteban Ribovics Gana en un Peleón al Mexicano Daniel Zellhuber!" subtitle='¡Ronaldo Rodríguez Gana por Decisión ante Ode Osbourne! ¡Diego Lopes Derrota a Brian Ortega por Decisión Unánime! ¡Raúl Rosas Jr. Logra La Primer Victoria de la Noche en La Esfera!' image={hero} date='2024-09-15' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos un tremendo evento de UFC esta noche, por motivo del día de la independencia de México en La Esfera de Las Vegas. Con la pelea títular de peso gallo entre <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link> y <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> como pelea estelar. Además, la pelea coestelar no se queda atrás, trayendonos el final de la trilogía entre la campeona mexicana <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> y la leyenda <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>.</p>
                    <h2>Raúl Rosas Jr. Consigue una Victoria ante Aoriqileng</h2>
                    <p>En una pelea donde estando de pie en el striking estaba bastante pareja, es la lucha en el suelo lo que termina declinando la balanza del combate a favor del mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link>, quien supo ser dominante a lo largo de todo el encuentro, llevándose una merecida victoria por decisión unánime en el primer combate de la noche. </p>
                    <h2>Ronaldo Rodríguez Derrota a Ode Osbourne</h2>
                    <p>Vaya primer pelea estelear que tuvimos en el UFC 306 con la tremenda guerra entre el mexicano Ronaldo Rodríguez, que estando cerca de ser noqueado en el primer asalto supo sobrevivir y continuar dando pelea, y el jamaiquino Ode Osbourne que cerca estuvo de ser sometido en el segundo asalto.</p>
                    <p>La pelea fue bastante cerrada y finalmente los jueces se terminaron por decantar a favor del mexicano, que se llevó la victoria por decisión, en la que sin dudas es hasta ahora la pelea de la noche.</p>
                    <h2>Esteban Ribovics Derrota a Daniel Zellhuber en la Pelea de la Noche</h2>
                    <p>En lo que fue todo un espectáculo, tanto el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link> como el mexicano <b>Daniel Zellhuber</b> nos dieron una demostración de lo que es una pelea de MMA bien dada, donde parecía que cualquiera de los 2 podía caer noqueado en cualquier momento, especialmente el Daniel quien sufrió una tremenda derecha por parte de Esteban en el tercer asalto, ambos peleadores mostraron corazón, sabiendo mantenerse de pie y dar guerra hasta el final.</p>
                    <p>De esta manera, la pelea que se dió practicamente en su totalidad en el striking, se la terminó llevando el argentino por decisión dividida, en la que seguramente será elegida la pelea de la noche.</p>
                    <h2>Diego Lopes se Lleva la Pelea ante Brian Ortega</h2>
                    <p>El nacido en Brasil se lleva la victoria por decisión unánime en un desempeño impresionante, donde supo dominar al estadounidense de principio a fin, estando cerca de la finalización por nocaut en el priemr asalto. </p>
                    <p>De esta forma, con esta victoria ante el número #3 del peso pluma, <Link href='/peleadores/diego-lopes'>Diego Lopes</Link> se posiciona como un claro contendiente al título para enfrentar al ganador del combate entre <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> y <Link href='/peleadores/max-holloway'>Max Holloway</Link>.</p>
                    <h2>Alexa Grasso vs Valentina Shevchenko</h2>
                    <p>Resurge <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link> y vuelve a convertirse en campeona, luego de dominar durante los 5 asaltos en el suelo a la mexicana que nada pudo hacer ante el dominio de la peruana.</p>
                    <p>Si bien es verdad que <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> tuvo más intentos de sumisión, fue Valentina quien llevó el control de la pelea durante los 5 asaltos.</p>
                    <h2>Sean O&apos;Malley vs Merab Dvalishvili</h2>
                    <p>En Proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}