import "./header-style.css"

const Header = () => {
    const ZONAS = "AMBA Y CABA"
    const NUMERO_TEL = 1161204658
    const LLAMAR_WAPP = "https://wa.me/1161204658?text=Hola.%20Necesito%20su%20servicio%20de%20plomeria"

    
        
    return (
        <>
        <div className="header_contenedor">
            <p className="logo">PLOMERO 25HS</p>
            <h1 className="des-logo">El mejor servicio de plomeria y destapaciones para {ZONAS}</h1>
            {
                NUMERO_TEL != 1161204658 ? 
                    (<p>Numero incorrecto</p>) :
                    (<p className="numero_telefono">{NUMERO_TEL}</p>)
            }
            <a className="letra_boton_wp" href={LLAMAR_WAPP} target="_black"><p className="boton_wp" >LLAMAR</p></a>
        </div>
        <div className="main_contenedor">
            <div className="frase_contenedor">
                <p>Especialistas en destapaciones de cañerías con maquinaria profesional y servicios completos de plomería para resolver cualquier problema de forma eficiente</p>
            </div>
        </div>
        </>
    )
}

export default Header