import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blog',
    url: '/blog',
    ImgSrc: require('@site/static/img/work (1).png').default,
    description: (
      <>
        Welcome to our data blog! We specialize in covering the latest trends and techniques in data analysis, visualization, machine learning and AI, with a focus on the Microsoft stack and Python.
      </>
    ),
  },
  {
    title: 'PyTabular',
    url: '/docs',
    ImgSrc: require('@site/static/img/mind (1).png').default,
    description: (
      <>
        Here we will demonstrate the capabilities of PyTabular in documenting Power BI datasets. PyTabular is a powerful Python library that allows for easy and efficient documentation of Power BI and Analysis Service data sources.
      </>
    ),
  },
  {
    title: 'Who am I',
    url: '/who-am-i',
    ImgSrc: require('@site/static/img/who-am-i (1).png').default,
    description: (
      <>
        I am Daan Damhuis, a seasoned Business Intelligence Consultant with many years of experience in the Microsoft Stack. 
        I am deeply passionate about data and its potential to drive business success. 
      </>
    ),
  }
];

function Feature({ImgSrc, url, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={ImgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
