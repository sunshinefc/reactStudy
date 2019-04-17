import React from 'react';
import ReactDOM from 'react-dom';

class A extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>Component A</div>
	}
}

class B extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>Component B</div>
	}
}
class Wrapper extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (<div>
			{this.props.children}
		</div>)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)