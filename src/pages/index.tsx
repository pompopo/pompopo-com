import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          |,,˘﹏˘,,)
        </Heading>
        <p className="hero__subtitle">ようこそ pompopo.com へ</p>
      </div>
    </header>
  );
}

function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📝</div>
            <h3>Blog</h3>
            <Link className="button button--primary button--lg" to="/blog">
              ブログを見る
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🐦</div>
            <h3>SNS</h3>
            <div className={styles.socialLinks}>
              <Link
                className="button button--secondary button--sm"
                to="https://mixi.social/@pompopo"
                rel="noopener noreferrer"
              >
                mixi2
              </Link>
              <Link
                className="button button--secondary button--sm"
                to="https://github.com/pompopo"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>

              <Link
                className="button button--secondary button--sm"
                to="https://x.com/pompopo"
                rel="noopener noreferrer"
              >
                𝕏
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.birdSection}>
          <p className={styles.birdAscii}>
            |,,˘﹏˘,,)
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="a website by @pompopo">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
