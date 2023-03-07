import React from "react";
import clsx from "clsx";
import styles from "./experience.module.css";

const ExperienceList = [
  {
    title: "Stakeholder Management",
    subtitle: "Managing expections of internal and external stakeholders within serveral projects by building relationships, aligning expectations, and achieving organizational goals.",
    proficiency: "2020 - Present",
  },
  {
    title: "Product Owner",
    subtitle: "Defining and prioritizing the features and requirements of serveral data products, ensuring that it meets the needs of the partners and the business.",
    proficiency: "2020 - Present",
  },
  {
    title: "Innovating",
    subtitle: "Identifying products and tools that can enhance data capabilities and help drive data optimization efforts forward.",
    proficiency: "2020 - Present",
  },
  {
    title: "Data Modeling",
    subtitle: "Creating a conceptual or logical representation of data structures and relationships, for use in analysis products like Datamarts and Power BI datasets.",
    proficiency: "2017 - Present", 
  },
  {
    title: "Data Visualisation",
    subtitle: "Visualizing core information of to help people understand what is happening and make the complex simple.",
    proficiency: "2015 - Present",
  },
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

export default function SkillsExperienceFeature() {
  return (
    <section className={styles.work_experience}>
      <div className="container">
        <h1>Skills</h1>
        <div className="row">
          {ExperienceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
