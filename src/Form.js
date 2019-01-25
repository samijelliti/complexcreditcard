import React, {Component} from 'react';
import './Form.css';
import blue from './blue.jpg';
import mcvisa from './mcvisa.png';
import puce from './puce.jpg';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:'',
            keyword2:'',
            keyword3:'',
         }
    }
handelchange=(event)=>{
    this.setState({keyword:event.target.value})
}
handelchange2=(event)=>{
    this.setState({keyword2:event.target.value})
}
handelchange3=(event)=>{
    this.setState({keyword3:event.target.value})
   
}
numcar=(numcard)=>{
numcard=numcard.toString()
let knum =''
for(let i=0; i<16; i+=4){
    knum += numcard.slice(i, i+4)+ ' '
}
return knum
}
valcard=(testval)=>{
    testval=testval.toString()
    if(testval!=''){
        return testval.slice(0,2) +'/'+ testval.slice(2,4)
    }
}
nomcard=(longnom)=>{
    if(longnom.length>20){
        return longnom.toUpperCase().slice(0,20)
    }
else {
    return longnom.toUpperCase()
}
}


    render() { 
        return (<div>
            <div className="maincard">
            <p className="title1">CREDIT CARD</p>
            <img className="puce" src={puce}/>
            <div className="numcard">
                <p>{this.numcar(this.state.keyword)}</p>
            </div>
            <div className="valid">
                <div className="valid1">
                    <p>5422</p>
                    <p>Valid <br/>Thru</p>
    
                </div>
                <div>
                    <p>MONTH/YEAR<br/>{this.valcard(this.state.keyword2)}</p>
    
                </div>
                <img className="mastercard" src={mcvisa}/>
            </div>
            <p className="title2">{this.nomcard(this.state.keyword3)}</p>
    
        </div>
        
        <div className='formnum'>
        <h4>information</h4>
        <input type="text" onChange={this.handelchange}/>
        <input type="text" onChange={this.handelchange2}/>
        <input type="text" onChange={this.handelchange3}/>
        </div>  
        </div>);
    }
}
 
export default Form ;