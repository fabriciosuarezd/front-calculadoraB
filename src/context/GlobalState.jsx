import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

//Estado Inicial
const initialState = {
    movimientos : [
        {id:1, descripcion:'Flores', importe: -20},
        {id:2, descripcion:'Sabritas', importe: -25},
        {id:3, descripcion:'Salario', importe: 500},
        {id:4, descripcion:'Fotos', importe: 600},
    ],
    loading: true,
    error:null
}

//Creamos el contexto
export const  GlobalContext = createContext(initialState)

//Creamos el Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(<GlobalContext.Provider value={{
        movimientos: state.movimientos
    }}>
        {children}
    </GlobalContext.Provider>)
}