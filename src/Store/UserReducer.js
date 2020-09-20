
const initialstate={
    users:[
      {name:"Asamoah Gyan", email:"gyanasamoah3@gmail.com", gen:4},
      {name:"Andre Ayew", email:"andreayew@gmail.com", gen:6},
      {name:"Kasim Nuhu", email:"kasimnuhu@gmail.com", gen:7}
    ]
  }

const UserReducer=(state=initialstate, action)=>{
    switch(action.type){
      case "ADD_USER":
        const newUser = {
          name:action.payload.name,
          email:action.payload.email,
          gen:action.payload.gen}
        
        return{...state, users:[...state.users, newUser]};

      default:
        return state;
      }
    };
     
export default UserReducer;