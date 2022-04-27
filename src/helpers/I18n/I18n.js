import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './en.json';
import ar from './ar.json';

// i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, ar };

export default i18n;