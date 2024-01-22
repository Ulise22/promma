import Link from 'next/link'
import styles from './ArticlesFooter.module.css'
import Image from 'next/image'

export default function ArticlesFooter () {
    return(
        <section>
            <h2>Artículos Recomendados</h2>
            <article>
                <Link href=''>
                    <Image src={} alt='' />
                    <h4>HOllaa</h4>
                </Link>
            </article>
        </section>
    )
}