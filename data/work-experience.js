// Esperienza lavorativa e accomplishments
const workExperience = [
    // Aggiungi altre esperienze qui se necessario
    {
        company: "Zanichelli Editore",
        role: "Data Engineer",
        period: "2023 - Present",
        location: "Bologna, Italy",
        accomplishments: [
            // "Template placeholder - work in progress"
            // "Contributed to designing and implementing data models for analytics pipelines",
            // "Developed a Taipy-based frontend dashboard for internal data visualization",
            // "Implemented Infrastructure as Code solutions using Terraform for cloud resources",
            // "Built and maintained data orchestration workflows with Dagster",
            // "Collaborated with cross-functional teams to optimize data platform architecture"
        ]
    },
    {
        company: "Zanichelli Editore",
        role: "Intern",
        period: "2022",
        location: "Bologna, Italy",
        accomplishments: [
            "Implementation of a data lake structure in the corporate cloud environment using Terraform;",
            "Automated data retrieval from web sources using ECS containers orchestrated with Step Functions (AWS) and subsequent organization of records in warehouse-like structures"
        ]
    }
];

function populateWorkExperience() {
    const container = document.getElementById("work-experience-container");
    
    if (!container) return;
    
    container.innerHTML = "";
    
    workExperience.forEach(job => {
        const jobSection = document.createElement("div");
        jobSection.className = "work-experience-item";
        
        let accomplishmentsHTML = "";
        job.accomplishments.forEach(item => {
            accomplishmentsHTML += `<li>${item}</li>`;
        });
        
        jobSection.innerHTML = `
            <div class="job-header">
                <h3>${job.role} <span class="company-highlight">@ ${job.company}</span></h3>
                <p class="job-meta">
                    <i class="fa fa-calendar"></i> ${job.period} 
                    <span class="separator">|</span> 
                    <i class="fa fa-map-marker"></i> ${job.location}
                </p>
            </div>
            <ul class="accomplishments-list">
                ${accomplishmentsHTML}
            </ul>
        `;
        
        container.appendChild(jobSection);
    });
}

document.addEventListener("DOMContentLoaded", populateWorkExperience);
