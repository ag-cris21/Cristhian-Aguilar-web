export const Mid = ({ traducir, obtenerArray, obtenerLista }: { traducir: (key: string) => string, obtenerArray: (key: string) => string[], obtenerLista: (key: string) => string[] }) => {
    return (
        <main>
            <section id="inicio" className="row text-center">
                <div className="col-6 flex-column d-flex justify-content-center align-items-center">
                    <h1>{traducir('hero.title')}</h1>
                    <p>{traducir('hero.description')}</p>
                </div>
            </section>
            <section id="sobre-mi">
                <h2>{traducir('about.title')}</h2>
                <div>
                    {obtenerArray('about.paragraphs').map((texto, indice) => (
                        <p key={indice}>{texto}</p>
                    ))}
                </div>
            </section>
            <section id="mision">
                <h2>{traducir('mission.title')}</h2>
                <div>
                    {obtenerArray('mission.paragraphs').map((texto, indice) => (
                        <p key={indice}>{texto}</p>
                    ))}
                </div>
            </section>
            <section id="tecnologias">
                <h2>{traducir('technologies.title')}</h2>
                <p>{traducir('technologies.description')}</p>
                <ul>{obtenerLista('technologies.items').map((item, indice) => (
                    <li key={indice}>{item}</li>
                ))}</ul>
            </section>
            <section id="proyectos">
                <h2>{traducir('projects.title')}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <article className="col-md-4">
                        <h3>{traducir('projects.debian.title')}</h3>
                        <p>{traducir('projects.debian.description')}</p>
                    </article>
                    <article className="col-md-4">
                        <h3>{traducir('projects.printer.title')}</h3>
                        <p>{traducir('projects.printer.paragraphs')[0]}</p>
                    </article>
                    <article className="col-md-4">
                        <h3>{traducir('projects.internships.title')}</h3>
                        <p>{traducir('projects.internships.description')}</p>
                    </article>
                </div>
            </section>
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
                    <li>{traducir('contact.email')}: crisaguilar212004@gmail.com</li>
                </ul>
            </section>
        </main>
    )
}