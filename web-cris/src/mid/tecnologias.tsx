

export interface tecnologiasProps {
    traducir: (key: string) => string;
    obtenerLista: (key: string) => string[];
}

export const Tecnologias = ({ traducir, obtenerLista }: tecnologiasProps) => {
    return (
        <section id="tecnologias">
            <h2>{traducir('technologies.title')}</h2>
            <p>{traducir('technologies.description')}</p>
            <ul>{obtenerLista('technologies.items').map((item, indice) => (
                <li key={indice}>{item}</li>
                ))}</ul>
            </section>
    )
}