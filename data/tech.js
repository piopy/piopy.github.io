document.addEventListener("DOMContentLoaded", function () {
    // Dati delle tecnologie
    const techList = [
        { name: "Python", description: "", icon: "images/tech/python.svg" },
        { name: "GIT", description: "Version control system", icon: "images/tech/git.svg" },
        { name: "Docker [compose]", description: "Containerized application platform", icon: "images/tech/docker.svg" },
        { name: "Terraform", description: "Infrastructure as code", icon: "images/tech/terraform.svg" },
        { name: "Dagster", description: "Data orchestration framework", icon: "images/tech/dagster.png" },
        { name: "FastAPI", description: "High-performance API framework", icon: "images/tech/fastapi.svg" },
        { name: "Taipy", description: "Data HTML apps for Python", icon: "images/tech/taipy.svg" },
        { name: "Streamlit", description: "Data HTML apps for Python", icon: "images/tech/streamlit.svg" },
        { name: "Pandas", description: "Data analysis library", icon: "images/tech/pandas.svg" },
        { name: "AWS", description: "Cloud computing platform", icon: "images/tech/aws.svg" },
        { name: "PostgreSQL", description: "Advanced SQL database", icon: "images/tech/postgresql.svg" },
        { name: "MongoDB", description: "NoSQL document database", icon: "images/tech/mongodb.svg" },
        { name: "Various LLMs", description: "Open & closed-source language models", icon: "images/tech/huggingface.svg" },
        { name: "Slack", description: "Team communication tool", icon: "images/tech/slack.svg" },
        { name: "Linux", description: "Open-source OS", icon: "images/tech/linux.svg" },
        { name: "Bash", description: "Shell scripting language", icon: "images/tech/bash.svg" },
        { name: "Windows", description: "Operating system by Microsoft", icon: "images/tech/windows.svg" },
        { name: "GCP (Currently learning)", description: "Cloud computing platform", icon: "images/tech/gcp.svg" }
    ];

    const container = document.querySelector("#technologies .tech-scroll-container");

    // Verifica se il contenitore è stato selezionato correttamente
    if (!container) {
        console.error("Contenitore non trovato!");
        return;
    }

    // Verifica se è mobile o no
    // const isMobile = window.innerWidth <= 1000;
    const isMobile = window.matchMedia("(max-width: 1000px)").matches;
    // console.log("Is Mobile:", isMobile); // Log per verificare se è mobile

    if (isMobile) {
        // Se siamo su dispositivi mobili, creiamo una lista puntata
        const list = document.createElement("ul");
        list.className = "tech-list"; // Classe per la lista su mobile

        techList.forEach(tech => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${tech.name}: ${tech.description}`;
            list.appendChild(listItem);
            
            // console.log("Item aggiunto:", listItem);
        });

        container.appendChild(list);
    } else {
        // Se non siamo su dispositivi mobili, mostra i box con lo scroll infinito
        const inner = document.createElement("div");
        inner.className = "tech-scroll-inner";

        // Crea i box con le tecnologie
        techList.forEach(tech => {
            const box = document.createElement("div");
            box.className = "tech-box";
            box.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"><span>${tech.name}</span><p>${tech.description}</p>`;
            inner.appendChild(box);
        });

        container.appendChild(inner);

        // Stop default animation
        inner.style.animation = "none";
        inner.style.transform = "translateX(0)";

        let scrollAmount = 0;
        let scrollSpeed = 0;
        let req;

        // Calcola i limiti dello scroll
        const minScrollLimit = -(inner.scrollWidth - container.offsetWidth + 100);
        const maxScrollLimit = 100; // Un piccolo margine positivo

        const scroll = () => {
            // Aggiorna la posizione di scroll
            scrollAmount += scrollSpeed;

            // Limita lo scroll per non andare oltre i limiti
            if (scrollAmount > maxScrollLimit) {
                scrollAmount = maxScrollLimit;
                scrollSpeed = 0; // Ferma lo scroll quando raggiunge il limite destro
            } else if (scrollAmount < minScrollLimit) {
                scrollAmount = minScrollLimit;
                scrollSpeed = 0; // Ferma lo scroll quando raggiunge il limite sinistro
            }

            // Applica la trasformazione
            inner.style.transform = `translateX(${scrollAmount}px)`;

            req = requestAnimationFrame(scroll);
        };

        container.addEventListener("mouseenter", () => {
            // Avvia l'animazione quando il mouse entra
            cancelAnimationFrame(req); // Previene animazioni multiple
            req = requestAnimationFrame(scroll);
        });

        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const middle = rect.width / 2;
            const maxSpeed = 25;

            // Mantieni la logica originale: se il mouse è a destra, scrolla verso sinistra e viceversa
            scrollSpeed = (middle - x) / middle * maxSpeed;
        });

        container.addEventListener("mouseleave", () => {
            cancelAnimationFrame(req);
            scrollSpeed = 0;
        });
    }
});
