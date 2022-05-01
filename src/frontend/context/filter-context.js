import { createContext, useContext } from "react"
import { useReducer } from "react"
import { filterReducer } from "../reducers/filterReducer"

const FilterContext = createContext(null)

function FilterProvider( { children }){

    const [filterState , filterDispatch] = useReducer( filterReducer , { category:'All' })

    return (
        <FilterContext.Provider value ={{ filterDispatch , filterState }}>
            { children }
        </FilterContext.Provider>
    )
}


const useFilter = () => useContext(FilterContext)

export { FilterProvider , useFilter }