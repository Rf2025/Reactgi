import React from 'react'



//  return a div with your basic information for example name, number, date of birth and etc


class myDescription extends Component{

  render(){
return(
  <div>
  <h1>My description</h1>
  <h2>Name:<h3>Ricardo</h3></h2>
  <h2>Age:<h3>24</h3></h2>
  <h2>Date of birth:<h3>01/07/2000</h3></h2>
  <h2>Interest:<h3>Coding,Cars,Motorcylces</h3></h2>
</div>
)
  }




}

// Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ 
// to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

class App extends Component{
  constructor(props){
   super(props)
   this.state ={
    person:{}
   }
  }
}




// Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, 
// pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

 // THIS IS LOCATED IN THE BASICINFO.JSX




export default myDescription ;