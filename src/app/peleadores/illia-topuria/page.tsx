import Image from "next/image";
import topuria from '../../../assets/peleadores__images/topuria.png'
import styles from './Illia.module.css'

export default function Illia () {
    return(
        <main>
            <section className={styles.ilia__hero}>
                <article>
                    <p>Peso pluma (featherweight)</p>
                    <h1>Ilia Topuria</h1>
                    <h4>"EL MATADOR"</h4>
                </article>    
                <article>
                    <div>
                        <p>14</p>
                        <p>Victorias</p>
                    </div>
                    <div>
                        <p>0</p>
                        <p>Derrotas</p>
                    </div>
                    <div>
                        <p>0</p>
                        <p>Empates</p>
                    </div>
                </article>
                <Image src={topuria} alt="" />
            </section>
        </main>
    )
}