// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {ObtenerPockemonesAction,siguientePokeAction} from '../redux/pokeDucks'

// const Pokemones = ()=>{
//       const dispatch = useDispatch()
//       const pokemones = useSelector(store => store.pokemones.array)
//     return (
//         <div>
//         <h1>Pokemones!</h1>
//             <button onClick={() => dispatch(ObtenerPockemonesAction())}>Obtener</button>
//             <button onClick={() => dispatch(siguientePokeAction(20))}>Siguientes</button>   
//             <ul>
//                 {
//                     pokemones.map(item => (
//                         <li key={item.name}>{item.name}</li>
//                     ))
//                 }
//             </ul>
//     </div>
//     )
// }
// export default Pokemones


import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion,  siguientePokemonAccion, anteriorPokemonAccion} from '../redux/pokeDucks'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    return (
        <div>
            lista de pokemones 
            <br/>
            
            {
                pokemones.length === 0 && <button onClick={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            }
            {
                previous && <button onClick={() => dispatch(anteriorPokemonAccion())} >Anterior</button>
            } 
            {
                next && <button onClick={() => dispatch(siguientePokemonAccion())} >Siguiente</button>
            }
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name} >{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones