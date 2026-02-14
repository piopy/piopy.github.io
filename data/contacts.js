const socialProfiles = [
    {
        name: "Email",
        link: "mailto:antoniovolgarino@gmail.com",
        image: "images/github-sign.png", // Temporary - sostituire con email.png quando disponibile
        description: "Get in touch"
    },
    {
        name: "GitHub",
        link: "https://github.com/piopy",
        image: "images/github-sign.png",
        description: "My Github Repos"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/antonio-volgarino/",
        image: "images/linkedin.png",
        description: "Professional network"
    }
];

// Funzione per generare dinamicamente i social
function populateSocial() {
    const container = document.getElementById("social-profiles-container");

    // Pulisce il contenitore prima di aggiungere i social
    container.innerHTML = "";

    // Itera su ogni social e aggiunge la struttura HTML al contenitore
    socialProfiles.forEach(profile => {
        const profileHTML = `
            <div class="col-sm-3 col-md-3 col-6">
                <div class="work-thumb">
                    <a href="${profile.link}" target="_blank">
                        <img src="${profile.image}" class="img-responsive" alt="${profile.name}" style="height: 155px;">

                        <div class="work-info">
                            <h3>${profile.name}</h3>
                            <small>${profile.description}</small>
                        </div>
                    </a>
                </div>
            </div>
        `;

        // Aggiunge il nuovo social al contenitore
        container.innerHTML += profileHTML;
    });
}

// Popola i social al caricamento della pagina
document.addEventListener("DOMContentLoaded", populateSocial);
