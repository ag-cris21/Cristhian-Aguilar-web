
export const NavBar = ({}) => {  
    return (
        <>
        <header className="sticky-top bg-white ">
          <nav className="row align-items-center justify-content-between"> 
            <a href="#sobre-mi" data-i18n="nav.about" className="col-md-2 ali">sobre mi</a>
            <a href="#proyectos" data-i18n="nav.projects" className="col-md-2">proyectos</a>
            <a href="#tecnologias" data-i18n="nav.technologies" className="col-md-2">tecnologias</a>
            <a href="#mision" data-i18n="nav.mission" className="col-md-2">mision</a>
            <a href="#contacto" data-i18n="nav.contact" className="col-md-2">contacto</a>
    
            <select id="language" className="col-md-2">
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </nav>
    
        </header>
        </>      
    )
}        