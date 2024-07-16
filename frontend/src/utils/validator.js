import {isValidUsername} from '6pp'



export const usernmaeValidator = (usernmae) =>{
      
   if(isValidUsername(usernmae)===false){
    console.log(usernmae);
    return {isVaild : false , errorMessage : "error"}
   }
   isValidUsername(usernmae)
}
