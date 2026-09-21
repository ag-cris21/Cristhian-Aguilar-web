export const Contacto = ({ traducir }: { traducir: (key: string) => string }) => {
    return (
        <div>
            <section id="aprendizaje">
                <h2>{traducir('learning.title')}</h2>
                <ul>{traducir('learning.items').map((item: string, indice: number) => (
                    <li key={indice}>{item}</li>
                ))}</ul>
            </section>

            <section id="contacto">
                <h2>{traducir('contact.title')}</h2>
                <p>{traducir('contact.description')}</p>
                <ul>
                    <li>
                        <a href="https://github.com/ag-cris21" target="_blank" rel="noreferrer">
                            <span>{traducir('contact.github')}</span>
                        </a>
                    </li>
                    <li>{traducir('contact.email')}: crisaguilar212004@gmail.com</li>
                </ul>
            </section>
        </div>
    )
}