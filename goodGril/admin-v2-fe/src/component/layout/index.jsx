import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';
import './theme.css'
//头部导航  侧边导航  子组件
class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="wrapper">
				<NavTop />
				<NavSide />
				{this.props.children}

			</div>
		);
	}
}

export default Layout;