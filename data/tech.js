document.addEventListener("DOMContentLoaded", function () {
    // Dati delle tecnologie - categorizzate
    const techCategories = {
        known: [
            { name: "Python", description: "Primary programming language", url: "https://www.python.org", icon: "images/tech/python.svg"},
            { name: "GIT", description: "Version control system", url: "https://git-scm.com", icon: "images/tech/git.svg"},
            { name: "Docker [compose]", description: "Containerized application platform", url: "https://www.docker.com", icon: "images/tech/docker.svg"},
            { name: "Terraform", description: "Infrastructure as code", url: "https://www.terraform.io", icon: "images/tech/terraform.svg"},
            { name: "Dagster", description: "Data orchestration framework", url: "https://dagster.io", icon: "images/tech/dagster.png"},
            { name: "FastAPI", description: "High-performance API framework", url: "https://fastapi.tiangolo.com", icon: "images/tech/fastapi.svg"},
            { name: "Taipy", description: "Data HTML apps for Python", url: "https://www.taipy.io", icon: "images/tech/taipy.svg"},
            { name: "Streamlit", description: "Data HTML apps for Python", url: "https://streamlit.io", icon: "images/tech/streamlit.svg"},
            { name: "Jupyter", description: "Interactive environment for prototyping and EDA", url: "https://jupyter.org/", icon: "images/tech/jupyter.svg"},
            { name: "Pandas", description: "Data analysis library", url: "https://pandas.pydata.org", icon: "images/tech/pandas.svg"},
            { name: "AWS", description: "Cloud computing platform", url: "https://aws.amazon.com", icon: "images/tech/aws.svg"},
            { name: "PostgreSQL", description: "Advanced SQL database", url: "https://www.postgresql.org", icon: "images/tech/postgresql.svg"},
            { name: "MongoDB", description: "NoSQL document database", url: "https://www.mongodb.com", icon: "images/tech/mongodb.svg"},
            { name: "Various LLMs", description: "Open & closed-source language models", url: "https://huggingface.co", icon: "images/tech/huggingface.svg"},
            { name: "Slack", description: "Team communication tool", url: "https://slack.com", icon: "images/tech/slack.svg"},
            { name: "Linux", description: "Open-source OS", url: "https://www.kernel.org", icon: "images/tech/linux.svg"},
            { name: "Bash", description: "Shell scripting language", url: "https://www.gnu.org/software/bash/", icon: "images/tech/bash.svg"},
            { name: "Windows", description: "Operating system by Microsoft", url: "https://www.microsoft.com/windows", icon: "images/tech/windows.svg"}
        ],
        learning: [
            { name: "GCP", description: "Cloud computing platform", url: "https://cloud.google.com", icon: "images/tech/gcp.svg" },
            { name: "Metabase", description: "Open-source business intelligence and analytics platform", url: "https://www.metabase.com/", icon: "images/tech/metabase.svg" },
            { name: "DBT", description: "Engineering tool for transforming data in warehouses", url: "https://www.getdbt.com/", icon: "images/tech/dbt.svg" }
        ]
    };

    // Combina tutte le tecnologie in un unico array per lo scroll
    const allTechs = [...techCategories.known, ...techCategories.learning];

    const container = document.querySelector("#technologies .tech-scroll-container");

    if (!container) {
        console.error("Contenitore non trovato!");
        return;
    }

    function setupTechnologies() {
        container.innerHTML = '';

        const inner = document.createElement("div");
        inner.className = "tech-scroll-inner";

        allTechs.forEach(tech => {
            const box = document.createElement("div");
            box.className = "tech-box";
            box.innerHTML = `
                <a href="${tech.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${tech.icon}" alt="${tech.name}">
                    <br>
                    <span>${tech.name}</span>
                    <p>${tech.description}</p>
                </a>
            `;
            inner.appendChild(box);
        });

        container.appendChild(inner);

        // Aggiungi le frecce indicative
        const leftArrow = document.createElement("div");
        leftArrow.className = "scroll-arrow left-arrow";
        leftArrow.innerHTML = `&larr;`;

        const rightArrow = document.createElement("div");
        rightArrow.className = "scroll-arrow right-arrow";
        rightArrow.innerHTML = `&rarr;`;

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

        // Touch support for mobile devices
        let touchStartX = 0;
        let touchCurrentX = 0;
        let isDragging = false;
        let startScrollAmount = 0;

        container.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
            startScrollAmount = scrollAmount;
            isDragging = true;
            cancelAnimationFrame(req);
            scrollSpeed = 0;
        }, { passive: true });

        container.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            
            touchCurrentX = e.touches[0].clientX;
            const deltaX = touchCurrentX - touchStartX;
            scrollAmount = startScrollAmount + deltaX;

            // Applica i limiti
            if (scrollAmount > maxScrollLimit) {
                scrollAmount = maxScrollLimit;
            } else if (scrollAmount < minScrollLimit) {
                scrollAmount = minScrollLimit;
            }

            inner.style.transform = `translateX(${scrollAmount}px)`;
            
            // Aggiorna la visibilità delle frecce
            leftArrow.style.visibility = (scrollAmount >= maxScrollLimit - 1) ? 'hidden' : 'visible';
            leftArrow.style.opacity = (scrollAmount >= maxScrollLimit - 1) ? '0' : '1';
            rightArrow.style.visibility = (scrollAmount <= minScrollLimit + 1) ? 'hidden' : 'visible';
            rightArrow.style.opacity = (scrollAmount <= minScrollLimit + 1) ? '0' : '1';
        }, { passive: true });

        container.addEventListener("touchend", () => {
            isDragging = false;
        }, { passive: true });

    }

    setupTechnologies();
});
