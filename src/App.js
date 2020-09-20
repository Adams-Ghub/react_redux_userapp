import React from 'react';
import AddUserForm from './Components/AddUserForm';
import Users from './Components/Users';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      users:[
        {name:"Asamoah Gyan", email:"gyanasamoah3@gmail.com", gen:4},
        {name:"Andre Ayew", email:"andreayew@gmail.com", gen:6},
        {name:"Kasim Nuhu", email:"kasimnuhu@gmail.com", gen:7}
      ]
    }

    this.handleAddUser=this.handleAddUser.bind(this)
  }
  handleAddUser=(item)=>{
    this.setState({users:[...this.state.users, item]})
  }
  render(){
      return (
        <div className="App" style={{ display:'flex',
                                      flexDirection:"row"
                                    }}>

          <div 
            style={{margin:"10px",
                    padding:"15px",
                    width:"25vw",
                    backgroundColor:"#eeeeee" }} >
              <AddUserForm addUser={this.handleAddUser}/>                     
          </div>
          <div>
              {this.state.users.map((user, index)=>{
              return <Users key={index} name={user.name} email={user.email} gen={user.gen} />
               })
              }
          </div>
        </div>
      );
    }
}

export default App;
