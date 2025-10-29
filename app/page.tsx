const timelineHighlights = [
  {
    title: 'El duelo que cambió su leyenda',
    detail:
      'A los 13 años derrotó a su primer rival adulto, Kihei Arima, lo que marcó el inicio de su reputación indomable en el Japón feudal.',
  },
  {
    title: 'Invicto por 60 duelos',
    detail:
      'Su racha perfecta lo convirtió en una figura temida y admirada, creando un aura casi mítica alrededor de su nombre.',
  },
  {
    title: 'Fundador del estilo Niten Ichi-ryū',
    detail:
      'Innovó con la katana y el wakizashi simultáneos, rompiendo los paradigmas técnicos de la esgrima clásica.',
  },
  {
    title: 'Autor de El Libro de los Cinco Anillos',
    detail:
      'Convirtió la estrategia en filosofía vital, mezclando guerra, arte y autocontrol en una guía atemporal.',
  },
];

const storytellingBeats = [
  'Arranca con el caos del periodo Sengoku: clanes en guerra, traiciones y un adolescente decidido a sobrevivir sin maestro.',
  'Presenta los duelos cruciales como escenas cinematográficas: la emboscada de los hermanos Yoshioka o el duelo en isla Ganryū.',
  'Intercala sus fracasos invisibles: el momento en que pierde a sus mentores, su elección de vivir como ronin errante y la tensión interna frente a la violencia.',
  'Cierra con el Musashi anciano en la cueva de Reigandō escribiendo su legado, contrastando la espada con el pincel y la introspección zen.',
];

const creativeAngles = [
  {
    heading: 'El video como carta de batalla',
    idea:
      'Estructura el episodio como una carta que Musashi deja a un aprendiz moderno, explicando cada principio con escenas de su vida.',
  },
  {
    heading: 'Documental con ritmo de anime',
    idea:
      'Combina narración documental con estética anime: secuencias dinámicas para los duelos, tanques sonoros con shamisen e ilustraciones estilo ukiyo-e animadas.',
  },
  {
    heading: 'Paralelos con el presente',
    idea:
      'Relaciona los cinco anillos con desafíos actuales: emprendimiento, creación de contenido, deportes de combate y mindfulness.',
  },
];

const callToAction = [
  'Pregunta a la audiencia qué principio de los cinco anillos aplicaría a su vida diaria y por qué.',
  'Invita a descargar una infografía gratuita con la cronología de Musashi y sus tácticas estratégicas.',
  'Adelanta el siguiente episodio con otra figura samurái o la evolución del bushidō, cultivando retención.',
];

export default function Page() {
  return (
    <main>
      <header>
        <h1>Video: Miyamoto Musashi</h1>
        <p>
          Guiona un episodio envolvente que muestre la dualidad de Musashi: guerrero invicto, artista y filósofo que convirtió la guerra en
          una escuela de vida. Usa estos bloques como blueprint para tu narrativa.
        </p>
      </header>

      <section>
        <article className="tile">
          <h2>Gancho inicial (30 segundos)</h2>
          <p>
            Abre con la imagen de Musashi llegando tarde al duelo en la isla Ganryū mientras talla un bokken con un remo. La tensión del
            rival impaciente, el sol cegador y la marea subiendo generan suspense inmediato. Cierra el gancho con la pregunta: “¿Cómo
            un samurái sin maestro se convirtió en leyenda sin perder nunca un combate?”.
          </p>
        </article>

        <aside className="tile callout">
          <h2>Pieza visual clave</h2>
          <p>
            Diseña un mapa estilizado de Japón con los duelos más emblemáticos señalados y transiciones con sumi-e animado para conectar
            cada capítulo.
          </p>
        </aside>
      </section>

      <div className="tile" style={{ marginTop: '2rem' }}>
        <h2>Estructura narrativa sugerida</h2>
        <div className="grid-columns">
          <div className="grid">
            <div>
              <h3>Acto 1 · Forja</h3>
              <p>
                Presenta el origen humilde, el Japón en guerra y su primer duelo victorioso. Explica cómo su estilo autodidacta nace del
                caos y la improvisación. Inserta referentes visuales como pergaminos ilustrados y maquetas 3D superpuestas.
              </p>
            </div>
            <div>
              <h3>Acto 2 · Ascenso</h3>
              <p>
                Recorre las batallas más significativas y sus aprendizajes espirituales. Explica el desarrollo del Niten Ichi-ryū con
                comparativas tácticas y animaciones vectoriales de sus movimientos duales.
              </p>
            </div>
          </div>
          <div className="grid">
            <div>
              <h3>Acto 3 · Trascendencia</h3>
              <p>
                Muestra al Musashi maduro: mentor de artistas, escultor y pensador estratégico. Resalta la escritura del Libro de los Cinco
                Anillos como legado práctico para creativos y estrategas modernos.
              </p>
            </div>
            <div>
              <h3>Epílogo</h3>
              <p>
                Cierra con la leyenda versus la persona: el retiro en Reigandō, su meditación y la última reflexión sobre “ganar sin pelear”.
                Refuerza la invitación a aplicar sus enseñanzas hoy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tile" style={{ marginTop: '2rem' }}>
        <h2>Momentos imprescindibles</h2>
        <ul>
          {timelineHighlights.map((highlight) => (
            <li key={highlight.title}>
              <strong>{highlight.title}:</strong> {highlight.detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="tile" style={{ marginTop: '2rem' }}>
        <h2>Ritmo narrativo</h2>
        <ul>
          {storytellingBeats.map((beat) => (
            <li key={beat}>{beat}</li>
          ))}
        </ul>
      </div>

      <div className="tile" style={{ marginTop: '2rem' }}>
        <h2>Ángulos creativos</h2>
        <ul>
          {creativeAngles.map((angle) => (
            <li key={angle.heading}>
              <strong>{angle.heading}:</strong> {angle.idea}
            </li>
          ))}
        </ul>
      </div>

      <div className="tile" style={{ marginTop: '2rem' }}>
        <h2>Llamadas a la acción</h2>
        <ul>
          {callToAction.map((cta) => (
            <li key={cta}>{cta}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
