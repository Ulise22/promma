import styles from './Contacto.module.css'

export default function Contacto () {

    return(
        <main className={styles.contacto}>
            <form action="https://formsubmit.co/fullmmarg@gmail.com" method="POST" className={styles.form}>
                <h1 className={styles.form__title}>Contactanos</h1>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Nombre:</label>
                    <input className={styles.form__input} required name='name' type='text' placeholder='Ej: John Doe' />
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Email:</label>
                    <input className={styles.form__input} required name='email' type='email' placeholder='Ej: johndoe@gmail.com' />
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Mensaje:</label>
                    <textarea className={styles.form__textarea} required name='textarea' placeholder='Escriba aquí su mensaje' />
                </div>
                <button className={styles.form__btn}>Enviar</button>
            </form>
        </main>
    )
}