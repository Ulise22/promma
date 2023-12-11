import styles from '../../components/peleador.module.css'
import conor from '../../../../assets/peleadores__images/conor-mcgregor/mcgregor.png'
import conorIrlanda from '../../../../assets/peleadores__images/conor-mcgregor/conor.jpg'
import mcgregor from '../../../../assets/peleadores__images/conor-mcgregor/conor_mcgregor.jpg'
import pelea from '../../../../assets/peleadores__images/conor-mcgregor/mcgregor-peleando2.jpg'
import pelea2 from '../../../../assets/peleadores__images/conor-mcgregor/mcgregor-peleando.jpg'
import PeleadoresHero from '../../components/PeleadoresHero'
import Image from 'next/image'
import Link from 'next/link'

export default function Mcgregor () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={conor} w={22} l={6} d={0} nombre='Conor Mcgregor' apodo='THE NOTORIOUS' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Conor Mcgregor Biografía</h2>
                    <p>Conor Anthony Mcgregor nació en Dublín, Irlanda, el 14 de julio e 1988. A los 12 años comenzó a entrenar boxeo y en su adolescencia conoció al futuro peleador de ufc Tom Egan, con quien comenzó a entrenar artes marciales mixtas.</p>
                    <Image className={styles.peleador__article__image} src={mcgregor} alt='Conor Mcgregor haciendo su caminata después de haber ganado un combate de ufc' />
                    <p>El 7 de febrero e 2007, Conor hizo su debut amateur en las mma contra Kieran Campbell en una promotora irlandesa, en aquel combate ganó por nocaut en el primer asalto. Ese mismo día logró convertirse en profesional al firmar con la promotora Irish Cage of Truth.</p>
                    <p>El 9 de marzo de 2008, Mcgregor hizo su debut profesional, en peso ligero, donde derrotó a Gary Moorris por nocaut en el segundo asalto. Conor tuvo varias peleas en la compañía irlandesa, donde logró convertirse en doble campeón de Peso Pluma y Peso Ligero, hasta que en febrero de 2013, <b>Dana White</b> le ofreció un contrato con la UFC, donde haría su debut el 6 de abril del mismo año, derrotano por nocaut en el primer asalto a Marcus Brimage.</p>
                    <p>Desde su debut en ufc logró mucho reconocimiento por sus victorias por nocaut, y por tener una gran facilidad para vender peleas y volverse mediático, cosa que seguro lo ayudó a él y a la ufc a ganar notoriedad. Estuvo en ufc peleando varios años, donde consiguió otra vez ser doble campeón, en 2 categorías de peso distintas, siendo el primer peleador de ufc en lograr esto.</p>
                    <p>Actualmente debido a una lesión en pelea con <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, se lo ha visto menos activo a la hora presentarse en combates, tanto de mma como de boxeo, donde también ha incursionado.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Conor Mcgregor Peleas</h2>
                    <p>La mayoría de sus combates se pueden encontrar hoy en día por Youtube. 14 de sus combates fueron por UFC, donde supo ser doble campeón, y los otros 14 combates fueron por fuera de esta compañía, en los inicios de su carrera. Además claro de su incursión en el boxeo donde se enfrentó a <b>Floyd Mayweather jr</b>.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='Conor Mcgregor en su pelea contra Jose Aldo por el título de Peso Pluma, dando el golpe que dejaría KO al peleador brasileño' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Conor Mcgregor Record</h2>
                    <p>Conor Mcgregor tiene un record de 22-6-0 (22 victorias, 6 derrotas y ningún empate), siendo 19 de esas 22 victorias por nocaut, 1 por sumisión y el resto por decisión. Mientras sus 6 derrotas se componen de 4 por sumisión y 2 por TKO.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Conor Mcgregor Estadísticas</h2>
                    <Image className={styles.peleador__article__image} src={pelea2} alt='' />
                    <p>Conor ganó el 86% de sus combates por KO o por TKO, el 9% de sus peleas las ganó por decisión, y el 5% las ganó por sumisión a lo largo de toda su carrera.</p>
                    <p>Mcgregor tiene una efectividad del 50% en sus golpeos, de un 56% en sus intentos de derribo. Conecta 5.32 golpes por minuto y recibe 4.66 por minuto. Tiene un promedio 0.67 knockdowns cada 15 minutos y de 0.13 sumisiones.</p>
                    <p>Tiene una efectividad en la defensa contra golpes del 54%, una efectividad en la defensa de derribo del 67% y sus peleas duran un promedio de 08:02.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Conor Mcgregor De Donde es</h2>
                    <p className={styles.peleador__article__text}>Conor Mcgregor nació en <b>Dublín</b>, la capital de la república de Irlanda. Se crío en Crumlin, suburbio del sur de Dublín y en su adolescencia se fue a vivir a Lucan, suburbio del oeste de Dublín</p>
                    <Image className={styles.peleador__article__image} src={conorIrlanda} alt='El peleador de mma Conor Mcgregor sosteniendo la bandera de Irlanda con los brazos en alto victorioso después de un combate de ufc' />
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Conor Mcgregor Estatura</h2>
                    <p>Conor mcgregor mide 1.75m o 5&apos;9</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Mcgregor Fast</h2>
                    <p>Con su creciente fama y su alto rendimiento en los deportes de combate, Mcgregor junto a sus doctores y científicos del deporte creó un plan de entrenamiento que al que todos pueden acceder descargando su app en dispositivos Android o IOS. También se puede consultar toda la información al respecto entrando <a href='https://www.mcgregorfast.com/' target='_Blank'>Aquí</a></p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khabib vs Mcgregor</h2>
                    <p>La pelea entre Conor Mcgregor y Khabib Nurmagomedov, debe ser una de las que más polémica acarreó en la historia de las mma. Luego de un pequeño retiro de Mcgregor que uso para centrarse en su pelea de boxeo contra Floyd Mayweather jr.Conor estaba listo para volver a competir en la categoría de Peso Ligero de ufc.</p>
                    <p>Parte del &quot;beef&quot; que había entre estos 2 peleadores, comenzó con un altercado entre Khabib y Artem Lobov, quien es conocido por ser un amigo cercano de Mcgregor. Después de dicho incidente, Conor junto a 20 personas con credenciales de su equipo, intentaron increpar a Khabib, quien estaba en un bus junto a otros peleadores luego de competir en el UFC 223. Mcgregor le lanzó una carretilla de carga al autobús donde estaba Khabib, lo que resulto en la rotura de uno de los cristales de dicho autobús, posterior a esto continuó arrojando objetos al vehículo. Por dicho comportamiento. Mcgregor fue a juicio y fue condenado a 5 días de servicio comunitario y le obligaron a asistir a clases de manejo de la ira.</p>
                    <p>Finalmente el combate entre estos 2 se realizó el 6 de octubre de 2018 en Las Vegas, combate que terminó en una victoria para el peleador ruso por sumisión en el 4to asalto. Sin embargo, la polémica no terminó ahí: después del combate, Khabib saltó del octagono para atacar a Dillon Danis, miembro de la esquina de Conor. En respuesta, Mcgregor salió del octagono para intercambiar golpes con Abubakar Nurmagomedov, primo de Khabib.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/JuBBIJ7adjM?si=7lVnebgXta2u0_fQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}