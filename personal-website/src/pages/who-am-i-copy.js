import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WorkExperienceFeature from "@site/src/components/WorkExperience";
import VolunteeringFeature from "@site/src/components/VolunteeringSection";
import EducationFeature from "@site/src/components/EducationSection";
import ToolingExperienceFeature from "@site/src/components/ToolingExperience";
import SkillsExperienceFeature from "@site/src/components/SkillsExperience";
import TOCInline from "@theme/TOCInline";

import styles from "./index.module.css";

function IntroductionSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="container">
        <h1 className="hero-about">{siteConfig.title}</h1>
        <div className={styles.work_description}>
          <p>
            I am a Business Intelligence Consultant with many years of
            experience in Microsoft Stack. Passionate about data and its
            potential to drive business success, I excel in data analysis,
            visualization, and learning the in and outs of machine learning.
            With a proven track record of delivering effective BI solutions to
            clients, I am constantly seeking new challenges and opportunities to
            grow in my field. My ambition is to take on a leadership role as
            Head of Data & Analytics.
          </p>
          <p>
            When I'm not working, I enjoy spending time with my family. I
            currently live in Vught with my spouse and our three children, and
            we are excitedly anticipating the arrival of our fourth child in
            August of 2023. In addition to my family life and professional
            pursuits. I also volunteer my skills as a data analyst at Stichting
            Felice, a foundation that supports parents who have lost a child.
            This organization holds a special place in my heart, as they helped
            my wife and me when we lost our son, Tijn.
          </p>
          <p>
            Furthermore, I contribute to an open-source project called
            PyTabular, which aims to improve the documentation and understanding
            of data sources. My involvement in these initiatives not only allows
            me to give back to the community but also keeps me up-to-date on the
            latest developments in the field and expand my skill set.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal website of Daan Damhuis with his CV, Blogposts and a Guide for using PyTabular and Docusaurus to generate documentation for Tabular / Power BI Datasets."
    >
      <main>
        <IntroductionSection />
        <div className="container">
          <div class="row">
            <div class="col col--9">
              <WorkExperienceFeature />
              <VolunteeringFeature />
              <EducationFeature />
            </div>
            <div class="col col--3">
              <SkillsExperienceFeature/>
              <ToolingExperienceFeature/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
