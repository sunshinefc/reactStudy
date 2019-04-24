import React from 'React';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
const _mm=new MUtil();
const _user=new User();
class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pageNum:1
		}
	}
	componentDidMount(){
		this.loadUserList();
	}
	loadUserList(){
		_user.getUserList(this.state.pageNum).then(res=>{
			this.setState(res)
		},errMsg=>{
			_mm.errorTips(errMsg)
		});
	}
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title="用户列表"/>
				<div className="row">
					<div className="col-md-12">
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<th>id</th>
									<th>dd</th>
									<th>dd</th>
									<th>dd</th>
									<th>dd</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>1212</th>
									<th>1212</th>
									<th>1212</th>
									<th>1212</th>
									<th>1212</th>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
				<Pagination current={11} total={200} onChange={(pageNum)=>{console.log(pageNum)}}/>
			</div>
		);
	}

}
export default UserList;