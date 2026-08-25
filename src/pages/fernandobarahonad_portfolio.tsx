import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const PORTFOLIO_ASSETS = '/assets/fernandobarahonad_portfolio';
const EMBALE_STEAM_URL = 'https://store.steampowered.com/app/4488120/Embale__Wooden_Kart_Race/';
const TCP_IP_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/SGP6eL63bHA';

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

function Figure({ src, alt, width, height, caption }: FigureProps) {
  return (
    <figure className="portfolio-figure">
      <Image src={src} alt={alt} width={width} height={height} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

// Unlisted page: reachable only at /fernandobarahonad_portfolio, never linked
// from the header, footer or any other page.
export default function FernandoBarahonaPortfolio() {
  return (
    <>
      <Head>
        <title>Fernando Barahona – Portafolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="contact-hero-section">
        <h1>Fernando Barahona Dos Santos</h1>
        <p>Ingeniero electrónico · Desarrollador de videojuegos en Godot · Audio interactivo con Wwise · Docente</p>
      </section>

      {/* Perfil */}
      <section className="portfolio-section">
        <h2 className="category-title">PERFIL</h2>
        <div className="portfolio-bio">
          <p>
            Ingeniero electrónico (ESPE) y director de DiabloHumaStudio. Dirijo y programo <em>Nazis vs Commies</em>,
            un tower defense educativo en Godot 4 en el que diseñé e implementé todo el audio interactivo con
            Audiokinetic Wwise, y programé la tienda y el sistema de power-ups de <em>Embale</em>, un juego de karts
            con demo en Steam. He enseñado física en la ESPE y en el Liceo Internacional, y desarrollo de
            videojuegos con Godot en el Club de Videojuegos de la ESPE.
          </p>
        </div>
        <ul className="portfolio-skills">
          <li>Audiokinetic Wwise</li>
          <li>Godot 4 / GDScript</li>
          <li>Integración Wwise–Godot</li>
          <li>Música interactiva</li>
          <li>Diseño de sistemas de juego</li>
          <li>Docencia</li>
          <li>Producción audiovisual</li>
          <li>Next.js / React</li>
        </ul>
      </section>

      {/* Audio interactivo */}
      <section className="portfolio-section">
        <h2 className="category-title">AUDIO INTERACTIVO — NAZIS VS COMMIES</h2>
        <div className="portfolio-intro">
          <p>
            Proyecto en Wwise 2025.1 integrado en Godot 4 con el plugin oficial. 54 eventos sobre 45 sonidos
            fuente, música interactiva gobernada por un State Group de 11 estados, contenedores aleatorios para
            variación de disparos y daño, buses Master → Music / SFX con RTPC de volumen, y efectos Parametric EQ
            y RoomVerb como ShareSets. Un sistema de audio centralizado en GDScript postea los eventos y fija
            estados y RTPC desde el juego.
          </p>
        </div>
        <div className="portfolio-figure-grid">
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/state.png`}
            alt="Wwise: State Group music_state_group con sus 11 estados"
            width={1920}
            height={936}
            caption="State Group music_state_group: 11 estados (menús, mapa de mundos, carga, niveles de Stalingrado verano e invierno con variante intense, victoria). La vista de referencias muestra el evento set_music_sc_settings_menu que fija el estado."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/event_filter_set_music.png`}
            alt="Wwise: evento set_music_sc_game_won con acción Set State"
            width={1920}
            height={936}
            caption="Evento set_music_sc_game_won: acción Set State sobre music_state_group. Cada pantalla del juego postea su evento set_music_sc_* y el Music Switch Container cambia de playlist con transición sincronizada."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/music_track_curves.png`}
            alt="Wwise: pista musical intenser con envolvente de volumen"
            width={1920}
            height={938}
            caption="Música por capas: el segmento de Stalingrado verano superpone Verano Capa 1 y Capa 2; la pista intenser entra con una envolvente de volumen para la variante intense del nivel."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/game_parameter_music_volumen.png`}
            alt="Wwise: Game Parameter music_volume"
            width={1920}
            height={936}
            caption="Game Parameter music_volume (0–100, valor por defecto 50), referenciado por el RTPC de volumen del Music Bus. Su par sfx_volume controla el SFX Bus."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/music_bus_rtpc_bus_volume.png`}
            alt="Wwise: curva RTPC Bus Volume vs music_volume en el Music Bus"
            width={1920}
            height={936}
            caption="RTPC en el Music Bus: curva Bus Volume en función de music_volume, de −200 dB a 0 dB. Godot la actualiza con Wwise.set_rtpc_value_id desde el menú de ajustes."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/filter_parametricEQ.png`}
            alt="Wwise: ShareSet Parametric EQ de tres bandas"
            width={1920}
            height={936}
            caption="Effect ShareSet Parametric_EQ de tres bandas, diseñado para atenuar el audio del juego cuando se abre una ventana emergente."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/wwise/event_filter_parametricEQ.png`}
            alt="Wwise: evento set_popup_filter con acción Set Effect sobre el Master Audio Bus"
            width={1920}
            height={936}
            caption="Evento set_popup_filter: acción Set Effect que aplica el Parametric EQ al Master Audio Bus; reset_popup_filter lo retira. Pendiente de enlazar en la versión actual del proyecto Godot."
          />
        </div>
      </section>

      {/* Embale */}
      <section className="portfolio-section">
        <h2 className="category-title">EMBALE — WOODEN KART RACE</h2>
        <div className="portfolio-intro">
          <p>
            Juego de carreras de karts de madera en Godot 4.7, con demo publicada en Steam. Colaboré con el
            equipo desde octubre de 2025 (alrededor de 200 commits) a cargo de dos sistemas completos: la tienda
            del juego y la bolsa de power-ups.
          </p>
        </div>
        <div className="portfolio-figure-grid">
          <Figure
            src={`${PORTFOLIO_ASSETS}/embale/store_1.png`}
            alt="Embale: pantalla de la tienda con categorías e ítems"
            width={1085}
            height={612}
            caption="Tienda: categorías (ofertas, accesorios, cascos, trajes, ruedas, monedas, regalos), base de datos de ítems de juego, premium e internos, y proveedor de tienda desacoplado de la interfaz."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/embale/store_popup.png`}
            alt="Embale: ventana de confirmación de compra"
            width={1085}
            height={612}
            caption="Flujo de compra: manejo de fondos y transacciones con confirmación, incluyendo paquetes de moneda comprados con moneda premium."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/embale/store_widget_in_menu.png`}
            alt="Embale: menú principal con el widget de la tienda"
            width={1085}
            height={612}
            caption="Widget de tienda en el menú principal: ítems destacados con acceso directo a la tienda."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/embale/powerups_bag_in_action.png`}
            alt="Embale: carrera con la bolsa de power-ups en el HUD"
            width={1085}
            height={612}
            caption="Bolsa de power-ups en carrera: al recoger un power-up se guarda en una de dos ranuras del HUD (abajo a la izquierda) y se activa con un botón o tocando la bolsa; aquí, el efecto de fuego activo."
          />
          <Figure
            src={`${PORTFOLIO_ASSETS}/embale/powerups_code_design.png`}
            alt="Embale: documento de arquitectura del sistema de power-ups"
            width={835}
            height={800}
            caption="Arquitectura documentada del sistema: autoría en Blender → importación → colocación en pista → precalentamiento → recogida → bolsa → efecto con pool de objetos. El runtime nunca conoce un power-up concreto; añadir uno es solo contenido."
          />
        </div>
        <div className="portfolio-cta-row">
          <a className="portfolio-cta" href={EMBALE_STEAM_URL} target="_blank" rel="noopener noreferrer">
            Ver Embale en Steam
          </a>
        </div>
      </section>

      {/* Nazis vs Commies */}
      <section className="portfolio-section">
        <h2 className="category-title">NAZIS VS COMMIES</h2>
        <div className="portfolio-game-logo">
          <Image src="/assets/NvC/nvc_logo.png" alt="Nazis vs Commies" width={600} height={200} />
        </div>
        <div className="portfolio-intro">
          <p>
            Tower defense 2D educativo sobre la Segunda Guerra Mundial, desarrollado en Godot 4 desde 2022.
            Dirección de arte, arquitectura de código y programación de todos los sistemas; producción y
            financiamiento del proyecto. Demo publicada en itch.io, página de Steam en preparación y versiones
            Android e iOS en fase de pruebas.
          </p>
        </div>
        <div className="portfolio-figure-grid">
          <Figure
            src="/assets/NvC/screenshots/Screenshot_1.png"
            alt="Nazis vs Commies: captura de juego"
            width={1920}
            height={1080}
            caption="Nivel de Stalingrado: defensa por oleadas con unidades históricas."
          />
          <Figure
            src="/assets/NvC/screenshots/Screenshot_4.png"
            alt="Nazis vs Commies: captura de juego"
            width={1920}
            height={1080}
            caption="Cada nivel cambia el estado musical en Wwise; las variantes intense entran al subir la presión enemiga."
          />
        </div>
        <div className="portfolio-cta-row">
          <Link className="portfolio-cta" href="/nvc-game">
            Página del juego, tráiler y demo
          </Link>
        </div>
      </section>

      {/* Docencia */}
      <section className="portfolio-section">
        <h2 className="category-title">DOCENCIA</h2>
        <ul className="portfolio-list">
          <li>
            <strong>Instructor de Godot Engine</strong> — Club de Videojuegos ESPE, 2024–2025. Clases prácticas de
            escenas, nodos, señales y GDScript.
          </li>
          <li>
            <strong>Docente de Física</strong> — Liceo Internacional, 2015–2016.
          </li>
          <li>
            <strong>Docente de Física, Grupo de Alto Rendimiento (GAR)</strong> — ESPE, 2009. Preparación de
            becarios del Estado para universidades del país y del exterior.
          </li>
        </ul>
        <div className="video-showcase-grid">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/corporate_training/IntroductionToScenesAndNodes_v1_thumbnail.jpg">
                <source src="/assets/video_production/videos/corporate_training/IntroductionToScenesAndNodes_v1.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <h3>Godot: Introduction to Scenes and Nodes</h3>
            <p>Primera lección del curso Godot Master: cómo se relacionan escenas y nodos, explicado desde cero.</p>
          </div>
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/corporate_training/ProcesoEncendidoHidroelectricaLaurel_thumbnail.jpg">
                <source src="/assets/video_production/videos/corporate_training/ProcesoEncendidoHidroelectricaLaurel.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <h3>Proceso de encendido de la Central Hidroeléctrica El Laurel</h3>
            <p>Video de capacitación para operadores: la secuencia completa de arranque, paso a paso.</p>
          </div>
          <div className="video-showcase-item">
            <div className="video-container">
              <iframe
                className="showcase-video"
                src={TCP_IP_VIDEO_EMBED_URL}
                title="Modelo TCP/IP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3>Modelo TCP/IP</h3>
            <p>Video educativo sobre las capas del modelo TCP/IP, publicado en YouTube.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="portfolio-section">
        <h2 className="category-title">CONTACTO</h2>
        <div className="portfolio-contact">
          <p>
            <a href="mailto:fernandobarahonad@diablohumastudio.com">fernandobarahonad@diablohumastudio.com</a>
          </p>
          <p>
            <a href="https://diablohumastudio.com">diablohumastudio.com</a> · Quito, Ecuador
          </p>
        </div>
      </section>
    </>
  );
}
