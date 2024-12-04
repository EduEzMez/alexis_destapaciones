import "./header-style.css"

const Header = () => {
    const ZONAS = "AMBA Y CABA"
    const NUMERO_TEL = "11-6120-4658"
    const LLAMAR_WAPP = "https://wa.me/541161204658?text=Hola.%20Necesito%20su%20servicio%20de%20plomeria"
    const IMAGEN_PLO = "/images/plo.webp"

    
        
    return (
        <>
        <div className="header_contenedor">
            <p className="logo">PLOMERO 25HS</p>
            <h1 className="des-logo">El mejor servicio de plomeria y destapaciones para {ZONAS}</h1>
            {
                NUMERO_TEL != "11-6120-4658" ? 
                    (<p>Numero incorrecto</p>) :
                    (<p className="numero_telefono">{NUMERO_TEL}</p>)
            }
            <a className="letra_boton_wp" href={LLAMAR_WAPP} target="_black"><p className="boton_wp" >LLAMAR</p></a>
        </div>
        <div className="main_contenedor">
            <div className="frase_contenedor">
                <img className="imagen" src="/images/plo.webp" alt="Plomero" />
                <p>Especialistas en destapaciones de cañerías con maquinaria profesional y servicios completos de plomería para resolver cualquier problema de forma eficiente</p>
            </div>
        </div>
        <div className="servicios_contenedor">
            <div className="s_contenedor">
                <p className="icon">🚿</p>   
                <h3>PLOMERIA</h3>
                <p>Realizamos destapaciones de cañerías con máquina, reparaciones, instalaciones de agua, gas y desagües, además de mantenimiento integral de plomería.</p>
            </div>
            <div className="s_contenedor">
                <p className="icon">💧</p>
                <h3>DESTAPACIONES</h3>
                <p>Ofrecemos destapaciones con máquina para cañerías obstruidas, limpieza de desagües, mantenimiento preventivo y soluciones rápidas para sistemas sanitarios</p>
            </div>
            <div className="s_contenedor">
                <p className="icon">🌇</p>
                <h3>ZONAS</h3>
                <p>Brindamos destapaciones de cañerías y servicios de plomería con cobertura total en AMBA y CABA, garantizando atención rápida y profesional.</p>
            </div>
        </div>
        <div className="footer_contenedor">
            <p className="logo">PLOMERO 25HS</p>
            {
                NUMERO_TEL != "11-6120-4658" ? 
                    (<p>Numero incorrecto</p>) :
                    (<p className="numero_telefono">{NUMERO_TEL}</p>)
            }
            <a className="letra_boton_wp" href={LLAMAR_WAPP} target="_black"><p className="boton_wp" >LLAMANOS</p></a>
        </div>
        </>
    )
}

export default Header