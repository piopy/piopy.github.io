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

    if (!container) {
        console.error("Contenitore non trovato!");
        return;
    }

    // Funzione di debounce per ottimizzare il ridimensionamento della finestra
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Funzione che costruisce la sezione in base alla dimensione dello schermo
    function setupTechnologies() {
        // Pulisce il contenitore per ricreare il contenuto
        container.innerHTML = '';

        const isMobile = window.matchMedia("(max-width: 991px)").matches;

        if (isMobile) {
            // --- VISTA MOBILE: Carosello infinito animato con CSS ---
            const inner = document.createElement("div");
            inner.className = "tech-scroll-inner mobile-carousel";

            // Duplica la lista di tecnologie per creare un loop fluido
            const duplicatedTechs = [...techList, ...techList];

            duplicatedTechs.forEach(tech => {
                const box = document.createElement("div");
                box.className = "tech-box";
                // Per mobile, mostriamo solo icona e nome per un look più pulito
                box.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"><span>${tech.name}</span>`;
                inner.appendChild(box);
            });

            container.appendChild(inner);
        } else {
            // --- VISTA DESKTOP: Scroll interattivo con il mouse (logica originale) ---
            const inner = document.createElement("div");
            inner.className = "tech-scroll-inner";

            techList.forEach(tech => {
                const box = document.createElement("div");
                box.className = "tech-box";
                box.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"><span>${tech.name}</span><p>${tech.description}</p>`;
                inner.appendChild(box);
            });

            container.appendChild(inner);

            // Aggiunta delle frecce indicative per la vista desktop
            const leftArrow = document.createElement("div");
            leftArrow.className = "scroll-arrow left-arrow";
            leftArrow.innerHTML = `&larr;`; // Freccia sinistra

            const rightArrow = document.createElement("div");
            rightArrow.className = "scroll-arrow right-arrow";
            rightArrow.innerHTML = `&rarr;`; // Freccia destra

            container.appendChild(leftArrow);
            container.appendChild(rightArrow);

            inner.style.animation = "none";
            inner.style.transform = "translateX(0)";

            let scrollAmount = 0;
            let scrollSpeed = 0;
            let req;

            const minScrollLimit = -(inner.scrollWidth - container.offsetWidth + 100);
            const maxScrollLimit = 100;

            const scroll = () => {
                scrollAmount += scrollSpeed;

                if (scrollAmount > maxScrollLimit) {
                    scrollAmount = maxScrollLimit;
                    scrollSpeed = 0;
                } else if (scrollAmount < minScrollLimit) {
                    scrollAmount = minScrollLimit;
                    scrollSpeed = 0;
                }

                // Gestione della visibilità delle frecce
                leftArrow.style.visibility = (scrollAmount >= maxScrollLimit - 1) ? 'hidden' : 'visible';
                leftArrow.style.opacity = (scrollAmount >= maxScrollLimit - 1) ? '0' : '1';
                rightArrow.style.visibility = (scrollAmount <= minScrollLimit + 1) ? 'hidden' : 'visible';
                rightArrow.style.opacity = (scrollAmount <= minScrollLimit + 1) ? '0' : '1';

                inner.style.transform = `translateX(${scrollAmount}px)`;
                req = requestAnimationFrame(scroll);
            };

            leftArrow.style.opacity = '0';
            rightArrow.style.opacity = '0';

            container.addEventListener("mouseenter", () => {
                // Mostra le frecce solo se non si è già ai limiti
                if (scrollAmount < maxScrollLimit - 1) {
                    leftArrow.style.opacity = '1';
                }
                if (scrollAmount > minScrollLimit + 1) {
                    rightArrow.style.opacity = '1';
                }

                cancelAnimationFrame(req);
                req = requestAnimationFrame(scroll);
            });

            container.addEventListener("mousemove", (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const middle = rect.width / 2;
                const maxSpeed = 25;
                scrollSpeed = (middle - x) / middle * maxSpeed;
            });

            container.addEventListener("mouseleave", () => {
                leftArrow.style.opacity = '0';
                rightArrow.style.opacity = '0';
                cancelAnimationFrame(req);
                scrollSpeed = 0;
            });
        }
    }

    // Esegue la funzione al caricamento e la ri-esegue al ridimensionamento della finestra
    setupTechnologies();
    window.addEventListener('resize', debounce(setupTechnologies, 250));
});
