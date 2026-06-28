// Articoli pubblicati o in arrivo
const articles = [
    // Esempio di struttura - rimuovi il commento e popola quando l'articolo sarà pronto:
    {
        title: "AI and Accessibility: Describing STEM Images with Alt Texts and Extended Descriptions",
        date: "2026-06",
        publication: "CSUN",
        link: "https://scholarworks.calstate.edu/concern/publications/2j62sf53r",
        description: "This research proposes a hybrid intelligence approach combining rapid model output with expert validation as the only ethically sound solution to enhance STEM accessibility and foster inclusive knowledge dissemination.",
        tags: ["Digital Accessibility","Accessible Images","AI","Accessible Publishing","Alt Text"]
    }
];

function populateArticles() {
    const section = document.getElementById("articles");
    const container = document.getElementById("articles-container");
    const navLink = document.querySelector('a[href="#articles"]');
    
    // Nascondi la sezione e il link nella navbar se non ci sono articoli
    if (!articles || articles.length === 0) {
        if (section) {
            section.style.display = "none";
        }
        if (navLink && navLink.parentElement) {
            navLink.parentElement.style.display = "none";
        }
        return;
    }
    
    // Mostra la sezione e il link se ci sono articoli
    if (section) {
        section.style.display = "block";
    }
    if (navLink && navLink.parentElement) {
        navLink.parentElement.style.display = "block";
    }
    
    if (!container) return;
    
    container.innerHTML = "";
    
    articles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.className = "col-md-6 col-sm-12";
        
        let tagsHTML = "";
        if (article.tags && article.tags.length > 0) {
            article.tags.forEach(tag => {
                tagsHTML += `<span class="article-tag">${tag}</span>`;
            });
        }
        
        articleCard.innerHTML = `
            <div class="article-card">
                <div class="article-header">
                    <h3><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
                    <p class="article-meta">
                        <i class="fa fa-calendar"></i> ${article.date}
                        ${article.publication ? `<span class="separator">|</span> <i class="fa fa-book"></i> ${article.publication}` : ''}
                    </p>
                </div>
                <p class="article-description">${article.description}</p>
                ${tagsHTML ? `<div class="article-tags">${tagsHTML}</div>` : ''}
                <a href="${article.link}" class="article-link" target="_blank" rel="noopener noreferrer">
                    Read more <i class="fa fa-external-link"></i>
                </a>
            </div>
        `;
        
        container.appendChild(articleCard);
    });
}

document.addEventListener("DOMContentLoaded", populateArticles);
