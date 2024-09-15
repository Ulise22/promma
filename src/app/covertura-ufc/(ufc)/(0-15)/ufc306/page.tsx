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
            <ArticleHero title="UFC 306: ¡Raúl Rosas Jr. Logra La Primer Victoria de la Noche en La Esfera!" subtitle='Noche de UFC en La Esfera en Las Vegas por el Día de la Independencia de México' image={hero} date='2024-09-15' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos un tremendo evento de UFC esta noche, por motivo del día de la independencia de México en La Esfera de Las Vegas. Con la pelea títular de peso gallo entre <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link> y <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> como pelea estelar. Además, la pelea coestelar no se queda atrás, trayendonos el final de la trilogía entre la campeona mexicana <Link href='/mujeres/alexa-grasso'>Alexa Grasso</Link> y la leyenda <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>.</p>
                    <h2>Raúl Rosas Jr. Consigue una Victoria ante Aoriqileng</h2>
                    <p>En una pelea donde estando de pie en el striking estaba bastante pareja, es la lucha en el suelo lo que termina declinando la balanza del combate a favor del mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link>, quien supo ser dominante a lo largo de todo el encuentro, llevándose una merecida victoria por decisión unánime en el primer combate de la noche. </p>
                    <h2>Ronaldo Rodríguez Derrota a Ode Osbourne</h2>
                    <p>Vaya primer pelea estelear que tuvimos en el UFC 306 con la tremenda guerra entre el mexicano Ronaldo Rodríguez, que estando cerca de ser noqueado en el primer asalto supo sobrevivir y continuar dando pelea, y el jamaiquino Ode Osbourne que cerca estuvo de ser sometido en el segundo asalto.</p>
                    <p>La pelea fue bastante cerrada y finalmente los jueces se terminaron por decantar a favor del mexicano, que se llevó la victoria por decisión, en la que sin dudas es hasta ahora la pelea de la noche.</p>
                    <h2>Daniel Zellhuber vs Esteban Ribovics</h2>
                    <p>En Proceso...</p>
                    <h2>Brian Ortega vs Diego Lopes</h2>
                    <p>En Proceso...</p>
                    <h2>Alexa Grasso vs Valentina Shevchenko</h2>
                    <p>En Proceso...</p>
                    <h2>Sean O&apos;Malley vs Merab Dvalishvili</h2>
                    <p>En Proceso...</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}