
export const contacto = () => {
  return (
    <div>
      <section id="aprendizaje">
        <h2 data-i18n="learning.title"></h2>
        <ul data-i18n-list="learning.items"></ul>
      </section>

      <section id="contacto">
        <h2 data-i18n="contact.title"></h2>
        <p data-i18n="contact.description"></p>
        <ul>
          <li>
            <a href="https://github.com/ag-cris21" target="_blank" rel="noreferrer">
              <span data-i18n="contact.github"></span>
            </a>
          </li>
          <li>
            <span data-i18n="contact.email"></span>: crisaguilar212004@gmail.com
          </li>
        </ul>
      </section>
    </div>
  )
}