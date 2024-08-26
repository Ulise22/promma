import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/ufc/0-15/ufc302-hero.jpg'

export default function UFC302 () {
    return(
        <main>
            <ArticleHero title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' subtitle='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime' image={hero} date='2024-06-02' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En una noche que nos trae al campeón indiscutido <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> defender su título contra el número #4 de la división de Peso Ligero, <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> quien supo ser campeón interino de la división, y que cayó derrotado en las 2 ocasiones que tuvo de disputar el título. Poirier se encuentra en la que seguramente sea su última oportunidad de campeonar en un combate que promete mucho. Además, en un combate de 5 asaltos tenemos como pelea coestelar la del excampeón y contendiente número #1 de la división de peso mediano, <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien luego de perder su título con <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> en el <Link href='/articulos/ufc297'>UFC 297</Link> enfrentará al brasileño <b>Paulo Costa</b>, que viene de una derrota por decisión contra <b>Robert Whittaker</b>. </p>
                    <h2>Randy Brown vence a  Elizeu Zaleski Dos Santos</h2>
                    <p>Tremenda pelea fue la que abrió la cartelera estelar de este UFC 302, con un Randy Brown que luego de 3 asaltos salió victorioso por decisión unánime, aprovechando claramente la altura y alcance que le sacaba a su rival, fue capaz de conectar más y mejores golpes a lo largo de los 3 asaltos. Aunque el brasileño Dos Santos estuvo cerca de finalizar la pelea en el segundo asalto con un mataleón, Brown fue capaz de sobrevivir en el piso para terminar llevándose la pelea.</p>
                    <h2>Niko Price derrota a Alex Morono</h2>
                    <p>En otra pelea espectacular vimos como un Niko Price se recompuso de un mal primer asalto en el que parecía haber sido dominado por Morono, para en el segundo y en el tercer asalto fue capaz de acertar más golpes ante un Alex Morono que luego de un muy exigido primer asalto parecía estar cansado y sin energías para el último de la pelea. Por lo que en la segunda pelea de la cartelera estelar la pelea se la termina llevando Niko Price por una merecida decisión unánime.</p>
                    <h2>Kevin Holland somete a Michal Oleksiejczuk en el primer asalto</h2>
                    <p>A pesar del buen golpe que logró conectar Michal que terminó por llevar a Kevin Holland al piso, fue acá cuando el estadounidense fue capaz de atrapar el brazo del peleador polaco entre sus piernas, logrando una sumisión temprana en el primer asalto de la pelea, y logrando salir victorioso de esta en lo que es la hasta el momento, única finalización de la noche en la cartelera estelar.</p>
                    <h2>Sean Strickland Derrota a Paulo Costa en el evento coestelar</h2>
                    <p>En una pelea donde el claro dominador fue Sean Strickland, se terminó llevando la pelea por decisión dividida por parte de los jueces, de quienes sólo 1 vio ganar a Paulo Costa. El combate se dió siempre de pie, con ambos peleadores intercambiando golpes, con un Costa que buscaba hacer daño con las low-kicks pero que se encontró con un Strickland que siempre estuvo atento para defenderse bien. Sean controló el centro del octagono y fue quien más golpes significativos conectó, por lo que terminó siendo el justo ganador de la pelea.</p>
                    <h2>Islam Makhachev vs Dustin Poirier</h2>
                    <p>En lo que fue la pelea estelar y la más esperada de la noche, finalmente el ruso fue capaz de defender una vez más su título de forma exitosa, siendo capaz de someter al retador <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> en el último asalto de la pelea. Con un Poirier al que se lo vió dar lo mejor de sí, siendo capaz de defender muchos de los intentos de derribo con los que molestaba Makhachev y conectando muchos golpes gracias a su excelente boxeo. También lo vimos más emotivo que de costumbre al finalizar el combate, posiblemente porque esta haya sido su última pelea en las MMA. Finalmente la pelea estelar se la terminó llevando Makhachev gracias al excelente trabajo que tiene de piso, que lo hizo ser capaz de someter a un cinturón negro en jiu-jitsu como Poirier.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}