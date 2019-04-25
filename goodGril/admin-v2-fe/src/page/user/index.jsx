import React from 'react';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';
const _mm=new MUtil();
const _user=new User();
class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
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
			this.setState({
				list:[]
			});
			_mm.errorTips(errMsg)
		});
	}
	//页数发生变化的时候  setState异步函数  执行完之后执行一个函数
	onPageNumChange(pageNum){
		this.setState({
			pageNum:pageNum
		},()=>{
			this.loadUserList();
		})
	}
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title="用户列表"/>
				<TableList tableHeads={['ID','用户名','邮箱','电话','注册时间']}>
					{
						this.state.list.map((user,index)=>{
							return (
								<tr key={index}>
									<th>{user.id}</th>
									<th>{user.username}</th>
									<th>{user.email}</th>
									<th>{user.phone}</th>
									<th>{new Date(user.createTime).toLocaleString()}</th>
								</tr>
							);
						})
					}
				</TableList>
				<Pagination current={this.state.pageNum} 
					total={this.state.total} 
					onChange={(pageNum)=>this.onPageNumChange(pageNum)}/>
			</div>
		);
	}

}
export default UserList;