const projects = [
  {
    name: "CCVA",
    year: 2016,
    description: "Encrypt files with password and hide them into other files",
    link: "https://github.com/piopy/ccva",
    image: "images/github-projects.png"
  },
  {
    name: "pio-bot",
    year: 2021,
    description: "Chatterbot telegram with lots of functions (includes scrapers)",
    link: "https://github.com/piopy/pio-bot",
    image: "images/github-projects.png"
  },
  {
    name: "SoleXIV",
    year: 2023,
    description: "Budget management using python",
    link: "https://github.com/piopy/solexiv",
    image: "images/github-projects.png"
  },
  {
    name: "adcatch",
    year: 2017,
    description: "Ad-blocker for Windows",
    link: "https://github.com/piopy/adcatch",
    image: "images/github-projects.png"
  },
  {
    name: "instaWiper",
    year: 2021,
    description: "Fast instagram post archiver / eraser",
    link: "https://github.com/piopy/instaWiper",
    image: "images/github-projects.png"
  },
  {
    name: "HaNAO-Tower",
    year: 2021,
    description: "University project - Teaching a NAO robot playing tower of Hanoi using two ML algorithms",
    link: "https://github.com/piopy/HaNAO-Tower",
    image: "images/github-projects.png"
  },
  {
    name: "fantacalcio-py",
    year: 2021,
    description: "Manipulation of datasets applied to Italian fantasy football",
    link: "https://github.com/piopy/fantacalcio-py",
    image: "images/github-projects.png"
  },
  {
    name: "SimpleAES",
    year: 2016,
    description: "Crypt files with password (AES256)",
    link: "https://github.com/piopy/SimpleAES",
    image: "images/github-projects.png"
  },
  {
    name: "Pz8 (offline)",
    year: 2022,
    description: "Global and Legal IPTV website (username: utente, password: piopy). Currently offline due to Heroku's new policy on free hosting hours.",
    link: "https://youtu.be/pFptt7Cargc",
    image: "images/web.png"
  },
  {
    name: "CCVpy",
    year: 2022,
    description: "Encrypt files with password and hide them into other files using python (AES256 enc.)",
    link: "https://github.com/piopy/ccvpy",
    image: "images/github-projects.png"
  },
  {
    name: "PFN (Collaboration)",
    year: 2024,
    description: "A web app to produce near-real-time statistics on your investment portfolio",
    link: "https://github.com/viventriglia/personal-finance-for-newbies",
    image: "images/github-projects.png"
  },
  {
    name: "Wallpaper-map-generator",
    year: 2024,
    description: "Using streamlit + prettymap to generate wallpapers of your city",
    link: "https://github.com/piopy/wallpaper-map-generator",
    image: "images/github-projects.png"
  },
  {
    name: "oops-i-did-it-again-setup",
    year: 2025,
    description: "For when you 'accidentally' format your Linux. Instantly restores VS Code, Docker, Spotify & your sanity.",
    link: "https://github.com/piopy/oops-i-did-it-again-setup",
    image: "images/github-projects.png"
  },
  {
    name: "domingo",
    year: 2025,
    description: "[VIBE] FastAPI project that uses the Gemini API and the fact that calls are free to facilitate language learning through LLM",
    link: "https://github.com/piopy/domingo",
    image: "images/github-projects.png"
  },
  {
    name: "ceppa",
    year: 2025,
    description: "[VIBE] E-learning app powered by LLM knowledge.",
    link: "https://github.com/piopy/ceppa/",
    image: "images/github-projects.png"
  },
  {
    name: "promptmap-API",
    year: 2025,
    description: "A security scanner for custom LLM API",
    link: "https://github.com/piopy/promptmap-API",
    image: "images/github-projects.png"
  },
  {
    name: "TBD",
    year: 2026,
    description: "TBD",
    link: "https://github.com/piopy/",
    image: "images/github-projects.png"
  }
];

// Funzione per generare dinamicamente i progetti
function populateProjects() {
  const container = document.getElementById("projects-container");

  // Pulisce il contenitore prima di aggiungere i progetti
  container.innerHTML = "";

  // Itera su ogni progetto e aggiunge la struttura HTML al contenitore
  projects.forEach((project, index) => {
    const projectHTML = `
          <div class="col-md-4 col-sm-6 col-lg-4">
              <div class="project-card">
                  <div class="project-image">
                      <a href="${project.link}" target="_blank">
                          <img src="${project.image}" class="img-responsive" alt="${project.name}">
                      </a>
                  </div>
                  <div class="project-details">
                      <small><i class="fa fa-clock-o"></i> ${project.year} </small>
                      <h3><a href="${project.link}" target="_blank">${project.name}</a></h3>
                      <p>${project.description}</p>
                  </div>
              </div>
          </div>
      `;

    // Aggiunge il nuovo progetto al contenitore
    container.innerHTML += projectHTML;

    // Aggiungi un clearfix dopo ogni due progetti su schermi piccoli
    if ((index + 1) % 2 === 0) {
      container.innerHTML += `<div class="clearfix visible-sm-block"></div>`;
    }
  });
}

// Popola i progetti al caricamento della pagina
document.addEventListener("DOMContentLoaded", populateProjects);
