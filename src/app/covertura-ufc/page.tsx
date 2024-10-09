import styles from './coverturaUFC.module.css'
import ArticlePreview from '../articulos/components/ArticlePreview'
/* UFC IMAGES */
import ufc297 from '@/assets/covertura_ufc/ufc/0-15/ufc297.jpg'
import ufc298 from '@/assets/covertura_ufc/ufc/0-15/ufc298_preview.jpg'
import ufc299 from '@/assets/covertura_ufc/ufc/0-15/ufc299.jpg'
import ufc300EarlyPrelims from '@/assets/covertura_ufc/ufc/0-15/ufc300_early-prelims.jpg'
import ufc300Prelims from '@/assets/covertura_ufc/ufc/0-15/ufc300_prelims.jpg'
import ufc300MainEvent from '@/assets/covertura_ufc/ufc/0-15/ufc300.jpeg'
import ufc301 from '@/assets/covertura_ufc/ufc/0-15/ufc301-preview.jpg'
import ufc302 from '@/assets/covertura_ufc/ufc/0-15/ufc302-preview.jpg'
import ufc303 from '@/assets/covertura_ufc/ufc/0-15/ufc303-preview.jpg'
import ufc304 from '@/assets/covertura_ufc/ufc/0-15/ufc304.jpg'
import ufc305 from '@/assets/covertura_ufc/ufc/0-15/ufc305.jpg'
import ufc306 from '@/assets/covertura_ufc/ufc/0-15/ufc306.jpg'
/* UFC FIGHT NIGHT IMAGES */
import whittakerVSaliskerov from '@/assets/covertura_ufc/fight_night/0-15/whittaker-vs-aliskerov.jpg'
import lewisVsNascimento from '@/assets/covertura_ufc/fight_night/0-15/lewis-vs-nascimento-preview.jpg'
import cannonierVSimano from '@/assets/covertura_ufc/fight_night/0-15/fightnight-cannonier-imanov-preview.jpg'
import sandhagenVSnurmagomedov from '@/assets/covertura_ufc/fight_night/0-15/sandhagen-vs-nurmagomedov-hero.jpg'
import moicanoVSsaintdenis from '@/assets/covertura_ufc/fight_night/0-15/moicano_vs_saintdenis.jpg'


export default function CoverturaUFC () {
    return(
        <main className={styles.covertura__container}>
            <h2 className={styles.covertura__subtitle}>UFC Numerado</h2>
            <section className={styles.covertura__articles__container}>
                <ArticlePreview img={ufc306} url='/covertura-ufc/ufc306' title='UFC 306: ¡Merab Dvalisvhili Nuevo Campeón de Peso Gallo! ¡Valentina Shevchenko Vuelve a Ser Campeona al Derrotar Por Decisión a Alexa Grasso!  ¡Esteban Ribovics Gana en un Peleón al Mexicano Daniel Zellhuber!' author={null} text='¡Ronaldo Rodríguez Gana por Decisión ante Ode Osbourne! ¡Diego Lopes Derrota a Brian Ortega por Decisión Unánime! ¡Raúl Rosas Jr. Logra La Primer Victoria de la Noche en La Esfera!' date='15/09/2024' />
                <ArticlePreview img={ufc305} url='/covertura-ufc/ufc305' title='UFC 305: ¡Dricus Du Plessis Derrota Por Sumisión a Israel Adesanya!¡Kai Kara-France Noquea a Steve Erceg en el Primer Asalto!' author={null} text='¡Carlos Prates deja KO a Li Jingliang en el segundo asalto! ¡Dan Hooker consigue una victoria ante Mateusz Gamrot!' date='18/08/2024' />
                <ArticlePreview img={ufc304} url='/covertura-ufc/ufc304' title='UFC 304: ¡Belal Muhammad Vence Por Decisión Unánime a Leon Edwards y es Nuevo Campeón! ¡Tom Aspinall Noquea a Curtis Blaydes en el Primer Asalto!' author={null} text='¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.' date='27/07/2024' />
                <ArticlePreview img={ufc303} url='/covertura-ufc/ufc303' title='UFC 303: ¡Alex Pereira Noquea a Jiri Prochazka en el Segundo Asalto!¡Diego Lopes Vence a Dan Ige Que Tomó la Pelea con 4 Horas de Antelación!' author={null} text='En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada, y con la pelea inédita de Diego Lopes y de Dan Ige, que aceptó combatir unas pocas horas antes de la pelea.' date='29/06/2024' />
                <ArticlePreview img={ufc302} url='/covertura-ufc/ufc302' title='UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!' author={null} text='Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.' date='02/06/2024' />
                <ArticlePreview img={ufc301} url='/covertura-ufc/ufc301' title='UFC 301: ¡José Aldo se Retira con una Victoria contra Jonatha Martinez y Alexandre Pantoja Retiene su Título!' author={null} text='José Aldo se retira con victoria de la UFC enfrentando a un peleador ranqueado con sus 37 años de edad, y Pantoja es capaz de retener el cinturón en su primera defensa.' date='05/05/2024' />
                <ArticlePreview img={ufc300MainEvent} url='/covertura-ufc/ufc300-main-event' title='UFC 300: ¡Alex Pereira Noquea en el Primer Asalto a Hill! ¡Max Holloway Noquea a Gaethje en el Último Segundo de la Pelea!' author={null} text='Alex Pereira defiende su cinturón ante Jamahal Hill noqueando en el primer asalto. Max Holloway se convierte en el nuevo BMF al noquear a Justin Gaethje en el último asalto. Además Zhang Weili, Bo Nickal y Arman Tsarukyan ganan sus peleas.' date='14/04/2024' />
                <ArticlePreview img={ufc300Prelims} url='/covertura-ufc/ufc300-prelims' title='Preliminares UFC 300: ¡Kayla Harrinson Somete a Holly Holm en el Segundo Asalto en su Debut en la UFC!' author={null} date='13/04/2024' text='Por el UFC 300 Kayla somete a Holly Holm en el segundo asalto en lo que es su debut en la compañía y Diego Lopes Noquea su rival en el primer asalto.' />
                <ArticlePreview img={ufc300EarlyPrelims} url='/covertura-ufc/ufc300-early-prelims' title='Primeros Preliminares UFC 300:¡Deivenson Figueiredo Somete a Cody en la Primer Pelea de la Noche!' author={null} text='Arranca el UFC 300 con unas increíbles peleas en los primeros preliminares. Donde Figueiredo, Bobby Green, Jessica Andrade y Renato Moicano consiguieron la victoria.' date='13/04/2024' />
                <ArticlePreview img={ufc299} url='/covertura-ufc/ufc299' title='UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!' author={null} text='En una noche que nos regalos peleas espectaculares, Sean O&apos;malley defendió su título luego de dominar la pelea durante 5 asaltos y Dustin Poirier fue capaz de noquear a Saint Denis en el segundo asalto.' date='10/03/2024' />
                <ArticlePreview img={ufc298} url='/covertura-ufc/ufc298' title='UFC 298: ¡Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de UFC!' author={null} text='En una noche histórica fuimos testigos de como el peleador español Ilia Topuria, noquea y acaba con el dominio de Volkanovski en la división de Peso Pluma de la UFC.' date='18/02/2024' />
                <ArticlePreview img={ufc297} url='/covertura-ufc/ufc297' title='UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!' author={null} date='21/01/2024' text='En una pelea que se terminó con polémica por la decisión de los jueces, Du Plessis se consagra como nuevo campeón de peso mediano en UFC.' />
            </section>
            <h2 className={styles.covertura__subtitle}>UFC Fight Night</h2>
            <section className={styles.covertura__articles__container}>
                <ArticlePreview img={moicanoVSsaintdenis} url='/covertura-ufc/fight-night-moicano-saintdenis' title='UFC FRANCIA: ¡Renato Moicano Derrota a Benoit Saint Denis TKO en el Segundo Asalto! ¡Imavov Derrota a Allen Por Decisión Unánime! ¡Ailín Pérez Somete en el Primer Asalto a Zhelezniakova!' author={null} text='Noche de UFC en Francia donde tuvimos la victoria de la argentina Ailín Pérez en el primer asalto por sumisión y la victoria del español Daniel Barez por decisión unánime.' date='28/09/2024' />
                <ArticlePreview img={sandhagenVSnurmagomedov} url='/covertura-ufc/fight-night-sandhagen-nurmagomedov' title='UFC FIGHT NIGHT: ¡Umar Nurmagomedov Gana Por Decisión Unánime a Cory! ¡El Ecuatoriano Marlon Vera Cae Derrotado por el Brasileño Figueiredo Por Decisión Unánime!' author={null} text='Joel Álvarez gana por nocaut en el tercer asalto de la pelea. Tony Ferguson vuelve a perder una vez más, cayendo derrotado en esta ocasión ante Michael Chiesa, y dejando entrever su retiro. Shara Bullet gana por decisión unánime su tercer pelea en la UFC.' date='03/08/2024' />
                <ArticlePreview img={whittakerVSaliskerov} url='/covertura-ufc/fight-night-whittaker-aliskerov' title='UFC Fight Night: ¡Whittaker Noquea en el Primer Asalto a Aliskerov! ¡Shara Bullet Noquea a su Rival en el Tercer Asalto!' author={null} text='Un evento donde contamos con emocionantes combates como el que tendran Johnny Walker y Volkan Oezdemir abriendo la cartelera principal, la pelea coestelar entre Sergei Pavlovich y Alexander Volkov, y el evento principal protagonizado por Robert Whittaker y Ikram Aliskerov.' date='22/06/2024' />
                <ArticlePreview img={cannonierVSimano} url='/covertura-ufc/fight-night-cannonier-imanov' title='UFC Fight Night: ¡Imanov Noquea a Canonnier! ¡Dominick Reyes Gana por Nocaut en el Primer Asalto! y ¡Raul Rosas JR Somete en el Segundo Asalto!' author={null} text='El UFC Fight Night Canonnier vs Imanov, nos dejó 5 nocauts, 1 sumisión y un montón de peleas espectaculares que valen la pena ver, en una cartelera organizada en la ciudad de Loisville en el Estado de Kentucky.' date='09/06/2024' />
                <ArticlePreview img={lewisVsNascimento} url='/covertura-ufc/fight-night-lewis-nascimento' title='UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!' author={null} text='En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.' date='12/05/2024' />
            </section>
        </main>
    )
}