export const signupreducer=(login_state,action)=>{
    switch (action.type) {
        case "LOGIN":
            return {...login_state, token:action.token, email:action.email,}
    
        case "LOGOUT":
                return {...login_state, token:null, email:null}
    
        default:
            return login_state;
    }
}