export const Proyectos = ({ traducir }: { traducir: (key: string) => string }) => {
    return (
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
    )
}