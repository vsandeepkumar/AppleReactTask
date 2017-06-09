import React,{Component} from 'react';
let imgStyle = {
    flex:1
}
let altMsg = "Image not avilable"

export default class ListTile extends Component{
    _addFunction(ele){
        this.props.addFunction(ele);
    }
    _removeFunction(ele){
        this.props.removeFunction(ele);
    }
    render(){
        return(
            <div className='listTile'>
                <div>
                    <img style={imgStyle} alt={altMsg} src={this.props.imgSrc}/>
                </div>
                <div>
                    <div>
                        <label>{this.props.imgTitle}</label>
                    </div>
                    <div>
                        {
                            this.props.add ?
                                <button className='btns' onClick={this._addFunction.bind(this)}>Add</button>:
                                this.props.remove ?
                                <button className='btns' onClick={this._removeFunction.bind(this)}>Remove</button>:
                                ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}