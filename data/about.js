
const aboutMe = [
    { "icon": "fa fa-briefcase", "text": "Data Engineer @Zanichelli Ed." },
    { "icon": "fa fa-map-marker", "text": "Based in Bologna." },
    { "icon": "fa fa-graduation-cap", "text": "Graduated in Computer Engineering (Master Degree)" },
    { "icon": "fa fa-code", "text": "Open source developer and chef for my roommates in the spare time" },
    { "icon": "fa fa-heart", "text": "I love cooking, travelling and keep myself up with new technologies." }
];

function populateAboutMe() {
    const container = document.getElementById("about-me-container");
    if (container) {
        aboutMe.forEach(item => {
            const p = document.createElement("p");
            p.innerHTML = `<i class="${item.icon} fa-fw" style="margin-right: 10px;"></i> ${item.text}`;
            container.appendChild(p);
        });
    }
}

document.addEventListener("DOMContentLoaded", populateAboutMe);
