import { useState, useEffect } from 'react'

import traducciones from '../../data/translations.json'

// Función auxiliar idéntica a la de app.js: navega por ruta de puntos
function getText(data: any, path: string) {
    const partes = path.split(".")
    let valor = data

    for (let i = 0; i < partes.length; i++) {
        const parte = partes[i]
        if (valor && parte in valor) {
            valor = valor[parte]
        } else {
            return path
        }
    }
    return valor
}

// Idioma actual - empieza en español
const idiomaInicial = "es"

// Hook principal
export function useIdioma() {
    // Estado React para el idioma, inicializado en "es"
    const [language, setLanguage] = useState<string>("es")

    // Efecto solo en el montaje (no es necesario actualizar desde variable global)
    useEffect(() => {
    }, [])

    // Función para traducir un texto individual
    // Ejemplo: t('hero.title') → "Hola, Cristhian" (en español)
    function traducir(clave: string): string {
        // Buscar en el idioma actual usando getText con ruta completa "es.hero.title"
        const resultado = getText(traducciones, language + "." + clave)
        return resultado !== undefined && resultado !== null ? resultado : clave
    }

    // Función para obtener array de párrafos
    function obtenerArray(clave: string): string[] {
        const resultado = getText(traducciones, language + "." + clave)
        if (Array.isArray(resultado)) {
            return resultado
        }
        // Fallback a español
        const resultadoEs = getText(traducciones, idiomaInicial + "." + clave)
        return Array.isArray(resultadoEs) ? resultadoEs : []
    }

    // Función para obtener lista (mismo que obtenerArray)
    function obtenerLista(clave: string): string[] {
        return obtenerArray(clave)
    }

    // Retornar todo en un objeto
    return {
        language,
        setLanguage,
        traducir,
        obtenerArray,
        obtenerLista
    }
}