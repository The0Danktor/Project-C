import { useTranslation } from 'react-i18next';

export function LanguagePicker() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <select onChange={e => changeLanguage(e.target.value)} value={localStorage.getItem('i18nextLng')?.split('-')[0]}>
      <option value='en'>English</option>
      <option value='nl'>Nederlands</option>
    </select>
  );
}