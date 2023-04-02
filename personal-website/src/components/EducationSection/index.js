import React from 'react';
import clsx from 'clsx';
import styles from './experience.module.css';

const ExperienceList = [
  {
    title: 'IT & Business',
    ImgSrc: require('@site/static/img/logo-about-me/1519856033175.jpg').default,
    CompanyName: 'Fontys Hogescholen',
    Website: 'https://fontys.nl/',
    Period: '2011 - 2015',
    WorkLocation: 'Eindhoven, ᴺᴸ',
    description: (
      <>
        <ul>
          <li>Major: IT & Business - Bridge the Gap between the Business and IT</li>
          <li>Minor: IT & Lifestyle - The goal for this minor was to make the invisible visible with a combination of Art and Technology.</li>
          <li>Minor: ERP & Business Intellingence - Learning how an ERP works and how you can use it's data for reporting and analysis the data.</li>
        </ul>
      </>
    )
  },
  {
    title: 'IT Management',
    ImgSrc: require('@site/static/img/logo-about-me/1519856620345.jpg').default,
    CompanyName: 'ROC Eindhoven',
    Website: 'https://summacollege.nl/',
    Period: '2007 - 2011',
    WorkLocation: 'Eindhoven, ᴺᴸ',
    description: (
      <>
        <p>This education focusses on managing IT environments. This includes Servers and Virtual Machines, Network Planning, Cisco switches and routers and applications like and ERP.</p>
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


export default function EducationFeature() {
  return (
    <section className={styles.work_experience}>
      <div className="container">
        <h1>Education</h1>
        <div className="row">
          {ExperienceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
