import { inicio } from './inicio'
import { sobreMi } from './sobreMi'
import { mision } from './mision'
import { tecnologias } from './tecnologias'
import { proyectos } from './proyectos'
import { contacto } from './contacto'


export const mid = () => {
  return (
    <main>
      <inicio/>
      <sobreMi/>
      <mision/>
      <tecnologias/>
      <proyectos/>
      <contacto/>
    </main>
  )
}
