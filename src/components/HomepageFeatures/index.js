import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Travail d'équipe !", 
    Svg: require('@site/static/img/undraw_teamwork_hpdk.svg').default,
    description: (
      <>
        L'importance du travail d'équipe est cruciale pour atteindre des objectifs communs de manière efficace et efficiente. En collaborant, les membres de l'équipe peuvent fusionner leurs forces et compétences pour résoudre des problèmes, innover, et obtenir des résultats exceptionnels.
      </>
    ),
  },
  {
    title: 'Détendez-vous',
    Svg: require('@site/static/img/undraw_young_and_happy_hfpe.svg').default,
    description: (
      <>
        ProjectMaker offre une documentation bien organisée, facilitant l'accès aux informations clés. Cela permet aux utilisateurs de se concentrer pleinement sur les tâches essentielles de leurs projets.
      </>
    ),
  },
  {
    title: 'Un projet au top',
    Svg: require('@site/static/img/undraw_online_collaboration_re_bkpm.svg').default,
    description: (
      <>
        Solliciter des avis sur votre projet constitue une méthode efficace pour améliorer sa qualité et le faire évoluer vers une version optimale. Les retours d'expérience et les suggestions des autres permettent d'identifier les forces et les faiblesses du projet, favorisant ainsi des améliorations pertinentes.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
