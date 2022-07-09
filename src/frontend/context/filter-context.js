import { createContext, useContext , useReducer, useState } from "react"
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

function FilterProvider( { children }){

        
    const [filterState , filterDispatch] = useReducer( filterReducer , { category:'All' });

    const [ searchQuery , setSearchQuery ] = useState('')

    

    return (
        <FilterContext.Provider value ={{ filterDispatch , filterState, searchQuery , setSearchQuery}}>
            
            { children }
        </FilterContext.Provider>
    )
}


const useFilter = () => useContext(FilterContext)

export { FilterProvider , useFilter }