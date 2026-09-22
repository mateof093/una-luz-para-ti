const memoryOrder = ["pame-rivas", "daya", "jampi", "mae", "mateo"];

const memories = {
  "pame-rivas": {
    name: "Pame Rivas",
    relationship: "Amiga",
    quote: "Eres luz y brillas, nunca permitas que nadie te apague.",
    photo: "./memories/pame-rivas/foto.jpeg",
    photoAlt: "Pame Rivas y Gaby riendo juntas en un restaurante",
    photoPosition: "50% 46%",
    letterImage: "./memories/pame-rivas/carta.png",
    letterAlt: "Carta manuscrita original de Pame Rivas para Gaby",
    letterPdf: "./memories/pame-rivas/carta-original.pdf",
    letterTitle: "De Pame para ti",
    letterFormat: "image",
    preservationNote: "Su letra, sus dibujos y cada palabra se conservan tal como los creó para ti.",
    storageKey: "las-raices-pame-rivas",
  },
  daya: {
    name: "Daya",
    relationship: "Amiga",
    quote: "Cuando menos te lo esperes, ahí estaré; nunca te voy a dejar sola.",
    photo: "./memories/daya/foto.jpeg",
    photoAlt: "Gaby y Daya posando juntas frente a un espejo",
    photoPosition: "50% 47%",
    letterImage: "./memories/daya/carta.png",
    letterAlt: "Carta original de Daya para Gaby con un borde de estrellas",
    letterPdf: "./memories/daya/carta-original.pdf",
    letterTitle: "De Daya para ti",
    letterFormat: "image",
    preservationNote: "Sus estrellas, su diseño y cada palabra se conservan tal como los creó para ti.",
    storageKey: "las-raices-daya",
  },
  jampi: {
    name: "Jampi",
    relationship: "Amigo",
    quote: "Tu existencia no pasa desapercibida, siempre tocando el alma de los demás con esa energía y corazón tan grande que tienes.",
    photo: "./memories/jampi/foto.jpeg",
    photoAlt: "Jampi y Gaby abrazados durante una graduación",
    photoPosition: "50% 48%",
    letterImage: "./memories/jampi/carta.png",
    letterAlt: "Carta original de Jampi para Gaby",
    letterPdf: "./memories/jampi/carta-original.pdf",
    letterTitle: "De Jampi para ti",
    letterFormat: "image",
    preservationNote: "Su formato y cada una de sus palabras se conservan tal como los creó para ti.",
    storageKey: "las-raices-jampi",
  },
  mae: {
    name: "Mae",
    relationship: "Amiga",
    quote: "Estás destinada a conseguir cosas increíbles, porque eres una gran persona, una gran líder y una gran mujer también 💖",
    photo: "./memories/mae/foto.jpeg",
    photoAlt: "Mae, Gaby y sus amigos reunidos alrededor de un árbol de Navidad",
    photoPosition: "50% 50%",
    letterTitle: "De Mae para ti",
    letterFormat: "message",
    messageParagraphs: [
      "Amiga hermosa, te quiero muchísimo 💖 Espero que hayas tenido un hermoso día.",
      "Eres una persona increíble que admiro mucho. En realidad, agradezco mucho a la vida que este último tiempo hayamos podido unirnos mucho más y que hayamos podido coincidir en tantos espacios en los que hemos podido crecer y aprender tanto juntas",
      "Te quiero un montón y espero seguir pudiendo aprender y crecer así junto a ti 🌱",
      "Te deseo lo mejor ahora y siempre, porque estás destinada a conseguir cosas increíbles, porque eres una gran persona, una gran líder y una gran mujer también 💖",
    ],
    preservationNote: "Su mensaje y cada uno de sus emojis se conservan tal como los escribió para ti.",
    storageKey: "las-raices-mae",
  },
  mateo: {
    name: "Mateo",
    relationship: "Tu amor",
    quote: "No puedo pedir nada más a la vida ni a Dios, porque contigo lo tengo todo.",
    photo: "./memories/mateo/foto.jpeg",
    photoAlt: "Gaby y Mateo sonriendo juntos frente al espejo de un ascensor",
    photoPosition: "50% 40%",
    letterTitle: "De Mateo para ti",
    letterFormat: "typed",
    letterParagraphs: [
      "Amor de mi vida:",
      "Han sido tres cumpleaños que hemos compartido juntos y cada día sigo amándote más y reafirmando que tú eres el amor de mi vida y con quien quiero pasar el resto de mis días.",
      "Amo verte feliz y disfrutar cada uno de tus cumpleaños como esa niña pequeña a la que le hace ilusión saber que todos estamos ahí por ella. Tienes un corazón tan puro y noble que se encuentra en muy pocas personas, y yo soy el más afortunado por haberlo encontrado contigo.",
      "Hemos tenido buenas y malas, como toda relación, pero, a pesar de ello, siempre hemos sabido seguir adelante sin faltas de respeto, con amor y entendimiento, lo que hace que sigamos creciendo como pareja.",
      "Quiero seguir mimándote y amándote por el resto de mi vida; crecer juntos, formar nuestra familia y ver a nuestros hijos crecer y convertirse en grandes personas, incluso mejores que nosotros. Envejecer juntos y pasar nuestro retiro recordando nuestra vida, nuestras anécdotas y nuestras historias.",
      "No puedo pedir nada más a la vida ni a Dios, porque contigo lo tengo todo.",
    ],
    letterClosing: "Te amo, amor de mi vida, en esta y en todas las vidas.",
    letterAuthor: "Mateo",
    preservationNote: "Esta es la última luz. Cuando la guardes, todas las raíces encontrarán su forma.",
    storageKey: "las-raices-mateo",
  },
};

const stars = [
  { left: "15%", top: "24%", delay: "0.1s", memoryId: "pame-rivas" },
  { left: "31%", top: "16%", delay: "0.8s", memoryId: "daya" },
  { left: "47%", top: "27%", delay: "0.35s", memoryId: "mateo" },
  { left: "62%", top: "13%", delay: "1.05s", memoryId: "jampi" },
  { left: "79%", top: "25%", delay: "0.55s" },
  { left: "24%", top: "39%", delay: "1.25s" },
  { left: "71%", top: "41%", delay: "0.2s", memoryId: "mae" },
];

const state = {
  started: false,
  night: false,
  lights: false,
  soundOn: true,
  activeMemory: null,
  view: "memory",
  announcement: "",
  finalOpen: false,
  finalReady: false,
  saved: Object.fromEntries(
    memoryOrder.map((id) => [id, localStorage.getItem(memories[id].storageKey) === "saved"]),
  ),
};

const app = document.querySelector("#app");
const openingAudio = document.querySelector("#opening-audio");
const finalAudio = document.querySelector("#final-audio");
let timers = [];

function clearTimers() {
  timers.forEach((timer) => clearTimeout(timer));
  timers = [];
}

function later(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  timers.push(timer);
  return timer;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function savedCount() {
  return Object.values(state.saved).filter(Boolean).length;
}

function firstFourSaved() {
  return ["pame-rivas", "daya", "jampi", "mae"].every((id) => state.saved[id]);
}

function allSaved() {
  return memoryOrder.every((id) => state.saved[id]);
}

function rootsMarkup() {
  const groups = [
    ["one", "pame-rivas", ["M50 103 C49 96 45 92 38 89 C30 85 24 78 17 75", "M45 93 C39 93 35 96 29 99", "M34 87 C29 83 27 79 24 76"]],
    ["two", "daya", ["M50 103 C51 97 55 94 62 91 C70 88 76 82 84 77", "M57 94 C63 94 68 97 73 100", "M69 88 C74 85 77 81 80 78"]],
    ["three", "jampi", ["M50 103 C48 99 45 97 41 95 C36 93 31 91 25 87", "M41 95 C38 98 34 100 30 101", "M32 91 C29 88 27 86 24 84"]],
    ["four", "mae", ["M50 103 C53 100 57 98 61 96 C66 94 70 91 75 87", "M60 96 C64 99 68 100 72 101", "M69 92 C72 89 74 86 77 83"]],
  ];

  return `<svg aria-hidden="true" class="root-growth" preserveAspectRatio="none" viewBox="0 0 100 100">
    ${groups.map(([name, id, paths]) => `<g class="root-branch root-branch--${name} ${state.saved[id] ? "root-branch--visible" : ""}">
      ${paths.map((path) => `<path d="${path}" pathLength="1"></path>`).join("")}
    </g>`).join("")}
  </svg>`;
}

function starsMarkup() {
  const count = savedCount();
  const remaining = memoryOrder.length - count;
  const complete = allSaved();
  const centralReady = firstFourSaved();

  const invitation = complete
    ? ["El matapalo guarda todas sus luces.", "Toca una estrella para volver a sus cartas"]
    : count === 0
      ? ["Cada luz guarda algo para ti.", "Elige una para comenzar"]
      : count === 1
        ? ["Una raíz ya guarda su luz.", centralReady ? "La luz central te espera" : `Quedan ${remaining} luces por descubrir`]
        : [`${count} raíces ya guardan su luz.`, centralReady ? "La luz central te espera" : `Quedan ${remaining} luces por descubrir`];

  return `<section class="sky-lights" aria-hidden="${!state.lights}">
    ${stars.map((star, index) => {
      const memory = star.memoryId ? memories[star.memoryId] : null;
      const isSaved = star.memoryId ? state.saved[star.memoryId] : false;
      const locked = star.memoryId === "mateo" && !centralReady;
      const label = memory
        ? locked
          ? "La luz de Mateo se revelará al final"
          : `Abrir el recuerdo de ${memory.name}${isSaved ? ", luz guardada" : ""}`
        : `Luz decorativa ${index + 1}`;

      return `<button aria-label="${escapeHtml(label)}"
        class="memory-star ${memory && !locked ? "memory-star--available" : memory ? "memory-star--locked" : "memory-star--decorative"} ${isSaved ? "memory-star--saved" : ""}"
        ${!memory || locked ? "disabled" : ""}
        ${memory ? `data-action="open-memory" data-memory="${star.memoryId}"` : ""}
        style="left:${star.left};top:${star.top};animation-delay:${star.delay}"
        type="button">
        <span></span>
        ${memory ? `<span class="memory-star__label"><strong>${escapeHtml(memory.name)}</strong><small>${locked ? "La última luz" : isSaved ? "Luz guardada" : "Toca para abrir"}</small></span>` : ""}
      </button>`;
    }).join("")}
    <div class="lights-invitation"><p>${invitation[0]}</p><span>${invitation[1]}</span></div>
  </section>`;
}

function letterPaper(memory) {
  if (memory.letterFormat === "image") {
    return `<img alt="${escapeHtml(memory.letterAlt)}" src="${memory.letterImage}">`;
  }

  if (memory.letterFormat === "message") {
    return `<section aria-label="Mensaje original de Mae" class="message-letter">
      <p class="message-letter__eyebrow">Una luz escrita para ti</p>
      <div class="message-letter__bubble">
        ${memory.messageParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        <footer><span>Mae</span></footer>
      </div>
    </section>`;
  }

  return `<section aria-label="Carta de Mateo para Gaby" class="love-letter">
    <p class="love-letter__eyebrow">Para el amor de mi vida</p>
    <div class="love-letter__body">
      ${memory.letterParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      <p class="love-letter__closing">${escapeHtml(memory.letterClosing)}</p>
      <footer>${escapeHtml(memory.letterAuthor)}</footer>
    </div>
  </section>`;
}

function dialogMarkup() {
  if (!state.activeMemory) return "";
  const id = state.activeMemory;
  const memory = memories[id];

  if (state.view === "memory") {
    const actionText = memory.letterFormat === "message" ? "Leer su mensaje" : memory.letterFormat === "typed" ? "Leer mi carta" : "Leer su carta";
    return `<div aria-labelledby="memory-title" aria-modal="true" class="memory-dialog" role="dialog">
      <button aria-label="Cerrar recuerdo" class="memory-dialog__backdrop" data-action="close-memory" type="button"></button>
      <article class="memory-card">
        <button aria-label="Cerrar" class="memory-card__close" data-action="close-memory" type="button">×</button>
        <div class="memory-preview">
          <div class="memory-preview__photo">
            <img alt="${escapeHtml(memory.photoAlt)}" src="${memory.photo}" style="object-position:${memory.photoPosition}">
            <span aria-hidden="true">✦</span>
          </div>
          <div class="memory-preview__content">
            <p class="memory-kicker">Una luz de tu historia</p>
            <h2 id="memory-title">${escapeHtml(memory.name)}</h2>
            <p class="memory-relationship">${escapeHtml(memory.relationship)}</p>
            <blockquote>“${escapeHtml(memory.quote)}”</blockquote>
            <p class="memory-preview__hint">${escapeHtml(memory.preservationNote)}</p>
            <button class="memory-action" data-action="open-letter" type="button">${actionText} <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </article>
    </div>`;
  }

  const kicker = memory.letterFormat === "message" ? "Mensaje conservado" : memory.letterFormat === "typed" ? "La última luz" : "Carta original";
  const paperClass = memory.letterFormat === "message" ? "letter-view__paper--message" : memory.letterFormat === "typed" ? "letter-view__paper--typed" : "";
  const saveText = id === "mateo" ? (state.saved.mateo ? "Volver a revelar el árbol" : "Completar el árbol") : state.saved[id] ? "Volver a guardar esta luz" : "Guardar esta luz";

  return `<div aria-labelledby="memory-title" aria-modal="true" class="memory-dialog" role="dialog">
    <button aria-label="Cerrar recuerdo" class="memory-dialog__backdrop" data-action="close-memory" type="button"></button>
    <article class="memory-card memory-card--letter">
      <button aria-label="Cerrar" class="memory-card__close" data-action="close-memory" type="button">×</button>
      <div class="letter-view">
        <header class="letter-view__header">
          <div>
            <button class="letter-view__back" data-action="back-memory" type="button">← Volver al recuerdo</button>
            <p class="memory-kicker">${kicker}</p>
            <h2 id="memory-title">${escapeHtml(memory.letterTitle)}</h2>
          </div>
          ${memory.letterFormat === "image" ? `<a class="letter-view__original" href="${memory.letterPdf}" rel="noreferrer" target="_blank">Abrir PDF original</a>` : ""}
        </header>
        <div class="letter-view__paper ${paperClass}" tabindex="0">${letterPaper(memory)}</div>
        <footer class="letter-view__footer">
          <p>${id === "mateo" ? "Al guardar esta luz, el matapalo se revelará." : "Al guardar esta luz, una nueva raíz comenzará a crecer."}</p>
          <button class="memory-action memory-action--save" data-action="save-light" type="button">${saveText}<span aria-hidden="true">✦</span></button>
        </footer>
      </div>
    </article>
  </div>`;
}

function finalMarkup() {
  if (!state.finalOpen) return "";
  return `<section aria-labelledby="final-title" aria-modal="true" class="final-reveal" role="dialog">
    <div class="final-reveal__sky" aria-hidden="true"></div>
    <div class="final-reveal__tree" aria-hidden="true"><img alt="" src="./matapalo-final.png"></div>
    <div class="final-reveal__copy">
      <p class="final-reveal__eyebrow">Las cinco luces encontraron su lugar</p>
      <h2 id="final-title">Las raíces que te guían a casa</h2>
      <p class="final-reveal__dedication">Este árbol creció con cada persona que ha dejado luz en tu vida. Sus raíces guardan tu historia, sus ramas acompañan tus sueños y, bajo su luz, siempre tendrás un lugar al cual regresar.</p>
    </div>
    <div class="final-reveal__actions ${state.finalReady ? "final-reveal__actions--ready" : ""}">
      <button data-action="close-final" type="button">Volver a sus cartas</button>
      <button data-action="replay" type="button">Revivir el comienzo</button>
    </div>
  </section>`;
}

function render() {
  const classes = ["experience", state.started && "experience--started", state.night && "experience--night", state.lights && "experience--lights"].filter(Boolean).join(" ");
  const showTree = allSaved() && state.started && state.lights && !state.finalOpen;

  app.innerHTML = `<main class="${classes}">
    <div class="scene" aria-hidden="true"><div class="scene__image"></div><div class="scene__sunset"></div><div class="scene__night"></div><div class="scene__haze"></div></div>
    <div aria-hidden="true" class="completed-tree ${showTree ? "completed-tree--visible" : ""}"><img alt="" src="./matapalo-final.png"></div>
    ${rootsMarkup()}
    <section class="opening" aria-hidden="${state.started}">
      <p class="opening__eyebrow">Una experiencia creada para ti</p>
      <h1>Hay algo en este cielo esperando por ti.</h1>
      <p class="opening__hint">Busca un lugar tranquilo y sube el volumen.</p>
      <button class="primary-button" data-action="start" type="button"><span>Comenzar</span><span aria-hidden="true" class="primary-button__spark">✦</span></button>
    </section>
    <section class="narration" aria-live="polite"><p>Incluso en las noches más oscuras,<br>hay personas cuya luz siempre puede<br class="desktop-break"> guiarte de regreso.</p></section>
    ${starsMarkup()}
    ${state.started ? `<button class="sound-toggle" data-action="toggle-sound" type="button"><span aria-hidden="true">${state.soundOn ? "♪" : "×"}</span>${state.soundOn ? "Silenciar" : "Activar sonido"}</button><button class="replay-button" data-action="replay" type="button">Volver al inicio</button>` : ""}
    <div class="sound-note" aria-hidden="${!state.started}"><span class="sound-note__pulse"></span>Tu voz · una noche entre estrellas</div>
    ${dialogMarkup()}
    ${finalMarkup()}
    <p class="save-announcement" aria-live="polite">${escapeHtml(state.announcement)}</p>
  </main>`;
}

function playAudio(audio) {
  audio.muted = !state.soundOn;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function replay() {
  clearTimers();
  state.started = false;
  state.night = false;
  state.lights = false;
  state.activeMemory = null;
  state.view = "memory";
  state.finalOpen = false;
  state.finalReady = false;
  state.announcement = "";
  [openingAudio, finalAudio].forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  render();
}

app.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const action = control.dataset.action;

  if (action === "start") {
    clearTimers();
    state.started = true;
    state.night = false;
    state.lights = false;
    render();
    playAudio(openingAudio);
    later(() => { state.night = true; render(); }, 1800);
    later(() => { state.lights = true; render(); }, 10500);
    return;
  }

  if (action === "toggle-sound") {
    state.soundOn = !state.soundOn;
    openingAudio.muted = !state.soundOn;
    finalAudio.muted = !state.soundOn;
    render();
    return;
  }

  if (action === "replay") {
    replay();
    return;
  }

  if (action === "open-memory") {
    state.activeMemory = control.dataset.memory;
    state.view = "memory";
    render();
    return;
  }

  if (action === "close-memory") {
    state.activeMemory = null;
    render();
    return;
  }

  if (action === "open-letter") {
    state.view = "letter";
    render();
    return;
  }

  if (action === "back-memory") {
    state.view = "memory";
    render();
    return;
  }

  if (action === "save-light") {
    const id = state.activeMemory;
    if (!id) return;
    const memory = memories[id];
    localStorage.setItem(memory.storageKey, "saved");
    state.saved[id] = true;
    state.announcement = `La luz de ${memory.name} ahora vive en una nueva raíz.`;
    state.activeMemory = null;
    state.view = "memory";
    render();

    if (id === "mateo") {
      later(() => {
        state.finalOpen = true;
        state.finalReady = false;
        render();
        playAudio(finalAudio);
        later(() => { state.finalReady = true; render(); }, 15500);
      }, 700);
    }
    return;
  }

  if (action === "close-final") {
    finalAudio.pause();
    state.finalOpen = false;
    state.finalReady = false;
    render();
  }
});

openingAudio.addEventListener("ended", () => {
  state.lights = true;
  render();
});

finalAudio.addEventListener("ended", () => {
  state.finalReady = true;
  render();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.activeMemory) {
    state.activeMemory = null;
    render();
  }
});

render();
