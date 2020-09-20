import React from 'react'

const Users=({name,email,gen})=>{
    
        return(
            <div>
                <div>Name:{name}</div>
                <div>Email:{email}</div>
                <div>Gen:{gen}</div>
                <hr/>
            </div>
        )
        
}
export default Users;