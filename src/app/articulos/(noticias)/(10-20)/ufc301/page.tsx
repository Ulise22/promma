import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/ufc301-hero.jpg'

export default function UFC301 () {
    return(
        <main>
            <ArticleHero title='¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' subtitle='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.' image={hero} date='05/05/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En este UFC 301 que tuvo lugar en Brasil y que nos entretuvo con un peleador de esta nacionalidad por pelea, vimos muchas grandes peleas, y momentos históricos, como lo son la primera defensa del cinturón de <Link href='/peleadores/alexandre-pantoja'>Alex Pantoja</Link> y la última pelea por UFC del legendario <Link href='/leyendas/jose-aldo'>José Aldo</Link>. </p>
                    <h2>¡Caio Borralho gana por nocaut contra Paul Craig!</h2>
                    <p>Abriendo la cartelera principal, un muy buen Caio Borralho hizo valer su localía consiguiendo noquear al escocés que nada pudo hacer ante el poder del Caio que con una excelente combinación de golpes se llevó la pelea, ganándo además el bono de $50k por su gran desempeño. De esta manera Caio sigue escalando en la división y manteniéndose invicto en la compañía. </p>
                    <h2>¡Michael Pereira somete a Ihor Potieria en menos de un minuto!</h2>
                    <p>Pereira es otro de los que supo hacer valer su localía, derribando a su rival ucraniano a golpes, siguiendo con una mortal para acabar por encima de Potieria, y logrando someterlo con una guillotina, todo esto en tan sólo 50 segundos de pelea. Siendo otro de los que se terminó llevando el bono de $50k por su gran desempeño, y con esta ya sumando 9 victorias en la UFC, sumando un récord total de 31-11, 2 NC.</p>
                    <h2>¡Antonhy Smith somete a Vitor Petrino en el primer asalto!</h2>
                    <p>El único peleador de la cartelera principal que pudo ganarle a uno de los brasileños fue el histórico Anthony Smith, quien con 35 años en el primer asalto, pese a recibir varios golpes de quien hasta hoy estaba invicto, pudo conectar muy bien una guillotina luego de ser derribado, que llevó al brasileño a tapear y perder por sometimiento. </p>
                    <h2>¡José Aldo se retira con una victoria!</h2>
                    <p>José Aldo en su última pelea para UFC se retira como merece alguien de su trayectoria, en su casa y dominando completamente a su rival, como si sus 37 años no le pesaran. En una pelea que dominó por completo se terminó llevando la victoria por decisión unánime ante un Jonathan Martinez que respeto demasiado a su rival y no pudo hacer nada contra el ex-campeón de peso ligero. </p>
                    <h2>¡Alexandre Pantoja retiene su título por decisión unánime!</h2>
                    <p>En una pelea donde parecía que se le estaba por complicar al campeón, este fue capaz de terminar mostrando su mejor cara en el combate, logrando defender por primera vez su título obtenido en aquella victoria contra <b>Brandon Moreno</b>, manteniendo el cinturón por decisión unánime al retador australiano ranqueado en la posición #10 de la división.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}