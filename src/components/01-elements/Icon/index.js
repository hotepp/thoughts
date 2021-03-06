import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClipboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faComment as fasComment,
  faChevronRight,
  faClipboard as fasClipboard,
  faCloud,
  faCloudRain,
  faCloudSun,
  faMessage as fasMessage,
  faRainbow,
  faSun,
  faUser as fasUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
  const chooseIcon = (iconName) => {
    switch (iconName) {
      case 'comment':
        return faComment;
      case 'scomment':
        return fasComment;
      case 'chevron-right':
        return faChevronRight;
      case 'clipboard':
        return faClipboard;
      case 'sclipboard':
        return fasClipboard;
      case 'cloud':
        return faCloud;
      case 'cloud-rain':
        return faCloudRain;
      case 'cloud-sun':
        return faCloudSun;
      case 'message':
        return faMessage;
      case 'smessage':
        return fasMessage;
      case 'rainbow':
        return faRainbow;
      case 'sun':
        return faSun;
      case 'user':
        return faUser;
      case 'suser':
        return fasUser;
      case 'xmark':
        return faXmark;
      default:
        return null;
    }
  };

  return <FontAwesomeIcon icon={chooseIcon(icon)} className={styles.icon} />;
};

export default Icon;
