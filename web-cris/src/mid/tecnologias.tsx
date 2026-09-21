export const Tecnologias = ({ traducir }: { traducir: (key: string) => string }) => {
    return (
        <section id="tecnologias">
            <h2>{traducir('technologies.title')}</h2>
            <p>{traducir('technologies.description')}</p>
            <ul>{traducir('technologies.items').map((item: string, indice: number) => (
                <li key={indice}>{item}</li>
            ))}</ul>
        </section>
    )
}