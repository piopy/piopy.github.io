const projects = [
  {
    name: "CCVA",
    year: 2016,
    description: "Encrypt files with password and hide them into other files",
    link: "https://github.com/piopy/ccva",
    image: "images/github-projects.png",
    tags: ["C#", "Cryptography", "Security"]
  },
  {
    name: "SimpleAES",
    year: 2016,
    description: "Crypt files with password (AES256)",
    link: "https://github.com/piopy/SimpleAES",
    image: "images/github-projects.png",
    tags: ["C#", "Cryptography", "Security" ]
  },
  {
    name: "adcatch",
    year: 2017,
    description: "Ad-blocker for Windows",
    link: "https://github.com/piopy/adcatch",
    image: "images/github-projects.png",
    tags: ["C#", "Windows", "Ad-Blocker"]
  },
  {
    name: "pio-bot",
    year: 2021,
    description: "Chatterbot telegram with lots of functions (includes scrapers)",
    link: "https://github.com/piopy/pio-bot",
    image: "images/github-projects.png",
    tags: ["Python", "Telegram API", "Web Scraping"]
  },
  {
    name: "instaWiper",
    year: 2021,
    description: "Fast instagram post archiver / eraser",
    link: "https://github.com/piopy/instaWiper",
    image: "images/github-projects.png",
    tags: ["Python", "Selenium", "Automation"]
  },
  {
    name: "HaNAO-Tower",
    year: 2021,
    description: "University project - Teaching a NAO robot playing tower of Hanoi using two ML algorithms",
    link: "https://github.com/piopy/HaNAO-Tower",
    image: "images/github-projects.png",
    tags: ["Python", "Machine Learning"]
  },
  {
    name: "fantacalcio-py",
    year: 2021,
    description: "Manipulation of datasets applied to Italian fantasy football",
    link: "https://github.com/piopy/fantacalcio-py",
    image: "images/github-projects.png",
    tags: ["Python", "Pandas","Fantasy Football", "Data Analysis"]
  },
  {
    name: "Pz8 (offline)",
    year: 2022,
    description: "Global and Legal IPTV website (username: utente, password: piopy). Currently offline due to Heroku's new policy on free hosting hours.",
    link: "https://youtu.be/pFptt7Cargc",
    image: "images/web.png",
    tags: ["Python", "Flask", "Scraping", "IPTV"]
  },
  {
    name: "CCVpy",
    year: 2022,
    description: "Encrypt files with password and hide them into other files using python (AES256 enc.)",
    link: "https://github.com/piopy/ccvpy",
    image: "images/github-projects.png",
    tags: ["Python", "Cryptography", "AES"]
  },
  {
    name: "SoleXIV",
    year: 2023,
    description: "Budget management using python",
    link: "https://github.com/piopy/solexiv",
    image: "images/github-projects.png",
    tags: ["Python", "Data Management", "Docker", "Streamlit", "MongoDB"]
  },
  {
    name: "PFN [Collaboration]",
    year: 2024,
    description: "A web app to produce near-real-time statistics on your investment portfolio",
    link: "https://github.com/viventriglia/personal-finance-for-newbies",
    image: "images/github-projects.png",
    tags: ["Python", "Streamlit", "Finance", "Data Visualization"]
  },
  {
    name: "Wallpaper-map-generator",
    year: 2024,
    description: "Using streamlit + prettymap to generate wallpapers of your city",
    link: "https://github.com/piopy/wallpaper-map-generator",
    image: "images/github-projects.png",
    tags: ["Python", "Streamlit", "Visualization"]
  },
  {
    name: "oops-i-did-it-again-setup",
    year: 2025,
    description: "For when you 'accidentally' format your Linux. Instantly restores VS Code, Docker, Spotify & your sanity.",
    link: "https://github.com/piopy/oops-i-did-it-again-setup",
    image: "images/github-projects.png",
    tags: ["Bash", "Linux", "Automation"]
  },
  {
    name: "promptmap-API [Fork]",
    year: 2025,
    description: "A security scanner for custom LLM API",
    link: "https://github.com/piopy/promptmap-API",
    image: "images/github-projects.png",
    tags: ["Python", "LLM", "Security", "Prompt injection testing"]
  },
  {
    name: "Domingo [VIBE]",
    year: 2025,
    description: "FastAPI project that uses the Gemini API and the fact that calls are free to facilitate language learning through LLM",
    link: "https://github.com/piopy/domingo",
    image: "images/github-projects.png",
    tags: ["Python", "FastAPI", "LLM", "Education", "Language Learning", "Vibe"]
  },
  {
    name: "Ceppa [VIBE]",
    year: 2026,
    description: "E-learning app powered by LLM knowledge.",
    link: "https://github.com/piopy/ceppa/",
    image: "images/github-projects.png",
    tags: ["Python", "LLM", "Education", "FastAPI", "Vibe"]
  }
  // {
  //   name: "TBD",
  //   year: 2026,
  //   description: "TBD",
  //   link: "https://github.com/piopy/",
  //   image: "images/github-projects.png"
  // }
];

// Funzione per generare dinamicamente i progetti
function populateProjects() {
  const container = document.getElementById("projects-container");

  // Pulisce il contenitore prima di aggiungere i progetti
  container.innerHTML = "";

  // Itera su ogni progetto in ordine inverso (dal più recente al più datato)
  projects.slice().reverse().forEach((project, index) => {
    let tagsHTML = "";
    if (project.tags && project.tags.length > 0) {
      project.tags.forEach(tag => {
        tagsHTML += `<span class="project-tag">${tag}</span>`;
      });
    }
    
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
                      ${tagsHTML ? `<div class="project-tags">${tagsHTML}</div>` : ''}
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
