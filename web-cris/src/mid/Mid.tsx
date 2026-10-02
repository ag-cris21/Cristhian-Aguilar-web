import { Inicio } from "./inicio";
import { SobreMi } from "./sobre-mi";
import { Tecnologias } from "./tecnologias";
import { Proyectos } from "./proyectos";
import { Contacto} from "./contacto";

export interface MidProps {
    traducir: (key: string) => string;
    obtenerArray: (key: string) => string[];
    obtenerLista: (key: string) => string[];
}

export const Mid = ({ traducir, obtenerArray, obtenerLista }: MidProps) => {
    return (
        <main className="container">
            
            <Inicio traducir={traducir} />
            
            <SobreMi traducir={traducir} obtenerArray={obtenerArray} />
            
           
            <Tecnologias traducir={traducir} obtenerLista={obtenerLista} />
            <Proyectos traducir={traducir} />
            
            <Contacto traducir={traducir} obtenerLista={obtenerLista} />
            
        </main>
    )
}