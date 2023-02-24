import React from 'react';
import clsx from 'clsx';
import styles from './experience.module.css';

const ExperienceList = [
  {
    title: 'Business Intelligence Consultant',
    ImgSrc: require('@site/static/img/logo-about-me/1561973700269.jpg').default,
    CompanyName: 'stichd - PUMA SE Group',
    Website: 'https://stichd.com/',
    Period: 'Jul 2019 - Present',
    WorkLocation: '’s-Hertogenbosch, ᴺᴸ',
    description: (
      <>
        <p>At stichd (fomerly known as Dobotex and Branded), I was part of a team that was tasked with improving the company's operations and performance through the use of data. One of our first projects was to build a 360-degree view of our then-new partner Manchester City. This involved gathering and analyzing data from multiple sources to create a comprehensive understanding of their operations and performance. Along the way, I was responsible for training and documentation, which helped to ensure that the team had the necessary skills and knowledge to complete the project successfully.</p>
        <p>As we delved deeper into the project, it became clear that our existing infrastructure was not able to support the volume and complexity of data we were dealing with. This led to the next project of designing a move to Azure from On-Premise. I was also responsible for the documentation and training of the team and stakeholders to ensure a smooth transition.</p>
        <p>Finally, we tackled the challenge of rebuilding our data models to our new ERP SAP. This was a complex and time-consuming task, but it resulted in a much more efficient and streamlined data management system. I also made sure that the team and stakeholders were trained and that the documentation was clear, so that the new system could be adopted easily.</p>
        <p>In the end, our hard work paid off as we were able to deliver valuable insights and improve decision-making for the company and our new partner Manchester City. The success of this project and others led to my ambition to take on a leadership role as Head of Analytics and Reporting.</p>
      </>
    )
  },
  {
    title: 'Business Intelligence Consultant',
    ImgSrc: require('@site/static/img/logo-about-me/1519873533895.jpg').default,
    CompanyName: 'Dobotex - PUMA SE Group',
    Website: 'https://stichd.com/',
    Period: 'Apr 2017 - Jul 2019',
    WorkLocation: '’s-Hertogenbosch, ᴺᴸ',
    description: (
      <>
        <p>At Dobotex, I was part of a team that was focused on improving the company's data management and analysis capabilities. One of our first projects was to convert Multidimensional Models into Tabular Models. This involved re-organizing and simplifying the data structure to make it more efficient for analysis and improve performance.</p>
        <p>With the success of the first project, we moved on to creating Global Reports, which provided valuable insights into company-wide operations and performance. This helped to identify areas of improvement and support decision-making.</p>
        <p>As we were making progress with the data analysis, we realized that we could also help our customers by providing them with insights into their shopfloor operations. So, our next project was to create a model that gives insights into the shopfloor of our customers, which helped to improve customer satisfaction and optimize operations.</p>
        <p>Overall, our projects at Dobotex allowed us to deliver valuable insights and support decision-making, which helped the company to improve its performance and meet the needs of its customers.</p>
      </>
    )
  },
  {
    title: 'Business Intelligence Consultant',
    ImgSrc: require('@site/static/img/logo-about-me/1629149822279.jpg').default,
    CompanyName: 'PACCAR Parts - Eindhoven',
    Website: 'https://paccar.com/',
    Period: 'Aug 2015 - Mar 2017',
    WorkLocation: '’s-Hertogenbosch, ᴺᴸ',
    description: (
      <>
        <p>For PACCAR Parts I was working on modeling the datamart, creating reports and advising on analysis for the Parts Distribution Centre (PDC) in Eindhoven. These reports are designed to support the processes and the steering of the PDC. My role in this project is to use my skills in data analysis and visualization to create meaningful and actionable reports that provide valuable insights into the PDC's performance and operations. This project is an exciting opportunity for me to apply my skills and experience in a real-world setting and contribute to the success of the PDC.</p>
      </>
    )
  },
  {
    title: 'Business Intelligence Consultant',
    ImgSrc: require('@site/static/img/logo-about-me/1638575002083.jpg').default,
    CompanyName: 'Atos',
    Website: 'https://atos.com/',
    Period: 'Jan 2015 - Aug 2015',
    WorkLocation: '’Eindhoven, ᴺᴸ',
    description: (
      <>
        <p>In this role we were working on a program within the Managed Services organization at Atos aimed at improving the organization on several aspects, one of which is daily operational reporting. My role in this program is to leverage my skills in data analysis and visualization to design and implement a reporting solution that provides actionable insights and supports efficient decision-making. This program was an exciting opportunity for me to contribute to the growth and success of the organization and also an opportunity for me to expand my skill set and knowledge.</p>
      </>
    )
  },
  {
    title: 'Internship: Business Intelligence',
    ImgSrc: require('@site/static/img/logo-about-me/1638575002083.jpg').default,
    CompanyName: 'Atos',
    Website: 'https://atos.com/',
    Period: 'Sep 2014 - Jan 2015',
    WorkLocation: '’Eindhoven, ᴺᴸ',
    description: (
      <>
        <p>For my internship I completed a project where I combined a range of data sources to create a proof-of-concept management dashboard in Microsoft SharePoint. This dashboard provided benefits in terms of resource, unit, and practice management, allowing for improved visibility and decision-making across the organization. My skills in data analysis and integration, along with my experience with Microsoft Stack, allowed me to successfully bring the project to fruition.</p>
      </>
    )
  },
  {
    title: 'Teamlead',
    ImgSrc: require('@site/static/img/logo-about-me/1519856999443.jpg').default,
    CompanyName: 'PLUS van Doornmalen',
    Website: 'https://stichd.com/',
    Period: 'Feb 2008 - Oct 2014',
    WorkLocation: 'Eersel, ᴺᴸ',
    description: (
      <>
        <p>As a team lead at Plus van Doornmalen supermarket, I was responsible for leading teams that replenished the store on multiple evenings throughout the week. The team sizes varied from 8 to 25 colleagues, and my job was to work with them to ensure the store was ready to open in the morning and welcome customers.</p>
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


export default function WorkExperienceFeature() {
  return (
    <section className={styles.work_experience}>
      <div className="container">
        <h1>Work Experience</h1>
        <div className="row">
          {ExperienceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
