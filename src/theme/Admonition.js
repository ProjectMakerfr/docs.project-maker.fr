import React from 'react';
import Admonition from '@theme-original/Admonition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faBug,
  faShieldAlt,
  faExclamationCircle,
  faDesktop,
  faTachometerAlt,
  faCheckCircle,
  faBook,
  faMinusCircle,
  faPlusCircle,
  faPlus,
  faPencilAlt,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function AdmonitionWrapper(props) {
  const { type } = props;

  if (type === 'nouvellesfonctionnalites') {
    return <Admonition title="Nouvelles fonctionnalités" icon={<FontAwesomeIcon icon={faPlus} />} {...props} />;
  } else if (type === 'ameliorations') {
    return <Admonition title="Améliorations" icon={<FontAwesomeIcon icon={faArrowUp} />} {...props} />;
  } else if (type === 'correctionsbugs') {
    return <Admonition title="Corrections de bugs" icon={<FontAwesomeIcon icon={faBug} />} {...props} />;
  } else if (type === 'misesajoursecurite') {
    return <Admonition title="Mises à jour de sécurité" icon={<FontAwesomeIcon icon={faShieldAlt} />} {...props} />;
  } else if (type === 'changementsmajeurs') {
    return <Admonition title="Changements majeurs" icon={<FontAwesomeIcon icon={faExclamationCircle} />} {...props} />;
  } else if (type === 'modificationsui') {
    return <Admonition title="Modifications de l'interface utilisateur (UI)" icon={<FontAwesomeIcon icon={faDesktop} />} {...props} />;
  } else if (type === 'amelioreperformances') {
    return <Admonition title="Améliorations de performance" icon={<FontAwesomeIcon icon={faTachometerAlt} />} {...props} />;
  } else if (type === 'compatibilite') {
    return <Admonition title="Compatibilité" icon={<FontAwesomeIcon icon={faCheckCircle} />} {...props} />;
  } else if (type === 'documentation') {
    return <Admonition title="Documentation" icon={<FontAwesomeIcon icon={faBook} />} {...props} />;
  } else if (type === 'retraits') {
    return <Admonition title="Retraits" icon={<FontAwesomeIcon icon={faMinusCircle} />} {...props} />;
  } else if (type === 'ajouts') {
    return <Admonition title="Ajouts" icon={<FontAwesomeIcon icon={faPlusCircle} />} {...props} />;
  } else if (type === 'changementsmineurs') {
    return <Admonition title="Changements mineurs" icon={<FontAwesomeIcon icon={faPencilAlt} />} {...props} />;
  } else if (type === 'versionnote') {
    return <Admonition title="Notes de version" icon={<FontAwesomeIcon icon={faInfoCircle} />} {...props} />;
  } else if (type === 'discord') {
    return <Admonition title="Discord" icon={<FontAwesomeIcon icon={faDiscord} />} {...props} />;
  }

  return <Admonition {...props} />;
}
