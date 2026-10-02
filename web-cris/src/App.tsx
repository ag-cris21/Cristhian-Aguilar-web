import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Mid } from './mid/Mid'
import { useIdioma } from './hooks/useI18n'

function App() {
    const i18n = useIdioma()

    return (
        <>
            <NavBar language={i18n.language} setLanguage={i18n.setLanguage} traduzir={i18n.traducir} />
            
            
                <Mid traducir={i18n.traducir} obtenerArray={i18n.obtenerArray} obtenerLista={i18n.obtenerLista}/>
            
            
            <Footer t={i18n.traducir} />
        </>
    )
}

export default App