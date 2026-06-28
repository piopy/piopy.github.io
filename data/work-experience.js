// Esperienza lavorativa e accomplishments
const workExperience = [
    // Aggiungi altre esperienze qui se necessario
    {
        company: "Zanichelli Editore",
        role: "Data Engineer",
        period: "2023 - Present",
        location: "Bologna, Italy",
        accomplishments: [
            "Develop end-to-end data pipelines in Python using an OOP approach, managing idempotency, partitioning, and checkpointing logic;",
            "Orchestrate data flows (ELT/ETL) using Dagster and dbt;",
            "Independently design and manage part of the company's AWS cloud infrastructure using Terraform (IaC), ensuring security via IAM least-privilege and OIDC;",
            "Define CI/CD pipelines via Bitbucket Pipelines or Jenkins+Ansible to automate Docker image deployment, optimizing builds through multi-stage processes and uv;",
            "Ensure data integrity (Data Quality) by implementing automated tests on dbt and Dagster asset checks;",
            "Translate business needs into technical solutions: gather requirements, negotiate feasibility, and rapidly develop interactive dashboards using Taipy or Streamlit."
        ]
    },
    {
        company: "Zanichelli Editore",
        role: "Intern",
        period: "2022",
        location: "Bologna, Italy",
        accomplishments: [
            "Implemented a data lake architecture in the corporate cloud environment using Terraform.",
            "Automated data retrieval from web sources using ECS containers orchestrated with AWS Step Functions, organizing records into warehouse-like structures."
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
