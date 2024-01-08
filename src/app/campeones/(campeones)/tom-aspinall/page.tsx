import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import aspinall from '@/assets/peleadores__images/0-10/tom-aspinall/tom_aspinall.png'
import styles from '@/app/peleadores/components/peleador.module.css'

export default function Strickland () {
    return(
        <main> 
            <PeleadoresHero peleadoresImage={aspinall} w={14} l={3} d={0} nombre='Tom Aspinall' categoria='Peso Pesado' apodo={null} />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Tom Aspinall UFC</h2>
                </article>
                
            </section>
        </main>
    )
}