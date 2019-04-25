import React from 'React';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';
const _mm=new MUtil();
const _product=new Product();
class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
			pageNum:1
		}
	}
	componentDidMount(){
		this.loadProductList();
	}
	loadProductList(){
		_product.getProductList(this.state.pageNum).then(res=>{
			this.setState(res);
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
			this.loadProductList();
		})
	}
	render(){
		let tableHeads=[
			{name: '商品ID', width: '10%'},
			{name: '商品信息', width: '50%'},
			{name: '价格', width: '10%'},
			{name: '状态', width: '15%'},
			{name: '操作', width: '15%'}
		]
		return (
			<div id="page-wrapper">
				<PageTitle title="商品列表"/>
				<TableList tableHeads={tableHeads}>
					{
						this.state.list.map((product,index)=>{
							return (
								<tr key={index}>
									<td>{product.id}</td>
									<td>
										<p>{product.name}</p>
										<p>{product.subtitle}</p>
									</td>
									<td>￥{product.price}</td>
									<td>
										<span>{product.status==1?'在售':'已下架'}</span>
									</td>
									<td>
										<Link to={`/product/detail/${product.id}`}>查看详情</Link>
										<Link to={`/product/save/${product.id}`}>编辑</Link>

									</td>
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
export default ProductList;