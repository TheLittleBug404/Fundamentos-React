//renderizado condicional
interface ConditionalRenderingProps {
    cargando: boolean;
    sesionIniciada: boolean;
}
export const ConditionalRendering = ({ cargando, sesionIniciada }: ConditionalRenderingProps) => {
    if (cargando) {
        return (<p>Cargando datos del sistema</p>)
    }
    return (
        <div>
            {
                sesionIniciada
                    ? <p>Panel de control activo</p>
                    : <h1>Por favor inicia sesion</h1>
            }
        </div>
    )
}
