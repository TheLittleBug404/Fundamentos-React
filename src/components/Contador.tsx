import { useState } from 'react'

export const Contador = () => {
    //let contador: number = 0;
    const [contador, setContador] = useState<number>(0);
    const [mostrar,setMostrar] = useState<boolean>(false);
    const incrementar = () => {
        let numero = contador + 1;
        setContador(numero);
        console.log(numero);
        console.log(contador);
    }
    const reducir = () => setContador((c) => c - 1);
    return (
        <div>
            <p>VALOR: {contador} </p>
            <button
                onClick={incrementar}
            > + 1 </button>
            <button
                onClick={reducir}
            > - 1</button>

            <button
                onClick={()=> setMostrar(!mostrar)}
            >
                Mostrar
            </button>
            {
                mostrar && <p>Hola</p>
            }
        </div>
    )
}
