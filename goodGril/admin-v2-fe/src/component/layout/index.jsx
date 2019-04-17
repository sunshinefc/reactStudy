import React from 'react';

//头部导航  侧边导航  子组件
class layout extends React.Component{
	constructor(){
		super(props);
	}
	render(){
		return (
			<div id="wrapper">
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