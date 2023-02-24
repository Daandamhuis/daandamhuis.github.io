import React from 'react';
import clsx from 'clsx';
import styles from './experience.module.css';

const ExperienceList = [
  {
    title: 'Data Analyst',
    ImgSrc: require('@site/static/img/logo-about-me/1537364057248.jpg').default,
    CompanyName: 'Stichting Felice (Non-Profit)',
    Website: 'https://stichtingfelice.nl/',
    Period: 'Oct 2021 - Present',
    WorkLocation: '’Driehuizen, ᴺᴸ',
    description: (
      <>
        <p>As a Data Analyst at Stichting Felice, I am responsible for the prosessing, categorization, and analysis of data across multiple topics. Which helps the Non-Profit gain insights into what is happing.</p>
      </>
    )
  },
  {
    title: 'Contributor',
    ImgSrc: require('@site/static/img/logo-about-me/1626195279622.jpg').default,
    CompanyName: 'PyTabular',
    Website: 'https://github.com/Curts0/PyTabular',
    Period: 'Oct 2022 - Present',
    WorkLocation: '’s-Hertogenbosch, ᴺᴸ',
    description: (
      <>
        <p>PyTabular is a python package that allows for programmatic execution on tabular models! This is possible thanks to Pythonnet and Microsoft's .Net APIs on Azure Analysis Services. For example;</p>
        <ul>
          <li>You can query your models with the Query method from your tabular class.</li>
          <li>You can also explore your tables, partitions, and columns. Via the Attributes from your Tabular class.</li>
        </ul>
        <p>My role is to implement a way to generate documentation based on the information already in the Tabular Object Model (TOM).</p>
      </>
    )
  }
];

function Feature({ImgSrc, title, description, CompanyName, Website, Period, WorkLocation}) {
  return (
    <div className={styles.work_experience_work_item}>
      <img src={ImgSrc} alt={CompanyName} className={styles.work_experience_work_item_logo} />
      <div className={styles.work_experience_work_item_details}>
        <div className={styles.work_experience_work_item_title}>{title}<a href={Website} className={styles.work_experience_work_item_company}> at {CompanyName}</a></div>
        <div className={styles.work_experience_work_item_date}>{Period}, {WorkLocation}</div>
        <div className={styles.work_experience_work_item_description}>
          {description}
        </div>
        <hr />
      </div>
    </div>
  );
}


export default function VolunteeringFeature() {
  return (
    <section className={styles.work_experience}>
      <div className="container">
        <h1>Volunteering</h1>
        <div className="row">
          {ExperienceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
