import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ponzinibbio from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio.png'
import santiagoArgentina from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio-argentina.jpg'
import pelea from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio-peleando.jpg'
import santiago_ponzinibbio from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Santiago Ponzinibbio',
    description: 'Santiago Ponzinibbio pelea en la UFC desde noviembre de 2013. Y es una de las presencias argentinas más destacadas de ufc, trás haber estado muy cerca del top5 de su categoría en el Peso Welter a fines de 2018, y trás haber traído un evento de ufc a nuestro país en Buenos Aires en ese mismo año, el primero que se organizo en Argentina por esta compañía.',
    openGraph: {
        title: 'Santiago Ponzinibbio',
        description: 'Santiago Ponzinibbio pelea en la UFC desde noviembre de 2013. Y es una de las presencias argentinas más destacadas de ufc, trás haber estado muy cerca del top5 de su categoría en el Peso Welter a fines de 2018, y trás haber traído un evento de ufc a nuestro país en Buenos Aires en ese mismo año, el primero que se organizo en Argentina por esta compañía.',
        url: 'https://fullmma.org/peleadores/santiago-ponzinibbio'
    }
}

export default function Ponzinibbio () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ponzinibbio} w={29} l={8} d={0} categoria='Peso Welter' nombre='Santiago Ponzinibbio' apodo='ARGENTINE DAGGER' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Santiago Ponzinibbio UFC</h2>
                    <p className={styles.peleador__article__text}>Santiago Ponzinibbio pelea en la <Link href='/articulos/ufc'>UFC</Link> desde noviembre de 2013. Y es una de las presencias argentinas más destacadas de ufc, trás haber estado muy cerca del top5 de su categoría en el Peso Welter a fines de 2018, y trás haber traído un evento de ufc a nuestro país en Buenos Aires en ese mismo año, el primero que se organizo en Argentina por esta compañía.</p>
                    <p className={styles.peleador__article__text}>Desde que en noviembre de 2013 se unió a esta compañía, Ponzinibbio peleó un total de 18 combates, de los cuales ganó 11 y perdió 7, siendo 6 de estas victorias por la vía del nocaut y el resto por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Ponzinibbio MMA</h2>
                    <p className={styles.peleador__article__text}>Santiago Ponzinbbio tiene una extensa carrera anterior a su debut en UFC, peleó 18 combates en competiciones sudamericanas en las cuales sólo perdió una vez contra el brasileño Leonardo Mafra, y donde obtuvo todas sus 6 victorias por sumisión, además de sus muchos ko.</p>
                    <p className={styles.peleador__article__text}>Ponzinibbio tiene un estilo principalmente de boxeo en sus peleas, aunque también es cinturón negro en Jiu Jitsu brasileño</p>
                    <h2 className={styles.peleador__article__title}>Ponzinibbio record</h2>
                    <p className={styles.peleador__article__text}>Actualmente Santiago Ponzinibbio mantiene un record de 29-8-0 (29 victorias, 7 derrotas y 0 empates). Siendo 16 de sus victorias por nocaut, 6 por sumisión y 7 por decisión. Y sus derrotas siendo 4 por nocaut y 4 por decisión.</p>
                    <Image className={styles.peleador__article__image} src={santiagoArgentina} alt='El peleador de mma Santiago Ponzinibbio, sosteniendo la bandera Argentina sentado en la pared de octagono después de un combate de ufc' />
                    <h2 className={styles.peleador__article__title}>Santiago Ponzinibbio enfermedad</h2>
                    <p className={styles.peleador__article__text}>Después de su victoria en Argentina contra Magny, Ponzinibbio estaba en el pico de su carrera y parecía bastante encaminado a tener una oportunidad por el título. Sin embargo, las cosas se torcieron cuando según él mismo contó, comenzó a sufrir una infección de sangre dentro del cuerpo. La infección llegó a la sangre y tuvo dos tipos diferentes de bacterias. Debido a esto comenzó un tratamiento que desafortunadamente traería efectos secundarios.</p>
                    <p className={styles.peleador__article__text}>Los medicamentos que tomó le hicieron sufrir fiebre y le hicieron perder peso y por tanto musculatura. Esto lo llevó a estar hospitalizado 3 meses. Resultó ser que su infección estaba en los huesos, y esto llevó a que sus doctores le advirtieran de lo peligroso de seguir peleando.</p>
                    <p className={styles.peleador__article__text}>Afortunadamente, luego de meses de de reahibilitación, Santiago Ponzinibbio fue capaz de reponerse y de dar ejemplo de resiliencia. Luego de 2 años de batallar con sus problemas de salud, en enero de 2021 volvió al octagono y actualmente se encuentra activo peleando en UFC.</p>
                    <h2 className={styles.peleador__article__title}>Santiago Ponzinibbio biografía</h2>
                    <p className={styles.peleador__article__text}>Santiago Ponzinibbio nació en La Plata, Bs As, Argentina, el 26 de septiembre de 1986. Comenzó a entrenar Kickboxing cuando tenía 13 años. Desde joven estuvo interesado en las MMA, pero al no ser un deporte tan popular en su país, no había muchos gimnasios locales donde pudiera entrenar. Esto lo llevó a viajar e irse a vivir en Brasil, donde se dedicó a hacer &quot;changas&quot;, para vivir mientras entreneba en diferentes gimnasios para finalmente poder pelear.</p>
                    <p className={styles.peleador__article__text}>Su sacrificio y apuesta dió frutos, puesto que en 2008 pudo comenzar a pelear de forma profesional en promociones regionales. En marzo de 2013, Santiago Ponzinibbio tuvo la oportunidad de pelear The Ultimate Fighter(TUF): Brazil 2, donde destacó derrotando por TKO a Thiago Silva en el primer asalto, a Marcos Santos por TKO también, y a Cleiton Duarte por decisión unánime. Sin embargo, luego de derrotar Leonardo Santos por decisión unánime, se lesionó al romperse la mano, y tuvo que ser reemplazado para la final contra William Macário.</p>
                    <p className={styles.peleador__article__text}>Su actuación destacada en TUF, le hizo ganarse un contrato con UFC, donde pese a perder en su debut contra Ryan LaFlare, supo mantenerse activo durante 10 años peleando para dicha compañía.</p>
                    <h2 className={styles.peleador__article__title}>Santiago Ponzinibbio Última Pelea</h2>
                    <p className={styles.peleador__article__text}>El último combate de Santiago Ponzinibbio fue en abril de 2023 contra <b>Kevin Holland</b> en UFC 287, organizado en Miami, Florida. Dicha pelea terminó con una derrota del argentino por KO en el tercer round.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/B8tLR32Ta4Y?si=eSUj0j_UPUlwrqnI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}