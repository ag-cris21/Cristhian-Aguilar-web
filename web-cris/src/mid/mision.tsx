export const Mision = ({ traducir }: { traducir: (key: string) => string }) => {
    return (
        <div>
            <section id="mision">
                <h2>{traducir('mission.title')}</h2>
                <div>{traducir('mission.paragraphs').map((texto: string, indice: number) => (
                    <p key={indice}>{texto}</p>
                ))}</div>
            </section>

            <section id="vision">
                <h2>{traducir('vision.title')}</h2>
                <div>{traducir('vision.paragraphs').map((texto: string, indice: number) => (
                    <p key={indice}>{texto}</p>
                ))}</div>
            </section>
        </div>
    )
}