import React from 'react';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import './category-select.scss'

const _mm=new MUtil();
const _product=new Product();
class CategorySelect extends React.Component{
	constructor(props){
		super(props);
		this.state={
			firstCategoryList:[],
			firstCategoryId:0,
			secondCategoryList:[],
			secondCategoryId:0
		}
	}
	//品类选择器
	componentDidMount(){
		this.loadFirstCategory();
	}
	//加载一级分类  传根把一级品类传过来  传一级品类 把二级品类传过来
	loadFirstCategory(){
		_product.getCategoryList().then(res=>{
			this.setState({
				firstCategoryList:res
			});
		},errMsg=>{
			_mm.errorTips(errMsg)
		})
	}
	//加载二级品类
	loadSecondCategory(){
		_product.getCategoryList(this.state.firstCategoryId).then(res=>{
			this.setState({
				secondCategoryList:res
			});
		},errMsg=>{
			_mm.errorTips(errMsg)
		})

	}
	//选择一级品类 一级品类改变，二级品类先清空
	onFirstCategoryChange(e){
		let newValue=e.target.value||0;
		this.setState({
			firstCategoryId:newValue,
			secondCategoryId:0,
			secondCategoryList:[]
		},()=>{
			//更新二级品类
			this.loadSecondCategory();
			//传给父组件
			this.onPropsCategoryChange();
		});

	}
	//选择二级品类
	onSecondCategoryChange(e){
		let newValue=e.target.value||0;
		this.setState({
			secondCategoryId:newValue,
			
		},()=>{
			this.onPropsCategoryChange();
		});

	}
	//传给父组件选中的结果
	onPropsCategoryChange(){
		//判断props里的回调函数存在
		let categoryChangeable=typeof this.props.onCategoryChange ==='function'
		//如果有二级品类
		if(this.state.secondCategoryId){
			categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId,this.state.firstCategoryId)
		}
		//如果有只有一级品类
		else{
			categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId,0)
		}

	}
	render(){
		return (
			<div className="col-md-10">
		      <select name=""  className="form-control cate-select"
		      	onChange={(e)=>this.onFirstCategoryChange(e)}>
		      	<option value="">请选择一级分类</option>
		      	{
		      		this.state.firstCategoryList.map(
		      			(category,index)=><option value={category.id} key={index}>{category.name}</option>
		      			)
		      	}
		      </select>
		      {
		      	this.state.secondCategoryList.length?
			      	(<select name=""  className="form-control cate-select"
			      		onChange={(e)=>this.onSecondCategoryChange(e)}>
			      	<option value="">请选择二级分类</option>
			      	{
			      		this.state.secondCategoryList.map(
			      			(category,index)=><option value={category.id} key={index}>{category.name}</option>
			      			)
			      	}
			      </select>):null
		      }
		      
		    </div>
		);
	}
}
export default CategorySelect;