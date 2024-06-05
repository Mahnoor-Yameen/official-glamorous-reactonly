export const AccountReducer=(account_state,action)=>{
    switch (action.type) {
        case "LOGIN":
            return {...account_state, token:action.token, email:action.email, people:'user'}
    
        case "LOGOUT":
                return {...account_state, token:null, email:null, people:'guest'}
    
        default:
            return account_state;
    }
}