'use client'
import {useRef} from 'react'
import styles from './Contacto.module.css'
import emailjs from '@emailjs/browser'

export default function Contacto () {
    const refForm = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refForm)

        const serviceId = 'service_wuk5aye'
        const templateId = 'template_b3rvs6s'

        const apiKey = '_Do6W25_YstkB0ttk'

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
          .then(result => console.log(result.text))
          .catch(error => console.error(error))
    }

    return(
        <main className={styles.contacto}>
            <form ref={refForm} onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.form__title}>Contactanos</h1>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Nombre:</label>
                    <input className={styles.form__input} required name='nombre' type='text' placeholder='Ej: John Doe' />
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Email:</label>
                    <input className={styles.form__input} required name='email' type='email' placeholder='Ej: johndoe@gmail.com' />
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Mensaje:</label>
                    <textarea className={styles.form__textarea} required name='mensaje' placeholder='Escriba aquí su mensaje' />
                </div>
                <button className={styles.form__btn}>Enviar</button>
            </form>
        </main>
    )
}