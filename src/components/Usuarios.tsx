import { useEffect, useState } from 'react'

interface Episode {
  id: number;
  airdate: string;        
  episode_number: number;
  image_path: string;     
  name: string;
  season: number;
  synopsis: string;
}
export const Usuarios = () => {
    const[usuarios,setUsuarios] = useState<Episode[]>([]);
    //useEffect con API, timers, eventos, web sockets,Listeners, Suscripciones
    useEffect(()=>{
        console.log("UseEffect")
        fetch("https://thesimpsonsapi.com/api/episodes")
        .then(response => response.json())
        .then(data =>{
            setUsuarios(data.results);
        })
    },[]);
    return (
        <>
            <h1>Usuarios</h1>
            {
                usuarios.map(
                    usuario =>(
                        <p key= {usuario.id}>
                            {usuario.name}
                        </p>
                    )
                )
            }
        </>
    )
}
