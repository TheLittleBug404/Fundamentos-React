import { useEffect, useState } from 'react'

export const Titulo = () => {
    const [contador, setContador] = useState(0);
    //apenas se inicia la pagina se hace algo
    useEffect(() => {
        document.title = `Contador : ${contador}`;
    }, [contador]);
    //apenas se renderiza un compomente se ejecuta el useEffect
    useEffect(()=>{
        console.log("Hola");
    },[]);
    //useEffect con una API real
    
    return (
        <>
            <h1> {contador} </h1>
            <button
                onClick={
                    ()=>setContador(contador+1)
                }
            >
                +
            </button>
        </>
    )
}
