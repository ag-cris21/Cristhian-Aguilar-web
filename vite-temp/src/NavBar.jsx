
export const NavBar = ({ lang, setLang }) => {  
    console.log('lang', lang)
    return (      
        <nav className="row text-center">
          <a href="#sobre-mi" className="col-2">{lang?.nav.about}</a>
          <a href="#proyectos" className="col-2">{lang?.nav.projects}</a>
          <a href="#tecnologias" className="col-2">{lang?.nav.technologies}</a>
          <a href="#mision" className="col-2">{lang?.nav.mission}</a>
          <a href="#contacto" className="col-2">{lang?.nav.contact}</a>
          <select className="col-2" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </nav>
    )
}        