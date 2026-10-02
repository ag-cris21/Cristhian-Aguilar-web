export const Contacto = ({ traducir, obtenerLista }: { traducir: (key: string) => string; obtenerLista: (key: string) => string[]  }) => {
    return (
        <section id="contacto">
                <h2>{traducir('learning.title')}</h2>
                <ul>{obtenerLista('learning.items').map((item, indice) => (
                    <li key={indice}>{item}</li>
                ))}</ul>
                <h2>{traducir('contact.title')}</h2>
                <p>{traducir('contact.description')}</p>
                <ul>
                    <li>
                        <a href="https://github.com/ag-cris21" target="_blank" rel="noreferrer">
                            <span>{traducir('contact.github')}</span>
                        </a>
                    </li>
                    <li>
                        {traducir('contact.email')}: crisaguilar212004@gmail.com
                    </li>
                </ul>
            </section>
    )
}