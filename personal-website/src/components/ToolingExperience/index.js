import React from "react";
import clsx from "clsx";
import styles from "./experience.module.css";

const ExperienceList = [
  {
    title: "Microsoft Power BI",
    subtitle: "Power BI, Power BI Admin, Power BI Premium (per User), Power BI Pro, Tabular Model, Deployment Pipelines, Tabular Editor, DAX Studio, ALM Toolkit.",
    proficiency: "2015 - Present",
  },
  {
    title: "Azure Synapse Workspace",
    subtitle: "Data Lake, Delta Lake, Data Factory, Azure SQL Server, Synapse Serverless.",
    proficiency: "2020 - Present",
  },
  {
    title: "Azure DevOps",
    subtitle: "Source Control, Backlog, Build and Release.",
    proficiency: "2018 - Present",
  },
  {
    title: "Azure",
    subtitle: "Functions, Logic Apps, Key Vault, Static Web Apps.",
    proficiency: "2020 - Present",
  },
  {
    title: "Python",
    subtitle: "Data Analysis, Data Extraction, Data Transformation and contributions to PyTabular.",
    proficiency: "2020 - Present",
  },
  {
    title: "Github",
    subtitle: "Repositories, Pages and Actions.",
    proficiency: "2022 - Present",
  },
  {
    title: "Meta",
    subtitle: "Docusaurus for generating static websites.",
    proficiency: "2022 - Present",
  },
  {
    title: "On-Premise SQL Server",
    subtitle: "SQL Server Analysis Services, SQL Server Reporting Services, SQL Server Integration Services.",
    proficiency: "2015 - 2020",
  }
];

function Feature({ title, subtitle, proficiency }) {
  return (
    <div className={styles.work_experience_work_item}>
      <div className={styles.work_experience_work_item_details}>
        <div className={styles.work_experience_work_item_title}>{title}</div>
        <div className={styles.work_experience_work_item_date}>
          {proficiency} <br />
        </div>
        
        <div className={styles.work_experience_work_item_description}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default function ToolingExperienceFeature() {
  return (
    <section className={styles.work_experience}>
      <div className="container">
        <h1>Technical</h1>
        <div className="row">
          {ExperienceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
