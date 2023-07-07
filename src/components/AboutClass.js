import { Component } from "react";

class AboutClass extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                name:"niraj",
                location:"sarn, bihar"
            }
        }
    }


    // componentDidMount(){
    //     this.timer=setInterval(()=>{
    //         console.log("nameste react")
    //     },1000)
    // }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
          //
        }
        if (this.state.count2 !== prevState.count2) {
          // code
        }
        console.log("Component Did Update");
      }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
   
   
    render(){
       
        const { count } = this.state;

        return (<>

        <h1>hello class based components</h1>
        <h2>{this.state.user.name}</h2>
        <h3>{this.state.user.location}</h3>
        
        
        </>)
    

    }
}
export default AboutClass