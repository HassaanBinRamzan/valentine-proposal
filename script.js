const CONFIG = {
  herName: "Meri Jaan, Nayab Hassaan",
  myName: "Hassaan",
  intro: {
    kicker: "Warning: high cringe + high love 💘",
    title: "Hello jee {herName} 💌 meri baat sunain...",
    body:
      "I made this because even though yeh valentines weghera is not my thing i do not believe in it lekin i know yeh apkay liyay matter karta and i love you and i would do anything for you everyday is valentine day for me because i am with you. Normal texting was not dramatic enough toh mene socha kyun na apni skills show off karun aur apko kuch new dun. Ready for a mini chaos journey?",
    cta: "Start the chaos 💖",
  },
  mid: {
    kicker: "Important announcement 💞",
    title: "Aur haan kuch bht zaroori baatain 💗",
    points: [
      "You are my cutieeeeee.",
      "You are my princessssss.",
      "You are my choti dunyaaaaaa.",
      "And now, last but not least, I have one final question.",
    ],
    cta: "RONAA NAEEE 😤💘",
  },
  ask: {
    kicker: "Final boss question 💝",
    title: "Will you be my Valentine? ❤️",
    body: "Say yes and I unlock premium husband features. Say no and this button starts cardio.",
    yesText: "YES 💍",
    noText: "No 🙈",
  },
  yes: {
    kicker: "Correct answer detected ✅💘",
    title: "AYEEE, best choice 😘",
    body: "Tap a photo for a note.",
    replayText: "Replay 🔁💗",
  },
  gallery: [
    {
      src: "./photos/01.jpeg",
      title: "“Yahin Sukoon Milta Hai” ❤️",
      note: "Is photo mein main aap ko forehead kiss kar raha hoon kyun ke us waqt mujhe sirf yahi chahiye tha. Aap ka itna qareeb hona, aap ki warmth feel karna, aur bas thori dair ke liye duniya ko band kar dena. Jab main aap ko aise pappi karta hoon na, meri saari overthinking ruk jaati hai. Mera dil calm ho jata hai. Yeh pappi sirf pyaar nahi hota, yeh meri need hoti hai. Main yahin safe feel karta hoon, aap ke paas. ❤️🫂",
    },
    {
      src: "./photos/02.jpeg",
      title: "“Aap Ko Aise Hi Dekhta Rehta Hoon” ❤️",
      note: "Is moment mein main bas aap ko dekh raha hoon, bina kuch kahe. Aise hi haath par mun rakh ke, thora sa smile ke saath. Kyun ke jab aap saamne hoti hain, mujhe kuch aur karne ka dill hi ane karta. Aap ki shakal, aap ki aankhen, aap ki softness, sab kuch mujhe andar se bohat strong feel karwata hai. Main aap ko aise dekhta hoon jab dil keh raha hota hai, haan… aap meri hain. 💛",
    },
    {
      src: "./photos/03.jpeg",
      title: "“Khushi Aise Hi Nikal Aati Hai” ❤️",
      note: "Yahan main aap ke cheek par chummi kar raha hoon kyun ke dil khush tha. Koi reason nahi, koi planning nahi. Bas aap ki smile dekh kar automatically. Aap ka aise muskuraana mujhe bohat pyaara lagta hai. Mujhe lagta hai jaise main theek jagah hoon. Yeh pappi meri taraf se ek chhota sa thank you hota hai, ke aap meri zindagi mein ho. ❤️😊",
    },
    {
      src: "./photos/04.jpeg",
      title: "“Chhoti Cheez, Badi Feeling” ❤️",
      note: "Is photo mein main aap ko khila raha hoon aur mujhe yaad hai yeh kitna natural laga tha. Koi show off nahi, koi thought nahi. Bas care. Aise moments mujhe future ki yaad dilate hain. Ke shayad zindagi isi tarah hogi. Saath baithna, ek dusre ka khayal rakhna, hansna. Mujhe yeh bohat apna sa laga tha. Jaise main wohi kar raha hoon jo mujhe karna chahiye. 💍💛",
    },
    {
      src: "./photos/05.jpeg",
      title: "“Give and Take, Pyaar Ke Saath” ❤️",
      note: "Yahan aap mujhe khila rahi hain aur main aap ko aise dekh raha hoon jaise dil bhar aaya ho. Aap ka pyaar mujhe hamesha aise feel hota hai, soft aur sincere. Yeh sirf khilana nahi hota, yeh care hoti hai. Mujhe bohat acha lagta hai jab hum aise ek dusre ka khayal rakhte hain bina soche ke kaun zyada kar raha hai. Bas pyaar hota hai. 🤍",
    },
    {
      src: "./photos/06.jpeg",
      title: "“Haath Pakar Kar Sab Theek Lagta Hai” ❤️",
      note: "Is photo mein main aap ka haath pakar ke aap ke sar par kiss kar raha hoon kyun keh, Mere Haath mein, Tera haath ho, Saari Jannatein mere saath ho, Tu Jo Paas Ho, Phir Kya yeh jahan, Tere Pyar Mein Ho jaun Fanaa. ❤️🫂",
    },
  ],
  noTaunts: [
    "Nice try, jaan 😌",
    "No is currently unavailable 🚫",
    "Acha? confirm kar lo 👀",
    "Caught me? not today 🏃",
    "This button is on cardio 🏃‍♂️",
    "Nope, still zooming 💨",
    "Mission failed, try again 🎯",
    "Arey arey easy 😅",
    "Plot twist: still no-no 🎬",
    "Main bhaag raha hoon 🫣",
    "404: No button not found 🧠",
    "You tap, I teleport ✨",
  ],
  finalMusicSrc: "./assets/final.mp3",
};

const stage = document.getElementById("stage");
const bgm = document.getElementById("bgm");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalNote = document.getElementById("modalNote");
const modalImg = document.getElementById("modalImg");
const closeModalBtn = document.getElementById("closeModal");

const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

let noClicks = 0;
let lastFocus = null;
let confettiActive = false;
let confettiParticles = [];

function t(template) {
  return template.replaceAll("{herName}", CONFIG.herName).replaceAll("{myName}", CONFIG.myName);
}

function create(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value);
  }
  for (const child of children) {
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function renderIntro() {
  stopFinalMusic();
  stage.innerHTML = "";

  stage.append(
    create("p", { class: "kicker", text: CONFIG.intro.kicker }),
    create("h1", { class: "title", text: t(CONFIG.intro.title) }),
    create("p", { class: "lead", text: CONFIG.intro.body }),
    create("div", { class: "row" }, [
      create("button", { class: "btn btn-primary", type: "button", text: CONFIG.intro.cta, onclick: renderMid }),
    ])
  );

  stage.focus();
}

function renderMid() {
  stopFinalMusic();
  stage.innerHTML = "";

  stage.append(
    create("p", { class: "kicker", text: CONFIG.mid.kicker }),
    create("h1", { class: "title", text: CONFIG.mid.title }),
    create("ul", { class: "lead lead-list" }, CONFIG.mid.points.map((point) => create("li", { text: point }))),
    create("div", { class: "row" }, [
      create("button", { class: "btn btn-primary", type: "button", text: CONFIG.mid.cta, onclick: renderAsk }),
    ])
  );

  stage.focus();
}

function renderAsk() {
  stopFinalMusic();
  stage.innerHTML = "";
  noClicks = 0;

  const yesBtn = create("button", {
    class: "btn btn-yes",
    type: "button",
    text: CONFIG.ask.yesText,
    onclick: renderYes,
  });

  const noBtn = create("button", {
    class: "btn btn-no",
    type: "button",
    id: "noBtn",
    text: CONFIG.ask.noText,
    "aria-label": CONFIG.ask.noText,
  });

  const row = create("div", { class: "row ask-row", id: "askRow" }, [yesBtn, noBtn]);

  stage.append(
    create("p", { class: "kicker", text: CONFIG.ask.kicker }),
    create("h1", { class: "title", text: CONFIG.ask.title }),
    create("p", { class: "lead", text: CONFIG.ask.body }),
    row
  );

  setupRunawayNo(noBtn, row, yesBtn);
  stage.focus();
}

function overlaps(a, b, gap = 0) {
  return a.left < b.right + gap && a.right > b.left - gap && a.top < b.bottom + gap && a.bottom > b.top - gap;
}

function setupRunawayNo(noBtn, row, yesBtn) {
  row.style.position = "relative";
  noBtn.style.position = "relative";
  noBtn.style.left = "0px";
  noBtn.style.top = "0px";

  let floating = false;

  const moveNo = () => {
    noClicks += 1;
    const taunt = CONFIG.noTaunts[(noClicks - 1) % CONFIG.noTaunts.length];
    noBtn.textContent = taunt;
    noBtn.setAttribute("aria-label", taunt);

    const zone = row.getBoundingClientRect();
    if (!floating) {
      const r = noBtn.getBoundingClientRect();
      noBtn.style.position = "absolute";
      noBtn.style.left = `${Math.max(8, Math.floor(r.left - zone.left))}px`;
      noBtn.style.top = `${Math.max(8, Math.floor(r.top - zone.top))}px`;
      floating = true;
    }

    const noRect = noBtn.getBoundingClientRect();
    const yesRectAbs = yesBtn.getBoundingClientRect();
    const yesRect = {
      left: yesRectAbs.left - zone.left,
      top: yesRectAbs.top - zone.top,
      right: yesRectAbs.right - zone.left,
      bottom: yesRectAbs.bottom - zone.top,
    };

    const pad = 8;
    const maxX = Math.max(pad, zone.width - noRect.width - pad);
    const maxY = Math.max(pad, zone.height - noRect.height - pad);

    let placed = false;
    for (let i = 0; i < 200; i += 1) {
      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);
      const test = { left: x, top: y, right: x + noRect.width, bottom: y + noRect.height };
      if (!overlaps(test, yesRect, 12)) {
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = "5";
        placed = true;
        break;
      }
    }

    if (!placed) {
      const x = yesRect.left > zone.width / 2 ? pad : Math.max(pad, maxX - pad);
      const y = Math.max(pad, Math.min(maxY, yesRect.top));
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    }
  };

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moveNo();
  });
  noBtn.addEventListener(
    "touchstart",
    (event) => {
      event.preventDefault();
      moveNo();
    },
    { passive: false }
  );
  noBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      moveNo();
    }
  });
}

function renderYes() {
  stage.innerHTML = "";
  startConfetti(1800);
  startFinalMusic();

  stage.append(
    create("p", { class: "kicker", text: CONFIG.yes.kicker }),
    create("h1", { class: "title", text: CONFIG.yes.title }),
    create("p", { class: "lead", text: CONFIG.yes.body }),
    create("hr", { class: "sep" }),
    create("section", { class: "gallery", "aria-label": "Photo gallery" }, createGalleryCards()),
    create("div", { class: "row" }, [
      create("button", { class: "btn", type: "button", text: CONFIG.yes.replayText, onclick: renderIntro }),
    ])
  );

  stage.focus();
}

async function startFinalMusic() {
  if (!bgm) return;
  bgm.loop = true;
  if (!bgm.getAttribute("src")) {
    bgm.src = CONFIG.finalMusicSrc;
    bgm.load();
  }
  try {
    await bgm.play();
  } catch {  }
}

function stopFinalMusic() {
  if (!bgm) return;
  bgm.pause();
  bgm.currentTime = 0;
}

function createGalleryCards() {
  return CONFIG.gallery.map((item, index) => {
    const button = create("button", {
      class: "photo",
      type: "button",
      "aria-label": `Open note for ${item.title}`,
    });

    const image = create("img", {
      src: item.src,
      alt: item.title,
      loading: index < 2 ? "eager" : "lazy",
      decoding: "async",
    });

    const cap = create("span", { class: "cap", text: item.title });
    button.append(image, cap);
    button.addEventListener("click", () => openModal(item));
    return button;
  });
}

function openModal(item) {
  lastFocus = document.activeElement;
  modalTitle.textContent = item.title;
  modalNote.textContent = item.note;
  modalImg.src = item.src;
  modalImg.alt = item.title;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModalBtn.focus();
}

function closeModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  modalImg.src = "";
  document.body.style.overflow = "";
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

function resizeConfetti() {
  const ratio = window.devicePixelRatio || 1;
  confettiCanvas.width = Math.floor(window.innerWidth * ratio);
  confettiCanvas.height = Math.floor(window.innerHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

window.addEventListener("resize", resizeConfetti);
resizeConfetti();

function makeParticle() {
  return {
    x: Math.random() * window.innerWidth,
    y: -30 - Math.random() * 120,
    vx: (Math.random() - 0.5) * 3.4,
    vy: 2.6 + Math.random() * 3.8,
    size: 6 + Math.random() * 8,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.25,
    hue: Math.floor(Math.random() * 360),
  };
}

function startConfetti(durationMs = 1600) {
  const isMobile = window.matchMedia("(max-width: 860px)").matches;
  const count = isMobile ? 90 : 180;
  confettiParticles = Array.from({ length: count }, () => makeParticle());
  confettiActive = true;
  const startedAt = performance.now();

  const tick = (now) => {
    drawConfetti();
    if (now - startedAt < durationMs) requestAnimationFrame(tick);
    else {
      confettiActive = false;
      drawConfetti();
    }
  };

  requestAnimationFrame(tick);
}

function drawConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if (!confettiActive) return;

  confettiParticles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.vy += 0.02;
    p.vx *= 0.995;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = `hsl(${p.hue} 90% 60%)`;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.66);
    ctx.restore();
  });

  confettiParticles = confettiParticles.map((p) => (p.y > window.innerHeight + 40 ? makeParticle() : p));
}

renderIntro();
