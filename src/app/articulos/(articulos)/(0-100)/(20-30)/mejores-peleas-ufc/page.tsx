import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/mejores_peleas_ufc.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Mejores Peleas de UFC Por Año',
    description: '',
    openGraph: {
        title: 'Mejores Peleas de UFC Por Año',
        description: '',
        url: 'https://fullmma.org/articulos/mejores-peleas-ufc'
    }
}

export default function MejoresPeleasUFC () {
    return(
        <main>
            <ArticleHero title='Las Mejores Peleas de UFC Por Año Desde el 2008 a la Actualidad' subtitle='El listado de las mejores peleas de la historia, basado en los World MMA Awards que premian a la mejor pelea del año desde el año 2008 hasta la actualidad.' image={hero} date='2024-06-17' author={null} updatedDate='2024-10-25' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Las mejores peleas de la historia de la ufc por año</h2>
                    <p>Este listado de peleas no es para nada subjetivo, sino que se basa en los <b>World MMA Awards</b> presentados por la revista <b>Fighter Only</b> desde el año 2008, considerada la ceremonia de premios más prestigiosa de las MMA, donde hacen honor a varios aspectos diferentes de las artes marciales mixtas, y en este caso particular nos interesa hacer mención a todos los ganadores del premio a la pelea del año desde el 2008.</p>
                    <p>Cabe mencionar que la forma en que se eligen a los ganadores de los diferentes premios, y al de mejor pelea en partícular, es en base a las votaciones de los fantaticos a través de internet.</p>
                    <h3>2008: Chuck Liddell vs Wanderlei Silva en UFC 79</h3>
                    <p>El primer combate en ser elegido como la pelea del año por la revista <b>Fighters Only</b>, fue la que tuvo lugar entre la leyenda de los semipesados y de la <Link href='/articulos/ufc'>UFC</Link>, <Link href='/leyendas/chuck-liddell'>Chuck Liddell</Link>, que en un enfrentamiento donde desde el minuto 1 hubo un amplio intercambio de golpes, logró la clara victoria por decisión contra el brasileño <b>Wanderlei Silva</b>.</p>
                    <YouTubeEmbed videoid='UhIzP9XDIL8' />
                    <h3>2009: Diego Sánchez vs Clay Guida en The Ultimate Fighter</h3>
                    <p>La segunda pelea que fue elegida como el combate del año, fue la que tuvo lugar en <b>The Ultimate Fighter: United States vs. United Kingdom</b>, entre los luchadores <b>Diego Sánchez</b> y <b>Clay Guida</b>. La pelea se la terminó llevando Sánchez por decisión dividida, sin embargo lo que llamó la anteción fue la cantidad de golpes significativos que fue capaz de soportar Clay Guida, sólo en el resumen que realizó la UFC, pueden verse como el peleador fue capaz de resistir 4 rodillazos a la cabeza, 1 patada que a cualquiera de nosotros los mortales noquearía, y ni hablar de la cantidad de golpes con los puños que fue capaz de aguantar.</p>
                    <YouTubeEmbed videoid='fqVjXBQWnSc' />
                    <h3>2010: Anderson Silva vs Chael Sonnen en UFC 117</h3>
                    <p>Este combate fue tremendo, entre un <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, que llevaba a esta altura 7 defensas de su título, además de que llegaba en una racha de 12 victorias consecutivas y un récord de 28-4 y un <b>Chael Sonnen</b> con un registro más irregular, teniendo en aquel momento un récord de 26-10-1, y una racha de 3 victorias consecutivas, se había ganado la oportunidad de luchar por el título luego de vencer a <b>Nate Marquardt</b> en lo que era una eliminatoria por el título. Con esto en mente, el claro favorito era el brasileño, que sin embargo, el día de la pelea sufrió muchos más problemas de los que muchos anticipaban. Llegaron al quinto asalto con un Chael Sonnen que sorprendiendo a todos estaba dominando al campeón, sin embargo, para su desgracia, Anderson Silva sacó su chapa de campeón y logró conectar un armlock para terminar llevándose la pelea por sumisión en el último asalto.</p>
                    <YouTubeEmbed videoid='DpLaqnwFQEY' />
                    <h3>2011: Frankie Edgard vs Gray Maynard en UFC 125</h3>
                    <p>En lo que fue una pelea por el título, a <b>Frankie Edgard</b> le tocó defenderlo contra <b>Gray Marnard</b>. En una pelea que se extendió a los 5 asaltos, Frankie pareció estar cerca de perder el cinturón y de caer KO en varias ocasiones, siendo recibido por los golpes de Maynar constantemente, sin embargo pese a que esa era la sensación que daba, Edgard fue capaz de sobrevivir todo el combate, logrando completar algunos derribos espectaculares. Finalmente cuando la pelea se llevó a decisión, los jueces dictaminaron que hubo un empate entre estos 2.</p>
                    <YouTubeEmbed videoid='c5Ie2kXTsRk' />
                    <h3>2012: Joe Lauzon vs Jamie Varner en UFC on Fox: Shogun vs. Vera</h3>
                    <p>En el 2012 la pelea entre <b>Joe Lauzon</b> contra <b>Jamie Varner</b> fue elegida como la pelea del año. Con un primer asalto que fue dominado claramente por Jamie Varner a base de striking, con un segundo que podría haber ido para cualquier lado y con un tercer asalto, donde a pesar de que Varner estaba haciendo un buen trabajo, se vio enredado entre las piernas de Joe Lauzon que logró someterlo para quedarse con la victoria.</p>
                    <YouTubeEmbed videoid='fGmu65dBQhQ' />
                    <h3>2013: Jon Jones vs Alexander Gustafsson en UFC 165</h3>
                    <p>La pelea del año 2013 fue la que vio enfrentarse a quien hoy consideramos quizás como el mejor luchador de las MMA de la historia, <Link href='/peleadores/jon-jones'>Jon Jones</Link>, contra quien seguramente fue su rival más difícil de vencer, el sueco <b>Alexander Gustafsson</b>, contra quien se vió obligado a llegar a los 5 asaltos, consiguiendo en lo que fue un peleón, la victoria por decisión de los jueces.</p>
                    <YouTubeEmbed videoid='gqI4GoKL_SM' />
                    <h3>2014: José Aldo vs Chad Mendes en UFC 179</h3>
                    <p>El 25 de octubre de 2014 se enfrentaron la leyenda de los peso pluma <Link href='/leyendas/jose-aldo'>José Aldo</Link> y el estadounidense <b>Chad Mendes</b>. La pelea llegó a los 5 asaltos y se la terminó llevando el campeón brasileño por decisión unánime, completando la que sería su novena defensa consecutiva, siendo todo un récord en la división que aún hoy en día nadie fue capaz de romper.</p>
                    <YouTubeEmbed videoid='pEDW8_mHfpo' />
                    <h3>2015: Robbie Lawler vs Rory MacDonald en UFC 189</h3>
                    <p>La pelea elegida como la mejor en el año 2015 fue la revancha entre el campeón de peso wélter <b>Robbie Lawler</b> y el canadiense <b>Rory MacDonald</b> por el campeonato de Peso Wélter de la UFC. En su primer combate la pelea había ido a la decisión de los jueces y Robbie Lewler había sido elegido el ganador por decisión dividida. En esta ocasión, ahora como campeón, Robbie Lewler defendería su título contra el canadiense, en un combate que llegaría al quinto asalto, donde Robbie volvería a llevarse la victoria, finalizando en el último asalto por TKO.</p>
                    <YouTubeEmbed videoid='BY2fgwHxuhA' />
                    <h3>2016: Cub Swanson vs Choi Doo-ho en UFC 206</h3>
                    <p>En el <b>UFC 206</b> que tuvo como evento estelar la pelea entre <Link href='/peleadores/max-holloway'>Max Holloway</Link> y <b>Anthony Pettis</b>, contó dentro de su cartelera con la que después sería elegida la pelea del año. <b>Cub Swanson</b> se enfrentó al coreano <b>Doo ho Choi</b>, en una pelea donde el estadounidense dominó por completo, lanzando todo tipo de combinaciones y golpes que deslumbraron al público. Finalmente la pelea terminó luego de 3 asaltos con una merecida victoria por decisión unánime para el luchador americano.</p>
                    <YouTubeEmbed videoid='6ZD94J324x4' />
                    <h3>2017: Eddie Alvarez vs Justin Gaethje en UFC 218</h3>
                    <p>Para cualquiera que sea fan de las peleas que se hacen de pie, esta es una que debería ser obligatoria de ver. La pelea entre el excapeón de Peso Ligero <b>Eddie Alvarez</b>, que venía de una pelea que terminó sin resultado contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, y el excampeón interino de la misma división <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> fue una en la que practicamente no fueron al piso y fueron 3 asaltos de puro intercambio de golpes. La pelea finalizó en el tercer asalto en el clinch, cuando un rodillazo de Eddie a la cabeza de Gaethje lo tumbó al suelo otorgándole la victoria.</p>
                    <h3>2018: Tony Ferguson vs Anthony Pettis en UFC 229</h3>
                    <p>La pelea coesteler del UFC 229, en la que se habían enfrentado <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> y <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> nos trajó la que sería elegida la noche y la del año posteriormente. En lo que fue uno de los combates más sangrientos vistos en la compañía, <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> fue el ganador por parada médica, debido a que el daño y la sangre que desprendía <b>Anthony Pettis</b> era tanta que al finalizar el segundo asalto le impidió continuar peleando.</p>
                    <YouTubeEmbed videoid='VmCTYPLsP6c' />
                    <h3>2019/2020: Weili Zhang vs Joanna Jędrzejczyk en UFC 248</h3>
                    <p>La pelea entre la campeona china de Peso Paja Femenino <Link href='/mujeres/zhang-weili'>Weili Zhang</Link> y la excampeona y ahora retadora <b>Joanna Jędrzejczyk</b>, sería considerado y elegido no sólo como el combate del año 2020, sino que además es considerado como el mejor combate femenino de la historia de las MMA. En una pelea que se extendió hasta los 5 asaltos y quedó a mano de los jueces, Zhang Weili terminaría llevándose la victoria por decisión dividida.</p>
                    <YouTubeEmbed videoid='sf_ioVrK0uw' />
                    <h3>2021: Deiveson Figueiredo vs Brandon Moreno en UFC 256</h3>
                    <p>En diciembre de 2020, el campeón de peso mosca <b>Deiveson Figueiredo</b> se enfrentaría al contendiente #1 de la divisón, el mexicano <b>Brandon Moreno</b> en lo que era la segunda defensa del título por parte del brasileño. La pelea fue bastante cerrada entre estos 2, que luego de 5 asaltos terminaría en un empate mayoritario a los ojos de los jueces.</p>
                    <YouTubeEmbed videoid='Ar_gcUxPvmY' />
                    <h3>2022: Jiří Procházka vs Glover Teixeira en UFC 275</h3>
                    <p>La pelea entre Jiri y Glover fue por el título de los semipesados de la UFC en lo que sería la primera defensa del brasileño <Link href='/articulos/campeon-viejo-ufc'>Glover Teixeira</Link>, que venía de consagrarse como campeón a la edad de 42 años, luego de vencer por sumisión al polaco <b>Jan Blachowicz</b>. El combate se extendería hasta los 5 asaltos acabando con una sumisión por parte del retador <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, que con un mataleón se llevó la pelea y se convirtió en el nuevo campeón de la división.</p>
                    <YouTubeEmbed videoid='dHKRVKnChFI' />
                    <h3>2023: Islam Makhachev vs Alexander Volkanovski en UFC 284</h3>
                    <p>Uno de los mejores combates en la historia reciente de la UFC sin dudas fue el que se dió en el duelo de campeones entre el ruso <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> y el australiano <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>. En un contexto donde Islam venía recientemente de convertirse en campeón, luego de derrotar al brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, le tocó hacer su primera defensa en Australia contra un Volkanovski que venía de años de arrasar en su división, y ya sin contendientes que enfrentar en Peso pluma, decidió buscar el hito, al consagrarse como doble campeón venciendo a un luchador tan bueno como lo es Makhachev. La pelea completó los 5 asaltos y en lo que fue un combate bastante cerrado se terminó llevando la victoria el peleador ruso.</p>
                    <YouTubeEmbed videoid='h9oj6HEdZSI' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}