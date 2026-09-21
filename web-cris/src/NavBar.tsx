

export function NavBar({ language, setLanguage, traduzir }: { language: string, setLanguage: (value: string) => void, traduzir: (key: string) => string }) {
    return (
        <header className="sticky-top bg-white">
            <nav className="row align-items-center justify-content-between bg-info p-3">
                <a href="#sobre-mi" className="col-md-2 ali">{traduzir('nav.about')}</a>
                <a href="#proyectos" className="col-md-2">{traduzir('nav.projects')}</a>
                <a href="#tecnologias" className="col-md-2">{traduzir('nav.technologies')}</a>
                <a href="#mision" className="col-md-2">{traduzir('nav.mission')}</a>
                <a href="#contacto" className="col-md-2">{traduzir('nav.contact')}</a>

                <select
                    id="language"
                    className="col-md-2"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}>

                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </nav>
        </header>
    )
}