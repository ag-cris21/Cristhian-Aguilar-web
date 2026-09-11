// 3 tipos de funciones 
// funcion class

import { useEffect, useState } from "react"
import translations from './data/translations.json'
import { NavBar } from "./NavBar.jsx"
// import { NavBar } from './NavBar.jsx'

export const App = () => {
  // destructuracion de arreglos y objetos 
  // que es sprit operator  // Inicializamos el estado directamente con las traducciones en español
  
  const [lang, setLang] = useState(translations['es'])

  return <><NavBar  lang={lang} setLang={setLang} /></>

}






// import { useState } from 'react'
// import translations from './data/translations.json'
// import './App.css'

// function App() {
//   const [lang, setLang] = useState('es')
//   const t = translations[lang]

//   return (
//     <div className="container">
//       <header className="sticky-top bg-white p-2">
//         <nav className="row text-center">
//           <a href="#sobre-mi" className="col-2">{t.nav.about}</a>
//           <a href="#proyectos" className="col-2">{t.nav.projects}</a>
//           <a href="#tecnologias" className="col-2">{t.nav.technologies}</a>
//           <a href="#mision" className="col-2">{t.nav.mission}</a>
//           <a href="#contacto" className="col-2">{t.nav.contact}</a>
//           <select className="col-2" value={lang} onChange={e => setLang(e.target.value)}>
//             <option value="es">ES</option>
//             <option value="en">EN</option>
//           </select>
//         </nav>
//       </header>

//       <main>
//         <section id="inicio" className="row text-center align-items-center py-3">
//           <img src="/img/fotoprueba.jpg" className="col-6 img-fluid" alt="foto" />
//           <div className="col-6">
//             <h1>{t.hero.title}</h1>
//             <p>{t.hero.description}</p>
//           </div>
//         </section>

//         <section id="sobre-mi">
//           <h2>{t.about.title}</h2>
//           {t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
//         </section>

//         <section id="mision">
//           <h2>{t.mission.title}</h2>
//           {t.mission.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
//         </section>

//         <section id="vision">
//           <h2>{t.vision.title}</h2>
//           {t.vision.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
//         </section>

//         <section id="tecnologias">
//           <h2>{t.technologies.title}</h2>
//           <p>{t.technologies.description}</p>
//           <ul className="row list-unstyled">
//             {t.technologies.items.map((item, i) => (
//               <li key={i} className="col-6 col-md-3 text-center border p-2">{item}</li>
//             ))}
//           </ul>
//         </section>

//         <section id="proyectos">
//           <h2>{t.projects.title}</h2>
//           <div>
//             <h3>{t.projects.debian.title}</h3>
//             <p>{t.projects.debian.description}</p>
//             <h3>{t.projects.printer.title}</h3>
//             {t.projects.printer.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
//           </div>
//         </section>

//         <section id="contacto">
//           <h2>{t.contact.title}</h2>
//           <p>{t.contact.description}</p>
//           <a href="https://github.com/ag-cris21" target="_blank" rel="noreferrer">{t.contact.github}</a>
//           <p>{t.contact.email}: crisaguilar212004@gmail.com</p>
//         </section>
//       </main>

//       <footer className="text-center py-3">
//         <p>{t.footer.text}</p>
//       </footer>
//     </div>
//   )
// }

// export default App
