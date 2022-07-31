import * as types from "../../Action/Auth/AuthConstant";


export function userLoginReducer(state = [], action) {
    console.log(action);
    switch (action.type) {
        case types.GET_LOGIN:
            return { loading: true, action };
     
       
        default:
            return state;
    }
}


export function addReducer(state = [], action) {

    let response = action.value;
     console.log(response,state);
    switch (action.type) {
        case types.ADD_PRODUCT:
           
if(state && state.length>0){
    var data =  state.map(obj => {
        if(obj.ProductName===response.ProductName){
        console.log("a");
          return {...obj, ProductCategory: response.ProductCategory , ProductQuantity: response.ProductQuantity}
          
        }
        return obj


     

      }
      );
      console.log(data[0]);
      return [...state,response];

}else{
    console.log("vcd")
  return [state,response] 

}
              
         
            
        
            default:
                return state;
    }
   
}

export function logoutReducer(state = userLoginReducer, action) {
    let response = action.response;
    switch (action.type) {
        case types.LOGOUT:
            return {};
       
        default:
            return state;
    }
}