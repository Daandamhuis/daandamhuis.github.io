import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import WorkExperienceFeature from '@site/src/components/WorkExperience';

import styles from "./index.module.css";

function IntroductionSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="container">
      <p className="hero__title">{siteConfig.title}</p>
        <div className={styles.work_description}>
        <p>I am a Business Intelligence Consultant with many years of experience in Microsoft Stack. Passionate about data and its potential to drive business success, I excel in data analysis, visualization, and learning the in and outs of machine learning. With a proven track record of delivering effective BI solutions to clients, I am constantly seeking new challenges and opportunities to grow in my field. My ambition is to take on a leadership role as Head of Data & Analytics.</p>
        <p>In addition to my professional pursuits, I also volunteer as a data analyst at Stichting Felice, where I leverage my skills and experience to make a positive impact on parents that have lost their child. Stichting Felice helped my wife and me when we lost our son Tijn.</p>
        <p>Furthermore, I contribute to an open-source project called PyTabular, which aims to improve the documentation and understanding of data sources. My involvement in these initiatives not only allows me to give back to the community but also keeps me up-to-date on the latest developments in the field and expand my skill set.</p>
        </div>
      </div>
      </header>
  );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`${siteConfig.title}`}
        description="Personal website of Daan Damhuis with his CV, Blogposts and a Guide for using PyTabular and Docusaurus to generate documentation for Tabular / Power BI Datasets."
      >
        <main>
          <IntroductionSection />
          <WorkExperienceFeature />
        </main>
      </Layout>
    );
  }
  