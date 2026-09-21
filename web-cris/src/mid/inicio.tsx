export const Inicio = ({ traducir }: { traducir: (key: string) => string }) => {
    return (
        <section id="inicio" className="row text-center">
            <div className="col-6 flex-column d-flex justify-content-center align-items-center">
                <h1>{traducir('hero.title')}</h1>
                <p>{traducir('hero.description')}</p>
            </div>
        </section>
    )
}