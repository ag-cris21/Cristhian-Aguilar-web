export const SobreMi = ({ traducir, obtenerArray }: { traducir: (key: string) => string; obtenerArray: (key: string) => string[] }) => {
    return (
        <section id="sobre-mi">
            <h2>{traducir('about.title')}</h2>
            <div>
                {obtenerArray('about.paragraphs').map((texto: string, indice: number) => (
                    <p key={indice}>{texto}</p>
                ))}
            </div>
        </section>
    )
}