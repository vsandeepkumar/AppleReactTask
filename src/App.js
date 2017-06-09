import React, { Component } from 'react';
import ListTile from './imgComponent';
import JSON from './mockData/data.json';

class App extends Component {
  constructor(){
    super();
    this.state={
      myList:JSON.mylist,
      reco:JSON.recommendations
    }
    this.myList = JSON.mylist;
    this.reco = JSON.recommendations;
    //console.log(this.myList);
    //console.log(this.reco);
  }
  _addFunction(ele,index){
    let mainArray = this.state.myList;
    let mainArray1 = this.state.reco;
    mainArray.push(ele);
    mainArray1.slice(0,index)
    console.log(mainArray);
    this.setState({
      myList: mainArray,
      reco: mainArray1
    })
  }
  _removeFunction(ele,index) {
    let mainArray1 = this.state.myList;
    let newArray = mainArray1.slice(index+1).concat(mainArray1.slice(0,index));
     this.setState({
      myList: newArray
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <div>
            <label className="lbheader">My List</label>
          </div>
          {
            this.state.myList.map((list,index)=>{
              return <ListTile key={list.id} imgSrc={list.img} imgTitle={list.title} remove removeFunction={this._removeFunction.bind(this,list,index)}/>
            })
          }
        </div>
        <div>
          <div>
            <label className="lbheader">My Recommendations</label>
          </div>
          {
            this.state.reco.map((list, index) => {
              return <ListTile key={list.id} imgSrc={list.img} imgTitle={list.title} add addFunction={this._addFunction.bind(this,list,index)}/>
            })
          }
        </div>
        <div className='titles'>
          {
            this.state.myList.map((list,index)=>{
              return <label key={index}>{list.title}</label>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
