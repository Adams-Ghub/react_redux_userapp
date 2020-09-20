 export const adduser=(user)=>{
     return{
     type:"ADD_USER",
     payload:user
    }
 }

 export const deleteuser=(user_id)=>{
     return{
         type:"DELETE_USER",
         paload:user_id
     }
 }