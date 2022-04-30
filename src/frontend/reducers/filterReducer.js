
const filterReducer = (state , action) => {
    switch(action.type){
        case 'CATEGORY':
            return { ...state , category:action.payload }
        default :
            return state;
        }
        
}

export { filterReducer }