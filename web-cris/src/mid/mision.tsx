export const Mision = ({ traducir, obtenerArray }: { traducir: (key: string) => string; obtenerArray: (key: string) => string[] }) => {
    return (
        <div>
            <section id="mision">
                <h2>{traducir('mission.title')}</h2>
                <div>
                    {obtenerArray('mission.paragraphs').map((texto: string, indice: number) => (
                        <p key={indice}>{texto}</p>
                    ))}
                </div>
            </section>

            <section id="vision">
                <h2>{traducir('vision.title')}</h2>
                <div>
                    {obtenerArray('vision.paragraphs').map((texto: string, indice: number) => (
                        <p key={indice}>{texto}</p>
                    ))}
                </div>
            </section>
        </div>
    )
}