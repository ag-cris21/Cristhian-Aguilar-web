import translations from '../data/translations.json'

export const Footer = () => {
  return (

    <footer>
      <p data-i18n="footer.text">{translations.es.footer.text}</p>
    </footer>

  )
}