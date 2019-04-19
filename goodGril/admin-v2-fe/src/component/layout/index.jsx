import React from 'react';
import './theme.css'
//头部导航  侧边导航  子组件
class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="wrapper">
			test layout
		{/*
			<TopNav />
			<SideNav />
		*/}
				
				{this.props.children}

			</div>

		);
	}
}

export default Layout;