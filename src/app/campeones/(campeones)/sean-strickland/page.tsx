import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import strickland from '@/assets/peleadores__images/sean-strickland/strickland.png'
import endfight from '@/assets/peleadores__images/sean-strickland/strickland_endfight.jpg'
import sparring from '@/assets/peleadores__images/sean-strickland/strickland_sparring2.jpg'
import pelea from '@/assets/peleadores__images/sean-strickland/strickland_peleando.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideFighter from '@/app/components/asides/AsideFighter'

export default function Strickland () {
    return(
        <main> 
            <PeleadoresHero peleadoresImage={strickland} w={28} l={5} d={0} nombre='Sean Strickland' categoria='Peso Medio' apodo={null} />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean Strickland UFC</h2>
                    <p className={styles.peleador__article__text}>Sean Strickland es un peleador estadounidense de MMA que compite en la compañía <Link href='/promotoras/ufc'>UFC</Link>, y es el actual capeón de Peso Medio de UFC, luego de que quien en su momento llegó a ocupar el 5to lugar en su división, le arrebatara el título a <b>Israel Adensanya</b>.</p>
                    <Image className={styles.peleador__article__image} src={endfight} alt='' />
                    <p className={styles.peleador__article__text}>El campeón, hizó su debut en esta compañía el 15 de marzo de 2014 en UFC 171, ganando su combate por sumisión en el primer asalto, manteniendo así el invicto que sostenía hasta ese entonces.</p>
                    <p className={styles.peleador__article__text}>Luego de un par de combates, terminaría perdiendo su racha invicta de 15 victorias seguidas contra el argentino <Link href='/argentinos/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, que en febrero de 2015 lo derrotó por decisión unánime, en lo que había sido el debut del norteamericano en Peso Welter.</p>
                    <p className={styles.peleador__article__text}>A lo largo de su carrera en UFC, Sean Strickland peleó un total de 20 veces, cosechando un record de 15-5, siendo 1 de sus victorias por sumisión, 4 por nocout y  10 por decisión. Destacando de entre todos sus combates, la sorpresiva victoria contra el campeón Israel Adensanya en septiembre de 2023, al que venció de manera contundente por decisión unánime, pelea que tomó con un mes de anticipación como reemplazo del sudafricano rankeado número 1 Dricus Du Plessis, que se bajó por lesión.</p>
                    <h2 className={styles.peleador__article__title}>Sean Strickland record</h2>
                    <p className={styles.peleador__article__text}>Actualmente, Sean Strickland ostenta un record de 28-5-0. Ganando 11 combates por nocaut, 4 sumisión y el resto por decisión. Además de ostentar 9 victorias en el primer round. Anterior a su ingreso a la UFC, no había perdido ningún combate, y ostentaba un record invicto de 13 victorias.</p>
                    <h2 className={styles.peleador__article__title}>Sean Strickland MMA</h2>
                    <p className={styles.peleador__article__text}>Sean Strickland comenzó a entrenar mma a los 14 años, y se convirtió en profesional a los 16 años al debutar en King Of The Cafe (KOTC), compañía en la que peló hasta que de 2008 a 2014 hasta que fue contratado por UFC.</p>
                    <p className={styles.peleador__article__text}>Es cinturón negro de <Link href='/estilos/jiujitsu'>Jiu-Jitsu</Link>. Y tenía un estilo de pelea muy versátil, con buena lucha en el piso. Hasta que por un accidente con su moto, donde los médicos le recomendaron retirarse de las mma, decidió cambiar su estilo de pelea a uno más cercano al boxeo, en el cual usa menos las piernas y corre menos riesgos a la hora de pelear.</p>
                    <Image className={styles.peleador__article__image} src={sparring} alt='' />
                    <h2 className={styles.peleador__article__title}>Sean Strickland Historia</h2>
                    <p className={styles.peleador__article__text}>Sean Strickland nació el 27 de febrero de 1991, en Estados Unidos, en New Bern, Carolina del Norte.</p>
                    <p className={styles.peleador__article__text}>Es de público conocimiento que Sean Strickland tuvo una infancia difícil y un tanto traumatica. Debido a que creció en una familia pobre, con un padre alcoholico, violento, del cual él y su madre recibieron abusos, y con una ideología de extrema derecha que le inculcó a Sean desde niño.</p>
                    <p className={styles.peleador__article__text}>Este entornó familiar en el que creció le ocasionó problemas en la escuela de niño, ya que actuaba como un bully hacia aquellos que su padre le enseñó a odiar.</p>
                    <p className={styles.peleador__article__text}>Afortunadamente, cuando el joven Sean tenía 14 años, su madre lo anotó a clases de artes marciales mixtas, donde pudo canalizar sus emociones, y donde pudo relacionarse con personas de diferentes culturas que le enseñaron, en sus propias palabras, que lo que su papá le inculcó &ldquo;era pura mierda&ldquo;.</p>
                    <p className={styles.peleador__article__text}>En 2008 tuvo su primer combate profesional en KOTC. En 2014 fue contratado por UFC, donde sigue peleando hasta la actualidad.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='' />
                    <p className={styles.peleador__article__text}>Reciente hizo historia al consagrarse campeón de Peso Medio en la UFC, al vencer a Israel Adensanya en una impresionante victoria que pocos vieron venir. Puesto que lo venció de manera contundente, ante un peleador como Adensanya que apuntaba a ser un histórico de la división.</p>
                    <h2 className={styles.peleador__article__title}>Última pelea de Sean Strickland</h2>
                    <p className={styles.peleador__article__text}>En Agosto de 2023, Sean Strickland recibió un llamado en corto aviso, en el que le pidieron que reemplazara a Du Plessis, en el combate contra el campeón del Peso Medio de la UFC, Israel Adensanya.</p>
                    <p className={styles.peleador__article__text}>Esta pelea tenía un condimento especial. Puesto que en el pasado hubo un intercambio de insultos entre ambos peleadores. Sean Strickland se había burlado de la actitud y apariencia excentrica de Adensanya, diciendo que &ldquo;ningún hombre que se pinte las uñas me va a vencer&ldquo;, o que ningúna persona que se de amor a sí misma con dibujitos cartoon le iba a ganar. Por su parte, Israel respondió diciendo: &ldquo;Te voy a noquear con mis uñas pintadas&ldquo; y que después &ldquo;bailaría un baile de tiktok cuano le ganara&ldquo;.</p>
                    <p className={styles.peleador__article__text}>El combate estaba organizado para septiembre de ese mismo año y el claro favorito para la pelea era el campeón Israel Adensanya. Sin embargo un Sean Stricklan por el cual pocos apostaban, dió el sorpresón al vencer vencer por decisión unánime al entonces campeón, en un combate donde hubo un solo dominador, que dentro de la jaula demostró ser un digno campeón.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/f94-i-k0tq0?si=1qDoMsA_ac4U33hh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <AsideFighter />
            </section>
        </main>
    )
}