import React from 'react';
import ReactDOM from 'react-dom';

//组件的结合  1、纯组件的 2、容器的

class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'Rosen',
			age:18
		}
	}
	handleClick(){
		this.setState({
			age:this.state.age+1
		})
	}
	onValueChange(e){
		this.setState({
			age:e.target.value
		})
	}
	render(){
		return (
			<div>
				<h1>I am {this.state.name}</h1>
				<p>I am {this.state.age} years old!</p>
				<button onClick={(e)=>{this.handleClick(e)}}>加一岁</button>
				<input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Component/>,
	document.getElementById('app')
)