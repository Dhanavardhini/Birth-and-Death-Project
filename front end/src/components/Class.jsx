


import React, { Component } from 'react'


export class Class extends Component {
    constructor(props){
                super(props);
                this.state={
                    cot:0
                };
            }
            incrementCount = ()=>{
                this.setState(prevState =>({
                    cot:prevState.cot+1
                }));
            };
  render() {
    return (
      <div>
                     <p>count:{this.state.cot}</p>
             <button onClick={this.incrementCount}>Increament</button>
        

      </div>
    )
  }
}

export default Class