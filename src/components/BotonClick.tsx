import React from 'react'

export const BotonClick = () => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log("Coordenada X del click : ",e.clientX,e.clientY);
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("Texto ",e.target.value);
    };
  return (
    <div>
        <input 
            type='text'
            onChange={handleInputChange} 
            placeholder='Escribe aca .....'
        />
        <button
            onClick={handleClick}
        >
            Enviar
        </button>
    </div>
  )
}
