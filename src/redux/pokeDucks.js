import axios from 'axios';
//constantes
// const dataInicial = {
//     array: [],
//     offset: 0
// }

const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    offset: 0
}

//types
// const Get_Pockemos_Success = 'Get_Pockemos_Success'
// const GET_POKE_NEXT_SUCCESS ='GET_POKE_NEXT_SUCCESS'

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const ANTERIOR_POKEMONES_EXITO = 'ANTERIOR_POKEMONES_EXITO'

//reducers 
// export default function pockeReducer(state = dataInicial, action){
//     switch (action.type) {
//         case Get_Pockemos_Success:
//             return {...state, array: action.payload }
//         case GET_POKE_NEXT_SUCCESS:
//                 return {...state, array: action.payload.array, offset: action.payload.offset }
//         default:
//             return state
//     }
// }

export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case ANTERIOR_POKEMONES_EXITO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//acciones
// export const ObtenerPockemonesAction = () => async (dispatch, getState) => {
//     try {
//         const {offset} = getState().pokemones
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=20`)
//         dispatch({
//             type: Get_Pockemos_Success,
//             payload: res.data.results
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const siguientePokeAction = (numero) => async(dispatch, getState) => {

//     const {offset} = getState().pokemones
//     const siguiente = offset + numero

//     console.log('siguiente: ', siguiente)
//     try {
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
//         dispatch({
//             type: GET_POKE_NEXT_SUCCESS,
//             payload: {
//                 array: res.data.results,
//                 offset: siguiente
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        console.log(res.data)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

    const {next} = getState().pokemones

    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonAccion = () => async (dispatch, getState) => {

    const {previous} = getState().pokemones

    try {
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}