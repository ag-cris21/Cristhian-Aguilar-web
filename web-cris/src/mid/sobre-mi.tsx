export const SobreMi = ({ traducir }: { traducir: (key: string) => string }) => {
    return (
        <section id="sobre-mi">
            <h2>{traducir('about.title')}</h2>
            <div>
                {traducir('about.paragraphs').map((texto: string, indice: number) => (
                    <p key={indice}>{texto}</p>
                ))}
            </div>
        </section>
    )
}