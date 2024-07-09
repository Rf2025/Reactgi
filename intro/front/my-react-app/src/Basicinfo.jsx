import React,{Component} from 'react'



const BasicInfo = ({ person }) => (
    <div>
      <p>{person.name}</p>
      <p>{person.profession}</p>
      <p>{person.age}</p>
      <p>{person.location}</p>
    </div>
  );
  

  class App extends Component{
    constructor(props){
    super(props)
      this.state ={
        person:{
          name:'ricardo',
          profession:"programmer",
          age: 24,
          interest: "coding"
        }
      }
    }
    render() {
        return (
          <div>
            <BasicInfo person={this.state.person} />
          </div>
        );
      }
    }
  

    export default BasicInfo;