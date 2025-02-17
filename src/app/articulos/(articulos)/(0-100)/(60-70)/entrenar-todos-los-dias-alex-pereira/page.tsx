import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/60-70/pereira_entrenar_todos_los_dias.jpg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Entrenar Todos Los Días Alex Pereira',
    description: '',
    openGraph: {
        title: 'Entrenar Todos Los Días Alex Pereira',
        description: '',
        url: 'https://fullmma.org/articulos/entrenar-todos-los-dias-alex-pereira'
    }
}

export default function EntrenarTodosLosDiasAlexPereira () {
    return(
        <main>
            <ArticleHero title='La Ventaja de Entrenar Todos Los Días Según Alex Pereira' subtitle='El secreto detrás de la confianza de Alex Pereira, que radica en el entrenamiento diario. ' image={hero} date='2025-02-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, el actual campeón de peso semipesado de la <Link href='/articulos/ufc'>UFC</Link> y excampeón de peso medio, habló en un podcast sobre las ventajas que él encuentra en entrenar todos los días, y sobre el porqué esto es clave para alcanzar el éxito que consiguió en su carrera como atleta. </p>
                    <p>En el podcast del también excampeón de la UFC, <b>Rampage Jackson</b>, quien quizás sea la mayor estrella actualmente de la compañía, fue consultado por la confianza que muestra al entrar al octágono, y por la falta de reacción que tiene en este, dado que en ningún momento de sus peleas, por mucho que reciba un golpe duro, demuestra ningún signo de debilidad, pareciendo como si no sintiera nada y como si se convirtiera en una persona diferente al entrar en el octágono de MMA. </p>
                    <p>El brasileño explicó que <b>la clave detrás de esto radica en que se dedica a entrenar todos los días</b>, llueva o truene se dedica a entrenar, aunque no tenga ganas o parezca estar muy ocupado, se dedica a encontrar un momento para entrenar, y esto es fundamental para conseguir todo lo que ha logrado. Esta disciplina y constancia en el entrenamiento es lo que le da al campeón de las 205lbs la confianza necesaria para poder subirse al octágono sin remordimientos y sin esa culpa que siente cuando no cumple con este requisito. Además, el hecho de estar entrenando tan seguido lo acostumbra a esta situación, Alex pelea tan seguido que a esta altura es raro que se sienta nervioso previo a un combate. Sería extraño que a una persona que está tan acostumbrada a exigir a su cuerpo, al esfuerzo físico, y a pelear, le pasen demasiadas cosas por las cabeza en momentos como ese. </p>
                    <p>Esta disciplina y actitud la llevó consigo incluso en tiempos de dificultad cuando esto parecía más difícil. Ya que explicó que en el 2020, cuando había una cuarentena, en la época en la que todavía peleaba para Glory como kickboxer, entrenó de igual manera todos los días, aunque no hubiera ningún gimnasio abierto por las restricciones sanitarias. </p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/V8gAJLWArNw?si=SOq5Abg-prqSK3AC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su entrenador lo describió de la siguiente forma: <b>&quot;Lo enfrenta como un trabajo. Algunas personas están en su trabajo pero luego se pasan el día sentado el día siguiente. Para él eso no existe, se tiene que levantar todas las mañanas e ir a entrenar. Así que la manera en la que entrena, y la cantidad de tiempo que entrena le da confianza, y esa confianza se transmite en la jaula, porque no siente nada de culpa. Porque ese aspecto de entrenar todos los días le da confianza, para que cuando llegue el día esté bien&quot;</b>. </p>
                    <p>Sin embargo no queda todo acá, dado que el entrenamiento por sí sólo no es suficiente. A Alex Pereira le gusta entrenar con diferentes personas también, dado que es muy consciente de que una sola persona no puede saberlo todo, es por esto que busca diferentes compañeros, diferentes gimnasios, con la idea de aprender algo nuevo de cada persona con la que entrena. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}