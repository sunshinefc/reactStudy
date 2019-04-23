import React from 'react';
import PageTitle from "component/page-title/index.jsx";
import './index.css'
class Home extends React.Component{
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title="首页">
					<button className="btn btn-warning">错误</button>
				</PageTitle>

				<div className="row">
					<div className="col-md-12">
						body
					</div>
				</div>
			</div>
		)
	}
}

export default Home;