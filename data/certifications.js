// Certificazioni
const certifications = [
    // Esempio di struttura - rimuovi il commento e popola quando la certificazione sarà pronta:
    // {
    //     title: "Pippo Certified Solutions Architect",
    //     issuer: "Pippo Web Services",
    //     date: "2024-03",
    //     link: "https://...",
    //     description: "Optional description"
    // }
];

function populateCertifications() {
    const section = document.getElementById("certifications");
    const container = document.getElementById("certifications-container");
    const navLink = document.querySelector('a[href="#certifications"]');

    // Nascondi la sezione e il link nella navbar se non ci sono certificazioni
    if (!certifications || certifications.length === 0) {
        if (section) {
            section.style.display = "none";
        }
        if (navLink && navLink.parentElement) {
            navLink.parentElement.style.display = "none";
        }
        return;
    }

    // Mostra la sezione e il link se ci sono certificazioni
    if (section) {
        section.style.display = "block";
    }
    if (navLink && navLink.parentElement) {
        navLink.parentElement.style.display = "block";
    }

    if (!container) return;

    container.innerHTML = "";

    certifications.forEach(cert => {
        const card = document.createElement("div");
        card.className = "col-md-6 col-sm-12";

        card.innerHTML = `
            <div class="certification-card">
                <div class="certification-header">
                    <h3>${cert.link ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer">${cert.title}</a>` : cert.title}</h3>
                    <p class="certification-meta">
                        <i class="fa fa-building"></i> ${cert.issuer}
                        ${cert.date ? `<span class="separator">|</span> <i class="fa fa-calendar"></i> ${cert.date}` : ''}
                    </p>
                </div>
                ${cert.description ? `<p class="certification-description">${cert.description}</p>` : ''}
                ${cert.link ? `<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">View credential <i class="fa fa-external-link"></i></a>` : ''}
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateCertifications);
