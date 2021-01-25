const listReducer = (state, action) => {
    if(action.type === 'REMOVE_ITEM') { 
        return { 
            ...state,
            person: state.person.filter(item => item.id !== action.id)
        }      

        
    }
      
}


export default reducer