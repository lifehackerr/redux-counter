const initialState = 0;
const changeNumber  = (state = initialState,action) =>{
    if(action.type === 'increment'){
        return state +1;
    }
    else if(action.type === 'decrement'){
        return state -1;
    }
    else{
        return state;
    }
}

export default changeNumber;