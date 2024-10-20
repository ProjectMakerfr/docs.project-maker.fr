import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>Project-Maker</h1>
        <p className={styles.heroSubtitle}>Propulsons ensemble vos projets vers le succès !</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Commencer rapidement ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>À propos de Project-Maker</h2>
        <p className={styles.sectionText}>
        Project-Maker est une plateforme complète conçue pour simplifier le lancement de vos projets. Que vous soyez entrepreneur, développeuse, graphiste, débutant, expert ou chef de projet, nous vous offrons tous les outils nécessaires pour démarrer facilement et obtenir rapidement des résultats de qualité.
        </p>
        {/* <ul className={styles.featureList}>
          <li><strong>Outils de gestion de projet :</strong> Planifiez vos tâches, définissez des jalons, et suivez l'avancement de vos projets.</li>
          <li><strong>Collaboration en équipe :</strong> Partagez des idées, travaillez en temps réel avec vos collègues, et centralisez toutes les informations importantes.</li>
          <li><strong>Productivité accrue :</strong> Accédez à des templates, des ressources et des intégrations pour automatiser vos processus et accélérer vos résultats.</li>
        </ul> */}
      </div>
    </section>
  );
}



function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Pourquoi choisir Project-Maker ?</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Facilité d'utilisation</h3>
            <p>
              Une interface simple et intuitive vous permet de démarrer rapidement, même sans expertise technique.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Intégrations puissantes</h3>
            <p>
              Connectez-vous à vos outils préférés comme GitHub, Slack, et Trello pour une gestion unifiée.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Sécurité renforcée</h3>
            <p>
              Vos données sont protégées grâce à des systèmes de sécurité de pointe pour garantir leur confidentialité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Prêt à démarrer votre prochain projet ?</h2>
        <p className={styles.sectionText}>
          Rejoignez des centaines d'utilisateurs qui ont transformé leur manière de travailler avec Project-Maker.
        </p>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Rejoignez-nous dès maintenant 🚀
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenue sur ${siteConfig.title}`}
      description="Project-Maker est une plateforme qui offre un accès rapide et organisé à une variété de ressources pour faciliter la réalisation de projets, améliorer la productivité et permettre une collaboration efficace en équipe. <head />"
    >
      <HomepageHeader />
      <main>
        <AboutSection />
        {/* <FeaturesSection /> */}
        {/* <h2 className={styles.sectionTitle}>Crée votre projet sans soucis</h2> */}
        <HomepageFeatures />
        <CallToActionSection />
      </main>
    </Layout>
  );
}
